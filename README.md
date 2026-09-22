# Paket: Freight Forwarders Liability (FFL) untuk asuransibatam.com

Repo: https://github.com/Panjulklaten/Asuransi-Batam (branch dasar: `main`)

## Isi paket

- `0001-feat-freight-forwarders-liability-ffl.patch` — git patch siap pakai (17 file, 1177 baris).
- `files/` — salinan lengkap ke-17 file (2 file baru produk, 3 artikel silo baru, 12 file yang diedit), disusun sesuai struktur folder repo, untuk copy-paste manual jika patch gagal apply.

## Cara pakai (disarankan): apply patch

```bash
git clone https://github.com/Panjulklaten/Asuransi-Batam.git
cd Asuransi-Batam
git checkout -b feat/ffl-liability-cluster
git am 0001-feat-freight-forwarders-liability-ffl.patch
npm install
npm run build   # verifikasi build lokal (butuh akses ke fonts.googleapis.com)
git push origin feat/ffl-liability-cluster
```

Lalu buka Pull Request dari branch `feat/ffl-liability-cluster` ke `main` di GitHub.

Jika `git am` gagal karena `main` di lokal Anda sudah berbeda dari saat patch dibuat, pakai:
```bash
git apply --3way 0001-feat-freight-forwarders-liability-ffl.patch
```

## Cara pakai (alternatif): copy manual

Salin isi folder `files/src/...` ke lokasi yang sama persis di repo Anda (timpa file yang sudah ada, tambahkan file yang belum ada), lalu commit seperti biasa.

## Ringkasan perubahan

### Halaman baru
- `src/app/asuransi-liability/freight-forwarders-liability/page.tsx` — produk FFL (ID), sub-halaman baru di cluster Asuransi Liability.
- `src/app/en/liability-insurance/freight-forwarders-liability/page.tsx` — mirror EN (hreflang alternate).
- `src/app/blog/asuransi-freight-forwarders-liability-batam-panduan-lengkap/page.tsx` — artikel silo: panduan lengkap FFL (FFL vs marine cargo, siapa wajib punya, dokumen, premi).
- `src/app/blog/cara-klaim-asuransi-ffl-freight-forwarder-batam/page.tsx` — artikel silo: panduan klaim FFL step-by-step.
- `src/app/blog/kawasan-logistik-pergudangan-batam-batu-ampar-sekupang-tanjung-uncang/page.tsx` — artikel silo: konten muatan lokal Batu Ampar, Sekupang, Tanjung Uncang.

### Halaman diedit
- `src/app/asuransi-liability/page.tsx` & `en/liability-insurance/page.tsx` — kartu produk FFL ditambahkan ke grid pillar (grid diubah dari 2 ke 3 kolom).
- `src/app/asuransi-liability/public-liability/page.tsx` & `en/.../public-liability/page.tsx` — cross-link FFL di "Sering Dibutuhkan Bersamaan" (grid 3→4 kolom).
- `src/app/blog/panduan-ob23-impor-sementara-batam/page.tsx`, `ob23-vs-kite-batam/page.tsx`, `asuransi-pengiriman-batam-singapore/page.tsx` — internal link dua arah ke konten FFL baru.
- `src/app/blog/page.tsx` — 3 entri baru di listing blog kategori Liability.
- `src/app/sitemap.ts` — 5 URL baru (2 produk ID/EN + 3 artikel).
- `src/lib/seo.ts` — mapping OG image untuk 3 slug artikel baru (kategori `liability`).
- `src/components/Navbar.tsx` — mega-menu ID/EN + URL_MAP toggle bahasa.
- `src/components/Footer.tsx` — link footer ID/EN.

## Struktur cluster (jawaban pertanyaan awal Anda)

FFL **tidak dibuat sebagai cluster baru** — ditambahkan sebagai sub-pillar/anak halaman di cluster **Asuransi Liability** yang sudah ada (sejajar dengan `public-liability` dan `asuransi-limbah-b3`), karena FFL secara topikal adalah produk liability, bukan kategori produk baru.

## Verifikasi yang sudah dijalankan

- ✅ `npx tsc --noEmit` — lulus tanpa error di seluruh proyek.
- ⚠️ `npm run build` — gagal di sandbox saya HANYA karena `next/font` tidak bisa fetch `fonts.googleapis.com` (domain itu tidak ada di allowlist jaringan sandbox saya). Ini bukan error dari kode yang saya tulis — jalankan `npm run build` di lingkungan Anda sendiri (dengan akses internet normal) untuk verifikasi akhir sebelum merge.
- Belum sempat menjalankan `next lint` (repo tidak punya `eslint.config.js` untuk ESLint v9 di sandbox saya) — jalankan `npm run lint` di lokal Anda juga jika biasanya dipakai sebagai gate CI.

## Catatan konten

- Semua klaim regulasi/nominal dalam artikel ditulis sebagai simulasi/ilustrasi umum (bukan kutipan pasal spesifik yang belum saya verifikasi), agar aman secara hukum. Silakan sesuaikan angka premi & simulasi klaim dengan data aktual Anda sebelum publish.
- EEAT (byline "Rio", schema `Article`/`FAQPage`/`Service`, breadcrumb) otomatis tercakup lewat komponen `ProductPageLayout` dan `ArticleLayout` yang sudah ada di repo — tidak perlu penyesuaian tambahan.
