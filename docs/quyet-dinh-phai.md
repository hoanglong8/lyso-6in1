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
| B-01 | Bát tự | Khởi vận | Đếm tới tiết kế tiếp (thuận) hoặc tiết trước (nghịch); 3 ngày = 1 năm, 1 ngày = 4 tháng, 2 giờ = 10 ngày | Các bảng quy đổi khác | Cách thông dụng, khớp tyme4ts | |
| B-02 | Bát tự | Thuận/nghịch | Năm dương nam, năm âm nữ đi thuận | — | Chuẩn Bát tự | |
| T-01 | Tử vi | Trường phái an sao | Việt Nam – Thiên Lương | Nam phái (Tam hợp, Toàn thư); Trung Châu; Bắc phái (Tứ hóa phi tinh); Đông A: **chưa có** | Phái Việt viết lại bằng TypeScript từ lasotuvi (MIT, quy tắc dẫn từ sách cụ Thiên Lương), đối chiếu khớp 20.000 lá số. Ba phái còn lại chạy trên iztro. Đông A: chưa tìm được tài liệu công bố quy tắc an sao → để trống, không tự chế | Cần thầy kiểm tra bảng phái Việt |
| T-04 | Tử vi | Mệnh chủ / Thân chủ (phái Việt) | Mệnh chủ theo chi cung Mệnh, Thân chủ theo chi năm sinh | — | lasotuvi tra theo can năm, sai so với sách — lệch có chủ ý | |
| T-05 | Tử vi | Vận hạn năm xem | Tuổi mụ = năm xem − năm âm sinh + 1; đại hạn, tiểu hạn, lưu Thái Tuế; sao lưu và lưu Tứ hóa theo can chi năm xem | — | Phái Việt dùng bảng Tứ hóa Thiên Lương cho lưu Tứ hóa; các phái iztro dùng `horoscope()` tại rằm tháng 6 âm năm xem | |
| B-03 | Bát tự | Thần sát | Bảng Tam Mệnh Thông Hội: quý nhân, Văn Xương, Lộc, Dương nhận theo can ngày (quý nhân xét thêm can năm); Tam hợp theo chi năm và chi ngày; Thiên/Nguyệt đức theo chi tháng; Cô quả, Hồng loan, Thiên hỷ theo chi năm; Không vong theo tuần của trụ ngày | — | Dương nhận chỉ tính can dương vì "âm nhận" có nhiều thuyết | |
| T-02 | Tử vi | Sinh tháng nhuận | 15 ngày đầu tính tháng đó, từ 16 tính tháng sau | Tính như tháng đó; tính như tháng sau | Cách phổ biến; cho chọn | |
| T-03 | Tử vi | Ngày âm đưa vào an sao | Ngày âm Việt Nam (UTC+7) từ calendar-vn | — | iztro tự đổi theo lịch Trung Quốc nên không cho nó đổi từ dương lịch | |
| L-09 | Lục nhâm | Nguyệt tướng | Đổi tại trung khí; sau Vũ thủy là Hợi | — | Chuẩn Đại Lục Nhâm | |

## Ngoại lệ đã biết khi đối chiếu

- Lịch Trung Quốc trước 1929 tính theo giờ địa phương Bắc Kinh (UTC+7:45:40), nên test đối chiếu với tyme4ts chỉ chạy từ 1929.
- Tháng 7–8/2097: điểm sóc rơi lúc 00:00:15 giờ Bắc Kinh; lệch vài giây ΔT giữa hai thư viện. Ca biên hợp lệ.
- Tử vi: 96 ngày âm Việt Nam trong 1900–2100 không có trong lịch Trung Quốc (ví dụ ngày 30 mà tháng TQ chỉ có 29 ngày,
  hoặc tháng nhuận chỉ lịch VN có). Với các ngày này engine an sao bằng ngày tương đương cùng can chi năm (cách 60 năm),
  vì an sao chỉ phụ thuộc can chi năm, số tháng, số ngày, giờ, giới tính. Test kiểm chứng lá số cách 60 năm là y hệt.

## Ghi chú kỹ thuật phái Việt

- lasotuvi 0.1.2 có lỗi rò trạng thái: đối tượng sao dùng chung giữa các lá số nên độ sáng của lá số trước dính sang lá số sau. Script `scripts/oracle/lasotuvi_dump.py` vá lỗi này trước khi xuất bộ đối chiếu.
- CI sinh 3.000 lá số đối chiếu mỗi lần chạy (`LASOTUVI_ORACLE`); test bỏ qua khi không có file.
