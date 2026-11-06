/**
 * Bát tự (Tử Bình) — luận cơ bản.
 * Phương pháp vượng suy theo "Tôi học đoán mệnh" quyển 1 (Trúc Lâm Tử Nguyễn Cư Trinh), chương Nhật nguyên,
 * vốn theo phái lấy lệnh tháng làm cơ sở (Thiệu Vĩ Hoa): được lệnh, đắc địa, được sinh, được trợ.
 * Ý nghĩa thập thần đối chiếu mục "Người và sự việc mà 10 thần đại biểu" của sách này. Không trích nguyên văn.
 */
import { THAN_SAT, canElement, NGU_HANH, thapThan, type BaziChart } from "@lyso/engine-bazi";
import { CANH_BAO_CHUNG, type LuanCoBan, type Phan, type Y } from "./types";

export const NHAT_CHU: Record<string, string> = {
  Giáp: "Mộc dương — như cây lớn: ngay thẳng, có chí tiến thủ, thích dẫn dắt, đôi khi cứng nhắc.",
  Ất: "Mộc âm — như cỏ hoa, dây leo: mềm mỏng, khéo thích nghi, biết dựa thế, tinh tế.",
  Bính: "Hỏa dương — như mặt trời: nhiệt tình, rộng rãi, thích tỏa sáng, nóng vội.",
  Đinh: "Hỏa âm — như ngọn đèn: ấm áp, tinh ý, chu đáo, nội tâm sâu.",
  Mậu: "Thổ dương — như núi đất: vững vàng, đáng tin, bao dung, chậm thay đổi.",
  Kỷ: "Thổ âm — như ruộng vườn: chăm chỉ, nuôi dưỡng, thực tế, hay lo toan.",
  Canh: "Kim dương — như sắt thép: cương quyết, trọng nghĩa, thẳng thắn, cứng rắn.",
  Tân: "Kim âm — như châu ngọc: tinh tế, trọng hình thức và danh dự, nhạy cảm.",
  Nhâm: "Thủy dương — như sông lớn: thông minh, phóng khoáng, năng động, khó gò bó.",
  Quý: "Thủy âm — như mưa móc: kín đáo, giàu trực giác, mềm mà bền, hay suy tư.",
};

/** Người và việc mà thập thần đại biểu */
export const THAP_THAN_Y: Record<string, string> = {
  "Tỷ kiên": "bạn bè, đồng nghiệp, anh chị em cùng giới; tinh thần tự lập, cạnh tranh ngang hàng",
  "Kiếp tài": "bạn bè, người cùng phe; tranh giành, hao tài nếu quá nhiều",
  "Thực thần": "tài năng thể hiện ra ngoài, ăn uống hưởng thụ, sự ôn hòa; với nữ là con cái",
  "Thương quan": "tài hoa, sáng tạo, phản biện, phá cách; dễ va chạm với cấp trên, quy tắc",
  "Thiên tài": "tiền bất ngờ, kinh doanh, đầu tư; với nam có liên quan đến cha, người tình",
  "Chính tài": "tiền lương, tài sản ổn định, sự cần mẫn; với nam là vợ",
  "Thất sát": "áp lực, quyền uy, quân sự, pháp chế; thử thách rèn luyện bản lĩnh; với nữ có liên quan đến chồng, người tình",
  "Chính quan": "chức vụ, danh dự, kỷ luật, địa vị; với nữ là chồng",
  "Thiên ấn": "học thuật chuyên môn, nghề đặc biệt (nghệ thuật, y, tôn giáo, kỹ thuật); trực giác",
  "Chính ấn": "học hành, bằng cấp, sự che chở, quyền lợi, danh dự; tình mẹ",
};

const LENH = new Set(["Trường sinh", "Mộc dục", "Quan đới", "Lâm quan", "Đế vượng"]);
const NHOM = (tt: string) =>
  tt === "Tỷ kiên" || tt === "Kiếp tài" ? "Tỷ Kiếp"
  : tt === "Chính ấn" || tt === "Thiên ấn" ? "Ấn"
  : tt === "Thực thần" || tt === "Thương quan" ? "Thực Thương"
  : tt === "Chính tài" || tt === "Thiên tài" ? "Tài"
  : "Quan Sát";

export type VuongSuy = "quá vượng" | "rất vượng" | "vượng" | "cân bằng" | "nhược" | "rất nhược";

