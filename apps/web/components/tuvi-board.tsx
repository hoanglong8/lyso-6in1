import type { TuViChart, TuViPalace, TuViStar } from "@lyso/engine-tuvi";

/** Vị trí 12 cung trên bàn 4×4 truyền thống (hàng, cột), theo chi. */
const POS: Record<number, [number, number]> = {
  5: [1, 1], 6: [1, 2], 7: [1, 3], 8: [1, 4],
  4: [2, 1], 9: [2, 4],
  3: [3, 1], 10: [3, 4],
  2: [4, 1], 1: [4, 2], 0: [4, 3], 11: [4, 4],
};

const BRIGHT: Record<string, string> = { Miếu: "M", Vượng: "V", Đắc: "Đ", Lợi: "L", Bình: "B", Bất: "B", Hãm: "H" };

const GOOD = new Set(["soft", "lucun", "tianma", "helper"]);
const BAD = new Set(["tough"]);

function Star({ s, major }: { s: TuViStar; major?: boolean }) {
  const color = major ? "text-son font-semibold" : GOOD.has(s.type) ? "text-emerald-800" : BAD.has(s.type) ? "text-stone-900 font-medium" : "text-stone-600";
  return (
    <span className={`whitespace-nowrap ${color}`}>
      {s.name}
      {s.brightness && <sup className="ml-0.5 text-[0.65em] text-stone-500">{BRIGHT[s.brightness] ?? s.brightness}</sup>}
      {s.mutagen && <span className="ml-1 rounded bg-son px-1 text-[0.65em] font-semibold text-white">{s.mutagen}</span>}
    </span>
  );
}

function Cell({ p, isMenh }: { p: TuViPalace; isMenh: boolean }) {
  const [row, col] = POS[p.chi] as [number, number];
  const minors = [...p.minorStars, ...p.adjectiveStars];
  return (
    <div
      style={{ gridRow: row, gridColumn: col }}
      className={`flex min-h-44 flex-col gap-1 border border-stone-300 bg-white p-1.5 text-[11px] leading-tight ${isMenh ? "ring-2 ring-inset ring-son" : ""}`}
    >
      <div className="flex items-baseline justify-between gap-1">
        <span className="text-stone-500">{p.canName} {p.chiName}</span>
        <span className="font-semibold uppercase tracking-wide text-stone-800">
          {p.name}
          {p.isBody && <span className="ml-1 rounded bg-stone-800 px-1 text-[0.8em] normal-case text-white">Thân</span>}
        </span>
        <span className="text-stone-500">{p.daiHan.from}</span>
      </div>
      <div className="flex flex-col gap-0.5 text-[12px]">
        {p.majorStars.length ? p.majorStars.map((s) => <Star key={s.name} s={s} major />) : <span className="italic text-stone-400">Vô chính diệu</span>}
      </div>
      <div className="flex flex-wrap gap-x-1.5 gap-y-0.5">
        {minors.map((s) => (
          <Star key={s.name} s={s} />
        ))}
      </div>
      <div className="mt-auto flex justify-between text-[10px] text-stone-500">
        <span>{p.truongSinh}</span>
        <span>{p.bacSi}</span>
      </div>
    </div>
  );
}

export function TuViBoard({ chart, title }: { chart: TuViChart; title: string }) {
  return (
    <div className="space-y-3">
      <div className="overflow-x-auto">
        <div className="grid min-w-[680px] grid-cols-4 grid-rows-4">
          {chart.palaces.map((p) => (
            <Cell key={p.chi} p={p} isMenh={p.chi === chart.menhChi} />
          ))}
          <div style={{ gridRow: "2 / span 2", gridColumn: "2 / span 2" }} className="flex flex-col items-center justify-center gap-1 border border-stone-300 bg-son-soft/50 p-4 text-center text-sm">
            <div className="text-lg font-semibold">{title}</div>
            <div>
              {chart.amDuong} · năm {chart.yearName}
            </div>
            <div>
              Ngày âm {chart.lunar.day}/{chart.lunar.month}
              {chart.lunar.leap ? " (nhuận)" : ""}/{chart.lunar.year}
            </div>
            <div>{chart.cuc}</div>
            <div>
              Mệnh chủ <b>{chart.menhChu}</b> · Thân chủ <b>{chart.thanChu}</b>
            </div>
            <div className="mt-2 text-xs text-stone-500">Trường phái: {chart.school}</div>
          </div>
        </div>
      </div>
      <p className="text-xs text-stone-500">
        Chữ nhỏ cạnh chính tinh: M Miếu, V Vượng, Đ Đắc, L Lợi, B Bình, H Hãm. Ô viền đỏ là cung Mệnh; số góc phải là tuổi bắt đầu đại hạn.
      </p>
      {chart.notes.map((n) => (
        <p key={n} className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-900">{n}</p>
      ))}
    </div>
  );
}
