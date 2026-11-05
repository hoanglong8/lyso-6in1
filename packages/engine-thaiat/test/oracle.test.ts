/**
 * Đối chiếu kintaiyi (MIT, kentang2017). File JSON sinh bằng scripts/oracle/kintaiyi_dump.py;
 * bỏ qua khi không có (đặt KINTAIYI_ORACLE hoặc /tmp/tydump/ty.json).
 * Mỗi ca đưa nguyên tích số, độn và Thái tuế của kintaiyi vào engine để so riêng phần quy tắc.
 */
import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { buildThaiAt, type TichSo } from "../src";

const FILE = process.env.KINTAIYI_ORACLE ?? "/tmp/tydump/ty.json";
const data: any[] = existsSync(FILE) ? JSON.parse(readFileSync(FILE, "utf8")) : [];
const R16 = [..."子丑艮寅卯辰巽巳午未坤申酉戌乾亥"];
const CHI = [..."子丑寅卯辰巳午未申酉戌亥"];
const SEQ: Record<string, string> = { 乾: "Càn", 離: "Ly", 艮: "Cấn", 震: "Chấn", 中: "Trung", 兌: "Đoài", 坤: "Khôn", 坎: "Khảm", 巽: "Tốn", 巳: "Tỵ", 申: "Thân", 寅: "Dần" };
const KE = ["nien", "nguyet", "nhat", "thoi"] as const;

describe.skipIf(!data.length)("Thái ất — oracle kintaiyi", () => {
  it("cùng tích số: Thái ất, Văn xương, Thủy kích, Định mục, toán, tướng, thần sát khớp", () => {
    const miss = new Map<string, string[]>();
    const note = (field: string, s: string) => miss.set(field, [...(miss.get(field) ?? []), s]);
    for (const r of data) {
      const duong = (r.kook["文"] as string).startsWith("陽");
      const t: TichSo = { ke: KE[r.ji]!, value: r.accnum, duong, thaiTue: CHI.indexOf(r.taishui) };
      const c = buildThaiAt(t);
      const id = `${KE[r.ji]} ${r.y}-${r.m}-${r.d} ${r.h}h cục ${c.cuc}`;
      const cmp = (f: string, mine: unknown, theirs: unknown) => String(mine) !== String(theirs) && note(f, `${id}: ${mine} ≠ ${theirs}`);
      cmp("cục", c.cuc, r.kook["數"]);
      cmp("thaiAt", c.thaiAt.cung, Number(r.ty));
      cmp("vanXuong", R16[c.vanXuong], r.skyeyes);
      cmp("keThan", CHI[c.keThan], r.jigod);
      cmp("hopThan", CHI[c.hopThan], r.hegod);
      cmp("thuyKich", R16[c.thuyKich], r.sf);
      cmp("dinhMuc", R16[c.dinhMuc], r.se);
      cmp("chuToan", c.chu.value, r.home_cal);
      cmp("khachToan", c.khach.value, r.away_cal);
      cmp("dinhToan", c.dinh.value, r.set_cal);
      cmp("chuDai", c.chu.daiTuong, r.home_general);
      cmp("khachDai", c.khach.daiTuong, r.away_general);
      cmp("thienAt", c.thienAt, SEQ[r.skyyi]);
      cmp("diaAt", c.diaAt, SEQ[r.earthyi]);
      cmp("trucPhu", c.trucPhu, SEQ[r.zhifu]);
      cmp("tuThan", c.tuThan, SEQ[r.fgd]);
      cmp("quanCo", CHI[c.quanCo], r.kingbase);
      cmp("thanCo", CHI[c.thanCo], r.officerbase);
      cmp("danCo", CHI[c.danCo], r.pplbase);
      cmp("phiPhu", c.phiPhu === "Trung" ? "中" : CHI["Tý Sửu Dần Mão Thìn Tỵ Ngọ Mùi Thân Dậu Tuất Hợi".split(" ").indexOf(c.phiPhu)], r.flyfu);
    }
    const summary = [...miss.entries()].map(([f, l]) => `${f}: ${l.length}/${data.length}\n  ${l.slice(0, 4).join("\n  ")}`);
    console.log(summary.join("\n") || "khớp toàn bộ");
    // Mọi trường không phụ thuộc toán/Thủy kích phải khớp tuyệt đối
    for (const f of miss.keys()) expect(["thuyKich", "khachToan", "dinhToan", "chuDai", "khachDai", "chuToan"], f).toContain(f);
  });

  it("khác biệt với kintaiyi chỉ thuộc các loại đã giải thích", () => {
    for (const r of data) {
      const t: TichSo = { ke: KE[r.ji]!, value: r.accnum, duong: (r.kook["文"] as string).startsWith("陽"), thaiTue: CHI.indexOf(r.taishui) };
      const c = buildThaiAt(t);
      // (1) kintaiyi trả toán 0 khi mục ở chính cung/góc trùng cung Thái ất — sách: toán = số cung Thái ất
      if (String(c.chu.value) !== String(r.home_cal)) {
        expect(String(r.home_cal)).toBe("0");
        expect(c.chu.value).toBe(c.thaiAt.cung);
      }
      // (2) đại tướng: toán 1 hoặc chẵn chục theo Vũ kinh tổng yếu (1 → 1, 10 → 1, 30 → 3), kintaiyi khác
      if (String(c.chu.daiTuong) !== String(r.home_general) && String(r.home_cal) !== "0") {
        expect(c.chu.value === 1 || c.chu.value % 10 === 0).toBe(true);
      }
      // (3) Thủy kích niên kế: chỉ cục 30/66 (bảng kintaiyi chép sai); nhật/thời kế kintaiyi tra bảng niên kế, bỏ qua Thái tuế thật
      if (R16[c.thuyKich] !== r.sf && t.ke === "nien") expect([30, 66]).toContain(c.cuc);
    }
  });
});
