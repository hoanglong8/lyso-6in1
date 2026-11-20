import { describe, expect, it } from "vitest";
import { buildSnapshot, ganzhi, jdnFromYmd, CAN, type CalendarInput } from "@lyso/calendar-vn";
import { buildKyMonFromSnapshot, buildKyMon, cucMaoSon, cucSachBo, cucTriNhuan, triNhuanChain, CUNG, type Cuc } from "../src";

const gz = (s: string) => {
  const [c, z] = s.split(" ");
  const CANV = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
  const CHIV = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
  return ganzhi(CANV.indexOf(c!), CHIV.indexOf(z!));
};
const BJ = { name: "Bắc Kinh", lat: 39.9, lon: 116.4 };
const snapCN = (y: number, m: number, d: number, h: number, mi = 0) =>
  buildSnapshot({ date: { y, m, d }, calendar: "solar", time: { h, mi }, place: BJ, utcOffsetOverrideMinutes: 480 } as CalendarInput, {
    dayBoundary: "ty23",
    useTrueSolarTime: false,
    lunarTzMode: "vn-standard",
  });

/** Tên cung theo chữ Hán của oracle → số Lạc thư */
const HAN_CUNG: Record<string, number> = { 坎: 1, 坤: 2, 震: 3, 巽: 4, 中: 5, 乾: 6, 兑: 7, 艮: 8, 离: 9 };
const HAN_CAN = [..."甲乙丙丁戊己庚辛壬癸"];

describe("Dựng bàn chuyển bàn", () => {
  // Đáp án từ kinqimen (转盘, 拆补) cho 2024-06-15 14:30 UTC+8: 甲辰年庚午月庚戌日癸未时, 阳六局上
  it("dương 6 cục, giờ Quý Mùi — khớp kinqimen từng cung", () => {
    const cuc: Cuc = cucSachBo(5, gz("Canh Tuất")); // Mang chủng
    expect([cuc.duong, cuc.so, cuc.nguyen]).toEqual([true, 6, 0]);
    const c = buildKyMon(cuc, gz("Canh Tuất"), gz("Quý Mùi"));
    const earth = { 乾: "戊", 兑: "己", 艮: "庚", 离: "辛", 坎: "壬", 坤: "癸", 震: "丁", 巽: "丙", 中: "乙" };
    const sky = { 坤: "己", 兑: "戊", 乾: "壬", 坎: "庚", 艮: "丁", 震: "丙", 巽: "辛", 离: "癸" };
    const door = { 兑: "Kinh", 乾: "Khai", 坎: "Hưu", 艮: "Sinh", 震: "Thương", 巽: "Đỗ", 离: "Cảnh", 坤: "Tử" };
    const star = { 坤: "Thiên Trụ", 兑: "Thiên Tâm", 乾: "Thiên Bồng", 坎: "Thiên Nhậm", 艮: "Thiên Xung", 震: "Thiên Phụ", 巽: "Thiên Anh", 离: "Thiên Nhuế" };
    const god = { 坤: "Trực Phù", 兑: "Đằng Xà", 乾: "Thái Âm", 坎: "Lục Hợp", 艮: "Bạch Hổ", 震: "Huyền Vũ", 巽: "Cửu Địa", 离: "Cửu Thiên" };
    for (const [k, v] of Object.entries(earth)) expect(HAN_CAN[c.palaces[HAN_CUNG[k]!]!.dia[0]!], `địa ${k}`).toBe(v);
    for (const [k, v] of Object.entries(sky)) expect(HAN_CAN[c.palaces[HAN_CUNG[k]!]!.thien[0]!], `thiên ${k}`).toBe(v);
    for (const [k, v] of Object.entries(door)) expect(c.palaces[HAN_CUNG[k]!]!.mon, `môn ${k}`).toBe(v);
    for (const [k, v] of Object.entries(star)) expect(c.palaces[HAN_CUNG[k]!]!.sao[0], `sao ${k}`).toBe(v);
    for (const [k, v] of Object.entries(god)) expect(c.palaces[HAN_CUNG[k]!]!.than, `thần ${k}`).toBe(v);
    expect(c.palaces[9]!.sao).toContain("Thiên Cầm"); // Cầm ký Khôn đi cùng Nhuế
    expect(c.trucPhu).toMatchObject({ sao: "Thiên Trụ", tuCung: 7, denCung: 2 });
    expect(c.trucSu).toMatchObject({ mon: "Kinh", denCung: 7 });
    expect(c.palaces.filter((p) => p.tuanKhong).map((p) => p.cung).sort()).toEqual([2, 7]); // tuần Giáp Tuất không Thân Dậu
  });

  it("giờ Giáp là phục ngâm; mỗi cung ngoài có đúng 1 môn, 1 thần", () => {
    for (let so = 1; so <= 9; so++)
      for (const duong of [true, false]) {
        const cuc = { ...cucSachBo(duong ? 0 : 6, gz("Giáp Tý")), so, duong };
        const c = buildKyMon(cuc, gz("Giáp Tý"), gz("Giáp Tý"));
        expect(c.phucNgam).toBe(true);
        for (let h = 0; h < 60; h++) {
          const k = buildKyMon(cuc, gz("Giáp Tý"), ganzhi(h, h));
          const outer = k.palaces.slice(1).filter((p) => p.cung !== 5);
          expect(outer.filter((p) => p.mon).length).toBe(8);
          expect(new Set(outer.map((p) => p.than)).size).toBe(8);
          expect(outer.flatMap((p) => p.sao).length).toBe(9);
        }
      }
  });

  it("âm độn địa bàn bố nghịch: âm 9 cục Mậu ở Ly, Kỷ ở Cấn", () => {
    const c = buildKyMon({ ...cucSachBo(6, gz("Giáp Tý")), so: 9 }, gz("Giáp Tý"), gz("Ất Sửu"));
    expect(CAN[c.palaces[9]!.dia[0]!]).toBe("Mậu");
    expect(CAN[c.palaces[8]!.dia[0]!]).toBe("Kỷ");
    expect(CUNG[1]).toBe("Khảm");
  });
});

