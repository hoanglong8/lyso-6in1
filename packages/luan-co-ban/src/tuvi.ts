import { CHI } from "@lyso/calendar-vn";
import type { TuViChart, TuViPalace, TuViStar } from "@lyso/engine-tuvi";
import { CANH_BAO_CHUNG, type LuanCoBan, type Phan, type Y } from "./types";
import { CAT_TINH, CHINH_TINH, CUNG_Y, NGUON_TUVI, PHU_TINH, SAT_TINH } from "./tuvi-data";
import { luanVideoBac, luanVideoNam, NGUON_VIDEO_BAC, NGUON_VIDEO_NAM } from "./tuvi-video";
import { luanVideoNam2, NGUON_VIDEO_HQ, NGUON_VIDEO_LQL } from "./tuvi-video2";
import { luanVideoNam3, NGUON_VIDEO_DP, NGUON_VIDEO_PT } from "./tuvi-video3";
import { luanKhamThien, luanVideoBac2, luanVideoNam4, NGUON_KHAM_THIEN, NGUON_VIDEO_BAC2, NGUON_VIDEO_NAM4 } from "./tuvi-video4";

const SANG = new Set(["Miếu", "Vượng", "Đắc"]);
const TOI = new Set(["Hãm", "Bất"]);
const HANH = ["Kim", "Mộc", "Thủy", "Hỏa", "Thổ"];
const SINH: Record<string, string> = { Mộc: "Hỏa", Hỏa: "Thổ", Thổ: "Kim", Kim: "Thủy", Thủy: "Mộc" };
const KHAC: Record<string, string> = { Mộc: "Thổ", Thổ: "Thủy", Thủy: "Hỏa", Hỏa: "Kim", Kim: "Mộc" };

const hanhOf = (s: string | undefined) => HANH.find((h) => s?.includes(h));
const at = (c: TuViChart, chi: number) => c.palaces.find((p) => p.chi === ((chi % 12) + 12) % 12) as TuViPalace;
const starTxt = (s: TuViStar) => `${s.name}${s.brightness ? ` (${s.brightness})` : ""}${s.mutagen ? ` hóa ${s.mutagen}` : ""}`;
const allStars = (p: TuViPalace) => [...p.majorStars, ...p.minorStars, ...p.adjectiveStars];

function chinhTinhY(s: TuViStar, where: string): Y[] {
  const d = CHINH_TINH[s.name];
  if (!d) return [];
  const out: Y[] = [{ text: `${s.name} (${d.hanh}, ${d.dau}, hóa khí ${d.hoaKhi}): ${d.ban}`, canCu: `${starTxt(s)} ở ${where}` }];
  if (s.brightness && SANG.has(s.brightness)) out.push({ text: `${d.sang} ${d.manh}`, tone: "tot", canCu: `${s.name} ${s.brightness}` });
  else if (s.brightness && TOI.has(s.brightness)) out.push({ text: `${d.toi} ${d.luuY}`, tone: "xau", canCu: `${s.name} ${s.brightness}` });
  else out.push({ text: `${d.manh} Lưu ý: ${d.luuY}`, canCu: s.brightness ? `${s.name} ${s.brightness}` : undefined });
  return out;
}

