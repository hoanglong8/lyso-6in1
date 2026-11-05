import type { Metadata } from "next";
import { CONSENT_VERSION } from "@/lib/supabase/config";

export const metadata: Metadata = { title: "Quyền riêng tư" };

export default function Page() {
  return (
    <article className="prose-sm mx-auto max-w-2xl space-y-4 text-sm leading-relaxed text-stone-800">
      <h1 className="text-2xl font-bold tracking-tight">Quyền riêng tư</h1>
      <p className="text-xs text-stone-500">Phiên bản {CONSENT_VERSION}. Áp dụng theo Luật Bảo vệ dữ liệu cá nhân 2025 và Nghị định 356/2025/NĐ-CP.</p>

      <h2 className="pt-2 text-base font-semibold">1. Không đăng nhập</h2>
      <p>Mọi phép tính lá số chạy trên trình duyệt của bạn. Hồ sơ bạn bấm "Lưu" chỉ nằm trong bộ nhớ trình duyệt (localStorage) của máy đó; chúng tôi không nhận được.</p>

      <h2 className="pt-2 text-base font-semibold">2. Khi đăng nhập</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <b>Dữ liệu thu:</b> email (để đăng nhập); các hồ sơ bạn chủ động lưu — tên gọi (tùy chọn), giới tính, ngày giờ và nơi sinh.
        </li>
        <li>
          <b>Mục đích:</b> chỉ để bạn mở lại hồ sơ trên nhiều thiết bị và giới hạn lượt luận giải. Không bán, không quảng cáo, không chia sẻ cho bên thứ ba ngoài
          nhà cung cấp hạ tầng nêu dưới.
        </li>
        <li>
          <b>Nơi lưu:</b> cơ sở dữ liệu Supabase (Postgres), có phân quyền theo dòng: mỗi tài khoản chỉ đọc được hồ sơ của mình. Máy chủ có thể đặt ngoài Việt Nam;
          khi đó việc lưu là chuyển dữ liệu cá nhân ra nước ngoài và được thực hiện trên cơ sở đồng ý của bạn.
        </li>
        <li>
          <b>Quyền của bạn:</b> xem, sửa, xóa từng hồ sơ ngay trong ứng dụng; rút lại đồng ý và yêu cầu xóa tài khoản bằng cách liên hệ qua trang GitHub của dự án.
        </li>
      </ul>

      <h2 className="pt-2 text-base font-semibold">3. Luận giải bằng AI</h2>
      <p>
        Khi bạn bấm "Luận giải", máy chủ dựng lại lá số rồi gửi <b>dữ liệu lá số</b> (giới tính, can chi, vị trí sao, quẻ…) — không gửi tên gọi hay email — tới API
        Claude của Anthropic để sinh bài luận. Chúng tôi chỉ ghi lại số lượt và số token để giới hạn lượt; không lưu nội dung bài luận trên máy chủ.
      </p>

      <h2 className="pt-2 text-base font-semibold">4. Bản chất nội dung</h2>
      <p>
        Nội dung lý số mang tính văn hóa, nghiên cứu và tham khảo; không phải lời khẳng định về tương lai, không thay thế tư vấn y tế, pháp lý hay tài chính.
      </p>
    </article>
  );
}
