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
| N-01 | Lục nhâm | Thiệp hại | Mạnh → Trọng → Quý theo chỗ thần ngồi trên địa bàn | Đếm độ sâu bị khắc trên đường về nhà (涉害深者为用) | Bảng 720 khóa trong sách dùng Mạnh–Trọng–Quý: khớp 717/720; đếm độ sâu lệch bảng ở ~12 khóa **Chốt** giữ Mạnh–Trọng–Quý: theo bảng sách, khớp 2 oracle độc lập (bảng 720 khóa và daliuren-lib) |
| N-02 | Lục nhâm | Quý nhân | Giáp Mậu Canh: ngày Sửu, đêm Mùi; Ất Kỷ Tý/Thân; Bính Đinh Hợi/Dậu; Tân Ngọ/Dần; Nhâm Quý Tỵ/Mão | Giáp ngày Mùi đêm Sửu (bảng tách từng can) | Khớp bảng sách; giờ Mão–Thân là ngày | |
| N-03 | Lục nhâm | Khóa trùng | Gộp khóa trùng (so can theo ký cung), giữ quan hệ khắc đầu tiên | — | Cần để khớp các ngày Bát chuyên và ngày can ký trùng chi | |
| K-01 | Kinh dịch | Lục hào | Nạp giáp Kinh Phòng, Bát cung, thế ứng, lục thân theo cung, lục thú theo can ngày, phục thần từ quẻ thuần của cung | — | Thông dụng (Tăng San Bốc Dịch) | |
| K-02 | Kinh dịch | Mai Hoa theo giờ | Số chi năm âm + tháng âm + ngày âm → thượng; + số giờ → hạ; tổng chia 6 → hào động | — | Thiệu Khang Tiết, ví dụ "Quan mai chiêm" khớp | |
| K-03 | Kinh dịch | Gieo xu | Ngửa 3, sấp 2; 6 lão âm, 7 thiếu dương, 8 thiếu âm, 9 lão dương | Ngửa 2, sấp 3 | Cho người dùng tự nhập kết quả gieo xu thật | |
| Q-01 | Kỳ môn | Bàn | Thời gia, chuyển bàn | (Phi bàn: chưa làm) | Thông dụng nhất | |
| Q-02 | Kỳ môn | Định cục | Sách bổ: tiết theo thời điểm, nguyên theo phù đầu ngày (Giáp/Kỷ: Tý Ngọ Mão Dậu thượng, Dần Thân Tỵ Hợi trung, Thìn Tuất Sửu Mùi hạ) | Trí nhuận (siêu thần tiếp khí, nhuận ở Mang chủng/Đại tuyết khi siêu ≥ 8 ngày lịch); Mão sơn (mỗi 5 ngày sau giao tiết) | Sách bổ khớp kinqimen; Trí nhuận khớp mốc Kỳ môn Thống tông 1719-08-08 và ví dụ qimen-dunjia; Mão sơn khớp qimen-dunjia | Ngày giao tiết tính theo giờ Việt Nam nên có thể lệch 1 ngày so với sách Trung Quốc |
| Q-03 | Kỳ môn | Trung cung | Ký Khôn 2 | Dương ký Cấn 8, âm ký Khôn 2 | | |
| A-01 | Thái ất | Tích niên | Thống tông: 10153917 + năm | Kim kính: 1936557 + năm | Ví dụ sách 2004 → dương 33 cục | |
| A-02 | Thái ất | Độn | Niên, nguyệt, nhật kế: dương độn; thời kế: Đông chí → dương, Hạ chí → âm | — | | |
| A-03 | Thái ất | Nhật kế | Đếm ngày liên tục, neo ví dụ sách 2004-06-01 → 60 cục | kintaiyi: lệch đúng 5 cục (tích nhật của kintaiyi lệch 5 so với can chi ngày) | Ví dụ có trong sách; mốc nhật kế trong kintaiyi không khớp can chi ngày | |
| A-04 | Thái ất | Đại tướng | Lấy hàng đơn vị của toán; toán chẵn chục lấy số chục (10 → 1, 30 → 3) | kintaiyi: chẵn chục → 5 | Vũ kinh tổng yếu | |
| A-05 | Thái ất | Thời kế | Tích thời = (tích nhật − 1) × 12 + chi giờ + 1; Thái tuế = chi giờ | — | Khớp kintaiyi 97/97 ca; không phụ thuộc mốc tích nhật. Bảng âm cục Vũ kinh tổng yếu ghép Kế thần với cục lệch 6 — giữ công thức, ghi nhận để thầy xem | Cần thầy xác nhận cách dùng bảng âm cục |

## Ngoại lệ đã biết khi đối chiếu

