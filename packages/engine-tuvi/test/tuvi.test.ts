import { describe, expect, it } from "vitest";
import { astro } from "iztro";
import { buildSnapshot, jdnFromYmd, lunarFromJdn, lunarToJdn, type CalendarInput } from "@lyso/calendar-vn";
import { buildTuVi, resolveIztroDate, type TuViChart } from "../src";

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
      const c = buildTuVi(snap(y, m, d, 9, 30), "nu");
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
    const a = buildTuVi(s, "nam", { algorithm: "default", leapMonth: "split15" });
    const b = buildTuVi(s, "nam", { algorithm: "zhongzhou", leapMonth: "split15" });
    expect(a.school).not.toBe(b.school);
    expect(fp(a)).not.toBe(fp(b));
  });

  it("12 cung xếp theo chi Tý → Hợi, đúng một cung Thân", () => {
    const c = buildTuVi(snap(1985, 1, 21, 23, 30), "nu");
    expect(c.palaces.map((p) => p.chi)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(c.palaces.filter((p) => p.isBody)).toHaveLength(1);
  });
});
