/**
 * Đại Lục Nhâm (大六壬).
 *
 * Thiên bàn: đặt Nguyệt tướng lên chi giờ xem trên địa bàn, xoay theo.
 * Tứ khóa: từ can ngày (qua ký cung) và chi ngày.
 * Tam truyền: Cửu tông môn — Tặc khắc, Tỷ dụng, Thiệp hại, Dao khắc, Mão tinh, Biệt trách, Bát chuyên,
 * Phục ngâm, Phản ngâm.
 * Thiên tướng: 12 tướng, khởi Quý nhân theo can ngày và ngày/đêm.
 *
 * Tam truyền chỉ phụ thuộc can chi ngày và độ lệch (Nguyệt tướng − chi giờ) → 60 × 12 = 720 khóa.
 * Đối chiếu toàn bộ 720 khóa với bảng tra liuren-ts-lib (chép từ sách) trong test.
 */
import { CAN, CHI, ganzhi, type CalendarSnapshot, type GanZhi } from "@lyso/calendar-vn";

export const ENGINE_VERSION = "engine-lucnham@0.1.0";

const mod = (a: number, n: number) => ((a % n) + n) % n;

/** Ngũ hành: 0 Mộc, 1 Hỏa, 2 Thổ, 3 Kim, 4 Thủy */
export const NGU_HANH = ["Mộc", "Hỏa", "Thổ", "Kim", "Thủy"] as const;
const CHI_EL = [4, 2, 0, 0, 2, 1, 1, 2, 3, 3, 2, 4];
const canEl = (c: number) => Math.floor(c / 2);
/** a khắc b */
const khac = (a: number, b: number) => mod(b - a, 5) === 2;

/** Ký cung của 10 can */
export const KY_CUNG = [2, 4, 5, 7, 5, 7, 8, 10, 11, 1];
const HINH = [3, 10, 5, 0, 4, 8, 6, 1, 2, 9, 7, 11];
const XUNG = (z: number) => mod(z + 6, 12);
const MANH = new Set([2, 5, 8, 11]);
const TRONG = new Set([0, 3, 6, 9]);
/** Dịch mã theo chi */
const DICH_MA = (z: number) => [2, 11, 8, 5][z % 4] as number;

export const THIEN_TUONG = [
  "Quý Nhân",
  "Đằng Xà",
  "Chu Tước",
  "Lục Hợp",
  "Câu Trần",
  "Thanh Long",
  "Thiên Không",
  "Bạch Hổ",
  "Thái Thường",
  "Huyền Vũ",
  "Thái Âm",
  "Thiên Hậu",
] as const;

export interface LucNhamConfig {
  /**
   * Thiệp hại khi nhiều khóa cùng khắc và tỷ dụng không phân được:
   *  - "manh-trong-quy": lấy thần ngồi trên Mạnh (Dần Thân Tỵ Hợi), rồi Trọng (Tý Ngọ Mão Dậu) —
   *    cách bảng 720 khóa trong sách dùng (khớp 717/720)
   *  - "sau-can": đếm số lần bị khắc từ chỗ ngồi về nhà (tính cả can ký), sâu hơn làm dụng;
   *    ngang nhau mới xét Mạnh/Trọng — theo lý thuyết "涉害深者为用"
   */
  thiepHai: "sau-can" | "manh-trong-quy";
  /** Bảng Quý nhân: "giap-mau-canh-suu-mui" (Lục Nhâm Đại Toàn) | "giap-mui" (Giáp trú Mùi) */
  quyNhan: "giap-mau-canh-suu-mui" | "giap-mui";
}

export const DEFAULT_LUCNHAM_CONFIG: LucNhamConfig = { thiepHai: "manh-trong-quy", quyNhan: "giap-mau-canh-suu-mui" };

/** Quý nhân [trú, dạ] theo can */
const QUY_NHAN: Record<LucNhamConfig["quyNhan"], [number, number][]> = {
  "giap-mau-canh-suu-mui": [[1, 7], [0, 8], [11, 9], [11, 9], [1, 7], [0, 8], [1, 7], [6, 2], [5, 3], [5, 3]],
  "giap-mui": [[7, 1], [8, 0], [9, 11], [11, 9], [1, 7], [0, 8], [1, 7], [2, 6], [3, 5], [5, 3]],
};

