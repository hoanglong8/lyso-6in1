"use client";

import { useMemo, useState } from "react";
import { buildSnapshot } from "@lyso/calendar-vn";
import { chonNgay, VIEC, type Viec } from "@lyso/van-su";
import { toCalendarInput, useSavedProfiles } from "./profile-form";

const MAU = { tốt: "bg-emerald-50 text-emerald-800", khá: "bg-sky-50 text-sky-800", "bình thường": "", xấu: "bg-red-50 text-red-800" } as const;
const homNay = () => { const d = new Date(Date.now() + 7 * 3600_000); return d.toISOString().slice(0, 10); };

export default function ChonNgayApp() {
  const [tu, setTu] = useState(homNay);
  const [soNgay, setSoNgay] = useState(30);
  const [viec, setViec] = useState<Viec>("chung");
  const [hoSo, setHoSo] = useState("");
  const [chiTot, setChiTot] = useState(false);
  const saved = useSavedProfiles();
  const ds = useMemo(() => {
    const p = saved.list.find((q) => q.id === hoSo);
    let namSinh;
    try { namSinh = p ? buildSnapshot(toCalendarInput(p)).ganzhi.year : undefined; } catch { namSinh = undefined; }
    try { return chonNgay(tu, soNgay, { viec, namSinh }); } catch { return []; }
  }, [tu, soNgay, viec, hoSo, saved.list]);
  const hien = chiTot ? ds.filter((n) => n.xepLoai === "tốt" || n.xepLoai === "khá") : ds;
  const sel = "rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm";
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-3 rounded-xl border border-stone-200 bg-white p-4 text-sm">
        <label className="space-y-1"><div className="font-medium">Từ ngày</div><input type="date" className={sel} value={tu} onChange={(e) => setTu(e.target.value)} /></label>
        <label className="space-y-1"><div className="font-medium">Trong</div>
          <select className={sel} value={soNgay} onChange={(e) => setSoNgay(Number(e.target.value))}>{[14, 30, 60, 90].map((n) => <option key={n} value={n}>{n} ngày</option>)}</select></label>
        <label className="space-y-1"><div className="font-medium">Việc</div>
          <select className={sel} value={viec} onChange={(e) => setViec(e.target.value as Viec)}>{(Object.keys(VIEC) as Viec[]).map((k) => <option key={k} value={k}>{VIEC[k].label}</option>)}</select></label>
        <label className="space-y-1"><div className="font-medium">Tuổi người làm việc</div>
          <select className={sel} value={hoSo} onChange={(e) => setHoSo(e.target.value)}>
            <option value="">(không xét tuổi)</option>
            {saved.list.map((q) => <option key={q.id} value={q.id}>{q.name || "(không tên)"} · {q.date}</option>)}
          </select></label>
        <label className="flex items-center gap-2 pb-2"><input type="checkbox" checked={chiTot} onChange={(e) => setChiTot(e.target.checked)} /> Chỉ hiện ngày tốt, khá</label>
      </div>
      {saved.list.length === 0 && <p className="text-xs text-stone-500">Muốn xét ngày xung tuổi: lưu hồ sơ ở trang Lá số rồi chọn ở ô "Tuổi người làm việc".</p>}
      <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-stone-50 text-left text-xs text-stone-500">
            <tr><th className="px-3 py-2">Ngày</th><th className="px-3 py-2">Âm lịch</th><th className="px-3 py-2">Can chi</th><th className="px-3 py-2">Trực</th><th className="px-3 py-2">Thần ngày</th><th className="px-3 py-2">Giờ hoàng đạo</th><th className="px-3 py-2">Lưu ý</th><th className="px-3 py-2">Xếp loại</th></tr>
          </thead>
          <tbody>
            {hien.map((n) => (
              <tr key={n.ymd} className="border-t border-stone-100 align-top">
                <td className="px-3 py-2 whitespace-nowrap">{n.thu}<br /><span className="text-stone-500">{n.ymd.split("-").reverse().join("/")}</span></td>
                <td className="px-3 py-2">{n.am}</td>
                <td className="px-3 py-2">{n.canChi}</td>
                <td className="px-3 py-2"><b>{n.truc}</b><div className="text-xs text-stone-500">{n.trucY}</div></td>
                <td className={`px-3 py-2 ${n.hoangDao ? "text-emerald-700" : "text-stone-500"}`}>{n.than}<div className="text-xs">{n.hoangDao ? "hoàng đạo" : "hắc đạo"}</div></td>
                <td className="px-3 py-2 text-xs">{n.gioTot.join(", ")}</td>
                <td className="px-3 py-2 text-xs text-red-700">{n.canhBao.join("; ")}</td>
                <td className="px-3 py-2"><span className={`rounded px-2 py-0.5 text-xs ${MAU[n.xepLoai]}`}>{n.xepLoai}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-stone-500">
        Theo lịch cổ: 12 trực (tháng tính theo tiết khí), ngày và giờ hoàng đạo/hắc đạo (tháng âm lịch), xung tuổi, tam nương, nguyệt kỵ.
        Các sách chọn ngày còn nhiều sao tốt xấu khác chưa xét; việc hệ trọng nên hỏi thêm người xem ngày.
      </p>
    </div>
  );
}
