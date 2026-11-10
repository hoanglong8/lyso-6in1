/**
 * Cổng thanh toán payOS (giai đoạn 2, đang tắt).
 * Tài liệu: https://payos.vn/docs/api/ — tạo link: POST /v2/payment-requests, chữ ký HMAC-SHA256 bằng checksum key trên chuỗi
 * "amount=…&cancelUrl=…&description=…&orderCode=…&returnUrl=…"; webhook: sắp key của `data` theo alphabet, nối "k=v&…",
 * null/undefined thành chuỗi rỗng, mảng/đối tượng thành JSON, rồi so HMAC với `signature`.
 */
import { createHmac, timingSafeEqual } from "node:crypto";
import { GIAI_DOAN_2 } from "../phase";

const API = "https://api-merchant.payos.vn";

export interface PayosEnv { clientId: string; apiKey: string; checksumKey: string }

export function payosEnv(): PayosEnv | null {
  const clientId = process.env.PAYOS_CLIENT_ID ?? "";
  const apiKey = process.env.PAYOS_API_KEY ?? "";
  const checksumKey = process.env.PAYOS_CHECKSUM_KEY ?? "";
  return GIAI_DOAN_2 && clientId && apiKey && checksumKey ? { clientId, apiKey, checksumKey } : null;
}

export const hmac = (data: string, key: string) => createHmac("sha256", key).update(data).digest("hex");

export function chuKyTaoLink(o: { amount: number; cancelUrl: string; description: string; orderCode: number; returnUrl: string }, key: string) {
  return hmac(`amount=${o.amount}&cancelUrl=${o.cancelUrl}&description=${o.description}&orderCode=${o.orderCode}&returnUrl=${o.returnUrl}`, key);
}

export function chuoiWebhook(data: Record<string, unknown>): string {
  return Object.keys(data)
    .sort()
    .map((k) => {
      const v = data[k];
      const s = v === null || v === undefined || v === "undefined" || v === "null" ? "" : typeof v === "object" ? JSON.stringify(v) : String(v);
      return `${k}=${s}`;
    })
    .join("&");
}

export function kiemChuKyWebhook(data: Record<string, unknown>, signature: string, key: string): boolean {
  const a = Buffer.from(hmac(chuoiWebhook(data), key), "hex");
  const b = Buffer.from(signature ?? "", "hex");
  return a.length === b.length && a.length > 0 && timingSafeEqual(a, b);
}

export interface LinkThanhToan { checkoutUrl: string; paymentLinkId: string; orderCode: number }

export async function taoLink(env: PayosEnv, o: { orderCode: number; amount: number; description: string; returnUrl: string; cancelUrl: string; buyerEmail?: string }): Promise<LinkThanhToan> {
  const body = { ...o, signature: chuKyTaoLink(o, env.checksumKey) };
  const r = await fetch(`${API}/v2/payment-requests`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-client-id": env.clientId, "x-api-key": env.apiKey },
    body: JSON.stringify(body),
  });
  const j = (await r.json()) as { code?: string; desc?: string; data?: { checkoutUrl: string; paymentLinkId: string; orderCode: number } };
  if (j.code !== "00" || !j.data) throw new Error(`payOS: ${j.desc ?? r.status}`);
  return j.data;
}

/** Gói bán: giá đọc từ biến môi trường (VND), không đặt sẵn — chủ dự án quyết giá */
export function bangGia(): { thang: number; gia: number; ten: string }[] {
  const out: { thang: number; gia: number; ten: string }[] = [];
  const g1 = Number(process.env.GIA_NANG_CAO_1_THANG ?? 0);
  const g12 = Number(process.env.GIA_NANG_CAO_12_THANG ?? 0);
  if (g1 > 0) out.push({ thang: 1, gia: g1, ten: "Nâng cao 1 tháng" });
  if (g12 > 0) out.push({ thang: 12, gia: g12, ten: "Nâng cao 12 tháng" });
  return out;
}
