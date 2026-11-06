import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { anSaoVN } from "../src/vn";

/**
 * Đối chiếu phái Việt với lasotuvi (Python). File đáp án sinh bởi scripts/oracle/lasotuvi_dump.py;
 * CI tự sinh, máy cá nhân không có file thì test được bỏ qua.
 */
const file = process.env.LASOTUVI_ORACLE ?? "/tmp/lasotuvi.json";
const has = existsSync(file);

const title = (s: string) =>
  s.trim().split(/\s+/).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
const CHI_ALIASES = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ|Tị", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
const chiIndex = (s: string) => CHI_ALIASES.findIndex((a) => a.split("|").includes(s)) + 1;
const HOA: Record<string, string> = { "Hóa Lộc": "Lộc", "Hóa Quyền": "Quyền", "Hóa Khoa": "Khoa", "Hóa Kỵ": "Kỵ" };

interface OraclePalace { name: string; than: boolean; daiHan: number; tieuHan: string; tuan: boolean; triet: boolean; stars: string[] }

describe.skipIf(!has)("Phái Việt khớp lasotuvi", () => {
  it("toàn bộ mẫu", () => {
    const cases = JSON.parse(readFileSync(file, "utf8")) as { in: number[]; pal: Record<string, OraclePalace> }[];
    const bad: string[] = [];
    for (const c of cases) {
      const [nn, tt, y, gio, gt] = c.in as [number, number, number, number, 1 | -1];
      const canNam = ((y + 6) % 10) + 1;
      const chiNam = ((y + 8) % 12) + 1;
      const ours = anSaoVN({ canNam, chiNam, thang: tt, ngay: nn, gio, gioiTinh: gt });
      const tag = c.in.join("/");
      for (let cung = 1; cung <= 12; cung++) {
        const o = c.pal[String(cung)] as OraclePalace;
        const p = ours.palaces[cung]!;
        if (title(o.name) !== p.name) bad.push(`${tag} cung ${cung} tên ${o.name} vs ${p.name}`);
        if (o.than !== p.isBody) bad.push(`${tag} cung ${cung} Thân`);
        if (o.daiHan !== p.daiHan) bad.push(`${tag} cung ${cung} đại hạn ${o.daiHan} vs ${p.daiHan}`);
        if (chiIndex(o.tieuHan) !== p.tieuHanChi) bad.push(`${tag} cung ${cung} tiểu hạn ${o.tieuHan} vs ${p.tieuHanChi}`);
        if (o.tuan !== p.tuan || o.triet !== p.triet) bad.push(`${tag} cung ${cung} Tuần/Triệt`);
        const oStars = o.stars.map((s) => s.split("|")).filter(([n]) => !HOA[title(n!)]).map(([n, b]) => `${title(n!)}|${b}`).sort();
        const pStars = p.stars.map((s) => `${s.name}|${s.brightness?.charAt(0) ?? ""}`).sort();
        if (oStars.join(",") !== pStars.join(",")) bad.push(`${tag} cung ${cung} sao\n  lst: ${oStars.join(",")}\n  ta:  ${pStars.join(",")}`);
        const oHoa = o.stars.map((s) => HOA[title(s.split("|")[0]!)]).filter(Boolean).sort();
        const pHoa = p.stars.map((s) => s.mutagen).filter(Boolean).sort();
        if (oHoa.join() !== pHoa.join()) bad.push(`${tag} cung ${cung} tứ hóa ${oHoa} vs ${pHoa}`);
      }
    }
    expect(bad.slice(0, 10)).toEqual([]);
  });
});
