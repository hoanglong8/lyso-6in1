/**
 * Luận bổ sung đợt 3 cho phái Việt Nam – Thiên Lương, rút từ bản chép lời video (11/2026):
 * - "Tử Vi Nam Phái Lê Quang Lăng" (thêm 38 video) — LQL
 * - "Tử Vi Phong Thủy Tâm Linh" (loạt "Học xem Tử vi", 27 video) — PT
 * - "Đông Phương Đạo Quán" (24 video) — ĐP
 * Viết lại bằng lời riêng; ưu tiên quy tắc nhiều kênh cùng nói. Danh sách duyệt: docs/tuvi-quy-tac-video.md (đợt 3).
 */
import { CHI } from "@lyso/calendar-vn";
import type { TuViChart, TuViPalace } from "@lyso/engine-tuvi";
import type { Phan, Y } from "./types";
import { CUNG_Y } from "./tuvi-data";
import { CUNG_CHUC } from "./tuvi-video";

export const NGUON_VIDEO_PT = 'Kinh nghiệm luận của kênh YouTube "Tử Vi Phong Thủy Tâm Linh" (rút từ 27 video, viết lại; chưa đối chiếu sách)';
export const NGUON_VIDEO_DP = 'Kinh nghiệm luận của kênh YouTube "Đông Phương Đạo Quán" (rút từ 24 video, viết lại; chưa đối chiếu sách)';

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
const lv = (p: TuViPalace) => CUNG_Y[p.name] ?? p.name;
const y = (text: string, canCu: string, tone?: Y["tone"]): Y => ({ text, canCu, tone });
const LQL = " · Lê Quang Lăng", PT = " · Phong Thủy Tâm Linh", DP = " · Đông Phương Đạo Quán", HQ = " · Học Quán";

const SANG = new Set(["Miếu", "Vượng", "Đắc"]);
const TOI = new Set(["Hãm", "Bất"]);
const SINH: Record<string, string> = { Mộc: "Hỏa", Hỏa: "Thổ", Thổ: "Kim", Kim: "Thủy", Thủy: "Mộc" };
const KHAC: Record<string, string> = { Mộc: "Thổ", Thổ: "Thủy", Thủy: "Hỏa", Hỏa: "Kim", Kim: "Mộc" };
/** Hành của cung theo địa chi */
const hanhCung = (chi: number) => ["Thủy", "Thổ", "Mộc", "Mộc", "Thổ", "Hỏa", "Hỏa", "Thổ", "Kim", "Kim", "Thổ", "Thủy"][m12(chi)] as string;
const hanhOf = (s?: string) => ["Kim", "Mộc", "Thủy", "Hỏa", "Thổ"].find((h) => s?.includes(h));
const TU_MO = [1, 4, 7, 10];
const NHOM: Record<string, string[]> = {
  "Sát Phá Liêm Tham": ["Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang"],
  "Tử Phủ Vũ Tướng": ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng"],
  "Cự Nhật": ["Cự Môn", "Thái Dương"],
  "Cơ Nguyệt Đồng Lương": ["Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương"],
};
const nhomOf = (stars: string[]) => Object.keys(NHOM).find((k) => stars.some((s) => NHOM[k]!.includes(s)));
const sang = (p: TuViPalace, star: string) => { const b = p.majorStars.find((s) => s.name === star)?.brightness; return b ? SANG.has(b) : false; };
const toi = (p: TuViPalace, star: string) => { const b = p.majorStars.find((s) => s.name === star)?.brightness; return b ? TOI.has(b) : false; };

