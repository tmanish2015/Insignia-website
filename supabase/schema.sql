create extension if not exists pgcrypto;

create table if not exists enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  company text not null,
  work_email text not null,
  phone text,
  interest text not null check (interest in ('erp','ai_automation','digital_marketing','all')),
  message text,
  source_page text not null default 'contact',
  status text not null default 'new' check (status in ('new','contacted','qualified','closed')),
  crm_synced boolean not null default false,
  recaptcha_score numeric
);

create table if not exists demo_bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  enquiry_id uuid references enquiries(id),
  requested_slot timestamptz,
  confirmed_slot timestamptz,
  status text not null default 'pending' check (status in ('pending','confirmed','completed','cancelled'))
);

create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null unique,
  subscribed boolean not null default true
);

create table if not exists whatsapp_conversations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  session_id text not null,
  enquiry_id uuid references enquiries(id),
  channel text not null default 'web_widget' check (channel in ('web_widget','whatsapp_business_api')),
  transcript jsonb not null default '[]'
);

create table if not exists assistant_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  enquiry_id uuid references enquiries(id),
  industry text not null,
  turnover_band text not null,
  employee_band text not null,
  current_software text,
  pain_point text not null,
  recommended_product text not null,
  recommended_tier text not null
);

create table if not exists admin_users (
  id uuid primary key references auth.users(id),
  role text not null default 'staff' check (role in ('staff','sales','admin')),
  created_at timestamptz not null default now()
);

alter table enquiries enable row level security;
alter table demo_bookings enable row level security;
alter table newsletter_subscribers enable row level security;
alter table whatsapp_conversations enable row level security;
alter table assistant_leads enable row level security;
alter table admin_users enable row level security;

create policy "admins can read enquiries" on enquiries for select
  using (exists (select 1 from admin_users a where a.id = auth.uid()));

create policy "admins can read demo_bookings" on demo_bookings for select
  using (exists (select 1 from admin_users a where a.id = auth.uid()));

create policy "admins can read assistant_leads" on assistant_leads for select
  using (exists (select 1 from admin_users a where a.id = auth.uid()));
