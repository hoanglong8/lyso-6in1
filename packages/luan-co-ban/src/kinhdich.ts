import { CHI } from "@lyso/calendar-vn";
import type { Reading } from "@lyso/engine-kinhdich";
import { CANH_BAO_CHUNG, type LuanCoBan, type Phan, type Y } from "./types";
import { DUNG_THAN, NGUON_KINHDICH, QUE, VI_TRI_HAO } from "./kinhdich-data";

export type ViecHoi = keyof typeof DUNG_THAN;

const queY = (n: number) => QUE[n - 1]!;

export function luanKinhDich(r: Reading, viec?: ViecHoi): LuanCoBan {
  const phan: Phan[] = [];
  const m = queY(r.main.number);
  phan.push({
    title: `Quẻ chủ: ${r.main.fullName}`,
    items: [
      { text: m.y, canCu: `Quẻ số ${r.main.number} (${r.main.han}), ${r.main.upper.name} trên ${r.main.lower.name}` },
      { text: `Lời quẻ: ${m.thoan}` },
      { text: m.khuyen, tone: "trung" },
    ],
  });
  const ho = queY(r.mutual.number);
  const items2: Y[] = [{ text: `Hỗ quái ${r.mutual.fullName} — diễn biến bên trong, quá trình: ${ho.y.toLowerCase()}`, canCu: "Hào 2–4 làm hạ quái, 3–5 làm thượng quái" }];
  if (r.changed) {
    const b = queY(r.changed.number);
    items2.push({ text: `Quẻ biến ${r.changed.fullName} — kết cục, xu hướng sau cùng: ${b.y.toLowerCase()} ${b.khuyen}`, canCu: `Hào động: ${r.movingLines.join(", ")}` });
  } else items2.push({ text: "Không có hào động (tĩnh quái): xem chủ yếu ở lời quẻ chủ; việc ít biến đổi." });
  phan.push({ title: "Diễn biến và kết cục", items: items2 });

  if (r.movingLines.length) {
    phan.push({
      title: "Hào động",
      items: r.movingLines.map((n) => ({
        text: `Hào ${n}: vị trí ${VI_TRI_HAO[n]}. ${r.lines[n - 1]!.yang ? "Dương động hóa âm" : "Âm động hóa dương"} — điểm chuyển biến của sự việc nằm ở đây.`,
        canCu: `${r.lines[n - 1]!.canChi} ${r.lines[n - 1]!.lucThan}${r.lines[n - 1]!.bien ? ` → ${r.lines[n - 1]!.bien!.canChi} ${r.lines[n - 1]!.bien!.lucThan}` : ""}`,
      })),
    });
  }

  if (r.maiHoa) {
    const tot = r.maiHoa.relation.includes("cát");
    phan.push({
      title: "Mai Hoa: Thể – Dụng",
      items: [{ text: `${r.maiHoa.relation}. Thể là mình (quái không có hào động), Dụng là việc (quái có hào động).`, canCu: `Thể ${r.maiHoa.the.name}, Dụng ${r.maiHoa.dung.name}`, tone: tot ? "tot" : r.maiHoa.relation.includes("hung") ? "xau" : "trung" }],
    });
  }

  // Lục hào
  const the = r.lines.find((l) => l.the)!;
  const ung = r.lines.find((l) => l.ung)!;
  const lh: Y[] = [{ text: `Thế (mình) ở hào ${the.pos}: ${the.canChi} ${the.lucThan}; Ứng (đối phương/việc) ở hào ${ung.pos}: ${ung.canChi} ${ung.lucThan}.`, canCu: `Cung ${r.main.palace.name} ${r.main.palaceRankName}` }];
  if (the.tuanKhong) lh.push({ text: "Thế gặp tuần không: bản thân chưa đủ lực hoặc chưa thật sự quyết; việc dễ hụt.", tone: "xau", canCu: `Tuần không ${r.tuanKhong?.map((z) => CHI[z]).join(" ")}` });
  if (viec) {
    const d = DUNG_THAN[viec]!;
    if (d.lucThan === "Thế") lh.push({ text: `Việc hỏi về bản thân: lấy hào Thế làm dụng thần.` });
    else {
      const ds = r.lines.filter((l) => l.lucThan === d.lucThan);
      const phuc = r.lines.filter((l) => l.phucThan?.lucThan === d.lucThan);
      if (!ds.length && phuc.length)
        lh.push({ text: `Dụng thần ${d.lucThan} (${d.y}) không hiện trong quẻ, phục dưới hào ${phuc[0]!.pos}: việc còn ẩn, chưa lộ rõ, cần thời gian hoặc điều kiện để xuất hiện.`, canCu: `Phục thần ${phuc[0]!.phucThan!.canChi}`, tone: "trung" });
      for (const l of ds) {
        const tags = [l.moving ? "động" : "tĩnh", l.tuanKhong ? "tuần không" : "", l.the ? "trì Thế" : "", l.ung ? "ở Ứng" : ""].filter(Boolean).join(", ");
        const tone = l.tuanKhong ? "xau" : l.moving || l.the ? "tot" : "trung";
        lh.push({
          text: `Dụng thần ${d.lucThan} (${d.y}) ở hào ${l.pos}${l.tuanKhong ? ": đang tuần không — việc chưa thành hoặc trì hoãn" : l.moving ? ": động — việc đang chuyển biến, có kết quả sớm" : l.the ? ": trì Thế — việc gắn chặt với mình" : ": tĩnh — việc ổn định, chậm"}.`,
          canCu: `${l.canChi} ${l.element}, ${tags}`,
          tone,
        });
      }
    }
  } else lh.push({ text: "Chọn loại việc hỏi để xác định dụng thần (công danh, tiền bạc, giấy tờ, con cái, bạn bè, bản thân)." });
  phan.push({ title: "Lục hào: thế, ứng, dụng thần", items: lh });

  return {
    mon: "Kinh dịch",
    tomTat: `${r.main.fullName}${r.changed ? ` biến ${r.changed.fullName}` : " (tĩnh)"}: ${m.y.toLowerCase()}`,
    phan,
    nguon: [NGUON_KINHDICH],
    canhBao: [CANH_BAO_CHUNG, "Lời hào chi tiết (384 hào) chưa đưa vào gói cơ bản; phần hào động chỉ nêu ý nghĩa vị trí."],
  };
}
