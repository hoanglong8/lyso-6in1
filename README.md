# Lý số 6 in 1

Phần mềm tích hợp **Tử vi, Bát tự, Kỳ môn độn giáp, Đại Lục Nhâm (Lục nhâm đại độn), Thái ất thần số, Kinh dịch**,
tính theo **âm lịch Việt Nam (UTC+7)**, có múi giờ lịch sử và giờ mặt trời thực, ghi rõ trường phái.

- Giai đoạn 1: tính đúng 6 môn, giao diện nhập hồ sơ, lưu và chia sẻ lá số.
- Giai đoạn 2: AI luận giải dựa trên kết quả đã tính, có trích dẫn nguồn (luận cơ bản miễn phí, luận nâng cao trả phí).

## Nguyên tắc

1. **Một lõi lịch duy nhất.** Mọi engine chỉ đọc `CalendarSnapshot` từ `@lyso/calendar-vn`, không tự tính lịch.
2. **Tính trên trình duyệt.** Chế độ khách không gửi dữ liệu sinh lên server.
3. **AI không tính lá số.** AI chỉ diễn giải JSON đã tính.
4. **Trường phái là cấu hình**, ghi trong [docs/quyet-dinh-phai.md](docs/quyet-dinh-phai.md).

## Cấu trúc

```
apps/web                Next.js (App Router), deploy Vercel
packages/calendar-vn    Lõi lịch: âm lịch UTC+7, can chi, tiết khí, múi giờ lịch sử, giờ mặt trời thực
packages/engine-*       (sắp có) bazi, tuvi, iching, liuren, qimen, taiyi
docs/                   Sổ quyết định trường phái
```

## Lõi lịch đã kiểm thử

- Âm lịch khớp **từng ngày** với tyme4ts (thuật toán sxwnl) khi đặt cùng múi giờ UTC+8, 1929–2099.
- Tết Việt Nam lệch Trung Quốc đúng các năm đã biết: 1968 (29/1 miền Bắc, 30/1 miền Nam), 1985 (21/1, sớm một tháng), 2007 (17/2).
- Đổi qua đổi lại âm–dương không mất ngày, 1900–2100.
- Tứ trụ Bát tự khớp tyme4ts, kể cả ±2 phút quanh mọi lúc giao tiết 1950–2050.
- Múi giờ: Sài Gòn UTC+8 từ 1/1/1960 đến 12/6/1975 (nguồn IANA tzdata).

## Chạy thử

```bash
pnpm install
pnpm test          # toàn bộ test
pnpm dev           # web tại http://localhost:3000
```

Yêu cầu Node 22+, pnpm 10.

## Thư viện

- [astronomy-engine](https://github.com/cosinekitty/astronomy) (MIT): điểm sóc, kinh độ Mặt Trời.
- [tyme4ts](https://github.com/6tail/tyme4ts) (MIT): chỉ dùng làm đáp án đối chiếu trong test.

## Lưu ý

Nội dung mang tính văn hóa, nghiên cứu, tham khảo; không phải lời khẳng định về tương lai và không thay thế tư vấn y tế, pháp lý, tài chính.
