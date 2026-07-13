-- Invisible Mobile
-- Support tickets schema

create table public.support_tickets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  subject text not null,
  category text not null default 'general',
  priority text not null default 'normal',
  message text not null,
  status text not null default 'open',
  resolved_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint support_tickets_category_check
    check (
      category in (
        'general',
        'esim',
        'activation',
        'usage',
        'billing',
        'device',
        'account'
      )
    ),

  constraint support_tickets_priority_check
    check (
      priority in (
        'low',
        'normal',
        'high',
        'urgent'
      )
    ),

  constraint support_tickets_status_check
    check (
      status in (
        'open',
        'in_progress',
        'waiting_customer',
        'resolved',
        'closed'
      )
    )
);

create index support_tickets_user_id_idx
on public.support_tickets(user_id);

create index support_tickets_status_idx
on public.support_tickets(status);

create index support_tickets_created_at_idx
on public.support_tickets(created_at);

alter table public.support_tickets
enable row level security;

create policy "Users can view their own support tickets"
on public.support_tickets
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can create their own support tickets"
on public.support_tickets
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own open support tickets"
on public.support_tickets
for update
to authenticated
using (
  (select auth.uid()) = user_id
  and status in ('open', 'waiting_customer')
)
with check ((select auth.uid()) = user_id);
