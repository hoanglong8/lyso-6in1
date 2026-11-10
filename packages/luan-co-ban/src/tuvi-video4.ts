/**
 * Luận bổ sung đợt 4 (11/2026), rút từ phụ đề 120 video, viết lại bằng lời riêng, không chứa thông tin khách:
 * - Phái Việt – Thiên Lương: kênh "389 TỬ VI" (30 video mới) → luanVideoNam4.
 * - Bắc phái: kênh "Tử Vi Tứ Hóa Đào Thanh Tín" (30 video mới) → luanVideoBac2.
 * - Bắc phái, trường Khâm Thiên Tứ hóa: "Tử Vi Tâm Thành", "Khâm Thiên Tứ Hóa Minh Phương", playlist "Tử vi lý số"
 *   → luanKhamThien. Ly tâm = can cung X hóa sao nằm ngay trong X; hướng tâm = can cung X hóa sao ở cung đối X+6
 *   (định nghĩa thống nhất ở cả ba nguồn).
 * Danh sách đã duyệt: docs/tuvi-quy-tac-video.md (đợt 4).
 */
import { CHI } from "@lyso/calendar-vn";
import type { PhiHoa, TuViChart, TuViPalace } from "@lyso/engine-tuvi";
import type { Phan, Y } from "./types";
import { CUNG_CHUC } from "./tuvi-video";

export const NGUON_VIDEO_NAM4 = "Kinh nghiệm luận kênh \"389 TỬ VI\" đợt 2 (30 video, viết lại; chưa đối chiếu sách)";
export const NGUON_VIDEO_BAC2 = "Kinh nghiệm luận kênh \"Tử Vi Tứ Hóa Đào Thanh Tín\" đợt 2 (30 video, viết lại; chưa đối chiếu sách)";
export const NGUON_KHAM_THIEN =
  "Kinh nghiệm luận Khâm Thiên Tứ hóa: kênh \"Tử Vi Tâm Thành\" (20 video), \"Khâm Thiên Tứ Hóa Minh Phương\" (20 video), playlist \"Tử vi lý số\" (20 video) — viết lại; chưa đối chiếu sách";

type CungChuc = (typeof CUNG_CHUC)[number];
const m12 = (x: number) => ((x % 12) + 12) % 12;
const at = (c: TuViChart, chi: number) => c.palaces.find((p) => p.chi === m12(chi)) as TuViPalace;
const cung = (c: TuViChart, ten: CungChuc) => at(c, c.menhChi + CUNG_CHUC.indexOf(ten));
const tenCung = (c: TuViChart, chi: number) => CUNG_CHUC[m12(chi - c.menhChi)] as CungChuc;
const names = (p: TuViPalace) => [...p.majorStars, ...p.minorStars, ...p.adjectiveStars].map((s) => s.name);
const has = (p: TuViPalace, ...ns: string[]) => ns.some((n) => names(p).includes(n));
const hasAll = (p: TuViPalace, ...ns: string[]) => ns.every((n) => names(p).includes(n));
const found = (p: TuViPalace, ns: string[]) => ns.filter((n) => names(p).includes(n));
const major = (p: TuViPalace) => p.majorStars.map((s) => s.name);
const hoaIn = (p: TuViPalace, m: string) => [...p.majorStars, ...p.minorStars].filter((s) => s.mutagen === m).map((s) => s.name);
const tuChinh = (c: TuViChart, chi: number) => [chi, chi + 4, chi + 8, chi + 6].map((x) => at(c, x));
const hoiNames = (c: TuViChart, chi: number) => new Set(tuChinh(c, chi).flatMap(names));
const y = (text: string, canCu: string, tone?: Y["tone"]): Y => ({ text, canCu, tone });
const hanhOf = (s?: string) => ["Kim", "Mộc", "Thủy", "Hỏa", "Thổ"].find((h) => s?.includes(h));
const SINH: Record<string, string> = { Mộc: "Hỏa", Hỏa: "Thổ", Thổ: "Kim", Kim: "Thủy", Thủy: "Mộc" };
const KHAC: Record<string, string> = { Mộc: "Thổ", Thổ: "Thủy", Thủy: "Hỏa", Hỏa: "Kim", Kim: "Mộc" };
const TU_MO = [1, 4, 7, 10];
const yearChi = (c: TuViChart) => CHI.indexOf(c.yearName.split(" ")[1] as (typeof CHI)[number]);
const yearCan = (c: TuViChart) => c.yearName.split(" ")[0] ?? "";

/* ------------------------------------------------------------------ */
/* Thiên Lương: 389 TỬ VI đợt 2                                         */
/* ------------------------------------------------------------------ */

const K389 = " · 389 TỬ VI";

