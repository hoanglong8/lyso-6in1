/**
 * Tử vi. Lấy ngày âm lịch VIỆT NAM từ CalendarSnapshot rồi giao cho iztro (MIT) an sao.
 *
 * Vì sao phải cẩn thận: iztro tự đổi âm–dương theo lịch Trung Quốc (UTC+8). Ta không cho nó
 * đổi từ dương lịch; ta đưa thẳng ngày âm VN. Nhưng iztro chỉ nhận ngày âm có thật trong lịch
 * Trung Quốc, nên với vài ngày lệch (tháng nhuận chỉ VN có, hoặc ngày 30 mà tháng TQ chỉ có 29),
 * ta dùng "ngày tương đương": an sao Tử vi chỉ phụ thuộc can chi năm, số tháng, số ngày, giờ
 * và giới tính, nên một năm âm khác có CÙNG can chi (cách 60 năm) cho lá số y hệt.
 */
import { astro } from "iztro";
import { LunarYear } from "lunar-typescript";
import { CHI, type CalendarSnapshot } from "@lyso/calendar-vn";

export const ENGINE_VERSION = "engine-tuvi@0.1.0";

export type Gender = "nam" | "nu";

export interface TuViConfig {
  /** Cách an sao: default = bản thông dụng (Toàn thư), zhongzhou = Trung Châu phái */
  algorithm: "default" | "zhongzhou";
  /** Sinh tháng nhuận: split15 = 15 ngày đầu tính tháng đó, sau tính tháng sau; asCurrent; asNext */
  leapMonth: "split15" | "asCurrent" | "asNext";
}

export const DEFAULT_TUVI_CONFIG: TuViConfig = { algorithm: "default", leapMonth: "split15" };

export const SCHOOL_LABEL: Record<TuViConfig["algorithm"], string> = {
  default: "Toàn thư (bản thông dụng, lõi iztro)",
  zhongzhou: "Trung Châu phái (lõi iztro)",
};

export interface TuViStar {
  name: string;
  /** major | soft | tough | lucun | tianma | adjective | flower | helper */
  type: string;
  brightness?: string;
  /** Hóa Lộc / Quyền / Khoa / Kỵ theo năm sinh */
  mutagen?: string;
}

export interface TuViPalace {
  /** Chi của cung, 0 = Tý */
  chi: number;
  chiName: string;
  canName: string;
  name: string;
  isBody: boolean;
  majorStars: TuViStar[];
  minorStars: TuViStar[];
  adjectiveStars: TuViStar[];
  truongSinh: string;
  bacSi: string;
  daiHan: { from: number; to: number };
  tieuHanAges: number[];
}

export interface TuViChart {
  engineVersion: string;
  calendarVersion: string;
  config: TuViConfig;
  school: string;
  gender: Gender;
  /** Ngày âm (VN) dùng để an sao */
  lunar: { year: number; month: number; day: number; leap: boolean };
  yearName: string;
  amDuong: string;
  hourChi: number;
  menhChi: number;
  thanChi: number;
  menhChu: string;
  thanChu: string;
  cuc: string;
  /** 12 cung theo thứ tự chi Tý → Hợi */
  palaces: TuViPalace[];
  timeKnown: boolean;
  notes: string[];
}

const MUTAGEN_VI: Record<string, string> = { 禄: "Lộc", 权: "Quyền", 科: "Khoa", 忌: "Kỵ" };

interface IztroStarLike {
  name: string;
  type: string;
  brightness?: string;
  mutagen?: string;
}
const star = (s: IztroStarLike): TuViStar => ({
  name: s.name,
  type: s.type,
  ...(s.brightness ? { brightness: s.brightness } : {}),
  ...(s.mutagen ? { mutagen: MUTAGEN_VI[s.mutagen] ?? s.mutagen } : {}),
});

/** iztro có nhận ngày âm này không — cùng phép kiểm tra iztro dùng (lunar-typescript, lịch Trung Quốc). */
function existsInChinese(y: number, m: number, d: number, leap: boolean) {
  const ly = LunarYear.fromYear(y);
  if (leap && ly.getLeapMonth() !== m) return false;
  const lm = ly.getMonth(leap ? -m : m);
  return !!lm && d <= lm.getDayCount();
}

interface IztroArgs {
  dateStr: string;
  isLeapMonth: boolean;
  fixLeap: boolean;
  note?: string;
}

/** Chọn tham số ngày âm đưa vào iztro sao cho lá số đúng với ngày âm VN. */
export function resolveIztroDate(
  lunar: { year: number; month: number; day: number; leap: boolean },
  leapMode: TuViConfig["leapMonth"],
): IztroArgs {
  let { year, month, day, leap } = lunar;
  let fixLeap = leapMode === "split15";
  // quy đổi tháng nhuận theo cấu hình ngay tại đây, để không phụ thuộc lịch TQ có nhuận hay không
  if (leap) {
    if (leapMode === "asNext" || (leapMode === "split15" && day > 15)) month = month === 12 ? 1 : month + 1;
    if (month === 1 && lunar.month === 12) year += 1;
    leap = false;
    fixLeap = false;
  }
  if (existsInChinese(year, month, day, leap)) return { dateStr: `${year}-${month}-${day}`, isLeapMonth: leap, fixLeap };
  for (const k of [1, -1, 2, -2, 3, -3, 4, -4]) {
    const y = year + 60 * k;
    if (existsInChinese(y, month, day, false))
      return {
        dateStr: `${y}-${month}-${day}`,
        isLeapMonth: false,
        fixLeap: false,
        note: `Ngày ${day}/${month} âm năm ${year} không có trong lịch Trung Quốc; đã an sao bằng ngày tương đương cùng can chi năm ${y}.`,
      };
  }
  throw new Error("Không tìm được ngày âm tương đương để an sao.");
}

