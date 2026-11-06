"use client";

import { useState } from "react";
import { useAuth, signOut } from "@/lib/auth";
import { getBrowserSupabase } from "@/lib/supabase/client";
import { CONSENT_VERSION } from "@/lib/supabase/config";

const field = "w-full rounded-lg border border-stone-300 bg-white px-3 py-2";

export default function LoginForm() {
  const { enabled, user, plan, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [agree, setAgree] = useState(false);
  const [step, setStep] = useState<"email" | "code">("email");
  const [msg, setMsg] = useState<string | null>(null);
  const sb = getBrowserSupabase();

  if (!enabled)
    return (
      <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        Máy chủ chưa bật tài khoản. Bạn vẫn dùng được mọi tính năng lập lá số; hồ sơ lưu trong trình duyệt.
      </p>
    );
  if (loading) return <p className="text-sm text-stone-500">Đang kiểm tra phiên đăng nhập…</p>;
  if (user)
    return (
      <div className="space-y-3 rounded-xl border border-stone-200 bg-white p-5 text-sm">
        <p>
          Đang đăng nhập: <b>{user.email}</b> · gói <b>{plan === "nang-cao" ? "Nâng cao" : "Cơ bản (miễn phí)"}</b>
        </p>
        <button type="button" className="rounded-lg border border-stone-300 px-4 py-2" onClick={() => signOut()}>
          Đăng xuất
        </button>
      </div>
    );

  const send = async () => {
    if (!sb) return;
    setMsg(null);
    const { error } = await sb.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${location.origin}/auth/callback`, data: { consent_version: CONSENT_VERSION } },
    });
    if (error) setMsg(error.message);
    else {
      setStep("code");
      setMsg("Đã gửi email. Bấm liên kết trong email, hoặc nhập mã 6 số ở đây.");
    }
  };
  const verify = async () => {
    if (!sb) return;
    const { error } = await sb.auth.verifyOtp({ email, token: code.trim(), type: "email" });
    setMsg(error ? error.message : null);
  };

  return (
    <div className="space-y-3 rounded-xl border border-stone-200 bg-white p-5 text-sm">
      <p className="text-stone-600">Không cần mật khẩu: nhập email, chúng tôi gửi mã đăng nhập.</p>
      <input type="email" className={field} placeholder="ban@vi-du.vn" value={email} onChange={(e) => setEmail(e.target.value)} disabled={step === "code"} />
      {step === "email" ? (
        <>
          <label className="flex items-start gap-2 text-xs text-stone-600">
            <input type="checkbox" className="mt-0.5" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <span>
              Tôi đồng ý cho lưu email và các hồ sơ lá số tôi chủ động lưu, để dùng trên nhiều thiết bị, theo{" "}
              <a href="/quyen-rieng-tu" className="underline" target="_blank">
                chính sách quyền riêng tư
              </a>
              . Tôi có thể xóa bất cứ lúc nào.
            </span>
          </label>
          <button type="button" disabled={!agree || !email.includes("@")} className="w-full rounded-lg bg-son px-4 py-2 font-medium text-white disabled:opacity-40" onClick={send}>
            Gửi mã đăng nhập
          </button>
        </>
      ) : (
        <>
          <input inputMode="numeric" className={field} placeholder="Mã 6 số" value={code} onChange={(e) => setCode(e.target.value)} />
          <button type="button" className="w-full rounded-lg bg-son px-4 py-2 font-medium text-white" onClick={verify}>
            Xác nhận
          </button>
        </>
      )}
      {msg && <p className="text-xs text-stone-600">{msg}</p>}
    </div>
  );
}
