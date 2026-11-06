/**
 * Đại Lục Nhâm, Kỳ môn độn giáp, Thái ất — luận cơ bản theo ý nghĩa thông dụng của từng yếu tố.
 * Kho sách hiện chưa có sách chuyên đề cho ba môn này: nội dung chưa được đối chiếu sách, ghi rõ trong `nguon`.
 */
import { CAN, CHI } from "@lyso/calendar-vn";
import type { LucNhamChart } from "@lyso/engine-lucnham";
import { CUNG, type KyMonChart } from "@lyso/engine-kymon";
import { CUNG_TA, R16, THAN16, type ThaiAtChart } from "@lyso/engine-thaiat";
import { CANH_BAO_CHUNG, type LuanCoBan, type Phan, type Y } from "./types";

const CHUA_SACH = "Chưa có sách chuyên đề trong kho sách để đối chiếu — nội dung theo ý nghĩa thông dụng, cần thầy kiểm tra";

// ——— Đại Lục Nhâm ———

export const THIEN_TUONG_Y: Record<string, { tone: Y["tone"]; y: string }> = {
  "Quý Nhân": { tone: "tot", y: "quý nhân, người trên giúp đỡ, việc chính đáng" },
  "Đằng Xà": { tone: "xau", y: "kinh sợ, lo âu, việc quái lạ, rối rắm" },
  "Chu Tước": { tone: "trung", y: "văn thư, tin tức; dễ khẩu thiệt, cãi vã" },
  "Lục Hợp": { tone: "tot", y: "hòa hợp, giao dịch, mai mối, hợp tác" },
  "Câu Trần": { tone: "xau", y: "trì trệ, vướng víu, tranh chấp, ruộng đất" },
  "Thanh Long": { tone: "tot", y: "tài lộc, hỷ sự, thăng tiến" },
  "Thiên Không": { tone: "xau", y: "hư không, lời không thật, việc dễ hụt" },
  "Bạch Hổ": { tone: "xau", y: "uy mãnh, tai nạn, bệnh tật, tang tóc — cần đề phòng" },
  "Thái Thường": { tone: "tot", y: "ăn uống, y phục, lễ nghi, quà tặng" },
  "Huyền Vũ": { tone: "xau", y: "mờ ám, mất mát, trộm cắp, lừa gạt" },
  "Thái Âm": { tone: "tot", y: "âm thầm, giúp ngầm, việc kín, người nữ" },
  "Thiên Hậu": { tone: "tot", y: "ân trạch, người nữ quý, hôn nhân" },
};

export const PHEP_Y: Record<string, string> = {
  "Nguyên thủ": "Thượng khắc hạ duy nhất: việc khởi từ bên trên hoặc bên ngoài, đường lối rõ, thuận chủ động.",
  "Trọng thẩm": "Hạ tặc thượng duy nhất: việc từ dưới lên, có điều trái nghịch, phải xét lại kỹ; thường trước khó sau dễ.",
  "Tỷ dụng": "Nhiều khóa cùng khắc, chọn thần cùng âm dương với ngày: việc có nhiều mối, cần chọn đúng hướng.",
  "Thiệp hại": "Nhiều khắc ngang nhau: việc trải qua nhiều trắc trở, gian nan mới đến kết quả.",
  "Dao khắc": "Không khắc gần mà khắc xa: việc ảnh hưởng từ xa, nhẹ, dễ đổi; tin tức từ nơi khác.",
  "Mão tinh": "Không khắc: việc ẩn hiện, chờ đợi, chưa minh bạch.",
  "Biệt trách": "Tứ khóa thiếu một: việc không trọn vẹn, phải nhờ người khác.",
  "Bát chuyên": "Can chi cùng chỗ: việc nội bộ, quan hệ gần, dễ rối ren trong nhà.",
  "Phục ngâm": "Thiên bàn trùng địa bàn: mọi thứ còn nằm im, trì trệ, chưa động.",
  "Phản ngâm": "Thiên bàn đối xung địa bàn: đảo ngược, đi lại, thay đổi liên tục.",
};

