/**
 * Tri thức Tử vi — tự viết theo cách hiểu thông dụng, đối chiếu bản chất (ngũ hành, Nam/Bắc đẩu, hóa khí,
 * miếu hãm) với "Tử vi Đẩu số toàn thư" (Hi Di Trần Đoàn, bản dịch và bình chú Vũ Tài Lục), phần Chư tinh vấn đáp.
 * Không trích nguyên văn. Viết theo hướng xu hướng, điểm mạnh và điều cần lưu ý — không phán định mệnh.
 */

export interface ChinhTinh {
  hanh: string;
  dau: "Nam đẩu" | "Bắc đẩu" | "Trung thiên";
  hoaKhi: string;
  ban: string;
  manh: string;
  luuY: string;
  /** Khi sáng (Miếu, Vượng, Đắc) */
  sang: string;
  /** Khi tối (Hãm, Bất) */
  toi: string;
}

export const CHINH_TINH: Record<string, ChinhTinh> = {
  "Tử Vi": {
    hanh: "Thổ", dau: "Trung thiên", hoaKhi: "Tôn (đế tinh)",
    ban: "Sao chủ tể, tượng người đứng đầu: có khí chất, tự trọng, muốn được tôn trọng và có tầm nhìn.",
    manh: "Có uy, biết tổ chức, dễ được người khác tin cậy giao việc lớn.",
    luuY: "Dễ cả nể, sĩ diện hoặc chủ quan; cần người phò tá (Tả Hữu, Xương Khúc, Khôi Việt) mới phát huy hết.",
    sang: "Sáng sủa thì khí độ rộng, làm việc có tầm, hợp vai trò quản lý.",
    toi: "Thiếu sao phò tá hoặc gặp nhiều sát tinh thì dễ thành 'vua cô độc': nhiều ý chí mà ít người theo.",
  },
  "Thiên Cơ": {
    hanh: "Mộc", dau: "Nam đẩu", hoaKhi: "Thiện",
    ban: "Sao mưu trí, linh hoạt: suy nghĩ nhanh, thích tính toán, xoay xở và đổi mới.",
    manh: "Giỏi lập kế hoạch, phân tích, tư vấn; thích hợp việc cần chất xám và sự khéo léo.",
    luuY: "Nghĩ nhiều, dễ lo âu và hay thay đổi; cần kiên trì đi đến cùng một hướng.",
    sang: "Sáng thì mưu lược đúng chỗ, tâm thiện, được việc.",
    toi: "Tối thì dễ toan tính vụn vặt, phân tán, lắm dự định mà ít kết quả.",
  },
  "Thái Dương": {
    hanh: "Hỏa", dau: "Trung thiên", hoaKhi: "Quý",
    ban: "Mặt trời: hào sảng, cởi mở, thích cho đi và được ghi nhận; liên quan đến danh tiếng và nam giới trong đời.",
    manh: "Nhiệt tình, quang minh, có sức lan tỏa, hợp việc công khai, giao tiếp, giáo dục, công vụ.",
    luuY: "Cho nhiều mà mệt; dễ nóng vội hoặc làm việc vì tiếng hơn vì miếng.",
    sang: "Sinh ban ngày hoặc sao đóng nơi sáng (khoảng Dần đến Ngọ) thì danh tiếng hanh thông.",
    toi: "Đóng nơi tối thì vất vả hơn, công sức nhiều mà người khác ít thấy; nên bền bỉ, tránh phô trương.",
  },
  "Vũ Khúc": {
    hanh: "Kim", dau: "Bắc đẩu", hoaKhi: "Tài",
    ban: "Sao tài tinh: quả quyết, thực tế, coi trọng tiền bạc và hiệu quả.",
    manh: "Có khả năng làm ra và quản lý tiền, hợp tài chính, kinh doanh, kỹ thuật, quân sự.",
    luuY: "Cứng rắn, ít mềm mỏng trong tình cảm; dễ cô độc nếu chỉ chăm lo vật chất.",
    sang: "Sáng thì tiền tài vững, làm việc dứt khoát.",
    toi: "Tối thì tiền vào ra thất thường, nên giữ kỷ luật tài chính, tránh liều lĩnh.",
  },
  "Thiên Đồng": {
    hanh: "Thủy", dau: "Nam đẩu", hoaKhi: "Phúc",
    ban: "Sao phúc tinh: ôn hòa, dễ chịu, thích an nhàn và hưởng thụ, có duyên được giúp đỡ.",
    manh: "Hòa nhã, dễ thích nghi, giỏi làm dịu không khí; thường gặp may vào lúc khó.",
    luuY: "Dễ thiếu động lực, ngại va chạm, có xu hướng 'trước khó sau dễ' nên phải chịu khó lúc đầu.",
    sang: "Sáng thì phúc hậu, đời có quý nhân.",
    toi: "Tối thì dễ ỷ lại, cả thèm chóng chán; cần mục tiêu rõ ràng.",
  },
  "Liêm Trinh": {
    hanh: "Hỏa (có sách ghi Mộc)", dau: "Bắc đẩu", hoaKhi: "Tù",
    ban: "Sao phức tạp: vừa liêm chính, kỷ luật, vừa có phần đam mê, mạnh mẽ; liên quan đến pháp chế, quyền lệnh.",
    manh: "Có nguyên tắc, chịu áp lực tốt, hợp ngành pháp luật, kỹ thuật, quản lý, an ninh.",
    luuY: "Tính khí mạnh, dễ cố chấp; gặp sát tinh dễ dính thị phi, kiện tụng — nên giữ chuẩn mực.",
    sang: "Sáng thì thanh liêm, có tài tổ chức và giữ kỷ cương.",
    toi: "Tối thì dễ nóng nảy, đam mê thái quá; cần tự kiềm chế.",
  },
  "Thiên Phủ": {
    hanh: "Thổ", dau: "Nam đẩu", hoaKhi: "Lệnh (kho tài lộc)",
    ban: "Kho tàng: điềm đạm, chắc chắn, biết giữ của và giữ người; thường phò tá Tử Vi.",
    manh: "Ổn định, có khả năng tích lũy và quản trị, được tin cậy giữ việc quan trọng.",
    luuY: "Thận trọng quá dễ bảo thủ, thiếu đột phá; 'kho trống' (gặp Không Kiếp, Tuần Triệt) thì giữ của khó.",
    sang: "Sáng thì sung túc, đời ít sóng gió lớn.",
    toi: "Gặp hung tinh thì tài lộc kém bền, cần quản lý chặt chi tiêu.",
  },
  "Thái Âm": {
    hanh: "Thủy", dau: "Trung thiên", hoaKhi: "Phú",
    ban: "Mặt trăng: dịu dàng, tinh tế, giàu cảm xúc; liên quan đến nhà cửa, tích lũy và nữ giới trong đời.",
    manh: "Nhạy cảm, có óc thẩm mỹ, biết vun vén, hợp nghệ thuật, tài chính, bất động sản.",
    luuY: "Dễ ưu tư, sống nội tâm; cần mạnh dạn bày tỏ.",
    sang: "Sinh ban đêm hoặc sao đóng nơi sáng (khoảng Thân đến Tý) thì tài lộc, điền sản tốt.",
    toi: "Đóng nơi tối thì vất vả hơn về tình cảm, tiền bạc; tích tiểu thành đại là cách hợp.",
  },
  "Tham Lang": {
    hanh: "Thủy (kiêm Mộc)", dau: "Bắc đẩu", hoaKhi: "Đào hoa",
    ban: "Sao ham muốn và giao tế: đa tài, đa dục, thích khám phá, hưởng thụ và quan hệ rộng.",
    manh: "Khéo giao tiếp, có duyên, học được nhiều nghề; hợp kinh doanh, nghệ thuật, quan hệ công chúng.",
    luuY: "Ham nhiều thứ một lúc, dễ sa vào tửu sắc, cờ bạc; cần biết đủ.",
    sang: "Sáng thì tài năng phát lộ, thường 'phát muộn' sau tuổi trung niên.",
    toi: "Tối thì dễ phóng túng, hao tổn vì ham vui; nên giữ thói quen lành mạnh.",
  },
  "Cự Môn": {
    hanh: "Thủy", dau: "Bắc đẩu", hoaKhi: "Ám",
    ban: "Sao miệng lưỡi: tư duy phản biện, ăn nói sắc bén, đa nghi, hay đi sâu vào chi tiết.",
    manh: "Giỏi lập luận, nghiên cứu, giảng dạy, luật, truyền thông — nghề dùng lời nói.",
    luuY: "Dễ thị phi, hiểu lầm, khẩu thiệt; nói thẳng nên cần chọn lúc, chọn lời.",
    sang: "Sáng (nhất là gặp Thái Dương sáng) thì dùng lời nói để lập nghiệp.",
    toi: "Tối thì hay vướng tranh cãi, tình cảm gia đình dễ lạnh; nên lắng nghe nhiều hơn.",
  },
  "Thiên Tướng": {
    hanh: "Thủy", dau: "Nam đẩu", hoaKhi: "Ấn",
    ban: "Sao ấn tín: chính trực, chuộng công bằng, hay giúp người, biết giữ thể diện.",
    manh: "Tận tụy, có trách nhiệm, hợp vai trò phụ tá, hành chính, phục vụ, bảo vệ quyền lợi người khác.",
    luuY: "Dễ ôm việc của người khác, chịu ảnh hưởng mạnh từ sao đi cùng (tốt gặp tốt, xấu gặp xấu).",
    sang: "Sáng thì được tín nhiệm, có danh vị.",
    toi: "Tối hoặc bị kẹp giữa sát tinh thì vất vả vì việc người; cần biết từ chối.",
  },
  "Thiên Lương": {
    hanh: "Thổ (có sách ghi Mộc)", dau: "Nam đẩu", hoaKhi: "Ấm (che chở)",
    ban: "Sao che chở: chính trực, có phong thái người lớn, thích bao bọc và dạy bảo.",
    manh: "Hợp y tế, giáo dục, tư vấn, công tác xã hội; thường gặp hung hóa cát.",
    luuY: "Dễ ra vẻ dạy đời, cô độc hoặc lo chuyện thiên hạ; cần mềm mỏng.",
    sang: "Sáng thì được kính trọng, gặp nạn có người giúp.",
    toi: "Tối thì dễ cô đơn, phiêu bạt; nên xây dựng quan hệ bền.",
  },
  "Thất Sát": {
    hanh: "Kim (kiêm Hỏa)", dau: "Nam đẩu", hoaKhi: "Tướng (quyền uy)",
    ban: "Sao tướng quân: quyết đoán, dám làm, chịu được gian khổ, thích tự lập.",
    manh: "Gan dạ, hành động nhanh, hợp vai trò tiên phong, mở đường, xử lý khủng hoảng.",
    luuY: "Nóng vội, cô độc, đời nhiều thăng trầm; nên tính đường lui và giữ an toàn trong việc mạo hiểm.",
    sang: "Sáng (nhất là ở Dần Thân Tý Ngọ) thì uy quyền, lập nghiệp bằng ý chí.",
    toi: "Thiếu sao chế hóa thì liều lĩnh dễ hỏng việc; cần kỷ luật.",
  },
  "Phá Quân": {
    hanh: "Thủy", dau: "Bắc đẩu", hoaKhi: "Hao",
    ban: "Sao phá cũ lập mới: thích thay đổi, không chịu khuôn phép, dám phá bỏ để làm lại.",
    manh: "Năng lực cải cách, khởi nghiệp, xoay chuyển tình thế; hợp môi trường biến động.",
    luuY: "Hao tán, khó giữ ổn định; dễ xung đột với người thân — nên biết giữ cái cần giữ.",
    sang: "Sáng (Tý Ngọ là miếu) thì phá để thành, làm nên việc lớn.",
    toi: "Tối thì hao tài, thay đổi vô ích; cần kế hoạch trước khi hành động.",
  },
};

