/**
 * Kỳ môn độn giáp — thời gia, chuyển bàn.
 *
 * Hai phần tách riêng:
 *  1. Định cục (âm/dương độn, số cục 1–9) — ba phương pháp: Sách bổ (拆补), Mão sơn (茅山), Trí nhuận (置闰).
 *  2. Dựng bàn từ cục + can chi giờ: địa bàn, thiên bàn, cửu tinh, bát môn, bát thần, trực phù, trực sử.
 *
 * Cung đánh số theo Lạc thư: 1 Khảm, 2 Khôn, 3 Chấn, 4 Tốn, 5 Trung, 6 Càn, 7 Đoài, 8 Cấn, 9 Ly.
 */
import {
  CAN,
  CHI,
  TIET_KHI,
  jdnFromYmd,
  nextSunLongitude,
  prevSunLongitude,
  type CalendarSnapshot,
  type GanZhi,
} from "@lyso/calendar-vn";

export const ENGINE_VERSION = "engine-kymon@0.1.0";

const mod = (a: number, n: number) => ((a % n) + n) % n;

export const CUNG = ["", "Khảm", "Khôn", "Chấn", "Tốn", "Trung", "Càn", "Đoài", "Cấn", "Ly"] as const;
export const HUONG = ["", "Bắc", "Tây Nam", "Đông", "Đông Nam", "Trung tâm", "Tây Bắc", "Tây", "Đông Bắc", "Nam"] as const;
/** Vòng 8 cung theo chiều kim đồng hồ, dùng để xoay */
export const RING = [1, 8, 3, 4, 9, 2, 7, 6] as const;
export const SAO = ["", "Thiên Bồng", "Thiên Nhuế", "Thiên Xung", "Thiên Phụ", "Thiên Cầm", "Thiên Tâm", "Thiên Trụ", "Thiên Nhậm", "Thiên Anh"] as const;
export const MON = ["", "Hưu", "Tử", "Thương", "Đỗ", "", "Khai", "Kinh", "Sinh", "Cảnh"] as const;
export const THAN = ["Trực Phù", "Đằng Xà", "Thái Âm", "Lục Hợp", "Bạch Hổ", "Huyền Vũ", "Cửu Địa", "Cửu Thiên"] as const;
/** Tam kỳ lục nghi theo thứ tự bố: Mậu Kỷ Canh Tân Nhâm Quý Đinh Bính Ất (chỉ số can) */
const NGHI = [4, 5, 6, 7, 8, 9, 3, 2, 1];
/** Tuần thủ → nghi: Giáp Tý Mậu, Giáp Tuất Kỷ, Giáp Thân Canh, Giáp Ngọ Tân, Giáp Thìn Nhâm, Giáp Dần Quý */
const TUAN_NGHI = [4, 5, 6, 7, 8, 9];
const TUAN_TEN = ["Giáp Tý", "Giáp Tuất", "Giáp Thân", "Giáp Ngọ", "Giáp Thìn", "Giáp Dần"];

/** Số cục [thượng, trung, hạ] theo 24 tiết, chỉ số 0 = Xuân phân (như calendar-vn) */
export const CUC_TABLE: [number, number, number][] = [
  [3, 9, 6], [4, 1, 7], [5, 2, 8], [4, 1, 7], [5, 2, 8], [6, 3, 9], // Xuân phân … Mang chủng (dương)
  [9, 3, 6], [8, 2, 5], [7, 1, 4], [2, 5, 8], [1, 4, 7], [9, 3, 6], // Hạ chí … Bạch lộ (âm)
  [7, 1, 4], [6, 9, 3], [5, 8, 2], [6, 9, 3], [5, 8, 2], [4, 7, 1], // Thu phân … Đại tuyết (âm)
  [1, 7, 4], [2, 8, 5], [3, 9, 6], [8, 5, 2], [9, 6, 3], [1, 7, 4], // Đông chí … Kinh trập (dương)
];
export const isDuongTerm = (term: number) => term >= 18 || term <= 5;
const NGUYEN = ["Thượng", "Trung", "Hạ"] as const;

export type DinhCucMethod = "sach-bo" | "mao-son" | "tri-nhuan";

export interface Cuc {
  duong: boolean;
  so: number;
  term: number;
  termName: string;
  nguyen: 0 | 1 | 2;
  method: DinhCucMethod;
  note: string;
}

const cucOf = (term: number, nguyen: 0 | 1 | 2, method: DinhCucMethod, note: string): Cuc => ({
  duong: isDuongTerm(term),
  so: (CUC_TABLE[term] as [number, number, number])[nguyen],
  term,
  termName: TIET_KHI[term] as string,
  nguyen,
  method,
  note,
});

