import { describe, expect, it } from "vitest";
import { jdnFromYmd } from "@lyso/calendar-vn";
import { buildThaiAt, cucOf, R16, tichSo, toan, type TichSo } from "../src";

const nien = (y: number): TichSo => tichSo("nien", { lunarYear: y, lunarMonth: 1, dayJdn: 0, hourChi: 0, afterHaChi: false });
/** Dựng tích số giả có cục k, dương/âm, Thái tuế tùy ý (để soi bảng lập thành) */
const fake = (k: number, duong: boolean, thaiTue?: number): TichSo => ({ ke: "thoi", value: 72 * 1000 + k, duong, thaiTue: thaiTue ?? (k - 1) % 12 });

const R16_HAN = [..."子丑艮寅卯辰巽巳午未坤申酉戌乾亥"];
const TA_HAN: Record<string, number> = { 乾: 1, 離: 2, 艮: 3, 震: 4, 中: 5, 兌: 6, 坤: 7, 坎: 8, 巽: 9 };
const CHI_HAN = [..."子丑寅卯辰巳午未申酉戌亥"];

// ——— Bảng tĩnh trong kintaiyi/config.py (MIT, kentang2017), chỉ dùng làm đáp án ———
const KT_TAIYI_PAI = "乾乾乾離離離艮艮艮震震震兌兌兌坤坤坤坎坎坎巽巽巽".repeat(3);
const KT_SKYEYES_YANG = "申酉戌乾乾亥子丑艮寅卯辰巽巳午未坤坤".repeat(4);
const KT_SKYEYES_YIN = "寅卯辰巽巽巳午未坤申酉戌乾亥子丑艮艮".repeat(4);
const KT_SF = "坤戌亥丑寅辰巳坤酉乾丑寅辰午坤酉亥子艮辰巳未申戌亥艮卯巽未丑戌子艮卯巳午".repeat(2);
const KT_FOUR_GOD = "乾乾乾離離離艮艮艮震震震中中中兌兌兌坤坤坤坎坎坎巽巽巽巳巳巳申申申寅寅寅";
const KT_SKY_YI = "兌兌兌坤坤坤坎坎坎巽巽巽巳巳巳申申申寅寅寅乾乾乾離離離艮艮艮震震震中中中";
const KT_EARTH_YI = "巽巽巽巳巳巳申申申寅寅寅乾乾乾離離離艮艮艮震震震中中中兌兌兌坤坤坤坎坎坎";
const KT_ZHI_FU = "中中中兌兌兌坤坤坤坎坎坎巽巽巽巳巳巳申申申寅寅寅乾乾乾離離離艮艮艮震震震";
const KT_OFFICER = "巳巳午午午未未未申申申酉酉酉戌戌戌亥亥亥子子子丑丑丑寅寅寅卯卯卯辰辰辰巳";
const SEQ_HAN: Record<string, string> = { 乾: "Càn", 離: "Ly", 艮: "Cấn", 震: "Chấn", 中: "Trung", 兌: "Đoài", 坤: "Khôn", 坎: "Khảm", 巽: "Tốn", 巳: "Tỵ", 申: "Thân", 寅: "Dần" };

describe("Tích số và cục — ví dụ sách", () => {
  it("niên kế: 2004 Giáp Thân dương độn 33 cục; 2024 → 53", () => {
    expect(nien(2004).value).toBe(10155921);
    expect(cucOf(nien(2004))).toBe(33);
    expect(cucOf(nien(2024))).toBe(53);
    expect(nien(2004).thaiTue).toBe(8); // Thân
  });
  it("nguyệt kế: tháng 6/2004 → 32 cục, tháng 10/2004 → 36 cục", () => {
    const m = (mo: number) => cucOf(tichSo("nguyet", { lunarYear: 2004, lunarMonth: mo, dayJdn: 0, hourChi: 0, afterHaChi: false }));
    expect(m(6)).toBe(32);
    expect(m(10)).toBe(36);
  });
  it("nhật kế: 2004-06-01 (Tân Hợi) → dương độn 60 cục; tích nhật khớp can chi ngày", () => {
    const t = tichSo("nhat", { lunarYear: 2004, lunarMonth: 4, dayJdn: jdnFromYmd(2004, 6, 1), hourChi: 0, afterHaChi: false });
    expect(cucOf(t)).toBe(60);
    expect(((t.value - 1) % 60) + 1).toBe(48); // Tân Hợi là thứ 48 trong lục thập hoa giáp
  });
});

