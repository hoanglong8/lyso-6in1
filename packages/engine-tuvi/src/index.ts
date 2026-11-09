/**
 * Tử vi. Đầu vào luôn là ngày âm lịch VIỆT NAM từ CalendarSnapshot.
 *
 * Các phái:
 *  - vn-thien-luong: phái Việt theo cụ Thiên Lương, an sao bằng mã TypeScript của dự án (src/vn.ts),
 *    chuyển từ lasotuvi và đối chiếu khớp lasotuvi trên 20.000 lá số.
 *  - nam-phai (Tam hợp, Toàn thư), trung-chau, bac-phai (Tứ hóa phi tinh): lõi iztro (MIT).
 *  - dong-a: chưa có — chưa tìm được tài liệu công bố quy tắc an sao riêng.
 *
 * Với lõi iztro: iztro tự đổi âm–dương theo lịch Trung Quốc (UTC+8), nên ta đưa thẳng ngày âm VN.
 * iztro chỉ nhận ngày âm có thật trong lịch TQ; với ~96 ngày lệch (1900–2100) ta dùng ngày tương
 * đương cùng can chi năm cách 60 năm — an sao chỉ phụ thuộc can chi năm, số tháng, ngày, giờ, giới tính.
 */
import { astro } from "iztro";
import { LunarYear } from "lunar-typescript";
import { CAN, CHI, firstMonthCan, lunarToSolar, type CalendarSnapshot } from "@lyso/calendar-vn";
import { anSaoVN, daiVanVN, dichCung, luuNienVN, TU_HOA_THIEN_LUONG, type VnChartRaw } from "./vn";

export const ENGINE_VERSION = "engine-tuvi@0.2.0";

export type Gender = "nam" | "nu";
export type SchoolId = "vn-thien-luong" | "nam-phai" | "trung-chau" | "bac-phai";

export interface SchoolInfo {
  id: SchoolId | "dong-a";
  label: string;
  available: boolean;
  description: string;
}

export const SCHOOLS: SchoolInfo[] = [
  {
    id: "vn-thien-luong",
    label: "Việt Nam – Thiên Lương",
    available: true,
    description:
      "An sao theo sách Việt (Tứ hóa 10 câu của cụ Thiên Lương, Hỏa Linh và Tràng sinh theo âm dương nam nữ, có Tuần Triệt, Quốc Ấn, Đường Phù, Đẩu Quân…). Quy tắc lấy từ lasotuvi.",
  },
  {
    id: "nam-phai",
    label: "Nam phái (Tam hợp, Toàn thư)",
    available: true,
    description: "Cách an sao thông dụng theo Tử Vi Đẩu Số Toàn Thư; luận theo tam phương tứ chính và hệ thần sát.",
  },
  {
    id: "trung-chau",
    label: "Trung Châu phái",
    available: true,
    description: "Bản an sao của Trung Châu phái (Vương Đình Chi) — một số sao và độ sáng khác Toàn thư.",
  },
  {
    id: "bac-phai",
    label: "Bắc phái (Tứ hóa phi tinh)",
    available: true,
    description:
      "Cùng vị trí sao với Toàn thư, nhưng luận bằng Tứ hóa phi tinh: mỗi cung phát Lộc Quyền Khoa Kỵ theo can cung. Chỉ hiện chính tinh, lục cát, lục sát.",
  },
  {
    id: "dong-a",
    label: "Đông A phái",
    available: false,
    description:
      "Chưa có: chưa tìm được tài liệu công bố quy tắc an sao riêng của phái này. Cần thầy hoặc tài liệu gốc cung cấp bảng quy tắc rồi mới thêm.",
  },
];

export interface TuViConfig {
  school: SchoolId;
  /** Sinh tháng nhuận: split15 = 15 ngày đầu tính tháng đó, sau tính tháng sau; asCurrent; asNext */
  leapMonth: "split15" | "asCurrent" | "asNext";
}

export const DEFAULT_TUVI_CONFIG: TuViConfig = { school: "vn-thien-luong", leapMonth: "split15" };

export type Mutagen = "Lộc" | "Quyền" | "Khoa" | "Kỵ";

export interface TuViStar {
  name: string;
  /** major | soft | tough | lucun | tianma | adjective | flower | helper */
  type: string;
  brightness?: string;
  mutagen?: Mutagen;
}

export interface PhiHoa {
  mutagen: Mutagen;
  star: string;
  /** Chi cung nhận hóa; null nếu sao không có trong lá số */
  toChi: number | null;
  /** Tự hóa: sao nằm ngay trong cung phát */
  self: boolean;
}

