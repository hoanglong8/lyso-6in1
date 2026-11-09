/**
 * Luận bổ sung đợt 2 cho phái Việt Nam – Thiên Lương, rút từ phụ đề video (11/2026):
 * - "Tử Vi Học Quán" (60 video, khóa học Nam phái kiểu Việt) — ký hiệu HQ.
 * - "Tử Vi Nam Phái Lê Quang Lăng" (8 video) — ký hiệu LQL.
 * Viết lại bằng lời riêng, không trích nguyên văn, không có thông tin người trong ví dụ.
 * Danh sách đã duyệt: docs/tuvi-quy-tac-video.md (mục đợt 2).
 */
import { CHI } from "@lyso/calendar-vn";
import type { TuViChart, TuViPalace } from "@lyso/engine-tuvi";
import type { Phan, Y } from "./types";
import { CUNG_Y } from "./tuvi-data";
import { CUNG_CHUC } from "./tuvi-video";

export const NGUON_VIDEO_HQ = 'Kinh nghiệm luận của kênh YouTube "Tử Vi Học Quán" (rút từ 60 video, viết lại; chưa đối chiếu sách)';
export const NGUON_VIDEO_LQL = 'Kinh nghiệm luận của kênh YouTube "Tử Vi Nam Phái Lê Quang Lăng" (rút từ 46 video, viết lại; chưa đối chiếu sách)';

type CungChuc = (typeof CUNG_CHUC)[number];
const m12 = (x: number) => ((x % 12) + 12) % 12;
const at = (c: TuViChart, chi: number) => c.palaces.find((p) => p.chi === m12(chi)) as TuViPalace;
const cung = (c: TuViChart, ten: CungChuc) => at(c, c.menhChi + CUNG_CHUC.indexOf(ten));
const tenCung = (c: TuViChart, chi: number) => CUNG_CHUC[m12(chi - c.menhChi)] as CungChuc;
const names = (p: TuViPalace) => [...p.majorStars, ...p.minorStars, ...p.adjectiveStars].map((s) => s.name);
const has = (p: TuViPalace, ...ns: string[]) => ns.some((n) => names(p).includes(n));
const found = (p: TuViPalace, ns: string[]) => ns.filter((n) => names(p).includes(n));
const major = (p: TuViPalace) => p.majorStars.map((s) => s.name);
const hoaIn = (p: TuViPalace, m: string) => [...p.majorStars, ...p.minorStars].filter((s) => s.mutagen === m).map((s) => s.name);
const tuChinh = (c: TuViChart, chi: number) => [chi, chi + 4, chi + 8, chi + 6].map((x) => at(c, x));
const hoiNames = (c: TuViChart, chi: number) => new Set(tuChinh(c, chi).flatMap(names));
const lv = (p: TuViPalace) => CUNG_Y[p.name] ?? p.name;
const HQ = " · Học Quán";
const LQL = " · Lê Quang Lăng";
const y = (text: string, canCu: string, tone?: Y["tone"]): Y => ({ text, canCu, tone });

