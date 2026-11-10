import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { SUPABASE_URL, supabaseEnabled } from "./config";

/** Client quyền service role — CHỈ dùng ở máy chủ (webhook thanh toán). Thiếu khóa thì trả null. */
export function getAdminSupabase(): SupabaseClient | null {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
  if (!supabaseEnabled || !key) return null;
  return createClient(SUPABASE_URL, key, { auth: { persistSession: false, autoRefreshToken: false } });
}
