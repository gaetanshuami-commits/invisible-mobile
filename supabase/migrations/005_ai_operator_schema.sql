-- Invisible Mobile
-- AI Operator schema

create table public.ai_operator_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  conversation_id uuid not null default gen_random_uuid(),
  role text not null,
  content text not null,
  model text,
  input_tokens integer,
  output_tokens integer,
  latency_ms integer,
  created_at timestamptz not null default now(),

  constraint ai_operator_logs_role_check
    check (role in ('user', 'assistant', 'system', 'tool'))
);

create table public.ai_operator_actions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  conversation_id uuid,
  action_type text not null,
  title text not null,
  description text,
  risk_level text not null default 'low',
  status text not null default 'pending',
  confirmation_required boolean not null default true,
  confirmed_at timestamptz,
  executed_at timestamptz,
  failed_at timestamptz,
  error_message text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint ai_operator_actions_risk_level_check
    check (risk_level in ('low', 'medium', 'high', 'critical')),

  constraint ai_operator_actions_status_check
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
    )
);

create index ai_operator_logs_user_id_idx
on public.ai_operator_logs(user_id);

create index ai_operator_logs_conversation_id_idx
on public.ai_operator_logs(conversation_id);

create index ai_operator_logs_created_at_idx
on public.ai_operator_logs(created_at);

create index ai_operator_actions_user_id_idx
on public.ai_operator_actions(user_id);

create index ai_operator_actions_conversation_id_idx
on public.ai_operator_actions(conversation_id);

create index ai_operator_actions_status_idx
on public.ai_operator_actions(status);

create index ai_operator_actions_created_at_idx
on public.ai_operator_actions(created_at);

alter table public.ai_operator_logs enable row level security;

alter table public.ai_operator_actions enable row level security;

create policy "Users can view their own AI operator logs"
on public.ai_operator_logs
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can view their own AI operator actions"
on public.ai_operator_actions
for select
to authenticated
using ((select auth.uid()) = user_id);
