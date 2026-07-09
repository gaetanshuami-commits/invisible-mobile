-- Invisible Mobile
-- Trips schema

create table public.trips (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  destination_country_code text not null,
  destination_name text,
  departure_date date,
  return_date date,
  status text not null default 'planned',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint trips_dates_check
    check (
      return_date is null
      or departure_date is null
      or return_date >= departure_date
    )
);

create index trips_user_id_idx
on public.trips(user_id);

create index trips_departure_date_idx
on public.trips(departure_date);

alter table public.trips enable row level security;

create policy "Users can view their own trips"
on public.trips
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can create their own trips"
on public.trips
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own trips"
on public.trips
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "Users can delete their own trips"
on public.trips
for delete
to authenticated
using ((select auth.uid()) = user_id);
