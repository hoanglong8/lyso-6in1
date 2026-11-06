/**
 * Đối chiếu với oracle độc lập:
 *  - kinqimen (GPL-3.0, chỉ dùng trong test): chuyển bàn + Sách bổ
 *  - qimen-dunjia (MIT, arc119226): cục theo Phù đầu (Trí nhuận) và "Sách bổ" của nó (thực chất Mão sơn)
 * Cả hai tính theo giờ UTC+8; engine nhận snapshot đặt UTC+8 để so cùng điều kiện.
 */
import { describe, expect, it } from "vitest";
import { Qimen } from "kinqimen";
import { generateChartByDatetime, chartToObject } from "qimen-dunjia";
import { buildSnapshot, ganzhi, type CalendarInput } from "@lyso/calendar-vn";
import { buildKyMon, dinhCuc, type Cuc } from "../src";

const G = [..."甲乙丙丁戊己庚辛壬癸"];
const Z = [..."子丑寅卯辰巳午未申酉戌亥"];
const HAN_CUNG: Record<string, number> = { 坎: 1, 坤: 2, 震: 3, 巽: 4, 中: 5, 乾: 6, 兑: 7, 艮: 8, 离: 9 };
const NUM = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 } as Record<string, number>;
const STAR: Record<string, string> = { 蓬: "Thiên Bồng", 芮: "Thiên Nhuế", 冲: "Thiên Xung", 辅: "Thiên Phụ", 禽: "Thiên Cầm", 心: "Thiên Tâm", 柱: "Thiên Trụ", 任: "Thiên Nhậm", 英: "Thiên Anh" };
const DOOR: Record<string, string> = { 休: "Hưu", 死: "Tử", 伤: "Thương", 杜: "Đỗ", 开: "Khai", 惊: "Kinh", 生: "Sinh", 景: "Cảnh" };
const GOD: Record<string, string> = { 符: "Trực Phù", 蛇: "Đằng Xà", 阴: "Thái Âm", 合: "Lục Hợp", 虎: "Bạch Hổ", 玄: "Huyền Vũ", 地: "Cửu Địa", 天: "Cửu Thiên" };
const gzOf = (s: string) => ganzhi(G.indexOf(s[0]!), Z.indexOf(s[1]!));

const BJ = { name: "Bắc Kinh", lat: 39.9, lon: 116.4 };
const snap = (y: number, m: number, d: number, h: number, mi: number) =>
  buildSnapshot({ date: { y, m, d }, calendar: "solar", time: { h, mi }, place: BJ, utcOffsetOverrideMinutes: 480 } as CalendarInput, {
    dayBoundary: "ty23",
    useTrueSolarTime: false,
    lunarTzMode: "vn-standard",
  });

/** Bộ thời điểm giả ngẫu nhiên, xác định (LCG) */
function* moments(n: number, seed = 7) {
  let s = seed;
  const r = () => ((s = (s * 1103515245 + 12345) % 2 ** 31) / 2 ** 31);
  for (let i = 0; i < n; i++) {
    const t = Date.UTC(1990, 0, 1) + Math.floor(r() * 50 * 365.25 * 86400000);
    const d = new Date(t);
    yield { y: d.getUTCFullYear(), m: d.getUTCMonth() + 1, d: d.getUTCDate(), h: d.getUTCHours(), mi: Math.floor(r() * 60) };
  }
}

