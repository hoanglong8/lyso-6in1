/** Kết quả luận cơ bản: các phần, mỗi ý có căn cứ trong lá số và nguồn đối chiếu. */
export interface Y {
  text: string;
  /** Căn cứ trong lá số, ví dụ "Thất Sát (Miếu) ở Mệnh" */
  canCu?: string;
  /** "tot" | "xau" | "trung" — để tô màu nhẹ */
  tone?: "tot" | "xau" | "trung";
}
export interface Phan {
  title: string;
  items: Y[];
}
export interface LuanCoBan {
  mon: string;
  tomTat: string;
  phan: Phan[];
  /** Sách dùng để đối chiếu kiến thức (không trích nguyên văn) */
  nguon: string[];
  canhBao: string[];
}

export const CANH_BAO_CHUNG =
  "Luận cơ bản ghép từ ý nghĩa thông dụng của từng yếu tố trong lá số theo quy tắc cố định; chưa cân nhắc tổng thể như người luận có kinh nghiệm. Nội dung mang tính tham khảo văn hóa.";
