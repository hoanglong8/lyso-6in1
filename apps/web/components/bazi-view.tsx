import { CAN_HAN, CHI_HAN, CHI } from "@lyso/calendar-vn";
import { canElement, chiElement, NGU_HANH, type BaziChart } from "@lyso/engine-bazi";

const ELEM_COLOR = ["text-emerald-700", "text-red-700", "text-amber-800", "text-stone-500", "text-sky-800"];
const ELEM_BG = ["bg-emerald-600", "bg-red-600", "bg-amber-700", "bg-stone-400", "bg-sky-700"];

export function BaziView({ chart }: { chart: BaziChart }) {
  const total = Object.values(chart.elementCount).reduce((a, b) => a + b, 0) || 1;
  return (
    <div className="space-y-5">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse rounded-xl bg-white text-center text-sm">
          <thead>
            <tr className="text-xs text-stone-500">
              <th className="w-28 p-2 text-left font-normal"></th>
              {chart.pillars.map((p) => (
                <th key={p.label} className="p-2 font-medium">Trụ {p.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            <tr>
              <td className="p-2 text-left text-xs text-stone-500">Thập thần</td>
              {chart.pillars.map((p) => (
                <td key={p.label} className={`p-2 ${p.label === "Ngày" ? "font-semibold text-son" : ""}`}>{p.thapThan}</td>
              ))}
            </tr>
            <tr>
              <td className="p-2 text-left text-xs text-stone-500">Thiên can</td>
              {chart.pillars.map((p) => (
                <td key={p.label} className={`p-2 ${!chart.timeKnown && p.label === "Giờ" ? "opacity-30" : ""}`}>
                  <div className={`text-3xl font-semibold ${ELEM_COLOR[canElement(p.ganzhi.can)]}`}>{CAN_HAN[p.ganzhi.can]}</div>
                  <div>{p.ganzhi.name.split(" ")[0]}</div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-2 text-left text-xs text-stone-500">Địa chi</td>
              {chart.pillars.map((p) => (
                <td key={p.label} className={`p-2 ${!chart.timeKnown && p.label === "Giờ" ? "opacity-30" : ""}`}>
                  <div className={`text-3xl font-semibold ${ELEM_COLOR[chiElement(p.ganzhi.chi)]}`}>{CHI_HAN[p.ganzhi.chi]}</div>
                  <div>{CHI[p.ganzhi.chi]}</div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-2 text-left text-xs text-stone-500">Tàng can</td>
              {chart.pillars.map((p) => (
                <td key={p.label} className="p-2 text-xs">
                  {p.tangCan.map((t) => (
                    <div key={t.can}>
                      <span className={ELEM_COLOR[canElement(t.can)]}>{t.name}</span> <span className="text-stone-500">{t.thapThan}</span>
                    </div>
                  ))}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-2 text-left text-xs text-stone-500">Nạp âm</td>
              {chart.pillars.map((p) => (
                <td key={p.label} className="p-2 text-xs">{p.napAm}</td>
              ))}
            </tr>
            <tr>
              <td className="p-2 text-left text-xs text-stone-500">Trường sinh</td>
              {chart.pillars.map((p) => (
                <td key={p.label} className="p-2 text-xs">{p.truongSinh}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-stone-200 bg-white p-4">
        <div className="mb-2 text-sm font-medium">
          Nhật chủ {chart.dayMaster.name} ({chart.dayMaster.element}) · ngũ hành trong {total} chữ
        </div>
        <div className="flex h-3 overflow-hidden rounded-full">
          {NGU_HANH.map((n, i) => (
            <div key={n} className={ELEM_BG[i]} style={{ width: `${(chart.elementCount[n] / total) * 100}%` }} title={`${n}: ${chart.elementCount[n]}`} />
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-3 text-xs">
          {NGU_HANH.map((n, i) => (
            <span key={n} className={ELEM_COLOR[i]}>
              {n} {chart.elementCount[n]}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-2 text-sm font-medium">
          Đại vận · khởi vận {chart.khoiVan.forward ? "thuận" : "nghịch"} sau {chart.khoiVan.years} năm {chart.khoiVan.months} tháng {chart.khoiVan.days} ngày
        </div>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
          {chart.daiVan.map((d) => (
            <div key={d.startAge} className="rounded-lg border border-stone-200 bg-white p-2 text-center">
              <div className="text-xs text-stone-500">{d.startAge}–{d.endAge}</div>
              <div className="text-lg font-semibold">{CAN_HAN[d.ganzhi.can]}{CHI_HAN[d.ganzhi.chi]}</div>
              <div className="text-xs">{d.ganzhi.name}</div>
              <div className="text-[11px] text-stone-500">{d.thapThan}</div>
              <div className="text-[11px] text-stone-400">{d.startYear}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 text-sm">
        {chart.luuNien.map((l) => (
          <span key={l.year} className="rounded-full bg-stone-100 px-3 py-1">
            Lưu niên {l.year}: {l.ganzhi.name} ({l.thapThan})
          </span>
        ))}
      </div>
      {chart.notes.map((n) => (
        <p key={n} className="text-xs text-stone-500">{n}</p>
      ))}
    </div>
  );
}
