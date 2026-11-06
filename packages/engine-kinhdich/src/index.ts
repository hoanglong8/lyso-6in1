/**
 * Kinh dịch: 64 quẻ (thứ tự Văn Vương), lập quẻ (gieo xu, Mai Hoa theo thời gian / theo số),
 * hỗ quái, biến quái, và Lục hào nạp giáp (Kinh Phòng): bát cung, thế ứng, lục thân, lục thú,
 * phục thần, tuần không.
 *
 * Hào đánh số 1 (dưới cùng) → 6 (trên cùng). Một quái đơn là 3 bit [hào 1, hào 2, hào 3], 1 = dương.
 */
import { CAN, CHI, type CalendarSnapshot, type GanZhi } from "@lyso/calendar-vn";

export const ENGINE_VERSION = "engine-kinhdich@0.1.0";

const mod = (a: number, n: number) => ((a % n) + n) % n;

export interface Trigram {
  id: number; // 0..7 theo thứ tự dưới đây
  name: string;
  han: string;
  image: string; // Thiên, Trạch, Hỏa...
  lines: [number, number, number];
  /** Số Tiên thiên (Mai Hoa): Càn 1 … Khôn 8 */
  tienThien: number;
  element: number; // 0 Mộc 1 Hỏa 2 Thổ 3 Kim 4 Thủy
}

export const NGU_HANH = ["Mộc", "Hỏa", "Thổ", "Kim", "Thủy"] as const;

export const TRIGRAMS: Trigram[] = [
  { id: 0, name: "Càn", han: "乾", image: "Thiên", lines: [1, 1, 1], tienThien: 1, element: 3 },
  { id: 1, name: "Đoài", han: "兌", image: "Trạch", lines: [1, 1, 0], tienThien: 2, element: 3 },
  { id: 2, name: "Ly", han: "離", image: "Hỏa", lines: [1, 0, 1], tienThien: 3, element: 1 },
  { id: 3, name: "Chấn", han: "震", image: "Lôi", lines: [1, 0, 0], tienThien: 4, element: 0 },
  { id: 4, name: "Tốn", han: "巽", image: "Phong", lines: [0, 1, 1], tienThien: 5, element: 0 },
  { id: 5, name: "Khảm", han: "坎", image: "Thủy", lines: [0, 1, 0], tienThien: 6, element: 4 },
  { id: 6, name: "Cấn", han: "艮", image: "Sơn", lines: [0, 0, 1], tienThien: 7, element: 2 },
  { id: 7, name: "Khôn", han: "坤", image: "Địa", lines: [0, 0, 0], tienThien: 8, element: 2 },
];
const T = (name: string) => TRIGRAMS.find((t) => t.name === name) as Trigram;
export const trigramOf = (l: number[]) => TRIGRAMS.find((t) => t.lines.every((b, i) => b === l[i])) as Trigram;
export const trigramByTienThien = (n: number) => TRIGRAMS[mod(n - 1, 8)] as Trigram;

