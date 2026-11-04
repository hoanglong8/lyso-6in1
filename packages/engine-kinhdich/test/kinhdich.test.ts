import { describe, expect, it } from "vitest";
import { ganzhi, type CalendarSnapshot } from "@lyso/calendar-vn";
import { castCoins, castMaiHoaNumbers, castMaiHoaTime, HEXAGRAMS, interpret, napGiap, type LineValue } from "../src";

const byName = (n: string) => HEXAGRAMS.find((h) => h.name === n)!;

describe("64 quẻ và Bát cung Kinh Phòng", () => {
  it("64 quẻ khác nhau, mỗi cung đúng 8 quẻ", () => {
    expect(new Set(HEXAGRAMS.map((h) => h.lines.join(""))).size).toBe(64);
    const per = new Map<string, number>();
    for (const h of HEXAGRAMS) per.set(h.palace.name, (per.get(h.palace.name) ?? 0) + 1);
    expect([...per.values()]).toEqual(Array(8).fill(8));
  });

  it("thứ tự trong cung khớp bảng Bát cung", () => {
    const PALACES: Record<string, string[]> = {
      Càn: ["Càn", "Cấu", "Độn", "Bĩ", "Quan", "Bác", "Tấn", "Đại Hữu"],
      Khảm: ["Khảm", "Tiết", "Truân", "Ký Tế", "Cách", "Phong", "Minh Di", "Sư"],
      Cấn: ["Cấn", "Bí", "Đại Súc", "Tổn", "Khuê", "Lý", "Trung Phu", "Tiệm"],
      Chấn: ["Chấn", "Dự", "Giải", "Hằng", "Thăng", "Tỉnh", "Đại Quá", "Tùy"],
      Tốn: ["Tốn", "Tiểu Súc", "Gia Nhân", "Ích", "Vô Vọng", "Phệ Hạp", "Di", "Cổ"],
      Ly: ["Ly", "Lữ", "Đỉnh", "Vị Tế", "Mông", "Hoán", "Tụng", "Đồng Nhân"],
      Khôn: ["Khôn", "Phục", "Lâm", "Thái", "Đại Tráng", "Quải", "Nhu", "Tỷ"],
      Đoài: ["Đoài", "Khốn", "Tụy", "Hàm", "Kiển", "Khiêm", "Tiểu Quá", "Quy Muội"],
    };
    for (const [p, list] of Object.entries(PALACES))
      list.forEach((n, rank) => {
        const h = byName(n);
        expect(h.palace.name, n).toBe(p);
        expect(h.palaceRank, n).toBe(rank);
      });
  });

  it("tên đầy đủ", () => {
    expect(byName("Truân").fullName).toBe("Thủy Lôi Truân");
    expect(byName("Thái").fullName).toBe("Địa Thiên Thái");
    expect(byName("Càn").fullName).toBe("Thuần Càn");
  });
});

