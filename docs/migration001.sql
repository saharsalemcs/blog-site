-- Migration: create posts table
-- Blog MVP — uses the default `id` (uuid) as the identifier, no slug column.

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  content text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Keep updated_at in sync automatically on every UPDATE
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_posts_updated_at on posts;

create trigger trg_posts_updated_at
before update on posts
for each row
execute function set_updated_at();


-- Migration: enable RLS on posts table with public (permissive) policies
-- Temporary setup for MVP — no Auth yet, anon key can do everything.
-- When Auth is added later, replace these policies with user-scoped ones
-- (e.g. USING (auth.uid() = user_id)) instead of disabling RLS.

alter table posts enable row level security;

-- Allow anyone to read posts
create policy "Public can read posts"
on posts
for select
using (true);

-- Allow anyone to create posts
create policy "Public can insert posts"
on posts
for insert
with check (true);

-- Allow anyone to update posts
create policy "Public can update posts"
on posts
for update
using (true)
with check (true);

-- Allow anyone to delete posts
create policy "Public can delete posts"
on posts
for delete
using (true);