/** [số Văn Vương, tên ngắn, chữ Hán, quái thượng, quái hạ] */
const KW: [string, string, string, string][] = [
  ["Càn", "乾", "Càn", "Càn"], ["Khôn", "坤", "Khôn", "Khôn"], ["Truân", "屯", "Khảm", "Chấn"], ["Mông", "蒙", "Cấn", "Khảm"],
  ["Nhu", "需", "Khảm", "Càn"], ["Tụng", "訟", "Càn", "Khảm"], ["Sư", "師", "Khôn", "Khảm"], ["Tỷ", "比", "Khảm", "Khôn"],
  ["Tiểu Súc", "小畜", "Tốn", "Càn"], ["Lý", "履", "Càn", "Đoài"], ["Thái", "泰", "Khôn", "Càn"], ["Bĩ", "否", "Càn", "Khôn"],
  ["Đồng Nhân", "同人", "Càn", "Ly"], ["Đại Hữu", "大有", "Ly", "Càn"], ["Khiêm", "謙", "Khôn", "Cấn"], ["Dự", "豫", "Chấn", "Khôn"],
  ["Tùy", "隨", "Đoài", "Chấn"], ["Cổ", "蠱", "Cấn", "Tốn"], ["Lâm", "臨", "Khôn", "Đoài"], ["Quan", "觀", "Tốn", "Khôn"],
  ["Phệ Hạp", "噬嗑", "Ly", "Chấn"], ["Bí", "賁", "Cấn", "Ly"], ["Bác", "剝", "Cấn", "Khôn"], ["Phục", "復", "Khôn", "Chấn"],
  ["Vô Vọng", "無妄", "Càn", "Chấn"], ["Đại Súc", "大畜", "Cấn", "Càn"], ["Di", "頤", "Cấn", "Chấn"], ["Đại Quá", "大過", "Đoài", "Tốn"],
  ["Khảm", "坎", "Khảm", "Khảm"], ["Ly", "離", "Ly", "Ly"], ["Hàm", "咸", "Đoài", "Cấn"], ["Hằng", "恆", "Chấn", "Tốn"],
  ["Độn", "遯", "Càn", "Cấn"], ["Đại Tráng", "大壯", "Chấn", "Càn"], ["Tấn", "晉", "Ly", "Khôn"], ["Minh Di", "明夷", "Khôn", "Ly"],
  ["Gia Nhân", "家人", "Tốn", "Ly"], ["Khuê", "睽", "Ly", "Đoài"], ["Kiển", "蹇", "Khảm", "Cấn"], ["Giải", "解", "Chấn", "Khảm"],
  ["Tổn", "損", "Cấn", "Đoài"], ["Ích", "益", "Tốn", "Chấn"], ["Quải", "夬", "Đoài", "Càn"], ["Cấu", "姤", "Càn", "Tốn"],
  ["Tụy", "萃", "Đoài", "Khôn"], ["Thăng", "升", "Khôn", "Tốn"], ["Khốn", "困", "Đoài", "Khảm"], ["Tỉnh", "井", "Khảm", "Tốn"],
  ["Cách", "革", "Đoài", "Ly"], ["Đỉnh", "鼎", "Ly", "Tốn"], ["Chấn", "震", "Chấn", "Chấn"], ["Cấn", "艮", "Cấn", "Cấn"],
  ["Tiệm", "漸", "Tốn", "Cấn"], ["Quy Muội", "歸妹", "Chấn", "Đoài"], ["Phong", "豐", "Chấn", "Ly"], ["Lữ", "旅", "Ly", "Cấn"],
  ["Tốn", "巽", "Tốn", "Tốn"], ["Đoài", "兌", "Đoài", "Đoài"], ["Hoán", "渙", "Tốn", "Khảm"], ["Tiết", "節", "Khảm", "Đoài"],
  ["Trung Phu", "中孚", "Tốn", "Đoài"], ["Tiểu Quá", "小過", "Chấn", "Cấn"], ["Ký Tế", "既濟", "Khảm", "Ly"], ["Vị Tế", "未濟", "Ly", "Khảm"],
];

export interface Hexagram {
  /** Số thứ tự Văn Vương 1..64 */
  number: number;
  name: string;
  /** Tên đầy đủ: "Thủy Lôi Truân", "Thuần Càn" */
  fullName: string;
  han: string;
  upper: Trigram;
  lower: Trigram;
  /** 6 hào, [0] là hào 1 */
  lines: number[];
  /** Bát cung (Kinh Phòng) */
  palace: Trigram;
  /** 0 = bản cung (thuần), 1–5 = nhất thế … ngũ thế, 6 = du hồn, 7 = quy hồn */
  palaceRank: number;
  palaceRankName: string;
  /** Hào thế, hào ứng (1..6) */
  the: number;
  ung: number;
}

const RANK_NAME = ["Bản cung", "Nhất thế", "Nhị thế", "Tam thế", "Tứ thế", "Ngũ thế", "Du hồn", "Quy hồn"];
const THE_POS = [6, 1, 2, 3, 4, 5, 4, 3];

const key = (lines: number[]) => lines.join("");
const PALACE = new Map<string, { palace: Trigram; rank: number }>();
for (const t of TRIGRAMS) {
  let l = [...t.lines, ...t.lines];
  PALACE.set(key(l), { palace: t, rank: 0 });
  for (let i = 0; i < 5; i++) {
    l = [...l];
    l[i] = 1 - (l[i] as number);
    PALACE.set(key(l), { palace: t, rank: i + 1 });
  }
  l = [...l];
  l[3] = 1 - (l[3] as number); // du hồn: đổi lại hào 4
  PALACE.set(key(l), { palace: t, rank: 6 });
  l = [...t.lines, l[3] as number, l[4] as number, l[5] as number]; // quy hồn: nội quái trở về quái cung
  PALACE.set(key(l), { palace: t, rank: 7 });
}