describe("Lục hào nạp giáp", () => {
  it("Thiên Phong Cấu: Tân Sửu, Tân Hợi, Tân Dậu, Nhâm Ngọ, Nhâm Thân, Nhâm Tuất; thế 1, ứng 4", () => {
    const h = byName("Cấu");
    const ng = napGiap(h);
    expect(ng.map((l) => l.canChi)).toEqual(["Tân Sửu", "Tân Hợi", "Tân Dậu", "Nhâm Ngọ", "Nhâm Thân", "Nhâm Tuất"]);
    expect(ng.map((l) => l.lucThan)).toEqual(["Phụ mẫu", "Tử tôn", "Huynh đệ", "Quan quỷ", "Huynh đệ", "Phụ mẫu"]);
    expect([h.the, h.ung]).toEqual([1, 4]);
  });

  it("Cấu thiếu Thê tài → phục thần Giáp Dần ở hào 2", () => {
    const r = interpret({ method: "xu", note: "", values: [8, 7, 7, 7, 7, 7] });
    expect(r.main.name).toBe("Cấu");
    const ph = r.lines.filter((l) => l.phucThan);
    expect(ph).toHaveLength(1);
    expect(ph[0]!.pos).toBe(2);
    expect(ph[0]!.phucThan!.canChi).toBe("Giáp Dần");
    expect(ph[0]!.phucThan!.lucThan).toBe("Thê tài");
  });

  it("Thủy Hỏa Ký Tế: cung Khảm tam thế, thế 3 ứng 6", () => {
    const h = byName("Ký Tế");
    expect(napGiap(h).map((l) => l.canChi)).toEqual(["Kỷ Mão", "Kỷ Sửu", "Kỷ Hợi", "Mậu Thân", "Mậu Tuất", "Mậu Tý"]);
    expect([h.the, h.ung]).toEqual([3, 6]);
  });

  it("lục thú theo can ngày: ngày Giáp khởi Thanh Long ở hào 1, ngày Mậu khởi Câu Trần", () => {
    const v: LineValue[] = [7, 7, 7, 7, 7, 7];
    expect(interpret({ method: "xu", note: "", values: v }, ganzhi(0, 0)).lines[0]!.lucThu).toBe("Thanh Long");
    expect(interpret({ method: "xu", note: "", values: v }, ganzhi(4, 4)).lines[0]!.lucThu).toBe("Câu Trần");
    expect(interpret({ method: "xu", note: "", values: v }, ganzhi(9, 9)).lines[5]!.lucThu).toBe("Bạch Hổ");
  });

  it("hào động sinh quẻ biến; hỗ quái từ hào 2–5", () => {
    // Càn, động hào 1 → Cấu
    const r = interpret({ method: "xu", note: "", values: [9, 7, 7, 7, 7, 7] });
    expect(r.changed?.name).toBe("Cấu");
    expect(r.movingLines).toEqual([1]);
    expect(interpret({ method: "xu", note: "", values: [7, 8, 7, 8, 7, 8] }).mutual.name).toBe("Vị Tế"); // Ký Tế → hỗ Vị Tế
  });
});

describe("Lập quẻ", () => {
  it("Quan mai chiêm (Thiệu Khang Tiết): năm Thìn tháng 12 ngày 17 giờ Thân → Trạch Hỏa Cách, hào 1 động, biến Hàm", () => {
    const s = { ganzhi: { year: ganzhi(0, 4) }, lunar: { month: 12, day: 17 }, hour: { chi: 8 } } as unknown as CalendarSnapshot;
    const r = interpret(castMaiHoaTime(s));
    expect(r.main.name).toBe("Cách");
    expect(r.movingLines).toEqual([1]);
    expect(r.changed?.name).toBe("Hàm");
    expect(r.maiHoa?.dung.name).toBe("Ly");
    expect(r.maiHoa?.the.name).toBe("Đoài");
  });

  it("Mai Hoa theo số", () => {
    const r = interpret(castMaiHoaNumbers(9, 3));
    expect(r.main.upper.name).toBe("Càn"); // 9 mod 8 = 1
    expect(r.main.lower.name).toBe("Ly");
    expect(r.movingLines).toEqual([6]); // 12 mod 6 = 0 → 6
  });

  it("gieo xu: mỗi hào 6–9, phân bố gần 1:3:3:1", () => {
    let seed = 42;
    const rand = () => ((seed = (seed * 1103515245 + 12345) % 2 ** 31) / 2 ** 31);
    const count = { 6: 0, 7: 0, 8: 0, 9: 0 } as Record<number, number>;
    for (let i = 0; i < 4000; i++) for (const v of castCoins(rand).values) count[v]!++;
    const n = 24000;
    expect(count[6]! / n).toBeCloseTo(0.125, 1);
    expect(count[7]! / n).toBeCloseTo(0.375, 1);
    expect(castCoins().values).toHaveLength(6);
  });
});
