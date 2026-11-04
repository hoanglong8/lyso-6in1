"use client";

import { useMemo, useState } from "react";
import { buildSnapshot } from "@lyso/calendar-vn";
import { buildBazi } from "@lyso/engine-bazi";
import { buildTuVi } from "@lyso/engine-tuvi";
import { BaziView } from "./bazi-view";
import { Result as LichResult } from "./lich-tool";
import { DEFAULT_SETTINGS, emptyProfile, ProfileForm, toCalendarInput, useSavedProfiles, type Profile, type Settings } from "./profile-form";
import { TuViBoard } from "./tuvi-board";

type Tab = "tuvi" | "bazi" | "lich";
const TABS: [Tab, string][] = [
  ["tuvi", "Tử vi"],
  ["bazi", "Bát tự"],
  ["lich", "Lịch & giờ sinh"],
];

export default function LaSoApp() {
  const [profile, setProfile] = useState<Profile>(() => emptyProfile());
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [tab, setTab] = useState<Tab>("tuvi");
  const saved = useSavedProfiles();

  const result = useMemo(() => {
    try {
      const s = buildSnapshot(toCalendarInput(profile), settings.calendar);
      return { s, tuvi: buildTuVi(s, profile.gender, settings.tuvi), bazi: buildBazi(s, profile.gender) };
    } catch (e) {
      return { error: e instanceof Error ? e.message : String(e) };
    }
  }, [profile, settings]);

  const title = profile.name.trim() || "Lá số";

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      <aside className="space-y-4">
        <div className="rounded-xl border border-stone-200 bg-white p-4">
          <ProfileForm value={profile} onChange={setProfile} settings={settings} onSettings={setSettings} />
          <button
            type="button"
            onClick={() => saved.save(profile)}
            className="mt-4 w-full rounded-lg bg-son px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Lưu hồ sơ trên máy này
          </button>
          <p className="mt-2 text-xs text-stone-500">Hồ sơ chỉ lưu trong trình duyệt của bạn, không gửi lên server.</p>
        </div>
        {saved.list.length > 0 && (
          <div className="rounded-xl border border-stone-200 bg-white p-4 text-sm">
            <div className="mb-2 font-medium">Hồ sơ đã lưu</div>
            <ul className="space-y-1">
              {saved.list.map((p) => (
                <li key={p.id} className="flex items-center justify-between gap-2">
                  <button type="button" className="truncate text-left hover:text-son" onClick={() => setProfile(p)}>
                    {p.name || "(không tên)"} · {p.date}
                  </button>
                  <button type="button" aria-label="Xóa hồ sơ" className="text-stone-400 hover:text-red-700" onClick={() => saved.remove(p.id)}>
                    ✕
                  </button>
                </li>
              ))}
            </ul>
            <button type="button" className="mt-3 text-xs text-son hover:underline" onClick={() => setProfile(emptyProfile())}>
              + Hồ sơ mới
            </button>
          </div>
        )}
      </aside>

      <section className="min-w-0 space-y-4">
        <div className="flex gap-1 rounded-lg bg-stone-200/60 p-1 text-sm">
          {TABS.map(([k, label]) => (
            <button
              key={k}
              type="button"
              onClick={() => setTab(k)}
              className={`flex-1 rounded-md px-3 py-1.5 ${tab === k ? "bg-white font-medium shadow-sm" : "text-stone-600"}`}
            >
              {label}
            </button>
          ))}
        </div>
        {"error" in result ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-800">{result.error}</div>
        ) : (
          <>
            {result.s.warnings.length > 0 && tab !== "lich" && (
              <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-900">
                Có {result.s.warnings.length} lưu ý về giờ sinh — xem tab "Lịch &amp; giờ sinh".
              </p>
            )}
            {tab === "tuvi" && <TuViBoard chart={result.tuvi} title={title} />}
            {tab === "bazi" && <BaziView chart={result.bazi} />}
            {tab === "lich" && <LichResult s={result.s} />}
          </>
        )}
      </section>
    </div>
  );
}