/* ---------------- Khung lá số ---------------- */
function khung(c: TuViChart): Y[] {
  const out: Y[] = [];
  const menh = cung(c, "Mệnh");
  // S1 tứ địa
  const tuDia = [2, 5, 8, 11].includes(menh.chi) ? ["tứ sinh", "hay thay đổi, chịu đổi mới thì phát"] : [0, 3, 6, 9].includes(menh.chi) ? ["tứ bại (tứ chính)", "đa tài, đa đoan, giàu cảm xúc"] : ["tứ mộ", "bảo thủ, giữ của, hay lập nghiệp xa quê"];
  out.push(y(`Mệnh ở ${menh.chiName} thuộc ${tuDia[0]}: ${tuDia[1]}.`, `Mệnh ${menh.chiName}${PT}`));
  // T1 bốn nhóm vòng Thái Tuế
  const nam = CHI.indexOf(c.yearName.split(" ")[1] as (typeof CHI)[number]);
  if (nam >= 0) {
    const g = m12(c.menhChi - nam) % 4;
    const G: [string, string, Y["tone"]][] = [
      ["chính phái (Thái Tuế, Quan Phù, Bạch Hổ)", "chính trực, có đảm lược, hay đứng ra gánh việc và bênh lẽ phải; dễ bị phiền vì can dự chuyện người khác nhưng được nể", "tot"],
      ["thiên tả (Thiếu Dương, Tử Phù, Phúc Đức)", "lanh lợi, sáng suốt, biết tính toán; cần tu đức mới bền", "trung"],
      ["tả phái (Tang Môn, Tuế Phá, Điếu Khách)", "hay bất mãn, than vãn, nhiều nghịch cảnh; có nghị lực thì vượt được", "trung"],
      ["thiên hữu (Thiếu Âm, Long Đức, Trực Phù)", "hiền, nhẫn nhịn, không thích hơn thua; đôi khi thiếu quyết đoán", "trung"],
    ];
    const [ten, y_, tone] = G[g]!;
    out.push(y(`Mệnh thuộc nhóm ${ten} của vòng Thái Tuế: ${y_}.`, `Mệnh ${menh.chiName}, tuổi ${CHI[nam]}${PT}${DP}`, tone));
  }
  // S13 Thân cư Mệnh / Phu Thê
  const thanTen = tenCung(c, c.thanChi);
  if (thanTen === "Mệnh") out.push(y("Mệnh Thân đồng cung: tự quyết, chủ động, nghĩ gì làm nấy; tốt xấu dồn cả vào cung Mệnh. Mặt trái là dễ bảo thủ, khó đổi ý (389 TỬ VI).", `Thân tại Mệnh${PT}`));
  if (thanTen === "Phu Thê") out.push(y("Thân cư Phu Thê: nặng gia đình, bạn đời ảnh hưởng lớn đến đường đời.", `Thân tại Phu Thê${PT}`));
  // S3 nhị hợp (cặp Tý-Sửu, Dần-Hợi, Mão-Tuất, Thìn-Dậu, Tỵ-Thân, Ngọ-Mùi: tổng chi = 1 mod 12)
  const nh = at(c, 1 - c.menhChi);
  const hM = ({ 0: "Thủy", 1: "Kim", 2: "Hỏa", 3: "Mộc" } as Record<number, string>)[c.menhChi % 4]!;
  const hN = ({ 0: "Thủy", 1: "Kim", 2: "Hỏa", 3: "Mộc" } as Record<number, string>)[nh.chi % 4]!;
  if (SINH[hM] === hN) out.push(y(`Mệnh sinh cho cung nhị hợp ${nh.name}: hay hao tâm sức vì ${lv(nh)}.`, `Mệnh ${menh.chiName} nhị hợp ${nh.chiName}${DP}`, "trung"));
  else if (SINH[hN] === hM) out.push(y(`Cung nhị hợp ${nh.name} sinh cho Mệnh: được nhờ ở ${lv(nh)}.`, `Mệnh ${menh.chiName} nhị hợp ${nh.chiName}${DP}`, "tot"));
  return out;
}