const SAT4 = ["Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh"];
const KHONG_KIEP = ["Địa Không", "Địa Kiếp"];
const SAT6 = [...SAT4, ...KHONG_KIEP];
const CAT = ["Tả Phù", "Hữu Bật", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Lộc Tồn"];
const SANG = new Set(["Miếu", "Vượng", "Đắc"]);
const TOI = new Set(["Hãm", "Bất"]);
const LUC_THAN: CungChuc[] = ["Phụ Mẫu", "Huynh Đệ", "Phu Thê", "Tử Tức"];
const SINH: Record<string, string> = { Mộc: "Hỏa", Hỏa: "Thổ", Thổ: "Kim", Kim: "Thủy", Thủy: "Mộc" };
const KHAC: Record<string, string> = { Mộc: "Thổ", Thổ: "Thủy", Thủy: "Hỏa", Hỏa: "Kim", Kim: "Mộc" };
const hanhTamHop = (chi: number) => ({ 0: "Thủy", 1: "Kim", 2: "Hỏa", 3: "Mộc" })[(chi % 4) as 0 | 1 | 2 | 3];

/** Điểm cát hung đơn giản của một cung (dùng để so đại hạn – tiểu hạn) */
function diem(p: TuViPalace, them: string[] = []) {
  const ns = [...names(p), ...them];
  return (
    ns.filter((n) => CAT.includes(n)).length -
    ns.filter((n) => SAT6.includes(n)).length +
    p.majorStars.filter((s) => s.brightness && SANG.has(s.brightness)).length -
    p.majorStars.filter((s) => s.brightness && TOI.has(s.brightness)).length +
    hoaIn(p, "Lộc").length - hoaIn(p, "Kỵ").length
  );
}

/* ---------------- Chính tinh, cách cục ---------------- */

function cachCuc(c: TuViChart): Y[] {
  const out: Y[] = [];
  const menh = cung(c, "Mệnh");
  const tc = hoiNames(c, c.menhChi);
  const mm = major(menh).length ? major(menh) : major(cung(c, "Thiên Di"));

  for (const ten of ["Mệnh", "Tài Bạch", "Điền Trạch"] as CungChuc[]) {
    const p = cung(c, ten);
    if (has(p, "Thiên Phủ") && found(p, SAT4).length >= 2)
      out.push(y(`Thiên Phủ ở ${ten} gặp nhiều sát tinh ("kho lộ"): có thể giàu nhanh nhưng khó bền; nên giữ của chắc.`, `Thiên Phủ cùng ${found(p, SAT4).join(", ")}${HQ}`, "trung"));
  }
  if (mm.includes("Tham Lang")) {
    const hl = ["Hỏa Tinh", "Linh Tinh"].filter((s) => tc.has(s));
    if (hl.length)
      out.push(y(`Tham Lang gặp ${hl.join(", ")}: dễ phát nhanh (${hl.includes("Hỏa Tinh") ? "Hỏa nghiêng về giàu" : ""}${hl.length === 2 ? ", " : ""}${hl.includes("Linh Tinh") ? "Linh nghiêng về danh" : ""}); cái được đến nhanh nên cần giữ.`, `Tham Lang ở Mệnh, hội ${hl.join(", ")}${HQ}${LQL}`, "tot"));
    const dao = ["Đào Hoa", "Hồng Loan", "Thiên Riêu", "Hàm Trì", "Thiên Diêu"].filter((s) => tc.has(s));
    const thamP = c.palaces.find((p) => major(p).includes("Tham Lang"))!;
    if (dao.length)
      out.push(y([0, 3, 6, 9].includes(thamP.chi) ? "Tham Lang ở Tý, Ngọ, Mão, Dậu lại gặp sao đào hoa: tính đa tình tăng, cần giữ chừng mực." : "Tham Lang miếu vượng gặp sao đào hoa: tính đa tình được tiết chế.", `Tham Lang ở ${thamP.chiName}, hội ${dao.join(", ")}${HQ}`, "trung"));
    if (tc.has("Lộc Tồn")) out.push(y("Tham Lang gặp Lộc Tồn: bình ổn, đoan chính; hợp làm việc ổn định, công chức.", `Tham Lang hội Lộc Tồn${HQ}`, "tot"));
  }
  for (const p of [menh, cung(c, "Quan Lộc")]) {
    const mj = major(p);
    if (mj.includes("Liêm Trinh") && ((mj.includes("Tham Lang") && [5, 11].includes(p.chi)) || (mj.includes("Phá Quân") && [3, 9].includes(p.chi)))) {
      const xau = [...hoaIn(p, "Kỵ").map((s) => `${s} hóa Kỵ`), ...found(p, ["Kình Dương", "Hỏa Tinh", "Linh Tinh"])];
      const lqlKy = mj.includes("Tham Lang") && hoaIn(p, "Kỵ").length > 0;
      out.push(y(`Liêm Trinh cùng ${mj.includes("Tham Lang") ? "Tham Lang" : "Phá Quân"} ở ${p.chiName}: thế khó, cần sống và làm việc đúng luật.${xau.length ? " Có thêm sao xấu nên càng phải tránh rủi ro pháp lý." : ""}${lqlKy ? " Riêng thầy Lê Quang Lăng coi Liêm Tham gặp Hóa Kỵ ở Tỵ/Hợi là \"phản vi kỳ cách\", thành công sau gian nan." : ""}`, `ở ${p.name}${xau.length ? `, gặp ${xau.join(", ")}` : ""}${HQ}${lqlKy ? LQL : ""}`, lqlKy ? "trung" : "xau"));
    }
    if (mj.includes("Liêm Trinh") && mj.includes("Thiên Phủ") && [4, 10].includes(p.chi))
      out.push(y("Liêm Phủ ở Thìn/Tuất: như kho tiền có người giữ; hợp tài chính, kiểm toán, quản lý tài sản.", `ở ${p.name}${HQ}`, "tot"));
  }
  if (has(menh, "Kình Dương") && menh.chi === 6)
    out.push(y(`Kình Dương ở Mệnh tại Ngọ ("mã đầu đới kiếm")${has(menh, "Thất Sát") ? ", lại cùng Thất Sát" : ""}: có bản lĩnh nhưng nhiều sóng gió; cần thận trọng, tránh mạo hiểm.`, `Mệnh ở Ngọ${HQ} · Phong Thủy Tâm Linh`, "xau"));
  else if (mm.includes("Thất Sát") && tc.has("Kình Dương") && (tc.has("Hỏa Tinh") || tc.has("Linh Tinh")))
    out.push(y("Thất Sát gặp Kình và Hỏa/Linh: dễ bạo phát bạo tàn; nên giữ lại một phần thành quả.", `Thất Sát hội Kình, Hỏa/Linh${HQ}`, "xau"));
  if (has(menh, "Thiên Tướng")) {
    const a = at(c, menh.chi - 1), b = at(c, menh.chi + 1);
    const kyAt = (p: TuViPalace) => hoaIn(p, "Kỵ").length > 0;
    if ((has(a, "Kình Dương") && kyAt(b)) || (has(b, "Kình Dương") && kyAt(a)))
      out.push(y('Thiên Tướng bị Kình Dương và Hóa Kỵ kẹp hai bên ("Hình Kỵ giáp Ấn"): tránh tham danh vị, làm việc phải đúng quy trình.', `cung ${a.chiName} và ${b.chiName} kẹp Mệnh${HQ}`, "xau"));
    const cuLoc = (p: TuViPalace) => p.majorStars.some((s) => s.name === "Cự Môn" && s.mutagen === "Lộc");
    if ((has(a, "Thiên Lương") && cuLoc(b)) || (has(b, "Thiên Lương") && cuLoc(a)))
      out.push(y('Thiên Tướng được Thiên Lương và Cự Môn hóa Lộc kẹp ("Tài Ấm giáp Ấn"): được che chở, có tài lộc.', `cung ${a.chiName} và ${b.chiName} kẹp Mệnh${HQ}`, "tot"));
  }
  const luongP = c.palaces.find((p) => major(p).includes("Thiên Lương"))!;
  if (mm.includes("Thiên Lương")) {
    if (luongP.majorStars.some((s) => s.name === "Thiên Lương" && s.mutagen === "Khoa") || ["Văn Xương", "Văn Khúc", "Thai Phụ", "Phong Cáo"].some((s) => tc.has(s)))
      out.push(y("Thiên Lương có Khoa hoặc sao văn đi cùng: hợp nghiên cứu, giáo dục, y; có số làm thầy.", `Thiên Lương ở ${luongP.chiName}${HQ}`, "tot"));
    if (major(luongP).includes("Thái Dương")) out.push(y(luongP.chi === 3 ? "Dương Lương ở Mão: thế đẹp, danh và phúc cùng lên." : luongP.chi === 9 ? "Dương Lương ở Dậu: kém hơn ở Mão, công danh đến chậm." : "", `Thái Dương, Thiên Lương ở ${luongP.chiName}${HQ}`, luongP.chi === 3 ? "tot" : "trung"));
    if (major(luongP).includes("Thiên Đồng")) out.push(y(luongP.chi === 2 ? "Đồng Lương ở Dần: thế đẹp, tự lập mà nên." : luongP.chi === 8 ? "Đồng Lương ở Thân: kém hơn ở Dần, phải bền bỉ." : "", `Thiên Đồng, Thiên Lương ở ${luongP.chiName}${HQ}`, luongP.chi === 2 ? "tot" : "trung"));
  }
  if (mm.includes("Cự Môn")) {
    const cuP = c.palaces.find((p) => major(p).includes("Cự Môn"))!;
    const tot = cuP.majorStars.some((s) => s.name === "Cự Môn" && (s.mutagen === "Lộc" || s.mutagen === "Quyền")) || tc.has("Văn Xương") || tc.has("Văn Khúc");
    const xau = ["Địa Không", "Địa Kiếp", "Kình Dương", "Hỏa Tinh", "Linh Tinh"].filter((s) => tc.has(s));
    if (tot) out.push(y("Cự Môn có Lộc/Quyền hoặc sao văn: thành cách, lời nói có sức nặng, hợp nghề dùng lời.", `Cự Môn ở ${cuP.chiName}${HQ}`, "tot"));
    if (xau.length >= 2) out.push(y("Cự Môn gặp nhiều sát tinh: thị phi nặng, nên giữ lời, tránh tranh cãi.", `hội ${xau.join(", ")}${HQ}`, "xau"));
  }
  const phuc = cung(c, "Phúc Đức");
  if (has(phuc, "Thiên Đồng")) out.push(y("Thiên Đồng ở Phúc Đức: phúc phần tốt, dù sao sáng hay tối.", `Thiên Đồng ở Phúc Đức${HQ}`, "tot"));
  for (const p of c.palaces)
    if (p.majorStars.some((s) => s.name === "Thiên Đồng" && s.mutagen === "Kỵ"))
      out.push(y("Thiên Đồng hóa Kỵ: dễ làm ơn mắc oán, giúp người nên rõ ràng; mặt khác, bị kích nên chịu phấn đấu hơn.", `Thiên Đồng hóa Kỵ ở ${p.name}${HQ} · Phong Thủy Tâm Linh (ý phấn đấu)`, "trung"));
  if (mm.includes("Phá Quân") && SAT6.some((s) => tc.has(s)) && (tc.has("Lộc Tồn") || [...tuChinh(c, c.menhChi)].some((p) => hoaIn(p, "Lộc").length)))
    out.push(y("Phá Quân gặp sát tinh nhưng có Lộc đi cùng: thành cách, dám đổi mới; thời nay hợp nghề kỹ thuật, an ninh.", `Phá Quân hội sát tinh và Lộc${HQ}`, "tot"));
  for (const p of c.palaces) {
    const loc = hoaIn(p, "Lộc");
    if (!loc.length) continue;
    const xau = [...found(p, SAT6), ...hoaIn(p, "Kỵ").map((s) => `${s} hóa Kỵ`), ...(p.tuan ? ["Tuần"] : []), ...(p.triet ? ["Triệt"] : [])];
    if (xau.length) out.push(y(`Hóa Lộc ở ${p.name} bị ${xau.join(", ")} làm giảm: lợi về ${lv(p)} không trọn, nên phòng rủi ro.`, `${loc.join(", ")} hóa Lộc ở ${p.name}${LQL}`, "trung"));
  }
  for (const p of c.palaces)
    if (has(p, "Vũ Khúc") && has(p, ...KHONG_KIEP) && ["Mệnh", "Tài Bạch", "Điền Trạch", "Quan Lộc"].includes(p.name) && !p.majorStars.some((s) => s.name === "Vũ Khúc" && s.brightness && SANG.has(s.brightness)))
      out.push(y("Vũ Khúc không sáng lại gặp Không/Kiếp: tiền ra nhiều hơn vào (Vũ Khúc sáng thì ít sợ sát tinh).", `Vũ Khúc cùng ${found(p, KHONG_KIEP).join(", ")} ở ${p.name}${LQL} · Phong Thủy Tâm Linh`, "xau"));
  return out.filter((x) => x.text);
}

/* ---------------- Hôn nhân, bạn bè ---------------- */

function honNhan(c: TuViChart): Y[] {
  const out: Y[] = [];
  const menh = cung(c, "Mệnh");
  const phu = cung(c, "Phu Thê");
  for (const p of [menh, phu]) {
    const dh = found(p, ["Đào Hoa", "Hồng Loan"]);
    if (!dh.length) continue;
    const tot = found(p, ["Thiên Đức", "Nguyệt Đức", "Ân Quang", "Thiên Quý", "Lộc Tồn", "Văn Xương", "Văn Khúc"]);
    if (tot.length) out.push(y(`${dh.join(", ")} ở ${p.name} gặp sao lành: hôn nhân thuận, có duyên.`, `cùng ${tot.join(", ")}${LQL}`, "tot"));
    if (has(p, ...KHONG_KIEP)) out.push(y(`${dh.join(", ")} gặp Không/Kiếp ở ${p.name}: tình duyên dễ lận đận, nên chậm mà chắc.`, `cùng ${found(p, KHONG_KIEP).join(", ")}${LQL}${HQ}`, "xau"));
  }
  if (has(menh, "Kình Dương")) out.push(y("Kình Dương ở Mệnh thì Đà La rơi vào Phu Thê: vợ chồng dễ va chạm, cần nhường nhịn.", `Kình Dương ở Mệnh${HQ}`, "trung"));
  if (has(phu, "Thiên Mã") && (phu.tuan || phu.triet || has(phu, "Đà La"))) out.push(y("Thiên Mã ở Phu Thê gặp Tuần/Triệt hoặc Đà La: hôn nhân dễ trắc trở, cần vun đắp.", `Phu Thê có Thiên Mã${HQ}`, "xau"));
  for (const ten of LUC_THAN) {
    const p = cung(c, ten);
    const sat = p.majorStars.find((s) => s.name === "Thất Sát");
    if (sat) out.push(y(`Thất Sát ở ${ten}: ${lv(p)} ít hòa hợp hoặc có khoảng cách${sat.brightness && TOI.has(sat.brightness) ? ", nặng hơn vì sao hãm" : ""}.`, `Thất Sát ${sat.brightness ?? ""} ở ${ten}${HQ}`, "trung"));
  }
  const no = cung(c, "Nô Bộc");
  if (found(no, CAT).length + hoaIn(no, "Lộc").length >= 2) out.push(y("Nô Bộc có cát tinh hoặc Hóa Lộc: được nhờ bạn bè, đồng nghiệp.", `Nô Bộc có ${[...found(no, CAT), ...hoaIn(no, "Lộc").map((s) => `${s} hóa Lộc`)].join(", ")}${HQ}`, "tot"));
  return out;
}

/* ---------------- Vận hạn ---------------- */

function hanNam(c: TuViChart): Y[] {
  const v = c.vanHan;
  if (!v) return [];
  const out: Y[] = [];
  const menh = cung(c, "Mệnh");
  const luu = new Map<number, string[]>();
  for (const s of v.luuStars) luu.set(s.chi, [...(luu.get(s.chi) ?? []), s.name]);
  const luuAt = (chi: number) => luu.get(m12(chi)) ?? [];
  const goc = (n: string) => n.replace(/^Lưu |^ĐV /, "");
  const ttP = at(c, v.luuThaiTue.chi);
  const thP = at(c, v.tieuHan.chi);
  const dhP = v.daiHan ? at(c, v.daiHan.chi) : null;

  // H1 + H2: chủ đề năm, ba lớp
  const dTt = diem(ttP, luuAt(ttP.chi).map(goc));
  out.push(y(`Chủ đề năm ${v.year}: ${lv(ttP)} (cung ${ttP.name} có Lưu Thái Tuế). ${dTt > 0 ? "Cung nhiều sao lành nên việc này thuận." : dTt < 0 ? "Cung nhiều sát tinh nên việc này cần thận trọng." : "Cát hung xen kẽ."}`, `Lưu Thái Tuế ở ${ttP.chiName}${HQ}`, dTt > 0 ? "tot" : dTt < 0 ? "xau" : "trung"));
  if (v.luuNienDaiHan) {
    const ln = at(c, v.luuNienDaiHan.chi);
    out.push(y(`Ba lớp của năm: chủ đề ${ttP.name}, diễn biến ở ${thP.name} (tiểu hạn), kết quả ở ${ln.name} (lưu niên đại hạn).`, `Lưu Thái Tuế ${ttP.chiName}, tiểu hạn ${thP.chiName}, lưu niên đại hạn ${ln.chiName}${HQ}`));
  }
  // H3: đại hạn làm nền
  if (dhP) {
    const dDh = diem(dhP), dTh = diem(thP, luuAt(thP.chi).map(goc));
    const vung = diem(menh) > 0 && diem(cung(c, "Phúc Đức")) > 0;
    if (dTh < 0 && dDh > 0) out.push(y("Đại hạn tốt làm nền: tiểu hạn có điểm xấu nhưng thường chỉ thành chuyện nhỏ.", `đại hạn ${dhP.name}, tiểu hạn ${thP.name}${HQ}`, "trung"));
    else if (dTh < 0 && dDh < 0) out.push(y(`Đại hạn và tiểu hạn cùng kém: năm nên thận trọng hơn${vung ? ", nhưng Mệnh và Phúc vững nên sẽ qua" : ""}.`, `đại hạn ${dhP.name}, tiểu hạn ${thP.name}${HQ}${LQL}`, "xau"));
    // H12: tam hợp đại hạn so tam hợp tuổi
    const tuoi = CHI.indexOf(c.yearName.split(" ")[1] as (typeof CHI)[number]);
    const hT = hanhTamHop(tuoi), hD = hanhTamHop(dhP.chi);
    if (hT && hD) {
      if (hT === hD || SINH[hD] === hT) out.push(y("Tam hợp của cung đại hạn cùng hành hoặc sinh cho tam hợp tuổi: 10 năm này được thời.", `tuổi ${CHI[tuoi]} (${hT}), đại hạn ${dhP.chiName} (${hD})${HQ}`, "tot"));
      else if (SINH[hT] === hD) out.push(y("Tam hợp tuổi sinh cho tam hợp cung đại hạn: 10 năm này phải bỏ nhiều sức.", `tuổi ${CHI[tuoi]} (${hT}), đại hạn ${dhP.chiName} (${hD})${HQ}`, "trung"));
      else if (KHAC[hD] === hT) out.push(y("Tam hợp cung đại hạn khắc tam hợp tuổi: thiếu thiên thời, là thế xấu nhất của đại hạn; nên giữ an toàn.", `tuổi ${CHI[tuoi]} (${hT}), đại hạn ${dhP.chiName} (${hD}) · Phong Thủy Tâm Linh, Đông Phương Đạo Quán`, "xau"));
      else if (KHAC[hT] === hD) out.push(y("Tam hợp tuổi khắc tam hợp cung đại hạn: phải gắng sức mới thắng hoàn cảnh.", `tuổi ${CHI[tuoi]} (${hT}), đại hạn ${dhP.chiName} (${hD}) · Phong Thủy Tâm Linh, Đông Phương Đạo Quán`, "trung"));
    }
    // H13: chính tinh đại hạn
    const DH_Y: Record<string, string> = { "Cự Môn": "dễ có thị phi, tranh luận; nên giữ lời", "Phá Quân": "nhiều đổi mới, dễ hao tài", "Thái Âm": "thuận làm ăn, nhà cửa", "Thái Dương": "thuận công danh, đi xa" };
    for (const s of major(dhP)) if (DH_Y[s]) out.push(y(`Đại hạn có ${s}: ${DH_Y[s]}.`, `đại hạn ${v.daiHan!.from}–${v.daiHan!.to} ở ${dhP.name}${LQL}`));
    // F3: sao và tứ hóa đại vận
    for (const h of v.daiVanTuHoa ?? []) {
      if (h.chi === null || (h.mutagen !== "Lộc" && h.mutagen !== "Kỵ")) continue;
      const p = at(c, h.chi);
      out.push(h.mutagen === "Lộc" ? y(`Lộc của đại vận vào ${p.name}: 10 năm này ${lv(p)} thuận.`, `can ${dhP.canName} của cung đại hạn hóa Lộc ${h.star}${HQ}`, "tot") : y(`Kỵ của đại vận vào ${p.name}: 10 năm này cần thận trọng với ${lv(p)}.`, `can ${dhP.canName} của cung đại hạn hóa Kỵ ${h.star}${HQ}`, "xau"));
    }
  }
  // H4: Lưu Kình/Đà ở cung lục thân
  for (const s of v.luuStars.filter((x) => x.name === "Lưu Kình Dương" || x.name === "Lưu Đà La")) {
    const t = tenCung(c, s.chi);
    if (LUC_THAN.includes(t)) out.push(y(`${s.name} vào ${t}: dễ tranh chấp với ${lv(at(c, s.chi))}${s.name === "Lưu Kình Dương" ? ", việc nổ ra nhanh" : ", việc dây dưa"}; nên mềm mỏng.`, `${s.name} ở ${CHI[s.chi]}${HQ}`, "trung"));
  }
  // H5: Lưu Thiên Mã
  const maL = v.luuStars.find((x) => x.name === "Lưu Thiên Mã");
  if (maL) {
    const p = at(c, maL.chi);
    const t = tenCung(c, maL.chi);
    if (["Mệnh", "Thiên Di", "Quan Lộc", "Điền Trạch"].includes(t)) {
      const ns = [...names(p), ...luuAt(p.chi).map(goc)];
      const hiem = ["Kình Dương", "Đà La", "Thiên Hình"].filter((s) => ns.includes(s));
      const hiem2 = [...hiem, ...(p.triet ? ["Triệt"] : [])];
      out.push(y(`Lưu Thiên Mã vào ${t}: năm có thay đổi (${t === "Quan Lộc" ? "đổi việc" : t === "Điền Trạch" ? "chuyển nhà" : "đi lại, đổi chỗ"}).${hiem2.length && (t === "Mệnh" || t === "Thiên Di") ? ` Gặp ${hiem2.join(", ")} nên cẩn thận xe cộ${ns.includes("Lộc Tồn") ? ", có Lộc Tồn nên nhẹ" : ""}.` : ""}`, `Lưu Thiên Mã ở ${p.chiName}${HQ}`, hiem2.length && (t === "Mệnh" || t === "Thiên Di") ? "trung" : undefined));
    }
  }
  // H6: Lưu Lộc Tồn
  const locL = v.luuStars.find((x) => x.name === "Lưu Lộc Tồn");
  if (locL && m12(locL.chi - c.menhChi) % 4 === 0) out.push(y("Lưu Lộc Tồn nằm trong tam hợp Mệnh – Tài – Quan: năm làm ăn được, thu nhập tăng.", `Lưu Lộc Tồn ở ${tenCung(c, locL.chi)}${HQ}${LQL}`, "tot"));
  // H7 + C15: lưu Quyền, Khoa, Kỵ; mệnh hạn
  for (const h of v.luuTuHoa) {
    if (h.chi === null) continue;
    const p = at(c, h.chi);
    const t = tenCung(c, h.chi);
    if (h.mutagen === "Quyền") out.push(y(`Lưu Quyền vào ${t}: năm có ý định hành động về ${lv(p)}${t === "Điền Trạch" ? " (mua bán, sửa nhà)" : t === "Quan Lộc" ? " (thăng chức, đổi việc)" : t === "Phu Thê" ? " (chuyện lập gia đình)" : ""}.`, `lưu ${h.star} hóa Quyền${HQ}`));
    if (h.mutagen === "Khoa") out.push(y(`Lưu Khoa vào ${t}: có giải thần ở ${lv(p)}${t === "Tật Ách" ? " (ốm gặp thầy giỏi)" : t === "Quan Lộc" || t === "Tài Bạch" ? " (thi cử, giấy tờ thuận)" : ""}.`, `lưu ${h.star} hóa Khoa${HQ}`, "tot"));
    if (h.mutagen === "Kỵ") out.push(y(`Lưu Kỵ vào ${t} xung sang ${tenCung(c, h.chi + 6)}: cung bị xung có khi chịu nặng hơn, nên để ý ${lv(at(c, h.chi + 6))}.`, `lưu ${h.star} hóa Kỵ${HQ}`, "xau"));
    if (major(menh).includes(h.star))
      out.push(h.mutagen === "Kỵ" ? y(`Năm này chính tinh Mệnh (${h.star}) hóa Kỵ: năm cần thận trọng hơn, bất kể đại hạn, tiểu hạn.`, `can năm ${v.yearName}${HQ}`, "xau") : y(`Năm này chính tinh Mệnh (${h.star}) hóa ${h.mutagen}: năm thuận cho bản thân.`, `can năm ${v.yearName}${HQ}`, "tot"));
  }
  // H8: tình duyên, hỷ sự
  const than = at(c, c.thanChi);
  const phu = cung(c, "Phu Thê");
  const duyen = [...new Set([menh.chi, than.chi, phu.chi])].flatMap((chi) => luuAt(chi).filter((n) => ["Lưu Đào Hoa", "Lưu Hồng Loan", "Lưu Thiên Hỷ", "Lưu Long Đức", "Lưu Nguyệt Đức"].includes(n)).map((n) => `${n} ở ${tenCung(c, chi)}`));
  if (duyen.length >= 2 && duyen.some((s) => /Đào Hoa|Hồng Loan/.test(s))) out.push(y("Năm có duyên tình cảm: dễ gặp gỡ, hợp tìm hiểu hoặc tiến tới hôn nhân.", `${duyen.join("; ")}${HQ} (thầy Lê Quang Lăng không dùng sao lưu Đào/Hồng)`, "tot"));
  const hy = found(thP, ["Thanh Long", "Long Trì", "Phượng Các"]);
  if (hy.length >= 2) out.push(y("Tiểu hạn có sao hỷ (Thanh Long, Long Trì, Phượng Các): năm dễ có tin vui, hỷ sự.", `tiểu hạn ${thP.name} có ${hy.join(", ")}${HQ}`, "tot"));
  if (has(ttP, "Cô Thần", "Quả Tú")) out.push(y("Lưu Thái Tuế gặp Cô Thần/Quả Tú: năm chưa thuận cho cưới hỏi.", `cung ${ttP.name}${HQ}`, "trung"));
  // H10: Khốc, Hư
  for (const s of v.luuStars) {
    const t = tenCung(c, s.chi);
    if (s.name === "Lưu Thiên Hư" && t === "Điền Trạch") out.push(y("Lưu Thiên Hư vào Điền Trạch: năm nhà cửa hay hư hỏng, phải sửa chữa.", `Lưu Thiên Hư ở ${CHI[s.chi]}${HQ}`, "trung"));
    if (s.name === "Lưu Thiên Khốc" && (t === "Mệnh" || t === "Phu Thê")) out.push(y(`Lưu Thiên Khốc vào ${t}: năm có chuyện buồn phiền; giữ tinh thần lạc quan.`, `Lưu Thiên Khốc ở ${CHI[s.chi]}${HQ}`, "trung"));
  }
  // H11: trùng phùng
  for (const s of v.luuStars) {
    const g = goc(s.name);
    if (["Thái Tuế", "Kình Dương", "Đà La", "Tang Môn", "Bạch Hổ"].includes(g) && has(at(c, s.chi), g))
      out.push(y(`${s.name} trùng ${g} gốc ở ${tenCung(c, s.chi)}: tác động mạnh hơn bình thường lên ${lv(at(c, s.chi))}.`, `cung ${CHI[s.chi]}${HQ}`, g === "Thái Tuế" ? "trung" : "xau"));
  }
  for (const d of v.daiVanStars ?? []) {
    if (d.name !== "ĐV Kình Dương" && d.name !== "ĐV Đà La") continue;
    if (luuAt(d.chi).includes(d.name.replace("ĐV", "Lưu"))) out.push(y(`${d.name === "ĐV Kình Dương" ? "Kình Dương" : "Đà La"} đại vận gặp sao lưu cùng tên ở ${tenCung(c, d.chi)}: năm này ${lv(at(c, d.chi))} cần đặc biệt thận trọng.`, `cung ${CHI[d.chi]}${HQ}`, "xau"));
  }
  // F4: tháng nên lưu ý
  if (v.nguyetHan?.length === 12) {
    const nong = new Set<number>([...v.luuStars.filter((x) => x.name === "Lưu Kình Dương" || x.name === "Lưu Đà La").map((x) => x.chi), ...v.luuTuHoa.filter((h) => h.mutagen === "Kỵ" && h.chi !== null).map((h) => h.chi as number)]);
    const thang = v.nguyetHan.map((chi, i) => (nong.has(chi) ? i + 1 : 0)).filter(Boolean);
    if (thang.length) out.push(y(`Tháng âm nên cẩn trọng hơn: tháng ${thang.join(", ")} (nguyệt hạn rơi vào cung có Lưu Kình, Lưu Đà hoặc lưu Kỵ).`, `nguyệt hạn tháng Giêng ở ${CHI[v.nguyetHan[0]!]}${HQ}`, "trung"));
  }
  return out;
}

/** Luận đợt 2 cho phái Thiên Lương */
export function luanVideoNam2(c: TuViChart): Phan[] {
  const out: Phan[] = [];
  const cc = cachCuc(c);
  if (cc.length) out.push({ title: "Chính tinh và cách cục (kinh nghiệm luận Học Quán, Lê Quang Lăng)", items: cc });
  const hn = honNhan(c);
  if (hn.length) out.push({ title: "Hôn nhân, lục thân, bạn bè (kinh nghiệm của thầy — tham khảo)", items: hn });
  const h = hanNam(c);
  if (h.length) out.push({ title: `Xem hạn năm ${c.vanHan!.year} (kinh nghiệm luận Học Quán, Lê Quang Lăng)`, items: h });
  return out;
}
