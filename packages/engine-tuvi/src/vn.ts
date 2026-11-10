/**
 * An sao Tử vi theo phái Việt Nam.
 *
 * Quy tắc chuyển từ lasotuvi (MIT, © 2016 doanguyen — https://github.com/doanguyen/lasotuvi),
 * bộ mã ghi rõ nhiều quy tắc theo cụ Thiên Lương ("Tử vi nghiệm lý", "Số tử vi dưới mắt khoa học"):
 * Tứ hóa theo 10 câu của cụ Thiên Lương, vòng Tràng sinh thuận/nghịch theo âm dương nam nữ,
 * Hỏa–Linh theo âm dương nam nữ, Thiên Giải đếm nhảy cung, Thiên Thương ở Nô, Thiên Sứ ở Tật…
 *
 * Quy ước nội bộ giống lasotuvi để dễ đối chiếu: cung đánh số 1–12 (Tý = 1), can 1–10 (Giáp = 1),
 * chi 1–12, giờ 1–12 (Tý = 1), giới tính 1 (nam) / −1 (nữ).
 * Khác lasotuvi một chỗ, có chủ ý: Mệnh chủ theo chi cung Mệnh, Thân chủ theo chi năm sinh
 * (lasotuvi tra nhầm theo can năm).
 */

export interface VnStar {
  name: string;
  /** Mã nhóm theo lasotuvi: 1 chính tinh, 11 sát tinh, 12 bại tinh… */
  group: number;
  /** K M T H O = Kim Mộc Thủy Hỏa Thổ */
  element: string;
  brightness?: string;
  mutagen?: "Lộc" | "Quyền" | "Khoa" | "Kỵ";
}

export interface VnPalace {
  cung: number; // 1..12, Tý = 1
  name: string;
  isBody: boolean;
  stars: VnStar[];
  daiHan: number;
  /** Chi (1..12) của những năm mà tiểu hạn đóng ở cung này */
  tieuHanChi: number;
  tuan: boolean;
  triet: boolean;
}

export interface VnChartRaw {
  palaces: VnPalace[]; // index 1..12, phần tử 0 bỏ trống
  cungMenh: number;
  cungThan: number;
  cucSo: number;
  tenCuc: string;
  menhChu: string;
  thanChu: string;
  amDuongMenh: string;
  banMenh: string;
}

export const dichCung = (start: number, ...steps: number[]) => {
  const v = steps.reduce((a, b) => a + b, start);
  const m = ((v % 12) + 12) % 12;
  return m === 0 ? 12 : m;
};
const khoangCach = (c1: number, c2: number, chieu: number) => (chieu === 1 ? (c1 - c2 + 12) % 12 : (c2 - c1 + 12) % 12);

const CAN_AM_DUONG = [0, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1];
const LOC_TON = [0, 3, 4, 6, 7, 6, 7, 9, 10, 12, 1];
const CHI_AM_DUONG = (chi: number) => (chi % 2 === 1 ? 1 : -1);

const PALACE_NAMES = ["Mệnh", "Phụ Mẫu", "Phúc Đức", "Điền Trạch", "Quan Lộc", "Nô Bộc", "Thiên Di", "Tật Ách", "Tài Bạch", "Tử Tức", "Phu Thê", "Huynh Đệ"];

