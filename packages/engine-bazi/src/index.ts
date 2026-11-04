/**
 * Bát tự (Tứ trụ). Chỉ đọc CalendarSnapshot; không tự tính lịch.
 * Tính: tàng can, thập thần, nạp âm, vòng trường sinh, khởi vận và đại vận, lưu niên.
 */
import {
  CAN,

  ganzhi,
  nextSunLongitude,
  prevSunLongitude,
  type CalendarSnapshot,
  type GanZhi,
} from "@lyso/calendar-vn";

export const ENGINE_VERSION = "engine-bazi@0.1.0";

export type Gender = "nam" | "nu";

const mod = (a: number, n: number) => ((a % n) + n) % n;

/** Ngũ hành theo chỉ số: 0 Mộc, 1 Hỏa, 2 Thổ, 3 Kim, 4 Thủy */
export const NGU_HANH = ["Mộc", "Hỏa", "Thổ", "Kim", "Thủy"] as const;
export const canElement = (can: number) => Math.floor(can / 2);
const CHI_ELEMENT = [4, 2, 0, 0, 2, 1, 1, 2, 3, 3, 2, 4];
export const chiElement = (chi: number) => CHI_ELEMENT[chi] as number;

/** Tàng can theo thứ tự bản khí, trung khí, dư khí. */
const TANG_CAN: number[][] = [
  [9], // Tý: Quý
  [5, 9, 7], // Sửu: Kỷ Quý Tân
  [0, 2, 4], // Dần: Giáp Bính Mậu
  [1], // Mão: Ất
  [4, 1, 9], // Thìn: Mậu Ất Quý
  [2, 6, 4], // Tỵ: Bính Canh Mậu
  [3, 5], // Ngọ: Đinh Kỷ
  [5, 3, 1], // Mùi: Kỷ Đinh Ất
  [6, 8, 4], // Thân: Canh Nhâm Mậu
  [7], // Dậu: Tân
  [4, 7, 3], // Tuất: Mậu Tân Đinh
  [8, 0], // Hợi: Nhâm Giáp
];
export const tangCan = (chi: number) => TANG_CAN[chi] as number[];

export const THAP_THAN = [
  "Tỷ kiên", "Kiếp tài", "Thực thần", "Thương quan", "Thiên tài",
  "Chính tài", "Thất sát", "Chính quan", "Thiên ấn", "Chính ấn",
] as const;

/** Thập thần của can `other` so với nhật chủ `day`. */
export function thapThan(day: number, other: number): string {
  const rel = mod(canElement(other) - canElement(day), 5);
  const same = day % 2 === other % 2;
  return THAP_THAN[rel * 2 + (same ? 0 : 1)] as string;
}

const NAP_AM = [
  "Hải trung kim", "Lư trung hỏa", "Đại lâm mộc", "Lộ bàng thổ", "Kiếm phong kim", "Sơn đầu hỏa",
  "Giản hạ thủy", "Thành đầu thổ", "Bạch lạp kim", "Dương liễu mộc", "Tuyền trung thủy", "Ốc thượng thổ",
  "Tích lịch hỏa", "Tùng bách mộc", "Trường lưu thủy", "Sa trung kim", "Sơn hạ hỏa", "Bình địa mộc",
  "Bích thượng thổ", "Kim bạch kim", "Phú đăng hỏa", "Thiên hà thủy", "Đại dịch thổ", "Thoa xuyến kim",
  "Tang đố mộc", "Đại khê thủy", "Sa trung thổ", "Thiên thượng hỏa", "Thạch lựu mộc", "Đại hải thủy",
] as const;
export const napAm = (g: GanZhi) => NAP_AM[Math.floor(g.index60 / 2)] as string;

export const TRUONG_SINH = [
  "Trường sinh", "Mộc dục", "Quan đới", "Lâm quan", "Đế vượng", "Suy",
  "Bệnh", "Tử", "Mộ", "Tuyệt", "Thai", "Dưỡng",
] as const;
/** Chi nơi can bắt đầu Trường sinh. Can dương đi thuận, can âm đi nghịch. */
const TS_START = [11, 6, 2, 9, 2, 9, 5, 0, 8, 3];
export function truongSinh(can: number, chi: number): string {
  const start = TS_START[can] as number;
  const step = can % 2 === 0 ? mod(chi - start, 12) : mod(start - chi, 12);
  return TRUONG_SINH[step] as string;
}

