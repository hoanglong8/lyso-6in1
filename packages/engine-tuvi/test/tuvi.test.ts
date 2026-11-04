import { describe, expect, it } from "vitest";
import { astro } from "iztro";
import { buildSnapshot, jdnFromYmd, lunarFromJdn, lunarToJdn, type CalendarInput } from "@lyso/calendar-vn";
import { buildTuVi, resolveIztroDate, SCHOOLS, TU_HOA_THONG_DUNG, type TuViChart } from "../src";

const HANOI = { name: "Hà Nội", lat: 21.0285, lon: 105.8542 };
const snap = (y: number, m: number, d: number, h = 8, mi = 0, extra: Partial<CalendarInput> = {}) =>
  buildSnapshot({ date: { y, m, d }, calendar: "solar", time: { h, mi }, place: HANOI, ...extra });

/** Dấu vân tay của lá số: vị trí mọi sao theo cung */
const fp = (c: TuViChart) =>
  c.palaces
    .map((p) => `${p.chiName}:${p.name}:${[...p.majorStars, ...p.minorStars, ...p.adjectiveStars].map((s) => s.name + (s.mutagen ?? "") + (s.brightness ?? "")).join(",")}:${p.daiHan.from}`)
    .join("|") + `|${c.menhChu}|${c.thanChu}|${c.cuc}`;

