import { describe, expect, it } from "vitest";
import { SolarDay } from "tyme4ts";
import { jdnFromYmd, lunarFromJdn, lunarToJdn, tetDate, ymdFromJdn } from "../src";

/** Tết Nguyên đán theo lịch Việt Nam (UTC+7). Nguồn: lịch Việt Nam đã công bố, VnExpress, RFA. */
const TET_VN: [number, string][] = [
  [1968, "1968-01-29"], // miền Bắc (UTC+7); miền Nam dùng UTC+8 ăn Tết 30/1
  [1975, "1975-02-11"],
  [1985, "1985-01-21"], // sớm hơn Trung Quốc một tháng
  [1990, "1990-01-27"],
  [2000, "2000-02-05"],
  [2007, "2007-02-17"], // sớm hơn Trung Quốc một ngày
  [2020, "2020-01-25"],
  [2024, "2024-02-10"],
  [2025, "2025-01-29"],
  [2026, "2026-02-17"],
];

const iso = (r: { y: number; m: number; d: number }) =>
  `${r.y}-${String(r.m).padStart(2, "0")}-${String(r.d).padStart(2, "0")}`;

describe("Tết theo lịch Việt Nam", () => {
  it.each(TET_VN)("Tết %i", (y, expected) => {
    expect(iso(tetDate(y, 420))).toBe(expected);
  });
  it("Tết 1968 miền Nam (UTC+8) là 30/1", () => {
    expect(iso(tetDate(1968, 480))).toBe("1968-01-30");
  });
});

/**
 * Oracle: tyme4ts (thuật toán sxwnl) tính lịch Trung Quốc. Với cùng múi giờ UTC+8, thuật toán của
 * ta phải ra cùng kết quả. Hai ngoại lệ đã biết, có giải thích:
 *  - Trước 1929 Trung Quốc tính lịch theo giờ địa phương Bắc Kinh (UTC+7:45:40), không phải UTC+8;
 *    vì vậy chỉ so từ 1929.
 *  - Tháng 7/2097: điểm sóc rơi đúng 00:00:15 giờ Bắc Kinh 8/8/2097; sai lệch vài giây do ngoại suy ΔT
 *    giữa hai thư viện. Ca biên hợp lệ, không phải lỗi thuật toán.
 */
const KNOWN_BORDERLINE = ["2097-08", "2097-09"];

describe("Đối chiếu thuật toán với tyme4ts (lịch Trung Quốc, UTC+8) 1929–2099", () => {
  it("khớp từng ngày", () => {
    const from = jdnFromYmd(1929, 1, 1);
    const to = jdnFromYmd(2099, 12, 31);
    const mismatches: string[] = [];
    for (let j = from; j <= to; j++) {
      const { y, m, d } = ymdFromJdn(j);
      const ld = SolarDay.fromYmd(y, m, d).getLunarDay();
      const lm = ld.getLunarMonth();
      const ours = lunarFromJdn(j, 480);
      if (KNOWN_BORDERLINE.includes(iso({ y, m, d }).slice(0, 7))) continue;
      if (ours.year !== lm.getYear() || ours.month !== lm.getMonth() || ours.leap !== lm.isLeap() || ours.day !== ld.getDay()) {
        mismatches.push(`${iso({ y, m, d })}: ta ${ours.year}/${ours.leap ? "N" : ""}${ours.month}/${ours.day}, tyme4ts ${ld.toString()}`);
      }
    }
    expect(mismatches.slice(0, 20)).toEqual([]);
  });
});

describe("Âm lịch Việt Nam UTC+7, 1900–2100", () => {
  it("đổi qua đổi lại không mất ngày, tháng dài 29–30 ngày", () => {
    const from = jdnFromYmd(1900, 2, 1);
    const to = jdnFromYmd(2100, 12, 31);
    let prev = lunarFromJdn(from - 1, 420);
    for (let j = from; j <= to; j++) {
      const l = lunarFromJdn(j, 420);
      expect(l.monthLength === 29 || l.monthLength === 30).toBe(true);
      if (l.day !== 1) expect(l.day).toBe(prev.day + 1);
      expect(lunarToJdn(l.year, l.month, l.day, l.leap, 420)).toBe(j);
      prev = l;
    }
  });

  it("ngày âm không tồn tại trả về null", () => {
    expect(lunarToJdn(2025, 13, 1)).toBeNull();
    expect(lunarToJdn(2024, 5, 1, true)).toBeNull(); // 2024 không nhuận tháng 5
  });
});
