/** Supabase chỉ bật khi có biến môi trường; không có thì app chạy chế độ khách (lưu trên trình duyệt). */
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
import { GIAI_DOAN_2 } from "../phase";
export const supabaseEnabled = GIAI_DOAN_2 && Boolean(SUPABASE_URL && SUPABASE_KEY);
/** Phiên bản điều khoản đồng ý lưu dữ liệu; đổi khi sửa trang Quyền riêng tư */
export const CONSENT_VERSION = "2026-11-05";
