"use client";

import { useMemo, useState } from "react";
import { buildSnapshot } from "@lyso/calendar-vn";
import { buildBazi } from "@lyso/engine-bazi";
import { buildTuVi } from "@lyso/engine-tuvi";
import { BaziView } from "./bazi-view";
import { Result as LichResult } from "./lich-tool";
import { DEFAULT_SETTINGS, emptyProfile, ProfileForm, toCalendarInput, useSavedProfiles, type Profile, type Settings } from "./profile-form";
import { TuViBoard } from "./tuvi-board";
import { LuanGiaiPanel } from "./luan-giai-panel";
import { LuanCoBanView } from "./luan-co-ban-view";
import { PrintButton } from "./print-button";
import { luanBazi, luanTuVi } from "@lyso/luan-co-ban";
import { GIAI_DOAN_2 } from "@/lib/phase";

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
  const [viewYear, setViewYear] = useState(() => new Date().getFullYear());
  const saved = useSavedProfiles();

  const result = useMemo(() => {
    try {
      const s = buildSnapshot(toCalendarInput(profile), settings.calendar);
      return {
        s,
        tuvi: buildTuVi(s, profile.gender, settings.tuvi, { viewYear }),
        bazi: buildBazi(s, profile.gender, { luuNienYears: [viewYear - 1, viewYear, viewYear + 1] }),
      };
    } catch (e) {
      return { error: e instanceof Error ? e.message : String(e) };
    }
  }, [profile, settings, viewYear]);

  const title = profile.name.trim() || "Lá số";

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      <aside className="space-y-4">
        <a href="#ket-qua" className="block rounded-lg bg-son px-4 py-2 text-center text-sm font-medium text-white lg:hidden">Xem lá số ↓</a>
        <div className="rounded-xl border border-stone-200 bg-white p-4">
          <ProfileForm value={profile} onChange={setProfile} settings={settings} onSettings={setSettings} />
          <button
            type="button"
            onClick={() => saved.save(profile)}
            className="mt-4 w-full rounded-lg bg-son px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            {saved.cloud ? "Lưu hồ sơ vào tài khoản" : "Lưu hồ sơ trên máy này"}
          </button>
          <p className="mt-2 text-xs text-stone-500">
            {saved.cloud ? (
              <>Hồ sơ lưu trong tài khoản của bạn, chỉ bạn xem được. <a href="/quyen-rieng-tu" className="underline">Quyền riêng tư</a></>
            ) : (
              GIAI_DOAN_2 ? (
              <>Hồ sơ chỉ lưu trong trình duyệt này. <a href="/dang-nhap" className="underline">Đăng nhập</a> để lưu vào tài khoản và dùng trên máy khác.</>
            ) : (
              <>Hồ sơ chỉ lưu trong trình duyệt này, không gửi lên máy chủ. Xóa dữ liệu trình duyệt là mất hồ sơ.</>
            )
            )}
          </p>
          {saved.cloud && saved.localCount > 0 && (
            <button type="button" className="mt-2 text-xs text-son hover:underline" onClick={() => saved.importLocal()}>
              Đưa {saved.localCount} hồ sơ trên máy này lên tài khoản
            </button>
          )}
          {saved.error && <p className="mt-2 text-xs text-red-700">{saved.error}</p>}
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

      <section id="ket-qua" className="min-w-0 scroll-mt-4 space-y-4">
        <div className="flex justify-end"><PrintButton /></div>
        <div className="flex gap-1 rounded-lg bg-stone-200/60 p-1 text-sm print:hidden">
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
        {tab !== "lich" && (
          <div className="flex items-center gap-2 text-sm print:hidden">
            <span className="text-stone-600">Xem vận hạn năm</span>
            <button type="button" aria-label="Năm trước" className="rounded border border-stone-300 bg-white px-2" onClick={() => setViewYear(viewYear - 1)}>
              ‹
            </button>
            <input
              type="number"
              className="w-20 rounded border border-stone-300 bg-white px-2 py-1 text-center"
              value={viewYear}
              min={1900}
              max={2100}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (v >= 1900 && v <= 2100) setViewYear(v);
              }}
            />
            <button type="button" aria-label="Năm sau" className="rounded border border-stone-300 bg-white px-2" onClick={() => setViewYear(viewYear + 1)}>
              ›
            </button>
          </div>
        )}
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
            {tab === "bazi" && <BaziView chart={result.bazi} viewYear={viewYear} />}
            {tab === "tuvi" && <LuanCoBanView luan={luanTuVi(result.tuvi)} />}
            {tab === "bazi" && <LuanCoBanView luan={luanBazi(result.bazi, viewYear)} />}
            {tab === "lich" && <LichResult s={result.s} />}
            {tab !== "lich" && (
              <LuanGiaiPanel
                request={{
                  mon: tab,
                  input: toCalendarInput(profile),
                  calendarConfig: settings.calendar,
                  gender: profile.gender,
                  tuvi: settings.tuvi,
                  viewYear,
                }}
              />
            )}
          </>
        )}
      </section>
    </div>
  );
}
