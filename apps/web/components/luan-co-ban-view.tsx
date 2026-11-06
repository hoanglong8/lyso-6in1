"use client";

import { useState } from "react";
import type { LuanCoBan } from "@lyso/luan-co-ban";

const TONE: Record<string, string> = {
  tot: "border-emerald-400",
  xau: "border-amber-500",
  trung: "border-stone-300",
};

/** Luận cơ bản: tính ngay trên trình duyệt từ lá số, không gửi đi đâu. */
export function LuanCoBanView({ luan, children }: { luan: LuanCoBan; children?: React.ReactNode }) {
  const [showCanCu, setShowCanCu] = useState(true);
  return (
    <section className="space-y-3 rounded-xl border border-stone-200 bg-white p-4 print:border-0 print:p-0">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-semibold">Luận cơ bản · {luan.mon}</h2>
        <label className="flex items-center gap-1 text-xs text-stone-500 print:hidden">
          <input type="checkbox" checked={showCanCu} onChange={(e) => setShowCanCu(e.target.checked)} />
          Hiện căn cứ
        </label>
      </div>
      {children}
      <p className="text-sm font-medium text-stone-800">{luan.tomTat}</p>
      {luan.phan.map((p) => (
        <div key={p.title} className="space-y-1.5">
          <h3 className="text-sm font-semibold text-son">{p.title}</h3>
          <ul className="space-y-1.5">
            {p.items.map((y, i) => (
              <li key={i} className={`border-l-2 pl-3 text-sm leading-relaxed ${TONE[y.tone ?? "trung"]}`}>
                {y.text}
                {showCanCu && y.canCu && <span className="block text-xs text-stone-500">Căn cứ: {y.canCu}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="space-y-1 border-t border-stone-100 pt-2 text-xs text-stone-500">
        <p>Đối chiếu: {luan.nguon.join("; ")}.</p>
        {luan.canhBao.map((c) => (
          <p key={c}>{c}</p>
        ))}
      </div>
    </section>
  );
}
