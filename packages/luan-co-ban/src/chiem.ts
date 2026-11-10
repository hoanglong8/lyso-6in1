/**
 * Đại Lục Nhâm, Kỳ môn độn giáp, Thái ất — luận cơ bản theo ý nghĩa thông dụng của từng yếu tố.
 * Kho sách hiện chưa có sách chuyên đề cho ba môn này: nội dung chưa được đối chiếu sách, ghi rõ trong `nguon`.
 */
import { CAN, CHI } from "@lyso/calendar-vn";
import type { LucNhamChart } from "@lyso/engine-lucnham";
import { CUNG, type KyMonChart } from "@lyso/engine-kymon";
import { CUNG_TA, R16, THAN16, type ThaiAtChart } from "@lyso/engine-thaiat";
import { CANH_BAO_CHUNG, type LuanCoBan, type Phan, type Y } from "./types";

const CHUA_SACH = "Chưa có sách chuyên đề trong kho sách để đối chiếu — nội dung theo ý nghĩa và cách cục thông dụng (thập can khắc ứng, ngũ bất ngộ thời, lục thân tam truyền, tam tài số), cần thầy kiểm tra";

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

const HANH_CAN = ["Mộc", "Mộc", "Hỏa", "Hỏa", "Thổ", "Thổ", "Kim", "Kim", "Thủy", "Thủy"];
const HANH_CHI = ["Thủy", "Thổ", "Mộc", "Mộc", "Thổ", "Hỏa", "Hỏa", "Thổ", "Kim", "Kim", "Thổ", "Thủy"];
const SINH: Record<string, string> = { Mộc: "Hỏa", Hỏa: "Thổ", Thổ: "Kim", Kim: "Thủy", Thủy: "Mộc" };

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
  // Sinh khắc can ngày với sơ/mạt truyền; tam truyền hợp cục; tiến/thoái; quý nhân thuận nghịch
  const canH = HANH_CAN[c.day.can]!;
  const so = tt.items[0]!;
  const sinhKhac = (h: string) => (KHAC[h] === canH ? "khac-can" : KHAC[canH] === h ? "can-khac" : SINH[h] === canH ? "sinh-can" : SINH[canH] === h ? "can-sinh" : "hoa");
  const sk: Y[] = [];
  const soRel = sinhKhac(HANH_CHI[so.chi]!);
  sk.push({
    text: {
      "khac-can": "Sơ truyền khắc can ngày: việc tự tìm đến, có áp lực từ bên ngoài; người hỏi ở thế bị động.",
      "can-khac": "Can ngày khắc sơ truyền: người hỏi nắm thế chủ động, việc do mình khởi xướng.",
      "sinh-can": "Sơ truyền sinh can ngày: khởi đầu có trợ lực, được giúp.",
      "can-sinh": "Can ngày sinh sơ truyền: phải bỏ công sức, tiền của ra trước.",
      hoa: "Sơ truyền cùng hành với can ngày: việc ngang hàng, có cạnh tranh hoặc cùng chung sức.",
    }[soRel]!,
    canCu: `can ${CAN[c.day.can]} (${canH}) — sơ truyền ${CHI[so.chi]} (${HANH_CHI[so.chi]})`,
    tone: soRel === "khac-can" ? "xau" : soRel === "sinh-can" ? "tot" : "trung",
  });
  const matRel = sinhKhac(HANH_CHI[mat.chi]!);
  if (matRel === "khac-can" || matRel === "sinh-can")
    sk.push({ text: matRel === "sinh-can" ? "Mạt truyền sinh can ngày: kết cục có lợi cho người hỏi." : "Mạt truyền khắc can ngày: kết cục bất lợi, nên lường trước.", canCu: `mạt truyền ${CHI[mat.chi]} (${HANH_CHI[mat.chi]})`, tone: matRel === "sinh-can" ? "tot" : "xau" });
  const ba = tt.items.map((x) => x.chi).sort((x, y) => x - y).join(",");
  const CUC: Record<string, string> = { "0,4,8": "Thủy", "2,6,10": "Hỏa", "3,7,11": "Mộc", "1,5,9": "Kim" };
  if (CUC[ba]) {
    const h = CUC[ba]!;
    const lt = h === canH ? "huynh đệ (bạn bè, cạnh tranh)" : SINH[h] === canH ? "phụ mẫu (văn thư, người trên)" : SINH[canH] === h ? "tử tôn (vui vẻ, giải tai)" : KHAC[canH] === h ? "thê tài (tiền bạc)" : "quan quỷ (áp lực, công danh)";
    sk.push({ text: `Tam truyền hợp thành ${h} cục: sức việc dồn về một mối, nghiêng về ${lt}.`, canCu: tt.items.map((x) => CHI[x.chi]).join(" ") });
  }
  const d1 = (tt.items[1]!.chi - so.chi + 12) % 12, d2 = (mat.chi - tt.items[1]!.chi + 12) % 12;
  if (d1 === 1 && d2 === 1) sk.push({ text: "Tam truyền tiến liền nhau (tiến liên như): việc tiến tới, nên làm tiếp.", canCu: "sơ → trung → mạt thuận chi liền", tone: "tot" });
  if (d1 === 11 && d2 === 11) sk.push({ text: "Tam truyền lùi liền nhau (thoái liên như): việc lùi lại, nên giữ hoặc rút.", canCu: "sơ → trung → mạt nghịch chi liền", tone: "xau" });
  sk.push({ text: c.quyNhan.thuan ? "Quý nhân thuận hành: việc theo lẽ thường, dễ được người trên giúp." : "Quý nhân nghịch hành: việc nhiều khúc mắc, nhờ người cần kiên nhẫn.", canCu: `Quý nhân ${c.quyNhan.truDa} tại ${CHI[c.quyNhan.chi]}`, tone: c.quyNhan.thuan ? "tot" : "trung" });
  phan.push({ title: "Sinh khắc với người hỏi", items: sk });
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
/** Cách cục thập can thông dụng: "thiên-địa" (chỉ số can) → [tên, nghĩa, tone] */
const CACH_CAN: Record<string, [string, string, Y["tone"]]> = {
  "4-2": ["Thanh Long phản thủ", "việc lớn hanh thông, cầu gì được nấy", "tot"],
  "2-4": ["Phi điểu điệt huyệt", "cơ hội tự đến, mưu sự dễ thành", "tot"],
  "1-7": ["Thanh Long đào tẩu", "người dưới bỏ đi, hao tài, việc đổ vỡ", "xau"],
  "7-1": ["Bạch Hổ xương cuồng", "việc gia đạo bất an, dễ tổn thương, kiện tụng", "xau"],
  "3-9": ["Chu Tước đầu giang", "văn thư, tin tức sai lạc; dễ thị phi, kiện cáo", "xau"],
  "9-3": ["Đằng Xà yêu kiều", "việc quái lạ, lo sợ, giấy tờ rắc rối", "xau"],
  "6-2": ["Thái Bạch nhập Huỳnh", "kẻ gây hại tự lui; hợp phòng thủ, không hợp tấn công", "trung"],
  "2-6": ["Huỳnh nhập Thái Bạch", "kẻ gây hại đến gần; đề phòng mất mát, trộm cắp", "xau"],
  "6-4": ["Thiên ất phục cung", "trăm việc bất lợi, đề phòng tranh chấp", "xau"],
  "4-6": ["Thiên ất phi cung", "đổi chỗ, đổi việc thì bất lợi; nên giữ yên", "xau"],
  "6-6": ["Thái Bạch đồng cung (chiến cách)", "anh em, đồng sự tranh giành, dễ xung đột", "xau"],
  "1-2": ["Kỳ nghi thuận toại (Ất gặp Bính)", "cát lợi, được tiến cử, thăng chức", "tot"],
  "2-3": ["Tinh kỳ trợ (Bính gặp Đinh)", "văn thư, tin vui, thi cử thuận", "tot"],
};

