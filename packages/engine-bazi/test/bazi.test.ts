import { describe, expect, it } from "vitest";
import { ChildLimit, Gender, SolarTime } from "tyme4ts";
import { buildSnapshot, CAN_HAN } from "@lyso/calendar-vn";
import { buildBazi, NGU_HANH, THAP_THAN, TRUONG_SINH, type Gender as G } from "../src";

const TEN_STAR_HAN = ["比肩", "劫财", "食神", "伤官", "偏财", "正财", "七杀", "正官", "偏印", "正印"];
const TERRAIN_HAN = ["长生", "沐浴", "冠带", "临官", "帝旺", "衰", "病", "死", "墓", "绝", "胎", "养"];
const SOUND_HAN = "海中金 炉中火 大林木 路旁土 剑锋金 山头火 涧下水 城头土 白蜡金 杨柳木 泉中水 屋上土 霹雳火 松柏木 长流水 沙中金 山下火 平地木 壁上土 金箔金 覆灯火 天河水 大驿土 钗钏金 桑柘木 大溪水 沙中土 天上火 石榴木 大海水".split(" ");

const vnTen = (h: string) => THAP_THAN[TEN_STAR_HAN.indexOf(h)];
const vnTerrain = (h: string) => TRUONG_SINH[TERRAIN_HAN.indexOf(h)];

function both(y: number, m: number, d: number, h: number, mi: number, gender: G) {
  const s = buildSnapshot(
    { date: { y, m, d }, calendar: "solar", time: { h, mi }, place: { lat: 39.9, lon: 116.4 }, utcOffsetOverrideMinutes: 480 },
    { dayBoundary: "ty23", useTrueSolarTime: false, lunarTzMode: "historical" },
  );
  const ours = buildBazi(s, gender, { daiVanCount: 3 });
  const st = SolarTime.fromYmdHms(y, m, d, h, mi, 0);
  const ec = st.getLunarHour().getEightChar();
  const cl = ChildLimit.fromSolarTime(st, gender === "nam" ? Gender.MAN : Gender.WOMAN);
  return { ours, ec, cl };
}

// Khởi vận: số ngày được phép lệch 1 vì 12 phút = 1 ngày, còn hai thư viện làm tròn
// thời khắc giao tiết khác nhau ở mức giây. Năm và tháng phải khớp tuyệt đối.
describe("Thập thần, tàng can, nạp âm, trường sinh, đại vận khớp tyme4ts", () => {
  it("mẫu 1935–2085", () => {
    const bad: string[] = [];
    let n = 0;
    for (let y = 1935; y <= 2085; y += 1) {
      for (const [m, d, h] of [[2, 3, 5], [5, 17, 10], [8, 9, 15], [11, 28, 20]] as const) {
        const gender: G = n++ % 2 ? "nam" : "nu";
        const { ours, ec, cl } = both(y, m, d, h, 40, gender);
        const dm = ec.getDay().getHeavenStem();
        const cols = [ec.getYear(), ec.getMonth(), ec.getDay(), ec.getHour()];
        ours.pillars.forEach((p, i) => {
          const c = cols[i]!;
          const tag = `${y}-${m}-${d} ${p.label}`;
          if (i !== 2 && p.thapThan !== vnTen(dm.getTenStar(c.getHeavenStem()).getName())) bad.push(`${tag} thập thần`);
          if (p.napAm !== undefined && SOUND_HAN.indexOf(c.getSound().getName()) !== Math.floor(p.ganzhi.index60 / 2)) bad.push(`${tag} nạp âm`);
          if (p.truongSinh !== vnTerrain(dm.getTerrain(c.getEarthBranch()).getName())) bad.push(`${tag} trường sinh`);
          const hidden = c.getEarthBranch().getHideHeavenStems().map((x) => x.getHeavenStem().getName()).join("");
          if (p.tangCan.map((t) => CAN_HAN[t.can]).join("") !== hidden) bad.push(`${tag} tàng can`);
        });
        const kv = ours.khoiVan;
        if (kv.forward !== cl.isForward() || kv.years !== cl.getYearCount() || kv.months !== cl.getMonthCount() || Math.abs(kv.days - cl.getDayCount()) > 1)
          bad.push(`${y}-${m}-${d} khởi vận ta ${kv.years}/${kv.months}/${kv.days} tyme ${cl.getYearCount()}/${cl.getMonthCount()}/${cl.getDayCount()}`);
        let df = cl.getStartDecadeFortune();
        for (const dv of ours.daiVan) {
          if (dv.ganzhi.can !== "甲乙丙丁戊己庚辛壬癸".indexOf(df.getSixtyCycle().getHeavenStem().getName()) || dv.startAge !== df.getStartAge())
            bad.push(`${y}-${m}-${d} đại vận ${dv.ganzhi.name} ${dv.startAge} vs ${df.getSixtyCycle().getName()} ${df.getStartAge()}`);
          df = df.next(1);
        }
      }
    }
    expect(bad.slice(0, 20)).toEqual([]);
  });

  it("đếm ngũ hành đủ 8 chữ, không rõ giờ còn 6", () => {
    const s = buildSnapshot({ date: { y: 1990, m: 5, d: 15 }, calendar: "solar", time: { h: 7, mi: 5 } });
    const c = buildBazi(s, "nam");
    expect(Object.values(c.elementCount).reduce((a, b) => a + b, 0)).toBe(8);
    const s2 = buildSnapshot({ date: { y: 1990, m: 5, d: 15 }, calendar: "solar", time: null });
    expect(Object.values(buildBazi(s2, "nam").elementCount).reduce((a, b) => a + b, 0)).toBe(6);
    expect(NGU_HANH).toHaveLength(5);
  });
});
