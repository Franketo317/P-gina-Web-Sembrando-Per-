-- Preserve existing registrations while disabling direct public writes.
create table if not exists public.comunidad_registros (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  country text not null,
  consent boolean not null,
  tipo_formulario text not null
);

alter table public.comunidad_registros enable row level security;
revoke insert, update, delete on public.comunidad_registros from public, anon, authenticated;
grant insert on public.comunidad_registros to service_role;
