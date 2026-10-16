create table public.join_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 3 and 120),
  email text not null check (char_length(email) between 3 and 180),
  phone text check (char_length(phone) <= 30),
  city text not null check (char_length(city) between 2 and 120),
  area text not null check (area in ('Reforestación', 'Educación', 'Salud', 'Comunicación', 'Por definir')),
  availability text not null check (availability in ('Entre semana', 'Fines de semana', 'Actividades puntuales', 'Por coordinar')),
  message text check (char_length(message) <= 1000),
  consent boolean not null check (consent = true),
  privacy_version text not null
);
alter table public.join_requests enable row level security;
revoke all on public.join_requests from anon, authenticated;
grant insert on public.join_requests to service_role;
