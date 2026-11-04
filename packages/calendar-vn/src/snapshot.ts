/**
 * CalendarSnapshot — đầu ra DUY NHẤT của lõi lịch. Cả 6 engine chỉ được đọc snapshot này,
 * không tự tính lịch, để mọi môn dùng chung một cách quy đổi ngày giờ.
 */
import { nextSunLongitude, prevSunLongitude, sunLongitude } from "./astro";
import { dayGanzhi, ganzhi, hourChi, hourGanzhi, lunarMonthGanzhi, solarMonthGanzhi, yearGanzhi, type GanZhi } from "./ganzhi";
import { isValidSolarDate, jdnFromYmd, ymdFromJdn } from "./julian";
import { lunarFromJdn, lunarToSolar, type LunarDate } from "./lunar";
import { CHI, CON_GIAP, GIO_KHUNG, TIET_KHI } from "./names";
import { trueSolarWallMs } from "./solar-time";
import { regionFromLatitude, wallToInstant, type VnRegion } from "./timezone";

export const ENGINE_VERSION = "calendar-vn@0.1.0";

export interface Place {
  name?: string;
  lat: number;
  lon: number;
}

/** Hà Nội — dùng khi người dùng không nhập nơi sinh. */
export const DEFAULT_PLACE: Place = { name: "Hà Nội", lat: 21.0285, lon: 105.8542 };

export interface CalendarInput {
  date: { y: number; m: number; d: number };
  /** Ngày nhập theo dương lịch hay âm lịch */
  calendar: "solar" | "lunar";
  lunarLeap?: boolean;
  /** Giờ đồng hồ địa phương; null = không rõ giờ (tạm lấy 12:00 và gắn cảnh báo) */
  time: { h: number; mi: number } | null;
  place?: Place;
  /** Người dùng tự đặt độ lệch UTC (phút), ví dụ sinh ở nước ngoài */
  utcOffsetOverrideMinutes?: number;
}

export interface CalendarConfig {
  /** ty23: ngày mới bắt đầu lúc 23h (giờ Tý sớm thuộc ngày sau). ty00: đổi ngày lúc 0h */
  dayBoundary: "ty23" | "ty00";
  /** Dùng giờ mặt trời thực thay giờ đồng hồ để xác định ngày giờ can chi */
  useTrueSolarTime: boolean;
  /** historical: âm lịch theo múi giờ có hiệu lực tại nơi sinh lúc đó; vn-standard: luôn UTC+7 */
  lunarTzMode: "historical" | "vn-standard";
}

export const DEFAULT_CONFIG: CalendarConfig = {
  dayBoundary: "ty23",
  useTrueSolarTime: false,
  lunarTzMode: "historical",
};

export type WarningCode =
  | "time-unknown"
  | "tz-uncertain"
  | "tz-gap"
  | "tz-ambiguous"
  | "near-hour-boundary"
  | "solar-vs-clock-hour"
  | "near-solar-term"
  | "ty-hour-day-shift";

export interface SnapshotWarning {
  code: WarningCode;
  message: string;
}

export interface WallTime {
  y: number;
  m: number;
  d: number;
  h: number;
  mi: number;
}

export interface SolarTermRef {
  index: number; // 0 = Xuân phân (0°), k ứng với k × 15°
  name: string;
  longitude: number;
  instant: string; // ISO UTC
}

export interface CalendarSnapshot {
  engineVersion: string;
  config: CalendarConfig;
  input: CalendarInput;
  place: Place & { region: VnRegion };
  instantUtc: string;
  utcOffset: { minutes: number; label: string; source: "tzdata-vn" | "user" };
  clock: WallTime;
  trueSolar: WallTime & { deltaMinutes: number };
  /** Giờ dùng để tính (giờ đồng hồ hoặc giờ mặt trời thực theo cấu hình) */
  effective: WallTime;
  /** JDN của ngày dùng cho can chi ngày (đã áp quy tắc giờ Tý) */
  dayJdn: number;
  lunar: LunarDate & { offsetMinutes: number; conGiap: string };
  /** Ngày âm chưa áp quy tắc đổi ngày giờ Tý */
  lunarRaw: LunarDate;
  ganzhi: {
    /** Năm theo Tết (Tử vi, xem ngày) */
    year: GanZhi;
    /** Tháng âm lịch (Tử vi) */
    monthLunar: GanZhi;
    /** Năm theo Lập xuân (Bát tự) */
    yearBazi: GanZhi;
    /** Tháng theo tiết (Bát tự) */
    monthBazi: GanZhi;
    day: GanZhi;
    hour: GanZhi;
  };
  hour: { chi: number; name: string; range: string };
  sunLongitude: number;
  solarTerm: { current: SolarTermRef; next: SolarTermRef };
  /** Nguyệt tướng (Đại Lục Nhâm): chi, đổi tại mỗi trung khí */
  nguyetTuong: { chi: number; name: string };
  warnings: SnapshotWarning[];
}