describe("Định cục", () => {
  it("Sách bổ: nguyên theo phù đầu", () => {
    expect(cucSachBo(18, gz("Giáp Tý")).nguyen).toBe(0);
    expect(cucSachBo(18, gz("Kỷ Tỵ")).nguyen).toBe(1);
    expect(cucSachBo(18, gz("Giáp Tuất")).nguyen).toBe(2);
    expect(cucSachBo(18, gz("Quý Mão")).nguyen).toBe(1);
    expect(cucSachBo(18, gz("Canh Tuất")).nguyen).toBe(0);
  });

  it("Mão sơn: 2024-06-15 14:00 UTC+8 là Mang chủng hạ nguyên, dương 9 cục (khớp qimen-dunjia)", () => {
    const s = snapCN(2024, 6, 15, 14);
    const c = cucMaoSon(s.solarTerm.current.index, new Date(s.instantUtc).getTime() - new Date(s.solarTerm.current.instant).getTime());
    expect([c.termName, c.nguyen, c.duong, c.so]).toEqual(["Mang chủng", 2, true, 9]);
  });

  it("Trí nhuận: 2024-06-15 là Hạ chí thượng nguyên, âm 9 cục (siêu thần)", () => {
    const c = cucTriNhuan(jdnFromYmd(2024, 6, 15), 480);
    expect([c.termName, c.nguyen, c.duong, c.so]).toEqual(["Hạ chí", 0, false, 9]);
  });

  it("Trí nhuận: 1719-08-08 là Lập thu thượng nguyên chính thụ, âm 2 cục (Kỳ môn Thống tông)", () => {
    const j = jdnFromYmd(1719, 8, 8);
    const chain = triNhuanChain(j, 480);
    const b = chain[chain.length - 1]!;
    expect(b.start).toBe(j);
    expect(b.offset).toBe(0);
    const c = cucTriNhuan(j, 480);
    expect([c.termName, c.nguyen, c.duong, c.so]).toEqual(["Lập thu", 0, false, 2]);
  });

  it("Trí nhuận 1800–2100: nhuận chỉ ở Mang chủng / Đại tuyết, khoảng 105 lần, không bỏ tiết", () => {
    const chain = triNhuanChain(jdnFromYmd(2100, 12, 31), 480).filter(() => true);
    // chuỗi trên chỉ phủ 6 năm; dựng nối các đoạn để đếm toàn kỳ
    let leaps = 0;
    const where = new Set<number>();
    let prev: number | null = null;
    for (let y = 1806; y <= 2100; y += 6) {
      const seg = triNhuanChain(jdnFromYmd(y, 1, 1), 480).filter((b) => b.start >= jdnFromYmd(y - 6, 1, 1));
      for (const b of seg) {
        if (prev !== null && b.start <= prev) continue;
        prev = b.start;
        if (b.leap) {
          leaps++;
          where.add(b.term);
        }
      }
    }
    void chain;
    expect([...where].sort((a, b) => a - b)).toEqual([5, 17]);
    console.log("nhuận 1800–2100:", leaps);
    expect(Math.abs(leaps - 105)).toBeLessThanOrEqual(1);
  });
});