export interface PhuTinh {
  nhom: "cat" | "sat" | "hoa" | "khac";
  y: string;
}

export const PHU_TINH: Record<string, PhuTinh> = {
  "Tả Phù": { nhom: "cat", y: "Có người phò trợ, được giúp đỡ, giỏi hợp tác." },
  "Hữu Bật": { nhom: "cat", y: "Có người phò trợ, được giúp đỡ, giỏi hợp tác." },
  "Văn Xương": { nhom: "cat", y: "Học hành, văn chương, thi cử; tư duy mạch lạc." },
  "Văn Khúc": { nhom: "cat", y: "Tài hoa, năng khiếu nghệ thuật, ăn nói có duyên." },
  "Thiên Khôi": { nhom: "cat", y: "Quý nhân (dương), cơ hội từ người trên, thi cử may mắn." },
  "Thiên Việt": { nhom: "cat", y: "Quý nhân (âm), được giúp đỡ âm thầm." },
  "Lộc Tồn": { nhom: "cat", y: "Lộc ổn định, biết giữ của; tính dè dặt." },
  "Thiên Mã": { nhom: "khac", y: "Di chuyển, thay đổi, năng động; gặp Lộc thì 'Lộc Mã giao trì' — đi xa có lợi." },
  "Kình Dương": { nhom: "sat", y: "Cứng rắn, quyết liệt, cạnh tranh; dễ va chạm và rủi ro do nóng vội." },
  "Đà La": { nhom: "sat", y: "Chậm trễ, dây dưa, trở ngại ngầm; cần kiên nhẫn." },
  "Hỏa Tinh": { nhom: "sat", y: "Nóng nảy, bột phát; việc đến nhanh đi nhanh." },
  "Linh Tinh": { nhom: "sat", y: "Bồn chồn, âm ỉ; trở ngại kéo dài." },
  "Địa Không": { nhom: "sat", y: "Hư không, ý tưởng khác thường; dễ hao tổn, mất mát bất ngờ." },
  "Địa Kiếp": { nhom: "sat", y: "Phá tán, biến động; dễ thua thiệt nếu mạo hiểm." },
  "Thiên Không": { nhom: "sat", y: "Không vong, việc dễ hụt; hợp tu dưỡng, triết lý." },
  "Hồng Loan": { nhom: "khac", y: "Duyên tình cảm, hôn nhân, hỷ sự." },
  "Thiên Hỷ": { nhom: "khac", y: "Tin vui, hỷ sự." },
  "Đào Hoa": { nhom: "khac", y: "Sức hút, duyên với người khác giới." },
  "Hàm Trì": { nhom: "khac", y: "Sức hút, duyên với người khác giới (Đào hoa)." },
  "Thiên Riêu": { nhom: "khac", y: "Đa tình, lãng mạn; cần giữ chừng mực." },
  "Thiên Diêu": { nhom: "khac", y: "Đa tình, lãng mạn; cần giữ chừng mực." },
  "Thiên Hình": { nhom: "sat", y: "Kỷ luật, pháp lý, phẫu thuật; dễ dính kiện tụng hoặc thương tích nhẹ." },
  "Thái Tuế": { nhom: "khac", y: "Thẳng thắn, hay phán xét; dễ thị phi nhưng cũng có uy." },
  "Hóa Lộc": { nhom: "hoa", y: "Tài lộc, thuận lợi, cơ hội đến." },
  "Hóa Quyền": { nhom: "hoa", y: "Quyền lực, năng lực kiểm soát, được giao trọng trách." },
  "Hóa Khoa": { nhom: "hoa", y: "Danh tiếng, học vấn, được ghi nhận; gặp nạn hóa giải." },
  "Hóa Kỵ": { nhom: "hoa", y: "Vướng mắc, lo nghĩ, thị phi; chỗ cần đặc biệt cẩn thận." },
};