/* ---------------- Sát tinh, Tuần Triệt, Không ---------------- */
function satTuanTriet(c: TuViChart): Y[] {
  const out: Y[] = [];
  const menh = cung(c, "Mệnh");
  const tc = hoiNames(c, c.menhChi);
  const mm = major(menh).length ? major(menh) : major(cung(c, "Thiên Di"));
  // D2 sát tinh theo cặp và chính tinh chế
  const CAP: [string[], string, string[]][] = [
    [["Địa Không", "Địa Kiếp"], "Không Kiếp", ["Phá Quân"]],
    [["Kình Dương", "Đà La"], "Kình Đà", ["Thất Sát", "Thiên Phủ", "Thiên Cơ"]],
    [["Hỏa Tinh", "Linh Tinh"], "Hỏa Linh", ["Tham Lang", "Tử Vi", "Thiên Phủ", "Thiên Cơ"]],
  ];
  for (const [cap, ten, che] of CAP) {
    if (!cap.every((s) => tc.has(s))) continue;
    const chế = mm.filter((s) => che.includes(s));
    out.push(chế.length ? y(`Cặp ${ten} hội Mệnh nhưng ${chế.join(", ")} chế được: ít sợ cặp sát này, còn biến nó thành sức bật.`, `đủ cặp ${ten} ở tam phương tứ chính${PT}${LQL}`, "trung") : y(`Cặp ${ten} hội đủ ở tam phương tứ chính Mệnh: sát tinh thành cặp mới thật sự tác oai; nên thận trọng, tránh liều lĩnh.`, `đủ cặp ${ten}${PT}`, "xau"));
  }
  // D3 Tuần Triệt: chính tinh hãm hoặc sát tinh bị Tuần/Triệt thì được che
  if ((menh.tuan || menh.triet) && (menh.majorStars.some((s) => s.brightness && TOI.has(s.brightness)) || has(menh, "Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh", "Địa Không", "Địa Kiếp")))
    out.push(y(`${menh.triet ? "Triệt" : "Tuần"} ở Mệnh lại che phần xấu (sao hãm hoặc sát tinh): thành "phản vi kỳ cách", càng về sau càng vững.`, `Mệnh có ${[...menh.majorStars.filter((s) => s.brightness && TOI.has(s.brightness)).map((s) => `${s.name} ${s.brightness}`), ...found(menh, ["Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh", "Địa Không", "Địa Kiếp"])].join(", ")}${LQL}${PT}${DP}`, "tot"));
  for (const p of [menh, cung(c, "Quan Lộc")]) {
    if (!p.triet) continue;
    const ky = found(p, ["Thiên Mã", "Thiên Hình", "Thiên Tướng", "Tướng Quân", "Quốc Ấn"]);
    if (ky.length) out.push(y(`${ky.join(", ")} ở ${p.name} gặp Triệt: quyền, ấn, sức bật bị khóa; nên đi đường chuyên môn bền bỉ.`, `Triệt ở ${p.name}${PT}${LQL}`, "xau"));
  }
  if (cung(c, "Tật Ách").triet) out.push(y("Tật Ách có Triệt: được xem là tốt, bệnh tật bị chặn bớt.", `Triệt ở Tật Ách${PT}`, "tot"));
  // D4 vô chính diệu đắc tam không / tứ không
  if (!menh.majorStars.length) {
    const khong = [...new Set(tuChinh(c, c.menhChi).flatMap((p) => [...(p.tuan ? ["Tuần"] : []), ...(p.triet ? ["Triệt"] : []), ...found(p, ["Thiên Không", "Địa Không"])]))];
    if (khong.length >= 3) out.push(y(`Mệnh vô chính diệu đắc ${khong.length === 4 ? "tứ" : "tam"} không: thành cách đẹp, đường đời có nhiều chuyển biến bất ngờ theo hướng tốt.`, `tam phương có ${khong.join(", ")}${PT}${DP}`, "tot"));
    const di = cung(c, "Thiên Di");
    if ((has(di, "Thái Dương") && sang(di, "Thái Dương")) || (has(di, "Thái Âm") && sang(di, "Thái Âm"))) out.push(y("Mệnh vô chính diệu có Nhật/Nguyệt sáng chiếu: thành cách tốt, mượn sáng mà nên.", `Thiên Di có ${major(di).join(", ")}${PT}`, "tot"));
  }
  // D11 Thiên Không cư Mệnh
  if (has(menh, "Thiên Không")) {
    const che = mm.filter((s) => ["Thái Dương", "Thái Âm", "Tử Vi"].includes(s)).concat(hoaIn(menh, "Khoa").length ? ["Hóa Khoa"] : []);
    out.push(y(`Thiên Không cư Mệnh ("lưng trời gãy gánh"): dễ thành rồi bại giữa chừng; nên làm chắc từng bước.${che.length ? ` Có ${che.join(", ")} chế nên nhẹ hơn.` : ""}`, `Thiên Không ở Mệnh${PT}${DP}`, che.length ? "trung" : "xau"));
  }
  // D7 Không Kiếp theo vị trí và cung
  const kkDac = [5, 11, 2, 8];
  for (const p of c.palaces) {
    const kk = found(p, ["Địa Không", "Địa Kiếp"]);
    if (!kk.length) continue;
    const t = tenCung(c, p.chi);
    if ((t === "Mệnh" || t === "Quan Lộc" || t === "Tài Bạch") && kkDac.includes(p.chi))
      out.push(p.tuan || p.triet ? y(`${kk.join(", ")} đắc địa ở ${p.chiName} nhưng gặp ${p.tuan ? "Tuần" : "Triệt"}: luận như hãm, khó giữ thành quả.`, `ở ${t}${DP}`, "xau") : y(`${kk.join(", ")} đắc địa ở ${p.chiName} (${t}): phát nhanh nhưng cũng dễ thoái; nên tích lũy khi đang lên.`, `ở ${t}${DP}${LQL}`, "trung"));
    const KK_CUNG: Partial<Record<CungChuc, string>> = {
      "Điền Trạch": "nhà đất dễ vướng tranh chấp, khiếu nại; giấy tờ phải rõ ràng",
      "Quan Lộc": "công việc dễ biến động bất ngờ, đổi chỗ, đổi sếp",
      "Thiên Di": "ra ngoài rủi nhiều hơn may; cẩn thận đi lại, ngoại giao",
      "Phụ Mẫu": "cha mẹ vất vả, gia đình sớm phải tự lo",
    };
    if (KK_CUNG[t]) out.push(y(`Không/Kiếp ở ${t}: ${KK_CUNG[t]}.`, `${kk.join(", ")} ở ${p.chiName}${LQL}`, "xau"));
    if (t === "Mệnh") {
      const kim = mm.filter((s) => ["Tử Vi", "Thiên Phủ", "Thất Sát", "Phá Quân", "Liêm Trinh", "Tham Lang", "Thiên Tướng"].includes(s)).concat(found(p, ["Tả Phù", "Hữu Bật"]));
      if (kim.length) out.push(y(`Không/Kiếp ở Mệnh được ${kim.join(", ")} kìm: tư duy khác người thành lợi thế, hợp kỹ thuật, an ninh.`, `Mệnh có ${kk.join(", ")}${LQL}${PT}`, "trung"));
      if (mm.some((s) => ["Cự Môn", "Thái Dương", "Thái Âm"].includes(s))) out.push(y("Không/Kiếp gặp Cự Môn hoặc Nhật Nguyệt ở Mệnh: tổ hợp kỵ nhau, dễ thị phi hoặc hao tổn.", `Mệnh có ${kk.join(", ")}${LQL}`, "xau"));
    }
  }
  return out;
}

