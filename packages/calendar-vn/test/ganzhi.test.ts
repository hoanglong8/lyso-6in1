import { describe, expect, it } from "vitest";
import { SolarTime } from "tyme4ts";
import { buildSnapshot, CAN_HAN, CHI_HAN, dayGanzhi, jdnFromYmd, nextSunLongitude, yearGanzhi, type GanZhi } from "../src";

const han = (g: GanZhi) => `${CAN_HAN[g.can]}${CHI_HAN[g.chi]}`;

/** Tứ trụ của ta cho giờ đồng hồ Bắc Kinh (ép UTC+8) để so với tyme4ts. */
function oursAtBeijing(y: number, m: number, d: number, h: number, mi: number) {
  const s = buildSnapshot(
    { date: { y, m, d }, calendar: "solar", time: { h, mi }, place: { lat: 39.9, lon: 116.4 }, utcOffsetOverrideMinutes: 480 },
    { dayBoundary: "ty23", useTrueSolarTime: false, lunarTzMode: "historical" },
  );
  return [s.ganzhi.yearBazi, s.ganzhi.monthBazi, s.ganzhi.day, s.ganzhi.hour].map(han).join(" ");
}

function tyme(y: number, m: number, d: number, h: number, mi: number) {
  return SolarTime.fromYmdHms(y, m, d, h, mi, 0).getLunarHour().getEightChar().toString();
}

describe("Can chi cơ bản", () => {
  it("mốc đã biết", () => {
    expect(yearGanzhi(1984).name).toBe("Giáp Tý");
    expect(yearGanzhi(2026).name).toBe("Bính Ngọ");
    expect(dayGanzhi(jdnFromYmd(2000, 1, 1)).name).toBe("Mậu Ngọ");
  });
});

describe("Tứ trụ Bát tự khớp tyme4ts", () => {
  it("mẫu đều 1930–2090, nhiều giờ trong ngày", () => {
    const bad: string[] = [];
    const hours = [0, 3, 7, 11, 13, 17, 21];
    let i = 0;
    for (let j = jdnFromYmd(1930, 1, 1); j <= jdnFromYmd(2090, 12, 31); j += 11) {
      const dt = new Date((j - 2440587.5) * 86400000 + 43200000);
      const [y, m, d] = [dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate()];
      const h = hours[i++ % hours.length] as number;
      const a = oursAtBeijing(y, m, d, h, 30);
      const b = tyme(y, m, d, h, 30);
      if (a !== b) bad.push(`${y}-${m}-${d} ${h}:30 ta ${a} | tyme4ts ${b}`);
    }
    expect(bad).toEqual([]);
  });

  it("trụ tháng đổi đúng lúc giao tiết (±2 phút), 1950–2050", () => {
    const bad: string[] = [];
    // các tiết (không phải trung khí): 315°, 345°, 15°, … bước 30°
    for (let year = 1950; year < 2050; year++) {
      for (let k = 0; k < 12; k++) {
        const longitude = (315 + 30 * k) % 360;
        const term = nextSunLongitude(longitude, new Date(Date.UTC(year, 0, 1)), 370);
        if (term.getUTCFullYear() !== year) continue;
        for (const shift of [-2, 2]) {
          const w = new Date(term.getTime() + (shift + 480) * 60000);
          const args = [w.getUTCFullYear(), w.getUTCMonth() + 1, w.getUTCDate(), w.getUTCHours(), w.getUTCMinutes()] as const;
          if (args[3] === 23) continue;
          const a = oursAtBeijing(...args).split(" ").slice(0, 2).join(" ");
          const b = tyme(...args).split(" ").slice(0, 2).join(" ");
          if (a !== b) bad.push(`${args.join("-")} ta ${a} | tyme4ts ${b}`);
        }
      }
    }
    expect(bad).toEqual([]);
  });
});