export function luanVideoNam4(c: TuViChart): Phan[] {
  const menh = cung(c, "Mệnh");
  const than = at(c, c.thanChi);
  const MT = menh.chi === than.chi ? [menh] : [menh, than];
  const inMT = (...ns: string[]) => MT.some((p) => has(p, ...ns));
  const out: Y[] = [];

  // T6, T7. Cục và bản mệnh
  const cucH = hanhOf(c.cuc);
  const bmH = hanhOf(c.banMenh);
  if (cucH && bmH) {
    if (KHAC[cucH] === bmH) out.push(y("Cục khắc bản mệnh: hoàn cảnh ban đầu ít ưu đãi; chủ động đổi môi trường, ra khỏi quê thì thuận hơn.", `${c.cuc}, bản mệnh ${c.banMenh}${K389}`, "trung"));
    else if (SINH[cucH] === bmH) out.push(y("Cục sinh bản mệnh: được hoàn cảnh nâng đỡ, thường lớn lên trong điều kiện thuận lợi.", `${c.cuc}, bản mệnh ${c.banMenh}${K389}`, "tot"));
    else if (SINH[bmH] === cucH) out.push(y("Bản mệnh sinh cục: hoàn cảnh thuận nhưng mình là bên cho ra, phải bỏ sức nhiều hơn người.", `${c.cuc}, bản mệnh ${c.banMenh}${K389}`, "trung"));
  }

  // T1. Khôi Việt chiếu Mệnh/Thân
  const kv = MT.flatMap((p) => found(p, ["Thiên Khôi", "Thiên Việt"]));
  if (kv.length) out.push(y("Thiên Khôi/Thiên Việt thủ Mệnh, Thân: thường là con trưởng, hoặc là người gánh vai trưởng trong nhà.", `${[...new Set(kv)].join(", ")} ở Mệnh/Thân${K389}`, "trung"));
  // T2. Thiên Việt ở Tài/Quan/Thân
  const vietP = [cung(c, "Tài Bạch"), cung(c, "Quan Lộc")].find((p) => has(p, "Thiên Việt"));
  if (vietP) out.push(y("Thiên Việt ở Tài/Quan: hợp công nghệ, điện tử, kinh doanh trên mạng.", `Thiên Việt ở ${vietP.chiName}${K389}`, "tot"));
  // T3. Thiên Trù
  const truP = MT.find((p) => has(p, "Thiên Trù"));
  if (truP) out.push(y("Thiên Trù: sành ăn, có duyên với nghề ẩm thực, nhà hàng.", `Thiên Trù ở ${truP.chiName}${K389}`, "tot"));
  // T4. Vũ Khúc / Thiên Phủ ở Mệnh/Thân
  const vp = MT.flatMap((p) => major(p).filter((s) => s === "Vũ Khúc" || s === "Thiên Phủ"));
  if (vp.length) out.push(y(`${[...new Set(vp)].join(", ")} là sao thương mại: hợp kinh doanh, tài chính, ngân hàng, kế toán.`, `ở Mệnh/Thân${K389}`, "tot"));
  // T9, T10. Vòng Thái Tuế
  if (has(menh, "Thiếu Âm", "Long Đức")) out.push(y("Thiếu Âm/Long Đức ở Mệnh: hiền, nhẫn nhịn, dễ tin người.", `${found(menh, ["Thiếu Âm", "Long Đức"]).join(", ")}${K389}`, "tot"));
  if (has(menh, "Trực Phù")) out.push(y("Trực Phù: tính cẩn trọng, hay nghi, hay hỏi cho ra lẽ.", `Trực Phù ở Mệnh${K389}`, "trung"));
  if (has(menh, "Quan Phù")) out.push(y("Quan Phù: kỹ tính, cẩn thận, về sau càng hay soi xét.", `Quan Phù ở Mệnh${K389}`, "trung"));
  // T11. Vòng Tràng Sinh ở Mệnh
  const TS: Record<string, [string, Y["tone"]]> = {
    "Quan Đới": ["có đường công danh, sự nghiệp", "tot"],
    Dưỡng: ["khôn khéo; có thể có cha mẹ nuôi, anh em nuôi", "trung"],
    Mộ: ["nhớ rộng mà không sâu, hay sơ suất giấy tờ", "trung"],
  };
  if (menh.truongSinh && TS[menh.truongSinh]) out.push(y(`${menh.truongSinh} ở Mệnh: ${TS[menh.truongSinh]![0]}.`, `${menh.truongSinh} ở ${menh.chiName}${K389}`, TS[menh.truongSinh]![1]));
  // T12. Phúc tinh, quý tinh
  const quy = [...new Set(MT.flatMap((p) => found(p, ["Ân Quang", "Thiên Quý", "Thiên Đức", "Nguyệt Đức", "Thiên Quan"])))];
  if (quy.length >= 3) out.push(y("Nhiều phúc tinh, quý tinh ở Mệnh/Thân: thiện lương, thích làm việc tốt, hay gặp quý nhân.", `${quy.join(", ")}${K389}`, "tot"));
  // T13. Thiên Tài + Thiên Thọ
  const ttP = [menh, than, cung(c, "Phúc Đức"), cung(c, "Nô Bộc")].find((p) => hasAll(p, "Thiên Tài", "Thiên Thọ"));
  if (ttP) out.push(y("Thiên Tài cùng Thiên Thọ: làm gì nhận nấy khá nhanh; sống tử tế thì quả tốt đến sớm (quan niệm tâm linh của thầy).", `ở ${tenCung(c, ttP.chi)}${K389}`, "trung"));
  // T14. Thiên Hình
  const hinhP = MT.find((p) => has(p, "Thiên Hình"));
  if (hinhP) out.push(y("Thiên Hình ở Mệnh/Thân: tính nghiêm, hợp ngành kỷ luật; nên chú ý dao kéo, phẫu thuật, vết sẹo.", `Thiên Hình ở ${tenCung(c, hinhP.chi)}${K389}`, "trung"));
  // T15. Kiếp Sát
  const ksP = MT.find((p) => has(p, "Kiếp Sát"));
  if (ksP) out.push(y("Kiếp Sát ở Mệnh/Thân: hợp vũ trang, luật, y; thuở nhỏ nên chú ý tai nạn.", `Kiếp Sát ở ${tenCung(c, ksP.chi)}${K389}`, "trung"));
  // T16. Hỏa/Linh
  const hl = found(menh, ["Hỏa Tinh", "Linh Tinh"]);
  if (hl.length) out.push(y("Hỏa/Linh ở Mệnh: tính nóng; nên chú ý tim mạch, huyết áp, bỏng.", `${[...new Set(hl)].join(", ")}${K389}`, "trung"));
  // T17. Song Hao ở Tài/Phúc: nghề hợp
  const hao = [cung(c, "Tài Bạch"), cung(c, "Phúc Đức")].find((p) => hasAll(p, "Đại Hao", "Tiểu Hao"));
  if (hao) out.push(y("Song Hao ở Tài/Phúc: tiền tán nhiều tụ ít; hợp nghề cho tiền xoay vòng như tài chính, cho vay, xuất nhập khẩu.", `ở ${tenCung(c, hao.chi)}${K389}`, "trung"));
  // T18. Thiên Cơ
  const coP = [menh].find((p) => major(p).includes("Thiên Cơ"));
  if (coP) out.push(y("Thiên Cơ ở Mệnh: thường có hai nghề, nhiều cách kiếm tiền.", `Thiên Cơ ở ${tenCung(c, coP.chi)}${K389}`, "tot"));
  // T19. Phá Quân ở Tý/Ngọ
  if (major(menh).includes("Phá Quân") && [0, 6].includes(menh.chi))
    out.push(y(`Phá Quân ở ${menh.chiName}: đời lên xuống như sóng, thích phiêu lưu; ở Ngọ thuận hơn ở Tý.`, `Phá Quân ở Mệnh${K389}`, menh.chi === 6 ? "tot" : "trung"));
  // T20. Tuổi tứ mộ gặp Không Kiếp
  const nam = yearChi(c);
  if (TU_MO.includes(nam) && inMT("Địa Không", "Địa Kiếp")) out.push(y("Tuổi Thìn/Tuất/Sửu/Mùi gặp Không, Kiếp ở Mệnh/Thân: tác hại nhẹ hơn các tuổi khác.", `tuổi ${CHI[nam]}${K389}`, "trung"));
  // T21. Thiên Phủ kho trống ở Phu/Tử
  for (const ten of ["Phu Thê", "Tử Tức"] as CungChuc[]) {
    const p = cung(c, ten);
    if (major(p).includes("Thiên Phủ") && (p.tuan || p.triet || has(p, "Địa Không", "Địa Kiếp")))
      out.push(y(`Thiên Phủ ở ${ten} gặp Không/Tuần/Triệt ("kho trống"): dễ hao tài vì ${ten === "Phu Thê" ? "chuyện vợ chồng" : "con cái"}.`, `Thiên Phủ ở ${p.chiName}${K389}`, "trung"));
  }
  // T22, T23. Hóa Kỵ ở Nô / Tử
  if (hoaIn(cung(c, "Nô Bộc"), "Kỵ").length) out.push(y("Hóa Kỵ ở Nô Bộc: bạn bè, đồng nghiệp trước mặt tốt mà sau lưng dễ thị phi; nên chọn bạn.", `${hoaIn(cung(c, "Nô Bộc"), "Kỵ").join(", ")} hóa Kỵ${K389}`, "xau"));
  if (hoaIn(cung(c, "Tử Tức"), "Kỵ").length) out.push(y("Hóa Kỵ ở Tử Tức: con cứng đầu, khó dạy; cần kiên nhẫn.", `${hoaIn(cung(c, "Tử Tức"), "Kỵ").join(", ")} hóa Kỵ${K389}`, "trung"));
  // T24. Tuần/Triệt ở Quan
  const ql = cung(c, "Quan Lộc");
  if (ql.triet) out.push(y(`Triệt ở Quan Lộc: công danh, học hành có đoạn đứt quãng, phải làm lại.`, `Quan Lộc ${ql.chiName}${K389}`, "trung"));
  // T25. Điền Trạch Phục Binh / Thái Tuế
  const dt = cung(c, "Điền Trạch");
  if (has(dt, "Phục Binh", "Thái Tuế")) out.push(y("Điền Trạch có Phục Binh/Thái Tuế: nên chú ý trộm cắp, mất đồ trong nhà.", `${found(dt, ["Phục Binh", "Thái Tuế"]).join(", ")}${K389}`, "trung"));
  // T26. Đại hạn vào tam hợp Phu–Di–Phúc
  const dh = c.vanHan?.daiHan;
  if (dh && [2, 6, 10].includes(m12(dh.chi - c.menhChi)))
    out.push(y(`Đại hạn ${dh.from}–${dh.to} rơi vào ${tenCung(c, dh.chi)} (tam hợp Phu–Di–Phúc): chuyện tình duyên, hôn nhân dễ có biến động; nên vun đắp.`, `đại hạn ${CHI[dh.chi]}${K389}`, "trung"));

  return out.length ? [{ title: "Kinh nghiệm luận 389 TỬ VI (bổ sung)", items: out }] : [];
}

