import type { SupabaseClient, User } from "@supabase/supabase-js";
import type { Level } from "./context";
import { supabaseEnabled } from "../supabase/config";

/** Giới hạn lượt mỗi ngày (giờ Việt Nam) */
export const LIMITS = { guest: 2, free: 5, "nang-cao": 30 } as const;

/** Bộ đếm theo IP trong bộ nhớ — chỉ là lớp chặn thô cho khách (mỗi instance serverless một bộ đếm). */
const guestHits = new Map<string, { day: string; n: number }>();
const vnDay = () => new Date(Date.now() + 7 * 3600_000).toISOString().slice(0, 10);

export interface QuotaDecision {
  ok: boolean;
  reason?: string;
  remaining?: number;
}

export async function checkQuota(level: Level, ip: string, sb: SupabaseClient | null, user: User | null): Promise<QuotaDecision> {
  const advancedEmails = (process.env.ADVANCED_EMAILS ?? "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
  if (!user || !sb) {
    if (level === "nang-cao") return { ok: false, reason: supabaseEnabled ? "Luận giải nâng cao cần đăng nhập và gói Nâng cao." : "Luận giải nâng cao chưa mở." };
    const day = vnDay();
    const h = guestHits.get(ip);
    const n = h && h.day === day ? h.n : 0;
    if (n >= LIMITS.guest)
      return { ok: false, reason: `Khách được ${LIMITS.guest} lượt cơ bản mỗi ngày.${supabaseEnabled ? ` Đăng nhập để có ${LIMITS.free} lượt.` : " Hãy quay lại vào ngày mai."}` };
    guestHits.set(ip, { day, n: n + 1 });
    return { ok: true, remaining: LIMITS.guest - n - 1 };
  }
  let plan: "free" | "nang-cao" = "free";
  const { data } = await sb.from("goi_dich_vu").select("plan, het_han").eq("user_id", user.id).maybeSingle();
  if (data?.plan === "nang-cao" && (!data.het_han || new Date(data.het_han) > new Date())) plan = "nang-cao";
  if (user.email && advancedEmails.includes(user.email.toLowerCase())) plan = "nang-cao";
  if (level === "nang-cao" && plan !== "nang-cao") return { ok: false, reason: "Luận giải nâng cao dành cho gói Nâng cao." };
  const since = new Date(`${vnDay()}T00:00:00+07:00`).toISOString();
  const { count } = await sb.from("ai_usage").select("id", { count: "exact", head: true }).gte("created_at", since);
  const limit = LIMITS[plan];
  if ((count ?? 0) >= limit) return { ok: false, reason: `Đã dùng hết ${limit} lượt hôm nay.` };
  return { ok: true, remaining: limit - (count ?? 0) - 1 };
}