export interface Khoa {
  /** Thần trên (chi thiên bàn) */
  top: number;
  /** Dưới: can (kind "can") hoặc chi */
  bottom: { kind: "can" | "chi"; value: number };
  /** "khắc": thượng khắc hạ; "tặc": hạ tặc thượng */
  relation: "khắc" | "tặc" | null;
}

export type Method =
  | "Nguyên thủ"
  | "Trọng thẩm"
  | "Tỷ dụng"
  | "Thiệp hại"
  | "Dao khắc"
  | "Mão tinh"
  | "Biệt trách"
  | "Bát chuyên"
  | "Phục ngâm"
  | "Phản ngâm";

export interface TamTruyen {
  method: Method;
  chi: [number, number, number];
  /** Ghi chú cách lấy, cho người đọc kiểm tra */
  note: string;
}

const bottomEl = (b: Khoa["bottom"]) => (b.kind === "can" ? canEl(b.value) : (CHI_EL[b.value] as number));
const bottomYang = (b: Khoa["bottom"]) => b.value % 2 === 0;

/** Tứ khóa cho ngày `day`, thiên bàn `up` (up[đất] = trời) */
export function tuKhoa(day: GanZhi, up: (z: number) => number): Khoa[] {
  const mk = (top: number, bottom: Khoa["bottom"]): Khoa => {
    const t = CHI_EL[top] as number;
    const b = bottomEl(bottom);
    return { top, bottom, relation: khac(t, b) ? "khắc" : khac(b, t) ? "tặc" : null };
  };
  const k1 = mk(up(KY_CUNG[day.can] as number), { kind: "can", value: day.can });
  const k2 = mk(up(k1.top), { kind: "chi", value: k1.top });
  const k3 = mk(up(day.chi), { kind: "chi", value: day.chi });
  const k4 = mk(up(k3.top), { kind: "chi", value: k3.top });
  return [k1, k2, k3, k4];
}

/** Số lần thần `t` bị khắc trên đường từ chỗ ngồi về nhà (tính cả chỗ ngồi và can ký ở mỗi cung). */
function doSau(t: number, seat: number): number {
  const te = CHI_EL[t] as number;
  let n = 0;
  for (let p = seat; p !== t; p = mod(p + 1, 12)) {
    if (khac(CHI_EL[p] as number, te)) n++;
    for (let c = 0; c < 10; c++) if (KY_CUNG[c] === p && khac(canEl(c), te)) n++;
  }
  return n;
}

function next2(up: (z: number) => number, so: number): [number, number, number] {
  const trung = up(so);
  return [so, trung, up(trung)];
}

