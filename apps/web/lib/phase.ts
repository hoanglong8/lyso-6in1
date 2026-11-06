/**
 * Giai đoạn triển khai.
 *  1 (mặc định): mọi tính toán và luận cơ bản chạy trên trình duyệt; máy chủ không nhận, không lưu,
 *    không chuyển dữ liệu cá nhân ra nước ngoài. Không đăng nhập, không AI.
 *  2: bật tài khoản (Supabase), AI luận giải (Claude API), gói trả phí — cần NEXT_PUBLIC_GIAI_DOAN=2.
 */
export const GIAI_DOAN_2 = process.env.NEXT_PUBLIC_GIAI_DOAN === "2";