export interface Pillar {
  label: "Năm" | "Tháng" | "Ngày" | "Giờ";
  ganzhi: GanZhi;
  napAm: string;
  /** Thập thần của thiên can (trụ ngày là "Nhật chủ") */
  thapThan: string;
  tangCan: { can: number; name: string; thapThan: string }[];
  truongSinh: string;
}

export interface DaiVan {
  ganzhi: GanZhi;
  /** Tuổi mụ bắt đầu và kết thúc */
  startAge: number;
  endAge: number;
  startYear: number;
  thapThan: string;
}

export interface BaziChart {
  engineVersion: string;
  calendarVersion: string;
  gender: Gender;
  dayMaster: { can: number; name: string; element: string };
  pillars: Pillar[];
  /** Đếm ngũ hành theo thiên can và bản khí địa chi (8 chữ) */
  elementCount: Record<(typeof NGU_HANH)[number], number>;
  khoiVan: {
    forward: boolean;
    /** Khoảng cách tới tiết liền kề, quy đổi 3 ngày = 1 năm */
    years: number;
    months: number;
    days: number;
    startDate: string; // ISO UTC, lúc bắt đầu đại vận đầu tiên
  };
  daiVan: DaiVan[];
  luuNien: { year: number; ganzhi: GanZhi; thapThan: string }[];
  timeKnown: boolean;
  notes: string[];
}

function pillar(label: Pillar["label"], g: GanZhi, dayCan: number): Pillar {
  return {
    label,
    ganzhi: g,
    napAm: napAm(g),
    thapThan: label === "Ngày" ? "Nhật chủ" : thapThan(dayCan, g.can),
    tangCan: tangCan(g.chi).map((c) => ({ can: c, name: CAN[c] as string, thapThan: thapThan(dayCan, c) })),
    truongSinh: truongSinh(dayCan, g.chi),
  };
}

/**
 * Khởi vận: năm dương nam / năm âm nữ đi thuận (đếm tới tiết kế tiếp), ngược lại đi nghịch.
 * Quy đổi: 3 ngày = 1 năm, 1 ngày = 4 tháng, 2 giờ = 10 ngày (tức 12 phút = 1 ngày).
 */
function khoiVan(s: CalendarSnapshot, gender: Gender) {
  const yangYear = s.ganzhi.yearBazi.can % 2 === 0;
  const forward = (yangYear && gender === "nam") || (!yangYear && gender === "nu");
  const instant = new Date(s.instantUtc);
  const lon = s.sunLongitude;
  // các "tiết" (đầu tháng Bát tự) ở 315° + 30°k
  const k = Math.floor(mod(lon - 315, 360) / 30);
  const prevJie = (315 + 30 * k) % 360;
  const target = forward
    ? nextSunLongitude((prevJie + 30) % 360, instant, 40)
    : prevSunLongitude(prevJie, instant);
  let minutes = Math.abs(target.getTime() - instant.getTime()) / 60_000;
  const years = Math.floor(minutes / 4320);
  minutes -= years * 4320;
  const months = Math.floor(minutes / 360);
  minutes -= months * 360;
  const days = Math.floor(minutes / 12);
  minutes -= days * 12;
  // ngày bắt đầu vận = ngày sinh + years năm + months tháng + days ngày + (phút dư × 2 giờ)
  const start = new Date(instant);
  start.setUTCFullYear(start.getUTCFullYear() + years);
  start.setUTCMonth(start.getUTCMonth() + months);
  start.setUTCDate(start.getUTCDate() + days);
  start.setTime(start.getTime() + minutes * 2 * 3_600_000);
  return { forward, years, months, days, startDate: start.toISOString() };
}

export interface BaziOptions {
  /** Số đại vận cần liệt kê */
  daiVanCount?: number;
  /** Các năm cần xem lưu niên (mặc định: năm hiện tại và 2 năm kế) */
  luuNienYears?: number[];
}

