import type { Metadata } from "next";
import LaSoApp from "@/components/la-so-app";

export const metadata: Metadata = { title: "Lá số của tôi" };

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Lá số của tôi</h1>
        <p className="mt-1 text-sm text-stone-600">Tử vi và Bát tự từ cùng một hồ sơ, tính theo âm lịch Việt Nam. Mọi phép tính chạy trên trình duyệt.</p>
      </div>
      <LaSoApp />
    </div>
  );
}
