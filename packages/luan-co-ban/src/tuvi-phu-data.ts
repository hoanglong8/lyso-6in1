/**
 * Câu phú Tử vi cổ (Hán Việt, phạm vi công cộng) mà các thầy trên YouTube trích dẫn; điều kiện để
 * app tự nhận ra trên lá số. Câu phú chuẩn hóa chính tả Hán Việt; phần nghĩa viết lại, không chép
 * bản dịch hay lời bình của sách hiện đại. Nguồn: phụ đề ~320 video (11/2026); 100 câu phú Ma Thị; Phú Tử vi thông thơ;
 * phú Lộc Quyền Khoa Kỵ; 50 câu phú cách cục; thơ phú Tử vi (tuvibatquai) — chỉ lấy câu phú cổ, không lấy lời giải của trang/sách.
 */
export interface PhuDk {
  /** "Mệnh" | "Thân" | tên cung chức | "Hạn" (đại hạn hoặc tiểu hạn năm xem) | "Đại hạn" | "bất kỳ" */
  cung: string;
  sao?: string[];
  hoi?: string[];
  giap?: [string, string][];
  chi?: string[];
  sang?: boolean;
  khong?: string[];
  /** cung đối có ít nhất một trong các sao này */
  doi?: string[];
  /** mỗi nhóm: trong cung có ít nhất một sao của nhóm */
  motTrong?: string[][];
  /** mỗi nhóm: tam phương tứ chính có ít nhất một sao của nhóm */
  hoiMot?: string[][];
  /** trong cung không có các sao này */
  khongCung?: string[];
  gioi?: "nam" | "nu";
  /** hành bản mệnh (Kim, Mộc, Thủy, Hỏa, Thổ) */
  menhHanh?: string[];
  /** can năm sinh (Giáp…Quý) */
  canNam?: string[];
  /** cung vô chính diệu */
  vcd?: boolean;
  /** cung nhị hợp có ít nhất một trong các sao này */
  nhiHop?: string[];
  /** Tam Hóa liên châu: Lộc, Quyền, Khoa đóng ba cung liền nhau, có cung này */
  lienChau?: boolean;
}
export interface Phu {
  phu: string;
  nghia: string;
  tone: "tot" | "xau" | "trung";
  dk: PhuDk;
  kenh: string[];
  /** câu phổ quát: gặp ở hơn ~12% lá số (đo trên 1000 lá số) — hiện ở mục riêng */
  pho?: boolean;
}