- Lịch Trung Quốc trước 1929 tính theo giờ địa phương Bắc Kinh (UTC+7:45:40), nên test đối chiếu với tyme4ts chỉ chạy từ 1929.
- Tháng 7–8/2097: điểm sóc rơi lúc 00:00:15 giờ Bắc Kinh; lệch vài giây ΔT giữa hai thư viện. Ca biên hợp lệ.
- Tử vi: 96 ngày âm Việt Nam trong 1900–2100 không có trong lịch Trung Quốc (ví dụ ngày 30 mà tháng TQ chỉ có 29 ngày,
  hoặc tháng nhuận chỉ lịch VN có). Với các ngày này engine an sao bằng ngày tương đương cùng can chi năm (cách 60 năm),
  vì an sao chỉ phụ thuộc can chi năm, số tháng, số ngày, giờ, giới tính. Test kiểm chứng lá số cách 60 năm là y hệt.

## Ghi chú kỹ thuật phái Việt

- lasotuvi 0.1.2 có lỗi rò trạng thái: đối tượng sao dùng chung giữa các lá số nên độ sáng của lá số trước dính sang lá số sau. Script `scripts/oracle/lasotuvi_dump.py` vá lỗi này trước khi xuất bộ đối chiếu.
- CI sinh 3.000 lá số đối chiếu mỗi lần chạy (`LASOTUVI_ORACLE`); test bỏ qua khi không có file.

## Ghi chú Đại Lục Nhâm

- Đối chiếu: bảng 720 khóa của `liuren-ts-lib` (Apache-2.0, chép từ sách) làm đáp án; `daliuren-lib` (thuật toán) và `kinliuren` (MIT) để so chéo. liuren-ts-lib và daliuren-lib khớp nhau 717/720; kinliuren lệch 113 khóa (chủ yếu Phản ngâm, Phục ngâm) nên không dùng.
- 3 khóa bảng sách tự mâu thuẫn (丁卯+10, 辛卯+10, 己亥+4): cùng cấu trúc tứ khóa với các ngày khác nhưng ra sơ truyền khác. Ghi nhận là ngoại lệ của bảng, không chỉnh thuật toán để ép khớp.

## Ghi chú Kỳ môn và Thái ất

- Kỳ môn: dựng bàn đối chiếu từng cung với kinqimen (转盘, 拆补) cho một thời điểm; các thuộc tính bất biến (mỗi cung đủ môn, thần, 9 sao) kiểm trên 9 cục × 2 độn × 60 giờ.
- Thái ất: dương độn 72 cục đối chiếu bảng lập thành trong kintaiyi (MIT) — khớp trừ Thủy kích cục 30/66, nơi bảng kintaiyi phá quy luật tiến dần (lỗi chép). Âm độn đối chiếu bảng lập thành Vũ kinh tổng yếu (thời Tống): Thái ất cung, Văn xương, chủ đại tướng khớp 62/62 dòng; 12 chỗ khác ở khách toán có dạng chép nhầm chữ số, đã ghi trong test.
- Oracle tự động (chạy trong test): Kỳ môn dựng bàn khớp kinqimen 3000/3000, Sách bổ 3000/3000; Mão sơn khớp qimen-dunjia 2000/2000; Trí nhuận khớp ngoài khung 23h (qimen-dunjia định cục theo ngày dân sự lúc 23h). Thái ất: mọi trường không phụ thuộc toán khớp kintaiyi 372/372; các khác biệt còn lại thuộc 3 loại lỗi đã xác định của kintaiyi (toán trả 0, đại tướng ở toán 1/chẵn chục, Thủy kích nhật/thời kế tra bảng niên kế).
- Sửa lỗi lõi lịch: `nextSunLongitude` đôi khi trượt mất điểm 0° (Xuân phân) khi tìm với cửa sổ dài; nay tìm theo cửa sổ 40 ngày.

## Ghi chú luận cơ bản (giai đoạn 1)

- Luận cơ bản là luật cố định, không dùng AI: cùng lá số luôn ra cùng bài, có "căn cứ" cho từng ý.
- Bát tự vượng suy: được lệnh khi chi tháng ở Trường sinh, Mộc dục, Quan đới, Lâm quan, Đế vượng của nhật can; cộng thêm đắc địa (gốc ở chi ngày/giờ/năm), được sinh (Ấn), được trợ (Tỷ Kiếp lộ can). Theo *Tôi học đoán mệnh* Q1 ch.7.
- Tử vi: mệnh vô chính diệu mượn chính tinh Thiên Di; Liêm Trinh ghi "Hỏa (có sách ghi Mộc)" do các sách không thống nhất.
- Kinh dịch: thoán từ 3 quẻ (11, 47, 51) khác bản sách đối chiếu do dị bản; giữ bản Chu Dịch thông hành.
- Lục Nhâm, Kỳ môn, Thái ất: chưa có sách chuyên đề trong kho để đối chiếu — cần thầy duyệt trước khi coi là chuẩn.

## Ghi chú Tử vi: luận theo kinh nghiệm video