export function luanKyMon(c: KyMonChart, viec?: keyof typeof VIEC_KYMON): LuanCoBan {
  const phan: Phan[] = [];
  const chung: Y[] = [
    { text: `${c.cuc.duong ? "Dương" : "Âm"} độn ${c.cuc.so} cục. Trực phù ${c.trucPhu.sao} đến cung ${c.trucPhu.denCung} ${CUNG[c.trucPhu.denCung]}, trực sử ${c.trucSu.mon} môn đến cung ${c.trucSu.denCung} ${CUNG[c.trucSu.denCung]}.`, canCu: c.cuc.note },
  ];
  if (c.phucNgam) chung.push({ text: "Phục ngâm: sao về chỗ cũ, mọi việc trì trệ; hợp giữ yên, thu thập, không hợp khởi sự.", tone: "xau" });
  if (c.phanNgam) chung.push({ text: "Phản ngâm: sao đối xung chỗ cũ, việc đảo lộn, đi lại nhiều; nên làm nhanh việc nhỏ, tránh việc lâu dài.", tone: "xau" });
  // Ngũ bất ngộ thời: can giờ khắc can ngày, cùng âm dương
  if (KHAC[HANH_CAN[c.hour.can]!] === HANH_CAN[c.day.can] && c.hour.can % 2 === c.day.can % 2)
    chung.push({ text: "Ngũ bất ngộ thời (can giờ khắc can ngày): giờ này trăm việc không hợp khởi sự, nên chọn giờ khác.", canCu: `giờ ${CAN[c.hour.can]}, ngày ${CAN[c.day.can]}`, tone: "xau" });
  phan.push({ title: "Thế cục", items: chung });
  // Cách cục thập can: can thiên bàn chồng lên can địa bàn
  const cach: Y[] = [];
  for (let k = 1; k <= 9; k++) {
    const p = c.palaces[k];
    if (!p) continue;
    for (const t of p.thien) for (const d of p.dia) {
      const g = CACH_CAN[`${t}-${d}`];
      if (g) cach.push({ text: `${g[0]}: ${g[1]}`, canCu: `thiên bàn ${CAN[t]} trên địa bàn ${CAN[d]} ở cung ${k} ${CUNG[k]}`, tone: g[2] });
    }
  }
  if (cach.length) phan.push({ title: "Cách cục can chồng can", items: cach });

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

/** Tam tài số và trùng dương/trùng âm của một toán (theo nguyên lý thông dụng của Thái ất) */
function toanY(v: number, ten: string): Y[] {
  const chuc = Math.floor(v / 10), don = v % 10;
  const out: Y[] = [];
  const thieu = [chuc === 0 ? "vô thiên (dưới 10)" : "", don === 0 ? "vô địa (không có số lẻ hàng đơn vị)" : "", !String(v).includes("5") ? "vô nhân (không có số 5)" : ""].filter(Boolean);
  if (thieu.length) out.push({ text: `${ten} ${v}: ${thieu.join(", ")} — thế của bên này thiếu một phần trợ lực.`, tone: "trung" });
  if (chuc > 0 && don > 0 && chuc % 2 === 1 && don % 2 === 1) out.push({ text: `${ten} ${v} trùng dương (hàng chục và đơn vị đều lẻ): thế cương, mạnh nhưng dễ quá đà.`, tone: "trung" });
  if (chuc > 0 && don > 0 && chuc % 2 === 0 && don % 2 === 0) out.push({ text: `${ten} ${v} trùng âm (hàng chục và đơn vị đều chẵn): thế nhu, nên thủ hơn công.`, tone: "trung" });
  return out.map((y) => ({ ...y, canCu: `${ten} = ${v}` }));
}

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
    { title: "Toán số (tam tài, âm dương)", items: [c.chu, c.khach].flatMap((t, i) => toanY(t.value, i ? "Khách toán" : "Chủ toán")) },
    { title: "Tam môn", items: [{ text: c.tamMon === "cụ" ? "Tam môn cụ (Hưu, Sinh, Khai không bị Thái ất chiếm): đường đi thông, thuận cho hành động." : "Tam môn không cụ: một cát môn bị Thái ất chiếm, hành động lớn kém thuận.", tone: c.tamMon === "cụ" ? "tot" : "xau" }] },
  ];
  return { mon: "Thái ất", tomTat: `${c.duong ? "Dương" : "Âm"} độn ${c.cuc} cục; Thái ất cung ${c.thaiAt.cung}; chủ toán ${c.chu.value}, khách toán ${c.khach.value}.`, phan, nguon: [CHUA_SACH], canhBao: [CANH_BAO_CHUNG, "Thái ất chủ yếu dùng cho thời vận chung (quốc gia, thời cuộc, tập thể); áp dụng cho việc cá nhân chỉ mang tính tham khảo."] };
}
