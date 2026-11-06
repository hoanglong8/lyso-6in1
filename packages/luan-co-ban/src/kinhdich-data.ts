/**
 * 64 quẻ — Thoán từ (lời quẻ) phiên âm Hán Việt từ nguyên văn Chu Dịch (phạm vi công cộng); ý chính và lời khuyên
 * tự viết. Phiên âm được kiểm khớp với "Giải nghĩa 64 quẻ Kinh dịch" (test kinhdich-sach.test.ts, chạy khi có văn bản sách).
 * Thứ tự Văn Vương, chỉ số 0 = quẻ số 1.
 */
export interface Que {
  thoan: string;
  y: string;
  khuyen: string;
}

export const QUE: Que[] = [
  { thoan: "Càn: Nguyên, hanh, lợi, trinh.", y: "Sức sáng tạo mạnh mẽ, vận động không ngừng như trời.", khuyen: "Tự cường, bền chí, làm việc chính đáng; tránh kiêu căng khi đang lên." },
  { thoan: "Khôn: Nguyên, hanh, lợi tẫn mã chi trinh.", y: "Nhu thuận, bao dung, nuôi dưỡng như đất.", khuyen: "Theo sau người dẫn dắt đúng đắn, kiên nhẫn, tích đức; không nên tranh đi trước." },
  { thoan: "Truân: Nguyên, hanh, lợi, trinh, vật dụng hữu du vãng, lợi kiến hầu.", y: "Khó khăn buổi đầu, vạn sự khởi đầu nan.", khuyen: "Đừng vội tiến; củng cố nền tảng và tìm người giỏi giúp sức." },
  { thoan: "Mông: Hanh. Phỉ ngã cầu đồng mông, đồng mông cầu ngã.", y: "Non nớt, chưa sáng tỏ, cần được dạy dỗ.", khuyen: "Khiêm tốn học hỏi, hỏi một lần cho rõ; giữ lòng thành với người dạy." },
  { thoan: "Nhu: Hữu phu, quang hanh, trinh cát, lợi thiệp đại xuyên.", y: "Chờ đợi đúng thời, nuôi sức trước khi vượt hiểm.", khuyen: "Kiên nhẫn chờ, giữ lòng tin; chuẩn bị kỹ rồi mới hành động." },
  { thoan: "Tụng: Hữu phu, trất dịch, trung cát, chung hung.", y: "Tranh chấp, kiện tụng, bất đồng.", khuyen: "Dừng ở giữa chừng thì tốt, theo đuổi đến cùng thì xấu; tìm người công tâm phân xử." },
  { thoan: "Sư: Trinh, trượng nhân cát, vô cữu.", y: "Đoàn quân, tập hợp lực lượng đông người.", khuyen: "Cần người lãnh đạo chín chắn và kỷ luật rõ ràng; ra quân phải có chính nghĩa." },
  { thoan: "Tỷ: Cát. Nguyên phệ, nguyên vĩnh trinh, vô cữu.", y: "Thân cận, liên kết, đoàn kết với nhau.", khuyen: "Chọn đúng người để gắn bó và đến sớm; chậm trễ thì lỡ dịp." },
  { thoan: "Tiểu súc: Hanh. Mật vân bất vũ, tự ngã tây giao.", y: "Tích tụ nhỏ, bị kìm giữ tạm thời — mây dày mà chưa mưa.", khuyen: "Kiên nhẫn trau dồi từng chút; thời cơ chưa chín, đừng làm lớn." },
  { thoan: "Lý: Lý hổ vĩ, bất điệt nhân, hanh.", y: "Bước đi thận trọng — như giẫm lên đuôi hổ mà không bị cắn.", khuyen: "Giữ lễ, biết vị trí của mình; ứng xử mềm mỏng trước người mạnh." },
  { thoan: "Thái: Tiểu vãng đại lai, cát, hanh.", y: "Hanh thông, trên dưới giao hòa.", khuyen: "Tận dụng thời thịnh để xây nền; lo trước lúc suy." },
  { thoan: "Bĩ: Bĩ chi phỉ nhân, bất lợi quân tử trinh, đại vãng tiểu lai.", y: "Bế tắc, trên dưới không thông.", khuyen: "Giữ mình, thu liễm, đừng ham danh lợi; chờ vận đổi." },
  { thoan: "Đồng nhân: Đồng nhân vu dã, hanh, lợi thiệp đại xuyên, lợi quân tử trinh.", y: "Hòa đồng với người, chung chí hướng.", khuyen: "Hợp tác công khai, vì cái chung; tránh bè phái." },
  { thoan: "Đại hữu: Nguyên hanh.", y: "Có được nhiều, thịnh vượng.", khuyen: "Khi có nhiều phải biết khiêm và chia sẻ, giữ điều thiện." },
  { thoan: "Khiêm: Hanh, quân tử hữu chung.", y: "Khiêm tốn, tự hạ mình mà được quý.", khuyen: "Càng giỏi càng khiêm; khiêm tốn thì việc trước sau đều tốt." },
  { thoan: "Dự: Lợi kiến hầu hành sư.", y: "Vui vẻ, hứng khởi, thuận lòng người.", khuyen: "Dùng lúc lòng người hưng phấn để bắt đầu việc; đừng mải vui mà buông lơi." },
  { thoan: "Tùy: Nguyên, hanh, lợi, trinh, vô cữu.", y: "Thuận theo, đi theo thời thế và người đúng.", khuyen: "Linh hoạt theo hoàn cảnh nhưng vẫn giữ chính đạo." },
  { thoan: "Cổ: Nguyên hanh, lợi thiệp đại xuyên.", y: "Đổ nát cần sửa sang — việc hư hỏng tích lâu ngày.", khuyen: "Mạnh dạn sửa sai, xem xét kỹ nguyên nhân trước và sau khi làm." },
  { thoan: "Lâm: Nguyên, hanh, lợi, trinh. Chí vu bát nguyệt hữu hung.", y: "Tiến tới, đến gần, thế đang lên.", khuyen: "Tận dụng thời thịnh nhưng nhớ rằng thịnh cực sẽ suy." },
  { thoan: "Quan: Quán nhi bất tiến, hữu phu ngung nhược.", y: "Quan sát, chiêm ngưỡng, làm gương.", khuyen: "Nhìn rộng trước khi làm; tự sửa mình để người khác noi theo." },
  { thoan: "Phệ hạp: Hanh, lợi dụng ngục.", y: "Cắn vỡ vật chắn ngang — dùng sức và pháp chế trừ trở ngại.", khuyen: "Giải quyết dứt khoát chướng ngại, xử lý công minh." },
  { thoan: "Bí: Hanh, tiểu lợi hữu du vãng.", y: "Trang sức, vẻ đẹp bề ngoài.", khuyen: "Chăm chút hình thức vừa phải; việc nhỏ thì lợi, việc lớn cần thực chất." },
  { thoan: "Bác: Bất lợi hữu du vãng.", y: "Bóc mòn, suy lạc, cái cũ đổ dần.", khuyen: "Không nên tiến hành việc mới; giữ gìn cái gốc, đợi qua." },
  { thoan: "Phục: Hanh, xuất nhập vô tật, bằng lai vô cữu.", y: "Trở lại, phục hồi — dương khí bắt đầu sinh lại.", khuyen: "Bắt đầu lại từ từ, sửa sai sớm; mọi việc sẽ hồi phục theo chu kỳ." },
  { thoan: "Vô vọng: Nguyên hanh, lợi trinh.", y: "Không càn bậy, chân thật, tự nhiên.", khuyen: "Hành động ngay thẳng, không mưu cầu bất chính; đừng làm trái lẽ." },
  { thoan: "Đại súc: Lợi trinh, bất gia thực cát, lợi thiệp đại xuyên.", y: "Tích chứa lớn, nuôi dưỡng tài đức.", khuyen: "Tích lũy kiến thức và nguồn lực; đủ rồi thì ra làm việc lớn." },
  { thoan: "Di: Trinh cát. Quan di, tự cầu khẩu thực.", y: "Nuôi dưỡng — thân và tâm.", khuyen: "Cẩn trọng lời nói, ăn uống, và cách mình nuôi người, nuôi mình." },
  { thoan: "Đại quá: Đống nạo, lợi hữu du vãng, hanh.", y: "Quá mức — cột nhà cong vì gánh nặng.", khuyen: "Tình thế bất thường cần hành động khác thường nhưng có chừng mực." },
  { thoan: "Khảm: Tập khảm, hữu phu, duy tâm hanh, hành hữu thượng.", y: "Hiểm trở chồng chất.", khuyen: "Giữ lòng tin và sự kiên định để vượt hiểm; đi từng bước." },
  { thoan: "Ly: Lợi trinh, hanh. Súc tẫn ngưu cát.", y: "Sáng sủa, bám dựa vào cái đúng.", khuyen: "Nương vào người và việc chính đáng; giữ sự mềm thuận bên trong." },
  { thoan: "Hàm: Hanh, lợi trinh, thú nữ cát.", y: "Cảm ứng, rung động hai chiều.", khuyen: "Chân thành, cởi mở để tạo đồng cảm; hợp chuyện tình cảm, hôn nhân." },
  { thoan: "Hằng: Hanh, vô cữu, lợi trinh, lợi hữu du vãng.", y: "Bền lâu, kiên trì.", khuyen: "Giữ vững đường đã chọn, đều đặn; tránh thay đổi thất thường." },
  { thoan: "Độn: Hanh, tiểu lợi trinh.", y: "Lui ẩn, rút lui đúng lúc.", khuyen: "Thời bất lợi thì lui để giữ sức; lui có trật tự, không phải bỏ chạy." },
  { thoan: "Đại tráng: Lợi trinh.", y: "Sức mạnh lớn, thế đang mạnh.", khuyen: "Mạnh mà giữ chính, tránh dùng sức bừa; biết dừng." },
  { thoan: "Tấn: Khang hầu dụng tích mã phồn thứ, trú nhật tam tiếp.", y: "Tiến lên, thăng tiến như mặt trời mọc.", khuyen: "Thời cơ tốt để tiến; làm sáng đức mình và được người trên trọng dụng." },
  { thoan: "Minh di: Lợi gian trinh.", y: "Ánh sáng bị che, người hiền bị tổn hại.", khuyen: "Giấu tài, giữ chí trong khó khăn; đừng phô trương." },
  { thoan: "Gia nhân: Lợi nữ trinh.", y: "Người trong nhà, nề nếp gia đình.", khuyen: "Chỉnh đốn nội bộ, mỗi người đúng vai; xây từ trong ra." },
  { thoan: "Khuê: Tiểu sự cát.", y: "Chống trái, khác biệt, xa cách.", khuyen: "Việc nhỏ vẫn làm được; tìm điểm chung trong khác biệt." },
  { thoan: "Kiển: Lợi tây nam, bất lợi đông bắc. Lợi kiến đại nhân, trinh cát.", y: "Gian nan, đường đi trắc trở.", khuyen: "Dừng lại xét mình, tìm người giúp; đi đường dễ hơn là đâm đầu vào hiểm." },
  { thoan: "Giải: Lợi tây nam. Vô sở vãng, kỳ lai phục cát. Hữu du vãng, túc cát.", y: "Cởi mở, giải thoát khó khăn.", khuyen: "Khó khăn vừa qua: nhanh chóng ổn định, bao dung, đừng để việc kéo dài." },
  { thoan: "Tổn: Hữu phu, nguyên cát, vô cữu, khả trinh, lợi hữu du vãng.", y: "Giảm bớt, hy sinh cái dưới cho cái trên.", khuyen: "Biết bớt đi để được việc lớn; giảm ham muốn, chân thành." },
  { thoan: "Ích: Lợi hữu du vãng, lợi thiệp đại xuyên.", y: "Tăng thêm, lợi ích lan tỏa.", khuyen: "Thời tốt để làm việc có ích; thấy điều thiện thì theo, có lỗi thì sửa." },
  { thoan: "Quải: Dương vu vương đình, phu hiệu hữu lệ.", y: "Quyết đoán, dứt bỏ cái xấu.", khuyen: "Công khai, quyết liệt mà không bạo lực; chuẩn bị kỹ trước khi đối đầu." },
  { thoan: "Cấu: Nữ tráng, vật dụng thú nữ.", y: "Gặp gỡ bất ngờ, cái nhỏ len vào cái lớn.", khuyen: "Cẩn trọng với ảnh hưởng mới, dù nhỏ; đừng vội gắn bó." },
  { thoan: "Tụy: Hanh. Vương cách hữu miếu, lợi kiến đại nhân, hanh, lợi trinh.", y: "Tụ hội, nhóm họp đông người.", khuyen: "Tập hợp lực lượng quanh mục tiêu chính đáng; phòng biến khi đông người." },
  { thoan: "Thăng: Nguyên hanh, dụng kiến đại nhân, vật tuất, nam chinh cát.", y: "Đi lên từ từ, như cây mọc từ đất.", khuyen: "Tiến từng bước vững chắc; tìm người có quyền giúp đỡ." },
  { thoan: "Khốn: Hanh, trinh, đại nhân cát, vô cữu. Hữu ngôn bất tín.", y: "Khốn cùng, bị bó buộc.", khuyen: "Giữ chí và thái độ đúng trong khó khăn; lúc này nói ít người tin, làm nhiều hơn nói." },
  { thoan: "Tỉnh: Cải ấp bất cải tỉnh, vô táng vô đắc.", y: "Cái giếng — nguồn nuôi người không cạn.", khuyen: "Giữ gìn giá trị cốt lõi, làm mới phương tiện; phục vụ lâu dài." },
  { thoan: "Cách: Dĩ nhật nãi phu, nguyên hanh, lợi trinh, hối vong.", y: "Thay đổi, cải cách.", khuyen: "Đổi mới khi thời cơ chín và lòng người đã tin; làm triệt để, đúng lẽ." },
  { thoan: "Đỉnh: Nguyên cát, hanh.", y: "Cái vạc — xây dựng cái mới, nuôi người hiền.", khuyen: "Ổn định cơ cấu sau thay đổi, trọng dụng người tài." },
  { thoan: "Chấn: Hanh. Chấn lai hích hích, tiếu ngôn ách ách. Chấn kinh bách lý, bất táng chủy sưởng.", y: "Sấm động — chấn động, khởi phát.", khuyen: "Bình tĩnh trước biến cố; sợ hãi đúng mức để tự răn rồi vững vàng." },
  { thoan: "Cấn: Cấn kỳ bối, bất hoạch kỳ thân, hành kỳ đình, bất kiến kỳ nhân, vô cữu.", y: "Dừng lại, tĩnh như núi.", khuyen: "Biết dừng đúng lúc, giữ tâm yên; không vọng động." },
  { thoan: "Tiệm: Nữ quy cát, lợi trinh.", y: "Tiến dần dần, có thứ tự.", khuyen: "Từng bước theo trình tự, không đốt cháy giai đoạn." },
  { thoan: "Quy muội: Chinh hung, vô du lợi.", y: "Gả em gái — quan hệ không cân xứng, ở thế phụ.", khuyen: "Biết rõ vị trí của mình, tránh hành động vội vàng; giữ đến cùng mới tốt." },
  { thoan: "Phong: Hanh, vương cách chi, vật ưu, nghi nhật trung.", y: "Thịnh lớn, sung mãn như mặt trời giữa trưa.", khuyen: "Hưởng thời thịnh mà lo lúc nghiêng; làm việc công minh." },
  { thoan: "Lữ: Tiểu hanh, lữ trinh cát.", y: "Đi xa, ở trọ, không có chỗ dựa cố định.", khuyen: "Khiêm nhường, cẩn trọng nơi đất khách; việc nhỏ thì thuận." },
  { thoan: "Tốn: Tiểu hanh, lợi hữu du vãng, lợi kiến đại nhân.", y: "Thuận theo, thâm nhập nhẹ nhàng như gió.", khuyen: "Kiên trì, mềm mỏng mà thấm sâu; theo người có đức." },
  { thoan: "Đoài: Hanh, lợi trinh.", y: "Vui vẻ, hòa duyệt, giao tiếp.", khuyen: "Vui mà giữ chính; dùng niềm vui để kết nối, tránh nịnh bợ." },
  { thoan: "Hoán: Hanh. Vương cách hữu miếu, lợi thiệp đại xuyên, lợi trinh.", y: "Tan rã, ly tán — hoặc làm tan khó khăn.", khuyen: "Hàn gắn sự chia rẽ bằng mục tiêu chung; xua tan tâm lý ích kỷ." },
  { thoan: "Tiết: Hanh. Khổ tiết bất khả trinh.", y: "Tiết chế, có chừng mực.", khuyen: "Đặt giới hạn hợp lý; tiết kiệm quá khắc nghiệt thì không bền." },
  { thoan: "Trung phu: Đồn ngư cát, lợi thiệp đại xuyên, lợi trinh.", y: "Lòng thành tín từ bên trong.", khuyen: "Thành thật cảm hóa được cả người khó tính; giữ chữ tín." },
  { thoan: "Tiểu quá: Hanh, lợi trinh, khả tiểu sự, bất khả đại sự.", y: "Hơi quá — cái nhỏ vượt cái lớn.", khuyen: "Làm việc nhỏ, khiêm hạ; không nên ôm việc lớn lúc này." },
  { thoan: "Ký tế: Hanh tiểu, lợi trinh, sơ cát chung loạn.", y: "Đã xong, đã qua sông.", khuyen: "Đã thành thì phải lo giữ; đề phòng lơ là sinh loạn về sau." },
  { thoan: "Vị tế: Hanh. Tiểu hồ ngật tế, nhu kỳ vĩ, vô du lợi.", y: "Chưa xong, sắp qua sông mà chưa tới.", khuyen: "Cẩn thận đến bước cuối; chuẩn bị chu đáo thì sẽ thành." },
];

