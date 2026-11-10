# Lý số 6 in 1

Phần mềm tích hợp **Tử vi, Bát tự, Kỳ môn độn giáp, Đại Lục Nhâm (Lục nhâm đại độn), Thái ất thần số, Kinh dịch**,
tính theo **âm lịch Việt Nam (UTC+7)**, có múi giờ lịch sử và giờ mặt trời thực, ghi rõ trường phái.

- **Giai đoạn 1 (đang chạy, mặc định):** tính 6 môn và luận cơ bản theo luật, **toàn bộ trên trình duyệt**.
  Máy chủ không nhận, không lưu, không chuyển dữ liệu sinh ra nước ngoài. Hồ sơ chỉ lưu trên máy người dùng nếu họ bấm lưu.
- **Giai đoạn 2 (đã viết code, đang tắt):** Supabase (tài khoản, hồ sơ), AI luận giải (Claude API), cổng thanh toán payOS;
  còn cần Vercel Pro và nộp hồ sơ đánh giá chuyển dữ liệu ra nước ngoài (bản nháp: docs/ho-so-du-lieu-ca-nhan.md). Bật bằng `NEXT_PUBLIC_GIAI_DOAN=2` — xem [docs/trien-khai.md](docs/trien-khai.md).

## Nguyên tắc

1. **Một lõi lịch duy nhất.** Mọi engine chỉ đọc `CalendarSnapshot` từ `@lyso/calendar-vn`, không tự tính lịch.
2. **Tính trên trình duyệt.** Chế độ khách không gửi dữ liệu sinh lên server.
3. **AI không tính lá số.** AI chỉ diễn giải JSON đã tính.
4. **Trường phái là cấu hình**, ghi trong [docs/quyet-dinh-phai.md](docs/quyet-dinh-phai.md).

## Cấu trúc

```
apps/web                Next.js (App Router), deploy Vercel
packages/calendar-vn    Lõi lịch: âm lịch UTC+7, can chi, tiết khí, múi giờ lịch sử, giờ mặt trời thực
packages/engine-bazi    Bát tự: tàng can, thập thần, nạp âm, trường sinh, khởi vận, đại vận, lưu niên
packages/engine-tuvi    Tử vi: phái Việt (Thiên Lương), Nam phái, Trung Châu, Bắc phái (phi hóa); vận hạn năm xem
packages/engine-kinhdich  Kinh dịch: 64 quẻ, gieo xu, Mai Hoa, Lục hào nạp giáp (Bát cung, thế ứng, lục thân, lục thú, phục thần)
packages/engine-lucnham   Đại Lục Nhâm: thiên địa bàn, tứ khóa, tam truyền (Cửu tông môn), 12 thiên tướng, độn can
packages/engine-kymon     Kỳ môn độn giáp: chuyển bàn; định cục Sách bổ, Trí nhuận, Mão sơn
packages/engine-thaiat    Thái ất thần số: tứ kế, Thái ất cung, Văn xương, Thủy kích, chủ/khách/định toán, ngũ tướng
packages/luan-co-ban    Luận cơ bản theo luật cho 6 môn (văn tự viết riêng, đối chiếu sách), chạy trên trình duyệt
docs/                   Sổ quyết định trường phái
```

## Lõi lịch đã kiểm thử

- Âm lịch khớp **từng ngày** với tyme4ts (thuật toán sxwnl) khi đặt cùng múi giờ UTC+8, 1929–2099.
- Tết Việt Nam lệch Trung Quốc đúng các năm đã biết: 1968 (29/1 miền Bắc, 30/1 miền Nam), 1985 (21/1, sớm một tháng), 2007 (17/2).
- Đổi qua đổi lại âm–dương không mất ngày, 1900–2100.
- Tứ trụ Bát tự khớp tyme4ts, kể cả ±2 phút quanh mọi lúc giao tiết 1950–2050.
- Múi giờ: Sài Gòn UTC+8 từ 1/1/1960 đến 12/6/1975 (nguồn IANA tzdata).

## Bát tự và Tử vi đã kiểm thử

- Bát tự: thập thần, tàng can, nạp âm, trường sinh, chiều và mốc khởi vận, can chi và tuổi đại vận khớp tyme4ts
  trên 604 lá số mẫu 1935–2085 (số ngày khởi vận được lệch tối đa 1 do làm tròn thời khắc giao tiết).
