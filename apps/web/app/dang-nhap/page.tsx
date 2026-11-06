import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LoginForm from "@/components/login-form";
import { GIAI_DOAN_2 } from "@/lib/phase";

export const metadata: Metadata = { title: "Đăng nhập" };

export default function Page() {
  if (!GIAI_DOAN_2) notFound();
  return (
    <div className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">Đăng nhập</h1>
      <LoginForm />
    </div>
  );
}