// Nạp âm: hàng = chi 1..12, cột = can 1..10
const NAP_AM: (string | null)[][] = [
  [],
  [null, "K1", null, "T1", null, "H1", null, "O1", null, "M1", null],
  [null, null, "K1", null, "T1", null, "H1", null, "O1", null, "M1"],
  [null, "T2", null, "H2", null, "O2", null, "M2", null, "K2", null],
  [null, null, "T2", null, "H2", null, "O2", null, "M2", null, "K2"],
  [null, "H3", null, "O3", null, "M3", null, "K3", null, "T3", null],
  [null, null, "H3", null, "O3", null, "M3", null, "K3", null, "T3"],
  [null, "K4", null, "T4", null, "H4", null, "O4", null, "M4", null],
  [null, null, "K4", null, "T4", null, "H4", null, "O4", null, "M4"],
  [null, "T5", null, "H5", null, "O5", null, "M5", null, "K5", null],
  [null, null, "T5", null, "H5", null, "O5", null, "M5", null, "K5"],
  [null, "H6", null, "O6", null, "M6", null, "K6", null, "T6", null],
  [null, null, "H6", null, "O6", null, "M6", null, "K6", null, "T6"],
];
const BAN_MENH: Record<string, string> = {
  K1: "Hải trung kim", T1: "Giản hạ thủy", H1: "Tích lịch hỏa", O1: "Bích thượng thổ", M1: "Tang đố mộc",
  T2: "Đại khê thủy", H2: "Lư trung hỏa", O2: "Thành đầu thổ", M2: "Tùng bách mộc", K2: "Kim bạch kim",
  H3: "Phú đăng hỏa", O3: "Sa trung thổ", M3: "Đại lâm mộc", K3: "Bạch lạp kim", T3: "Trường lưu thủy",
  K4: "Sa trung kim", T4: "Thiên hà thủy", H4: "Thiên thượng hỏa", O4: "Lộ bàng thổ", M4: "Dương liễu mộc",
  T5: "Tuyền trung thủy", H5: "Sơn hạ hỏa", O5: "Đại dịch thổ", M5: "Thạch lựu mộc", K5: "Kiếm phong kim",
  H6: "Sơn đầu hỏa", O6: "Ốc thượng thổ", M6: "Bình địa mộc", K6: "Thoa xuyến kim", T6: "Đại hải thủy",
};
const napAm = (chi: number, can: number) => {
  const v = NAP_AM[chi]?.[can];
  if (!v) throw new Error(`Nạp âm không hợp lệ: chi ${chi}, can ${can}`);
  return v;
};
const CUC: Record<string, [number, string]> = {
  K: [4, "Kim tứ cục"], M: [3, "Mộc tam cục"], T: [2, "Thủy nhị cục"], H: [6, "Hỏa lục cục"], O: [5, "Thổ ngũ cục"],
};

function timCuc(cungMenh: number, canNam: number): string {
  const canThangGieng = (canNam * 2 + 1) % 10;
  let canThangMenh = ((((cungMenh - 3) % 12) + 12) % 12 + canThangGieng) % 10;
  if (canThangMenh === 0) canThangMenh = 10;
  return napAm(cungMenh, canThangMenh)[0] as string;
}

function timTuVi(cuc: number, ngay: number): number {
  let cungDan = 3;
  let c = cuc;
  while (c < ngay) {
    c += cuc;
    cungDan += 1;
  }
  let sai = c - ngay;
  if (sai % 2 === 1) sai = -sai;
  return dichCung(cungDan, sai);
}

const TRANG_SINH: Record<number, number> = { 6: 3, 4: 6, 2: 9, 5: 9, 3: 12 };

function timHoaLinh(chiNam: number, gio: number, gioiTinh: number, amDuongNam: number): [number, number] {
  let hoa: number, linh: number;
  if ([3, 7, 11].includes(chiNam)) [hoa, linh] = [2, 4];
  else if ([1, 5, 9].includes(chiNam)) [hoa, linh] = [3, 11];
  else if ([6, 10, 2].includes(chiNam)) [hoa, linh] = [11, 4];
  else [hoa, linh] = [10, 11];
  if (gioiTinh * amDuongNam === -1) return [dichCung(hoa + 1, -gio), dichCung(linh - 1, gio)];
  return [dichCung(hoa - 1, gio), dichCung(linh + 1, -gio)];
}

