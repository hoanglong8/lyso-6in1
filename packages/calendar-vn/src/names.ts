/** Tên gọi tiếng Việt (Hán Việt) dùng chung cho mọi môn. */

export const CAN = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"] as const;
export const CAN_HAN = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"] as const;

export const CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"] as const;
export const CHI_HAN = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"] as const;

/** Con giáp theo truyền thống Việt Nam (năm Mão là Mèo, năm Sửu là Trâu). */
export const CON_GIAP = ["Chuột", "Trâu", "Hổ", "Mèo", "Rồng", "Rắn", "Ngựa", "Dê", "Khỉ", "Gà", "Chó", "Lợn"] as const;

export const THANG_AM = [
  "Giêng", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy", "Tám", "Chín", "Mười", "Một", "Chạp",
] as const;

/** 24 tiết khí, chỉ số k ứng với kinh độ Mặt Trời k × 15°. */
export const TIET_KHI = [
  "Xuân phân", "Thanh minh", "Cốc vũ", "Lập hạ", "Tiểu mãn", "Mang chủng",
  "Hạ chí", "Tiểu thử", "Đại thử", "Lập thu", "Xử thử", "Bạch lộ",
  "Thu phân", "Hàn lộ", "Sương giáng", "Lập đông", "Tiểu tuyết", "Đại tuyết",
  "Đông chí", "Tiểu hàn", "Đại hàn", "Lập xuân", "Vũ thủy", "Kinh trập",
] as const;

export const TIET_KHI_HAN = [
  "春分", "清明", "谷雨", "立夏", "小满", "芒种",
  "夏至", "小暑", "大暑", "立秋", "处暑", "白露",
  "秋分", "寒露", "霜降", "立冬", "小雪", "大雪",
  "冬至", "小寒", "大寒", "立春", "雨水", "惊蛰",
] as const;

/** Khung giờ của 12 chi (giờ đồng hồ hoặc giờ mặt trời, tùy cấu hình). */
export const GIO_KHUNG = [
  "23:00–00:59", "01:00–02:59", "03:00–04:59", "05:00–06:59", "07:00–08:59", "09:00–10:59",
  "11:00–12:59", "13:00–14:59", "15:00–16:59", "17:00–18:59", "19:00–20:59", "21:00–22:59",
] as const;

export function canChiName(canIndex: number, chiIndex: number): string {
  return `${CAN[canIndex]} ${CHI[chiIndex]}`;
}