function cungTomTat(c: TuViChart, p: TuViPalace): Y {
  const major = p.majorStars.map(starTxt).join(", ");
  const cat = allStars(p).filter((s) => CAT_TINH.has(s.name)).map((s) => s.name);
  const sat = allStars(p).filter((s) => SAT_TINH.has(s.name)).map((s) => s.name);
  const head = major ? `Chính tinh: ${major}.` : `Vô chính diệu — mượn sao cung đối diện (${at(c, p.chi + 6).majorStars.map((s) => s.name).join(", ") || "cũng trống"}) để xét.`;
  const first = p.majorStars[0] && CHINH_TINH[p.majorStars[0].name];
  const gist = first ? ` Xu hướng: ${(first.ban.split(":")[0] ?? first.ban).toLowerCase()}.` : "";
  const extra = [cat.length ? `cát tinh ${cat.join(", ")}` : "", sat.length ? `sát tinh ${sat.join(", ")}` : ""].filter(Boolean).join("; ");
  const sang = p.majorStars.filter((s) => s.brightness && SANG.has(s.brightness)).length;
  const toi = p.majorStars.filter((s) => s.brightness && TOI.has(s.brightness)).length;
  const score = cat.length - sat.length + sang - toi;
  const tone = score > 0 ? "tot" : score < 0 ? "xau" : "trung";
  const sangTxt = toi && !sang ? " Chính tinh hãm nên kém lực, cần nỗ lực nhiều hơn ở lĩnh vực này." : sang && !toi ? " Chính tinh sáng, phát huy tốt." : "";
  return { text: `${head}${gist}${sangTxt}${extra ? ` Có ${extra}.` : ""}`, canCu: `cung ${p.name} (${p.canName} ${p.chiName}) — ${CUNG_Y[p.name] ?? ""}`, tone };
}


const KENH = ["389", "Học Quán", "Lê Quang Lăng", "Phong Thủy", "Đông Phương", "Đào Thanh Tín", "Tâm Thành", "Minh Phương", "Tử vi lý số", "Khâm Thiên"];
/** Gắn tên nguồn vào căn cứ của từng ý (nếu căn cứ chưa nêu kênh) */
function tag(ps: Phan[], label: string): Phan[] {
  for (const p of ps)
    p.items = p.items.map((y) => (y.canCu && KENH.some((k) => y.canCu!.includes(k)) ? y : { ...y, canCu: y.canCu ? `${y.canCu} · ${label}` : label }));
  return ps;
}

const NHOM: [RegExp, string][] = [
  [/^(Thế cục chung|Khung lá số|Thân, cục)/, "Thế cục chung"],
  [/^Mệnh —/, "Mệnh: tính cách và năng lực gốc"],
  [/^(Cách cục|Chính tinh và cách cục|Sao, Tuần Triệt)/, "Chính tinh, cách cục, Tuần Triệt"],
  [/^(Tứ hóa năm sinh|Phi hóa|Khâm Thiên)/, "Tứ hóa và phi hóa"],
  [/^(Các lĩnh vực chính|Phụ tinh theo cung|Sao và cung|Kinh nghiệm luận)/, "Các cung và lĩnh vực"],
  [/^(Gia đạo|Hôn nhân)/, "Gia đạo, hôn nhân, sức khỏe"],
  [/^(Vận hạn|Xem hạn|Đại hạn và năm)/, "VAN"],
];
const THU_TU = ["Thế cục chung", "Mệnh: tính cách và năng lực gốc", "Chính tinh, cách cục, Tuần Triệt", "Các cung và lĩnh vực", "Tứ hóa và phi hóa", "Gia đạo, hôn nhân, sức khỏe", "VAN"];
const LA_VAN = /^(Năm \d{4}|Đại hạn|Đại vận|Theo Khâm Thiên)|đại vận|lưu niên|Đại hạn \d/;

/** Gom các mục nhỏ (theo kênh) thành ít nhóm; ý về vận hạn trong mục hỗn hợp chuyển sang nhóm vận hạn */
function nhomLai(phan: Phan[], vanTitle: string): Phan[] {
  const g = new Map<string, Y[]>();
  const rest: Phan[] = [];
  for (const p of phan) {
    const k = NHOM.find(([re]) => re.test(p.title))?.[1];
    if (!k) { rest.push(p); continue; }
    for (const y of p.items) {
      const key = k !== "VAN" && /^(Kinh nghiệm luận|Khâm Thiên)/.test(p.title) && LA_VAN.test(`${y.text} ${y.canCu ?? ""}`) ? "VAN" : k;
      g.set(key, [...(g.get(key) ?? []), y]);
    }
  }
  const out: Phan[] = [];
  for (const k of THU_TU) {
    const items = g.get(k);
    if (items?.length) out.push({ title: k === "VAN" ? vanTitle : k, items });
  }
  return [...out, ...rest];
}