/* ------------------------------------------------------------------ */
/* Bắc phái: Đào Thanh Tín đợt 2                                        */
/* ------------------------------------------------------------------ */

const KDT = " · Đào Thanh Tín";
const phat = (p: TuViPalace): PhiHoa[] => p.phiHoa ?? [];

/** Vị trí Hóa Kỵ năm sinh */
const kyNamSinh = (c: TuViChart) => c.palaces.filter((p) => hoaIn(p, "Kỵ").length).map((p) => p.chi);
const locNamSinh = (c: TuViChart) => c.palaces.filter((p) => hoaIn(p, "Lộc").length).map((p) => p.chi);

export function luanVideoBac2(c: TuViChart): Phan[] {
  const menh = cung(c, "Mệnh");
  const out: Y[] = [];
  // D1. Thân cư
  const THAN: Partial<Record<CungChuc, string>> = {
    Mệnh: "lập trường vững, trước sau như một nhưng dễ bảo thủ",
    "Tài Bạch": "đặt nặng chuyện tiền bạc; hợp sống nơi nhiều cơ hội làm ăn",
    "Quan Lộc": "sống vì công việc, lấy sự nghiệp làm thước đo",
    "Phu Thê": "coi trọng gia đình, bạn đời ảnh hưởng lớn",
  };
  const tt = tenCung(c, c.thanChi);
  if (THAN[tt]) out.push(y(`Thân cư ${tt}: ${THAN[tt]}.`, `Thân tại ${CHI[c.thanChi]}${KDT}`));
  // D4. Lộc và Kỵ năm sinh cùng cung
  for (const p of c.palaces) if (hoaIn(p, "Lộc").length && hoaIn(p, "Kỵ").length)
    out.push(y(`Lộc và Kỵ năm sinh cùng ở ${tenCung(c, p.chi)}: hai bên trung hòa, xấu bớt nặng mà tốt cũng bớt ngọt.`, `${hoaIn(p, "Lộc")} Lộc, ${hoaIn(p, "Kỵ")} Kỵ${KDT}`, "trung"));
  // D5. Phi hóa giữa các cung khác
  const LOC: [CungChuc, CungChuc, string][] = [
    ["Phụ Mẫu", "Điền Trạch", "cha mẹ, người trên có thể để lại hoặc giúp về nhà đất"],
    ["Tài Bạch", "Điền Trạch", "tiền kiếm được hay đổ vào nhà đất, tài sản"],
    ["Nô Bộc", "Quan Lộc", "khách hàng, đồng nghiệp mang lợi cho công việc"],
  ];
  for (const [a, b, t] of LOC)
    if (phat(cung(c, a)).some((h) => h.mutagen === "Lộc" && h.toChi === cung(c, b).chi)) out.push(y(`${a} phi Lộc vào ${b}: ${t}.`, `can ${cung(c, a).canName} của ${a}${KDT}`, "tot"));
  const dien = cung(c, "Điền Trạch");
  const kyDien = [menh, cung(c, "Tài Bạch")].filter((p) => phat(p).some((h) => h.mutagen === "Kỵ" && h.toChi === dien.chi));
  if (kyDien.length || hoaIn(dien, "Kỵ").length)
    out.push(y("Kỵ vào Điền Trạch: mua bán nhà đất nên kiểm kỹ giấy tờ pháp lý; tự tạo cơ nghiệp thì vững hơn hưởng sẵn.", kyDien.length ? `${kyDien.map((p) => tenCung(c, p.chi)).join(", ")} phi Kỵ vào Điền${KDT}` : `${hoaIn(dien, "Kỵ")} hóa Kỵ ở Điền${KDT}`, "xau"));
  // D10.
  if (hoaIn(dien, "Quyền").length) out.push(y("Hóa Quyền ở Điền Trạch: có sức tích lũy nhà đất; giữ quyền quá chặt dễ sinh tranh chấp trong nhà.", `${hoaIn(dien, "Quyền")} hóa Quyền${KDT}`, "tot"));
  const tai = cung(c, "Tài Bạch");
  if (hoaIn(tai, "Kỵ").length) out.push(y("Hóa Kỵ ở Tài Bạch: tiền dễ kẹt, nên chuyển bớt thành tài sản hoặc gửi ngân hàng thay vì giữ tiền mặt.", `${hoaIn(tai, "Kỵ")} hóa Kỵ${KDT}`, "trung"));
  if (hoaIn(cung(c, "Phụ Mẫu"), "Kỵ").length) out.push(y("Hóa Kỵ ở Phụ Mẫu: hay khác quan điểm với cha mẹ, cấp trên; có hiếu nhưng khó bày tỏ.", `${hoaIn(cung(c, "Phụ Mẫu"), "Kỵ")} hóa Kỵ${KDT}`, "trung"));
  // D6. Tả Hữu ở Huynh/Tử/Nô
  const th = (["Tử Tức", "Nô Bộc"] as CungChuc[]).filter((t) => has(cung(c, t), "Tả Phù", "Hữu Bật"));
  if (th.length) out.push(y(`Tả Phù/Hữu Bật ở ${th.join(", ")}: được người cùng làm, cấp dưới hay khách hàng trợ giúp đắc lực.`, `Tả Hữu ở ${th.join(", ")}${KDT}`, "tot"));
  // D7. Quan Lộc có Lộc / Lộc Mã
  const quan = cung(c, "Quan Lộc");
  if (hoaIn(quan, "Lộc").length) out.push(y("Hóa Lộc ở Quan Lộc: càng bận, càng gặp nhiều người thì càng ra tiền.", `${hoaIn(quan, "Lộc")} hóa Lộc${KDT}`, "tot"));
  if (has(quan, "Thiên Mã") && (has(quan, "Lộc Tồn") || hoaIn(quan, "Lộc").length)) out.push(y("Lộc Mã ở Quan Lộc: càng di chuyển, càng năng động thì càng sinh tài.", `Thiên Mã + Lộc ở Quan${KDT}`, "tot"));
  // D8. Tham Lang theo cung (khi ở Mệnh)
  if (major(menh).includes("Tham Lang")) {
    const T: Record<number, string> = {
      4: "Thìn/Tuất (thiên la địa võng): phát muộn, càng về sau càng vững", 10: "Thìn/Tuất (thiên la địa võng): phát muộn, càng về sau càng vững",
      2: "Dần/Thân, đối Liêm Trinh: năng động, hay đi xa", 8: "Dần/Thân, đối Liêm Trinh: năng động, hay đi xa",
      5: "Tỵ/Hợi cùng Liêm Trinh: ham muốn mạnh, cần tự giữ kỷ luật", 11: "Tỵ/Hợi cùng Liêm Trinh: ham muốn mạnh, cần tự giữ kỷ luật",
      3: "Mão/Dậu cùng Tử Vi: tham vọng lớn, giỏi giao tiếp", 9: "Mão/Dậu cùng Tử Vi: tham vọng lớn, giỏi giao tiếp",
      1: "Sửu/Mùi cùng Vũ Khúc: tiền đến muộn mà chắc", 7: "Sửu/Mùi cùng Vũ Khúc: tiền đến muộn mà chắc",
      0: "Tý/Ngọ: đa tài, đào hoa, thích hưởng thụ", 6: "Tý/Ngọ: đa tài, đào hoa, thích hưởng thụ",
    };
    out.push(y(`Tham Lang ở ${T[menh.chi]}.`, `Tham Lang ở ${menh.chiName}${KDT}`));
    if (has(menh, "Đà La")) out.push(y("Tham Lang gặp Đà La: nên chú ý sa đà rượu chè, cờ bạc.", `Mệnh có Tham Lang, Đà La${KDT}`, "xau"));
    if (has(menh, "Hỏa Tinh", "Linh Tinh")) out.push(y("Tham Lang gặp Hỏa/Linh: có dịp phát nhanh, nhưng tham tiếp thì dễ mất lại.", `Mệnh có Tham Lang, ${found(menh, ["Hỏa Tinh", "Linh Tinh"]).join(", ")}${KDT}`, "trung"));
    if (has(menh, "Địa Không", "Địa Kiếp") && !has(menh, "Đà La")) out.push(y("Tham Lang gặp Không/Kiếp mà không có Đà La: không đáng ngại, chỉ thăng trầm.", `Mệnh có Tham Lang, ${found(menh, ["Địa Không", "Địa Kiếp"]).join(", ")}${KDT}`, "trung"));
  }
  // D9. Sát tinh theo cung
  if (has(tai, "Đà La")) out.push(y("Đà La ở Tài Bạch: tiền quay vòng chậm, hay bị dây dưa.", `Đà La ở Tài${KDT}`, "trung"));
  if (has(cung(c, "Phúc Đức"), "Linh Tinh")) out.push(y("Linh Tinh ở Phúc Đức: hay tự dằn vặt trong lòng.", `Linh Tinh ở Phúc${KDT}`, "trung"));
  if (has(menh, "Hỏa Tinh")) out.push(y("Hỏa Tinh ở Mệnh: làm trước nghĩ sau, nóng vội.", `Hỏa Tinh ở Mệnh${KDT}`, "trung"));

  // D2, D3. Vận hạn
  const v = c.vanHan;
  if (v?.daiHan) {
    const dh = at(c, v.daiHan.chi);
    const dvKy = phat(dh).filter((h) => h.mutagen === "Kỵ" && h.toChi !== null).map((h) => h.toChi as number);
    const lnKy = v.luuTuHoa.filter((h) => h.mutagen === "Kỵ" && h.chi !== null).map((h) => h.chi as number);
    const nsKy = kyNamSinh(c);
    for (const p of c.palaces) {
      const lop = [
        nsKy.includes(p.chi) ? "Kỵ năm sinh nhập" : nsKy.includes(m12(p.chi + 6)) ? "Kỵ năm sinh xung" : "",
        dvKy.includes(p.chi) ? "Kỵ đại vận nhập" : dvKy.includes(m12(p.chi + 6)) ? "Kỵ đại vận xung" : "",
        lnKy.includes(p.chi) ? "Kỵ lưu niên nhập" : lnKy.includes(m12(p.chi + 6)) ? "Kỵ lưu niên xung" : "",
      ].filter(Boolean);
      if (lop.length === 3) out.push(y(`Năm ${v.year}: ba lớp Kỵ (năm sinh, đại vận, lưu niên) cùng dồn vào ${tenCung(c, p.chi)}: việc ${tenCung(c, p.chi)} chịu áp lực nặng gấp bội, nên giữ an toàn.`, `${lop.join("; ")}${KDT}`, "xau"));
    }
    const qy = phat(dh).filter((h) => h.mutagen === "Quyền" && h.toChi !== null).map((h) => h.toChi);
    for (const k of dvKy) if (qy.includes(k))
      out.push(y(`Đại vận ${v.daiHan.from}–${v.daiHan.to} phi cả Quyền và Kỵ vào ${tenCung(c, k)}: 10 năm này việc ${tenCung(c, k)} dễ đổi hướng đột ngột; năm có lưu Quyền/Kỵ trùng cung là lúc biến động hiện ra.`, `can ${dh.canName} cung đại vận${KDT}`, "trung"));
  }
  return out.length ? [{ title: "Kinh nghiệm luận Đào Thanh Tín (bổ sung)", items: out }] : [];
}

