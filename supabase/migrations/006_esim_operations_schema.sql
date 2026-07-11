-- Invisible Mobile
-- Secure eSIM operations schema

create table public.esim_operations (
  id uuid primary key default gen_random_uuid(),

  user_id uuid not null
    references auth.users(id)
    on delete cascade,

  esim_profile_id uuid
    references public.esim_profiles(id)
    on delete set null,

  plan_id uuid
    references public.plans(id)
    on delete set null,

  operation_type text not null,

  status text not null default 'awaiting_confirmation',

  confirmation_required boolean not null default true,

  idempotency_key text not null,

  provider text,

  provider_operation_id text,

  confirmed_at timestamptz,

  executing_at timestamptz,

  executed_at timestamptz,

  failed_at timestamptz,

  error_code text,

  error_message text,

  request_payload jsonb not null default '{}'::jsonb,

  response_payload jsonb not null default '{}'::jsonb,

  metadata jsonb not null default '{}'::jsonb,

  created_at timestamptz not null default now(),

  updated_at timestamptz not null default now(),

  constraint esim_operations_type_check
    check (
      operation_type in (
        'purchase',
        'activation',
        'top_up'
      )
    ),

  constraint esim_operations_status_check
    check (
      status in (
        'pending',
        'awaiting_confirmation',
        'confirmed',
        'executing',
        'executed',
        'failed',
        'cancelled'
      )
    ),

  constraint esim_operations_idempotency_unique
    unique (user_id, idempotency_key)
);

create index esim_operations_user_id_idx
on public.esim_operations(user_id);

create index esim_operations_esim_profile_id_idx
on public.esim_operations(esim_profile_id);

create index esim_operations_plan_id_idx
on public.esim_operations(plan_id);

create index esim_operations_status_idx
on public.esim_operations(status);

create index esim_operations_type_idx
on public.esim_operations(operation_type);

create index esim_operations_created_at_idx
on public.esim_operations(created_at);

create index esim_operations_provider_operation_id_idx
on public.esim_operations(provider_operation_id)
where provider_operation_id is not null;

alter table public.esim_operations
enable row level security;

create policy "Users can view their own eSIM operations"
on public.esim_operations
for select
to authenticated
using ((select auth.uid()) = user_id);