export function xetVuongSuy(c: BaziChart) {
  const [nam, thang, ngay, gio] = c.pillars as [BaziChart["pillars"][number], BaziChart["pillars"][number], BaziChart["pillars"][number], BaziChart["pillars"][number]];
  const dayCan = c.dayMaster.can;
  const duong = dayCan % 2 === 0;
  const lenh = LENH.has(thang.truongSinh);
  const others = c.timeKnown ? [nam, thang, gio] : [nam, thang];
  const chiKhac = c.timeKnown ? [nam, ngay, gio] : [nam, ngay];
  const dacDia = chiKhac.filter((p) =>
    ["Lâm quan", "Đế vượng"].includes(p.truongSinh) || (duong && ["Trường sinh", "Mộ"].includes(p.truongSinh)) || p.tangCan[0]?.thapThan === "Tỷ kiên" || p.tangCan[0]?.thapThan === "Kiếp tài",
  );
  const duocSinh = [...others.filter((p) => NHOM(p.thapThan) === "Ấn"), ...c.pillars.filter((p) => p.tangCan[0] && NHOM(p.tangCan[0].thapThan) === "Ấn")];
  const duocTro = others.filter((p) => NHOM(p.thapThan) === "Tỷ Kiếp");
  const n = [dacDia.length > 0, duocSinh.length > 0, duocTro.length > 0].filter(Boolean).length;
  const manh = dacDia.length + duocSinh.length + duocTro.length;
  let ket: VuongSuy;
  if (lenh) ket = n === 3 ? "quá vượng" : n === 2 ? "rất vượng" : n === 1 ? "vượng" : "cân bằng";
  else ket = n >= 2 && manh >= 4 ? "vượng" : n >= 2 ? "cân bằng" : n === 1 ? "nhược" : "rất nhược";
  return { ket, lenh, thangTS: thang.truongSinh, dacDia, duocSinh, duocTro };
}

const HY: Record<"vuong" | "nhuoc" | "can", { hy: string[]; ky: string[] }> = {
  vuong: { hy: ["Tài", "Quan Sát", "Thực Thương"], ky: ["Ấn", "Tỷ Kiếp"] },
  nhuoc: { hy: ["Ấn", "Tỷ Kiếp"], ky: ["Tài", "Quan Sát", "Thực Thương"] },
  can: { hy: [], ky: [] },
};

/** Hành tương ứng nhóm thập thần, theo nhật chủ */
const hanhNhom = (dayEl: number, nhom: string) =>
  NGU_HANH[
    ((dayEl + (nhom === "Tỷ Kiếp" ? 0 : nhom === "Thực Thương" ? 1 : nhom === "Tài" ? 2 : nhom === "Quan Sát" ? 3 : 4)) % 5) as 0
  ] as string;