function wallFromMs(ms: number): WallTime {
  const d = new Date(ms);
  return {
    y: d.getUTCFullYear(),
    m: d.getUTCMonth() + 1,
    d: d.getUTCDate(),
    h: d.getUTCHours(),
    mi: d.getUTCMinutes(),
  };
}

function termRef(k: number, instant: Date): SolarTermRef {
  const index = ((k % 24) + 24) % 24;
  return { index, name: TIET_KHI[index] as string, longitude: index * 15, instant: instant.toISOString() };
}

const pad = (n: number) => String(n).padStart(2, "0");
export const formatWall = (w: WallTime) => `${pad(w.h)}:${pad(w.mi)} ${pad(w.d)}/${pad(w.m)}/${w.y}`;

export function buildSnapshot(input: CalendarInput, config: CalendarConfig = DEFAULT_CONFIG): CalendarSnapshot {
  const warnings: SnapshotWarning[] = [];
  const place = input.place ?? DEFAULT_PLACE;
  const region = regionFromLatitude(place.lat);
  const time = input.time ?? { h: 12, mi: 0 };
  if (!input.time) {
    warnings.push({ code: "time-unknown", message: "Không rõ giờ sinh: tạm lấy 12:00, trụ giờ và các sao theo giờ không dùng được." });
  }

  // 1. Ngày dương (giờ đồng hồ địa phương)
  let solar = input.date;
  if (input.calendar === "lunar") {
    const { y, m, d } = input.date;
    let off = 420;
    let r = lunarToSolar(y, m, d, input.lunarLeap ?? false, off);
    if (r && config.lunarTzMode === "historical") {
      const probe = wallToInstant(Date.UTC(r.y, r.m - 1, r.d, 12), region).info.offsetMinutes;
      if (probe !== off) {
        off = probe;
        r = lunarToSolar(y, m, d, input.lunarLeap ?? false, off);
      }
    }
    if (!r) throw new Error("Ngày âm lịch không tồn tại (kiểm tra tháng nhuận và ngày 30).");
    solar = r;
  } else if (!isValidSolarDate(solar.y, solar.m, solar.d)) {
    throw new Error("Ngày dương lịch không hợp lệ.");
  }

  // 2. Thời điểm UTC
  const wallMs = Date.UTC(solar.y, solar.m - 1, solar.d, time.h, time.mi);
  let instantMs: number;
  let offsetMinutes: number;
  let offsetLabel: string;
  let source: "tzdata-vn" | "user" = "tzdata-vn";
  if (input.utcOffsetOverrideMinutes !== undefined) {
    offsetMinutes = input.utcOffsetOverrideMinutes;
    instantMs = wallMs - offsetMinutes * 60_000;
    offsetLabel = `UTC${offsetMinutes >= 0 ? "+" : "−"}${Math.abs(offsetMinutes) / 60} (người dùng nhập)`;
    source = "user";
  } else {
    const r = wallToInstant(wallMs, region);
    instantMs = r.instantMs;
    offsetMinutes = r.info.offsetMinutes;
    offsetLabel = r.info.label;
    if (r.info.uncertain)
      warnings.push({ code: "tz-uncertain", message: `Múi giờ miền Bắc giai đoạn 1945–1967 chưa thống nhất giữa các nguồn; đang dùng ${offsetLabel}. Có thể tự chỉnh độ lệch UTC.` });
    if (r.info.gap) warnings.push({ code: "tz-gap", message: "Giờ này rơi vào lúc đồng hồ được vặn nhanh, không tồn tại trên thực tế." });
    if (r.info.ambiguous) warnings.push({ code: "tz-ambiguous", message: "Giờ này xuất hiện hai lần do đồng hồ được lùi lại; đang lấy lần đầu." });
  }
  const instant = new Date(instantMs);

  // 3. Giờ đồng hồ, giờ mặt trời thực, giờ dùng để tính
  const clock = wallFromMs(wallMs);
  const solarMs = trueSolarWallMs(instant, place.lon);
  const trueSolar = { ...wallFromMs(solarMs), deltaMinutes: Math.round(((solarMs - wallMs) / 60_000) * 10) / 10 };
  const effMs = config.useTrueSolarTime ? solarMs : wallMs;
  const effective = wallFromMs(effMs);
  const effHour = effective.h + effective.mi / 60;

  const clockChi = hourChi(clock.h + clock.mi / 60);
  const solarChi = hourChi(trueSolar.h + trueSolar.mi / 60);
  if (input.time && clockChi !== solarChi) {
    warnings.push({
      code: "solar-vs-clock-hour",
      message: `Theo đồng hồ là giờ ${CHI[clockChi]}, theo giờ mặt trời thực là giờ ${CHI[solarChi]} (lệch ${trueSolar.deltaMinutes} phút). Kết quả đổi theo lựa chọn này.`,
    });
  } else if (input.time) {
    const minsInto = ((effHour + 1) % 2) * 60;
    if (minsInto < 15 || minsInto > 105)
      warnings.push({ code: "near-hour-boundary", message: "Sinh sát ranh giới hai giờ âm (trong vòng 15 phút): nên kiểm tra lại giờ sinh." });
  }

  // 4. Ngày dùng cho can chi (quy tắc giờ Tý)
  const baseJdn = jdnFromYmd(effective.y, effective.m, effective.d);
  const lateTy = effHour >= 23;
  const dayJdn = config.dayBoundary === "ty23" && lateTy ? baseJdn + 1 : baseJdn;
  if (lateTy && input.time)
    warnings.push({
      code: "ty-hour-day-shift",
      message:
        config.dayBoundary === "ty23"
          ? "Sinh sau 23h: theo cấu hình hiện tại đã tính sang ngày hôm sau (giờ Tý sớm)."
          : "Sinh sau 23h: theo cấu hình hiện tại vẫn giữ ngày hôm nay (giờ Tý muộn).",
    });

  // 5. Âm lịch
  const lunarOffset = config.lunarTzMode === "vn-standard" ? 420 : offsetMinutes;
  const lunarRaw = lunarFromJdn(baseJdn, lunarOffset);
  const lunarDay = dayJdn === baseJdn ? lunarRaw : lunarFromJdn(dayJdn, lunarOffset);

  // 6. Can chi
  const yearG = yearGanzhi(lunarDay.year);
  const monthLunarG = lunarMonthGanzhi(yearG.can, lunarDay.month);
  const lon = sunLongitude(instant);
  const lapXuan = nextSunLongitude(315, new Date(Date.UTC(ymdFromJdn(baseJdn).y, 0, 1)), 60);
  const baziYear = instant.getTime() >= lapXuan.getTime() ? ymdFromJdn(baseJdn).y : ymdFromJdn(baseJdn).y - 1;
  const yearBazi = yearGanzhi(baziYear);
  const sector = Math.floor((((lon - 315) % 360) + 360) % 360 / 30);
  const monthBazi = solarMonthGanzhi(yearBazi.can, sector);
  const day = dayGanzhi(dayJdn);
  const chi = hourChi(effHour);
  // giờ Tý muộn (ty00, sau 23h): can giờ theo can ngày hôm sau
  const hourCanDay = config.dayBoundary === "ty00" && lateTy ? dayGanzhi(dayJdn + 1).can : day.can;
  const hour = hourGanzhi(hourCanDay, chi);

  // 7. Tiết khí
  const k = Math.floor(lon / 15);
  const prevT = prevSunLongitude(k * 15, instant);
  const nextT = nextSunLongitude(((k + 1) * 15) % 360, instant, 20);
  const nearMs = 3 * 3_600_000;
  if (Math.abs(instantMs - prevT.getTime()) < nearMs || Math.abs(nextT.getTime() - instantMs) < nearMs)
    warnings.push({ code: "near-solar-term", message: "Sinh trong vòng 3 giờ quanh lúc giao tiết khí: trụ tháng Bát tự rất nhạy với giờ sinh." });

  // 8. Nguyệt tướng: sau Vũ thủy (330°) là Hợi, lùi một chi mỗi trung khí
  const s = Math.floor((((lon - 330) % 360) + 360) % 360 / 30);
  const ntChi = (((11 - s) % 12) + 12) % 12;

  return {
    engineVersion: ENGINE_VERSION,
    config,
    input,
    place: { ...place, region },
    instantUtc: instant.toISOString(),
    utcOffset: { minutes: offsetMinutes, label: offsetLabel, source },
    clock,
    trueSolar,
    effective,
    dayJdn,
    lunar: { ...lunarDay, offsetMinutes: lunarOffset, conGiap: CON_GIAP[yearG.chi] as string },
    lunarRaw,
    ganzhi: { year: yearG, monthLunar: monthLunarG, yearBazi, monthBazi, day, hour },
    hour: { chi, name: CHI[chi] as string, range: GIO_KHUNG[chi] as string },
    sunLongitude: Math.round(lon * 1e4) / 1e4,
    solarTerm: { current: termRef(k, prevT), next: termRef(k + 1, nextT) },
    nguyetTuong: { chi: ntChi, name: CHI[ntChi] as string },
    warnings,
  };
}
