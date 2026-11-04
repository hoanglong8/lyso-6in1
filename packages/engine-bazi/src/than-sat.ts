/**
 * Thần sát Bát tự — bảng tra theo Tam Mệnh Thông Hội / Uyên Hải Tử Bình (bản phổ biến).
 * Chỉ số: can Giáp = 0 … Quý = 9; chi Tý = 0 … Hợi = 11.
 *
 * Gốc tra (base) ghi rõ cho từng sao vì các sách khác nhau ở điểm này:
 *  - can ngày (có sao xét thêm can năm)
 *  - chi năm và chi ngày (nhóm Tam hợp)
 *  - chi tháng (Thiên đức, Nguyệt đức)
 *  - chi năm (Cô thần, Quả tú, Hồng loan, Thiên hỷ)
 * Dương nhận chỉ tính cho can dương — "âm nhận" có nhiều thuyết, không đưa vào.
 */
import { CAN, CHI, type GanZhi } from "@lyso/calendar-vn";

export type ThanSatKind = "cát" | "hung" | "trung";

export interface ThanSatHit {
  name: string;
  kind: ThanSatKind;
  /** Gốc tra, ví dụ "can ngày Giáp" */
  from: string;
}

export interface ThanSatDef {
  name: string;
  kind: ThanSatKind;
  meaning: string;
}

export const THAN_SAT: Record<string, ThanSatDef> = {
  "Thiên Ất quý nhân": { name: "Thiên Ất quý nhân", kind: "cát", meaning: "Quý nhân phù trợ, gặp nạn có người giúp." },
  "Thái cực quý nhân": { name: "Thái cực quý nhân", kind: "cát", meaning: "Thông minh, thiên hướng học thuật, huyền học." },
  "Văn Xương": { name: "Văn Xương", kind: "cát", meaning: "Học hành, văn chương, thi cử." },
  "Lộc thần": { name: "Lộc thần", kind: "cát", meaning: "Lộc của nhật chủ — nguồn thu, chỗ dựa." },
  "Dương nhận": { name: "Dương nhận", kind: "hung", meaning: "Cương mãnh; vượng quá dễ xung đột, tai nạn kim khí." },
  "Dịch mã": { name: "Dịch mã", kind: "trung", meaning: "Di chuyển, thay đổi, đi xa." },
  "Đào hoa": { name: "Đào hoa", kind: "trung", meaning: "Duyên, sức hút, quan hệ khác giới." },
  "Hoa cái": { name: "Hoa cái", kind: "trung", meaning: "Nghệ thuật, tôn giáo, cô độc thanh cao." },
  "Tướng tinh": { name: "Tướng tinh", kind: "cát", meaning: "Năng lực lãnh đạo, quyền uy." },
  "Kiếp sát": { name: "Kiếp sát", kind: "hung", meaning: "Hao tổn, bị cướp đoạt, tai bất ngờ." },
  "Vong thần": { name: "Vong thần", kind: "hung", meaning: "Mưu tính sâu; xấu thì thị phi, mất mát." },
  "Thiên đức": { name: "Thiên đức", kind: "cát", meaning: "Giải hung, gặp dữ hóa lành." },
  "Nguyệt đức": { name: "Nguyệt đức", kind: "cát", meaning: "Giải hung, tính hiền hòa." },
  "Khôi cương": { name: "Khôi cương", kind: "trung", meaning: "Cương quyết, thông minh; cực đoan khi gặp xung." },
  "Không vong": { name: "Không vong", kind: "hung", meaning: "Trụ gặp không: việc của trụ đó hư, khó trọn." },
  "Cô thần": { name: "Cô thần", kind: "hung", meaning: "Cô đơn (nam kỵ hơn)." },
  "Quả tú": { name: "Quả tú", kind: "hung", meaning: "Cô quả (nữ kỵ hơn)." },
  "Hồng loan": { name: "Hồng loan", kind: "cát", meaning: "Hôn nhân, hỷ sự." },
  "Thiên hỷ": { name: "Thiên hỷ", kind: "cát", meaning: "Tin vui, hỷ sự." },
};

const mod = (a: number, n: number) => ((a % n) + n) % n;

const THIEN_AT: number[][] = [[1, 7], [0, 8], [11, 9], [11, 9], [1, 7], [0, 8], [1, 7], [6, 2], [5, 3], [5, 3]];
const THAI_CUC: number[][] = [[0, 6], [0, 6], [9, 3], [9, 3], [4, 10, 1, 7], [4, 10, 1, 7], [2, 11], [2, 11], [5, 8], [5, 8]];
const VAN_XUONG = [5, 6, 8, 9, 8, 9, 11, 0, 2, 3];
const LOC = [2, 3, 5, 6, 5, 6, 8, 9, 11, 0];
const DUONG_NHAN: (number | null)[] = [3, null, 6, null, 6, null, 9, null, 0, null];

