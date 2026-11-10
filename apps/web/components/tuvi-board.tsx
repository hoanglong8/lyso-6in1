"use client";

import { useEffect, useRef, useState } from "react";
import type { Mutagen, TuViChart, TuViPalace, TuViStar } from "@lyso/engine-tuvi";

/** Vị trí 12 cung trên bàn 4×4 truyền thống (hàng, cột), theo chi. */
const POS: Record<number, [number, number]> = {
  5: [1, 1], 6: [1, 2], 7: [1, 3], 8: [1, 4],
  4: [2, 1], 9: [2, 4],
  3: [3, 1], 10: [3, 4],
  2: [4, 1], 1: [4, 2], 0: [4, 3], 11: [4, 4],
};
const CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

const BRIGHT: Record<string, string> = { Miếu: "M", Vượng: "V", Đắc: "Đ", Lợi: "L", Bình: "B", Bất: "B", Hãm: "H" };

const GOOD = new Set(["soft", "lucun", "tianma", "helper"]);
const BAD = new Set(["tough"]);
const MUT_BG: Record<Mutagen, string> = { Lộc: "bg-emerald-600", Quyền: "bg-red-600", Khoa: "bg-purple-600", Kỵ: "bg-stone-900" };
/** Màu mũi tên phi hóa: Lộc xanh, Quyền đỏ, Khoa tím, Kỵ đen */
const MUT_COLOR: Record<Mutagen, string> = { Lộc: "#059669", Quyền: "#dc2626", Khoa: "#9333ea", Kỵ: "#1c1917" };
/** Ký hiệu tự hóa: A Lộc, B Quyền, C Khoa, D Kỵ */
const MUT_ABCD: Record<Mutagen, string> = { Lộc: "A", Quyền: "B", Khoa: "C", Kỵ: "D" };
const MUT_TEXT: Record<Mutagen, string> = { Lộc: "text-emerald-600", Quyền: "text-red-600", Khoa: "text-purple-600", Kỵ: "text-stone-900" };
const m12 = (x: number) => ((x % 12) + 12) % 12;

/** Điểm neo của một cung: mép cung quay vào ô trung tâm (đơn vị: ô lưới, 0..4) */
function anchor(chi: number): [number, number] {
  const [r, c] = POS[chi] as [number, number];
  const x = c === 1 ? 1 : c === 4 ? 3 : c - 0.5;
  const y = r === 1 ? 1 : r === 4 ? 3 : r - 0.5;
  return [x, y];
}

interface Arrow { from: number; to: number; color: string; dash?: boolean; head?: boolean; key: string }

