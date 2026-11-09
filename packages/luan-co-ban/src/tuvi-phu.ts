import { CHI } from "@lyso/calendar-vn";
import type { TuViChart, TuViPalace } from "@lyso/engine-tuvi";
import type { Phan, Y } from "./types";
import { CUNG_CHUC } from "./tuvi-video";
import { PHU, type PhuDk } from "./tuvi-phu-data";

export const NGUON_PHU = "Câu phú Tử vi cổ (Hán Việt) do các thầy trên YouTube trích dẫn; nghĩa viết lại, điều kiện do app tự kiểm";

const m12 = (x: number) => ((x % 12) + 12) % 12;
const at = (c: TuViChart, chi: number) => c.palaces.find((p) => p.chi === m12(chi)) as TuViPalace;
const SANG = new Set(["Miếu", "Vượng", "Đắc"]);

/** Tên các "sao" trong một cung, tính cả hóa (Hóa Lộc…), vòng Tràng Sinh và Tuần/Triệt */
function ten(p: TuViPalace): Set<string> {
  const s = new Set<string>();
  for (const x of [...p.majorStars, ...p.minorStars, ...p.adjectiveStars]) {
    s.add(x.name);
    if (x.mutagen) s.add(`Hóa ${x.mutagen}`);
  }
  if (p.truongSinh) s.add(p.truongSinh);
  if (p.tuan) s.add("Tuần");
  if (p.triet) s.add("Triệt");
  return s;
}

function cungGoc(c: TuViChart, dk: PhuDk): { p: TuViPalace; nhan: string }[] {
  if (dk.cung === "Mệnh") return [{ p: at(c, c.menhChi), nhan: "Mệnh" }];
  if (dk.cung === "Thân") return [{ p: at(c, c.thanChi), nhan: "Thân" }];
  if (dk.cung === "Hạn") {
    const v = c.vanHan;
    if (!v) return [];
    const r = [{ p: at(c, v.tieuHan.chi), nhan: `tiểu hạn ${v.year}` }];
    if (v.daiHan) r.unshift({ p: at(c, v.daiHan.chi), nhan: `đại hạn ${v.daiHan.from}–${v.daiHan.to}` });
    return r;
  }
  if (dk.cung === "Đại hạn") {
    const dh = c.vanHan?.daiHan;
    return dh ? [{ p: at(c, dh.chi), nhan: `đại hạn ${dh.from}–${dh.to}` }] : [];
  }
  if (dk.cung === "bất kỳ") return c.palaces.map((p) => ({ p, nhan: p.name }));
  const i = CUNG_CHUC.indexOf(dk.cung as (typeof CUNG_CHUC)[number]);
  return i < 0 ? [] : [{ p: at(c, c.menhChi + i), nhan: dk.cung }];
}

function khop(c: TuViChart, dk: PhuDk, p: TuViPalace): boolean {
  const s = ten(p);
  if (dk.sao?.some((x) => !s.has(x))) return false;
  if (dk.chi?.length && !dk.chi.includes(CHI[p.chi] as string)) return false;
  const hoi = new Set([p.chi, p.chi + 4, p.chi + 8, p.chi + 6].flatMap((x) => [...ten(at(c, x))]));
  if (dk.hoi?.some((x) => !hoi.has(x))) return false;
  if (dk.khong?.some((x) => hoi.has(x))) return false;
  if (dk.giap?.length) {
    const a = ten(at(c, p.chi - 1)), b = ten(at(c, p.chi + 1));
    if (!dk.giap.every(([x, y]) => (a.has(x) && b.has(y)) || (a.has(y) && b.has(x)))) return false;
  }
  if (dk.sang !== undefined) {
    const chinh = p.majorStars.find((x) => dk.sao?.includes(x.name)) ?? p.majorStars[0];
    const sang = chinh?.brightness ? SANG.has(chinh.brightness) : false;
    if (sang !== dk.sang) return false;
  }
  return true;
}

/** Các câu phú khớp với lá số */
export function luanPhu(c: TuViChart): Phan | null {
  const items: Y[] = [];
  const seen = new Set<string>();
  for (const ph of PHU) {
    if (seen.has(ph.phu)) continue;
    const hit = cungGoc(c, ph.dk).find(({ p }) => khop(c, ph.dk, p));
    if (!hit) continue;
    seen.add(ph.phu);
    items.push({ text: `“${ph.phu}” — ${ph.nghia}`, canCu: `${hit.nhan} (${hit.p.chiName}) · thầy trích: ${ph.kenh.join(", ")}`, tone: ph.tone });
  }
  return items.length ? { title: "Phú Tử vi (câu phú cổ ứng với lá số)", items } : null;
}