const LUC_THAN_Y: Record<string, string> = {
  "Thê tài": "tiền bạc, của cải (với nam: vợ)",
  "Quan quỷ": "công danh, áp lực, bệnh tật, kiện tụng",
  "Phụ mẫu": "văn thư, giấy tờ, nhà cửa, người trên",
  "Tử tôn": "giải tai, niềm vui, con cái, người dưới",
  "Huynh đệ": "bạn bè, cạnh tranh, hao tài",
};

export function luanLucNham(c: LucNhamChart): LuanCoBan {
  const tt = c.tamTruyen;
  const phan: Phan[] = [{ title: `Cách cục: ${tt.method}`, items: [{ text: PHEP_Y[tt.method] ?? "", canCu: tt.note }] }];
  const ten = ["Sơ truyền — khởi đầu", "Trung truyền — diễn biến", "Mạt truyền — kết quả"];
  phan.push({
    title: "Tam truyền",
    items: tt.items.map((x, i) => {
      const t = THIEN_TUONG_Y[x.tuong];
      return {
        text: `${ten[i]}: ${t?.y ?? ""}; về việc: ${LUC_THAN_Y[x.lucThan] ?? x.lucThan}.${x.tuanKhong ? " Gặp không vong: giai đoạn này dễ hụt, chưa thực." : ""}`,
        canCu: `${x.dunCan ?? "—"} ${CHI[x.chi]}, ${x.tuong}, ${x.lucThan}${x.tuanKhong ? ", không vong" : ""}`,
        tone: x.tuanKhong ? "xau" : t?.tone,
      };
    }),
  });
  const hung = tt.items.filter((x) => THIEN_TUONG_Y[x.tuong]?.tone === "xau").length;
  const tot = tt.items.filter((x) => THIEN_TUONG_Y[x.tuong]?.tone === "tot").length;
  const mat = tt.items[2]!;
  phan.push({
    title: "Nhận định chung",
    items: [
      {
        text:
          tot > hung ? "Tam truyền nhiều thiên tướng cát: việc nhìn chung thuận." : hung > tot ? "Tam truyền nhiều thiên tướng hung: việc nhiều trở ngại, nên thận trọng." : "Cát hung đan xen: kết quả phụ thuộc cách xử lý.",
        canCu: tt.items.map((x) => x.tuong).join(" → "),
        tone: tot > hung ? "tot" : hung > tot ? "xau" : "trung",
      },
      { text: `Kết cục nghiêng về ${LUC_THAN_Y[mat.lucThan] ?? mat.lucThan}${mat.tuanKhong ? ", nhưng mạt truyền không vong nên dễ không thành" : ""}.`, canCu: `Mạt truyền ${CHI[mat.chi]} ${mat.lucThan}` },
    ],
  });
  const k1 = c.tuKhoa[0]!;
  phan.push({ title: "Tứ khóa", items: [{ text: `Khóa 1 (can ngày — người hỏi): ${CHI[k1.top]} ${k1.tuong}, ${THIEN_TUONG_Y[k1.tuong]?.y ?? ""}. Khóa 3 (chi ngày — sự việc): ${CHI[c.tuKhoa[2]!.top]} ${c.tuKhoa[2]!.tuong}.` }] });
  return { mon: "Đại Lục Nhâm", tomTat: `${tt.method}; tam truyền ${tt.items.map((x) => `${CHI[x.chi]} ${x.tuong}`).join(" → ")}.`, phan, nguon: [CHUA_SACH], canhBao: [CANH_BAO_CHUNG] };
}

// ——— Kỳ môn ———

