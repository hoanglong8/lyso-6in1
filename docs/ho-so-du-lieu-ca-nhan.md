# Bản nháp nội dung hồ sơ đánh giá tác động (DPIA) và chuyển dữ liệu ra nước ngoài (CTIA)

> **Bản nháp làm việc, chưa phải biểu mẫu nộp.** Khi nộp phải chép nội dung vào đúng biểu mẫu ban hành kèm Nghị định
> 356/2025/NĐ-CP (mẫu dành cho cá nhân hoặc tổ chức, tùy chủ thể vận hành), gửi Cục An ninh mạng và phòng, chống tội phạm
> sử dụng công nghệ cao (A05), Bộ Công an. Nên nhờ luật sư rà trước khi nộp. Hồ sơ cần cập nhật định kỳ (6 tháng) khi
> có mục đích xử lý mới hoặc thay đổi bên nhận. Chế tài vi phạm theo Nghị định 330/2026/NĐ-CP.
>
> Căn cứ: Luật Bảo vệ dữ liệu cá nhân 2025 (Luật 91/2025/QH15, hiệu lực 01/01/2026); Nghị định 356/2025/NĐ-CP.

Chỉ áp dụng khi bật **giai đoạn 2** (`NEXT_PUBLIC_GIAI_DOAN=2`). Giai đoạn 1 không thu, không lưu, không chuyển dữ liệu
sinh lên máy chủ (mọi phép tính chạy trên trình duyệt), nên không phát sinh hai hồ sơ này.

## 1. Bên kiểm soát và xử lý dữ liệu

| Mục | Nội dung (điền khi nộp) |
| --- | --- |
| Bên kiểm soát | Chủ dự án "Lý số 6 in 1" — cá nhân / hộ kinh doanh / doanh nghiệp (chọn một; thu phí thì nên có hộ kinh doanh hoặc doanh nghiệp) |
| Đầu mối bảo vệ dữ liệu | Họ tên, email, điện thoại |
| Website | https://lyso-6in1.vercel.app (hoặc tên miền chính thức) |

## 2. Dữ liệu cá nhân xử lý

| Nhóm | Trường | Loại theo NĐ 356 | Nguồn | Bắt buộc? |
| --- | --- | --- | --- | --- |
| Tài khoản | Email | Cơ bản | Người dùng nhập khi đăng nhập | Có (để đăng nhập) |
| Hồ sơ lá số | Ngày, giờ, nơi sinh; giới tính; tên gọi tùy chọn | Cơ bản | Người dùng nhập | Có, nếu muốn lưu hồ sơ |
| Câu hỏi gửi AI | Câu hỏi tự do (có thể chứa thông tin cá nhân do người dùng tự viết) | Cơ bản; có thể nhạy cảm nếu người dùng tự nêu | Người dùng nhập | Không |
| Nhật ký dùng AI | Môn, mức, model, số token, thời điểm | Không định danh trực tiếp (gắn user_id) | Hệ thống | Có |
| Đơn hàng | Mã đơn, số tháng, số tiền, trạng thái, thời điểm | Cơ bản (giao dịch) | Hệ thống / payOS | Có, khi mua gói |

Không thu: số CCCD, số thẻ, số tài khoản ngân hàng (thanh toán qua trang của payOS), vị trí GPS, danh bạ.
Không lưu nội dung bài luận AI trả về.

## 3. Mục đích và cơ sở xử lý

| Mục đích | Cơ sở | Dữ liệu |
| --- | --- | --- |
| Lưu và lập lại lá số theo tài khoản | Sự đồng ý (hộp đồng ý khi đăng nhập, phiên bản điều khoản `CONSENT_VERSION`) | Hồ sơ lá số, email |
| Diễn giải lá số bằng AI | Sự đồng ý, cho từng lần bấm "Luận giải" | Tham số lá số, câu hỏi |
| Giới hạn lượt, chống lạm dụng, theo dõi chi phí | Lợi ích hợp pháp / thực hiện hợp đồng | Nhật ký dùng AI, IP (chỉ trong bộ nhớ, không lưu) |
| Bán gói Nâng cao | Thực hiện hợp đồng | Đơn hàng, email |