export function tamTruyen(day: GanZhi, offset: number, config: LucNhamConfig = DEFAULT_LUCNHAM_CONFIG): TamTruyen {
  const up = (z: number) => mod(z + offset, 12);
  const down = (z: number) => mod(z - offset, 12);
  const khoa = tuKhoa(day, up);
  const dayYang = day.can % 2 === 0;
  const canTop = khoa[0]!.top;
  const chiTop = khoa[2]!.top;

  // Số khóa phân biệt (theo cặp trên-dưới)
  const sig = (k: Khoa) => `${k.top}/${k.bottom.kind === "can" ? KY_CUNG[k.bottom.value] : k.bottom.value}`;
  const distinct = new Set(khoa.map(sig)).size;
  // Khóa trùng (so can theo ký cung) chỉ tính một lần
  // Khóa trùng gộp làm một, giữ quan hệ khắc đầu tiên tìm thấy trong nhóm trùng
  const live = khoa
    .filter((k, i) => khoa.findIndex((x) => sig(x) === sig(k)) === i)
    .map((k) => ({ ...k, relation: khoa.find((x) => sig(x) === sig(k) && x.relation)?.relation ?? null }));
  const idxOf = (k: Khoa) => khoa.findIndex((x) => sig(x) === sig(k));
  const batChuyen = KY_CUNG[day.can] === day.chi;

  /** Chọn một thần từ danh sách ứng viên khắc: tỷ dụng, rồi thiệp hại. */
  const pick = (cands: Khoa[]): { top: number; method: "single" | "Tỷ dụng" | "Thiệp hại"; note: string } => {
    const uniq = [...new Map(cands.map((k) => [k.top, k])).values()];
    if (uniq.length === 1) return { top: uniq[0]!.top, method: "single", note: "" };
    const same = uniq.filter((k) => k.top % 2 === (dayYang ? 0 : 1));
    if (same.length === 1) return { top: same[0]!.top, method: "Tỷ dụng", note: `Nhiều khóa khắc, chọn thần cùng âm dương với can ngày` };
    const pool = same.length ? same : uniq;
    const seatOf = (k: Khoa) => down(k.top);
    let best = pool;
    let note = "";
    if (config.thiepHai === "sau-can") {
      const depth = pool.map((k) => doSau(k.top, seatOf(k)));
      const max = Math.max(...depth);
      best = pool.filter((_, i) => depth[i] === max);
      note = `Thiệp hại: độ sâu ${pool.map((k, i) => `${CHI[k.top]} ${depth[i]}`).join(", ")}`;
    }
    if (best.length > 1) {
      const m = best.filter((k) => MANH.has(seatOf(k)));
      const t = best.filter((k) => TRONG.has(seatOf(k)));
      if (m.length === 1) best = m;
      else if (m.length === 0 && t.length === 1) best = t;
      else {
        // Ngang nhau nữa: dương ngày lấy phía can (khóa 1, 2), âm ngày lấy phía chi (khóa 3, 4)
        const set = m.length ? m : t.length ? t : best;
        const side = set.find((k) => idxOf(k) < 2 === dayYang) ?? set[0]!;
        best = [side];
      }
      note += `${note ? "; " : "Thiệp hại: "}ngang nhau, lấy thần ngồi trên Mạnh/Trọng`;
    }
    return { top: best[0]!.top, method: "Thiệp hại", note };
  };

  const tac = live.filter((k) => k.relation === "tặc");
  const kh = live.filter((k) => k.relation === "khắc");

  // Phục ngâm
  if (offset === 0) {
    let so: number;
    let note: string;
    if (tac.length || kh.length) {
      so = (tac[0] ?? kh[0])!.top;
      note = "Phục ngâm có khắc: lấy thần khắc làm sơ truyền";
    } else {
      so = dayYang ? canTop : chiTop;
      note = `Phục ngâm không khắc: ngày ${dayYang ? "dương lấy thần trên can" : "âm lấy thần trên chi"}`;
    }
    const isSelf = (z: number) => HINH[z] === z;
    let trung = HINH[so] as number;
    if (isSelf(so)) trung = so === canTop ? chiTop : canTop;
    let mat = HINH[trung] as number;
    if (isSelf(trung) || mat === so) mat = XUNG(trung);
    return { method: "Phục ngâm", chi: [so, trung, mat], note };
  }

  // Phản ngâm không khắc
  if (offset === 6 && !tac.length && !kh.length) {
    return { method: "Phản ngâm", chi: [DICH_MA(day.chi), chiTop, canTop], note: "Phản ngâm không khắc: sơ truyền là Dịch mã của chi ngày" };
  }

  // Tặc khắc
  if (tac.length || kh.length) {
    const cands = tac.length ? tac : kh;
    const p = pick(cands);
    const method: Method =
      offset === 6 ? "Phản ngâm" : p.method === "single" ? (tac.length ? "Trọng thẩm" : "Nguyên thủ") : p.method;
    return { method, chi: next2(up, p.top), note: p.note || (tac.length ? "Hạ tặc thượng" : "Thượng khắc hạ") };
  }

  // Bát chuyên (chỉ còn 2 khóa) và Biệt trách (chỉ còn 3 khóa) — không khắc
  if (batChuyen) {
    const so = dayYang ? mod(canTop + 2, 12) : mod(khoa[3]!.top - 2, 12);
    return {
      method: "Bát chuyên",
      chi: [so, canTop, canTop],
      note: dayYang ? "Ngày dương: từ thần trên can đếm thuận 3" : "Ngày âm: từ thần khóa 4 đếm nghịch 3",
    };
  }

  // Dao khắc: thần khắc can ngày, không có thì can ngày khắc thần
  const tops = [...new Set(khoa.slice(1).map((k) => k.top))];
  const de = canEl(day.can);
  const daoKhacNgay = tops.filter((t) => khac(CHI_EL[t] as number, de));
  const ngayKhacDao = tops.filter((t) => khac(de, CHI_EL[t] as number));
  const dao = daoKhacNgay.length ? daoKhacNgay : ngayKhacDao;
  if (dao.length) {
    let so = dao[0]!;
    if (dao.length > 1) {
      const same = dao.filter((t) => t % 2 === (dayYang ? 0 : 1));
      so = (same[0] ?? dao[0])!;
    }
    return { method: "Dao khắc", chi: next2(up, so), note: daoKhacNgay.length ? "Thần xa khắc can ngày" : "Can ngày khắc thần xa" };
  }

  if (distinct < 4) {
    // Biệt trách
    let so: number;
    if (dayYang) {
      const hop = mod(day.can + 5, 10); // can hợp
      so = up(KY_CUNG[hop] as number);
    } else {
      so = mod(day.chi + 4, 12); // chi đứng sau chi ngày trong tam hợp
    }
    return {
      method: "Biệt trách",
      chi: [so, canTop, canTop],
      note: dayYang ? "Ngày dương: lấy thần trên ký cung của can hợp" : "Ngày âm: lấy chi tam hợp kế tiếp của chi ngày",
    };
  }

  // Mão tinh
  if (dayYang) {
    return { method: "Mão tinh", chi: [up(9), chiTop, canTop], note: "Ngày dương: thần trên Dậu địa bàn" };
  }
  return { method: "Mão tinh", chi: [down(9), canTop, chiTop], note: "Ngày âm: chỗ đất dưới Dậu thiên bàn" };
}

