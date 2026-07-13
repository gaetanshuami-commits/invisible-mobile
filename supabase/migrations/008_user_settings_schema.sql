-- Invisible Mobile
-- Customer settings schema

create table public.user_settings (
  user_id uuid primary key
    references auth.users(id)
    on delete cascade,

  language text not null default 'fr',
  timezone text not null default 'Europe/Paris',

  service_notifications boolean not null default true,
  security_notifications boolean not null default true,
  marketing_notifications boolean not null default false,

  data_saver_enabled boolean not null default false,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint user_settings_language_check
    check (language in ('fr', 'en')),

  constraint user_settings_timezone_check
    check (
      timezone in (
        'Europe/Paris',
        'Europe/London',
        'America/New_York',
        'America/Los_Angeles',
        'Africa/Kinshasa',
        'Asia/Dubai',
        'Asia/Tokyo'
      )
    )
);

alter table public.user_settings
enable row level security;

create policy "Users can view their own settings"
on public.user_settings
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can create their own settings"
on public.user_settings
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own settings"
on public.user_settings
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);
