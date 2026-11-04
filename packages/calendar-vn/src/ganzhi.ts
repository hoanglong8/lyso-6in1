/** Can chi năm, tháng, ngày, giờ. Chỉ số can 0–9 (Giáp…Quý), chi 0–11 (Tý…Hợi). */
import { canChiName } from "./names";

export interface GanZhi {
  can: number;
  chi: number;
  /** Vị trí trong Lục thập hoa giáp, 0 = Giáp Tý */
  index60: number;
  name: string;
}

const mod = (a: number, n: number) => ((a % n) + n) % n;

export function ganzhi(can: number, chi: number): GanZhi {
  const c = mod(can, 10);
  const z = mod(chi, 12);
  // index60 thỏa index60 ≡ c (mod 10) và ≡ z (mod 12)
  const index60 = mod(6 * c - 5 * z, 60);
  return { can: c, chi: z, index60, name: canChiName(c, z) };
}

/** Can chi của một năm (âm lịch hoặc năm tính từ Lập xuân). Năm 1984 là Giáp Tý. */
export function yearGanzhi(year: number): GanZhi {
  return ganzhi(year - 4, year - 4);
}

/** Can chi ngày theo JDN (ngày địa phương). 2000-01-01 là Mậu Ngọ. */
export function dayGanzhi(jdn: number): GanZhi {
  return ganzhi(jdn + 9, jdn + 1);
}

/** Can của tháng Dần (tháng Giêng) theo can năm — phép "Ngũ hổ độn". */
export function firstMonthCan(yearCan: number): number {
  return mod((yearCan % 5) * 2 + 2, 10);
}

/** Can chi tháng âm lịch (dùng cho Tử vi): tháng m (1–12) của năm có can `yearCan`. */
export function lunarMonthGanzhi(yearCan: number, month: number): GanZhi {
  return ganzhi(firstMonthCan(yearCan) + (month - 1), month + 1);
}

/**
 * Can chi tháng theo tiết (dùng cho Bát tự): `sector` 0 = tháng Dần (từ Lập xuân 315°),
 * 1 = tháng Mão (từ Kinh trập 345°)…
 */
export function solarMonthGanzhi(baziYearCan: number, sector: number): GanZhi {
  return ganzhi(firstMonthCan(baziYearCan) + sector, sector + 2);
}

/** Chỉ số chi của giờ theo giờ thập phân 0–24 (23h–1h là Tý). */
export function hourChi(hour: number): number {
  return Math.floor(mod(hour + 1, 24) / 2);
}

/** Can chi giờ — phép "Ngũ thử độn": can giờ Tý theo can ngày. */
export function hourGanzhi(dayCan: number, chi: number): GanZhi {
  return ganzhi((dayCan % 5) * 2 + chi, chi);
}
