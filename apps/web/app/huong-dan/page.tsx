import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Hướng dẫn" };

const MON: { ten: string; dung: string; nhap: string; doc: string }[] = [
  {
    ten: "Tử vi",
    dung: "Xem tính cách, các lĩnh vực đời sống (12 cung) và vận hạn theo năm.",
    nhap: "Trang Lá số: ngày sinh (dương hoặc âm lịch), giờ sinh, giới tính, nơi sinh. Chọn trường phái trong Cài đặt.",
    doc: "Ô viền đỏ là Mệnh. Bấm năm xem để thấy đại hạn, tiểu hạn, sao lưu. Phần Luận cơ bản tóm ý chính có kèm căn cứ.",
  },
  {
    ten: "Bát tự (Tứ trụ)",
    dung: "Xem nhật chủ mạnh hay yếu, ngũ hành, thập thần và đại vận, lưu niên.",
    nhap: "Cùng hồ sơ với Tử vi, chuyển sang tab Bát tự. Giờ sinh càng chính xác càng tốt.",
    doc: "Phần Vượng suy cho biết nhật chủ vượng hay nhược theo 4 tiêu chí, từ đó suy ra hành ưa, hành kỵ.",
  },
  {
    ten: "Kinh dịch",
    dung: "Hỏi một việc cụ thể bằng quẻ: Mai Hoa theo giờ, theo số, hoặc gieo xu (Lục hào).",
    nhap: "Trang Gieo quẻ: nghĩ rõ câu hỏi, chọn cách lập quẻ. Có thể tự gieo 3 đồng xu 6 lần rồi nhập kết quả.",
    doc: "Quẻ chủ là hiện tại, hỗ quái là diễn biến, quẻ biến là kết cục. Chọn loại việc để xem dụng thần Lục hào.",
  },
  {
    ten: "Đại Lục Nhâm",
    dung: "Chiêm việc theo thời điểm hỏi qua tứ khóa và tam truyền.",
    nhap: "Trang Gieo quẻ, tab Đại Lục Nhâm. Mặc định lấy giờ hiện tại.",
    doc: "Sơ truyền là khởi đầu, trung truyền là diễn biến, mạt truyền là kết quả; mỗi truyền đi kèm một thiên tướng.",
  },
  {
    ten: "Kỳ môn độn giáp",
    dung: "Chọn hướng, chọn thời điểm hành động; xét cát hung từng phương.",
    nhap: "Trang Gieo quẻ, tab Kỳ môn. Chọn việc hỏi để xem cung có môn tương ứng.",
    doc: "Mỗi ô là một phương (Nam ở trên): bát thần, cửu tinh, can thiên bàn, bát môn, can địa bàn.",
  },
  {
    ten: "Thái ất thần số",
    dung: "Xem thời vận chung theo năm, tháng, ngày, giờ — thường dùng cho việc lớn, tập thể.",
    nhap: "Trang Gieo quẻ, tab Thái ất, chọn kế (niên, nguyệt, nhật, thời).",
    doc: "So chủ toán với khách toán, xem vị trí các tướng so với Thái ất và tam môn.",
  },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed">
      <h1 className="text-2xl font-bold tracking-tight">Hướng dẫn</h1>
      <p>
        Ứng dụng gồm hai phần: <Link href="/la-so" className="text-son underline">Lá số</Link> (Tử vi, Bát tự — theo ngày giờ sinh) và{" "}
        <Link href="/chiem" className="text-son underline">Gieo quẻ</Link> (Kinh dịch, Đại Lục Nhâm, Kỳ môn, Thái ất — theo thời điểm hỏi). Mọi phép tính chạy
        trên trình duyệt của bạn, không cần tài khoản.
      </p>
      <div className="space-y-3">
        {MON.map((m) => (
          <section key={m.ten} className="rounded-xl border border-stone-200 bg-white p-4">
            <h2 className="font-semibold text-son">{m.ten}</h2>
            <p>
              <b>Dùng để:</b> {m.dung}
            </p>
            <p>
              <b>Nhập:</b> {m.nhap}
            </p>
            <p>
              <b>Đọc kết quả:</b> {m.doc}
            </p>
          </section>
        ))}
      </div>
      <section className="space-y-2">
        <h2 className="font-semibold">Về phần Luận cơ bản</h2>
        <p>
          Luận cơ bản ghép ý nghĩa thông dụng của từng yếu tố có trong lá số theo quy tắc cố định, và luôn ghi căn cứ. Phần này chưa thay được người luận có kinh
          nghiệm, vì người luận còn cân nhắc tổng thể và hoàn cảnh cụ thể. Tri thức Tử vi, Bát tự, Kinh dịch được đối chiếu với sách; Lục Nhâm, Kỳ môn, Thái ất
          chưa có sách chuyên đề để đối chiếu và được ghi rõ ngay dưới bài luận.
        </p>
        <p>
          Khi có nhiều cách tính, ứng dụng cho bạn chọn trường phái và ghi rõ đang dùng cách nào. Bảng các lựa chọn và lý do nằm trong{" "}
          <a href="https://github.com/hoanglong8/lyso-6in1/blob/main/docs/quyet-dinh-phai.md" className="underline">
            tài liệu quyết định trường phái
          </a>
          .
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="font-semibold">Mẹo</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Không rõ giờ sinh: vẫn lập được, nhưng cung Mệnh và trụ giờ có thể sai; ứng dụng sẽ ghi chú.</li>
          <li>Sinh trước 1975 ở miền Nam: múi giờ khác (UTC+8); ứng dụng tự xử lý theo nơi sinh.</li>
          <li>Nút "In / lưu PDF" để giữ lá số và bài luận mà không cần lưu lên mạng.</li>
        </ul>
      </section>
    </div>
  );
}
