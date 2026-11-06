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