export const PHU: Phu[] = [
 {
  "phu": "Cơ Nguyệt Đồng Lương tác lại nhân",
  "nghia": "Mệnh hội đủ Cơ, Nguyệt, Đồng, Lương: thiên về làm công chức, hành chính, công việc ăn lương ổn định.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [],
   "hoi": [
    "Thiên Cơ",
    "Thái Âm",
    "Thiên Đồng",
    "Thiên Lương"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ],
  "pho": true
 },
 {
  "phu": "Cơ Nguyệt Đồng Lương tối kỵ Hỏa Linh xung phá",
  "nghia": "Cách Cơ Nguyệt Đồng Lương gặp Hỏa/Linh thì giảm tốt: dễ áp lực, nóng nảy, công việc trắc trở.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [],
   "hoi": [
    "Thiên Cơ",
    "Thái Âm",
    "Thiên Đồng",
    "Thiên Lương",
    "Hỏa Tinh"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Cơ Nguyệt Đồng Lương tối kỵ Hỏa Linh xung phá",
  "nghia": "Cách Cơ Nguyệt Đồng Lương gặp Hỏa/Linh thì giảm tốt: dễ áp lực, nóng nảy, công việc trắc trở.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [],
   "hoi": [
    "Thiên Cơ",
    "Thái Âm",
    "Thiên Đồng",
    "Thiên Lương",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Hạng Vũ anh hùng, hạn chí Thiên Không nhi táng quốc",
  "nghia": "Gặp Thiên Không (nhất là khi vào hạn) dễ có lúc đổ vỡ lớn dù tài giỏi; nên thận trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Thiên Không"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Thạch Sùng hào phú, hạn hành Địa Kiếp dĩ vong gia",
  "nghia": "Gặp Địa Kiếp (nhất là khi vào hạn) dễ hao tán tài sản dù đang giàu có; tránh đầu cơ mạo hiểm.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ],
  "pho": true
 },
 {
  "phu": "Cự Nhật Dần Thân, quan phong tam đại",
  "nghia": "Cự Môn và Thái Dương đồng cung ở Dần/Thân: xu hướng danh giá, gia đạo thịnh nhiều đời.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Cự Môn",
    "Thái Dương"
   ],
   "chi": [
    "Dần",
    "Thân"
   ]
  },
  "kenh": [
   "389 TỬ VI",
   "Lê Quang Lăng"
  ]
 },
 {
  "phu": "Liêm Tham Tỵ Hợi, hình trượng nan đào",
  "nghia": "Liêm Trinh, Tham Lang ở Tỵ/Hợi: dễ vướng kiện tụng, pháp luật; cần giữ mình.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh",
    "Tham Lang"
   ],
   "chi": [
    "Tỵ",
    "Hợi"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Kình Dương cư Ngọ, mã đầu đới kiếm",
  "nghia": "Kình Dương ở Ngọ: cách võ, hợp quân sự, biên cương; đi kèm nguy cơ thương tích.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương"
   ],
   "chi": [
    "Ngọ"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Kình Dương phùng Lực Sĩ, Lý Quảng nan phong",
  "nghia": "Kình Dương gặp Lực Sĩ: có sức, xông pha nhiều nhưng khó được danh phận tương xứng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương",
    "Lực Sĩ"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Khốc Hư Tý Ngọ, tiền bần hậu phú",
  "nghia": "Thiên Khốc, Thiên Hư ở Tý/Ngọ: thuở đầu vất vả, về sau khá giả, thành đạt.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Khốc",
    "Thiên Hư"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ]
  },
  "kenh": [
   "Lê Quang Lăng"
  ]
 },
 {
  "phu": "Tham Linh tịnh thủ, tướng tướng chi danh",
  "nghia": "Tham Lang gặp Linh Tinh đồng cung: có uy, dễ nổi danh, hợp võ nghiệp hoặc vai trò chỉ huy.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "389 TỬ VI",
   "Phong Thủy Tâm Linh"
  ]
 },
 {
  "phu": "Tham Vũ tứ mộ ngộ Hỏa Linh, hào phú gia tư hầu bá chi quý",
  "nghia": "Tham Vũ ở Thìn Tuất Sửu Mùi gặp Hỏa/Linh: thiên về giàu lên nhờ kinh doanh, phát nhanh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang",
    "Vũ Khúc"
   ],
   "chi": [
    "Thìn",
    "Tuất",
    "Sửu",
    "Mùi"
   ],
   "hoi": [
    "Hỏa Tinh"
   ]
  },
  "kenh": [
   "Phong Thủy Tâm Linh"
  ]
 },
 {
  "phu": "Tham Vũ tứ mộ ngộ Hỏa Linh, hào phú gia tư hầu bá chi quý",
  "nghia": "Tham Vũ ở Thìn Tuất Sửu Mùi gặp Hỏa/Linh: thiên về giàu lên nhờ kinh doanh, phát nhanh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang",
    "Vũ Khúc"
   ],
   "chi": [
    "Thìn",
    "Tuất",
    "Sửu",
    "Mùi"
   ],
   "hoi": [
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Phong Thủy Tâm Linh"
  ]
 },
 {
  "phu": "Linh Xương Đà Vũ, hạn chí đầu hà",
  "nghia": "Linh Tinh, Văn Xương, Đà La, Vũ Khúc hội nhau: hạn dễ bế tắc, nên đề phòng sông nước.",
  "tone": "xau",
  "dk": {
   "cung": "Hạn",
   "sao": [],
   "hoi": [
    "Linh Tinh",
    "Văn Xương",
    "Đà La",
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Nhật Nguyệt đồng Mùi, Mệnh an Sửu, hầu bá chi tài",
  "nghia": "Mệnh ở Sửu, Nhật Nguyệt ở Mùi chiếu về: tốt hơn tọa thủ, xu hướng có tài, địa vị.",
  "tone": "tot",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Thái Dương",
    "Thái Âm"
   ],
   "chi": [
    "Mùi"
   ]
  },
  "kenh": [
   "Phong Thủy Tâm Linh"
  ]
 },
 {
  "phu": "Tử Vi Mão Dậu ngộ Kiếp Không, đa vi thoát tục chi tăng",
  "nghia": "Tử Tham ở Mão/Dậu gặp Không Kiếp: dễ chán thế sự, thiên về tu hành, tâm linh.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Tham Lang"
   ],
   "chi": [
    "Mão",
    "Dậu"
   ],
   "hoi": [
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Lê Quang Lăng"
  ]
 },
 {
  "phu": "Sinh phùng bại địa, phát dã hư hoa",
  "nghia": "Mệnh gặp Mộc Dục (bại địa): có phát nhưng khó bền, dễ hào nhoáng bề ngoài.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Mộc Dục"
   ]
  },
  "kenh": [
   "Đông Phương Đạo Quán"
  ],
  "pho": true
 },
 {
  "phu": "Cự Môn Tý Ngọ, thạch trung ẩn ngọc",
  "nghia": "Cự Môn ở Tý/Ngọ: tài năng ẩn, cần thời cơ (Tuần Triệt, Khoa Quyền Lộc) mới phát.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Cự Môn"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ]
  },
  "kenh": [
   "389 TỬ VI",
   "Học Quán",
   "Lê Quang Lăng",
   "Phong Thủy Tâm Linh"
  ]
 },
 {
  "phu": "Song Lộc triều viên",
  "nghia": "Lộc Tồn và Hóa Lộc cùng hội về Mệnh: xu hướng dễ kiếm tiền, tài lộc khá.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [],
   "hoi": [
    "Lộc Tồn",
    "Hóa Lộc"
   ],
   "khong": [
    "Địa Không",
    "Địa Kiếp",
    "Kình Dương",
    "Đà La"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Lộc Mã giao trì",
  "nghia": "Lộc Tồn gặp Thiên Mã: tiền tài đến qua di chuyển, giao thương, càng năng động càng lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [],
   "hoi": [
    "Lộc Tồn",
    "Thiên Mã"
   ]
  },
  "kenh": [
   "Học Quán",
   "Đào Thanh Tín"
  ],
  "pho": true
 },
 {
  "phu": "Phủ Tướng triều viên",
  "nghia": "Thiên Phủ, Thiên Tướng chiếu về Mệnh: nền tảng vững, được nâng đỡ, đời sống ổn định.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [],
   "hoi": [
    "Thiên Phủ",
    "Thiên Tướng"
   ],
   "khong": [
    "Địa Không",
    "Địa Kiếp",
    "Kình Dương",
    "Đà La"
   ]
  },
  "kenh": [
   "389 TỬ VI",
   "Lê Quang Lăng"
  ],
  "pho": true
 },
 {
  "phu": "Thái Dương cư Ngọ, nhật lệ trung thiên",
  "nghia": "Thái Dương ở Ngọ như mặt trời giữa trưa: sáng sủa, dễ có danh, uy tín.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương"
   ],
   "chi": [
    "Ngọ"
   ]
  },
  "kenh": [
   "389 TỬ VI",
   "Lê Quang Lăng"
  ]
 },
 {
  "phu": "Hình Kỵ giáp Ấn",
  "nghia": "Thiên Tướng bị Kình Dương và Hóa Kỵ kẹp hai bên: dễ bị chèn ép, vướng thị phi, kiện cáo.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Tướng"
   ],
   "giap": [
    [
     "Kình Dương",
     "Hóa Kỵ"
    ]
   ]
  },
  "kenh": [
   "Học Quán"
  ]
 },
 {
  "phu": "Tài Ấm giáp Ấn",
  "nghia": "Thiên Tướng được Hóa Lộc và Thiên Lương kẹp hai bên: được che chở, nâng đỡ, tài lộc thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Tướng"
   ],
   "giap": [
    [
     "Hóa Lộc",
     "Thiên Lương"
    ]
   ]
  },
  "kenh": [
   "Học Quán"
  ]
 },
 {
  "phu": "Tử Vi cư Ngọ, cực hướng ly minh",
  "nghia": "Tử Vi ở Ngọ sáng rực, không bị sát tinh phá: có uy, dễ được trọng dụng, giữ vị trí cao.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "chi": [
    "Ngọ"
   ],
   "khong": [
    "Kình Dương",
    "Đà La",
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Nhật xuất Phù Tang",
  "nghia": "Thái Dương ở Mão như mặt trời mới mọc: danh phận sáng dần, càng làm càng hiển đạt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương"
   ],
   "chi": [
    "Mão"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Nguyệt lãng Thiên Môn",
  "nghia": "Thái Âm ở Hợi sáng trong: tài lộc, nhà cửa thanh nhã và bền.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Âm"
   ],
   "chi": [
    "Hợi"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Nhật trầm thủy để",
  "nghia": "Thái Dương ở Tý như mặt trời chìm đáy nước: tài năng bị che, công danh chậm; cần bền bỉ và cát tinh trợ giúp.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương"
   ],
   "chi": [
    "Tý"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Tử Vi Mão Dậu, Kiếp Không tứ sát, đa vi thoát tục chi tăng",
  "nghia": "Tử Vi ở Mão/Dậu gặp Không Kiếp: thiên về đời sống tâm linh, dễ thích sống thoát tục.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Địa Không"
   ],
   "chi": [
    "Mão",
    "Dậu"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Tử Vi Mão Dậu, Kiếp Không tứ sát, đa vi thoát tục chi tăng",
  "nghia": "Tử Vi ở Mão/Dậu gặp Không Kiếp: thiên về đời sống tâm linh, dễ thích sống thoát tục.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Địa Kiếp"
   ],
   "chi": [
    "Mão",
    "Dậu"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Phủ phùng Không xứ tài suy, chung thân nan bảo tư cơ lưu truyền",
  "nghia": "Thiên Phủ (kho) gặp Không: tiền tài dễ suy, cơ nghiệp tổ để lại khó giữ được lâu; nên tự tích lũy chắc tay.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ",
    "Địa Không"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Phủ phùng Không xứ tài suy, chung thân nan bảo tư cơ lưu truyền",
  "nghia": "Thiên Phủ (kho) gặp Không: tiền tài dễ suy, cơ nghiệp tổ để lại khó giữ được lâu; nên tự tích lũy chắc tay.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ",
    "Tuần"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Phủ phùng Không xứ tài suy, chung thân nan bảo tư cơ lưu truyền",
  "nghia": "Thiên Phủ (kho) gặp Không: tiền tài dễ suy, cơ nghiệp tổ để lại khó giữ được lâu; nên tự tích lũy chắc tay.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ",
    "Triệt"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Phủ phùng Không xứ tài suy, chung thân nan bảo tư cơ lưu truyền",
  "nghia": "Thiên Phủ (kho) gặp Không: tiền tài dễ suy, cơ nghiệp tổ để lại khó giữ được lâu; nên tự tích lũy chắc tay.",
  "tone": "xau",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Thiên Phủ",
    "Địa Không"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Phủ phùng Không xứ tài suy, chung thân nan bảo tư cơ lưu truyền",
  "nghia": "Thiên Phủ (kho) gặp Không: tiền tài dễ suy, cơ nghiệp tổ để lại khó giữ được lâu; nên tự tích lũy chắc tay.",
  "tone": "xau",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Thiên Phủ",
    "Tuần"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Phủ phùng Không xứ tài suy, chung thân nan bảo tư cơ lưu truyền",
  "nghia": "Thiên Phủ (kho) gặp Không: tiền tài dễ suy, cơ nghiệp tổ để lại khó giữ được lâu; nên tự tích lũy chắc tay.",
  "tone": "xau",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Thiên Phủ",
    "Triệt"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Hóa Khoa đệ nhất giải thần",
  "nghia": "Hóa Khoa ở Mệnh là sao giải hàng đầu: gỡ bớt rủi ro, thuận học hành, có tiếng tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Khoa"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ],
  "pho": true
 },
 {
  "phu": "Dương Lương Xương Lộc",
  "nghia": "Tam phương Mệnh hội Thái Dương, Thiên Lương, Văn Xương, Lộc Tồn: thuận học vấn, thi cử, có danh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Thái Dương",
    "Thiên Lương",
    "Văn Xương",
    "Lộc Tồn"
   ]
  },
  "kenh": [
   "Tử Vi Tâm Thành"
  ]
 },
 {
  "phu": "Lộc phùng xung phá, cát xứ tàng hung",
  "nghia": "Có Lộc ở Mệnh mà cung đối bị Kỵ hay Không Kiếp xung: chỗ tưởng tốt lại ẩn điều xấu, đừng chủ quan.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Lộc Tồn"
   ],
   "doi": [
    "Hóa Kỵ",
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Khâm Thiên Tứ Hóa Minh Phương"
  ]
 },
 {
  "phu": "Lộc phùng xung phá, cát xứ tàng hung",
  "nghia": "Có Lộc ở Mệnh mà cung đối bị Kỵ hay Không Kiếp xung: chỗ tưởng tốt lại ẩn điều xấu, đừng chủ quan.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Lộc"
   ],
   "doi": [
    "Hóa Kỵ",
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Khâm Thiên Tứ Hóa Minh Phương"
  ]
 },
 {
  "phu": "Tham ngộ Dương Đà cư Hợi Tý, danh vi phiếm thủy đào hoa",
  "nghia": "Tham Lang ở Hợi/Tý gặp Kình hoặc Đà (đào hoa trôi nổi): đa tình, ham vui; nên giữ chừng mực trong chuyện tình cảm.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang",
    "Kình Dương"
   ],
   "chi": [
    "Hợi",
    "Tý"
   ]
  },
  "kenh": [
   "Tử Vi Tâm Thành"
  ]
 },
 {
  "phu": "Tham ngộ Dương Đà cư Hợi Tý, danh vi phiếm thủy đào hoa",
  "nghia": "Tham Lang ở Hợi/Tý gặp Kình hoặc Đà (đào hoa trôi nổi): đa tình, ham vui; nên giữ chừng mực trong chuyện tình cảm.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang",
    "Đà La"
   ],
   "chi": [
    "Hợi",
    "Tý"
   ]
  },
  "kenh": [
   "Tử Vi Tâm Thành"
  ]
 },
 {
  "phu": "Hỏa phùng Không tắc phát, Kim phùng Không tắc minh",
  "nghia": "Bản mệnh Hỏa hay Kim gặp Không ở Mệnh lại thành hay: Hỏa gặp Không thì bùng phát, Kim gặp Không thì kêu vang, sáng danh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "menhHanh": [
    "Hỏa",
    "Kim"
   ],
   "motTrong": [
    [
     "Địa Không",
     "Thiên Không",
     "Tuần",
     "Triệt"
    ]
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Tử Phủ Vũ Tướng tối kỵ Không Kiếp xâm giao",
  "nghia": "Mệnh có Tử Vi, Thiên Phủ, Vũ Khúc hay Thiên Tướng rất sợ Không Kiếp lấn vào: cách tốt bị giảm, đời có lúc lên xuống thất thường.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Tử Vi",
     "Thiên Phủ",
     "Vũ Khúc",
     "Thiên Tướng"
    ],
    [
     "Địa Không",
     "Địa Kiếp"
    ]
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Thiên Quan Thiên Phúc lâm Tài, tự nhiên phú quý",
  "nghia": "Tài Bạch có Thiên Quan và Thiên Phúc: tiền tài đến tự nhiên, hay được quý nhân giúp về tiền.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Thiên Quan",
    "Thiên Phúc"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Đế Vượng ngộ Thai soi cùng Tướng, có dị bào trong đám Đệ Huynh",
  "nghia": "Huynh Đệ có Đế Vượng, Thai chiếu và gặp Tướng Quân: trong anh em có thể có người khác cha hoặc khác mẹ (nên tham khảo, không vội kết luận).",
  "tone": "trung",
  "dk": {
   "cung": "Huynh Đệ",
   "sao": [
    "Đế Vượng"
   ],
   "doi": [
    "Thai"
   ],
   "hoi": [
    "Tướng Quân"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Hóa Kỵ thủ Điền Tài, phản vi giai luận",
  "nghia": "Hóa Kỵ ở Điền Trạch hay Tài Bạch lại luận là tốt: giữ của kỹ, tích lũy chắc.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ],
  "pho": true
 },
 {
  "phu": "Hóa Kỵ thủ Điền Tài, phản vi giai luận",
  "nghia": "Hóa Kỵ ở Điền Trạch hay Tài Bạch lại luận là tốt: giữ của kỹ, tích lũy chắc.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ],
  "pho": true
 },
 {
  "phu": "Âm Dương Xương Khúc nghi đắc lực, tối hỷ phùng Đào Hồng Hỷ",
  "nghia": "Thái Dương/Thái Âm ở Mệnh có Xương/Khúc giúp sức là đắc lực; hội thêm Đào Hoa, Hồng Loan, Thiên Hỷ thì càng đẹp, có duyên và danh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Thái Dương",
     "Thái Âm"
    ],
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ],
   "hoiMot": [
    [
     "Đào Hoa",
     "Hồng Loan",
     "Thiên Hỷ"
    ]
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Tham Hỏa là cách phú ông, Tham Linh tịnh thủ tướng lừng vang danh",
  "nghia": "Tham Lang gặp Hỏa Tinh ở Mệnh: cách phát giàu; gặp Linh Tinh thì nổi danh (vế Linh xem thêm câu “Tham Linh tịnh thủ”).",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang",
    "Hỏa Tinh"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Hình Riêu số gái long đong, gái chẳng muộn chồng ắt cũng phản phu",
  "nghia": "Nữ có Thiên Hình và Thiên Riêu ở Mệnh: đường tình duyên nhiều trắc trở, hay muộn; nên chú ý vun đắp hôn nhân.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Hình",
    "Thiên Riêu"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Trai bất nhân Phá Quân Thìn Tuất, gái bạc tình Tham Sát nhàn cung",
  "nghia": "Nam có Phá Quân ở Mệnh tại Thìn/Tuất: tính khí cứng, dễ làm mất lòng người; nên rèn sự mềm mỏng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nam",
   "sao": [
    "Phá Quân"
   ],
   "chi": [
    "Thìn",
    "Tuất"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Trai bất nhân Phá Quân Thìn Tuất, gái bạc tình Tham Sát nhàn cung",
  "nghia": "Nữ có Tham Lang hay Thất Sát hãm ở Mệnh: tình cảm dễ đổi thay; nên chú ý giữ gìn hôn nhân.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Tham Lang"
   ],
   "sang": false
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Trai bất nhân Phá Quân Thìn Tuất, gái bạc tình Tham Sát nhàn cung",
  "nghia": "Nữ có Tham Lang hay Thất Sát hãm ở Mệnh: tình cảm dễ đổi thay; nên chú ý giữ gìn hôn nhân.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thất Sát"
   ],
   "sang": false
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Khôi Việt chiếu Mệnh đồng lâm, những người giàu có muôn phần phúc sao",
  "nghia": "Thiên Khôi và Thiên Việt cùng chiếu về Mệnh: nhiều phúc, hay gặp quý nhân, dễ giàu có.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Thiên Khôi",
    "Thiên Việt"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ],
  "pho": true
 },
 {
  "phu": "Ân Khôi Quý Việt Cái Hồng, nam cận cửu trùng, nữ tác cung phi",
  "nghia": "Tam phương Mệnh hội Ân Quang, Thiên Khôi, Thiên Quý, Thiên Việt, Hoa Cái, Hồng Loan: quý hiển, nam gần người quyền thế, nữ được nâng đỡ, sang trọng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Ân Quang",
    "Thiên Khôi",
    "Thiên Quý",
    "Thiên Việt",
    "Hoa Cái",
    "Hồng Loan"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ]
 },
 {
  "phu": "Ngọ thượng Khoa Quyền biên cương nhậm trọng",
  "nghia": "Mệnh ở Ngọ có Khoa và Quyền: hợp vai trò gánh trách nhiệm lớn, quản lý vùng việc xa trung tâm hoặc nhiều thử thách.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Ngọ"
   ],
   "sao": [
    "Hóa Khoa",
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Ngọ thượng Khoa Quyền biên cương nhậm trọng",
  "nghia": "Quan Lộc ở Ngọ có Khoa và Quyền: đường công việc hợp vị trí trọng trách, có quyền hạn và uy tín.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "chi": [
    "Ngọ"
   ],
   "sao": [
    "Hóa Khoa",
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Khoa Quyền củng bất như lâm viên",
  "nghia": "Khoa và Quyền cùng ngồi tại Mệnh được xem mạnh hơn chỉ chiếu về: danh tiếng và thực quyền dễ đi đôi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Khoa",
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Khoa Quyền Lộc Mã tu phòng Không Kiếp ám xung",
  "nghia": "Bộ Khoa Quyền Lộc Mã về Mệnh vốn thuận lợi, nhưng cung đối có Không Kiếp thì phần tốt bị hao bớt; nên giữ thế phòng thủ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Hóa Khoa",
    "Hóa Quyền",
    "Hóa Lộc",
    "Thiên Mã"
   ],
   "doi": [
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Hóa Khoa đồng văn diệu đề bảng chi vinh",
  "nghia": "Khoa gặp các sao quý nhân và văn tinh: thuận đường học hành, thi cử, dễ có thành tích học thuật.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Khoa"
   ],
   "hoiMot": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ],
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Hóa Khoa tối vi kỳ; vật hướng Thiên Thương nhi ám hối",
  "nghia": "Khoa vốn tốt nhưng rơi vào cung Nô Bộc thì phần danh học bị lu mờ; nên chú ý việc học và quan hệ bạn bè.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Hóa Khoa"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ],
  "pho": true
 },
 {
  "phu": "Khoa Quyền nhân Khôi Việt dĩ thành công",
  "nghia": "Khoa Quyền nhờ có Khôi Việt hội về mà thêm lực: dễ gặp người nâng đỡ, việc thành đạt hơn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Hóa Khoa",
     "Hóa Quyền"
    ]
   ],
   "hoi": [
    "Thiên Khôi",
    "Thiên Việt"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Khoa Quyền Lộc hợp phú quí",
  "nghia": "Ba Hóa Khoa Quyền Lộc cùng hội về Mệnh mà vắng sát tinh: nghiêng về danh, quyền và của cải thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Hóa Khoa",
    "Hóa Quyền",
    "Hóa Lộc"
   ],
   "khong": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh",
    "Linh Tinh",
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Khoa Mệnh, Quyền triều đăng dung giáp đệ",
  "nghia": "Khoa ở Mệnh, Quyền chiếu từ cung đối: thế học vấn có người trợ lực, thuận thi cử và thăng tiến.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Khoa"
   ],
   "doi": [
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Khoa danh hãm ư hung thần miêu nhi bất tú",
  "nghia": "Khoa ở Mệnh nhưng đồng cung Kình Đà Không Kiếp: có năng lực mà đường đi gặp trở ngại, khó trọn thành quả.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Khoa"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La",
     "Địa Không",
     "Địa Kiếp"
    ]
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Quyền Khốc đồng cung minh danh vu thế",
  "nghia": "Quyền đi cùng Thiên Khốc tại Tý hoặc Ngọ: tiếng nói có sức nặng, dễ được chú ý trong lĩnh vực của mình.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Tý",
    "Ngọ"
   ],
   "sao": [
    "Hóa Quyền",
    "Thiên Khốc"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Quyền Lộc đồng cung định tác cơ thương chi nghiệp",
  "nghia": "Quyền và Lộc cùng cung Mệnh: thiên về kinh doanh, nắm tiền và quyền chủ động trong làm ăn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Quyền",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Quyền Lộc thủ Tài Phúc chi vị sử thế vinh hoa",
  "nghia": "Quyền Lộc ở cung Tài Bạch: tiền bạc có thế chủ động, khả năng kiếm tiền khá tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Hóa Quyền",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Quyền Lộc thủ Tài Phúc chi vị sử thế vinh hoa",
  "nghia": "Quyền Lộc ở cung Phúc Đức: nền tảng tinh thần và phúc phần dày, đời sống nhìn chung được hưởng.",
  "tone": "tot",
  "dk": {
   "cung": "Phúc Đức",
   "sao": [
    "Hóa Quyền",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Quyền Lộc cát tinh Nô Bộc vị, túng nhiên quan quí dã bôn ba",
  "nghia": "Quyền Lộc rơi vào cung Nô Bộc: có thể giữ chức vị nhưng phải lo toan, chạy vạy nhiều vì người dưới và bạn bè.",
  "tone": "trung",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Hóa Quyền",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Xuất thế vinh hoa, Quyền Lộc thủ Tài Quan chi vị",
  "nghia": "Quyền Lộc ở Tài Bạch: thế làm ăn, kiếm tiền có quyền chủ động và cơ hội phát triển.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Hóa Quyền",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Xuất thế vinh hoa, Quyền Lộc thủ Tài Quan chi vị",
  "nghia": "Quyền Lộc ở Quan Lộc: sự nghiệp có quyền hạn và nguồn lợi đi kèm, dễ nổi trội nơi công việc.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Hóa Quyền",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Mệnh phùng Hóa Lộc vô hung tinh, tài lộc phong dinh",
  "nghia": "Hóa Lộc tại Mệnh và không bị sát tinh vây quanh: nghiêng về cuộc sống đủ đầy, tiền của thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Lộc"
   ],
   "khong": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh",
    "Linh Tinh",
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Lộc Quyền Mệnh phùng, kiêm hợp cát oai quyền yếm chúng tướng vương triều",
  "nghia": "Lộc Quyền cùng ngồi Mệnh lại có thêm quý nhân, phụ tá hội về: thế mạnh về quyền lực và uy tín trong tổ chức.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Lộc",
    "Hóa Quyền"
   ],
   "hoiMot": [
    [
     "Tả Phù",
     "Hữu Bật",
     "Thiên Khôi",
     "Thiên Việt",
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Hóa Lộc hoàn vi hảo, hưu hướng mộ trung tàng",
  "nghia": "Hóa Lộc ở cung Thìn Tuất Sửu Mùi: của cải có nhưng như cất kho, khó sinh lời nhanh; cần chủ động khai thác.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Thìn",
    "Tuất",
    "Sửu",
    "Mùi"
   ],
   "sao": [
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Hóa Lộc cư Dần Mão cố thủ tham tài",
  "nghia": "Hóa Lộc ở Mệnh tại Dần hoặc Mão: tính coi trọng tiền bạc, thiên về giữ gìn và tích lũy cẩn thận.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Dần",
    "Mão"
   ],
   "sao": [
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Hóa Kị văn nhân bất nại",
  "nghia": "Hóa Kỵ đi cùng văn tinh: học giỏi, tâm tư nhiều nhưng đường công danh hay vướng mắc, cần kiên nhẫn.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Kỵ"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Mệnh cung Hóa Kị gia Thiên Không chung nhật hư tư hiền phụ",
  "nghia": "Hóa Kỵ cùng Thiên Không ở Mệnh: tâm trí dễ lo nghĩ, đa nghi; nên chú ý giữ niềm tin trong quan hệ gần gũi.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Kỵ",
    "Thiên Không"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Hóa Kị ngộ Phục Binh ư Thê Thiếp hốt oán hốt thân",
  "nghia": "Hóa Kỵ gặp Phục Binh ở cung Phu Thê: quan hệ đôi lúc nóng lạnh thất thường, nên chú ý trao đổi thẳng thắn.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Hóa Kỵ",
    "Phục Binh"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Kị ngộ Khoa tinh ư Hợi Tí ngôn hành danh thuận",
  "nghia": "Hóa Kỵ gặp Khoa ở Mệnh tại Hợi hoặc Tý: tính thận trọng trong ăn nói, giữ được tiếng tốt nhờ cẩn thận.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Hợi",
    "Tý"
   ],
   "sao": [
    "Hóa Kỵ",
    "Hóa Khoa"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Hóa Kị Tí cung, Khoa Lương thủ chiếu quân dân sủng ái",
  "nghia": "Hóa Kỵ ở Mệnh tại Tý, có Khoa và Thiên Lương hội chiếu: thiên về người đứng đắn, được tin cậy nơi cộng đồng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Tý"
   ],
   "sao": [
    "Hóa Kỵ"
   ],
   "hoi": [
    "Hóa Khoa",
    "Thiên Lương"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Tam Kỳ giao hội mạc ngộ Kị Kình giáng lộ thanh vân",
  "nghia": "Ba Hóa tốt hội về nhưng gặp thêm Kỵ và Kình Dương: đường đời lên xuống thất thường, nên giữ ổn định.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Hóa Lộc",
    "Hóa Quyền",
    "Hóa Khoa",
    "Hóa Kỵ",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Tam Kỳ giao hội mạc ngộ Kị Kình giáng lộ thanh vân",
  "nghia": "Ba Hóa tốt hội về nhưng gặp thêm Kỵ và Kình Dương: đường đời lên xuống thất thường, nên giữ ổn định.",
  "tone": "trung",
  "dk": {
   "cung": "Thân",
   "hoi": [
    "Hóa Lộc",
    "Hóa Quyền",
    "Hóa Khoa",
    "Hóa Kỵ",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Song Lộc cư nhi ngộ Cơ Lương phú gia dịch quốc",
  "nghia": "Cơ Lương ở Mệnh gặp Lộc Tồn và Hóa Lộc cùng hội: thế tài lộc mạnh, có điều kiện tích lũy lớn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Cơ",
    "Thiên Lương"
   ],
   "hoi": [
    "Lộc Tồn",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Mệnh vô chính diệu hoan ngộ Tam Không hưu song Lộc phú quí khả kỳ",
  "nghia": "Mệnh không chính tinh, gặp các sao Không và có đủ hai Lộc: kiểu số có thăng trầm nhưng sau dễ khá giả.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "vcd": true,
   "hoi": [
    "Lộc Tồn",
    "Hóa Lộc"
   ],
   "hoiMot": [
    [
     "Địa Không",
     "Thiên Không",
     "Tuần"
    ]
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Hóa Lộc Tí Ngọ vị thiên di, Phu Tử văn chương cái thế",
  "nghia": "Thiên Di ở Tý hoặc Ngọ có đủ hai Lộc: nghiêng về danh tiếng bên ngoài, thế mạnh nơi học vấn, chữ nghĩa.",
  "tone": "tot",
  "dk": {
   "cung": "Thiên Di",
   "chi": [
    "Tý",
    "Ngọ"
   ],
   "sao": [
    "Lộc Tồn",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Lộc triền ư nhược địa, Mệnh bất chủ tài",
  "nghia": "Hóa Lộc ở Mệnh nhưng chính tinh hãm: bề ngoài có vẻ đủ mà thực lực tài chính mỏng; nên thận trọng thu chi.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Lộc"
   ],
   "vcd": false,
   "sang": false
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Song Lộc lưỡng ngộ, Thái công vũ lược siêu quần",
  "nghia": "Mệnh có đủ Lộc Tồn và Hóa Lộc: nguồn lực dồi dào, dễ phát huy năng lực ở nhiều lĩnh vực.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Lộc Tồn",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Kị Đà Thái Tuế Thân cung, số muộn màng gái trai ôm ẵm",
  "nghia": "Cung Thân có Kỵ, Đà La và Thái Tuế: nên chú ý chuyện con cái, có thể đến muộn hoặc nhiều trắc trở.",
  "tone": "xau",
  "dk": {
   "cung": "Thân",
   "sao": [
    "Hóa Kỵ",
    "Đà La",
    "Thái Tuế"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Đà Kị Tật Ách trùng gia, Âm hư chứng ấy tất là hiếm con",
  "nghia": "Cung Tật Ách có Đà La và Hóa Kỵ: nên chú ý sức khỏe vùng sinh sản, nên khám định kỳ và hỏi ý kiến thầy thuốc.",
  "tone": "xau",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Đà La",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Cự Kị Mộ cung nhi giao Đà Hổ xa mã hạn hành",
  "nghia": "Đại hạn có Cự Môn, Hóa Kỵ, Đà La, Bạch Hổ tại cung Thìn Tuất Sửu Mùi: nên chú ý an toàn đi lại.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "chi": [
    "Thìn",
    "Tuất",
    "Sửu",
    "Mùi"
   ],
   "sao": [
    "Cự Môn",
    "Hóa Kỵ",
    "Bạch Hổ",
    "Đà La"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Quyền Lộc trùng phùng, sát tấu hư dự chi long",
  "nghia": "Quyền Lộc ở Mệnh nhưng bị sát tinh đi kèm: danh tiếng có thể lớn hơn thực chất; cần giữ nền tảng vững.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Quyền",
    "Hóa Lộc"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh",
     "Địa Không",
     "Địa Kiếp"
    ]
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Hóa Quyền ngộ Dương Đà Không Kiếp, thính sàm di lụy, quan tai biếm chích",
  "nghia": "Quyền gặp Kình Đà Không Kiếp: dễ bị lời gièm pha ảnh hưởng, nên cẩn trọng nghe người và giữ minh bạch trong công việc.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Quyền"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La",
     "Địa Không",
     "Địa Kiếp"
    ]
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Hóa Khoa hiềm phùng Triệt Không, Tuần Không, Thiên Không",
  "nghia": "Khoa không ưa gặp Tuần, Triệt, Thiên Không: danh tiếng, học vấn dễ bị gián đoạn hoặc chậm phát huy.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Khoa"
   ],
   "motTrong": [
    [
     "Triệt",
     "Tuần",
     "Thiên Không"
    ]
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Khoa Quyền đối củng dược tam cấp ư vũ môn",
  "nghia": "Khoa và Quyền một ở Mệnh, một chiếu từ cung đối: thế tiến thân rõ, dễ đạt thành tựu nhờ học vấn và quyền hạn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Hóa Khoa",
     "Hóa Quyền"
    ]
   ],
   "doi": [
    "Hóa Khoa",
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Hóa Kị tại Mệnh Thân cung nhất sinh bất thuận",
  "nghia": "Hóa Kỵ ở Mệnh khiến đường đời hay vướng mắc, nhiều lo nghĩ; cần kiên trì và tránh cố chấp.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ],
  "pho": true
 },
 {
  "phu": "Hóa Kị tại Mệnh Thân cung nhất sinh bất thuận",
  "nghia": "Hóa Kỵ ở Thân: về sau dễ gặp vướng mắc, nhiều điều chưa như ý; cần bình tĩnh điều chỉnh kỳ vọng.",
  "tone": "xau",
  "dk": {
   "cung": "Thân",
   "sao": [
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ],
  "pho": true
 },
 {
  "phu": "Chư tinh tại miếu, vượng địa Hóa Kị bất kị",
  "nghia": "Chính tinh sáng gặp Hóa Kỵ ở Mệnh: tác động xấu giảm nhiều, vướng mắc nhẹ và vượt được.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Kỵ"
   ],
   "sang": true
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Thủy mệnh nhân phùng Hóa Kị bất kị",
  "nghia": "Người bản mệnh Thủy có Hóa Kỵ ở Mệnh: ảnh hưởng của Kỵ được xem là nhẹ hơn thông thường.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Kỵ"
   ],
   "menhHanh": [
    "Thủy"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Thiên Đồng tại Tuất, Hóa Kị Đinh nhân hóa cát",
  "nghia": "Thiên Đồng ở Mệnh tại Tuất, tuổi Đinh có Hóa Kỵ hội về: Kỵ chuyển nhẹ, thành thử thách giúp trưởng thành.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Tuất"
   ],
   "sao": [
    "Thiên Đồng"
   ],
   "hoi": [
    "Hóa Kỵ"
   ],
   "canNam": [
    "Đinh"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Cự Môn tại Thìn Hóa Kị, Tân nhân phản vi giai",
  "nghia": "Cự Môn ở Mệnh tại Thìn, tuổi Tân có Hóa Kỵ hội về: những vướng mắc lại thành động lực, kết quả khả quan.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Thìn"
   ],
   "sao": [
    "Cự Môn"
   ],
   "hoi": [
    "Hóa Kỵ"
   ],
   "canNam": [
    "Tân"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Nhật Nguyệt miếu, Hóa Kị vi phúc",
  "nghia": "Nhật hoặc Nguyệt sáng sủa ở Mệnh kèm Hóa Kỵ: Kỵ không gây hại đáng kể, còn giúp thêm thận trọng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Thái Dương",
     "Thái Âm"
    ]
   ],
   "sao": [
    "Hóa Kỵ"
   ],
   "sang": true
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Nhật Nguyệt hãm Hóa Kị đại hung",
  "nghia": "Nhật hoặc Nguyệt kém sáng ở Mệnh lại có Hóa Kỵ: áp lực tinh thần và trắc trở lớn, nên chủ động phòng bị.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Thái Dương",
     "Thái Âm"
    ]
   ],
   "sao": [
    "Hóa Kỵ"
   ],
   "sang": false
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Chư tinh tại hãm địa Hóa Kị thậm kị",
  "nghia": "Chính tinh kém sáng gặp Hóa Kỵ ở Mệnh: khó khăn dễ bị khuếch đại, nên thận trọng khi quyết định lớn.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Kỵ"
   ],
   "vcd": false,
   "sang": false
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Liêm Trinh tại hãm địa, Hóa Kị cánh kị",
  "nghia": "Liêm Trinh kém sáng ở Mệnh còn gặp Hóa Kỵ: tính nóng, dễ vướng thị phi, cần tiết chế cảm xúc.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh",
    "Hóa Kỵ"
   ],
   "sang": false
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Nữ tinh phú, hiểm ố kỵ Đào Hoa",
  "nghia": "Nữ mệnh có Đào Hoa tại Mệnh: nên chú ý đường tình cảm, giữ ranh giới rõ ràng trong các mối quan hệ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Đào Hoa"
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Chính tinh hãm đảo, Quyền Lộc quang vinh",
  "nghia": "Chính tinh Mệnh kém sáng nhưng được Quyền và Lộc hội về: thế được bù đắp, về sau có cơ hội nổi lên.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "vcd": false,
   "sang": false,
   "hoi": [
    "Hóa Quyền",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Kình Dương cư Ngọ vị, yểu chiết hình thương",
  "nghia": "Kình Dương ở Mệnh tại Ngọ: tính cương, hành động mạnh; nên chú ý an toàn, tránh liều lĩnh.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Ngọ"
   ],
   "sao": [
    "Kình Dương"
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Cơ Lương quang quý Hình Lộc danh y",
  "nghia": "Cơ Lương cùng Ân Quang, Thiên Quý, Thiên Hình và Lộc: hợp nghề chữa bệnh, y dược, công việc chăm sóc con người.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Cơ",
    "Thiên Lương"
   ],
   "hoi": [
    "Ân Quang",
    "Thiên Quý",
    "Thiên Hình"
   ],
   "hoiMot": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Tử Vi Quyền Phủ khuyết Tả dụng Hình",
  "nghia": "Tử Phủ có Quyền hội về, vắng Tả Phù nhưng có Thiên Hình: thế quyền lực dựa vào kỷ luật, nguyên tắc hơn là người hỗ trợ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thiên Phủ",
    "Thiên Hình"
   ],
   "hoi": [
    "Hóa Quyền"
   ],
   "khongCung": [
    "Tả Phù"
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Tàng hung Tử Phủ Vũ Tướng không vong",
  "nghia": "Tử Phủ Vũ Tướng gặp các sao Không hoặc Tuần Triệt: thế quý bị suy giảm, thành quả dễ lỡ dở.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Tử Vi",
     "Thiên Phủ",
     "Vũ Khúc",
     "Thiên Tướng"
    ],
    [
     "Tuần",
     "Triệt",
     "Thiên Không",
     "Địa Không",
     "Triệt"
    ]
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ],
  "pho": true
 },
 {
  "phu": "Mão Dậu Kiếp Không Tử Tham thoát tục",
  "nghia": "Tử Vi Tham Lang ở Mão hoặc Dậu gặp Kiếp Không: có xu hướng hướng nội, nhìn đời thanh đạm, hợp lối sống ngoài vòng danh lợi.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Mão",
    "Dậu"
   ],
   "sao": [
    "Tử Vi",
    "Tham Lang"
   ],
   "motTrong": [
    [
     "Địa Kiếp",
     "Địa Không"
    ]
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Liêm Trinh vô lực ngộ Hổ nguy nan",
  "nghia": "Liêm Trinh kém sáng gặp Bạch Hổ tại Mệnh: nên chú ý an toàn, tranh chấp và thị phi.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh",
    "Bạch Hổ"
   ],
   "sang": false
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Liêm Phá Liêm Tham Khúc Xương đại họa",
  "nghia": "Liêm Trinh đi với Phá Quân hoặc Tham Lang lại có Xương Khúc: tính dao động, dễ sa vào rắc rối; nên chú ý lựa chọn.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "motTrong": [
    [
     "Phá Quân",
     "Tham Lang"
    ],
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Vũ Phủ Kiếp Kình ác nhân quý hiển",
  "nghia": "Vũ Phủ cùng Kình Dương và Địa Kiếp: tính quyết liệt, có thể leo cao nhờ ý chí mạnh nhưng nên thận trọng khi hành xử.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc",
    "Thiên Phủ",
    "Kình Dương",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Dậu cung bất miễn Thiên Tướng đa đoan",
  "nghia": "Thiên Tướng ở Mệnh tại Dậu: công việc, quan hệ dễ nhiều việc rắc rối, cần xử lý từng bước.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Dậu"
   ],
   "sao": [
    "Thiên Tướng"
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Quý tinh Tướng Phủ Tuần Triệt lao đao",
  "nghia": "Thiên Tướng hoặc Thiên Phủ gặp Tuần hoặc Triệt: thế tốt bị cắt giảm, đường đi lúc đầu vất vả.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Thiên Tướng",
     "Thiên Phủ"
    ],
    [
     "Tuần",
     "Triệt"
    ]
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Hình Tướng, Phủ Hao đồng vi phá cách",
  "nghia": "Thiên Tướng gặp Thiên Hình làm giảm cách tốt: dễ vướng kỷ luật, tranh chấp; nên chú ý nguyên tắc.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Tướng",
    "Thiên Hình"
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Hình Tướng, Phủ Hao đồng vi phá cách",
  "nghia": "Thiên Phủ gặp Hao tinh làm giảm cách tốt: tiền của dễ hao hụt, nên chú ý kiểm soát chi tiêu.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ"
   ],
   "motTrong": [
    [
     "Đại Hao",
     "Tiểu Hao"
    ]
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Phá hiềm Xương Khúc",
  "nghia": "Phá Quân gặp Xương hoặc Khúc: thiên về người có học nhưng thực lực tài chính khiêm tốn.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Phá Quân"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "phản hợp Kiếp Không",
  "nghia": "Phá Quân gặp Kiếp hoặc Không được xem là hợp cách hơn: biến động lớn có thể chuyển thành cơ hội làm lại.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Phá Quân"
   ],
   "motTrong": [
    [
     "Địa Kiếp",
     "Địa Không"
    ]
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Nạn đáo trùng trùng Sát Dương Ngọ vị",
  "nghia": "Thất Sát gặp Kình Dương ở Mệnh tại Ngọ: nên chú ý an toàn, tránh quyết định nóng vội và việc mạo hiểm.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Ngọ"
   ],
   "sao": [
    "Thất Sát",
    "Kình Dương"
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Tham Hổ tai ương",
  "nghia": "Tham Lang gặp Bạch Hổ tại Mệnh: nên chú ý va chạm, kiện tụng, tai nạn nhỏ.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang",
    "Bạch Hổ"
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Tham Xương nhiễu sự",
  "nghia": "Tham Lang đi cùng Văn Xương: nhiều ý tưởng, dễ vướng thêm việc rườm rà; nên sắp xếp ưu tiên.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang",
    "Văn Xương"
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Tham Lang Xương Khúc chính sự phiền hà",
  "nghia": "Tham Lang cùng Xương hoặc Khúc: công việc hay phát sinh thủ tục, giấy tờ phức tạp.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Sửu Mùi ảm đạm Nhật Nguyệt vô quang",
  "nghia": "Nhật hoặc Nguyệt kém sáng ở Mệnh tại Sửu hoặc Mùi: sức bật chưa rõ, cần nỗ lực để gây dựng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Sửu",
    "Mùi"
   ],
   "motTrong": [
    [
     "Thái Dương",
     "Thái Âm"
    ]
   ],
   "sang": false
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Gia Kỵ Triệt Tuần phản vi đại cát",
  "nghia": "Hóa Kỵ ở Mệnh gặp Tuần hoặc Triệt: tính chất xấu của Kỵ bị làm nhẹ, trắc trở lại thành thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Kỵ"
   ],
   "motTrong": [
    [
     "Triệt",
     "Tuần"
    ]
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Cự Môn ám chủ tối hỉ Nhật minh",
  "nghia": "Cự Môn ở Mệnh được Thái Dương hội chiếu: bớt nặng nề về thị phi, ăn nói có ánh sáng và được người tin hơn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Cự Môn"
   ],
   "hoi": [
    "Thái Dương"
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Cự ngộ sát tinh nhất sinh tọa nạn",
  "nghia": "Cự Môn đồng cung sát tinh: đường đời dễ gặp thị phi, cạnh tranh; nên thận trọng lời nói và hợp đồng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Cự Môn"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh",
     "Địa Không",
     "Địa Kiếp"
    ]
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Thiên Đồng Dậu hãm cát hóa vinh quang",
  "nghia": "Thiên Đồng ở Mệnh tại Dậu gặp Lộc, Quyền hoặc Khoa hội về: thế chưa mạnh nhưng được bù đắp, về sau có cơ hội nổi lên.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Dậu"
   ],
   "sao": [
    "Thiên Đồng"
   ],
   "hoiMot": [
    [
     "Hóa Lộc",
     "Hóa Quyền",
     "Hóa Khoa"
    ]
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Đồng Cự Đinh Tân Võng La đại quý",
  "nghia": "Thiên Đồng hoặc Cự Môn ở Mệnh tại Thìn hay Tuất, tuổi Đinh hoặc Tân: thế được hỗ trợ, tiềm năng thành đạt khá.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Thìn",
    "Tuất"
   ],
   "motTrong": [
    [
     "Thiên Đồng",
     "Cự Môn"
    ]
   ],
   "canNam": [
    "Đinh",
    "Tân"
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Dần Thân Riêu hỉ Cơ Nguyệt lăng loàn",
  "nghia": "Cơ Nguyệt cùng Thiên Riêu ở Dần hoặc Thân: tình cảm dễ phức tạp, nên chú ý ranh giới trong quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Dần",
    "Thân"
   ],
   "sao": [
    "Thiên Cơ",
    "Thái Âm",
    "Thiên Riêu"
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Thìn Tuất không vong Cơ Lương tăng đạo",
  "nghia": "Cơ Lương ở Thìn hoặc Tuất gặp các sao Không, Tuần Triệt: có khuynh hướng tâm linh, triết lý, hợp đời sống tĩnh.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Thìn",
    "Tuất"
   ],
   "sao": [
    "Thiên Cơ",
    "Thiên Lương"
   ],
   "motTrong": [
    [
     "Tuần",
     "Triệt",
     "Thiên Không",
     "Địa Không",
     "Triệt"
    ]
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Cự Cơ Mão Dậu bất đáo nhân duyên",
  "nghia": "Cự Môn Thiên Cơ ở cung Phu Thê tại Mão hoặc Dậu: nên chú ý chuyện hôn nhân, có thể đến muộn hoặc nhiều cân nhắc.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "chi": [
    "Mão",
    "Dậu"
   ],
   "sao": [
    "Cự Môn",
    "Thiên Cơ"
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "nữ mệnh đoan chính Thái Dương tinh, tảo ngộ hiền phu tín khả bằng",
  "nghia": "Nữ mệnh có Thái Dương tại Mệnh: tính ngay thẳng, dễ gặp người bạn đời đáng tin; chỉ là xu hướng, cần xét thêm.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thái Dương"
   ]
  },
  "kenh": [
   "50 câu phú cách cục"
  ]
 },
 {
  "phu": "Đế toạ Ly cung Tam Kỳ Hình Ấn Khôi Xương Hồng Bật, mỹ mạo tài hung",
  "nghia": "Tử Vi ở Mệnh tại Ngọ với đủ bộ quý tinh hội về: dáng vẻ và tài năng nổi trội, thế rất thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Ngọ"
   ],
   "sao": [
    "Tử Vi"
   ],
   "hoi": [
    "Hóa Khoa",
    "Hóa Quyền",
    "Hóa Lộc",
    "Thiên Hình",
    "Quốc Ấn",
    "Thiên Khôi",
    "Văn Xương",
    "Hồng Loan",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Phú Tử vi (cohoc)"
  ]
 },
 {
  "phu": "hạn hữu Cự Sát Đà Linh, Chu Du cam hận mệnh vong",
  "nghia": "Đại hạn hội Cự Môn, Thất Sát, Đà La, Linh Tinh: giai đoạn áp lực lớn, nên chú ý sức khỏe và an toàn.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "hoi": [
    "Cự Môn",
    "Thất Sát",
    "Đà La",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Phú Tử vi (cohoc)"
  ]
 },
 {
  "phu": "Đế lạc nhàn cung, gia Khúc Xương đa ngôn giảo hoạt",
  "nghia": "Tử Vi gặp cả Xương và Khúc: khéo ăn nói, nhiều lời; nên giữ sự chân thành và tránh nói quá.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Phú Tử vi (cohoc)"
  ]
 },
 {
  "phu": "Tử Vi mạc phùng Kiếp Không Hồng Đào nhập Mệnh giảm thọ",
  "nghia": "Tử Vi gặp Kiếp hoặc Không, lại có Hồng Loan hoặc Đào Hoa: nên chú ý sức khỏe, điều độ sinh hoạt và tình cảm.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "motTrong": [
    [
     "Địa Kiếp",
     "Địa Không"
    ],
    [
     "Hồng Loan",
     "Đào Hoa"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi (cohoc)"
  ]
 },
 {
  "phu": "Tử Phủ đồng cung, Tuần Không xâm nhập, đế vô quyền nan giải hung tinh hạn ngộ",
  "nghia": "Tử Phủ đồng cung gặp Tuần: quyền lực khó phát huy trọn vẹn, lúc gặp hạn xấu thiếu sức hóa giải; nên dự phòng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thiên Phủ",
    "Tuần"
   ]
  },
  "kenh": [
   "Phú Tử vi (cohoc)"
  ]
 },
 {
  "phu": "Dần mộc, Phủ Vi hội Tam Kỳ, Kình Bật cư lai, Mệnh xuất võ do văn quyền hành cứ phục chúng nhân, mạc phùng Không Kiếp hư vô",
  "nghia": "Tử Phủ ở Dần có đủ Khoa Quyền Lộc, Kình Dương và Tả Hữu mà không bị Không Kiếp: văn võ kiêm tài, có quyền uy.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Dần"
   ],
   "sao": [
    "Tử Vi",
    "Thiên Phủ"
   ],
   "hoi": [
    "Hóa Khoa",
    "Hóa Quyền",
    "Hóa Lộc",
    "Kình Dương"
   ],
   "hoiMot": [
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ],
   "khong": [
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú Tử vi (cohoc)"
  ]
 },
 {
  "phu": "Tử Phá mộ cung vô ưu họa ách",
  "nghia": "Tử Vi Phá Quân ở Mệnh tại cung Mộ: nhiều thay đổi nhưng thế được che chở, ít vướng tai họa nghiêm trọng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Thìn",
    "Tuất",
    "Sửu",
    "Mùi"
   ],
   "sao": [
    "Tử Vi",
    "Phá Quân"
   ]
  },
  "kenh": [
   "Phú Tử vi (cohoc)"
  ]
 },
 {
  "phu": "vận lai Phụ Bật nguyên vọng đắc như cầu",
  "nghia": "Đại hạn có cả Tả Phù và Hữu Bật: giai đoạn có người trợ giúp, mong muốn dễ thành.",
  "tone": "tot",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Phú Tử vi (cohoc)"
  ]
 },
 {
  "phu": "Thân kiêm Hồng Lộc Hóa Khoa khánh hội long vân",
  "nghia": "Cung Thân có Hồng Loan, Hóa Khoa và Lộc: về sau gặp thời, danh tiếng và quan hệ thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Thân",
   "sao": [
    "Hồng Loan",
    "Hóa Khoa"
   ],
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi (cohoc)"
  ]
 },
 {
  "phu": "Tứ Sát Tốn cung, đề huề bảo kiếm, Hỏa Tuyệt nhập xâm đa sát",
  "nghia": "Mệnh ở Thìn hoặc Tỵ có đủ bốn sát tinh và Tuyệt: tính mạnh, thiên về nghề võ hoặc nghề kỷ luật, nhưng cần kiềm chế.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Thìn",
    "Tỵ"
   ],
   "hoi": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh",
    "Linh Tinh",
    "Tuyệt"
   ]
  },
  "kenh": [
   "Phú Tử vi (cohoc)"
  ]
 },
 {
  "phu": "Hạn hội Hồng Khoa Ấn Mã dị lập chiến công",
  "nghia": "Đại hạn hội Hồng Loan, Hóa Khoa, Quốc Ấn và Thiên Mã: giai đoạn năng động, dễ lập thành tích nhờ chủ động.",
  "tone": "tot",
  "dk": {
   "cung": "Đại hạn",
   "hoi": [
    "Hồng Loan",
    "Hóa Khoa",
    "Quốc Ấn",
    "Thiên Mã"
   ]
  },
  "kenh": [
   "Phú Tử vi (cohoc)"
  ]
 },
 {
  "phu": "Tử Phủ Vũ Tướng Tả Hữu Long Phượng Khoa Quyền Lộc Ấn, quần thần khánh hội chi cách",
  "nghia": "Mệnh hội đủ Tử Phủ Vũ Tướng cùng các cát tinh: thế cách rất mạnh, được nhiều người trợ giúp.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Tử Vi",
    "Thiên Phủ",
    "Vũ Khúc",
    "Thiên Tướng",
    "Tả Phù",
    "Hữu Bật",
    "Long Trì",
    "Phượng Các",
    "Hóa Khoa",
    "Hóa Quyền",
    "Hóa Lộc",
    "Quốc Ấn"
   ]
  },
  "kenh": [
   "Phú Tử vi (cohoc)"
  ]
 },
 {
  "phu": "quần thần khánh hội chi cách gia Kình Kiếp loạn thế nan thành đại sự",
  "nghia": "Cách quần thần khánh hội nhưng thêm Kình Dương và Địa Kiếp: thế đại cuộc bị cản, khó thành việc lớn nếu gặp thời loạn.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Tử Vi",
    "Thiên Phủ",
    "Vũ Khúc",
    "Thiên Tướng",
    "Tả Phù",
    "Hữu Bật",
    "Long Trì",
    "Phượng Các",
    "Hóa Khoa",
    "Hóa Quyền",
    "Hóa Lộc",
    "Quốc Ấn",
    "Kình Dương",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú Tử vi (cohoc)"
  ]
 },
 {
  "phu": "Tử Tham Tả Hữu hội trung",
  "nghia": "Tử Vi Tham Lang ở Mão hoặc Dậu có Tả Hữu hội: người khéo giao tế, được nhiều người ủng hộ.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Mão",
    "Dậu"
   ],
   "sao": [
    "Tử Vi",
    "Tham Lang"
   ],
   "hoi": [
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Phú Tử vi (cohoc)"
  ]
 },
 {
  "phu": "Tử Tham Khôi Việt phương Đoài",
  "nghia": "Tử Vi Tham Lang ở Dậu có Khôi Việt hội về: dễ gặp quý nhân và cơ hội tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Dậu"
   ],
   "sao": [
    "Tử Vi",
    "Tham Lang"
   ],
   "hoi": [
    "Thiên Khôi",
    "Thiên Việt"
   ]
  },
  "kenh": [
   "Phú Tử vi (cohoc)"
  ]
 },
 {
  "phu": "Kiếp Không Tỵ Hợi đồng vị hoạnh phát công danh",
  "nghia": "Địa Kiếp, Địa Không đồng cung ở Tỵ hoặc Hợi: có thể thăng tiến bất ngờ, nhưng thường kèm biến động lớn.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Địa Kiếp",
    "Địa Không"
   ],
   "chi": [
    "Tỵ",
    "Hợi"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Hồng loan cư Tý, thiếu niên định chiếm khôi nguyên",
  "nghia": "Hồng Loan ở cung Tý: thiên về thành tích học hành sớm, được chú ý từ thuở trẻ.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hồng Loan"
   ],
   "chi": [
    "Tý"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Đào hoa cư Quan tảo tuế đắc Quân hành chính",
  "nghia": "Đào Hoa ở Quan Lộc: sự nghiệp có duyên giao tiếp, dễ sớm được trọng dụng nơi công quyền.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Đào Hoa"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Thiên mã nhập mệnh mẫn tiệp đa năng",
  "nghia": "Thiên Mã ở Mệnh: nhanh nhạy, linh hoạt, thích nhiều việc và hay di chuyển.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Mã"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Thiên riêu cư Tài bạch họa đổ sinh ương",
  "nghia": "Thiên Riêu ở Tài Bạch: nên chú ý nguy cơ hao tài vì cờ bạc, đầu cơ, ham vui.",
  "tone": "xau",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Thiên Riêu"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Mã ngộ Trường sinh thanh vân đắc lộ",
  "nghia": "Thiên Mã gặp Tràng Sinh: đường công danh có đà, dễ gặp thuận lợi thăng tiến.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Mã",
    "Tràng Sinh"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Mệnh ngộ Mã Lương túng du vô yếm",
  "nghia": "Thiên Mã cùng Thiên Lương ở Mệnh: thích rong ruổi, đi nhiều, khó yên một chỗ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Mã",
    "Thiên Lương"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Mệnh phùng Thiên cơ miếu vượng đa năng",
  "nghia": "Thiên Cơ sáng sủa ở Mệnh: khéo léo, nhiều tài, tư duy linh hoạt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Cơ"
   ],
   "sang": true
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Thân cư Thái tuế dữ nhân quả hợp",
  "nghia": "Thái Tuế ở cung Thân: thiên về ăn nói, dễ hòa hợp hoặc va chạm tùy cách giao tiếp.",
  "tone": "trung",
  "dk": {
   "cung": "Thân",
   "sao": [
    "Thái Tuế"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Khoa Quyền nhập mệnh tuy nhàn lạc diệc hữu hiển danh",
  "nghia": "Hóa Khoa và Hóa Quyền cùng ở Mệnh: có danh tiếng, uy tín dù lối sống nhàn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Khoa",
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Khôi Việt nhập Thân ư gia quốc tất vi nhân trưởng",
  "nghia": "Thiên Khôi và Thiên Việt ở cung Thân: có xu hướng được tin cậy, giữ vai trò đứng đầu.",
  "tone": "tot",
  "dk": {
   "cung": "Thân",
   "sao": [
    "Thiên Khôi",
    "Thiên Việt"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Xương Khúc giáp Quan lộc đinh tác cao khoa",
  "nghia": "Văn Xương, Văn Khúc kẹp hai bên Quan Lộc: học vấn, thi cử là điểm hỗ trợ cho công danh.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "giap": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Long Phụng giáp Quan thân cư cẩm thất",
  "nghia": "Long Trì, Phượng Các kẹp hai bên Quan Lộc: được hỗ trợ về danh vị, môi trường làm việc tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "giap": [
    [
     "Long Trì",
     "Phượng Các"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Mộ trung Thai Tọa, văn mô vũ lược kiêm ưu",
  "nghia": "Tam Thai, Bát Tọa ở cung tứ mộ: có thể vừa có mưu lược vừa có học vấn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tam Thai",
    "Bát Tọa"
   ],
   "chi": [
    "Thìn",
    "Tuất",
    "Sửu",
    "Mùi"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Ngọ thượng Khoa Quyền tương khổn biên cương nhậm trọng",
  "nghia": "Hóa Khoa, Hóa Quyền ở cung Ngọ: dễ nhận trọng trách, vị trí có quyền hạn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Khoa",
    "Hóa Quyền"
   ],
   "chi": [
    "Ngọ"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Tuần Triệt đương đầu thiếu niên tân khổ",
  "nghia": "Tuần và Triệt cùng ở Mệnh: tuổi trẻ nhiều thử thách, về sau thường ổn hơn.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tuần",
    "Triệt"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Tam không độc thủ phú quí nan toàn",
  "nghia": "Một sao Không hoặc Tuần ở Mệnh: giàu sang khó trọn vẹn, nên chú ý thăng trầm.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "vcd": true,
   "motTrong": [
    [
     "Địa Không",
     "Thiên Không"
    ],
    [
     "Tuần",
     "Triệt"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Nhị diệu quang huy công danh tảo đạt",
  "nghia": "Thái Dương, Thái Âm cùng tụ hội về Mệnh: thiên về công danh sớm có tiếng tăm.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Thái Dương",
     "Thái Âm"
    ]
   ],
   "sang": true
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Cự môn thê thiếp đa bất mãn hoài",
  "nghia": "Cự Môn ở cung Phu Thê: nên chú ý hay có bất đồng, cần nhiều đối thoại trong hôn nhân.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Cự Môn"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Thai lâm mệnh vị đa học thiểu thành",
  "nghia": "Cung Thai ở Mệnh: học nhiều nhưng dễ dang dở, cần kiên trì theo đến cùng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thai"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Tật ách kiêm Đà Nhận phản mục tật sầu",
  "nghia": "Đà La và Kình Dương ở Tật Ách: nên chú ý sức khỏe đôi mắt và các bệnh gây lo lắng.",
  "tone": "xau",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Đà La",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Nô bộc kiêm Phá quân đa chiêu oán đối",
  "nghia": "Phá Quân ở Nô Bộc: quan hệ với cấp dưới, bạn bè dễ phát sinh mâu thuẫn.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Phá Quân"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Tử Phủ bất khả cư hãm địa",
  "nghia": "Tử Vi ở vị trí hãm: sức mạnh của sao bị suy giảm, nên chú ý nền tảng và quý nhân.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "sang": false
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Tử Phủ bất khả cư hãm địa",
  "nghia": "Thiên Phủ ở vị trí hãm: sức mạnh của sao bị suy giảm, nên chú ý tích lũy và quản lý tài sản.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ"
   ],
   "sang": false
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Riêu Đà Kỵ kế giao, họa vô đơn chí",
  "nghia": "Thiên Riêu, Đà La, Hóa Kỵ cùng hội về Mệnh: nên chú ý rắc rối dồn dập, cần thận trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Thiên Riêu",
    "Đà La",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Khoa Quyền Lộc củng, phúc tất trùng lai",
  "nghia": "Hóa Khoa, Hóa Quyền, Hóa Lộc cùng hội về Mệnh: danh, quyền, lợi đi cùng nhau, nhiều thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Hóa Khoa",
    "Hóa Quyền",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Tuần Triệt cư Phụ mẫu xuất ngoại phương khả thành danh",
  "nghia": "Tuần hoặc Triệt ở Phụ Mẫu: thường xa nhà, lập nghiệp nơi khác thì dễ thành danh.",
  "tone": "trung",
  "dk": {
   "cung": "Phụ Mẫu",
   "motTrong": [
    [
     "Tuần",
     "Triệt"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Tham lang tại Thê cung giá thú nghi cầu trưởng nữ",
  "nghia": "Tham Lang ở Phu Thê: nên cân nhắc kết hôn muộn hoặc với người chững chạc hơn.",
  "tone": "trung",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Tham Lang"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Phong cáo Thai Tọa hiển ấm thừa quang",
  "nghia": "Phong Cáo hội Tam Thai, Bát Tọa: thiên về danh vị, được thừa hưởng phúc ấm.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Phong Cáo",
    "Tam Thai",
    "Bát Tọa"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Tả Hữu đồng cung thân vô hoạnh lự",
  "nghia": "Tả Phù, Hữu Bật đồng cung ở Mệnh: được nhiều người giúp đỡ, ít lo lắng bất ngờ.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Nhật Nguyệt cư Quan lộc, phú quí nan danh",
  "nghia": "Thái Dương, Thái Âm hội ở Quan Lộc: sự nghiệp có danh tiếng và tiền của.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "motTrong": [
    [
     "Thái Dương",
     "Thái Âm"
    ]
   ],
   "sang": true
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Xương Khúc nhập mệnh thân, tài danh quán thế",
  "nghia": "Văn Xương, Văn Khúc ở Mệnh: học vấn, tài hoa nổi bật, được biết đến.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Địa kiếp độc thủ thị kỷ phi nhân",
  "nghia": "Địa Kiếp ở Mệnh: tính hay cho mình đúng, cần lắng nghe người khác hơn.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Thiên hình Thất sát cương táo nhi cô",
  "nghia": "Thiên Hình cùng Thất Sát ở Mệnh: tính cứng rắn, nóng, dễ đơn độc nếu thiếu mềm mỏng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Hình",
    "Thất Sát"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Liêm trinh Phá quân hiểm phòng vô hạn",
  "nghia": "Liêm Trinh cùng Phá Quân ở Mệnh: đường đời nhiều biến động, nên phòng rủi ro.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh",
    "Phá Quân"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Lộc mã Thiên di sinh tài hữu lực",
  "nghia": "Thiên Mã cùng Lộc ở Thiên Di: ra ngoài làm ăn, buôn bán thuận lợi về tiền bạc.",
  "tone": "tot",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Thiên Mã"
   ],
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Cự Cơ Điền trạch phú hữu lâu dài",
  "nghia": "Cự Môn cùng Thiên Cơ ở Điền Trạch: nhà cửa, tài sản có nền tảng lâu dài.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Cự Môn",
    "Thiên Cơ"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Thiên khốc Hóa quyền minh danh vu thế",
  "nghia": "Thiên Khốc cùng Hóa Quyền ở Mệnh: có tiếng tăm, nổi lên sau nhiều trải nghiệm.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Khốc",
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Thiên phủ Vũ khúc tích ngọc đôi kim",
  "nghia": "Thiên Phủ cùng Vũ Khúc ở Mệnh: thiên về tích lũy, giỏi giữ và làm ra tiền.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ",
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Thiên mã yếu thủ ư Điền tài",
  "nghia": "Thiên Mã ở Tài Bạch: tiền bạc đến từ hoạt động, di chuyển, kinh doanh.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Thiên Mã"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Thiên mã yếu thủ ư Điền tài",
  "nghia": "Thiên Mã ở Điền Trạch: bất động sản, tài sản có thể thay đổi, mua bán linh hoạt.",
  "tone": "trung",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Thiên Mã"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Thiên tướng hỷ cư ư Thê vị",
  "nghia": "Thiên Tướng ở Phu Thê: hợp duyên với người nền nếp, giúp đỡ nhau.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Thiên Tướng"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Thiên không liệt ư Mệnh viên, chung thân phong hoa ách",
  "nghia": "Thiên Không ở Mệnh: nên chú ý thăng trầm, kế hoạch hay thiếu chắc chắn.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Không"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Sinh lai bần tiện Kiếp Không lâm Tài Phúc chi hương",
  "nghia": "Địa Kiếp, Địa Không ở Tài Bạch: nên chú ý hao hụt, khó giữ tiền.",
  "tone": "xau",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Địa Kiếp",
    "Địa Không"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Sinh lai bần tiện Kiếp Không lâm Tài Phúc chi hương",
  "nghia": "Địa Kiếp, Địa Không ở Phúc Đức: nên chú ý bất an nội tâm và phúc phần kém ổn định.",
  "tone": "xau",
  "dk": {
   "cung": "Phúc Đức",
   "sao": [
    "Địa Kiếp",
    "Địa Không"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Xuất thế vinh hoa, Nhật Nguyệt chiếu hư không chi địa",
  "nghia": "Cung vô chính diệu được Thái Dương, Thái Âm chiếu: cục diện khá thuận, cuộc sống có phát triển.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "vcd": true,
   "hoi": [
    "Thái Dương",
    "Thái Âm"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Lưỡng Hao thiết kỵ ư Tài cung",
  "nghia": "Đại Hao, Tiểu Hao ở Tài Bạch: nên chú ý chi tiêu hao hụt, khó giữ của.",
  "tone": "xau",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Đại Hao",
    "Tiểu Hao"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Cô thần Quả tú yếu thủ ư Điền tài",
  "nghia": "Cô Thần hoặc Quả Tú ở Tài Bạch: tiền bạc dựa vào tự thân, ít người nâng đỡ.",
  "tone": "trung",
  "dk": {
   "cung": "Tài Bạch",
   "motTrong": [
    [
     "Cô Thần",
     "Quả Tú"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Cô thần Quả tú yếu thủ ư Điền tài",
  "nghia": "Cô Thần hoặc Quả Tú ở Điền Trạch: tài sản dựa vào tự thân tạo dựng, ít được thừa hưởng.",
  "tone": "trung",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Cô Thần",
     "Quả Tú"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Bạch hổ Tang môn bất nghi ư Điền trạch",
  "nghia": "Bạch Hổ hoặc Tang Môn ở Điền Trạch: nên chú ý nhà cửa, tài sản và không khí gia đình.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Bạch Hổ",
     "Tang Môn"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Thất sát cư quan đắc vị, uy áp vạn nhân",
  "nghia": "Thất Sát sáng sủa ở Quan Lộc: mạnh mẽ, có uy, hợp vị trí lãnh đạo.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Thất Sát"
   ],
   "sang": true
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Tử Phủ đồng cung tối vi phúc hậu, thiết hiềm nội trở Triệt Tuần",
  "nghia": "Tử Vi, Thiên Phủ đồng cung ở Mệnh, không bị Tuần Triệt: thiên về phúc hậu, vững vàng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thiên Phủ"
   ],
   "khongCung": [
    "Tuần",
    "Triệt"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Tử Phủ đồng cung tối vi phúc hậu, thiết hiềm nội trở Triệt Tuần",
  "nghia": "Tử Vi, Thiên Phủ đồng cung nhưng gặp Tuần hoặc Triệt: phúc lực bị cản trở, thành tựu chậm hơn.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thiên Phủ"
   ],
   "motTrong": [
    [
     "Tuần",
     "Triệt"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Cơ Lương sảo biến đa tài, ngộ Xương Khúc nhi đa tài mẫn tiệp",
  "nghia": "Thiên Cơ, Thiên Lương gặp Xương hoặc Khúc: tư duy nhanh, nhiều tài, học hỏi tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Cơ",
    "Thiên Lương"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Tham lang nãi lãng đãng chi tính, ngộ Khoa Quyền nhi học nghiệp tinh thông",
  "nghia": "Tham Lang gặp Hóa Khoa, Hóa Quyền: bản tính phóng khoáng nhưng có thể học sâu, thành thạo.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang"
   ],
   "hoi": [
    "Hóa Khoa",
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Thiên đồng ngộ Kiếp Không bất cát",
  "nghia": "Thiên Đồng gặp Địa Kiếp hoặc Địa Không: phúc lực giảm, nên chú ý biến động tâm lý.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Đồng"
   ],
   "motTrong": [
    [
     "Địa Kiếp",
     "Địa Không"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Cự môn phùng Đà Kỵ tối hung",
  "nghia": "Cự Môn gặp Đà La và Hóa Kỵ: dễ vướng thị phi, tranh cãi, nên chú ý lời nói.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Cự Môn"
   ],
   "hoi": [
    "Đà La",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Tứ mộ Liêm trinh, Thất sát phú quí phong lưu",
  "nghia": "Liêm Trinh, Thất Sát ở cung tứ mộ: có thể khá giả, đời sống nhiều trải nghiệm.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh",
    "Thất Sát"
   ],
   "chi": [
    "Thìn",
    "Tuất",
    "Sửu",
    "Mùi"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Xương Khúc học lực phùng Tuế Dương thiên tác tụng sư",
  "nghia": "Xương hoặc Khúc gặp Thái Tuế và Kình Dương: học lực dùng vào luật, tranh biện.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ],
   "hoi": [
    "Thái Tuế",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Khôi Việt văn khoa, ngộ Đà Kỵ thiên vi dật sĩ",
  "nghia": "Khôi hoặc Việt gặp Đà La, Hóa Kỵ: học giỏi nhưng dễ rẽ sang lối sống ẩn dật.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ],
   "hoi": [
    "Đà La",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Hữu bật phùng Quả tú tất dã trường sinh",
  "nghia": "Hữu Bật cùng Quả Tú ở Mệnh: thiên về bền bỉ, nên giữ thói quen sống điều độ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hữu Bật",
    "Quả Tú"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Thiên mã ngộ Tuần không chung thân bôn tẩu",
  "nghia": "Thiên Mã gặp Tuần hoặc Không: hay vất vả bôn ba, khó an định.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Mã"
   ],
   "motTrong": [
    [
     "Tuần",
     "Địa Không",
     "Thiên Không"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Thanh long cư Phúc đức, nhân đinh chúng đa",
  "nghia": "Thanh Long ở Phúc Đức: phúc phần khá, gia đạo thuận hòa, họ hàng đông vui.",
  "tone": "tot",
  "dk": {
   "cung": "Phúc Đức",
   "sao": [
    "Thanh Long"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Thân hữu Hồng, Đào kiêm Thai Tọa nhi công danh khả tất",
  "nghia": "Cung Thân có Hồng Loan hoặc Đào Hoa, hội Tam Thai Bát Tọa: duyên và danh vị thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Thân",
   "motTrong": [
    [
     "Hồng Loan",
     "Đào Hoa"
    ]
   ],
   "hoi": [
    "Tam Thai",
    "Bát Tọa"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Mệnh trung Hồng ngộ Kiếp Không mạc đàm phú quí",
  "nghia": "Hồng Loan gặp Địa Kiếp hoặc Địa Không: nên chú ý, tài lộc khó như mong muốn.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hồng Loan"
   ],
   "motTrong": [
    [
     "Địa Kiếp",
     "Địa Không"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Thân nội Tuế phùng Đà Kỵ mạc đạo phồn hoa",
  "nghia": "Thái Tuế gặp Đà La, Hóa Kỵ ở Thân: nên chú ý trở ngại, cẩn trọng khi mưu cầu.",
  "tone": "xau",
  "dk": {
   "cung": "Thân",
   "sao": [
    "Thái Tuế"
   ],
   "hoi": [
    "Đà La",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Phá quân xung phá văn tinh, tam canh báo vân song chi hận",
  "nghia": "Văn tinh ở Mệnh bị Phá Quân đối chiếu: nên chú ý thi cử trắc trở, học hành dang dở.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ],
   "doi": [
    "Phá Quân"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Hóa khoa trợ thành Văn diệu, nhất giáp đề mai bảng chi vinh",
  "nghia": "Hóa Khoa đi cùng Xương hoặc Khúc: học vấn thi cử thuận, dễ đạt kết quả tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Khoa"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Thái tuế phùng Thất sát trí dũng hữu dư",
  "nghia": "Thái Tuế cùng Thất Sát ở Mệnh: dũng cảm, có quyết đoán, dám dấn thân.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Tuế",
    "Thất Sát"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Thiên mã ngộ Tam thai anh hùng vô đối",
  "nghia": "Thiên Mã cùng Tam Thai ở Mệnh: năng động, nổi bật, có chí tiến thủ.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Mã",
    "Tam Thai"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Sửu Mùi Ân Quí tương phùng tam sinh hữu hạnh",
  "nghia": "Ân Quang, Thiên Quý ở Sửu hoặc Mùi: thường được quý nhân, ân đức nâng đỡ.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Ân Quang",
    "Thiên Quý"
   ],
   "chi": [
    "Sửu",
    "Mùi"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Giáp Thai giáp Tọa danh phận tảo vinh",
  "nghia": "Tam Thai, Bát Tọa kẹp hai bên Mệnh: danh vị đến sớm, được nâng đỡ.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "giap": [
    [
     "Tam Thai",
     "Bát Tọa"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Giáp Sát giáp Liêm công danh vãn đạt",
  "nghia": "Thất Sát, Liêm Trinh kẹp hai bên Mệnh: công danh đến muộn, cần kiên trì.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "giap": [
    [
     "Thất Sát",
     "Liêm Trinh"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Phụ Bật phùng Thiên tướng Địch thị lương y",
  "nghia": "Thiên Tướng gặp Tả Phù hoặc Hữu Bật: hợp nghề chăm sóc, hỗ trợ người khác.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Tướng"
   ],
   "motTrong": [
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Đào Hồng ngộ Thiên cơ Doãn vi sảo họa",
  "nghia": "Thiên Cơ gặp Đào Hoa hoặc Hồng Loan: khéo tay, hợp nghệ thuật, thủ công.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Cơ"
   ],
   "motTrong": [
    [
     "Đào Hoa",
     "Hồng Loan"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Lương tại Tỵ tắc dật du",
  "nghia": "Thiên Lương ở cung Tỵ: thiên về nhàn tản, thích đi chơi, ít ràng buộc.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Lương"
   ],
   "chi": [
    "Tỵ"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Riêu tại Hợi vi minh mẫn",
  "nghia": "Thiên Riêu ở cung Hợi: thiên về thông minh, tinh tế.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Riêu"
   ],
   "chi": [
    "Hợi"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Tử vi Thìn Tuất ngộ Phá quân, lương thương quân tử",
  "nghia": "Tử Vi cùng Phá Quân ở Thìn hoặc Tuất: nhiều biến động, dễ hao tổn, cần ổn định.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Phá Quân"
   ],
   "chi": [
    "Thìn",
    "Tuất"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Kiếp Không Phục binh phùng Dương nhận lộ thượng kiếp đồ",
  "nghia": "Địa Kiếp, Địa Không, Phục Binh, Kình Dương hội về Mệnh: nên chú ý an toàn khi đi lại.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Địa Kiếp",
    "Địa Không",
    "Phục Binh",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Tuần Triệt bất khả ngộ Lộc tồn, tư cơ phá hoại",
  "nghia": "Lộc Tồn gặp Tuần hoặc Triệt: tài lộc dễ bị cản trở, nên chú ý giữ cơ nghiệp.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Lộc Tồn"
   ],
   "motTrong": [
    [
     "Tuần",
     "Triệt"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Dương nhận phùng Nhật Nguyệt bịnh tật triền miên",
  "nghia": "Kình Dương gặp Thái Dương hoặc Thái Âm: nên chú ý sức khỏe, nhất là mắt và thần kinh.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương"
   ],
   "motTrong": [
    [
     "Thái Dương",
     "Thái Âm"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Sát Phá hỷ trợ Kình dương",
  "nghia": "Thất Sát hoặc Phá Quân gặp Kình Dương: tính quyết liệt, hợp hoạt động đòi hỏi mạnh mẽ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương"
   ],
   "motTrong": [
    [
     "Thất Sát",
     "Phá Quân"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Tử vi cư Dậu toàn vô uy lực chi công",
  "nghia": "Tử Vi ở cung Dậu: uy thế không rõ nét, cần dựa vào năng lực và quý nhân.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "chi": [
    "Dậu"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Thất sát tại Thân hưởng đắc an toàn chi phúc",
  "nghia": "Thất Sát ở cung Thân: có thế vững, thiên về ổn định hơn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát"
   ],
   "chi": [
    "Thân"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Tham Kỵ trùng Riêu thủy tai nan miễn",
  "nghia": "Tham Lang gặp Hóa Kỵ, Thiên Riêu: nên chú ý an toàn khi gần sông nước.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang"
   ],
   "hoi": [
    "Hóa Kỵ",
    "Thiên Riêu"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Thất sát Tý Ngọ Dần Thân thọ khảo",
  "nghia": "Thất Sát ở bốn cung Tý, Ngọ, Dần, Thân: thế đứng vững, thiên về bền chí.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát"
   ],
   "chi": [
    "Tý",
    "Ngọ",
    "Dần",
    "Thân"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Thiên hình Dần Thân Mão Dậu anh hùng",
  "nghia": "Thiên Hình ở Dần, Thân, Mão hoặc Dậu: tính cương trực, hợp việc cần kỷ luật.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Hình"
   ],
   "chi": [
    "Dần",
    "Thân",
    "Mão",
    "Dậu"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Phá tại Khảm Ly, tam thiếu tam công quyền đắc trọng",
  "nghia": "Phá Quân ở Tý hoặc Ngọ: dễ nắm vai trò quan trọng, quyền hạn lớn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Phá Quân"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Dương nhận Hỏa tinh uy quyền xuất chúng",
  "nghia": "Kình Dương cùng Hỏa Tinh ở Mệnh: tính mạnh, quyết liệt, có uy lực nổi bật.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương",
    "Hỏa Tinh"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Đồng hành Tham Vũ uy áp biên di",
  "nghia": "Tham Lang cùng Vũ Khúc ở Mệnh: ý chí mạnh, có uy, thường thành đạt muộn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang",
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Âm Dương hội Xương Khúc xuất thế vinh hoa",
  "nghia": "Thái Dương, Thái Âm hội Xương hoặc Khúc: học vấn tốt, đường danh vọng thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Thái Dương",
    "Thái Âm"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Phụ Bật ngộ Tài cung y chu trước tử",
  "nghia": "Tả Phù hoặc Hữu Bật ở Tài Bạch: được người giúp đỡ, tiền bạc và địa vị khá.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "motTrong": [
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Nhật Nguyệt giáp Tài, bất quyền tắc phú",
  "nghia": "Thái Dương, Thái Âm kẹp hai bên Tài Bạch: tiền của khá, hoặc có quyền hay giàu.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "giap": [
    [
     "Thái Dương",
     "Thái Âm"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Không Kiếp giáp Mệnh, phi yểu tắc bần",
  "nghia": "Địa Không, Địa Kiếp kẹp hai bên Mệnh: nên chú ý nhiều thử thách, cần thận trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "giap": [
    [
     "Địa Kiếp",
     "Địa Không"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Thanh long vạn phái thừa Mộc dục đi thanh quang",
  "nghia": "Thanh Long cùng Mộc Dục ở Mệnh: nét thanh nhã, thích sạch sẽ, thuận về danh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thanh Long",
    "Mộc Dục"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Thiên phủ lâm giải ách nhi vô bệnh",
  "nghia": "Thiên Phủ ở Tật Ách: thể trạng thiên về ổn, vẫn nên giữ sinh hoạt đều đặn.",
  "tone": "tot",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Thiên Phủ"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Địa kiếp lâm phúc đức nhi hữu tai",
  "nghia": "Địa Kiếp ở Phúc Đức: nên chú ý bất an tinh thần và biến cố trong gia đạo.",
  "tone": "xau",
  "dk": {
   "cung": "Phúc Đức",
   "sao": [
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Quyền Lộc trùng phùng Chu Bột tuế lai nhập tướng",
  "nghia": "Hóa Quyền và Hóa Lộc hội về Mệnh: quyền và lợi đi đôi, thăng tiến thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Hóa Quyền",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Khôi Việt đối chiếu Giả Nghị niên thiếu đăng khoa",
  "nghia": "Khôi hoặc Việt ở cung đối chiếu Mệnh: học hành thi cử sớm thuận lợi, có quý nhân.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Khôi"
   ],
   "doi": [
    "Thiên Việt"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Khôi Việt đối chiếu Giả Nghị niên thiếu đăng khoa",
  "nghia": "Khôi hoặc Việt ở cung đối chiếu Mệnh: học hành thi cử sớm thuận lợi, có quý nhân.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Việt"
   ],
   "doi": [
    "Thiên Khôi"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Tang môn thậm khổ ư thiên hạ, thung huyên lãnh đạm",
  "nghia": "Tang Môn ở Phụ Mẫu: nên chú ý quan hệ với cha mẹ, cần quan tâm nhau hơn.",
  "tone": "xau",
  "dk": {
   "cung": "Phụ Mẫu",
   "sao": [
    "Tang Môn"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Quan phù tồn kinh ư địa võng trất cốc bi sầu",
  "nghia": "Quan Phù ở cung Tuất: nên chú ý vướng mắc giấy tờ, thủ tục hoặc kiện cáo.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Quan Phù"
   ],
   "chi": [
    "Tuất"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Chích hỏa phần Thiên mã, bất nghi viễn hành",
  "nghia": "Thiên Mã gặp Hỏa Tinh hoặc Linh Tinh ở Thiên Di: nên chú ý khi đi xa, cân nhắc kỹ.",
  "tone": "xau",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Thiên Mã"
   ],
   "motTrong": [
    [
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Vũ khúc gặp Cô thần như Hàn Nguyên trừ quỉ",
  "nghia": "Vũ Khúc cùng Cô Thần ở Mệnh: tính cứng cỏi, tự lập, dám làm.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc",
    "Cô Thần"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Văn xương gặp Quả tú như Trương đế sư đi tầm tiên",
  "nghia": "Văn Xương cùng Quả Tú ở Mệnh: thiên về chiều sâu, thích tìm hiểu đạo lý.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Văn Xương",
    "Quả Tú"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Kinh Đà tương giáp mệnh phá điền trạch ư phu quân",
  "nghia": "Kình Dương, Đà La kẹp hai bên Mệnh: nên chú ý áp lực, dễ hao tổn nếu thiếu thận trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "giap": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa Linh phá đương thân, bại điền tài ư Tổ nghiệp",
  "nghia": "Hỏa Tinh, Linh Tinh hội về Thân: nên chú ý hao tổn điền sản, cần giữ cơ nghiệp.",
  "tone": "xau",
  "dk": {
   "cung": "Thân",
   "hoi": [
    "Hỏa Tinh",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Bát Tọa hướng Dương thị tụng ư cung cấm",
  "nghia": "Thái Dương ở Mệnh có Bát Tọa hội chiếu: thiên về vị trí gần chốn công quyền.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương"
   ],
   "hoi": [
    "Bát Tọa"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Hóa Lộc hoàn vi hảo, nhược cư Mộ địa di tăng bi",
  "nghia": "Hóa Lộc ở cung Mộ: tài lộc có nhưng khó giữ, nên khéo tích lũy.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Lộc",
    "Mộ"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Thiên Đồng bạch thủ thành gia",
  "nghia": "Thiên Đồng ở Mệnh: thiên về tay trắng tạo dựng, từ nhỏ đến lớn dần ổn.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Đồng"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Dương Đà Hỏa Linh vị chi tứ Sát, đơn phùng Cơ tú nhi hữu duyên",
  "nghia": "Thiên Cơ gặp một sao trong bộ tứ sát: khéo léo nhưng cần cẩn trọng, vẫn có mặt tích cực.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Cơ"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Hổ Tang Điếu Bịnh vị chi tứ Hung hạnh ngộ Đồng tinh nhi hóa cát",
  "nghia": "Thiên Đồng ở Mệnh gặp các sao hung như Hổ, Tang, Điếu, Bệnh: có thể giảm nhẹ khó khăn.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Đồng"
   ],
   "hoiMot": [
    [
     "Bạch Hổ",
     "Tang Môn",
     "Điếu Khách",
     "Bệnh Phù"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Văn khúc Vũ khúc đồng Mệnh, Lý Linh loại tướng tướng chi vinh",
  "nghia": "Văn Khúc cùng Vũ Khúc ở Mệnh: vừa có học vấn vừa có năng lực, hợp công việc có vị thế.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Văn Khúc",
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Lộc cư Nô bộc túng hữu quan dã bôn trì",
  "nghia": "Lộc ở Nô Bộc: tiền của dễ qua tay người khác, cần để ý quan hệ.",
  "tone": "trung",
  "dk": {
   "cung": "Nô Bộc",
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Đẩu cư Thê cung tuy hữu phú nhi cương ngạnh",
  "nghia": "Đẩu Quân ở Phu Thê: nên cân nhắc tính cách, cần mềm mỏng trong quan hệ vợ chồng.",
  "tone": "trung",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Đẩu Quân"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Hữu bật đơn thủ ư Mệnh cung, ly hương thứ xuất",
  "nghia": "Hữu Bật ở Mệnh: thường xa quê lập nghiệp, được người giúp đỡ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Tả phụ trung lai ư Mệnh vị, tiên tổ hữu quang",
  "nghia": "Tả Phù ở Mệnh: nhận được sự nâng đỡ, nền tảng gia đình tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tả Phù"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Thiên lương bảo tư tài dĩ dư nhân",
  "nghia": "Thiên Lương ở Mệnh: thiên về chia sẻ, giúp đỡ người khác.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Lương"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Thất sát thủ tha tài vi kỷ vật",
  "nghia": "Thất Sát ở Mệnh: có xu hướng tính toán lợi riêng, cần giữ chuẩn mực.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Đà la lâm Phụ vị, bất tu Quả tú diệc tăng bi",
  "nghia": "Đà La ở Phụ Mẫu: nên chú ý quan hệ gia đình, dễ cách biệt.",
  "tone": "xau",
  "dk": {
   "cung": "Phụ Mẫu",
   "sao": [
    "Đà La"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Đào Hoa ngộ Phi Liêm, Nguyễn Tịch Tấn triều nhi túy khách",
  "nghia": "Đào Hoa cùng Phi Liêm ở Mệnh: tính phóng khoáng, thích vui chơi, nên tiết chế.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đào Hoa",
    "Phi Liêm"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Đại Hao lâm Quan phủ, Lưu Nghị Tôn thất chi hu hồ",
  "nghia": "Đại Hao ở Quan Lộc: sự nghiệp dễ biến động, nên chú ý hao hụt.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Đại Hao"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Nhật lạc Mùi cung, vi nhân tiền cần hậu lãn",
  "nghia": "Thái Dương ở cung Mùi: đầu đời chăm chỉ, về sau dễ chủ quan.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương"
   ],
   "chi": [
    "Mùi"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Nguyệt tàn Dần vị, tác sự hữu thủy vô chung",
  "nghia": "Thái Âm ở cung Dần: làm việc dễ dở dang, cần duy trì đến cùng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Âm"
   ],
   "chi": [
    "Dần"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Hữu bật hội vi Phu cung, vi nhân hữu tiểu tinh chi phận",
  "nghia": "Hữu Bật ở Phu Thê: được sự hỗ trợ trong hôn nhân, tính nết ôn hòa.",
  "tone": "trung",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Đẩu tinh lâm vi Phu vị, vi nhân tắc cù mộc chi cô",
  "nghia": "Đẩu Quân ở Phu Thê: nên chú ý khoảng cách tình cảm, cần chủ động gần gũi.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Đẩu Quân"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ],
  "pho": true
 },
 {
  "phu": "Xương Khúc Tả Hữu hội ư Thê cung diễn chân chân ư lân chỉ",
  "nghia": "Xương, Khúc, Tả, Hữu hội ở Phu Thê: hôn nhân có người trợ giúp, nhiều điểm thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "hoi": [
    "Văn Xương",
    "Văn Khúc",
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Phú Ma Thị"
  ]
 },
 {
  "phu": "Tử Vi trọng hậu dung hình",
  "nghia": "Tử Vi thủ Mệnh: thiên về tính đầy đặn, điềm đạm, có dáng vẻ chững chạc.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Thiên Phủ tiết hạnh, thông minh ôn hòa",
  "nghia": "Thiên Phủ ở Mệnh: xu hướng giữ nề nếp, ôn hòa, sáng dạ.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Lòng lành tính gặp Thiên Cơ",
  "nghia": "Thiên Cơ ở Mệnh: tính tình thiên về hiền lành, hay suy tính.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Cơ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Vũ Tinh nhập miếu, anh kỳ tài năng",
  "nghia": "Vũ Khúc đắc địa ở Mệnh: xu hướng quyết đoán, có năng lực nổi bật.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc"
   ],
   "sang": true
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Thái Âm viên mãn ai bằng",
  "nghia": "Thái Âm sáng sủa ở Mệnh: thiên về tính tình dịu dàng, đầy đặn, được lòng người.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Âm"
   ],
   "sang": true
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Thiên Đồng phì mãn, tính hằng ôn lương",
  "nghia": "Thiên Đồng ở Mệnh: tính hiền hòa, dễ gần, thiên về an nhàn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Đồng"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phá, Liêm to nhỏ khác thường, tính tình cương trực, kết đường tà gian",
  "nghia": "Phá Quân hoặc Liêm Trinh ở Mệnh: tính cách cực đoan, thẳng nhưng dễ rơi vào hai thái cực.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Phá Quân",
     "Liêm Trinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Thiên Lương từ hậu dung nhan",
  "nghia": "Thiên Lương ở Mệnh: thiên về nhân hậu, từ tốn, đáng tin cậy.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Lương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Sát - Hình miếu địa, khôn ngoan anh hùng",
  "nghia": "Thất Sát đắc địa ở Mệnh: xu hướng mạnh mẽ, gan dạ, có khí chất lãnh đạo.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát"
   ],
   "sang": true
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tham Lang tính bẩm thung dung, say miền gái đẹp, rượu nồng mùi ngon",
  "nghia": "Tham Lang ở Mệnh: thiên về ham vui, thích hưởng thụ; nên chú ý tiết độ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Thái Dương tính khí thực khôn, thanh kỳ bậc nhất, tư lương khác thường",
  "nghia": "Thái Dương sáng sủa ở Mệnh: xu hướng thông minh, quang minh, suy xét sâu.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương"
   ],
   "sang": true
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Kìa như Văn Khúc, Văn Xương, tư nhiên khả ái, thông đường văn chương",
  "nghia": "Xương hoặc Khúc ở Mệnh: thiên về nho nhã, dễ mến, hợp văn chương chữ nghĩa.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Cự Môn tính khí bất thường, hễ khi xử sự, tìm đường đảo điên",
  "nghia": "Cự Môn ở Mệnh: tính khí dễ thay đổi, lời qua tiếng lại; nên cân nhắc khi xử sự.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Cự Môn"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Thiên Tướng, lòng thẳng mặt hiền",
  "nghia": "Thiên Tướng ở Mệnh: thiên về ngay thẳng, hòa nhã.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Tướng"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Thiên tư mỹ lệ: Khoa - Quyền hẳn hoi",
  "nghia": "Mệnh có Hóa Khoa và Hóa Quyền: thiên về phong thái đẹp, có học và có uy.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Khoa",
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Phụ - Bật tuấn tú vốn dòng, đáng tài hơn chúng, tốt dùng chẳng không",
  "nghia": "Tả Phù và Hữu Bật cùng ở Mệnh: nhiều người trợ giúp, xu hướng nổi hơn bạn bè.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Phụ - Bật đơn thủ Mệnh cung, đoán rằng số ấy ly tông cửa nhà",
  "nghia": "Chỉ Tả Phù hoặc chỉ Hữu Bật ở Mệnh: có xu hướng sớm tự lập, xa quê hoặc gia đình.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tả Phù"
   ],
   "khongCung": [
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phụ - Bật đơn thủ Mệnh cung, đoán rằng số ấy ly tông cửa nhà",
  "nghia": "Chỉ Tả Phù hoặc chỉ Hữu Bật ở Mệnh: có xu hướng sớm tự lập, xa quê hoặc gia đình.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hữu Bật"
   ],
   "khongCung": [
    "Tả Phù"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phượng - Long đều hợp Mệnh ta, làm người cốt cách, ôn hòa tốt thay",
  "nghia": "Phượng Các và Long Trì cùng ở Mệnh: thiên về phong thái thanh nhã, ôn hòa.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Phượng Các",
    "Long Trì"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tuế - Riêu họa xướng ư lời",
  "nghia": "Thái Tuế và Thiên Riêu ở Mệnh: ăn nói lanh lợi, dễ tranh biện; nên cẩn trọng lời nói.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Tuế",
    "Thiên Riêu"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Nhận - Hư, lòng gió là người sai ngoa",
  "nghia": "Kình Dương và Thiên Hư ở Mệnh: tính dễ nóng, nói chưa chắc đã giữ; nên chú ý lời hứa.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương",
    "Thiên Hư"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Mây mưa ấy thật Đào Hoa",
  "nghia": "Đào Hoa ở Mệnh: thiên về duyên dáng, nhiều duyên tình cảm.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đào Hoa"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Trán đen, tính nóng, Kiếp - Không",
  "nghia": "Địa Kiếp và Địa Không ở Mệnh: tính thất thường, dễ nóng nảy; đường đời nhiều thay đổi.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Địa Kiếp",
    "Địa Không"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Kìa như nói chẳng hé răng, Thiên Hình đơn thủ chốn đằng Mệnh cung",
  "nghia": "Thiên Hình ở Mệnh: thiên về kiệm lời, nghiêm khắc, ít bộc lộ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Hình"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Lộc - Mã khéo kiêm nàn nồng",
  "nghia": "Lộc và Thiên Mã cùng ở Mệnh: xu hướng năng động, nhanh nhạy trong mưu sinh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Mã"
   ],
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Hoa Cái má phấn lưng ong",
  "nghia": "Hoa Cái ở Mệnh: thiên về thích chưng diện, yêu cái đẹp, hợp nghệ thuật.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hoa Cái"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Triệt Không tính những chẳng âu, hung trung vô định ra màu gian nan",
  "nghia": "Triệt và Địa Không ở Mệnh: tính bất cần, đường đời hay thay đổi; nên chú ý lập kế hoạch rõ.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Triệt",
    "Địa Không"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tuế - Tham trong dạ đa đoan",
  "nghia": "Thái Tuế và Tham Lang ở Mệnh: nhiều toan tính, hay lo nghĩ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Tuế",
    "Tham Lang"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Kỵ - Riêu tửu sắc, một đoàn ngao du",
  "nghia": "Hóa Kỵ và Thiên Riêu ở Mệnh: dễ sa vào vui chơi, ăn uống; nên chú ý tiết độ.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Kỵ",
    "Thiên Riêu"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Hổ - Tang chẳng việc mà lo",
  "nghia": "Bạch Hổ và Tang Môn ở Mệnh: thiên về hay lo lắng, ưu tư vô cớ.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Bạch Hổ",
    "Tang Môn"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Quan Phù - Điếu Khách hay phô rộng lời",
  "nghia": "Quan Phù và Điếu Khách ở Mệnh: xu hướng nói nhiều, hay bình phẩm.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Quan Phù",
    "Điếu Khách"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Lưỡng - Hao nhỏ nhặt hình người",
  "nghia": "Đại Hao và Tiểu Hao ở Mệnh: thiên về chi li, hay hao tốn vụn vặt.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đại Hao",
    "Tiểu Hao"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Quý - Ân phong độ trượng phu",
  "nghia": "Thiên Quý và Ân Quang ở Mệnh: phong thái đàng hoàng, được quý mến.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Quý",
    "Ân Quang"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tướng Quân chỉ thích dụng binh",
  "nghia": "Tướng Quân ở Mệnh: thiên về mạnh mẽ, ưa hoạt động, hợp việc có tính kỷ luật.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tướng Quân"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Bệnh Phù đới tật trong mình chẳng không",
  "nghia": "Bệnh Phù ở Mệnh: nên chú ý sức khỏe và giữ gìn thể trạng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Bệnh Phù"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Cô - Quả thiết kỵ riêng lòng",
  "nghia": "Cô Thần và Quả Tú ở Mệnh: thiên về khép kín, ít chia sẻ.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Cô Thần",
    "Quả Tú"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tràng Sinh, Đế Vượng vốn dòng thiện lương",
  "nghia": "Mệnh gặp Tràng Sinh hoặc Đế Vượng: thiên về hiền lành, có sinh khí.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Tràng Sinh",
     "Đế Vượng"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Đào Hoa - Mộc Dục điểm trang",
  "nghia": "Đào Hoa và Mộc Dục ở Mệnh: thích chăm chút vẻ ngoài, nhiều duyên.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đào Hoa",
    "Mộc Dục"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Lâm Quan tính khí dịu dàng, tinh anh",
  "nghia": "Lâm Quan ở Mệnh: tính khí nhã nhặn, nhanh nhạy.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Lâm Quan"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Triệt mà gặp được Kim cung, tinh thần thanh sảng, thung dung đế thần",
  "nghia": "Triệt ở cung Thân hoặc Dậu (Kim): xu hướng tinh thần thanh thoát, thư thái.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Triệt"
   ],
   "chi": [
    "Thân",
    "Dậu"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tuyệt phùng hỏa địa một khi, hiên ngang chí khí, gặp thì thung dung",
  "nghia": "Tuyệt ở cung Tỵ hoặc Ngọ (Hỏa): thiên về ý chí cứng cỏi, vượt khó.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tuyệt"
   ],
   "chi": [
    "Tỵ",
    "Ngọ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Kìa Suy - Bệnh - Tử ba dong, gặp vào nước ấy, ai dùng? ai màng?",
  "nghia": "Mệnh gặp Suy, Bệnh hoặc Tử: khí thế yếu, cần nhiều nỗ lực để được ghi nhận.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Suy",
     "Bệnh",
     "Tử"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hóa - Lộc tính khí dịu dàng",
  "nghia": "Hóa Lộc ở Mệnh: tính khí mềm mỏng, hòa nhã, dễ kết giao.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Thiên Đức, Nguyệt Đức khoan hòa",
  "nghia": "Thiên Đức và Nguyệt Đức ở Mệnh: thiên về khoan dung, nhẹ nhàng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Đức",
    "Nguyệt Đức"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Lộc Tồn đôn hậu, thiệt là quy mô",
  "nghia": "Lộc Tồn ở Mệnh: tính đôn hậu, cẩn thận, thích có nề nếp.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Lộc Tồn"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phá Quân tâm tính hồ đồ",
  "nghia": "Phá Quân ở Mệnh: xu hướng làm liều, thích phá cũ; nên cân nhắc trước khi quyết.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Phá Quân"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Ví như thuộc Thổ Tử Vi, tính trì mà gặp Hỏa thì lại nhanh",
  "nghia": "Tử Vi gặp Hỏa Tinh hoặc Linh Tinh: tính vốn chậm rãi được thêm nhanh nhẹn, quyết đoán.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "hoiMot": [
    [
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Thiên Phủ vốn tính hòa lành, song gặp Không - Kiếp thời rằng khắc thâm",
  "nghia": "Thiên Phủ gặp Địa Không và Địa Kiếp: tính hiền nhưng có lúc khắt khe, nhiều biến động.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ"
   ],
   "hoi": [
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Hãm Dương, khắc phụ đã xong",
  "nghia": "Thái Dương kém sáng ở Phụ Mẫu: nên chú ý mối quan hệ, sự gắn bó với cha.",
  "tone": "xau",
  "dk": {
   "cung": "Phụ Mẫu",
   "sao": [
    "Thái Dương"
   ],
   "sang": false
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Hãm Âm khắc mẫu vào vòng chẳng sai",
  "nghia": "Thái Âm kém sáng ở Phụ Mẫu: nên chú ý mối quan hệ, sự gắn bó với mẹ.",
  "tone": "xau",
  "dk": {
   "cung": "Phụ Mẫu",
   "sao": [
    "Thái Âm"
   ],
   "sang": false
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Gặp sao Hóa Kỵ khiếm hòa",
  "nghia": "Hóa Kỵ ở Phụ Mẫu: quan hệ với cha mẹ dễ có hiểu lầm, thiếu hòa hợp.",
  "tone": "xau",
  "dk": {
   "cung": "Phụ Mẫu",
   "sao": [
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Thiên Hình - Tuần Triệt mẹ cha mất rồi",
  "nghia": "Thiên Hình gặp Tuần hoặc Triệt ở Phụ Mẫu: nên chú ý duyên với cha mẹ, có thể sớm xa cách.",
  "tone": "xau",
  "dk": {
   "cung": "Phụ Mẫu",
   "sao": [
    "Thiên Hình"
   ],
   "motTrong": [
    [
     "Tuần",
     "Triệt"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Cáo, Phong có chức, có ngôi",
  "nghia": "Phong Cáo ở Phụ Mẫu: gia đình có người giữ chức phận, danh vị.",
  "tone": "tot",
  "dk": {
   "cung": "Phụ Mẫu",
   "sao": [
    "Phong Cáo"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Khúc - Xương, Thái Tuế thì người cũng sang",
  "nghia": "Xương hoặc Khúc cùng Thái Tuế ở Phụ Mẫu: cha mẹ thiên về học thức, có địa vị.",
  "tone": "tot",
  "dk": {
   "cung": "Phụ Mẫu",
   "sao": [
    "Thái Tuế"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Khôi - Khoa phát đạt hoa tràng",
  "nghia": "Thiên Khôi và Hóa Khoa ở Phụ Mẫu: gia đình có nền nếp học hành, thuận lợi thi cử.",
  "tone": "tot",
  "dk": {
   "cung": "Phụ Mẫu",
   "sao": [
    "Thiên Khôi",
    "Hóa Khoa"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Khôi - Quyền chính chướng đường đường tốt thông",
  "nghia": "Thiên Khôi và Hóa Quyền ở Phụ Mẫu: cha mẹ có uy, được nể trọng.",
  "tone": "tot",
  "dk": {
   "cung": "Phụ Mẫu",
   "sao": [
    "Thiên Khôi",
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Nhược bằng Lộc - Mã phú ông ai tày",
  "nghia": "Lộc và Thiên Mã ở Phụ Mẫu: gia đình thiên về khá giả, năng động làm ăn.",
  "tone": "tot",
  "dk": {
   "cung": "Phụ Mẫu",
   "sao": [
    "Thiên Mã"
   ],
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Lộc - Quyền đóng đó trong miền bản cung, ở đời vinh hiển đã xong",
  "nghia": "Phúc Đức có Lộc và Hóa Quyền: xu hướng phúc dày, đời sống thuận lợi, được nể trọng.",
  "tone": "tot",
  "dk": {
   "cung": "Phúc Đức",
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ],
    [
     "Hóa Quyền"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Kiếp - Không ở đấy bần cùng khốn thay, nay đây mai đó càng hay",
  "nghia": "Địa Kiếp và Địa Không ở Phúc Đức: tâm hay bất ổn, đời nhiều thay đổi; nên chú ý giữ vững tinh thần.",
  "tone": "xau",
  "dk": {
   "cung": "Phúc Đức",
   "sao": [
    "Địa Kiếp",
    "Địa Không"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Phủ - Vi đóng đấy, Tài, Điền vượng thay",
  "nghia": "Tử Vi và Thiên Phủ ở Điền Trạch: nhà đất, tài sản có xu hướng vững.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Tử Vi",
    "Thiên Phủ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Vũ - Cơ tài sản cũng hay, song hiềm hoán dịch ngày này nhiều phen",
  "nghia": "Vũ Khúc và Thiên Cơ ở Điền Trạch: tài sản khá nhưng hay đổi chủ, mua bán.",
  "tone": "trung",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Vũ Khúc",
    "Thiên Cơ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Âm Dương, Miếu ấy đa điền",
  "nghia": "Thái Dương hoặc Thái Âm sáng ở Điền Trạch: thiên về nhiều nhà đất.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Thái Dương"
   ],
   "sang": true
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Âm Dương, Miếu ấy đa điền",
  "nghia": "Thái Dương hoặc Thái Âm sáng ở Điền Trạch: thiên về nhiều nhà đất.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Thái Âm"
   ],
   "sang": true
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Nhược bằng ngộ hãm vào miền bằng chân",
  "nghia": "Thái Dương hoặc Thái Âm kém sáng ở Điền Trạch: nhà đất ít, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Thái Dương"
   ],
   "sang": false
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Nhược bằng ngộ hãm vào miền bằng chân",
  "nghia": "Thái Dương hoặc Thái Âm kém sáng ở Điền Trạch: nhà đất ít, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Thái Âm"
   ],
   "sang": false
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Thiên Đồng hậu dị, tiên nan",
  "nghia": "Thiên Đồng ở Điền Trạch: lúc đầu gây dựng nhà đất khó, về sau thuận hơn.",
  "tone": "trung",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Thiên Đồng"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tham Lang tổ nghiệp phá tan lại thành",
  "nghia": "Tham Lang ở Điền Trạch: tổ nghiệp dễ tan rồi tự gây dựng lại.",
  "tone": "trung",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Tham Lang"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Cự Môn tổ nghiệp tan tành, sinh ra đời chắc sau rành được yên",
  "nghia": "Cự Môn ở Điền Trạch: nhà đất ông cha dễ không giữ, về sau tự lập mới yên.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Cự Môn"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Sát tinh bỗng chốc mà lên",
  "nghia": "Thất Sát sáng ở Điền Trạch: nhà đất có thể tăng nhanh, đột ngột.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Thất Sát"
   ],
   "sang": true
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Nhược phùng hãm địa, bình yên thường thường",
  "nghia": "Thất Sát kém sáng ở Điền Trạch: nhà đất ở mức bình thường.",
  "tone": "trung",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Thất Sát"
   ],
   "sang": false
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Phá Quân của khéo dở dang",
  "nghia": "Phá Quân ở Điền Trạch: tài sản, nhà đất hay dang dở, biến động.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Phá Quân"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Nhược bằng ngộ hãm là tuồng khó khăn",
  "nghia": "Phá Quân kém sáng ở Điền Trạch: gây dựng nhà đất nhiều khó khăn.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Phá Quân"
   ],
   "sang": false
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Thiên Tướng",
     "Thiên Lương"
    ],
    [
     "Tả Phù"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Thiên Tướng",
     "Thiên Lương"
    ],
    [
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Thiên Tướng",
     "Thiên Lương"
    ],
    [
     "Hóa Khoa"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Thiên Tướng",
     "Thiên Lương"
    ],
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Thiên Tướng",
     "Thiên Lương"
    ],
    [
     "Hóa Quyền"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Thiên Tướng",
     "Thiên Lương"
    ],
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Thiên Tướng",
     "Thiên Lương"
    ],
    [
     "Thiên Mã"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Thiên Tướng",
     "Thiên Lương"
    ],
    [
     "Tràng Sinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Tả Phù"
    ],
    [
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Tả Phù"
    ],
    [
     "Hóa Khoa"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Tả Phù"
    ],
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Tả Phù"
    ],
    [
     "Hóa Quyền"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Tả Phù"
    ],
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Tả Phù"
    ],
    [
     "Thiên Mã"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Tả Phù"
    ],
    [
     "Tràng Sinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Hữu Bật"
    ],
    [
     "Hóa Khoa"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Hữu Bật"
    ],
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Hữu Bật"
    ],
    [
     "Hóa Quyền"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Hữu Bật"
    ],
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Hữu Bật"
    ],
    [
     "Thiên Mã"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Hữu Bật"
    ],
    [
     "Tràng Sinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Hóa Khoa"
    ],
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Hóa Khoa"
    ],
    [
     "Hóa Quyền"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Hóa Khoa"
    ],
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Hóa Khoa"
    ],
    [
     "Thiên Mã"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Hóa Khoa"
    ],
    [
     "Tràng Sinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ],
    [
     "Hóa Quyền"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ],
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ],
    [
     "Thiên Mã"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ],
    [
     "Tràng Sinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Hóa Quyền"
    ],
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Hóa Quyền"
    ],
    [
     "Thiên Mã"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Hóa Quyền"
    ],
    [
     "Tràng Sinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ],
    [
     "Thiên Mã"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ],
    [
     "Tràng Sinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tướng - Lương - Tả - Hữu - Khoa văn, Việt - Khôi - Quyền - Lộc - Mã gần Trường Sinh, điền viên đều vượng tậu thành",
  "nghia": "Điền Trạch hội nhiều cát tinh: nhà đất, tài sản có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Thiên Mã"
    ],
    [
     "Tràng Sinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Hỏa Tinh",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Hỏa Tinh",
    "Địa Không"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Hỏa Tinh",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Hỏa Tinh",
    "Đà La"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Hỏa Tinh",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Linh Tinh",
    "Địa Không"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Linh Tinh",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Linh Tinh",
    "Đà La"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Linh Tinh",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Địa Không",
    "Đà La"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Địa Không",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Địa Kiếp",
    "Đà La"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Địa Kiếp",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Đà La",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Đại Hao",
    "Tiểu Hao"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Đại Hao",
     "Tiểu Hao"
    ],
    [
     "Kiếp Sát"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Đại Hao",
     "Tiểu Hao"
    ],
    [
     "Phục Binh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "motTrong": [
    [
     "Kiếp Sát"
    ],
    [
     "Phục Binh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Hỏa Tinh"
   ],
   "motTrong": [
    [
     "Đại Hao",
     "Tiểu Hao",
     "Kiếp Sát",
     "Phục Binh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Linh Tinh"
   ],
   "motTrong": [
    [
     "Đại Hao",
     "Tiểu Hao",
     "Kiếp Sát",
     "Phục Binh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Địa Không"
   ],
   "motTrong": [
    [
     "Đại Hao",
     "Tiểu Hao",
     "Kiếp Sát",
     "Phục Binh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Địa Kiếp"
   ],
   "motTrong": [
    [
     "Đại Hao",
     "Tiểu Hao",
     "Kiếp Sát",
     "Phục Binh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Đà La"
   ],
   "motTrong": [
    [
     "Đại Hao",
     "Tiểu Hao",
     "Kiếp Sát",
     "Phục Binh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Hỏa - Linh - Không - Kiếp - Đà - Kình lục tinh, Nhị Hao - Kiếp Sát - Phục Binh … vô điền",
  "nghia": "Điền Trạch hội nhiều sát tinh, hao tinh: nhà đất khó tạo dựng, khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Kình Dương"
   ],
   "motTrong": [
    [
     "Đại Hao",
     "Tiểu Hao",
     "Kiếp Sát",
     "Phục Binh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Thái Dương - Xương - Khúc ở đây cung này, điện rồng chầu chực đêm ngày",
  "nghia": "Thái Dương cùng Xương hoặc Khúc ở Quan Lộc: thuận đường khoa cử, công danh, gần chốn công quyền.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Thái Dương"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Âm - Dương - Quyền - Lộc được rành",
  "nghia": "Thái Âm sáng cùng Quyền hoặc Lộc ở Quan Lộc: sự nghiệp có đà, có quyền hạn.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Thái Âm"
   ],
   "sang": true,
   "motTrong": [
    [
     "Hóa Quyền",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Như bằng Hãm địa ắt hành lại hao",
  "nghia": "Thái Âm kém sáng ở Quan Lộc: công việc nhiều hao tổn, khó phát.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Thái Âm"
   ],
   "sang": false
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Âm - Dương - Quyền - Lộc được rành",
  "nghia": "Thái Dương sáng cùng Quyền hoặc Lộc ở Quan Lộc: sự nghiệp có đà, có quyền hạn.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Thái Dương"
   ],
   "sang": true,
   "motTrong": [
    [
     "Hóa Quyền",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Như bằng Hãm địa ắt hành lại hao",
  "nghia": "Thái Dương kém sáng ở Quan Lộc: công việc nhiều hao tổn, khó phát.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Thái Dương"
   ],
   "sang": false
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Liêm Trinh vũ chức, quyền cao",
  "nghia": "Liêm Trinh sáng ở Quan Lộc: hợp ngành võ, kỷ luật, có quyền chức.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Liêm Trinh"
   ],
   "sang": true
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Như bằng ngộ hãm, khỏi nào hình danh",
  "nghia": "Liêm Trinh kém sáng ở Quan Lộc: nên chú ý rủi ro pháp lý, tiếng tăm.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Liêm Trinh"
   ],
   "sang": false
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tham Lang mà gặp Hỏa - Linh, miếu thì phú quý",
  "nghia": "Tham Lang sáng gặp Hỏa hoặc Linh ở Quan Lộc: sự nghiệp bứt phá, có cơ hội lớn.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Tham Lang"
   ],
   "sang": true,
   "motTrong": [
    [
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tham Lang mà gặp Hỏa - Linh, hãm: bình mà thôi",
  "nghia": "Tham Lang kém sáng gặp Hỏa hoặc Linh ở Quan Lộc: sự nghiệp ở mức bình thường.",
  "tone": "trung",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Tham Lang"
   ],
   "sang": false,
   "motTrong": [
    [
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Sát - Cự Tý/ Ngọ ở ngôi, vượng thì vũ chức",
  "nghia": "Thất Sát hoặc Cự Môn sáng ở Tý/Ngọ tại Quan Lộc: hợp ngành võ, kỷ luật.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "motTrong": [
    [
     "Thất Sát",
     "Cự Môn"
    ]
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ],
   "sang": true
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Sát - Cự Tý/ Ngọ ở ngôi, hãm thì hình thương",
  "nghia": "Thất Sát hoặc Cự Môn kém sáng ở Tý/Ngọ tại Quan Lộc: nên chú ý rủi ro nghề nghiệp, thị phi.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "motTrong": [
    [
     "Thất Sát",
     "Cự Môn"
    ]
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ],
   "sang": false
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Phá Quân lao khổ trăm đường",
  "nghia": "Phá Quân ở Quan Lộc: sự nghiệp nhiều vất vả, thay đổi.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Phá Quân"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Nhược ngôi Tý / Ngọ tài thường vượng thay",
  "nghia": "Phá Quân ở Tý/Ngọ tại Quan Lộc: sự nghiệp có xu hướng khá hơn.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Phá Quân"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tham Lang - Xương - Khúc ngày rày, ngộ cung Tỵ / Hợi quan này làm ru",
  "nghia": "Tham Lang cùng Xương hoặc Khúc ở Tỵ/Hợi tại Quan Lộc: công danh khó vững.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Tham Lang"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ],
   "chi": [
    "Tỵ",
    "Hợi"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Liêm - Tham - Đà - Nhận phải lo, phải mang dang díu quanh co bận mình",
  "nghia": "Liêm Trinh, Tham Lang gặp Đà La hoặc Kình Dương ở Quan Lộc: dễ vướng rối rắm, vướng mắc.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Liêm Trinh",
    "Tham Lang"
   ],
   "motTrong": [
    [
     "Đà La",
     "Kình Dương"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Phù - Tang - Không - Kiếp - Hỏa, Linh, Khốc - Hư - Đà - Nhận - Kiếp - Kình - Nhị Hao, Phục Binh - Phá - Tú xúm vào, đoán rằng quyền lộc làm sao cũng hèn",
  "nghia": "Quan Lộc hội nhiều sát tinh: công danh, quyền hạn khó phát, nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Hỏa Tinh",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phù - Tang - Không - Kiếp - Hỏa, Linh, Khốc - Hư - Đà - Nhận - Kiếp - Kình - Nhị Hao, Phục Binh - Phá - Tú xúm vào, đoán rằng quyền lộc làm sao cũng hèn",
  "nghia": "Quan Lộc hội nhiều sát tinh: công danh, quyền hạn khó phát, nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Hỏa Tinh",
    "Địa Không"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phù - Tang - Không - Kiếp - Hỏa, Linh, Khốc - Hư - Đà - Nhận - Kiếp - Kình - Nhị Hao, Phục Binh - Phá - Tú xúm vào, đoán rằng quyền lộc làm sao cũng hèn",
  "nghia": "Quan Lộc hội nhiều sát tinh: công danh, quyền hạn khó phát, nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Hỏa Tinh",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phù - Tang - Không - Kiếp - Hỏa, Linh, Khốc - Hư - Đà - Nhận - Kiếp - Kình - Nhị Hao, Phục Binh - Phá - Tú xúm vào, đoán rằng quyền lộc làm sao cũng hèn",
  "nghia": "Quan Lộc hội nhiều sát tinh: công danh, quyền hạn khó phát, nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Hỏa Tinh",
    "Đà La"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phù - Tang - Không - Kiếp - Hỏa, Linh, Khốc - Hư - Đà - Nhận - Kiếp - Kình - Nhị Hao, Phục Binh - Phá - Tú xúm vào, đoán rằng quyền lộc làm sao cũng hèn",
  "nghia": "Quan Lộc hội nhiều sát tinh: công danh, quyền hạn khó phát, nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Hỏa Tinh",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phù - Tang - Không - Kiếp - Hỏa, Linh, Khốc - Hư - Đà - Nhận - Kiếp - Kình - Nhị Hao, Phục Binh - Phá - Tú xúm vào, đoán rằng quyền lộc làm sao cũng hèn",
  "nghia": "Quan Lộc hội nhiều sát tinh: công danh, quyền hạn khó phát, nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Linh Tinh",
    "Địa Không"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phù - Tang - Không - Kiếp - Hỏa, Linh, Khốc - Hư - Đà - Nhận - Kiếp - Kình - Nhị Hao, Phục Binh - Phá - Tú xúm vào, đoán rằng quyền lộc làm sao cũng hèn",
  "nghia": "Quan Lộc hội nhiều sát tinh: công danh, quyền hạn khó phát, nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Linh Tinh",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phù - Tang - Không - Kiếp - Hỏa, Linh, Khốc - Hư - Đà - Nhận - Kiếp - Kình - Nhị Hao, Phục Binh - Phá - Tú xúm vào, đoán rằng quyền lộc làm sao cũng hèn",
  "nghia": "Quan Lộc hội nhiều sát tinh: công danh, quyền hạn khó phát, nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Linh Tinh",
    "Đà La"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phù - Tang - Không - Kiếp - Hỏa, Linh, Khốc - Hư - Đà - Nhận - Kiếp - Kình - Nhị Hao, Phục Binh - Phá - Tú xúm vào, đoán rằng quyền lộc làm sao cũng hèn",
  "nghia": "Quan Lộc hội nhiều sát tinh: công danh, quyền hạn khó phát, nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Linh Tinh",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phù - Tang - Không - Kiếp - Hỏa, Linh, Khốc - Hư - Đà - Nhận - Kiếp - Kình - Nhị Hao, Phục Binh - Phá - Tú xúm vào, đoán rằng quyền lộc làm sao cũng hèn",
  "nghia": "Quan Lộc hội nhiều sát tinh: công danh, quyền hạn khó phát, nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phù - Tang - Không - Kiếp - Hỏa, Linh, Khốc - Hư - Đà - Nhận - Kiếp - Kình - Nhị Hao, Phục Binh - Phá - Tú xúm vào, đoán rằng quyền lộc làm sao cũng hèn",
  "nghia": "Quan Lộc hội nhiều sát tinh: công danh, quyền hạn khó phát, nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Địa Không",
    "Đà La"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phù - Tang - Không - Kiếp - Hỏa, Linh, Khốc - Hư - Đà - Nhận - Kiếp - Kình - Nhị Hao, Phục Binh - Phá - Tú xúm vào, đoán rằng quyền lộc làm sao cũng hèn",
  "nghia": "Quan Lộc hội nhiều sát tinh: công danh, quyền hạn khó phát, nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Địa Không",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phù - Tang - Không - Kiếp - Hỏa, Linh, Khốc - Hư - Đà - Nhận - Kiếp - Kình - Nhị Hao, Phục Binh - Phá - Tú xúm vào, đoán rằng quyền lộc làm sao cũng hèn",
  "nghia": "Quan Lộc hội nhiều sát tinh: công danh, quyền hạn khó phát, nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Địa Kiếp",
    "Đà La"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phù - Tang - Không - Kiếp - Hỏa, Linh, Khốc - Hư - Đà - Nhận - Kiếp - Kình - Nhị Hao, Phục Binh - Phá - Tú xúm vào, đoán rằng quyền lộc làm sao cũng hèn",
  "nghia": "Quan Lộc hội nhiều sát tinh: công danh, quyền hạn khó phát, nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Địa Kiếp",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phù - Tang - Không - Kiếp - Hỏa, Linh, Khốc - Hư - Đà - Nhận - Kiếp - Kình - Nhị Hao, Phục Binh - Phá - Tú xúm vào, đoán rằng quyền lộc làm sao cũng hèn",
  "nghia": "Quan Lộc hội nhiều sát tinh: công danh, quyền hạn khó phát, nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Đà La",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phù - Tang - Không - Kiếp - Hỏa, Linh, Khốc - Hư - Đà - Nhận - Kiếp - Kình - Nhị Hao, Phục Binh - Phá - Tú xúm vào, đoán rằng quyền lộc làm sao cũng hèn",
  "nghia": "Quan Lộc hội nhiều sát tinh: công danh, quyền hạn khó phát, nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Thiên Khốc",
    "Thiên Hư"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tử, Phủ, Tả, Bật, Âm, Dương, Lương Đồng, Việt, Khôi, Tam Hóa tương phùng, Quý, Quang, Xương, Khúc cùng lành",
  "nghia": "Nô Bộc hội nhiều cát tinh: bạn bè, cấp dưới thiên về đáng tin, giúp đỡ.",
  "tone": "tot",
  "dk": {
   "cung": "Nô Bộc",
   "motTrong": [
    [
     "Tả Phù",
     "Hữu Bật"
    ],
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tử, Phủ, Tả, Bật, Âm, Dương, Lương Đồng, Việt, Khôi, Tam Hóa tương phùng, Quý, Quang, Xương, Khúc cùng lành",
  "nghia": "Nô Bộc hội nhiều cát tinh: bạn bè, cấp dưới thiên về đáng tin, giúp đỡ.",
  "tone": "tot",
  "dk": {
   "cung": "Nô Bộc",
   "motTrong": [
    [
     "Tả Phù",
     "Hữu Bật"
    ],
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tử, Phủ, Tả, Bật, Âm, Dương, Lương Đồng, Việt, Khôi, Tam Hóa tương phùng, Quý, Quang, Xương, Khúc cùng lành",
  "nghia": "Nô Bộc hội nhiều cát tinh: bạn bè, cấp dưới thiên về đáng tin, giúp đỡ.",
  "tone": "tot",
  "dk": {
   "cung": "Nô Bộc",
   "motTrong": [
    [
     "Tả Phù",
     "Hữu Bật"
    ],
    [
     "Ân Quang",
     "Thiên Quý"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tử, Phủ, Tả, Bật, Âm, Dương, Lương Đồng, Việt, Khôi, Tam Hóa tương phùng, Quý, Quang, Xương, Khúc cùng lành",
  "nghia": "Nô Bộc hội nhiều cát tinh: bạn bè, cấp dưới thiên về đáng tin, giúp đỡ.",
  "tone": "tot",
  "dk": {
   "cung": "Nô Bộc",
   "motTrong": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ],
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tử, Phủ, Tả, Bật, Âm, Dương, Lương Đồng, Việt, Khôi, Tam Hóa tương phùng, Quý, Quang, Xương, Khúc cùng lành",
  "nghia": "Nô Bộc hội nhiều cát tinh: bạn bè, cấp dưới thiên về đáng tin, giúp đỡ.",
  "tone": "tot",
  "dk": {
   "cung": "Nô Bộc",
   "motTrong": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ],
    [
     "Ân Quang",
     "Thiên Quý"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tử, Phủ, Tả, Bật, Âm, Dương, Lương Đồng, Việt, Khôi, Tam Hóa tương phùng, Quý, Quang, Xương, Khúc cùng lành",
  "nghia": "Nô Bộc hội nhiều cát tinh: bạn bè, cấp dưới thiên về đáng tin, giúp đỡ.",
  "tone": "tot",
  "dk": {
   "cung": "Nô Bộc",
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ],
    [
     "Ân Quang",
     "Thiên Quý"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tử, Phủ, Tả, Bật, Âm, Dương, Lương Đồng, Việt, Khôi, Tam Hóa tương phùng, Quý, Quang, Xương, Khúc cùng lành",
  "nghia": "Nô Bộc hội nhiều cát tinh: bạn bè, cấp dưới thiên về đáng tin, giúp đỡ.",
  "tone": "tot",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tử, Phủ, Tả, Bật, Âm, Dương, Lương Đồng, Việt, Khôi, Tam Hóa tương phùng, Quý, Quang, Xương, Khúc cùng lành",
  "nghia": "Nô Bộc hội nhiều cát tinh: bạn bè, cấp dưới thiên về đáng tin, giúp đỡ.",
  "tone": "tot",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Thiên Khôi",
    "Thiên Việt"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tử, Phủ, Tả, Bật, Âm, Dương, Lương Đồng, Việt, Khôi, Tam Hóa tương phùng, Quý, Quang, Xương, Khúc cùng lành",
  "nghia": "Nô Bộc hội nhiều cát tinh: bạn bè, cấp dưới thiên về đáng tin, giúp đỡ.",
  "tone": "tot",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tử, Phủ, Tả, Bật, Âm, Dương, Lương Đồng, Việt, Khôi, Tam Hóa tương phùng, Quý, Quang, Xương, Khúc cùng lành",
  "nghia": "Nô Bộc hội nhiều cát tinh: bạn bè, cấp dưới thiên về đáng tin, giúp đỡ.",
  "tone": "tot",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Ân Quang",
    "Thiên Quý"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Vũ tinh mà đóng rành rành bản cung, no thì nó ở hầu ông, đói thì nó bước chẳng mong nói gì",
  "nghia": "Vũ Khúc ở Nô Bộc: người dưới, bạn bè gắn bó lúc thuận lợi, dễ rời khi khó khăn.",
  "tone": "trung",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Liêm Trinh kìa nó càng ghê, làm ân nên oán trăm bề mỉa mai",
  "nghia": "Liêm Trinh ở Nô Bộc: giúp người dễ sinh oán, quan hệ cấp dưới nhiều phức tạp.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Liêm Trinh"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tham Lang vì nó hao tài",
  "nghia": "Tham Lang ở Nô Bộc: quan hệ bạn bè, cấp dưới dễ phát sinh hao tốn.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Tham Lang"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Cự Môn báo oán những loài thị phi",
  "nghia": "Cự Môn ở Nô Bộc: người xung quanh dễ gây thị phi, lời ra tiếng vào.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Cự Môn"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Thất Sát sinh sự thị phi",
  "nghia": "Thất Sát ở Nô Bộc: người dưới, bạn bè dễ gây rắc rối, va chạm.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Thất Sát"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Phá Quân hàn khổ như thì cận quanh",
  "nghia": "Phá Quân ở Nô Bộc: người xung quanh thường hoàn cảnh khó, ít người đắc lực.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Phá Quân"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Địa Không",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Địa Không",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Địa Không",
    "Đà La"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Địa Không",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Địa Không",
    "Thiên Hình"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Địa Không",
    "Phục Binh"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Địa Kiếp",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Địa Kiếp",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Địa Kiếp",
    "Đà La"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Địa Kiếp",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Địa Kiếp",
    "Thiên Hình"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Địa Kiếp",
    "Phục Binh"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Kình Dương",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Kình Dương",
    "Đà La"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Kình Dương",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Kình Dương",
    "Thiên Hình"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Kình Dương",
    "Phục Binh"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Linh Tinh",
    "Đà La"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Linh Tinh",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Linh Tinh",
    "Thiên Hình"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Linh Tinh",
    "Phục Binh"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Đà La",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Đà La",
    "Thiên Hình"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Đà La",
    "Phục Binh"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Hóa Kỵ",
    "Thiên Hình"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Hóa Kỵ",
    "Phục Binh"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Thiên Hình",
    "Phục Binh"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Thiên Khốc",
    "Thiên Hư"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Còn như Không, Kiếp, Phục Binh, Dương, Linh, Đà, Kỵ, Thiên Hình, Khốc, Hư, Nhị Hao, Quan Phủ, Quan Phù, gặp phường trộm cắp phải lo tổn tài",
  "nghia": "Nô Bộc hội nhiều sao xấu: nên chú ý người xung quanh, tránh tổn tài vì quan hệ.",
  "tone": "xau",
  "dk": {
   "cung": "Nô Bộc",
   "sao": [
    "Đại Hao",
    "Tiểu Hao"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Lộc Tồn, Hóa Lộc tốt thì hòa hai",
  "nghia": "Cả Lộc Tồn lẫn Hóa Lộc tại Thiên Di: ra ngoài xã hội, đi xa thường thuận lợi về tiền bạc, dễ được hỗ trợ.",
  "tone": "tot",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Lộc Tồn",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Khúc, Xương, Tử, Phủ, Việt, Khôi, Khoa, Quyền. Âm, Dương, Tả, Hữu rất hiền. Cùng là Đồng, Tướng gần miền quý nhân",
  "nghia": "Thiên Di hội nhiều cát tinh: ra ngoài dễ gặp người giúp đỡ, quan hệ xã hội thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Thiên Di",
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc",
     "Tả Phù",
     "Hữu Bật",
     "Thiên Khôi",
     "Thiên Việt"
    ],
    [
     "Tử Vi",
     "Thiên Phủ",
     "Hóa Khoa",
     "Hóa Quyền",
     "Thái Âm",
     "Thái Dương",
     "Thiên Đồng",
     "Thiên Tướng"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Thiên Cơ lẩn thẩn, khốn thân",
  "nghia": "Thiên Cơ ở Thiên Di: bên ngoài hay phải suy tính, lo toan, nên cân nhắc kỹ trước khi quyết định.",
  "tone": "trung",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Thiên Cơ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Nhược bằng ngộ Cát, mười phần tốt thay",
  "nghia": "Thiên Cơ ở Thiên Di có cát tinh hội: các bất ổn được cải thiện, đường ra ngoài khá hơn.",
  "tone": "tot",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Thiên Cơ"
   ],
   "hoiMot": [
    [
     "Văn Xương",
     "Văn Khúc",
     "Tả Phù",
     "Hữu Bật",
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Liêm Trinh nội trợ, ngoại hay. Đi thì cũng lợi, mới tầy Tham Lang",
  "nghia": "Liêm Trinh ở Thiên Di: ra ngoài, đi xa có xu hướng thuận lợi, hoạt động bên ngoài thường hơn ở nhà.",
  "tone": "trung",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Liêm Trinh"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Lại thêm dâm dục hoang tàng",
  "nghia": "Tham Lang ở Thiên Di: nên chú ý các quan hệ tình cảm, giao tế ở bên ngoài, tránh sa đà.",
  "tone": "trung",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Tham Lang"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Vũ tinh xuất ngoại lại càng được yêu",
  "nghia": "Vũ Khúc ở Thiên Di: ra ngoài, làm ăn xa thường được mến, có lợi về tài chính.",
  "tone": "tot",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Cự Môn khẩu thiệt đảo điên",
  "nghia": "Cự Môn ở Thiên Di: ngoài xã hội dễ gặp thị phi, lời qua tiếng lại, nên thận trọng lời nói.",
  "tone": "xau",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Cự Môn"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Phá Quân, Thất Sát ắt thì chẳng yên",
  "nghia": "Phá Quân hoặc Thất Sát ở Thiên Di: đời sống bên ngoài nhiều biến động, đi lại dịch chuyển nhiều.",
  "tone": "xau",
  "dk": {
   "cung": "Thiên Di",
   "motTrong": [
    [
     "Phá Quân",
     "Thất Sát"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tham Lang, Hóa Kỵ hợp miền. Luận rằng lộ tử, chẳng tuyền được đâu",
  "nghia": "Tham Lang cùng Hóa Kỵ ở Thiên Di: nên chú ý an toàn khi đi lại, đường xá.",
  "tone": "xau",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Tham Lang",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Cự Môn, Linh, Hỏa xung nhau. Tử ư đạo lộ ra màu xo ro",
  "nghia": "Cự Môn gặp Linh hoặc Hỏa tại Thiên Di: nên chú ý an toàn khi đi lại và tránh xung đột nơi công cộng.",
  "tone": "xau",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Cự Môn"
   ],
   "hoiMot": [
    [
     "Linh Tinh",
     "Hỏa Tinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Liêm Trinh, Quan Phủ, Quan Phù. ấy là tử nghiệp chẳng hòa được đâu",
  "nghia": "Liêm Trinh gặp Quan Phù ở Thiên Di: nên chú ý rắc rối pháp lý, thị phi và an toàn khi ra ngoài.",
  "tone": "xau",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Liêm Trinh",
    "Quan Phù"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Bởi Liêm, Sát, Phá vào hầu Thiên Di",
  "nghia": "Liêm Trinh đi cùng Thất Sát ở Thiên Di: nên chú ý đường xá, đi lại nhiều trắc trở.",
  "tone": "xau",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Liêm Trinh",
    "Thất Sát"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Bởi Liêm, Sát, Phá vào hầu Thiên Di",
  "nghia": "Liêm Trinh đi cùng Phá Quân ở Thiên Di: nên chú ý đường xá, đi lại nhiều biến động.",
  "tone": "xau",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Liêm Trinh",
    "Phá Quân"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tứ Sát đóng chính cung tường. ách nguy thêm lại hại đường tổ tông",
  "nghia": "Thiên Di có cả Kình/Đà lẫn Hỏa/Linh: bên ngoài nhiều trở ngại, nên đề phòng, giữ an toàn.",
  "tone": "xau",
  "dk": {
   "cung": "Thiên Di",
   "motTrong": [
    [
     "Kình Dương",
     "Đà La"
    ],
    [
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Phá Quân phường ấy phải lo",
  "nghia": "Phá Quân ở Thiên Di gặp sát tinh: ngoài xã hội nhiều bất ổn, cần cẩn trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Phá Quân"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh",
     "Địa Không",
     "Địa Kiếp"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "âm, Dương phản bội làm màu bất minh. Mệnh cung có Địa Không tinh. Nhan manh mục tật, rành rành phải đương",
  "nghia": "Âm hoặc Dương hãm cùng Địa Không ở Tật Ách: nên chú ý sức khỏe đôi mắt, khám định kỳ.",
  "tone": "xau",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Địa Không"
   ],
   "motTrong": [
    [
     "Thái Âm",
     "Thái Dương"
    ]
   ],
   "sang": false
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Phá, Liêm, Hình, Kỵ, Đà, Dương. Đã đau bên mắt, lại càng bệnh điên",
  "nghia": "Tật Ách hội các sao hình, kỵ, sát: nên chú ý mắt và trạng thái thần kinh, tinh thần.",
  "tone": "xau",
  "dk": {
   "cung": "Tật Ách",
   "motTrong": [
    [
     "Phá Quân",
     "Liêm Trinh"
    ],
    [
     "Thiên Hình",
     "Hóa Kỵ"
    ],
    [
     "Đà La",
     "Kình Dương"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Khúc, Xương, Tả, Hữu vào miền. Việt, Khôi, Tử, Phủ, Khoa, Quyền, Đồng, Lương. Lộc Tồn, Hóa Lộc một phương. ốm thì lại gặp thuốc thang sợ gì",
  "nghia": "Tật Ách có nhiều cát tinh: sức khỏe có chỗ nương, gặp bệnh thường có điều kiện chữa trị.",
  "tone": "tot",
  "dk": {
   "cung": "Tật Ách",
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc",
     "Tả Phù",
     "Hữu Bật",
     "Thiên Khôi",
     "Thiên Việt"
    ],
    [
     "Tử Vi",
     "Thiên Phủ",
     "Hóa Khoa",
     "Hóa Quyền",
     "Thiên Đồng",
     "Thiên Lương",
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Thiên Cơ phải chứng thấp tê",
  "nghia": "Thiên Cơ ở Tật Ách: nên chú ý xương khớp, phong thấp.",
  "tone": "trung",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Thiên Cơ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Thái âm đau bụng, Thái Dương đau đầu",
  "nghia": "Thái Âm hãm ở Tật Ách: nên chú ý vùng bụng, tiêu hóa.",
  "tone": "trung",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Thái Âm"
   ],
   "sang": false
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Thái âm đau bụng, Thái Dương đau đầu",
  "nghia": "Thái Dương hãm ở Tật Ách: nên chú ý đầu, mắt, huyết áp.",
  "tone": "trung",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Thái Dương"
   ],
   "sang": false
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Phá Quân khí huyết bất điều",
  "nghia": "Phá Quân ở Tật Ách: nên chú ý khí huyết, tuần hoàn.",
  "tone": "trung",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Phá Quân"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Đồng, Lương, hàn, nhiệt là điều phải lo",
  "nghia": "Đồng và Lương ở Tật Ách: nên chú ý bệnh theo thời tiết, nóng lạnh thất thường.",
  "tone": "trung",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Thiên Đồng",
    "Thiên Lương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tướng thì đau ở bì phu",
  "nghia": "Thiên Tướng ở Tật Ách: nên chú ý da liễu.",
  "tone": "trung",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Thiên Tướng"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Đà La, Dương Nhận ít yên. Đau chân, nhức mắt chẳng hiền được đâu",
  "nghia": "Đà La và Kình Dương cùng ở Tật Ách: nên chú ý chân tay và mắt.",
  "tone": "xau",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Đà La",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tham Lang Tật ách xông pha. Lưng, chân có bệnh, chẳng hòa được chăng",
  "nghia": "Tham Lang ở Tật Ách: nên chú ý lưng và chân.",
  "tone": "trung",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Tham Lang"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Cự Môn mặt vết rõ ràng. Tứ chi có tật xấu chàng hổ ai",
  "nghia": "Cự Môn ở Tật Ách: nên chú ý chấn thương, vết thương ngoài da và tay chân.",
  "tone": "trung",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Cự Môn"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Kỵ, Hình đau mắt chẳng sai",
  "nghia": "Hóa Kỵ cùng Thiên Hình ở Tật Ách: nên chú ý đôi mắt.",
  "tone": "xau",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Hóa Kỵ",
    "Thiên Hình"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Vũ, Lộc, Thiên Mã cùng gia. Tử, Phủ mà gặp, phương xa nhiều tiền",
  "nghia": "Vũ Khúc, Thiên Mã cùng Lộc ở Tài Bạch: tiền thường đến từ nơi xa, từ đi lại, kinh doanh.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Vũ Khúc",
    "Thiên Mã"
   ],
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tử Vi, Tả, Hữu rất hiền",
  "nghia": "Tử Vi gặp Tả Phù hoặc Hữu Bật ở Tài Bạch: tài chính vững, có người hỗ trợ.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Tử Vi"
   ],
   "motTrong": [
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Lâm Quan Tài Bạch ngoài miền lợi danh",
  "nghia": "Lâm Quan ở Tài Bạch: tiền bạc gắn với danh tiếng, vị thế.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Lâm Quan"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Thái âm mà với Vũ tinh. Luận bàn cũng phải rành rành chẳng sai",
  "nghia": "Thái Âm và Vũ Khúc cùng hội ở Tài Bạch: thiên về tích lũy, tài chính khá.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "hoi": [
    "Thái Âm",
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "âm, Dương, Tả, Hữu giáp lai. Có sao Đế Vượng cùng ngồi chính trung. Luận làm địch quốc phú phong",
  "nghia": "Đế Vượng ở Tài Bạch, được Tả Phù Hữu Bật kẹp hai bên: tài lộc có xu hướng dồi dào.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Đế Vượng"
   ],
   "giap": [
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Đồng, Cơ, Vũ Khúc, tay không làm giàu",
  "nghia": "Đồng, Cơ, Vũ Khúc hội ở Tài Bạch: có xu hướng gây dựng từ ít vốn bằng khả năng cá nhân.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "hoi": [
    "Thiên Đồng",
    "Thiên Cơ",
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "âm, Dương tài vượng khá mau",
  "nghia": "Thái Âm hoặc Thái Dương sáng ở Tài Bạch: tài chính có đà tăng khá nhanh.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "motTrong": [
    [
     "Thái Âm",
     "Thái Dương"
    ]
   ],
   "sang": true
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Nhược bằng hãm địa, có hầu lại không",
  "nghia": "Thái Âm hoặc Thái Dương hãm ở Tài Bạch: tiền dễ có rồi mất, nên chú ý giữ gìn.",
  "tone": "xau",
  "dk": {
   "cung": "Tài Bạch",
   "motTrong": [
    [
     "Thái Âm",
     "Thái Dương"
    ]
   ],
   "sang": false
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Lộc Tồn, Hóa Lộc giàu sang trăm đường",
  "nghia": "Cả Lộc Tồn và Hóa Lộc ở Tài Bạch: nhiều nguồn thu, tài chính thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Lộc Tồn",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Phá Quân tụ tán chẳng thường",
  "nghia": "Phá Quân ở Tài Bạch: tiền lúc vào lúc ra, thu chi biến động.",
  "tone": "trung",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Phá Quân"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Việt, Khôi, Tả, Hữu, Khúc, Xương, Khoa, Quyền. Với sao Hóa Lộc ở miền. ấy là phát phúc, Tài, Điền vượng hay",
  "nghia": "Hóa Lộc cùng các cát tinh ở Tài Bạch: tài lộc và nhà đất có thể thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Hóa Lộc"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc",
     "Tả Phù",
     "Hữu Bật",
     "Thiên Khôi",
     "Thiên Việt",
     "Hóa Khoa",
     "Hóa Quyền"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Lộc Tồn, Vũ Khúc đóng rầy Tài cung. ấy là đại phát phú ông",
  "nghia": "Lộc Tồn đồng cung Vũ Khúc ở Tài Bạch: thế tài lộc mạnh, có khả năng tích lũy lớn.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Lộc Tồn",
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Kiếp, Không ở đấy, bần cùng chẳng sai",
  "nghia": "Địa Kiếp hoặc Địa Không ở Tài Bạch: tiền dễ hao hụt, nên chú ý chi tiêu, đầu tư.",
  "tone": "xau",
  "dk": {
   "cung": "Tài Bạch",
   "motTrong": [
    [
     "Địa Kiếp",
     "Địa Không"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Dương, Đà, Linh, Hỏa tán tài",
  "nghia": "Sát tinh (Kình/Đà cùng Hỏa/Linh) ở Tài Bạch: dễ hao tán, nên cẩn trọng với tiền.",
  "tone": "xau",
  "dk": {
   "cung": "Tài Bạch",
   "motTrong": [
    [
     "Kình Dương",
     "Đà La"
    ],
    [
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Phủ, Vi, Đế Vượng, Thiên Đồng. Khúc, Xương, Tả, Hữu luận cùng năm tên",
  "nghia": "Tử Tức có sao sáng cùng văn tinh hay phụ tinh: đường con cái có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Tử Tức",
   "motTrong": [
    [
     "Thiên Phủ",
     "Tử Vi",
     "Đế Vượng",
     "Thiên Đồng"
    ],
    [
     "Văn Xương",
     "Văn Khúc",
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Dương, âm, cùng ngộ Lâm Quan một đoàn",
  "nghia": "Thái Dương hoặc Thái Âm đi cùng Lâm Quan ở Tử Tức: đường con cái có xu hướng khá.",
  "tone": "tot",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Lâm Quan"
   ],
   "motTrong": [
    [
     "Thái Âm",
     "Thái Dương"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tướng, Lương, Quan Đới rõ ràng. ấy là cung được ba hàng thành thân",
  "nghia": "Thiên Tướng hoặc Thiên Lương cùng Quan Đới ở Tử Tức: con cái có xu hướng trưởng thành.",
  "tone": "tot",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Quan Đới"
   ],
   "motTrong": [
    [
     "Thiên Tướng",
     "Thiên Lương"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Khoa, Quyền, thêm Lộc tinh trần. Việt, Khôi, Thiên Mã mười phần quý nhân",
  "nghia": "Tử Tức hội Khoa/Quyền, Lộc và Khôi/Việt/Mã: con cái có xu hướng thành đạt, gặp người giúp.",
  "tone": "tot",
  "dk": {
   "cung": "Tử Tức",
   "motTrong": [
    [
     "Hóa Khoa",
     "Hóa Quyền"
    ],
    [
     "Hóa Lộc",
     "Lộc Tồn"
    ],
    [
     "Thiên Khôi",
     "Thiên Việt",
     "Thiên Mã"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Nhân thê trí phú bởi phùng Thái Dương",
  "nghia": "Thái Dương ở Phu Thê: bạn đời có xu hướng thông minh, có điều kiện.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Thái Dương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "âm phùng Xương, Khúc ngày rày. Cung trăng bẻ quế xem tày lên tiên",
  "nghia": "Thái Âm gặp Xương hoặc Khúc ở Phu Thê: bạn đời có xu hướng tài hoa, duyên dáng.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Thái Âm"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tử, Phủ hòa hợp bách niên",
  "nghia": "Tử Vi và Thiên Phủ ở Phu Thê: hôn nhân có xu hướng hòa hợp, bền.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Tử Vi",
    "Thiên Phủ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Đồng, Cơ trai gái kết nguyền cũng xinh",
  "nghia": "Thiên Đồng và Thiên Cơ hội ở Phu Thê: đôi lứa có xu hướng hòa hợp, dễ thương.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "hoi": [
    "Thiên Đồng",
    "Thiên Cơ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Âm, Dương miếu địa sớm thành nhân duyên",
  "nghia": "Thái Âm hoặc Thái Dương sáng ở Phu Thê: duyên có xu hướng đến sớm.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "motTrong": [
    [
     "Thái Âm",
     "Thái Dương"
    ]
   ],
   "sang": true
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Nhược bằng hãm địa sau nên",
  "nghia": "Thái Âm hoặc Thái Dương hãm ở Phu Thê: duyên có xu hướng đến muộn, nên kiên nhẫn.",
  "tone": "trung",
  "dk": {
   "cung": "Phu Thê",
   "motTrong": [
    [
     "Thái Âm",
     "Thái Dương"
    ]
   ],
   "sang": false
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Vũ tinh gia Sát đôi bên khiếm hòa",
  "nghia": "Vũ Khúc gặp sát tinh ở Phu Thê: nên chú ý giữ hòa khí, tránh cứng nhắc.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Vũ Khúc"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tướng, Lương sớm nổi thành gia",
  "nghia": "Thiên Tướng và Thiên Lương hội ở Phu Thê: có xu hướng sớm lập gia đình.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "hoi": [
    "Thiên Tướng",
    "Thiên Lương"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Khúc, Xương, Tả, Hữu tinh trần. Thông minh giai lão trăm phần tốt thay",
  "nghia": "Phu Thê có văn tinh và Tả Hữu: bạn đời thông minh, hôn nhân có xu hướng bền.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ],
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Lộc Tồn muộn vợ nhưng hay",
  "nghia": "Lộc Tồn ở Phu Thê: duyên có xu hướng đến muộn nhưng ổn định.",
  "tone": "trung",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Lộc Tồn"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tham Lang sớm lấy người rày khắc xung",
  "nghia": "Tham Lang ở Phu Thê: nên chú ý, duyên sớm dễ lắm va chạm; kết hôn muộn thường hợp hơn.",
  "tone": "trung",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Tham Lang"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tham mà gặp Sát tối hung",
  "nghia": "Tham Lang gặp sát tinh ở Phu Thê: nên chú ý nhiều về hòa hợp vợ chồng.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Tham Lang"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh",
     "Thất Sát"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Phá Quân sớm khắc, ít lòng chính chuyên",
  "nghia": "Phá Quân ở Phu Thê: nên chú ý biến động tình cảm, cần giữ sự chung thủy.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Phá Quân"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Liêm Trinh phải khắc ba tên",
  "nghia": "Liêm Trinh ở Phu Thê: nên chú ý đường tình cảm nhiều thăng trầm.",
  "tone": "trung",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Liêm Trinh"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Khôi, Việt, gặp Lộc, Quyền, Khoa. Quý nhân sánh mấy duyên ta tốt lành",
  "nghia": "Khôi/Việt cùng Lộc, Quyền hoặc Khoa ở Phu Thê: bạn đời có xu hướng quý nhân, duyên tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "motTrong": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ],
    [
     "Hóa Lộc",
     "Lộc Tồn"
    ],
    [
     "Hóa Quyền",
     "Hóa Khoa"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Linh Tinh, Kỵ, Hỏa, Đà, Kình. Khốc, Hư, Không, Kiếp đã rành khắc xung",
  "nghia": "Phu Thê hội sát tinh cùng các sao hung: nên chú ý hòa hợp, nhẫn nhịn trong hôn nhân.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "motTrong": [
    [
     "Linh Tinh",
     "Hỏa Tinh",
     "Kình Dương",
     "Đà La"
    ],
    [
     "Hóa Kỵ",
     "Thiên Khốc",
     "Thiên Hư",
     "Địa Không",
     "Địa Kiếp"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Tam phương mà gặp Sát, Hình. Ly hương kết phối rành rành chẳng sai",
  "nghia": "Phu Thê hội Thiên Hình và sát tinh: duyên có thể ở xa quê, nên chú ý.",
  "tone": "trung",
  "dk": {
   "cung": "Phu Thê",
   "hoi": [
    "Thiên Hình"
   ],
   "hoiMot": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Triệt, Không cũng thấy trong miền bản cung. Bắt đầu thì đoán khắc xung",
  "nghia": "Triệt cùng Địa Không ở Huynh Đệ: anh em có xu hướng ít hoặc xa cách, nên chú ý.",
  "tone": "trung",
  "dk": {
   "cung": "Huynh Đệ",
   "sao": [
    "Triệt"
   ],
   "motTrong": [
    [
     "Địa Không",
     "Thiên Không"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Hoặc gia Địa Kiếp, Thiên Không chẳng nhiều",
  "nghia": "Địa Kiếp và Thiên Không ở Huynh Đệ: anh em có xu hướng ít.",
  "tone": "trung",
  "dk": {
   "cung": "Huynh Đệ",
   "sao": [
    "Địa Kiếp",
    "Thiên Không"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tướng Quân, Lộc, Mã cũng nhiều. Anh em giàu có phú nhiêu được dùng",
  "nghia": "Tướng Quân, Thiên Mã cùng Lộc ở Huynh Đệ: anh em có xu hướng khá giả.",
  "tone": "tot",
  "dk": {
   "cung": "Huynh Đệ",
   "sao": [
    "Tướng Quân",
    "Thiên Mã"
   ],
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tướng Quân, Hóa Lộc tương phùng. Anh em có kẻ ở trong cửa quyền",
  "nghia": "Tướng Quân cùng Hóa Lộc ở Huynh Đệ: trong anh em có người làm việc quyền chức.",
  "tone": "tot",
  "dk": {
   "cung": "Huynh Đệ",
   "sao": [
    "Tướng Quân",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Trường Sinh, Đế Vượng lâm liền. Anh em có kẻ tất nhiên yên bài",
  "nghia": "Tràng Sinh hoặc Đế Vượng ở Huynh Đệ: anh em có xu hướng ổn định, có chỗ đứng.",
  "tone": "tot",
  "dk": {
   "cung": "Huynh Đệ",
   "motTrong": [
    [
     "Tràng Sinh",
     "Đế Vượng"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Thái Dương, Thái âm giáp Thai. Sinh đôi một đối chẳng sai tí nào",
  "nghia": "Thai ở Huynh Đệ được Thái Dương và Thái Âm kẹp hai bên: có khả năng anh em gần tuổi hoặc song sinh.",
  "tone": "trung",
  "dk": {
   "cung": "Huynh Đệ",
   "sao": [
    "Thai"
   ],
   "giap": [
    [
     "Thái Dương",
     "Thái Âm"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Gặp sao Hóa Kỵ khiếm hòa",
  "nghia": "Hóa Kỵ ở Huynh Đệ: anh em dễ bất hòa, nên chú ý nhường nhịn.",
  "tone": "xau",
  "dk": {
   "cung": "Huynh Đệ",
   "sao": [
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Thiên Hình thường có trong nhà giành nhau",
  "nghia": "Thiên Hình ở Huynh Đệ: trong nhà dễ tranh chấp, nên chú ý.",
  "tone": "xau",
  "dk": {
   "cung": "Huynh Đệ",
   "sao": [
    "Thiên Hình"
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ],
  "pho": true
 },
 {
  "phu": "Lộc, Mã buôn bán làm giàu",
  "nghia": "Thiên Mã cùng Lộc ở Huynh Đệ: anh em có xu hướng buôn bán, làm ăn khá.",
  "tone": "tot",
  "dk": {
   "cung": "Huynh Đệ",
   "sao": [
    "Thiên Mã"
   ],
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Xương, Khúc, Thái Tuế đều yên. Có người xã trưởng khôn ngoan ai cùng",
  "nghia": "Thái Tuế cùng Xương hoặc Khúc ở Huynh Đệ: trong anh em có người sáng suốt, có vai trò trong cộng đồng.",
  "tone": "tot",
  "dk": {
   "cung": "Huynh Đệ",
   "sao": [
    "Thái Tuế"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Tuyệt, Không, Không, Kiếp chính cung. Luận làm nghĩa dưỡng anh em",
  "nghia": "Tuyệt cùng Không, Kiếp ở Huynh Đệ: anh em ruột ít, có thể là anh em kết nghĩa hoặc nuôi.",
  "tone": "trung",
  "dk": {
   "cung": "Huynh Đệ",
   "sao": [
    "Tuyệt"
   ],
   "motTrong": [
    [
     "Địa Không",
     "Thiên Không"
    ],
    [
     "Địa Kiếp"
    ]
   ]
  },
  "kenh": [
   "Phú Tử vi thông thơ"
  ]
 },
 {
  "phu": "Yểu thì Văn Khúc ngộ Thương khá hiềm",
  "nghia": "Văn Khúc gặp Thiên Thương ở Mệnh: nên chú ý giữ gìn sức khỏe và tinh thần.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Văn Khúc",
    "Thiên Thương"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Thân Mệnh vị đã Liêm lại Tướng (Tướng Quân). Đấng anh hùng vũ dũng ai bằng",
  "nghia": "Liêm Trinh và Tướng Quân cùng ở Mệnh: tính quả cảm, dũng mãnh, hợp việc cần bản lĩnh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh",
    "Tướng Quân"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Thân Mệnh vị đã Liêm lại Tướng (Tướng Quân). Đấng anh hùng vũ dũng ai bằng",
  "nghia": "Liêm Trinh và Tướng Quân cùng ở Thân: tính quả cảm, dũng mãnh, hợp việc cần bản lĩnh.",
  "tone": "tot",
  "dk": {
   "cung": "Thân",
   "sao": [
    "Liêm Trinh",
    "Tướng Quân"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Dần Thân Lương hội Thiên Đồng, Hợp tuổi Canh Giáp lai cùng Dần Thân",
  "nghia": "Đồng Lương ở Dần/Thân, tuổi Canh hoặc Giáp: thế Đồng Lương được hợp, có xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Dần",
    "Thân"
   ],
   "sao": [
    "Thiên Đồng",
    "Thiên Lương"
   ],
   "canNam": [
    "Canh",
    "Giáp"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Sao Cự tú Tuất Thìn rất kỵ, Nhưng là thị thị phi phi",
  "nghia": "Cự Môn ở Thìn/Tuất (hãm) tại Mệnh: dễ vướng thị phi, tranh luận, nên thận trọng lời nói.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Cự Môn"
   ],
   "chi": [
    "Thìn",
    "Tuất"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Lục Châu thủa lên lầu phải ách, Thấy Tang Môn Điếu Khách mà lo",
  "nghia": "Hạn gặp Tang Môn và Điếu Khách: nên chú ý chuyện buồn, lo toan, giữ tinh thần vững.",
  "tone": "xau",
  "dk": {
   "cung": "Hạn",
   "sao": [
    "Tang Môn",
    "Điếu Khách"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Dã tràng không tội phải tù, Trong năm Thái Tuế Quan Phù đi qua",
  "nghia": "Hạn gặp Thái Tuế cùng Quan Phù: nên chú ý giấy tờ, kiện tụng, thị phi.",
  "tone": "xau",
  "dk": {
   "cung": "Hạn",
   "sao": [
    "Thái Tuế",
    "Quan Phù"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Tham Vũ đất Võng La gặp hạn",
  "nghia": "Hạn ở Thìn/Tuất có Tham Lang và Vũ Khúc hội: nên chú ý trở ngại, ràng buộc trong năm hạn.",
  "tone": "xau",
  "dk": {
   "cung": "Hạn",
   "chi": [
    "Thìn",
    "Tuất"
   ],
   "hoi": [
    "Tham Lang",
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ],
  "pho": true
 },
 {
  "phu": "Vận hành Địa Kiếp Địa Không, Người hiền có thủa đường cùng khóc vang",
  "nghia": "Hạn gặp cả Địa Kiếp và Địa Không: nên chú ý hao tổn, thử thách, giữ thế phòng thủ.",
  "tone": "xau",
  "dk": {
   "cung": "Hạn",
   "sao": [
    "Địa Kiếp",
    "Địa Không"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Cung Tị Hợi Khúc Sương tọa thủ, Yêu nên vì đấy có Liêm Trinh",
  "nghia": "Xương Khúc ở Mệnh tại Tỵ/Hợi, có Liêm Trinh hội: nên chú ý sức khỏe và giữ nhịp sống ổn định.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Tỵ",
    "Hợi"
   ],
   "sao": [
    "Văn Xương",
    "Văn Khúc"
   ],
   "hoi": [
    "Liêm Trinh"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Mệnh người chẳng đáng công danh, Cát tinh chẳng gặp hung tinh lai trùng",
  "nghia": "Mệnh không có cát tinh hội mà có hung tinh: công danh phải tự lực, nhiều thử thách.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "khong": [
    "Văn Xương",
    "Văn Khúc",
    "Tả Phù",
    "Hữu Bật",
    "Thiên Khôi",
    "Thiên Việt"
   ],
   "hoiMot": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh",
     "Địa Không",
     "Địa Kiếp"
    ]
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ],
  "pho": true
 },
 {
  "phu": "Chập chững ấy Địa Không thủ Mệnh, Số như thuyền chảy ra khơi",
  "nghia": "Địa Không thủ Mệnh: đường đời nhiều thăng trầm, hay phải bắt đầu lại.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Địa Không"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ],
  "pho": true
 },
 {
  "phu": "Kiếp thêm Sát, Kỵ ở nơi Mệnh ngồi",
  "nghia": "Địa Kiếp cùng sát tinh hoặc Hóa Kỵ ở Mệnh: nhiều trắc trở, cần thận trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Địa Kiếp"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh",
     "Hóa Kỵ"
    ]
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Sao Không Kiếp sáng soi đến đó, Dẫu anh hào quý phú ai khen",
  "nghia": "Địa Không và Địa Kiếp cùng hội Mệnh: dù có tài cũng nhiều khó khăn, khó được công nhận.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ],
  "pho": true
 },
 {
  "phu": "Mệnh bà Lã Hậu chuyên quyền, Lương phùng Lộc, Mã thủ viên rõ ràng",
  "nghia": "Nữ mệnh có Thiên Lương, Thiên Mã cùng Lộc: tính quyết đoán, có xu hướng nắm quyền.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Lương",
    "Thiên Mã"
   ],
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Sao Văn Khúc, Văn Sương tam hợp, Nàng Quí Phi sắc đẹp nên yêu",
  "nghia": "Nữ mệnh có Xương, Khúc hội: nét duyên dáng, tài hoa.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "hoi": [
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ],
  "pho": true
 },
 {
  "phu": "Nết dâm số gái yêu kiều, Mệnh cung Thiên Mã Lương chầu không sai",
  "nghia": "Nữ mệnh có Thiên Mã cùng Thiên Lương: nên chú ý đời sống tình cảm, giữ sự tỉnh táo.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Mã",
    "Thiên Lương"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Số quý hiển Mệnh giai Nhật, Nguyệt, Có Khúc Sương, Tả Hữu giáp biên",
  "nghia": "Nhật Nguyệt tại Mệnh được Xương Khúc kẹp hai bên: có xu hướng quý hiển.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương",
    "Thái Âm"
   ],
   "giap": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Số quý hiển Mệnh giai Nhật, Nguyệt, Có Khúc Sương, Tả Hữu giáp biên",
  "nghia": "Nhật Nguyệt tại Mệnh được Tả Hữu kẹp hai bên: có xu hướng quý hiển.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương",
    "Thái Âm"
   ],
   "giap": [
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Sao Đại Hao Thiên Lương hãm hạn, Ác sát thêm đói khó ai qua",
  "nghia": "Hạn gặp Đại Hao và Thiên Lương hãm cùng sát tinh: nên chú ý hao tổn tài chính.",
  "tone": "xau",
  "dk": {
   "cung": "Hạn",
   "sao": [
    "Đại Hao",
    "Thiên Lương"
   ],
   "sang": false,
   "motTrong": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Tuất Thìn Sương, Khúc, Linh, Đà, Sát gia Mệnh hạn giang hà trầm vong",
  "nghia": "Mệnh ở Thìn/Tuất có Xương Khúc gặp Linh hoặc Đà: nên chú ý an toàn khi ở gần sông nước.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Thìn",
    "Tuất"
   ],
   "hoi": [
    "Văn Xương",
    "Văn Khúc"
   ],
   "motTrong": [
    [
     "Linh Tinh",
     "Đà La"
    ]
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Liêm thêm Sát, Kỵ, Kiếp, Không, Mệnh an Tị Hợi bình bồng bốn phương",
  "nghia": "Liêm Trinh ở Tỵ/Hợi gặp Hóa Kỵ và Kiếp/Không: đời nhiều trôi nổi, nên tìm sự ổn định.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Tỵ",
    "Hợi"
   ],
   "sao": [
    "Liêm Trinh"
   ],
   "motTrong": [
    [
     "Hóa Kỵ"
    ],
    [
     "Địa Kiếp",
     "Địa Không"
    ]
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Dương, Linh, Hỏa ở Thân, Mệnh vị, Hạn gặp hung ải tử xấu sao",
  "nghia": "Kình Dương cùng Linh hoặc Hỏa ở Mệnh: nên chú ý an toàn, tránh nóng vội khi gặp hạn xấu.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương"
   ],
   "motTrong": [
    [
     "Linh Tinh",
     "Hỏa Tinh"
    ]
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Dương, Linh, Hỏa ở Thân, Mệnh vị, Hạn gặp hung ải tử xấu sao",
  "nghia": "Kình Dương cùng Linh hoặc Hỏa ở Thân: nên chú ý an toàn, tránh nóng vội khi gặp hạn xấu.",
  "tone": "xau",
  "dk": {
   "cung": "Thân",
   "sao": [
    "Kình Dương"
   ],
   "motTrong": [
    [
     "Linh Tinh",
     "Hỏa Tinh"
    ]
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Số hèn chẳng khó thì phiêu, Địa Không đơn thủ hợp nhiều hung tinh",
  "nghia": "Địa Không thủ Mệnh gặp nhiều hung tinh hội: đường đời gian nan, hay thay đổi.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Địa Không"
   ],
   "hoiMot": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh",
     "Địa Kiếp"
    ]
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Nay những số yểu hình rất xấu, Vì Ngọ cùng Mão Dậu gặp Dương",
  "nghia": "Kình Dương ở Ngọ, Mão hoặc Dậu tại Mệnh: nên chú ý sức khỏe và an toàn.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương"
   ],
   "chi": [
    "Ngọ",
    "Mão",
    "Dậu"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Dần Thân Tị Hợi bốn phương, Đà La hãm xấu ngộ Dương nhận kìa",
  "nghia": "Đà La ở Dần/Thân/Tỵ/Hợi tại Mệnh gặp Kình Dương: nên chú ý trắc trở, sức khỏe.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đà La"
   ],
   "chi": [
    "Dần",
    "Thân",
    "Tỵ",
    "Hợi"
   ],
   "hoi": [
    "Kình Dương"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Phá Quân miếu đâu bằng Tí Ngọ, Thủ Mệnh thì tước lộc thêm ban",
  "nghia": "Phá Quân ở Tý/Ngọ thủ Mệnh: thế miếu vượng, có xu hướng đạt chức vị, lộc.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Phá Quân"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Sương, Tham Tị Hợi sá bàn, Đóng vào cung Mệnh cung Quan càng rầu",
  "nghia": "Tham Lang cùng Văn Xương ở Tỵ/Hợi tại Mệnh: nên chú ý đường công danh nhiều trắc trở.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Tỵ",
    "Hợi"
   ],
   "sao": [
    "Tham Lang",
    "Văn Xương"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Sương, Tham Tị Hợi sá bàn, Đóng vào cung Mệnh cung Quan càng rầu",
  "nghia": "Tham Lang cùng Văn Xương ở Tỵ/Hợi tại Quan Lộc: nên chú ý công việc nhiều trắc trở.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "chi": [
    "Tỵ",
    "Hợi"
   ],
   "sao": [
    "Tham Lang",
    "Văn Xương"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Mệnh Thất Sát như Triều Đẩu đó, Nơi Dần Thân Tí Ngọ thực hay",
  "nghia": "Thất Sát thủ Mệnh ở Dần, Thân, Tý, Ngọ: thế vững, có xu hướng nghiệp lớn, bản lĩnh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát"
   ],
   "chi": [
    "Dần",
    "Thân",
    "Tý",
    "Ngọ"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Số Sương, Khúc, Cửu trùng cận quý, Chốn Sửu Mùi Mệnh tị cát phù",
  "nghia": "Mệnh ở Sửu/Mùi có Xương Khúc hội: gần người quyền quý, có tài văn chương.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Sửu",
    "Mùi"
   ],
   "hoi": [
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Mão Thìn Tị dãi Kim Ô",
  "nghia": "Thái Dương thủ Mệnh ở Mão, Thìn, Tỵ: thế sáng, tính rộng rãi, có xu hướng được trọng vọng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương"
   ],
   "chi": [
    "Mão",
    "Thìn",
    "Tỵ"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Dậu cùng Tuất Hợi Nguyệt phô bóng Hằng",
  "nghia": "Thái Âm thủ Mệnh ở Dậu, Tuất, Hợi: thế sáng, có xu hướng tài hoa, giàu tình cảm.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Âm"
   ],
   "chi": [
    "Dậu",
    "Tuất",
    "Hợi"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Cung Thê Thiếp chi bằng Hóa Lộc",
  "nghia": "Hóa Lộc ở Phu Thê: duyên phối ngẫu thuận, bạn đời mang lại nhiều điều tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Hãm Tị Hợi Vũ đa tài nghệ",
  "nghia": "Vũ Khúc ở Tỵ/Hợi tại Mệnh: nghiêng về tay nghề, kỹ năng thực hành.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc"
   ],
   "chi": [
    "Tỵ",
    "Hợi"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Tham Lang làm đồ tể mà thôi",
  "nghia": "Tham Lang ở Tỵ/Hợi tại Mệnh: nghiêng về nghề lao động, thực hành hơn là quản trị.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang"
   ],
   "chi": [
    "Tỵ",
    "Hợi"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Mệnh mình có Lộc mình giàu, Trong cung tọa thủ sang giàu chung thân",
  "nghia": "Lộc Tồn hoặc Hóa Lộc thủ Mệnh: có xu hướng tự gây dựng tài chính ổn định.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ],
  "pho": true
 },
 {
  "phu": "Việt Khôi cung Ngọ ngộ cùng Tử Sương",
  "nghia": "Tử Vi ở Ngọ thủ Mệnh, có Khôi/Việt cùng Văn Xương hội: có xu hướng quý hiển, vị thế cao.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Ngọ"
   ],
   "sao": [
    "Tử Vi"
   ],
   "hoi": [
    "Văn Xương"
   ],
   "hoiMot": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Sao Tam Hóa nhất là Hóa Lộc, Vào mộ phương vô dụng sao hay",
  "nghia": "Hóa Lộc cùng Mộ ở Mệnh: tác dụng Lộc bị giảm, tài lộc khó phát huy.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Lộc",
    "Mộ"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Tử Vi sao quý thay mà, Tuất Thìn gặp Phá lại là hư danh",
  "nghia": "Tử Vi ở Thìn/Tuất tại Mệnh, gặp Phá Quân: danh nhiều hơn thực, nên chú ý nền tảng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "chi": [
    "Thìn",
    "Tuất"
   ],
   "hoi": [
    "Phá Quân"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Sương, Khúc, Phá gặp Hình, Kỵ, Sát, Chốn Mão Thìn Dậu Tuất lao đao",
  "nghia": "Xương Khúc và Phá Quân hội cùng Hình, Kỵ, sát tinh ở Mão/Thìn/Dậu/Tuất: nhiều vất vả.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Mão",
    "Thìn",
    "Dậu",
    "Tuất"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ],
   "hoi": [
    "Phá Quân"
   ],
   "hoiMot": [
    [
     "Thiên Hình",
     "Hóa Kỵ",
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Mộ trung Vũ Khúc, Tham Lang, Ngoài ba mươi tuổi giàu sang đùng đùng",
  "nghia": "Vũ Khúc và Tham Lang ở Sửu/Mùi tại Mệnh: có xu hướng phát đạt muộn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Sửu",
    "Mùi"
   ],
   "sao": [
    "Vũ Khúc",
    "Tham Lang"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Đồng phản bội ở đầu cung Tuất, Người tuổi Đinh lại rất vinh tôn",
  "nghia": "Thiên Đồng ở Tuất tại Mệnh, tuổi Đinh: có xu hướng được vinh hiển.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Tuất"
   ],
   "sao": [
    "Thiên Đồng"
   ],
   "canNam": [
    "Đinh"
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Âm, Dương phản bội thất huy, Bản cung tam hợp tốt thì cũng nên",
  "nghia": "Thái Âm hoặc Thái Dương hãm ở Mệnh nhưng có cát tinh hội: vẫn có thể khá.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Thái Âm",
     "Thái Dương"
    ]
   ],
   "sang": false,
   "hoiMot": [
    [
     "Văn Xương",
     "Văn Khúc",
     "Tả Phù",
     "Hữu Bật",
     "Thiên Khôi",
     "Thiên Việt",
     "Hóa Lộc",
     "Hóa Quyền",
     "Hóa Khoa"
    ]
   ]
  },
  "kenh": [
   "Thơ phú Tử vi (tuvibatquai)"
  ]
 },
 {
  "phu": "Tam Hóa liên châu, phúc tất trùng lai",
  "nghia": "Hóa Lộc, Hóa Quyền, Hóa Khoa đóng ba cung liền nhau, Mệnh ở trong đó: phúc lộc đến nối tiếp, bền lâu.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "lienChau": true
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Tam Hóa liên châu, phúc tất trùng lai",
  "nghia": "Hóa Lộc, Hóa Quyền, Hóa Khoa đóng ba cung liền nhau, Thân ở trong đó: phúc lộc đến nối tiếp, bền lâu.",
  "tone": "tot",
  "dk": {
   "cung": "Thân",
   "lienChau": true
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 },
 {
  "phu": "Khoa minh Lộc ám, vị liệt tam đài",
  "nghia": "Hóa Khoa ở Mệnh, cung nhị hợp có Lộc ngầm trợ: dễ có danh vị, được trọng dụng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Khoa"
   ],
   "nhiHop": [
    "Lộc Tồn",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú Lộc Quyền Khoa Kỵ"
  ]
 }
];
