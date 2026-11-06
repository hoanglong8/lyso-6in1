"use client";

import { useEffect, useMemo, useState } from "react";
import { buildSnapshot, CHI, type CalendarSnapshot } from "@lyso/calendar-vn";
import {
  castCoins,
  castMaiHoaNumbers,
  castMaiHoaTime,
  interpret,
  type CastInput,
  type Hexagram,
  type LineValue,
  type Reading,
} from "@lyso/engine-kinhdich";
import { buildLucNhamFromSnapshot, DEFAULT_LUCNHAM_CONFIG, type LucNhamChart, type LucNhamConfig } from "@lyso/engine-lucnham";
import { PLACES } from "@/lib/places";
import { LuanGiaiPanel } from "./luan-giai-panel";
import { LuanCoBanView } from "./luan-co-ban-view";
import { PrintButton } from "./print-button";
import { DUNG_THAN, luanKinhDich, luanLucNham, type ViecHoi } from "@lyso/luan-co-ban";
import { KyMonView } from "./kymon-view";
import { ThaiAtView } from "./thaiat-view";

const field = "w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm";
const pad = (n: number) => String(n).padStart(2, "0");

function nowLocal() {
  const d = new Date();
  return { date: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`, time: `${pad(d.getHours())}:${pad(d.getMinutes())}` };
}

type Tab = "kinhdich" | "lucnham" | "kymon" | "thaiat";

export default function ChiemApp() {
  const [when, setWhen] = useState<{ date: string; time: string } | null>(null);
  const [placeIdx, setPlaceIdx] = useState(0);
  const [question, setQuestion] = useState("");
  const [tab, setTab] = useState<Tab>("kinhdich");
  useEffect(() => setWhen(nowLocal()), []);

  const snap = useMemo<CalendarSnapshot | null>(() => {
    if (!when) return null;
    const [y, m, d] = when.date.split("-").map(Number) as [number, number, number];
    const [h, mi] = when.time.split(":").map(Number) as [number, number];
    try {
      return buildSnapshot({ date: { y, m, d }, calendar: "solar", time: { h, mi }, place: PLACES[placeIdx] });
    } catch {
      return null;
    }
  }, [when, placeIdx]);

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      <aside className="space-y-4 rounded-xl border border-stone-200 bg-white p-4 text-sm">
        <label className="block">
          <span className="text-stone-600">Việc cần hỏi (chỉ để bạn ghi nhớ, không gửi đi)</span>
          <textarea className={`${field} mt-1`} rows={3} value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Ví dụ: Dự án tháng này có ký được hợp đồng không?" />
        </label>
        <div className="grid grid-cols-2 gap-2">
          <label className="block">
            <span className="text-stone-600">Ngày</span>
            <input type="date" className={`${field} mt-1`} value={when?.date ?? ""} onChange={(e) => when && setWhen({ ...when, date: e.target.value })} />
          </label>
          <label className="block">
            <span className="text-stone-600">Giờ</span>
            <input type="time" className={`${field} mt-1`} value={when?.time ?? ""} onChange={(e) => when && setWhen({ ...when, time: e.target.value })} />
          </label>
        </div>
        <button type="button" className="text-xs text-son hover:underline" onClick={() => setWhen(nowLocal())}>
          Lấy giờ hiện tại
        </button>
        <label className="block">
          <span className="text-stone-600">Nơi hỏi</span>
          <select className={`${field} mt-1`} value={placeIdx} onChange={(e) => setPlaceIdx(Number(e.target.value))}>
            {PLACES.map((p, i) => (
              <option key={p.name} value={i}>
                {p.name}
              </option>
            ))}
          </select>
        </label>
        {snap && (
          <div className="rounded-lg bg-stone-50 p-3 text-xs leading-relaxed text-stone-700">
            Âm lịch {snap.lunar.day}/{snap.lunar.month}
            {snap.lunar.leap ? " nhuận" : ""}/{snap.lunar.year} · năm {snap.ganzhi.year.name}
            <br />
            Ngày {snap.ganzhi.day.name} · giờ {snap.ganzhi.hour.name}
            <br />
            Tiết {snap.solarTerm.current.name} · Nguyệt tướng {snap.nguyetTuong.name}
          </div>
        )}
      </aside>

      <section className="min-w-0 space-y-4">
        <div className="flex justify-end"><PrintButton /></div>
        <div className="flex gap-1 rounded-lg bg-stone-200/60 p-1 text-sm print:hidden">
          {(
            [
              ["kinhdich", "Kinh dịch"],
              ["lucnham", "Đại Lục Nhâm"],
              ["kymon", "Kỳ môn"],
              ["thaiat", "Thái ất"],
            ] as const
          ).map(([k, label]) => (
            <button key={k} type="button" onClick={() => setTab(k)} className={`flex-1 rounded-md px-3 py-1.5 ${tab === k ? "bg-white font-medium shadow-sm" : "text-stone-600"}`}>
              {label}
            </button>
          ))}
        </div>
        {question && <p className="rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm italic text-stone-700">“{question}”</p>}
        {!snap ? (
          <div className="rounded-xl border border-stone-200 bg-white p-5 text-sm text-stone-500">Đang lấy giờ…</div>
        ) : tab === "kinhdich" ? (
          <KinhDich snap={snap} />
        ) : tab === "lucnham" ? (
          <LucNham snap={snap} />
        ) : tab === "kymon" ? (
          <KyMonView snap={snap} />
        ) : (
          <ThaiAtView snap={snap} />
        )}
      </section>
    </div>
  );
}

// ——— Kinh dịch ———

function HexGlyph({ h, moving = [] }: { h: Hexagram; moving?: number[] }) {
  return (
    <div className="flex flex-col-reverse gap-1.5" aria-label={h.fullName}>
      {h.lines.map((b, i) => (
        <div key={i} className="relative flex h-2.5 w-20 justify-between">
          {b ? <div className="h-full w-full rounded-sm bg-stone-800" /> : (
            <>
              <div className="h-full w-[42%] rounded-sm bg-stone-800" />
              <div className="h-full w-[42%] rounded-sm bg-stone-800" />
            </>
          )}
          {moving.includes(i + 1) && <span className="absolute -right-5 -top-1 text-xs font-bold text-son">{b ? "○" : "×"}</span>}
        </div>
      ))}
    </div>
  );
}

function HexCard({ title, h, moving }: { title: string; h: Hexagram; moving?: number[] }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-stone-200 bg-white p-4 text-center">
      <div className="text-xs text-stone-500">{title}</div>
      <HexGlyph h={h} moving={moving} />
      <div className="font-semibold">{h.fullName}</div>
      <div className="text-xs text-stone-500">
        {h.han} · số {h.number} · cung {h.palace.name} {h.palaceRankName}
      </div>
    </div>
  );
}

type Method = CastInput["method"];

function KinhDich({ snap }: { snap: CalendarSnapshot }) {
  const [method, setMethod] = useState<Method>("mai-hoa-thoi-gian");
  const [coins, setCoins] = useState<CastInput | null>(null);
  const [nums, setNums] = useState({ a: 7, b: 12 });
  const [manual, setManual] = useState<LineValue[]>([7, 7, 7, 7, 7, 7]);
  const [useManual, setUseManual] = useState(false);
  const [viec, setViec] = useState<ViecHoi | undefined>(undefined);

  const cast: CastInput | null =
    method === "mai-hoa-thoi-gian"
      ? castMaiHoaTime(snap)
      : method === "mai-hoa-so"
        ? castMaiHoaNumbers(nums.a, nums.b, snap.hour.chi)
        : useManual
          ? { method: "xu", note: "Kết quả gieo xu tự nhập, từ hào 1 lên.", values: manual }
          : coins;
  const r: Reading | null = cast ? interpret(cast, snap.ganzhi.day) : null;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 text-sm">
        {(
          [
            ["mai-hoa-thoi-gian", "Mai Hoa theo giờ"],
            ["mai-hoa-so", "Mai Hoa theo số"],
            ["xu", "Gieo xu (Lục hào)"],
          ] as const
        ).map(([k, label]) => (
          <button key={k} type="button" onClick={() => setMethod(k)} className={`rounded-full border px-3 py-1 ${method === k ? "border-son bg-son-soft text-son" : "border-stone-300 bg-white"}`}>
            {label}
          </button>
        ))}
      </div>

      {method === "mai-hoa-so" && (
        <div className="flex flex-wrap items-end gap-3 text-sm">
          <label>
            <span className="text-stone-600">Số thứ nhất</span>
            <input type="number" min={1} className={`${field} mt-1 w-28`} value={nums.a} onChange={(e) => setNums({ ...nums, a: Math.max(1, Number(e.target.value) || 1) })} />
          </label>
          <label>
            <span className="text-stone-600">Số thứ hai</span>
            <input type="number" min={1} className={`${field} mt-1 w-28`} value={nums.b} onChange={(e) => setNums({ ...nums, b: Math.max(1, Number(e.target.value) || 1) })} />
          </label>
          <span className="pb-2 text-xs text-stone-500">Hào động = tổng hai số + số giờ, chia 6.</span>
        </div>
      )}

      {method === "xu" && (
        <div className="space-y-3 rounded-xl border border-stone-200 bg-white p-4 text-sm">
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" className="rounded-lg bg-son px-4 py-2 font-medium text-white hover:opacity-90" onClick={() => { setUseManual(false); setCoins(castCoins()); }}>
              Gieo 6 lần
            </button>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={useManual} onChange={(e) => setUseManual(e.target.checked)} />
              Tôi tự gieo xu thật, nhập kết quả
            </label>
          </div>
          {useManual && (
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
              {manual.map((v, i) => (
                <label key={i} className="text-xs">
                  <span className="text-stone-500">Hào {i + 1}</span>
                  <select className={`${field} mt-1 py-1`} value={v} onChange={(e) => setManual(manual.map((x, j) => (j === i ? (Number(e.target.value) as LineValue) : x)))}>
                    <option value={6}>3 sấp — lão âm ×</option>
                    <option value={7}>1 ngửa — thiếu dương</option>
                    <option value={8}>2 ngửa — thiếu âm</option>
                    <option value={9}>3 ngửa — lão dương ○</option>
                  </select>
                </label>
              ))}
            </div>
          )}
          <p className="text-xs text-stone-500">Quy ước: ngửa = 3, sấp = 2; tổng 6 là lão âm (động), 7 thiếu dương, 8 thiếu âm, 9 lão dương (động).</p>
        </div>
      )}

      {r ? (
        <>
          <p className="text-sm text-stone-700">{r.cast.note}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            <HexCard title="Quẻ chủ" h={r.main} moving={r.movingLines} />
            <HexCard title="Hỗ quái" h={r.mutual} />
            {r.changed ? <HexCard title="Quẻ biến" h={r.changed} /> : <div className="flex items-center justify-center rounded-xl border border-dashed border-stone-300 p-4 text-sm text-stone-500">Tĩnh quái — không có hào động</div>}
          </div>
          {r.maiHoa && (
            <p className="rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm">
              Mai Hoa: Thể <b>{r.maiHoa.the.name}</b> ({["Mộc", "Hỏa", "Thổ", "Kim", "Thủy"][r.maiHoa.the.element]}) · Dụng <b>{r.maiHoa.dung.name}</b> (
              {["Mộc", "Hỏa", "Thổ", "Kim", "Thủy"][r.maiHoa.dung.element]}) — {r.maiHoa.relation}
            </p>
          )}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] rounded-xl bg-white text-sm">
              <thead className="text-xs text-stone-500">
                <tr>
                  <th className="p-2 text-left font-normal">Hào</th>
                  <th className="p-2 text-left font-normal">Lục thú</th>
                  <th className="p-2 text-left font-normal">Phục thần</th>
                  <th className="p-2 text-left font-normal">Quẻ chủ</th>
                  <th className="p-2 text-left font-normal"></th>
                  <th className="p-2 text-left font-normal">Biến</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[...r.lines].reverse().map((l) => (
                  <tr key={l.pos} className={l.moving ? "bg-son-soft/40" : ""}>
                    <td className="p-2">{l.pos}</td>
                    <td className="p-2 text-stone-600">{l.lucThu}</td>
                    <td className="p-2 text-xs text-stone-500">{l.phucThan ? `${l.phucThan.lucThan} ${l.phucThan.canChi}` : ""}</td>
                    <td className="p-2">
                      <b>{l.lucThan}</b> {l.canChi} <span className="text-stone-500">{l.element}</span>
                      {l.tuanKhong && <span className="ml-1 rounded bg-stone-200 px-1 text-[10px]">Không</span>}
                    </td>
                    <td className="p-2 text-xs font-semibold">
                      {l.the && <span className="rounded bg-son px-1.5 text-white">Thế</span>}
                      {l.ung && <span className="rounded bg-stone-700 px-1.5 text-white">Ứng</span>}
                      {l.moving && <span className="ml-1 text-son">{l.yang ? "○" : "×"}</span>}
                    </td>
                    <td className="p-2 text-stone-700">{l.bien ? `${l.bien.lucThan} ${l.bien.canChi}` : ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-500">
            Lục hào nạp giáp theo Kinh Phòng (Bát cung), lục thú khởi theo can ngày {snap.ganzhi.day.name}, tuần không{" "}
            {r.tuanKhong?.map((z) => CHI[z]).join(" ")}.
          </p>
          <LuanCoBanView luan={luanKinhDich(r, viec)}>
            <label className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-stone-600">Việc hỏi (để chọn dụng thần Lục hào):</span>
              <select className="rounded-lg border border-stone-300 bg-white px-2 py-1" value={viec ?? ""} onChange={(e) => setViec((e.target.value || undefined) as ViecHoi | undefined)}>
                <option value="">— chưa chọn —</option>
                {Object.entries(DUNG_THAN).map(([k, d]) => (
                  <option key={k} value={k}>
                    {d.y.split(",")[0]} ({d.lucThan})
                  </option>
                ))}
              </select>
            </label>
          </LuanCoBanView>
          <LuanGiaiPanel withQuestion request={{ mon: "kinhdich", input: snap.input, calendarConfig: snap.config, cast: r.cast }} />
        </>
      ) : (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-center text-sm text-stone-500">Bấm "Gieo 6 lần" để lập quẻ.</p>
      )}
    </div>
  );
}

// ——— Đại Lục Nhâm ———

const POS: Record<number, [number, number]> = {
  5: [1, 1], 6: [1, 2], 7: [1, 3], 8: [1, 4],
  4: [2, 1], 9: [2, 4],
  3: [3, 1], 10: [3, 4],
  2: [4, 1], 1: [4, 2], 0: [4, 3], 11: [4, 4],
};
const CAN_VI = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];

function LucNham({ snap }: { snap: CalendarSnapshot }) {
  const [cfg, setCfg] = useState<LucNhamConfig>(DEFAULT_LUCNHAM_CONFIG);
  const c: LucNhamChart = buildLucNhamFromSnapshot(snap, cfg);
  const tt = c.tamTruyen;
  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
        <div className="overflow-x-auto">
          <div className="grid min-w-[420px] grid-cols-4 grid-rows-4 text-center">
            {c.thienBan.map((t, z) => {
              const [row, col] = POS[z] as [number, number];
              const inTT = tt.chi.includes(t);
              return (
                <div key={z} style={{ gridRow: row, gridColumn: col }} className={`flex flex-col items-center justify-center gap-0.5 border border-stone-300 bg-white p-2 ${z === c.hourChi ? "ring-2 ring-inset ring-son" : ""}`}>
                  <div className="text-[11px] text-stone-500">{c.thienTuong[z]}</div>
                  <div className={`text-xl font-semibold ${inTT ? "text-son" : ""}`}>{CHI[t]}</div>
                  <div className="text-[11px] text-stone-400">đất {CHI[z]}</div>
                </div>
              );
            })}
            <div style={{ gridRow: "2 / span 2", gridColumn: "2 / span 2" }} className="flex flex-col items-center justify-center gap-1 border border-stone-300 bg-son-soft/50 p-3 text-sm">
              <div className="font-semibold">Ngày {c.day.name}</div>
              <div>
                Giờ {CHI[c.hourChi]} · Nguyệt tướng {CHI[c.nguyetTuong]}
              </div>
              <div className="text-xs text-stone-600">
                Quý nhân {c.quyNhan.truDa} tại {CHI[c.quyNhan.chi]}, {c.quyNhan.thuan ? "thuận" : "nghịch"} hành
              </div>
              <div className="text-xs text-stone-600">Tuần không {c.tuanKhong.map((z) => CHI[z]).join(" ")}</div>
            </div>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <label className="block">
            <span className="text-stone-600">Thiệp hại</span>
            <select className={`${field} mt-1 py-1.5`} value={cfg.thiepHai} onChange={(e) => setCfg({ ...cfg, thiepHai: e.target.value as LucNhamConfig["thiepHai"] })}>
              <option value="manh-trong-quy">Mạnh – Trọng – Quý (bảng 720 khóa)</option>
              <option value="sau-can">Đếm độ sâu (涉害深者为用)</option>
            </select>
          </label>
          <label className="block">
            <span className="text-stone-600">Bảng Quý nhân</span>
            <select className={`${field} mt-1 py-1.5`} value={cfg.quyNhan} onChange={(e) => setCfg({ ...cfg, quyNhan: e.target.value as LucNhamConfig["quyNhan"] })}>
              <option value="giap-mau-canh-suu-mui">Giáp Mậu Canh: ngày Sửu, đêm Mùi</option>
              <option value="giap-mui">Giáp: ngày Mùi, đêm Sửu</option>
            </select>
          </label>
          <p className="text-xs text-stone-500">Ô viền đỏ là chi giờ, nơi gia Nguyệt tướng. Chữ đỏ là các chi trong tam truyền.</p>
        </div>
      </div>

      <div>
        <div className="mb-2 text-sm font-medium">Tứ khóa</div>
        <div className="grid grid-cols-4 gap-2 text-center">
          {[...c.tuKhoa].reverse().map((k, i) => (
            <div key={i} className="rounded-lg border border-stone-200 bg-white p-2">
              <div className="text-[11px] text-stone-500">Khóa {4 - i} · {k.tuong}</div>
              <div className="text-lg font-semibold">{CHI[k.top]}</div>
              <div className="text-stone-600">{k.bottom.kind === "can" ? CAN_VI[k.bottom.value] : CHI[k.bottom.value]}</div>
              {k.relation && <div className="text-[11px] text-son">{k.relation === "khắc" ? "thượng khắc hạ" : "hạ tặc thượng"}</div>}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-2 text-sm font-medium">
          Tam truyền · <span className="text-son">{tt.method}</span>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {tt.items.map((x, i) => (
            <div key={i} className="rounded-lg border border-stone-200 bg-white p-3 text-sm">
              <div className="text-xs text-stone-500">{["Sơ truyền", "Trung truyền", "Mạt truyền"][i]}</div>
              <div className="text-lg font-semibold">
                <span className="mr-1 text-sm font-normal text-stone-500">{x.dunCan ?? "—"}</span>
                {CHI[x.chi]}
              </div>
              <div>
                {x.tuong} · {x.lucThan}
                {x.tuanKhong && <span className="ml-1 rounded bg-stone-200 px-1 text-[10px]">Không vong</span>}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-stone-500">{tt.note}</p>
      </div>
      {c.notes.map((n) => (
        <p key={n} className="text-xs text-stone-500">{n}</p>
      ))}
      <LuanCoBanView luan={luanLucNham(c)} />
      <LuanGiaiPanel withQuestion request={{ mon: "lucnham", input: snap.input, calendarConfig: snap.config, lucnham: cfg }} />
    </div>
  );
}