describe("Dương độn 72 cục — bảng lập thành của kintaiyi", () => {
  it("Thái ất cung, Văn xương, Thủy kích (niên kế), Tứ thần, Thiên ất, Địa ất, Trực phù, Thần cơ", () => {
    for (let k = 1; k <= 72; k++) {
      const c = buildThaiAt(nien(1983 + ((k - 1983 - 10153917) % 72 + 72) % 72 || 72)); // năm có cục k
      expect(c.cuc).toBe(k);
      expect(c.thaiAt.cung, `TA ${k}`).toBe(TA_HAN[KT_TAIYI_PAI[k - 1]!]);
      expect(R16[c.vanXuong], `VX ${k}`).toBe(R16[R16_HAN.indexOf(KT_SKYEYES_YANG[k - 1]!)]);
      // kintaiyi ghi cục 30/66 là Sửu, phá quy luật (cục 29 Mùi → 31 Tuất, mỗi cục tiến 2): lỗi chép bảng; đúng là Thân
      if (k !== 30 && k !== 66) expect(R16[c.thuyKich], `TK ${k}`).toBe(R16[R16_HAN.indexOf(KT_SF[k - 1]!)]);
      else expect(R16[c.thuyKich]).toBe("Thân");
      const i = (k - 1) % 36;
      expect(c.tuThan).toBe(SEQ_HAN[KT_FOUR_GOD[i]!]);
      expect(c.thienAt).toBe(SEQ_HAN[KT_SKY_YI[i]!]);
      expect(c.diaAt).toBe(SEQ_HAN[KT_EARTH_YI[i]!]);
      expect(c.trucPhu).toBe(SEQ_HAN[KT_ZHI_FU[i]!]);
      expect(c.thanCo).toBe(CHI_HAN.indexOf(KT_OFFICER[i]!));
    }
  });
  it("âm độn: Văn xương khởi Dần, dừng thêm ở Tốn và Cấn; Thái ất khởi cung 9 đi nghịch", () => {
    for (let k = 1; k <= 72; k++) {
      const c = buildThaiAt(fake(k, false));
      expect(R16[c.vanXuong]).toBe(R16[R16_HAN.indexOf(KT_SKYEYES_YIN[k - 1]!)]);
      expect(c.thaiAt.cung).toBe([9, 8, 7, 6, 4, 3, 2, 1][Math.floor((k - 1) / 3) % 8]);
    }
  });
});

/**
 * Âm cục lập thành — Vũ kinh tổng yếu, hậu tập quyển 20 (thời Tống, phạm vi công cộng).
 * [cục, Thái ất cung, Văn xương, chủ toán, chủ đại tướng, Thủy kích, khách toán, Kế thần]
 * Dữ liệu chép lại qua bản số hóa; các cục nghi chép sai được ghi chú riêng bên dưới.
 */
const WKTY_AM: [number, number, string, number, number, string, number, string][] = [
  [1, 9, "寅", 5, 5, "坤", 29, "申"], [2, 9, "卯", 4, 4, "戌", 17, "未"], [3, 9, "辰", 1, 1, "亥", 16, "午"],
  [4, 8, "巽", 25, 5, "丑", 33, "巳"], [5, 8, "巽", 25, 5, "寅", 30, "辰"], [6, 8, "巳", 17, 7, "辰", 26, "卯"],
  [7, 7, "午", 2, 2, "巳", 3, "寅"], [8, 7, "未", 1, 1, "坤", 7, "丑"], [9, 7, "坤", 7, 7, "酉", 34, "子"],
  [10, 6, "申", 1, 1, "乾", 24, "亥"], [11, 6, "酉", 6, 6, "丑", 26, "戌"], [12, 6, "戌", 35, 5, "寅", 23, "酉"],
  [13, 4, "乾", 12, 2, "辰", 37, "申"], [14, 4, "亥", 12, 2, "午", 27, "未"], [15, 4, "子", 11, 1, "坤", 25, "午"],
  [16, 3, "丑", 1, 1, "酉", 15, "巳"], [17, 3, "艮", 3, 3, "亥", 9, "辰"], [18, 3, "艮", 3, 3, "子", 8, "卯"],
  [19, 2, "寅", 14, 4, "艮", 16, "寅"], [21, 2, "辰", 10, 1, "巳", 1, "子"],
  [24, 1, "巳", 16, 6, "戌", 1, "卯"], [25, 9, "午", 31, 1, "亥", 16, "申"],
  [27, 9, "坤", 29, 9, "卯", 4, "午"], [28, 8, "申", 8, 8, "巽", 25, "巳"], [29, 8, "酉", 7, 7, "未", 15, "辰"],
  [30, 8, "戌", 2, 2, "申", 8, "卯"], [31, 7, "乾", 27, 7, "戌", 28, "寅"], [33, 7, "子", 26, 6, "艮", 38, "子"],
  [34, 6, "丑", 26, 6, "卯", 22, "亥"], [37, 4, "寅", 1, 1, "坤", 20, "申"], [38, 4, "卯", 4, 4, "戌", 12, "未"],
  [39, 4, "辰", 37, 7, "亥", 12, "午"], [40, 3, "巽", 33, 3, "丑", 1, "巳"], [41, 3, "巽", 33, 3, "寅", 38, "辰"],
  [43, 2, "午", 2, 2, "巳", 1, "寅"], [44, 2, "未", 39, 9, "坤", 38, "丑"], [45, 2, "坤", 38, 8, "酉", 31, "子"],
  [46, 1, "申", 7, 7, "乾", 1, "亥"], [47, 1, "酉", 6, 6, "丑", 32, "戌"], [48, 1, "戌", 1, 1, "寅", 19, "酉"],
  [49, 9, "乾", 16, 6, "辰", 1, "申"], [50, 9, "亥", 16, 6, "午", 31, "未"], [51, 9, "子", 25, 5, "坤", 29, "午"],
  [53, 8, "艮", 32, 2, "亥", 1, "辰"], [54, 8, "艮", 32, 2, "子", 8, "卯"], [55, 7, "寅", 16, 6, "艮", 18, "寅"],
  [56, 7, "卯", 15, 5, "辰", 12, "丑"], [57, 7, "辰", 12, 2, "巳", 3, "子"], [58, 6, "巽", 18, 8, "未", 8, "亥"],
  [59, 6, "巽", 18, 8, "申", 1, "戌"], [60, 6, "巳", 10, 1, "戌", 25, "酉"], [61, 4, "午", 27, 7, "亥", 12, "申"],
  [62, 4, "未", 26, 6, "艮", 30, "未"], [63, 4, "坤", 25, 5, "卯", 4, "午"], [64, 3, "申", 16, 6, "巽", 3, "巳"],
  [65, 3, "酉", 15, 5, "未", 23, "辰"], [67, 2, "乾", 25, 5, "戌", 26, "寅"], [68, 2, "亥", 25, 5, "子", 24, "丑"],
  [69, 2, "子", 24, 4, "艮", 16, "子"], [71, 1, "艮", 31, 1, "巳", 16, "戌"], [72, 1, "艮", 31, 1, "亥", 25, "酉"],
];

