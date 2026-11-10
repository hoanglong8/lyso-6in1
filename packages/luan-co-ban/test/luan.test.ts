import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { buildSnapshot } from "@lyso/calendar-vn";
import { buildTuVi } from "@lyso/engine-tuvi";
import { buildBazi } from "@lyso/engine-bazi";
import { castCoins, castMaiHoaTime, interpret } from "@lyso/engine-kinhdich";
import { buildLucNhamFromSnapshot } from "@lyso/engine-lucnham";
import { buildKyMonFromSnapshot } from "@lyso/engine-kymon";
import { buildThaiAtFromSnapshot } from "@lyso/engine-thaiat";
import { DUNG_THAN, QUE, VIEC_KYMON, luanBazi, luanKinhDich, luanKyMon, luanLucNham, luanThaiAt, luanTuVi, type LuanCoBan } from "../src";

let seed = 9;
const r = () => ((seed = (seed * 1103515245 + 12345) % 2 ** 31) / 2 ** 31);
const snaps = Array.from({ length: 60 }, () =>
  buildSnapshot({ date: { y: 1940 + Math.floor(r() * 80), m: 1 + Math.floor(r() * 12), d: 1 + Math.floor(r() * 28) }, calendar: "solar", time: { h: Math.floor(r() * 24), mi: 0 } }),
);
const ok = (l: LuanCoBan) => {
  expect(l.phan.length).toBeGreaterThan(1);
  for (const p of l.phan) for (const y of p.items) expect(y.text.trim().length, p.title).toBeGreaterThan(5);
  expect(JSON.stringify(l)).not.toMatch(/undefined|NaN/);
};

describe("Luận theo kinh nghiệm video (Tử vi)", () => {
  const chart = (s: (typeof snaps)[number], school: "vn-thien-luong" | "bac-phai", g: "nam" | "nu" = "nam") => buildTuVi(s, g, { school, leapMonth: "split15" }, { viewYear: 2026 });
  it("Thiên Lương có mục 389 TỬ VI, Bắc phái có mục Đào Thanh Tín, phái khác thì không", () => {
    for (const s of snaps) {
      const vn = luanTuVi(chart(s, "vn-thien-luong"));
      const bac = luanTuVi(chart(s, "bac-phai", "nu"));
      expect(vn.phan.some((p) => p.title.includes("389 TỬ VI"))).toBe(true);
      expect(bac.phan.some((p) => p.title.includes("Đào Thanh Tín"))).toBe(true);
      expect(vn.phan.some((p) => p.title.includes("Đào Thanh Tín"))).toBe(false);
      expect(vn.phan.some((p) => p.title.includes("Học Quán"))).toBe(true);
      expect(bac.phan.some((p) => p.title.includes("Học Quán"))).toBe(false);
      const np = luanTuVi(buildTuVi(s, "nam", { school: "nam-phai", leapMonth: "split15" }, { viewYear: 2026 }));
      expect(np.phan.some((p) => /389|Đào Thanh Tín/.test(p.title))).toBe(false);
      for (const l of [vn, bac]) for (const p of l.phan.filter((x) => /389|Đào Thanh Tín|thầy|Học Quán|Phong Thủy|Đông Phương|Khâm Thiên/.test(x.title))) {
        for (const y of p.items) expect(y.canCu?.length, y.text).toBeGreaterThan(2);
        expect(new Set(p.items.map((y) => y.text)).size, p.title).toBe(p.items.length);
      }
    }
  });
  it("Khâm Thiên (Bắc phái): tự hóa hướng tâm ở Mệnh = can Mệnh hóa sao ở Thiên Di; không hiện ở phái khác", () => {
    let gap = 0;
    for (const s of snaps) {
      const c = chart(s, "bac-phai");
      const l = luanTuVi(c);
      const kt = l.phan.find((p) => p.title.startsWith("Khâm Thiên"));
      const menh = c.palaces.find((p) => p.chi === c.menhChi)!;
      for (const h of menh.phiHoa ?? []) {
        if (h.toChi !== (c.menhChi + 6) % 12) continue;
        gap++;
        expect(kt?.items.some((y) => y.text.startsWith(`Mệnh hóa ${h.mutagen} hướng tâm`))).toBe(true);
      }
      expect(luanTuVi(chart(s, "vn-thien-luong")).phan.some((p) => p.title.startsWith("Khâm Thiên"))).toBe(false);
    }
    expect(gap).toBeGreaterThan(0);
  });
  it("Phú đợt 4: Nhật xuất Phù Tang ↔ Thái Dương ở Mệnh tại Mão", () => {
    for (const s of snaps) for (const sc of ["vn-thien-luong", "bac-phai"] as const) {
      const c = chart(s, sc);
      const m = c.palaces.find((p) => p.chi === c.menhChi)!;
      const want = m.chi === 3 && m.majorStars.some((x) => x.name === "Thái Dương");
      const got = luanTuVi(c).phan.some((p) => p.items.some((y) => y.text.includes("Nhật xuất Phù Tang")));
      expect(got).toBe(want);
    }
  });
  it("Thuận/nghịch lý trong luận khớp nhãn của engine", () => {
    for (const s of snaps) {
      const c = chart(s, "vn-thien-luong");
      const t = luanTuVi(c).phan.find((p) => p.title.startsWith("Khung lá số"))!.items[0]!.text;
      expect(t.startsWith(c.amDuongMenh!)).toBe(true);
    }
  });
  it("Bắc phái: lưu niên xoay cung đúng (lưu Tài cách Mệnh lưu 8 cung)", () => {
    const c = chart(snaps[0]!, "bac-phai");
    const t = luanTuVi(c).phan.find((p) => p.title.startsWith("Vận hạn") && p.title.includes("Đào Thanh Tín"))!.items.find((y) => y.text.startsWith("Lưu niên"))!.text;
    const ORDER = ["Mệnh", "Phụ Mẫu", "Phúc Đức", "Điền Trạch", "Quan Lộc", "Nô Bộc", "Thiên Di", "Tật Ách", "Tài Bạch", "Tử Tức", "Phu Thê", "Huynh Đệ"];
    const lm = c.vanHan!.luuThaiTue.chi;
    const want = ORDER[(((lm + 8 - c.menhChi) % 12) + 12) % 12];
    expect(t).toContain(`lưu Tài Bạch ở ${want} gốc`);
  });
});