// Thiên Khôi theo can năm (cung 1=Tý … 12=Hợi): Giáp Mậu Sửu, Ất Kỷ Tý, Bính Đinh Hợi, Canh Tân Ngọ, Nhâm Quý Mão.
// lasotuvi đặt Đinh Dậu, Mậu Mùi, Nhâm Tỵ (tráo Khôi/Việt) và Canh Mùi; sửa theo Toàn thư và câu phú "Canh Tân phùng Mã Hổ" (E2, E3).
const KHOI = [0, 2, 1, 12, 12, 2, 1, 7, 7, 4, 4];
const THIEN_QUAN = [0, 8, 5, 6, 3, 4, 10, 12, 10, 11, 7];
const THIEN_PHUC = [0, 10, 9, 1, 12, 4, 3, 7, 6, 7, 6];
const LUU_HA = [0, 10, 11, 8, 5, 6, 7, 9, 4, 12, 3];
const THIEN_TRU = [0, 6, 7, 1, 6, 7, 9, 3, 7, 10, 11];
const coThan = (chi: number) => ([12, 1, 2].includes(chi) ? 3 : [3, 4, 5].includes(chi) ? 6 : [6, 7, 8].includes(chi) ? 9 : 12);
const thienMa = (chi: number) => [6, 3, 12, 9][chi % 4] as number;
// Phá Toái theo chi năm: Tý Ngọ Mão Dậu ở Tỵ; Dần Thân Tỵ Hợi ở Dậu; Thìn Tuất Sửu Mùi ở Sửu (lasotuvi tráo hai nhóm đầu, E1).
const phaToai = (chi: number) => [10, 6, 2][chi % 3] as number;
const TRIET: Record<number, [number, number]> = { 1: [9, 10], 6: [9, 10], 2: [7, 8], 7: [7, 8], 3: [5, 6], 8: [5, 6], 4: [3, 4], 9: [3, 4], 5: [1, 2], 10: [1, 2] };

/** Tứ hóa theo 10 câu của cụ Thiên Lương: [Lộc, Quyền, Khoa, Kỵ] theo can năm 1..10 */
export const TU_HOA_THIEN_LUONG: Record<number, [string, string, string, string]> = {
  1: ["Liêm Trinh", "Phá Quân", "Vũ Khúc", "Thái Dương"],
  2: ["Thiên Cơ", "Thiên Lương", "Tử Vi", "Thái Âm"],
  3: ["Thiên Đồng", "Thiên Cơ", "Văn Xương", "Liêm Trinh"],
  4: ["Thái Âm", "Thiên Đồng", "Thiên Cơ", "Cự Môn"],
  5: ["Tham Lang", "Thái Âm", "Hữu Bật", "Thiên Cơ"],
  6: ["Vũ Khúc", "Tham Lang", "Thiên Lương", "Văn Khúc"],
  7: ["Thái Dương", "Vũ Khúc", "Thiên Đồng", "Thái Âm"],
  8: ["Cự Môn", "Thái Dương", "Văn Khúc", "Văn Xương"],
  9: ["Thiên Lương", "Tử Vi", "Thiên Phủ", "Vũ Khúc"],
  10: ["Phá Quân", "Cự Môn", "Thái Âm", "Tham Lang"],
};

