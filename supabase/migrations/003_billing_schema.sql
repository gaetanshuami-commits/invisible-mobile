-- Invisible Mobile
-- Billing schema

create table public.billing_customers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  provider text not null default 'stripe',
  provider_customer_id text,
  billing_email text,
  billing_name text,
  country_code text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  provider text not null default 'stripe',
  provider_payment_id text,
  amount numeric(10,2) not null,
  currency text not null default 'EUR',
  status text not null default 'pending',
  description text,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.invoices (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  provider text not null default 'stripe',
  provider_invoice_id text,
  invoice_number text,
  amount_due numeric(10,2),
  amount_paid numeric(10,2),
  currency text not null default 'EUR',
  status text not null default 'draft',
  hosted_invoice_url text,
  invoice_pdf_url text,
  issued_at timestamptz,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.webhook_events (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  provider_event_id text not null,
  event_type text not null,
  processed_at timestamptz,
  created_at timestamptz not null default now(),
  constraint webhook_events_provider_event_unique unique (provider, provider_event_id)
);

create index billing_customers_user_id_idx on public.billing_customers(user_id);
create index payments_user_id_idx on public.payments(user_id);
create index invoices_user_id_idx on public.invoices(user_id);
create index webhook_events_provider_idx on public.webhook_events(provider);

alter table public.billing_customers enable row level security;
alter table public.payments enable row level security;
alter table public.invoices enable row level security;
alter table public.webhook_events enable row level security;

create policy "Users can view their own billing customer"
on public.billing_customers
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can view their own payments"
on public.payments
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can view their own invoices"
on public.invoices
for select
to authenticated
using ((select auth.uid()) = user_id);
