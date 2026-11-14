"use client";

import { useMemo, useState } from "react";
import { buildSnapshot } from "@lyso/calendar-vn";
import { hopTuoi } from "@lyso/van-su";
import { DEFAULT_SETTINGS, emptyProfile, ProfileForm, toCalendarInput, useSavedProfiles, type Profile, type Settings } from "./profile-form";

function Khung({ nhan, p, setP }: { nhan: string; p: Profile; setP: (p: Profile) => void }) {
  const [st, setSt] = useState<Settings>(DEFAULT_SETTINGS);
  const saved = useSavedProfiles();
  return (
    <div className="space-y-3 rounded-xl border border-stone-200 bg-white p-4">
      <div className="font-medium">{nhan}</div>
      {saved.list.length > 0 && (
        <select className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm" value="" onChange={(e) => { const x = saved.list.find((q) => q.id === e.target.value); if (x) setP(x); }}>
          <option value="">Chọn hồ sơ đã lưu…</option>
          {saved.list.map((q) => <option key={q.id} value={q.id}>{q.name || "(không tên)"} · {q.date}</option>)}
        </select>
      )}
      <ProfileForm value={p} onChange={setP} settings={st} onSettings={setSt} />
    </div>
  );
}

const MAU: Record<string, string> = { tot: "text-emerald-700", xau: "text-red-700", trung: "text-stone-700" };

export default function HopTuoiApp() {
  const [a, setA] = useState<Profile>(() => ({ ...emptyProfile(), name: "Người thứ nhất" }));
  const [b, setB] = useState<Profile>(() => ({ ...emptyProfile(), name: "Người thứ hai", gender: "nu", date: "1993-08-20" }));
  const r = useMemo(() => {
    try {
      return hopTuoi(
        { ten: a.name || "Người 1", gioi: a.gender, s: buildSnapshot(toCalendarInput(a)) },
        { ten: b.name || "Người 2", gioi: b.gender, s: buildSnapshot(toCalendarInput(b)) },
      );
    } catch (e) {
      return { error: e instanceof Error ? e.message : String(e) };
    }
  }, [a, b]);
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1.3fr]">
      <Khung nhan="Người thứ nhất" p={a} setP={setA} />
      <Khung nhan="Người thứ hai" p={b} setP={setB} />
      <section className="space-y-3 rounded-xl border border-stone-200 bg-white p-4">
        {"error" in r ? (
          <p className="text-sm text-red-700">{r.error}</p>
        ) : (
          <>
            <div>
              <div className="text-sm text-stone-500">{r.tuoi[0]} — {r.tuoi[1]}</div>
              <div className="text-xl font-semibold text-son">{r.ketLuan}</div>
              <div className="text-xs text-stone-500">Điểm {r.diem} / tối đa {r.toiDa}</div>
            </div>
            <ul className="space-y-2 text-sm">
              {r.muc.map((m, i) => (
                <li key={i}>
                  <div className="text-xs font-medium text-stone-500">{m.nhom}</div>
                  <div className={MAU[m.diem > 0 ? "tot" : m.diem < 0 ? "xau" : "trung"]}>{m.text}</div>
                  <div className="text-xs text-stone-400">{m.canCu}</div>
                </li>
              ))}
            </ul>
            <p className="border-t border-stone-100 pt-2 text-xs text-stone-500">
              Xét theo các phép thông dụng (địa chi, thiên can, nạp âm năm sinh, cung phi Bát trạch, nhật trụ). Chỉ để tham khảo — hợp
              nhau hay không chủ yếu do cách hai người đối xử với nhau.
            </p>
          </>
        )}
      </section>
    </div>
  );
}
