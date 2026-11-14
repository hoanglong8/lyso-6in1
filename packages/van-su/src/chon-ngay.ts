/**
 * Chọn ngày theo lịch cổ: 12 trực (theo tháng tiết khí), ngày hoàng đạo/hắc đạo (theo tháng âm), giờ hoàng đạo,
 * ngày xung tuổi, tam nương, nguyệt kỵ. Chỉ để tham khảo.
 */
import { buildSnapshot, CAN, CHI, type CalendarSnapshot } from "@lyso/calendar-vn";
import { canKhac, lucXung } from "./chung";

const m12 = (x: number) => ((x % 12) + 12) % 12;

export const TRUC = ["Kiến", "Trừ", "Mãn", "Bình", "Định", "Chấp", "Phá", "Nguy", "Thành", "Thu", "Khai", "Bế"] as const;
export type Truc = (typeof TRUC)[number];
const TRUC_Y: Record<Truc, [string, number]> = {
  Kiến: ["tốt cho khởi sự, xuất hành; kỵ động thổ", 0],
  Trừ: ["tốt cho trừ bỏ cái cũ, chữa bệnh, dọn dẹp", 1],
  Mãn: ["tốt cho cầu tài, mở kho; kỵ kiện tụng", 1],
  Bình: ["bình thường, hợp việc nhỏ", 0],
  Định: ["tốt cho ký kết, cưới hỏi, nhận chức", 1],
  Chấp: ["tốt cho xây dựng, tu sửa; kỵ xuất tiền lớn", 0],
  Phá: ["xấu, chỉ hợp phá dỡ, chữa bệnh", -2],
  Nguy: ["xấu, làm việc gì cũng nên cẩn trọng", -1],
  Thành: ["tốt cho hầu hết mọi việc, nhất là khai trương, cưới hỏi", 2],
  Thu: ["tốt cho thu nợ, nhập kho, thu hoạch; kỵ khai trương", 0],
  Khai: ["tốt cho khai trương, nhập học, xuất hành", 2],
  Bế: ["xấu, chỉ hợp đắp đê, lấp hố, việc kết thúc", -2],
};
/** 12 thần trực ngày/giờ, khởi Thanh Long */
const THAN = ["Thanh Long", "Minh Đường", "Thiên Hình", "Chu Tước", "Kim Quỹ", "Kim Đường", "Bạch Hổ", "Ngọc Đường", "Thiên Lao", "Nguyên Vũ", "Tư Mệnh", "Câu Trận"];
const HOANG_DAO = new Set(["Thanh Long", "Minh Đường", "Kim Quỹ", "Kim Đường", "Ngọc Đường", "Tư Mệnh"]);
/** Vị trí Thanh Long theo chi tháng (hoặc chi ngày khi tính giờ): Dần/Thân → Tý, Mão/Dậu → Dần, Thìn/Tuất → Thìn, Tỵ/Hợi → Ngọ, Ngọ/Tý → Thân, Mùi/Sửu → Tuất */
const thanhLong = (chi: number) => m12(2 * (m12(chi - 2) % 6));
export const thanTruc = (goc: number, chi: number) => THAN[m12(chi - thanhLong(goc))]!;

export type Viec = "chung" | "cuoi-hoi" | "khai-truong" | "dong-tho" | "xuat-hanh" | "ky-ket";
export const VIEC: Record<Viec, { label: string; truc: Truc[]; kyTruc: Truc[] }> = {
  chung: { label: "Việc chung", truc: [], kyTruc: [] },
  "cuoi-hoi": { label: "Cưới hỏi", truc: ["Định", "Thành", "Khai", "Mãn"], kyTruc: ["Phá", "Bế", "Nguy"] },
  "khai-truong": { label: "Khai trương, mở hàng", truc: ["Khai", "Thành", "Mãn"], kyTruc: ["Phá", "Bế", "Thu"] },
  "dong-tho": { label: "Động thổ, xây sửa nhà", truc: ["Chấp", "Thành", "Định"], kyTruc: ["Kiến", "Phá", "Bế"] },
  "xuat-hanh": { label: "Xuất hành, đi xa", truc: ["Kiến", "Khai", "Thành"], kyTruc: ["Phá", "Bế", "Nguy"] },
  "ky-ket": { label: "Ký kết, giao dịch", truc: ["Định", "Thành", "Khai", "Chấp"], kyTruc: ["Phá", "Bế", "Nguy"] },
};