/* ---------------- Chính tinh, phụ tinh ---------------- */
function saoCung(c: TuViChart): Y[] {
  const out: Y[] = [];
  const menh = cung(c, "Mệnh");
  const mm = major(menh).length ? major(menh) : major(cung(c, "Thiên Di"));
  // D5 Nhật Nguyệt đồng cung Sửu Mùi
  const nn = c.palaces.find((p) => hasAll(p, "Thái Dương", "Thái Âm"));
  if (nn && [1, 7].includes(nn.chi)) {
    const t = tenCung(c, nn.chi);
    const doi = nn.tuan || nn.triet || hoaIn(nn, "Khoa").length || hoaIn(nn, "Lộc").length || hoaIn(nn, "Kỵ").length;
    if (t === "Mệnh" || t === "Quan Lộc") out.push(y(`Nhật Nguyệt đồng cung ở ${nn.chiName} (${t}): công danh khó lớn, hợp kinh doanh hơn khoa cử.${doi ? " Có Tuần/Triệt hoặc hóa khí đi cùng nên cục diện sáng hơn." : ""}`, `Thái Dương, Thái Âm ở ${nn.chiName}${PT}${LQL}`, doi ? "trung" : "xau"));
    else if ([c.menhChi + 4, c.menhChi + 8, c.menhChi + 6].map(m12).includes(nn.chi)) out.push(y("Nhật Nguyệt đồng cung chiếu về Mệnh: tốt hơn là đóng ngay Mệnh, được nhiều người giúp.", `Nhật Nguyệt ở ${nn.name}${PT}`, "tot"));
  }
  // D6 Nhật/Nguyệt ở Thiên Di, Quan Lộc
  const nnDi = [cung(c, "Thiên Di"), cung(c, "Quan Lộc")].filter((p) => has(p, "Thái Dương", "Thái Âm"));
  if (nnDi.length) out.push(y("Thái Dương/Thái Âm ở Thiên Di hoặc Quan Lộc: hợp làm việc với nước ngoài, người ở xa.", `${nnDi.map((p) => `${found(p, ["Thái Dương", "Thái Âm"]).join(", ")} ở ${p.name}`).join("; ")}${LQL}`, "tot"));
  // D12 Tham Vũ đồng hành
  if (TU_MO.includes(menh.chi) && mm.includes("Tham Lang") || TU_MO.includes(menh.chi) && mm.includes("Vũ Khúc")) {
    const thamP = c.palaces.find((p) => major(p).includes("Tham Lang"))!;
    const vuP = c.palaces.find((p) => major(p).includes("Vũ Khúc"))!;
    if (sang(thamP, "Tham Lang") && sang(vuP, "Vũ Khúc")) {
      const hl = ["Hỏa Tinh", "Linh Tinh"].filter((s) => hoiNames(c, c.menhChi).has(s));
      out.push(y(`Tham Vũ đồng hành ở tứ mộ, cả hai sáng: tiền tài đến muộn nhưng vững.${hl.length ? " Gặp Hỏa/Linh thì phát nhanh hơn." : ""}`, `Tham Lang ở ${thamP.chiName}, Vũ Khúc ở ${vuP.chiName}${PT}${LQL}`, "tot"));
    }
  }
  // S9 Liêm Trinh theo tổ hợp
  const lP = c.palaces.find((p) => major(p).includes("Liêm Trinh"))!;
  if (mm.includes("Liêm Trinh")) {
    const cung_ = major(lP).find((s) => s !== "Liêm Trinh");
    const L: Record<string, [string, Y["tone"]]> = { "Thiên Tướng": ["Liêm Tướng: thế đẹp nhất của Liêm Trinh, có uy tín và trách nhiệm", "tot"], "Thiên Phủ": ["Liêm Phủ: vững, giữ được của", "tot"], "Thất Sát": ["Liêm Sát: cương, vất vả mới thành", "trung"], "Phá Quân": ["Liêm Phá: vất vả nhất trong các thế của Liêm Trinh, phải bền chí", "xau"] };
    const v = cung_ ? L[cung_] : (["Liêm Trinh đơn thủ: đứng giữa, thành bại do sao hội", "trung"] as [string, Y["tone"]]);
    if (v) out.push(y(`${v[0]}.`, `Liêm Trinh ở ${lP.chiName}${LQL}`, v[1]));
  }
  // S10 Thiên Lương theo vị trí
  const tlP = c.palaces.find((p) => major(p).includes("Thiên Lương"))!;
  if (mm.includes("Thiên Lương")) {
    if ([0, 6].includes(tlP.chi)) out.push(y("Thiên Lương ở Tý/Ngọ: cách cao, nhất là khi cung Thân tốt; có tiếng nói, được trọng.", `Thiên Lương ở ${tlP.chiName}${LQL}`, "tot"));
    if ([5, 11].includes(tlP.chi)) out.push(y("Thiên Lương ở Tỵ/Hợi: thế kém nhất của Thiên Lương, hay lang bạt, phải tự giữ mình.", `Thiên Lương ở ${tlP.chiName}${LQL}`, "trung"));
    if ([4, 10].includes(tlP.chi) && major(tlP).includes("Thiên Cơ")) out.push(y("Cơ Lương ở Thìn/Tuất: có tài mưu lược nhưng bị Thiên La/Địa Võng kìm, phát chậm. Thầy 389 lại thấy thế này hay thành danh ngay gần quê.", `Thiên Cơ, Thiên Lương ở ${tlP.chiName}${LQL} · 389 TỬ VI (ý thành danh gần quê)`, "trung"));
  }
  // S11 Cự Môn thế đẹp
  const cmP = c.palaces.find((p) => major(p).includes("Cự Môn"))!;
  if (mm.includes("Cự Môn")) {
    if (major(cmP).includes("Thiên Cơ") && [3, 9].includes(cmP.chi)) out.push(y("Cự Cơ ở Mão/Dậu: thế đẹp, giỏi lý luận, hợp nghề dùng lời và trí.", `Cự Môn, Thiên Cơ ở ${cmP.chiName}${LQL}${HQ}`, "tot"));
    if (major(cmP).includes("Thái Dương") && [2, 8].includes(cmP.chi)) out.push(y("Cự Nhật ở Dần/Thân: thế đẹp, danh tiếng nhờ lời nói; ở Dần tốt hơn Thân.", `Cự Môn, Thái Dương ở ${cmP.chiName}${LQL}${HQ}`, "tot"));
    if (cmP.tuan || cmP.triet) out.push(y("Cự Môn gặp Tuần/Triệt: bớt thị phi, lời nói được kiểm soát.", `Cự Môn ở ${cmP.chiName}${LQL}`, "tot"));
  }
  // D8 Đào Hoa / Hồng Loan theo cung
  const DAO: Partial<Record<CungChuc, string>> = {
    "Quan Lộc": "thế đẹp nhất của Đào Hoa: sớm có việc, có danh; hợp nghệ thuật, truyền thông",
    "Thiên Di": "ra ngoài được quý mến, quan hệ rộng (quý hơn Đào Hoa ở Mệnh)",
    "Tài Bạch": "dễ kiếm tiền khi còn trẻ, hay hợp tác với người khác giới",
    "Điền Trạch": "sớm có nhà cửa, nhà gọn đẹp",
  };
  const daoP = c.palaces.find((p) => has(p, "Đào Hoa"));
  if (daoP) {
    const t = tenCung(c, daoP.chi);
    if (DAO[t]) out.push(y(`Đào Hoa ở ${t}: ${DAO[t]}.`, `Đào Hoa ở ${daoP.chiName}${LQL}${PT}`, "tot"));
    const pha = found(daoP, ["Thiên Hình", "Địa Không", "Địa Kiếp", "Hỏa Tinh", "Linh Tinh"]).concat(hoaIn(daoP, "Kỵ").map((s) => `${s} hóa Kỵ`));
    if (pha.length && (t === "Mệnh" || t === "Quan Lộc" || t === "Phu Thê")) out.push(y(`Đào Hoa gặp ${pha.join(", ")}: duyên dễ thành nợ, việc vì tình mà lỡ; nên giữ chừng mực.`, `Đào Hoa ở ${t}${LQL}`, "xau"));
    if (t === "Quan Lộc" && has(cung(c, "Tài Bạch"), "Hồng Loan")) out.push(y("Đào Hoa ở Quan Lộc, Hồng Loan ở Tài Bạch: cách đẹp, danh và lợi cùng đến.", `Đào Hoa, Hồng Loan${LQL}`, "tot"));
  }
  // S2 Thiên Mã so với bản mệnh
  const maP = c.palaces.find((p) => has(p, "Thiên Mã"));
  const bm = hanhOf(c.banMenh);
  if (maP && bm) {
    const hm = hanhCung(maP.chi);
    const r = hm === bm ? ["cùng hành với bản mệnh: đi lại thuận", "tot"] : SINH[hm] === bm ? ["sinh cho bản mệnh: đi xa có lợi, xe cộ an toàn", "tot"] : SINH[bm] === hm ? ["được bản mệnh sinh: đi nhiều mà vất vả, dễ mất đồ khi đi", "trung"] : KHAC[hm] === bm ? ["khắc bản mệnh: nên cẩn thận xe cộ, đi lại", "xau"] : ["bị bản mệnh khắc: đi lại hay hao tốn, xe cộ hay hỏng", "trung"];
    out.push(y(`Thiên Mã (${hm}) ${r[0]}.`, `Thiên Mã ở ${maP.chiName}, bản mệnh ${c.banMenh}${DP}`, r[1] as Y["tone"]));
  }
  // S4 Cô Quả theo cung
  for (const ten of ["Quan Lộc", "Tài Bạch"] as CungChuc[]) {
    const p = cung(c, ten);
    const cq = found(p, ["Cô Thần", "Quả Tú"]);
    if (cq.length && found(p, ["Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt", "Văn Xương", "Văn Khúc", "Lộc Tồn"]).length < 2) out.push(y(`${cq.join(", ")} ở ${ten}: ${ten === "Tài Bạch" ? "giữ của, chi tiêu tính toán; tiền đến chậm (thầy 389: giữ tiền chắc)" : "làm việc đơn độc, ít người đỡ"}.`, `${cq.join(", ")} ở ${ten}${DP}`, "trung"));
  }
  if (has(menh, "Cô Thần", "Quả Tú") && has(menh, "Đào Hoa")) out.push(y("Cô Thần/Quả Tú cùng Đào Hoa ở Mệnh: tình cảm khó trọn, hay một mình gánh vác.", `Mệnh có ${found(menh, ["Cô Thần", "Quả Tú", "Đào Hoa"]).join(", ")}${DP}`, "trung"));
  // S5 Quang Quý đủ bộ ở tứ mộ
  for (const p of c.palaces) if (hasAll(p, "Ân Quang", "Thiên Quý") && TU_MO.includes(p.chi) && (p.chi === menh.chi || p.name === "Quan Lộc" || p.name === "Tật Ách"))
    out.push(y(`Ân Quang, Thiên Quý đủ bộ ở ${p.chiName} (${p.name}): giải sát tinh rất mạnh, hay được quý nhân.`, `ở ${p.name}${DP}`, "tot"));
  // S6 Song Hao
  for (const p of c.palaces) if (hasAll(p, "Đại Hao", "Tiểu Hao") || (has(p, "Đại Hao", "Tiểu Hao") && (p.chi === menh.chi || p.name === "Tài Bạch"))) {
    if ([2, 8, 3, 9].includes(p.chi) && !(p.tuan || p.triet)) out.push(y(`Hao tinh đắc địa ở ${p.chiName} (${p.name}): tiêu rộng nhưng tiền vẫn quay vòng, tốt nhiều hơn xấu.`, `${found(p, ["Đại Hao", "Tiểu Hao"]).join(", ")}${LQL}`, "trung"));
    else if (p.tuan || p.triet) out.push(y(`Hao tinh ở ${p.name} gặp ${p.tuan ? "Tuần" : "Triệt"} ("hồ tù"): tiền bị kẹt, khó xoay.`, `${found(p, ["Đại Hao", "Tiểu Hao"]).join(", ")}${LQL}`, "xau"));
  }
  // S7 Giải Thần
  const gtP = c.palaces.find((p) => has(p, "Giải Thần"));
  if (gtP && ["Quan Lộc", "Phu Thê"].includes(tenCung(c, gtP.chi))) out.push(y(`Giải Thần ở ${tenCung(c, gtP.chi)}: chỗ đẹp nhất của Giải Thần, gỡ được cả Hóa Kỵ ở cung này.`, `Giải Thần ở ${gtP.chiName}${LQL}`, "tot"));
  // S8 Khôi / Việt
  if (has(menh, "Thiên Khôi")) out.push(y("Thiên Khôi ở Mệnh: thanh bạch, được quý nhân nâng đỡ trong việc vừa và nhỏ.", `Thiên Khôi ở Mệnh${LQL}`, "tot"));
  const vietP = c.palaces.find((p) => has(p, "Thiên Việt"));
  if (vietP && ["Quan Lộc", "Thiên Di"].includes(tenCung(c, vietP.chi))) {
    const nang = found(vietP, ["Thiên Hình", "Hỏa Tinh", "Linh Tinh"]);
    out.push(y(`Thiên Việt ở ${tenCung(c, vietP.chi)}: quyết liệt, hợp làm việc lớn${nang.length ? `; gặp ${nang.join(", ")} thì nóng nảy, dễ va chạm` : ""}.`, `Thiên Việt ở ${vietP.chiName}${LQL}`, nang.length ? "trung" : "tot"));
  }
  // S14 Thiên Di có Không/Kiếp — đã có trong satTuanTriet (Không/Kiếp ở Thiên Di)
  return out;
}

