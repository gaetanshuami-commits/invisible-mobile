-- Invisible Mobile
-- Devices schema

create table public.devices (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  esim_profile_id uuid references public.esim_profiles(id) on delete set null,
  manufacturer text,
  model text not null,
  operating_system text,
  operating_system_version text,
  device_identifier text,
  esim_compatible boolean,
  is_primary boolean not null default false,
  status text not null default 'active',
  last_seen_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index devices_user_device_identifier_unique
on public.devices(user_id, device_identifier)
where device_identifier is not null;

create index devices_user_id_idx
on public.devices(user_id);

create index devices_esim_profile_id_idx
on public.devices(esim_profile_id);

create index devices_status_idx
on public.devices(status);

alter table public.devices enable row level security;

create policy "Users can view their own devices"
on public.devices
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can create their own devices"
on public.devices
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own devices"
on public.devices
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "Users can delete their own devices"
on public.devices
for delete
to authenticated
using ((select auth.uid()) = user_id);