/* ------------------------------------------------------------------ */
/* Bắc phái: Khâm Thiên Tứ hóa                                          */
/* ------------------------------------------------------------------ */

const TT = "Tâm Thành";
const MP = "Minh Phương";
const LY = "Tử vi lý số";
const src = (...k: string[]) => ` · ${k.join(", ")}`;

/** Ngã cung: Mệnh, Tài, Quan, Điền, Tật, Phúc; còn lại là tha cung */
const NGA: CungChuc[] = ["Mệnh", "Tài Bạch", "Quan Lộc", "Điền Trạch", "Tật Ách", "Phúc Đức"];
const DONG_TO: Record<string, string> = { Lộc: "Kỵ", Kỵ: "Lộc", Quyền: "Khoa", Khoa: "Quyền" };
const NAM_TINH = ["Thiên Cơ", "Thái Dương", "Thiên Đồng", "Thiên Phủ", "Tham Lang", "Thiên Tướng", "Thiên Lương", "Thất Sát", "Văn Xương", "Tả Phù"];
const NU_TINH = ["Tử Vi", "Vũ Khúc", "Phá Quân", "Thái Âm", "Cự Môn", "Văn Khúc", "Hữu Bật"];
/** Số thứ tự cung theo vòng Khâm Thiên (Mệnh 1, Huynh 2, Phu 3 … Phụ 12) */
const so = (c: TuViChart, chi: number) => m12(c.menhChi - chi) + 1;