/** Độ sáng (miếu, vượng, đắc, bình, hãm) theo cung 1..12 */
const DAC_TINH: Record<string, string> = {
  "Tử Vi": "BĐMBVMMĐMBVB", "Liêm Trinh": "VĐVHMHVĐVHMH", "Thiên Đồng": "VHMĐHĐHHMHHĐ", "Vũ Khúc": "VMVĐMHVMVĐMH",
  "Thái Dương": "HĐVVVMMĐHHHH", "Thiên Cơ": "ĐĐHMMVĐĐVMMH", "Thái Âm": "VĐHHHHHĐVMMM", "Tham Lang": "HMĐHVHHMĐHVH",
  "Cự Môn": "VHVMHHVHĐMHĐ", "Thiên Tướng": "VĐMHVĐVĐMHVĐ", "Thiên Lương": "VĐVVMHMĐVHMH", "Thất Sát": "MĐMHHVMĐMHHV",
  "Phá Quân": "MVHHĐHMVHHĐH", "Đà La": "HĐHHĐHHĐHHĐH", "Kình Dương": "HĐHHĐHHĐHHĐH", "Linh Tinh": "HHĐĐĐĐĐHHHHH",
  "Hỏa Tinh": "HHĐĐĐĐĐHHHHH", "Văn Xương": "HĐHĐHĐHĐHHĐĐ", "Văn Khúc": "HĐHĐHĐHĐHHĐĐ", "Địa Không": "HHĐHHĐHHĐHHĐ",
  "Địa Kiếp": "HHĐHHĐHHĐHHĐ",
};
const SPARSE_DAC: Record<string, Record<number, string>> = {
  "Đại Hao": { 3: "Đ", 4: "Đ", 9: "Đ", 10: "Đ" }, "Tiểu Hao": { 3: "Đ", 4: "Đ", 9: "Đ", 10: "Đ" },
  "Thiên Khốc": { 1: "Đ", 2: "Đ", 4: "Đ", 7: "Đ", 8: "Đ", 10: "Đ" }, "Thiên Hư": { 1: "Đ", 2: "Đ", 4: "Đ", 7: "Đ", 8: "Đ", 10: "Đ" },
  "Thiên Mã": { 3: "Đ", 6: "Đ" }, "Thiên Hình": { 3: "Đ", 4: "Đ", 9: "Đ", 10: "Đ" }, "Thiên Riêu": { 3: "Đ", 4: "Đ", 10: "Đ", 11: "Đ" },
};
const BRIGHT_NAME: Record<string, string> = { M: "Miếu", V: "Vượng", Đ: "Đắc", B: "Bình", H: "Hãm" };

/** Bảng sao: tên → [ngũ hành, nhóm] (theo lasotuvi) */
const META: Record<string, [string, number]> = {
  "Tử Vi": ["O", 1], "Liêm Trinh": ["H", 1], "Thiên Đồng": ["T", 1], "Vũ Khúc": ["K", 1], "Thái Dương": ["H", 1],
  "Thiên Cơ": ["M", 1], "Thiên Phủ": ["O", 1], "Thái Âm": ["T", 1], "Tham Lang": ["T", 1], "Cự Môn": ["T", 1],
  "Thiên Tướng": ["T", 1], "Thiên Lương": ["M", 1], "Thất Sát": ["K", 1], "Phá Quân": ["T", 1],
  "Thái Tuế": ["H", 15], "Thiếu Dương": ["H", 5], "Tang Môn": ["M", 12], "Thiếu Âm": ["T", 5], "Quan Phù": ["H", 12],
  "Tử Phù": ["K", 12], "Tuế Phá": ["H", 12], "Long Đức": ["T", 5], "Bạch Hổ": ["K", 12], "Phúc Đức": ["O", 5],
  "Điếu Khách": ["H", 12], "Trực Phù": ["K", 16], "Lộc Tồn": ["O", 3], "Bác Sỹ": ["T", 5], "Lực Sĩ": ["H", 2],
  "Thanh Long": ["T", 5], "Tiểu Hao": ["H", 12], "Tướng Quân": ["M", 4], "Tấu Thư": ["K", 3], "Phi Liêm": ["H", 2],
  "Hỷ Thần": ["H", 5], "Bệnh Phù": ["O", 12], "Đại Hao": ["H", 12], "Phục Binh": ["H", 13], "Tràng Sinh": ["T", 5],
  "Mộc Dục": ["T", 14], "Quan Đới": ["K", 4], "Lâm Quan": ["K", 7], "Đế Vượng": ["K", 5], "Suy": ["T", 12],
  "Bệnh": ["H", 12], "Tử": ["H", 12], "Mộ": ["O", 12], "Tuyệt": ["O", 12], "Thai": ["O", 14], "Dưỡng": ["M", 2],
  "Đà La": ["K", 11], "Kình Dương": ["K", 11], "Địa Không": ["H", 11], "Địa Kiếp": ["H", 11], "Linh Tinh": ["H", 11],
  "Hỏa Tinh": ["H", 11], "Văn Xương": ["K", 6], "Văn Khúc": ["T", 6], "Thiên Khôi": ["H", 6], "Thiên Việt": ["H", 6],
  "Tả Phù": ["O", 2], "Hữu Bật": ["O", 2], "Long Trì": ["T", 3], "Phượng Các": ["O", 3], "Tam Thai": ["M", 7],
  "Bát Tọa": ["T", 7], "Ân Quang": ["M", 3], "Thiên Quý": ["O", 3], "Thiên Khốc": ["T", 12], "Thiên Hư": ["T", 12],
  "Thiên Đức": ["H", 5], "Nguyệt Đức": ["H", 5], "Thiên Hình": ["H", 15], "Thiên Riêu": ["T", 13], "Thiên Y": ["T", 5],
  "Quốc Ấn": ["O", 6], "Đường Phù": ["M", 4], "Đào Hoa": ["M", 8], "Hồng Loan": ["T", 8], "Thiên Hỷ": ["T", 5],
  "Thiên Giải": ["H", 5], "Địa Giải": ["O", 5], "Giải Thần": ["M", 5], "Thai Phụ": ["K", 6], "Phong Cáo": ["O", 4],
  "Thiên Tài": ["O", 2], "Thiên Thọ": ["O", 5], "Thiên Thương": ["O", 12], "Thiên Sứ": ["T", 12], "Thiên La": ["O", 12],
  "Địa Võng": ["O", 12], "Cô Thần": ["O", 13], "Quả Tú": ["O", 13], "Thiên Mã": ["H", 3], "Phá Toái": ["H", 12],
  "Thiên Quan": ["H", 5], "Thiên Phúc": ["H", 5], "Lưu Hà": ["T", 12], "Thiên Trù": ["O", 5], "Kiếp Sát": ["H", 11],
  "Hoa Cái": ["K", 14], "Văn Tinh": ["H", 6], "Đẩu Quân": ["H", 5], "Thiên Không": ["T", 11],
};

