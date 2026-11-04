/**
 * Âm lịch theo quy tắc hiện hành của Việt Nam (và Trung Quốc từ 1929), tính theo
 * múi giờ tham số — Việt Nam dùng UTC+7 theo Quyết định 121/CP ngày 8/8/1967.
 *
 * Quy tắc:
 *  1. Ngày đầu tháng là ngày (theo giờ địa phương) chứa điểm sóc.
 *  2. Tháng chứa ngày Đông chí là tháng 11.
 *  3. Nếu giữa hai tháng 11 liên tiếp có 13 tháng thì năm có tháng nhuận:
 *     tháng nhuận là tháng ĐẦU TIÊN (sau tháng 11) không chứa trung khí nào.
 */
import { nextNewMoon, nextSunLongitude, prevNewMoon, sunLongitude } from "./astro";
import { dateFromLocalJdn, jdnFromYmd, localJdn, MS_PER_DAY, ymdFromJdn } from "./julian";

export interface LunarMonthEntry {
  /** JDN ngày mùng 1 (giờ địa phương) */
  start: number;
  /** Số ngày của tháng (29 hoặc 30) */
  length: number;
  month: number;
  leap: boolean;
  /** Năm âm lịch (tháng 11, 12 thuộc năm trước năm của tháng Giêng kế tiếp) */
  year: number;
}

export interface LunarDate {
  year: number;
  month: number;
  day: number;
  leap: boolean;
  /** Số ngày của tháng âm này */
  monthLength: number;
}

const cache = new Map<string, LunarMonthEntry[]>();

/** JDN ngày mùng 1 tháng 11 âm của năm dương `y` (tháng chứa Đông chí năm y). */
function month11Start(y: number, offsetMin: number): number {
  const solstice = nextSunLongitude(270, new Date(Date.UTC(y, 11, 1)), 40);
  const solsticeDay = localJdn(solstice, offsetMin);
  // điểm sóc cuối cùng có ngày địa phương <= ngày Đông chí
  let nm = prevNewMoon(dateFromLocalJdn(solsticeDay + 1, offsetMin));
  let day = localJdn(nm, offsetMin);
  if (day > solsticeDay) {
    nm = prevNewMoon(new Date(nm.getTime() - MS_PER_DAY));
    day = localJdn(nm, offsetMin);
  }
  return day;
}

/** Ngày địa phương chứa các trung khí (kinh độ bội số 30°) trong khoảng ngày [fromDay, toDay). */
function zhongqiDays(fromDay: number, toDay: number, offsetMin: number): number[] {
  const out: number[] = [];
  let t = dateFromLocalJdn(fromDay, offsetMin);
  const end = dateFromLocalJdn(toDay, offsetMin).getTime();
  // trung khí cách nhau ~29.4–31.4 ngày; tìm tuần tự mốc bội số 30° kế tiếp
  for (;;) {
    const target = ((Math.floor(sunLongitude(t) / 30) + 1) * 30) % 360;
    const c = nextSunLongitude(target, t, 40);
    if (c.getTime() >= end) break;
    out.push(localJdn(c, offsetMin));
    t = new Date(c.getTime() + MS_PER_DAY);
  }
  return out;
}

/**
 * Bảng các tháng âm từ tháng 11 năm (y-1) đến trước tháng 11 năm y,
 * tức "tuế" kết thúc bằng Đông chí năm y.
 */
export function suiTable(y: number, offsetMin = 420): LunarMonthEntry[] {
  const key = `${y}:${offsetMin}`;
  const hit = cache.get(key);
  if (hit) return hit;

  const a = month11Start(y - 1, offsetMin);
  const b = month11Start(y, offsetMin);
  const starts: number[] = [];
  let t = dateFromLocalJdn(a, offsetMin);
  // lấy đúng điểm sóc của ngày a
  t = new Date(t.getTime() - MS_PER_DAY / 2);
  for (;;) {
    const nm = nextNewMoon(t);
    const day = localJdn(nm, offsetMin);
    if (day >= b) break;
    if (starts.length === 0 || day > (starts.at(-1) as number)) starts.push(day);
    t = new Date(nm.getTime() + MS_PER_DAY);
  }
  starts.push(b);

  const count = starts.length - 1; // số tháng trong tuế: 12 hoặc 13
  let leapIndex = -1;
  if (count === 13) {
    const zq = zhongqiDays(a, b, offsetMin);
    for (let i = 1; i < count; i++) {
      const s = starts[i] as number;
      const e = starts[i + 1] as number;
      if (!zq.some((d) => d >= s && d < e)) {
        leapIndex = i;
        break;
      }
    }
  }

  const table: LunarMonthEntry[] = [];
  let month = 11;
  let year = y - 1;
  for (let i = 0; i < count; i++) {
    const s = starts[i] as number;
    const e = starts[i + 1] as number;
    const leap = i === leapIndex;
    if (i > 0 && !leap) {
      month = month === 12 ? 1 : month + 1;
      if (month === 1) year = y;
    }
    table.push({ start: s, length: e - s, month, leap, year });
  }
  cache.set(key, table);
  return table;
}

/** Đổi ngày địa phương (JDN) sang âm lịch với múi giờ `offsetMin` phút (mặc định UTC+7). */
export function lunarFromJdn(jdn: number, offsetMin = 420): LunarDate {
  const { y } = ymdFromJdn(jdn);
  for (const yy of [y, y + 1]) {
    const table = suiTable(yy, offsetMin);
    const first = table[0] as LunarMonthEntry;
    const last = table.at(-1) as LunarMonthEntry;
    if (jdn < first.start || jdn >= last.start + last.length) continue;
    for (const m of table) {
      if (jdn >= m.start && jdn < m.start + m.length) {
        return { year: m.year, month: m.month, day: jdn - m.start + 1, leap: m.leap, monthLength: m.length };
      }
    }
  }
  throw new Error(`Không đổi được JDN ${jdn} sang âm lịch`);
}

export function solarToLunar(y: number, m: number, d: number, offsetMin = 420): LunarDate {
  return lunarFromJdn(jdnFromYmd(y, m, d), offsetMin);
}

/** Đổi âm lịch sang JDN dương lịch. Trả về null nếu ngày âm không tồn tại. */
export function lunarToJdn(
  year: number,
  month: number,
  day: number,
  leap = false,
  offsetMin = 420,
): number | null {
  // tháng 11, 12 của năm âm `year` nằm trong tuế year+1; tháng 1–10 trong tuế year
  const candidates = month >= 11 ? [year + 1, year] : [year, year + 1];
  for (const yy of candidates) {
    for (const m of suiTable(yy, offsetMin)) {
      if (m.year === year && m.month === month && m.leap === leap) {
        if (day < 1 || day > m.length) return null;
        return m.start + day - 1;
      }
    }
  }
  return null;
}

export function lunarToSolar(
  year: number,
  month: number,
  day: number,
  leap = false,
  offsetMin = 420,
): { y: number; m: number; d: number } | null {
  const jdn = lunarToJdn(year, month, day, leap, offsetMin);
  return jdn === null ? null : ymdFromJdn(jdn);
}

/** Ngày mùng 1 Tết (dương lịch) của năm âm `year`. */
export function tetDate(year: number, offsetMin = 420): { y: number; m: number; d: number } {
  const r = lunarToSolar(year, 1, 1, false, offsetMin);
  if (!r) throw new Error(`Không tìm thấy Tết năm ${year}`);
  return r;
}