describe("Luận cơ bản", () => {
  it("Tử vi: mọi phái, mọi lá số", () => {
    for (const s of snaps) for (const school of ["vn-thien-luong", "nam-phai", "trung-chau", "bac-phai"] as const) ok(luanTuVi(buildTuVi(s, r() < 0.5 ? "nam" : "nu", { school, leapMonth: "split15" }, { viewYear: 2026 })));
  });
  it("Bát tự", () => {
    for (const s of snaps) ok(luanBazi(buildBazi(s, "nam", { luuNienYears: [2026] }), 2026));
  });
  it("Kinh dịch: 64 quẻ đủ dữ liệu; gieo xu và Mai Hoa, mọi loại việc", () => {
    expect(QUE).toHaveLength(64);
    for (const s of snaps.slice(0, 20)) {
      for (const viec of Object.keys(DUNG_THAN) as (keyof typeof DUNG_THAN)[]) ok(luanKinhDich(interpret(castCoins(r), s.ganzhi.day), viec));
      ok(luanKinhDich(interpret(castMaiHoaTime(s), s.ganzhi.day)));
    }
  });
  it("Lục Nhâm, Kỳ môn, Thái ất", () => {
    for (const s of snaps) {
      ok(luanLucNham(buildLucNhamFromSnapshot(s)));
      for (const v of [undefined, ...Object.keys(VIEC_KYMON)] as (keyof typeof VIEC_KYMON | undefined)[]) ok(luanKyMon(buildKyMonFromSnapshot(s), v));
      for (const ke of ["nien", "nguyet", "nhat", "thoi"] as const) ok(luanThaiAt(buildThaiAtFromSnapshot(s, ke)));
    }
  });
});

/** Đối chiếu Thoán từ với sách (chỉ chạy khi có văn bản sách trên máy; văn bản sách không đưa vào repo). */
const SACH = process.env.SACH_KINHDICH ?? "/home/claude/sach-thamkhao/kinhdich-giai-nghia-64-que-full.txt";
describe.skipIf(!existsSync(SACH))("Thoán từ — đối chiếu 'Giải nghĩa 64 quẻ Kinh dịch'", () => {
  it("61/64 câu khớp; 3 câu lệch do sách in sai hoặc đọc khác, đã xét từng câu", () => {
    const norm = (s: string) =>
      s.normalize("NFC").toLowerCase().replace(/[^a-zà-ỹđ]/g, "").replace(/[yýỳỷỹỵ]/g, (c) => ({ y: "i", ý: "í", ỳ: "ì", ỷ: "ỉ", ỹ: "ĩ", ỵ: "ị" })[c]!);
    const book = norm(readFileSync(SACH, "utf8"));
    // 11 Thái: sách in "tiểu vãn" (thiếu g); 47 Khốn: sách đọc 信 là "thân"; 51 Chấn: sách in "tiểu ngôn" (笑 đọc "tiếu")
    const known = new Set([11, 47, 51]);
    const miss = QUE.map((q, i) => ({ i: i + 1, parts: q.thoan.replace(/^[^:]+:\s*/, "").split(".").map(norm).filter(Boolean) }))
      .filter((q) => q.parts.some((p) => !book.includes(p)))
      .map((q) => q.i);
    expect(miss.sort((a, b) => a - b)).toEqual([...known]);
  });
});

describe("Phú Tử vi", () => {
  it("Cự Môn ở Mệnh tại Tý/Ngọ thì có câu 'thạch trung ẩn ngọc', ngược lại thì không", () => {
    let seen = 0;
    for (let y = 1960; y < 2000 && seen < 3; y++) for (let m = 1; m <= 12; m++) for (const h of [1, 5, 9, 13, 17, 21]) {
      const c = buildTuVi(buildSnapshot({ date: { y, m, d: 10 }, calendar: "solar", time: { h, mi: 0 } } as never), "nam", { school: "vn-thien-luong", leapMonth: "split15" });
      const menh = c.palaces.find((p) => p.chi === c.menhChi)!;
      const want = menh.majorStars.some((s) => s.name === "Cự Môn") && (menh.chi === 0 || menh.chi === 6);
      const got = !!luanTuVi(c).phan.find((p) => p.title.startsWith("Phú"))?.items.some((i) => i.text.includes("thạch trung ẩn ngọc"));
      expect(got).toBe(want);
      if (want) seen++;
    }
    expect(seen).toBeGreaterThan(0);
  });
});
