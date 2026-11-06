"use client";

import { useEffect, useState } from "react";
import type { CalendarConfig, CalendarInput } from "@lyso/calendar-vn";
import { DEFAULT_TUVI_CONFIG, SCHOOLS, type TuViConfig } from "@lyso/engine-tuvi";
import { PLACES } from "@/lib/places";
import { useAuth } from "@/lib/auth";
import { getBrowserSupabase } from "@/lib/supabase/client";
import { CONSENT_VERSION } from "@/lib/supabase/config";

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
  tuvi: DEFAULT_TUVI_CONFIG,
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

/**
 * Hồ sơ: chưa đăng nhập → chỉ lưu trên trình duyệt (localStorage).
 * Đã đăng nhập và đồng ý điều khoản → lưu vào tài khoản (Supabase, RLS: chỉ chủ hồ sơ đọc được).
 */
export function useSavedProfiles() {
  const { user } = useAuth();
  const [local, setLocal] = useState<Profile[]>([]);
  const [remote, setRemote] = useState<Profile[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLocal(JSON.parse(raw) as Profile[]);
    } catch {
      /* trình duyệt chặn lưu trữ: bỏ qua */
    }
  }, []);
  useEffect(() => {
    const sb = getBrowserSupabase();
    if (!sb || !user) {
      setRemote(null);
      return;
    }
    sb.from("ho_so")
      .select("data")
      .order("updated_at", { ascending: false })
      .then(({ data, error: e }) => {
        if (e) setError("Không tải được hồ sơ từ tài khoản: " + e.message);
        else setRemote((data ?? []).map((r) => r.data as Profile));
      });
  }, [user]);
  const persistLocal = (next: Profile[]) => {
    setLocal(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* bỏ qua */
    }
  };
  const sb = getBrowserSupabase();
  const cloud = Boolean(sb && user && remote);
  return {
    list: cloud ? (remote as Profile[]) : local,
    cloud,
    localCount: local.length,
    error,
    async save(p: Profile) {
      if (cloud && sb) {
        const { error: e } = await sb.from("ho_so").upsert({ id: p.id, data: p, consent_version: CONSENT_VERSION, updated_at: new Date().toISOString() });
        if (e) return setError("Lưu thất bại: " + e.message);
        setRemote([p, ...(remote ?? []).filter((x) => x.id !== p.id)]);
      } else persistLocal([p, ...local.filter((x) => x.id !== p.id)].slice(0, 30));
    },
    async remove(id: string) {
      if (cloud && sb) {
        const { error: e } = await sb.from("ho_so").delete().eq("id", id);
        if (e) return setError("Xóa thất bại: " + e.message);
        setRemote((remote ?? []).filter((x) => x.id !== id));
      } else persistLocal(local.filter((x) => x.id !== id));
    },
    /** Đưa hồ sơ trên máy lên tài khoản rồi xóa bản trên máy */
    async importLocal() {
      if (!cloud || !sb || !local.length) return;
      const rows = local.map((p) => ({ id: p.id, data: p, consent_version: CONSENT_VERSION, updated_at: new Date().toISOString() }));
      const { error: e } = await sb.from("ho_so").upsert(rows);
      if (e) return setError("Chuyển hồ sơ thất bại: " + e.message);
      setRemote([...local, ...(remote ?? []).filter((x) => !local.some((l) => l.id === x.id))]);
      persistLocal([]);
    },
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
            <span className="text-stone-600">Tử vi: trường phái an sao</span>
            <select
              className={`${field} mt-1 py-1.5`}
              value={settings.tuvi.school}
              onChange={(e) => onSettings({ ...settings, tuvi: { ...settings.tuvi, school: e.target.value as TuViConfig["school"] } })}
            >
              {SCHOOLS.map((sc) => (
                <option key={sc.id} value={sc.id} disabled={!sc.available}>
                  {sc.label}
                  {sc.available ? "" : " — chưa có"}
                </option>
              ))}
            </select>
            <span className="mt-1 block text-xs text-stone-500">{SCHOOLS.find((x) => x.id === settings.tuvi.school)?.description}</span>
            <span className="mt-1 block text-xs text-stone-400">{SCHOOLS.find((x) => x.id === "dong-a")?.description}</span>
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
