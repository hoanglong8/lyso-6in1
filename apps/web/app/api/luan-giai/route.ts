import Anthropic from "@anthropic-ai/sdk";
import { buildContext, validate, type LuanGiaiRequest } from "@/lib/luan-giai/context";
import { MAX_TOKENS, MODEL, SYSTEM_CORE, userPrompt } from "@/lib/luan-giai/prompts";
import { checkQuota } from "@/lib/luan-giai/quota";
import { getServerSupabase } from "@/lib/supabase/server";
import { GIAI_DOAN_2 } from "@/lib/phase";

export const runtime = "nodejs";
export const maxDuration = 60;

const json = (status: number, error: string) => Response.json({ error }, { status });

export async function POST(req: Request) {
  // Giai đoạn 1: không nhận dữ liệu lá số lên máy chủ
  if (!GIAI_DOAN_2) return json(404, "Tính năng AI luận giải chưa mở.");
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return json(503, "Máy chủ chưa cấu hình AI (thiếu ANTHROPIC_API_KEY).");

  let body: LuanGiaiRequest;
  try {
    body = (await req.json()) as LuanGiaiRequest;
  } catch {
    return json(400, "Dữ liệu gửi lên không đọc được.");
  }
  const bad = validate(body);
  if (bad) return json(400, bad);

  let context: string;
  try {
    context = buildContext(body);
  } catch (e) {
    return json(400, `Không dựng được lá số: ${e instanceof Error ? e.message : String(e)}`);
  }

  const sb = await getServerSupabase();
  const user = sb ? (await sb.auth.getUser()).data.user : null;
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const q = await checkQuota(body.level, ip, sb, user);
  if (!q.ok) return json(429, q.reason ?? "Hết lượt.");

  const model = MODEL[body.level];
  const client = new Anthropic({ apiKey: key });
  const enc = new TextEncoder();
  let inTok = 0;
  let outTok = 0;

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const events = await client.messages.create({
          model,
          max_tokens: MAX_TOKENS[body.level],
          system: [{ type: "text", text: SYSTEM_CORE, cache_control: { type: "ephemeral" } }],
          messages: [{ role: "user", content: userPrompt(body.mon, body.level, context, body.question) }],
          stream: true,
        });
        for await (const ev of events) {
          if (ev.type === "message_start") inTok = ev.message.usage.input_tokens;
          else if (ev.type === "content_block_delta" && ev.delta.type === "text_delta") controller.enqueue(enc.encode(ev.delta.text));
          else if (ev.type === "message_delta") outTok = ev.usage.output_tokens;
        }
      } catch (e) {
        controller.enqueue(enc.encode(`\n\n> Lỗi khi gọi AI: ${e instanceof Error ? e.message : String(e)}`));
      } finally {
        controller.close();
        if (sb && user) await sb.from("ai_usage").insert({ mon: body.mon, level: body.level, model, input_tokens: inTok, output_tokens: outTok });
      }
    },
  });

  return new Response(stream, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
      "x-quota-remaining": String(q.remaining ?? ""),
    },
  });
}