/** Ý nghĩa vị trí hào (khái quát) */
export const VI_TRI_HAO = [
  "",
  "khởi đầu, việc còn ở bước đầu, thế còn yếu",
  "bên trong đã có chỗ đứng, vị trí trung chính của nội quái",
  "ranh giới trong và ngoài, dễ gặp nguy, cần thận trọng",
  "gần người trên, ở thế phụ tá, cần khéo léo",
  "vị trí chủ đạo, trung chính của ngoại quái",
  "cực điểm, việc đã đến cùng, sắp chuyển hóa",
];

/** Dụng thần Lục hào theo việc hỏi */
export const DUNG_THAN: Record<string, { lucThan: string; y: string }> = {
  "cong-danh": { lucThan: "Quan quỷ", y: "công danh, chức vụ, thi cử (với nữ: chồng)" },
  "tien-bac": { lucThan: "Thê tài", y: "tiền bạc, buôn bán (với nam: vợ)" },
  "giay-to": { lucThan: "Phụ mẫu", y: "văn thư, hợp đồng, nhà cửa, cha mẹ, học hành" },
  "con-cai": { lucThan: "Tử tôn", y: "con cái, sức khỏe được giải, niềm vui, người dưới" },
  "ban-be": { lucThan: "Huynh đệ", y: "anh em, bạn bè, đối thủ cạnh tranh" },
  "ban-than": { lucThan: "Thế", y: "bản thân người hỏi (hào Thế)" },
};

export const NGUON_KINHDICH = "Giải nghĩa 64 quẻ Kinh dịch (đối chiếu Thoán từ); nguyên văn Chu Dịch thuộc phạm vi công cộng";
