"use client";

import { useEffect, useState } from "react";
import type { CalendarConfig, CalendarInput } from "@lyso/calendar-vn";
import type { TuViConfig } from "@lyso/engine-tuvi";
import { PLACES } from "@/lib/places";

export type Gender = "nam" | "nu";

export interface Profile {
  id: string;
  name: string;
  gender: Gender;
  calendar: "solar" | "lunar";
  date: string; // YYYY-MM-DD (dương hoặc âm)
  lunarLeap: boolean;
  time: string; // HH:MM
  timeKnown: boolean;
  placeIdx: number;
}

export interface Settings {
  calendar: CalendarConfig;
  tuvi: TuViConfig;
}

export const DEFAULT_SETTINGS: Settings = {
  calendar: { dayBoundary: "ty23", useTrueSolarTime: false, lunarTzMode: "historical" },
  tuvi: { algorithm: "default", leapMonth: "split15" },
};

export const emptyProfile = (): Profile => ({
  id: Math.random().toString(36).slice(2, 10),
  name: "",
  gender: "nam",
  calendar: "solar",
  date: "1990-05-15",
  lunarLeap: false,
  time: "07:05",
  timeKnown: true,
  placeIdx: 0,
});

export function toCalendarInput(p: Profile): CalendarInput {
  const [y, m, d] = p.date.split("-").map(Number) as [number, number, number];
  const [h, mi] = p.time.split(":").map(Number) as [number, number];
  return {
    date: { y, m, d },
    calendar: p.calendar,
    lunarLeap: p.lunarLeap,
    time: p.timeKnown ? { h: h ?? 0, mi: mi ?? 0 } : null,
    place: PLACES[p.placeIdx],
  };
}

const KEY = "lyso.profiles.v1";

/** Hồ sơ chỉ lưu trên trình duyệt này (localStorage), không gửi lên server. */
export function useSavedProfiles() {
  const [list, setList] = useState<Profile[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setList(JSON.parse(raw) as Profile[]);
    } catch {
      /* trình duyệt chặn lưu trữ: bỏ qua */
    }
  }, []);
  const persist = (next: Profile[]) => {
    setList(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* bỏ qua */
    }
  };
  return {
    list,
    save: (p: Profile) => persist([p, ...list.filter((x) => x.id !== p.id)].slice(0, 30)),
    remove: (id: string) => persist(list.filter((x) => x.id !== id)),
  };
}

const field = "w-full rounded-lg border border-stone-300 bg-white px-3 py-2";

