import { describe, expect, it } from "vitest";
import { buildSnapshot, wallToInstant, type CalendarInput } from "../src";

const SAIGON = { name: "Sài Gòn", lat: 10.7769, lon: 106.7009 };
const HANOI = { name: "Hà Nội", lat: 21.0285, lon: 105.8542 };

describe("Múi giờ lịch sử", () => {
  it("Sài Gòn 1970 dùng UTC+8, Hà Nội 1970 dùng UTC+7", () => {
    const wall = Date.UTC(1970, 5, 1, 7, 30);
    expect(wallToInstant(wall, "nam").info.offsetMinutes).toBe(480);
    expect(wallToInstant(wall, "bac").info.offsetMinutes).toBe(420);
  });
  it("Sài Gòn sau 13/6/1975 về UTC+7", () => {
    expect(wallToInstant(Date.UTC(1975, 5, 13, 12), "nam").info.offsetMinutes).toBe(420);
    expect(wallToInstant(Date.UTC(1975, 5, 12, 12), "nam").info.offsetMinutes).toBe(480);
  });
  it("giờ bị lặp khi lùi đồng hồ 13/6/1975 được gắn cờ", () => {
    const r = wallToInstant(Date.UTC(1975, 5, 12, 23, 30), "nam");
    expect(r.info.ambiguous).toBe(true);
  });
  it("miền Bắc 1960 gắn cờ chưa chắc chắn", () => {
    expect(wallToInstant(Date.UTC(1960, 0, 1, 12), "bac").info.uncertain).toBe(true);
  });
});

describe("CalendarSnapshot", () => {
  const base: CalendarInput = { date: { y: 1970, m: 6, d: 1 }, calendar: "solar", time: { h: 7, mi: 30 }, place: SAIGON };

  it("7:30 sáng ở Sài Gòn năm 1970 là giờ Mão (6:30 theo UTC+7)", () => {
    const s = buildSnapshot(base, { dayBoundary: "ty23", useTrueSolarTime: true, lunarTzMode: "historical" });
    expect(s.utcOffset.minutes).toBe(480);
    expect(s.hour.name).toBe("Mão");
    expect(s.warnings.map((w) => w.code)).toContain("solar-vs-clock-hour");
  });

  it("theo giờ đồng hồ vẫn là giờ Thìn", () => {
    const s = buildSnapshot(base, { dayBoundary: "ty23", useTrueSolarTime: false, lunarTzMode: "historical" });
    expect(s.hour.name).toBe("Thìn");
  });

  it("sinh 23:30 — ty23 sang ngày sau, ty00 giữ ngày", () => {
    const input: CalendarInput = { date: { y: 2024, m: 3, d: 10 }, calendar: "solar", time: { h: 23, mi: 30 }, place: HANOI };
    const a = buildSnapshot(input, { dayBoundary: "ty23", useTrueSolarTime: false, lunarTzMode: "historical" });
    const b = buildSnapshot(input, { dayBoundary: "ty00", useTrueSolarTime: false, lunarTzMode: "historical" });
    expect(a.dayJdn).toBe(b.dayJdn + 1);
    expect(a.hour.name).toBe("Tý");
    expect(a.ganzhi.hour.name).toBe(b.ganzhi.hour.name); // cùng can giờ (theo ngày hôm sau)
    expect(a.lunar.day).toBe(b.lunar.day + 1);
  });

  it("nhập âm lịch cho ra đúng ngày dương", () => {
    const s = buildSnapshot({ date: { y: 2026, m: 1, d: 1 }, calendar: "lunar", time: { h: 10, mi: 0 }, place: HANOI });
    expect(s.clock).toMatchObject({ y: 2026, m: 2, d: 17 });
    expect(s.ganzhi.year.name).toBe("Bính Ngọ");
    expect(s.lunar.conGiap).toBe("Ngựa");
  });

  it("ngày dương không hợp lệ báo lỗi", () => {
    expect(() => buildSnapshot({ date: { y: 2025, m: 2, d: 30 }, calendar: "solar", time: null })).toThrow();
  });

  it("không rõ giờ gắn cảnh báo", () => {
    const s = buildSnapshot({ date: { y: 2025, m: 2, d: 3 }, calendar: "solar", time: null });
    expect(s.warnings.map((w) => w.code)).toContain("time-unknown");
  });

  it("nguyệt tướng: sau Xuân phân là Tuất, sau Đông chí là Sửu", () => {
    const a = buildSnapshot({ date: { y: 2025, m: 4, d: 1 }, calendar: "solar", time: { h: 12, mi: 0 }, place: HANOI });
    const b = buildSnapshot({ date: { y: 2025, m: 12, d: 30 }, calendar: "solar", time: { h: 12, mi: 0 }, place: HANOI });
    expect(a.nguyetTuong.name).toBe("Tuất");
    expect(b.nguyetTuong.name).toBe("Sửu");
  });
});