export const HEXAGRAMS: Hexagram[] = KW.map(([name, han, up, lo], i) => {
  const upper = T(up);
  const lower = T(lo);
  const lines = [...lower.lines, ...upper.lines];
  const p = PALACE.get(key(lines)) as { palace: Trigram; rank: number };
  const the = THE_POS[p.rank] as number;
  return {
    number: i + 1,
    name,
    fullName: upper === lower ? `Thuần ${name}` : `${upper.image} ${lower.image} ${name}`,
    han,
    upper,
    lower,
    lines,
    palace: p.palace,
    palaceRank: p.rank,
    palaceRankName: RANK_NAME[p.rank] as string,
    the,
    ung: the > 3 ? the - 3 : the + 3,
  };
});

export const hexagramOf = (lines: number[]) => HEXAGRAMS.find((h) => key(h.lines) === key(lines)) as Hexagram;
export const hexagramFromTrigrams = (upper: Trigram, lower: Trigram) => hexagramOf([...lower.lines, ...upper.lines]);

// ——— Nạp giáp ———

const NAP_GIAP: Record<string, { inner: [number, number[]]; outer: [number, number[]] }> = {
  Càn: { inner: [0, [0, 2, 4]], outer: [8, [6, 8, 10]] },
  Khôn: { inner: [1, [7, 5, 3]], outer: [9, [1, 11, 9]] },
  Chấn: { inner: [6, [0, 2, 4]], outer: [6, [6, 8, 10]] },
  Tốn: { inner: [7, [1, 11, 9]], outer: [7, [7, 5, 3]] },
  Khảm: { inner: [4, [2, 4, 6]], outer: [4, [8, 10, 0]] },
  Ly: { inner: [5, [3, 1, 11]], outer: [5, [9, 7, 5]] },
  Cấn: { inner: [2, [4, 6, 8]], outer: [2, [10, 0, 2]] },
  Đoài: { inner: [3, [5, 3, 1]], outer: [3, [11, 9, 7]] },
};
const CHI_EL = [4, 2, 0, 0, 2, 1, 1, 2, 3, 3, 2, 4];
const khac = (a: number, b: number) => mod(b - a, 5) === 2;

export const LUC_THU = ["Thanh Long", "Chu Tước", "Câu Trần", "Đằng Xà", "Bạch Hổ", "Huyền Vũ"] as const;
const LUC_THU_START = [0, 0, 1, 1, 2, 3, 4, 4, 5, 5];

export function lucThan(palaceEl: number, el: number): string {
  if (el === palaceEl) return "Huynh đệ";
  if (mod(el + 1, 5) === palaceEl) return "Phụ mẫu";
  if (mod(palaceEl + 1, 5) === el) return "Tử tôn";
  if (khac(el, palaceEl)) return "Quan quỷ";
  return "Thê tài";
}

export interface NapGiapLine {
  pos: number; // 1..6
  can: number;
  chi: number;
  canChi: string;
  element: string;
  lucThan: string;
}

export function napGiap(h: Hexagram): NapGiapLine[] {
  const out: NapGiapLine[] = [];
  const inner = (NAP_GIAP[h.lower.name] as (typeof NAP_GIAP)[string]).inner;
  const outer = (NAP_GIAP[h.upper.name] as (typeof NAP_GIAP)[string]).outer;
  for (let i = 0; i < 6; i++) {
    const [can, chis] = i < 3 ? inner : outer;
    const chi = chis[i % 3] as number;
    out.push({
      pos: i + 1,
      can,
      chi,
      canChi: `${CAN[can]} ${CHI[chi]}`,
      element: NGU_HANH[CHI_EL[chi] as number] as string,
      lucThan: lucThan(h.palace.element, CHI_EL[chi] as number),
    });
  }
  return out;
}

// ——— Lập quẻ ———

/** Giá trị hào khi gieo: 6 lão âm (động), 7 thiếu dương, 8 thiếu âm, 9 lão dương (động). */
export type LineValue = 6 | 7 | 8 | 9;

