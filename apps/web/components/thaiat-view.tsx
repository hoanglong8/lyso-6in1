"use client";

import { useState } from "react";
import { CHI, type CalendarSnapshot } from "@lyso/calendar-vn";
import { LuanGiaiPanel } from "./luan-giai-panel";
import { buildThaiAtFromSnapshot, CUNG_TA, KE_LABEL, R16, THAN16, type Ke } from "@lyso/engine-thaiat";

/** Vị trí vòng 16 trên viền lưới 5×5 (hàng, cột), Nam ở trên */
const POS16: [number, number][] = [
  [5, 3], [5, 2], [5, 1], [4, 1], [3, 1], [2, 1], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [5, 4],
];
/** Cung Thái ất → vị trí vòng 16 (chính cung) */
const CUNG_POS: Record<number, number> = { 1: 14, 2: 8, 3: 2, 4: 4, 6: 12, 7: 10, 8: 0, 9: 6 };
const chiPos = (z: number) => [0, 1, 3, 4, 5, 7, 8, 9, 11, 12, 13, 15][z] as number;

export function ThaiAtView({ snap }: { snap: CalendarSnapshot }) {
  const [ke, setKe] = useState<Ke>("nien");
  const c = buildThaiAtFromSnapshot(snap, ke);
  const marks: string[][] = Array.from({ length: 16 }, () => []);
  const center: string[] = [];
  const at = (pos: number, label: string) => marks[pos]!.push(label);
  const atCung = (cung: number, label: string) => (cung === 5 ? center.push(label) : at(CUNG_POS[cung] as number, label));
  atCung(c.thaiAt.cung, "Thái ất");
  at(c.vanXuong, "Văn xương");
  at(c.thuyKich, "Thủy kích");
  at(c.dinhMuc, "Định mục");
  at(chiPos(c.thaiTue), "Thái tuế");
  at(chiPos(c.keThan), "Kế thần");
  at(chiPos(c.hopThan), "Hợp thần");
  atCung(c.chu.daiTuong, "Chủ đại");
  atCung(c.chu.thamTuong, "Chủ tham");
  atCung(c.khach.daiTuong, "Khách đại");
  atCung(c.khach.thamTuong, "Khách tham");
  atCung(c.dinh.daiTuong, "Định đại");
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 text-sm">
        {(Object.keys(KE_LABEL) as Ke[]).map((k) => (
          <button key={k} type="button" onClick={() => setKe(k)} className={`rounded-full border px-3 py-1 ${ke === k ? "border-son bg-son-soft text-son" : "border-stone-300 bg-white"}`}>
            {KE_LABEL[k]}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto">
        <div className="grid min-w-[560px] grid-cols-5 grid-rows-5 text-xs">
          {POS16.map(([r, col], p) => (
            <div key={p} style={{ gridRow: r, gridColumn: col }} className="flex min-h-20 flex-col gap-0.5 border border-stone-300 bg-white p-1.5">
              <div className="flex justify-between text-[10px] text-stone-500">
                <span>{THAN16[p]}</span>
                <span className="font-medium text-stone-700">{R16[p]}</span>
              </div>
              {marks[p]!.map((m) => (
                <span key={m} className={m === "Thái ất" ? "font-semibold text-son" : m.startsWith("Chủ") ? "text-emerald-800" : m.startsWith("Khách") ? "text-sky-800" : "text-stone-700"}>
                  {m}
                </span>
              ))}
            </div>
          ))}
          <div style={{ gridRow: "2 / span 3", gridColumn: "2 / span 3" }} className="flex flex-col items-center justify-center gap-1 border border-stone-300 bg-son-soft/40 p-3 text-center text-sm">
            <div className="font-semibold">
              {KE_LABEL[c.ke]} · {c.duong ? "Dương" : "Âm"} độn {c.cuc} cục
            </div>
            <div className="text-xs text-stone-600">
              Tích {c.tich.toLocaleString("vi-VN")} · {c.ly} · Thái ất cung {c.thaiAt.cung} {c.thaiAt.name}, năm thứ {c.thaiAt.nam}
            </div>
            <div className="mt-1 grid grid-cols-3 gap-2 text-xs">
              {(
                [
                  ["Chủ", c.chu],
                  ["Khách", c.khach],
                  ["Định", c.dinh],
                ] as const
              ).map(([n, t]) => (
                <div key={n} className="rounded bg-white/80 px-2 py-1">
                  <div className="font-medium">
                    {n} toán {t.value}
                  </div>
                  <div className="text-stone-600">
                    Đại {t.daiTuong} · Tham {t.thamTuong}
                  </div>
                </div>
              ))}
            </div>
            {center.length > 0 && <div className="text-xs text-stone-600">Trung cung: {center.join(", ")}</div>}
            <div className="text-xs text-stone-500">Tam môn {c.tamMon}</div>
          </div>
        </div>
      </div>
      <div className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded-lg border border-stone-200 bg-white px-3 py-2">
          Tứ thần {c.tuThan} · Thiên ất {c.thienAt} · Địa ất {c.diaAt} · Trực phù {c.trucPhu} · Phi phù {c.phiPhu}
        </p>
        <p className="rounded-lg border border-stone-200 bg-white px-3 py-2">
          Quân cơ {CHI[c.quanCo]} · Thần cơ {CHI[c.thanCo]} · Dân cơ {CHI[c.danCo]}
        </p>
      </div>
      <p className="text-xs text-stone-500">
        Cung Thái ất: 1 {CUNG_TA[1]}, 2 {CUNG_TA[2]}, 3 {CUNG_TA[3]}, 4 {CUNG_TA[4]}, 6 {CUNG_TA[6]}, 7 {CUNG_TA[7]}, 8 {CUNG_TA[8]}, 9 {CUNG_TA[9]}. Tích niên theo Thái ất
        Thống tông (10153917 + năm). Tướng ở cung 5 là "không ra khỏi trung cung".
      </p>
      {c.notes.map((n) => (
        <p key={n} className="text-xs text-amber-800">{n}</p>
      ))}
      <LuanGiaiPanel withQuestion request={{ mon: "thaiat", input: snap.input, calendarConfig: snap.config, thaiatKe: ke }} />
    </div>
  );
}
