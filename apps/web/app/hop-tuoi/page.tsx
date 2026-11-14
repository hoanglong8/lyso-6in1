import type { Metadata } from "next";
import HopTuoiApp from "@/components/hop-tuoi-app";

export const metadata: Metadata = { title: "Xem hợp tuổi" };

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Xem hợp tuổi</h1>
        <p className="mt-1 text-sm text-stone-600">So hai người theo năm sinh, ngày sinh và cung phi. Tính trên trình duyệt, không gửi dữ liệu đi.</p>
      </div>
      <HopTuoiApp />
    </div>
  );
}