describe("Kỳ môn — oracle kinqimen (chuyển bàn, Sách bổ)", () => {
  it("dựng bàn từ cùng cục và can chi: địa, thiên, sao, môn, thần khớp mọi cung", () => {
    const miss: string[] = [];
    let n = 0;
    for (const t of moments(3000)) {
      const k = new Qimen({ year: t.y, month: t.m, day: t.d, hour: t.h, minute: t.mi }).pan({ type: "转盘", juMethod: "拆补" }) as any;
      const m = /^(..)年(..)月(..)日(..)时$/.exec(k.ganzhi)!;
      const ju = /^(阳|阴)(.)局/.exec(k.ju)!;
      const cuc = { duong: ju[1] === "阳", so: NUM[ju[2]!]!, term: 0, termName: "", nguyen: 0, method: "sach-bo", note: "" } as Cuc;
      const c = buildKyMon(cuc, gzOf(m[3]!), gzOf(m[4]!));
      n++;
      for (const [han, cung] of Object.entries(HAN_CUNG)) {
        const p = c.palaces[cung]!;
        if (k.earthPan[han] && G[p.dia[0]!] !== k.earthPan[han]) miss.push(`${k.ganzhi} ${k.ju} địa ${han}`);
        if (cung === 5) continue;
        if (k.skyPan[han] && G[p.thien[0]!] !== k.skyPan[han]) miss.push(`${k.ganzhi} ${k.ju} thiên ${han}: ${G[p.thien[0]!]}≠${k.skyPan[han]}`);
        const st = STAR[k.starPan[han]];
        if (st && !p.sao.includes(st) && !(st === "Thiên Cầm" && p.sao.includes("Thiên Nhuế"))) miss.push(`${k.ganzhi} ${k.ju} sao ${han}: ${p.sao}≠${st}`);
        if (k.doorPan[han] && p.mon !== DOOR[k.doorPan[han]]) miss.push(`${k.ganzhi} ${k.ju} môn ${han}: ${p.mon}≠${DOOR[k.doorPan[han]]}`);
        if (k.godPan[han] && p.than !== GOD[k.godPan[han]]) miss.push(`${k.ganzhi} ${k.ju} thần ${han}: ${p.than}≠${GOD[k.godPan[han]]}`);
      }
    }
    if (miss.length) console.log(`${miss.length} lệch / ${n} bàn\n` + miss.slice(0, 30).join("\n"));
    expect(miss).toEqual([]);
  });

  it("định cục Sách bổ từ lịch: khớp kinqimen", () => {
    const miss: string[] = [];
    for (const t of moments(3000, 11)) {
      const k = new Qimen({ year: t.y, month: t.m, day: t.d, hour: t.h, minute: t.mi }).pan({ type: "转盘", juMethod: "拆补" }) as any;
      const ju = /^(阳|阴)(.)局/.exec(k.ju)!;
      const c = dinhCuc(snap(t.y, t.m, t.d, t.h, t.mi), "sach-bo");
      if (c.duong !== (ju[1] === "阳") || c.so !== NUM[ju[2]!]) miss.push(`${t.y}-${t.m}-${t.d} ${t.h}:${t.mi} ${k.jieqi} ${k.ju} ≠ ${c.termName} ${c.duong ? "D" : "A"}${c.so}`);
    }
    if (miss.length) console.log(`${miss.length} lệch\n` + miss.slice(0, 30).join("\n"));
    expect(miss).toEqual([]);
  });
});

describe("Kỳ môn — oracle qimen-dunjia (Trí nhuận, Mão sơn)", () => {
  for (const [method, opt] of [["tri-nhuan", { 定局法: "符頭" }], ["mao-son", {}]] as const) {
    it(`${method}: cục khớp qimen-dunjia`, () => {
      const miss: string[] = [];
      for (const t of moments(method === "tri-nhuan" ? 400 : 2000, method === "mao-son" ? 3 : 5)) {
        // 23h: qimen-dunjia định cục theo ngày dân sự, engine theo quy ước giờ Tý sớm sang ngày mới (như kinqimen)
        if (t.h === 23) continue;
        const key = `${t.y}${String(t.m).padStart(2, "0")}${String(t.d).padStart(2, "0")}${String(t.h).padStart(2, "0")}`;
        const q = chartToObject(generateChartByDatetime(key, opt as never)) as any;
        const c = dinhCuc(snap(t.y, t.m, t.d, t.h, 0), method);
        if (c.duong !== (q["陰陽"] === "陽") || c.so !== q["局數"]) miss.push(`${key} ${q["節氣"]}${q["三元"]} ${q["陰陽"]}${q["局數"]} ≠ ${c.termName} ${c.duong ? "D" : "A"}${c.so} (${c.note})`);
      }
      if (miss.length) console.log(`${method}: ${miss.length} lệch\n` + miss.slice(0, 20).join("\n"));
      expect(miss).toEqual([]);
    });
  }
});
