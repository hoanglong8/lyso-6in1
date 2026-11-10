import { CHI } from "@lyso/calendar-vn";
import type { TuViChart, TuViPalace } from "@lyso/engine-tuvi";
import type { Phan, Y } from "./types";
import { CUNG_CHUC } from "./tuvi-video";
import { PHU, type PhuDk } from "./tuvi-phu-data";

export const NGUON_PHU = "Câu phú Tử vi cổ (Hán Việt và phú Việt): các thầy trên YouTube trích, 100 câu phú Ma Thị, Phú Tử vi thông thơ, phú Lộc Quyền Khoa Kỵ, 50 câu phú cách cục, thơ phú Tử vi; nghĩa viết lại, điều kiện do app tự kiểm";

const m12 = (x: number) => ((x % 12) + 12) % 12;
const at = (c: TuViChart, chi: number) => c.palaces.find((p) => p.chi === m12(chi)) as TuViPalace;
const SANG = new Set(["Miếu", "Vượng", "Đắc", "Lợi"]);

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
  if (dk.motTrong?.some((g) => !g.some((x) => s.has(x)))) return false;
  if (dk.khongCung?.some((x) => s.has(x))) return false;
  if (dk.hoiMot?.some((g) => !g.some((x) => hoi.has(x)))) return false;
  if (dk.gioi && c.gender !== dk.gioi) return false;
  if (dk.menhHanh?.length && !dk.menhHanh.some((h) => c.banMenh?.includes(h))) return false;
  if (dk.canNam?.length && !dk.canNam.includes(c.yearName.split(" ")[0] ?? "")) return false;
  if (dk.vcd !== undefined && (p.majorStars.length === 0) !== dk.vcd) return false;
  if (dk.doi?.length) {
    const d = ten(at(c, p.chi + 6));
    if (!dk.doi.some((x) => d.has(x))) return false;
  }
  if (dk.giap?.length) {
    const a = ten(at(c, p.chi - 1)), b = ten(at(c, p.chi + 1));
    if (!dk.giap.every(([x, y]) => (a.has(x) && b.has(y)) || (a.has(y) && b.has(x)))) return false;
  }
  if (dk.sang !== undefined) {
    const ten_ = [...(dk.sao ?? []), ...(dk.motTrong ?? []).flat()];
    const chinh = p.majorStars.find((x) => ten_.includes(x.name)) ?? p.majorStars[0];
    if (!chinh?.brightness) return false;
    // sang: miếu/vượng/đắc; không sáng: chỉ khi hãm (bình hòa không tính)
    if (dk.sang ? !SANG.has(chinh.brightness) : chinh.brightness !== "Hãm") return false;
  }
  if (dk.nhiHop?.length) {
    const nh = ten(at(c, 1 - p.chi));
    if (!dk.nhiHop.some((x) => nh.has(x))) return false;
  }
  if (dk.lienChau) {
    const hoa = (chi: number) => [...ten(at(c, chi))].filter((x) => x === "Hóa Lộc" || x === "Hóa Quyền" || x === "Hóa Khoa");
    const ok = [-2, -1, 0].some((d) => {
      const ba = [0, 1, 2].map((k) => hoa(p.chi + d + k));
      return ba.every((h) => h.length) && new Set(ba.flat()).size === 3;
    });
    if (!ok) return false;
  }
  return true;
}

/** Các câu phú khớp với lá số: mục chính (câu ứng riêng) và mục câu phổ quát */
export function luanPhuAll(c: TuViChart): Phan[] {
  const rieng: Y[] = [];
  const pho: Y[] = [];
  const seen = new Set<string>();
  for (const ph of PHU) {
    if (seen.has(ph.phu)) continue;
    const hit = cungGoc(c, ph.dk).find(({ p }) => khop(c, ph.dk, p));
    if (!hit) continue;
    seen.add(ph.phu);
    (ph.pho ? pho : rieng).push({ text: `“${ph.phu}” — ${ph.nghia}`, canCu: `${hit.nhan} (${hit.p.chiName}) · ${ph.kenh.join(", ")}`, tone: ph.tone });
  }
  const out: Phan[] = [];
  if (rieng.length) out.push({ title: "Phú Tử vi (câu phú cổ ứng với lá số)", items: rieng });
  if (pho.length) out.push({ title: "Phú Tử vi – câu phổ quát (nhiều lá số cùng gặp)", items: pho });
  return out;
}

/** Mục chính của phú (giữ cho tương thích) */
export function luanPhu(c: TuViChart): Phan | null {
  return luanPhuAll(c)[0] ?? null;
}
