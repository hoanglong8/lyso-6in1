/**
 * Thái ất thần số (太乙神数) — tứ kế: niên kế, nguyệt kế, nhật kế, thời kế.
 *
 * Tích số (Thái ất Thống tông):
 *  - Niên kế: 10153917 + năm (dương độn). Ví dụ sách: 2004 Giáp Thân → dương độn 33 cục.
 *  - Nguyệt kế: (tích niên − 1) × 12 + 2 + tháng âm (dương độn). Ví dụ: tháng 6/2004 → 32 cục.
 *  - Nhật kế: đếm ngày liên tục, neo theo ví dụ sách 2004-06-01 (Tân Hợi) → dương độn 60 cục.
 *  - Thời kế: (tích nhật − 1) × 12 + chi giờ + 1; từ Hạ chí đến trước Đông chí dùng âm độn.
 *
 * Cung Thái ất (khác Lạc thư): 1 Càn, 2 Ly, 3 Cấn, 4 Chấn, 5 Trung, 6 Đoài, 7 Khôn, 8 Khảm, 9 Tốn.
 * Vòng 16 thần: Tý Sửu Cấn Dần Mão Thìn Tốn Tỵ Ngọ Mùi Khôn Thân Dậu Tuất Càn Hợi.
 */
import { CHI, jdnFromYmd, type CalendarSnapshot } from "@lyso/calendar-vn";

export const ENGINE_VERSION = "engine-thaiat@0.1.0";

const mod = (a: number, n: number) => ((a % n) + n) % n;

export const CUNG_TA = ["", "Càn", "Ly", "Cấn", "Chấn", "Trung", "Đoài", "Khôn", "Khảm", "Tốn"] as const;
/** Vòng 16 vị trí */
export const R16 = ["Tý", "Sửu", "Cấn", "Dần", "Mão", "Thìn", "Tốn", "Tỵ", "Ngọ", "Mùi", "Khôn", "Thân", "Dậu", "Tuất", "Càn", "Hợi"] as const;
export const THAN16 = [
  "Địa Chủ", "Dương Đức", "Hòa Đức", "Lã Thân", "Cao Tùng", "Thái Dương", "Đại Quýnh", "Đại Thần",
  "Đại Uy", "Thiên Đạo", "Đại Vũ", "Vũ Đức", "Thái Thốc", "Âm Chủ", "Âm Đức", "Đại Nghĩa",
] as const;
const chiToR16 = (z: number) => [0, 1, 3, 4, 5, 7, 8, 9, 11, 12, 13, 15][z] as number;
/** Gian thần (không phải chính cung hay góc) */
const GIAN = new Set([1, 3, 5, 7, 9, 11, 13, 15]);
/** Cung Thái ất của mỗi vị trí 16: gian thần tính vào cung kế tiếp theo chiều kim đồng hồ */
const R16_CUNG = [8, 3, 3, 4, 4, 9, 9, 2, 2, 7, 7, 6, 6, 1, 1, 8];
/** Vòng 8 cung Thái ất theo chiều kim đồng hồ từ Khảm */
const RING = [8, 3, 4, 9, 2, 7, 6, 1];

export type Ke = "nien" | "nguyet" | "nhat" | "thoi";
export const KE_LABEL: Record<Ke, string> = { nien: "Niên kế", nguyet: "Nguyệt kế", nhat: "Nhật kế", thoi: "Thời kế" };

export const TICH_NIEN = { "thong-tong": 10153917, "kim-kinh": 1936557 } as const;
export type TichNienBase = keyof typeof TICH_NIEN;
/** Hằng số nhật kế: cục = (JDN + 8971790) mod 72, neo ví dụ sách 2004-06-01 → 60 */
const NHAT_KE_CONST = 8971790;

export interface ThaiAtConfig {
  tichNien: TichNienBase;
}
export const DEFAULT_THAIAT_CONFIG: ThaiAtConfig = { tichNien: "thong-tong" };

export interface TichSo {
  ke: Ke;
  value: number;
  duong: boolean;
  /** Chi của đơn vị (năm/tháng/ngày/giờ) = Thái tuế */
  thaiTue: number;
}

export function tichNien(year: number, base: TichNienBase = "thong-tong") {
  return TICH_NIEN[base] + year;
}

export function tichSo(
  ke: Ke,
  p: { lunarYear: number; lunarMonth: number; dayJdn: number; hourChi: number; afterHaChi: boolean },
  base: TichNienBase = "thong-tong",
): TichSo {
  let value: number;
  if (ke === "nien") value = tichNien(p.lunarYear, base);
  else if (ke === "nguyet") value = (tichNien(p.lunarYear, base) - 1) * 12 + 2 + p.lunarMonth;
  else {
    const day = p.dayJdn + NHAT_KE_CONST;
    value = ke === "nhat" ? day : (day - 1) * 12 + p.hourChi + 1;
  }
  return { ke, value, duong: ke === "thoi" ? !p.afterHaChi : true, thaiTue: mod(value - 1, 12) };
}