## 4. Bên nhận và chuyển dữ liệu ra nước ngoài (CTIA)

| Bên nhận | Vai trò | Nơi xử lý | Dữ liệu nhận | Thời hạn lưu |
| --- | --- | --- | --- | --- |
| Supabase Inc. | Bên xử lý: CSDL, đăng nhập | Singapore (ap-southeast-1) | Email, hồ sơ lá số, nhật ký, đơn hàng | Đến khi người dùng xóa hồ sơ/tài khoản |
| Anthropic PBC (Claude API) | Bên xử lý: sinh văn bản luận giải | Hoa Kỳ | Bản tóm tắt lá số đã tính (không kèm email) và câu hỏi | Theo chính sách API của Anthropic (không dùng để huấn luyện mặc định; lưu tạm để chống lạm dụng) — kiểm lại điều khoản hiện hành khi nộp |
| Vercel Inc. | Lưu trữ web, chạy hàm máy chủ | Hoa Kỳ / vùng edge | Log kỹ thuật (IP, đường dẫn); dữ liệu đi qua hàm máy chủ khi gọi AI, không lưu | Theo chính sách log của Vercel |
| payOS (Việt Nam) | Cổng thanh toán | Việt Nam | Mã đơn, số tiền, mô tả ngắn | Theo quy định của payOS và pháp luật kế toán |

Cần có thỏa thuận bằng văn bản với từng bên xử lý (dùng DPA/điều khoản xử lý dữ liệu chuẩn của Supabase, Anthropic,
Vercel; đính kèm bản đã chấp nhận vào hồ sơ).

## 5. Đánh giá rủi ro và biện pháp

| Rủi ro | Mức | Biện pháp đã có trong code | Việc cần làm thêm |
| --- | --- | --- | --- |
| Lộ hồ sơ của người khác | Trung bình | RLS: mỗi người chỉ đọc/ghi hàng của mình (`supabase/migrations`) | Kiểm thử RLS trước khi mở |
| Lộ khóa máy chủ | Cao | Khóa service role và khóa payOS chỉ ở biến môi trường máy chủ, không gửi xuống trình duyệt | Xoay khóa định kỳ; giới hạn người có quyền Vercel |
| Giả mạo webhook thanh toán | Trung bình | Kiểm chữ ký HMAC-SHA256 bằng checksum key; xử lý lặp lại an toàn | Theo dõi đơn lệch tiền |
| Gửi quá nhiều dữ liệu cho AI | Thấp | Chỉ gửi bản tóm tắt lá số do engine dựng lại từ tham số, không gửi email | Nhắc người dùng không viết thông tin nhạy cảm vào câu hỏi |
| Người dùng muốn rút đồng ý/xóa dữ liệu | — | Nút xóa hồ sơ; xóa tài khoản kéo theo xóa dữ liệu (`on delete cascade`) | Quy trình phản hồi yêu cầu trong thời hạn NĐ 356 |
| Sự cố rò rỉ | — | — | Quy trình báo cáo sự cố cho A05 trong 72 giờ (mẫu thông báo vi phạm theo NĐ 356) |

## 6. Việc phải xong trước khi bật thu phí

1. Chọn chủ thể (cá nhân, hộ kinh doanh hay doanh nghiệp), điền mục 1.
2. Chấp nhận DPA của Supabase, Anthropic, Vercel và lưu bản PDF.
3. Chép mục 2–5 vào biểu mẫu DPIA và CTIA của NĐ 356, ký, nộp A05; lưu biên nhận.
4. Cập nhật trang Quyền riêng tư (`apps/web/app/quyen-rieng-tu`) cho khớp mục 4 (thêm payOS) và đổi `CONSENT_VERSION`.
5. Lên Vercel Pro (gói Hobby không cho dùng thương mại).