export interface LucNhamChart {
  engineVersion: string;
  config: LucNhamConfig;
  day: GanZhi;
  hourChi: number;
  nguyetTuong: number;
  /** thienBan[đất] = chi trời */
  thienBan: number[];
  /** thienTuong[đất] = tên thiên tướng trên cung đất đó */
  thienTuong: string[];
  quyNhan: { chi: number; truDa: "trú" | "dạ"; thuan: boolean };
  tuKhoa: (Khoa & { tuong: string })[];
  tamTruyen: TamTruyen & {
    items: { chi: number; tuong: string; lucThan: string; tuanKhong: boolean; dunCan: string | null }[];
  };
  tuanKhong: [number, number];
  notes: string[];
}

const LUC_THAN = (dayCan: number, z: number) => {
  const d = canEl(dayCan);
  const e = CHI_EL[z] as number;
  if (d === e) return "Huynh đệ";
  if (mod(d + 1, 5) === e) return "Tử tôn";
  if (mod(e + 1, 5) === d) return "Phụ mẫu";
  if (khac(d, e)) return "Thê tài";
  return "Quan quỷ";
};

export function buildLucNham(input: { day: GanZhi; hourChi: number; nguyetTuong: number }, config: LucNhamConfig = DEFAULT_LUCNHAM_CONFIG): LucNhamChart {
  const { day, hourChi, nguyetTuong } = input;
  const offset = mod(nguyetTuong - hourChi, 12);
  const up = (z: number) => mod(z + offset, 12);
  const thienBan = Array.from({ length: 12 }, (_, z) => up(z));

  // Quý nhân: giờ Mão–Thân là ngày
  const truDa: "trú" | "dạ" = hourChi >= 3 && hourChi <= 8 ? "trú" : "dạ";
  const qn = (QUY_NHAN[config.quyNhan][day.can] as [number, number])[truDa === "trú" ? 0 : 1];
  const qnSeat = mod(qn - offset, 12);
  const thuan = qnSeat >= 11 || qnSeat <= 4; // Hợi → Thìn thuận
  const tuongOfTop: string[] = new Array(12);
  for (let i = 0; i < 12; i++) tuongOfTop[mod(qn + (thuan ? i : -i), 12)] = THIEN_TUONG[i] as string;
  const thienTuong = thienBan.map((t) => tuongOfTop[t] as string);

  const kv = tuanKhongOf(day);
  const tt = tamTruyen(day, offset, config);
  // Độn can: can của tuần ngày
  const tuanStart = day.index60 - (day.index60 % 10);
  const dunCan = (z: number) => {
    if (kv.includes(z)) return null;
    const i = mod(z - (tuanStart % 12), 12);
    return CAN[i] as string;
  };
  return {
    engineVersion: ENGINE_VERSION,
    config,
    day,
    hourChi,
    nguyetTuong,
    thienBan,
    thienTuong,
    quyNhan: { chi: qn, truDa, thuan },
    tuKhoa: tuKhoa(day, up).map((k) => ({ ...k, tuong: tuongOfTop[k.top] as string })),
    tamTruyen: {
      ...tt,
      items: tt.chi.map((z) => ({ chi: z, tuong: tuongOfTop[z] as string, lucThan: LUC_THAN(day.can, z), tuanKhong: kv.includes(z), dunCan: dunCan(z) })),
    },
    tuanKhong: kv,
    notes: [],
  };
}

