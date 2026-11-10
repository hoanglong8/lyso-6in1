import { bangGia, payosEnv, taoLink } from "@/lib/thanh-toan/payos";
import { getServerSupabase } from "@/lib/supabase/server";
import { getAdminSupabase } from "@/lib/supabase/admin";

export const runtime = "nodejs";
const json = (status: number, error: string) => Response.json({ error }, { status });

/** Tạo đơn hàng + link payOS cho người đã đăng nhập. Tắt khi chưa bật giai đoạn 2 hoặc thiếu khóa. */
export async function POST(req: Request) {
  const env = payosEnv();
  const admin = getAdminSupabase();
  if (!env || !admin) return json(404, "Thanh toán chưa mở.");
  const sb = await getServerSupabase();
  const user = sb ? (await sb.auth.getUser()).data.user : null;
  if (!user) return json(401, "Cần đăng nhập để mua gói.");
  const { thang } = (await req.json().catch(() => ({}))) as { thang?: number };
  const goi = bangGia().find((g) => g.thang === thang);
  if (!goi) return json(400, "Gói không hợp lệ.");
  // orderCode: số nguyên dương, duy nhất (giây hiện tại * 1000 + ngẫu nhiên)
  const orderCode = Math.floor(Date.now() / 1000) * 1000 + Math.floor(Math.random() * 1000);
  const origin = new URL(req.url).origin;
  const { error } = await admin.from("don_hang").insert({ order_code: orderCode, user_id: user.id, so_thang: goi.thang, so_tien: goi.gia, trang_thai: "cho" });
  if (error) return json(500, "Không tạo được đơn hàng.");
  try {
    const link = await taoLink(env, {
      orderCode,
      amount: goi.gia,
      description: `LYSO ${goi.thang}T`, // tối đa 9 ký tự khi tài khoản chưa liên kết qua payOS
      returnUrl: `${origin}/nang-cap?ket-qua=ok`,
      cancelUrl: `${origin}/nang-cap?ket-qua=huy`,
    });
    await admin.from("don_hang").update({ payos_link_id: link.paymentLinkId }).eq("order_code", orderCode);
    return Response.json({ checkoutUrl: link.checkoutUrl });
  } catch (e) {
    await admin.from("don_hang").update({ trang_thai: "loi" }).eq("order_code", orderCode);
    return json(502, e instanceof Error ? e.message : "Lỗi cổng thanh toán.");
  }
}