export interface TuViPalace {
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
  tuan: boolean;
  triet: boolean;
  /** Bắc phái: Tứ hóa phát ra từ can của cung này */
  phiHoa?: PhiHoa[];
}

export interface VanHan {
  year: number;
  yearName: string;
  /** Tuổi mụ */
  age: number;
  daiHan: { chi: number; palace: string; from: number; to: number } | null;
  tieuHan: { chi: number; palace: string };
  luuThaiTue: { chi: number; palace: string };
  luuStars: { name: string; chi: number }[];
  luuTuHoa: { mutagen: Mutagen; star: string; chi: number | null }[];
  /** Phái Việt: lưu niên đại hạn — cung "số tuổi" trong 10 năm của đại hạn (Tử Vi Học Quán) */
  luuNienDaiHan?: { chi: number; palace: string } | null;
  /** Phái Việt: sao đại vận theo can chi cung đại hạn */
  daiVanStars?: { name: string; chi: number }[];
  /** Phái Việt: tứ hóa của đại vận theo can cung đại hạn */
  daiVanTuHoa?: { mutagen: Mutagen; star: string; chi: number | null }[];
  /** Phái Việt: chi cung của từng tháng âm 1..12 trong năm xem (nguyệt hạn) */
  nguyetHan?: number[];
}

export interface TuViChart {
  engineVersion: string;
  calendarVersion: string;
  config: TuViConfig;
  school: string;
  gender: Gender;
  lunar: { year: number; month: number; day: number; leap: boolean };
  yearName: string;
  amDuong: string;
  amDuongMenh?: string;
  banMenh?: string;
  hourChi: number;
  menhChi: number;
  thanChi: number;
  menhChu: string;
  thanChu: string;
  cuc: string;
  palaces: TuViPalace[];
  vanHan: VanHan | null;
  timeKnown: boolean;
  notes: string[];
}

/** Tứ hóa bản thông dụng (lõi iztro): [Lộc, Quyền, Khoa, Kỵ] theo can 0..9 */
export const TU_HOA_THONG_DUNG: [string, string, string, string][] = [
  ["Liêm Trinh", "Phá Quân", "Vũ Khúc", "Thái Dương"],
  ["Thiên Cơ", "Thiên Lương", "Tử Vi", "Thái Âm"],
  ["Thiên Đồng", "Thiên Cơ", "Văn Xương", "Liêm Trinh"],
  ["Thái Âm", "Thiên Đồng", "Thiên Cơ", "Cự Môn"],
  ["Tham Lang", "Thái Âm", "Hữu Bật", "Thiên Cơ"],
  ["Vũ Khúc", "Tham Lang", "Thiên Lương", "Văn Khúc"],
  ["Thái Dương", "Vũ Khúc", "Thái Âm", "Thiên Đồng"],
  ["Cự Môn", "Thái Dương", "Văn Khúc", "Văn Xương"],
  ["Thiên Lương", "Tử Vi", "Tả Phù", "Vũ Khúc"],
  ["Phá Quân", "Cự Môn", "Thái Âm", "Tham Lang"],
];
const MUTAGENS: Mutagen[] = ["Lộc", "Quyền", "Khoa", "Kỵ"];

const MUTAGEN_VI: Record<string, Mutagen> = { 禄: "Lộc", 权: "Quyền", 科: "Khoa", 忌: "Kỵ", Lộc: "Lộc", Quyền: "Quyền", Khoa: "Khoa", Kỵ: "Kỵ" };

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
  ...(s.mutagen && MUTAGEN_VI[s.mutagen] ? { mutagen: MUTAGEN_VI[s.mutagen] } : {}),
});

const chiIndex = (name: string) => {
  const alias = name === "Tị" ? "Tỵ" : name;
  const i = (CHI as readonly string[]).indexOf(alias);
  if (i < 0) throw new Error(`Chi không nhận ra: ${name}`);
  return i;
};

/** Can của cung theo phép Ngũ hổ độn (can tháng Dần theo can năm). */
const palaceCan = (yearCan: number, chi: number) => (firstMonthCan(yearCan) + ((chi - 2 + 12) % 12)) % 10;

/** iztro có nhận ngày âm này không — cùng phép kiểm tra iztro dùng (lunar-typescript, lịch Trung Quốc). */
function existsInChinese(y: number, m: number, d: number, leap: boolean) {
  const ly = LunarYear.fromYear(y);
  if (leap && ly.getLeapMonth() !== m) return false;
  const lm = ly.getMonth(leap ? -m : m);
  return !!lm && d <= lm.getDayCount();
}