export function tuanKhongOf(g: GanZhi): [number, number] {
  const s = mod(g.index60 - (g.index60 % 10), 12);
  return [mod(s + 10, 12), mod(s + 11, 12)];
}

export function buildLucNhamFromSnapshot(s: CalendarSnapshot, config: LucNhamConfig = DEFAULT_LUCNHAM_CONFIG): LucNhamChart {
  const c = buildLucNham({ day: s.ganzhi.day, hourChi: s.hour.chi, nguyetTuong: s.nguyetTuong.chi }, config);
  c.notes.push(`Nguyệt tướng ${CHI[s.nguyetTuong.chi]} (đổi tại trung khí), gia lên giờ ${CHI[s.hour.chi]}.`);
  if (s.input.time === null) c.notes.push("Không rõ giờ: thiên bàn đang lấy giờ Ngọ.");
  return c;
}

export function toPromptContext(c: LucNhamChart): string {
  const khoaTxt = c.tuKhoa
    .map((k, i) => `Khóa ${i + 1}: ${CHI[k.top]} (${k.tuong}) trên ${k.bottom.kind === "can" ? CAN[k.bottom.value] : CHI[k.bottom.value]}${k.relation ? ` — ${k.relation}` : ""}`)
    .join("; ");
  return [
    `Đại Lục Nhâm (${c.engineVersion}). Ngày ${c.day.name}, giờ ${CHI[c.hourChi]}, nguyệt tướng ${CHI[c.nguyetTuong]}. Quý nhân ${c.quyNhan.truDa} tại ${CHI[c.quyNhan.chi]}, ${c.quyNhan.thuan ? "thuận" : "nghịch"} hành. Tuần không ${c.tuanKhong.map((z) => CHI[z]).join(" ")}.`,
    `Thiên bàn: ${c.thienBan.map((t, z) => `${CHI[z]}←${CHI[t]}(${c.thienTuong[z]})`).join(", ")}.`,
    khoaTxt + ".",
    `Tam truyền (${c.tamTruyen.method}): ${c.tamTruyen.items
      .map((x, i) => `${["Sơ", "Trung", "Mạt"][i]} ${x.dunCan ?? "—"} ${CHI[x.chi]} ${x.tuong}, ${x.lucThan}${x.tuanKhong ? ", không vong" : ""}`)
      .join("; ")}. ${c.tamTruyen.note}`,
  ].join("\n");
}

export { ganzhi };