const MENH_CHU = ["", "Tham Lang", "Cự Môn", "Lộc Tồn", "Văn Khúc", "Liêm Trinh", "Vũ Khúc", "Phá Quân", "Vũ Khúc", "Liêm Trinh", "Văn Khúc", "Lộc Tồn", "Cự Môn"];
const THAN_CHU = ["", "Hỏa Tinh", "Thiên Tướng", "Thiên Lương", "Thiên Đồng", "Văn Xương", "Thiên Cơ", "Hỏa Tinh", "Thiên Tướng", "Thiên Lương", "Thiên Đồng", "Văn Xương", "Thiên Cơ"];

export interface VnInput {
  canNam: number; // 1..10
  chiNam: number; // 1..12
  thang: number; // 1..12 (đã quy đổi tháng nhuận)
  ngay: number; // 1..30
  gio: number; // 1..12, Tý = 1
  gioiTinh: 1 | -1;
}

export function anSaoVN({ canNam, chiNam, thang: tt, ngay: nn, gio: gioSinh, gioiTinh }: VnInput): VnChartRaw {
  const cungThan = dichCung(3, tt - 1, gioSinh - 1);
  const cungMenh = dichCung(3, tt - 1, -gioSinh + 1);
  const palaces: VnPalace[] = [];
  for (let c = 0; c <= 12; c++) palaces.push({ cung: c, name: "", isBody: c === cungThan, stars: [], daiHan: 0, tieuHanChi: 0, tuan: false, triet: false });
  PALACE_NAMES.forEach((n, i) => ((palaces[dichCung(cungMenh, i)] as VnPalace).name = n));
  const cungNoBoc = dichCung(cungMenh, 5);
  const cungTatAch = dichCung(cungMenh, 7);

  const put = (cung: number, ...names: string[]) => {
    for (const name of names) {
      const meta = META[name] ?? ["", 5];
      const star: VnStar = { name, element: meta[0], group: meta[1] };
      const full = DAC_TINH[name]?.[cung - 1];
      const sparse = SPARSE_DAC[name]?.[cung];
      const b = full ?? sparse;
      if (b) star.brightness = BRIGHT_NAME[b];
      (palaces[cung] as VnPalace).stars.push(star);
    }
  };
  const pos: Record<string, number> = {};
  const at = (name: string, cung: number) => {
    pos[name] = cung;
    put(cung, name);
    return cung;
  };

  const amDuongNam = CAN_AM_DUONG[canNam] as number;
  const amDuongChiNam = CHI_AM_DUONG(chiNam);
  const hanhCuc = timCuc(cungMenh, canNam);
  const [cucSo, tenCuc] = CUC[hanhCuc] as [number, string];

  // Đại hạn: dương nam – âm nữ thuận, âm nam – dương nữ nghịch
  const chieuHan = gioiTinh * amDuongChiNam;
  for (let c = 1; c <= 12; c++) (palaces[c] as VnPalace).daiHan = cucSo + khoangCach(c, cungMenh, chieuHan) * 10;
  // Tiểu hạn
  const khoiHan = dichCung(11, -3 * (chiNam - 1));
  const cungTy1 = dichCung(khoiHan, -gioiTinh * (chiNam - 1));
  for (let c = 1; c <= 12; c++) (palaces[c] as VnPalace).tieuHanChi = khoangCach(c, cungTy1, gioiTinh) + 1;

  // Tử vi tinh hệ
  const tuVi = at("Tử Vi", timTuVi(cucSo, nn));
  at("Liêm Trinh", dichCung(tuVi, 4));
  at("Thiên Đồng", dichCung(tuVi, 7));
  at("Vũ Khúc", dichCung(tuVi, 8));
  at("Thái Dương", dichCung(tuVi, 9));
  at("Thiên Cơ", dichCung(tuVi, 11));
  // Thiên phủ tinh hệ
  const thienPhu = at("Thiên Phủ", dichCung(3, 3 - tuVi));
  at("Thái Âm", dichCung(thienPhu, 1));
  at("Tham Lang", dichCung(thienPhu, 2));
  at("Cự Môn", dichCung(thienPhu, 3));
  at("Thiên Tướng", dichCung(thienPhu, 4));
  at("Thiên Lương", dichCung(thienPhu, 5));
  at("Thất Sát", dichCung(thienPhu, 6));
  at("Phá Quân", dichCung(thienPhu, 10));

  // Vòng Lộc tồn – Bác sỹ
  const locTon = LOC_TON[canNam] as number;
  put(locTon, "Lộc Tồn", "Bác Sỹ");
  pos["Lộc Tồn"] = locTon;
  const nn12 = gioiTinh * amDuongNam;
  ["Lực Sĩ", "Thanh Long", "Tiểu Hao", "Tướng Quân", "Tấu Thư", "Phi Liêm", "Hỷ Thần", "Bệnh Phù", "Đại Hao", "Phục Binh", "Quan Phù"].forEach((n, i) =>
    put(dichCung(locTon, (i + 1) * nn12), n),
  );

  // Vòng Thái tuế
  put(chiNam, "Thái Tuế");
  put(dichCung(chiNam, 1), "Thiếu Dương", "Thiên Không");
  put(dichCung(chiNam, 2), "Tang Môn");
  put(dichCung(chiNam, 3), "Thiếu Âm");
  put(dichCung(chiNam, 4), "Quan Phù");
  put(dichCung(chiNam, 5), "Tử Phù", "Nguyệt Đức");
  put(dichCung(chiNam, 6), "Tuế Phá");
  put(dichCung(chiNam, 7), "Long Đức");
  put(dichCung(chiNam, 8), "Bạch Hổ");
  put(dichCung(chiNam, 9), "Phúc Đức", "Thiên Đức");
  put(dichCung(chiNam, 10), "Điếu Khách");
  put(dichCung(chiNam, 11), "Trực Phù");

  // Vòng Tràng sinh (dương nam âm nữ thuận)
  const trangSinh = TRANG_SINH[cucSo] as number;
  ["Tràng Sinh", "Mộc Dục", "Quan Đới", "Lâm Quan", "Đế Vượng", "Suy", "Bệnh", "Tử", "Mộ", "Tuyệt"].forEach((n, i) => put(dichCung(trangSinh, nn12 * i), n));
  // Vòng 12: ... Mộ, Tuyệt, Thai, Dưỡng rồi trở lại Tràng Sinh — Dưỡng ở ngay trước Tràng Sinh, Thai trước Dưỡng.
  // (lasotuvi đặt ngược Thai/Dưỡng; đã sửa theo thứ tự vòng chuẩn.)
  put(dichCung(trangSinh, -2 * nn12), "Thai");
  put(dichCung(trangSinh, -nn12), "Dưỡng");

  // Sao đôi
  at("Đà La", dichCung(locTon, -1));
  const kinhDuong = at("Kình Dương", dichCung(locTon, 1));
  const diaKiep = at("Địa Kiếp", dichCung(11, gioSinh));
  at("Địa Không", dichCung(12, 12 - diaKiep));
  const [hoa, linh] = timHoaLinh(chiNam, gioSinh, gioiTinh, amDuongNam);
  at("Hỏa Tinh", hoa);
  at("Linh Tinh", linh);
  const longTri = at("Long Trì", dichCung(5, chiNam - 1));
  put(dichCung(2, 2 - longTri), "Phượng Các", "Giải Thần");
  const taPhu = at("Tả Phù", dichCung(5, tt - 1));
  at("Hữu Bật", dichCung(2, 2 - taPhu));
  const vanKhuc = at("Văn Khúc", dichCung(5, gioSinh - 1));
  const vanXuong = at("Văn Xương", dichCung(2, 2 - vanKhuc));
  const tamThai = at("Tam Thai", dichCung(5, tt + nn - 2));
  at("Bát Tọa", dichCung(2, 2 - tamThai));
  const anQuang = at("Ân Quang", dichCung(vanXuong, nn - 2));
  at("Thiên Quý", dichCung(2, 2 - anQuang));
  const khoi = at("Thiên Khôi", KHOI[canNam] as number);
  at("Thiên Việt", dichCung(5, 5 - khoi));
  at("Thiên Hư", dichCung(7, chiNam - 1));
  at("Thiên Khốc", dichCung(7, -chiNam + 1));
  at("Thiên Tài", dichCung(cungMenh, chiNam - 1));
  at("Thiên Thọ", dichCung(cungThan, chiNam - 1));
  const hongLoan = at("Hồng Loan", dichCung(4, -chiNam + 1));
  at("Thiên Hỷ", dichCung(hongLoan, 6));
  at("Thiên Quan", THIEN_QUAN[canNam] as number);
  at("Thiên Phúc", THIEN_PHUC[canNam] as number);
  const thienHinh = at("Thiên Hình", dichCung(10, tt - 1));
  put(dichCung(thienHinh, 4), "Thiên Riêu", "Thiên Y");
  const coThanPos = at("Cô Thần", coThan(chiNam));
  at("Quả Tú", dichCung(coThanPos, -4));
  const vanTinh = at("Văn Tinh", dichCung(kinhDuong, 2));
  const duongPhu = at("Đường Phù", dichCung(vanTinh, 2));
  at("Quốc Ấn", dichCung(duongPhu, 3));
  at("Thai Phụ", dichCung(vanKhuc, 2));
  at("Phong Cáo", dichCung(vanKhuc, -2));
  at("Thiên Giải", dichCung(9, 2 * tt - 2));
  at("Địa Giải", dichCung(taPhu, 3));
  at("Thiên La", 5);
  at("Địa Võng", 11);
  at("Thiên Thương", cungNoBoc);
  at("Thiên Sứ", cungTatAch);
  const ma = at("Thiên Mã", thienMa(chiNam));
  at("Hoa Cái", dichCung(ma, 2));
  const kiepSat = at("Kiếp Sát", dichCung(ma, 3));
  at("Đào Hoa", dichCung(kiepSat, 4));
  at("Phá Toái", phaToai(chiNam));
  at("Đẩu Quân", dichCung(chiNam, -tt + gioSinh));

  // Tứ hóa
  const hoaNames = ["Lộc", "Quyền", "Khoa", "Kỵ"] as const;
  (TU_HOA_THIEN_LUONG[canNam] as string[]).forEach((starName, i) => {
    const c = pos[starName];
    if (c === undefined) return;
    const s = (palaces[c] as VnPalace).stars.find((x) => x.name === starName);
    if (s) s.mutagen = hoaNames[i];
  });

  at("Lưu Hà", LUU_HA[canNam] as number);
  at("Thiên Trù", THIEN_TRU[canNam] as number);

  // Tuần, Triệt (mỗi loại án ngữ 2 cung)
  const ketThucTuan = dichCung(chiNam, 10 - canNam);
  const tuan1 = dichCung(ketThucTuan, 1);
  (palaces[tuan1] as VnPalace).tuan = true;
  (palaces[dichCung(tuan1, 1)] as VnPalace).tuan = true;
  for (const c of TRIET[canNam] as [number, number]) (palaces[c] as VnPalace).triet = true;

  // Âm dương thuận lý: âm dương của năm sinh trùng âm dương của cung Mệnh (dương niên Mệnh ở cung dương,
  // âm niên Mệnh ở cung âm). Cung 1 = Tý (dương). Không phụ thuộc giới tính.
  const cungAmDuong = cungMenh % 2 === 1 ? 1 : -1;
  return {
    palaces,
    cungMenh,
    cungThan,
    cucSo,
    tenCuc,
    menhChu: MENH_CHU[cungMenh] as string,
    thanChu: THAN_CHU[chiNam] as string,
    amDuongMenh: cungAmDuong * amDuongNam === 1 ? "Âm dương thuận lý" : "Âm dương nghịch lý",
    banMenh: BAN_MENH[napAm(chiNam, canNam)] as string,
  };
}

