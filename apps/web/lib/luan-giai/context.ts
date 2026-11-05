/**
 * Dựng lại lá số ở máy chủ từ tham số đầu vào rồi xuất văn bản cho AI (toPromptContext của từng engine).
 * Trình duyệt không gửi văn bản lá số — tránh việc sửa dữ liệu hay chèn chỉ dẫn vào prompt.
 */
import { buildSnapshot, type CalendarConfig, type CalendarInput } from "@lyso/calendar-vn";
import { buildBazi, toPromptContext as baziText } from "@lyso/engine-bazi";
import { buildTuVi, toPromptContext as tuviText, SCHOOLS, type TuViConfig } from "@lyso/engine-tuvi";
import { interpret, toPromptContext as kinhdichText, type CastInput } from "@lyso/engine-kinhdich";
import { buildLucNhamFromSnapshot, toPromptContext as lucnhamText, type LucNhamConfig } from "@lyso/engine-lucnham";
import { buildKyMonFromSnapshot, toPromptContext as kymonText, type KyMonConfig } from "@lyso/engine-kymon";
import { buildThaiAtFromSnapshot, toPromptContext as thaiatText, type Ke } from "@lyso/engine-thaiat";

export type Mon = "tuvi" | "bazi" | "kinhdich" | "lucnham" | "kymon" | "thaiat";
export type Level = "co-ban" | "nang-cao";
export const MON_LABEL: Record<Mon, string> = {
  tuvi: "Tử vi",
  bazi: "Bát tự",
  kinhdich: "Kinh dịch",
  lucnham: "Đại Lục Nhâm",
  kymon: "Kỳ môn độn giáp",
  thaiat: "Thái ất thần số",
};

export interface LuanGiaiRequest {
  mon: Mon;
  level: Level;
  input: CalendarInput;
  calendarConfig: CalendarConfig;
  gender?: "nam" | "nu";
  tuvi?: TuViConfig;
  viewYear?: number;
  cast?: CastInput;
  lucnham?: LucNhamConfig;
  kymon?: KyMonConfig;
  thaiatKe?: Ke;
  /** Việc cần hỏi (chiêm) hoặc điều muốn tìm hiểu — dữ liệu người dùng, không phải chỉ dẫn */
  question?: string;
}

const MONS: Mon[] = ["tuvi", "bazi", "kinhdich", "lucnham", "kymon", "thaiat"];
const int = (v: unknown, lo: number, hi: number) => typeof v === "number" && Number.isInteger(v) && v >= lo && v <= hi;

/** Kiểm tra hình dạng tối thiểu; trả thông báo lỗi tiếng Việt hoặc null */
export function validate(r: Partial<LuanGiaiRequest>): string | null {
  if (!r || !MONS.includes(r.mon as Mon)) return "Môn không hợp lệ";
  if (r.level !== "co-ban" && r.level !== "nang-cao") return "Mức luận giải không hợp lệ";
  const d = r.input?.date;
  if (!d || !int(d.y, 1900, 2100) || !int(d.m, 1, 12) || !int(d.d, 1, 31)) return "Ngày không hợp lệ";
  if (r.input?.time && (!int(r.input.time.h, 0, 23) || !int(r.input.time.mi, 0, 59))) return "Giờ không hợp lệ";
  if ((r.mon === "tuvi" || r.mon === "bazi") && r.gender !== "nam" && r.gender !== "nu") return "Thiếu giới tính";
  if (r.mon === "tuvi" && r.tuvi && !SCHOOLS.some((s) => s.id === r.tuvi!.school && s.available)) return "Trường phái không hợp lệ";
  if (r.viewYear !== undefined && !int(r.viewYear, 1900, 2100)) return "Năm xem không hợp lệ";
  if (r.mon === "kinhdich") {
    const v = r.cast?.values;
    if (!Array.isArray(v) || v.length !== 6 || v.some((x) => ![6, 7, 8, 9].includes(x))) return "Quẻ không hợp lệ";
  }
  if (r.question && (typeof r.question !== "string" || r.question.length > 500)) return "Câu hỏi quá dài (tối đa 500 ký tự)";
  return null;
}

export function buildContext(r: LuanGiaiRequest): string {
  const s = buildSnapshot(r.input, r.calendarConfig);
  const year = r.viewYear ?? new Date().getUTCFullYear();
  switch (r.mon) {
    case "tuvi":
      return tuviText(buildTuVi(s, r.gender!, r.tuvi, { viewYear: year }));
    case "bazi":
      return baziText(buildBazi(s, r.gender!, { luuNienYears: [year - 1, year, year + 1] }));
    case "kinhdich": {
      const cast = { method: r.cast!.method, note: String(r.cast!.note ?? "").slice(0, 300), values: r.cast!.values };
      return kinhdichText(interpret(cast, s.ganzhi.day));
    }
    case "lucnham":
      return lucnhamText(buildLucNhamFromSnapshot(s, r.lucnham));
    case "kymon":
      return kymonText(buildKyMonFromSnapshot(s, r.kymon));
    case "thaiat":
      return thaiatText(buildThaiAtFromSnapshot(s, r.thaiatKe ?? "nien"));
  }
}