/** Quy đổi tháng nhuận theo cấu hình. Trả về tháng/năm âm dùng để an sao (không còn nhuận). */
export function normalizeLeap(
  lunar: { year: number; month: number; day: number; leap: boolean },
  leapMode: TuViConfig["leapMonth"],
): { year: number; month: number; day: number } {
  let { year, month } = lunar;
  if (lunar.leap && (leapMode === "asNext" || (leapMode === "split15" && lunar.day > 15))) {
    month = month === 12 ? 1 : month + 1;
    if (month === 1) year += 1;
  }
  return { year, month, day: lunar.day };
}

interface IztroArgs {
  dateStr: string;
  /** Số năm đã dịch (bội của 60) khi phải dùng ngày tương đương */
  yearShift: number;
  note?: string;
}

/** Chọn ngày âm đưa vào iztro sao cho lá số đúng với ngày âm VN. */
export function resolveIztroDate(
  lunar: { year: number; month: number; day: number; leap: boolean },
  leapMode: TuViConfig["leapMonth"],
): IztroArgs {
  const { year, month, day } = normalizeLeap(lunar, leapMode);
  if (existsInChinese(year, month, day, false)) return { dateStr: `${year}-${month}-${day}`, yearShift: 0 };
  for (const k of [1, -1, 2, -2, 3, -3, 4, -4]) {
    const y = year + 60 * k;
    if (existsInChinese(y, month, day, false))
      return {
        dateStr: `${y}-${month}-${day}`,
        yearShift: 60 * k,
        note: `Ngày ${day}/${month} âm năm ${year} không có trong lịch Trung Quốc; lõi iztro an sao bằng ngày tương đương cùng can chi năm ${y}.`,
      };
  }
  throw new Error("Không tìm được ngày âm tương đương để an sao.");
}

