/**
 * Luận bổ sung theo kinh nghiệm luận của hai kênh YouTube, rút từ phụ đề 50 video (11/2026):
 * - Phái Việt Nam – Thiên Lương: kênh "389 TỬ VI".
 * - Bắc phái (Tứ hóa phi tinh): kênh "Tử Vi Tứ Hóa Đào Thanh Tín".
 * Chỉ giữ quy tắc xuất hiện ở ≥2 video; viết lại bằng lời riêng, không trích nguyên văn, không chứa
 * thông tin của khách trong video. Danh sách đã duyệt: docs/tuvi-quy-tac-video.md.
 */
import { CHI } from "@lyso/calendar-vn";
import type { TuViChart, TuViPalace } from "@lyso/engine-tuvi";
import type { Phan, Y } from "./types";
import { CUNG_Y } from "./tuvi-data";

export const NGUON_VIDEO_NAM = "Kinh nghiệm luận của kênh YouTube \"389 TỬ VI\" (rút từ 25 video, viết lại; chưa đối chiếu sách)";
export const NGUON_VIDEO_BAC = "Kinh nghiệm luận của kênh YouTube \"Tử Vi Tứ Hóa Đào Thanh Tín\" (rút từ 25 video, viết lại; chưa đối chiếu sách)";

/** Thứ tự cung chức tính từ Mệnh theo chiều tăng của địa chi */
export const CUNG_CHUC = ["Mệnh", "Phụ Mẫu", "Phúc Đức", "Điền Trạch", "Quan Lộc", "Nô Bộc", "Thiên Di", "Tật Ách", "Tài Bạch", "Tử Tức", "Phu Thê", "Huynh Đệ"] as const;
type CungChuc = (typeof CUNG_CHUC)[number];

const m12 = (x: number) => ((x % 12) + 12) % 12;
const at = (c: TuViChart, chi: number) => c.palaces.find((p) => p.chi === m12(chi)) as TuViPalace;
const cung = (c: TuViChart, ten: CungChuc) => at(c, c.menhChi + CUNG_CHUC.indexOf(ten));
const names = (p: TuViPalace) => [...p.majorStars, ...p.minorStars, ...p.adjectiveStars].map((s) => s.name);
const has = (p: TuViPalace, ...ns: string[]) => ns.some((n) => names(p).includes(n));
const hasAll = (p: TuViPalace, ...ns: string[]) => ns.every((n) => names(p).includes(n));
const found = (p: TuViPalace, ns: string[]) => ns.filter((n) => names(p).includes(n));
const major = (p: TuViPalace) => p.majorStars.map((s) => s.name);
const hoaIn = (p: TuViPalace, m: string) => [...p.majorStars, ...p.minorStars].filter((s) => s.mutagen === m).map((s) => s.name);
/** Tam phương tứ chính của một cung */
const tuChinh = (c: TuViChart, chi: number) => [chi, chi + 4, chi + 8, chi + 6].map((x) => at(c, x));
const hoiNames = (c: TuViChart, chi: number) => new Set(tuChinh(c, chi).flatMap(names));
const hoiHoa = (c: TuViChart, chi: number, m: string) => tuChinh(c, chi).flatMap((p) => hoaIn(p, m));
const y = (text: string, canCu: string, tone?: Y["tone"]): Y => ({ text, canCu, tone });
const lv = (p: TuViPalace) => CUNG_Y[p.name] ?? p.name;
/** Chính tinh dùng để luận Mệnh: Mệnh vô chính diệu thì mượn Thiên Di */
const menhMajor = (c: TuViChart) => {
  const m = major(cung(c, "Mệnh"));
  return m.length ? m : major(cung(c, "Thiên Di"));
};
const yearChi = (c: TuViChart) => CHI.indexOf(c.yearName.split(" ")[1] as (typeof CHI)[number]);
const yearCanDuong = (c: TuViChart) => c.amDuong.startsWith("Dương");

const SAT4 = ["Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh"];
const KHONG_KIEP = ["Địa Không", "Địa Kiếp"];
/** Hành tam hợp theo chi mod 4: Thân Tý Thìn Thủy, Tỵ Dậu Sửu Kim, Dần Ngọ Tuất Hỏa, Hợi Mão Mùi Mộc */
const hanhTamHop = (chi: number) => ({ 0: "Thủy", 1: "Kim", 2: "Hỏa", 3: "Mộc" })[chi % 4 as 0 | 1 | 2 | 3];
const SINH: Record<string, string> = { Mộc: "Hỏa", Hỏa: "Thổ", Thổ: "Kim", Kim: "Thủy", Thủy: "Mộc" };
const hanhOf = (s?: string) => ["Kim", "Mộc", "Thủy", "Hỏa", "Thổ"].find((h) => s?.includes(h));


/* ------------------------------------------------------------------ */
/* Phái Việt Nam – Thiên Lương: kinh nghiệm kênh 389 TỬ VI              */
/* ------------------------------------------------------------------ */

