import { notFound } from "next/navigation";
import { GIAI_DOAN_2 } from "@/lib/phase";
import { bangGia, payosEnv } from "@/lib/thanh-toan/payos";
import { NangCapButtons } from "./buttons";

export const dynamic = "force-dynamic";
export const metadata = { title: "Gói Nâng cao · Lý số 6 in 1" };

export default async function NangCapPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  if (!GIAI_DOAN_2 || !payosEnv()) notFound();
  const sp = await searchParams;
  const goi = bangGia();
  return (
    <div className="mx-auto max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">Gói Nâng cao</h1>
      {sp["ket-qua"] === "ok" && <p className="rounded-lg bg-emerald-50 px-4 py-2 text-sm text-emerald-900">Đã nhận thanh toán. Gói được kích hoạt khi cổng thanh toán xác nhận (thường trong vài giây).</p>}
      {sp["ket-qua"] === "huy" && <p className="rounded-lg bg-amber-50 px-4 py-2 text-sm text-amber-900">Đã hủy thanh toán.</p>}
      <p className="text-sm text-stone-700">Luận giải AI nâng cao (Sonnet 5.5), tối đa 30 lượt mỗi ngày. Thanh toán qua payOS (chuyển khoản/QR ngân hàng). App không lưu thông tin tài khoản ngân hàng của bạn.</p>
      {goi.length ? <NangCapButtons goi={goi} /> : <p className="text-sm text-stone-500">Chưa cấu hình giá.</p>}
    </div>
  );
}
