/**
 * Giờ mặt trời thực (giờ mặt trời biểu kiến) tại một kinh độ.
 * = giờ UTC + kinh độ × 4 phút + phương trình thời gian.
 * Phương trình thời gian theo công thức NOAA (sai số cỡ ±30 giây), đủ cho việc xác định giờ chi.
 */

/** Phương trình thời gian (phút) tại thời điểm UTC. Dương: mặt trời "nhanh" hơn đồng hồ trung bình. */
export function equationOfTime(date: Date): number {
  const start = Date.UTC(date.getUTCFullYear(), 0, 1);
  const dayOfYear = Math.floor((date.getTime() - start) / 86_400_000) + 1;
  const hour = date.getUTCHours() + date.getUTCMinutes() / 60;
  const g = ((2 * Math.PI) / 365) * (dayOfYear - 1 + (hour - 12) / 24);
  return (
    229.18 *
    (0.000075 +
      0.001868 * Math.cos(g) -
      0.032077 * Math.sin(g) -
      0.014615 * Math.cos(2 * g) -
      0.040849 * Math.sin(2 * g))
  );
}

/**
 * Giờ mặt trời thực tại kinh độ `lon` (độ Đông dương), trả về dạng "wall ms"
 * (đọc bằng getUTC*) để lấy ngày/giờ/phút mặt trời.
 */
export function trueSolarWallMs(instant: Date, lon: number): number {
  const deltaMin = lon * 4 + equationOfTime(instant);
  return instant.getTime() + deltaMin * 60_000;
}