- Phái Thiên Lương có thêm các mục "kinh nghiệm luận 389 TỬ VI"; Bắc phái có thêm "kinh nghiệm luận Đào Thanh Tín". Danh sách quy tắc và nguồn: [tuvi-quy-tac-video.md](tuvi-quy-tac-video.md). Các mục này tách riêng khỏi phần đối chiếu sách.
- Âm dương thuận lý = âm dương năm sinh trùng âm dương cung Mệnh (không xét giới tính). Bản port lasotuvi trước đây nhân với giới tính, đã sửa.
- Bắc phái: bảng tứ hóa thầy Đào Thanh Tín dùng trùng bảng thông dụng của engine (Canh: Dương Vũ Âm Đồng; Nhâm: Lương Tử Phụ Vũ; Mậu: Tham Âm Bật Cơ).
- Đợt 2 (Tử Vi Học Quán, Lê Quang Lăng) thêm cho phái Thiên Lương: sao lưu mở rộng (Lưu Đào Hoa, Hồng Loan, Thiên Hỷ, Long Đức, Nguyệt Đức, Khôi, Việt), lưu niên đại hạn, sao đại vận (Lộc Tồn, Kình, Đà, Khôi, Việt, Mã theo can chi cung đại hạn) và tứ hóa đại vận, nguyệt hạn. Công thức theo bài giảng kênh Tử Vi Học Quán.
- Đã sửa (11/2026, E1–E3): Phá Toái (Tý Ngọ Mão Dậu ở Tỵ, Dần Thân Tỵ Hợi ở Dậu, tứ mộ ở Sửu); Khôi/Việt: Giáp Mậu Sửu/Mùi, Ất Kỷ Tý/Thân, Bính Đinh Hợi/Dậu, Canh Tân Ngọ/Dần (câu phú "Canh Tân phùng Mã Hổ"), Nhâm Quý Mão/Tỵ. Test đối chiếu lasotuvi bỏ ba sao này; có test riêng theo sách.
- Vòng Tràng Sinh phái Việt: sửa thứ tự Mộ → Tuyệt → Thai → Dưỡng → Tràng Sinh (lasotuvi đặt ngược Thai/Dưỡng). Test đối chiếu lasotuvi bỏ hai sao này, có test riêng cho thứ tự vòng.
- Phú Tử vi: `luan-co-ban/src/tuvi-phu-data.ts` — câu phú cổ Hán Việt các thầy trích dẫn, kèm điều kiện máy kiểm; hiện ở mọi phái khi khớp. Nghĩa viết lại, không chép bản dịch của sách hiện đại.
- Đợt 4 (11/2026): Bắc phái thêm trường Khâm Thiên Tứ hóa (Tâm Thành, Minh Phương, Tử vi lý số) — `tuvi-video4.ts`.
  Ly tâm = can cung X hóa sao nằm trong X; hướng tâm = can cung X hóa sao ở cung đối (định nghĩa chung của ba nguồn,
  khác một số sách Khâm Thiên đặt nhãn ở cung nhận). Tứ hóa lưu niên vẫn dùng can năm; thêm một dòng song song theo
  can cung lưu niên (Minh Phương). Thiên Đồng hóa Kỵ: chỉ tự hóa Kỵ mới luận tổn phúc (Đào Thanh Tín).
- Phú Tử vi (11/2026, đợt 2): ~610 bản ghi / ~460 câu phú cổ từ 100 câu phú Ma Thị, Phú Tử vi thông thơ, phú Lộc Quyền
  Khoa Kỵ, 50 câu phú cách cục, thơ phú Tử vi (tuvibatquai), phú các thầy trích. Chỉ lấy câu phú (phạm vi công cộng),
  nghĩa tự viết; không lấy lời giải của trang web hay sách hiện đại (Vũ Tài Lục, Thái Văn Thịnh). Câu gặp ở >8% lá số
  gắn `pho: true` và hiện ở mục "câu phổ quát". `sang: false` nghĩa là chính tinh Hãm (không tính Bình).
- Phú Tử vi đợt 3 (11/2026): thêm ~700 bản ghi từ "Tử vi đẩu số phú giải" (Thái Văn Thịnh) và "Tử Vi Đẩu Số Toàn Thư"
  (Trần Đoàn, bản Vũ Tài Lục, gồm các bài ca và Phú nôm cốt tủy) → ~1.130 câu. Chỉ lấy câu phú; lời giải/dịch của hai
  sách không được dùng (agent chỉ nhận danh sách câu đã tách). Mỗi bản ghi lưu `tanSuat` (‰ trên 1000 lá số); câu >4% là
  phổ quát, mục phổ quát hiện tối đa 12 câu hiếm nhất. Dữ liệu phú ~600 KB trong chunk luận (gzip ~134 KB) — có thể tách
  lazy-load sau nếu cần.