/** Sao lưu niên theo phái Việt cho năm xem có can `can` (1..10), chi `chi` (1..12). */
export function luuNienVN(can: number, chi: number): { name: string; cung: number }[] {
  const locTon = LOC_TON[can] as number;
  return [
    { name: "Lưu Thái Tuế", cung: chi },
    { name: "Lưu Tang Môn", cung: dichCung(chi, 2) },
    { name: "Lưu Bạch Hổ", cung: dichCung(chi, 8) },
    { name: "Lưu Thiên Khốc", cung: dichCung(7, -chi + 1) },
    { name: "Lưu Thiên Hư", cung: dichCung(7, chi - 1) },
    { name: "Lưu Thiên Mã", cung: thienMa(chi) },
    { name: "Lưu Lộc Tồn", cung: locTon },
    { name: "Lưu Kình Dương", cung: dichCung(locTon, 1) },
    { name: "Lưu Đà La", cung: dichCung(locTon, -1) },
    // Sao lưu mở rộng (kênh Tử Vi Học Quán): an như sao gốc nhưng theo can chi năm xem
    { name: "Lưu Đào Hoa", cung: dichCung(thienMa(chi), 7) },
    { name: "Lưu Hồng Loan", cung: dichCung(4, -chi + 1) },
    { name: "Lưu Thiên Hỷ", cung: dichCung(4, -chi + 7) },
    { name: "Lưu Long Đức", cung: dichCung(chi, 7) },
    { name: "Lưu Nguyệt Đức", cung: dichCung(chi, 5) },
    { name: "Lưu Thiên Khôi", cung: KHOI[can] as number },
    { name: "Lưu Thiên Việt", cung: dichCung(5, 5 - (KHOI[can] as number)) },
  ];
}

/** Sao đại vận theo can chi của cung đại hạn (can 1..10, chi 1..12). */
export function daiVanVN(can: number, chi: number): { name: string; cung: number }[] {
  const locTon = LOC_TON[can] as number;
  const khoi = KHOI[can] as number;
  return [
    { name: "ĐV Lộc Tồn", cung: locTon },
    { name: "ĐV Kình Dương", cung: dichCung(locTon, 1) },
    { name: "ĐV Đà La", cung: dichCung(locTon, -1) },
    { name: "ĐV Thiên Khôi", cung: khoi },
    { name: "ĐV Thiên Việt", cung: dichCung(5, 5 - khoi) },
    { name: "ĐV Thiên Mã", cung: thienMa(chi) },
  ];
}