export const MON_Y: Record<string, { tone: Y["tone"]; y: string; hanh: string }> = {
  Khai: { tone: "tot", y: "khai mở, công việc, gặp người có quyền", hanh: "Kim" },
  Hưu: { tone: "tot", y: "nghỉ ngơi, hòa giải, gặp gỡ, cầu quý nhân", hanh: "Thủy" },
  Sinh: { tone: "tot", y: "sinh lợi, cầu tài, buôn bán, xây dựng", hanh: "Thổ" },
  Cảnh: { tone: "trung", y: "văn thư, thi cử, quảng bá; dễ phô trương, nóng vội", hanh: "Hỏa" },
  Đỗ: { tone: "trung", y: "che giấu, phòng thủ, việc kín; bế tắc với việc công khai", hanh: "Mộc" },
  Thương: { tone: "xau", y: "tổn thương, tranh đấu; hợp đòi nợ, cạnh tranh mạnh", hanh: "Mộc" },
  Kinh: { tone: "xau", y: "kinh sợ, kiện tụng, thị phi", hanh: "Kim" },
  Tử: { tone: "xau", y: "bế tắc, chấm dứt; chỉ hợp việc tang, săn bắt, kết thúc", hanh: "Thổ" },
};
export const SAO_Y: Record<string, { tone: Y["tone"]; y: string }> = {
  "Thiên Bồng": { tone: "xau", y: "táo bạo, mạo hiểm, dễ mất mát" },
  "Thiên Nhuế": { tone: "xau", y: "bệnh tật, trì trệ; hợp học hỏi, sửa lỗi" },
  "Thiên Xung": { tone: "trung", y: "xung phong, hành động nhanh, võ nghệ" },
  "Thiên Phụ": { tone: "tot", y: "văn hóa, giáo dục, phò tá" },
  "Thiên Cầm": { tone: "tot", y: "trung chính, ổn định" },
  "Thiên Tâm": { tone: "tot", y: "mưu lược, y dược, quản lý" },
  "Thiên Trụ": { tone: "xau", y: "khẩu thiệt, đổ vỡ; hợp phòng thủ" },
  "Thiên Nhậm": { tone: "tot", y: "bền bỉ, buôn bán, nông nghiệp" },
  "Thiên Anh": { tone: "trung", y: "danh tiếng, văn chương; dễ nóng nảy" },
};
export const THAN_Y: Record<string, { tone: Y["tone"]; y: string }> = {
  "Trực Phù": { tone: "tot", y: "quý nhân, người đứng đầu che chở" },
  "Đằng Xà": { tone: "xau", y: "hư kinh, quái lạ, lời dối" },
  "Thái Âm": { tone: "tot", y: "che chở âm thầm, mưu kín" },
  "Lục Hợp": { tone: "tot", y: "hòa hợp, giao dịch, mai mối" },
  "Bạch Hổ": { tone: "xau", y: "hung bạo, tai nạn, tranh đấu" },
  "Huyền Vũ": { tone: "xau", y: "mờ ám, trộm cắp, lừa gạt" },
  "Cửu Địa": { tone: "tot", y: "vững vàng, giữ gìn, phòng thủ" },
  "Cửu Thiên": { tone: "tot", y: "tiến công, phát triển, cao xa" },
};
export const VIEC_KYMON: Record<string, { label: string; mon: string }> = {
  "cau-tai": { label: "Cầu tài, buôn bán", mon: "Sinh" },
  "cong-danh": { label: "Công danh, xin việc", mon: "Khai" },
  "thi-cu": { label: "Thi cử, văn thư", mon: "Cảnh" },
  "gap-nguoi": { label: "Gặp gỡ, hòa giải", mon: "Hưu" },
  "viec-kin": { label: "Việc kín, đàm phán", mon: "Đỗ" },
};
const CUNG_HANH = ["", "Thủy", "Thổ", "Mộc", "Mộc", "Thổ", "Kim", "Kim", "Thổ", "Hỏa"];
const KHAC: Record<string, string> = { Mộc: "Thổ", Thổ: "Thủy", Thủy: "Hỏa", Hỏa: "Kim", Kim: "Mộc" };
const TAM_KY = new Set([1, 2, 3]); // Ất Bính Đinh

