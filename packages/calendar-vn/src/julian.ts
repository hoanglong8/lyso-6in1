/** Số ngày Julius (JDN) và chuyển đổi thời điểm. Lịch Gregory từ 15/10/1582. */

export const MS_PER_DAY = 86_400_000;
/** JD của mốc Unix 1970-01-01T00:00Z */
export const JD_UNIX_EPOCH = 2440587.5;

/** JDN (số nguyên) của một ngày dương lịch Gregory. */
export function jdnFromYmd(y: number, m: number, d: number): number {
  const a = Math.floor((14 - m) / 12);
  const yy = y + 4800 - a;
  const mm = m + 12 * a - 3;
  return (
    d +
    Math.floor((153 * mm + 2) / 5) +
    365 * yy +
    Math.floor(yy / 4) -
    Math.floor(yy / 100) +
    Math.floor(yy / 400) -
    32045
  );
}

/** Ngày dương lịch từ JDN. */
export function ymdFromJdn(jdn: number): { y: number; m: number; d: number } {
  const a = jdn + 32044;
  const b = Math.floor((4 * a + 3) / 146097);
  const c = a - Math.floor((146097 * b) / 4);
  const d0 = Math.floor((4 * c + 3) / 1461);
  const e = c - Math.floor((1461 * d0) / 4);
  const m0 = Math.floor((5 * e + 2) / 153);
  const d = e - Math.floor((153 * m0 + 2) / 5) + 1;
  const m = m0 + 3 - 12 * Math.floor(m0 / 10);
  const y = 100 * b + d0 - 4800 + Math.floor(m0 / 10);
  return { y, m, d };
}

/** JD (số thực) của một thời điểm UTC. */
export function jdFromDate(date: Date): number {
  return date.getTime() / MS_PER_DAY + JD_UNIX_EPOCH;
}

/** Ngày địa phương (JDN) chứa thời điểm `date` khi đồng hồ lệch UTC `offsetMinutes` phút. */
export function localJdn(date: Date, offsetMinutes: number): number {
  return Math.floor(jdFromDate(date) + 0.5 + offsetMinutes / 1440);
}

/** Thời điểm UTC ứng với 0h00 giờ địa phương của ngày JDN. */
export function dateFromLocalJdn(jdn: number, offsetMinutes: number): Date {
  const jd = jdn - 0.5 - offsetMinutes / 1440;
  return new Date((jd - JD_UNIX_EPOCH) * MS_PER_DAY);
}

export function isValidSolarDate(y: number, m: number, d: number): boolean {
  if (!Number.isInteger(y) || !Number.isInteger(m) || !Number.isInteger(d)) return false;
  if (m < 1 || m > 12 || d < 1) return false;
  const back = ymdFromJdn(jdnFromYmd(y, m, d));
  return back.y === y && back.m === m && back.d === d;
}
