import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { AuthProvider } from "@/lib/auth";
import { AccountLink } from "@/components/account-link";

export const metadata: Metadata = {
  title: { default: "Lý số 6 in 1", template: "%s · Lý số 6 in 1" },
  description:
    "Tử vi, Bát tự, Kỳ môn độn giáp, Đại Lục Nhâm, Thái ất, Kinh dịch — tính theo âm lịch Việt Nam (UTC+7), có ghi rõ trường phái.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#9f1d20" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="min-h-dvh antialiased">
        <AuthProvider>
        <header className="border-b border-stone-200 bg-white/70 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold tracking-tight">
              <span className="text-son">Lý số</span> 6 in 1
            </Link>
            <div className="flex gap-4 text-sm">
              <Link href="/la-so" className="hover:text-son">Lá số</Link>
              <Link href="/chiem" className="hover:text-son">Gieo quẻ</Link>
              <Link href="/lich" className="hover:text-son">Lịch</Link>
              <a href="https://github.com/hoanglong8/lyso-6in1" className="hover:text-son">GitHub</a>
              <AccountLink />
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 pb-10 text-xs leading-relaxed text-stone-500">
          Nội dung mang tính văn hóa, nghiên cứu và tham khảo; không phải lời khẳng định về tương lai và không thay thế tư vấn y tế,
          pháp lý hay tài chính. Ở chế độ khách, mọi phép tính chạy trên trình duyệt của bạn và không được gửi đi.
          {" "}
          <a href="/quyen-rieng-tu" className="underline">
            Quyền riêng tư
          </a>
          .
        </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
