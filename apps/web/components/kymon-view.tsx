"use client";

import { useState } from "react";
import { CAN, type CalendarSnapshot } from "@lyso/calendar-vn";
import { buildKyMonFromSnapshot, DEFAULT_KYMON_CONFIG, HUONG, type KyMonConfig } from "@lyso/engine-kymon";

const field = "w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm";
/** Bố cục Lạc thư, phương Nam ở trên */
const GRID = [4, 9, 2, 3, 5, 7, 8, 1, 6];
const NGUYEN = ["Thượng", "Trung", "Hạ"];

export function KyMonView({ snap }: { snap: CalendarSnapshot }) {
  const [cfg, setCfg] = useState<KyMonConfig>(DEFAULT_KYMON_CONFIG);
  const c = buildKyMonFromSnapshot(snap, cfg);
  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
        <div className="space-y-2">
          <div className="text-sm">
            <b>
              {c.cuc.duong ? "Dương" : "Âm"} độn {c.cuc.so} cục
            </b>{" "}
            · {c.cuc.termName} {NGUYEN[c.cuc.nguyen]} nguyên · tuần {c.tuanThu} (phù thủ {CAN[c.phuThu]})
            {c.phucNgam && <span className="ml-2 rounded bg-amber-100 px-1.5 text-xs text-amber-900">Phục ngâm</span>}
            {c.phanNgam && <span className="ml-2 rounded bg-amber-100 px-1.5 text-xs text-amber-900">Phản ngâm</span>}
          </div>
          <div className="grid min-w-[420px] grid-cols-3 text-sm">
            {GRID.map((k) => {
              const p = c.palaces[k]!;
              const center = k === 5;
              return (
                <div key={k} className={`flex min-h-32 flex-col gap-1 border border-stone-300 p-2 ${center ? "bg-son-soft/40" : "bg-white"} ${k === c.trucPhu.denCung ? "ring-2 ring-inset ring-son" : ""}`}>
                  <div className="flex justify-between text-[11px] text-stone-500">
                    <span>{p.than ?? ""}</span>
                    <span>
                      {k} {p.name} · {HUONG[k]}
                    </span>
                  </div>
                  {!center ? (
                    <>
                      <div className="text-stone-700">{p.sao.join(" · ")}</div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg font-semibold text-son">{p.thien.map((x) => CAN[x]).join(" ")}</span>
                        <span className="font-medium">{p.mon ? `${p.mon} môn` : ""}</span>
                      </div>
                      <div className="flex items-baseline justify-between text-stone-600">
                        <span>{p.dia.map((x) => CAN[x]).join(" ")}</span>
                        <span className="flex gap-1 text-[10px]">
                          {p.tuanKhong && <span className="rounded bg-stone-200 px-1">Không</span>}
                          {p.maTinh && <span className="rounded bg-emerald-100 px-1 text-emerald-800">Mã</span>}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-1 flex-col items-center justify-center text-center text-xs text-stone-600">
                      <div>Địa bàn {p.dia.map((x) => CAN[x]).join(" ")}</div>
                      <div className="mt-1">
                        Ngày {c.day.name} · giờ {c.hour.name}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-xs text-stone-500">
            Mỗi ô: bát thần (trên trái), cửu tinh, can thiên bàn (đỏ) – bát môn, can địa bàn. Ô viền đỏ là nơi trực phù ({c.trucPhu.sao}) đến; trực sử {c.trucSu.mon} môn
            đến cung {c.trucSu.denCung}. Phương Nam ở trên.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <label className="block">
            <span className="text-stone-600">Định cục</span>
            <select className={`${field} mt-1 py-1.5`} value={cfg.dinhCuc} onChange={(e) => setCfg({ ...cfg, dinhCuc: e.target.value as KyMonConfig["dinhCuc"] })}>
              <option value="sach-bo">Sách bổ (phù đầu)</option>
              <option value="tri-nhuan">Trí nhuận (siêu thần tiếp khí)</option>
              <option value="mao-son">Mão sơn (5 ngày sau giao tiết)</option>
            </select>
          </label>
          <label className="block">
            <span className="text-stone-600">Trung cung ký</span>
            <select className={`${field} mt-1 py-1.5`} value={cfg.kyCung} onChange={(e) => setCfg({ ...cfg, kyCung: e.target.value as KyMonConfig["kyCung"] })}>
              <option value="khon">Luôn ký Khôn 2</option>
              <option value="duong-can-am-khon">Dương ký Cấn 8, âm ký Khôn 2</option>
            </select>
          </label>
          <p className="text-xs text-stone-500">{c.cuc.note}.</p>
          {c.notes.map((n) => (
            <p key={n} className="text-xs text-stone-500">{n}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