/**
 * Luận Tử vi. Câu phú (dữ liệu lớn, ~600 KB) không nhập tĩnh ở đây để trang tải nhanh: bên gọi nạp
 * `@lyso/luan-co-ban/phu` khi cần rồi truyền kết quả `luanPhuAll(c)` vào `extra.phu`.
 */
export function luanTuVi(c: TuViChart, extra?: { phu?: Phan[]; nguonPhu?: string }): LuanCoBan {
  const menh = at(c, c.menhChi);
  const than = at(c, c.thanChi);
  const phan: Phan[] = [];

  // 1. Mệnh
  const menhItems: Y[] = [];
  if (menh.majorStars.length) for (const s of menh.majorStars) menhItems.push(...chinhTinhY(s, "Mệnh"));
  else {
    const di = at(c, c.menhChi + 6);
    menhItems.push({
      text: "Mệnh vô chính diệu: tính cách dễ chịu ảnh hưởng hoàn cảnh, linh hoạt nhưng thiếu điểm tựa cố định; xét theo các sao chiếu từ cung Thiên Di.",
      canCu: `Mệnh ${menh.chiName} không có chính tinh`,
    });
    for (const s of di.majorStars) menhItems.push(...chinhTinhY(s, "Thiên Di (chiếu về Mệnh)"));
  }
  if (menh.tuan || menh.triet)
    menhItems.push({ text: "Mệnh gặp Tuần/Triệt: thuở nhỏ hoặc giai đoạn đầu dễ gặp cản trở, cái tốt và cái xấu đều bị giảm bớt; thường thuận hơn về sau.", canCu: `${menh.tuan ? "Tuần" : ""}${menh.triet ? " Triệt" : ""} ở Mệnh` });
  phan.push({ title: "Mệnh — tính cách và năng lực gốc", items: menhItems });

  // 2. Tam phương tứ chính
  const tp = [c.menhChi, c.menhChi + 4, c.menhChi + 8, c.menhChi + 6].map((x) => at(c, x));
  const stars = tp.flatMap(allStars);
  const cat = [...new Set(stars.filter((s) => CAT_TINH.has(s.name)).map((s) => s.name))];
  const sat = [...new Set(stars.filter((s) => SAT_TINH.has(s.name)).map((s) => s.name))];
  const tpItems: Y[] = [
    {
      text:
        cat.length >= sat.length + 2
          ? "Cát tinh hội nhiều hơn sát tinh: hoàn cảnh thuận, dễ được người giúp; nên tận dụng quan hệ và học vấn."
          : sat.length >= cat.length + 2
            ? "Sát tinh hội nhiều hơn cát tinh: đời nhiều thử thách, phải tự lực; hợp việc đòi hỏi bản lĩnh, nên chú trọng an toàn và kỷ luật."
            : "Cát và sát tinh tương đối cân bằng: thành bại phụ thuộc nhiều vào lựa chọn và nỗ lực của bản thân.",
      canCu: `Tam phương tứ chính (Mệnh, Quan Lộc, Tài Bạch, Thiên Di): cát ${cat.join(", ") || "—"}; sát ${sat.join(", ") || "—"}`,
      tone: cat.length >= sat.length + 2 ? "tot" : sat.length >= cat.length + 2 ? "xau" : "trung",
    },
  ];
  for (const name of ["Tả Phù", "Hữu Bật", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Lộc Tồn", "Thiên Mã", "Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh", "Địa Không", "Địa Kiếp"])
    if (allStars(menh).some((s) => s.name === name)) tpItems.push({ text: PHU_TINH[name]!.y, canCu: `${name} ở Mệnh`, tone: PHU_TINH[name]!.nhom === "cat" ? "tot" : PHU_TINH[name]!.nhom === "sat" ? "xau" : "trung" });
  phan.push({ title: "Thế cục chung (tam phương tứ chính)", items: tpItems });

  // 3. Tứ hóa năm sinh
  const hoa: Y[] = [];
  for (const p of c.palaces)
    for (const s of [...p.majorStars, ...p.minorStars])
      if (s.mutagen) {
        const key = `Hóa ${s.mutagen}`;
        hoa.push({ text: `${PHU_TINH[key]?.y ?? ""} Lĩnh vực: ${CUNG_Y[p.name] ?? p.name}.`, canCu: `${s.name} hóa ${s.mutagen} ở ${p.name}`, tone: s.mutagen === "Kỵ" ? "xau" : "tot" });
      }
  if (hoa.length) phan.push({ title: "Tứ hóa năm sinh", items: hoa });

  // 4. Thân, cục, bản mệnh
  const nen: Y[] = [
    { text: `Thân cư ${than.name}: từ trung niên, ${CUNG_Y[than.name] ?? than.name} là nơi bạn đặt nhiều tâm sức và chịu ảnh hưởng rõ nhất.`, canCu: `Thân tại ${CHI[c.thanChi]} (${than.name})` },
  ];
  const cucH = hanhOf(c.cuc);
  const menhH = hanhOf(c.banMenh);
  if (cucH && menhH) {
    const rel =
      cucH === menhH ? ["Cục và mệnh cùng hành: bình hòa, nội lực và hoàn cảnh tương hợp.", "trung"]
      : SINH[cucH] === menhH ? ["Cục sinh mệnh: hoàn cảnh nâng đỡ bản thân, thuận lợi.", "tot"]
      : SINH[menhH] === cucH ? ["Mệnh sinh cục: bản thân phải bỏ nhiều công sức cho hoàn cảnh, thành quả đến chậm.", "trung"]
      : KHAC[menhH] === cucH ? ["Mệnh khắc cục: chủ động khống chế hoàn cảnh, vất vả nhưng làm được việc.", "trung"]
      : ["Cục khắc mệnh: hoàn cảnh tạo áp lực, nên chọn môi trường phù hợp và kiên trì.", "xau"];
    nen.push({ text: rel[0]!, canCu: `${c.cuc}, bản mệnh ${c.banMenh}`, tone: rel[1] as Y["tone"] });
  }
  phan.push({ title: "Thân, cục và bản mệnh", items: nen });

  // 5. Các cung chính
  const cung: Y[] = [];
  for (const name of ["Quan Lộc", "Tài Bạch", "Phu Thê", "Thiên Di", "Phúc Đức"]) {
    const p = c.palaces.find((x) => x.name === name);
    if (p) cung.push(cungTomTat(c, p));
  }
  phan.push({ title: "Các lĩnh vực chính", items: cung });

  // 6. Vận hạn
  if (c.vanHan) {
    const v = c.vanHan;
    const items: Y[] = [];
    if (v.daiHan) {
      const p = at(c, v.daiHan.chi);
      items.push({ ...cungTomTat(c, p), canCu: `Đại hạn ${v.daiHan.from}–${v.daiHan.to} tuổi tại cung ${p.name}` });
    }
    const th = at(c, v.tieuHan.chi);
    items.push({ text: `Năm ${v.year} trọng tâm rơi vào lĩnh vực ${CUNG_Y[th.name] ?? th.name}.`, canCu: `Tiểu hạn ${v.yearName} ở cung ${th.name}` });
    for (const h of v.luuTuHoa) {
      if (h.chi === null) continue;
      const p = at(c, h.chi);
      if (h.mutagen === "Lộc" || h.mutagen === "Kỵ")
        items.push({
          text: h.mutagen === "Lộc" ? `Năm nay có cơ hội, tài lộc ở lĩnh vực ${CUNG_Y[p.name] ?? p.name}.` : `Năm nay cần thận trọng với ${CUNG_Y[p.name] ?? p.name}: dễ vướng mắc, lo nghĩ.`,
          canCu: `Lưu ${h.star} hóa ${h.mutagen} vào ${p.name}`,
          tone: h.mutagen === "Lộc" ? "tot" : "xau",
        });
    }
    phan.push({ title: `Vận hạn năm ${v.year} (${v.yearName}, ${v.age} tuổi mụ)`, items });
  }

  // 7. Kinh nghiệm luận theo phái (rút từ video, tách riêng khỏi phần đối chiếu sách)
  const nguon = [NGUON_TUVI];
  const canhBaoVideo: string[] = [];
  if (c.config.school === "vn-thien-luong") {
    phan.push(
      ...tag(luanVideoNam(c), "389 TỬ VI"),
      ...tag(luanVideoNam2(c), "Học Quán, Lê Quang Lăng"),
      ...tag(luanVideoNam3(c), "Lê Quang Lăng, Phong Thủy Tâm Linh, Đông Phương Đạo Quán"),
      ...tag(luanVideoNam4(c), "389 TỬ VI"),
    );
    nguon.push(NGUON_VIDEO_NAM, NGUON_VIDEO_HQ, NGUON_VIDEO_LQL, NGUON_VIDEO_PT, NGUON_VIDEO_DP, NGUON_VIDEO_NAM4);
    canhBaoVideo.push("Nhiều ý rút từ video của các thầy (tên kênh ghi ở phần căn cứ), chưa đối chiếu sách; ý về sức khỏe, tâm linh chỉ để tham khảo, không thay lời khuyên y tế.");
  } else if (c.config.school === "bac-phai") {
    phan.push(...tag(luanVideoBac(c), "Đào Thanh Tín"), ...tag(luanVideoBac2(c), "Đào Thanh Tín"), ...tag(luanKhamThien(c), "Khâm Thiên Tứ hóa"));
    nguon.push(NGUON_VIDEO_BAC, NGUON_VIDEO_BAC2, NGUON_KHAM_THIEN);
    canhBaoVideo.push("Nhiều ý rút từ video của các thầy Bắc phái (tên kênh ghi ở phần căn cứ), chưa đối chiếu sách.");
  }

  // 8. Câu phú cổ ứng với lá số (mọi phái)
  const phu = extra?.phu ?? [];
  if (phu.length) {
    phan.push(...phu.map((p) => ({ ...p, items: [...p.items] })));
    if (extra?.nguonPhu) nguon.push(extra.nguonPhu);
  }

  // Sắp lại thành ít nhóm theo logic đọc lá số; nguồn ghi ở căn cứ, không ở tiêu đề
  const gop = nhomLai(phan, c.vanHan ? `Vận hạn năm ${c.vanHan.year} (${c.vanHan.yearName}, ${c.vanHan.age} tuổi mụ)` : "Vận hạn");
  phan.length = 0;
  phan.push(...gop);

  // Gộp các ý trùng lời trong cùng một mục, nối căn cứ
  for (const p of phan) {
    const by = new Map<string, Y>();
    for (const it of p.items) {
      const old = by.get(it.text);
      if (!old) by.set(it.text, { ...it });
      else if (it.canCu && !old.canCu?.includes(it.canCu)) old.canCu = old.canCu ? `${old.canCu}; ${it.canCu}` : it.canCu;
    }
    p.items = [...by.values()];
  }

  const m = menh.majorStars.map((s) => s.name).join(", ");
  return {
    mon: "Tử vi",
    tomTat: `Mệnh ${m ? `có ${m}` : "vô chính diệu"} tại ${menh.chiName}, ${c.cuc}${c.banMenh ? `, bản mệnh ${c.banMenh}` : ""}; phái ${c.school}.`,
    phan,
    nguon,
    canhBao: [CANH_BAO_CHUNG, "Ý nghĩa sao viết theo cách hiểu thông dụng của Tử vi Việt Nam; các phái có thể luận khác nhau ở cùng một vị trí sao.", ...canhBaoVideo],
  };
}
