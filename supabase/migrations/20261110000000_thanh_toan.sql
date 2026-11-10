-- Đơn hàng thanh toán (payOS). Chỉ máy chủ (service role, ở webhook) được ghi; người dùng chỉ đọc đơn của mình.
-- Không lưu thông tin thẻ/tài khoản ngân hàng của người mua.
create table if not exists public.don_hang (
  order_code bigint primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  so_thang int not null check (so_thang > 0),
  so_tien int not null check (so_tien > 0),
  so_tien_nhan int,
  trang_thai text not null default 'cho' check (trang_thai in ('cho', 'da-tra', 'huy', 'loi')),
  payos_link_id text,
  created_at timestamptz not null default now(),
  da_tra_luc timestamptz
);
create index if not exists don_hang_user_idx on public.don_hang (user_id, created_at desc);
alter table public.don_hang enable row level security;
create policy "don_hang: đọc của mình" on public.don_hang for select using (user_id = auth.uid());
