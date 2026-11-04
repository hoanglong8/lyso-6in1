"use client";

import { useEffect, useMemo, useState } from "react";
import {
  buildSnapshot,
  CAN_HAN,
  CHI_HAN,
  THANG_AM,
  type CalendarConfig,
  type CalendarSnapshot,
  type GanZhi,
  type WallTime,
} from "@lyso/calendar-vn";
import { PLACES } from "@/lib/places";

const pad = (n: number) => String(n).padStart(2, "0");
const hm = (w: WallTime) => `${pad(w.h)}:${pad(w.mi)}`;
const dmy = (w: { d: number; m: number; y: number }) => `${pad(w.d)}/${pad(w.m)}/${w.y}`;
const han = (g: GanZhi) => `${CAN_HAN[g.can]}${CHI_HAN[g.chi]}`;
/** Hiển thị thời điểm theo độ lệch UTC của nơi sinh tại thời điểm đó. */
const localTime = (iso: string, offsetMin: number) => {
  const w = new Date(Date.parse(iso) + offsetMin * 60_000);
  return `${pad(w.getUTCHours())}:${pad(w.getUTCMinutes())} ${pad(w.getUTCDate())}/${pad(w.getUTCMonth() + 1)}/${w.getUTCFullYear()}`;
};

function today() {
  const n = new Date(Date.now() + 7 * 3600_000);
  return { y: n.getUTCFullYear(), m: n.getUTCMonth() + 1, d: n.getUTCDate(), h: n.getUTCHours(), mi: n.getUTCMinutes() };
}

export default function LichTool() {
  const [calendar, setCalendar] = useState<"solar" | "lunar">("solar");
  const [date, setDate] = useState("2000-01-01");
  const [lunarLeap, setLunarLeap] = useState(false);
  const [time, setTime] = useState("12:00");
  useEffect(() => {
    const t = today();
    setDate(`${t.y}-${pad(t.m)}-${pad(t.d)}`);
    setTime(`${pad(t.h)}:${pad(t.mi)}`);
  }, []);
  const [timeKnown, setTimeKnown] = useState(true);
  const [placeIdx, setPlaceIdx] = useState(0);
  const [config, setConfig] = useState<CalendarConfig>({
    dayBoundary: "ty23",
    useTrueSolarTime: false,
    lunarTzMode: "historical",
  });

  const result = useMemo((): { s: CalendarSnapshot } | { error: string } => {
    try {
      const [y, m, d] = date.split("-").map(Number) as [number, number, number];
      const [h, mi] = time.split(":").map(Number) as [number, number];
      if (!y || !m || !d) return { error: "Chưa nhập ngày." };
      const s = buildSnapshot(
        {
          date: { y, m, d },
          calendar,
          lunarLeap,
          time: timeKnown ? { h: h ?? 0, mi: mi ?? 0 } : null,
          place: PLACES[placeIdx],
        },
        config,
      );
      return { s };
    } catch (e) {
      return { error: e instanceof Error ? e.message : String(e) };
    }
  }, [calendar, date, lunarLeap, time, timeKnown, placeIdx, config]);

  return (
    <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
      <form className="space-y-4 rounded-xl border border-stone-200 bg-white p-5" onSubmit={(e) => e.preventDefault()}>
        <fieldset className="space-y-2">
          <legend className="text-sm font-medium">Ngày nhập theo</legend>
          <div className="flex gap-2">
            {(["solar", "lunar"] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCalendar(c)}
                className={`flex-1 rounded-lg border px-3 py-1.5 text-sm ${calendar === c ? "border-son bg-son-soft text-son" : "border-stone-300"}`}
              >
                {c === "solar" ? "Dương lịch" : "Âm lịch"}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="block space-y-1">
          <span className="text-sm font-medium">{calendar === "solar" ? "Ngày dương" : "Ngày âm (năm-tháng-ngày)"}</span>
          {calendar === "solar" ? (
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-lg border border-stone-300 px-3 py-2" />
          ) : (
            <input
              inputMode="numeric"
              placeholder="1990-04-21"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2"
            />
          )}
        </label>
        {calendar === "lunar" && (
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={lunarLeap} onChange={(e) => setLunarLeap(e.target.checked)} /> Tháng nhuận
          </label>
        )}

        <div className="space-y-1">
          <label className="block text-sm font-medium" htmlFor="gio">Giờ sinh (giờ đồng hồ)</label>
          <input
            id="gio"
            type="time"
            value={time}
            disabled={!timeKnown}
            onChange={(e) => setTime(e.target.value)}
            className="w-full rounded-lg border border-stone-300 px-3 py-2 disabled:opacity-40"
          />
          <label className="flex items-center gap-2 text-sm text-stone-600">
            <input type="checkbox" checked={!timeKnown} onChange={(e) => setTimeKnown(!e.target.checked)} /> Không rõ giờ
          </label>
        </div>

        <label className="block space-y-1">
          <span className="text-sm font-medium">Nơi sinh</span>
          <select value={placeIdx} onChange={(e) => setPlaceIdx(Number(e.target.value))} className="w-full rounded-lg border border-stone-300 px-3 py-2">
            {PLACES.map((p, i) => (
              <option key={p.name} value={i}>{p.name}</option>
            ))}
          </select>
        </label>

        <fieldset className="space-y-2 border-t border-stone-200 pt-4">
          <legend className="text-sm font-medium">Quy ước (theo trường phái)</legend>
          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              className="mt-1"
              checked={config.useTrueSolarTime}
              onChange={(e) => setConfig({ ...config, useTrueSolarTime: e.target.checked })}
            />
            <span>Dùng giờ mặt trời thực thay giờ đồng hồ</span>
          </label>
          <label className="block text-sm">
            <span className="text-stone-600">Đổi ngày lúc</span>
            <select
              value={config.dayBoundary}
              onChange={(e) => setConfig({ ...config, dayBoundary: e.target.value as CalendarConfig["dayBoundary"] })}
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-1.5"
            >
              <option value="ty23">23h (giờ Tý sớm thuộc ngày sau)</option>
              <option value="ty00">0h (giờ Tý muộn giữ ngày cũ)</option>
            </select>
          </label>
          <label className="block text-sm">
            <span className="text-stone-600">Âm lịch tính theo</span>
            <select
              value={config.lunarTzMode}
              onChange={(e) => setConfig({ ...config, lunarTzMode: e.target.value as CalendarConfig["lunarTzMode"] })}
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-1.5"
            >
              <option value="historical">Múi giờ nơi sinh lúc đó</option>
              <option value="vn-standard">Luôn UTC+7</option>
            </select>
          </label>
        </fieldset>
      </form>

      {"error" in result ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-800">{result.error}</div>
      ) : (
        <Result s={result.s} />
      )}
    </div>
  );
}