/**
 * Chỗ bảng sách khác phép tính, đã đối chiếu nguyên văn: đều có dạng chép nhầm chữ số (三十四/二十四, 二十九/十九,
 * 三/三十…) trong khi cùng một phép tính cho đúng các dòng khác; cục 72 Thủy kích "大義" phá quy luật tiến dần
 * (cục 71 大神 → 72 phải là 大威).
 */
const WKTY_NGHI_SAI = new Set([
  "cục 9: khách 33/34", "cục 10: khách 34/24", "cục 24: TK 辰/戌", "cục 33: khách 18/38", "cục 37: khách 25/20",
  "cục 38: khách 13/12", "cục 48: khách 29/19", "cục 51: chủ 15/25", "cục 60: khách 35/25", "cục 62: khách 3/30",
  "cục 64: khách 33/3", "cục 72: TK 午/亥",
]);

describe("Âm độn — đối chiếu Vũ kinh tổng yếu", () => {
  it("Thái ất cung, Văn xương, chủ toán, chủ đại tướng; Thủy kích và khách toán theo Kế thần sách ghi", () => {
    const miss: string[] = [];
    for (const [k, ta, vx, chuToan, chuDT, tk, khachToan, keThan] of WKTY_AM) {
      const tt = (2 - CHI_HAN.indexOf(keThan) + 12) % 12; // Kế thần = 2 − Thái tuế
      const c = buildThaiAt(fake(k, false, tt));
      expect([c.thaiAt.cung, R16_HAN[c.vanXuong], c.chu.daiTuong], `cục ${k}`).toEqual([ta, vx, chuDT]);
      const diff =
        c.chu.value !== chuToan ? `chủ ${c.chu.value}/${chuToan}`
        : R16_HAN[c.thuyKich] !== tk ? `TK ${R16_HAN[c.thuyKich]}/${tk}`
        : c.khach.value !== khachToan ? `khách ${c.khach.value}/${khachToan}` : null;
      if (diff && !WKTY_NGHI_SAI.has(`cục ${k}: ${diff}`)) miss.push(`cục ${k}: ${diff}`);
    }
    expect(miss).toEqual([]);
  });

  it("toán: gian thần cùng cung với Thái ất → 1; chính cung cùng cung → số cung", () => {
    expect(toan(5, 9)).toBe(1); // Thìn (gian) ở cung 9
    expect(toan(6, 9)).toBe(9); // Tốn (góc) ở cung 9
    expect(toan(13, 6)).toBe(35); // Tuất → Càn 1 … đến trước Đoài 6, cộng 1
  });
});