const BAC_PHAI_MINOR = new Set(["Tả Phù", "Hữu Bật", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Lộc Tồn", "Thiên Mã", "Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh", "Địa Không", "Địa Kiếp"]);

function phiHoaFor(palaces: TuViPalace[], yearCan: number) {
  const where = new Map<string, number>();
  for (const p of palaces) for (const s of [...p.majorStars, ...p.minorStars]) where.set(s.name, p.chi);
  for (const p of palaces) {
    const can = palaceCan(yearCan, p.chi);
    p.phiHoa = (TU_HOA_THONG_DUNG[can] as string[]).map((st, i) => {
      const toChi = where.get(st) ?? null;
      return { mutagen: MUTAGENS[i] as Mutagen, star: st, toChi, self: toChi === p.chi };
    });
  }
}

export interface TuViOptions {
  /** Năm dương lịch cần xem vận hạn (theo năm âm tương ứng). Bỏ trống: năm hiện tại. */
  viewYear?: number;
}

function buildFromVn(s: CalendarSnapshot, gender: Gender, config: TuViConfig, viewYear: number): Omit<TuViChart, "engineVersion" | "calendarVersion" | "config" | "school" | "gender" | "lunar" | "timeKnown" | "notes"> {
  const n = normalizeLeap(s.lunar, config.leapMonth);
  const yearCan = s.ganzhi.year.can;
  const yearChi = s.ganzhi.year.chi;
  const raw: VnChartRaw = anSaoVN({
    canNam: yearCan + 1,
    chiNam: yearChi + 1,
    thang: n.month,
    ngay: n.day,
    gio: s.hour.chi + 1,
    gioiTinh: gender === "nam" ? 1 : -1,
  });
  const TRUONG = new Set(["Tràng Sinh", "Mộc Dục", "Quan Đới", "Lâm Quan", "Đế Vượng", "Suy", "Bệnh", "Tử", "Mộ", "Tuyệt", "Thai", "Dưỡng"]);
  const SOFT = new Set([2, 3, 6]);
  const palaces: TuViPalace[] = [];
  for (let cung = 1; cung <= 12; cung++) {
    const p = raw.palaces[cung]!;
    const chi = cung - 1;
    const toStar = (st: (typeof p.stars)[number]): TuViStar => ({
      name: st.name,
      type: st.group === 1 ? "major" : st.group === 11 ? "tough" : SOFT.has(st.group) ? "soft" : "adjective",
      ...(st.brightness ? { brightness: st.brightness } : {}),
      ...(st.mutagen ? { mutagen: st.mutagen } : {}),
    });
    const minor = p.stars.filter((x) => x.group !== 1 && !TRUONG.has(x.name)).map(toStar);
    palaces.push({
      chi,
      chiName: CHI[chi] as string,
      canName: CAN[palaceCan(yearCan, chi)] as string,
      name: p.name,
      isBody: p.isBody,
      majorStars: p.stars.filter((x) => x.group === 1).map(toStar),
      minorStars: minor.filter((x) => x.type !== "adjective"),
      adjectiveStars: minor.filter((x) => x.type === "adjective"),
      truongSinh: p.stars.find((x) => TRUONG.has(x.name))?.name ?? "",
      bacSi: "",
      daiHan: { from: p.daiHan, to: p.daiHan + 9 },
      tieuHanAges: agesForChi(p.tieuHanChi - 1, s.lunar.year),
      tuan: p.tuan,
      triet: p.triet,
    });
  }

  // Vận hạn năm xem (phái Việt)
  const vyChi = (((viewYear - 4) % 12) + 12) % 12;
  const vyCan = (((viewYear - 4) % 10) + 10) % 10;
  const age = viewYear - s.lunar.year + 1;
  const dh = palaces.find((p) => age >= p.daiHan.from && age <= p.daiHan.to) ?? null;
  const th = palaces.find((p) => p.tieuHanAges.includes(age)) ?? (palaces[0] as TuViPalace);
  const where = new Map<string, number>();
  for (const p of palaces) for (const st of [...p.majorStars, ...p.minorStars, ...p.adjectiveStars]) where.set(st.name, p.chi);
  const vanHan: VanHan = {
    year: viewYear,
    yearName: `${CAN[vyCan]} ${CHI[vyChi]}`,
    age,
    daiHan: dh ? { chi: dh.chi, palace: dh.name, from: dh.daiHan.from, to: dh.daiHan.to } : null,
    tieuHan: { chi: th.chi, palace: th.name },
    luuThaiTue: { chi: vyChi, palace: (palaces[vyChi] as TuViPalace).name },
    luuStars: luuNienVN(vyCan + 1, vyChi + 1).map((x) => ({ name: x.name, chi: x.cung - 1 })),
    luuTuHoa: (TU_HOA_THIEN_LUONG[vyCan + 1] as string[]).map((st, i) => ({ mutagen: MUTAGENS[i] as Mutagen, star: st, chi: where.get(st) ?? null })),
  };
  const mod = (x: number) => ((x % 12) + 12) % 12;
  if (dh) {
    // Chiều đại hạn: cung của đại hạn kế tiếp
    const next = palaces.find((p) => p.daiHan.from === dh.daiHan.from + 10);
    const dir = next && mod(next.chi - dh.chi) === 11 ? -1 : 1;
    const k = age - dh.daiHan.from;
    const off = k === 0 ? 0 : k === 1 || k === 3 ? 6 : k === 2 ? 6 - dir : 6 + dir * (k - 3);
    const ln = palaces[mod(dh.chi + off)] as TuViPalace;
    vanHan.luuNienDaiHan = { chi: ln.chi, palace: ln.name };
    const canDh = palaceCan(yearCan, dh.chi);
    vanHan.daiVanStars = daiVanVN(canDh + 1, dh.chi + 1).map((x) => ({ name: x.name, chi: x.cung - 1 }));
    vanHan.daiVanTuHoa = (TU_HOA_THIEN_LUONG[canDh + 1] as string[]).map((st, i) => ({ mutagen: MUTAGENS[i] as Mutagen, star: st, chi: where.get(st) ?? null }));
  } else vanHan.luuNienDaiHan = null;
  // Nguyệt hạn: từ cung tiểu hạn kể tháng 1 nghịch đến tháng sinh, từ đó kể giờ Tý thuận đến giờ sinh là tháng Giêng
  const thang1 = mod(th.chi - (n.month - 1) + s.hour.chi);
  vanHan.nguyetHan = Array.from({ length: 12 }, (_, i) => mod(thang1 + i));

  return {
    yearName: s.ganzhi.year.name,
    amDuong: `${yearCan % 2 === 0 ? "Dương" : "Âm"} ${gender === "nam" ? "Nam" : "Nữ"}`,
    amDuongMenh: raw.amDuongMenh,
    banMenh: raw.banMenh,
    hourChi: s.hour.chi,
    menhChi: raw.cungMenh - 1,
    thanChi: raw.cungThan - 1,
    menhChu: raw.menhChu,
    thanChu: raw.thanChu,
    cuc: raw.tenCuc.charAt(0).toUpperCase() + raw.tenCuc.slice(1),
    palaces,
    vanHan,
  };
}

/** Các tuổi mụ (1..120) mà năm có chi `chi` rơi vào, với người sinh năm âm `birthYear`. */
function agesForChi(chi: number, birthYear: number): number[] {
  const out: number[] = [];
  for (let a = 1; a <= 120; a++) if ((((birthYear + a - 1 - 4) % 12) + 12) % 12 === chi) out.push(a);
  return out;
}

function buildFromIztro(
  s: CalendarSnapshot,
  gender: Gender,
  config: TuViConfig,
  viewYear: number,
  notes: string[],
): Omit<TuViChart, "engineVersion" | "calendarVersion" | "config" | "school" | "gender" | "lunar" | "timeKnown" | "notes"> {
  const args = resolveIztroDate(s.lunar, config.leapMonth);
  if (args.note) notes.push(args.note);
  const a = astro.withOptions({
    type: "lunar",
    dateStr: args.dateStr,
    timeIndex: s.hour.chi,
    gender: gender === "nam" ? "male" : "female",
    isLeapMonth: false,
    fixLeap: false,
    language: "vi-VN",
    config: { algorithm: config.school === "trung-chau" ? "zhongzhou" : "default", yearDivide: "normal" },
  });

  const bac = config.school === "bac-phai";
  const palaces: TuViPalace[] = a.palaces
    .map((p) => {
      const minor = p.minorStars.map(star);
      const adj = p.adjectiveStars.map(star);
      return {
        chi: chiIndex(p.earthlyBranch),
        chiName: p.earthlyBranch,
        canName: p.heavenlyStem,
        name: p.name,
        isBody: p.isBodyPalace,
        majorStars: p.majorStars.map(star),
        minorStars: bac ? minor.filter((x) => BAC_PHAI_MINOR.has(x.name)) : minor,
        adjectiveStars: bac ? [] : adj,
        truongSinh: p.changsheng12,
        bacSi: bac ? "" : p.boshi12,
        daiHan: { from: p.decadal.range[0], to: p.decadal.range[1] },
        tieuHanAges: p.ages,
        tuan: adj.some((x) => x.name === "Tuần Không"),
        triet: adj.some((x) => x.name === "Triệt Lộ"),
      };
    })
    .sort((x, y) => x.chi - y.chi);
  if (bac) phiHoaFor(palaces, s.ganzhi.year.can);

  // Vận hạn: lấy một ngày giữa năm âm xem (rằm tháng 6), dịch cùng số năm nếu dùng ngày tương đương
  let vanHan: VanHan | null = null;
  const mid = lunarToSolar(viewYear, 6, 15, false, 420);
  if (mid) {
    const h = a.horoscope(`${mid.y + args.yearShift}-${mid.m}-${mid.d}`);
    const byIndex = (i: number) => chiIndex((a.palaces[i] as { earthlyBranch: string }).earthlyBranch);
    const nameOf = (chi: number) => (palaces.find((p) => p.chi === chi) as TuViPalace).name;
    const where = new Map<string, number>();
    for (const p of palaces) for (const st of [...p.majorStars, ...p.minorStars]) where.set(st.name, p.chi);
    const dhChi = byIndex(h.decadal.index);
    const dhPal = palaces.find((p) => p.chi === dhChi) as TuViPalace;
    const luuStars: { name: string; chi: number }[] = [];
    (h.yearly.stars ?? []).forEach((list: { name: string }[], i: number) => list.forEach((st) => luuStars.push({ name: st.name, chi: byIndex(i) })));
    const vyChi = (((viewYear - 4) % 12) + 12) % 12;
    const vyCan = (((viewYear - 4) % 10) + 10) % 10;
    vanHan = {
      year: viewYear,
      yearName: `${CAN[vyCan]} ${CHI[vyChi]}`,
      age: h.age.nominalAge,
      daiHan: { chi: dhChi, palace: dhPal.name, from: dhPal.daiHan.from, to: dhPal.daiHan.to },
      tieuHan: { chi: byIndex(h.age.index), palace: nameOf(byIndex(h.age.index)) },
      luuThaiTue: { chi: byIndex(h.yearly.index), palace: nameOf(byIndex(h.yearly.index)) },
      luuStars,
      luuTuHoa: (h.yearly.mutagen as string[]).map((st, i) => ({ mutagen: MUTAGENS[i] as Mutagen, star: st, chi: where.get(st) ?? null })),
    };
  }

  return {
    yearName: s.ganzhi.year.name,
    amDuong: `${s.ganzhi.year.can % 2 === 0 ? "Dương" : "Âm"} ${gender === "nam" ? "Nam" : "Nữ"}`,
    hourChi: s.hour.chi,
    menhChi: chiIndex(a.earthlyBranchOfSoulPalace),
    thanChi: chiIndex(a.earthlyBranchOfBodyPalace),
    menhChu: a.soul,
    thanChu: a.body,
    cuc: a.fiveElementsClass,
    palaces,
    vanHan,
  };
}

export function buildTuVi(
  s: CalendarSnapshot,
  gender: Gender,
  config: TuViConfig = DEFAULT_TUVI_CONFIG,
  opts: TuViOptions = {},
): TuViChart {
  const info = SCHOOLS.find((x) => x.id === config.school);
  if (!info || !info.available) throw new Error(`Phái "${config.school}" chưa có.`);
  const viewYear = opts.viewYear ?? new Date().getUTCFullYear();
  const notes: string[] = [];
  const body =
    config.school === "vn-thien-luong" ? buildFromVn(s, gender, config, viewYear) : buildFromIztro(s, gender, config, viewYear, notes);
  const timeKnown = s.input.time !== null;
  if (s.lunar.leap) notes.push(`Sinh tháng nhuận: áp quy ước "${config.leapMonth}".`);
  if (!timeKnown) notes.push("Không rõ giờ sinh: lá số đang tạm lấy giờ Ngọ, vị trí cung Mệnh và nhiều sao có thể sai.");
  return {
    engineVersion: ENGINE_VERSION,
    calendarVersion: s.engineVersion,
    config,
    school: info.label,
    gender,
    lunar: { year: s.lunar.year, month: s.lunar.month, day: s.lunar.day, leap: s.lunar.leap },
    timeKnown,
    notes,
    ...body,
  };
}

/** Bản tóm tắt văn bản cho AI ở giai đoạn 2. */
export function toPromptContext(c: TuViChart): string {
  const fmt = (st: TuViStar) => `${st.name}${st.brightness ? ` (${st.brightness})` : ""}${st.mutagen ? ` [Hóa ${st.mutagen}]` : ""}`;
  const lines = [
    `Tử vi (${c.engineVersion}, phái ${c.school}). ${c.amDuong}, năm ${c.yearName}, ngày âm ${c.lunar.day}/${c.lunar.month}${c.lunar.leap ? " nhuận" : ""}/${c.lunar.year}, giờ ${CHI[c.hourChi]}.`,
    `Mệnh tại ${CHI[c.menhChi]}, Thân tại ${CHI[c.thanChi]}. Mệnh chủ ${c.menhChu}, Thân chủ ${c.thanChu}. ${c.cuc}.${c.banMenh ? ` Bản mệnh ${c.banMenh}.` : ""}`,
    ...c.palaces.map(
      (p) =>
        `Cung ${p.name}${p.isBody ? " (Thân)" : ""} tại ${p.canName} ${p.chiName}${p.tuan ? ", Tuần" : ""}${p.triet ? ", Triệt" : ""}, đại hạn ${p.daiHan.from}–${p.daiHan.to}: chính tinh ${
          p.majorStars.map(fmt).join(", ") || "vô chính diệu"
        }; phụ tinh ${[...p.minorStars, ...p.adjectiveStars].map(fmt).join(", ") || "không"}${
          p.phiHoa ? `; phi hóa: ${p.phiHoa.map((h) => `${h.mutagen} ${h.star}→${h.toChi === null ? "?" : CHI[h.toChi]}`).join(", ")}` : ""
        }.`,
    ),
  ];
  if (c.vanHan) {
    const v = c.vanHan;
    lines.push(
      `Vận hạn năm ${v.year} (${v.yearName}), tuổi mụ ${v.age}: đại hạn ${v.daiHan ? `cung ${v.daiHan.palace} (${v.daiHan.from}–${v.daiHan.to})` : "—"}, tiểu hạn cung ${v.tieuHan.palace}, lưu Thái Tuế cung ${v.luuThaiTue.palace}; lưu Tứ hóa ${v.luuTuHoa
        .map((h) => `${h.star} hóa ${h.mutagen}`)
        .join(", ")}.`,
    );
  }
  lines.push(...c.notes.map((n) => `Lưu ý: ${n}`));
  return lines.join("\n");
}

export { dichCung };