- Tử vi: lá số dựng từ ngày âm Việt Nam; khớp iztro khi lịch VN và TQ trùng nhau; mọi ngày âm VN 1900–2100 đều an được sao.
- Phái Việt (Thiên Lương): khớp [lasotuvi](https://github.com/doanguyen/lasotuvi) trên 20.000 lá số ngẫu nhiên (tên cung, Thân, đại hạn, tiểu hạn, Tuần Triệt, toàn bộ sao kèm độ sáng và Tứ hóa).
- Bắc phái: bảng Tứ hóa phi tinh khớp Tứ hóa năm sinh của iztro cho cả 10 can.
- Bát tự: thần sát kiểm bằng các ca tra tay theo bảng Tam Mệnh Thông Hội.

## Kinh dịch và Đại Lục Nhâm đã kiểm thử

- Đại Lục Nhâm: tứ khóa khớp 720/720 và tam truyền khớp 717/720 khóa của bảng sách (3 khóa bảng tự mâu thuẫn, xem [docs](docs/quyet-dinh-phai.md)); thiên tướng khớp 720/720.
- Kinh dịch: thứ tự Bát cung Kinh Phòng đủ 64 quẻ; nạp giáp, thế ứng, phục thần đối chiếu sách (Thiên Phong Cấu, Thủy Hỏa Ký Tế); ví dụ "Quan mai chiêm" của Thiệu Khang Tiết.

## Kỳ môn và Thái ất đã kiểm thử

- Kỳ môn: chuyển bàn khớp kinqimen từng cung; Trí nhuận khớp mốc chính thụ 1719-08-08 (Kỳ môn Thống tông) và tần suất nhuận 1800–2100.
- Thái ất: ví dụ sách cho niên, nguyệt, nhật kế; dương 72 cục khớp bảng kintaiyi; âm 72 cục đối chiếu Vũ kinh tổng yếu (xem [docs](docs/quyet-dinh-phai.md)).

## Luận cơ bản (giai đoạn 1)

- Tử vi: Mệnh (chính tinh, độ sáng, vô chính diệu mượn Thiên Di, Tuần/Triệt), tam phương tứ chính, tứ hóa, Thân, cục–mệnh, 5 cung chính, đại/tiểu hạn.
- Bát tự: vượng suy nhật chủ theo 4 tiêu chí được lệnh, đắc địa, được sinh, được trợ (theo *Tôi học đoán mệnh*), hỷ/kỵ, thập thần, đại vận và lưu niên.
- Kinh dịch: quẻ chủ/hỗ/biến, hào động, Mai Hoa thể–dụng, Lục hào dụng thần theo việc hỏi. Thoán từ Hán Việt (Chu Dịch, phạm vi công cộng) đối chiếu sách: 61/64 quẻ khớp nguyên văn, 3 quẻ khác dị bản.
- Đại Lục Nhâm, Kỳ môn, Thái ất: luận theo luật cơ bản và cách cục thông dụng (sinh khắc tam truyền, thập can khắc ứng, ngũ bất ngộ thời, tam tài số); **chưa có sách chuyên đề trong kho để đối chiếu**, mỗi bài ghi rõ điều này.
- Sách tham khảo là sách có bản quyền, chỉ dùng để đối chiếu, không đưa vào repo; văn tự trong app là viết riêng.

## Tài khoản và AI luận giải (giai đoạn 2, đang tắt)

- Không đăng nhập: mọi thứ chạy trên trình duyệt. Đăng nhập (email OTP, Supabase): hồ sơ lưu theo tài khoản, chỉ chủ hồ sơ đọc được (RLS).
- AI luận giải: máy chủ dựng lại lá số từ tham số đầu vào rồi gửi `toPromptContext` của engine tới Claude; gói cơ bản dùng Haiku 5.5, nâng cao dùng Sonnet 5.5.
- Cấu hình xem [docs/trien-khai.md](docs/trien-khai.md).

## Chạy thử

```bash
pnpm install
pnpm test          # toàn bộ test
pnpm dev           # web tại http://localhost:3000
```

Yêu cầu Node 22+, pnpm 10.

## Thư viện

- [astronomy-engine](https://github.com/cosinekitty/astronomy) (MIT): điểm sóc, kinh độ Mặt Trời.
- [iztro](https://github.com/SylarLong/iztro) (MIT): lõi an sao Tử vi cho Nam phái, Trung Châu, Bắc phái.
- [liuren-ts-lib](https://github.com/look-fate/liuren-ts-lib) (Apache-2.0): bảng 720 khóa, chỉ dùng làm đáp án trong test.
- [lasotuvi](https://github.com/doanguyen/lasotuvi) (MIT): nguồn quy tắc phái Việt, chỉ dùng làm bộ đối chiếu trong test.
- [tyme4ts](https://github.com/6tail/tyme4ts) (MIT): chỉ dùng làm đáp án đối chiếu trong test.

## Giấy phép

[AGPL-3.0](LICENSE). Ai chạy phiên bản sửa đổi của phần mềm này thành dịch vụ cho người khác dùng thì phải công bố mã nguồn
phiên bản đó. Kho tri thức luận giải (giai đoạn 2) không nằm trong repo này.

## Lưu ý

Nội dung mang tính văn hóa, nghiên cứu, tham khảo; không phải lời khẳng định về tương lai và không thay thế tư vấn y tế, pháp lý, tài chính.
