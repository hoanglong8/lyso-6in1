import { describe, expect, it } from "vitest";
import { ganzhi, CAN, CHI } from "@lyso/calendar-vn";
import { khongVong, thanSatOf, THAN_SAT } from "../src";

const gz = (name: string) => {
  const [c, z] = name.split(" ");
  return ganzhi(CAN.indexOf(c as never), CHI.indexOf(z as never));
};
const names = (target: string, year: string, month: string, day: string, o = {}) =>
  thanSatOf(gz(target), { year: gz(year), month: gz(month), day: gz(day) }, o).map((h) => h.name);

describe("Thần sát Bát tự", () => {
  it("Không vong theo tuần: Giáp Tý → Tuất Hợi, Giáp Ngọ → Thìn Tỵ, Quý Hợi → Tý Sửu", () => {
    expect(khongVong(gz("Giáp Tý"))).toEqual([10, 11]);
    expect(khongVong(gz("Ất Sửu"))).toEqual([10, 11]);
    expect(khongVong(gz("Giáp Ngọ"))).toEqual([4, 5]);
    expect(khongVong(gz("Quý Hợi"))).toEqual([0, 1]);
  });

  it("Thiên Ất quý nhân: ngày Giáp gặp Sửu/Mùi; ngày Tân gặp Dần/Ngọ", () => {
    expect(names("Ất Sửu", "Bính Thìn", "Canh Dần", "Giáp Ngọ")).toContain("Thiên Ất quý nhân");
    expect(names("Canh Dần", "Bính Thìn", "Canh Dần", "Tân Mão")).toContain("Thiên Ất quý nhân");
    expect(names("Canh Thìn", "Bính Thìn", "Canh Dần", "Tân Mão")).not.toContain("Thiên Ất quý nhân");
  });

  it("Lộc, Dương nhận, Văn Xương theo can ngày", () => {
    const h = names("Đinh Mão", "Bính Tý", "Canh Dần", "Giáp Thìn");
    expect(h).toContain("Dương nhận"); // Giáp nhận ở Mão
    expect(names("Bính Dần", "Bính Tý", "Canh Dần", "Giáp Thìn")).toContain("Lộc thần");
    expect(names("Kỷ Tỵ", "Bính Tý", "Canh Dần", "Giáp Thìn")).toContain("Văn Xương");
    // âm can không có Dương nhận
    expect(names("Mậu Thìn", "Bính Tý", "Canh Dần", "Ất Dậu")).not.toContain("Dương nhận");
  });

  it("nhóm Tam hợp: năm Tý → Dịch mã Dần, Đào hoa Dậu, Hoa cái Thìn, Kiếp sát Tỵ", () => {
    const base = ["Giáp Tý", "Bính Dần", "Đinh Mão"] as const;
    expect(names("Canh Dần", ...base)).toContain("Dịch mã");
    expect(names("Quý Dậu", ...base)).toContain("Đào hoa");
    expect(names("Nhâm Thìn", ...base)).toContain("Hoa cái");
    expect(names("Ất Tỵ", ...base)).toContain("Kiếp sát");
    expect(names("Ất Hợi", ...base)).toContain("Vong thần");
    expect(names("Bính Tý", ...base)).toContain("Tướng tinh");
  });

  it("Thiên đức / Nguyệt đức theo chi tháng", () => {
    // tháng Dần: Thiên đức Đinh, Nguyệt đức Bính
    expect(names("Đinh Dậu", "Giáp Tý", "Bính Dần", "Giáp Thìn")).toContain("Thiên đức");
    expect(names("Bính Thân", "Giáp Tý", "Bính Dần", "Giáp Thìn")).toContain("Nguyệt đức");
    // tháng Mão: Thiên đức ở chi Thân
    expect(names("Canh Thân", "Giáp Tý", "Đinh Mão", "Giáp Thìn")).toContain("Thiên đức");
  });

  it("Khôi cương chỉ xét trụ ngày", () => {
    expect(names("Canh Thìn", "Giáp Tý", "Bính Dần", "Canh Thìn", { isDayPillar: true })).toContain("Khôi cương");
    expect(names("Canh Thìn", "Giáp Tý", "Bính Dần", "Giáp Ngọ")).not.toContain("Khôi cương");
  });

  it("Cô thần, Quả tú, Hồng loan, Thiên hỷ theo chi năm", () => {
    const base = ["Giáp Tý", "Bính Dần", "Giáp Ngọ"] as const; // năm Tý
    expect(names("Bính Dần", ...base)).toContain("Cô thần");
    expect(names("Giáp Tuất", ...base)).toContain("Quả tú");
    expect(names("Đinh Mão", ...base)).toContain("Hồng loan");
    expect(names("Quý Dậu", ...base)).toContain("Thiên hỷ");
    // năm Ngọ: Hồng loan Dậu
    expect(names("Quý Dậu", "Canh Ngọ", "Bính Dần", "Giáp Tý")).toContain("Hồng loan");
  });

  it("mọi sao trả về đều có trong bảng định nghĩa", () => {
    for (let i = 0; i < 60; i++)
      for (const h of thanSatOf(ganzhi(i, i), { year: ganzhi(i * 7, i * 7), month: ganzhi(2, 2 + (i % 12)), day: ganzhi(i * 11, i * 11) }))
        expect(THAN_SAT[h.name]).toBeDefined();
  });
});