describe("Tứ can, nhật không/mã, môn ngâm, giáp ranh tiết", () => {
  it("tứ can nằm đúng cung có can đó trên thiên bàn; Giáp ẩn dưới nghi của tuần", () => {
    const cuc: Cuc = cucSachBo(5, gz("Canh Tuất"));
    const c = buildKyMon(cuc, gz("Canh Tuất"), gz("Quý Mùi"), undefined, { nam: gz("Giáp Thìn"), thang: gz("Canh Ngọ") });
    expect(c.tuCan.map((x) => x.tru)).toEqual(["nhat", "thoi", "nien", "nguyet"]);
    for (const x of c.tuCan) expect(c.palaces[x.cung]!.thien).toContain(x.canTim);
    const nien = c.tuCan.find((x) => x.tru === "nien")!;
    expect(nien.can).toBe(0);
    expect(nien.canTim).toBe(8); // Giáp Thìn tuần → Nhâm
    // thiên bàn kinqimen: Canh ở Khảm 1, Quý ở Ly 9
    expect(c.tuCan[0]!.cung).toBe(1);
    expect(c.tuCan[1]!.cung).toBe(9);
  });
  it("nhật không theo tuần của ngày, nhật mã theo chi ngày", () => {
    const cuc: Cuc = cucSachBo(5, gz("Canh Tuất"));
    const c = buildKyMon(cuc, gz("Canh Tuất"), gz("Quý Mùi"));
    // Canh Tuất thuộc tuần Giáp Thìn → không Dần Mão → cung Cấn 8, Chấn 3; Tuất (Dần Ngọ Tuất) mã tại Thân → Khôn 2
    expect([1, 2, 3, 4, 6, 7, 8, 9].filter((k) => c.palaces[k]!.nhatKhong)).toEqual([3, 8]);
    expect([1, 2, 3, 4, 6, 7, 8, 9].filter((k) => c.palaces[k]!.nhatMa)).toEqual([2]);
  });
  it("môn ngâm xét riêng với tinh ngâm", () => {
    const cuc: Cuc = cucSachBo(5, gz("Canh Tuất"));
    for (let i = 0; i < 60; i++) {
      const h = ganzhi(i % 10, i % 12);
      const c = buildKyMon(cuc, gz("Canh Tuất"), h);
      const monGoc: Record<number, string> = { 1: "Hưu", 8: "Sinh", 3: "Thương", 4: "Đỗ", 9: "Cảnh", 2: "Tử", 7: "Kinh", 6: "Khai" };
      const ve = Object.entries(monGoc).every(([k, m]) => c.palaces[+k]!.mon === m);
      expect(c.monPhucNgam).toBe(ve);
    }
  });
  it("cảnh báo khi giờ xem sát lúc giao tiết", () => {
    const s = snapCN(2024, 6, 21, 4, 30); // Hạ chí 2024-06-21 04:51 Bắc Kinh
    expect(buildKyMonFromSnapshot(s).canhBaoTiet).toMatch(/Hạ chí/);
    expect(buildKyMonFromSnapshot(snapCN(2024, 6, 28, 12)).canhBaoTiet).toBeUndefined();
  });
});