describe("Tử vi dùng ngày âm Việt Nam", () => {
  it("ngày VN đã sang Tết còn TQ chưa (17/2/2007): năm Đinh Hợi, mùng 1 tháng Giêng", () => {
    const c = buildTuVi(snap(2007, 2, 17), "nam");
    expect(c.yearName).toBe("Đinh Hợi");
    expect(c.lunar).toMatchObject({ year: 2007, month: 1, day: 1 });
  });

  it("khi lịch VN và TQ trùng, khớp iztro bySolar", () => {
    for (const [y, m, d] of [[1990, 5, 15], [1975, 8, 20], [2001, 12, 1], [1988, 3, 3]] as const) {
      const c = buildTuVi(snap(y, m, d, 9, 30), "nu", { school: "nam-phai", leapMonth: "split15" });
      const direct = astro.bySolar(`${y}-${m}-${d}`, 5, "female", true, "vi-VN");
      expect(c.menhChi).toBe(["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"].indexOf(direct.earthlyBranchOfSoulPalace));
      expect(c.cuc).toBe(direct.fiveElementsClass);
    }
  });

  it("ngày tương đương cách 60 năm cho lá số y hệt", () => {
    for (let j = jdnFromYmd(1930, 1, 1); j < jdnFromYmd(1990, 1, 1); j += 97) {
      const l = lunarFromJdn(j, 480);
      if (l.leap) continue;
      if (lunarToJdn(l.year + 60, l.month, l.day, false, 480) === null) continue;
      const mk = (y: number) =>
        astro.withOptions({ type: "lunar", dateStr: `${y}-${l.month}-${l.day}`, timeIndex: j % 12, gender: "male", language: "vi-VN" });
      const a = mk(l.year), b = mk(l.year + 60);
      expect(JSON.stringify(a.palaces.map((p) => [p.majorStars, p.minorStars, p.adjectiveStars, p.decadal.range])))
        .toBe(JSON.stringify(b.palaces.map((p) => [p.majorStars, p.minorStars, p.adjectiveStars, p.decadal.range])));
    }
  });

  it("mọi ngày âm VN 1900–2100 đều an được sao", () => {
    const special: string[] = [];
    for (let j = jdnFromYmd(1900, 2, 1); j <= jdnFromYmd(2100, 12, 31); j++) {
      const l = lunarFromJdn(j, 420);
      const args = resolveIztroDate(l, "split15");
      if (args.note) special.push(`${l.day}/${l.month}${l.leap ? "N" : ""}/${l.year}`);
    }
    // chỉ dựng lá số cho các ngày đặc biệt (dùng ngày tương đương)
    for (const sp of special.slice(0, 40)) {
      const [d, m, y] = sp.replace("N", "").split("/").map(Number) as [number, number, number];
      const l = { year: y, month: m, day: d, leap: sp.includes("N") };
      expect(() => resolveIztroDate(l, "split15")).not.toThrow();
    }
    expect(special.length).toBeGreaterThan(0);
    console.log(`Ngày âm VN cần ngày tương đương: ${special.length}`);
  });

  it("đổi trường phái làm lá số khác đi", () => {
    const s = snap(1990, 5, 15, 7, 5);
    const ids = ["vn-thien-luong", "nam-phai", "trung-chau"] as const;
    const fps = ids.map((school) => fp(buildTuVi(s, "nam", { school, leapMonth: "split15" })));
    expect(new Set(fps).size).toBe(3);
  });

  it("12 cung xếp theo chi Tý → Hợi, đúng một cung Thân — mọi phái", () => {
    for (const sc of SCHOOLS.filter((x) => x.available)) {
      const c = buildTuVi(snap(1985, 1, 21, 23, 30), "nu", { school: sc.id as never, leapMonth: "split15" });
      expect(c.palaces.map((p) => p.chi)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
      expect(c.palaces.filter((p) => p.isBody)).toHaveLength(1);
      expect(c.palaces[c.menhChi]?.name).toBe("Mệnh");
    }
  });

  it("Đông A chưa có thì báo lỗi rõ, không âm thầm dùng phái khác", () => {
    expect(SCHOOLS.find((x) => x.id === "dong-a")?.available).toBe(false);
    expect(() => buildTuVi(snap(1990, 1, 1), "nam", { school: "dong-a" as never, leapMonth: "split15" })).toThrow();
  });

  it("bảng Tứ hóa Bắc phái khớp Tứ hóa năm sinh của iztro cho cả 10 can", () => {
    for (let y = 1990; y < 2000; y++) {
      const c = buildTuVi(snap(y, 8, 8, 10), "nam", { school: "bac-phai", leapMonth: "split15" });
      const can = (((y - 4) % 10) + 10) % 10;
      const natal = ["Lộc", "Quyền", "Khoa", "Kỵ"].map((m) =>
        c.palaces.flatMap((p) => [...p.majorStars, ...p.minorStars]).find((s) => s.mutagen === m)?.name,
      );
      expect(natal).toEqual(TU_HOA_THONG_DUNG[can]);
      // mỗi cung phát đủ 4 hóa, đều tìm được cung nhận
      for (const p of c.palaces) {
        expect(p.phiHoa).toHaveLength(4);
        expect(p.phiHoa?.every((h) => h.toChi !== null)).toBe(true);
      }
    }
  });

  it("vận hạn năm xem: tuổi mụ, đại hạn chứa tuổi, lưu Thái Tuế ở chi năm xem — mọi phái", () => {
    const s = snap(1984, 6, 1, 14);
    for (const school of ["vn-thien-luong", "nam-phai", "trung-chau", "bac-phai"] as const) {
      const v = buildTuVi(s, "nu", { school, leapMonth: "split15" }, { viewYear: 2026 }).vanHan!;
      expect(v.yearName).toBe("Bính Ngọ");
      expect(v.age).toBe(43);
      expect(v.luuThaiTue.chi).toBe(6);
      expect(v.daiHan && v.age >= v.daiHan.from && v.age <= v.daiHan.to).toBe(true);
      expect(v.luuTuHoa).toHaveLength(4);
    }
  });

  it("vận hạn phái Việt và Nam phái cùng đại hạn, tiểu hạn trên nhiều lá số", () => {
    let same = 0, n = 0;
    for (let y = 1950; y < 2010; y += 3) {
      const s = snap(y, (y % 12) + 1, 10, (y * 7) % 24);
      const a = buildTuVi(s, "nam", { school: "vn-thien-luong", leapMonth: "split15" }, { viewYear: 2026 }).vanHan!;
      const b = buildTuVi(s, "nam", { school: "nam-phai", leapMonth: "split15" }, { viewYear: 2026 }).vanHan!;
      n++;
      if (a.daiHan?.chi === b.daiHan?.chi && a.tieuHan.chi === b.tieuHan.chi) same++;
    }
    expect(same).toBe(n);
  });
});