/** Lớp SVG phủ lên bàn 4×4: tam phương tứ chính hoặc mũi tên phi hóa */
function Overlay({ arrows, w, h }: { arrows: Arrow[]; w: number; h: number }) {
  if (!w || !h) return null;
  const P = (chi: number) => { const [x, y] = anchor(chi); return [(x * w) / 4, (y * h) / 4] as const; };
  const pairCount = new Map<string, number>();
  return (
    <svg className="pointer-events-none absolute inset-0" width={w} height={h} aria-hidden>
      <defs>
        {Object.entries(MUT_COLOR).concat([["tp", "#b91c1c"]]).map(([k, col]) => (
          <marker key={k} id={`ah-${k}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill={col} />
          </marker>
        ))}
      </defs>
      {arrows.map((a) => {
        const [x1, y1] = P(a.from);
        const [x2, y2] = P(a.to);
        const pk = [a.from, a.to].sort().join("-");
        const n = pairCount.get(pk) ?? 0;
        pairCount.set(pk, n + 1);
        // lệch nhẹ các mũi tên trùng cặp cung; rút ngắn đầu mũi tên
        const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1;
        const off = (n % 2 ? -1 : 1) * Math.ceil(n / 2) * 5;
        const ox = (-dy / len) * off, oy = (dx / len) * off;
        const k = a.head ? 6 / len : 0;
        const id = Object.entries(MUT_COLOR).find(([, c]) => c === a.color)?.[0] ?? "tp";
        return (
          <line key={a.key} x1={x1 + ox} y1={y1 + oy} x2={x2 - dx * k + ox} y2={y2 - dy * k + oy} stroke={a.color} strokeWidth={a.head ? 1.8 : 1.4}
            strokeDasharray={a.dash ? "5 4" : undefined} strokeOpacity={0.85} markerEnd={a.head ? `url(#ah-${id})` : undefined} />
        );
      })}
    </svg>
  );
}

function Star({ s, major }: { s: TuViStar; major?: boolean }) {
  const color = major ? "text-son font-semibold" : GOOD.has(s.type) ? "text-emerald-800" : BAD.has(s.type) ? "text-stone-900 font-medium" : "text-stone-600";
  return (
    <span className={`whitespace-nowrap ${color}`}>
      {s.name}
      {s.brightness && <sup className="ml-0.5 text-[0.65em] text-stone-500">{BRIGHT[s.brightness] ?? s.brightness}</sup>}
      {s.mutagen && <span className={`ml-1 rounded px-1 text-[0.65em] font-semibold text-white ${MUT_BG[s.mutagen]}`}>{s.mutagen}</span>}
    </span>
  );
}

function Tag({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded px-1 text-[10px] font-semibold ${className}`}>{children}</span>;
}

interface CellProps {
  chart: TuViChart;
  p: TuViPalace;
  selected: boolean;
  incoming: { mutagen: Mutagen; star: string; self: boolean }[];
  showAbcd: boolean;
  onSelect?: () => void;
}

function Cell({ chart, p, selected, incoming, showAbcd, onSelect }: CellProps) {
  const [row, col] = POS[p.chi] as [number, number];
  const minors = [...p.minorStars, ...p.adjectiveStars];
  const v = chart.vanHan;
  const luu = v?.luuStars.filter((x) => x.chi === p.chi) ?? [];
  const luuHoa = v?.luuTuHoa.filter((x) => x.chi === p.chi) ?? [];
  const isMenh = p.chi === chart.menhChi;
  return (
    <div
      style={{ gridRow: row, gridColumn: col }}
      onClick={onSelect}
      className={`flex min-h-48 flex-col gap-1 border border-stone-300 ${selected ? "" : "bg-white"} p-1.5 text-[11px] leading-tight ${isMenh ? "ring-2 ring-inset ring-son" : ""} ${
        selected ? "bg-amber-50 ring-2 ring-inset ring-amber-600" : ""
      } ${onSelect ? "cursor-pointer hover:bg-stone-50" : ""}`}
    >
      <div className="flex items-baseline justify-between gap-1">
        <span className="text-stone-500">{p.canName} {p.chiName}</span>
        <span className="font-semibold uppercase tracking-wide text-stone-800">
          {p.name}
          {p.isBody && <span className="ml-1 rounded bg-stone-800 px-1 text-[0.8em] normal-case text-white">Thân</span>}
          {showAbcd &&
            p.phiHoa?.filter((h) => h.self).map((h) => (
              <b key={h.mutagen} title={`Tự hóa ${h.mutagen} (${h.star})`} className={`ml-1 normal-case ${MUT_TEXT[h.mutagen]}`}>
                {MUT_ABCD[h.mutagen]}
              </b>
            ))}
        </span>
        <span className="text-stone-500">{p.daiHan.from}</span>
      </div>
      {(p.tuan || p.triet || (v && (v.daiHan?.chi === p.chi || v.tieuHan.chi === p.chi || v.luuThaiTue.chi === p.chi))) && (
        <div className="flex flex-wrap gap-1">
          {p.tuan && <Tag className="bg-stone-200 text-stone-700">Tuần</Tag>}
          {p.triet && <Tag className="bg-stone-200 text-stone-700">Triệt</Tag>}
          {v?.daiHan?.chi === p.chi && <Tag className="bg-violet-700 text-white">ĐH {v.daiHan.from}–{v.daiHan.to}</Tag>}
          {v?.tieuHan.chi === p.chi && <Tag className="bg-violet-500 text-white">Tiểu hạn {v.year}</Tag>}
          {v?.luuThaiTue.chi === p.chi && <Tag className="bg-violet-200 text-violet-900">Thái Tuế</Tag>}
        </div>
      )}
      <div className="flex flex-col gap-0.5 text-[12px]">
        {p.majorStars.length ? p.majorStars.map((s) => <Star key={s.name} s={s} major />) : <span className="italic text-stone-400">Vô chính diệu</span>}
      </div>
      <div className="flex flex-wrap gap-x-1.5 gap-y-0.5">
        {minors.map((s) => (
          <Star key={s.name} s={s} />
        ))}
      </div>
      {(luu.length > 0 || luuHoa.length > 0) && (
        <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 text-violet-800">
          {luu.map((x) => (
            <span key={x.name} className="whitespace-nowrap">{x.name}</span>
          ))}
          {luuHoa.map((x) => (
            <span key={x.mutagen} className="whitespace-nowrap">
              L.{x.star} <Tag className={`${MUT_BG[x.mutagen]} text-white`}>{x.mutagen}</Tag>
            </span>
          ))}
        </div>
      )}
      {incoming.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {incoming.map((h) => (
            <Tag key={h.mutagen} className={`${MUT_BG[h.mutagen]} text-white`}>
              {h.self ? "Tự " : "→ "}
              {h.mutagen} {h.star}
            </Tag>
          ))}
        </div>
      )}
      <div className="mt-auto flex justify-between text-[10px] text-stone-500">
        <span>{p.truongSinh}</span>
        <span>{p.bacSi}</span>
      </div>
    </div>
  );
}

export function TuViBoard({ chart, title }: { chart: TuViChart; title: string }) {
  const phi = chart.palaces.some((p) => p.phiHoa);
  const tamHop = chart.config.school === "vn-thien-luong" || chart.config.school === "nam-phai";
  const [from, setFrom] = useState<number | null>(null);
  const [cheDo, setCheDo] = useState<"chon" | "tatca" | "an">("chon");
  const [showAbcd, setShowAbcd] = useState(true);
  const [showTp, setShowTp] = useState(true);
  const goc = from ?? chart.menhChi;
  const src = phi ? chart.palaces.find((p) => p.chi === goc) : undefined;
  const v = chart.vanHan;
  const gridRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setSize({ w: el.offsetWidth, h: el.offsetHeight }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const arrows: Arrow[] = [];
  if (tamHop && showTp) {
    const [a, b, c2, d] = [goc, m12(goc + 4), m12(goc + 8), m12(goc + 6)];
    const tp = "#b91c1c";
    arrows.push({ from: a, to: b, color: tp, key: "t1" }, { from: b, to: c2, color: tp, key: "t2" }, { from: c2, to: a, color: tp, key: "t3" });
    arrows.push({ from: d, to: a, color: tp, dash: true, head: true, key: "xc" });
  }
  if (phi && cheDo !== "an") {
    const nguon = cheDo === "tatca" ? chart.palaces : src ? [src] : [];
    for (const p of nguon)
      for (const h of p.phiHoa ?? [])
        if (!h.self && h.toChi !== null) arrows.push({ from: p.chi, to: h.toChi, color: MUT_COLOR[h.mutagen], head: true, key: `${p.chi}-${h.mutagen}` });
  }
  return (
    <div className="space-y-3">
      {(phi || tamHop) && (
        <div className="space-y-2 rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 print:hidden">
          {tamHop && (
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-1">
                <input type="checkbox" checked={showTp} onChange={(e) => setShowTp(e.target.checked)} /> Tam phương tứ chính
              </label>
              <span className="text-xs text-stone-500">Bấm vào một cung để xem tam hợp và cung xung chiếu của cung đó (mặc định: Mệnh).</span>
            </div>
          )}
          {phi && (
            <div className="flex flex-wrap items-center gap-3">
              <span>Mũi tên phi hóa:</span>
              {([["chon", "cung đang chọn"], ["tatca", "tất cả 12 cung"], ["an", "ẩn"]] as const).map(([k, t]) => (
                <label key={k} className="flex items-center gap-1">
                  <input type="radio" name="phihoa" checked={cheDo === k} onChange={() => setCheDo(k)} /> {t}
                </label>
              ))}
              <label className="flex items-center gap-1">
                <input type="checkbox" checked={showAbcd} onChange={(e) => setShowAbcd(e.target.checked)} /> Tự hóa A·B·C·D
              </label>
              <span className="flex flex-wrap gap-2 text-xs">
                {(Object.keys(MUT_COLOR) as Mutagen[]).map((m) => (
                  <span key={m} className="flex items-center gap-1">
                    <span className="inline-block h-0.5 w-4" style={{ background: MUT_COLOR[m] }} /> {m} ({MUT_ABCD[m]})
                  </span>
                ))}
              </span>
            </div>
          )}
          {phi && src && (
            <p className="text-xs">
              Cung <b>{src.name}</b> (can {src.canName}) phát:{" "}
              {src.phiHoa?.map((h) => `${h.star} hóa ${h.mutagen} → ${h.toChi === null ? "?" : chart.palaces.find((x) => x.chi === h.toChi)?.name}${h.self ? " (tự hóa)" : ""}`).join("; ")}.
            </p>
          )}
        </div>
      )}
      <div className="overflow-x-auto">
        <div ref={gridRef} className="relative grid min-w-[700px] grid-cols-4 grid-rows-4">
          {chart.palaces.map((p) => (
            <Cell
              key={p.chi}
              chart={chart}
              p={p}
              selected={from === p.chi}
              incoming={cheDo === "an" ? src?.phiHoa?.filter((h) => h.toChi === p.chi) ?? [] : []}
              showAbcd={showAbcd}
              onSelect={phi || tamHop ? () => setFrom(from === p.chi ? null : p.chi) : undefined}
            />
          ))}
          <div style={{ gridRow: "2 / span 2", gridColumn: "2 / span 2" }} className="flex flex-col items-center justify-center gap-1 border border-stone-300 bg-son-soft/50 p-4 text-center text-sm">
            <div className="text-lg font-semibold">{title}</div>
            <div>
              {chart.amDuong} · năm {chart.yearName}
            </div>
            <div>
              Ngày âm {chart.lunar.day}/{chart.lunar.month}
              {chart.lunar.leap ? " (nhuận)" : ""}/{chart.lunar.year} · giờ {CHI[chart.hourChi]}
            </div>
            <div>
              {chart.cuc}
              {chart.banMenh ? ` · Bản mệnh ${chart.banMenh}` : ""}
            </div>
            {chart.amDuongMenh && <div className="text-xs text-stone-600">{chart.amDuongMenh}</div>}
            <div>
              Mệnh chủ <b>{chart.menhChu}</b> · Thân chủ <b>{chart.thanChu}</b>
            </div>
            {v && (
              <div className="mt-2 rounded-lg bg-white/70 px-3 py-2 text-xs text-violet-900">
                Năm {v.year} ({v.yearName}) · {v.age} tuổi mụ
                <br />
                Đại hạn: {v.daiHan ? `${v.daiHan.palace} (${v.daiHan.from}–${v.daiHan.to})` : "—"} · Tiểu hạn: {v.tieuHan.palace}
                <br />
                Lưu Tứ hóa: {v.luuTuHoa.map((h) => `${h.star} ${h.mutagen}`).join(", ")}
              </div>
            )}
            <div className="mt-2 text-xs text-stone-500">Trường phái: {chart.school}</div>
          </div>
          <Overlay arrows={arrows} w={size.w} h={size.h} />
        </div>
      </div>
      <p className="text-xs text-stone-500">
        Chữ nhỏ cạnh sao: M Miếu, V Vượng, Đ Đắc, L Lợi, B Bình, H Hãm. Ô viền đỏ là cung Mệnh; số góc phải là tuổi bắt đầu đại hạn. Chữ tím là sao lưu và
        lưu Tứ hóa của năm đang xem.
      </p>
      {chart.notes.map((n) => (
        <p key={n} className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-900">{n}</p>
      ))}
    </div>
  );
}
