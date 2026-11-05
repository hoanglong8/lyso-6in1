# Triển khai: tài khoản, database, AI luận giải

App chạy được khi **chưa** cấu hình gì: chế độ khách, hồ sơ lưu trên trình duyệt, chưa có AI.
Mỗi phần dưới bật độc lập.

## 1. Database + đăng nhập (Supabase)

1. Vercel → dự án `lyso-6in1` → **Storage** → **Create Database** → **Supabase** (tài khoản đã cài sẵn integration, gói Free).
   Chọn vùng **Singapore (ap-southeast-1)** cho gần Việt Nam. Bấm **Connect** vào dự án `lyso-6in1`, cả Production và Preview.
   Integration tự thêm `NEXT_PUBLIC_SUPABASE_URL` và `NEXT_PUBLIC_SUPABASE_ANON_KEY` (hoặc `…_PUBLISHABLE_KEY`).
2. Mở Supabase dashboard → **SQL Editor** → dán và chạy `supabase/migrations/20261105000000_init.sql`.
3. Supabase → **Authentication → URL Configuration**:
   - Site URL: `https://lyso-6in1.vercel.app`
   - Redirect URLs: `https://lyso-6in1.vercel.app/auth/callback`, `https://*-hoanglong8s-projects.vercel.app/auth/callback`
4. Supabase → **Authentication → Email Templates → Magic Link**: thêm `{{ .Token }}` để email có cả mã 6 số.
5. Email mặc định của Supabase bị giới hạn vài email/giờ — đủ để thử. Mở cho người dùng thật thì cấu hình SMTP riêng (Resend, SES…).

## 2. AI luận giải (Claude API)

1. Tạo API key ở console Anthropic, đặt giới hạn chi tiêu tháng.
2. Vercel → Settings → Environment Variables: `ANTHROPIC_API_KEY` (Production, Preview).
3. Tùy chọn `ADVANCED_EMAILS=a@x.vn,b@y.vn` — các email này dùng được gói Nâng cao để thử trước khi có thanh toán.
   Cấp gói lâu dài: thêm dòng vào bảng `goi_dich_vu` (plan `nang-cao`, `het_han`).

| Gói | Model | Lượt/ngày | Ước tính chi phí/lượt |
| --- | --- | --- | --- |
| Khách | Haiku 5.5 | 2 | ~0,001 USD |
| Cơ bản (đăng nhập) | Haiku 5.5 | 5 | ~0,001 USD |
| Nâng cao | Sonnet 5.5 | 30 | ~0,04–0,06 USD |

Ước tính theo giá công bố (Haiku 5.5: 0,10/0,50 USD; Sonnet 5.5: 2/10 USD mỗi triệu token vào/ra), ngữ cảnh ~3–4 nghìn token, bài ra ~1,5 nghìn (cơ bản) hoặc ~4 nghìn token (nâng cao).

## 3. Lưu ý pháp lý cần làm trước khi mở công khai

- Hồ sơ lá số là dữ liệu cá nhân cơ bản (Luật BVDLCN 2025, NĐ 356/2025). Đã có: đồng ý rõ ràng khi đăng nhập, trang Quyền riêng tư, tự xóa hồ sơ, RLS.
- Lưu ở Supabase Singapore là **chuyển dữ liệu ra nước ngoài**; gửi dữ liệu lá số sang Anthropic cũng vậy. Khi thu phí, cần lập hồ sơ đánh giá tác động chuyển dữ liệu ra nước ngoài theo nghị định.
- Vercel Hobby chỉ cho dùng phi thương mại: bật thu phí thì phải lên gói Pro.
- Thanh toán chưa làm: cổng nội địa (VNPay, MoMo, PayOS) thường yêu cầu hộ kinh doanh hoặc doanh nghiệp.