export function luanKyMon(c: KyMonChart, viec?: keyof typeof VIEC_KYMON): LuanCoBan {
  const phan: Phan[] = [];
  const chung: Y[] = [
    { text: `${c.cuc.duong ? "Dương" : "Âm"} độn ${c.cuc.so} cục. Trực phù ${c.trucPhu.sao} đến cung ${c.trucPhu.denCung} ${CUNG[c.trucPhu.denCung]}, trực sử ${c.trucSu.mon} môn đến cung ${c.trucSu.denCung} ${CUNG[c.trucSu.denCung]}.`, canCu: c.cuc.note },
  ];
  if (c.phucNgam) chung.push({ text: "Phục ngâm: sao về chỗ cũ, mọi việc trì trệ; hợp giữ yên, thu thập, không hợp khởi sự.", tone: "xau" });
  if (c.phanNgam) chung.push({ text: "Phản ngâm: sao đối xung chỗ cũ, việc đảo lộn, đi lại nhiều; nên làm nhanh việc nhỏ, tránh việc lâu dài.", tone: "xau" });
  phan.push({ title: "Thế cục", items: chung });

  const palaceY = (k: number): Y[] => {
    const p = c.palaces[k]!;
    const out: Y[] = [];
    if (p.mon) {
      const m = MON_Y[p.mon]!;
      let note = "";
      const ch = CUNG_HANH[k]!;
      if (KHAC[m.hanh] === ch) note = m.tone === "tot" ? " Môn khắc cung (môn bức): cái tốt bị giảm." : " Môn khắc cung (môn bức): cái xấu càng rõ.";
      else if (KHAC[ch] === m.hanh) note = " Cung khắc môn (môn bị chế): sức của môn yếu đi.";
      out.push({ text: `${p.mon} môn: ${m.y}.${note}`, tone: m.tone, canCu: `${p.mon} môn (${m.hanh}) ở cung ${k} ${p.name} (${ch})` });
    }
    for (const s of p.sao) if (SAO_Y[s]) out.push({ text: `${s}: ${SAO_Y[s]!.y}.`, tone: SAO_Y[s]!.tone });
    if (p.than && THAN_Y[p.than]) out.push({ text: `${p.than}: ${THAN_Y[p.than]!.y}.`, tone: THAN_Y[p.than]!.tone });
    const ky = p.thien.filter((x) => TAM_KY.has(x));
    if (ky.length) out.push({ text: `Thiên bàn có tam kỳ (${ky.map((x) => CAN[x]).join(", ")}): thêm cơ hội, quý khí.`, tone: "tot" });
    if (p.tuanKhong) out.push({ text: "Cung gặp tuần không: việc dễ hụt, chưa thành ngay.", tone: "xau" });
    if (p.maTinh) out.push({ text: "Có mã tinh: việc có biến động, di chuyển, đến nhanh.", tone: "trung" });
    return out;
  };

  if (viec) {
    const v = VIEC_KYMON[viec]!;
    const k = c.palaces.findIndex((p) => p.mon === v.mon);
    if (k > 0) phan.push({ title: `Việc hỏi: ${v.label} — xét cung có ${v.mon} môn (cung ${k} ${CUNG[k]})`, items: palaceY(k) });
  } else {
    phan.push({ title: `Cung trực phù đến (cung ${c.trucPhu.denCung})`, items: palaceY(c.trucPhu.denCung) });
  }
  const cat = [1, 2, 3, 4, 6, 7, 8, 9].filter((k) => MON_Y[c.palaces[k]!.mon ?? ""]?.tone === "tot" && !c.palaces[k]!.tuanKhong);
  phan.push({
    title: "Hướng thuận lợi",
    items: [{ text: `Các cung có cát môn và không gặp tuần không: ${cat.map((k) => `${CUNG[k]} (${c.palaces[k]!.mon})`).join(", ") || "không có"}.`, canCu: "Khai, Hưu, Sinh là tam cát môn" }],
  });
  return { mon: "Kỳ môn độn giáp", tomTat: `${c.cuc.duong ? "Dương" : "Âm"} ${c.cuc.so} cục, ${c.cuc.termName}; trực phù ${c.trucPhu.sao}, trực sử ${c.trucSu.mon} môn.`, phan, nguon: [CHUA_SACH], canhBao: [CANH_BAO_CHUNG] };
}

