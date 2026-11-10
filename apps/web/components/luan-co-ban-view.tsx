"use client";

import { useState } from "react";
import type { LuanCoBan } from "@lyso/luan-co-ban";

const TONE: Record<string, string> = {
  tot: "border-emerald-400",
  xau: "border-amber-500",
  trung: "border-stone-300",
};

/** Luận cơ bản: tính ngay trên trình duyệt từ lá số, không gửi đi đâu. */
export function LuanCoBanView({ luan, children, note }: { luan: LuanCoBan; children?: React.ReactNode; note?: string }) {
  const [showCanCu, setShowCanCu] = useState(true);
  // Nhóm đang đóng (theo tiêu đề); mặc định mở hết, in ra luôn mở
  const [dong, setDong] = useState<Set<string>>(new Set());
  const toggle = (t: string) => setDong((d) => { const n = new Set(d); if (n.has(t)) n.delete(t); else n.add(t); return n; });
  const allClosed = luan.phan.every((p) => dong.has(p.title));
  return (
    <section className="space-y-3 rounded-xl border border-stone-200 bg-white p-4 print:border-0 print:p-0">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-semibold">Luận cơ bản · {luan.mon}</h2>
        <div className="flex items-center gap-3 print:hidden">
        <button type="button" className="text-xs text-stone-500 underline" onClick={() => setDong(allClosed ? new Set() : new Set(luan.phan.map((p) => p.title)))}>
          {allClosed ? "Mở hết" : "Thu gọn hết"}
        </button>
        <label className="flex items-center gap-1 text-xs text-stone-500">
          <input type="checkbox" checked={showCanCu} onChange={(e) => setShowCanCu(e.target.checked)} />
          Hiện căn cứ
        </label>
        </div>
      </div>
      {children}
      <p className="text-sm font-medium text-stone-800">{luan.tomTat}</p>
      {luan.phan.map((p) => (
        <div key={p.title} className="space-y-1.5">
          <h3 className="text-sm font-semibold text-son">
            <button type="button" onClick={() => toggle(p.title)} className="flex w-full items-center gap-1 text-left" aria-expanded={!dong.has(p.title)}>
              <span className="inline-block w-3 text-stone-400 print:hidden">{dong.has(p.title) ? "▸" : "▾"}</span>
              {p.title}
              <span className="ml-1 text-xs font-normal text-stone-400">({p.items.length})</span>
            </button>
          </h3>
          <ul className={`space-y-1.5 ${dong.has(p.title) ? "hidden print:block" : ""}`}>
            {p.items.map((y, i) => (
              <li key={i} className={`border-l-2 pl-3 text-sm leading-relaxed ${TONE[y.tone ?? "trung"]}`}>
                {y.text}
                {showCanCu && y.canCu && <span className="block text-xs text-stone-500">Căn cứ: {y.canCu}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {note && <p className="text-xs text-stone-400">{note}</p>}
      <div className="space-y-1 border-t border-stone-100 pt-2 text-xs text-stone-500">
        {luan.canhBao.map((c) => (
          <p key={c}>{c}</p>
        ))}
      </div>
    </section>
  );
}
