import type { Metadata } from "next";
import ChiemApp from "@/components/chiem-app";

export const metadata: Metadata = { title: "Gieo quẻ · Kinh dịch & Đại Lục Nhâm" };

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Hỏi một việc</h1>
        <p className="mt-1 text-sm text-stone-600">
          Lập quẻ theo thời điểm hỏi. Mặc định lấy giờ hiện tại; có thể đặt giờ khác để xem lại một quẻ cũ.
        </p>
      </div>
      <ChiemApp />
    </div>
  );
}