/* ---------------- Nhạy cảm ---------------- */
function nhayCam(c: TuViChart): Y[] {
  const out: Y[] = [];
  const hl = c.palaces.find((p) => has(p, "Hồng Loan"));
  if (hl && TU_MO.includes(hl.chi) && (tenCung(c, hl.chi) === "Mệnh" || tenCung(c, hl.chi) === "Phu Thê"))
    out.push(y("Hồng Loan (Thủy) đóng tứ mộ, bị Thổ khắc: theo thầy, duyên dễ trắc trở; nên tìm hiểu kỹ trước khi cưới.", `Hồng Loan ở ${hl.chiName} (${tenCung(c, hl.chi)})${LQL}`, "trung"));
  const tat = cung(c, "Tật Ách");
  if (has(tat, "Tham Lang")) out.push(y("Tham Lang ở Tật Ách: nên chú ý dạ dày, da dễ dị ứng; cẩn thận với vật nuôi và nước.", `Tham Lang ở Tật Ách${LQL}`, "trung"));
  const phu = cung(c, "Phu Thê");
  for (const s of ["Thái Dương", "Thái Âm"]) if (has(phu, s))
    out.push(sang(phu, s) ? y(`${s} sáng ở Phu Thê: vợ chồng hòa hợp, khá giả.`, `${s} ở Phu Thê${DP}`, "tot") : toi(phu, s) ? y(`${s} tối ở Phu Thê: hôn nhân dễ trắc trở lúc đầu, muộn mới êm.`, `${s} ở Phu Thê${DP}`, "trung") : y("", ""));
  const r = out.filter((x) => x.text);
  if (r.some((x) => x.canCu?.includes("Phu Thê"))) r.push(y("Phu Thê cần xét cùng Mệnh, Thân và Phúc Đức; một cung xấu chưa đủ để kết luận.", `nguyên tắc${DP}`));
  return r;
}

