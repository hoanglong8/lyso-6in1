-- Lý số 6 in 1 — schema ban đầu. Chạy trong Supabase SQL editor (hoặc `supabase db push`).
-- Nguyên tắc: mỗi người chỉ đọc/ghi dữ liệu của chính mình (RLS). Không lưu gì ngoài thứ cần để lập lá số.

-- Hồ sơ lá số (ngày giờ, nơi sinh, giới tính, tên gọi tùy chọn) — dữ liệu cá nhân cơ bản theo NĐ 356/2025
create table if not exists public.ho_so (
  id text primary key,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  data jsonb not null,
  consent_version text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists ho_so_user_idx on public.ho_so (user_id, updated_at desc);
alter table public.ho_so enable row level security;
create policy "ho_so: đọc của mình" on public.ho_so for select using (user_id = auth.uid());
create policy "ho_so: thêm của mình" on public.ho_so for insert with check (user_id = auth.uid());
create policy "ho_so: sửa của mình" on public.ho_so for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "ho_so: xóa của mình" on public.ho_so for delete using (user_id = auth.uid());

-- Gói dịch vụ: chỉ quản trị (service role / dashboard) được ghi
create table if not exists public.goi_dich_vu (
  user_id uuid primary key references auth.users (id) on delete cascade,
  plan text not null default 'free' check (plan in ('free', 'nang-cao')),
  het_han timestamptz,
  updated_at timestamptz not null default now()
);
alter table public.goi_dich_vu enable row level security;
create policy "goi: đọc của mình" on public.goi_dich_vu for select using (user_id = auth.uid());

-- Nhật ký dùng AI (để giới hạn lượt và theo dõi chi phí). Không lưu nội dung luận giải.
create table if not exists public.ai_usage (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  mon text not null,
  level text not null,
  model text not null,
  input_tokens int not null default 0,
  output_tokens int not null default 0,
  created_at timestamptz not null default now()
);
create index if not exists ai_usage_user_day_idx on public.ai_usage (user_id, created_at desc);
alter table public.ai_usage enable row level security;
create policy "usage: đọc của mình" on public.ai_usage for select using (user_id = auth.uid());
create policy "usage: thêm của mình" on public.ai_usage for insert with check (user_id = auth.uid());
