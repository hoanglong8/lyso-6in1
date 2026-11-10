/**
 * Câu phú Tử vi cổ (Hán Việt, phạm vi công cộng) mà các thầy trên YouTube trích dẫn; điều kiện để
 * app tự nhận ra trên lá số. Câu phú chuẩn hóa chính tả Hán Việt; phần nghĩa viết lại, không chép
 * bản dịch hay lời bình của sách hiện đại. Rút từ phụ đề khoảng 200 video (11/2026).
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
}
export interface Phu { phu: string; nghia: string; tone: "tot" | "xau" | "trung"; dk: PhuDk; kenh: string[] }

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
  ]
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
  ]
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
  ]
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
  ]
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
 "phu": "Phủ phùng Không xứ, tài suy",
 "nghia": "Thiên Phủ (kho tiền) gặp Không: kho dễ trống, tiền khó giữ; nên tích lũy chắc tay.",
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
 "phu": "Phủ phùng Không xứ, tài suy",
 "nghia": "Thiên Phủ (kho tiền) gặp Không: kho dễ trống, tiền khó giữ; nên tích lũy chắc tay.",
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
 "phu": "Phủ phùng Không xứ, tài suy",
 "nghia": "Thiên Phủ (kho tiền) gặp Không: kho dễ trống, tiền khó giữ; nên tích lũy chắc tay.",
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
 "phu": "Phủ phùng Không xứ, tài suy",
 "nghia": "Thiên Phủ (kho tiền) gặp Không: kho dễ trống, tiền khó giữ; nên tích lũy chắc tay.",
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
 "phu": "Phủ phùng Không xứ, tài suy",
 "nghia": "Thiên Phủ (kho tiền) gặp Không: kho dễ trống, tiền khó giữ; nên tích lũy chắc tay.",
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
 "phu": "Phủ phùng Không xứ, tài suy",
 "nghia": "Thiên Phủ (kho tiền) gặp Không: kho dễ trống, tiền khó giữ; nên tích lũy chắc tay.",
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
 ]
},
{
 "phu": "Tham cư Hợi Tý, danh vi phiếm thủy đào hoa",
 "nghia": "Tham Lang ở Hợi/Tý (đào hoa phiếm thủy): đa tình, thích hưởng thụ; nên giữ chừng mực.",
 "tone": "trung",
 "dk": {
  "cung": "Mệnh",
  "sao": [
   "Tham Lang"
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
}
];