export function luanVideoNam(c: TuViChart): Phan[] {
  const menh = cung(c, "Mệnh");
  const than = at(c, c.thanChi);
  const di = cung(c, "Thiên Di");
  const tc = hoiNames(c, c.menhChi);
  const out: Phan[] = [];

  // A1. Khung lá số
  const khung: Y[] = [];
  // Thầy nói rõ: tuổi âm mà Mệnh ở cung dương là nghịch lý (khớp 14/14 lá số thầy đọc trong video).
  const thuan = yearCanDuong(c) === (c.menhChi % 2 === 0);
  khung.push(
    thuan
      ? y("Âm dương thuận lý: dễ được thời thế đỡ nâng, hợp phát triển ở môi trường quen thuộc.", `năm ${c.yearName} (${yearCanDuong(c) ? "dương" : "âm"}), Mệnh ở ${menh.chiName} (${c.menhChi % 2 === 0 ? "dương" : "âm"})`, "tot")
      : y("Âm dương nghịch lý: ít được thời thế ưu đãi, phải tự thân nhiều hơn; thường thuận khi ra ngoài, lập nghiệp xa quê.", `năm ${c.yearName} (${yearCanDuong(c) ? "dương" : "âm"}), Mệnh ở ${menh.chiName} (${c.menhChi % 2 === 0 ? "dương" : "âm"})`, "trung"),
  );
  const thH = hanhTamHop(c.menhChi);
  const bmH = hanhOf(c.banMenh);
  if (thH && bmH) {
    if (thH === bmH || SINH[thH] === bmH)
      khung.push(y("Tam hợp của cung Mệnh sinh hoặc cùng hành với bản mệnh: được nâng đỡ, đường đời thuận hơn.", `Mệnh ${menh.chiName} thuộc tam hợp ${thH}, bản mệnh ${c.banMenh}`, "tot"));
    else if (SINH[bmH] === thH)
      khung.push(y("Bản mệnh sinh ra hành tam hợp của cung Mệnh: phải bỏ sức, thường tự gây dựng từ tay trắng.", `Mệnh ${menh.chiName} thuộc tam hợp ${thH}, bản mệnh ${c.banMenh}`, "trung"));
  }
  const cucH = hanhOf(c.cuc);
  if (!thuan && cucH && bmH && SINH[bmH] !== cucH && cucH !== bmH && SINH[cucH] !== bmH && than.chi === di.chi)
    khung.push(y("Nghịch lý, cục không sinh mệnh lại Thân cư Thiên Di: hay đổi hướng, hợp sống hoặc làm việc xa quê; thường ổn định dần sau khoảng 30 tuổi.", `${c.cuc}, bản mệnh ${c.banMenh}, Thân cư Thiên Di`, "trung"));
  const THAN: Partial<Record<CungChuc, string>> = {
    "Thiên Di": "dựa nhiều vào môi trường bên ngoài và quan hệ xã hội, đi lại nhiều, có duyên với việc xa quê",
    "Quan Lộc": "là người của công việc, dồn sức bồi đắp công danh",
    "Tài Bạch": "đặt nặng giá trị đồng tiền, có máu kinh doanh",
    "Phúc Đức": "nặng tình với gia đình, dòng họ; hay nghĩ về nhân quả, tâm linh",
  };
  const thanTen = CUNG_CHUC[m12(c.thanChi - c.menhChi)];
  if (thanTen && THAN[thanTen]) khung.push(y(`Thân cư ${thanTen}: ${THAN[thanTen]}.`, `Thân tại ${CHI[c.thanChi]}`));
  if (menh.tuan || menh.triet)
    khung.push(y(`${menh.triet ? "Triệt" : "Tuần"} ở Mệnh tác động mạnh khoảng 30 năm đầu đời. ${menh.triet ? "Triệt nhẹ dần sau khoảng 30 tuổi" : "Tuần ảnh hưởng kéo dài hơn Triệt"}; trước mốc đó nên kiên trì, không nóng vội.`, `${menh.tuan ? "Tuần " : ""}${menh.triet ? "Triệt " : ""}ở Mệnh`, "trung"));
  if (!menh.majorStars.length) {
    if (has(menh, ...KHONG_KIEP)) khung.push(y("Mệnh vô chính diệu có Không/Kiếp độc thủ: đỡ hơn cung trống hẳn; thông minh, xoay xở nhanh.", `Mệnh trống chính tinh, có ${found(menh, KHONG_KIEP).join(", ")}`, "trung"));
    if (has(menh, "Tả Phù", "Hữu Bật") || hoaIn(menh, "Khoa").length) khung.push(y("Mệnh vô chính diệu có Tả Hữu hoặc Hóa Khoa: đi xa, ra ngoài thì có lợi.", `Mệnh trống chính tinh, có ${[...found(menh, ["Tả Phù", "Hữu Bật"]), ...hoaIn(menh, "Khoa").map((s) => `${s} hóa Khoa`)].join(", ")}`, "tot"));
  }
  out.push({ title: "Khung lá số (kinh nghiệm luận 389 TỬ VI)", items: khung });

  // A2. Cách cục
  const cach: Y[] = [];
  const mm = menhMajor(c);
  const tcMajor = new Set(tuChinh(c, c.menhChi).flatMap(major));
  const CNDL = ["Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"];
  const cndl = CNDL.filter((s) => tcMajor.has(s));
  if (cndl.length >= 3 && mm.some((s) => CNDL.includes(s))) {
    cach.push(y("Cách Cơ Nguyệt Đồng Lương: hợp công chức, cơ quan, tổ chức có nền nếp; thành công nhờ ổn định và chuyên môn.", `tam phương tứ chính Mệnh có ${cndl.join(", ")}`, "tot"));
    const hl = ["Hỏa Tinh", "Linh Tinh"].filter((s) => tc.has(s));
    if (hl.length) cach.push(y("Cơ Nguyệt Đồng Lương gặp Hỏa/Linh là phá cách: dễ hao tán, nên tránh đầu cơ.", `${hl.join(", ")} hội Mệnh`, "xau"));
  }
  const SPT = ["Thất Sát", "Phá Quân", "Tham Lang"];
  if (mm.some((s) => SPT.includes(s))) {
    const do_ = ["Lộc Tồn", "Thiên Khôi", "Thiên Việt", "Văn Xương", "Văn Khúc"].filter((s) => tc.has(s));
    cach.push(y(`Cách Sát Phá Tham: đời nhiều biến động, phải rèn luyện bản lĩnh. ${do_.length ? "Có sao đỡ nên biến động dễ thành cơ hội." : "Thiếu Lộc Tồn, Khôi Việt, Xương Khúc đỡ nên cần đặc biệt kiên trì."}`, `Mệnh có ${mm.filter((s) => SPT.includes(s)).join(", ")}${do_.length ? `; hội ${do_.join(", ")}` : ""}`, do_.length ? "trung" : "xau"));
    const bhta = ["Phục Binh", "Thiên Hình", "Tướng Quân", "Quốc Ấn"].filter((s) => tc.has(s));
    if (bhta.length >= 3) cach.push(y("Sát Phá Tham gặp bộ binh, hình, tướng, ấn: thiên về võ nghiệp, tư pháp, công việc kỷ luật; có địa vị nếu được ấn, cáo.", `hội ${bhta.join(", ")}`, "tot"));
  }
  const TPVT = ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Liêm Trinh"];
  if (mm.some((s) => TPVT.slice(0, 4).includes(s)) && TPVT.filter((s) => tcMajor.has(s)).length >= 3)
    cach.push(y(`Bộ Tử Phủ Vũ Tướng: hợp môi trường tập thể, tài chính, quản lý; ${tc.has("Lộc Tồn") ? "có Lộc Tồn giữ của" : "cần thêm Lộc Tồn mới giữ được của"}.`, `tam phương tứ chính có ${TPVT.filter((s) => tcMajor.has(s)).join(", ")}`, "tot"));
  // Nhật Nguyệt phản bối: Thái Dương ở Tuất, Hợi, Tý và Thái Âm ở Thìn, Tỵ, Ngọ (cả hai ở thế tối)
  const nhatP = c.palaces.find((p) => major(p).includes("Thái Dương"));
  const nguyetP = c.palaces.find((p) => major(p).includes("Thái Âm"));
  if (nhatP && nguyetP && [10, 11, 0].includes(nhatP.chi) && [4, 5, 6].includes(nguyetP.chi)) {
    const cuu = [nhatP, nguyetP].some((p) => p.majorStars.some((s) => (s.name === "Thái Dương" || s.name === "Thái Âm") && (s.mutagen === "Quyền" || s.mutagen === "Khoa")));
    cach.push(y(`Nhật Nguyệt phản bối: công danh phát chậm, từ từ.${cuu ? " Có Quyền/Khoa đi cùng nên vẫn khá." : ""}`, `Thái Dương ở ${nhatP.chiName}, Thái Âm ở ${nguyetP.chiName}`, cuu ? "trung" : "xau"));
  }
  for (const p of c.palaces) {
    if (has(p, "Thiên Phủ") && (p.tuan || p.triet || has(p, "Địa Không", "Thiên Không"))) {
      const w = [p.tuan ? "Tuần" : "", p.triet ? "Triệt" : "", ...found(p, ["Địa Không", "Thiên Không"])].filter(Boolean).join(", ");
      cach.push(y(`Thiên Phủ gặp ${w} ("kho rỗng"): tiền liên quan đến ${lv(p)} khó giữ; nên tích lũy chắc, tránh đầu cơ.`, `Thiên Phủ ở ${p.name}`, "xau"));
    }
    if (has(p, "Thiên Tướng") && (p.tuan || p.triet) && (p.chi === menh.chi || p.name === "Quan Lộc"))
      cach.push(y("Thiên Tướng (sao ấn) bị Tuần/Triệt: quyền hành và danh vị dễ bị giảm, khá lên sau khoảng 30 tuổi.", `Thiên Tướng ở ${p.name} gặp ${p.tuan ? "Tuần" : "Triệt"}`, "xau"));
    if (hasAll(p, "Lộc Tồn", "Thiên Mã")) cach.push(y("Lộc Tồn gặp Thiên Mã (Lộc Mã giao trì): hợp buôn bán, vận tải, tài chính; đi xa có lợi.", `Lộc Tồn và Thiên Mã ở ${p.name}`, "tot"));
    if (has(p, "Thiên Mã") && (p.truongSinh === "Tràng Sinh" || p.truongSinh === "Lâm Quan"))
      cach.push(y(`Thiên Mã gặp ${p.truongSinh}: ra ngoài hoặc đổi chỗ thì phát, kiếm tiền thuận.`, `Thiên Mã ở ${p.name} cùng ${p.truongSinh}`, "tot"));
    if (has(p, "Vũ Khúc") && has(p, "Cô Thần", "Quả Tú") && (p.chi === menh.chi || p.name === "Phu Thê"))
      cach.push(y("Vũ Khúc gặp Cô Thần/Quả Tú: tình cảm dễ cô quạnh, khó bày tỏ; lấy muộn thì bền hơn.", `Vũ Khúc và ${found(p, ["Cô Thần", "Quả Tú"]).join(", ")} ở ${p.name}`, "trung"));
  }
  const locMenh = [cung(c, "Mệnh"), cung(c, "Tài Bạch")].find((p) => tuChinh(c, p.chi).some((x) => has(x, "Lộc Tồn")) && hoiHoa(c, p.chi, "Lộc").length);
  if (locMenh) cach.push(y(`Song Lộc (Lộc Tồn và Hóa Lộc) cùng hội ${locMenh.name}: tiền vào dễ, nhưng vẫn cần kiểm soát hao tán.`, `${hoiHoa(c, locMenh.chi, "Lộc").join(", ")} hóa Lộc và Lộc Tồn hội ${locMenh.name}`, "tot"));
  if (["Lộc", "Quyền", "Khoa"].every((m) => hoiHoa(c, c.menhChi, m).length))
    cach.push(y("Tam kỳ (Lộc, Quyền, Khoa) hội Mệnh: dễ tạo cả tiền lẫn danh, giỏi quản lý công việc.", "Hóa Lộc, Quyền, Khoa đều ở tam phương tứ chính Mệnh", "tot"));
  if (cach.length) out.push({ title: "Cách cục (kinh nghiệm luận 389 TỬ VI)", items: cach });

  // A3. Phụ tinh theo cung
  const pt: Y[] = [];
  const nghe = [menh, cung(c, "Quan Lộc")].filter((p) => has(p, "Hỏa Tinh", "Linh Tinh"));
  const kem = [...["Thiên Khôi", "Thiên Việt", "Thiên Diêu", "Thiên Riêu"].filter((s) => tc.has(s)), ...hoiHoa(c, c.menhChi, "Khoa").map((s) => `${s} hóa Khoa`)];
  if (nghe.length && kem.length) pt.push(y("Hỏa/Linh ở Mệnh hoặc Quan Lộc, có Khôi Việt, Diêu hoặc Khoa đi kèm: hợp nghề công nghệ, điện, điện tử, kỹ thuật.", `Hỏa/Linh ở ${nghe.map((p) => p.name).join(", ")}; hội ${kem.join(", ")}`));
  const bhta = ["Phục Binh", "Thiên Hình", "Tướng Quân", "Quốc Ấn"].filter((s) => tc.has(s));
  if (bhta.length >= 3 && !mm.some((s) => SPT.includes(s)))
    pt.push(y("Bộ binh, hình, tướng, ấn hội Mệnh: hợp tư pháp, công an, quân đội, y tế; có tài bố trí, chỉ huy.", `hội ${bhta.join(", ")}`, "tot"));
  if (has(menh, "Tướng Quân") || has(than, "Tướng Quân")) pt.push(y(`Tướng Quân ở Mệnh/Thân: có uy, giỏi sắp xếp${tc.has("Quốc Ấn") ? "; gặp Quốc Ấn càng có địa vị" : ""}.`, "Tướng Quân ở Mệnh/Thân", "tot"));
  const nam = Number(yearChi(c));
  const vong = [
    m12(c.menhChi - nam) % 4 === 0 ? "Thái Tuế" : "",
    tuChinh(c, c.menhChi).slice(0, 3).some((p) => has(p, "Lộc Tồn")) || tuChinh(c, c.thanChi).slice(0, 3).some((p) => has(p, "Lộc Tồn")) ? "Lộc Tồn" : "",
    tuChinh(c, c.menhChi).slice(0, 3).some((p) => ["Tràng Sinh", "Đế Vượng", "Mộ"].includes(p.truongSinh)) ? "Tràng Sinh" : "",
  ].filter(Boolean);
  if (vong.length) pt.push(y(`Mệnh ôm vòng ${vong.join(", ")}${vong.length === 3 ? " (đủ Tam Luân)" : ""}: nền thuận, ít vấp${vong.length === 3 ? ", phú quý bền" : ""}.`, `tam hợp Mệnh/Thân chứa vòng ${vong.join(", ")}`, "tot"));
  const CUU = ["Ân Quang", "Thiên Quý", "Thiên Giải", "Địa Giải", "Giải Thần", "Thiên Đức", "Nguyệt Đức", "Long Đức", "Phúc Đức"];
  for (const p of [menh, cung(c, "Quan Lộc"), cung(c, "Tài Bạch"), cung(c, "Phu Thê"), cung(c, "Tật Ách")]) {
    const sat = found(p, [...SAT4, ...KHONG_KIEP]);
    const cuu = found(p, CUU);
    if (sat.length && cuu.length >= 2) pt.push(y(`Cung ${p.name} có sát tinh nhưng có sao cứu giải: phần xấu được giảm nhẹ.`, `${sat.join(", ")} gặp ${cuu.join(", ")}`, "trung"));
  }
  const tuLinh = ["Long Trì", "Phượng Các", "Bạch Hổ", "Hoa Cái"].filter((s) => tc.has(s));
  if (tuLinh.length === 4) pt.push(y("Tứ Linh (Long, Phượng, Hổ, Cái) hội Mệnh: đỡ hung, dễ có danh tiếng.", "Long Trì, Phượng Các, Bạch Hổ, Hoa Cái hội Mệnh", "tot"));
  for (const p of c.palaces) {
    const kyHere = hoaIn(p, "Kỵ");
    if (kyHere.length && has(p, "Đà La") && has(p, "Thái Tuế", "Tấu Thư"))
      pt.push(y(`Hóa Kỵ, Đà La gặp ${found(p, ["Thái Tuế", "Tấu Thư"]).join(", ")} ở ${p.name}: dễ lôi thôi giấy tờ, pháp lý; nên làm đúng thủ tục.`, `${kyHere.join(", ")} hóa Kỵ, Đà La ở ${p.name}`, "xau"));
    if (kyHere.length && (hoaIn(p, "Khoa").length || has(p, "Lộc Tồn", "Giải Thần")))
      pt.push(y(`Hóa Kỵ ở ${p.name} có ${[...hoaIn(p, "Khoa").map((s) => `${s} hóa Khoa`), ...found(p, ["Lộc Tồn", "Giải Thần"])].join(", ")} đi cùng: thị phi nhẹ bớt, việc vẫn thành.`, `${kyHere.join(", ")} hóa Kỵ ở ${p.name}`, "trung"));
    for (const s of p.minorStars) if ((s.name === "Văn Xương" || s.name === "Văn Khúc") && s.mutagen === "Kỵ")
      pt.push(y(`${s.name} hóa Kỵ: học một đằng làm một nẻo, tài ít được công nhận, dễ sai sót giấy tờ; nên kiểm kỹ văn bản.`, `${s.name} hóa Kỵ ở ${p.name}`, "xau"));
  }
  for (const ten of ["Mệnh", "Tài Bạch", "Nô Bộc", "Huynh Đệ", "Điền Trạch"] as CungChuc[]) {
    const p = cung(c, ten);
    if (hasAll(p, "Đại Hao", "Tiểu Hao") || (has(p, "Đại Hao", "Tiểu Hao") && ten === "Tài Bạch"))
      pt.push(y(`Hao tinh ở ${ten}: dễ hao tán về ${lv(p)}; cần lập kế hoạch chi tiêu.`, `${found(p, ["Đại Hao", "Tiểu Hao"]).join(", ")} ở ${ten}`, "xau"));
  }
  for (const ten of ["Phu Thê", "Tử Tức", "Phụ Mẫu"] as CungChuc[]) {
    const p = cung(c, ten);
    const cq = found(p, ["Cô Thần", "Quả Tú"]);
    if (cq.length) pt.push(y({ "Phu Thê": "Duyên muộn, vợ chồng cần nhiều thời gian hiểu nhau.", "Tử Tức": "Con muộn hoặc ít gần con.", "Phụ Mẫu": "Dễ xa cách cha mẹ, khó chăm lo hết cho người trên." }[ten as "Phu Thê"]!, `${cq.join(", ")} ở ${ten}`, "trung"));
  }
  const pt_ = cung(c, "Phu Thê");
  if (has(pt_, "Phục Binh") && hoaIn(pt_, "Kỵ").length) pt.push(y("Phục Binh gặp Hóa Kỵ ở Phu Thê: vợ chồng hay giận rồi lại hòa; nên nói rõ ràng, tránh để bụng.", "Phục Binh, Hóa Kỵ ở Phu Thê", "trung"));
  for (const ten of ["Phu Thê", "Huynh Đệ", "Điền Trạch"] as CungChuc[]) {
    const p = cung(c, ten);
    if (p.tuan || p.triet)
      pt.push(y({ "Phu Thê": "Tuần/Triệt ở Phu Thê: duyên muộn; lấy muộn (ngoài 30) thì bền hơn.", "Huynh Đệ": "Tuần/Triệt ở Huynh Đệ: anh em ít hoặc mỗi người một nơi.", "Điền Trạch": "Tuần/Triệt ở Điền Trạch: ít thừa hưởng nhà đất, phải tự gây dựng; nhà cửa ổn định muộn." }[ten as "Phu Thê"]!, `${p.tuan ? "Tuần" : "Triệt"} ở ${ten}`, "trung"));
  }
  for (const ten of ["Huynh Đệ", "Tử Tức"] as CungChuc[]) {
    const p = cung(c, ten);
    if (!p.majorStars.length && has(p, ...KHONG_KIEP)) pt.push(y(ten === "Huynh Đệ" ? "Không/Kiếp đơn thủ Huynh Đệ: anh em ít, mỗi người một nơi." : "Không/Kiếp đơn thủ Tử Tức: con muộn, nuôi con vất vả hơn, con dễ ở xa.", `${found(p, KHONG_KIEP).join(", ")} ở ${ten} (vô chính diệu)`, "xau"));
  }
  const tu = cung(c, "Tử Tức");
  const pm = cung(c, "Phụ Mẫu");
  if (hasAll(tu, "Kình Dương", "Đà La") || hasAll(pm, "Kình Dương", "Đà La") || (has(tu, "Kình Dương", "Đà La") && has(pm, "Kình Dương", "Đà La")))
    pt.push(y("Kình/Đà ở Tử Tức hoặc Phụ Mẫu: cha mẹ con cái dễ bất đồng, hay tranh luận; nên mềm mỏng.", "Kình Dương, Đà La ở Tử Tức/Phụ Mẫu", "trung"));
  const no = cung(c, "Nô Bộc");
  const noX = [...found(no, ["Phục Binh", "Cự Môn"]), ...hoaIn(no, "Kỵ").map((s) => `${s} hóa Kỵ`), ...(hasAll(no, "Đại Hao", "Tiểu Hao") ? ["song Hao"] : [])];
  if (noX.length >= 1 && (hoaIn(no, "Kỵ").length || noX.length >= 2)) pt.push(y("Nô Bộc có sao thị phi, hao tán: cẩn thận khi hùn vốn, cho vay bạn bè.", `Nô Bộc có ${noX.join(", ")}`, "xau"));
  if (pt.length) out.push({ title: "Phụ tinh theo cung (kinh nghiệm luận 389 TỬ VI)", items: pt });

  // A4. Gia đạo, sức khỏe, tâm linh — theo kinh nghiệm của thầy, chỉ để tham khảo
  const gd: Y[] = [];
  const tat = cung(c, "Tật Ách");
  const nhatNguyetXau = c.palaces.filter((p) => (p.chi === menh.chi || p.chi === tat.chi) && p.majorStars.some((s) => s.name === "Thái Dương" || s.name === "Thái Âm") && (hoaIn(p, "Kỵ").length || has(p, "Kình Dương", "Đà La", ...KHONG_KIEP)));
  if (nhatNguyetXau.length) gd.push(y("Thái Dương/Thái Âm gặp Kỵ hoặc sát tinh ở Mệnh/Tật Ách: nên giữ gìn mắt, khám mắt định kỳ.", `${nhatNguyetXau.map((p) => p.name).join(", ")}`, "trung"));
  const hanhTat = tat.majorStars.map((s) => s.name);
  const TAT_HANH: Record<string, string> = { "Vũ Khúc": "phổi, hô hấp", "Thất Sát": "phổi, hô hấp", "Thái Dương": "mắt, đầu, huyết áp", "Liêm Trinh": "tim mạch, khí huyết", "Thiên Phủ": "dạ dày, tiêu hóa", "Tử Vi": "dạ dày, tiêu hóa", "Thái Âm": "mắt, bụng dưới", "Cự Môn": "miệng, răng, tiêu hóa" };
  const bp = [...new Set(hanhTat.map((s) => TAT_HANH[s]).filter(Boolean))];
  if (bp.length) gd.push(y(`Cung Tật Ách gợi ý nên chú ý: ${bp.join("; ")}.`, `Tật Ách có ${hanhTat.join(", ")}`));
  if (tat.tuan || tat.triet) gd.push(y("Tuần/Triệt ở Tật Ách: bệnh thường nhẹ bớt, dễ qua; tác dụng giảm dần sau khoảng 30 tuổi nên vẫn cần giữ sức khỏe.", `${tat.tuan ? "Tuần" : "Triệt"} ở Tật Ách`, "tot"));
  const cuuTat = found(tat, ["Thiên Giải", "Địa Giải", "Giải Thần", "Thiên Y", "Thiên Đức", "Nguyệt Đức", "Thiên Quan", "Thiên Phúc"]);
  if (cuuTat.length >= 2) gd.push(y("Tật Ách có sao cứu giải: ốm đau dễ gặp thầy gặp thuốc.", `Tật Ách có ${cuuTat.join(", ")}`, "tot"));
  const dao = [menh, tat].filter((p) => has(p, "Thiên Hình", "Bạch Hổ") && has(p, "Kình Dương", "Đà La", "Thất Sát"));
  if (dao.length) gd.push(y("Thiên Hình/Bạch Hổ gặp Kình, Đà hoặc Thất Sát: dễ có lúc phải can thiệp dao kéo (phẫu thuật nhỏ, vết thương); cẩn thận khi dùng vật sắc, đi lại.", `ở ${dao.map((p) => p.name).join(", ")}`, "trung"));
  const kkHt = [menh, tat].filter((p) => has(p, ...KHONG_KIEP));
  if (kkHt.length) gd.push(y("Không/Kiếp ở Mệnh hoặc Tật Ách: dễ sa vào thói quen khó bỏ; nên giữ nếp sinh hoạt, chú ý hô hấp và da.", `${kkHt.map((p) => `${found(p, KHONG_KIEP).join(", ")} ở ${p.name}`).join("; ")}`, "trung"));
  const nnPm = pm.majorStars.some((s) => s.name === "Thái Dương" || s.name === "Thái Âm") && (pm.tuan || pm.triet);
  if (nnPm) gd.push(y(`Nhật/Nguyệt ở Phụ Mẫu gặp Tuần/Triệt: theo thầy, dễ xa cách cha mẹ hoặc một bên cha mẹ kém thọ (sinh ban ngày ứng cha, ban đêm ứng mẹ). Nên quan tâm sức khỏe cha mẹ sớm.`, `${pm.majorStars.map((s) => s.name).join(", ")} ở Phụ Mẫu gặp ${pm.tuan ? "Tuần" : "Triệt"}`, "trung"));
  const phuc = cung(c, "Phúc Đức");
  if (hasAll(phuc, "Tang Môn", "Điếu Khách")) gd.push(y("Tang Môn, Điếu Khách ở Phúc Đức: theo thầy, dòng họ dễ có tang chế nối nhau; nên quan tâm người lớn tuổi trong họ.", "Tang Môn, Điếu Khách ở Phúc Đức", "trung"));
  const phucXau = [...(phuc.tuan ? ["Tuần"] : []), ...(phuc.triet ? ["Triệt"] : []), ...found(phuc, [...KHONG_KIEP, "Hỏa Tinh"])];
  if (phucXau.length >= 2) gd.push(y("Phúc Đức gặp nhiều sao giảm phúc: thầy khuyên tích đức, làm việc thiện, giữ nếp thờ cúng tổ tiên.", `Phúc Đức có ${phucXau.join(", ")}`, "trung"));
  if ((hasAll(menh, "Ân Quang", "Thiên Quý") || hasAll(pm, "Ân Quang", "Thiên Quý"))) gd.push(y("Ân Quang, Thiên Quý ở Mệnh/Phụ Mẫu: nhân hậu, dễ được quý nhân, có thiên hướng tâm linh, hướng thiện.", "Ân Quang, Thiên Quý", "tot"));
  if (has(menh, "Thiên Tài") && has(menh, "Thái Dương")) gd.push(y("Thiên Tài gặp Thái Dương ở Mệnh: theo thầy, dễ coi nhẹ chuyện tín ngưỡng.", "Thiên Tài, Thái Dương ở Mệnh"));
  if (gd.length) out.push({ title: "Gia đạo, sức khỏe, tâm linh (kinh nghiệm của thầy — tham khảo)", items: gd });

  // A5. Vận hạn
  if (c.vanHan) {
    const v = c.vanHan;
    const vh: Y[] = [];
    const luu = new Map<number, string[]>();
    for (const s of v.luuStars) luu.set(s.chi, [...(luu.get(s.chi) ?? []), s.name]);
    const han = [v.daiHan ? { p: at(c, v.daiHan.chi), lb: `Đại hạn ${v.daiHan.from}–${v.daiHan.to}` } : null, { p: at(c, v.tieuHan.chi), lb: `Tiểu hạn ${v.year}` }].filter(Boolean) as { p: TuViPalace; lb: string }[];
    for (const { p, lb } of han) {
      const ns = [...names(p), ...(luu.get(p.chi) ?? [])];
      const k = [...KHONG_KIEP.filter((s) => ns.includes(s)), ...(p.tuan ? ["Tuần"] : []), ...(p.triet ? ["Triệt"] : [])];
      if (k.length >= 2 || (k.length && ns.includes("Thiên Phủ")))
        vh.push(y(`${lb.split(" ")[0]} hạn gặp Không, Kiếp, Tuần, Triệt: tránh đầu cơ, cho vay, đầu tư lớn; giữ tiền mặt.`, `${lb} ở ${p.name} có ${k.join(", ")}`, "xau"));
      if (ns.includes("Đại Hao") && ns.includes("Tiểu Hao")) vh.push(y("Hạn có song Hao: không nên đầu tư lớn, dễ hao tài.", `${lb} ở ${p.name}`, "xau"));
      if (ns.includes("Bạch Hổ") || ns.includes("Lưu Bạch Hổ")) {
        if (ns.some((s) => s === "Kình Dương" || s === "Lưu Kình Dương") && ns.includes("Thiên Hình"))
          vh.push(y("Hạn có Bạch Hổ, Kình Dương, Thiên Hình: cẩn thận dao kéo, va chạm, đi lại.", `${lb} ở ${p.name}`, "xau"));
      }
      if (ns.includes("Lưu Hà") && (hoaIn(p, "Kỵ").length || ns.some((s) => s === "Kình Dương" || s === "Lưu Kình Dương" || s === "Địa Kiếp")))
        vh.push(y("Hạn có Lưu Hà gặp Kỵ/Kình/Kiếp: năm nên cẩn thận sông nước, bơi lội, nước sôi.", `${lb} ở ${p.name}`, "xau"));
      if (ns.includes("Thiên Mã") || ns.includes("Lưu Thiên Mã")) vh.push(y(`${lb.split(" ")[0]} hạn có Thiên Mã: hay di chuyển, dễ đổi chỗ ở hoặc đổi việc.`, `${lb} ở ${p.name}`));
      if (v.daiHan && p.chi === v.daiHan.chi && found(p, ["Tang Môn", "Điếu Khách", "Cô Thần", "Bạch Hổ"]).length >= 3)
        vh.push(y("Đại hạn có nhiều sao tang tóc (Tang, Điếu, Cô, Hổ): theo thầy, nên quan tâm sức khỏe người thân lớn tuổi trong giai đoạn này.", `${lb} ở ${p.name}`, "trung"));
    }
    const LUU_Y: Record<string, string> = { "Lưu Thái Tuế": "là tâm điểm của năm", "Lưu Lộc Tồn": "có lộc", "Lưu Kình Dương": "dễ tranh chấp, va chạm", "Lưu Đà La": "dễ dây dưa, chậm", "Lưu Tang Môn": "dễ buồn phiền, lo nghĩ", "Lưu Bạch Hổ": "dễ xáo động" };
    for (const [chi, ls] of luu) {
      const p = at(c, chi);
      const m = ls.filter((s) => LUU_Y[s]);
      const tang = m.some((s) => s === "Lưu Tang Môn" || s === "Lưu Bạch Hổ");
      if (m.length && (p.chi === menh.chi || ["Tài Bạch", "Quan Lộc"].includes(p.name) || (tang && ["Phụ Mẫu", "Phu Thê"].includes(p.name))))
        vh.push(y(`Năm nay ${lv(p)}: ${m.map((s) => `${s.replace("Lưu ", "lưu ")} ${LUU_Y[s]}`).join("; ")}.${p.name === "Phụ Mẫu" && tang ? " Nên quan tâm sức khỏe cha mẹ." : ""}`, `${m.join(", ")} vào ${p.name}`, m.includes("Lưu Lộc Tồn") && m.length === 1 ? "tot" : "trung"));
    }
    if (vh.length) out.push({ title: `Vận hạn năm ${v.year} (kinh nghiệm luận 389 TỬ VI)`, items: vh });
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Bắc phái: kinh nghiệm kênh Đào Thanh Tín                            */
/* ------------------------------------------------------------------ */

const KY_Y: Record<string, string> = {
  "Cự Môn": "lời nói dễ bị hiểu lầm, thị phi",
  "Thái Dương": "vất vả bên ngoài, dễ bị soi xét",
  "Thiên Đồng": "hao tiền, hao tinh thần",
  "Văn Xương": "rắc rối giấy tờ, hợp đồng",
  "Văn Khúc": "rắc rối giấy tờ, lời nói",
  "Thái Âm": "việc nhà, nhà cửa nặng nề",
  "Liêm Trinh": "dễ vướng thủ tục, phạt hành chính, giao thông; làm đúng luật thì nhẹ",
  "Thiên Cơ": "nghĩ nhiều, căng đầu óc",
  "Vũ Khúc": "tiền bạc xoay xở vất vả",
  "Tham Lang": "ham muốn vượt sức, dễ sa đà",
};
const LOC_Y: Record<string, string> = {
  "Thiên Cơ": "nhiều ý tưởng, được đồng liêu giúp",
  "Vũ Khúc": "tiền thuận nhờ kỷ luật, chuyên môn",
  "Thái Âm": "tiền bạc, nhà cửa khởi sắc",
};
const QUYEN_Y: Record<string, string> = { "Thiên Cơ": "được giao quyền, nên hòa nhã, tránh tranh quyền" };
const KHOA_Y: Record<string, string> = { "Văn Xương": "giấy tờ, thi cử thuận", "Tử Vi": "lĩnh vực đó thuận, có thể diện" };

/** Nghĩa mở rộng của cung theo Bắc phái (kênh Đào Thanh Tín) */
export const CUNG_Y_BAC: Partial<Record<CungChuc, string>> = {
  "Tật Ách": "sức khỏe, và cả nơi làm việc",
  "Phụ Mẫu": "cha mẹ, cấp trên, cơ quan, giấy tờ",
  "Tử Tức": "con cái, cấp dưới, người nhỏ tuổi",
  "Nô Bộc": "bạn bè, đồng nghiệp, khách hàng, xã hội",
  "Phúc Đức": "tư tưởng, tinh thần, cách hưởng thụ",
};

const tenCung = (c: TuViChart, chi: number) => CUNG_CHUC[m12(chi - c.menhChi)] as CungChuc;
const yBac = (c: TuViChart, chi: number) => {
  const t = tenCung(c, chi);
  return CUNG_Y_BAC[t] ?? CUNG_Y[t] ?? t;
};

export function luanVideoBac(c: TuViChart): Phan[] {
  const out: Phan[] = [];
  const menh = cung(c, "Mệnh");
  const than = at(c, c.thanChi);

  // B1–B4. Phi hóa
  const phi: Y[] = [];
  const phat = (p: TuViPalace) => p.phiHoa ?? [];
  for (const h of phat(menh)) {
    if (h.toChi === null) continue;
    if (h.self) continue;
    if (h.mutagen === "Lộc") phi.push(y(`Mệnh phi Lộc vào ${tenCung(c, h.toChi)}: bạn chủ động cho đi, đối đãi tốt với ${yBac(c, h.toChi)}.`, `can ${menh.canName} của Mệnh hóa Lộc ${h.star}`, "tot"));
    if (h.mutagen === "Kỵ") phi.push(y(`Mệnh phi Kỵ vào ${tenCung(c, h.toChi)}: hay bận lòng, vướng vào ${yBac(c, h.toChi)}; đồng thời xung ${tenCung(c, h.toChi + 6)}.`, `can ${menh.canName} của Mệnh hóa Kỵ ${h.star}`, "xau"));
  }
  for (const ten of ["Tài Bạch", "Quan Lộc", "Phu Thê", "Điền Trạch", "Nô Bộc", "Phụ Mẫu"] as CungChuc[]) {
    const p = cung(c, ten);
    for (const h of phat(p)) {
      if (h.toChi === menh.chi && h.mutagen === "Lộc") phi.push(y(`${ten} phi Lộc vào Mệnh: ${yBac(c, p.chi)} mang lợi, mang niềm vui cho bản thân.`, `can ${p.canName} của ${ten} hóa Lộc ${h.star}`, "tot"));
      if (h.toChi === menh.chi && h.mutagen === "Kỵ") phi.push(y(`${ten} phi Kỵ vào Mệnh: ${yBac(c, p.chi)} hay khiến bản thân bận lòng, áp lực; xung sang Thiên Di nên ra ngoài cũng dễ vướng.`, `can ${p.canName} của ${ten} hóa Kỵ ${h.star}`, "xau"));
    }
  }
  // Tự hóa
  for (const p of c.palaces)
    for (const h of phat(p))
      if (h.self && (h.mutagen === "Lộc" || h.mutagen === "Kỵ") && ["Mệnh", "Tài Bạch", "Quan Lộc", "Phu Thê", "Điền Trạch"].includes(tenCung(c, p.chi)))
        phi.push(
          h.mutagen === "Lộc"
            ? y(`${tenCung(c, p.chi)} tự hóa Lộc: tự có lợi ở ${yBac(c, p.chi)} nhưng cũng dễ tiêu đi.`, `can ${p.canName} hóa Lộc ${h.star} ngay trong cung`, "trung")
            : y(`${tenCung(c, p.chi)} tự hóa Kỵ: tự sinh vướng ở ${yBac(c, p.chi)}, tiền vào nhiều ra nhiều; nên giữ kỷ luật.`, `can ${p.canName} hóa Kỵ ${h.star} ngay trong cung`, "xau"),
        );
  // Kỵ năm sinh xung cung đối
  for (const p of c.palaces)
    for (const s of hoaIn(p, "Kỵ"))
      phi.push(y(`Hóa Kỵ năm sinh (${s}) ở ${tenCung(c, p.chi)} xung sang ${tenCung(c, p.chi + 6)}: ngoài ${yBac(c, p.chi)}, cần để ý cả ${yBac(c, p.chi + 6)}.${KY_Y[s] ? ` ${s} Kỵ: ${KY_Y[s]}.` : ""}`, `${s} hóa Kỵ ở ${p.name}`, "xau"));
  if (phi.length) out.push({ title: "Phi hóa (kinh nghiệm luận Đào Thanh Tín)", items: phi });

  // B10–B20. Sao và cung
  const sc: Y[] = [];
  for (const s of [...menh.majorStars, ...menh.minorStars]) {
    if (s.mutagen === "Quyền") sc.push(y("Hóa Quyền ở Mệnh: hợp làm chủ hoặc giữ quyền quyết định; làm nhân viên đơn thuần dễ bức bối, cần tránh cố chấp.", `${s.name} hóa Quyền ở Mệnh`, "tot"));
    if (s.mutagen === "Lộc" && LOC_Y[s.name]) sc.push(y(`${s.name} hóa Lộc ở Mệnh: ${LOC_Y[s.name]}.`, `${s.name} hóa Lộc ở Mệnh`, "tot"));
  }
  for (const p of c.palaces)
    for (const s of [...p.majorStars, ...p.minorStars]) {
      if (s.mutagen === "Khoa") sc.push(y(`Hóa Khoa ở ${tenCung(c, p.chi)}: quý nhân, sự tử tế đến từ ${yBac(c, p.chi)}.${KHOA_Y[s.name] ? ` ${s.name} Khoa: ${KHOA_Y[s.name]}.` : ""}`, `${s.name} hóa Khoa ở ${p.name}`, "tot"));
      if (s.mutagen === "Quyền" && QUYEN_Y[s.name]) sc.push(y(`${s.name} hóa Quyền: ${QUYEN_Y[s.name]}.`, `${s.name} hóa Quyền ở ${p.name}`));
    }
  for (const p of menh.chi === than.chi ? [menh] : [menh, than]) {
    const kk = found(p, KHONG_KIEP);
    if (kk.length && !has(p, ...SAT4))
      sc.push(y("Không/Kiếp ở Mệnh/Thân nhưng không gặp Kình, Đà, Hỏa, Linh: Bắc phái không luận xấu; chủ biến đổi, sớm tự lập, tiêu tiền thoáng, thích tìm hiểu huyền học.", `${kk.join(", ")} ở ${p.chi === menh.chi ? "Mệnh" : "Thân"}`, "trung"));
  }
  for (const ten of ["Huynh Đệ", "Phu Thê", "Tử Tức", "Phụ Mẫu"] as CungChuc[]) {
    const p = cung(c, ten);
    const s4 = found(p, SAT4);
    if (s4.length) sc.push(y(`Sát tinh ở ${ten}: duyên với ${yBac(c, p.chi)} nhạt hoặc có khoảng cách.${ten === "Phu Thê" ? " Vợ chồng lệch giờ giấc hoặc khác ngành lại tốt." : ""}`, `${s4.join(", ")} ở ${ten}`, "trung"));
  }
  if (has(menh, "Lộc Tồn")) sc.push(y("Lộc Tồn ở Mệnh nên Kình Dương, Đà La kẹp ở Phụ Mẫu và Huynh Đệ: ở gần nhà dễ bị kìm kẹp; nên ra ngoài lập nghiệp, tiền bạc với anh em phải rạch ròi.", "Lộc Tồn ở Mệnh", "trung"));
  const di = cung(c, "Thiên Di");
  if (has(di, "Lộc Tồn") || (has(di, "Thiên Mã") && (has(di, "Thái Dương", "Tả Phù"))))
    sc.push(y("Thiên Di có Lộc Tồn hoặc Thiên Mã đi cùng sao tốt: ra ngoài, lập nghiệp xa thì thuận hơn ở quê.", `Thiên Di có ${found(di, ["Lộc Tồn", "Thiên Mã", "Thái Dương", "Tả Phù"]).join(", ")}`, "tot"));
  const nam = yearChi(c);
  if (nam >= 0) {
    const t = tenCung(c, nam);
    sc.push(y(`Chi năm sinh rơi vào cung ${t} ("cung tuổi"): người thiên về chủ đề ${yBac(c, nam)}.`, `${CHI[nam]} là cung ${t}`));
  }
  const thanTen = tenCung(c, c.thanChi);
  if (thanTen === "Thiên Di") sc.push(y("Thân cư Thiên Di: dễ sống, lập nghiệp xa quê; giỏi giao tiếp bên ngoài.", "Thân tại Thiên Di"));
  if (thanTen === "Phúc Đức") sc.push(y("Thân cư Phúc Đức: chú trọng nội tâm, tư tưởng; khó hài lòng, hay muốn đổi mới.", "Thân tại Phúc Đức"));
  const tat = cung(c, "Tật Ách");
  if (has(tat, "Phá Quân")) sc.push(y("Phá Quân ở Tật Ách: cơ thể hay có thay đổi (cân nặng, nếp sinh hoạt); nên tránh thức khuya, ăn đồ lạnh.", "Phá Quân ở Tật Ách", "trung"));
  sc.push(y("Theo Bắc phái, Tật Ách còn chỉ nơi làm việc; Phụ Mẫu là cấp trên, cơ quan; Tử Tức là cấp dưới; Nô Bộc là khách hàng, đồng nghiệp.", "nghĩa mở rộng của cung"));
  out.push({ title: "Sao và cung (kinh nghiệm luận Đào Thanh Tín)", items: sc });

  // B5–B9. Vận hạn
  if (c.vanHan) {
    const v = c.vanHan;
    const vh: Y[] = [];
    const xoay = (goc: number, ten: CungChuc) => at(c, goc + CUNG_CHUC.indexOf(ten));
    if (v.daiHan) {
      const dh = at(c, v.daiHan.chi);
      const ds = (["Tài Bạch", "Quan Lộc", "Phu Thê", "Điền Trạch"] as CungChuc[]).map((t) => `${t} vận ở ${tenCung(c, xoay(dh.chi, t).chi)} gốc`);
      vh.push(y(`Đại vận ${v.daiHan.from}–${v.daiHan.to}: Mệnh vận đóng ở ${tenCung(c, dh.chi)} gốc, 10 năm xoay quanh ${yBac(c, dh.chi)}. Các cung vận: ${ds.join("; ")}.`, `cung đại vận ${dh.chiName}`));
      for (const h of phat(dh)) {
        if (h.toChi === null) continue;
        if (h.mutagen === "Lộc") vh.push(y(`Lộc của đại vận vào ${tenCung(c, h.toChi)} gốc: 10 năm này ${yBac(c, h.toChi)} thuận lợi.`, `can ${dh.canName} của cung vận hóa Lộc ${h.star}`, "tot"));
        if (h.mutagen === "Kỵ") vh.push(y(`Kỵ của đại vận vào ${tenCung(c, h.toChi)} gốc, xung ${tenCung(c, h.toChi + 6)}: 10 năm này cần thận trọng với ${yBac(c, h.toChi)}.${KY_Y[h.star] ? ` ${h.star} Kỵ: ${KY_Y[h.star]}.` : ""}`, `can ${dh.canName} của cung vận hóa Kỵ ${h.star}`, "xau"));
      }
    }
    const lm = v.luuThaiTue.chi;
    const ls = (["Tài Bạch", "Quan Lộc", "Phu Thê"] as CungChuc[]).map((t) => `lưu ${t} ở ${tenCung(c, xoay(lm, t).chi)} gốc`);
    vh.push(y(`Lưu niên ${v.yearName}: Mệnh lưu ở ${tenCung(c, lm)} gốc; ${ls.join("; ")}.`, `cung ${CHI[lm]} mang chi năm`));
    const HOA_Y: Record<string, [string, Y["tone"]]> = {
      Lộc: ["thuận lợi, dễ có lợi", "tot"],
      Quyền: ["phải chủ động, có cạnh tranh; muốn thành quả cần nỗ lực", "trung"],
      Khoa: ["có người đỡ, được ghi nhận", "tot"],
      Kỵ: ["vướng mắc, hao tâm", "xau"],
    };
    for (const h of v.luuTuHoa) {
      if (h.chi === null) continue;
      const t = tenCung(c, h.chi);
      const [txt, tone] = HOA_Y[h.mutagen]!;
      const xung = h.mutagen === "Kỵ" ? ` Xung sang ${tenCung(c, h.chi + 6)}.` : "";
      const ap = h.mutagen === "Kỵ" && (t === "Mệnh" || t === "Quan Lộc") ? " Năm công việc dễ bí bách: nên khiêm tốn, làm chậm mà chắc." : "";
      const sao = h.mutagen === "Kỵ" && KY_Y[h.star] ? ` ${h.star} Kỵ: ${KY_Y[h.star]}.` : h.mutagen === "Lộc" && LOC_Y[h.star] ? ` ${LOC_Y[h.star]}.` : "";
      vh.push(y(`Lưu ${h.mutagen} vào ${t}: ${yBac(c, h.chi)} ${txt}.${xung}${ap}${sao}`, `lưu ${h.star} hóa ${h.mutagen}`, tone));
    }
    if (nam >= 0) {
      if (lm === nam) vh.push(y("Năm trùng chi tuổi (phạm Thái Tuế): ưu tiên ổn định; tránh đầu tư bốc đồng, cho vay, bảo lãnh, quyết định lúc nóng giận.", `năm ${v.yearName}, tuổi ${CHI[nam]}`, "xau"));
      else if (m12(lm - nam) === 6) vh.push(y("Năm xung tuổi: tâm lý dễ phản kháng; không nên đầu tư mạo hiểm, ký giấy tờ phải đọc kỹ.", `năm ${v.yearName} xung tuổi ${CHI[nam]}`, "xau"));
    }
    out.push({ title: `Vận hạn năm ${v.year} (kinh nghiệm luận Đào Thanh Tín)`, items: vh });
  }
  return out;
}