/* ---------------- Đại hạn ---------------- */
function daiHan(c: TuViChart): Y[] {
  const v = c.vanHan;
  if (!v?.daiHan) return [];
  const out: Y[] = [];
  const dh = at(c, v.daiHan.chi);
  const lb = `đại hạn ${v.daiHan.from}–${v.daiHan.to} ở ${dh.name}`;
  // D1 địa lợi: hành cung hạn so bản mệnh
  const bm = hanhOf(c.banMenh);
  if (bm) {
    const hc = hanhCung(dh.chi);
    const r = hc === bm || SINH[hc] === bm ? ["được địa lợi (hành cung hạn cùng hoặc sinh cho bản mệnh)", "tot"] : KHAC[hc] === bm ? ["thiếu địa lợi (hành cung hạn khắc bản mệnh)", "xau"] : ["địa lợi trung bình", "trung"];
    out.push(y(`10 năm này ${r[0]}.`, `cung hạn ${dh.chiName} (${hc}), bản mệnh ${c.banMenh}${PT}${DP}`, r[1] as Y["tone"]));
  }
  // D1 nhân hòa: nhóm chính tinh của hạn so với Mệnh
  const menh = cung(c, "Mệnh");
  const nM = nhomOf(major(menh).length ? major(menh) : major(cung(c, "Thiên Di")));
  const nD = nhomOf(major(dh));
  if (nM && nD) out.push(nM === nD ? y(`Đại hạn cùng nhóm chính tinh với Mệnh (${nM}): được nhân hòa, việc hợp sở trường.`, `${lb}${PT}${DP}`, "tot") : y(`Đại hạn thuộc nhóm ${nD}, khác nhóm Mệnh (${nM}): phải đổi cách làm cho hợp thời.`, `${lb}${PT}${DP}`, "trung"));
  if (nM === "Sát Phá Liêm Tham" && nD === "Sát Phá Liêm Tham") out.push(y("Mệnh và đại hạn đều Sát Phá Liêm Tham: giai đoạn nhiều biến động lớn, dễ thăng trầm; nên giữ an toàn.", `${lb}${PT}`, "trung"));
  // Thiên Lương ở đại hạn
  if (major(dh).includes("Thiên Lương")) out.push(y("Đại hạn có Thiên Lương: có quý nhân che chở, hợp đi học; để ý sức khỏe, thuốc men.", `${lb}${LQL}`, "tot"));
  // D10 Tuần Triệt gỡ nhau
  if ((menh.triet && dh.tuan) || (menh.tuan && dh.triet)) out.push(y(`Mệnh có ${menh.triet ? "Triệt" : "Tuần"}, đại hạn gặp ${dh.tuan ? "Tuần" : "Triệt"}: được gỡ, giai đoạn này nhẹ nhõm hơn.`, `${lb}${DP}${LQL}`, "tot"));
  // D11 hạn Thiên Không
  if (has(dh, "Thiên Không") && TU_MO.includes(dh.chi)) out.push(y("Đại hạn gặp Thiên Không ở tứ mộ: nên co cụm, giữ vốn, không mở rộng.", `${lb}${PT}${DP}`, "xau"));
  // D9 vòng Tràng Sinh của cung hạn
  const TS: Record<string, [string, Y["tone"]]> = { "Tràng Sinh": ["sinh khí mạnh, việc mới dễ thành", "tot"], "Lâm Quan": ["đang lên, hợp phát triển", "tot"], "Đế Vượng": ["cực thịnh, nên biết điểm dừng", "tot"], "Suy": ["sức đi xuống, nên giữ hơn mở", "trung"], "Bệnh": ["hay mệt, nên chậm lại", "trung"], "Tử": ["khí yếu, tránh liều", "xau"], "Tuyệt": ["khí yếu, tránh liều", "xau"] };
  const ts = TS[dh.truongSinh];
  if (ts) out.push(y(`Cung đại hạn ở ${dh.truongSinh}: ${ts[0]}.`, `${lb}${DP}${PT}`, ts[1]));
  // S12 Lưu Lộc / Lưu Tang theo cung
  const LOC: Partial<Record<CungChuc, string>> = { "Mệnh": "có cơ hội kiếm lớn", "Điền Trạch": "hợp mua nhà, mua xe", "Thiên Di": "làm ăn với người xa thuận", "Phúc Đức": "trong nhà có hỷ sự", "Nô Bộc": "được bạn bè giúp" };
  const TANG: Partial<Record<CungChuc, string>> = { "Điền Trạch": "không nên sửa, xây nhà; đề phòng cháy nổ", "Phu Thê": "không nên cưới vội", "Thiên Di": "đi lại cẩn thận, giữ đồ", "Phụ Mẫu": "quan tâm sức khỏe cha mẹ" };
  for (const s of v.luuStars) {
    const t = tenCung(c, s.chi);
    if (s.name === "Lưu Lộc Tồn" && LOC[t]) out.push(y(`Lưu Lộc Tồn vào ${t}: ${LOC[t]}.`, `năm ${v.year}${LQL}`, "tot"));
    if (s.name === "Lưu Tang Môn" && TANG[t]) out.push(y(`Lưu Tang Môn vào ${t}: ${TANG[t]}.`, `năm ${v.year}${LQL}`, "trung"));
  }
  return out;
}

/** Luận đợt 3 cho phái Thiên Lương */
export function luanVideoNam3(c: TuViChart): Phan[] {
  const out: Phan[] = [];
  const k = khung(c);
  if (k.length) out.push({ title: "Khung lá số (kinh nghiệm luận Phong Thủy Tâm Linh, Đông Phương Đạo Quán)", items: k });
  const s = [...satTuanTriet(c), ...saoCung(c)];
  if (s.length) out.push({ title: "Sao, Tuần Triệt, cách cục (kinh nghiệm luận Lê Quang Lăng, Phong Thủy Tâm Linh, Đông Phương Đạo Quán)", items: s });
  const n = nhayCam(c);
  if (n.length) out.push({ title: "Hôn nhân, sức khỏe (kinh nghiệm của thầy — tham khảo)", items: n });
  const d = daiHan(c);
  if (d.length) out.push({ title: `Đại hạn và năm ${c.vanHan!.year} (kinh nghiệm luận Lê Quang Lăng, Phong Thủy Tâm Linh, Đông Phương Đạo Quán)`, items: d });
  return out;
}