/** Nguyên theo phù đầu: ngày Giáp/Kỷ gần nhất có chi Tý Ngọ Mão Dậu → thượng, Dần Thân Tỵ Hợi → trung, Thìn Tuất Sửu Mùi → hạ. */
export const nguyenByPhuDau = (day: GanZhi) => Math.floor(mod(day.index60, 15) / 5) as 0 | 1 | 2;

/** Sách bổ: tiết theo thời điểm, nguyên theo phù đầu của ngày. */
export function cucSachBo(term: number, day: GanZhi): Cuc {
  const n = nguyenByPhuDau(day);
  const phuDau = mod(day.index60 - mod(day.index60, 5), 60);
  return cucOf(term, n, "sach-bo", `Tiết ${TIET_KHI[term]}; phù đầu ngày ${CAN[phuDau % 10]} ${CHI[phuDau % 12]} → ${NGUYEN[n]} nguyên`);
}

/** Mão sơn: tiết theo thời điểm, nguyên theo số ngày từ lúc giao tiết (mỗi nguyên 5 ngày). */
export function cucMaoSon(term: number, msSinceTerm: number): Cuc {
  const days = msSinceTerm / 86_400_000;
  const n = (days < 5 ? 0 : days < 10 ? 1 : 2) as 0 | 1 | 2;
  return cucOf(term, n, "mao-son", `Tiết ${TIET_KHI[term]}, đã giao ${days.toFixed(1)} ngày → ${NGUYEN[n]} nguyên`);
}

// ——— Trí nhuận (siêu thần, tiếp khí, đặt nhuận ở Mang chủng / Đại tuyết) ———

const MANG_CHUNG = 5;
const DAI_TUYET = 17;
/** Siêu thần từ ngưỡng này (số ngày lịch phù đầu đi trước tiết kế) thì đặt nhuận */
export const TRI_NHUAN_THRESHOLD = 8;

const DAY_MS = 86_400_000;
/** JDN của ngày địa phương chứa thời điểm `d` */
const localJdn = (d: Date, offsetMin: number) => {
  const w = new Date(d.getTime() + offsetMin * 60_000);
  return jdnFromYmd(w.getUTCFullYear(), w.getUTCMonth() + 1, w.getUTCDate());
};

/** Ngày (JDN địa phương) giao tiết của tiết `term` gần `nearJdn` nhất */
function termStartJdn(term: number, nearJdn: number, offsetMin: number): number {
  const near = new Date((nearJdn - 2440588) * DAY_MS);
  const a = localJdn(prevSunLongitude(term * 15, new Date(near.getTime() + 20 * DAY_MS)), offsetMin);
  return a;
}

export interface TriNhuanBlock {
  start: number; // JDN phù đầu thượng nguyên
  term: number;
  leap: boolean;
  /** Số ngày tiết đi sau phù đầu (dương = siêu thần, âm = tiếp khí) */
  offset: number;
}

/** Dựng chuỗi khối 15 ngày từ trước `targetJdn` khoảng 6 năm cho tới khối chứa `targetJdn`. */
export function triNhuanChain(targetJdn: number, offsetMin: number): TriNhuanBlock[] {
  // ngày Giáp Tý: JDN mod 60 == 11 (vì can = (jdn+9)%10, chi = (jdn+1)%12)
  const start0 = targetJdn - 6 * 365;
  let f = start0 + mod(11 - start0, 15); // phù đầu thượng nguyên: chỉ số 60 ∈ {0, 15, 30, 45}
  // gán tiết ban đầu: tiết có ngày giao gần phù đầu nhất
  let best = { term: 0, d: Infinity, s: 0 };
  for (let t = 0; t < 24; t++) {
    const s = termStartJdn(t, f, offsetMin);
    const d = Math.abs(s - f);
    if (d < best.d) best = { term: t, d, s };
  }
  const chain: TriNhuanBlock[] = [{ start: f, term: best.term, leap: false, offset: best.s - f }];
  while (f + 15 <= targetJdn) {
    const prev = chain[chain.length - 1] as TriNhuanBlock;
    f += 15;
    const cand = mod(prev.term + 1, 24);
    const sCand = termStartJdn(cand, f, offsetMin);
    if ((prev.term === MANG_CHUNG || prev.term === DAI_TUYET) && !prev.leap && sCand - f >= TRI_NHUAN_THRESHOLD) {
      chain.push({ start: f, term: prev.term, leap: true, offset: termStartJdn(prev.term, f, offsetMin) - f });
    } else {
      chain.push({ start: f, term: cand, leap: false, offset: sCand - f });
    }
  }
  return chain;
}