export function luanBazi(c: BaziChart, viewYear?: number): LuanCoBan {
  const phan: Phan[] = [];
  const dm = c.dayMaster;
  const dayEl = canElement(dm.can);
  phan.push({ title: "Nhật chủ", items: [{ text: NHAT_CHU[dm.name] ?? "", canCu: `Can ngày ${dm.name} (${dm.element})` }] });

  // Vượng suy
  const vs = xetVuongSuy(c);
  const ds = (l: { label: string }[]) => l.map((p) => p.label).join(", ") || "không";
  const vsItems: Y[] = [
    {
      text: `Nhật chủ ${vs.ket}.`,
      canCu: `${vs.lenh ? "Được lệnh" : "Không được lệnh"} (chi tháng ở ${vs.thangTS}); đắc địa: ${ds(vs.dacDia)}; được sinh (Ấn): ${vs.duocSinh.length}; được trợ (Tỷ Kiếp trên can): ${vs.duocTro.length}`,
      tone: "trung",
    },
  ];
  const mode = vs.ket.includes("vượng") ? "vuong" : vs.ket.includes("nhược") ? "nhuoc" : "can";
  const huong = HY[mode];
  if (mode === "can")
    vsItems.push({ text: "Thế cân bằng: khó định ngay hỷ dụng thần theo quy tắc đơn giản — cần xét thêm hợp hóa, bán hợp cục, xung phá và điều hậu (khí hậu mùa sinh)." });
  else
    vsItems.push({
      text: `Hướng hỷ dụng sơ bộ: ưa ${huong.hy.map((x) => `${x} (${hanhNhom(dayEl, x)})`).join(", ")}; kỵ ${huong.ky.map((x) => `${x} (${hanhNhom(dayEl, x)})`).join(", ")}.`,
      canCu: mode === "vuong" ? "Thân vượng cần được tiết, hao, khắc cho cân bằng" : "Thân nhược cần được sinh, phù",
    });
  phan.push({ title: "Vượng suy (sơ bộ)", items: vsItems });

  // Ngũ hành
  const counts = Object.entries(c.elementCount);
  const thieu = counts.filter(([, v]) => v === 0).map(([k]) => k);
  const nhieu = counts.filter(([, v]) => v >= 3).map(([k]) => k);
  phan.push({
    title: "Ngũ hành trong tám chữ",
    items: [
      {
        text: `${thieu.length ? `Thiếu ${thieu.join(", ")}.` : "Đủ cả năm hành."} ${nhieu.length ? `Nổi trội: ${nhieu.join(", ")}.` : ""} Thiếu hay thừa một hành chưa phải tốt xấu tự thân; nó chỉ có nghĩa khi đặt cạnh vượng suy của nhật chủ.`,
        canCu: counts.map(([k, v]) => `${k} ${v}`).join(", "),
      },
    ],
  });

  // Thập thần nổi bật
  const all = c.pillars.flatMap((p) => (p.label === "Ngày" ? [] : [p.thapThan])).concat(c.pillars.map((p) => p.tangCan[0]?.thapThan ?? "").filter((x) => x && x !== "Nhật chủ"));
  const cnt = new Map<string, number>();
  for (const t of all) cnt.set(t, (cnt.get(t) ?? 0) + 1);
  const top = [...cnt.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3);
  phan.push({
    title: "Thập thần nổi bật",
    items: top.map(([t, n]) => {
      const nh = NHOM(t);
      const tone = mode === "can" ? "trung" : huong.hy.includes(nh) ? "tot" : "xau";
      return { text: `${t}: ${THAP_THAN_Y[t] ?? ""}.${mode !== "can" ? ` Với thế ${vs.ket}, đây là ${tone === "tot" ? "nhóm có lợi" : "nhóm cần tiết chế"}.` : ""}`, canCu: `${t} xuất hiện ${n} lần (can và bản khí chi)`, tone };
    }),
  });

  // Thần sát
  const ts = c.pillars.flatMap((p) => p.thanSat.map((t) => ({ ...t, pillar: p.label })));
  if (ts.length)
    phan.push({
      title: "Thần sát (bổ trợ)",
      items: ts.slice(0, 8).map((t) => ({ text: `${t.name}: ${THAN_SAT[t.name]?.meaning ?? ""}`, canCu: `Trụ ${t.pillar}, tra theo ${t.from}`, tone: t.kind === "cát" ? "tot" : t.kind === "hung" ? "xau" : "trung" })),
    });

  // Vận
  const year = viewYear ?? new Date().getUTCFullYear();
  const dv = c.daiVan.find((d) => year >= d.startYear && year < d.startYear + 10);
  const ln = c.luuNien.find((l) => l.year === year);
  const van: Y[] = [];
  const evalTT = (tt: string) => (mode === "can" ? "trung" : huong.hy.includes(NHOM(tt)) ? "tot" : "xau");
  if (dv) {
    const tt = thapThan(dm.can, dv.ganzhi.can);
    const tone = evalTT(tt);
    van.push({ text: `Đại vận ${dv.ganzhi.name} mang khí ${tt}: ${THAP_THAN_Y[tt] ?? ""}. ${tone === "tot" ? "Thuận với hướng hỷ dụng — giai đoạn nên chủ động." : tone === "xau" ? "Nghịch hướng hỷ dụng — nên giữ vững, tránh mạo hiểm lớn." : ""}`, canCu: `Đại vận ${dv.startYear}–${dv.startYear + 9}`, tone });
  }
  if (ln) {
    const tone = evalTT(ln.thapThan);
    van.push({ text: `Năm ${ln.year} (${ln.ganzhi.name}) mang khí ${ln.thapThan}: ${THAP_THAN_Y[ln.thapThan] ?? ""}.`, canCu: `Lưu niên ${ln.ganzhi.name}${ln.thanSat.length ? `, gặp ${ln.thanSat.map((t) => t.name).join(", ")}` : ""}`, tone });
  }
  if (van.length) phan.push({ title: `Vận trình năm ${year}`, items: van });

  return {
    mon: "Bát tự",
    tomTat: `Nhật chủ ${dm.name} (${dm.element}), ${vs.ket}${mode !== "can" ? `; hướng ưa ${huong.hy.join(", ")}` : ""}.`,
    phan,
    nguon: ["Tôi học đoán mệnh, quyển 1 — Trúc Lâm Tử Nguyễn Cư Trinh (chương Nhật nguyên: thân vượng, thân nhược; mục 10 thần đại biểu)"],
    canhBao: [
      CANH_BAO_CHUNG,
      "Vượng suy ở đây xét theo 4 tiêu chí (lệnh tháng, đắc địa, được sinh, được trợ); chưa xét hợp hóa, bán hợp/hội cục, xung phá, điều hậu — những yếu tố có thể đảo kết luận.",
      ...(c.timeKnown ? [] : ["Không rõ giờ sinh: bỏ trụ giờ khỏi phép xét."]),
    ],
  };
}
