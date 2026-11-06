/**
 * Thiên văn: điểm sóc (trăng mới) và kinh độ hoàng đạo biểu kiến của Mặt Trời.
 * Dùng astronomy-engine (MIT) thay cho công thức gần đúng, để thời khắc tiết khí
 * chính xác tới cỡ giây — quan trọng với Bát tự khi sinh sát giờ giao tiết.
 */
import * as Astronomy from "astronomy-engine";
import { MS_PER_DAY } from "./julian";

/** Kinh độ hoàng đạo biểu kiến của Mặt Trời (độ, 0–360). */
export function sunLongitude(date: Date): number {
  const lon = Astronomy.SunPosition(date).elon;
  return ((lon % 360) + 360) % 360;
}

/** Thời điểm đầu tiên kể từ `start` Mặt Trời đạt kinh độ `lon` (độ). */
export function nextSunLongitude(lon: number, start: Date, limitDays = 400): Date {
  // Tìm theo cửa sổ 40 ngày: SearchSunLongitude với cửa sổ dài đôi khi trượt mất điểm vắt qua 360°/0°.
  const target = ((lon % 360) + 360) % 360;
  for (let off = 0; off < limitDays; off += 40) {
    const from = new Date(start.getTime() + off * MS_PER_DAY);
    const t = Astronomy.SearchSunLongitude(target, from, Math.min(40, limitDays - off) + 1);
    if (t && t.date.getTime() >= start.getTime()) return t.date;
  }
  throw new Error(`Không tìm thấy thời điểm kinh độ Mặt Trời ${lon}°`);
}

/** Thời điểm gần nhất TRƯỚC (hoặc bằng) `at` Mặt Trời đạt kinh độ `lon`. */
export function prevSunLongitude(lon: number, at: Date): Date {
  const start = new Date(at.getTime() - 380 * MS_PER_DAY);
  let t = nextSunLongitude(lon, start, 400);
  for (;;) {
    const n = nextSunLongitude(lon, new Date(t.getTime() + MS_PER_DAY), 400);
    if (n.getTime() > at.getTime()) return t;
    t = n;
  }
}

/** Điểm sóc đầu tiên kể từ `start`. */
export function nextNewMoon(start: Date): Date {
  const t = Astronomy.SearchMoonPhase(0, start, 40);
  if (!t) throw new Error("Không tìm thấy điểm sóc");
  return t.date;
}

/** Điểm sóc gần nhất trước hoặc bằng `at`. */
export function prevNewMoon(at: Date): Date {
  const t = nextNewMoon(new Date(at.getTime() - 31 * MS_PER_DAY));
  if (t.getTime() <= at.getTime()) {
    const n = nextNewMoon(new Date(t.getTime() + MS_PER_DAY));
    return n.getTime() <= at.getTime() ? n : t;
  }
  return nextNewMoon(new Date(at.getTime() - 61 * MS_PER_DAY));
}
