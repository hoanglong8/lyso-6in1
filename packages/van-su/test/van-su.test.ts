import { describe, expect, it } from "vitest";
import { buildSnapshot } from "@lyso/calendar-vn";
import { chonNgay, cungPhi, DU_NIEN, duNien, hopTuoi, thanTruc, xetNgay } from "../src";

describe("cung phi, bát trạch", () => {
  it("cung phi theo năm âm", () => {
    expect(cungPhi(1990, "nam")).toBe("Khảm");
    expect(cungPhi(1990, "nu")).toBe("Cấn");
    expect(cungPhi(1986, "nam")).toBe("Khôn");
    expect(cungPhi(2000, "nam")).toBe("Ly");
    expect(cungPhi(2000, "nu")).toBe("Càn");
  });
  it("du niên đối xứng", () => {
    const C = ["Khảm", "Ly", "Chấn", "Tốn", "Càn", "Khôn", "Cấn", "Đoài"];
    for (const a of C) for (const b of C) expect(duNien(a, b), `${a}-${b}`).toBe(duNien(b, a));
    for (const a of C) expect(new Set(C.map((b) => duNien(a, b))).size).toBe(DU_NIEN.length);
  });
});

describe("chọn ngày", () => {
  it("Thanh Long: tháng Giêng (Dần) ở ngày Tý; tháng Hai (Mão) ở Dần", () => {
    expect(thanTruc(2, 0)).toBe("Thanh Long");
    expect(thanTruc(3, 2)).toBe("Thanh Long");
    expect(thanTruc(0, 8)).toBe("Thanh Long");
  });
  it("trực Kiến khi chi ngày trùng chi tháng tiết; mỗi ngày có 6 giờ hoàng đạo", () => {
    for (const n of chonNgay("2026-11-01", 60)) {
      const [y, m, d] = n.ymd.split("-").map(Number) as [number, number, number];
      const s = buildSnapshot({ date: { y, m, d }, calendar: "solar", time: { h: 12, mi: 0 } });
      expect(n.truc === "Kiến").toBe(s.ganzhi.day.chi === s.ganzhi.monthBazi.chi);
      expect(n.gioTot).toHaveLength(6);
    }
  });
  it("ngày xung tuổi bị trừ điểm và có cảnh báo", () => {
    const tuoi = buildSnapshot({ date: { y: 1990, m: 5, d: 15 }, calendar: "solar", time: { h: 7, mi: 0 } }).ganzhi.year; // Canh Ngọ
    const ds = chonNgay("2026-11-01", 30, { namSinh: tuoi });
    const xung = ds.filter((n) => n.canChi.endsWith("Tý"));
    expect(xung.length).toBeGreaterThan(0);
    for (const n of xung) expect(n.canhBao.some((c) => c.includes("tuổi"))).toBe(true);
    expect(xetNgay(2026, 11, 13).am).toMatch(/\d+\/\d+/);
  });
});

describe("hợp tuổi", () => {
  it("tam hợp và cung phi", () => {
    const a = buildSnapshot({ date: { y: 1990, m: 5, d: 15 }, calendar: "solar", time: { h: 7, mi: 0 } }); // Canh Ngọ
    const b = buildSnapshot({ date: { y: 1994, m: 8, d: 20 }, calendar: "solar", time: { h: 9, mi: 0 } }); // Giáp Tuất
    const r = hopTuoi({ ten: "A", gioi: "nam", s: a }, { ten: "B", gioi: "nu", s: b });
    expect(r.muc.find((m) => m.nhom === "Địa chi năm")!.text).toContain("tam hợp");
    expect(r.muc.some((m) => m.nhom.startsWith("Cung phi"))).toBe(true);
    expect(r.ketLuan.length).toBeGreaterThan(3);
  });
});
