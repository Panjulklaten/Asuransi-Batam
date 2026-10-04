-- SPPA (Surat Permohonan Penutupan Asuransi) — skema awal.
-- Jalankan di Supabase: SQL Editor → paste → Run.
-- Akses data HANYA dari server (service-role key). RLS aktif tanpa policy untuk anon/authenticated,
-- sehingga browser tidak bisa membaca/menulis tabel ini secara langsung.

create table if not exists public.sppa_submissions (
  id              uuid primary key default gen_random_uuid(),
  reference_no    text not null unique
                  check (reference_no ~ '^SPPA-[0-9]{4}-[A-Z0-9]{6}$'),
  product         text not null
                  check (product in ('engineering','marine_hull','marine_cargo','personal_accident')),
  sub_type        text,
  status          text not null default 'submitted'
                  check (status in ('draft','submitted','under_review','need_more_information',
                                    'quotation','accepted','declined','closed')),

  -- Kolom ringkasan untuk filter/daftar admin
  applicant_name  text not null,
  applicant_email text,
  applicant_phone text,
  currency        text,
  sum_insured     numeric(20,0),
  policy_start    date,
  policy_end      date,

  -- Jawaban lengkap (sudah divalidasi & disanitasi server) + versi schema form
  answers         jsonb not null,
  schema_version  text  not null,
  declaration     jsonb not null,          -- {version, accepted: [...], at}

  notify          jsonb not null default '{}'::jsonb,  -- status notifikasi WA/email
  ip_hash         text,                    -- hash IP (bukan IP mentah), untuk deteksi abuse
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index if not exists sppa_submissions_created_idx on public.sppa_submissions (created_at desc);
create index if not exists sppa_submissions_product_status_idx on public.sppa_submissions (product, status);

create table if not exists public.sppa_documents (
  id              uuid primary key default gen_random_uuid(),
  submission_id   uuid references public.sppa_submissions(id) on delete cascade,
  upload_session  uuid not null,           -- mengelompokkan upload sebelum submit
  doc_key         text not null,
  file_name       text not null,
  mime_type       text not null check (mime_type in ('application/pdf','image/jpeg','image/png')),
  size_bytes      integer not null check (size_bytes > 0 and size_bytes <= 8388608),
  storage_path    text not null unique,
  verified        boolean not null default false,   -- true setelah magic-bytes dicek server
  ip_hash         text,                              -- untuk pembatasan laju upload
  created_at      timestamptz not null default now()
);
create index if not exists sppa_documents_submission_idx on public.sppa_documents (submission_id);
create index if not exists sppa_documents_session_idx on public.sppa_documents (upload_session);
create index if not exists sppa_documents_ip_idx on public.sppa_documents (ip_hash, created_at);

create table if not exists public.sppa_status_history (
  id             bigint generated always as identity primary key,
  submission_id  uuid not null references public.sppa_submissions(id) on delete cascade,
  from_status    text,
  to_status      text not null,
  note           text,
  created_at     timestamptz not null default now()
);
create index if not exists sppa_status_history_submission_idx on public.sppa_status_history (submission_id, created_at);

create or replace function public.sppa_touch_updated_at() returns trigger
language plpgsql set search_path = public as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists sppa_submissions_touch on public.sppa_submissions;
create trigger sppa_submissions_touch before update on public.sppa_submissions
  for each row execute function public.sppa_touch_updated_at();

-- Keamanan: tutup akses untuk peran browser.
alter table public.sppa_submissions    enable row level security;
alter table public.sppa_documents      enable row level security;
alter table public.sppa_status_history enable row level security;
revoke all on public.sppa_submissions, public.sppa_documents, public.sppa_status_history from anon, authenticated;

-- Bucket privat untuk dokumen (tidak publik; akses lewat signed URL dari server).
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('sppa-documents', 'sppa-documents', false, 8388608,
        array['application/pdf','image/jpeg','image/png'])
on conflict (id) do update
  set public = false,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;
