"use client";

import { Fragment, useRef, useState } from "react";
import type { Level, LuanGiaiRequest } from "@/lib/luan-giai/context";
import { useAuth } from "@/lib/auth";

/** Markdown tối giản: ##, ###, gạch đầu dòng, **đậm**, *nghiêng*, > trích. Không chèn HTML thô. */
function inline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? <b key={i}>{p.slice(2, -2)}</b> : p.startsWith("*") && p.endsWith("*") && p.length > 2 ? <i key={i}>{p.slice(1, -1)}</i> : <Fragment key={i}>{p}</Fragment>,
  );
}

function Markdown({ text }: { text: string }) {
  const lines = text.split("\n");
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (list.length) out.push(<ul key={`ul${out.length}`} className="list-disc space-y-1 pl-5">{list.map((l, i) => <li key={i}>{inline(l)}</li>)}</ul>);
    list = [];
  };
  lines.forEach((raw, i) => {
    const l = raw.trimEnd();
    if (/^\s*[-*]\s+/.test(l)) return list.push(l.replace(/^\s*[-*]\s+/, ""));
    flush();
    if (l.startsWith("### ")) out.push(<h4 key={i} className="pt-2 font-semibold">{inline(l.slice(4))}</h4>);
    else if (l.startsWith("## ")) out.push(<h3 key={i} className="pt-3 text-base font-semibold text-son">{inline(l.slice(3))}</h3>);
    else if (l.startsWith("# ")) out.push(<h3 key={i} className="pt-3 text-base font-semibold">{inline(l.slice(2))}</h3>);
    else if (l.startsWith("> ")) out.push(<p key={i} className="border-l-2 border-stone-300 pl-3 text-stone-600">{inline(l.slice(2))}</p>);
    else if (l.trim()) out.push(<p key={i}>{inline(l)}</p>);
  });
  flush();
  return <div className="space-y-2">{out}</div>;
}

export function LuanGiaiPanel({ request, withQuestion = false }: { request: Omit<LuanGiaiRequest, "level" | "question"> | null; withQuestion?: boolean }) {
  const { user, plan, enabled } = useAuth();
  const [question, setQuestion] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState<Level | null>(null);
  const abort = useRef<AbortController | null>(null);

  const run = async (level: Level) => {
    if (!request) return;
    abort.current?.abort();
    const ac = new AbortController();
    abort.current = ac;
    setText("");
    setError(null);
    setBusy(level);
    try {
      const res = await fetch("/api/luan-giai", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...request, level, question: withQuestion ? question : undefined }),
        signal: ac.signal,
      });
      if (!res.ok || !res.body) {
        const j = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(j?.error ?? `Lỗi ${res.status}`);
        return;
      }
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += dec.decode(value, { stream: true });
        setText(acc);
      }
    } catch (e) {
      if ((e as Error).name !== "AbortError") setError(String(e));
    } finally {
      setBusy(null);
    }
  };

  const advancedOk = Boolean(user) && plan === "nang-cao";
  return (
    <section className="space-y-3 rounded-xl border border-stone-200 bg-white p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-semibold">Luận giải bằng AI</h2>
        <span className="text-xs text-stone-500">Dựa trên đúng dữ liệu lá số ở trên · tham khảo</span>
      </div>
      {withQuestion && (
        <textarea
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
          rows={2}
          maxLength={500}
          placeholder="Việc cần hỏi (nên nêu cụ thể: ai, việc gì, trong khoảng thời gian nào)"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      )}
      <div className="flex flex-wrap gap-2 text-sm">
        <button type="button" disabled={!request || !!busy} onClick={() => run("co-ban")} className="rounded-lg bg-son px-4 py-2 font-medium text-white disabled:opacity-40">
          {busy === "co-ban" ? "Đang luận…" : "Luận cơ bản (miễn phí)"}
        </button>
        <button
          type="button"
          disabled={!request || !!busy || !advancedOk}
          onClick={() => run("nang-cao")}
          className="rounded-lg border border-son px-4 py-2 font-medium text-son disabled:opacity-40"
          title={advancedOk ? "" : "Cần đăng nhập và gói Nâng cao"}
        >
          {busy === "nang-cao" ? "Đang luận…" : "Luận nâng cao"}
        </button>
        {busy && (
          <button type="button" className="text-xs text-stone-500 underline" onClick={() => abort.current?.abort()}>
            Dừng
          </button>
        )}
      </div>
      {!advancedOk && (
        <p className="text-xs text-stone-500">
          Luận nâng cao (phân tích sâu từng lớp, đối chiếu các phái, kế hoạch theo thời gian) dành cho gói Nâng cao
          {enabled && !user ? " — hãy đăng nhập trước" : ""}.
        </p>
      )}
      {error && <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">{error}</p>}
      {text && (
        <div className="text-sm leading-relaxed text-stone-800">
          <Markdown text={text} />
        </div>
      )}
    </section>
  );
}