export const CAT_TINH = new Set(["Tả Phù", "Hữu Bật", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Lộc Tồn"]);
export const SAT_TINH = new Set(["Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh", "Địa Không", "Địa Kiếp"]);

export const CUNG_Y: Record<string, string> = {
  "Mệnh": "bản thân, tính cách, năng lực gốc",
  "Phụ Mẫu": "cha mẹ, người trên, giấy tờ, học vấn ban đầu",
  "Phúc Đức": "phúc phần, tinh thần, dòng họ, cách hưởng thụ",
  "Điền Trạch": "nhà cửa, bất động sản, môi trường sống",
  "Quan Lộc": "sự nghiệp, công việc, cách làm việc",
  "Nô Bộc": "bạn bè, đồng nghiệp, cấp dưới, đối tác",
  "Thiên Di": "ra ngoài, đi xa, quan hệ xã hội, môi trường bên ngoài",
  "Tật Ách": "sức khỏe, tai ách, những điều cần phòng",
  "Tài Bạch": "tiền bạc, cách kiếm và giữ tiền",
  "Tử Tức": "con cái, học trò, sản phẩm sáng tạo",
  "Tử Nữ": "con cái, học trò, sản phẩm sáng tạo",
  "Phu Thê": "vợ chồng, người yêu, đối tác thân",
  "Huynh Đệ": "anh chị em, bạn thân, người cùng chí hướng",
};

export const CUC_HANH: Record<string, string> = { Thủy: "Thủy", Mộc: "Mộc", Kim: "Kim", Thổ: "Thổ", Hỏa: "Hỏa" };

export const NGUON_TUVI = "Tử vi Đẩu số toàn thư — Hi Di Trần Đoàn, Vũ Tài Lục dịch và bình chú (phần Chư tinh vấn đáp)";