export interface CastInput {
  method: "xu" | "mai-hoa-thoi-gian" | "mai-hoa-so";
  note: string;
  /** 6 giá trị, [0] là hào 1 */
  values: LineValue[];
}

/** Gieo 3 đồng xu × 6 lần. `rand` trả số ngẫu nhiên [0, 1); mặc định dùng crypto. Mặt ngửa = 3, sấp = 2. */
export function castCoins(rand: () => number = cryptoRandom): CastInput {
  const values = Array.from({ length: 6 }, () => {
    let s = 0;
    for (let i = 0; i < 3; i++) s += rand() < 0.5 ? 2 : 3;
    return s as LineValue;
  });
  return { method: "xu", note: "Gieo 3 đồng xu 6 lần (ngửa 3, sấp 2), từ hào 1 lên.", values };
}

function cryptoRandom(): number {
  const a = new Uint32Array(1);
  globalThis.crypto.getRandomValues(a);
  return (a[0] as number) / 2 ** 32;
}

function fromTrigramNumbers(upperN: number, lowerN: number, moving: number, method: CastInput["method"], note: string): CastInput {
  const upper = trigramByTienThien(upperN);
  const lower = trigramByTienThien(lowerN);
  const lines = [...lower.lines, ...upper.lines];
  const m = mod(moving - 1, 6);
  const values = lines.map((b, i) => (i === m ? (b ? 9 : 6) : b ? 7 : 8) as LineValue);
  return { method, note, values };
}

/**
 * Mai Hoa theo thời gian (Thiệu Khang Tiết): số năm (chi năm âm, Tý = 1) + tháng âm + ngày âm → thượng quái;
 * cộng thêm số giờ (Tý = 1) → hạ quái; tổng đó chia 6 lấy dư → hào động.
 */
export function castMaiHoaTime(s: CalendarSnapshot): CastInput {
  const y = s.ganzhi.year.chi + 1;
  const m = s.lunar.month;
  const d = s.lunar.day;
  const h = s.hour.chi + 1;
  const up = y + m + d;
  const total = up + h;
  return fromTrigramNumbers(
    mod(up, 8) || 8,
    mod(total, 8) || 8,
    mod(total, 6) || 6,
    "mai-hoa-thoi-gian",
    `Năm ${CHI[s.ganzhi.year.chi]} (${y}) + tháng ${m} + ngày ${d} = ${up} → thượng quái; + giờ ${CHI[s.hour.chi]} (${h}) = ${total} → hạ quái; ${total} chia 6 → hào ${mod(total, 6) || 6} động.`,
  );
}

/** Mai Hoa theo hai số do người hỏi nghĩ ra; hào động = (a + b + số giờ) chia 6, hoặc (a + b) nếu không dùng giờ. */
export function castMaiHoaNumbers(a: number, b: number, hourChi?: number): CastInput {
  const h = hourChi === undefined ? 0 : hourChi + 1;
  const total = a + b + h;
  return fromTrigramNumbers(
    mod(a, 8) || 8,
    mod(b, 8) || 8,
    mod(total, 6) || 6,
    "mai-hoa-so",
    `Số thứ nhất ${a} → thượng quái; số thứ hai ${b} → hạ quái; ${a} + ${b}${h ? ` + giờ ${h}` : ""} = ${total} chia 6 → hào ${mod(total, 6) || 6} động.`,
  );
}

// ——— Kết quả ———

export interface HaoLine extends NapGiapLine {
  value: LineValue;
  yang: boolean;
  moving: boolean;
  the: boolean;
  ung: boolean;
  lucThu: string | null;
  tuanKhong: boolean;
  /** Hào biến (nếu động) */
  bien?: NapGiapLine;
  /** Phục thần: lục thân thiếu trong quẻ chủ, lấy từ quẻ thuần của cung */
  phucThan?: NapGiapLine;
}

export interface Reading {
  engineVersion: string;
  cast: CastInput;
  main: Hexagram;
  changed: Hexagram | null;
  mutual: Hexagram;
  movingLines: number[];
  lines: HaoLine[];
  day: GanZhi | null;
  tuanKhong: [number, number] | null;
  /** Mai Hoa: thể – dụng */
  maiHoa?: { the: Trigram; dung: Trigram; relation: string };
}

export function tuanKhongOf(g: GanZhi): [number, number] {
  const s = mod(g.index60 - (g.index60 % 10), 12);
  return [mod(s + 10, 12), mod(s + 11, 12)];
}