export function buildBazi(s: CalendarSnapshot, gender: Gender, opts: BaziOptions = {}): BaziChart {
  const g = s.ganzhi;
  const dayCan = g.day.can;
  const timeKnown = s.input.time !== null;
  const pillars = [
    pillar("Năm", g.yearBazi, dayCan),
    pillar("Tháng", g.monthBazi, dayCan),
    pillar("Ngày", g.day, dayCan),
    pillar("Giờ", g.hour, dayCan),
  ];
  const counted = timeKnown ? pillars : pillars.slice(0, 3);
  const elementCount = Object.fromEntries(NGU_HANH.map((n) => [n, 0])) as BaziChart["elementCount"];
  for (const p of counted) {
    elementCount[NGU_HANH[canElement(p.ganzhi.can)] as (typeof NGU_HANH)[number]]++;
    elementCount[NGU_HANH[chiElement(p.ganzhi.chi)] as (typeof NGU_HANH)[number]]++;
  }

  const kv = khoiVan(s, gender);
  const birthYear = new Date(s.instantUtc).getUTCFullYear();
  const startYear = new Date(kv.startDate).getUTCFullYear();
  const firstAge = startYear - birthYear + 1;
  const daiVan: DaiVan[] = [];
  const count = opts.daiVanCount ?? 8;
  for (let i = 0; i < count; i++) {
    const step = kv.forward ? i + 1 : -(i + 1);
    const dg = ganzhi(g.monthBazi.can + step, g.monthBazi.chi + step);
    daiVan.push({
      ganzhi: dg,
      startAge: firstAge + 10 * i,
      endAge: firstAge + 10 * i + 9,
      startYear: startYear + 10 * i,
      thapThan: thapThan(dayCan, dg.can),
    });
  }

  const nowYear = new Date().getUTCFullYear();
  const years = opts.luuNienYears ?? [nowYear, nowYear + 1, nowYear + 2];
  const luuNien = years.map((y) => {
    const yg = ganzhi(y - 4, y - 4);
    return { year: y, ganzhi: yg, thapThan: thapThan(dayCan, yg.can) };
  });

  const notes: string[] = [];
  if (!timeKnown) notes.push("Không rõ giờ sinh: bỏ qua trụ giờ khi đếm ngũ hành.");
  notes.push("Đếm ngũ hành chỉ tính 8 chữ (can và bản khí của chi), chưa tính tàng can hay mùa sinh — chưa phải luận vượng suy.");

  return {
    engineVersion: ENGINE_VERSION,
    calendarVersion: s.engineVersion,
    gender,
    dayMaster: { can: dayCan, name: CAN[dayCan] as string, element: NGU_HANH[canElement(dayCan)] as string },
    pillars,
    elementCount,
    khoiVan: kv,
    daiVan,
    luuNien,
    timeKnown,
    notes,
  };
}

/** Bản tóm tắt văn bản để đưa cho AI ở giai đoạn 2 (AI chỉ đọc, không tính lại). */
export function toPromptContext(c: BaziChart): string {
  const lines = [
    `Bát tự (${c.engineVersion}), ${c.gender === "nam" ? "nam" : "nữ"} mệnh.`,
    `Nhật chủ: ${c.dayMaster.name} (${c.dayMaster.element}).`,
    ...c.pillars.map(
      (p) =>
        `Trụ ${p.label}: ${p.ganzhi.name} — ${p.thapThan}; nạp âm ${p.napAm}; trường sinh: ${p.truongSinh}; tàng can: ${p.tangCan
          .map((t) => `${t.name} (${t.thapThan})`)
          .join(", ")}`,
    ),
    `Ngũ hành (8 chữ): ${Object.entries(c.elementCount).map(([k, v]) => `${k} ${v}`).join(", ")}.`,
    `Khởi vận ${c.khoiVan.forward ? "thuận" : "nghịch"}: ${c.khoiVan.years} năm ${c.khoiVan.months} tháng ${c.khoiVan.days} ngày sau khi sinh.`,
    `Đại vận: ${c.daiVan.map((d) => `${d.startAge}–${d.endAge} tuổi ${d.ganzhi.name} (${d.thapThan})`).join("; ")}.`,
  ];
  if (!c.timeKnown) lines.push("Lưu ý: không rõ giờ sinh, trụ giờ không dùng được.");
  return lines.join("\n");
}

