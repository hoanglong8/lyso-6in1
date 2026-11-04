"use client";

import { useState } from "react";
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
const MUT_BG: Record<Mutagen, string> = { Lộc: "bg-emerald-700", Quyền: "bg-amber-700", Khoa: "bg-sky-700", Kỵ: "bg-stone-900" };

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
  onSelect?: () => void;
}

function Cell({ chart, p, selected, incoming, onSelect }: CellProps) {
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
  const [from, setFrom] = useState<number | null>(null);
  const src = phi && from !== null ? chart.palaces.find((p) => p.chi === from) : undefined;
  const v = chart.vanHan;
  return (
    <div className="space-y-3">
      {phi && (
        <p className="rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700">
          Bắc phái: bấm vào một cung để xem Tứ hóa phi tinh phát từ can cung đó.
          {src && (
            <>
              {" "}
              Cung <b>{src.name}</b> ({src.canName}) phát:{" "}
              {src.phiHoa?.map((h) => `${h.star} hóa ${h.mutagen} → ${h.toChi === null ? "?" : chart.palaces[h.toChi]?.name}${h.self ? " (tự hóa)" : ""}`).join("; ")}.
            </>
          )}
        </p>
      )}
      <div className="overflow-x-auto">
        <div className="grid min-w-[700px] grid-cols-4 grid-rows-4">
          {chart.palaces.map((p) => (
            <Cell
              key={p.chi}
              chart={chart}
              p={p}
              selected={from === p.chi}
              incoming={src?.phiHoa?.filter((h) => h.toChi === p.chi) ?? []}
              onSelect={phi ? () => setFrom(from === p.chi ? null : p.chi) : undefined}
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
