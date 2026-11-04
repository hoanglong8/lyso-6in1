import { describe, expect, it } from "vitest";
import * as L from "liuren-ts-lib";
import { ganzhi } from "@lyso/calendar-vn";
import { buildLucNham, tamTruyen, tuKhoa } from "../src";

const G = [..."甲乙丙丁戊己庚辛壬癸"];
const Z = [..."子丑寅卯辰巳午未申酉戌亥"];
const KEYS = ["zi", "chou", "yin", "mao", "chen", "si", "wu", "wei", "shen", "you", "xu", "hai"] as const;

/** Bảng 720 khóa của liuren-ts-lib (chép từ sách) — dùng làm đáp án. */
function oracle(day: number, yj: number, hour = 0) {
  const g = ganzhi(day, day);
  const r = L.getLiuRenByYueJiang(Z[yj]!, Z[hour]!, G[g.can]! + Z[g.chi]!);
  return {
    sk: [r.siKe.ke1[0], r.siKe.ke2[0], r.siKe.ke3[0], r.siKe.ke4[0]] as string[],
    tc: [r.sanChuan.chuChuan[0], r.sanChuan.zhongChuan[0], r.sanChuan.moChuan[0]].join(""),
    ge: r.sanChuan.keTi as string,
    tj: r.tianDiPan.tianJiang as unknown as Record<string, string>,
  };
}

const VI2HAN: Record<string, string> = {
  "Quý Nhân": "贵人", "Đằng Xà": "腾蛇", "Chu Tước": "朱雀", "Lục Hợp": "六合", "Câu Trần": "勾陈", "Thanh Long": "青龙",
  "Thiên Không": "天空", "Bạch Hổ": "白虎", "Thái Thường": "太常", "Huyền Vũ": "玄武", "Thái Âm": "太阴", "Thiên Hậu": "天后",
};

describe("Đại Lục Nhâm — đối chiếu 720 khóa", () => {
  it("tứ khóa khớp 720/720", () => {
    let bad = 0;
    for (let d = 0; d < 60; d++)
      for (let off = 0; off < 12; off++) {
        const g = ganzhi(d, d);
        const o = oracle(d, off);
        const k = tuKhoa(g, (z) => (z + off) % 12).map((x) => Z[x.top]! + (x.bottom.kind === "can" ? G[x.bottom.value]! : Z[x.bottom.value]!));
        if (k.join() !== o.sk.join()) bad++;
      }
    expect(bad).toBe(0);
  });

  /**
   * Ba khóa bảng sách tự mâu thuẫn: cùng cấu trúc tứ khóa [巳 卯巳 丑卯 亥丑] mà ngày Ất/Kỷ/Quý Mão lấy Sửu,
   * ngày Đinh/Tân Mão lại lấy Hợi; Kỷ Hợi +4 cũng ngược quy tắc Mạnh–Trọng của chính bảng.
   * Không quy tắc nhất quán nào cho ra cả hai, nên ghi nhận là ngoại lệ của bảng.
   */
  const DISPUTED = new Set(["丁卯+10", "辛卯+10", "己亥+4"]);

  it("tam truyền khớp bảng sách 717/720 (3 khóa bảng tự mâu thuẫn)", () => {
    const miss: string[] = [];
    for (let d = 0; d < 60; d++)
      for (let off = 0; off < 12; off++) {
        const g = ganzhi(d, d);
        const o = oracle(d, off);
        const t = tamTruyen(g, off);
        const mine = t.chi.map((z) => Z[z]).join("");
        if (mine !== o.tc && !DISPUTED.has(`${G[g.can]}${Z[g.chi]}+${off}`)) miss.push(`${G[g.can]}${Z[g.chi]}+${off} ${o.ge} ${o.tc} ≠ ${t.method} ${mine} [${o.sk.join(" ")}]`);
      }
    if (miss.length) console.log(miss.slice(0, 40).join("\n"));
    expect(miss.length).toBe(0);
  });

  it("phương án đếm độ sâu khác bảng đúng ở các khóa Thiệp hại", () => {
    let diff = 0;
    for (let d = 0; d < 60; d++)
      for (let off = 0; off < 12; off++) {
        const g = ganzhi(d, d);
        const a = tamTruyen(g, off);
        const b = tamTruyen(g, off, { thiepHai: "sau-can", quyNhan: "giap-mau-canh-suu-mui" });
        if (a.chi.join() !== b.chi.join()) {
          diff++;
          expect(a.method).toBe("Thiệp hại");
        }
      }
    expect(diff).toBeGreaterThan(0);
    expect(diff).toBeLessThan(20);
  });

  it("thiên tướng khớp trên mọi ngày × 12 giờ (một nguyệt tướng)", () => {
    let bad = 0;
    for (let d = 0; d < 60; d++)
      for (let h = 0; h < 12; h++) {
        const g = ganzhi(d, d);
        const o = oracle(d, 4, h);
        const c = buildLucNham({ day: g, hourChi: h, nguyetTuong: 4 });
        const mine = c.thienTuong.map((t) => VI2HAN[t]);
        const theirs = KEYS.map((k) => o.tj[k]);
        if (mine.join() !== theirs.join()) bad++;
      }
    expect(bad).toBe(0);
  });
});
