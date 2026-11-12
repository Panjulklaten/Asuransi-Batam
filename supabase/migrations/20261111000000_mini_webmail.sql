-- Mini Webmail asuransibatam.com — skema database (Supabase PostgreSQL)
-- Jalankan sekali di Supabase → SQL Editor (atau `supabase db push`).
--
-- Model akses: SEMUA tabel di bawah ini tertutup untuk peran `anon` dan `authenticated`
-- (RLS aktif tanpa policy + hak akses dicabut). Hanya server Next.js yang membaca/menulis,
-- memakai SUPABASE_SERVICE_ROLE_KEY. Browser tidak pernah berbicara langsung ke database.

-- ─────────────────────────────────────────────────────────────────────────────
-- Akun / kotak surat
-- ─────────────────────────────────────────────────────────────────────────────
create table if not exists public.email_accounts (
  id           uuid primary key default gen_random_uuid(),
  address      text not null unique check (address = lower(address)),
  display_name text,
  created_at   timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────────────────────
-- Thread (percakapan). Kolom ringkasan diisi otomatis oleh trigger dari email_messages.
-- folder: inbox | sent (thread yang hanya berisi email keluar) | archive | trash
-- Tampilan "Sent" = thread yang punya minimal 1 pesan keluar dan tidak di trash.
-- ─────────────────────────────────────────────────────────────────────────────
create table if not exists public.email_threads (
  id                 uuid primary key default gen_random_uuid(),
  account_id         uuid not null references public.email_accounts(id) on delete cascade,
  subject            text not null default '',
  normalized_subject text not null default '',          -- hanya untuk fallback pencocokan, BUKAN identitas thread
  folder             text not null default 'inbox' check (folder in ('inbox','sent','archive','trash')),
  participants       text[] not null default '{}',
  last_message_at    timestamptz not null default now(),
  last_from          text,
  snippet            text,
  message_count      integer not null default 0,
  unread_count       integer not null default 0,
  has_outbound       boolean not null default false,
  has_attachments    boolean not null default false,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);
create index if not exists email_threads_list_idx on public.email_threads (account_id, folder, last_message_at desc);
create index if not exists email_threads_sent_idx on public.email_threads (account_id, last_message_at desc) where has_outbound;
create index if not exists email_threads_subject_idx on public.email_threads (account_id, normalized_subject, last_message_at desc);
create index if not exists email_threads_participants_idx on public.email_threads using gin (participants);

-- ─────────────────────────────────────────────────────────────────────────────
-- Pesan individual (riwayat lengkap disimpan per pesan)
-- `references` adalah kata kunci SQL, jadi kolomnya bernama references_ids.
-- message_id disimpan lengkap dengan kurung sudut: <abc@host>.
-- ─────────────────────────────────────────────────────────────────────────────
create table if not exists public.email_messages (
  id              uuid primary key default gen_random_uuid(),
  thread_id       uuid not null references public.email_threads(id) on delete cascade,
  account_id      uuid not null references public.email_accounts(id) on delete cascade,
  direction       text not null check (direction in ('inbound','outbound')),
  message_id      text,                                   -- header Message-ID asli (outbound: diisi setelah dikirim)
  in_reply_to     text,
  references_ids  text[] not null default '{}',
  resend_email_id text,                                   -- id email di Resend (kunci idempotensi)
  from_email      text not null,
  from_name       text,
  to_emails       text[] not null default '{}',
  cc_emails       text[] not null default '{}',
  bcc_emails      text[] not null default '{}',
  reply_to_emails text[] not null default '{}',
  subject         text not null default '',
  text_body       text,
  html_body       text,                                   -- disimpan mentah; disanitasi saat ditampilkan
  snippet         text,
  authentication  jsonb,                                  -- hasil SPF/DKIM/DMARC dari Resend (inbound)
  received_at     timestamptz,
  sent_at         timestamptz,
  read_at         timestamptz,
  created_at      timestamptz not null default now(),
  sort_at         timestamptz generated always as (coalesce(received_at, sent_at, created_at)) stored
);
-- Satu Message-ID = satu pesan: mencegah pesan ganda (mis. email yang sama diterima dua kali).
create unique index if not exists email_messages_message_id_uq on public.email_messages (message_id) where message_id is not null;
-- Idempotensi webhook / pengiriman ulang.
create unique index if not exists email_messages_resend_uq on public.email_messages (direction, resend_email_id) where resend_email_id is not null;
create index if not exists email_messages_thread_idx on public.email_messages (thread_id, sort_at);
create index if not exists email_messages_in_reply_to_idx on public.email_messages (in_reply_to) where in_reply_to is not null;
create index if not exists email_messages_references_idx on public.email_messages using gin (references_ids);
create index if not exists email_messages_from_idx on public.email_messages (lower(from_email));

create table if not exists public.email_attachments (
  id                   uuid primary key default gen_random_uuid(),
  message_id           uuid not null references public.email_messages(id) on delete cascade,
  resend_attachment_id text,
  filename             text not null,
  content_type         text,
  size_bytes           bigint,
  content_disposition  text,
  content_id           text,
  storage_path         text,                              -- path di bucket privat `mail-attachments`
  stored               boolean not null default false,
  error                text,
  created_at           timestamptz not null default now()
);
create unique index if not exists email_attachments_resend_uq on public.email_attachments (message_id, resend_attachment_id) where resend_attachment_id is not null;
create index if not exists email_attachments_message_idx on public.email_attachments (message_id);

-- Log webhook (idempotensi: svix-id identik untuk setiap percobaan ulang event yang sama)
create table if not exists public.email_webhook_events (
  svix_id         text primary key,
  event_type      text not null,
  resend_email_id text,
  status          text not null default 'processing' check (status in ('processing','processed','failed','ignored')),
  note            text,
  attempts        integer not null default 1,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- Percobaan login gagal (pembatas laju lintas-instance; hanya hash IP yang disimpan)
create table if not exists public.mail_login_attempts (
  id           bigint generated always as identity primary key,
  ip_hash      text not null,
  attempted_at timestamptz not null default now()
);
create index if not exists mail_login_attempts_idx on public.mail_login_attempts (ip_hash, attempted_at desc);

-- ─────────────────────────────────────────────────────────────────────────────
-- Ringkasan thread dihitung ulang dari pesan-pesannya (selalu konsisten & idempoten)
-- ─────────────────────────────────────────────────────────────────────────────
create or replace function public.mail_refresh_thread(p_thread uuid) returns void
language plpgsql as $$
declare
  v record;
begin
  select count(*)::int                                                         as cnt,
         count(*) filter (where direction = 'inbound' and read_at is null)::int as unread,
         coalesce(bool_or(direction = 'outbound'), false)                       as has_out,
         max(sort_at)                                                           as last_at
    into v
    from public.email_messages where thread_id = p_thread;

  if v.cnt = 0 then return; end if;

  update public.email_threads t set
    message_count   = v.cnt,
    unread_count    = v.unread,
    has_outbound    = v.has_out,
    last_message_at = v.last_at,
    snippet         = (select m.snippet from public.email_messages m where m.thread_id = p_thread order by m.sort_at desc limit 1),
    last_from       = (select coalesce(nullif(m.from_name, ''), m.from_email) from public.email_messages m where m.thread_id = p_thread order by m.sort_at desc limit 1),
    has_attachments = exists (
      select 1 from public.email_attachments a join public.email_messages m on m.id = a.message_id
       where m.thread_id = p_thread and not (coalesce(a.content_disposition, '') = 'inline' and a.content_id is not null)),
    participants    = coalesce((
      select array_agg(distinct e) from (
        select lower(from_email) as e from public.email_messages where thread_id = p_thread
        union select lower(x) from public.email_messages m, unnest(m.to_emails) x where m.thread_id = p_thread
        union select lower(x) from public.email_messages m, unnest(m.cc_emails) x where m.thread_id = p_thread
      ) s where e is not null and e <> ''), '{}'),
    updated_at      = now()
  where t.id = p_thread;
end $$;

create or replace function public.mail_trg_message() returns trigger
language plpgsql as $$
begin
  if tg_op = 'DELETE' then
    perform public.mail_refresh_thread(old.thread_id);
  else
    perform public.mail_refresh_thread(new.thread_id);
  end if;
  return null;
end $$;

drop trigger if exists mail_message_refresh on public.email_messages;
create trigger mail_message_refresh
  after insert or delete or update of read_at, snippet, thread_id on public.email_messages
  for each row execute function public.mail_trg_message();

create or replace function public.mail_trg_attachment() returns trigger
language plpgsql as $$
declare t uuid;
begin
  select thread_id into t from public.email_messages where id = coalesce(new.message_id, old.message_id);
  if t is not null then perform public.mail_refresh_thread(t); end if;
  return null;
end $$;

drop trigger if exists mail_attachment_refresh on public.email_attachments;
create trigger mail_attachment_refresh
  after insert or delete or update of content_disposition, content_id on public.email_attachments
  for each row execute function public.mail_trg_attachment();

-- ─────────────────────────────────────────────────────────────────────────────
-- Daftar thread + pencarian (pengirim, penerima, subject). Parameter di-bind, bukan
-- disusun sebagai string filter, sehingga aman dari injeksi; karakter LIKE di-escape.
-- ─────────────────────────────────────────────────────────────────────────────
create or replace function public.mail_list_threads(
  p_account uuid,
  p_folder  text,
  p_q       text default null,
  p_before  timestamptz default null,
  p_limit   integer default 30
) returns setof public.email_threads
language sql stable as $$
  select t.*
    from public.email_threads t
   where t.account_id = p_account
     and case p_folder
           when 'sent' then (t.has_outbound and t.folder <> 'trash')
           else t.folder = p_folder
         end
     and (p_before is null or t.last_message_at < p_before)
     and (
       nullif(btrim(p_q), '') is null
       or t.subject ilike '%' || replace(replace(replace(btrim(p_q), '\', '\\'), '%', '\%'), '_', '\_') || '%' escape '\'
       or exists (
         select 1 from public.email_messages m
          where m.thread_id = t.id
            and (   m.from_email ilike '%' || replace(replace(replace(btrim(p_q), '\', '\\'), '%', '\%'), '_', '\_') || '%' escape '\'
                 or coalesce(m.from_name, '') ilike '%' || replace(replace(replace(btrim(p_q), '\', '\\'), '%', '\%'), '_', '\_') || '%' escape '\'
                 or m.subject ilike '%' || replace(replace(replace(btrim(p_q), '\', '\\'), '%', '\%'), '_', '\_') || '%' escape '\'
                 or array_to_string(m.to_emails, ' ') ilike '%' || replace(replace(replace(btrim(p_q), '\', '\\'), '%', '\%'), '_', '\_') || '%' escape '\')
       )
     )
   order by t.last_message_at desc
   limit least(greatest(coalesce(p_limit, 30), 1), 100)
$$;

create or replace function public.mail_folder_counts(p_account uuid) returns jsonb
language sql stable as $$
  select jsonb_build_object(
    'inbox_unread',  coalesce(sum(unread_count) filter (where folder = 'inbox'), 0),
    'inbox_total',   count(*) filter (where folder = 'inbox'),
    'sent_total',    count(*) filter (where has_outbound and folder <> 'trash'),
    'archive_total', count(*) filter (where folder = 'archive'),
    'trash_total',   count(*) filter (where folder = 'trash')
  ) from public.email_threads where account_id = p_account
$$;

-- ─────────────────────────────────────────────────────────────────────────────
-- Keamanan: RLS aktif tanpa policy = anon/authenticated tidak dapat apa pun.
-- service_role (server) melewati RLS.
-- ─────────────────────────────────────────────────────────────────────────────
alter table public.email_accounts       enable row level security;
alter table public.email_threads        enable row level security;
alter table public.email_messages       enable row level security;
alter table public.email_attachments    enable row level security;
alter table public.email_webhook_events enable row level security;
alter table public.mail_login_attempts  enable row level security;

revoke all on public.email_accounts, public.email_threads, public.email_messages,
              public.email_attachments, public.email_webhook_events, public.mail_login_attempts
  from anon, authenticated;
revoke all on function public.mail_refresh_thread(uuid), public.mail_list_threads(uuid, text, text, timestamptz, integer),
              public.mail_folder_counts(uuid), public.mail_trg_message(), public.mail_trg_attachment()
  from public, anon, authenticated;
grant execute on function public.mail_list_threads(uuid, text, text, timestamptz, integer),
                          public.mail_folder_counts(uuid) to service_role;

-- ─────────────────────────────────────────────────────────────────────────────
-- Bucket privat untuk lampiran (masuk & keluar). Tidak ada policy untuk anon/authenticated;
-- file hanya bisa diunduh lewat /api/mail/attachments/[id] setelah login.
-- ─────────────────────────────────────────────────────────────────────────────
insert into storage.buckets (id, name, public, file_size_limit)
values ('mail-attachments', 'mail-attachments', false, 26214400)
on conflict (id) do nothing;