const RELATION = (the: number, dung: number) => {
  if (the === dung) return "Tỷ hòa (cát)";
  if (mod(dung + 1, 5) === the) return "Dụng sinh Thể (đại cát)";
  if (mod(the + 1, 5) === dung) return "Thể sinh Dụng (hao tổn)";
  if (khac(the, dung)) return "Thể khắc Dụng (cát, việc thành chậm)";
  return "Dụng khắc Thể (hung)";
};

export function interpret(cast: CastInput, day: GanZhi | null = null): Reading {
  const yang = cast.values.map((v) => (v === 7 || v === 9 ? 1 : 0));
  const moving = cast.values.map((v) => v === 6 || v === 9);
  const main = hexagramOf(yang);
  const changedLines = yang.map((b, i) => (moving[i] ? 1 - b : b));
  const changed = moving.some(Boolean) ? hexagramOf(changedLines) : null;
  const mutual = hexagramOf([yang[1]!, yang[2]!, yang[3]!, yang[2]!, yang[3]!, yang[4]!]);
  const ng = napGiap(main);
  const ngChanged = changed ? napGiap(changed).map((l) => ({ ...l, lucThan: lucThan(main.palace.element, CHI_EL[l.chi] as number) })) : null;
  const pure = napGiap(hexagramFromTrigrams(main.palace, main.palace));
  const present = new Set(ng.map((l) => l.lucThan));
  const kv = day ? tuanKhongOf(day) : null;

  const lines: HaoLine[] = ng.map((l, i) => ({
    ...l,
    value: cast.values[i] as LineValue,
    yang: yang[i] === 1,
    moving: moving[i] as boolean,
    the: main.the === i + 1,
    ung: main.ung === i + 1,
    lucThu: day ? (LUC_THU[mod((LUC_THU_START[day.can] as number) + i, 6)] as string) : null,
    tuanKhong: kv ? kv.includes(l.chi) : false,
    ...(moving[i] && ngChanged ? { bien: ngChanged[i] } : {}),
    ...(!present.has((pure[i] as NapGiapLine).lucThan) ? { phucThan: pure[i] } : {}),
  }));

  const reading: Reading = {
    engineVersion: ENGINE_VERSION,
    cast,
    main,
    changed,
    mutual,
    movingLines: moving.flatMap((m, i) => (m ? [i + 1] : [])),
    lines,
    day,
    tuanKhong: kv,
  };
  if (cast.method !== "xu" && reading.movingLines.length === 1) {
    const m = reading.movingLines[0] as number;
    const dung = m <= 3 ? main.lower : main.upper;
    const the = m <= 3 ? main.upper : main.lower;
    reading.maiHoa = { the, dung, relation: RELATION(the.element, dung.element) };
  }
  return reading;
}

export function toPromptContext(r: Reading): string {
  const out = [
    `Kinh dịch (${r.engineVersion}). ${r.cast.note}`,
    `Quẻ chủ: ${r.main.fullName} (${r.main.han}, số ${r.main.number}), cung ${r.main.palace.name} ${r.main.palaceRankName}, thế hào ${r.main.the}, ứng hào ${r.main.ung}.`,
    `Hỗ quái: ${r.mutual.fullName}. ${r.changed ? `Quẻ biến: ${r.changed.fullName}.` : "Không có hào động."} Hào động: ${r.movingLines.join(", ") || "không"}.`,
    ...[...r.lines].reverse().map(
      (l) =>
        `Hào ${l.pos}: ${l.yang ? "dương" : "âm"}${l.moving ? " động" : ""}, ${l.canChi} ${l.element}, ${l.lucThan}${l.the ? ", Thế" : ""}${l.ung ? ", Ứng" : ""}${
          l.lucThu ? `, ${l.lucThu}` : ""
        }${l.tuanKhong ? ", tuần không" : ""}${l.bien ? ` → biến ${l.bien.canChi} ${l.bien.lucThan}` : ""}${l.phucThan ? `; phục ${l.phucThan.canChi} ${l.phucThan.lucThan}` : ""}`,
    ),
  ];
  if (r.maiHoa) out.push(`Mai Hoa: Thể ${r.maiHoa.the.name}, Dụng ${r.maiHoa.dung.name} — ${r.maiHoa.relation}.`);
  return out.join("\n");
}