/** Nhóm Tam hợp theo chi % 4: 0 Thân Tý Thìn, 1 Tỵ Dậu Sửu, 2 Dần Ngọ Tuất, 3 Hợi Mão Mùi */
const TAM_HOP: Record<string, number[]> = {
  "Tướng tinh": [0, 9, 6, 3],
  "Hoa cái": [4, 1, 10, 7],
  "Đào hoa": [9, 6, 3, 0],
  "Dịch mã": [2, 11, 8, 5],
  "Kiếp sát": [5, 2, 11, 8],
  "Vong thần": [11, 8, 5, 2],
};

/** Thiên đức theo chi tháng: {can} hoặc {chi} */
const THIEN_DUC: { can?: number; chi?: number }[] = [
  { chi: 5 }, // Tý → Tỵ
  { can: 6 }, // Sửu → Canh
  { can: 3 }, // Dần → Đinh
  { chi: 8 }, // Mão → Thân
  { can: 8 }, // Thìn → Nhâm
  { can: 7 }, // Tỵ → Tân
  { chi: 11 }, // Ngọ → Hợi
  { can: 0 }, // Mùi → Giáp
  { can: 9 }, // Thân → Quý
  { chi: 2 }, // Dậu → Dần
  { can: 2 }, // Tuất → Bính
  { can: 1 }, // Hợi → Ất
];
/** Nguyệt đức theo nhóm tam hợp của chi tháng (chi % 4) */
const NGUYET_DUC = [8, 6, 2, 0]; // Nhâm, Canh, Bính, Giáp

const KHOI_CUONG = new Set(["Canh Thìn", "Canh Tuất", "Nhâm Thìn", "Mậu Tuất"]);

/** Hai chi Không vong (tuần không) của một can chi */
export function khongVong(g: GanZhi): [number, number] {
  const startChi = mod(g.index60 - (g.index60 % 10), 12);
  return [mod(startChi + 10, 12), mod(startChi + 11, 12)];
}

export interface ThanSatBases {
  year: GanZhi;
  month: GanZhi;
  day: GanZhi;
}

/** Thần sát mà một can chi `target` mang, xét theo các trụ gốc của lá số. */
export function thanSatOf(target: GanZhi, b: ThanSatBases, opts: { isDayPillar?: boolean; isYearPillar?: boolean } = {}): ThanSatHit[] {
  const hits: ThanSatHit[] = [];
  const add = (name: string, from: string) => {
    if (!hits.some((h) => h.name === name)) hits.push({ name, kind: (THAN_SAT[name] as ThanSatDef).kind, from });
  };
  const canNgay = `can ngày ${CAN[b.day.can]}`;
  const canNam = `can năm ${CAN[b.year.can]}`;
  const z = target.chi;

  if ((THIEN_AT[b.day.can] as number[]).includes(z)) add("Thiên Ất quý nhân", canNgay);
  else if ((THIEN_AT[b.year.can] as number[]).includes(z)) add("Thiên Ất quý nhân", canNam);
  if ((THAI_CUC[b.day.can] as number[]).includes(z)) add("Thái cực quý nhân", canNgay);
  else if ((THAI_CUC[b.year.can] as number[]).includes(z)) add("Thái cực quý nhân", canNam);
  if (VAN_XUONG[b.day.can] === z) add("Văn Xương", canNgay);
  if (LOC[b.day.can] === z) add("Lộc thần", canNgay);
  if (DUONG_NHAN[b.day.can] === z) add("Dương nhận", canNgay);

  for (const [name, table] of Object.entries(TAM_HOP)) {
    if (!opts.isYearPillar && table[b.year.chi % 4] === z) add(name, `chi năm ${CHI[b.year.chi]}`);
    else if (!opts.isDayPillar && table[b.day.chi % 4] === z) add(name, `chi ngày ${CHI[b.day.chi]}`);
  }

  const td = THIEN_DUC[b.month.chi] as { can?: number; chi?: number };
  if ((td.can !== undefined && td.can === target.can) || (td.chi !== undefined && td.chi === z))
    add("Thiên đức", `chi tháng ${CHI[b.month.chi]}`);
  if (NGUYET_DUC[b.month.chi % 4] === target.can) add("Nguyệt đức", `chi tháng ${CHI[b.month.chi]}`);

  if (opts.isDayPillar && KHOI_CUONG.has(target.name)) add("Khôi cương", "trụ ngày");
  if (!opts.isDayPillar && khongVong(b.day).includes(z)) add("Không vong", `tuần của ngày ${b.day.name}`);

  const season = Math.floor(mod(b.year.chi + 1, 12) / 3); // 0: Hợi Tý Sửu, 1: Dần Mão Thìn, 2: Tỵ Ngọ Mùi, 3: Thân Dậu Tuất
  if ([2, 5, 8, 11][season] === z) add("Cô thần", `chi năm ${CHI[b.year.chi]}`);
  if ([10, 1, 4, 7][season] === z) add("Quả tú", `chi năm ${CHI[b.year.chi]}`);
  const hongLoan = mod(3 - b.year.chi, 12);
  if (hongLoan === z) add("Hồng loan", `chi năm ${CHI[b.year.chi]}`);
  if (mod(hongLoan + 6, 12) === z) add("Thiên hỷ", `chi năm ${CHI[b.year.chi]}`);
  return hits;
}
