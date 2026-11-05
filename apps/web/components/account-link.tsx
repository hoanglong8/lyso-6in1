"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth";

export function AccountLink() {
  const { enabled, user } = useAuth();
  if (!enabled) return null;
  return (
    <Link href="/dang-nhap" className="hover:text-son">
      {user ? "Tài khoản" : "Đăng nhập"}
    </Link>
  );
}
