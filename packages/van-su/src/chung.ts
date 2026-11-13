/** Bảng dùng chung: ngũ hành của can, chi; quan hệ địa chi; cung phi Bát trạch */
export const HANH_CAN = ["Mộc", "Mộc", "Hỏa", "Hỏa", "Thổ", "Thổ", "Kim", "Kim", "Thủy", "Thủy"];
export const SINH: Record<string, string> = { Mộc: "Hỏa", Hỏa: "Thổ", Thổ: "Kim", Kim: "Thủy", Thủy: "Mộc" };
export const KHAC: Record<string, string> = { Mộc: "Thổ", Thổ: "Thủy", Thủy: "Hỏa", Hỏa: "Kim", Kim: "Mộc" };
const m12 = (x: number) => ((x % 12) + 12) % 12;

export const tamHop = (a: number, b: number) => a !== b && m12(a - b) % 4 === 0;
export const lucHop = (a: number, b: number) => m12(a + b) === 1;
export const lucXung = (a: number, b: number) => m12(a - b) === 6;
/** Lục hại: Tý–Mùi, Sửu–Ngọ, Dần–Tỵ, Mão–Thìn, Thân–Hợi, Dậu–Tuất (tổng chỉ số ≡ 7 mod 12) */
export const lucHai = (a: number, b: number) => m12(a + b) === 7;
/** Can ngũ hợp: Giáp–Kỷ, Ất–Canh, Bính–Tân, Đinh–Nhâm, Mậu–Quý */
export const canHop = (a: number, b: number) => Math.abs(a - b) === 5;
/** Can tương khắc (a khắc b) */
export const canKhac = (a: number, b: number) => KHAC[HANH_CAN[a]!] === HANH_CAN[b];

export const CUNG_PHI = ["", "Khảm", "Khôn", "Chấn", "Tốn", "", "Càn", "Đoài", "Cấn", "Ly"];
export const DONG_TU = new Set(["Khảm", "Ly", "Chấn", "Tốn"]);
/** Cung phi (quái số Lạc thư) theo năm âm lịch và giới tính */
export function cungPhi(namAm: number, gioi: "nam" | "nu"): string {
  const r = namAm % 9;
  let k = gioi === "nam" ? (11 - r) % 9 : (r + 4) % 9;
  if (k === 0) k = 9;
  if (k === 5) return gioi === "nam" ? "Khôn" : "Cấn";
  return CUNG_PHI[k]!;
}
/** Bát trạch: du niên giữa hai cung (cung người 1 → cung người 2) */
const BAT_TRACH: Record<string, string[]> = {
  // thứ tự: Phục vị, Sinh khí, Thiên y, Diên niên, Tuyệt mệnh, Ngũ quỷ, Lục sát, Họa hại
  Khảm: ["Khảm", "Tốn", "Chấn", "Ly", "Khôn", "Cấn", "Càn", "Đoài"],
  Ly: ["Ly", "Chấn", "Tốn", "Khảm", "Càn", "Đoài", "Khôn", "Cấn"],
  Chấn: ["Chấn", "Ly", "Khảm", "Tốn", "Đoài", "Càn", "Cấn", "Khôn"],
  Tốn: ["Tốn", "Khảm", "Ly", "Chấn", "Cấn", "Khôn", "Đoài", "Càn"],
  Càn: ["Càn", "Đoài", "Cấn", "Khôn", "Ly", "Chấn", "Khảm", "Tốn"],
  Khôn: ["Khôn", "Cấn", "Đoài", "Càn", "Khảm", "Tốn", "Ly", "Chấn"],
  Cấn: ["Cấn", "Khôn", "Càn", "Đoài", "Tốn", "Khảm", "Chấn", "Ly"],
  Đoài: ["Đoài", "Càn", "Khôn", "Cấn", "Chấn", "Ly", "Tốn", "Khảm"],
};
export const DU_NIEN = ["Phục vị", "Sinh khí", "Thiên y", "Diên niên", "Tuyệt mệnh", "Ngũ quỷ", "Lục sát", "Họa hại"];
export const duNien = (a: string, b: string) => DU_NIEN[BAT_TRACH[a]!.indexOf(b)]!;
