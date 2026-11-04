/**
 * Múi giờ lịch sử của Việt Nam.
 *
 * Nguồn: IANA tzdata, vùng Asia/Ho_Chi_Minh (bản có bản vá 1/2024 của Đoàn Trần Công Danh
 * về mốc 1955) — dữ liệu này viết cho MIỀN NAM. Miền Bắc sau 1954 không có vùng riêng
 * trong tzdata; tài liệu còn chưa thống nhất (có nguồn ghi miền Bắc chuyển từ UTC+8
 * về UTC+7 ngày 8/8/1967, có nguồn ghi UTC+7 từ 1955). Ta dùng UTC+7 cho miền Bắc
 * từ 1/7/1955 và gắn cờ `uncertain` cho giai đoạn 1945–1968 để giao diện hỏi lại.
 */

export type VnRegion = "bac" | "nam";

interface Segment {
  /** Thời điểm bắt đầu (UTC, ms); -Infinity cho đoạn đầu */
  from: number;
  offset: number; // phút so với UTC
  label: string;
}

const utc = (iso: string) => Date.parse(iso);

const SOUTH: Segment[] = [
  { from: -Infinity, offset: 426.5, label: "Giờ trung bình Phù Liễn/Sài Gòn (UTC+7:06:30)" },
  { from: utc("1911-04-30T16:53:30Z"), offset: 420, label: "UTC+7 (Đông Dương)" },
  { from: utc("1942-12-31T16:00:00Z"), offset: 480, label: "UTC+8 (thời Pháp – Nhật)" },
  { from: utc("1945-03-14T15:00:00Z"), offset: 540, label: "UTC+9 (Nhật chiếm đóng)" },
  { from: utc("1945-09-01T15:00:00Z"), offset: 420, label: "UTC+7" },
  { from: utc("1947-03-31T17:00:00Z"), offset: 480, label: "UTC+8 (Pháp quay lại)" },
  { from: utc("1955-06-30T17:00:00Z"), offset: 420, label: "UTC+7" },
  { from: utc("1959-12-31T16:00:00Z"), offset: 480, label: "UTC+8 (Việt Nam Cộng hòa)" },
  { from: utc("1975-06-12T16:00:00Z"), offset: 420, label: "UTC+7 (thống nhất giờ ngày 13/6/1975)" },
];

const NORTH: Segment[] = [
  ...SOUTH.slice(0, 7),
  // từ 1/7/1955 miền Bắc giữ UTC+7, không theo mốc UTC+8 năm 1960 của miền Nam
];

const UNCERTAIN_NORTH_FROM = utc("1945-09-01T15:00:00Z");
const UNCERTAIN_NORTH_TO = utc("1968-01-01T00:00:00Z");

/** Vĩ tuyến 17 (sông Bến Hải): ranh giới hai miền 21/7/1954 – 1975. */
export function regionFromLatitude(lat: number): VnRegion {
  return lat < 17.0 ? "nam" : "bac";
}

function segmentsFor(region: VnRegion): Segment[] {
  return region === "nam" ? SOUTH : NORTH;
}

export interface OffsetInfo {
  offsetMinutes: number;
  label: string;
  /** Nguồn tài liệu chưa thống nhất cho thời điểm này */
  uncertain: boolean;
  /** Giờ đồng hồ không tồn tại (giờ bị nhảy qua) */
  gap: boolean;
  /** Giờ đồng hồ lặp lại hai lần (đã chọn lần đầu) */
  ambiguous: boolean;
}

/** Độ lệch múi giờ có hiệu lực tại một thời điểm UTC. */
export function offsetAtInstant(instantMs: number, region: VnRegion): OffsetInfo {
  const segs = segmentsFor(region);
  let seg = segs[0] as Segment;
  for (const s of segs) if (instantMs >= s.from) seg = s;
  const uncertain = region === "bac" && instantMs >= UNCERTAIN_NORTH_FROM && instantMs < UNCERTAIN_NORTH_TO;
  return { offsetMinutes: seg.offset, label: seg.label, uncertain, gap: false, ambiguous: false };
}

/**
 * Đổi giờ đồng hồ địa phương (viết như UTC: `wallMs` = Date.UTC(y,m-1,d,h,mi)) sang thời điểm UTC.
 */
export function wallToInstant(wallMs: number, region: VnRegion): { instantMs: number; info: OffsetInfo } {
  const segs = segmentsFor(region);
  const hits: { instantMs: number; seg: Segment; i: number }[] = [];
  segs.forEach((seg, i) => {
    const instantMs = wallMs - seg.offset * 60_000;
    const next = segs[i + 1];
    if (instantMs >= seg.from && (!next || instantMs < next.from)) hits.push({ instantMs, seg, i });
  });
  if (hits.length > 0) {
    const h = hits[0] as { instantMs: number; seg: Segment };
    const base = offsetAtInstant(h.instantMs, region);
    return { instantMs: h.instantMs, info: { ...base, ambiguous: hits.length > 1 } };
  }
  // giờ rơi vào khoảng bị nhảy qua: dùng độ lệch của đoạn trước
  let prev = segs[0] as Segment;
  for (const s of segs) if (wallMs - s.offset * 60_000 >= s.from) prev = s;
  const instantMs = wallMs - prev.offset * 60_000;
  return { instantMs, info: { ...offsetAtInstant(instantMs, region), gap: true } };
}
