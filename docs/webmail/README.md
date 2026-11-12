# Mini Webmail asuransibatam.com

Webmail admin dengan **dua halaman**: `/mail` (login) dan `/mail/inbox` (aplikasi email). Email masuk/keluar lewat **Resend**, data di **Supabase PostgreSQL**, threading memakai header standar `Message-ID` / `In-Reply-To` / `References`.

> **Status:** kode, migrasi, dan tes sudah ada. Fitur **belum bisa menerima/mengirim email nyata** sebelum Anda mengisi environment, menjalankan migrasi, memverifikasi domain di Resend, dan membuat webhook (langkah 1–6 di bawah). Jangan arahkan MX produksi sebelum membaca bagian [DNS](#dns-aman-untuk-email-forwarding-yang-sedang-berjalan).

## Arsitektur singkat

| Bagian | Lokasi |
|---|---|
| Halaman | `src/app/mail/page.tsx` (login), `src/app/mail/inbox/page.tsx` |
| UI | `src/components/mail/*` (Sidebar/daftar/detail/composer, iframe sandbox untuk HTML) |
| API (semua di `/api/mail/*`) | `threads`, `threads/[id]`, `send`, `attachments/[id]`, `auth/login`, `auth/logout`, `webhook/resend` |
| Logika server | `src/lib/mail/*` (`inbound`, `outbound`, `threading`, `sanitize`, `auth`, `store`, …) |
| Database | `supabase/migrations/20261111000000_mini_webmail.sql` |
| Navbar/Footer situs | disembunyikan di `/mail/*` oleh `src/components/SiteChrome.tsx`; halaman lain tidak berubah dan tetap statis |

Pilihan teknis (dan alasannya):
- **Supabase + service role hanya di server.** Repo belum punya database; browser tidak pernah menyentuh database (RLS aktif tanpa policy → `anon`/`authenticated` tidak bisa apa pun). Karena itu `SUPABASE_ANON_KEY` **tidak dipakai** dan tidak ada di `.env.example`.
- **Auth satu admin dari environment** (bukan Supabase Auth): tidak ada registrasi publik sama sekali, tidak ada tabel user. Password = hash scrypt; sesi = cookie bertanda tangan HMAC (`HttpOnly`, `SameSite=Strict`, `Secure`, prefiks `__Host-`, berlaku 12 jam). Mengganti password otomatis mencabut semua sesi.
- **REST langsung ke Resend** (tanpa SDK), selaras dengan `src/lib/sppa/server/email.ts`. Verifikasi webhook memakai paket `svix` sesuai dokumentasi Resend.

## Cara kerja threading

Identitas thread = rantai header, **bukan subject**.

**Masuk** (`src/lib/mail/inbound.ts`): webhook Resend hanya berisi metadata, jadi isi + header diambil lewat Receiving API (`GET /emails/receiving/{id}`). Thread ditentukan berurutan:
1. `In-Reply-To` cocok dengan `message_id` pesan yang tersimpan;
2. `References` dari yang paling dekat;
3. pesan lama yang merujuk Message-ID pesan baru (kasus balasan tiba **sebelum** induknya);
4. **fallback** — hanya untuk email yang jelas balasan (ada header/`Re:`) tetapi rantainya tak dikenal: subject ternormalisasi + pengirim yang sama + ≤ 90 hari;
5. selain itu → thread baru. Subject yang sama tanpa tanda balasan **tidak** digabung.

**Keluar** (`src/lib/mail/outbound.ts`): `In-Reply-To` = Message-ID pesan yang dibalas; `References` = References induk + Message-ID induk (dipangkas ke 20). Resend yang memberi Message-ID pada email keluar, jadi setelah kirim sistem mengambilnya (`GET /emails/{id}` → `message_id`) dan menyimpannya; bila belum tersedia, dilengkapi otomatis saat balasan pelanggan tiba. Setiap pesan disimpan individual; ringkasan thread dihitung ulang oleh trigger database.

**Anti-duplikat:** `svix-id` (retry webhook), `resend_email_id`, dan `message_id` masing-masing unik. Pengiriman memakai `Idempotency-Key` dari `requestId` sehingga klik ganda/coba ulang tidak mengirim dua kali.

## Setup

### 1. Supabase
1. Buat project → **SQL Editor** → jalankan isi `supabase/migrations/20261111000000_mini_webmail.sql` (aman dijalankan ulang). Migrasi juga membuat bucket privat `mail-attachments`.
2. **Project Settings → API**: salin `Project URL` → `SUPABASE_URL`, dan `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`. Key ini melewati RLS: **hanya** di environment server (Vercel), jangan beri awalan `NEXT_PUBLIC_`.

### 2. Resend
1. **Domains → Add Domain** `asuransibatam.com` (pengiriman). Tambahkan record DNS persis seperti yang ditampilkan dashboard (DKIM/SPF/return-path). Tunggu status *Verified*.
2. **API Keys**: buat key berizin **Full access** (membaca email masuk membutuhkannya) → `RESEND_API_KEY`. Jika sebelumnya key hanya *Sending access*, pengambilan email masuk akan ditolak (401/403 di log server).
3. Aktifkan **penerimaan** (lihat bagian DNS) lalu **Webhooks → Add Webhook**:
   - Endpoint: `https://asuransibatam.com/api/mail/webhook/resend` (gunakan host kanonis yang **tidak** mengalihkan/redirect — mis. jika `www` dialihkan ke apex, pakai apex);
   - Event: `email.received`;
   - Salin *Signing Secret* (`whsec_…`) → `RESEND_WEBHOOK_SECRET`.

### 3. Akun admin
```bash
npm run mail:hash-password   # minimal 12 karakter; hasilnya → MAIL_ADMIN_PASSWORD_HASH
openssl rand -base64 48      # → MAIL_SESSION_SECRET
```
Isi `MAIL_ADMIN_EMAIL` dengan email login pilihan Anda (tidak harus alamat domain).

### 4. Environment (Vercel → Settings → Environment Variables, Production)
Lihat `.env.example` bagian *Mini Webmail*: `RESEND_API_KEY`, `RESEND_WEBHOOK_SECRET`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `MAIL_FROM_ADDRESS`, `MAIL_FROM_NAME`, `MAIL_ADMIN_EMAIL`, `MAIL_ADMIN_PASSWORD_HASH`, `MAIL_SESSION_SECRET`. Redeploy setelah mengisi.

### 5. Uji bertahap (urutan ini mencegah salah diagnosis)
1. Buka `/mail`, login. Inbox kosong = database terhubung.
2. **Tulis** email ke alamat pribadi Anda → harus sampai, muncul di *Sent*. Cek di Gmail "Tampilkan asli": ada `Message-ID`.
3. Balas email itu dari Gmail → **balasan harus masuk ke thread yang sama** (setelah penerimaan aktif).
4. Dari `/mail/inbox` balas lagi; di Gmail keduanya harus tampil satu percakapan.
5. Cek Resend → Webhooks → *Attempts*: status 200. Jika 400: secret salah; 500/503: lihat log Vercel (`[mail] …`).

### 6. Jalankan lokal
`cp .env.example .env.local`, isi nilai, `npm run dev`. Webhook butuh URL publik (mis. tunnel); tanpa itu, gunakan tes di bawah.

## DNS: aman untuk email forwarding yang sedang berjalan

**Prinsip: jangan mengubah/menghapus MX yang ada sampai alur baru terbukti jalan.** Dua jalur:

### Jalur A (disarankan, nol risiko untuk email yang berjalan)
Pakai **subdomain khusus penerimaan**, mis. `inbound.asuransibatam.com`, dan biarkan MX root tetap milik layanan forwarding.
1. Di Resend aktifkan receiving untuk domain/subdomain tersebut; tambahkan **MX** yang ditampilkan dashboard **pada subdomain itu saja** (tidak menyentuh MX root).
2. Di layanan forwarding saat ini, tambahkan tujuan baru untuk `info@asuransibatam.com` → `info@inbound.asuransibatam.com`, **dengan tetap mempertahankan tujuan lama** bila layanan mendukung banyak tujuan. Jika hanya satu tujuan, uji dulu dengan alias lain (mis. `tes@`) sebelum memindahkan `info@`.
3. Balasan keluar tetap dikirim dari `info@asuransibatam.com` via Resend; saat pelanggan membalas, email melewati forwarding → webhook → thread yang sama.
- Catatan: forwarder dapat membuat SPF gagal; UI hanya memperingatkan bila DMARC gagal (atau SPF **dan** DKIM gagal). Sebagian forwarder mengubah header `To`; threading tidak terpengaruh karena memakai Message-ID.

### Jalur B (migrasi terencana: MX root ke Resend)
Lakukan hanya setelah Jalur A teruji dan Anda memutuskan berhenti memakai forwarding.
1. Inventaris **semua alias** yang sekarang diforward (info@, dst.). Setelah cutover, **semua** alamat `@asuransibatam.com` masuk ke webhook dan tampil di satu inbox ini; alias lain tidak lagi diteruskan ke Gmail/HP Anda.
2. Turunkan TTL MX lama menjadi 300 detik, tunggu TTL lama habis.
3. Tambahkan MX Resend (nilai dari dashboard) **tanpa menghapus** MX lama; beri prioritas sesuai petunjuk dashboard. Kirim email uji dan pastikan masuk.
4. Hapus MX lama **terakhir**. Catat nilai MX lama (rollback = pasang kembali; dengan TTL 300 detik pulih dalam menit).
5. Pantau Resend → Webhooks dan inbox 48 jam.

Record pengiriman Resend (DKIM/SPF) tidak bentrok dengan forwarding, tetapi bila domain sudah punya record SPF (`TXT v=spf1 …`) di nama yang sama dengan yang diminta Resend, **gabungkan** menjadi satu record SPF — domain tidak boleh punya dua.

## Keamanan (ringkas)
- Semua `/api/mail/*` (kecuali login & webhook) menolak tanpa sesi (401); `/mail/inbox` mengalihkan ke login.
- Webhook: tanda tangan Svix atas body mentah; timestamp kedaluwarsa ditolak; idempotensi `svix-id`.
- CSRF: cookie `SameSite=Strict` + wajib header `Origin` yang sama untuk POST/PATCH/DELETE.
- Pembatas login: 8 kegagalan / 15 menit per IP (disimpan di database, hanya hash IP).
- HTML email: sanitasi allowlist di server (tanpa `<script>/<style>/<form>/<iframe>`, hanya skema http/https/mailto/tel, gambar eksternal diblokir sampai diizinkan) → ditampilkan di iframe `sandbox` tanpa script + CSP.
- Lampiran keluar: allowlist ekstensi + cek magic bytes + batas ukuran. Lampiran masuk tersimpan di bucket privat dan diunduh lewat `/api/mail/attachments/[id]` (login wajib → URL bertanda tangan 60 detik, selalu *attachment*).
- Respons API & halaman `/mail*`: `Cache-Control: no-store`, `noindex`, `X-Frame-Options: DENY`; `/mail` di-`Disallow` di `robots.txt`.

## Batasan yang perlu Anda ketahui
- **Lampiran keluar maks. 4 MB total (5 file)**: batas body request fungsi serverless Vercel (~4,5 MB). Lampiran **masuk** hingga 20 MB/file (40 MB/email); yang lebih besar hanya dicatat metadatanya. Untuk lampiran keluar lebih besar perlu unggah langsung ke Storage (belum dibuat).
- Tidak ada realtime: daftar disegarkan tiap 45 detik saat tab terlihat (atau tombol muat ulang).
- Gambar tertanam (`data:`) besar bisa dilewati bila HTML > ±1,2 MB agar respons tidak melewati batas Vercel; lampirannya tetap bisa diunduh.
- Trash tidak dihapus otomatis; gunakan *Hapus permanen*.
- Satu admin, satu kotak surat (`MAIL_FROM_ADDRESS`). Tabel `email_accounts` sudah menyiapkan multi-akun, UI-nya belum.
- Status pengiriman (bounce/delivered) belum dilacak; hanya event `email.received` yang diproses.
- Resend juga punya produk *Inboxes* bawaan; proyek ini sengaja memakai Receiving + database sendiri sesuai kebutuhan threading di Supabase.

## Tes
```bash
npm run mail:test                      # unit (threading, sanitasi XSS, auth/sesi, lampiran)
# Integrasi + E2E butuh PostgreSQL lokal & binary PostgREST (tanpa kredensial nyata; Resend & Storage di-stub):
MAIL_IT=1 MAIL_E2E=1 POSTGREST_BIN=/path/postgrest npm run mail:test   # E2E: jalankan `next build` dulu
```
Tes di atas **tidak** menggantikan uji dengan Resend/DNS asli (langkah 5).
