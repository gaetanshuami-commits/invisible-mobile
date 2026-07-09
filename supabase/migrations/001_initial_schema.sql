-- Invisible Mobile
-- Initial database schema reference
-- Tables already created in Supabase.
-- Do not execute against the existing production database without review.

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  first_name text,
  last_name text,
  phone text,
  avatar_url text,
  role text not null default 'customer',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.esim_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  provider text,
  provider_esim_id text,
  iccid text,
  status text not null default 'pending',
  country_code text,
  activation_date timestamptz,
  expiration_date timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.plans (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  provider_plan_id text not null,
  name text not null,
  country_code text,
  region text,
  data_amount_mb bigint,
  validity_days integer,
  price_amount numeric(10,2),
  currency text not null default 'EUR',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint plans_provider_plan_unique unique (provider, provider_plan_id)
);

create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  esim_profile_id uuid references public.esim_profiles(id) on delete set null,
  plan_id uuid references public.plans(id) on delete set null,
  provider text,
  provider_subscription_id text,
  status text not null default 'pending',
  started_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.usage_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  esim_profile_id uuid not null references public.esim_profiles(id) on delete cascade,
  subscription_id uuid references public.subscriptions(id) on delete set null,
  data_used_bytes bigint not null default 0,
  data_remaining_bytes bigint,
  recorded_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

-- Automatic profile creation

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);

  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Indexes

create index esim_profiles_user_id_idx
on public.esim_profiles(user_id);

create index plans_country_code_idx
on public.plans(country_code);

create index plans_provider_idx
on public.plans(provider);

create index subscriptions_user_id_idx
on public.subscriptions(user_id);

create index subscriptions_esim_profile_id_idx
on public.subscriptions(esim_profile_id);

create index subscriptions_plan_id_idx
on public.subscriptions(plan_id);

create index usage_records_user_id_idx
on public.usage_records(user_id);

create index usage_records_esim_profile_id_idx
on public.usage_records(esim_profile_id);

create index usage_records_subscription_id_idx
on public.usage_records(subscription_id);

create index usage_records_recorded_at_idx
on public.usage_records(recorded_at);

-- Row Level Security

alter table public.profiles enable row level security;
alter table public.esim_profiles enable row level security;
alter table public.plans enable row level security;
alter table public.subscriptions enable row level security;
alter table public.usage_records enable row level security;

create policy "Users can view their own profile"
on public.profiles
for select
to authenticated
using ((select auth.uid()) = id);

create policy "Users can update their own profile"
on public.profiles
for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

create policy "Users can view their own eSIM profiles"
on public.esim_profiles
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Authenticated users can view active plans"
on public.plans
for select
to authenticated
using (is_active = true);

create policy "Users can view their own subscriptions"
on public.subscriptions
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can view their own usage records"
on public.usage_records
for select
to authenticated
using ((select auth.uid()) = user_id);