export const cucOf = (t: TichSo) => mod(t.value, 72) || 72;

export interface Toan {
  value: number;
  daiTuong: number;
  thamTuong: number;
}

/** Tính toán từ vị trí `p` (vòng 16) đến cung Thái ất `ta`. */
export function toan(p: number, ta: number): number {
  const start = R16_CUNG[p] as number;
  const order = [...RING.slice(RING.indexOf(start)), ...RING.slice(0, RING.indexOf(start))];
  const before = order.slice(0, order.indexOf(ta));
  const sum = before.reduce((a, b) => a + b, 0);
  if (GIAN.has(p)) return sum + 1;
  return start === ta ? ta : sum;
}

/**
 * Đại tướng: bỏ hàng chục lấy hàng đơn vị; toán chẵn chục (10, 20, 30) thì lấy số chục (Vũ kinh tổng yếu:
 * toán 10 → cung 1, 30 → cung 3). Đơn vị 5 là Trung cung — tướng "không ra khỏi trung cung".
 * Tham tướng = đại tướng × 3, lấy hàng đơn vị.
 */
const tuong = (v: number) => {
  const d = v % 10 === 0 ? v / 10 : v % 10;
  return { daiTuong: d, thamTuong: (d * 3) % 10 };
};

const SEQ12 = ["Càn", "Ly", "Cấn", "Chấn", "Trung", "Đoài", "Khôn", "Khảm", "Tốn", "Tỵ", "Thân", "Dần"] as const;
const BAT_MON = ["Khai", "Hưu", "Sinh", "Thương", "Đỗ", "Cảnh", "Tử", "Kinh"] as const;

export interface ThaiAtChart {
  engineVersion: string;
  config: ThaiAtConfig;
  ke: Ke;
  tich: number;
  duong: boolean;
  cuc: number;
  /** Lý thiên / lý địa / lý nhân */
  ly: string;
  thaiAt: { cung: number; name: string; nam: number };
  thaiTue: number;
  keThan: number;
  hopThan: number;
  /** Vị trí trên vòng 16 */
  vanXuong: number;
  thuyKich: number;
  dinhMuc: number;
  chu: Toan;
  khach: Toan;
  dinh: Toan;
  tuThan: string;
  thienAt: string;
  diaAt: string;
  trucPhu: string;
  phiPhu: string;
  quanCo: number;
  thanCo: number;
  danCo: number;
  batMon: Record<number, string>;
  tamMon: "cụ" | "không cụ";
  notes: string[];
}

export function buildThaiAt(t: TichSo, config: ThaiAtConfig = DEFAULT_THAIAT_CONFIG): ThaiAtChart {
  const k = cucOf(t);
  const i3 = Math.floor((k - 1) / 3);
  const taSeq = t.duong ? [1, 2, 3, 4, 6, 7, 8, 9] : [9, 8, 7, 6, 4, 3, 2, 1];
  const ta = taSeq[i3 % 8] as number;

  // Văn xương: dương khởi Thân (Vũ Đức) thuận, dừng thêm ở Càn, Khôn; âm khởi Dần thuận, dừng thêm ở Tốn, Cấn
  const vxSeq: number[] = [];
  let p = t.duong ? 11 : 3;
  const dbl = t.duong ? new Set([14, 10]) : new Set([6, 2]);
  while (vxSeq.length < 18) {
    vxSeq.push(p);
    if (dbl.has(p)) vxSeq.push(p);
    p = mod(p + 1, 16);
  }
  const vx = vxSeq[(k - 1) % 18] as number;

  const tt = t.thaiTue;
  const keThan = mod(2 - tt, 12);
  const hopThan = mod(1 - tt, 12);
  // Thủy kích: đặt Kế thần lên Cấn (Hòa Đức), Văn xương ở đâu thì đó là thủy kích
  const thuyKich = mod(vx + 2 - chiToR16(keThan), 16);
  // Định mục: đặt Hợp thần lên Văn xương, đếm tới Thái tuế
  const dinhMuc = mod(vx + chiToR16(tt) - chiToR16(hopThan), 16);

  const mk = (pos: number): Toan => {
    const v = toan(pos, ta);
    return { value: v, ...tuong(v) };
  };

  const i36 = Math.floor(((k - 1) % 36) / 3);
  const fly = Math.floor((t.value % 360 % 36) / 3);
  const accDoor = Math.floor(mod(t.value, 240) / 30);
  const doorStart = BAT_MON[accDoor % 8] as string;
  const batMon: Record<number, string> = {};
  const ringFromTa = [...RING.slice(RING.indexOf(ta)), ...RING.slice(0, RING.indexOf(ta))];
  ringFromTa.forEach((c, j) => (batMon[c] = BAT_MON[mod(BAT_MON.indexOf(doorStart as never) + j, 8)] as string));

  return {
    engineVersion: ENGINE_VERSION,
    config,
    ke: t.ke,
    tich: t.value,
    duong: t.duong,
    cuc: k,
    ly: ["Lý thiên", "Lý địa", "Lý nhân"][(k - 1) % 3] as string,
    thaiAt: { cung: ta, name: CUNG_TA[ta] as string, nam: ((k - 1) % 3) + 1 },
    thaiTue: tt,
    keThan,
    hopThan,
    vanXuong: vx,
    thuyKich,
    dinhMuc,
    chu: mk(vx),
    khach: mk(thuyKich),
    dinh: mk(dinhMuc),
    tuThan: SEQ12[i36 % 12] as string,
    thienAt: SEQ12[(i36 + 5) % 12] as string,
    diaAt: SEQ12[(i36 + 8) % 12] as string,
    trucPhu: SEQ12[(i36 + 4) % 12] as string,
    phiPhu: fly === 0 ? "Trung" : (CHI[mod(4 + fly - 1, 12)] as string),
    quanCo: mod(6 + Math.floor(mod(t.value + 250, 360) / 30), 12),
    thanCo: mod(5 + Math.floor((((k - 1) % 36) + 1) / 3), 12),
    danCo: mod(8 + (k - 1), 12),
    batMon,
    tamMon: ["Hưu", "Sinh", "Khai"].includes(batMon[ta] as string) ? "không cụ" : "cụ",
    notes: [],
  };
}

