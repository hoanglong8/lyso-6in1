"use client";

import { useEffect } from "react";

/** Đăng ký service worker (chỉ bản production) để cài app lên màn hình chính và dùng khi mất mạng */
export function SwRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").catch(() => undefined);
  }, []);
  return null;
}
