import { kiemChuKyWebhook, payosEnv } from "@/lib/thanh-toan/payos";
import { getAdminSupabase } from "@/lib/supabase/admin";

export const runtime = "nodejs";

/**
 * Webhook payOS: kiểm chữ ký, đánh dấu đơn đã trả, gia hạn gói Nâng cao.
 * Xử lý lặp lại an toàn: đơn đã "da-tra" thì bỏ qua (payOS có thể gửi lại).
 */
export async function POST(req: Request) {
  const env = payosEnv();
  const admin = getAdminSupabase();
  if (!env || !admin) return Response.json({ error: "Thanh toán chưa mở." }, { status: 404 });
  const body = (await req.json().catch(() => null)) as { code?: string; success?: boolean; data?: Record<string, unknown>; signature?: string } | null;
  if (!body?.data || !body.signature || !kiemChuKyWebhook(body.data, body.signature, env.checksumKey)) return Response.json({ error: "Sai chữ ký." }, { status: 400 });
  const orderCode = Number(body.data.orderCode);
  const amount = Number(body.data.amount);
  // payOS gửi một webhook thử khi khai báo URL: trả 200 cho đơn không tồn tại
  const { data: don } = await admin.from("don_hang").select("order_code, user_id, so_thang, so_tien, trang_thai").eq("order_code", orderCode).maybeSingle();
  if (!don) return Response.json({ ok: true });
  if (don.trang_thai === "da-tra") return Response.json({ ok: true });
  if (body.code !== "00" || amount < don.so_tien) {
    await admin.from("don_hang").update({ trang_thai: "loi" }).eq("order_code", orderCode);
    return Response.json({ ok: true });
  }
  const { data: goi } = await admin.from("goi_dich_vu").select("het_han").eq("user_id", don.user_id).maybeSingle();
  const now = new Date();
  const base = goi?.het_han && new Date(goi.het_han) > now ? new Date(goi.het_han) : now;
  base.setMonth(base.getMonth() + don.so_thang);
  await admin.from("goi_dich_vu").upsert({ user_id: don.user_id, plan: "nang-cao", het_han: base.toISOString(), updated_at: now.toISOString() });
  await admin.from("don_hang").update({ trang_thai: "da-tra", da_tra_luc: now.toISOString(), so_tien_nhan: amount }).eq("order_code", orderCode);
  return Response.json({ ok: true });
}