export function buildThaiAtFromSnapshot(s: CalendarSnapshot, ke: Ke, config: ThaiAtConfig = DEFAULT_THAIAT_CONFIG): ThaiAtChart {
  const term = s.solarTerm.current.index; // 6..17: Hạ chí → trước Đông chí
  const t = tichSo(
    ke,
    { lunarYear: s.lunar.year, lunarMonth: s.lunar.month, dayJdn: s.dayJdn, hourChi: s.hour.chi, afterHaChi: term >= 6 && term <= 17 },
    config.tichNien,
  );
  const c = buildThaiAt(t, config);
  if (ke === "nhat") c.notes.push("Nhật kế neo theo ví dụ sách (2004-06-01 → dương độn 60 cục); kintaiyi dùng mốc khác, lệch 36 cục.");
  if (ke === "thoi") c.notes.push("Thời kế: chưa có ví dụ sách thống nhất để đối chiếu.");
  if (ke === "thoi" && s.input.time === null) c.notes.push("Không rõ giờ: đang lấy giờ Ngọ.");
  return c;
}

export const r16Name = (p: number) => R16[p] as string;

export function toPromptContext(c: ThaiAtChart): string {
  const pos = (p: number) => `${R16[p]} (${THAN16[p]})`;
  return [
    `Thái ất (${c.engineVersion}), ${KE_LABEL[c.ke]}, tích ${c.tich}. ${c.duong ? "Dương" : "Âm"} độn ${c.cuc} cục, ${c.ly}.`,
    `Thái ất ở cung ${c.thaiAt.cung} ${c.thaiAt.name} (năm thứ ${c.thaiAt.nam}). Thái tuế ${CHI[c.thaiTue]}, Kế thần ${CHI[c.keThan]}, Hợp thần ${CHI[c.hopThan]}.`,
    `Văn xương (chủ mục) ${pos(c.vanXuong)}; Thủy kích (khách mục) ${pos(c.thuyKich)}; Định mục ${pos(c.dinhMuc)}.`,
    `Chủ toán ${c.chu.value}: đại tướng cung ${c.chu.daiTuong}, tham tướng cung ${c.chu.thamTuong}. Khách toán ${c.khach.value}: đại tướng ${c.khach.daiTuong}, tham tướng ${c.khach.thamTuong}. Định toán ${c.dinh.value}: đại tướng ${c.dinh.daiTuong}, tham tướng ${c.dinh.thamTuong}.`,
    `Tứ thần ${c.tuThan}, Thiên ất ${c.thienAt}, Địa ất ${c.diaAt}, Trực phù ${c.trucPhu}, Phi phù ${c.phiPhu}. Quân cơ ${CHI[c.quanCo]}, Thần cơ ${CHI[c.thanCo]}, Dân cơ ${CHI[c.danCo]}. Tam môn ${c.tamMon}.`,
  ].join("\n");
}

export { jdnFromYmd };