/** Tự hóa của một cung: ly tâm (sao trong cung) và hướng tâm (sao ở cung đối) */
const lyTam = (p: TuViPalace) => phat(p).filter((h) => h.self);
const huongTam = (p: TuViPalace) => phat(p).filter((h) => h.toChi === m12(p.chi + 6));

const LAI_NHAN: Record<CungChuc, string> = {
  Mệnh: "bản thân là gốc: đời do mình tự quyết, tự gánh",
  "Huynh Đệ": "anh em, người cùng làm và sự tích lũy là gốc rễ",
  "Phu Thê": "hôn nhân, người bạn đời là chủ đề lớn của đời",
  "Tử Tức": "con cái, cấp dưới, việc hợp tác là chủ đề lớn",
  "Tài Bạch": "đời xoay quanh việc kiếm tiền, quản lý tiền",
  "Tật Ách": "thân thể, nơi làm việc là điều phải chăm lo nhiều",
  "Thiên Di": "ra ngoài, xã hội là nơi tạo nên vận số",
  "Nô Bộc": "bạn bè, khách hàng, quan hệ xã hội là gốc rễ",
  "Quan Lộc": "công việc, sự nghiệp là gốc rễ của đời",
  "Điền Trạch": "nhà cửa, gia đình, của để dành là chủ đề lớn",
  "Phúc Đức": "tinh thần, sở thích, phúc phần dòng họ là gốc rễ",
  "Phụ Mẫu": "cha mẹ, cấp trên, giấy tờ là gốc rễ",
};