export interface Ngay {
  ymd: string;
  thu: string;
  am: string;
  canChi: string;
  truc: Truc;
  trucY: string;
  than: string;
  hoangDao: boolean;
  gioTot: string[];
  canhBao: string[];
  diem: number;
  xepLoai: "tốt" | "khá" | "bình thường" | "xấu";
}

const THU = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];

export function xetNgay(y: number, m: number, d: number, opt: { namSinh?: CalendarSnapshot["ganzhi"]["year"]; viec?: Viec } = {}): Ngay {
  const s = buildSnapshot({ date: { y, m, d }, calendar: "solar", time: { h: 12, mi: 0 } });
  const day = s.ganzhi.day;
  const truc = TRUC[m12(day.chi - s.ganzhi.monthBazi.chi)]!;
  const [trucY, trucD] = TRUC_Y[truc];
  const than = thanTruc(s.ganzhi.monthLunar.chi, day.chi);
  const hd = HOANG_DAO.has(than);
  const gioTot = Array.from({ length: 12 }, (_, c) => c).filter((c) => HOANG_DAO.has(thanTruc(day.chi, c))).map((c) => CHI[c]!);
  const canhBao: string[] = [];
  let diem = trucD + (hd ? 2 : -1);
  if ([3, 7, 13, 18, 22, 27].includes(s.lunar.day)) { canhBao.push("Tam nương"); diem -= 1; }
  if ([5, 14, 23].includes(s.lunar.day)) { canhBao.push("Nguyệt kỵ"); diem -= 1; }
  if (opt.namSinh) {
    const ns = opt.namSinh;
    if (lucXung(day.chi, ns.chi)) {
      const tk = canKhac(day.can, ns.can) || canKhac(ns.can, day.can);
      canhBao.push(tk ? `Thiên khắc địa xung với tuổi ${ns.name}` : `Xung tuổi ${ns.name}`);
      diem -= tk ? 4 : 3;
    }
  }
  const v = opt.viec ? VIEC[opt.viec] : undefined;
  if (v?.truc.includes(truc)) diem += 1;
  if (v?.kyTruc.includes(truc)) { diem -= 2; canhBao.push(`Trực ${truc} kỵ ${v.label.toLowerCase()}`); }
  const xepLoai = diem >= 3 ? "tốt" : diem >= 1 ? "khá" : diem >= -1 ? "bình thường" : "xấu";
  const dt = new Date(Date.UTC(y, m - 1, d));
  return {
    ymd: `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
    thu: THU[dt.getUTCDay()]!,
    am: `${s.lunar.day}/${s.lunar.month}${s.lunar.leap ? " nhuận" : ""}`,
    canChi: `${CAN[day.can]} ${CHI[day.chi]}`,
    truc, trucY, than, hoangDao: hd, gioTot, canhBao, diem, xepLoai,
  };
}

/** Xét một khoảng ngày (tối đa 92 ngày), trả về theo thứ tự ngày */
export function chonNgay(tu: string, soNgay: number, opt: Parameters<typeof xetNgay>[3] = {}): Ngay[] {
  const [y, m, d] = tu.split("-").map(Number) as [number, number, number];
  const out: Ngay[] = [];
  for (let i = 0; i < Math.min(soNgay, 92); i++) {
    const dt = new Date(Date.UTC(y, m - 1, d + i));
    out.push(xetNgay(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate(), opt));
  }
  return out;
}