export function cucTriNhuan(dayJdn: number, offsetMin: number): Cuc {
  const chain = triNhuanChain(dayJdn, offsetMin);
  const b = chain[chain.length - 1] as TriNhuanBlock;
  const n = Math.floor((dayJdn - b.start) / 5) as 0 | 1 | 2;
  const kind = b.leap ? "nhuận" : b.offset > 0 ? `siêu thần ${b.offset} ngày` : b.offset < 0 ? `tiếp khí ${-b.offset} ngày` : "chính thụ";
  return cucOf(b.term, n, "tri-nhuan", `Phù đầu thượng nguyên ngày ${dayJdn - b.start} trước; ${TIET_KHI[b.term]} (${kind}) → ${NGUYEN[n]} nguyên`);
}

export function dinhCuc(s: CalendarSnapshot, method: DinhCucMethod): Cuc {
  if (method === "tri-nhuan") return cucTriNhuan(s.dayJdn, s.utcOffset.minutes);
  const term = s.solarTerm.current.index;
  if (method === "mao-son") return cucMaoSon(term, new Date(s.instantUtc).getTime() - new Date(s.solarTerm.current.instant).getTime());
  return cucSachBo(term, s.ganzhi.day);
}

// ——— Dựng bàn ———

export interface KyMonConfig {
  dinhCuc: DinhCucMethod;
  /** Trung cung ký vào đâu: "khon" — luôn ký Khôn 2 (thông dụng); "duong-can-am-khon" — dương độn ký Cấn 8, âm độn ký Khôn 2 */
  kyCung: "khon" | "duong-can-am-khon";
}

export const DEFAULT_KYMON_CONFIG: KyMonConfig = { dinhCuc: "sach-bo", kyCung: "khon" };

export interface Palace {
  cung: number;
  name: string;
  /** Can địa bàn (chỉ số can); cung 2 hoặc cung ký có thể mang thêm can trung cung */
  dia: number[];
  /** Can thiên bàn */
  thien: number[];
  sao: string[];
  mon: string | null;
  than: string | null;
  tuanKhong: boolean;
  maTinh: boolean;
}

export interface KyMonChart {
  engineVersion: string;
  config: KyMonConfig;
  cuc: Cuc;
  hour: GanZhi;
  day: GanZhi;
  tuanThu: string;
  phuThu: number; // can nghi
  trucPhu: { sao: string; tuCung: number; denCung: number };
  trucSu: { mon: string; tuCung: number; denCung: number };
  palaces: Palace[]; // chỉ số 1..9 (0 bỏ trống)
  phucNgam: boolean;
  phanNgam: boolean;
  notes: string[];
}

const CHI_CUNG = [1, 8, 8, 3, 4, 4, 9, 2, 2, 7, 6, 6];
const DICH_MA = (z: number) => [2, 11, 8, 5][z % 4] as number;