export function buildTuVi(s: CalendarSnapshot, gender: Gender, config: TuViConfig = DEFAULT_TUVI_CONFIG): TuViChart {
  const lunar = { year: s.lunar.year, month: s.lunar.month, day: s.lunar.day, leap: s.lunar.leap };
  const args = resolveIztroDate(lunar, config.leapMonth);
  const timeKnown = s.input.time !== null;
  // iztro: 0 = Tý (ta đã áp quy tắc đổi ngày ở lõi lịch), 1 = Sửu … 11 = Hợi
  const timeIndex = s.hour.chi;
  const a = astro.withOptions({
    type: "lunar",
    dateStr: args.dateStr,
    timeIndex,
    gender: gender === "nam" ? "male" : "female",
    isLeapMonth: args.isLeapMonth,
    fixLeap: args.fixLeap,
    language: "vi-VN",
    config: { algorithm: config.algorithm, yearDivide: "normal" },
  });

  const chiIndex = (name: string) => {
    const i = (CHI as readonly string[]).indexOf(name);
    if (i < 0) throw new Error(`Chi không nhận ra: ${name}`);
    return i;
  };

  const palaces: TuViPalace[] = a.palaces
    .map((p) => ({
      chi: chiIndex(p.earthlyBranch),
      chiName: p.earthlyBranch,
      canName: p.heavenlyStem,
      name: p.name,
      isBody: p.isBodyPalace,
      majorStars: p.majorStars.map(star),
      minorStars: p.minorStars.map(star),
      adjectiveStars: p.adjectiveStars.map(star),
      truongSinh: p.changsheng12,
      bacSi: p.boshi12,
      daiHan: { from: p.decadal.range[0], to: p.decadal.range[1] },
      tieuHanAges: p.ages,
    }))
    .sort((x, y) => x.chi - y.chi);

  const yearCan = s.ganzhi.year.can;
  const amDuong = `${yearCan % 2 === 0 ? "Dương" : "Âm"} ${gender === "nam" ? "Nam" : "Nữ"}`;
  const notes: string[] = [];
  if (args.note) notes.push(args.note);
  if (s.lunar.leap) notes.push(`Sinh tháng nhuận: áp quy ước "${config.leapMonth}".`);
  if (!timeKnown) notes.push("Không rõ giờ sinh: lá số đang tạm lấy giờ Ngọ, vị trí cung Mệnh và nhiều sao có thể sai.");

  return {
    engineVersion: ENGINE_VERSION,
    calendarVersion: s.engineVersion,
    config,
    school: SCHOOL_LABEL[config.algorithm],
    gender,
    lunar,
    yearName: s.ganzhi.year.name,
    amDuong,
    hourChi: s.hour.chi,
    menhChi: chiIndex(a.earthlyBranchOfSoulPalace),
    thanChi: chiIndex(a.earthlyBranchOfBodyPalace),
    menhChu: a.soul,
    thanChu: a.body,
    cuc: a.fiveElementsClass,
    palaces,
    timeKnown,
    notes,
  };
}

/** Bản tóm tắt văn bản cho AI ở giai đoạn 2. */
export function toPromptContext(c: TuViChart): string {
  const fmt = (st: TuViStar) =>
    `${st.name}${st.brightness ? ` (${st.brightness})` : ""}${st.mutagen ? ` [Hóa ${st.mutagen}]` : ""}`;
  return [
    `Tử vi (${c.engineVersion}, ${c.school}). ${c.amDuong}, năm ${c.yearName}, ngày âm ${c.lunar.day}/${c.lunar.month}${c.lunar.leap ? " nhuận" : ""}/${c.lunar.year}, giờ ${CHI[c.hourChi]}.`,
    `Mệnh tại ${CHI[c.menhChi]}, Thân tại ${CHI[c.thanChi]}. Mệnh chủ ${c.menhChu}, Thân chủ ${c.thanChu}. ${c.cuc}.`,
    ...c.palaces.map(
      (p) =>
        `Cung ${p.name}${p.isBody ? " (Thân)" : ""} tại ${p.canName} ${p.chiName}, đại hạn ${p.daiHan.from}–${p.daiHan.to}: chính tinh ${
          p.majorStars.map(fmt).join(", ") || "vô chính diệu"
        }; phụ tinh ${[...p.minorStars, ...p.adjectiveStars].map(fmt).join(", ") || "không"}.`,
    ),
    ...c.notes.map((n) => `Lưu ý: ${n}`),
  ].join("\n");
}

