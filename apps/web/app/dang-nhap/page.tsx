import type { Metadata } from "next";
import LoginForm from "@/components/login-form";

export const metadata: Metadata = { title: "Đăng nhập" };

export default function Page() {
  return (
    <div className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">Đăng nhập</h1>
      <LoginForm />
    </div>
  );
}