export function buildKyMon(cuc: Cuc, day: GanZhi, hour: GanZhi, config: KyMonConfig = DEFAULT_KYMON_CONFIG): KyMonChart {
  const ky = config.kyCung === "khon" || !cuc.duong ? 2 : 8;
  const real = (c: number) => (c === 5 ? ky : c);

  // Địa bàn: bố 9 can theo số cung, dương thuận âm nghịch
  const diaAt: number[] = new Array(10).fill(-1);
  for (let i = 0; i < 9; i++) {
    const c = cuc.duong ? mod(cuc.so - 1 + i, 9) + 1 : mod(cuc.so - 1 - i, 9) + 1;
    diaAt[c] = NGHI[i] as number;
  }
  const cungOfCan = (can: number) => diaAt.indexOf(can);

  const tuan = Math.floor(hour.index60 / 10);
  const phuThu = TUAN_NGHI[tuan] as number;
  const steps = hour.index60 % 10;
  const fromCung = cungOfCan(phuThu); // có thể là 5
  const hourCan = hour.can === 0 ? phuThu : hour.can; // giờ Giáp ẩn dưới nghi của tuần
  const toCungRaw = cungOfCan(hourCan);
  const from = real(fromCung);
  const to = real(toCungRaw);
  const shift = mod(RING.indexOf(to as never) - RING.indexOf(from as never), 8);
  const ringAt = (c: number, k: number) => RING[mod(RING.indexOf(c as never) + k, 8)] as number;

  const palaces: Palace[] = Array.from({ length: 10 }, (_, c) => ({
    cung: c,
    name: CUNG[c] as string,
    dia: c ? [diaAt[c] as number] : [],
    thien: [],
    sao: [],
    mon: null,
    than: null,
    tuanKhong: false,
    maTinh: false,
  }));
  // can trung cung hiện kèm ở cung ký
  palaces[ky]!.dia.push(diaAt[5] as number);
  palaces[5]!.dia = [diaAt[5] as number];

  // Cửu tinh & thiên bàn: sao ở cung c (vòng ngoài) dời tới ringAt(c, shift), mang can địa bàn của cung gốc
  for (const c of RING) {
    const dst = ringAt(c, shift);
    palaces[dst]!.sao.push(SAO[c] as string);
    palaces[dst]!.thien.push(diaAt[c] as number);
    if (c === ky) {
      palaces[dst]!.sao.push(SAO[5] as string);
      palaces[dst]!.thien.push(diaAt[5] as number);
    }
  }

  // Bát môn: trực sử theo số giờ trong tuần, dương thuận âm nghịch theo số cung 1–9, gặp 5 thì ký
  const monFrom = from;
  const monToRaw = cuc.duong ? mod(fromCung - 1 + steps, 9) + 1 : mod(fromCung - 1 - steps, 9) + 1;
  const monTo = real(monToRaw);
  const monShift = mod(RING.indexOf(monTo as never) - RING.indexOf(monFrom as never), 8);
  for (const c of RING) palaces[ringAt(c, monShift)]!.mon = MON[c] as string;

  // Bát thần: Trực Phù theo trực phù tinh, dương thuận âm nghịch
  for (let i = 0; i < 8; i++) palaces[ringAt(to, cuc.duong ? i : -i)]!.than = THAN[i] as string;

  // Tuần không & mã tinh theo trụ giờ
  const startChi = mod(hour.index60 - steps, 12);
  const kong = [mod(startChi + 10, 12), mod(startChi + 11, 12)];
  for (const z of kong) palaces[CHI_CUNG[z] as number]!.tuanKhong = true;
  palaces[CHI_CUNG[DICH_MA(hour.chi)] as number]!.maTinh = true;

  const notes: string[] = [];
  if (fromCung === 5) notes.push(`Phù thủ ở trung cung, ký ${CUNG[ky]} ${ky}.`);
  return {
    engineVersion: ENGINE_VERSION,
    config,
    cuc,
    hour,
    day,
    tuanThu: TUAN_TEN[tuan] as string,
    phuThu,
    trucPhu: { sao: SAO[fromCung === 5 ? 5 : from] as string, tuCung: fromCung, denCung: to },
    trucSu: { mon: MON[monFrom] as string, tuCung: fromCung, denCung: monTo },
    palaces,
    phucNgam: shift === 0,
    phanNgam: shift === 4,
    notes,
  };
}

export function buildKyMonFromSnapshot(s: CalendarSnapshot, config: KyMonConfig = DEFAULT_KYMON_CONFIG): KyMonChart {
  const cuc = dinhCuc(s, config.dinhCuc);
  const c = buildKyMon(cuc, s.ganzhi.day, s.ganzhi.hour, config);
  if (s.input.time === null) c.notes.push("Không rõ giờ: bàn đang lấy giờ Ngọ.");
  return c;
}

export function toPromptContext(c: KyMonChart): string {
  const canName = (x: number) => CAN[x] as string;
  return [
    `Kỳ môn độn giáp (${c.engineVersion}), chuyển bàn. ${c.cuc.duong ? "Dương" : "Âm"} độn ${c.cuc.so} cục, ${c.cuc.termName} ${NGUYEN[c.cuc.nguyen]} nguyên (${c.cuc.method}). ${c.cuc.note}.`,
    `Ngày ${c.day.name}, giờ ${c.hour.name}; tuần ${c.tuanThu}, phù thủ ${canName(c.phuThu)}. Trực phù ${c.trucPhu.sao} đến cung ${c.trucPhu.denCung}; trực sử ${c.trucSu.mon} môn đến cung ${c.trucSu.denCung}.${c.phucNgam ? " Phục ngâm." : ""}${c.phanNgam ? " Phản ngâm." : ""}`,
    ...[1, 8, 3, 4, 9, 2, 7, 6, 5].map((k) => {
      const p = c.palaces[k] as Palace;
      return `Cung ${k} ${p.name}: thiên ${p.thien.map(canName).join("/") || "—"} trên địa ${p.dia.map(canName).join("/")}; ${p.sao.join(", ") || "—"}; ${p.mon ? `${p.mon} môn` : "—"}; ${p.than ?? "—"}${p.tuanKhong ? "; tuần không" : ""}${p.maTinh ? "; mã tinh" : ""}`;
    }),
  ].join("\n");
}
