import type { Metadata } from "next";
import ChonNgayApp from "@/components/chon-ngay-app";

export const metadata: Metadata = { title: "Chọn ngày tốt" };

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Chọn ngày tốt</h1>
        <p className="mt-1 text-sm text-stone-600">Xem trực, ngày giờ hoàng đạo và ngày xung tuổi cho một khoảng thời gian.</p>
      </div>
      <ChonNgayApp />
    </div>
  );
}
