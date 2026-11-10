"use client";

import { useState } from "react";

export function NangCapButtons({ goi }: { goi: { thang: number; gia: number; ten: string }[] }) {
  const [loi, setLoi] = useState("");
  const [dang, setDang] = useState(false);
  const mua = async (thang: number) => {
    setDang(true);
    setLoi("");
    const r = await fetch("/api/thanh-toan/tao", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ thang }) });
    const j = (await r.json().catch(() => ({}))) as { checkoutUrl?: string; error?: string };
    if (j.checkoutUrl) window.location.href = j.checkoutUrl;
    else { setLoi(j.error ?? "Có lỗi."); setDang(false); }
  };
  return (
    <div className="space-y-2">
      {goi.map((g) => (
        <button key={g.thang} disabled={dang} onClick={() => mua(g.thang)} className="block w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-left hover:border-son disabled:opacity-50">
          <b>{g.ten}</b> — {g.gia.toLocaleString("vi-VN")} đ
        </button>
      ))}
      {loi && <p className="text-sm text-red-700">{loi}</p>}
    </div>
  );
}
