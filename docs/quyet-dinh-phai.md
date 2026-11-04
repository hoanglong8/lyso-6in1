# Sổ quyết định trường phái

Mỗi quy ước có thể gây tranh cãi được ghi ở đây: lựa chọn mặc định, các phương án, lý do, và người duyệt.
Thầy thẩm định ký vào cột "Duyệt" trước khi mở beta (Cổng 2).

| Mã | Môn | Quy ước | Mặc định | Phương án khác | Lý do | Duyệt |
| --- | --- | --- | --- | --- | --- | --- |
| L-01 | Chung | Múi giờ âm lịch | UTC+7 (QĐ 121/CP 8/8/1967) | — | Lịch chính thức Việt Nam | |
| L-02 | Chung | Âm lịch cho người sinh ở miền Nam 1960–1975 | Theo múi giờ có hiệu lực lúc đó (UTC+8) | Luôn UTC+7 | Lịch in ở miền Nam thời đó tính theo UTC+8 | |
| L-03 | Chung | Múi giờ miền Bắc 1945–1967 | UTC+7 từ 1/7/1955, gắn cờ chưa chắc chắn | UTC+8 đến 8/8/1967 | Nguồn chưa thống nhất; cho người dùng tự chỉnh | |
| L-04 | Chung | Giờ dùng để tính | Giờ đồng hồ | Giờ mặt trời thực | Luôn hiển thị cả hai để người dùng thấy ca biên | |
| L-05 | Chung | Đổi ngày | 23h (giờ Tý sớm thuộc ngày sau) | 0h (Tý muộn: giữ trụ ngày, can giờ theo ngày sau) | Phổ biến trong Tử vi và Bát tự Việt | |
| L-06 | Bát tự | Ranh giới năm | Lập xuân (315°) | — | Chuẩn Bát tự | |
| L-07 | Bát tự | Ranh giới tháng | 12 tiết (315°, 345°, 15°…) | — | Chuẩn Bát tự | |
| L-08 | Tử vi | Ranh giới năm | Tết Nguyên đán | — | Chuẩn Tử vi | |
| L-09 | Lục nhâm | Nguyệt tướng | Đổi tại trung khí; sau Vũ thủy là Hợi | — | Chuẩn Đại Lục Nhâm | |

## Ngoại lệ đã biết khi đối chiếu

- Lịch Trung Quốc trước 1929 tính theo giờ địa phương Bắc Kinh (UTC+7:45:40), nên test đối chiếu với tyme4ts chỉ chạy từ 1929.
- Tháng 7–8/2097: điểm sóc rơi lúc 00:00:15 giờ Bắc Kinh; lệch vài giây ΔT giữa hai thư viện. Ca biên hợp lệ.
