/**
 * Câu phú Tử vi cổ (Hán Việt, phạm vi công cộng) mà các thầy trên YouTube trích dẫn; điều kiện để
 * app tự nhận ra trên lá số. Câu phú chuẩn hóa chính tả Hán Việt; phần nghĩa viết lại, không chép
 * bản dịch hay lời bình của sách hiện đại. Nguồn: phụ đề ~320 video (11/2026); 100 câu phú Ma Thị; Phú Tử vi thông thơ;
 * phú Lộc Quyền Khoa Kỵ; 50 câu phú cách cục; thơ phú Tử vi (tuvibatquai); sách "Tử vi đẩu số phú giải" (Thái Văn Thịnh);
 * "Tử Vi Đẩu Số Toàn Thư" (Trần Đoàn, bản Vũ Tài Lục) gồm cả Phú nôm cốt tủy — chỉ lấy câu phú cổ, không lấy lời giải/dịch.
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
  /** câu phổ quát: gặp ở hơn 4% lá số (đo trên 1000 lá số mỗi phái) — hiện ở mục riêng */
  pho?: boolean;
  /** tần suất khớp, phần nghìn (lấy phái cao hơn) — dùng để xếp câu hiếm lên trước */
  tanSuat?: number;
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
  "tanSuat": 122,
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
  ],
  "tanSuat": 65,
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
    "Linh Tinh"
   ]
  },
  "kenh": [
   "389 TỬ VI"
  ],
  "tanSuat": 65,
  "pho": true
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
  ],
  "tanSuat": 72,
  "pho": true
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
  "tanSuat": 100,
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
  ],
  "tanSuat": 13
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
  ],
  "tanSuat": 18
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
  ],
  "tanSuat": 21
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
  ],
  "tanSuat": 43,
  "pho": true
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
  ],
  "tanSuat": 12
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
  ],
  "tanSuat": 6
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
  ],
  "tanSuat": 8
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
  ],
  "tanSuat": 8
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
  ],
  "tanSuat": 43,
  "pho": true
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
  ],
  "tanSuat": 6
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
  ],
  "tanSuat": 2
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
  "tanSuat": 88,
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
  ],
  "tanSuat": 18
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
  ],
  "tanSuat": 69,
  "pho": true
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
  "tanSuat": 95,
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
  "tanSuat": 83,
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
  ],
  "tanSuat": 10
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
  ],
  "tanSuat": 2
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
  ],
  "tanSuat": 14
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
  ],
  "tanSuat": 2
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
  ],
  "tanSuat": 9
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
  ],
  "tanSuat": 9
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
  ],
  "tanSuat": 8
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
  ],
  "tanSuat": 1
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
  ],
  "tanSuat": 1
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
  ],
  "tanSuat": 64,
  "pho": true
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
  ],
  "tanSuat": 64,
  "pho": true
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
  ],
  "tanSuat": 64,
  "pho": true
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
  ],
  "tanSuat": 64,
  "pho": true
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
  ],
  "tanSuat": 64,
  "pho": true
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
  ],
  "tanSuat": 64,
  "pho": true
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
  "tanSuat": 86,
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
  ],
  "tanSuat": 32
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
  ],
  "tanSuat": 39
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
  ],
  "tanSuat": 39
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
  ],
  "tanSuat": 5
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
  ],
  "tanSuat": 5
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
  ],
  "tanSuat": 10
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
  ],
  "tanSuat": 34
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
  ],
  "tanSuat": 7
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
  ],
  "tanSuat": 29
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
  "tanSuat": 160,
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
  "tanSuat": 160,
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
  ],
  "tanSuat": 9
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
  ],
  "tanSuat": 7
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 34
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
  ],
  "tanSuat": 34
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
  ],
  "tanSuat": 34
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
  "tanSuat": 215,
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 6
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
  ],
  "tanSuat": 1
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
  ],
  "tanSuat": 25
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
  "tanSuat": 88,
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
  ],
  "tanSuat": 31
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
  ],
  "tanSuat": 9
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
  ],
  "tanSuat": 10
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
  ],
  "tanSuat": 18
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 7
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
  ],
  "tanSuat": 13
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
  ],
  "tanSuat": 13
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
  ],
  "tanSuat": 7
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
  ],
  "tanSuat": 16
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
  ],
  "tanSuat": 16
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
  ],
  "tanSuat": 13
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
  ],
  "tanSuat": 7
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
  ],
  "tanSuat": 36
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
  ],
  "tanSuat": 25
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
  ],
  "tanSuat": 37
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
  ],
  "tanSuat": 9
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
  ],
  "tanSuat": 9
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
  ],
  "tanSuat": 2
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
  ],
  "tanSuat": 1
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
  ],
  "tanSuat": 7
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
  ],
  "tanSuat": 7
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
  ],
  "tanSuat": 1
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
  ],
  "tanSuat": 13
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
  ],
  "tanSuat": 2
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
  ],
  "tanSuat": 41,
  "pho": true
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
  ],
  "tanSuat": 6
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 11
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 5
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
  ],
  "tanSuat": 27
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
  ],
  "tanSuat": 29
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
  ],
  "tanSuat": 13
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
  "tanSuat": 174,
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
  "tanSuat": 174,
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
  ],
  "tanSuat": 65,
  "pho": true
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 1
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
  ],
  "tanSuat": 1
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
  ],
  "tanSuat": 22
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
  ],
  "tanSuat": 13
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
  ],
  "tanSuat": 25
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
  ],
  "tanSuat": 9
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
  ],
  "tanSuat": 31
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
  ],
  "tanSuat": 37
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
  ],
  "tanSuat": 21
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
  ],
  "tanSuat": 1
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
  ],
  "tanSuat": 0
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
  "tanSuat": 123,
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
  ],
  "tanSuat": 1
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 8
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 4
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
  ],
  "tanSuat": 58,
  "pho": true
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
  ],
  "tanSuat": 18
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
  ],
  "tanSuat": 18
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
  ],
  "tanSuat": 21
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
  ],
  "tanSuat": 14
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
  ],
  "tanSuat": 6
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
  ],
  "tanSuat": 6
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
  ],
  "tanSuat": 5
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
  ],
  "tanSuat": 13
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 36
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
  ],
  "tanSuat": 56,
  "pho": true
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
  ],
  "tanSuat": 34
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
  ],
  "tanSuat": 8
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
  ],
  "tanSuat": 4
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
  ],
  "tanSuat": 2
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
  ],
  "tanSuat": 4
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
  ],
  "tanSuat": 18
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
  ],
  "tanSuat": 40
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 1
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
  ],
  "tanSuat": 3
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
  ],
  "tanSuat": 2
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 20
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
  ],
  "tanSuat": 15
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
  ],
  "tanSuat": 2
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 5
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
  ],
  "tanSuat": 2
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
  ],
  "tanSuat": 18
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
  ],
  "tanSuat": 5
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
  "tanSuat": 85,
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
  "tanSuat": 91,
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
  ],
  "tanSuat": 80,
  "pho": true
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
  ],
  "tanSuat": 20
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
  ],
  "tanSuat": 12
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
  ],
  "tanSuat": 77,
  "pho": true
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
  ],
  "tanSuat": 71,
  "pho": true
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
  ],
  "tanSuat": 6
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 23
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
  ],
  "tanSuat": 26
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
  ],
  "tanSuat": 16
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 16
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
  ],
  "tanSuat": 5
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
  "tanSuat": 81,
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
  "tanSuat": 86,
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
  "tanSuat": 86,
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
  ],
  "tanSuat": 0
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
  "tanSuat": 86,
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 31
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
  ],
  "tanSuat": 54,
  "pho": true
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
  "tanSuat": 323,
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
  "tanSuat": 84,
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
  "tanSuat": 91,
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
  ],
  "tanSuat": 15
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
  "tanSuat": 82,
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
  ],
  "tanSuat": 20
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
  "tanSuat": 83,
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
  ],
  "tanSuat": 7
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
  ],
  "tanSuat": 20
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
  ],
  "tanSuat": 14
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
  ],
  "tanSuat": 19
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
  ],
  "tanSuat": 2
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
  ],
  "tanSuat": 19
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
  "tanSuat": 181,
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
  "tanSuat": 181,
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
  "tanSuat": 92,
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
  ],
  "tanSuat": 76,
  "pho": true
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
  ],
  "tanSuat": 33
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
  ],
  "tanSuat": 33
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
  ],
  "tanSuat": 73,
  "pho": true
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
  ],
  "tanSuat": 0
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
  "tanSuat": 319,
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
  "tanSuat": 319,
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
  "tanSuat": 186,
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
  ],
  "tanSuat": 71,
  "pho": true
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
  ],
  "tanSuat": 12
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
  ],
  "tanSuat": 12
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
  ],
  "tanSuat": 3
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
  ],
  "tanSuat": 7
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
  ],
  "tanSuat": 17
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
  ],
  "tanSuat": 8
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
  ],
  "tanSuat": 19
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
  ],
  "tanSuat": 15
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
  ],
  "tanSuat": 36
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
  ],
  "tanSuat": 15
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
  ],
  "tanSuat": 23
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
  "tanSuat": 87,
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
  ],
  "tanSuat": 24
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
  ],
  "tanSuat": 17
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
  ],
  "tanSuat": 14
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
  ],
  "tanSuat": 16
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
  ],
  "tanSuat": 24
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
  ],
  "tanSuat": 8
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
  ],
  "tanSuat": 12
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
  ],
  "tanSuat": 16
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
  ],
  "tanSuat": 38
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
  ],
  "tanSuat": 35
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
  ],
  "tanSuat": 16
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
  ],
  "tanSuat": 13
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
  ],
  "tanSuat": 10
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
  ],
  "tanSuat": 9
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 33
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
  ],
  "tanSuat": 16
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
  ],
  "tanSuat": 19
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
  ],
  "tanSuat": 3
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
  ],
  "tanSuat": 7
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
  ],
  "tanSuat": 7
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
  ],
  "tanSuat": 28
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
  ],
  "tanSuat": 17
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
  ],
  "tanSuat": 10
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
  ],
  "tanSuat": 5
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
  ],
  "tanSuat": 13
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
  ],
  "tanSuat": 33
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
  "tanSuat": 154,
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
  ],
  "tanSuat": 38
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
  ],
  "tanSuat": 28
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
  ],
  "tanSuat": 4
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
  "tanSuat": 86,
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
  "tanSuat": 81,
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
  "tanSuat": 144,
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
  ],
  "tanSuat": 65,
  "pho": true
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
  ],
  "tanSuat": 65,
  "pho": true
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
  ],
  "tanSuat": 76,
  "pho": true
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
  ],
  "tanSuat": 12
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
  ],
  "tanSuat": 13
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
  ],
  "tanSuat": 9
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
  ],
  "tanSuat": 9
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
  "tanSuat": 94,
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
  "tanSuat": 142,
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
  ],
  "tanSuat": 25
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
  ],
  "tanSuat": 12
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
  "tanSuat": 94,
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
  ],
  "tanSuat": 22
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
  ],
  "tanSuat": 61,
  "pho": true
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
  ],
  "tanSuat": 9
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
  "tanSuat": 158,
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
  "tanSuat": 83,
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
  "tanSuat": 96,
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
  "tanSuat": 84,
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
  "tanSuat": 86,
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
  "tanSuat": 92,
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
  "tanSuat": 93,
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
  ],
  "tanSuat": 8
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
  "tanSuat": 93,
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
  ],
  "tanSuat": 5
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
  ],
  "tanSuat": 5
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
  ],
  "tanSuat": 77,
  "pho": true
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
  "tanSuat": 83,
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
  ],
  "tanSuat": 29
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
  "tanSuat": 81,
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
  "tanSuat": 98,
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
  "tanSuat": 87,
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
  ],
  "tanSuat": 76,
  "pho": true
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
  ],
  "tanSuat": 49,
  "pho": true
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
  "tanSuat": 94,
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
  "tanSuat": 172,
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
  "tanSuat": 86,
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
  ],
  "tanSuat": 67,
  "pho": true
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
  "tanSuat": 82,
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
  ],
  "tanSuat": 48,
  "pho": true
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
  "tanSuat": 163,
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
  "tanSuat": 87,
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
  "tanSuat": 84,
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
  ],
  "tanSuat": 6
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
  ],
  "tanSuat": 15
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
  "tanSuat": 150,
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
  "tanSuat": 150,
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
  ],
  "tanSuat": 11
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
  ],
  "tanSuat": 11
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
  ],
  "tanSuat": 9
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
  ],
  "tanSuat": 69,
  "pho": true
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
  ],
  "tanSuat": 18
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
  ],
  "tanSuat": 71,
  "pho": true
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
  ],
  "tanSuat": 20
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
  "tanSuat": 95,
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
  ],
  "tanSuat": 11
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
  ],
  "tanSuat": 4
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
  ],
  "tanSuat": 6
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 3
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 16
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
  "tanSuat": 88,
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
  ],
  "tanSuat": 68,
  "pho": true
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
  ],
  "tanSuat": 0
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
  "tanSuat": 163,
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
  ],
  "tanSuat": 9
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
  "tanSuat": 84,
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
  ],
  "tanSuat": 31
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
  ],
  "tanSuat": 30
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
  "tanSuat": 256,
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
  "tanSuat": 95,
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
  ],
  "tanSuat": 0
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
  "tanSuat": 94,
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
  "tanSuat": 94,
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
  ],
  "tanSuat": 52,
  "pho": true
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
  ],
  "tanSuat": 21
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
  ],
  "tanSuat": 34
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
  ],
  "tanSuat": 42,
  "pho": true
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
  "tanSuat": 162,
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
  ],
  "tanSuat": 23
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
  ],
  "tanSuat": 77,
  "pho": true
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
  ],
  "tanSuat": 15
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
  ],
  "tanSuat": 3
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
  ],
  "tanSuat": 9
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
  ],
  "tanSuat": 21
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
  ],
  "tanSuat": 10
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
  ],
  "tanSuat": 18
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
  ],
  "tanSuat": 15
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
  ],
  "tanSuat": 0
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
  "tanSuat": 113,
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
  "tanSuat": 113,
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
  ],
  "tanSuat": 72,
  "pho": true
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
  ],
  "tanSuat": 72,
  "pho": true
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
  "tanSuat": 97,
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
  "tanSuat": 98,
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
  "tanSuat": 98,
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
  ],
  "tanSuat": 69,
  "pho": true
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
  ],
  "tanSuat": 24
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
  ],
  "tanSuat": 79,
  "pho": true
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
  ],
  "tanSuat": 35
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 272,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  "tanSuat": 189,
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
  ],
  "tanSuat": 17
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
  ],
  "tanSuat": 30
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
  ],
  "tanSuat": 74,
  "pho": true
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
  ],
  "tanSuat": 30
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
  ],
  "tanSuat": 74,
  "pho": true
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
  ],
  "tanSuat": 44,
  "pho": true
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
  ],
  "tanSuat": 36
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
  ],
  "tanSuat": 12
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
  ],
  "tanSuat": 7
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
  ],
  "tanSuat": 28
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
  ],
  "tanSuat": 0
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
  "tanSuat": 92,
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
  ],
  "tanSuat": 17
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
  ],
  "tanSuat": 4
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
  ],
  "tanSuat": 4
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
  "tanSuat": 81,
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
  "tanSuat": 81,
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
  "tanSuat": 81,
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
  "tanSuat": 81,
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
  "tanSuat": 81,
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
  "tanSuat": 81,
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
  "tanSuat": 81,
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
  "tanSuat": 81,
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
  "tanSuat": 81,
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
  "tanSuat": 81,
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
  "tanSuat": 81,
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
  "tanSuat": 81,
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
  "tanSuat": 81,
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
  "tanSuat": 81,
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
  "tanSuat": 81,
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
  "tanSuat": 81,
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
  "tanSuat": 131,
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
  "tanSuat": 131,
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
  "tanSuat": 131,
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
  "tanSuat": 131,
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
  "tanSuat": 131,
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
  "tanSuat": 131,
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
  "tanSuat": 131,
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
  "tanSuat": 131,
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
  "tanSuat": 131,
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
  "tanSuat": 131,
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
  "tanSuat": 84,
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
  "tanSuat": 87,
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
  ],
  "tanSuat": 77,
  "pho": true
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
  "tanSuat": 94,
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
  "tanSuat": 81,
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
  "tanSuat": 86,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  "tanSuat": 148,
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
  ],
  "tanSuat": 8
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
  "tanSuat": 220,
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
  "tanSuat": 96,
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
  ],
  "tanSuat": 75,
  "pho": true
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
  ],
  "tanSuat": 76,
  "pho": true
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
  ],
  "tanSuat": 76,
  "pho": true
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
  "tanSuat": 85,
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
  ],
  "tanSuat": 77,
  "pho": true
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
  "tanSuat": 182,
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
  ],
  "tanSuat": 12
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
  ],
  "tanSuat": 46,
  "pho": true
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
  ],
  "tanSuat": 14
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
  ],
  "tanSuat": 33
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
  ],
  "tanSuat": 33
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
  ],
  "tanSuat": 28
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
  ],
  "tanSuat": 35
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
  ],
  "tanSuat": 3
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
  ],
  "tanSuat": 2
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
  "tanSuat": 222,
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
  "tanSuat": 97,
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
  ],
  "tanSuat": 70,
  "pho": true
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
  ],
  "tanSuat": 70,
  "pho": true
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
  "tanSuat": 87,
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
  ],
  "tanSuat": 20
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
  ],
  "tanSuat": 77,
  "pho": true
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 79,
  "pho": true
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
  ],
  "tanSuat": 76,
  "pho": true
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
  ],
  "tanSuat": 8
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
  ],
  "tanSuat": 4
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
  ],
  "tanSuat": 14
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
  ],
  "tanSuat": 80,
  "pho": true
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 5
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 76,
  "pho": true
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
  ],
  "tanSuat": 73,
  "pho": true
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
  ],
  "tanSuat": 6
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
  "tanSuat": 82,
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
  ],
  "tanSuat": 41,
  "pho": true
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
  ],
  "tanSuat": 5
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
  "tanSuat": 147,
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
  ],
  "tanSuat": 35
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
  "tanSuat": 91,
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
  ],
  "tanSuat": 21
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
  ],
  "tanSuat": 14
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
  ],
  "tanSuat": 2
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
  "tanSuat": 87,
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
  ],
  "tanSuat": 23
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
  ],
  "tanSuat": 20
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
  "tanSuat": 245,
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
  "tanSuat": 91,
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
  ],
  "tanSuat": 61,
  "pho": true
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
  ],
  "tanSuat": 21
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 21
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
  "tanSuat": 89,
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
  "tanSuat": 84,
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
  ],
  "tanSuat": 26
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
  "tanSuat": 98,
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
  "tanSuat": 90,
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
  ],
  "tanSuat": 3
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
  "tanSuat": 97,
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
  "tanSuat": 280,
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
  ],
  "tanSuat": 27
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
  ],
  "tanSuat": 6
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
  ],
  "tanSuat": 2
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
  ],
  "tanSuat": 12
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
  "tanSuat": 154,
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
  ],
  "tanSuat": 2
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
  "tanSuat": 162,
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
  "tanSuat": 84,
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
  ],
  "tanSuat": 19
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
  ],
  "tanSuat": 10
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
  ],
  "tanSuat": 9
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 14
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
  ],
  "tanSuat": 14
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
  ],
  "tanSuat": 4
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
  ],
  "tanSuat": 17
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 6
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
  "tanSuat": 85,
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
  ],
  "tanSuat": 22
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
  ],
  "tanSuat": 0
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
  "tanSuat": 218,
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
  "tanSuat": 86,
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
  ],
  "tanSuat": 25
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
  "tanSuat": 236,
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
  ],
  "tanSuat": 1
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
  "tanSuat": 133,
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
  ],
  "tanSuat": 5
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
  ],
  "tanSuat": 6
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
  ],
  "tanSuat": 6
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 13
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
  ],
  "tanSuat": 1
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
  ],
  "tanSuat": 27
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
  ],
  "tanSuat": 27
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
  ],
  "tanSuat": 80,
  "pho": true
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
  ],
  "tanSuat": 45,
  "pho": true
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
  ],
  "tanSuat": 0
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
  ],
  "tanSuat": 10
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
  ],
  "tanSuat": 4
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
  ],
  "tanSuat": 4
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
  ],
  "tanSuat": 28
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
  ],
  "tanSuat": 73,
  "pho": true
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
  ],
  "tanSuat": 20
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
  ],
  "tanSuat": 20
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
  ],
  "tanSuat": 75,
  "pho": true
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
  ],
  "tanSuat": 24
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
  ],
  "tanSuat": 18
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
  "tanSuat": 175,
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
  ],
  "tanSuat": 2
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
  ],
  "tanSuat": 12
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
  ],
  "tanSuat": 14
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
  ],
  "tanSuat": 20
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
  ],
  "tanSuat": 13
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
  ],
  "tanSuat": 1
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
  ],
  "tanSuat": 53,
  "pho": true
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
   "Phú Lộc Quyền Khoa Kỵ",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 59,
  "pho": true
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
   "Phú Lộc Quyền Khoa Kỵ",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 59,
  "pho": true
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
  ],
  "tanSuat": 13
 },
 {
  "phu": "Gặp Hỏa Linh Dương Đà là khí cách",
  "nghia": "Mệnh có cả bốn sát tinh hội về: dễ gặp nhiều áp lực, nên giữ tính ổn định và tránh nóng vội.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Tử Vi cư Tí Ngọ, Khoa, Quyền, Lộc chiếu tối vi kỳ",
  "nghia": "Tử Vi ở Tý hoặc Ngọ lại được Khoa, Quyền, Lộc hội chiếu: thế mạnh về danh, quyền và tài.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ],
   "hoi": [
    "Hóa Khoa",
    "Hóa Quyền"
   ],
   "hoiMot": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Tử Vi nam Hợi, Nhâm Giáp sinh nhân phú quí đồng",
  "nghia": "Nam mệnh Tử Vi ở Hợi, tuổi Nhâm hoặc Giáp: thế cách thuận lợi về địa vị và của cải.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "chi": [
    "Hợi"
   ],
   "gioi": "nam",
   "canNam": [
    "Nhâm",
    "Giáp"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Tử Vi nữ Dần cung, Nhâm Giáp sinh nhân phú quí đồng",
  "nghia": "Nữ mệnh Tử Vi ở Dần, tuổi Nhâm hoặc Giáp: thế cách thuận lợi về địa vị và của cải.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "chi": [
    "Dần"
   ],
   "gioi": "nu",
   "canNam": [
    "Nhâm",
    "Giáp"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Tử Vi Thiên Phủ toàn y Phụ Bật chi công",
  "nghia": "Tử Phủ cùng cung cần có Tả Hữu hội về mới phát huy đủ: thế mạnh nhờ người hỗ trợ.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thiên Phủ"
   ],
   "hoiMot": [
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Tử Phủ đồng cung vô sát tấu, Giáp nhân hưởng phúc",
  "nghia": "Tử Phủ cùng cung, không sát tinh hội, tuổi Giáp: nền tảng vững, đời sống nhiều thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thiên Phủ"
   ],
   "khong": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh",
    "Linh Tinh"
   ],
   "canNam": [
    "Giáp"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Tử Phủ đồng cung lâm Tị Hợi nhất triều phú quí song toàn",
  "nghia": "Tử Vi ở Tỵ hoặc Hợi có Thiên Phủ hội chiếu: thế cách khá, hợp con đường danh vị và tích lũy.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "chi": [
    "Tỵ",
    "Hợi"
   ],
   "hoi": [
    "Thiên Phủ"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Tử Phủ triền viên, Lộc phùng chung thân phúc hậu",
  "nghia": "Tử Phủ ngồi Mệnh gặp Lộc: nền tài lộc ổn, cuộc sống nhìn chung đầy đặn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thiên Phủ"
   ],
   "hoiMot": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Tử Vi, Phụ Bật đồng cung nhất hô bách nặc",
  "nghia": "Tử Vi có Tả hoặc Hữu cùng cung: dễ được người ủng hộ, lời nói có sức nặng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Tử Phủ hiệp mệnh vi qui cách",
  "nghia": "Tử Vi và Thiên Phủ giáp hai bên Mệnh: thế cách quý, được che chở từ hai phía.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "giap": [
    [
     "Tử Vi",
     "Thiên Phủ"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 28
 },
 {
  "phu": "Tử Phủ Kình Dương tại cự thương",
  "nghia": "Tử Phủ có Kình Dương: hợp hướng buôn bán, kinh doanh hơn là con đường quan chức.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thiên Phủ",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Tử Vi, Xương Khúc phú quí khả kỳ",
  "nghia": "Tử Vi gặp Xương hoặc Khúc: có học và nét văn, tạo đà cho địa vị tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 26
 },
 {
  "phu": "Tử Lộc đồng cung Nhật Nguyệt chiếu, quí bất khả ngôn",
  "nghia": "Tử Vi có Lộc, được Nhật Nguyệt chiếu: thế cách đẹp về cả danh lẫn lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ],
   "hoi": [
    "Thái Dương",
    "Thái Âm"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Tử Vi, Thất Sát, Hoá Quyền phản tác trinh tường",
  "nghia": "Tử Vi Thất Sát gặp Hóa Quyền: tính cương được tiết chế thành quyền lực có định hướng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thất Sát",
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Tử Vi, Phá Quân vô Tả Hữu cát diệu hung ác tế lại chi đồ",
  "nghia": "Tử Phá thiếu Tả Hữu và cát tinh: thiếu trợ lực, dễ lệch hướng, nên chọn môi trường rõ ràng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Phá Quân"
   ],
   "khong": [
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Tử Vi, Vũ Khúc, Phá Quân hội Dương Đà khi công hoạ loạn",
  "nghia": "Tử Vi, Vũ Khúc, Phá Quân hội Kình Đà: dễ có xung đột với cấp trên hay tổ chức, nên thận trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "hoi": [
    "Vũ Khúc",
    "Phá Quân",
    "Kình Dương",
    "Đà La"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 17
 },
 {
  "phu": "Tử Vi, Quyền Lộc ngộ Dương Đà, tuy hoạch cát nhi vô đạo",
  "nghia": "Tử Vi Quyền Lộc gặp Kình Đà: được lợi nhưng dễ mất đi chính đạo, nên giữ chuẩn mực.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Hóa Quyền",
    "Hóa Lộc"
   ],
   "hoi": [
    "Kình Dương",
    "Đà La"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Tử Vi, Thất Sát gia không vong hư danh thụ ẩm",
  "nghia": "Tử Vi Thất Sát gặp Không, Kiếp, Tuần hoặc Triệt: danh nhiều hơn thực, nên nhìn thực chất.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thất Sát"
   ],
   "hoiMot": [
    [
     "Địa Không",
     "Địa Kiếp",
     "Thiên Không",
     "Tuần",
     "Triệt"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 18
 },
 {
  "phu": "Tử Phá lâm mệnh ư Thìn, Tuất, Sửu, Mùi tái gia cát diệu phú quí kham kỳ",
  "nghia": "Tử Phá ở tứ mộ, thêm cát tinh: thế cách có biến động nhưng đáng kỳ vọng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Phá Quân"
   ],
   "chi": [
    "Thìn",
    "Tuất",
    "Sửu",
    "Mùi"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 16
 },
 {
  "phu": "Tử, Phá, Tham Lang vi chí dâm",
  "nghia": "Tử Vi, Phá Quân, Tham Lang hội: ham muốn và ưa hưởng thụ mạnh, nên tiết chế.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "hoi": [
    "Phá Quân",
    "Tham Lang"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 49,
  "pho": true
 },
 {
  "phu": "Nữ mệnh Tử Vi tại Dần, Ngọ, Thân cung cát quí mỹ",
  "nghia": "Nữ mệnh Tử Vi ở Dần, Ngọ hoặc Thân: vị trí sáng, tính tình đoan chính và thuận lợi gia đạo.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Tử Vi"
   ],
   "chi": [
    "Dần",
    "Ngọ",
    "Thân"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 10
 },
 {
  "phu": "Tử Vi cư Ngọ vô Hình Kị, Giáp Đinh Kỷ mệnh chí công khanh",
  "nghia": "Tử Vi ở Ngọ, không Hình Kỵ, tuổi Giáp Đinh Kỷ: thế cách thuận cho con đường quan chức.",
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
    "Thiên Hình",
    "Hóa Kỵ"
   ],
   "canNam": [
    "Giáp",
    "Đinh",
    "Kỷ"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Cơ Lương hội họp thiện đàm binh, cư Tuất diệt vi mỹ luận",
  "nghia": "Cơ Lương cùng cung: mưu lược, giỏi bàn tính kế hoạch.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Cơ",
    "Thiên Lương"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 18
 },
 {
  "phu": "Cơ Lương thủ mệnh gia cát diệu phú quí từ tường",
  "nghia": "Cơ Lương thủ Mệnh thêm cát tinh: tâm tính nhân hậu, đường đời khá thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Cơ",
    "Thiên Lương"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Thiên Cơ gia ác sát đồng cung, cầu du thử thiết",
  "nghia": "Thiên Cơ cùng sát tinh: dễ nảy mưu mẹo lệch hướng, nên giữ sự ngay thẳng.",
  "tone": "xau",
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
     "Linh Tinh",
     "Địa Không",
     "Địa Kiếp"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 38
 },
 {
  "phu": "Cự Tú Thiên Cơ vi phá đãng",
  "nghia": "Cự Môn Thiên Cơ cùng cung: dễ thay đổi, phóng khoáng, kém bền chí.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Cự Môn",
    "Thiên Cơ"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 19
 },
 {
  "phu": "Thái Dương cư Ngọ, Canh Tân Đinh Kỷ nhân phú quí song toàn",
  "nghia": "Thái Dương ở Ngọ, tuổi Canh, Tân, Đinh hoặc Kỷ: thế sáng nhất, thuận cả danh và lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương"
   ],
   "chi": [
    "Ngọ"
   ],
   "canNam": [
    "Canh",
    "Tân",
    "Đinh",
    "Kỷ"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Thái Dương, Văn Xương tại Quan Lộc, hoàng điện triều ban",
  "nghia": "Quan Lộc có Thái Dương và Văn Xương: học vấn, danh tiếng giúp công việc hiển đạt.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Thái Dương",
    "Văn Xương"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Thái Dương, Hoá Kị thị phi nhật hữu mục hoàn thương",
  "nghia": "Thái Dương gặp Hóa Kỵ: dễ vướng thị phi, nên chú ý giữ gìn đôi mắt.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Vũ Khúc miếu viên uy danh hách hách",
  "nghia": "Vũ Khúc ở vị trí sáng: uy tín, năng lực tài chính nổi bật.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc"
   ],
   "sang": true
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 76,
  "pho": true
 },
 {
  "phu": "Vũ Khúc, Tướng ngộ Xương Khúc phùng thông minh sảo nghệ định vô cùng",
  "nghia": "Vũ Khúc Thiên Tướng thêm Xương, Khúc: thông minh, khéo tay, nhiều tài nghệ.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc",
    "Thiên Tướng"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Vũ Khúc, Lộc Mã giao trì phát tài viễn quận",
  "nghia": "Vũ Khúc có Thiên Mã và Lộc: tài vận khá khi đi xa hoặc làm việc nơi khác.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Vũ Khúc, Khôi Việt cư miếu vượng tài phú chí quan",
  "nghia": "Vũ Khúc sáng có Khôi hoặc Việt: tài chính vững, dễ có cơ hội thăng tiến.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc"
   ],
   "sang": true,
   "motTrong": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 10
 },
 {
  "phu": "Vũ Khúc, Thiên Di cư thượng cao cổ",
  "nghia": "Vũ Khúc ở Thiên Di: hợp hoạt động buôn bán, tài chính ngoài xã hội.",
  "tone": "tot",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 85,
  "pho": true
 },
 {
  "phu": "Vũ Khúc, Tham Lang tài trạch vi, hoành phát tư tài",
  "nghia": "Tài Bạch có Vũ Khúc, Tham Lang: tiền bạc có thể lên nhanh nhưng thất thường.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Vũ Khúc",
    "Tham Lang"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 42,
  "pho": true
 },
 {
  "phu": "Vũ Khúc, Tham Lang tài trạch vi, hoành phát tư tài",
  "nghia": "Điền Trạch có Vũ Khúc, Tham Lang: tích sản có thể lên nhanh nhưng cần giữ vững.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Vũ Khúc",
    "Tham Lang"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 42,
  "pho": true
 },
 {
  "phu": "Vũ Khúc, Tham Lang gia sát kị kỹ nghệ chí nhân",
  "nghia": "Vũ Khúc Tham Lang gặp sát tinh hoặc Kỵ: thành công nhờ tay nghề, kỹ năng chuyên môn.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc",
    "Tham Lang"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Vũ Khúc, Phá Quân phá tổ phá gia lao bác",
  "nghia": "Vũ Phá cùng cung: đường tiền bạc nhiều biến động, nên chú ý gìn giữ cơ nghiệp.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc",
    "Phá Quân"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 24
 },
 {
  "phu": "Vũ Khúc, Kiếp Sát hội Kình Dương nhân tài trì lực",
  "nghia": "Vũ Khúc gặp Kiếp Sát và Kình Dương: tiền bạc dễ xung đột, nên cẩn thận hợp đồng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc",
    "Kiếp Sát"
   ],
   "hoi": [
    "Kình Dương"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Vũ Khúc, Dương Đà kiêm Hoả Tú táng mạng nhân tài",
  "nghia": "Vũ Khúc hội Kình, Đà, Hỏa: tài chính dễ hao tổn, nên thận trọng đầu tư.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc"
   ],
   "hoi": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Đồng Nguyệt hãm cung gia sát trọng kỹ nghệ doanh hoàng",
  "nghia": "Đồng Âm hãm cùng sát tinh: thiên về mưu sinh bằng nghề tay chân, kỹ nghệ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Đồng",
    "Thái Âm"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Thiên Đồng, Kình Dương cư Ngọ, Bính Mậu nhân chấn ngự biên cương",
  "nghia": "Thiên Đồng Kình Dương ở Ngọ, tuổi Bính hoặc Mậu: hợp vai trò quyết đoán, gánh việc lớn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Đồng",
    "Kình Dương"
   ],
   "chi": [
    "Ngọ"
   ],
   "canNam": [
    "Bính",
    "Mậu"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Nữ mệnh Thiên Đồng tắc thị hiền",
  "nghia": "Nữ mệnh Thiên Đồng: tính hiền hòa, dễ cảm.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Đồng"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 51,
  "pho": true
 },
 {
  "phu": "Liêm Trinh Thân Dần cung vô sát, phú quí thanh dương phan viễn danh",
  "nghia": "Liêm Trinh ở Thân hoặc Dần, không sát: thế cách đẹp, danh tiếng lan xa.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "chi": [
    "Thân",
    "Dần"
   ],
   "khong": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Liêm Trinh Thất Sát cư miếu vượng phản vi tích phú vi nhân",
  "nghia": "Liêm Sát ở thế sáng: tích lũy được của cải và có tư cách.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh",
    "Thất Sát"
   ],
   "sang": true
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 19
 },
 {
  "phu": "Liêm Trinh, Phá, Hoả cư hãm địa tự ải đầu hà",
  "nghia": "Liêm Trinh hãm gặp Phá Quân, Hỏa Tinh: dễ nóng giận, bế tắc, nên tìm người tin cậy hỗ trợ.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "sang": false,
   "hoi": [
    "Phá Quân",
    "Hỏa Tinh"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Trọng Do uy mãnh, Liêm Trinh nhập miếu hội tướng quân",
  "nghia": "Liêm Trinh sáng gặp Tướng Quân: mạnh mẽ, hợp nghề võ hoặc kỷ luật.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "sang": true,
   "hoi": [
    "Tướng Quân"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Liêm Trinh Thất Sát cư Tị Hợi lưu đãng thiên nhai",
  "nghia": "Liêm Trinh ở Tỵ hoặc Hợi gặp Thất Sát: hay đi xa, thích di chuyển.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "chi": [
    "Tỵ",
    "Hợi"
   ],
   "hoi": [
    "Thất Sát"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 18
 },
 {
  "phu": "Liêm Trinh Tứ Sát tao hình lục",
  "nghia": "Liêm Trinh gặp nhiều sát tinh: dễ vướng kiện tụng hay va chạm, nên thận trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "hoiMot": [
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 72,
  "pho": true
 },
 {
  "phu": "Liêm Trinh Bạch Hổ hình tượng nan đào",
  "nghia": "Liêm Trinh cùng Bạch Hổ: nên chú ý thủ tục, pháp lý.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh",
    "Bạch Hổ"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Liêm Trinh, Dương Sát cư Quan Lộc gia nữu nan đào",
  "nghia": "Quan Lộc có Liêm Trinh, Kình Dương, Thất Sát hội: nên cẩn trọng rủi ro pháp lý trong công việc.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Liêm Trinh",
    "Kình Dương"
   ],
   "hoi": [
    "Thất Sát"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Liêm Trinh thanh bạch năng tự thủ",
  "nghia": "Liêm Trinh sáng, không sát: liêm chính, giữ mình tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "sang": true,
   "khong": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 19
 },
 {
  "phu": "Thiên Phủ cư Ngọ, Tuất, Thiên Tướng lai triều giáp nhân nhất phẩm chi qui",
  "nghia": "Thiên Phủ ở Ngọ hoặc Tuất có Thiên Tướng chiếu, tuổi Giáp: thế cách quý.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ"
   ],
   "chi": [
    "Ngọ",
    "Tuất"
   ],
   "hoi": [
    "Thiên Tướng"
   ],
   "canNam": [
    "Giáp"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Thiên Phủ, Lộc Tồn, Xương Khúc cự vạn chi tư",
  "nghia": "Thiên Phủ cùng Lộc Tồn, thêm Xương hoặc Khúc: tài lộc đầy đủ, có học.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ",
    "Lộc Tồn"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Thiên Phủ, Xương Khúc, Tả Hữu cao đệ ân vinh",
  "nghia": "Thiên Phủ có Xương, Khúc và Tả, Hữu: thế cách đẹp về học vấn và người trợ giúp.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ"
   ],
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Thiên Phủ, Vũ Khúc cư Tài Trạch cánh kiêm Quyền Lộc phú xa ông",
  "nghia": "Tài Bạch có Phủ, Vũ gặp Quyền và Lộc: tài chính dồi dào, khá giàu.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Thiên Phủ",
    "Vũ Khúc"
   ],
   "hoiMot": [
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Thiên Phủ, Vũ Khúc cư Tài Trạch cánh kiêm Quyền Lộc phú xa ông",
  "nghia": "Điền Trạch có Phủ, Vũ gặp Quyền và Lộc: nhà đất, của cải khá đầy đủ.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Thiên Phủ",
    "Vũ Khúc"
   ],
   "hoiMot": [
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Thiên Phủ Tuất cung vô sát tấu, Giáp Kỷ nhân yêu kim hưu phú",
  "nghia": "Thiên Phủ ở Tuất, không sát, tuổi Giáp hoặc Kỷ: thế cách khá về tiền bạc.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ"
   ],
   "chi": [
    "Tuất"
   ],
   "khong": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh",
    "Linh Tinh"
   ],
   "canNam": [
    "Giáp",
    "Kỷ"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Thái Âm đồng Văn Khúc ư Thê cung thiềm cung triết quế",
  "nghia": "Phu Thê có Thái Âm và Văn Khúc: hôn nhân có nét văn nhã, thuận lợi về học vấn.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Thái Âm",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Thái Âm, Vũ Khúc, Lộc Tồn đồng Tả Hữu tương phùng phú quí ông",
  "nghia": "Thái Âm gặp Vũ Khúc, Lộc Tồn và Tả Hữu: tài lộc và người trợ giúp dồi dào.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Âm"
   ],
   "hoi": [
    "Vũ Khúc",
    "Lộc Tồn",
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Thái Âm cư Tí, Bính Đinh nhân phú quí trung lương",
  "nghia": "Thái Âm ở Tý, tuổi Bính hoặc Đinh: sáng sủa, thuận về danh và tài.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Âm"
   ],
   "chi": [
    "Tý"
   ],
   "canNam": [
    "Bính",
    "Đinh"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Thái Âm, Dương Đà tất chủ nhân ly tài sản",
  "nghia": "Thái Âm gặp Kình hoặc Đà: dễ hao tán tiền của, nên cẩn trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Âm"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Thái Âm cư Tí hiệu vi thủy trừng quế ngạc, đắc thanh yếu chi chức",
  "nghia": "Thái Âm ở Tý: thanh nhã, hợp công việc văn phòng, chức vụ trọng yếu.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Âm"
   ],
   "chi": [
    "Tý"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Nguyệt diệu Thiên Lương nữ dâm bần",
  "nghia": "Nữ mệnh Thiên Lương gặp Thái Âm: đường tình cảm nhiều biến động, nên giữ sự cân bằng.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Lương"
   ],
   "hoi": [
    "Thái Âm"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 42,
  "pho": true
 },
 {
  "phu": "Lương tú Thái Âm khước tác phiêu bồng chi khách",
  "nghia": "Thiên Lương gặp Thái Âm: hay di chuyển, ít gắn bó một chỗ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Lương"
   ],
   "hoi": [
    "Thái Âm"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 86,
  "pho": true
 },
 {
  "phu": "Tham Lang Tí, Ngọ, Mão, Dậu thử thiết cẩu thâu chi bối",
  "nghia": "Tham Lang ở Tý, Ngọ, Mão, Dậu: nhanh nhạy, thích tìm lợi, nên giữ ranh giới đạo đức.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang"
   ],
   "chi": [
    "Tý",
    "Ngọ",
    "Mão",
    "Dậu"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 26
 },
 {
  "phu": "Tham Lang Tí, Hợi gia sát bất vi đổ hộ diệc tao hình",
  "nghia": "Tham Lang ở Tý hoặc Hợi gặp sát tinh: dễ sa vào cờ bạc, rủi ro pháp lý, nên tự chế.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang"
   ],
   "chi": [
    "Tý",
    "Hợi"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Tham Vũ tiên bần hậu phú",
  "nghia": "Tham Lang Vũ Khúc: giai đoạn đầu khó, về sau khá lên.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang",
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Tham Vũ Thân cung vi hạ cách",
  "nghia": "Tham Lang ở Thân có Vũ Khúc hội: thế cách kém hơn, cần nỗ lực nhiều.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang"
   ],
   "chi": [
    "Thân"
   ],
   "hoi": [
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 14
 },
 {
  "phu": "Tham Lang, gia sát đồng hướng nữ du hương",
  "nghia": "Nữ mệnh Tham Lang gặp sát tinh: thích đi xa, tình cảm nhiều thay đổi.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Tham Lang"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Tham Lang, gia sát đồng hướng nam thử thiết",
  "nghia": "Nam mệnh Tham Lang gặp sát tinh: nên giữ chính trực về tiền bạc.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nam",
   "sao": [
    "Tham Lang"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 14
 },
 {
  "phu": "Tham Vũ, Phá Quân vô cát diệu mê hoa luyến tửu",
  "nghia": "Tham, Vũ, Phá hội mà thiếu cát tinh: dễ sa đà vui chơi, nên tiết chế.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang",
    "Vũ Khúc"
   ],
   "hoi": [
    "Phá Quân"
   ],
   "khong": [
    "Tả Phù",
    "Hữu Bật",
    "Thiên Khôi",
    "Thiên Việt",
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Tham Lang, Liêm Trinh đồng độ, nam đa lãng đãng",
  "nghia": "Nam mệnh Tham Lang Liêm Trinh cùng cung: thích phóng khoáng, nhiều biến động.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nam",
   "sao": [
    "Tham Lang",
    "Liêm Trinh"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Tham Lang, Liêm Trinh đồng độ, nữ đa dâm",
  "nghia": "Nữ mệnh Tham Lang Liêm Trinh cùng cung: đường tình cảm nhiều biến động, nên cân nhắc kỹ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Tham Lang",
    "Liêm Trinh"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Tham Lang, Đà La tại Dần cung hiệu viết phong lưu thái trượng",
  "nghia": "Tham Lang cùng Đà La ở Dần: thích hưởng thụ, dễ vướng rắc rối từ sắc, rượu.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang",
    "Đà La"
   ],
   "chi": [
    "Dần"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Hình ngộ Tham Lang hiệu viết phong lưu thái trượng",
  "nghia": "Tham Lang gặp Thiên Hình hoặc Kình Dương: dễ vướng chuyện ham vui và va chạm.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang"
   ],
   "motTrong": [
    [
     "Thiên Hình",
     "Kình Dương"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 12
 },
 {
  "phu": "Nữ mệnh Tham Lang đa tật đố",
  "nghia": "Nữ mệnh Tham Lang: dễ hay đa nghi, so đo, nên cởi mở hơn.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Tham Lang"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 42,
  "pho": true
 },
 {
  "phu": "Cự Nhật mệnh cung Dần vị thực lộc trì danh",
  "nghia": "Cự Môn Thái Dương ở Dần: thế cách đẹp, có danh và lộc.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Cự Môn",
    "Thái Dương"
   ],
   "chi": [
    "Dần"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Cự tại Hợi, Nhật mệnh Tị thực lộc trì danh",
  "nghia": "Thái Dương ở Tỵ có Cự Môn ở Hợi chiếu: thế cách đẹp, có danh và lộc.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương"
   ],
   "chi": [
    "Tỵ"
   ],
   "doi": [
    "Cự Môn"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Cự tại Tị cung, Nhật mệnh Hợi phản vi bất giai",
  "nghia": "Thái Dương ở Hợi có Cự Môn ở Tỵ chiếu: thế kém hơn, cần thêm cát tinh.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương"
   ],
   "chi": [
    "Hợi"
   ],
   "doi": [
    "Cự Môn"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Cự Cơ cư Mão, Ất Tân Kỷ Bính chí công khanh",
  "nghia": "Cự Cơ ở Mão, tuổi Ất, Tân, Kỷ hoặc Bính: thế cách tốt về địa vị.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Cự Môn",
    "Thiên Cơ"
   ],
   "chi": [
    "Mão"
   ],
   "canNam": [
    "Ất",
    "Tân",
    "Kỷ",
    "Bính"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Cự Cơ Dậu thượng hoá cát giả túng hữu tài quan dã bất chung",
  "nghia": "Cự Cơ ở Dậu dù có hóa cát: tài quan khó bền, nên chuẩn bị đường lui.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Cự Môn",
    "Thiên Cơ"
   ],
   "chi": [
    "Dậu"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Cự Cơ Sửu Mùi vi hạ cách",
  "nghia": "Thiên Cơ ở Sửu hoặc Mùi có Cự Môn đối chiếu: thế kém hơn.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Cơ"
   ],
   "chi": [
    "Sửu",
    "Mùi"
   ],
   "doi": [
    "Cự Môn"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 45,
  "pho": true
 },
 {
  "phu": "Cự Môn, Dương Đà ư Thân Mệnh, Tật Ách doanh hoàng",
  "nghia": "Cự Môn gặp Kình hoặc Đà tại Mệnh: dễ trắc trở, nên chú ý sức khỏe.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Cự Môn"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Thiên Tướng chi tinh nữ mệnh triền tất đương tử quí cập phu hiền",
  "nghia": "Nữ mệnh Thiên Tướng: thuận về gia đạo.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Tướng"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 42,
  "pho": true
 },
 {
  "phu": "Phủ Tướng chí tinh nữ mệnh triều tất dương tử quí dữ phu hiền",
  "nghia": "Nữ mệnh Phủ Tướng hội chiếu: gia đạo hòa thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "hoi": [
    "Thiên Phủ",
    "Thiên Tướng"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 137,
  "pho": true
 },
 {
  "phu": "Thiên Tướng, Liêm Trinh, Kình Dương hiệp đa chiêu hình trượng nan đào",
  "nghia": "Liêm Trinh Thiên Tướng cùng Kình Dương: nên chú ý pháp lý, tránh va chạm.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh",
    "Thiên Tướng",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Hữu Bật Thiên Tướng phúc lai lâm",
  "nghia": "Hữu Bật cùng Thiên Tướng: được người giúp, phúc đến.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hữu Bật",
    "Thiên Tướng"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 10
 },
 {
  "phu": "Tả Phụ, Thiên Khôi vi phúc thọ",
  "nghia": "Tả Phù cùng Thiên Khôi: có quý nhân, đời sống bền.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tả Phù",
    "Thiên Khôi"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Tả Hữu Khôi Việt vi phúc thọ",
  "nghia": "Tả, Hữu, Khôi, Việt hội cả: nhiều quý nhân giúp đỡ.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Tả Phù",
    "Hữu Bật",
    "Thiên Khôi",
    "Thiên Việt"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 63,
  "pho": true
 },
 {
  "phu": "Thiên Lương cư Ngọ vi quan tư thanh hiển triều đường",
  "nghia": "Thiên Lương ở Ngọ: thanh liêm, hợp công việc công quyền.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Lương"
   ],
   "chi": [
    "Ngọ"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Lương Đồng Cơ Nguyệt Dần Thân vị nhất sinh lợi nghiệp thông minh",
  "nghia": "Thiên Lương ở Dần hoặc Thân gặp Đồng, Cơ, Nguyệt: thông minh, hợp nghề có lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Lương"
   ],
   "chi": [
    "Dần",
    "Thân"
   ],
   "hoi": [
    "Thiên Đồng",
    "Thiên Cơ",
    "Thái Âm"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 44,
  "pho": true
 },
 {
  "phu": "Lương Nguyệt Tị Hợi nam đa lãng đãng",
  "nghia": "Nam mệnh Thiên Lương ở Tỵ hoặc Hợi gặp Thái Âm: thích phóng khoáng, hay đổi.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nam",
   "sao": [
    "Thiên Lương"
   ],
   "chi": [
    "Tỵ",
    "Hợi"
   ],
   "hoi": [
    "Thái Âm"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Lương Nguyệt Tị Hợi nữ đa dâm",
  "nghia": "Nữ mệnh Thiên Lương ở Tỵ hoặc Hợi gặp Thái Âm: tình cảm nhiều biến động.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Lương"
   ],
   "chi": [
    "Tỵ",
    "Hợi"
   ],
   "hoi": [
    "Thái Âm"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Thiên Lương, Văn Xương cư miếu vượng vi chí đài cương",
  "nghia": "Thiên Lương Văn Xương sáng: học giỏi, hợp chức vụ quan trọng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Lương",
    "Văn Xương"
   ],
   "sang": true
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 10
 },
 {
  "phu": "Khúc ngộ Lương tinh vị chí đài cương",
  "nghia": "Văn Khúc cùng Thiên Lương: học giỏi, hợp chức vụ quan trọng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Văn Khúc",
    "Thiên Lương"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 14
 },
 {
  "phu": "Thất Sát Dần, Thân, Tí, Ngọ nhất sinh tước lộc vinh xương",
  "nghia": "Thất Sát ở Dần, Thân, Tý, Ngọ: sáng, có chức tước và lộc.",
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 28
 },
 {
  "phu": "Thất Sát Phá Quân chuyên ỷ Dương Linh chi ngược",
  "nghia": "Thất Sát Phá Quân hội Kình, Linh: tính cứng, dễ nóng, nên chế ngự.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát"
   ],
   "hoi": [
    "Phá Quân",
    "Kình Dương",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Thất Sát trầm ngâm phúc bất vinh",
  "nghia": "Phúc Đức có Thất Sát: tâm tính lao tâm, phúc đức không an nhàn.",
  "tone": "xau",
  "dk": {
   "cung": "Phúc Đức",
   "sao": [
    "Thất Sát"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 84,
  "pho": true
 },
 {
  "phu": "Thất Sát đơn cư Phúc Đức nữ nhân thiết kị",
  "nghia": "Nữ mệnh có Thất Sát ở Phúc Đức: nên chú ý đời sống tinh thần.",
  "tone": "xau",
  "dk": {
   "cung": "Phúc Đức",
   "gioi": "nu",
   "sao": [
    "Thất Sát"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 42,
  "pho": true
 },
 {
  "phu": "Thất Sát Phá Quân nghi xuất ngoại, chư ban thủ nghệ bất năng tinh",
  "nghia": "Thất Sát gặp Phá Quân: hợp đi xa lập nghiệp, nghề tay khó tinh.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát"
   ],
   "hoi": [
    "Phá Quân"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 92,
  "pho": true
 },
 {
  "phu": "Phá Quân Tí Ngọ cung, vô sát quan tư thanh hiền chí tam công",
  "nghia": "Phá Quân ở Tý hoặc Ngọ, không sát: thế cách đẹp về địa vị.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Phá Quân"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ],
   "khong": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Phá Quân, Tham Lang phùng Lộc Mã nam đa lãng đãng",
  "nghia": "Nam mệnh Phá, Tham gặp Lộc, Mã: ưa phiêu lưu, thay đổi.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nam",
   "sao": [
    "Phá Quân"
   ],
   "hoi": [
    "Tham Lang",
    "Thiên Mã"
   ],
   "hoiMot": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Phá Quân, Tham Lang phùng Lộc Mã nữ đa dâm",
  "nghia": "Nữ mệnh Phá, Tham gặp Lộc, Mã: tình cảm nhiều biến động.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Phá Quân"
   ],
   "hoi": [
    "Tham Lang",
    "Thiên Mã"
   ],
   "hoiMot": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Phá Quân, Hoả Linh bôn ba lao bác",
  "nghia": "Phá Quân gặp Hỏa hoặc Linh: vất vả bôn ba.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Phá Quân"
   ],
   "motTrong": [
    [
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 17
 },
 {
  "phu": "Phá Hao Dương Linh Quan Lộc vị, đáo xứ khất cầu",
  "nghia": "Quan Lộc có Phá Quân, Hao gặp Kình, Linh: công việc nhiều bất ổn, thu nhập thất thường.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Phá Quân"
   ],
   "motTrong": [
    [
     "Đại Hao",
     "Tiểu Hao"
    ],
    [
     "Kình Dương",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Văn Xương, Vũ Khúc vi nhân đa học đa năng",
  "nghia": "Văn Xương cùng Vũ Khúc: học nhiều, đa tài.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Văn Xương",
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Văn Xương, Vũ Khúc ư Thân Mệnh văn vũ kiêm bị",
  "nghia": "Thân có Văn Xương, Vũ Khúc: văn võ kiêm toàn.",
  "tone": "tot",
  "dk": {
   "cung": "Thân",
   "sao": [
    "Văn Xương",
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Tả Phụ, Văn Xương vị chí tam đài",
  "nghia": "Tả Phù cùng Văn Xương: học tốt, có người dìu dắt, lên cao.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tả Phù",
    "Văn Xương"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Nhị Khúc miếu viên phùng Tả Hữu tướng tướng chi tài",
  "nghia": "Xương, Khúc sáng hội Tả, Hữu: có tài làm chủ nhiều người.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Văn Xương",
    "Văn Khúc",
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Xương Khúc hiệp mệnh tối vi kỳ",
  "nghia": "Xương, Khúc giáp hai bên Mệnh: văn nhã, được che chở.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "giap": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 32
 },
 {
  "phu": "Xương Khúc lâm ư Sửu, Mùi thời phùng Mão, Dậu cận thiên nhan",
  "nghia": "Xương, Khúc cùng ở Sửu hoặc Mùi: học giỏi, gần cấp trên.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Văn Xương",
    "Văn Khúc"
   ],
   "chi": [
    "Sửu",
    "Mùi"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Xương Khúc Tị Hợi lâm, bất quí tất đại phú",
  "nghia": "Mệnh ở Tỵ hoặc Hợi có Xương, Khúc hội: dễ được quý hoặc giàu.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Tỵ",
    "Hợi"
   ],
   "hoi": [
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 49,
  "pho": true
 },
 {
  "phu": "Xương Khúc cát tinh cư Phúc Đức vị chi ngọc tụ thiên",
  "nghia": "Phúc Đức có Xương, Khúc hội: tâm hồn thanh nhã, hợp văn chương.",
  "tone": "tot",
  "dk": {
   "cung": "Phúc Đức",
   "hoi": [
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 239,
  "pho": true
 },
 {
  "phu": "Xương Khúc Liêm Trinh ư Tị Hợi tao hình bất thiện thả hư khoa",
  "nghia": "Liêm Trinh ở Tỵ hoặc Hợi gặp Xương, Khúc: học hành dễ lận đận, nên chú ý kỷ luật.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "chi": [
    "Tỵ",
    "Hợi"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Xương Khúc, Phá Quân lâm hổ thỏ Sát Dương xung phá bôn ba",
  "nghia": "Phá Quân ở Dần hoặc Mão gặp Xương, Khúc và Thất Sát, Kình: nhiều bôn ba.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Phá Quân"
   ],
   "chi": [
    "Dần",
    "Mão"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ],
   "hoiMot": [
    [
     "Thất Sát",
     "Kình Dương"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Xương Khúc Lộc Tồn do vi kỳ đặc",
  "nghia": "Lộc Tồn gặp Xương hoặc Khúc: tài lộc đi cùng học thức.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Lộc Tồn"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 17
 },
 {
  "phu": "Nữ mệnh Xương Khúc thông minh phú quí",
  "nghia": "Nữ mệnh có Xương hoặc Khúc: thông minh, tinh tế.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 87,
  "pho": true
 },
 {
  "phu": "Tả Hữu hiệp mệnh vi quí cách",
  "nghia": "Tả, Hữu giáp hai bên Mệnh: quý cách, được trợ giúp.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "giap": [
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 34
 },
 {
  "phu": "Khôi Việt Mệnh Thân đa triết quế",
  "nghia": "Mệnh có Khôi, Việt hội: học hành, thi cử thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Thiên Khôi",
    "Thiên Việt"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 215,
  "pho": true
 },
 {
  "phu": "Khôi Việt hiệp mệnh vi kỳ cách",
  "nghia": "Khôi, Việt giáp hai bên Mệnh: kỳ cách, quý nhân hai phía.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "giap": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 36
 },
 {
  "phu": "Khôi Việt, Xương Khúc, Lộc Tồn phù, Hình Sát vô xung đài phú quí",
  "nghia": "Mệnh có Khôi, Việt, Xương, Khúc, Lộc Tồn hội, không Hình, sát: thế đẹp, phú quý.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Thiên Khôi",
    "Thiên Việt",
    "Văn Xương",
    "Văn Khúc",
    "Lộc Tồn"
   ],
   "khong": [
    "Thiên Hình",
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Lộc Tồn thủ ư tài trạch tích ngọc đôi kim",
  "nghia": "Tài Bạch có Lộc Tồn: tích lũy tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Lộc Tồn"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 174,
  "pho": true
 },
 {
  "phu": "Lộc Tồn thủ ư tài trạch tích ngọc đôi kim",
  "nghia": "Điền Trạch có Lộc Tồn: nhà đất, tích sản tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Lộc Tồn"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 174,
  "pho": true
 },
 {
  "phu": "Lộc Tồn Tí Ngọ Thiên Di",
  "nghia": "Lộc Tồn ở Thiên Di tại Tý hoặc Ngọ: tài lộc đến từ bên ngoài.",
  "tone": "tot",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Lộc Tồn"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 29
 },
 {
  "phu": "Song lộc trùng phùng chung thân phú quí",
  "nghia": "Lộc Tồn cùng Hóa Lộc: tài lộc dồi dào.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Lộc Tồn",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Quyền Lộc trùng phùng tài quan song mỹ",
  "nghia": "Quyền, Lộc gặp nhau: quyền và tiền đi đôi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Quyền",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Kình Dương nhập miếu phú quí thanh dương",
  "nghia": "Kình Dương ở tứ mộ: có sức, dám làm, danh tiếng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương"
   ],
   "chi": [
    "Thìn",
    "Tuất",
    "Sửu",
    "Mùi"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 47,
  "pho": true
 },
 {
  "phu": "Kình Đà Hoả Linh, phùng cát phát tài ngộ hung tắc kị",
  "nghia": "Sát tinh gặp cát tinh thì phát; gặp thêm hung thì nên kiêng.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ],
   "hoiMot": [
    [
     "Tả Phù",
     "Hữu Bật",
     "Thiên Khôi",
     "Thiên Việt",
     "Văn Xương",
     "Văn Khúc",
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 291,
  "pho": true
 },
 {
  "phu": "Dương Đà hiệp Kị vi bại cục",
  "nghia": "Kình, Đà giáp Mệnh có Hóa Kỵ: cách kém, nên thận trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Kỵ"
   ],
   "giap": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Hỏa Linh tương ngộ danh chấn chư bang",
  "nghia": "Hỏa, Linh cùng cung: danh tiếng bất ngờ nổi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hỏa Tinh",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Hỏa Linh hiệp mệnh vi bại cục",
  "nghia": "Hỏa, Linh giáp Mệnh: cách kém, tính nóng nảy.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "giap": [
    [
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 18
 },
 {
  "phu": "Thái Dương Dần đáo Ngọ ngộ cát trung vi phúc",
  "nghia": "Thái Dương ở Dần đến Ngọ gặp cát tinh: rực rỡ, nhiều phúc.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương"
   ],
   "chi": [
    "Dần",
    "Mão",
    "Thìn",
    "Tỵ",
    "Ngọ"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 31
 },
 {
  "phu": "Kình Dương, Hỏa Tinh vi hạ tiện",
  "nghia": "Kình Dương cùng Hỏa Tinh: nóng nảy, nên kiềm chế.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương",
    "Hỏa Tinh"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Thập thiên Hóa Lộc tối vinh xương, Nữ mệnh phùng chi đại cát tường",
  "nghia": "Nữ mệnh có Hóa Lộc: thuận về tài và tình cảm.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 46,
  "pho": true
 },
 {
  "phu": "Cánh đắc Lộc Tồn tương tấu hợp, Vượng phu ích tử thụ ân quang",
  "nghia": "Nữ mệnh Hóa Lộc gặp Lộc Tồn: gia đạo, tài lộc đầy đặn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Hóa Lộc"
   ],
   "hoi": [
    "Lộc Tồn"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 22
 },
 {
  "phu": "Tam phương tứ chính hiềm phùng sát, Cánh tại phu cung họa hoạn thâm",
  "nghia": "Phu Thê gặp sát tinh: nên chú ý trục trặc trong hôn nhân.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 305,
  "pho": true
 },
 {
  "phu": "Nhược trí bản cung vô chính diệu, Tất chủ sinh ly khắc hại chân",
  "nghia": "Phu Thê vô chính diệu: nên chú ý ổn định tình cảm.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "vcd": true
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 181,
  "pho": true
 },
 {
  "phu": "Thai cùng Tả Hữu hội trung, Sinh con có kẻ bên dòng tiểu tinh",
  "nghia": "Tử Tức có Thai gặp Tả, Hữu: nên chú ý chuyện con cái đa dạng.",
  "tone": "trung",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Thai"
   ],
   "hoi": [
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 29
 },
 {
  "phu": "Xương Khúc Lộc Cơ thanh tú sảo",
  "nghia": "Thiên Cơ gặp Xương hoặc Khúc và Lộc: thanh tú, khéo léo.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Cơ"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ],
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Âm Dương Tả Hữu tối từ tường",
  "nghia": "Thái Dương, Thái Âm hội Tả, Hữu: hiền hậu, nhiều quý nhân.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Thái Dương",
    "Thái Âm",
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 60,
  "pho": true
 },
 {
  "phu": "Cự Môn Kị tinh giai bất cát",
  "nghia": "Cự Môn cùng Hóa Kỵ: dễ thị phi, bất hòa.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Cự Môn",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 18
 },
 {
  "phu": "Tam Không hội Văn Xương ư Thê cung, thiềm cung chiết quế",
  "nghia": "Phu Thê có Văn Xương gặp Không, Kiếp: hôn nhân đến muộn hoặc có biến.",
  "tone": "trung",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Văn Xương"
   ],
   "hoi": [
    "Địa Không",
    "Thiên Không"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Tử Vi hội Vũ Khúc ư Tử Tức, quí nhi thực hòe",
  "nghia": "Tử Tức có Tử Vi gặp Vũ Khúc: con cái có địa vị.",
  "tone": "tot",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Tử Vi"
   ],
   "hoi": [
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 84,
  "pho": true
 },
 {
  "phu": "Song Hao cư Mão Dậu chúng thủy triều đông",
  "nghia": "Đại Hao, Tiểu Hao ở Mão hoặc Dậu: tiền bạc chảy ra nhiều, nên cân đối chi tiêu.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đại Hao",
    "Tiểu Hao"
   ],
   "chi": [
    "Mão",
    "Dậu"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Phụ Bật hiệp Đế vi thượng phẩm",
  "nghia": "Tử Vi được Tả, Hữu giáp hai bên: cách cao.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "giap": [
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Đào Hoa phạm chủ vi chí dâm",
  "nghia": "Tử Vi gặp Đào Hoa: duyên tình mạnh, nên giữ chừng mực.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Đào Hoa"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Đế ngộ hung đồ tuy cát diệc vô đạo",
  "nghia": "Tử Vi gặp sát tinh: được lợi nhưng nên giữ chính đạo.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 35
 },
 {
  "phu": "Văn Xương tính thanh thả khiết ích phu lợi tử",
  "nghia": "Nữ mệnh Văn Xương: thanh nhã, thuận lợi gia đạo.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Văn Xương"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 43,
  "pho": true
 },
 {
  "phu": "Mộc dục Hoa Cái thủ mệnh hoang dâm",
  "nghia": "Mộc Dục cùng Hoa Cái: ưa vẻ ngoài, dễ ham vui.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Mộc Dục",
    "Hoa Cái"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Hồng Loan phùng Địa Kiếp ư Phu cung bất hảo chi thập",
  "nghia": "Phu Thê có Hồng Loan gặp Địa Kiếp: nên cẩn trọng tình duyên.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Hồng Loan",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Hồng Loan cư Thê tiểu khắc",
  "nghia": "Phu Thê có Hồng Loan: chuyện hôn nhân có chút trở ngại nhỏ.",
  "tone": "trung",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Hồng Loan"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 84,
  "pho": true
 },
 {
  "phu": "Đào Hoa phùng Thiên Mã vô môi tự giá",
  "nghia": "Đào Hoa gặp Thiên Mã: duyên đến nhanh, tự chủ động.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đào Hoa",
    "Thiên Mã"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Sở ai giả Hồng Loan tứ mộ Phu cung",
  "nghia": "Phu Thê có Hồng Loan ở tứ mộ: nên chú ý đường hôn nhân.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Hồng Loan"
   ],
   "chi": [
    "Thìn",
    "Tuất",
    "Sửu",
    "Mùi"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Nam tử tối hiềm Nhật hãm",
  "nghia": "Nam mệnh Thái Dương hãm: thiếu thuận, cần nỗ lực.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nam",
   "sao": [
    "Thái Dương"
   ],
   "sang": false
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 18
 },
 {
  "phu": "Nữ tử thiết kị Hắc vân",
  "nghia": "Nữ mệnh Thái Âm hãm: thiếu thuận, nên chăm sức khỏe.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thái Âm"
   ],
   "sang": false
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 16
 },
 {
  "phu": "Hoa Cái Tấu Thư thanh cao tủng chúng",
  "nghia": "Hoa Cái cùng Tấu Thư: thanh cao, được chú ý.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hoa Cái",
    "Tấu Thư"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 17
 },
 {
  "phu": "Long Trì Phượng Các thủ đắc quí nhân",
  "nghia": "Long Trì cùng Phượng Các: dễ gặp quý nhân.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Long Trì",
    "Phượng Các"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Thiên Khốc Thiên Hư táo bạo",
  "nghia": "Khốc, Hư cùng cung: tính táo bạo.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Khốc",
    "Thiên Hư"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 12
 },
 {
  "phu": "Nữ tử Hồng Loan thủ mệnh chủ nhị phu",
  "nghia": "Nữ mệnh Hồng Loan: duyên tình nhiều thay đổi.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Hồng Loan"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 45,
  "pho": true
 },
 {
  "phu": "Nam tử Hoa Cái cư thân, xuất ngoại đa ái",
  "nghia": "Nam mệnh Hoa Cái ở Thân: duyên tình khi ở xa.",
  "tone": "trung",
  "dk": {
   "cung": "Thân",
   "gioi": "nam",
   "sao": [
    "Hoa Cái"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 38
 },
 {
  "phu": "Hạn ngộ Đà La sự diệc đa, Tất nhiên nhẫn nại yêu khiêm hoà",
  "nghia": "Hạn gặp Đà La: nhiều việc rườm rà, cần nhẫn nại và khiêm hòa.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Đà La"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 88,
  "pho": true
 },
 {
  "phu": "Nhược vô cát diệu lai tương hội, Tu giao nhất mộng nhập nam kha",
  "nghia": "Hạn có Đà La mà thiếu cát tinh: dễ công cốc, nên thận trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Đà La"
   ],
   "khong": [
    "Tả Phù",
    "Hữu Bật",
    "Thiên Khôi",
    "Thiên Việt",
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 14
 },
 {
  "phu": "Hiệp thân hiệp mệnh hữu Đà Dương, Hỏa Linh Không Kiếp hựu lai thương",
  "nghia": "Hạn bị Kình, Đà giáp hai bên: dễ bị cản trở.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "giap": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 89,
  "pho": true
 },
 {
  "phu": "Hỏa Tinh đắc địa hạn cung phùng, Hỉ khí doanh môn bách sự thông",
  "nghia": "Hạn gặp Hỏa Tinh sáng: việc dễ thông, nhiều tin vui.",
  "tone": "tot",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Hỏa Tinh"
   ],
   "chi": [
    "Dần",
    "Ngọ",
    "Tuất"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 26
 },
 {
  "phu": "Hỏa Tinh nhất tú tối quai trương, Vô sự quan tai náo nhất trường",
  "nghia": "Hạn có Hỏa Tinh thiếu cát tinh: dễ rắc rối, nên tránh tranh cãi.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Hỏa Tinh"
   ],
   "khong": [
    "Tả Phù",
    "Hữu Bật",
    "Thiên Khôi",
    "Thiên Việt",
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 16
 },
 {
  "phu": "Hạn chi Linh Tinh sự nhược hà, Tham Lang tương ngộ phúc hoàn đa",
  "nghia": "Hạn có Linh Tinh gặp Tham Lang: thuận, nhiều phúc.",
  "tone": "tot",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Linh Tinh",
    "Tham Lang"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Linh Tinh nhất tú bất khả đương, Thủ lâm nhị hạn tất điên cuồng",
  "nghia": "Hạn có Linh Tinh thiếu cát tinh: dễ rối loạn, bồn chồn.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Linh Tinh"
   ],
   "khong": [
    "Tả Phù",
    "Hữu Bật",
    "Thiên Khôi",
    "Thiên Việt",
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Thiên Không nhập hạn phá điền trang, Thế tử tu phòng hữu tổn thương",
  "nghia": "Hạn có Thiên Không: nên chú ý nhà đất và người thân.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Thiên Không"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 72,
  "pho": true
 },
 {
  "phu": "Kiếp tinh nhị hạn nhược tương phùng, Vị miễn đương niên vô họa nguy",
  "nghia": "Hạn gặp Địa Kiếp: nên thận trọng trong năm.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 100,
  "pho": true
 },
 {
  "phu": "Thiên Hao thủ hạn hiệu Thiên Thương, Phu Tử tại Trần dã tuyệt lương",
  "nghia": "Hạn có Thiên Thương: hao hụt, nên chi tiêu cẩn thận.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Thiên Thương"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 118,
  "pho": true
 },
 {
  "phu": "Thiên Sứ hạn lâm nhân cộng kị, Thạch Sùng hào phú phá gia vong",
  "nghia": "Hạn có Thiên Sứ: dễ hao tổn tiền bạc.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Thiên Sứ"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 115,
  "pho": true
 },
 {
  "phu": "Thiên Mã làm hạn tối vi lương, Tử Phủ Lộc Tồn ngộ phi thường",
  "nghia": "Hạn có Thiên Mã gặp Lộc Tồn và Tử Phủ: rất tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Thiên Mã"
   ],
   "hoi": [
    "Lộc Tồn"
   ],
   "hoiMot": [
    [
     "Tử Vi",
     "Thiên Phủ"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 12
 },
 {
  "phu": "Thiên Mã thủ hạn bất đắc trụ, Hựu pha Kiếp Không lai tương ngộ",
  "nghia": "Hạn có Thiên Mã gặp Không, Kiếp: biến động, khó ổn định.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Thiên Mã"
   ],
   "hoi": [
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 27
 },
 {
  "phu": "Hạn trung nhược ngộ Lộc lai lâm, Tước vị cao thiên tá thánh minh",
  "nghia": "Hạn có Lộc: dễ thăng tiến.",
  "tone": "tot",
  "dk": {
   "cung": "Đại hạn",
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 163,
  "pho": true
 },
 {
  "phu": "Thường thứ tương phùng đương đại quí, Tự nhiên súc tích quảng kim ngân",
  "nghia": "Hạn có Lộc: tích lũy của cải.",
  "tone": "tot",
  "dk": {
   "cung": "Đại hạn",
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 163,
  "pho": true
 },
 {
  "phu": "Thử tinh chủ hạn hỉ phi thường, Quan Lộc cao thăng tá đế vương",
  "nghia": "Hạn có Hóa Quyền: thăng tiến trong công việc.",
  "tone": "tot",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 90,
  "pho": true
 },
 {
  "phu": "Quyền tinh thử ngộ Vũ Tham lâm, Tác sự cầu mưu tận đắc thành",
  "nghia": "Hạn có Hóa Quyền gặp Vũ Khúc, Tham Lang: mưu sự dễ thành.",
  "tone": "tot",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Hóa Quyền"
   ],
   "hoi": [
    "Vũ Khúc",
    "Tham Lang"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 24
 },
 {
  "phu": "Khoa tinh nhị hạn ngộ Văn Xương, Sĩ tử phùng chi tính danh hương",
  "nghia": "Hạn có Hóa Khoa gặp Văn Xương: thi cử, học hành thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Hóa Khoa",
    "Văn Xương"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Tăng đạo thứ nhân đa phú quí, Bách mưu bách toại sự anh dương",
  "nghia": "Hạn có Hóa Khoa: mưu sự toại ý.",
  "tone": "tot",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Hóa Khoa"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 84,
  "pho": true
 },
 {
  "phu": "Kị tinh nhập miếu phản vi giai, Túng hữu quan tai diệc bất thương",
  "nghia": "Hạn có Hóa Kỵ ở cung sáng: khá, ít hại.",
  "tone": "tot",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Hóa Kỵ"
   ],
   "sang": true
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 51,
  "pho": true
 },
 {
  "phu": "Nhất tấn nhất thoái danh bất toại, Cánh kiêm ngộ cát hảo an khang",
  "nghia": "Hạn có Hóa Kỵ gặp cát tinh: tiến lùi xen kẽ nhưng an.",
  "tone": "trung",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Hóa Kỵ"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 76,
  "pho": true
 },
 {
  "phu": "Nhị hạn không trung kiến kị tinh, Chí tài vi họa tất gia khuynh",
  "nghia": "Hạn có Hóa Kỵ gặp Tuần, Triệt hoặc Không: nên giữ tài chính.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Hóa Kỵ"
   ],
   "hoiMot": [
    [
     "Tuần",
     "Triệt",
     "Địa Không",
     "Thiên Không"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 81,
  "pho": true
 },
 {
  "phu": "Kị tinh lạc hãm tại nhân cung, Ác Sát gia lâm tác họa hung",
  "nghia": "Hạn có Hóa Kỵ ở cung hãm gặp sát tinh: nên thận trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Hóa Kỵ"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Tử Vi nữ mệnh thủ Thân cung, Thiên Phủ tôn tinh đồng đáo cung",
  "nghia": "Nữ mệnh Thân có Tử Vi, Thiên Phủ: nền tảng vững, được trọng.",
  "tone": "tot",
  "dk": {
   "cung": "Thân",
   "gioi": "nu",
   "sao": [
    "Tử Vi",
    "Thiên Phủ"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Tử Vi nữ mệnh thủ Phu cung, Tam phương cát củng tiện vi vinh",
  "nghia": "Phu Thê có Tử Vi, cát tinh hội: hôn nhân thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "gioi": "nu",
   "sao": [
    "Tử Vi"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 30
 },
 {
  "phu": "Nhược phùng sát Phá lai xung phá, Y lộc doanh dư dâm sảo dung",
  "nghia": "Phu Thê có Tử Vi gặp Phá Quân và sát tinh: tình cảm nhiều biến động.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "gioi": "nu",
   "sao": [
    "Tử Vi"
   ],
   "hoi": [
    "Phá Quân"
   ],
   "hoiMot": [
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Tử Vi đóng mệnh người hiền, Vượng phu ích tử lại thêm sang giàu",
  "nghia": "Nữ mệnh Tử Vi: hiền, thuận gia đạo.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Tử Vi"
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 43,
  "pho": true
 },
 {
  "phu": "Thiên Cơ nữ mệnh cát tinh phù, Tác sự thao trì quá trượng phu",
  "nghia": "Nữ mệnh Thiên Cơ gặp cát tinh: giỏi quán xuyến.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Cơ"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 34
 },
 {
  "phu": "Quyền Lộc cung trung phùng thủ chiếu, Vinh ưng kháo mệnh quí như hà",
  "nghia": "Nữ mệnh Thiên Cơ gặp Quyền, Lộc: vinh hiển.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Cơ"
   ],
   "hoi": [
    "Hóa Quyền"
   ],
   "hoiMot": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Thiên Cơ tinh dữ Thái Âm đồng, Nữ mệnh phùng chi tất sảo dung",
  "nghia": "Nữ mệnh Cơ Nguyệt: khéo, thích làm đẹp.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Cơ",
    "Thái Âm"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Sát hung kém phúc đã đành, Dần Thân Cơ Nguyệt dành dành dâm bôn",
  "nghia": "Nữ mệnh Cơ Nguyệt ở Dần, Thân: tình cảm nhiều biến động.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Cơ",
    "Thái Âm"
   ],
   "chi": [
    "Dần",
    "Thân"
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Thái Dương chính chiếu phụ nhân thân, Tư mạo thù thường tính cách trinh",
  "nghia": "Nữ mệnh Thái Dương: đoan trang, nổi bật.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thái Dương"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 40
 },
 {
  "phu": "Cánh đắc cát tinh đồng chủ chiếu, Kim quan phong tặng tác phu nhân",
  "nghia": "Nữ mệnh Thái Dương gặp cát tinh: vị thế được trọng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thái Dương"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 30
 },
 {
  "phu": "Thái Dương an mệnh hữu kỳ năng, Hãm địa tu phòng yếu sát lăng",
  "nghia": "Nữ mệnh Thái Dương hãm gặp sát: nên phòng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thái Dương"
   ],
   "sang": false,
   "hoiMot": [
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Nữ mệnh Dương chiếu ắt là, Phu nhân nếu chẳng gặp tà ác tinh",
  "nghia": "Nữ mệnh có Thái Dương chiếu, không sát: thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "hoi": [
    "Thái Dương"
   ],
   "khong": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 36
 },
 {
  "phu": "Nữ nhân Vũ Khúc mệnh trung phùng, Thiên Phủ gia chí chí khí hùng",
  "nghia": "Nữ mệnh Vũ Khúc Thiên Phủ: chí khí mạnh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Vũ Khúc",
    "Thiên Phủ"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Tả Hữu Lộc lai tương phùng tụ, Song toàn phú quí mỹ vô cùng",
  "nghia": "Nữ mệnh Vũ Khúc gặp Tả, Hữu, Lộc: giàu, đẹp.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Vũ Khúc"
   ],
   "hoi": [
    "Tả Phù",
    "Hữu Bật"
   ],
   "hoiMot": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Vũ Quyền nữ Mệnh đồng lâm, Gái khôn khiến đấng phu quân nể vì",
  "nghia": "Nữ mệnh Vũ Khúc cùng Hóa Quyền: có chủ kiến.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Vũ Khúc",
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Vũ Khúc gọi Quả Tú tinh, Nữ mệnh gặp phải cướp tranh quyền chồng",
  "nghia": "Nữ mệnh Vũ Khúc: tính độc lập mạnh, cần cân bằng quyền trong gia đình.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 47,
  "pho": true
 },
 {
  "phu": "Thiên Đồng thủ mệnh phụ nhân thân, Tính cách thông minh linh lợi nhân",
  "nghia": "Nữ mệnh Thiên Đồng: thông minh, linh hoạt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Đồng"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 51,
  "pho": true
 },
 {
  "phu": "Xương Khúc cánh lai tương hội xứ, Du du tài lộc tự thiên thân",
  "nghia": "Nữ mệnh Thiên Đồng gặp Xương, Khúc: tài lộc thong thả.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Đồng"
   ],
   "hoi": [
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Thiên Đồng nhược dữ Thái Âm đồng, Nữ Mệnh phùng chi dâm sảo dung",
  "nghia": "Nữ mệnh Đồng Âm: nét duyên, tình cảm phong phú.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Đồng",
    "Thái Âm"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Đồng Nguyệt Tí gái hoa dung",
  "nghia": "Nữ mệnh Đồng Âm ở Tý: dung mạo ưa nhìn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Đồng",
    "Thái Âm"
   ],
   "chi": [
    "Tý"
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Gặp Tang, Diêu, Khốc khóc chồng lắm phen",
  "nghia": "Nữ mệnh gặp Tang, Riêu, Khốc: tình cảm nhiều sóng gió.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "hoiMot": [
    [
     "Tang Môn"
    ],
    [
     "Thiên Riêu"
    ],
    [
     "Thiên Khốc"
    ]
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 28
 },
 {
  "phu": "Chư cát củng chiếu vô sát phá, Định giao phong tặng tại thanh xuân",
  "nghia": "Nữ mệnh Liêm Trinh gặp cát tinh, không sát: sớm thành đạt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Liêm Trinh"
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
   ],
   "khong": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh",
    "Linh Tinh",
    "Phá Quân"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Nữ nhân Thiên Phủ mệnh thân cung, Tính cách thông minh hoa dang dung",
  "nghia": "Nữ mệnh Thiên Phủ: thông minh, đoan trang.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Phủ"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 56,
  "pho": true
 },
 {
  "phu": "Cánh đắc Tử Vi tam hội chiếu, Kim quan hà bội thu hoàng phong",
  "nghia": "Nữ mệnh Thiên Phủ gặp Tử Vi: vị thế được trọng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Phủ"
   ],
   "hoi": [
    "Tử Vi"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 40
 },
 {
  "phu": "Hỏa Linh Kình Đà lai xung hội, Tính cách dung thường đa hối trẻ",
  "nghia": "Nữ mệnh Thiên Phủ gặp sát tinh: dễ lận đận.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Phủ"
   ],
   "hoiMot": [
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 16
 },
 {
  "phu": "Nữ mệnh có Phủ ai bì, Vượng phu ích tử thao ngay hiền hòa",
  "nghia": "Nữ mệnh Thiên Phủ: hiền, thuận gia đạo.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Phủ"
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 56,
  "pho": true
 },
 {
  "phu": "Phủ rất ghét những sao Tứ Sát, Biến người thành hiểm ác gian manh",
  "nghia": "Thiên Phủ gặp nhiều sát tinh: dễ lệch tính, nên giữ tâm.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ"
   ],
   "hoiMot": [
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
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 29
 },
 {
  "phu": "Nguyệt hội đồng Dương tại mệnh thân, Tam phương cát củng tất doanh phong",
  "nghia": "Nữ mệnh Thái Âm gặp Thái Dương: nhiều thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thái Âm"
   ],
   "hoi": [
    "Thái Dương"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 21
 },
 {
  "phu": "Bất kiến hung sát lai xung hội, Phú quí song toàn bảo đáo chung",
  "nghia": "Nữ mệnh Thái Âm không sát: ổn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thái Âm"
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Thái Âm hãm tại mệnh hóa thân, Bất hỉ tam phương ác sát xâm",
  "nghia": "Nữ mệnh Thái Âm hãm gặp sát: bất lợi.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thái Âm"
   ],
   "sang": false,
   "hoiMot": [
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Nữ lưu Nguyệt vượng số sang, Là người nhan sắc đảm đang lợi chồng",
  "nghia": "Nữ mệnh Thái Âm sáng: đảm đang, đẹp.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thái Âm"
   ],
   "sang": true
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 26
 },
 {
  "phu": "Tham Lang với Nguyệt cùng ngồi, Ở cung hãm địa ấy người dâm bôn",
  "nghia": "Nữ mệnh Tham Lang, Thái Âm hãm: tình cảm nhiều biến động.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Tham Lang",
    "Thái Âm"
   ],
   "sang": false
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Thái Âm mệnh ở Mão Dần, Lo đường kinh nguyệt chẳng phần thông dong",
  "nghia": "Nữ mệnh Thái Âm ở Mão hoặc Dần: nên chú ý sức khỏe nữ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thái Âm"
   ],
   "chi": [
    "Mão",
    "Dần"
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Tứ mộ cung trung đa cát lợi, Cánh phùng Tả Hữu phương vi quí",
  "nghia": "Nữ mệnh Tham Lang ở tứ mộ gặp Tả, Hữu: tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Tham Lang"
   ],
   "chi": [
    "Thìn",
    "Tuất",
    "Sửu",
    "Mùi"
   ],
   "hoi": [
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Tham Lang hãm địa nữ phi tường, Y thực tuy phong dã bất lương",
  "nghia": "Nữ mệnh Tham Lang hãm: nên giữ chính đạo.",
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 16
 },
 {
  "phu": "Tham, Liêm hãm mệnh gian tà, Hồng Đào diệu Hỉ ắt là tham dâm",
  "nghia": "Nữ mệnh Tham, Liêm hãm: nên giữ chừng mực trong tình cảm.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Tham Lang",
    "Liêm Trinh"
   ],
   "sang": false,
   "hoiMot": [
    [
     "Hồng Loan",
     "Đào Hoa",
     "Thiên Riêu",
     "Thiên Hỷ"
    ]
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Ở hãm cung hãy đoán cho tường, Nhưng có Tuần Triệt lại phường đoan trinh",
  "nghia": "Nữ mệnh Tham Lang, Đào Hoa hãm gặp Tuần, Triệt: được chế bớt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Tham Lang",
    "Đào Hoa"
   ],
   "sang": false,
   "hoiMot": [
    [
     "Tuần",
     "Triệt"
    ]
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Cự Môn vượng địa đa sinh cát, Tả Hữu gia lâm thọ cánh trường",
  "nghia": "Nữ mệnh Cự Môn sáng gặp Tả, Hữu: tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Cự Môn"
   ],
   "sang": true,
   "hoi": [
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Cự Môn mệnh hãm chủ dâm sương, Thị nữ thiên phòng thủy miễn ương",
  "nghia": "Nữ mệnh Cự Môn hãm: nên giữ ổn định trong gia đạo.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Cự Môn"
   ],
   "sang": false
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 21
 },
 {
  "phu": "Mão Dậu Cự Cơ rất hay, Công danh vinh hiển một tay anh hào",
  "nghia": "Cự Môn, Thiên Cơ ở Mão hoặc Dậu: công danh vinh hiển.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Cự Môn",
    "Thiên Cơ"
   ],
   "chi": [
    "Mão",
    "Dậu"
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 19
 },
 {
  "phu": "Nữ mệnh cách ấy đẹp sao, Vượng phu ích tử càng màu càng xinh",
  "nghia": "Nữ mệnh Cự Cơ ở Mão, Dậu: đẹp.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Cự Môn",
    "Thiên Cơ"
   ],
   "chi": [
    "Mão",
    "Dậu"
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 14
 },
 {
  "phu": "Nữ nhân chi mệnh Thiên Tướng tinh, Tính cách thông minh bách sự ninh",
  "nghia": "Nữ mệnh Thiên Tướng: thông minh, ổn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Tướng"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 42,
  "pho": true
 },
 {
  "phu": "Phá Quân Thất Sát lai tương hội, Dương Đà Hỏa Linh tối sở kị",
  "nghia": "Nữ mệnh Thiên Tướng gặp Phá, Sát và sát tinh: bất lợi.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Tướng"
   ],
   "hoi": [
    "Phá Quân",
    "Thất Sát"
   ],
   "hoiMot": [
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
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Nếu gặp Khúc Cái Mộc Đào, Vẫn là phúc trọng tính ai đa tình",
  "nghia": "Nữ mệnh Thiên Tướng gặp Khúc, Cái, Mộc, Đào: phúc nhưng đa tình.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Tướng"
   ],
   "hoiMot": [
    [
     "Văn Khúc",
     "Hoa Cái",
     "Mộc Dục",
     "Đào Hoa"
    ]
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 36
 },
 {
  "phu": "Phá Quân Mão Dậu bất vi lương",
  "nghia": "Nữ mệnh Phá Quân ở Mão hoặc Dậu: gia đạo có nhiều biến.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Phá Quân"
   ],
   "chi": [
    "Mão",
    "Dậu"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Lương Tị Hợi đứng cùng Thiên Mã, Chi đổi thay ấy gã phiêu linh",
  "nghia": "Thiên Lương ở Tỵ, Hợi gặp Thiên Mã: hay di chuyển.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Lương",
    "Thiên Mã"
   ],
   "chi": [
    "Tỵ",
    "Hợi"
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Nữ Mệnh sầu phùng Thất Sát tinh, Bình sinh tác sự quả thông minh",
  "nghia": "Nữ mệnh Thất Sát: thông minh, quyết đoán.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thất Sát"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 45,
  "pho": true
 },
 {
  "phu": "Nữ mệnh Sát Ngọ Tí ngồi, Gặp Riêu, Kiếp phải lệ rơi vì tình",
  "nghia": "Nữ mệnh Thất Sát ở Tý, Ngọ gặp Riêu, Kiếp: tình cảm nhiều sóng gió.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thất Sát"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ],
   "hoi": [
    "Thiên Riêu",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Phá Quân Tí Ngọ vi nhập miếu, Nữ mệnh phùng chi phúc thọ xương",
  "nghia": "Nữ mệnh Phá Quân ở Tý, Ngọ: sáng, nhiều phúc.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Phá Quân"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Phá Quân nữ mệnh bất nghi phùng, Kình Dương gia hãm tiện vi hung",
  "nghia": "Nữ mệnh Phá Quân gặp Kình Dương: bất lợi.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Phá Quân",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Phá Quân nữ mệnh khá xem, Đắc địa cát diệu hóa hiền hiển vang",
  "nghia": "Nữ mệnh Phá Quân sáng gặp cát: nổi bật.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Phá Quân"
   ],
   "sang": true,
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
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 21
 },
 {
  "phu": "Nữ nhân Thân Mệnh trí Văn Xương, Tú lệ thanh kỳ phúc cánh trường",
  "nghia": "Nữ mệnh Văn Xương: thanh tú.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Văn Xương"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 43,
  "pho": true
 },
 {
  "phu": "Tử Phú đối xung tam hợp chiếu, Quản giao phú quí trước hà thường",
  "nghia": "Nữ mệnh Văn Xương gặp Tử Vi, Thiên Phủ: tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Văn Xương"
   ],
   "hoi": [
    "Tử Vi",
    "Thiên Phủ"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Dương Phi đẹp vốn dòng Cơ Nguyệt, Lại Khúc Xương ba miệt triều viên",
  "nghia": "Nữ mệnh Cơ Nguyệt gặp Xương, Khúc: đẹp, nhiều duyên.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "gioi": "nu",
   "sao": [
    "Thiên Cơ",
    "Thái Âm"
   ],
   "hoi": [
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Phú nôm (trích trong Toàn thư, bản Vũ Tài Lục)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Kình Đà giáp với Mệnh viên",
  "nghia": "Kình, Đà giáp hai bên Mệnh: nhiều cản trở, nên thận trọng.",
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
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 94,
  "pho": true
 },
 {
  "phu": "Tứ Linh Cái Hổ Phượng Long, Công danh quyền thế lẫy lừng một mai",
  "nghia": "Long Trì, Phượng Các, Hoa Cái, Bạch Hổ hội đủ: danh và quyền về sau.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Long Trì",
    "Phượng Các",
    "Hoa Cái",
    "Bạch Hổ"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 164,
  "pho": true
 },
 {
  "phu": "Hổ mà gặp Tấu đồng cung, Công danh thi cử nên công dễ dàng",
  "nghia": "Bạch Hổ cùng Tấu Thư: thi cử, công danh dễ thành.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Bạch Hổ",
    "Tấu Thư"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Mã ngộ Linh Hỏa miếu cung, Chiến binh Mã ấy vẫy vùng mọi nơi",
  "nghia": "Thiên Mã gặp Linh hoặc Hỏa: xông xáo, hợp hoạt động mạnh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Mã"
   ],
   "motTrong": [
    [
     "Linh Tinh",
     "Hỏa Tinh"
    ]
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Mã cùng Khốc Khách hợp vào, Ngựa kia có nhạc anh hào lên yên",
  "nghia": "Thiên Mã gặp Khốc, Khách: nổi danh khi đi xa.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Mã",
    "Thiên Khốc",
    "Điếu Khách"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Thiên hình chặn Mã chẳng nên",
  "nghia": "Thiên Hình cùng Thiên Mã: việc đi lại, di chuyển nhiều trở ngại.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Hình",
    "Thiên Mã"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Mã kia Tuyệt địa một nhà, Cùng đồ Mã ấy thiệt là vô phương",
  "nghia": "Thiên Mã ở thế Tuyệt: đường đi khó khăn.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Mã",
    "Tuyệt"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 28
 },
 {
  "phu": "Đà La với Mã sum vầy, Dây gai vương vít Mã này gãy chân",
  "nghia": "Đà La cùng Thiên Mã: di chuyển nhiều vướng mắc.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đà La",
    "Thiên Mã"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 14
 },
 {
  "phu": "Kình, Binh, Ấn, Tướng họp cùng, Tài kiêm văn võ vẩy vùng bốn phương",
  "nghia": "Kình, Binh, Ấn, Tướng hội: văn võ kiêm toàn, hoạt động rộng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Kình Dương",
    "Phục Binh",
    "Quốc Ấn",
    "Tướng Quân"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Thái Dương đóng ở Hợi cung, Gặp Kình hay Kị yểu vong hoặc mù",
  "nghia": "Thái Dương ở Hợi gặp Kình hoặc Kỵ: nên chú ý mắt, sức khỏe.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương"
   ],
   "chi": [
    "Hợi"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Hóa Kỵ"
    ]
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Thiên Đồng thủ Mệnh ấy là, Đổi thay tính khí khó mà chiều nuông",
  "nghia": "Thiên Đồng thủ Mệnh: tính khí hay đổi.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Đồng"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 94,
  "pho": true
 },
 {
  "phu": "Thái Dương Kình ở Ngọ cung, Mệnh viên tại đó uy hùng tướng quân",
  "nghia": "Thái Dương, Kình Dương ở Ngọ: uy mạnh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương",
    "Kình Dương"
   ],
   "chi": [
    "Ngọ"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Thái Âm cư Hợi Mệnh thân, Gặp Khoa Quyền Lộc tấm thân sang giàu",
  "nghia": "Thái Âm ở Hợi gặp Khoa, Quyền, Lộc: sang giàu.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Âm"
   ],
   "chi": [
    "Hợi"
   ],
   "hoi": [
    "Hóa Khoa",
    "Hóa Quyền",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Mấy người phú quí không toàn, Bởi chưng Nhật Nguyệt hợp đoàn sát tinh",
  "nghia": "Nhật, Nguyệt gặp sát tinh: danh lợi khó trọn.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Thái Dương",
    "Thái Âm"
   ],
   "hoiMot": [
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
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 59,
  "pho": true
 },
 {
  "phu": "Song hao Tham hội đa dâm",
  "nghia": "Đại Hao, Tiểu Hao hội Tham Lang: ham vui, hao tán.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đại Hao",
    "Tiểu Hao"
   ],
   "hoi": [
    "Tham Lang"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Thiên Đồng ngộ Quí mười phần thanh tao",
  "nghia": "Thiên Đồng gặp Quý tinh: thanh nhã.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Đồng"
   ],
   "motTrong": [
    [
     "Thiên Quý",
     "Ân Quang"
    ]
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Thất Sát Hình Kị Đà Dương, Chẳng mặt thì ngực có thương mới là",
  "nghia": "Thất Sát gặp Hình, Kỵ, Đà, Kình: nên chú ý sức khỏe.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát",
    "Thiên Hình"
   ],
   "motTrong": [
    [
     "Hóa Kỵ",
     "Đà La",
     "Kình Dương"
    ]
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Khốc Hư gặp Cơ chớ màng, Bệnh lao phải liệu lo toan lấy mình",
  "nghia": "Khốc, Hư gặp Thiên Cơ: nên chú ý hô hấp.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Khốc",
    "Thiên Hư"
   ],
   "hoi": [
    "Thiên Cơ"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Vũ Tham tài bạch phải tường, Không gia ác sát ấy phương hoạnh tài",
  "nghia": "Tài Bạch Vũ, Tham không sát tinh: tiền bạc có thể lên bất ngờ.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Vũ Khúc",
    "Tham Lang"
   ],
   "khong": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Liêm Hao tài mệnh cùng ngồi, Phá tan tổ nghiệp ra người bần nhân",
  "nghia": "Liêm Trinh gặp Hao: tài sản dễ hao.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "motTrong": [
    [
     "Đại Hao",
     "Tiểu Hao"
    ]
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 17
 },
 {
  "phu": "Liêm Kiếp Kình Dương một nơi, Tại cung Mão Dậu cuộc đời tù lao",
  "nghia": "Liêm, Kiếp, Kình ở Mão hoặc Dậu: nên thận trọng pháp lý.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh",
    "Địa Kiếp",
    "Kình Dương"
   ],
   "chi": [
    "Mão",
    "Dậu"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Liêm Trinh ở Mão Dậu cung, Sát tinh hội tụ công danh chớ hòng",
  "nghia": "Liêm Trinh ở Mão hoặc Dậu gặp sát tinh: công danh khó.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "chi": [
    "Mão",
    "Dậu"
   ],
   "hoiMot": [
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
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 10
 },
 {
  "phu": "Phúc cung thấy đứng đầu Thiên Phủ, Địa Kiếp kia vào đó rủi thay",
  "nghia": "Phúc Đức có Thiên Phủ và Địa Kiếp: nên chú ý phúc đức.",
  "tone": "xau",
  "dk": {
   "cung": "Phúc Đức",
   "sao": [
    "Thiên Phủ",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Nguyệt hãm gặp Triệt không thành quí",
  "nghia": "Thái Âm hãm gặp Triệt: khó thành đạt.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Âm",
    "Triệt"
   ],
   "sang": false
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Tí Ngọ Tham đóng hai cung, Nếu không Tuần Triệt là phường bất nhân",
  "nghia": "Tham Lang ở Tý hoặc Ngọ không Tuần, Triệt: tham vọng mạnh, nên tự chế.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ],
   "khong": [
    "Tuần",
    "Triệt"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Cự gặp Hổ, Tuế, Hình hội viên, Ấy là nghề thầy kiện quan tòa",
  "nghia": "Cự Môn gặp Hổ, Tuế, Hình: hợp nghề luật, tranh tụng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Cự Môn"
   ],
   "hoi": [
    "Bạch Hổ",
    "Thái Tuế",
    "Thiên Hình"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Thìn Tuất Tướng gặp Thiên Không, Cát tinh hội tụ, uy trong quyền ngoài",
  "nghia": "Thiên Tướng ở Thìn, Tuất cùng Thiên Không gặp cát tinh: uy tín.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Tướng",
    "Thiên Không"
   ],
   "chi": [
    "Thìn",
    "Tuất"
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
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Mão cung Lương Nhật đồng sinh, Mặt tươi vuông vắn, đời danh quan sang",
  "nghia": "Thiên Lương Thái Dương ở Mão: danh vị tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Lương",
    "Thái Dương"
   ],
   "chi": [
    "Mão"
   ]
  },
  "kenh": [
   "Phú nôm cốt tủy"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Tử Vi cư Ngọ, vô Hình Kỵ, Giáp Đinh Kỷ vị chí công khanh",
  "nghia": "Tử Vi tại Ngọ, không gặp Thiên Hình và Hóa Kỵ, tuổi Giáp, Đinh hoặc Kỷ: có xu hướng đạt chức vị cao.",
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
    "Thiên Hình",
    "Hóa Kỵ"
   ],
   "canNam": [
    "Giáp",
    "Đinh",
    "Kỷ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Tử Vi cư Tí Ngọ, Khoa, Quyền, Lộc chiếu tối vi kỳ",
  "nghia": "Tử Vi ở Tý hoặc Ngọ được Khoa, Quyền, Lộc chiếu về: thế cách thuận lợi, danh và quyền dễ thành.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ],
   "hoi": [
    "Hóa Khoa",
    "Hóa Quyền",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Đế tinh tại Thủy, nan giải tai ương",
  "nghia": "Tử Vi ở cung hành Thủy: khi gặp trắc trở thường khó gỡ nhanh, nên chuẩn bị kỹ và thận trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "chi": [
    "Tý",
    "Hợi"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 10
 },
 {
  "phu": "Mệnh nãi Dương Đà gia Kiếp vi thành, thọ giảm",
  "nghia": "Mệnh có Tử Vi lại gặp Kình Dương hoặc Đà La cùng Địa Kiếp: nên chú ý giữ gìn sức khỏe, tránh liều lĩnh.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "hoiMot": [
    [
     "Kình Dương",
     "Đà La"
    ],
    [
     "Địa Kiếp"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 12
 },
 {
  "phu": "Đế tọa Ly cung, hạnh ngộ Khôi Khoa hữu tài phụ chính",
  "nghia": "Tử Vi tại Ngọ gặp Khôi và Khoa: có tài, hợp vai trò tham mưu, hỗ trợ điều hành.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "chi": [
    "Ngọ"
   ],
   "hoi": [
    "Thiên Khôi",
    "Hóa Khoa"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Tử Vi Dần Ngọ Thân cung, nữ mệnh chủ vượng phu ích tử",
  "nghia": "Nữ mệnh Tử Vi ở Dần, Ngọ hoặc Thân: thiên về có vai trò đỡ đầu cho gia đình, hỗ trợ chồng con.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "chi": [
    "Dần",
    "Ngọ",
    "Thân"
   ],
   "gioi": "nu"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 10
 },
 {
  "phu": "Nữ mệnh Tử Vi cư Tý Dậu Tỵ Hợi gia tứ sát, mỹ ngọc hà điểm, nhật hậu bất mỹ",
  "nghia": "Nữ mệnh Tử Vi gặp sát tinh: nền tảng tốt nhưng có khiếm khuyết, về sau nên chú ý tu dưỡng và giữ gìn.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "chi": [
    "Tý",
    "Dậu",
    "Tỵ",
    "Hợi"
   ],
   "gioi": "nu",
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Ngôi Tử Vi đóng vào chốn hãm, quyền cứu tha thiểu giảm vô uy",
  "nghia": "Tử Vi ở thế hãm: uy quyền giảm, khả năng che chở người khác hạn chế, cần dựa nhiều vào nỗ lực cá nhân.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "sang": false
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Tử Vi dữ chư sát đồng cung, chữ cát hội chiếu, quân tử tại dã, tiểu nhân tại vị, chủ nhân gian trá",
  "nghia": "Tử Vi đồng cung với sát tinh, có cát tinh hội chiếu: tính cách hai mặt, khéo mưu tính, nên giữ sự ngay thẳng.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 29
 },
 {
  "phu": "Tử Vi, Xương Khúc phú quí khả kỳ",
  "nghia": "Tử Vi gặp Xương, Khúc: thiên về học vấn, văn nhã, có điều kiện thành đạt về danh và lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "hoi": [
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 26
 },
 {
  "phu": "Tử Vi quyền lộc ngộ Dương Đà, tuy mỹ cát nhi vô đạo vi nhậm, tâm thuật bất chính",
  "nghia": "Tử Vi có Quyền, Lộc nhưng gặp Dương, Đà: dù có danh lợi vẫn nên cẩn trọng cách hành xử để giữ uy tín.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "hoi": [
    "Hóa Quyền",
    "Hóa Lộc"
   ],
   "hoiMot": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Tử Lộc đồng cung, Phụ Bật chiếu, quý bất khả ngôn",
  "nghia": "Tử Vi đồng cung với Lộc, lại có Tả Hữu chiếu: thế cách vững, thiên về phú quý và có người trợ giúp.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ],
   "hoi": [
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Tử Vi vô Phụ Bật đồng hành, vi cô quân, mỹ trung bất túc",
  "nghia": "Tử Vi thiếu Tả Phù, Hữu Bật hội: như người đứng đầu thiếu cánh tay, có điểm mạnh nhưng thiếu người hỗ trợ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "khong": [
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 45,
  "pho": true
 },
 {
  "phu": "Tử Phủ Nhật Nguyệt cư vượng địa, đoán định công hầu khí",
  "nghia": "Tử Vi, Thiên Phủ đồng cung cùng Nhật Nguyệt ở thế sáng: khí cách lớn, thiên về chức vị và sự nghiệp cao.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thiên Phủ"
   ],
   "hoi": [
    "Thái Dương",
    "Thái Âm"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Vật khai ư Dần, vụ thành ư Thân, Tử Phủ đồng cung vi đắc địa",
  "nghia": "Tử Vi, Thiên Phủ đồng cung tại Dần hoặc Thân là vị trí đắc địa, nền tảng ổn định, thành tựu đến dần.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thiên Phủ"
   ],
   "chi": [
    "Dần",
    "Thân"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 12
 },
 {
  "phu": "Tử Phủ đồng cung vô sát tấu, Giáp nhân hưởng phúc chung thân",
  "nghia": "Tử Vi, Thiên Phủ đồng cung, không có sát tinh, tuổi Giáp: nền phúc ổn định, đời sống tương đối thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thiên Phủ"
   ],
   "khong": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh",
    "Linh Tinh",
    "Địa Không",
    "Địa Kiếp"
   ],
   "canNam": [
    "Giáp"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Tử Phủ tại viên gia cát diệu, hầu bá chi tài",
  "nghia": "Tử Vi hoặc Thiên Phủ tại Mệnh có thêm cát tinh hội: thiên về tài năng quản lý, dễ có vị trí cao.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Tử Vi",
     "Thiên Phủ"
    ]
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 138,
  "pho": true
 },
 {
  "phu": "Tử Phủ giáp Mệnh vi quý cách",
  "nghia": "Mệnh được Tử Vi và Thiên Phủ kẹp hai bên: thế cách quý, thiên về được che chở, thuận lợi từ bên ngoài.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "giap": [
    [
     "Tử Vi",
     "Thiên Phủ"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 28
 },
 {
  "phu": "Tử Phủ triều viên thực lộc vạn chung",
  "nghia": "Tử Vi, Thiên Phủ cùng hội chiếu về Mệnh: thiên về đời sống đủ đầy, bổng lộc ổn định.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Tử Vi",
    "Thiên Phủ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 239,
  "pho": true
 },
 {
  "phu": "Tử Phủ triều viên hoạt lộc phùng, chung thân phúc hậu chí tam công",
  "nghia": "Tử Vi, Thiên Phủ hội chiếu lại gặp Lộc: phúc dày, thiên về địa vị cao và tài lộc lâu dài.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Tử Vi",
    "Thiên Phủ"
   ],
   "hoiMot": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 115,
  "pho": true
 },
 {
  "phu": "Tử Phủ đồng cung cư miếu địa, tất định xuất giai công khanh khí",
  "nghia": "Tử Vi, Thiên Phủ đồng cung ở thế sáng: khí cách lớn, thiên về làm nên địa vị cao.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thiên Phủ"
   ],
   "sang": true
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 12
 },
 {
  "phu": "Tử Phủ thao lược đa mưu, giai do Tử Phủ phùng Quyền Kỵ",
  "nghia": "Tử Vi hoặc Thiên Phủ gặp Quyền và Kỵ: nhiều mưu lược, tính toán sâu, có sức chịu đựng nhưng hay trăn trở.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Tử Vi",
     "Thiên Phủ"
    ]
   ],
   "hoi": [
    "Hóa Quyền",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Tử Vi Vũ Khúc, Sát diệu phùng, nhất sinh tăng lại sính anh hùng",
  "nghia": "Tử Vi gặp Vũ Khúc và Thất Sát: tính quyết đoán, thiên về võ nghiệp, kỷ luật hoặc việc đòi hỏi bản lĩnh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "hoi": [
    "Vũ Khúc",
    "Thất Sát"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 61,
  "pho": true
 },
 {
  "phu": "Tử Vi Thái Âm Sát diệu phùng, nhất sinh tào sử sính anh hùng",
  "nghia": "Tử Vi gặp Thái Âm và Thất Sát: thiên về bản lĩnh, có thể nổi bật trong công việc cần sự quyết đoán.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "hoi": [
    "Thái Âm",
    "Thất Sát"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Đế tọa La Võng hoàn vi phi nghĩa chi nhân",
  "nghia": "Tử Vi ở Thìn hoặc Tuất: dễ vướng cảm giác bị ràng buộc, nên chú ý giữ chữ tín và cân nhắc lợi riêng với lẽ phải.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "chi": [
    "Thìn",
    "Tuất"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 14
 },
 {
  "phu": "Tử Vi Thiên Tướng thân phùng Phá, ngộ vượng Kình đa mưu yếm trá",
  "nghia": "Tử Vi, Thiên Tướng gặp Phá Quân và Kình Dương: nhiều tính toán, khéo che giấu; nên giữ sự minh bạch.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thiên Tướng"
   ],
   "hoi": [
    "Phá Quân",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Tử Phá mộ cung, bất trung bất hiếu",
  "nghia": "Tử Vi, Phá Quân đồng cung ở Sửu hoặc Mùi: tính phóng khoáng, khó theo khuôn phép; nên chú ý đạo nghĩa với gia đình.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Phá Quân"
   ],
   "chi": [
    "Sửu",
    "Mùi"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Tử Phá Vũ Khúc hội Dương Đà, công danh chỉ nghị kinh thương",
  "nghia": "Tử Vi, Phá Quân hội Vũ Khúc và Dương, Đà: đường công danh trắc trở, thiên về hướng kinh doanh hơn chốn quan trường.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "hoi": [
    "Phá Quân",
    "Vũ Khúc"
   ],
   "hoiMot": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 37
 },
 {
  "phu": "Tử Vi Phá Quân vô Tả Hữu, vô cát hiệu hung ác",
  "nghia": "Tử Vi, Phá Quân đồng cung mà thiếu Tả Hữu: thiếu người trợ lực, biến động nhiều, nên chọn việc vững chắc.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Phá Quân"
   ],
   "khong": [
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Tử Sát đồng lâm Tỵ Hợi, nhất triều phú quý song toàn",
  "nghia": "Tử Vi, Thất Sát đồng cung tại Tỵ hoặc Hợi: thiên về thành tựu muộn nhưng cả danh lẫn lợi đều có.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thất Sát"
   ],
   "chi": [
    "Tỵ",
    "Hợi"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Tử Vi Thất Sát gia Không Vong, hư danh thụ ấm",
  "nghia": "Tử Vi, Thất Sát gặp Không, Kiếp, Tuần hoặc Triệt: danh tiếng nhiều hơn thực lợi, thiên về nhờ phúc ấm tổ tiên.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thất Sát"
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Hợi cung Tử Sát gia kiêm Hình Ấn Khôi Khoa, xuất sứ kỳ công",
  "nghia": "Tử Vi, Thất Sát tại Hợi gặp Hình, Ấn, Khôi, Khoa: thiên về làm nên việc lớn trong lĩnh vực pháp luật, quân chính.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thất Sát"
   ],
   "chi": [
    "Hợi"
   ],
   "hoi": [
    "Thiên Hình",
    "Quốc Ấn"
   ],
   "hoiMot": [
    [
     "Thiên Khôi",
     "Hóa Khoa"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Tử Tham đồng cung, cư Đoài Chấn, bất trung bất nghĩa cận gian nhân",
  "nghia": "Tử Vi, Tham Lang đồng cung ở Mão hoặc Dậu: nhiều ham muốn, dễ gần người không tốt; nên chọn bạn và giữ nguyên tắc.",
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
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 10
 },
 {
  "phu": "Hạn phùng Tử Phủ Vũ Tướng, hạnh đắc Hồng Quyền, Khương Công hỷ ngộ Văn Vương",
  "nghia": "Đại hạn gặp Tử Phủ, Vũ Tướng cùng Hồng Loan và Quyền: thời kỳ thuận, dễ gặp người nâng đỡ và cơ hội lớn.",
  "tone": "tot",
  "dk": {
   "cung": "Đại hạn",
   "hoiMot": [
    [
     "Tử Vi",
     "Thiên Phủ"
    ],
    [
     "Vũ Khúc",
     "Thiên Tướng"
    ],
    [
     "Hồng Loan"
    ],
    [
     "Hóa Quyền"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 47,
  "pho": true
 },
 {
  "phu": "Nữ mệnh Tử Vi Thái Âm tinh, tảo ngộ hiền phu tín khả phùng",
  "nghia": "Nữ mệnh Tử Vi gặp Thái Âm: thiên về duyên lành, gặp người bạn đời đáng tin sớm.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "hoi": [
    "Thái Âm"
   ],
   "gioi": "nu"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Tử Vi cư Huynh Đệ diệc hữu trưởng huynh, ngộ Hóa Lộc vi trưởng",
  "nghia": "Cung Huynh Đệ có Tử Vi, gặp Hóa Lộc: anh chị em có người đứng ra gánh vác, địa vị khá.",
  "tone": "tot",
  "dk": {
   "cung": "Huynh Đệ",
   "sao": [
    "Tử Vi"
   ],
   "hoiMot": [
    [
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 29
 },
 {
  "phu": "Tử Phủ Vũ Tướng phu cung, kiêm Tam Kỳ gia hội, lược thao chi nữ",
  "nghia": "Cung Phu Thê của nữ mệnh có Tử Phủ, Vũ Tướng cùng Khoa, Quyền, Lộc: thiên về bạn đời có tài mưu lược và địa vị.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "gioi": "nu",
   "motTrong": [
    [
     "Tử Vi",
     "Thiên Phủ",
     "Vũ Khúc",
     "Thiên Tướng"
    ]
   ],
   "hoi": [
    "Hóa Khoa",
    "Hóa Quyền",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Thiên Phủ tối kỵ Không tinh, nhi ngộ Thanh Long phản vi cát tượng",
  "nghia": "Thiên Phủ gặp Không tinh vốn kém, nhưng có Thanh Long thì được chuyển thành thuận, tài lộc không mất hẳn.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ",
    "Thanh Long"
   ],
   "motTrong": [
    [
     "Địa Không",
     "Thiên Không"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Thiên Phủ kỵ ngộ Không tinh, lại nhập Tài cung tán hao vô độ",
  "nghia": "Thiên Phủ ở cung Tài Bạch gặp Không tinh: tiền tài dễ hao tán, nên chú ý chi tiêu.",
  "tone": "xau",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Thiên Phủ"
   ],
   "motTrong": [
    [
     "Địa Không",
     "Thiên Không"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 16
 },
 {
  "phu": "Thiên Phủ cư Ngọ Tuất, Thiên Tướng lai triều, Giáp nhân nhất phẩm chi quý",
  "nghia": "Thiên Phủ ở Ngọ hoặc Tuất, có Thiên Tướng hội về, tuổi Giáp: thế cách quý, thiên về địa vị cao.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ"
   ],
   "chi": [
    "Ngọ",
    "Tuất"
   ],
   "hoi": [
    "Thiên Tướng"
   ],
   "canNam": [
    "Giáp"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Dần phùng Phủ Tướng vi đăng nhất phẩm chi vinh",
  "nghia": "Mệnh ở Dần có Phủ, Tướng hội chiếu: thế cách đẹp, thiên về vinh hiển và chức vị.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Dần"
   ],
   "hoi": [
    "Thiên Phủ",
    "Thiên Tướng"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 27
 },
 {
  "phu": "Thiên Phủ Lộc Tồn Xương Khúc, cư vạn chung chi tư",
  "nghia": "Thiên Phủ gặp Lộc Tồn và Xương, Khúc: vừa có của vừa có chữ, thiên về cuộc sống sung túc.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ"
   ],
   "hoi": [
    "Lộc Tồn"
   ],
   "hoiMot": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Thiên Phủ, Xương Khúc, Tả Hữu cao đệ ân vinh",
  "nghia": "Thiên Phủ gặp Xương, Khúc, Tả, Hữu: thi cử, học hành thuận lợi, được người nâng đỡ.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ"
   ],
   "hoi": [
    "Văn Xương",
    "Văn Khúc",
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Phủ phùng Đà Tuế Tỵ cung cuồng ngôn loạn ngữ nói rông tháng ngày",
  "nghia": "Thiên Phủ ở Tỵ gặp Đà La và Thái Tuế: dễ nói nhiều, lời lẽ thiếu kiểm soát; nên cân nhắc khi phát ngôn.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phủ"
   ],
   "chi": [
    "Tỵ"
   ],
   "hoi": [
    "Đà La",
    "Thái Tuế"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Thiên Phủ Vũ Khúc cư Tài Trạch, cảnh khiêm Quyền Lộc phú đồ ông",
  "nghia": "Thiên Phủ, Vũ Khúc ở cung Tài Bạch cùng Quyền và Lộc: tài sản tích lũy được, thiên về giàu có.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Thiên Phủ",
    "Vũ Khúc"
   ],
   "hoi": [
    "Hóa Quyền"
   ],
   "hoiMot": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Thiên Phủ cư Tài Bạch diệc thị đa tài",
  "nghia": "Thiên Phủ ở cung Tài Bạch: thiên về có kho tàng, biết tích lũy và giữ của.",
  "tone": "tot",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Thiên Phủ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 84,
  "pho": true
 },
 {
  "phu": "Vũ Khúc chi tinh vi quả tú",
  "nghia": "Vũ Khúc thủ Mệnh: tính cứng rắn, độc lập; nên chú ý cân bằng với đời sống tình cảm và các mối quan hệ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 100,
  "pho": true
 },
 {
  "phu": "Vũ Tướng Dần Thân nhi ngộ Lộc Quyền, phú gia Vương Khải",
  "nghia": "Vũ Khúc, Thiên Tướng tại Dần hoặc Thân gặp Lộc và Quyền: thiên về tài lộc dồi dào, kinh doanh thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc",
    "Thiên Tướng"
   ],
   "chi": [
    "Dần",
    "Thân"
   ],
   "hoi": [
    "Hóa Lộc",
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Vũ Xương Tỵ Hợi dinh lục giáp suý biên đình",
  "nghia": "Vũ Khúc và Văn Xương ở Tỵ hoặc Hợi: thiên về võ nghiệp có học, hợp việc chỉ huy, nhiệm vụ xa.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc",
    "Văn Xương"
   ],
   "chi": [
    "Tỵ",
    "Hợi"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Vũ Khúc Tham Lang hoạnh phát tư tài",
  "nghia": "Vũ Khúc, Tham Lang đồng cung: tài vận có thể đến bất ngờ, nhất là từ kinh doanh; cần giữ vững khi lên xuống.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc",
    "Tham Lang"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Vũ Khúc Tham Lang gia Hóa Kỵ, kỹ nghệ chi nhân",
  "nghia": "Vũ Khúc, Tham Lang gặp Hóa Kỵ: thiên về làm nghề tay chân, kỹ thuật hơn là đường làm quan.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc",
    "Tham Lang",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Tiền bần hậu phú, Vũ Tham đồng Thân Mệnh chi cung",
  "nghia": "Vũ Khúc, Tham Lang đồng cung ở Mệnh: thiên về trẻ vất vả, về sau mới khá; cần kiên nhẫn chờ thời.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc",
    "Tham Lang"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Vũ Khúc Phá Quân phá tổ phá gia lao lực",
  "nghia": "Vũ Khúc, Phá Quân đồng cung: tài sản dễ biến động, thiên về tự lập, phải lao lực nhiều.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc",
    "Phá Quân"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 24
 },
 {
  "phu": "Vũ Phá cư Tỵ Hợi đãng tử vô lương",
  "nghia": "Vũ Khúc, Phá Quân ở Tỵ hoặc Hợi: cuộc sống nhiều thay đổi, thiếu ổn định; nên rèn tính kỷ luật.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc",
    "Phá Quân"
   ],
   "chi": [
    "Tỵ",
    "Hợi"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 24
 },
 {
  "phu": "Vũ Sát Phá Liêm cư Mão địa, mộc yểm lôi kinh",
  "nghia": "Vũ, Sát, Phá, Liêm tại Mão: nên chú ý an toàn, tránh nơi nguy hiểm và những việc rủi ro.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Mão"
   ],
   "motTrong": [
    [
     "Vũ Khúc",
     "Thất Sát",
     "Phá Quân",
     "Liêm Trinh"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Vũ, Phá, Lương ngộ Xương Khúc thông minh, cơ xảo định vô cùng",
  "nghia": "Vũ Khúc, Phá Quân hoặc Thiên Lương gặp Xương, Khúc: nhanh trí, khéo léo, nhiều mưu mẹo.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Vũ Khúc",
     "Phá Quân",
     "Thiên Lương"
    ]
   ],
   "hoiMot": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 119,
  "pho": true
 },
 {
  "phu": "Vũ Khúc Dương Đà kiêm Hỏa tú, táng mệnh nhân tài",
  "nghia": "Vũ Khúc gặp Dương, Đà, Hỏa: hao tài và dễ gặp rủi ro; nên thận trọng trong tiền bạc và an toàn.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc"
   ],
   "hoi": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Vũ Khúc, Văn Khúc vi nhân đa học đa năng",
  "nghia": "Vũ Khúc đồng cung Văn Khúc: nhiều tài lẻ, học nhanh, thiên về đa năng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Vũ Khúc Khôi Việt cư miếu vượng, tài chức chi quan",
  "nghia": "Vũ Khúc ở thế sáng, có Khôi Việt: thiên về làm nghề quản tài chính, tiền bạc.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Vũ Khúc"
   ],
   "sang": true,
   "hoi": [
    "Thiên Khôi",
    "Thiên Việt"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 14
 },
 {
  "phu": "Vũ Khúc Thiên Di, Cự thương cao mại",
  "nghia": "Vũ Khúc ở cung Thiên Di: ra ngoài, đi xa mới nhiều cơ hội, hợp buôn bán và làm ăn nơi xa.",
  "tone": "tot",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 85,
  "pho": true
 },
 {
  "phu": "Tử Vi hội Vũ Khúc ư Tử Tức, quý vi thức hòe",
  "nghia": "Cung Tử Tức có Tử Vi hội Vũ Khúc: con cái thiên về có tài, được trọng vọng.",
  "tone": "tot",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Tử Vi"
   ],
   "hoi": [
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 84,
  "pho": true
 },
 {
  "phu": "Song Ngư Thiên Tướng, Phá Quân thanh cao minh mẫn",
  "nghia": "Thiên Tướng ở Hợi có Phá Quân hội: thiên về thanh nhã, nhanh nhạy, thích sự gọn gàng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Tướng"
   ],
   "chi": [
    "Hợi"
   ],
   "hoi": [
    "Phá Quân"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Ấn mang vị liệt công hầu, sao lành Tướng Cáo hội vào Mệnh cung",
  "nghia": "Quốc Ấn gặp Thiên Tướng và Phong Cáo: thiên về chức quyền, danh vị chính thức.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Quốc Ấn"
   ],
   "hoi": [
    "Thiên Tướng",
    "Phong Cáo"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Thiên Tướng Không Kiếp cư Quan, công danh chẳng được tân toan nhiều bề",
  "nghia": "Thiên Tướng ở cung Quan Lộc gặp Không hoặc Kiếp: công danh nhiều gian nan, nên chuẩn bị kỹ và kiên trì.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Thiên Tướng"
   ],
   "motTrong": [
    [
     "Địa Không",
     "Địa Kiếp"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 12
 },
 {
  "phu": "Thiên Tướng, Liêm Trinh, Kình Dương giáp: đa chiêu hình trượng nam đao",
  "nghia": "Liêm Trinh, Thiên Tướng gặp Kình Dương: dễ vướng rắc rối pháp lý hoặc tổn thương; nên tuân thủ quy tắc, cẩn thận an toàn.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh",
    "Thiên Tướng"
   ],
   "hoi": [
    "Kình Dương"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Thiên Tướng chi tinh nữ mệnh triều, tất đương tử quý cập phu hiền",
  "nghia": "Nữ mệnh có Thiên Tướng: thiên về gia đạo thuận hòa, con cái và chồng có điều kiện tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Tướng"
   ],
   "gioi": "nu"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 42,
  "pho": true
 },
 {
  "phu": "Tướng Hồng nữ mệnh, quý nhân hảo phối",
  "nghia": "Nữ mệnh Thiên Tướng đồng cung Hồng Loan: thiên về duyên lành, dễ gặp người xứng đôi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Tướng",
    "Hồng Loan"
   ],
   "gioi": "nu"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Thiên Tướng Hữu Bật phúc lai lâm",
  "nghia": "Thiên Tướng đồng cung Hữu Bật: nhiều phúc, được người giúp đỡ.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Tướng",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 10
 },
 {
  "phu": "Thiên Tướng Tuất Thìn khởi thi đạt công danh chí sĩ",
  "nghia": "Thiên Tướng ở Thìn hoặc Tuất: thiên về thi cử, học hành đem lại công danh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Tướng"
   ],
   "chi": [
    "Thìn",
    "Tuất"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 14
 },
 {
  "phu": "Tý Ngọ Tướng Liêm nhi phùng Phụ Bật, Thái Y đắc thế",
  "nghia": "Liêm Trinh, Thiên Tướng ở Tý hoặc Ngọ gặp Tả Hữu: được trợ lực, hợp nghề y hoặc chăm sóc người khác.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh",
    "Thiên Tướng"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ],
   "hoi": [
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Tướng Liêm tại Ngọ, Khoa Hình Quyền củng, Hàn Tín đạt cao võ thượng ghi công",
  "nghia": "Liêm Trinh, Thiên Tướng tại Ngọ gặp Khoa, Hình, Quyền: thiên về công danh võ nghiệp, kỷ luật.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh",
    "Thiên Tướng"
   ],
   "chi": [
    "Ngọ"
   ],
   "hoi": [
    "Hóa Khoa",
    "Thiên Hình",
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Thất Sát Dần, Thân, Tý, Ngọ, nhất sinh tước lộc vinh xương",
  "nghia": "Thất Sát ở Dần, Thân, Tý hoặc Ngọ: thế cách mạnh, thiên về chức vụ và lộc vị ổn định.",
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 28
 },
 {
  "phu": "Dần, Thân Sát Kỵ trùng gia, thương chiêu đả mạ thực là gian truân",
  "nghia": "Thất Sát tại Dần hoặc Thân gặp Hóa Kỵ: dễ vướng thị phi, tranh cãi; nên giữ lời nói và cách ứng xử.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát",
    "Hóa Kỵ"
   ],
   "chi": [
    "Dần",
    "Thân"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Sát Hình Khốc Hổ Tử cung, đến già chưa thấy tay bồng con thơ",
  "nghia": "Cung Tử Tức có Thất Sát, Thiên Hình cùng Khốc hoặc Hổ: nên chú ý đường con cái, có thể đến muộn.",
  "tone": "xau",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Thất Sát",
    "Thiên Hình"
   ],
   "hoiMot": [
    [
     "Thiên Khốc",
     "Bạch Hổ"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Ngôi cao chức trọng công hầu, Mệnh Thân Sát Vũ ở đầu Ngọc cung",
  "nghia": "Thất Sát gặp Vũ Khúc ở Mệnh: thiên về chức quyền, võ nghiệp hoặc việc đòi hỏi sự quyết đoán.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát"
   ],
   "hoi": [
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 62,
  "pho": true
 },
 {
  "phu": "Quyền cao trọng chấn biên cương, Ngọ cung Thất Sát Tử Lương Vũ Đồng",
  "nghia": "Thất Sát ở Ngọ được Tử Vi, Vũ Khúc, Thiên Lương hoặc Thiên Đồng hội: thế cách mạnh, thiên về quyền hành.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát"
   ],
   "chi": [
    "Ngọ"
   ],
   "hoiMot": [
    [
     "Tử Vi",
     "Vũ Khúc",
     "Thiên Lương",
     "Thiên Đồng"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Sát phùng Phù Hổ, hay đâu dã tràng thuở ấy âu sầu ngục trung",
  "nghia": "Thất Sát gặp Quan Phù và Bạch Hổ: dễ gặp rắc rối thủ tục, pháp lý; nên giữ giấy tờ và tuân thủ quy định.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát"
   ],
   "hoi": [
    "Quan Phù",
    "Bạch Hổ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 32
 },
 {
  "phu": "Thất Sát Tý Ngọ phùng Tả Hữu Văn Khúc, gia chi cách tối thanh",
  "nghia": "Thất Sát ở Tý hoặc Ngọ gặp Tả Hữu và Văn Khúc: thế cách thanh nhã, uy quyền đi cùng học vấn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ],
   "hoi": [
    "Tả Phù",
    "Hữu Bật",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Thất Sát Liêm Trinh đồng vị, lộ thượng mai thi",
  "nghia": "Thất Sát, Liêm Trinh đồng cung: nên chú ý an toàn khi đi lại, tránh liều lĩnh ngoài đường.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát",
    "Liêm Trinh"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 19
 },
 {
  "phu": "Thất Sát lâm Thân, Mệnh lưu niên Hình Kỵ tai thương",
  "nghia": "Thất Sát ở Mệnh gặp Thiên Hình và Hóa Kỵ: nên chú ý an toàn thân thể, tránh tranh chấp.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát"
   ],
   "hoi": [
    "Thiên Hình",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Thất Sát Hỏa Dương bần thả tiện, đồ tể chi nhân",
  "nghia": "Thất Sát gặp Hỏa Tinh và Kình Dương: tính nóng, nghề dùng sức hoặc dao kéo; cuộc sống nhiều vất vả.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát"
   ],
   "hoi": [
    "Hỏa Tinh",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Thất Sát Dương Linh, lưu niên Bạch Hổ hình ngục tai truân",
  "nghia": "Hạn gặp Thất Sát, Kình Dương, Linh Tinh và Bạch Hổ: nên thận trọng pháp lý và an toàn trong thời gian này.",
  "tone": "xau",
  "dk": {
   "cung": "Hạn",
   "sao": [
    "Thất Sát"
   ],
   "hoi": [
    "Kình Dương",
    "Linh Tinh",
    "Bạch Hổ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Sát cư Ly Khảm, nam nhân thê hiền đa hội",
  "nghia": "Nam mệnh Thất Sát ở Tý hoặc Ngọ: thiên về gặp được người bạn đời có đức.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ],
   "gioi": "nam"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Sát, Phá, Liêm, Tham Tam Kỳ gia hội lai triều Tả Hữu, uy danh nhất thế chi nhân",
  "nghia": "Sát, Phá, Liêm hoặc Tham gặp Khoa, Quyền, Lộc cùng Tả Hữu: thiên về uy danh và vị thế nổi bật.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Thất Sát",
     "Phá Quân",
     "Liêm Trinh",
     "Tham Lang"
    ]
   ],
   "hoi": [
    "Hóa Khoa",
    "Hóa Quyền",
    "Hóa Lộc"
   ],
   "hoiMot": [
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Sát Kình tọa cũng liêm trực vô tư",
  "nghia": "Thất Sát đồng cung Kình Dương: tính cương trực, thẳng thắn, ít vì tư lợi nhưng dễ va chạm.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Dương, Đà, Thất Sát tương tạp, ngũ kiến tắc thương",
  "nghia": "Thất Sát gặp cả Kình Dương và Đà La: nên chú ý an toàn thân thể, tránh làm việc nguy hiểm.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thất Sát"
   ],
   "hoi": [
    "Kình Dương",
    "Đà La"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Phá Quân Tý Ngọ cung vô sát, quan tư thanh hiển chí Tam Công",
  "nghia": "Phá Quân ở Tý hoặc Ngọ, không có sát tinh: thiên về địa vị thanh cao, công danh rõ ràng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Phá Quân"
   ],
   "chi": [
    "Tý",
    "Ngọ"
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Phá tọa Khảm Ly, cô thân độc ảnh",
  "nghia": "Phá Quân ở Tý hoặc Ngọ: tính độc lập, tự mình gây dựng, thường ít người kề cận.",
  "tone": "trung",
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 10
 },
 {
  "phu": "Phá Quân Thìn Tuất nhi ngộ Khoa Tuần, cải ác vi lương",
  "nghia": "Phá Quân ở Thìn hoặc Tuất gặp Khoa hoặc Tuần: tính nóng được kiềm chế, chuyển hướng tích cực.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Phá Quân"
   ],
   "chi": [
    "Thìn",
    "Tuất"
   ],
   "motTrong": [
    [
     "Hóa Khoa",
     "Tuần"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Phá Quân Thìn Tuất, ư Mậu Quý nhân đa hoạnh danh tài",
  "nghia": "Phá Quân ở Thìn hoặc Tuất, tuổi Mậu hoặc Quý: thiên về danh tiếng và tiền tài đến bất ngờ.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Phá Quân"
   ],
   "chi": [
    "Thìn",
    "Tuất"
   ],
   "canNam": [
    "Mậu",
    "Quý"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Phá Liêm Mão Dậu băng Nguyệt Đức dĩ từ nhân",
  "nghia": "Liêm Trinh, Phá Quân ở Mão hoặc Dậu có Nguyệt Đức: tính được dịu lại, thiên về nhân hậu.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh",
    "Phá Quân"
   ],
   "chi": [
    "Mão",
    "Dậu"
   ],
   "hoi": [
    "Nguyệt Đức"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Phá Liêm Mão Dậu mạc ngộ Kiếp Kình, tu phòng hình ngục",
  "nghia": "Liêm Trinh, Phá Quân ở Mão hoặc Dậu gặp Kiếp hoặc Kình: nên chú ý rủi ro pháp lý, tránh tranh chấp.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh",
    "Phá Quân"
   ],
   "chi": [
    "Mão",
    "Dậu"
   ],
   "hoiMot": [
    [
     "Địa Kiếp",
     "Kình Dương"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 12
 },
 {
  "phu": "Phá cư Mộ cung, cương quả chi nhân",
  "nghia": "Phá Quân ở Sửu hoặc Mùi: tính cứng cỏi, quyết liệt, ít chịu khuất phục.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Phá Quân"
   ],
   "chi": [
    "Sửu",
    "Mùi"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Phá Quân ngộ Hỏa Linh Đà Nhận lâm Tuất Thìn, nết hẳn gian phi",
  "nghia": "Phá Quân ở Thìn hoặc Tuất gặp Hỏa, Linh, Đà, Kình: tính bốc đồng, dễ lệch hướng; cần giữ chính trực.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Phá Quân"
   ],
   "chi": [
    "Thìn",
    "Tuất"
   ],
   "hoiMot": [
    [
     "Hỏa Tinh",
     "Linh Tinh"
    ],
    [
     "Đà La",
     "Kình Dương"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Phá Quân Hỏa Tinh bôn ba lao lục",
  "nghia": "Phá Quân đồng cung Hỏa Tinh: thiên về bôn ba, vất vả, nên tránh nóng vội.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Phá Quân",
    "Hỏa Tinh"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Phá, Hao, Dương Linh, Quan Lộc vi đạo xứ khất cầu",
  "nghia": "Cung Quan Lộc có Phá Quân, Đại Hao cùng Dương, Linh: sự nghiệp bất ổn, hao tổn, nên chuẩn bị đường lui.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Phá Quân",
    "Đại Hao"
   ],
   "hoi": [
    "Kình Dương",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Dần, Thân Phá Hỏa Việt lâm ư Tân Đinh tuế cơ xảo",
  "nghia": "Phá Quân tại Dần hoặc Thân gặp Hỏa Tinh và Thiên Việt, tuổi Tân hoặc Đinh: khéo léo, nhiều tính toán.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Phá Quân",
    "Hỏa Tinh",
    "Thiên Việt"
   ],
   "chi": [
    "Dần",
    "Thân"
   ],
   "canNam": [
    "Tân",
    "Đinh"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Phá phùng Hình Kỵ, huynh hương anh em bất thuận những đường tụng tranh",
  "nghia": "Cung Huynh Đệ có Phá Quân, Thiên Hình, Hóa Kỵ: anh em dễ bất đồng, nên giữ hòa khí, tránh tranh chấp.",
  "tone": "xau",
  "dk": {
   "cung": "Huynh Đệ",
   "sao": [
    "Phá Quân",
    "Thiên Hình",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Phá Quân sao ấy tán tài, cư Điền bán hết lưu lại tổ truyền",
  "nghia": "Cung Điền Trạch có Phá Quân: nhà đất, tài sản dễ biến động, khó giữ nguyên của cha ông.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "sao": [
    "Phá Quân"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 79,
  "pho": true
 },
 {
  "phu": "Dần cung Phúc tọa tối hiềm Phá, Liêm, Dương Đà",
  "nghia": "Cung Phúc Đức ở Dần gặp Phá Quân hoặc Liêm Trinh cùng Dương, Đà: nhiều lo toan, tinh thần kém yên.",
  "tone": "xau",
  "dk": {
   "cung": "Phúc Đức",
   "chi": [
    "Dần"
   ],
   "motTrong": [
    [
     "Phá Quân",
     "Liêm Trinh"
    ]
   ],
   "hoiMot": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Liêm Trinh thanh bạch năng tương thủ",
  "nghia": "Liêm Trinh thủ Mệnh: tính thanh liêm, biết giữ mình và giữ nguyên tắc.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 97,
  "pho": true
 },
 {
  "phu": "Liêm Trinh chủ hạ tiện chi cơ hàn",
  "nghia": "Liêm Trinh ở thế hãm: nền tảng yếu, dễ vất vả, nên chọn con đường thực tế.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "sang": false
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 28
 },
 {
  "phu": "Liêm Trinh Mão Dậu cung gia sát, công tư vô diện quan nhân",
  "nghia": "Liêm Trinh ở Mão hoặc Dậu gặp sát tinh: quan hệ công việc dễ căng, khó chu toàn thể diện.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "chi": [
    "Mão",
    "Dậu"
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 17
 },
 {
  "phu": "Liêm tọa Thân cung phùng Phụ Bật, Canh kiêm Hóa cát, phúc quang vinh",
  "nghia": "Liêm Trinh ở Thân gặp Tả Hữu, tuổi Canh, có Hóa cát: phúc dày, thiên về vinh hiển.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "chi": [
    "Thân"
   ],
   "hoi": [
    "Tả Phù",
    "Hữu Bật"
   ],
   "canNam": [
    "Canh"
   ],
   "hoiMot": [
    [
     "Hóa Khoa",
     "Hóa Quyền",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Liêm Trinh Thân, Mùi cung vô sát, phú quý thanh dương chiếm viễn danh",
  "nghia": "Liêm Trinh ở Thân hoặc Mùi, không có sát tinh: thiên về giàu sang, danh tiếng truyền xa.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "chi": [
    "Thân",
    "Mùi"
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Liêm tại Cấn Khôn, nữ mệnh trích lệ thương phu",
  "nghia": "Nữ mệnh Liêm Trinh ở Sửu, Dần, Mùi hoặc Thân: đường tình duyên nhiều cảm xúc, nên chú ý vun đắp.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "chi": [
    "Sửu",
    "Dần",
    "Mùi",
    "Thân"
   ],
   "gioi": "nu"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Liêm tại Cấn Khôn, nam nhân tất đa truân tại ách ư lương thê",
  "nghia": "Nam mệnh Liêm Trinh ở Sửu, Dần, Mùi hoặc Thân: duyên vợ chồng dễ trắc trở, nên chú ý.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "chi": [
    "Sửu",
    "Dần",
    "Mùi",
    "Thân"
   ],
   "gioi": "nam"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 19
 },
 {
  "phu": "Liêm Trinh Dương Sát cư Quan, gia tỏa nan đào",
  "nghia": "Cung Quan Lộc có Liêm Trinh gặp Kình Dương, Thất Sát: dễ vướng rắc rối pháp lý, nên làm việc đúng quy định.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Liêm Trinh"
   ],
   "hoi": [
    "Kình Dương",
    "Thất Sát"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Liêm Trinh Tứ Sát tao hình lục",
  "nghia": "Liêm Trinh gặp nhóm sát tinh: nên chú ý rủi ro pháp lý, va chạm và áp lực, giữ kỷ luật bản thân.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Liêm Trinh"
   ],
   "hoiMot": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 72,
  "pho": true
 },
 {
  "phu": "Liêm Sát Sửu Mùi, Ất Kỷ âm nam, khí hùng trí dũng",
  "nghia": "Liêm Trinh Thất Sát ở Sửu/Mùi với nam tuổi Ất, Kỷ: khí chất mạnh mẽ, quyết đoán, hợp vai trò cần bản lĩnh.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Liêm Trinh",
    "Thất Sát"
   ],
   "chi": [
    "Sửu",
    "Mùi"
   ],
   "canNam": [
    "Ất",
    "Kỷ"
   ],
   "gioi": "nam",
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Liêm Sát Sửu Mùi, Tuần Triệt vô xâm kiêm hữu Khoa sinh, hạn đáo danh tài tốc phát",
  "nghia": "Cách Liêm Sát không bị Tuần, Triệt và có Khoa chiếu: danh tiếng và tài lộc có thể lên nhanh khi gặp vận thuận.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Liêm Trinh",
    "Thất Sát"
   ],
   "chi": [
    "Sửu",
    "Mùi"
   ],
   "khong": [
    "Tuần",
    "Triệt"
   ],
   "hoi": [
    "Hóa Khoa"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Liêm Trinh Thất Sát phản vi tích phú chi nhân",
  "nghia": "Liêm Trinh đồng cung Thất Sát: tuy nhiều biến động nhưng có thể tích lũy, làm nên nhờ tự lực.",
  "tone": "trung",
  "dk": {
   "sao": [
    "Liêm Trinh",
    "Thất Sát"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 19
 },
 {
  "phu": "Liêm Trinh Sát bất gia, thanh danh viễn bá",
  "nghia": "Liêm Trinh không gặp sát tinh: tính chất tốt được phát huy, thanh danh dễ vang xa.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Liêm Trinh"
   ],
   "khong": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh",
    "Linh Tinh"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 27
 },
 {
  "phu": "Vương Lương ải ngục, Liêm Trinh hãm địa Kiếp ư hỏa cung",
  "nghia": "Liêm Trinh hãm gặp Địa Kiếp ở cung Tỵ/Ngọ: nên chú ý tranh chấp, thủ tục pháp lý và áp lực tinh thần.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Liêm Trinh",
    "Địa Kiếp"
   ],
   "chi": [
    "Tỵ",
    "Ngọ"
   ],
   "sang": false,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Trọng Do oai mãnh, Liêm Trinh nhập miếu hội Tướng Quân",
  "nghia": "Liêm Trinh miếu vượng hội Tướng Quân: khí chất dũng mãnh, hợp công việc cần uy lực và kỷ cương.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Liêm Trinh"
   ],
   "hoi": [
    "Tướng Quân"
   ],
   "sang": true,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Liêm Trinh phùng Văn Quế cánh bôn ba",
  "nghia": "Liêm Trinh gặp Xương/Khúc: người có tài văn nhưng đường đời hay phải đi lại, bôn ba.",
  "tone": "trung",
  "dk": {
   "sao": [
    "Liêm Trinh"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Liêm Trinh, Phá, Hoả cư hãm địa tự ải đầu hà",
  "nghia": "Liêm Trinh hãm cùng Hỏa Tinh, Phá Quân hội chiếu: nên chú ý áp lực nóng nảy, cần giữ tinh thần ổn định.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Liêm Trinh",
    "Hỏa Tinh"
   ],
   "hoi": [
    "Phá Quân"
   ],
   "sang": false,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Tù ngộ Dương, Đà, Linh, Hỏa hữu toả đa thất cốc chi ưu",
  "nghia": "Liêm Trinh gặp đủ Kình, Đà, Hỏa, Linh: nên chú ý trói buộc, khó khăn tài chính và ăn tiêu.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Liêm Trinh"
   ],
   "hoi": [
    "Kình Dương",
    "Đà La",
    "Hỏa Tinh",
    "Linh Tinh"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Tham Lang độc cư đa hư thiểu thực",
  "nghia": "Tham Lang đứng một mình: dễ nhiều dự định, tiếng tăm hơn kết quả thực; nên chọn việc cụ thể, chắc tay.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Tham Lang"
   ],
   "khongCung": [
    "Tử Vi",
    "Vũ Khúc",
    "Liêm Trinh"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 44,
  "pho": true
 },
 {
  "phu": "Tham Lang nhập miếu thọ nguyên thời",
  "nghia": "Tham Lang miếu vượng ở Mệnh: nền thể lực tốt, có sức bền trong cuộc sống.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Tham Lang"
   ],
   "sang": true,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 53,
  "pho": true
 },
 {
  "phu": "Tham Lang hãm địa tác trứ nhân",
  "nghia": "Tham Lang hãm: ham muốn khó tiết chế, dễ sa vào lợi lộc; cần kỷ luật và chọn bạn tốt.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Tham Lang"
   ],
   "sang": false,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 37
 },
 {
  "phu": "Tham Lang đồng Xương Khúc ư Sửu Mùi đích hữu đầu hà chi hoạn",
  "nghia": "Tham Lang ở Sửu/Mùi gặp Xương Khúc: nên chú ý tai họa liên quan nước và áp lực tinh thần.",
  "tone": "xau",
  "dk": {
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
    "Sửu",
    "Mùi"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Dần Thân Tham ngộ Văn Xương",
  "nghia": "Tham Lang gặp Văn Xương ở Dần/Thân: được chiều chuộng, đắc ý nhất thời nhưng khó bền; nên khiêm tốn, tích lũy.",
  "tone": "trung",
  "dk": {
   "sao": [
    "Tham Lang",
    "Văn Xương"
   ],
   "chi": [
    "Dần",
    "Thân"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Dần Thân nhi hội Tham Liêm ngộ Văn Xương nhập lao quản trọng",
  "nghia": "Mệnh ở Dần/Thân hội Tham, Liêm và Văn Xương: nên chú ý rắc rối pháp lý, giữ giấy tờ và quy định rõ ràng.",
  "tone": "xau",
  "dk": {
   "hoi": [
    "Tham Lang",
    "Liêm Trinh",
    "Văn Xương"
   ],
   "chi": [
    "Dần",
    "Thân"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Tham Lang cư Mão Dậu ngộ Hỏa tắc công khanh",
  "nghia": "Tham Lang ở Mão/Dậu gặp Hỏa/Linh: có thể lập công danh nhờ tính quyết liệt, dám làm.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Tham Lang"
   ],
   "motTrong": [
    [
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ],
   "chi": [
    "Mão",
    "Dậu"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Tham Lang gia cát tọa Trường Sinh thọ khảo vĩnh như Bành Tổ",
  "nghia": "Tham Lang đồng cung Tràng Sinh và gặp cát tinh: thể lực bền, đời sống ổn định lâu dài.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Tham Lang",
    "Tràng Sinh"
   ],
   "hoiMot": [
    [
     "Tả Phù",
     "Hữu Bật",
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Tham Lang Tỵ Hợi gia sát, bất vi đồ hộ diệc tao hình",
  "nghia": "Tham Lang ở Tỵ/Hợi gặp sát tinh: nên chú ý nghề nghiệp rủi ro, va chạm pháp lý, giữ chừng mực.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Tham Lang"
   ],
   "chi": [
    "Tỵ",
    "Hợi"
   ],
   "hoiMot": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 14
 },
 {
  "phu": "Tham Lang gia sát đồng cung, nữ du hương",
  "nghia": "Nữ mệnh Tham Lang đồng cung sát tinh: đường tình cảm nhiều biến động, nên cân nhắc kỹ các mối quan hệ.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Tham Lang"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ],
   "gioi": "nu",
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Tham Lang gia sát đồng cung, nam thử thiết",
  "nghia": "Nam mệnh Tham Lang đồng cung sát tinh: ham muốn lớn, nhẹ dạ; nên giữ liêm chính và tránh đường tắt.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Tham Lang"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ],
   "gioi": "nam",
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 14
 },
 {
  "phu": "Tham Lang Đà La tại Dần cung, hựu viết phong lưu thái kỹ",
  "nghia": "Tham Lang với Đà La ở Dần: ham vui, dễ sa vào giải trí, đào hoa; cần tiết độ.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Tham Lang",
    "Đà La"
   ],
   "chi": [
    "Dần"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Tham Lang Hỏa Tinh cư miếu vượng danh trấn chư bang",
  "nghia": "Tham Lang đồng cung Hỏa Tinh ở thế sáng: có thể nổi danh, thành công nhờ quyết đoán và bứt phá.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Tham Lang",
    "Hỏa Tinh"
   ],
   "sang": true,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Tham Lang Kỵ ngộ sát tinh ưu xâm Không Kiếp, văn niên phú thọ nan toàn lưỡng",
  "nghia": "Tham Lang Hóa Kỵ gặp Không, Kiếp: nên chú ý cân bằng tài chính và sức khỏe về cuối đời.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Tham Lang",
    "Hóa Kỵ"
   ],
   "hoi": [
    "Địa Không",
    "Địa Kiếp"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Tham cư Đoài Chấn thoát tục vi tăng, Kiếp Kỵ lai xâm trần hoàn đa trái",
  "nghia": "Tham Lang ở Mão/Dậu gặp Kiếp, Kỵ: hợp lối sống thanh đạm; nên chú ý nợ nần, ràng buộc tiền bạc.",
  "tone": "trung",
  "dk": {
   "sao": [
    "Tham Lang"
   ],
   "chi": [
    "Mão",
    "Dậu"
   ],
   "hoi": [
    "Địa Kiếp",
    "Hóa Kỵ"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Tham Lang Hợi Tý hạnh phùng Quyền vượng, biến hư thành thực ư Giáp Kỷ tuế, phú danh viên mãn",
  "nghia": "Tham Lang ở Hợi/Tý gặp Hóa Quyền, tuổi Giáp, Kỷ: dự định có cơ hội thành hiện thực, danh lợi khá đầy đủ.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Tham Lang"
   ],
   "chi": [
    "Hợi",
    "Tý"
   ],
   "hoi": [
    "Hóa Quyền"
   ],
   "canNam": [
    "Giáp",
    "Kỷ"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Tham Xương cư Mệnh phấn cốt túy si",
  "nghia": "Tham Lang đồng cung Văn Xương ở Mệnh: dễ say mê thú vui hoặc đam mê quá mức; nên biết dừng.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Tham Lang",
    "Văn Xương"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Tham cư Tý thử thiết vô nghi",
  "nghia": "Tham Lang ở Tý: ham muốn dễ lấn lướt, cần giữ chính đạo trong tiền bạc.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Tham Lang"
   ],
   "chi": [
    "Tý"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Tham cư Tý ngộ Tuần Không phản vi đoan chính",
  "nghia": "Tham Lang ở Tý gặp Tuần/Không: dục vọng được kiềm bớt, con người trở nên chính trực hơn.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Tham Lang"
   ],
   "chi": [
    "Tý"
   ],
   "hoiMot": [
    [
     "Tuần",
     "Địa Không",
     "Thiên Không"
    ]
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Tham tú tọa nhi phùng Hóa Kỵ đạo ngoại hành thương",
  "nghia": "Tham Lang cùng Hóa Kỵ: hợp buôn bán, hoạt động ở nơi xa hoặc ngoài khuôn khổ; cần thận trọng.",
  "tone": "trung",
  "dk": {
   "sao": [
    "Tham Lang",
    "Hóa Kỵ"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 19
 },
 {
  "phu": "Tham tọa Thủy cung giáp biên tứ sát bần khổ chung thân",
  "nghia": "Tham Lang ở Hợi/Tý bị sát tinh kẹp hai bên: nên chú ý tài chính, tránh đầu tư mạo hiểm.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Tham Lang"
   ],
   "chi": [
    "Hợi",
    "Tý"
   ],
   "giap": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Tham Lang Bạch Hổ phùng sinh Tuất Thìn, số ấy lánh mình sơn lâm",
  "nghia": "Tham Lang đồng cung Bạch Hổ ở Thìn/Tuất: hợp cuộc sống xa chốn ồn ào hoặc nghề gắn với thiên nhiên.",
  "tone": "trung",
  "dk": {
   "sao": [
    "Tham Lang",
    "Bạch Hổ"
   ],
   "chi": [
    "Thìn",
    "Tuất"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Tham Vũ tiền bần nhi hậu phú",
  "nghia": "Tham Lang đồng cung Vũ Khúc: giai đoạn đầu nhiều gian nan, về sau tài lộc khá lên nhờ bền chí.",
  "tone": "trung",
  "dk": {
   "sao": [
    "Tham Lang",
    "Vũ Khúc"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Tham Vũ Thân cung vi hạ cách",
  "nghia": "Tham Lang Vũ Khúc nằm ở cung Thân: thường xếp thứ bậc thấp, cần nỗ lực bù đắp.",
  "tone": "xau",
  "dk": {
   "cung": "Thân",
   "sao": [
    "Tham Lang",
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 14
 },
 {
  "phu": "Tham Vũ thủ Thân, vô cát Mệnh phản bất vi lương",
  "nghia": "Tham Vũ ở cung Thân không có cát tinh hội chiếu: Mệnh thiếu trợ lực, nên dựa vào nỗ lực cá nhân.",
  "tone": "xau",
  "dk": {
   "cung": "Thân",
   "sao": [
    "Tham Lang",
    "Vũ Khúc"
   ],
   "khong": [
    "Tả Phù",
    "Hữu Bật",
    "Thiên Khôi",
    "Thiên Việt"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Tham, Vũ, Phá Quân vô cát diệu mê luyến tửu sắc dĩ vong thân",
  "nghia": "Tham Lang với Vũ Khúc, Phá Quân mà thiếu cát tinh: dễ sa đà ăn chơi, nên tiết độ.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Tham Lang"
   ],
   "hoi": [
    "Vũ Khúc",
    "Phá Quân"
   ],
   "khong": [
    "Tả Phù",
    "Hữu Bật",
    "Thiên Khôi",
    "Thiên Việt"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 16
 },
 {
  "phu": "Tham Lang Liêm Trinh đồng độ đa lãng đãng",
  "nghia": "Nam mệnh Tham Lang đồng cung Liêm Trinh: đào hoa, ham giao du; cần tiết chế để giữ ổn định.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Tham Lang",
    "Liêm Trinh"
   ],
   "gioi": "nam",
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Tham Liêm Hợi phùng Dương Nhận, Kiếp Không Hư Mã chung thân bần khổ",
  "nghia": "Tham Liêm ở Hợi gặp Kình Dương cùng Không/Kiếp và Hư/Mã: nên chú ý tài chính, tránh hao tán, bôn ba.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Tham Lang",
    "Liêm Trinh"
   ],
   "chi": [
    "Hợi"
   ],
   "hoi": [
    "Kình Dương"
   ],
   "hoiMot": [
    [
     "Địa Không",
     "Địa Kiếp"
    ],
    [
     "Thiên Hư",
     "Thiên Mã"
    ]
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Tham Đà tửu sắc chơi bời",
  "nghia": "Tham Lang cùng Đà La: dễ ham vui, chơi bời; cần giữ nếp sống điều độ.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Tham Lang",
    "Đà La"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Tham Riêu hãm địa cùng xâm, gia trung thất vận",
  "nghia": "Tham Lang hãm cùng Thiên Riêu: nên chú ý hao tài, rối ren trong nhà; giữ chi tiêu chặt chẽ.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Tham Lang",
    "Thiên Riêu"
   ],
   "sang": false,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Cơ viên phú tính từ tâm",
  "nghia": "Thiên Cơ miếu vượng ở Mệnh: tính hiền, giàu lòng nhân, có điều kiện sống khá.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thiên Cơ"
   ],
   "sang": true,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 77,
  "pho": true
 },
 {
  "phu": "Thiên Cơ tại viên sảo tài xuất chúng",
  "nghia": "Thiên Cơ sáng sủa ở Mệnh: khéo léo, mưu trí, nhiều ý tưởng nổi trội.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thiên Cơ"
   ],
   "sang": true,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 77,
  "pho": true
 },
 {
  "phu": "Thiên Cơ nữ mệnh thiền trung",
  "nghia": "Nữ mệnh có Thiên Cơ: thiên về suy tư, trầm lắng, có xu hướng tìm sự yên tĩnh nội tâm.",
  "tone": "trung",
  "dk": {
   "sao": [
    "Thiên Cơ"
   ],
   "gioi": "nu",
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 52,
  "pho": true
 },
 {
  "phu": "Thiên Di Cơ Mã cùng ngôi, Đông trì Tây vũ pha phôi cõi ngoài",
  "nghia": "Thiên Di có Thiên Cơ và Thiên Mã: hay đi lại, hoạt động ở xa, đời sống nhiều di chuyển.",
  "tone": "trung",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Thiên Cơ",
    "Thiên Mã"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Cơ Lương phùng Lộc Mã, phú kham địch quốc",
  "nghia": "Cơ Lương gặp Lộc và Mã: tài lộc có thể khá lớn nhờ năng động và mưu lược.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thiên Cơ",
    "Thiên Lương"
   ],
   "hoi": [
    "Thiên Mã"
   ],
   "hoiMot": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Cơ Lương, Thái Tuế, Tang Môn lâm vào chốn hãm, vợ con biếng chiều",
  "nghia": "Cơ Lương hãm gặp Thái Tuế, Tang Môn: nên chú ý dành thời gian cho gia đình, tránh buồn phiền.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Thiên Cơ",
    "Thiên Lương"
   ],
   "hoi": [
    "Thái Tuế",
    "Tang Môn"
   ],
   "sang": false,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Cơ Lương hội hợp thiện đàm binh",
  "nghia": "Cơ Lương hội chiếu: giỏi bàn mưu, phân tích chiến lược, hợp vai trò tham mưu.",
  "tone": "tot",
  "dk": {
   "hoi": [
    "Thiên Cơ",
    "Thiên Lương"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 228,
  "pho": true
 },
 {
  "phu": "Cơ Lương thủ Mệnh gia cát diệu phú quý tâm từ",
  "nghia": "Cơ Lương ở Mệnh gặp cát tinh: tâm thiện, đời sống khá giả, được người giúp đỡ.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thiên Cơ",
    "Thiên Lương"
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
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Thiên Cơ gia ác sát đồng cung, cầu thâu thử thiết",
  "nghia": "Thiên Cơ đồng cung sát tinh: mưu mẹo dễ lệch hướng; nên giữ chính trực, tránh đường tắt.",
  "tone": "xau",
  "dk": {
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
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 22
 },
 {
  "phu": "Cơ Lương, tứ sát, Tướng Quân cung, vũ khách tăng lưu Mệnh sở phùng",
  "nghia": "Cơ Lương gặp sát tinh và Tướng Quân: hợp đời sống nghiêng về võ nghiệp hoặc tu hành, tha hương.",
  "tone": "trung",
  "dk": {
   "sao": [
    "Thiên Cơ",
    "Thiên Lương"
   ],
   "hoi": [
    "Tướng Quân"
   ],
   "hoiMot": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Thiên Cơ chiếu ư Điền Trạch, Mộc xâm tổ mộ, họa hành tai ương",
  "nghia": "Điền Trạch có Thiên Cơ chiếu: nên chú ý đất đai, mồ mả tổ tiên, cây cối quanh nhà.",
  "tone": "xau",
  "dk": {
   "cung": "Điền Trạch",
   "doi": [
    "Thiên Cơ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 85,
  "pho": true
 },
 {
  "phu": "Cự Môn định chủ thị phi",
  "nghia": "Cự Môn ở Mệnh: dễ vướng lời qua tiếng lại, hiểu lầm; nên thận trọng lời nói.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Cự Môn"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 87,
  "pho": true
 },
 {
  "phu": "Cự Môn Dần Thân vị, Phúc Hỷ Giáp Canh sinh",
  "nghia": "Cự Môn ở Dần/Thân hợp người tuổi Giáp, Canh: được phúc, vui, thế sáng sủa.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Cự Môn"
   ],
   "chi": [
    "Dần",
    "Thân"
   ],
   "canNam": [
    "Giáp",
    "Canh"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Cự Nhật Dần cung lập Mệnh, tiến trì danh nhi thực lộc",
  "nghia": "Cự Môn Thái Dương ở Dần: có danh và lộc, dễ tiến thân nhờ ăn nói, tài năng.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Cự Môn",
    "Thái Dương"
   ],
   "chi": [
    "Dần"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Cự Nhật Mệnh lập Thân cung diệc diệu",
  "nghia": "Cự Môn Thái Dương ở Thân cũng tốt: thuận lợi danh tiếng, nghề nghiệp.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Cự Môn",
    "Thái Dương"
   ],
   "chi": [
    "Thân"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Cự Nhật cùng chiếu diệc vi kỳ",
  "nghia": "Cự Môn và Thái Dương cùng hội chiếu Mệnh cũng là cách hay: ăn nói, danh tiếng được trợ lực.",
  "tone": "tot",
  "dk": {
   "hoi": [
    "Cự Môn",
    "Thái Dương"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 208,
  "pho": true
 },
 {
  "phu": "Cự Môn Tý Ngọ, Khoa Quyền Lộc, thạch trung ẩn ngọc phúc hưng long",
  "nghia": "Cự Môn ở Tý/Ngọ gặp Khoa, Quyền, Lộc: tài năng tiềm ẩn, về sau phát lộ, phúc lộc thịnh.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Cự Môn"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ],
   "hoi": [
    "Hóa Khoa",
    "Hóa Quyền"
   ],
   "hoiMot": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Cự Cơ Dậu thượng hóa cát giả, túng hữu tài quan dã bất vinh",
  "nghia": "Cự Cơ ở Dậu dù gặp hóa tinh tốt vẫn khó hiển đạt trọn vẹn: có tài, có chức nhưng chưa thật vinh.",
  "tone": "trung",
  "dk": {
   "sao": [
    "Cự Môn",
    "Thiên Cơ"
   ],
   "chi": [
    "Dậu"
   ],
   "hoiMot": [
    [
     "Hóa Lộc",
     "Hóa Quyền",
     "Hóa Khoa"
    ]
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Song Hao Mão Dậu chúng thủy triều đông",
  "nghia": "Song Hao ở Mão/Dậu: dễ hao tán, tiền bạc chảy đi; nên lập kế hoạch chi tiêu.",
  "tone": "xau",
  "dk": {
   "chi": [
    "Mão",
    "Dậu"
   ],
   "hoi": [
    "Đại Hao",
    "Tiểu Hao"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 46,
  "pho": true
 },
 {
  "phu": "Cự Cơ Mão Dậu tối hiềm Hóa Lộc",
  "nghia": "Cự Cơ ở Mão/Dậu gặp Hóa Lộc: không thuận, dễ tốn kém hoặc tính toán mà hao.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Cự Môn",
    "Thiên Cơ"
   ],
   "chi": [
    "Mão",
    "Dậu"
   ],
   "hoi": [
    "Hóa Lộc"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Mão Dậu Cự Cơ Ất Tân âm nữ ích tử vượng phu, bất kiến Triệt Tuần, đa tài thao lược",
  "nghia": "Nữ tuổi Ất, Tân có Cự Cơ ở Mão/Dậu không gặp Tuần, Triệt: nhiều tài, có mưu lược, gia đạo được hỗ trợ.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Cự Môn",
    "Thiên Cơ"
   ],
   "chi": [
    "Mão",
    "Dậu"
   ],
   "canNam": [
    "Ất",
    "Tân"
   ],
   "gioi": "nu",
   "khong": [
    "Tuần",
    "Triệt"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Cự Cơ đồng cung công khanh chi vị",
  "nghia": "Cự Môn Thiên Cơ đồng cung ở Mão/Dậu: có thể đạt vị trí quản lý hoặc chức vị cao.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Cự Môn",
    "Thiên Cơ"
   ],
   "chi": [
    "Mão",
    "Dậu"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 19
 },
 {
  "phu": "Cự Cơ nhi ngộ Lộc Tồn ngữ bất chính ngôn",
  "nghia": "Cự Cơ gặp Lộc Tồn: lời nói dễ thiếu nhất quán; nên cân nhắc lời hứa và cách nói.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Cự Môn",
    "Thiên Cơ",
    "Lộc Tồn"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Cự Cơ chính hướng hạnh ngộ Song Hao, uy quyền quán thế",
  "nghia": "Cự Cơ gặp Song Hao: có khí thế mạnh, dám phá cũ lập mới, uy quyền nổi bật.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Cự Môn",
    "Thiên Cơ"
   ],
   "hoi": [
    "Đại Hao",
    "Tiểu Hao"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Cự Cơ Sửu Mùi vi hạ cách",
  "nghia": "Mệnh ở Sửu/Mùi hội Cự Môn, Thiên Cơ: thường xếp bậc thấp, cần chăm chỉ để bù đắp.",
  "tone": "xau",
  "dk": {
   "chi": [
    "Sửu",
    "Mùi"
   ],
   "hoi": [
    "Cự Môn",
    "Thiên Cơ"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 45,
  "pho": true
 },
 {
  "phu": "Cự Kỵ Khốc Hình Thìn Tuất",
  "nghia": "Cự Môn Hóa Kỵ gặp Khốc, Hình ở Thìn/Tuất: nên chú ý buồn phiền, thị phi và pháp lý.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Cự Môn",
    "Hóa Kỵ"
   ],
   "hoi": [
    "Thiên Khốc",
    "Thiên Hình"
   ],
   "chi": [
    "Thìn",
    "Tuất"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Cự Môn Thìn Tuất vi hãm địa, Tân nhân hóa cát lộc tranh vinh",
  "nghia": "Cự Môn hãm ở Thìn/Tuất với người tuổi Tân: nhờ Hóa Lộc mà gỡ bớt, lộc tranh được phần.",
  "tone": "trung",
  "dk": {
   "sao": [
    "Cự Môn",
    "Hóa Lộc"
   ],
   "chi": [
    "Thìn",
    "Tuất"
   ],
   "canNam": [
    "Tân"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Cự Đồng nhập miếu mạnh viên mẫn tiệp đa năng",
  "nghia": "Cự Môn Thiên Đồng ở thế sáng: nhanh nhạy, nhiều khả năng.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Cự Môn",
    "Thiên Đồng"
   ],
   "sang": true,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Cự Đồng nhập mộ nhị hợp Kỵ Kình nan phòng thủy nạn",
  "nghia": "Cự Đồng ở cung mộ có Kỵ hoặc Kình ở cung nhị hợp: nên chú ý tai nạn liên quan nước.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Cự Môn",
    "Thiên Đồng"
   ],
   "chi": [
    "Sửu",
    "Mùi"
   ],
   "nhiHop": [
    "Hóa Kỵ",
    "Kình Dương"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Kỵ đại chi ngộ Cự Môn tất hoại tổ tông chi nghiệp",
  "nghia": "Cự Môn gặp Hóa Kỵ: nên chú ý việc giữ gìn gia nghiệp, tài sản thừa kế.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Cự Môn",
    "Hóa Kỵ"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 18
 },
 {
  "phu": "Cự Môn tứ sát hãm nhi hung",
  "nghia": "Cự Môn hãm gặp sát tinh: dễ thị phi, bất lợi; nên cẩn trọng ngôn hành.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Cự Môn"
   ],
   "hoiMot": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ],
   "sang": false,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 32
 },
 {
  "phu": "Cự Hỏa Dương Đà phùng ác diệu",
  "nghia": "Cự Môn gặp Hỏa Tinh, Kình Dương, Đà La: nên chú ý tai nạn, khẩu thiệt; giữ an toàn.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Cự Môn"
   ],
   "hoi": [
    "Hỏa Tinh",
    "Kình Dương",
    "Đà La"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Cự Hỏa Kình Dương chung thân ải tử",
  "nghia": "Cự Môn gặp Hỏa Tinh và Kình Dương: nên chú ý tai nạn, nóng giận; giữ an toàn lâu dài.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Cự Môn"
   ],
   "hoi": [
    "Hỏa Tinh",
    "Kình Dương"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Cự phùng Tồn Tú cát xứ toàn hung",
  "nghia": "Cự Môn gặp Lộc Tồn: nơi tưởng thuận lợi lại lắm thị phi; có lộc nhưng lắm lo.",
  "tone": "trung",
  "dk": {
   "sao": [
    "Cự Môn",
    "Lộc Tồn"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Cự phùng Lộc Tồn ở Tử Tức, vô nhi tống lão",
  "nghia": "Tử Tức có Cự Môn và Lộc Tồn: nên chú ý đường con cái và sự gắn bó khi về già.",
  "tone": "xau",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Cự Môn",
    "Lộc Tồn"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Cự Môn Dương Đà ư Thân Mệnh khốn nhược",
  "nghia": "Cự Môn gặp Kình Dương, Đà La: đời sống nhiều trở ngại, thị phi; cần kiên nhẫn.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Cự Môn"
   ],
   "hoi": [
    "Kình Dương",
    "Đà La"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 12
 },
 {
  "phu": "Cự phùng Dương miếu tốt thay, thăng quan tiến chức vận lành mừng vui",
  "nghia": "Cự Môn gặp Kình Dương miếu ở cung tứ mộ trong hạn: thuận lợi thăng tiến, công việc khởi sắc.",
  "tone": "tot",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Cự Môn",
    "Kình Dương"
   ],
   "chi": [
    "Thìn",
    "Tuất",
    "Sửu",
    "Mùi"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Nữ mệnh Thiên Đồng tất thị hiền",
  "nghia": "Nữ mệnh có Thiên Đồng: tính hiền hòa, dịu dàng, dễ được quý mến.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thiên Đồng"
   ],
   "gioi": "nu",
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 51,
  "pho": true
 },
 {
  "phu": "Thiên Đồng nhập Mệnh hoán cải vô thường",
  "nghia": "Thiên Đồng ở Mệnh: đời sống hay thay đổi, thích nghi nhanh nhưng khó bền một hướng.",
  "tone": "trung",
  "dk": {
   "sao": [
    "Thiên Đồng"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 94,
  "pho": true
 },
 {
  "phu": "Thiên Đồng hội cát thọ nguyên thời",
  "nghia": "Thiên Đồng gặp cát tinh: tâm tính an hòa, sức khỏe và cuộc sống ổn định.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thiên Đồng"
   ],
   "hoiMot": [
    [
     "Tả Phù",
     "Hữu Bật",
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 64,
  "pho": true
 },
 {
  "phu": "Thiên Đồng Ngọ vị, hỷ Dương Nhận uy trấn biên cương",
  "nghia": "Thiên Đồng và Kình Dương ở Ngọ: hợp võ nghiệp, có uy, phụ trách vùng xa hoặc nhiệm vụ nặng.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thiên Đồng",
    "Kình Dương"
   ],
   "chi": [
    "Ngọ"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Quang Vũ nhất thất uy danh do ư Đồng Nguyệt",
  "nghia": "Thiên Đồng và Thái Âm hội: dễ có tiếng tăm, được tin cậy.",
  "tone": "tot",
  "dk": {
   "hoi": [
    "Thiên Đồng",
    "Thái Âm"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 215,
  "pho": true
 },
 {
  "phu": "Đồng Nguyệt Dương cư Ngọ vị, Bính Mậu trấn ngự biên cương",
  "nghia": "Đồng, Nguyệt, Kình Dương ở Ngọ với người tuổi Bính, Mậu: thế mạnh, hợp vai trò trấn giữ, trọng trách.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thiên Đồng",
    "Thái Âm",
    "Kình Dương"
   ],
   "chi": [
    "Ngọ"
   ],
   "canNam": [
    "Bính",
    "Mậu"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Đồng Nguyệt hãm cung gia sát trọng kỹ nghệ doanh hoàng",
  "nghia": "Đồng Nguyệt hãm gặp sát tinh: hợp kỹ nghệ, nghề thủ công hoặc kinh doanh nhỏ hơn là đường quan chức.",
  "tone": "trung",
  "dk": {
   "sao": [
    "Thiên Đồng",
    "Thái Âm"
   ],
   "hoiMot": [
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ],
   "sang": false,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Thiên Đồng Tuất cung, Đinh nhân hóa cát chữ đại quý",
  "nghia": "Thiên Đồng ở Tuất với người tuổi Đinh: nhờ Hóa Quyền tăng lực, có thể phát triển tốt.",
  "tone": "trung",
  "dk": {
   "sao": [
    "Thiên Đồng"
   ],
   "chi": [
    "Tuất"
   ],
   "canNam": [
    "Đinh"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Đồng Cơ viên phú tính tâm từ",
  "nghia": "Thiên Đồng và Thiên Cơ hội chiếu ở thế sáng: tính hiền, tâm từ, đời sống khá giả.",
  "tone": "tot",
  "dk": {
   "hoi": [
    "Thiên Đồng",
    "Thiên Cơ"
   ],
   "sang": true,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 139,
  "pho": true
 },
 {
  "phu": "Đồng Lương hội nhập Thê hương",
  "nghia": "Phu Thê hội Thiên Đồng, Thiên Lương: bạn đời hiền hòa, có thể cùng nếp nhà hoặc gần gia đình.",
  "tone": "trung",
  "dk": {
   "cung": "Phu Thê",
   "hoi": [
    "Thiên Đồng",
    "Thiên Lương"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 211,
  "pho": true
 },
 {
  "phu": "Thiên Lương thủ chiếu, cát tương phùng bình sinh phúc thọ",
  "nghia": "Thiên Lương ở Mệnh gặp cát tinh: đời sống bình an, nhiều phúc, được người giúp.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thiên Lương"
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
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 67,
  "pho": true
 },
 {
  "phu": "Thiên Lương Nguyệt diệu nữ dâm bần",
  "nghia": "Nữ mệnh Thiên Lương gặp Thái Âm: đường tình cảm nhiều biến động, nên cân nhắc tài chính và các mối quan hệ.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Thiên Lương"
   ],
   "hoi": [
    "Thái Âm"
   ],
   "gioi": "nu",
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 42,
  "pho": true
 },
 {
  "phu": "Thiên Lương gia cát tọa Thiên Di, hoạnh phát kinh thương",
  "nghia": "Thiên Di có Thiên Lương và cát tinh: ra ngoài gặp thời, hợp kinh doanh, có thể phát nhanh.",
  "tone": "tot",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Thiên Lương"
   ],
   "motTrong": [
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 41,
  "pho": true
 },
 {
  "phu": "Lương Nhật Mão cung, Nhật xuất Phù Tang",
  "nghia": "Thiên Lương Thái Dương ở Mão: rạng rỡ, hanh thông, danh tiếng sáng.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thiên Lương",
    "Thái Dương"
   ],
   "chi": [
    "Mão"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Âm tinh phùng Khôi tinh ư Hợi địa, ứng chi sơn nhạc giáng thần",
  "nghia": "Thái Âm gặp Thiên Khôi ở Hợi: tài đức nổi bật, danh tiếng sáng.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thái Âm",
    "Thiên Khôi"
   ],
   "chi": [
    "Hợi"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Lương phùng Hao Sát tại Tỵ cung đao nghiệp hình thương",
  "nghia": "Thiên Lương ở Tỵ gặp Hao và sát tinh: nên chú ý nghề nguy hiểm, tai nạn, hao tổn.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Thiên Lương"
   ],
   "chi": [
    "Tỵ"
   ],
   "motTrong": [
    [
     "Đại Hao",
     "Tiểu Hao"
    ],
    [
     "Kình Dương",
     "Đà La",
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Thiên Lương cư Ngọ vị, quan tu thánh hiền triều đường",
  "nghia": "Thiên Lương ở Ngọ: thế sáng, hợp vai trò cố vấn, quan chức đứng đắn, được kính trọng.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thiên Lương"
   ],
   "chi": [
    "Ngọ"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Lương Đồng Cơ Nguyệt Dần Thân vị nhất sinh lợi nghiệp thông minh",
  "nghia": "Mệnh ở Dần/Thân hội Cơ, Nguyệt, Đồng, Lương: thông minh, nghề nghiệp ổn định, được lợi nhờ trí tuệ.",
  "tone": "tot",
  "dk": {
   "chi": [
    "Dần",
    "Thân"
   ],
   "hoi": [
    "Thiên Lương",
    "Thiên Đồng",
    "Thiên Cơ",
    "Thái Âm"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 44,
  "pho": true
 },
 {
  "phu": "Lương Đồng Tỵ Hợi nam đa lãng",
  "nghia": "Nam mệnh Tỵ/Hợi hội Thiên Lương, Thiên Đồng: ham giao du, đào hoa; cần giữ ổn định.",
  "tone": "trung",
  "dk": {
   "chi": [
    "Tỵ",
    "Hợi"
   ],
   "hoi": [
    "Thiên Lương",
    "Thiên Đồng"
   ],
   "gioi": "nam",
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 17
 },
 {
  "phu": "Lương Đồng Tỵ Hợi nữ đa dâm",
  "nghia": "Nữ mệnh Tỵ/Hợi hội Thiên Lương, Thiên Đồng: đường tình cảm nhiều biến động, nên cân nhắc kỹ.",
  "tone": "trung",
  "dk": {
   "chi": [
    "Tỵ",
    "Hợi"
   ],
   "hoi": [
    "Thiên Lương",
    "Thiên Đồng"
   ],
   "gioi": "nu",
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 23
 },
 {
  "phu": "Thiên Lương Văn Xương cư miếu vượng vị, chí đài cương",
  "nghia": "Thiên Lương đồng cung Văn Xương ở thế sáng: học vấn, danh vị tốt, có thể giữ chức quan trọng.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thiên Lương",
    "Văn Xương"
   ],
   "sang": true,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 10
 },
 {
  "phu": "Thiên Lương hội Trường Sinh ư Phúc địa, thân thượng hữu kỳ tài",
  "nghia": "Phúc Đức có Thiên Lương và Tràng Sinh: nền phúc tốt, bản thân có tài năng đặc biệt.",
  "tone": "tot",
  "dk": {
   "cung": "Phúc Đức",
   "sao": [
    "Thiên Lương",
    "Tràng Sinh"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 12
 },
 {
  "phu": "Phụ Mẫu cung Thiên Lương tọa thủ, mẹ cha hưởng phúc lành thượng thọ",
  "nghia": "Phụ Mẫu có Thiên Lương: cha mẹ có phúc, đời sống bình an, gia đình hòa thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Phụ Mẫu",
   "sao": [
    "Thiên Lương"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 84,
  "pho": true
 },
 {
  "phu": "Thiên Lương ngộ Hỏa chiếu qua, hại người hại của thật là tan thương",
  "nghia": "Thiên Lương gặp Hỏa Tinh chiếu: nên chú ý hao tài, thiệt hại; giữ kỷ luật trong chi tiêu.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Thiên Lương"
   ],
   "hoi": [
    "Hỏa Tinh"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 27
 },
 {
  "phu": "Thái Âm chủ nhất thân chi khoái lạc",
  "nghia": "Thái Âm sáng sủa ở Mệnh: đời sống thoải mái, hưởng thụ, ít lo lắng.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thái Âm"
   ],
   "sang": true,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 49,
  "pho": true
 },
 {
  "phu": "Nữ mệnh dung nhan mỹ tú ái ngộ Nguyệt Lương",
  "nghia": "Nữ mệnh có Thái Âm gặp Thiên Lương: dung mạo, khí chất dễ nhìn, nhu hòa.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thái Âm"
   ],
   "hoi": [
    "Thiên Lương"
   ],
   "gioi": "nu",
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 42,
  "pho": true
 },
 {
  "phu": "Nữ mệnh Kỵ Nguyệt ngộ Đà",
  "nghia": "Nữ mệnh Thái Âm Hóa Kỵ gặp Đà La: tâm tư nặng, dễ trì trệ trong tình cảm; nên cởi mở.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Thái Âm",
    "Hóa Kỵ"
   ],
   "hoi": [
    "Đà La"
   ],
   "gioi": "nu",
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Nguyệt lãng Thiên Môn ư Hợi địa, đăng vân chấp chưởng đại quyền",
  "nghia": "Thái Âm ở Hợi sáng sủa: dễ thăng tiến, có thể nắm quyền hạn lớn.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thái Âm"
   ],
   "chi": [
    "Hợi"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Nguyệt tại Hợi cung, minh châu xuất hải, tu cần",
  "nghia": "Thái Âm ở Hợi: tài năng nổi bật như ngọc ra khơi, cần siêng năng để phát huy.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thái Âm"
   ],
   "chi": [
    "Hợi"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Âm Dương lạc hãm tu cần, Không diệu tối kỵ sát tinh",
  "nghia": "Nhật Nguyệt hãm: phải cần cù mới có thành quả; nên tránh sát tinh và Không diệu.",
  "tone": "xau",
  "dk": {
   "hoi": [
    "Thái Dương",
    "Thái Âm"
   ],
   "sang": false,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 53,
  "pho": true
 },
 {
  "phu": "Thái Âm cư Tý hựu viết thủy đăng quế ngạc",
  "nghia": "Thái Âm ở Tý: sáng sủa, hợp học hành, thi cử và công việc văn chức.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thái Âm"
   ],
   "chi": [
    "Tý"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Thái Âm Khúc Lộc Tồn đồng Tả Hữu tương phùng",
  "nghia": "Thái Âm gặp Văn Khúc, Lộc Tồn, Tả Hữu: tài năng, tiền của và quý nhân hỗ trợ.",
  "tone": "tot",
  "dk": {
   "sao": [
    "Thái Âm"
   ],
   "hoi": [
    "Văn Khúc",
    "Lộc Tồn",
    "Tả Phù",
    "Hữu Bật"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Thái Âm Dương Đà tất chủ nhân ly tài tán",
  "nghia": "Thái Âm gặp Kình Dương, Đà La: dễ hao tài, xa cách người thân; nên giữ gìn.",
  "tone": "xau",
  "dk": {
   "sao": [
    "Thái Âm"
   ],
   "hoi": [
    "Kình Dương",
    "Đà La"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 16
 },
 {
  "phu": "Âm Dương Tả Hữu hợp vi giai",
  "nghia": "Nhật Nguyệt cùng Tả Hữu hội: được nhiều người hỗ trợ, thuận lợi.",
  "tone": "tot",
  "dk": {
   "hoi": [
    "Thái Dương",
    "Thái Âm",
    "Tả Phù",
    "Hữu Bật"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 60,
  "pho": true
 },
 {
  "phu": "Tử Tức Thái Âm tuy hãm hà tổn",
  "nghia": "Tử Tức có Thái Âm dù hãm cũng không đáng lo quá: nên chú ý nhưng không bi quan.",
  "tone": "trung",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Thái Âm"
   ],
   "sang": false
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 32
 },
 {
  "phu": "Thanh kỳ ngọc thỏ tuy lạc hãm nhị bất bần",
  "nghia": "Thái Âm hãm ở Mệnh: tuy không rực rỡ nhưng đời sống vẫn không quá thiếu thốn.",
  "tone": "trung",
  "dk": {
   "sao": [
    "Thái Âm"
   ],
   "sang": false,
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 28
 },
 {
  "phu": "Vợ giàu của cải vô ngần, Thái Âm phùng Khúc Lộc Ân Mã đồng",
  "nghia": "Phu Thê có Thái Âm gặp Văn Khúc, Lộc, Ân Quang, Thiên Mã: bạn đời có điều kiện kinh tế tốt, hỗ trợ.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Thái Âm"
   ],
   "hoi": [
    "Văn Khúc",
    "Ân Quang",
    "Thiên Mã"
   ],
   "hoiMot": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Âm Dương lạc hãm gia Kình Kỵ, phu thê ly biệt",
  "nghia": "Phu Thê có Nhật Nguyệt hãm cùng Kình, Kỵ: nên chú ý giao tiếp, hòa hợp trong hôn nhân.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "hoi": [
    "Thái Dương",
    "Thái Âm",
    "Kình Dương",
    "Hóa Kỵ"
   ],
   "sang": false
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 10
 },
 {
  "phu": "Thái Âm đắc địa đóng vào Thê cung, duyên lành phò mã",
  "nghia": "Phu Thê có Thái Âm sáng sủa: duyên phận thuận, bạn đời nền nã, hỗ trợ.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Thái Âm"
   ],
   "sang": true
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 51,
  "pho": true
 },
 {
  "phu": "Âm Dương hội chiếu Mệnh, quyền cao chức trọng mọi đàng hanh thông",
  "nghia": "Mệnh được Nhật Nguyệt hội chiếu: thuận lợi quan chức, dễ có quyền và danh tiếng.",
  "tone": "tot",
  "dk": {
   "hoi": [
    "Thái Dương",
    "Thái Âm"
   ],
   "cung": "Mệnh"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 208,
  "pho": true
 },
 {
  "phu": "Âm Dương hội chiếu Quan Lộc, quyền cao chức trọng",
  "nghia": "Quan Lộc được Nhật Nguyệt hội chiếu: công việc hanh thông, có vị trí cao.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "hoi": [
    "Thái Dương",
    "Thái Âm"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 225,
  "pho": true
 },
 {
  "phu": "Phúc tọa Hợi cung, tối hỷ Âm Dương",
  "nghia": "Phúc Đức ở Hợi có Nhật Nguyệt hội: phúc tốt, thuận lợi học hành, danh tiếng.",
  "tone": "tot",
  "dk": {
   "cung": "Phúc Đức",
   "chi": [
    "Hợi"
   ],
   "hoi": [
    "Thái Dương",
    "Thái Âm"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 22
 },
 {
  "phu": "Phúc cư Mùi địa Âm Dương hỗn hợp, hội văn tinh Quyền Lộc đa phát bảng khoa",
  "nghia": "Phúc Đức ở Mùi có Nhật Nguyệt, văn tinh, Quyền, Lộc: học hành thi cử dễ đạt kết quả tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Phúc Đức",
   "chi": [
    "Mùi"
   ],
   "hoi": [
    "Thái Dương",
    "Thái Âm",
    "Hóa Quyền"
   ],
   "hoiMot": [
    [
     "Văn Xương",
     "Văn Khúc"
    ],
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Lộc Quyền tọa thủ Thê cung, trai thời nhờ vợ mà nên giàu sang",
  "nghia": "Phu Thê có Hóa Lộc, Hóa Quyền: bạn đời hỗ trợ tài vận và địa vị.",
  "tone": "tot",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Hóa Lộc",
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Hạn lành Kỵ, Cự hung thần, phải phòng những chốn giang tàn mới lành",
  "nghia": "Hạn có Cự Môn và Hóa Kỵ: nên chú ý sông nước, đường thủy và những nơi hiểm trở khi đi lại.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Cự Môn",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 16
 },
 {
  "phu": "Số muộn màng gái trai ôm ẵm, vì Kỵ Đà len lỏi Tử cung",
  "nghia": "Cung Tử Tức gặp Hóa Kỵ và Đà La: đường con cái có thể muộn hoặc nhiều lo toan, nên chú ý.",
  "tone": "xau",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Hóa Kỵ",
    "Đà La"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Vợ chồng nay hợp mai tan, Kỵ Phục tọa thủ một làng Thê cung",
  "nghia": "Cung Phu Thê có Hóa Kỵ và Phục Binh: tình cảm dễ thay đổi, cần kiên nhẫn giữ gìn.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Hóa Kỵ",
    "Phục Binh"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Kỵ Binh Xương Khúc, một vì Nhan Hồi yểu triết còn ghi rõ ràng",
  "nghia": "Mệnh có Hóa Kỵ, Phục Binh gặp Xương Khúc: tài học nhưng nên chú ý sức khỏe, đừng dồn sức quá mức.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Kỵ",
    "Phục Binh"
   ],
   "hoi": [
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Lộc phùng Lương miếu, bảo tư tài, ích dữ tha nhân",
  "nghia": "Lộc đi cùng Thiên Lương sáng: có tài lộc và có xu hướng giúp đỡ người khác.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Lương"
   ],
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ],
   "sang": true
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 19
 },
 {
  "phu": "Lộc Tồn hậu trọng, đa y thực tộc",
  "nghia": "Lộc Tồn thủ Mệnh: tính đôn hậu, chắc chắn, thường đủ đầy về ăn mặc.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Lộc Tồn"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 94,
  "pho": true
 },
 {
  "phu": "Thiên Lộc triều viên, thân vinh quý hiển",
  "nghia": "Lộc Tồn chiếu về Mệnh: có xu hướng được địa vị và tài lộc nhờ thời vận.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "khongCung": [
    "Lộc Tồn"
   ],
   "hoi": [
    "Lộc Tồn"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 241,
  "pho": true
 },
 {
  "phu": "Minh Lộc ám Lộc, cẩm thượng thêm hoa",
  "nghia": "Lộc ở Mệnh và Lộc ở cung nhị hợp: tài lộc có hai nguồn hỗ trợ nhau.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ],
   "nhiHop": [
    "Lộc Tồn",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 10
 },
 {
  "phu": "Lộc Tồn thập miếu tại Hợi cung, chung thân phú túc",
  "nghia": "Lộc Tồn tại Hợi thủ Mệnh: xu hướng đời sống đủ đầy, ổn định.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Lộc Tồn"
   ],
   "chi": [
    "Hợi"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 16
 },
 {
  "phu": "Lộc Tồn Tý Ngọ vị Thiên Di",
  "nghia": "Lộc Tồn ở Thiên Di tại Tý hoặc Ngọ: tài lộc có thể đến từ môi trường bên ngoài, đi xa hay giao tiếp.",
  "tone": "tot",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Lộc Tồn"
   ],
   "chi": [
    "Tý",
    "Ngọ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 29
 },
 {
  "phu": "Lưỡng Lộc Ngọ Dần nhi phùng Tử, Vũ, Đinh Kỷ âm nam phú đa danh thọ",
  "nghia": "Song Lộc ở Dần Ngọ gặp Tử Vi, Vũ Khúc, người nam tuổi Đinh Kỷ: có xu hướng giàu và có danh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Lộc Tồn",
    "Hóa Lộc"
   ],
   "chi": [
    "Ngọ",
    "Dần"
   ],
   "motTrong": [
    [
     "Tử Vi",
     "Vũ Khúc"
    ]
   ],
   "canNam": [
    "Đinh",
    "Kỷ"
   ],
   "gioi": "nam"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Song Lộc thủ Mệnh, Lã Hậu chuyên quyền",
  "nghia": "Nữ mệnh có Lộc Tồn và Hóa Lộc cùng cung: có xu hướng nắm quyền chủ động, tài lộc dồi dào.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Lộc Tồn",
    "Hóa Lộc"
   ],
   "gioi": "nu"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Lộc Tồn ngộ Triệt cư Huynh Đệ, nam trưởng bôn ba ngoại xứ",
  "nghia": "Huynh Đệ có Lộc Tồn bị Triệt: anh chị em, nhất là người lớn, có thể lập nghiệp xa quê.",
  "tone": "trung",
  "dk": {
   "cung": "Huynh Đệ",
   "sao": [
    "Lộc Tồn",
    "Triệt"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Tuế Đà thiết Kỵ ư Dần Thân",
  "nghia": "Thái Tuế đi cùng Đà La ở Dần hoặc Thân: dễ vướng thị phi, lời qua tiếng lại; nên thận trọng lời nói.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Tuế",
    "Đà La"
   ],
   "chi": [
    "Dần",
    "Thân"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Thái Tuế ngộ Dương, Đà, đa chiêu khẩu thiệt",
  "nghia": "Thái Tuế gặp Kình Dương hoặc Đà La: dễ gặp tranh cãi, thị phi bằng lời nói.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Tuế"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Miệng ngập, ngập miệng không thông thái, vì Tuế, Đà, Riêu các Mệnh viên",
  "nghia": "Thái Tuế, Đà La, Thiên Riêu cùng ở Mệnh: ăn nói dễ vướng, nên rèn cách diễn đạt.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Tuế",
    "Đà La",
    "Thiên Riêu"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Tuế Xương Thìn Tuất hỷ phùng Sát Phá",
  "nghia": "Thái Tuế và Văn Xương ở Thìn hoặc Tuất, gặp Sát Phá: có thể nên việc nhờ văn võ kết hợp.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Tuế",
    "Văn Xương"
   ],
   "chi": [
    "Thìn",
    "Tuất"
   ],
   "hoiMot": [
    [
     "Thất Sát",
     "Phá Quân"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Tuế Đà Kỵ vận nghèo, qua sông vượt biển ba đào chẳng yên",
  "nghia": "Hạn có Thái Tuế, Đà La, Hóa Kỵ: giai đoạn nhiều trở ngại, chuyện đi lại và công việc cần thận trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Thái Tuế",
    "Đà La",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Thái Tuế Phục Binh Kỵ xung, cùng người tranh cạnh trong lòng chẳng khuây",
  "nghia": "Hạn có Thái Tuế, Phục Binh và Hóa Kỵ chiếu: dễ tranh chấp, lòng canh cánh; nên hóa giải bằng đối thoại.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Thái Tuế",
    "Phục Binh"
   ],
   "hoi": [
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Tràng Sinh, Đế Vượng tại Mệnh viên, kiêm phùng Tử Phủ, quảng đại chi nhân",
  "nghia": "Mệnh có Tràng Sinh hoặc Đế Vượng, gặp Tử Vi và Thiên Phủ: khí chất rộng rãi, có tầm nhìn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Tràng Sinh",
     "Đế Vượng"
    ]
   ],
   "hoi": [
    "Tử Vi",
    "Thiên Phủ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 39
 },
 {
  "phu": "Tràng Sinh tại Hợi, phùng Thiên Mã, lộ đồ bôn tẩu",
  "nghia": "Tràng Sinh cùng Thiên Mã ở Hợi: cuộc sống nhiều đi lại, di chuyển.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tràng Sinh",
    "Thiên Mã"
   ],
   "chi": [
    "Hợi"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Tràng Sinh, Đế Vượng tại Tử cung, Lộc Quyền chiếu củng, đa sinh quý tử",
  "nghia": "Tử Tức có Tràng Sinh hoặc Đế Vượng, Lộc Quyền chiếu: con cái có xu hướng thành đạt.",
  "tone": "tot",
  "dk": {
   "cung": "Tử Tức",
   "motTrong": [
    [
     "Tràng Sinh",
     "Đế Vượng"
    ]
   ],
   "hoi": [
    "Hóa Lộc",
    "Hóa Quyền"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 21
 },
 {
  "phu": "Kình Dương nhập miếu, phú quý thanh danh",
  "nghia": "Kình Dương ở cung tứ mộ (đắc địa): tính quyết đoán, có thể thành công và có danh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương"
   ],
   "chi": [
    "Thìn",
    "Tuất",
    "Sửu",
    "Mùi"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 47,
  "pho": true
 },
 {
  "phu": "Dương cư Đoài Chấn, lục mật lục giáp, phúc nan toàn",
  "nghia": "Kình Dương ở Mão hoặc Dậu: phúc phận khó trọn vẹn, cần giữ bình tĩnh và cẩn trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương"
   ],
   "chi": [
    "Mão",
    "Dậu"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 24
 },
 {
  "phu": "Dương Nhận hãm, tu bị thiết",
  "nghia": "Kình Dương ở cung hãm: nên chú ý thương tích, tranh chấp; cần cẩn trọng, tu dưỡng tâm tính.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương"
   ],
   "chi": [
    "Dần",
    "Thân",
    "Tỵ",
    "Hợi",
    "Tý",
    "Ngọ",
    "Mão",
    "Dậu"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 56,
  "pho": true
 },
 {
  "phu": "Miếu vượng cư nhi hào kiệt dương danh",
  "nghia": "Kình Dương ở cung miếu vượng: tính cương nghị, dễ nổi danh nhờ bản lĩnh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương"
   ],
   "chi": [
    "Thìn",
    "Tuất",
    "Sửu",
    "Mùi"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 47,
  "pho": true
 },
 {
  "phu": "Hình, Dương, Đà hưởng phúc ư ngũ tuần chi hậu",
  "nghia": "Thiên Hình cùng Kình Dương hoặc Đà La ở Mệnh: tuổi trẻ nhiều thử thách, phúc đến muộn, sau năm mươi tuổi.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Hình"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Dương Đà, Quan Phù ư hãm địa, loạn thuyết chi nhân",
  "nghia": "Quan Phù cùng Kình Dương hoặc Đà La ở Mệnh: dễ vướng lời qua tiếng lại, thị phi.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Quan Phù"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 75,
  "pho": true
 },
 {
  "phu": "Đà La, Địa Kiếp chiếu phương, Linh Tinh lại gặp, bất tường chẳng sai",
  "nghia": "Mệnh có Đà La, gặp Địa Kiếp và Linh Tinh: nhiều biến động bất ngờ, nên đề phòng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đà La"
   ],
   "hoi": [
    "Địa Kiếp",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Lỗ tai điếc lác âu sầu, Dương Đà Không Kiếp một miền Mệnh cung",
  "nghia": "Mệnh gặp Kình Đà và Không Kiếp: nên chú ý thính giác và tinh thần, tránh lo âu kéo dài.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Kình Dương",
     "Đà La"
    ],
    [
     "Địa Không",
     "Địa Kiếp"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 25
 },
 {
  "phu": "Dương Đà Kỵ ngộ Âm Dương, ắt sinh đới tật, hình thương nan phòng",
  "nghia": "Kình Đà cùng Hóa Kỵ gặp Nhật Nguyệt: nên chú ý thể trạng, mắt và thương tích bất ngờ.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Kỵ"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ],
   "hoiMot": [
    [
     "Thái Âm",
     "Thái Dương"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Kình Dương Hỏa Linh vi hạ cách",
  "nghia": "Kình Dương gặp Hỏa hoặc Linh cùng cung: tính nóng và thiếu kiềm chế, cần học cách điềm tĩnh.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương"
   ],
   "motTrong": [
    [
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Dương Linh tọa Mệnh, lưu niên Bạch Hổ, tai thương",
  "nghia": "Kình Dương, Linh Tinh ở Mệnh gặp Bạch Hổ: năm hạn nên chú ý tai nạn, thương tích.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương",
    "Linh Tinh"
   ],
   "hoi": [
    "Bạch Hổ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Đà La Tỵ Hợi Dần Thân, phi yểu triết nhi hình thương",
  "nghia": "Đà La ở Tứ Sinh (Dần Thân Tỵ Hợi): nên chú ý sức khỏe và thương tích, sống ôn hòa.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đà La"
   ],
   "chi": [
    "Tỵ",
    "Hợi",
    "Dần",
    "Thân"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 52,
  "pho": true
 },
 {
  "phu": "Đà, Kỵ, Nhận thủ ư Phu vị",
  "nghia": "Nữ mệnh có Hóa Kỵ cùng Kình hoặc Đà ở Phu Thê: tình duyên nhiều va chạm, cần nhẫn nại.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Hóa Kỵ"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ],
   "gioi": "nu"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 12
 },
 {
  "phu": "Dương, Hình, Riêu sát cung Phu",
  "nghia": "Phu Thê có Kình Dương, Thiên Hình, Thiên Riêu: hôn nhân dễ căng thẳng, nên giữ hòa khí.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Kình Dương",
    "Thiên Hình",
    "Thiên Riêu"
   ],
   "gioi": "nu"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Dương Đà bệnh ấy phòng mòn",
  "nghia": "Tật Ách có Kình Dương, Đà La: nên chú ý bệnh kéo dài, cần khám và điều dưỡng đều đặn.",
  "tone": "xau",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Kình Dương",
    "Đà La"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Đà ngộ Kỵ chẳng lành con mắt",
  "nghia": "Tật Ách có Đà La và Hóa Kỵ: nên chú ý mắt.",
  "tone": "xau",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Đà La",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Kỵ phùng Dương, mục tất thong manh",
  "nghia": "Tật Ách có Hóa Kỵ và Kình Dương: nên đặc biệt chú ý bảo vệ mắt.",
  "tone": "xau",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Hóa Kỵ",
    "Kình Dương"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Đà Không lâm thủ Điền Tài, luận rằng số ấy sinh lai nghèo hèn",
  "nghia": "Tài Bạch có Đà La và Địa Không: tiền bạc dễ hao hụt, nên chi tiêu cẩn trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Tài Bạch",
   "sao": [
    "Đà La",
    "Địa Không"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Dương Nhận phùng Tuyệt, Linh chốn hãm, công cù lao bú mớm như không",
  "nghia": "Kình Dương, Tuyệt, Linh Tinh cùng ở Mệnh: công sức bỏ ra dễ nhọc mà ít được đền đáp.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương",
    "Tuyệt",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Địa Kiếp trùng lâm, hạnh Thiên Giải nhi khả cứu",
  "nghia": "Địa Kiếp ở Mệnh được Thiên Giải chiếu: khó khăn có người, có cách hóa giải bớt.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Địa Kiếp"
   ],
   "hoi": [
    "Thiên Giải"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 35
 },
 {
  "phu": "Dương Đà giáp Kỵ vi bại cục",
  "nghia": "Hóa Kỵ ở Mệnh bị Kình Dương, Đà La kẹp hai bên: dễ bị áp lực từ nhiều phía.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hóa Kỵ"
   ],
   "giap": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Mệnh Dương Đà gia Kiếp thọ giảm",
  "nghia": "Mệnh có Kình hoặc Đà cùng Địa Kiếp: nên chú ý giữ gìn sức khỏe, tránh liều lĩnh.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Địa Kiếp"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Kình Hư Tuế Khách gia lâm, mãn thế đa phùng tang sự",
  "nghia": "Kình Dương, Thiên Hư cùng Thái Tuế, Điếu Khách: đời sống có nhiều chuyện buồn, nên chú ý tinh thần.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương",
    "Thiên Hư"
   ],
   "hoiMot": [
    [
     "Thái Tuế"
    ],
    [
     "Điếu Khách"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Dần Thân Không Kiếp nhi ngộ Quý tinh, thăng trầm vô độ",
  "nghia": "Không Kiếp ở Dần hoặc Thân gặp Khôi Việt: cuộc đời lên xuống bất ngờ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Dần",
    "Thân"
   ],
   "sao": [
    "Địa Không",
    "Địa Kiếp"
   ],
   "hoiMot": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Tỵ Hợi Kiếp Không nhi phùng Quyền Lộc, hoạnh đạt tung hoành",
  "nghia": "Không Kiếp ở Tỵ hoặc Hợi gặp Quyền Lộc: có thể phát đạt bất ngờ nhờ cơ hội.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Tỵ",
    "Hợi"
   ],
   "sao": [
    "Địa Không",
    "Địa Kiếp"
   ],
   "hoi": [
    "Hóa Quyền"
   ],
   "hoiMot": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Kiếp Cơ ngộ Hỏa, tất ngộ hỏa tai",
  "nghia": "Địa Kiếp cùng Thiên Cơ gặp Hỏa Tinh: nên đề phòng hỏa hoạn, cẩn thận điện lửa.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Địa Kiếp",
    "Thiên Cơ"
   ],
   "hoi": [
    "Hỏa Tinh"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Mệnh Thân dù có lâm Không Kiếp, gia Triệt Tuần chẳng khiếp tài nguy",
  "nghia": "Không Kiếp ở Mệnh được Tuần hoặc Triệt át bớt: hung tinh giảm tác hại, khó khăn nhẹ hơn.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Địa Không",
    "Địa Kiếp"
   ],
   "motTrong": [
    [
     "Tuần",
     "Triệt"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Mệnh cung ngộ Kiếp Tham, lãng lý hành thuyền",
  "nghia": "Địa Kiếp cùng Tham Lang ở Mệnh: đời sống nhiều biến động, hay thay đổi hướng đi.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Địa Kiếp",
    "Tham Lang"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Kiếp Không lâm hạn, Sở Vương táng ôi, ốc lục châu vong",
  "nghia": "Hạn có Địa Không, Địa Kiếp: giai đoạn dễ mất mát, nên giữ gìn tài sản và thận trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 22
 },
 {
  "phu": "Kiếp, Không, Hình, Kỵ, Đà, Dương, gian nan bệnh tật mọi đường lo âu",
  "nghia": "Mệnh hội nhiều hung tinh (Không Kiếp, Kình Đà, Hình Kỵ): nhiều áp lực, nên chú ý sức khỏe.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Địa Không",
     "Địa Kiếp"
    ],
    [
     "Kình Dương",
     "Đà La"
    ],
    [
     "Thiên Hình",
     "Hóa Kỵ"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Tử cung Không Kiếp trùng gia, nuôi con không mát đã ba bốn lần",
  "nghia": "Tử Tức có Địa Không, Địa Kiếp: đường con cái nhiều lo toan, nên chú ý chăm sóc.",
  "tone": "xau",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Phúc cung hãm ngộ Kiếp Không, họ hàng lắm kẻ hành hung ở ngoài",
  "nghia": "Phúc Đức có Địa Không, Địa Kiếp: tinh thần dễ bất an, họ hàng ít nương tựa.",
  "tone": "xau",
  "dk": {
   "cung": "Phúc Đức",
   "sao": [
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 18
 },
 {
  "phu": "Kiếp Không ai nấy khá ngửa, lâm vào Huynh Đệ đơn sơ một mình",
  "nghia": "Huynh Đệ có Địa Không, Địa Kiếp: anh em ít hoặc xa cách, nên tự lập.",
  "tone": "xau",
  "dk": {
   "cung": "Huynh Đệ",
   "sao": [
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 16
 },
 {
  "phu": "Phu Thê Không Kiếp trùng xung, trai hai ba độ mới xong cửa nhà",
  "nghia": "Phu Thê có Địa Không, Địa Kiếp: duyên muộn hoặc nhiều thăng trầm, cần kiên nhẫn.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Địa Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 14
 },
 {
  "phu": "Hỏa Linh ngộ hãm Thiên Cơ, hẳn trong Mệnh ấy có tà chứ không",
  "nghia": "Thiên Cơ hãm gặp Hỏa, Linh: tâm tính hay lo nghĩ, dễ nghiêng về chuyện tâm linh huyền bí.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Cơ"
   ],
   "motTrong": [
    [
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ],
   "sang": false
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Hỏa Linh ngộ Mã oan gia, đề phòng hỏa hoạn mới là khỏi tai",
  "nghia": "Thiên Mã gặp Hỏa hoặc Linh: nên đề phòng hỏa hoạn, tai nạn khi di chuyển.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Linh phùng Sứ, Mã, nhi ngộ Dương Đà, hữu tật tứ chi",
  "nghia": "Tật Ách có Linh Tinh, Thiên Sứ, Thiên Mã gặp Kình Đà: nên chú ý tay chân, xương khớp.",
  "tone": "xau",
  "dk": {
   "cung": "Tật Ách",
   "sao": [
    "Linh Tinh",
    "Thiên Sứ",
    "Thiên Mã"
   ],
   "motTrong": [
    [
     "Kình Dương",
     "Đà La"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Hỏa Linh hãm ư Tử Tức, đáo lão vô nhi khốc",
  "nghia": "Tử Tức có Hỏa hoặc Linh: đường con cái nhiều lo toan, nên chú ý dạy dỗ, chăm sóc.",
  "tone": "xau",
  "dk": {
   "cung": "Tử Tức",
   "motTrong": [
    [
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 162,
  "pho": true
 },
 {
  "phu": "Hỏa Linh giáp Mệnh vi bại cục",
  "nghia": "Mệnh bị Hỏa Tinh, Linh Tinh kẹp hai bên: dễ nóng vội, chịu áp lực dồn dập.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "giap": [
    [
     "Hỏa Tinh",
     "Linh Tinh"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 18
 },
 {
  "phu": "Tý Ngọ Khốc Hư tịnh thủ, nhất thế xưng hùng",
  "nghia": "Thiên Khốc, Thiên Hư ở Tý hoặc Ngọ: có xu hướng nổi bật sau thử thách.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Tý",
    "Ngọ"
   ],
   "sao": [
    "Thiên Khốc",
    "Thiên Hư"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 12
 },
 {
  "phu": "Nữ mệnh Thiên Khốc, Thiên Hư, táo bạo",
  "nghia": "Nữ mệnh có Thiên Khốc, Thiên Hư: tính mạnh mẽ, dứt khoát, nên giữ điềm tĩnh.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Khốc",
    "Thiên Hư"
   ],
   "gioi": "nu"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Khốc Hư Tang Mã chẳng lành, hại người hại của dễ sinh lo lường",
  "nghia": "Mệnh có Khốc hoặc Hư cùng Tang Môn, Thiên Mã: dễ lo lắng chuyện mất mát, nên cẩn trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tang Môn",
    "Thiên Mã"
   ],
   "motTrong": [
    [
     "Thiên Khốc",
     "Thiên Hư"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Khốc Hư lại gặp Dưỡng thần, sinh nhiều nuôi ít gian truân xiết bao",
  "nghia": "Tử Tức có Khốc hoặc Hư cùng Dưỡng: việc nuôi dạy con cái nhiều vất vả, nên chú ý chăm sóc.",
  "tone": "xau",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Dưỡng"
   ],
   "motTrong": [
    [
     "Thiên Khốc",
     "Thiên Hư"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 14
 },
 {
  "phu": "Khốc Hư cư Tý Ngọ vị, Quan cung lại nhập, tiếng thị gần xa",
  "nghia": "Quan Lộc có Khốc hoặc Hư ở Tý, Ngọ: sự nghiệp có thể nổi danh xa gần.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "chi": [
    "Tý",
    "Ngọ"
   ],
   "motTrong": [
    [
     "Thiên Khốc",
     "Thiên Hư"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Hao ngộ Tham Lang, tài sinh dâm tình",
  "nghia": "Tham Lang gặp Đại Hao hoặc Tiểu Hao: tiền bạc dễ hao, đường tình cảm nhiều biến động, nên cân nhắc.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tham Lang"
   ],
   "motTrong": [
    [
     "Đại Hao",
     "Tiểu Hao"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 10
 },
 {
  "phu": "Lao đao tối một sớm ba, Đại Hao Hóa Kỵ trùng gia Mệnh vì",
  "nghia": "Đại Hao cùng Hóa Kỵ ở Mệnh: cuộc sống vất vả, tiền bạc khó giữ.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đại Hao",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Lưỡng Hao chiếu thủ Điền Tài, tán nhiều tụ ít, mấy ai nên giàu",
  "nghia": "Tài Bạch có Đại Hao hoặc Tiểu Hao: tiền dễ ra nhiều hơn vào, cần lập kế hoạch tài chính.",
  "tone": "xau",
  "dk": {
   "cung": "Tài Bạch",
   "motTrong": [
    [
     "Đại Hao",
     "Tiểu Hao"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 164,
  "pho": true
 },
 {
  "phu": "Khôi Việt Mệnh Thân vi trưởng tứ",
  "nghia": "Khôi hoặc Việt ở Mệnh: có quý nhân, thường được tin cậy, hợp vai trò đứng đầu hoặc trưởng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 177,
  "pho": true
 },
 {
  "phu": "Tọa hướng quý chẳng phùng Không xứ, gặp Khoa thời nhất cử thành danh",
  "nghia": "Mệnh có Khôi hoặc Việt, không bị Không Kiếp Tuần Triệt, gặp Hóa Khoa: dễ thành danh nhờ học vấn thi cử.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ],
   "hoi": [
    "Hóa Khoa"
   ],
   "khong": [
    "Địa Không",
    "Địa Kiếp",
    "Tuần",
    "Triệt"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 25
 },
 {
  "phu": "Thiên Khôi, Thiên Việt cái thế văn chương",
  "nghia": "Khôi và Việt cùng hội về Mệnh: học vấn, văn chương nổi trội.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ],
   "hoi": [
    "Thiên Khôi",
    "Thiên Việt"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 108,
  "pho": true
 },
 {
  "phu": "Khôi tinh lâm Mệnh, vị liệt Tam Thai",
  "nghia": "Thiên Khôi thủ Mệnh: có quý nhân, dễ đạt vị trí cao.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Khôi"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 83,
  "pho": true
 },
 {
  "phu": "Khôi Việt Xương Khúc, Lộc Tồn phù, tinh sát vô xung, đa phú quý",
  "nghia": "Khôi Việt, Xương Khúc, Lộc Tồn hội Mệnh mà không bị sát tinh: xu hướng phú quý vững.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ],
   "hoi": [
    "Văn Xương",
    "Văn Khúc",
    "Lộc Tồn"
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Sao Quan, Phúc cùng Khôi tinh, làm chung Thân Mệnh, đề danh bảng rồng",
  "nghia": "Thiên Khôi ở Mệnh gặp Thiên Quan, Thiên Phúc: thuận đường thi cử, danh vị.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Khôi"
   ],
   "hoi": [
    "Thiên Quan",
    "Thiên Phúc"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Việt Khôi Long Phượng Khúc Xương, ngộ Khoa ắt hẳn bẻ cành quế hoa",
  "nghia": "Khôi Việt, Xương Khúc, Long Trì hoặc Phượng Các và Hóa Khoa hội Mệnh: đường học hành thi cử thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ],
   "hoi": [
    "Văn Xương",
    "Văn Khúc",
    "Hóa Khoa"
   ],
   "hoiMot": [
    [
     "Long Trì",
     "Phượng Các"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Việt Khôi Lương Tướng, quý trung ắt là chắc giống con giồng chẳng sai",
  "nghia": "Tử Tức có Khôi hoặc Việt cùng Thiên Lương hoặc Thiên Tướng: con cái có xu hướng học giỏi, tiếng tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Tử Tức",
   "motTrong": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ],
    [
     "Thiên Lương",
     "Thiên Tướng"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 27
 },
 {
  "phu": "Cung Tử Tức trong ngoài Khôi Việt, hẳn sinh người hào kiệt khoa danh",
  "nghia": "Tử Tức có Khôi Việt cùng chiếu: con cái có xu hướng học hành, thành đạt.",
  "tone": "tot",
  "dk": {
   "cung": "Tử Tức",
   "motTrong": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ],
   "hoi": [
    "Thiên Khôi",
    "Thiên Việt"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 104,
  "pho": true
 },
 {
  "phu": "Lưỡng Quý phùng Tử Vi, Đoài Chấn ấy sinh con, cầu tự chẳng sai",
  "nghia": "Tử Tức ở Mão hoặc Dậu có Tử Vi, Khôi Việt chiếu: đường con cái thuận lợi, có quý nhân hỗ trợ.",
  "tone": "tot",
  "dk": {
   "cung": "Tử Tức",
   "chi": [
    "Mão",
    "Dậu"
   ],
   "sao": [
    "Tử Vi"
   ],
   "hoi": [
    "Thiên Khôi",
    "Thiên Việt"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Khôi Việt giáp Mệnh vi kỳ cách",
  "nghia": "Mệnh được Thiên Khôi, Thiên Việt kẹp hai bên: được quý nhân nâng đỡ từ nhiều phía.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "giap": [
    [
     "Thiên Khôi",
     "Thiên Việt"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 36
 },
 {
  "phu": "Khúc Xương nhập Mệnh, những thanh tú nhã chi lang",
  "nghia": "Xương hoặc Khúc ở Mệnh: nho nhã, thanh tú, thiên về học thuật.",
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 163,
  "pho": true
 },
 {
  "phu": "Văn Xương, Văn Khúc vi nhân đa học đa năng",
  "nghia": "Văn Xương và Văn Khúc cùng cung Mệnh: học nhiều nghề, đa tài.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Nữ nhân Xương Khúc thông minh, phú quý đa dâm",
  "nghia": "Nữ mệnh có Xương hoặc Khúc: thông minh, đường tình cảm phong phú, nên cân nhắc.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ],
   "gioi": "nu"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 87,
  "pho": true
 },
 {
  "phu": "Văn Tinh củng chiếu giả nghị niên thiếu đăng khoa",
  "nghia": "Văn Xương và Văn Khúc cùng hội chiếu về Mệnh: học giỏi, sớm đỗ đạt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Văn Xương",
    "Văn Khúc"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 246,
  "pho": true
 },
 {
  "phu": "Văn Xương hội Liêm, chỉ táng mệnh thiên niên",
  "nghia": "Văn Xương cùng Liêm Trinh hội Mệnh: nên chú ý sức khỏe và hành vi rủi ro.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Văn Xương"
   ],
   "hoi": [
    "Liêm Trinh"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 31
 },
 {
  "phu": "Xương Khúc giáp Trì, quý nhi thả hiển",
  "nghia": "Long Trì ở Mệnh được Xương Khúc kẹp hai bên: có danh vọng, văn chương nghệ thuật.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Long Trì"
   ],
   "giap": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Xương Khúc Tỵ Hợi lâm, bất quý vi đại phú",
  "nghia": "Xương hoặc Khúc ở Tỵ hoặc Hợi: có thể giàu hoặc quý nhờ trí tuệ.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Tỵ",
    "Hợi"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 31
 },
 {
  "phu": "Xương Khúc hữu Âm Dương nhi đắc lực",
  "nghia": "Xương hoặc Khúc gặp Nhật Nguyệt hội chiếu: tài văn học được thể hiện tốt, có người giúp.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ],
   "hoi": [
    "Thái Âm",
    "Thái Dương"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 33
 },
 {
  "phu": "Văn Khúc Kỵ đồng, Hóa Kỵ hạn nan phòng, yểu tử chỉ ưu",
  "nghia": "Hạn có Văn Khúc và Hóa Kỵ: nên chú ý sức khỏe, tránh lo nghĩ quá mức.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Văn Khúc",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Xương Khúc thủ Thân, phùng Cơ, dâm loạn",
  "nghia": "Thân có Xương hoặc Khúc gặp Thiên Cơ: tư duy linh hoạt, đường tình cảm nhiều biến động, nên cân nhắc.",
  "tone": "trung",
  "dk": {
   "cung": "Thân",
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ],
   "hoi": [
    "Thiên Cơ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 52,
  "pho": true
 },
 {
  "phu": "Nữ mệnh phùng Xương Riêu, Nhật sinh dâm đảng",
  "nghia": "Nữ mệnh có Văn Xương, Thiên Riêu gặp Thái Dương: duyên dáng, cuốn hút, đường tình cảm cần tỉnh táo.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Văn Xương",
    "Thiên Riêu"
   ],
   "hoi": [
    "Thái Dương"
   ],
   "gioi": "nu"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Tả Phù Văn Xương vị chí Tam Trai",
  "nghia": "Tả Phù và Văn Xương ở Mệnh: nhờ học vấn và người giúp mà có địa vị.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tả Phù",
    "Văn Xương"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Văn Khúc ngộ Thiên Lương, vĩ chí thai cương",
  "nghia": "Văn Khúc cùng Thiên Lương ở Mệnh: nhân hậu, học vấn, hợp công việc có uy tín.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Văn Khúc",
    "Thiên Lương"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 14
 },
 {
  "phu": "Liêm Trinh phùng Văn Quế, cảnh bôn ba",
  "nghia": "Liêm Trinh gặp Văn Khúc dễ có đời sống bôn ba, đổi thay nơi chốn; nên chủ động chọn hướng đi ổn định.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Liêm Trinh"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Xương Khúc, Cơ, Lộc thanh tú xảo",
  "nghia": "Thiên Cơ hội Xương Khúc và Lộc: người nhã nhặn, khéo léo, có óc tinh tế trong công việc.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Cơ"
   ],
   "motTrong": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ],
   "hoiMot": [
    [
     "Lộc Tồn",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Văn Xương, Vũ Khúc ư Thân Mệnh văn vũ kiêm bị",
  "nghia": "Văn Xương đồng cung Vũ Khúc: nghiêng về cả văn lẫn võ, vừa có chữ nghĩa vừa quyết đoán.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Văn Xương",
    "Vũ Khúc"
   ]
  },
  "kenh": [
   "Tử Vi Đẩu Số Toàn Thư (Trần Đoàn)",
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Nhị Khúc triều viên, phùng Tả Hữu, tướng tướng",
  "nghia": "Xương Khúc được Tả Hữu trợ giúp: có học, nhiều người giúp đỡ, dễ làm vị trí chỉ huy.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Văn Xương",
    "Văn Khúc"
   ],
   "hoi": [
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Nhị Khúc Tham Lang ngộ Sửu, hạn phòng nịch thủy chi ưu",
  "nghia": "Tham Lang gặp Xương Khúc ở Sửu trong đại hạn: nên chú ý an toàn khi gần sông nước.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "chi": [
    "Sửu"
   ],
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Giáp Xương giáp Khúc chủ quý hề",
  "nghia": "Văn Xương, Văn Khúc kẹp hai bên cung Mệnh: được người có học, người tốt hỗ trợ, xu hướng đường đời thuận.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "giap": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 32
 },
 {
  "phu": "Xương Khúc giáp Mệnh, xuất ngoại đa cận quý nhân",
  "nghia": "Xương Khúc kẹp Mệnh: ra ngoài, đi xa dễ gặp người giúp đỡ có vị thế.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "giap": [
    [
     "Văn Xương",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 32
 },
 {
  "phu": "Tả Phụ Hữu Bật chung thân phúc hậu",
  "nghia": "Tả Phù, Hữu Bật cùng ở cung Thân: nhiều người hỗ trợ, về lâu dài đời sống tương đối đầy đủ, nhân hậu.",
  "tone": "tot",
  "dk": {
   "cung": "Thân",
   "sao": [
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Tả Phụ phùng cát tinh, bất vi yểu triết",
  "nghia": "Tả Phù gặp các cát tinh: đời sống đỡ trắc trở, nền tảng sức khỏe và hoàn cảnh tương đối vững.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tả Phù"
   ],
   "hoiMot": [
    [
     "Thiên Khôi",
     "Thiên Việt",
     "Văn Xương",
     "Văn Khúc",
     "Hóa Khoa",
     "Hóa Quyền",
     "Hóa Lộc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 81,
  "pho": true
 },
 {
  "phu": "Phụ Bật Thiên Phúc đồng viên, ngôi cao chính viện, danh truyền y quan",
  "nghia": "Tả Hữu hợp Thiên Phúc: hợp nghề y, chăm sóc, công việc có uy tín trong ngành sức khỏe.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Phúc"
   ],
   "motTrong": [
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Phụ Bật ngộ Thái Âm, nhàn gái làm bà đỡ, cứu phòng hộ sinh",
  "nghia": "Tả Hữu hợp Thái Âm: thiên về nghề chăm sóc, y tế, hộ sinh, việc hỗ trợ người khác.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Âm"
   ],
   "motTrong": [
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Tả Hữu đồng cung gặp Mệnh Đào Hoa, trước đỡ sau nên",
  "nghia": "Tả Hữu cùng Đào Hoa ở Mệnh: giai đoạn đầu nhiều chông chênh về tình cảm, về sau ổn dần.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tả Phù",
    "Hữu Bật",
    "Đào Hoa"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Tả Hữu Xương Khúc phùng Dương Đà, lương sinh ám trí",
  "nghia": "Cát tinh bị Kình Đà quấy nhiễu: năng lực dễ bị che mờ, nên giữ bình tĩnh, tránh quyết định vội.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Tả Phù",
     "Hữu Bật"
    ],
    [
     "Văn Xương",
     "Văn Khúc"
    ],
    [
     "Kình Dương",
     "Đà La"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Tả Hữu hội Khôi Việt, vi phúc thọ",
  "nghia": "Tả Hữu hội Khôi Việt ở Mệnh: nhiều quý nhân, phúc phần tương đối tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Tả Phù",
    "Hữu Bật",
    "Thiên Khôi",
    "Thiên Việt"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 63,
  "pho": true
 },
 {
  "phu": "Phụ Bật ái nhập mộ cung, nhược phùng Đế Tượng, văn đoàn võ cách hoạch phát tài danh",
  "nghia": "Tả Hữu ở cung tứ mộ hội Tử Vi, Thiên Tướng: hợp cả văn lẫn võ, tài danh phát về sau.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Thìn",
    "Tuất",
    "Sửu",
    "Mùi"
   ],
   "motTrong": [
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ],
   "hoiMot": [
    [
     "Tử Vi",
     "Thiên Tướng"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 21
 },
 {
  "phu": "Tả Phụ Văn Xương hội cát tinh, tôn cư Bát Tọa",
  "nghia": "Tả Phù với Văn Xương và cát tinh hội hợp: địa vị đáng kể, được trọng dụng.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tả Phù",
    "Văn Xương"
   ],
   "hoiMot": [
    [
     "Thiên Khôi",
     "Thiên Việt",
     "Hữu Bật",
     "Văn Khúc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Mộ phùng Tả Hữu đồng lai, tôn cư Bát Tọa chi quý",
  "nghia": "Tả Hữu cùng đến cung tứ mộ ở Mệnh: vị thế khá, có người nâng đỡ.",
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
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Tả Phụ, Tử Phủ đồng cung, tôn cư vạn thừa",
  "nghia": "Tả Hữu cùng Tử Vi Thiên Phủ đồng cung: vị thế cao, được hậu thuẫn mạnh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi",
    "Thiên Phủ"
   ],
   "motTrong": [
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Phụ Bật giáp Đế, phúc lai lâm",
  "nghia": "Tả Hữu kẹp hai bên Tử Vi: được người giúp đỡ, phúc phần đến đều.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tử Vi"
   ],
   "giap": [
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Tả Hữu nhật nguyệt lâm Tử vị, khách trập trập ư trung tư",
  "nghia": "Tử Tức có Tả Hữu cùng Nhật hoặc Nguyệt: đường con cái có nhiều hỗ trợ, gia đình đông vui; chỉ tham khảo.",
  "tone": "tot",
  "dk": {
   "cung": "Tử Tức",
   "motTrong": [
    [
     "Tả Phù",
     "Hữu Bật"
    ],
    [
     "Thái Dương",
     "Thái Âm"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 25
 },
 {
  "phu": "Tả Hữu đồng cung, Quan cư hầu bá",
  "nghia": "Cung Quan Lộc có cả Tả Phù và Hữu Bật: sự nghiệp được nhiều người nâng đỡ, vị trí khá.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 15
 },
 {
  "phu": "Tả Hữu giáp Mệnh, vi quý cách",
  "nghia": "Tả Phù, Hữu Bật kẹp hai bên cung Mệnh: được người trợ giúp, xu hướng thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "giap": [
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 34
 },
 {
  "phu": "Mệnh cư Đào Hỷ hướng Tử Dương, nhi phú quý khám kỳ",
  "nghia": "Đào Hoa, Thiên Hỷ ở Mệnh hội Tử Vi hoặc Thái Dương: duyên dáng, được quý trọng, có cơ hội khá giả.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đào Hoa",
    "Thiên Hỷ"
   ],
   "hoiMot": [
    [
     "Tử Vi",
     "Thái Dương"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 9
 },
 {
  "phu": "Lãng lý đào xá, gia Địa Kiếp, tam canh giai tưởng ư giai nhi",
  "nghia": "Đào Hoa gặp Địa Kiếp ở Mệnh: tình cảm dễ vướng bận, thất thường; nên giữ lý trí.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đào Hoa",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Đào Hoa thủ Mệnh, quả thê",
  "nghia": "Đào Hoa thủ Mệnh nam: đường tình duyên nhiều biến động, nên chú ý chọn người và giữ hòa khí.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đào Hoa"
   ],
   "gioi": "nam"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 38
 },
 {
  "phu": "Nữ tử Đồng Loan thủ Mệnh, chủ nhị phu",
  "nghia": "Thiên Đồng với Hồng Loan ở Mệnh nữ: đường hôn nhân có thể nhiều thay đổi, nên cân nhắc kỹ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Đồng",
    "Hồng Loan"
   ],
   "gioi": "nu"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Đào Tang ở Mệnh cung, sau trước, gái lẳng lơ",
  "nghia": "Đào Hoa gặp Tang Môn ở Mệnh nữ: tình cảm dễ dao động, nhiều ưu tư; nên bình tĩnh.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đào Hoa",
    "Tang Môn"
   ],
   "gioi": "nu"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Đào Riêu số gái, ai hay chồng ra khỏi cửa giắt tay trai vào",
  "nghia": "Đào Hoa gặp Thiên Riêu ở Mệnh nữ: sức hút lớn nhưng đường tình cảm dễ phức tạp, nên giữ vững chừng mực.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đào Hoa",
    "Thiên Riêu"
   ],
   "gioi": "nu"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Hồng Loan, Tấu, Hỷ, Vũ, Đào, những phường ca xướng tiến vào nhà quan",
  "nghia": "Hồng Loan, Đào Hoa với Tấu Thư hoặc Thiên Hỷ: hợp nghệ thuật, ca hát, biểu diễn.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hồng Loan",
    "Đào Hoa"
   ],
   "motTrong": [
    [
     "Tấu Thư",
     "Thiên Hỷ"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Khéo nghề kim chỉ và may, Hồng Đào Tấu Vũ ở đầy Mệnh cung",
  "nghia": "Hồng Loan, Đào Hoa, Tấu Thư tụ ở Mệnh: khéo tay, hợp nghề thủ công thẩm mỹ.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hồng Loan",
    "Đào Hoa",
    "Tấu Thư"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Hồng, Khôi, Xương, Liêm phù trì, săn rồng dâng trước trong thì danh cao",
  "nghia": "Hồng Loan ở Mệnh hội Khôi, Xương, Liêm Trinh: học hành thi cử thuận, sớm có danh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hồng Loan"
   ],
   "hoi": [
    "Thiên Khôi",
    "Văn Xương",
    "Liêm Trinh"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Thiên Nguyệt Đức ngộ Đào tinh, trai sinh gái đẹp, vợ lành chồng sang",
  "nghia": "Thiên Đức, Nguyệt Đức gặp Đào Hoa: tình duyên thuận hòa, gia đình êm ấm.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Đức",
    "Nguyệt Đức",
    "Đào Hoa"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Hồng Loan ngộ Phục Binh, Tướng Quân, hiềm phùng binh tướng ắt sinh tai nạn",
  "nghia": "Hồng Loan gặp Phục Binh hoặc Tướng Quân: nên chú ý tai nạn và xung đột bất ngờ.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hồng Loan"
   ],
   "motTrong": [
    [
     "Phục Binh",
     "Tướng Quân"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 24
 },
 {
  "phu": "Đào Hồng cùng Thiên Hình đồng hội, gái tiết trinh hiền nội tề gia",
  "nghia": "Đào Hoa, Hồng Loan hội Thiên Hình ở Mệnh nữ: tình cảm có kỷ luật, giữ nền nếp gia đình.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đào Hoa",
    "Hồng Loan"
   ],
   "hoi": [
    "Thiên Hình"
   ],
   "gioi": "nu"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Quan cung hỷ ngộ Đào Hồng",
  "nghia": "Cung Quan Lộc có Đào Hoa hoặc Hồng Loan: công việc cần giao tiếp, được yêu mến, thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "motTrong": [
    [
     "Đào Hoa",
     "Hồng Loan"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 161,
  "pho": true
 },
 {
  "phu": "Thiên Di tối kỵ Kiếp Không lâm vào",
  "nghia": "Thiên Di gặp Địa Kiếp hoặc Địa Không: đi xa, giao tiếp ngoài nên cẩn trọng, dễ hao hụt.",
  "tone": "xau",
  "dk": {
   "cung": "Thiên Di",
   "motTrong": [
    [
     "Địa Không",
     "Địa Kiếp"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 159,
  "pho": true
 },
 {
  "phu": "Hồng Loan cư Thê, tiền khắc",
  "nghia": "Hồng Loan tại Phu Thê: nên chú ý bước đầu hôn nhân có thể chưa vững, cần thời gian hiểu nhau.",
  "tone": "trung",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Hồng Loan"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 84,
  "pho": true
 },
 {
  "phu": "Đào Hoa phùng Thiên Mã, túng khách vô môi",
  "nghia": "Đào Hoa gặp Thiên Mã ở Mệnh: duyên đến từ đi lại, thường tự tìm duyên không qua mai mối.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Đào Hoa",
    "Thiên Mã"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Hồng Loan phùng Địa Kiếp ư phu quân",
  "nghia": "Hồng Loan gặp Địa Kiếp ở Phu Thê: duyên hôn nhân dễ trắc trở, nên hòa nhã và kiên nhẫn.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Hồng Loan",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Thai tinh lại gặp Đào Hoa, tiền dâm hậu thú mới",
  "nghia": "Thai cùng Đào Hoa ở Mệnh: chuyện tình cảm đến sớm trước hôn nhân; nên suy xét kỹ.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thai",
    "Đào Hoa"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Vợ chồng viễn phôi tha hương, Đào Hồng len lỏi vào hàng Thiên Di",
  "nghia": "Đào Hoa, Hồng Loan ở Thiên Di: duyên tình dễ nảy sinh nơi xa, vợ chồng có thể xa cách.",
  "tone": "trung",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Đào Hoa",
    "Hồng Loan"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 20
 },
 {
  "phu": "Hồng Loan ngộ Kỵ, Phu cung tơ hồng đã dứt, má hồng còn ưa",
  "nghia": "Hồng Loan gặp Hóa Kỵ ở Phu Thê: duyên dễ đứt đoạn hoặc hiểu lầm; cần giao tiếp rõ ràng.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Hồng Loan",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Nữ mệnh Long Trì Phượng Các ôn lương",
  "nghia": "Long Trì cùng Phượng Các ở Mệnh nữ: dịu dàng, nhã nhặn, nền nếp.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Long Trì",
    "Phượng Các"
   ],
   "gioi": "nu"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 7
 },
 {
  "phu": "Phượng Long Tả Hữu Mệnh viên, chung thân phú quý",
  "nghia": "Long Trì, Phượng Các hội Tả Hữu ở Mệnh: được hỗ trợ, đời sống về lâu dài khá giả.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "hoi": [
    "Long Trì",
    "Phượng Các",
    "Tả Phù",
    "Hữu Bật"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 53,
  "pho": true
 },
 {
  "phu": "Phượng Long Mão Dậu đôi miền vượng, thì kim bảng chiếm tên ở đầu",
  "nghia": "Long Trì hoặc Phượng Các ở Mão, Dậu: thuận đường học vấn, thi cử.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Mão",
    "Dậu"
   ],
   "motTrong": [
    [
     "Long Trì",
     "Phượng Các"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 23
 },
 {
  "phu": "Mệnh Quan nhi giáp Phượng Long, thanh danh sủng ái",
  "nghia": "Long Trì, Phượng Các kẹp cung Mệnh: được quý mến, danh tiếng tốt.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "giap": [
    [
     "Long Trì",
     "Phượng Các"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 25
 },
 {
  "phu": "Giáp Bát Tọa giáp Tam Thai, thiếu niên sớm dự các đài nghênh ngang",
  "nghia": "Bát Tọa, Tam Thai kẹp cung Mệnh: sớm có chỗ đứng, được trọng dụng khi còn trẻ.",
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 38
 },
 {
  "phu": "Mã ngộ Khốc nhi phùng Hình, Quyền Lộc Ấn tại Quan cung, võ tất thăng ban đệ nhất",
  "nghia": "Mã, Khốc, Hình ở Quan Lộc hội Quyền, Lộc, Ấn: hợp nghề kỷ luật, võ nghiệp, thăng tiến.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Thiên Mã",
    "Thiên Khốc",
    "Thiên Hình"
   ],
   "hoiMot": [
    [
     "Hóa Quyền",
     "Hóa Lộc",
     "Quốc Ấn"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Mã ngộ Thiên Hình nhi phùng Thiên Khốc, công hoàn phát võ",
  "nghia": "Thiên Mã, Thiên Hình, Thiên Khốc hội: hợp võ nghiệp, nghề kỷ luật cao.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Mã",
    "Thiên Hình",
    "Thiên Khốc"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Thiên Mã tại Tỵ thị ư chiến mã, hạnh ngộ Lương Khoa, loạn thế xuất đầu",
  "nghia": "Thiên Mã ở Tỵ hội Thiên Lương, Hóa Khoa: thích ứng nhanh, nổi lên lúc nhiều biến động.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Tỵ"
   ],
   "sao": [
    "Thiên Mã"
   ],
   "hoi": [
    "Thiên Lương",
    "Hóa Khoa"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Trai thời du thủy du sơn, Thiên Di ngộ Mã nơi vườn đào hoa",
  "nghia": "Thiên Di có Thiên Mã và Đào Hoa: thích đi lại, du ngoạn, duyên tình gắn với nơi xa.",
  "tone": "trung",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Thiên Mã",
    "Đào Hoa"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Tử cung Thiên Mã phùng Không, gặp sao Phụ Bật, một vùng sanh đôi",
  "nghia": "Tử Tức có Thiên Mã, Không và Tả Hữu: xu hướng nhiều biến động, có thể song thai; chỉ tham khảo.",
  "tone": "trung",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Thiên Mã"
   ],
   "motTrong": [
    [
     "Địa Không",
     "Thiên Không"
    ],
    [
     "Tả Phù",
     "Hữu Bật"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Hình Riêu Tấu Vũ một đoàn, làm nghề thợ mộc khôn ngoan ai tầy",
  "nghia": "Thiên Hình, Thiên Riêu với Tấu Thư hoặc Vũ Khúc: khéo tay, hợp nghề kỹ thuật, thủ công.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Hình",
    "Thiên Riêu"
   ],
   "motTrong": [
    [
     "Tấu Thư",
     "Vũ Khúc"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Thiên Hình thủ Mệnh, Kỵ Đà lâm, bất nhất khiếm hòa",
  "nghia": "Thiên Hình ở Mệnh gặp Đà La, Hóa Kỵ: dễ bất hòa, xung đột; nên mềm mỏng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Hình"
   ],
   "hoi": [
    "Đà La",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Hình ấn lai triều, Tướng Binh tọa chiếu, ái văn xưng võ",
  "nghia": "Thiên Hình hội Quốc Ấn, Tướng Quân hoặc Phục Binh: mạnh về quyền kỷ luật, hợp ngành vũ trang, pháp luật.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Hình"
   ],
   "hoi": [
    "Quốc Ấn"
   ],
   "hoiMot": [
    [
     "Tướng Quân",
     "Phục Binh"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 31
 },
 {
  "phu": "Thiên Hình, Thiên Riêu Dậu Sửu tối cát",
  "nghia": "Thiên Hình, Thiên Riêu ở Dậu hoặc Sửu: hai sao này đứng đây được coi là thuận lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Dậu",
    "Sửu"
   ],
   "sao": [
    "Thiên Hình",
    "Thiên Riêu"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Thiên Hình Dương Nhận Ngọ vị, lai gia Thất Sát, có khi hình tù",
  "nghia": "Thiên Hình, Kình Dương ở Ngọ hội Thất Sát: nên chú ý pháp lý, tránh xung đột.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Ngọ"
   ],
   "sao": [
    "Thiên Hình",
    "Kình Dương"
   ],
   "hoi": [
    "Thất Sát"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Hình lâm Quan Lộc cư Đông, quản binh chức trọng",
  "nghia": "Thiên Hình ở Quan Lộc tại Mão: hợp quyền hành, kỷ luật, chức vụ quản lý lực lượng.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "chi": [
    "Mão"
   ],
   "sao": [
    "Thiên Hình"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Thanh Long Thìn Thổ, Đinh Kỷ âm nam gia hợp Kỵ tinh, công danh toại mãn",
  "nghia": "Thanh Long ở Thìn gặp Hóa Kỵ, nam tuổi Đinh Kỷ: công danh khá toại nguyện sau thử thách.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Thìn"
   ],
   "sao": [
    "Thanh Long"
   ],
   "hoi": [
    "Hóa Kỵ"
   ],
   "canNam": [
    "Đinh",
    "Kỷ"
   ],
   "gioi": "nam"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Nhật phùng hãm địa, Thanh Long có người phương ấy vẩy vùng khôn lên",
  "nghia": "Thái Dương hãm gặp Thanh Long: lúc đầu khó, cần nỗ lực vẫy vùng mới khá lên.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thái Dương",
    "Thanh Long"
   ],
   "sang": false
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Kim lý phùng Không, bất phiêu lưu tắc đa tật khổ",
  "nghia": "Mệnh Kim gặp Không tinh: dễ phiêu bạt hoặc lắm khó khăn; nên ổn định sức khỏe và nơi ở.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "menhHanh": [
    "Kim"
   ],
   "motTrong": [
    [
     "Địa Không",
     "Thiên Không"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 4
 },
 {
  "phu": "Vận ngộ Thiên Không Địa Kiếp, Nguyễn Tịch hữu bần cùng chi khổ",
  "nghia": "Đại hạn gặp Thiên Không và Địa Kiếp: giai đoạn dễ hao hụt, thiếu thốn; nên tiết kiệm, thận trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Thiên Không",
    "Địa Kiếp"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Thiên Không hóa Kỵ tối kỵ Quan cung",
  "nghia": "Quan Lộc có Thiên Không gặp Hóa Kỵ: công danh dễ trắc trở, cần chuẩn bị kỹ.",
  "tone": "xau",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Thiên Không",
    "Hóa Kỵ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 6
 },
 {
  "phu": "Hạn phùng Riêu Hổ, khá ngừa những loài ác thú",
  "nghia": "Hạn gặp Thiên Riêu và Bạch Hổ: nên chú ý an toàn, tránh động vật nguy hiểm.",
  "tone": "xau",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Thiên Riêu",
    "Bạch Hổ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 13
 },
 {
  "phu": "Hạn phùng Riêu Hỷ Đào Hồng, gái trai tơ tưởng",
  "nghia": "Hạn gặp Riêu, Hỷ cùng Đào hoặc Hồng: chuyện tình cảm dễ nảy nở, nên giữ chừng mực.",
  "tone": "trung",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Thiên Riêu",
    "Thiên Hỷ"
   ],
   "motTrong": [
    [
     "Đào Hoa",
     "Hồng Loan"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 3
 },
 {
  "phu": "Thiên Riêu, Thiên Hỷ đa chiêu quái dị chí tai",
  "nghia": "Thiên Riêu cùng Thiên Hỷ ở Mệnh: dễ gặp chuyện lạ, bất ngờ; nên cẩn trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Thiên Riêu",
    "Thiên Hỷ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Thai tinh ngộ Thái Âm cung Tử, hạn rằng con cầu tự mới sinh",
  "nghia": "Tử Tức có Thai và Thái Âm: con cái có thể đến muộn hoặc nhờ cầu tự; chỉ tham khảo.",
  "tone": "trung",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Thai",
    "Thái Âm"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Tử cung Thai Tướng Phục Binh, vợ chồng ắt đã tư sinh thuở nào",
  "nghia": "Tử Tức có Thai, Tướng Quân, Phục Binh: chuyện con cái có thể đến sớm hoặc ngoài dự tính; không nên phán.",
  "tone": "trung",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Thai",
    "Tướng Quân",
    "Phục Binh"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Dưỡng Hỷ lâm Tử Tức, tất sanh quý tử",
  "nghia": "Dưỡng và Thiên Hỷ ở Tử Tức: tin vui con cái, quan hệ cha mẹ con ấm áp.",
  "tone": "tot",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Dưỡng",
    "Thiên Hỷ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 8
 },
 {
  "phu": "Thai phùng Tả Hữu Hợi cung, nam nhân ắt có con dòng thiếp thê",
  "nghia": "Tử Tức ở Hợi có Thai và Tả Hữu, mệnh nam: chuyện gia đình, con cái có thể phức tạp; cần minh bạch.",
  "tone": "trung",
  "dk": {
   "cung": "Tử Tức",
   "chi": [
    "Hợi"
   ],
   "sao": [
    "Thai",
    "Tả Phù",
    "Hữu Bật"
   ],
   "gioi": "nam"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Tử cung Thai ngộ Hỏa Linh, bào thai những giống yêu tinh muộn phiền",
  "nghia": "Tử Tức có Thai cùng Hỏa, Linh: nên chú ý sức khỏe thai kỳ và chăm sóc con nhỏ.",
  "tone": "xau",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Thai",
    "Hỏa Tinh",
    "Linh Tinh"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Thai phùng Kiếp Sát, tu phòng sinh sản",
  "nghia": "Tử Tức có Thai gặp Kiếp Sát: nên chú ý chăm sóc thai sản, khám đều.",
  "tone": "xau",
  "dk": {
   "cung": "Tử Tức",
   "sao": [
    "Thai",
    "Kiếp Sát"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Họ hàng có kẻ binh đao, Tướng Binh Tử Tuyệt đóng vào Phúc cung",
  "nghia": "Phúc Đức có Tướng Quân, Phục Binh cùng Tử hoặc Tuyệt: trong họ có người thuộc ngành vũ trang hoặc nhiều tranh chấp.",
  "tone": "trung",
  "dk": {
   "cung": "Phúc Đức",
   "sao": [
    "Tướng Quân",
    "Phục Binh"
   ],
   "motTrong": [
    [
     "Tử",
     "Tuyệt"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Thai phùng Đào Hỷ, vận này vợ chồng mừng đã đến ngày nở hoa",
  "nghia": "Đại hạn có Thai, Đào Hoa, Thiên Hỷ: giai đoạn có tin vui về con cái.",
  "tone": "tot",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Thai",
    "Đào Hoa",
    "Thiên Hỷ"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 2
 },
 {
  "phu": "Tuần Triệt đương đầu, thiếu niên gian khổ",
  "nghia": "Tuần hoặc Triệt ở Mệnh: tuổi trẻ nhiều thử thách, về sau nhờ kiên nhẫn mới vững.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Tuần",
     "Triệt"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 320,
  "pho": true
 },
 {
  "phu": "Tam Không độc thủ, Tam Kỳ gia hội, phú quý song toàn",
  "nghia": "Không tinh thủ Mệnh nhưng hội Khoa Quyền Lộc: vượt khó mà thành, khá cả danh lẫn lợi.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "motTrong": [
    [
     "Địa Không",
     "Thiên Không",
     "Tuần",
     "Triệt"
    ]
   ],
   "hoi": [
    "Hóa Khoa",
    "Hóa Quyền",
    "Hóa Lộc"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 22
 },
 {
  "phu": "Tuần Triệt ngộ Thiên Hình, tha hương cách lý",
  "nghia": "Tuần hoặc Triệt cùng Thiên Hình ở Mệnh: dễ sống xa quê, lập nghiệp nơi khác.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 17
 },
 {
  "phu": "Cung Huynh Đệ Triệt Tuần xung củng, chim đầu đàn bay bổng xa khơi",
  "nghia": "Huynh Đệ có Tuần hoặc Triệt: anh em thường ở xa nhau, ít gắn bó; người đứng đầu đi xa.",
  "tone": "trung",
  "dk": {
   "cung": "Huynh Đệ",
   "motTrong": [
    [
     "Tuần",
     "Triệt"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 281,
  "pho": true
 },
 {
  "phu": "Không phùng Phá Tử, phối hào, vợ chồng trắc trở ba tao mới thành",
  "nghia": "Phu Thê có Tử Vi, Phá Quân gặp Không tinh: hôn nhân cần kiên nhẫn, thử thách mới bền.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Tử Vi",
    "Phá Quân"
   ],
   "motTrong": [
    [
     "Địa Không",
     "Thiên Không"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 1
 },
 {
  "phu": "Triệt Tuần ngộ Mã hành Thê vị, vợ bỏ chồng đào tỵ tha phương",
  "nghia": "Phu Thê có Thiên Mã gặp Tuần hoặc Triệt: vợ chồng dễ xa cách vì công việc; cần giữ liên lạc.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Thiên Mã"
   ],
   "motTrong": [
    [
     "Tuần",
     "Triệt"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 23
 },
 {
  "phu": "Triệt Tuần xung khắc chẳng sai, Thiên Hư bất chính cả hai vợ chồng",
  "nghia": "Phu Thê có Thiên Hư và Tuần hoặc Triệt: hôn nhân nhiều thử thách, cần thẳng thắn với nhau.",
  "tone": "xau",
  "dk": {
   "cung": "Phu Thê",
   "sao": [
    "Thiên Hư"
   ],
   "motTrong": [
    [
     "Tuần",
     "Triệt"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 21
 },
 {
  "phu": "Tam phương xung sát, hạnh Triệt khả bằng",
  "nghia": "Mệnh có Triệt khi tam phương nhiều sát tinh: Triệt giúp chặn bớt sát khí.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Triệt"
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 143,
  "pho": true
 },
 {
  "phu": "Triệt đáo Kim cung, tinh thần thanh sảng, bất kỵ sát tinh",
  "nghia": "Triệt ở Thân hoặc Dậu (cung Kim): Triệt phát huy tốt, tinh thần sáng, ít sợ sát tinh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Thân",
    "Dậu"
   ],
   "sao": [
    "Triệt"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 31
 },
 {
  "phu": "Tuần lâm Hỏa địa, bất kỵ sát tinh",
  "nghia": "Tuần ở Tỵ hoặc Ngọ (cung Hỏa): Tuần phát huy tốt, giảm tác hại của sát tinh.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "chi": [
    "Tỵ",
    "Ngọ"
   ],
   "sao": [
    "Tuần"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 39
 },
 {
  "phu": "Hoa Cái Thiên Di, xuất ngoại cận quý",
  "nghia": "Hoa Cái ở Thiên Di: ra ngoài dễ gặp quý nhân, được nể trọng.",
  "tone": "tot",
  "dk": {
   "cung": "Thiên Di",
   "sao": [
    "Hoa Cái"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 81,
  "pho": true
 },
 {
  "phu": "Hoa Cái Tấu Thư, thanh cao tùng chúng",
  "nghia": "Hoa Cái cùng Tấu Thư ở Mệnh: phong thái thanh nhã, hơn người, thích nghệ thuật.",
  "tone": "tot",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hoa Cái",
    "Tấu Thư"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 17
 },
 {
  "phu": "Hoa Cái Phượng Các Đào Hồng, trai toan bỏ vợ trong lòng chẳng khuây",
  "nghia": "Hoa Cái, Phượng Các, Đào Hoa, Hồng Loan ở Mệnh nam: sức hút lớn, tình cảm dễ xao động; nên giữ chừng mực.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Hoa Cái",
    "Phượng Các"
   ],
   "motTrong": [
    [
     "Đào Hoa",
     "Hồng Loan"
    ]
   ],
   "gioi": "nam"
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Mộc Dục Hoa Cái thủ Mệnh",
  "nghia": "Mộc Dục cùng Hoa Cái ở Mệnh: thích làm đẹp, tình cảm phong phú; nên giữ chừng mực.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Mộc Dục",
    "Hoa Cái"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Tấu Thư thủ Mệnh, thi đa khẩu thiệt chi nhân",
  "nghia": "Tấu Thư ở Mệnh: khéo ăn nói, hay bàn luận, dễ vướng tranh cãi bằng lời.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Tấu Thư"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 83,
  "pho": true
 },
 {
  "phu": "Quan Phù thủ viên, tì thử phòng nhân chi phản",
  "nghia": "Quan Phù ở Mệnh: nên cẩn trọng thị phi, giấy tờ, giữ quan hệ rõ ràng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Quan Phù"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 136,
  "pho": true
 },
 {
  "phu": "Hạn ngộ Đại Tiểu trùng phùng, cát thì thịnh vượng, hung thì truân chuyên",
  "nghia": "Đại Hao, Tiểu Hao cùng hạn: biến động lớn, hợp thì khá lên, bất lợi thì hao tổn.",
  "tone": "trung",
  "dk": {
   "cung": "Đại hạn",
   "sao": [
    "Đại Hao",
    "Tiểu Hao"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Quan phùng Tướng Tấu nghệ chi",
  "nghia": "Quan Lộc có Tướng Quân và Tấu Thư: hợp nghề nghệ thuật, biểu diễn hoặc công việc cần kỹ năng.",
  "tone": "tot",
  "dk": {
   "cung": "Quan Lộc",
   "sao": [
    "Tướng Quân",
    "Tấu Thư"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 0
 },
 {
  "phu": "Bệnh Phù Thái Tuế dở dang",
  "nghia": "Bệnh Phù cùng Thái Tuế ở Mệnh: việc dễ dở dang, sức khỏe cần để ý.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Bệnh Phù",
    "Thái Tuế"
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 5
 },
 {
  "phu": "Mệnh lâm nhược địa, hựu phùng Không Kiếp Kình Đà gia Hỏa Linh",
  "nghia": "Mệnh hãm gặp nhiều sát tinh: cuộc sống thử thách, nên tích lũy, giữ sức khỏe và cẩn trọng.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sang": false,
   "hoiMot": [
    [
     "Địa Không",
     "Địa Kiếp"
    ],
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
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 34
 },
 {
  "phu": "Cự Phá Kình Dương, tính tất cương",
  "nghia": "Cự Môn hoặc Phá Quân gặp Kình Dương ở Mệnh: tính cứng rắn, dễ va chạm; nên tập mềm dẻo.",
  "tone": "xau",
  "dk": {
   "cung": "Mệnh",
   "sao": [
    "Kình Dương"
   ],
   "motTrong": [
    [
     "Cự Môn",
     "Phá Quân"
    ]
   ]
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 11
 },
 {
  "phu": "Mệnh vô chính diệu, nhị duyên sinh",
  "nghia": "Mệnh vô chính diệu: hoàn cảnh dễ gắn với hai nơi hoặc hai nguồn ảnh hưởng; chỉ tham khảo.",
  "tone": "trung",
  "dk": {
   "cung": "Mệnh",
   "vcd": true
  },
  "kenh": [
   "Tử vi đẩu số phú giải (Thái Văn Thịnh)"
  ],
  "tanSuat": 151,
  "pho": true
 }
];