function Result({ s }: { s: CalendarSnapshot }) {
  const g = s.ganzhi;
  const pillars: [string, GanZhi][] = [
    ["Năm", g.yearBazi],
    ["Tháng", g.monthBazi],
    ["Ngày", g.day],
    ["Giờ", g.hour],
  ];
  const timeKnown = s.input.time !== null;
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-son/30 bg-son-soft p-4 text-sm leading-relaxed">
        {timeKnown ? (
          <>
            <b>{hm(s.clock)}</b> ngày {dmy(s.clock)} tại {s.place.name}, {s.utcOffset.label} → giờ mặt trời thực{" "}
            <b>{hm(s.trueSolar)}</b> ({s.trueSolar.deltaMinutes > 0 ? "+" : ""}
            {s.trueSolar.deltaMinutes} phút) → <b>giờ {s.hour.name}</b> ({s.hour.range}
            {s.config.useTrueSolarTime ? ", theo giờ mặt trời" : ", theo giờ đồng hồ"})
          </>
        ) : (
          <>
            Ngày {dmy(s.clock)} tại {s.place.name}, không rõ giờ.
          </>
        )}
      </div>

      <div className="grid grid-cols-4 gap-2">
        {pillars.map(([label, p]) => (
          <div key={label} className="rounded-xl border border-stone-200 bg-white p-3 text-center">
            <div className="text-xs text-stone-500">{label}</div>
            <div className={`mt-1 text-2xl font-semibold ${label === "Giờ" && !timeKnown ? "text-stone-300" : ""}`}>{han(p)}</div>
            <div className="text-sm">{p.name}</div>
          </div>
        ))}
      </div>
      <p className="text-xs text-stone-500">Tứ trụ Bát tự: năm tính từ Lập xuân, tháng tính theo tiết khí.</p>

      <dl className="grid gap-x-6 gap-y-2 rounded-xl border border-stone-200 bg-white p-5 text-sm sm:grid-cols-2">
        <Row k="Âm lịch">
          Ngày {s.lunar.day} tháng {THANG_AM[s.lunar.month - 1]}
          {s.lunar.leap ? " (nhuận)" : ""} năm {g.year.name} ({s.lunar.conGiap}) · tháng {s.lunar.monthLength === 30 ? "đủ" : "thiếu"}
        </Row>
        <Row k="Can chi tháng âm">{g.monthLunar.name}</Row>
        <Row k="Tiết khí hiện tại">
          {s.solarTerm.current.name} (từ {localTime(s.solarTerm.current.instant, s.utcOffset.minutes)})
        </Row>
        <Row k="Tiết khí kế tiếp">
          {s.solarTerm.next.name} ({localTime(s.solarTerm.next.instant, s.utcOffset.minutes)})
        </Row>
        <Row k="Kinh độ Mặt Trời">{s.sunLongitude.toFixed(2)}°</Row>
        <Row k="Nguyệt tướng (Lục nhâm)">{s.nguyetTuong.name}</Row>
        <Row k="Thời điểm UTC">{s.instantUtc.replace("T", " ").slice(0, 16)}</Row>
        <Row k="Phiên bản">{s.engineVersion}</Row>
      </dl>

      {s.warnings.length > 0 && (
        <ul className="space-y-2">
          {s.warnings.map((w) => (
            <li key={w.code} className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-900">
              {w.message}
            </li>
          ))}
        </ul>
      )}
      <p className="text-xs text-stone-500">Giờ giao tiết hiển thị theo giờ địa phương nơi sinh ({s.utcOffset.label}).</p>
    </div>
  );
}

function Row({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs text-stone-500">{k}</dt>
      <dd>{children}</dd>
    </div>
  );
}