export function luanKhamThien(c: TuViChart): Phan[] {
  const menh = cung(c, "Mệnh");
  const out: Y[] = [];
  const nsKy = kyNamSinh(c);
  const nsLoc = locNamSinh(c);

  // C9. Lai nhân cung
  const can = yearCan(c);
  const ln = c.palaces.find((p) => p.canName === can && p.chi > 1);
  if (ln) {
    const t = tenCung(c, ln.chi);
    out.push(y(`Lai nhân cung ở ${t}: ${LAI_NHAN[t]}; ${so(c, ln.chi) % 2 ? "cung lẻ, thiên về tự lập" : "cung chẵn, thiên về nhờ người"}.`, `cung can ${can} trùng can năm sinh${src(TT, MP, LY)}`));
  }

  // C1, C10. Tự hóa ly tâm / hướng tâm ở Mệnh
  const Y_LY: Record<string, string> = { Lộc: "dễ cho đi, tiêu cho mình mà không giữ", Quyền: "quyết đoán nhưng sức bền kém", Khoa: "giữ thể diện, ít tranh", Kỵ: "hay buông, né tránh, thích tự do" };
  const Y_HT: Record<string, string> = { Lộc: "chủ động tìm lợi bên ngoài, giỏi giao tế", Quyền: "muốn khẳng định mình ngoài xã hội", Khoa: "muốn được ghi nhận, có tiếng", Kỵ: "chủ động lao vào việc khó, gánh trách nhiệm; dễ dính thị phi bên ngoài" };
  for (const h of lyTam(menh)) out.push(y(`Mệnh tự hóa ${h.mutagen} ly tâm: ${Y_LY[h.mutagen]}. Ảnh hưởng lan sang Thiên Di, Tật Ách, Tài Bạch, Quan Lộc.`, `can ${menh.canName} hóa ${h.mutagen} ${h.star} ngay trong Mệnh${src(TT, LY)}`, h.mutagen === "Kỵ" ? "trung" : undefined));
  for (const h of huongTam(menh)) out.push(y(`Mệnh hóa ${h.mutagen} hướng tâm: ${Y_HT[h.mutagen]}.`, `can ${menh.canName} hóa ${h.mutagen} ${h.star} ở Thiên Di${src(TT, LY)}`, h.mutagen === "Kỵ" ? "trung" : "tot"));

  // C5. Niên hóa gặp tự hóa ly tâm cùng cung
  for (const p of (["Mệnh", "Tài Bạch", "Quan Lộc", "Phu Thê", "Điền Trạch"] as CungChuc[]).map((t) => cung(c, t))) {
    const ly = lyTam(p);
    if (!ly.length) continue;
    const t = tenCung(c, p.chi);
    for (const m of ["Lộc", "Quyền", "Khoa", "Kỵ"]) {
      if (!hoaIn(p, m).length) continue;
      for (const h of ly) {
        let txt = "";
        if (h.mutagen === m) txt = `niên ${m} gặp ly tâm ${m}: cái có sẵn hao dần`;
        else if (DONG_TO[m] === h.mutagen) {
          if (m === "Kỵ") txt = "niên Kỵ gặp ly tâm Lộc: vướng mắc thường được giải bằng tiền — nhanh nhưng hao";
          else if (m === "Lộc") txt = "niên Lộc gặp ly tâm Kỵ: cái lợi biến thành phiền não";
          else if (m === "Quyền") txt = "niên Quyền gặp ly tâm Khoa: có sức làm nhưng thiếu kế hoạch";
          else txt = "niên Khoa gặp ly tâm Quyền: có kế hoạch nhưng hành động thiếu bền";
        } else continue;
        out.push(y(`${t}: ${txt}.`, `niên ${m} ${hoaIn(p, m)}, can ${p.canName} tự hóa ${h.mutagen} ${h.star}${src(TT)}`, "trung"));
      }
    }
  }

  // C6. Phản bối với Mệnh; C7. Xuyến liên
  const tuHoa = c.palaces.flatMap((p) => [
    ...lyTam(p).map((h) => ({ chi: p.chi, m: h.mutagen, kieu: "ly tâm" })),
    ...huongTam(p).map((h) => ({ chi: p.chi, m: h.mutagen, kieu: "hướng tâm" })),
  ]);
  for (const a of tuHoa.filter((x) => x.chi === menh.chi))
    for (const b of tuHoa.filter((x) => x.chi !== menh.chi && x.m === a.m && x.kieu !== a.kieu))
      out.push(y(`Mệnh và ${tenCung(c, b.chi)} "phản bối": cùng tự hóa ${a.m} nhưng một ly tâm, một hướng tâm — suy nghĩ của mình và chuyện ${tenCung(c, b.chi)} hay ngược chiều nhau.`, `Mệnh ${a.kieu} ${a.m}, ${tenCung(c, b.chi)} ${b.kieu} ${b.m}${src(LY, TT)}`, "trung"));
  for (const m of ["Lộc", "Quyền", "Khoa", "Kỵ"])
    for (const kieu of ["ly tâm", "hướng tâm"]) {
      const g = tuHoa.filter((x) => x.m === m && x.kieu === kieu).map((x) => tenCung(c, x.chi));
      if (g.length >= 3) out.push(y(`Xuyến liên ${kieu} ${m}: ${g.join(", ")} cùng một xu hướng; gặp vận kích hoạt thì các mảng này dồn lực vào một hướng.`, `tự hóa ${kieu} ${m} ở ${g.length} cung${src(LY, TT)}`, "trung"));
    }

  // C2. Ngã cung / tha cung của niên Quyền, Kỵ
  const qP = c.palaces.find((x) => hoaIn(x, "Quyền").length);
  const kP = c.palaces.find((x) => hoaIn(x, "Kỵ").length);
  if (qP && kP && !NGA.includes(tenCung(c, qP.chi)) && !NGA.includes(tenCung(c, kP.chi)))
    out.push(y(`Niên Quyền (${tenCung(c, qP.chi)}) và niên Kỵ (${tenCung(c, kP.chi)}) đều ở tha cung: muốn thành việc lớn thường phải nhờ người, đi qua người khác.`, `${hoaIn(qP, "Quyền")} Quyền, ${hoaIn(kP, "Kỵ")} Kỵ${src(TT, LY)}`, "trung"));

  // C11. Nam tinh / nữ tinh: niên hóa vào Phụ Mẫu, Phu Thê
  const gioi = (s: { name: string; mutagen?: string | null }) =>
    s.name === "Liêm Trinh" ? (s.mutagen === "Lộc" ? "nam" : s.mutagen === "Kỵ" ? "nu" : "") : NAM_TINH.includes(s.name) ? "nam" : NU_TINH.includes(s.name) ? "nu" : "";
  for (const [ten, nam, nu] of [["Phụ Mẫu", "cha", "mẹ"], ["Phu Thê", "người chồng (hoặc bạn đời nam)", "người vợ (hoặc bạn đời nữ)"]] as const)
    for (const s of [...cung(c, ten).majorStars, ...cung(c, ten).minorStars].filter((x) => x.mutagen)) {
      const g = gioi(s);
      if (g) out.push(y(`Niên ${s.mutagen} ở ${ten} rơi vào ${g === "nam" ? "nam tinh" : "nữ tinh"} (${s.name}): chuyện ${ten} ứng nhiều vào ${g === "nam" ? nam : nu}.`, `${s.name} hóa ${s.mutagen}${src(TT)}`));
    }

  // C3. Lộc chuyển Kỵ (từ Mệnh, Tài, Quan)
  const NGA4 = ["Mệnh", "Tài Bạch", "Quan Lộc", "Điền Trạch"];
  for (const a of ["Mệnh"] as CungChuc[]) {
    const pa = cung(c, a);
    for (const h of phat(pa)) {
      if (h.mutagen !== "Lộc" || h.self || h.toChi === null) continue;
      const pb = at(c, h.toChi);
      const k = phat(pb).find((x) => x.mutagen === "Kỵ" && x.toChi !== null);
      if (!k) continue;
      const dich = k.self ? tenCung(c, pb.chi) : tenCung(c, k.toChi as number);
      if (!NGA4.includes(dich)) continue;
      out.push(y(`Lộc chuyển Kỵ: ${a} phi Lộc vào ${tenCung(c, pb.chi)}, rồi ${tenCung(c, pb.chi)} phi Kỵ ${k.self ? "ngay tại chỗ" : `vào ${dich}`} — đầu vui sau hao; cái giá cuối cùng rơi vào ${dich}.`, `can ${pa.canName} Lộc ${h.star} → can ${pb.canName} Kỵ ${k.star}${src(MP, TT)}`, "trung"));
    }
  }

  // C4. Phi Kỵ từ cung khác vào Tài, Quan (ngoài các trường hợp đã luận)
  const KY_VAO: Partial<Record<CungChuc, string>> = { "Tài Bạch": "tiền bạc hay bị kéo vào chuyện của", "Quan Lộc": "công việc hay bị vướng vì" };
  const THA_GAN: CungChuc[] = ["Phu Thê", "Huynh Đệ", "Nô Bộc"];
  for (const b of ["Tài Bạch", "Quan Lộc"] as CungChuc[]) {
    const pb = cung(c, b);
    const tu = THA_GAN.map((t) => cung(c, t)).filter((p) => phat(p).some((h) => h.mutagen === "Kỵ" && h.toChi === pb.chi));
    if (tu.length) out.push(y(`${tu.map((p) => tenCung(c, p.chi)).join(", ")} phi Kỵ vào ${b}: ${KY_VAO[b]} ${tu.map((p) => tenCung(c, p.chi)).join(", ")}; đồng thời xung ${tenCung(c, pb.chi + 6)}.`, `phi Kỵ vào ${b}${src(TT, MP)}`, "xau"));
  }

  // C13. Song Kỵ
  for (const t of ["Mệnh", "Tài Bạch", "Quan Lộc"] as CungChuc[]) {
    const p = cung(c, t);
    if (!lyTam(p).some((h) => h.mutagen === "Kỵ")) continue;
    const vao = c.palaces.filter((q) => q.chi !== p.chi && phat(q).some((h) => h.mutagen === "Kỵ" && h.toChi === p.chi));
    if (vao.length) out.push(y(`${t} tự hóa Kỵ lại bị ${vao.map((q) => tenCung(c, q.chi)).join(", ")} phi Kỵ vào ("song Kỵ"): áp lực ở ${t} kéo dài; các vận đi qua cung này dễ bị động.`, `${t} can ${p.canName}${src(MP)}`, "xau"));
  }

  // C8, C12, K6. Vận hạn
  const v = c.vanHan;
  if (v) {
    const vh: [number, string, string][] = [];
    if (v.daiHan) {
      const dh = at(c, v.daiHan.chi);
      for (const h of phat(dh)) {
        if (h.toChi === null) continue;
        if (h.mutagen === "Lộc" && nsKy.includes(h.toChi)) vh.push([h.toChi, "Lộc đại vận nhập cung có Kỵ năm sinh", "đảo cực: vướng mắc cũ của cung này có dịp xoay chuyển thành lợi"]);
        if (h.mutagen === "Kỵ" && nsLoc.includes(h.toChi)) vh.push([h.toChi, "Kỵ đại vận nhập cung có Lộc năm sinh", "đảo cực: cái lợi sẵn có của cung này trong 10 năm dễ quay thành phiền"]);
      }
      if (v.daiHan.chi === v.luuThaiTue.chi) out.push(y(`Năm ${v.year}: Mệnh lưu niên trùng Mệnh đại vận — tốt xấu của năm đều nhân đôi.`, `cung ${CHI[v.daiHan.chi]}${src(MP)}`, "trung"));
    }
    for (const h of v.luuTuHoa) {
      if (h.chi === null) continue;
      if (h.mutagen === "Lộc" && nsKy.includes(h.chi)) vh.push([h.chi, "Lộc lưu niên nhập cung có Kỵ năm sinh", "đảo cực trong năm: việc vướng có cơ gỡ"]);
      if (h.mutagen === "Kỵ" && nsLoc.includes(h.chi)) vh.push([h.chi, "Kỵ lưu niên nhập cung có Lộc năm sinh", "đảo cực trong năm: lợi cũ dễ thành phiền"]);
      if (h.mutagen === "Kỵ" && m12(h.chi + 6) === menh.chi) out.push(y(`Năm ${v.year}: Kỵ lưu niên xung thẳng Mệnh gốc — năm áp lực nhất của vòng; nên làm chậm mà chắc.`, `lưu ${h.star} Kỵ ở ${tenCung(c, h.chi)}${src(MP)}`, "xau"));
    }
    for (const [chi, cc, t] of vh) out.push(y(`${tenCung(c, chi)}: ${t}.`, `${cc}${src(TT)}`, "trung"));
    // K6. Lưu niên theo can cung (Khâm Thiên) song song với can năm
    const lp = at(c, v.luuThaiTue.chi);
    const k = phat(lp).find((h) => h.mutagen === "Kỵ" && h.toChi !== null);
    if (k) out.push(y(`Theo Khâm Thiên (dùng can cung, không dùng can năm): cung lưu niên ${tenCung(c, lp.chi)} (can ${lp.canName}) phi Kỵ vào ${tenCung(c, k.toChi as number)} — năm ${v.year} cần để ý chuyện ${tenCung(c, k.toChi as number)}.`, `can ${lp.canName} hóa Kỵ ${k.star}${src(MP)}`, "trung"));
  }

  return out.length ? [{ title: "Khâm Thiên Tứ hóa (Tâm Thành, Minh Phương, Tử vi lý số)", items: out }] : [];
}