export function ProfileForm({
  value,
  onChange,
  settings,
  onSettings,
}: {
  value: Profile;
  onChange: (p: Profile) => void;
  settings: Settings;
  onSettings: (s: Settings) => void;
}) {
  const set = <K extends keyof Profile>(k: K, v: Profile[K]) => onChange({ ...value, [k]: v });
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <label className="block space-y-1">
        <span className="text-sm font-medium">Tên gọi (không bắt buộc)</span>
        <input className={field} value={value.name} maxLength={40} placeholder="Ví dụ: Anh Long" onChange={(e) => set("name", e.target.value)} />
      </label>

      <div className="flex gap-2">
        {(["nam", "nu"] as const).map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => set("gender", g)}
            className={`flex-1 rounded-lg border px-3 py-1.5 text-sm ${value.gender === g ? "border-son bg-son-soft text-son" : "border-stone-300 bg-white"}`}
          >
            {g === "nam" ? "Nam" : "Nữ"}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        {(["solar", "lunar"] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => set("calendar", c)}
            className={`flex-1 rounded-lg border px-3 py-1.5 text-sm ${value.calendar === c ? "border-son bg-son-soft text-son" : "border-stone-300 bg-white"}`}
          >
            {c === "solar" ? "Dương lịch" : "Âm lịch"}
          </button>
        ))}
      </div>

      <label className="block space-y-1">
        <span className="text-sm font-medium">{value.calendar === "solar" ? "Ngày sinh dương lịch" : "Ngày sinh âm lịch (năm-tháng-ngày)"}</span>
        {value.calendar === "solar" ? (
          <input type="date" className={field} value={value.date} onChange={(e) => set("date", e.target.value)} />
        ) : (
          <input inputMode="numeric" placeholder="1990-04-21" className={field} value={value.date} onChange={(e) => set("date", e.target.value)} />
        )}
      </label>
      {value.calendar === "lunar" && (
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={value.lunarLeap} onChange={(e) => set("lunarLeap", e.target.checked)} /> Tháng nhuận
        </label>
      )}

      <div className="space-y-1">
        <label className="block text-sm font-medium" htmlFor="gio-sinh">Giờ sinh (giờ đồng hồ)</label>
        <input id="gio-sinh" type="time" className={`${field} disabled:opacity-40`} disabled={!value.timeKnown} value={value.time} onChange={(e) => set("time", e.target.value)} />
        <label className="flex items-center gap-2 text-sm text-stone-600">
          <input type="checkbox" checked={!value.timeKnown} onChange={(e) => set("timeKnown", !e.target.checked)} /> Không rõ giờ
        </label>
      </div>

      <label className="block space-y-1">
        <span className="text-sm font-medium">Nơi sinh</span>
        <select className={field} value={value.placeIdx} onChange={(e) => set("placeIdx", Number(e.target.value))}>
          {PLACES.map((p, i) => (
            <option key={p.name} value={i}>{p.name}</option>
          ))}
        </select>
      </label>

      <details className="rounded-lg border border-stone-200 bg-stone-50 p-3 text-sm">
        <summary className="cursor-pointer font-medium">Quy ước trường phái</summary>
        <div className="mt-3 space-y-3">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1"
              checked={settings.calendar.useTrueSolarTime}
              onChange={(e) => onSettings({ ...settings, calendar: { ...settings.calendar, useTrueSolarTime: e.target.checked } })}
            />
            <span>Dùng giờ mặt trời thực</span>
          </label>
          <label className="block">
            <span className="text-stone-600">Đổi ngày lúc</span>
            <select
              className={`${field} mt-1 py-1.5`}
              value={settings.calendar.dayBoundary}
              onChange={(e) => onSettings({ ...settings, calendar: { ...settings.calendar, dayBoundary: e.target.value as CalendarConfig["dayBoundary"] } })}
            >
              <option value="ty23">23h (Tý sớm thuộc ngày sau)</option>
              <option value="ty00">0h (Tý muộn giữ ngày cũ)</option>
            </select>
          </label>
          <label className="block">
            <span className="text-stone-600">Âm lịch tính theo</span>
            <select
              className={`${field} mt-1 py-1.5`}
              value={settings.calendar.lunarTzMode}
              onChange={(e) => onSettings({ ...settings, calendar: { ...settings.calendar, lunarTzMode: e.target.value as CalendarConfig["lunarTzMode"] } })}
            >
              <option value="historical">Múi giờ nơi sinh lúc đó</option>
              <option value="vn-standard">Luôn UTC+7</option>
            </select>
          </label>
          <label className="block">
            <span className="text-stone-600">Tử vi: cách an sao</span>
            <select
              className={`${field} mt-1 py-1.5`}
              value={settings.tuvi.algorithm}
              onChange={(e) => onSettings({ ...settings, tuvi: { ...settings.tuvi, algorithm: e.target.value as TuViConfig["algorithm"] } })}
            >
              <option value="default">Toàn thư (thông dụng)</option>
              <option value="zhongzhou">Trung Châu phái</option>
            </select>
          </label>
          <label className="block">
            <span className="text-stone-600">Tử vi: sinh tháng nhuận</span>
            <select
              className={`${field} mt-1 py-1.5`}
              value={settings.tuvi.leapMonth}
              onChange={(e) => onSettings({ ...settings, tuvi: { ...settings.tuvi, leapMonth: e.target.value as TuViConfig["leapMonth"] } })}
            >
              <option value="split15">15 ngày đầu tính tháng đó, sau tính tháng sau</option>
              <option value="asCurrent">Tính như tháng đó</option>
              <option value="asNext">Tính như tháng sau</option>
            </select>
          </label>
        </div>
      </details>
    </form>
  );
}
