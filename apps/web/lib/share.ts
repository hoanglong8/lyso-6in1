import type { Profile } from "@/components/profile-form";

/**
 * Chia sẻ lá số bằng link: hồ sơ (không kèm id) mã hóa base64url trong phần # của URL.
 * Phần # không được trình duyệt gửi lên máy chủ — người nhận mở link thì lá số được tính ngay trên máy họ.
 */
const enc = (s: string) => btoa(String.fromCharCode(...new TextEncoder().encode(s))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const dec = (s: string) => new TextDecoder().decode(Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0)));

export function linkChiaSe(p: Profile, origin: string): string {
  const { id: _id, ...rest } = p;
  return `${origin}/la-so#h=${enc(JSON.stringify(rest))}`;
}

export function docHash(hash: string): Omit<Profile, "id"> | null {
  const m = /[#&]h=([A-Za-z0-9_-]+)/.exec(hash);
  if (!m) return null;
  try {
    const o = JSON.parse(dec(m[1]!)) as Partial<Profile>;
    if (typeof o.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(o.date)) return null;
    return {
      name: String(o.name ?? "").slice(0, 40),
      gender: o.gender === "nu" ? "nu" : "nam",
      calendar: o.calendar === "lunar" ? "lunar" : "solar",
      date: o.date,
      lunarLeap: !!o.lunarLeap,
      time: typeof o.time === "string" && /^\d{2}:\d{2}$/.test(o.time) ? o.time : "12:00",
      timeKnown: o.timeKnown !== false,
      placeIdx: Number.isInteger(o.placeIdx) ? (o.placeIdx as number) : 0,
    };
  } catch {
    return null;
  }
}
