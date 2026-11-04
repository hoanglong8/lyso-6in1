import type { Metadata } from "next";
import LichTool from "@/components/lich-tool";

export const metadata: Metadata = { title: "Lịch & tứ trụ" };

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Lõi lịch Việt Nam &amp; tứ trụ</h1>
        <p className="mt-1 text-sm text-stone-600">
          Nhập ngày giờ, nơi sinh để xem ngày âm, can chi, tiết khí và cách quy đổi giờ. Đây là đầu vào chung của cả 6 môn.
        </p>
      </div>
      <LichTool />
    </div>
  );
}