// ——— Thái ất ———

const RING_TA = [8, 3, 4, 9, 2, 7, 6, 1];
const keBen = (a: number, b: number) => {
  const i = RING_TA.indexOf(a);
  const j = RING_TA.indexOf(b);
  return i >= 0 && j >= 0 && (Math.abs(i - j) === 1 || Math.abs(i - j) === 7);
};

export function luanThaiAt(c: ThaiAtChart): LuanCoBan {
  const tuongTrangThai = (cung: number, ten: string): Y => {
    if (cung === 5) return { text: `${ten} ở trung cung: tướng không ra khỏi trung cung — khó phát huy, nên giữ thế thủ.`, tone: "xau" };
    if (cung === c.thaiAt.cung) return { text: `${ten} cùng cung với Thái ất (tù): bị kiềm chế, hành động bất lợi.`, tone: "xau" };
    if (keBen(cung, c.thaiAt.cung)) return { text: `${ten} ở cung sát cạnh Thái ất (bức): chịu sức ép.`, tone: "xau" };
    return { text: `${ten} ở cung ${cung} ${CUNG_TA[cung]}: tự do hành động.`, tone: "tot" };
  };
  const phan: Phan[] = [
    {
      title: "Cục và Thái ất",
      items: [{ text: `${c.duong ? "Dương" : "Âm"} độn ${c.cuc} cục (${c.ly}). Thái ất ở cung ${c.thaiAt.cung} ${CUNG_TA[c.thaiAt.cung]}, năm thứ ${c.thaiAt.nam} trong cung — Thái ất là chủ thể của thời vận, cung nó đóng là hướng được chú ý.`, canCu: `Tích ${c.tich}` }],
    },
    {
      title: "Thế chủ – khách",
      items: [
        {
          text:
            c.chu.value > c.khach.value
              ? "Chủ toán nhiều hơn khách toán: theo nguyên tắc 'nhiều toán thắng ít toán', bên chủ (bên giữ, bên tại chỗ) có lợi thế."
              : c.chu.value < c.khach.value
                ? "Khách toán nhiều hơn chủ toán: bên khách (bên chủ động tấn công, người đến) có lợi thế."
                : "Chủ khách toán bằng nhau: thế giằng co.",
          canCu: `Chủ toán ${c.chu.value} (từ Văn xương ${R16[c.vanXuong]} — ${THAN16[c.vanXuong]}), khách toán ${c.khach.value} (từ Thủy kích ${R16[c.thuyKich]}), định toán ${c.dinh.value}`,
        },
        tuongTrangThai(c.chu.daiTuong, "Chủ đại tướng"),
        tuongTrangThai(c.khach.daiTuong, "Khách đại tướng"),
      ],
    },
    { title: "Tam môn", items: [{ text: c.tamMon === "cụ" ? "Tam môn cụ (Hưu, Sinh, Khai không bị Thái ất chiếm): đường đi thông, thuận cho hành động." : "Tam môn không cụ: một cát môn bị Thái ất chiếm, hành động lớn kém thuận.", tone: c.tamMon === "cụ" ? "tot" : "xau" }] },
  ];
  return { mon: "Thái ất", tomTat: `${c.duong ? "Dương" : "Âm"} độn ${c.cuc} cục; Thái ất cung ${c.thaiAt.cung}; chủ toán ${c.chu.value}, khách toán ${c.khach.value}.`, phan, nguon: [CHUA_SACH], canhBao: [CANH_BAO_CHUNG, "Thái ất chủ yếu dùng cho thời vận chung (quốc gia, thời cuộc, tập thể); áp dụng cho việc cá nhân chỉ mang tính tham khảo."] };
}
