// app/blog/premi-asuransi-kapal-batam-2026/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import {
  Ship,
  Anchor,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  FileText,
  HelpCircle,
  TrendingUp,
  Calculator,
  ClipboardList,
  BadgePercent,
  ArrowRight,
  Info,
} from "lucide-react";

/* ─────────────────────────────────────────────
   METADATA & SEO
───────────────────────────────────────────── */
export const metadata: Metadata = generateSEO({
  title:
    "Berapa Premi Asuransi Kapal di Batam? Panduan Lengkap Tahun 2026",
  description:
    "Panduan lengkap premi asuransi kapal di Batam 2026: kisaran tarif Marine Hull, P&I, faktor penentu premi, simulasi perhitungan, dan tips menekan biaya. Dari praktisi 8+ tahun pengalaman.",
  canonical: "/blog/premi-asuransi-kapal-batam-2026",
  // Catatan: versi EN belum dibuat. Jangan tambahkan `languages.en` di sini
  // sampai halaman /en/blog/ship-insurance-premium-batam-2026 benar-benar ada,
  // karena hreflang yang nunjuk ke halaman 404 membuat Google mengabaikan
  // seluruh sinyal hreflang di halaman ini.
});

/* ─────────────────────────────────────────────
   SCHEMA DATA
───────────────────────────────────────────── */
const breadcrumbSchema = schemaBreadcrumb([
  { name: "Beranda", url: "https://asuransibatam.com/" },
  { name: "Blog", url: "https://asuransibatam.com/blog" },
  {
    name: "Premi Asuransi Kapal Batam 2026",
    url: "https://asuransibatam.com/blog/premi-asuransi-kapal-batam-2026",
  },
]);

const faqData = [
  {
    q: "Berapa premi Marine Hull Insurance untuk tongkang di Batam tahun 2026?",
    a: "Untuk tongkang yang beroperasi di perairan Batam dan sekitarnya, premi Marine Hull Insurance umumnya berkisar 0,75% – 1,5% dari nilai kapal per tahun. Tongkang senilai Rp 15 miliar akan dikenakan premi sekitar Rp 112 juta – Rp 225 juta per tahun. Tarif final bergantung pada usia kapal, rute operasi, rekam jejak klaim, dan kondisi lambung berdasarkan hasil survei.",
  },
  {
    q: "Apa saja faktor yang paling berpengaruh terhadap besar kecilnya premi asuransi kapal?",
    a: "Ada lima faktor utama: (1) Nilai kapal atau Insured Value — semakin tinggi nilai, semakin besar premi nominal meskipun persentase bisa lebih kecil; (2) Usia kapal — kapal di atas 15 tahun biasanya dikenakan loading premi 10–30%; (3) Jenis dan rute operasi — rute internasional atau perairan berisiko tinggi seperti Selat Malaka akan memengaruhi tarif; (4) Rekam jejak klaim — pemilik kapal dengan riwayat klaim bersih selama 3–5 tahun berhak mendapat diskon No Claim Bonus; (5) Kondisi fisik kapal berdasarkan survey report.",
  },
  {
    q: "Apakah ada diskon premi untuk pemilik armada dengan banyak kapal di Batam?",
    a: "Ya, pemilik armada dengan 3 kapal atau lebih bisa menegosiasikan fleet discount sebesar 5–15% dari tarif normal. Asuransi berbasis fleet juga memungkinkan averaging risk — kapal yang lebih baru dan berisiko rendah menyeimbangkan tarif kapal yang lebih tua dalam satu polis. Hubungi konsultan untuk mendapatkan struktur fleet policy yang optimal.",
  },
  {
    q: "Bagaimana cara menghitung premi asuransi kapal secara mandiri?",
    a: "Rumus dasarnya: Premi = Nilai Pertanggungan × Rate Premi. Contoh: kapal senilai Rp 20 miliar dengan rate 1% = premi Rp 200 juta/tahun sebelum deductible dan loading. Namun rate riil ditentukan oleh underwriter setelah melihat survey report, bukan hanya nilai kapal. Kalkulator di artikel ini bisa membantu estimasi awal.",
  },
  {
    q: "Apakah premi asuransi kapal bisa diklaim sebagai biaya operasional perusahaan?",
    a: "Ya. Premi asuransi kapal yang dibayarkan oleh perusahaan pelayaran atau pemilik armada komersial dapat dikategorikan sebagai biaya operasional yang mengurangi penghasilan kena pajak (deductible expense) sesuai ketentuan pajak penghasilan badan di Indonesia. Konsultasikan dengan akuntan atau konsultan pajak Anda untuk dokumentasi yang tepat.",
  },
  {
    q: "Berapa lama proses penerbitan polis asuransi kapal setelah survei selesai?",
    a: "Setelah survei kondisi kapal selesai dan dokumen lengkap diterima, polis biasanya diterbitkan dalam 3–7 hari kerja untuk kapal lokal. Untuk kapal dengan nilai di atas Rp 50 miliar atau rute internasional, proses underwriting bisa memakan waktu 10–14 hari karena memerlukan persetujuan dari lead insurer atau reasuransi.",
  },
];

const faqSchema = schemaFAQ(faqData);

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Berapa Premi Asuransi Kapal di Batam? Panduan Lengkap Tahun 2026",
  description:
    "Panduan lengkap premi asuransi kapal di Batam 2026 dari praktisi berpengalaman 8+ tahun.",
  image:
    "https://asuransibatam.com/images/potoartikel/cek-mesin-kapal-batam.webp",
  datePublished: "2026-01-15",
  dateModified: "2026-06-01",
  author: {
    "@type": "Person",
    name: "Rio Mardiansyah",
    jobTitle: "Praktisi Asuransi",
    url: "https://asuransibatam.com/tentang-kami",
  },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Batam",
    url: "https://asuransibatam.com",
  },
};

/* ─────────────────────────────────────────────
   DATA TABEL TARIF
───────────────────────────────────────────── */
const tarifData = [
  {
    jenis: "Marine Hull — Tongkang / Barge",
    rateMin: "0,75%",
    rateMax: "1,50%",
    contohNilai: "Rp 15 M",
    contohPremi: "Rp 112 – 225 jt/thn",
    note: "Bergantung rute & usia",
  },
  {
    jenis: "Marine Hull — Kapal Tunda (Tugboat)",
    rateMin: "0,80%",
    rateMax: "1,75%",
    contohNilai: "Rp 10 M",
    contohPremi: "Rp 80 – 175 jt/thn",
    note: "Risiko tinggi, manuver sering",
  },
  {
    jenis: "Marine Hull — Kapal Ferry / Penumpang",
    rateMin: "0,50%",
    rateMax: "1,20%",
    contohNilai: "Rp 25 M",
    contohPremi: "Rp 125 – 300 jt/thn",
    note: "Rute reguler = rate lebih stabil",
  },
  {
    jenis: "Marine Hull — Kapal Kargo Umum",
    rateMin: "0,60%",
    rateMax: "1,30%",
    contohNilai: "Rp 30 M",
    contohPremi: "Rp 180 – 390 jt/thn",
    note: "Bergantung muatan & rute",
  },
  {
    jenis: "P&I Insurance (per GT/tahun)",
    rateMin: "USD 3",
    rateMax: "USD 8",
    contohNilai: "1.000 GT",
    contohPremi: "USD 3.000 – 8.000/thn",
    note: "Wajib untuk rute internasional",
  },
  {
    jenis: "War Risk (add-on)",
    rateMin: "0,05%",
    rateMax: "0,15%",
    contohNilai: "Rp 15 M",
    contohPremi: "Rp 7,5 – 22,5 jt/thn",
    note: "Selat Malaka termasuk area JWLA",
  },
];

const faktorPremi = [
  {
    icon: Ship,
    title: "Usia & Kondisi Kapal",
    desc: "Kapal berusia di atas 15 tahun umumnya dikenakan loading premi 10–30%. Survey report yang baik bisa menegosiasikan loading ini turun. Kapal yang rutin docking dan memiliki catatan perawatan lengkap mendapat penilaian lebih baik dari underwriter.",
    impact: "Pengaruh: Sangat Tinggi",
    color: "red",
  },
  {
    icon: TrendingUp,
    title: "Nilai Pertanggungan (Insured Value)",
    desc: "Nilai pertanggungan idealnya mencerminkan nilai pasar wajar kapal, bukan harga beli atau nilai buku akuntansi. Under-insurance akan merugikan saat klaim karena penanggung menerapkan prinsip Average Rule — klaim dibayar proporsional sesuai rasio pertanggungan.",
    impact: "Pengaruh: Tinggi",
    color: "orange",
  },
  {
    icon: Anchor,
    title: "Rute & Area Navigasi",
    desc: "Kapal yang beroperasi di rute domestik Batam–Kalimantan memiliki profil risiko berbeda dengan kapal yang masuk perairan internasional Singapura–Malaysia. Area yang masuk daftar JWLA (Joint War Losses Agreement) seperti Selat Malaka otomatis dikenakan War Risk surcharge.",
    impact: "Pengaruh: Tinggi",
    color: "orange",
  },
  {
    icon: ClipboardList,
    title: "Rekam Jejak Klaim (Claims History)",
    desc: "Pemilik kapal dengan track record klaim bersih selama 3 tahun berturut-turut berhak atas No Claim Bonus (NCB) sebesar 5–15% dari premi. Sebaliknya, riwayat klaim yang sering — apalagi total loss — akan menaikkan tarif secara signifikan atau bahkan membuat kapal sulit diasuransikan.",
    impact: "Pengaruh: Sangat Tinggi",
    color: "red",
  },
  {
    icon: BadgePercent,
    title: "Deductible (Risiko Sendiri)",
    desc: "Semakin besar deductible yang bersedia ditanggung sendiri oleh pemilik kapal, semakin kecil premi yang dibayarkan. Ini adalah cara efektif menekan biaya premi untuk pemilik armada besar yang memiliki cash flow kuat untuk menanggung klaim kecil secara mandiri.",
    impact: "Pengaruh: Menengah",
    color: "blue",
  },
  {
    icon: Calculator,
    title: "Jumlah Unit dalam Satu Polis (Fleet)",
    desc: "Pemilik 3 kapal atau lebih bisa mengajukan fleet policy yang memungkinkan averaging risk antar unit. Kapal baru yang berisiko rendah 'mensubsidi' tarif kapal tua dalam portofolio yang sama, menghasilkan blended rate yang lebih kompetitif dibanding mengasuransikan satu per satu.",
    impact: "Pengaruh: Menengah",
    color: "blue",
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
  red:    { bg: "bg-red-50",    border: "border-red-200",    icon: "text-red-600",    badge: "bg-red-100 text-red-700 border-red-200" },
  orange: { bg: "bg-orange-50", border: "border-orange-200", icon: "text-orange-600", badge: "bg-orange-100 text-orange-700 border-orange-200" },
  blue:   { bg: "bg-blue-50",   border: "border-blue-100",   icon: "text-[#1a4fa0]",  badge: "bg-[#1a4fa0]/10 text-[#1a4fa0] border-[#1a4fa0]/20" },
};

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function ArticlePremiAsuransiKapal() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [articleSchema, faqSchema, breadcrumbSchema],
  };

  return (
    <ArticleLayout
      cluster="marine"
      title="Berapa Premi Asuransi Kapal di Batam? Panduan Lengkap Tahun 2026"
      description="Kisaran tarif, faktor penentu, simulasi perhitungan, dan tips menekan biaya premi — disusun dari pengalaman nyata mendampingi pemilik armada di Batam selama 8+ tahun."
      date="15 Januari 2026"
      category="Asuransi Marine"
      readTime="14 menit"
      breadcrumbs={[{ label: "Premi Asuransi Kapal Batam 2026", href: "/blog/premi-asuransi-kapal-batam-2026" }]}
      schema={combinedSchema}
    >

      {/* ── INTRO ── */}
      <p>
        Pertanyaan ini adalah yang paling sering saya terima dari pemilik kapal
        dan operator armada di Batam: <strong>&ldquo;Pak Rio, kira-kira premi asuransi
        kapal saya berapa ya?&rdquo;</strong> Pertanyaan sederhana, tapi jawabannya
        tidak bisa disamakan antara satu kapal dengan kapal lainnya.
      </p>
      <p>
        Berbeda dengan asuransi kendaraan bermotor yang tarifnya relatif
        standar dan terregulasi OJK secara ketat, premi asuransi kapal —
        khususnya Marine Hull Insurance — bersifat <em>negotiated rate</em>.
        Artinya, tarif ditentukan melalui proses underwriting yang
        mempertimbangkan banyak variabel: usia kapal, kondisi fisik, rute
        operasi, rekam jejak klaim, hingga kondisi pasar reasuransi global.
      </p>
      <p>
        Dalam panduan ini, saya akan membuka angka-angka yang biasa saya
        gunakan saat bekerja dengan klien di Batam — mulai dari kisaran tarif
        per jenis kapal, faktor-faktor yang menaikkan atau menurunkan premi,
        simulasi perhitungan nyata, hingga strategi legal yang bisa Anda
        gunakan untuk menegosiasikan premi lebih efisien.
      </p>

      {/* ── NOTICE BOX ── */}
      <div className="not-prose my-8 flex gap-4 p-5 bg-blue-50 rounded-2xl border border-blue-200">
        <Info className="w-5 h-5 text-[#1a4fa0] flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-[#0a1628] mb-1">Catatan Transparansi</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Angka-angka dalam artikel ini adalah <strong>estimasi kisaran pasar</strong> berdasarkan
            pengalaman lapangan di Batam per 2026. Tarif final Anda akan ditetapkan
            oleh underwriter setelah survei dan analisis risiko. Jadikan angka ini
            sebagai acuan awal, bukan angka pasti.
          </p>
        </div>
      </div>

      {/* ── FOTO SURVEI ── */}
      <div className="not-prose my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src="/images/potoartikel/cek-mesin-kapal-batam.webp"
            alt="Rio Mardiansyah melakukan pengecekan mesin kapal saat proses klaim asuransi di Batam"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <div className="bg-gray-50 px-5 py-3 border-t border-gray-200 flex items-start gap-3">
          <FileText className="w-4 h-4 text-[#c9a84c] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong className="text-gray-800">Pengecekan mesin kapal saat proses klaim</strong> —
            Rio Mardiansyah melakukan inspeksi langsung kondisi mesin kapal di Batam
            sebagai bagian dari proses pendampingan klaim. Dokumentasi teknis seperti
            ini krusial untuk memastikan nilai klaim yang adil dan akurat dari perusahaan asuransi.
          </p>
        </div>
      </div>

      {/* ── MENGAPA PREMI KAPAL TIDAK SAMA ── */}
      <h2>Mengapa Premi Asuransi Kapal Tidak Bisa Disamaratakan?</h2>
      <p>
        Saat klien pertama kali menghubungi saya dan bertanya soal premi,
        saya selalu jelaskan analogi ini: meminta harga premi asuransi kapal
        tanpa data apapun seperti meminta harga rumah sakit tanpa tahu penyakit
        pasiennya. Kondisi setiap kapal, profil risiko, dan kebutuhan
        perlindungannya berbeda-beda.
      </p>
      <p>
        Di Batam, saya menangani armada yang beragam — dari tongkang batu bara
        berumur 20 tahun yang beroperasi di jalur Kalimantan, hingga kapal
        supply vessel baru yang melayani platform migas di Laut Natuna. Premi
        keduanya bisa berbeda hingga 3–4 kali lipat meskipun nilainya sama,
        semata karena profil risiko yang berbeda.
      </p>
      <p>
        Inilah mengapa proses survey kondisi kapal sebelum penutupan polis
        bukan formalitas — ini adalah dasar dari seluruh perhitungan premi.
      </p>

      {/* ── TABEL KISARAN TARIF ── */}
      <h2>Kisaran Tarif Premi Asuransi Kapal di Batam Tahun 2026</h2>
      <p>
        Berikut tabel referensi tarif yang saya gunakan sebagai acuan awal
        dalam diskusi dengan klien. Angka ini mencerminkan kondisi pasar
        asuransi marine di Indonesia per 2026:
      </p>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm min-w-[700px]">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Jenis Polis & Kapal</th>
              <th className="text-center px-4 py-4 font-semibold">Rate Min</th>
              <th className="text-center px-4 py-4 font-semibold">Rate Max</th>
              <th className="text-left px-4 py-4 font-semibold">Contoh Nilai</th>
              <th className="text-left px-4 py-4 font-semibold rounded-tr-2xl">Estimasi Premi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tarifData.map((row, i) => (
              <tr key={row.jenis} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-5 py-4">
                  <p className="font-medium text-[#0a1628]">{row.jenis}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{row.note}</p>
                </td>
                <td className="text-center px-4 py-4 font-mono font-semibold text-green-600">{row.rateMin}</td>
                <td className="text-center px-4 py-4 font-mono font-semibold text-orange-600">{row.rateMax}</td>
                <td className="px-4 py-4 text-gray-700">{row.contohNilai}</td>
                <td className="px-4 py-4 font-medium text-[#0a1628]">{row.contohPremi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Perlu dicatat: tabel di atas adalah <strong>kisaran pasar umum</strong>.
        Tarif riil untuk kapal Anda bisa berada di luar kisaran ini tergantung
        hasil underwriting. Kapal dengan kondisi prima dan rekam jejak klaim
        bersih bisa mendapat tarif lebih rendah dari batas minimum tabel;
        sebaliknya kapal tua dengan sejarah klaim buruk bisa melebihi batas atas.
      </p>

      {/* ── 6 FAKTOR PENENTU PREMI ── */}
      <h2>6 Faktor Utama yang Menentukan Premi Asuransi Kapal Anda</h2>
      <p>
        Setelah lebih dari satu dekade mendampingi pemilik kapal di Batam dalam
        proses penutupan polis, inilah enam variabel yang paling sering menjadi
        titik negosiasi antara pemilik kapal dan underwriter:
      </p>

      <div className="not-prose space-y-5 my-8">
        {faktorPremi.map((item, index) => {
          const colors = colorMap[item.color];
          const Icon = item.icon;
          return (
            <div key={item.title} className={`rounded-2xl border ${colors.border} overflow-hidden`}>
              <div className={`${colors.bg} px-6 py-4 flex items-center gap-4`}>
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <Icon className={`w-5 h-5 ${colors.icon}`} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Faktor #{index + 1}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${colors.badge}`}>
                      {item.impact}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-[#0a1628] text-base mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="px-6 py-4 bg-white">
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── SIMULASI PERHITUNGAN ── */}
      <h2>Simulasi Perhitungan Premi: 3 Skenario Nyata di Batam</h2>
      <p>
        Agar lebih konkret, berikut tiga skenario perhitungan premi berdasarkan
        tipe operasi yang umum saya temui di lapangan Batam:
      </p>

      {/* Skenario 1 */}
      <div className="not-prose my-8 rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-[#0a1628] px-6 py-4 flex items-center gap-3">
          <Ship className="w-5 h-5 text-[#c9a84c]" />
          <h4 className="font-display font-bold text-white text-base">
            Skenario A — Tongkang Batu Bara 7.500 DWT, Usia 8 Tahun
          </h4>
        </div>
        <div className="bg-white px-6 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {[
              { label: "Nilai Pertanggungan", value: "Rp 18.000.000.000" },
              { label: "Usia Kapal", value: "8 tahun (loading 10%)" },
              { label: "Rute Operasi", value: "Kalimantan – Batam (domestik)" },
              { label: "Rekam Klaim 3 Tahun", value: "Bersih (NCB 10%)" },
              { label: "Base Rate", value: "1,00%" },
              { label: "Deductible", value: "Rp 50 juta per klaim" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between gap-2 text-sm py-2 border-b border-gray-100">
                <span className="text-gray-500">{item.label}</span>
                <span className="font-semibold text-[#0a1628] text-right">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-xl px-5 py-4">
            <p className="text-sm text-gray-600 mb-1">Perhitungan:</p>
            <p className="text-sm text-gray-700">
              Rp 18 M × 1,00% = <strong>Rp 180 juta</strong> (base premi)<br />
              + Loading usia 10% = <strong>+Rp 18 juta</strong><br />
              − NCB 10% = <strong>−Rp 19,8 juta</strong>
            </p>
            <p className="text-base font-bold text-[#0a1628] mt-2 pt-2 border-t border-[#c9a84c]/20">
              Estimasi Premi Final: <span className="text-[#c9a84c]">Rp 178.200.000 / tahun</span>
            </p>
          </div>
        </div>
      </div>

      {/* Skenario 2 */}
      <div className="not-prose my-8 rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-[#1a4fa0] px-6 py-4 flex items-center gap-3">
          <Anchor className="w-5 h-5 text-[#c9a84c]" />
          <h4 className="font-display font-bold text-white text-base">
            Skenario B — Tugboat 800 HP, Usia 18 Tahun, Rute Internasional
          </h4>
        </div>
        <div className="bg-white px-6 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {[
              { label: "Nilai Pertanggungan", value: "Rp 8.000.000.000" },
              { label: "Usia Kapal", value: "18 tahun (loading 25%)" },
              { label: "Rute Operasi", value: "Batam – Singapura (internasional)" },
              { label: "Rekam Klaim 3 Tahun", value: "1 klaim kecil (no NCB)" },
              { label: "Base Rate", value: "1,50%" },
              { label: "War Risk Add-on", value: "0,10% (JWLA area)" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between gap-2 text-sm py-2 border-b border-gray-100">
                <span className="text-gray-500">{item.label}</span>
                <span className="font-semibold text-[#0a1628] text-right">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-xl px-5 py-4">
            <p className="text-sm text-gray-600 mb-1">Perhitungan:</p>
            <p className="text-sm text-gray-700">
              Rp 8 M × 1,50% = <strong>Rp 120 juta</strong> (base premi)<br />
              + Loading usia 25% = <strong>+Rp 30 juta</strong><br />
              + War Risk (Rp 8 M × 0,10%) = <strong>+Rp 8 juta</strong>
            </p>
            <p className="text-base font-bold text-[#0a1628] mt-2 pt-2 border-t border-[#c9a84c]/20">
              Estimasi Premi Final: <span className="text-[#c9a84c]">Rp 158.000.000 / tahun</span>
            </p>
          </div>
        </div>
      </div>

      {/* Skenario 3 */}
      <div className="not-prose my-8 rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-teal-700 px-6 py-4 flex items-center gap-3">
          <ClipboardList className="w-5 h-5 text-white" />
          <h4 className="font-display font-bold text-white text-base">
            Skenario C — Fleet 4 Kapal Ferry, Usia Rata-rata 5 Tahun
          </h4>
        </div>
        <div className="bg-white px-6 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {[
              { label: "Total Nilai Fleet", value: "Rp 60.000.000.000" },
              { label: "Rata-rata Usia", value: "5 tahun (no loading)" },
              { label: "Rute Operasi", value: "Batam – Bintan – Tanjung Pinang" },
              { label: "Fleet Discount", value: "10% (4 unit)" },
              { label: "Base Rate Blended", value: "0,75%" },
              { label: "NCB Rata-rata", value: "5% (2 dari 4 kapal bersih)" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between gap-2 text-sm py-2 border-b border-gray-100">
                <span className="text-gray-500">{item.label}</span>
                <span className="font-semibold text-[#0a1628] text-right">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-xl px-5 py-4">
            <p className="text-sm text-gray-600 mb-1">Perhitungan:</p>
            <p className="text-sm text-gray-700">
              Rp 60 M × 0,75% = <strong>Rp 450 juta</strong> (base premi fleet)<br />
              − Fleet Discount 10% = <strong>−Rp 45 juta</strong><br />
              − NCB 5% = <strong>−Rp 22,5 juta</strong>
            </p>
            <p className="text-base font-bold text-[#0a1628] mt-2 pt-2 border-t border-[#c9a84c]/20">
              Estimasi Premi Final: <span className="text-[#c9a84c]">Rp 382.500.000 / tahun</span>
              <span className="text-sm font-normal text-gray-500 ml-2">(≈ Rp 95,6 jt/kapal)</span>
            </p>
          </div>
        </div>
      </div>

      {/* ── STUDI KASUS KLAIM ── */}
      <h2>Studi Kasus: Saat Klaim Mesin Kapal Menjadi Pelajaran Berharga</h2>
      <p>
        Foto yang Anda lihat di bagian atas artikel ini diambil saat saya
        mendampingi proses klaim kerusakan mesin kapal milik klien di Batam.
        Kasus ini memberi pelajaran penting tentang hubungan antara premi,
        survey, dan klaim.
      </p>

      <div className="not-prose my-8 rounded-2xl border-l-4 border-[#c9a84c] bg-amber-50 px-6 py-6">
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-5 h-5 text-[#c9a84c]" />
          <span className="text-sm font-bold text-[#c9a84c] uppercase tracking-wider">
            Studi Kasus — Dianonimkan
          </span>
        </div>
        <h4 className="font-display font-bold text-[#0a1628] text-lg mb-3">
          Kerusakan Mesin Induk Kapal Supply Vessel, Batam
        </h4>
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <p>
            <strong>Situasi:</strong> Klien memiliki kapal supply vessel berusia 12 tahun
            dengan nilai pertanggungan Rp 22 miliar. Premi yang dibayarkan sekitar
            Rp 250 juta per tahun — angka yang sempat dipertanyakan klien karena
            dianggap terlalu mahal. Mesin induk mengalami kerusakan mendadak di
            perairan Batam, diduga akibat kontaminasi bahan bakar.
          </p>
          <p>
            <strong>Proses klaim:</strong> Saya turun langsung ke lapangan untuk
            mendokumentasikan kondisi mesin, mengkoordinasikan surveyor dari
            perusahaan asuransi, dan memastikan laporan teknis dibuat secara
            akurat. Proses ini memakan waktu 3 minggu karena diperlukan
            expert opinion dari marine engineer independen.
          </p>
          <p>
            <strong>Tantangan:</strong> Perusahaan asuransi sempat mengajukan dalih
            bahwa kerusakan mesin termasuk dalam eksklusi &ldquo;wear and tear&rdquo;
            (keausan normal). Saya berhasil membuktikan melalui analisis sampel
            bahan bakar bahwa kerusakan bersifat sudden and accidental — bukan
            keausan normal — sehingga masuk dalam cakupan polis.
          </p>
          <p>
            <strong>Hasil:</strong> Klaim diterima sebesar <strong>Rp 1,85 miliar</strong>{" "}
            untuk biaya perbaikan mesin dan penggantian komponen. Klien yang
            sempat mempertanyakan premi Rp 250 juta/tahun kini menjadi yang
            paling vokal merekomendasikan asuransi kapal kepada rekan bisnisnya.
          </p>
        </div>
      </div>

      <p>
        Dari kasus ini ada satu pelajaran yang selalu saya sampaikan:{" "}
        <strong>
          premi asuransi bukan biaya — ini adalah harga dari ketenangan pikiran
          dan perlindungan aset bernilai miliaran rupiah.
        </strong>{" "}
        Klien yang membayar Rp 250 juta per tahun mendapatkan kembali Rp 1,85
        miliar dalam satu klaim. ROI yang tidak mungkin ditandingi instrumen
        investasi apapun.
      </p>

      {/* ── TIPS MENEKAN PREMI ── */}
      <h2>5 Strategi Legal Menekan Premi Asuransi Kapal Tanpa Mengurangi Perlindungan</h2>
      <p>
        Menekan premi bukan berarti mengurangi perlindungan. Berikut strategi
        yang saya rekomendasikan kepada klien armada di Batam:
      </p>

      <div className="not-prose space-y-4 my-8">
        {[
          {
            no: "01",
            title: "Investasi pada Perawatan & Dokumentasi Kapal",
            desc: "Kapal yang memiliki catatan perawatan lengkap, laporan docking teratur, dan sertifikasi kelas yang valid mendapat penilaian lebih baik dari underwriter. Investasi Rp 50 juta untuk docking dan sertifikasi bisa menghemat Rp 30–60 juta premi per tahun.",
          },
          {
            no: "02",
            title: "Bangun Track Record No Claim Bonus",
            desc: "NCB 3–5 tahun bisa memangkas premi hingga 15%. Untuk klaim kecil di bawah Rp 100 juta, pertimbangkan untuk menanggung sendiri daripada mengajukan klaim dan kehilangan NCB yang nilainya lebih besar dalam jangka panjang.",
          },
          {
            no: "03",
            title: "Bundling Fleet Policy",
            desc: "Jika Anda memiliki lebih dari 2 kapal, selalu ajukan sebagai fleet policy. Fleet discount 5–15% ditambah blended rate bisa menghasilkan penghematan signifikan dibanding mengasuransikan kapal satu per satu ke perusahaan berbeda.",
          },
          {
            no: "04",
            title: "Optimalkan Deductible",
            desc: "Naikkan deductible ke level yang masih nyaman Anda tanggung sendiri — misalnya dari Rp 25 juta ke Rp 75 juta per klaim. Kenaikan deductible ini umumnya menghasilkan pengurangan premi 5–12%. Cocok untuk pemilik armada dengan cash flow kuat.",
          },
          {
            no: "05",
            title: "Gunakan Konsultan Independen saat Renewal",
            desc: "Saat polis akan diperpanjang, jangan langsung setuju dengan angka renewal yang ditawarkan. Gunakan konsultan independen untuk membandingkan penawaran dari minimal 3 perusahaan asuransi. Proses ini seringkali menghasilkan penghematan 10–20% tanpa mengorbankan cakupan.",
          },
        ].map((item) => (
          <div key={item.no} className="flex gap-5 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0a1628] flex items-center justify-center">
              <span className="text-xs font-bold text-[#c9a84c]">{item.no}</span>
            </div>
            <div>
              <h4 className="font-semibold text-[#0a1628] mb-1.5">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── EKSKLUSI ── */}
      <h2>Yang Perlu Diwaspadai: Eksklusi yang Sering Menyebabkan Klaim Ditolak</h2>
      <p>
        Memahami apa yang <em>tidak</em> ditanggung sama pentingnya dengan
        memahami apa yang ditanggung. Berikut eksklusi yang paling sering
        menjadi sumber sengketa klaim di Batam:
      </p>

      <div className="not-prose space-y-3 my-6">
        {[
          {
            title: "Keausan Normal Mesin (Wear & Tear)",
            desc: "Kerusakan mesin yang bersifat gradual akibat penggunaan normal tidak ditanggung. Namun kerusakan mendadak (sudden & accidental) seperti pada studi kasus di atas adalah berbeda — dan di sinilah peran konsultan dalam proses klaim menjadi sangat krusial.",
          },
          {
            title: "Kondisi Tidak Laik Laut (Unseaworthiness)",
            desc: "Jika kapal berlayar dalam kondisi yang diketahui tidak laik laut — misalnya sertifikat kelas kadaluarsa, alat keselamatan tidak lengkap, atau overcrew — penanggung berhak menolak klaim seluruhnya.",
          },
          {
            title: "Operasi di Luar Batas Area yang Disepakati",
            desc: "Polis Marine Hull selalu mencantumkan trading limits (batas area navigasi). Kapal yang berlayar ke luar area ini tanpa endorsement tambahan tidak mendapat perlindungan. Pastikan selalu update polis jika rute berubah.",
          },
          {
            title: "Perang & Pembajakan (tanpa War Risk add-on)",
            desc: "Standard Hull Insurance tidak menanggung risiko ini. Untuk armada yang melewati Selat Malaka dan perairan internasional, War Risk add-on adalah keharusan, bukan pilihan.",
          },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#0a1628] text-sm mb-1">{item.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── INTERNAL LINK BLOCK ── */}
      <div className="not-prose my-10 p-6 rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#1a4fa0] text-white">
        <div className="flex items-center gap-2 mb-4">
          <Ship className="w-5 h-5 text-[#c9a84c]" />
          <span className="text-sm font-bold text-[#c9a84c] uppercase tracking-wider">
            Pelajari Lebih Lanjut
          </span>
        </div>
        <h3 className="font-display font-bold text-xl mb-3">
          Ingin Tahu Jenis Asuransi Kapal yang Tepat untuk Armada Anda?
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mb-5">
          Sebelum menghitung premi, pastikan Anda memahami jenis polis apa yang
          paling sesuai dengan tipe operasi kapal Anda. Baca panduan lengkap
          kami, atau konsultasikan langsung dengan Rio.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/asuransi-marine/marine-hull"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#c9a84c] hover:bg-[#b8973b] text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <Ship className="w-4 h-4" />
            Marine Hull Insurance
          </Link>
          <Link
            href="/asuransi-marine"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl transition-colors border border-white/20"
          >
            <Anchor className="w-4 h-4" />
            Semua Produk Marine
          </Link>
          <Link
            href="/blog/jenis-jenis-asuransi-kapal-armada"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl transition-colors border border-white/20"
          >
            <ArrowRight className="w-4 h-4" />
            Jenis-Jenis Asuransi Kapal
          </Link>
        </div>
      </div>

      {/* ── CHECKLIST DOKUMEN ── */}
      <h2>Dokumen yang Dibutuhkan untuk Pengajuan Polis Asuransi Kapal</h2>
      <p>
        Untuk mempercepat proses underwriting dan mendapatkan penawaran premi
        terbaik, siapkan dokumen-dokumen berikut sebelum menghubungi konsultan:
      </p>

      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          "Sertifikat Kelas Kapal (BKI atau kelas internasional)",
          "Sertifikat Kelaikan Laut (Surat Laut)",
          "Gross Tonnage Certificate",
          "Daftar awak dan sertifikasi pelaut (COC)",
          "Survey Report terbaru (dalam 12 bulan terakhir)",
          "Catatan perawatan dan docking terakhir",
          "Rute dan area operasi yang akan dilindungi",
          "Rekam jejak klaim 3–5 tahun terakhir",
          "Nilai kapal berdasarkan appraisal independen",
          "Dokumen kepemilikan / Grosse Akta Kapal",
        ].map((doc) => (
          <div key={doc} className="flex items-start gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">{doc}</span>
          </div>
        ))}
      </div>

      {/* ── PENUTUP ── */}
      <h2>Kesimpulan: Premi Bukan Angka, Tapi Cerminan Risiko</h2>
      <p>
        Premi asuransi kapal yang &ldquo;mahal&rdquo; atau &ldquo;murah&rdquo; adalah konsep
        relatif. Yang jauh lebih penting adalah apakah premi yang Anda bayarkan
        sebanding dengan perlindungan yang Anda dapatkan — dan apakah nilai
        pertanggungan sudah mencerminkan risiko riil operasi armada Anda di Batam.
      </p>
      <p>
        Dari pengalaman saya, pemilik kapal yang menganggap premi sebagai
        &ldquo;biaya terpaksa&rdquo; cenderung memilih perlindungan minimal dan berakhir
        dengan under-insurance saat klaim. Sebaliknya, pemilik kapal yang memandang
        premi sebagai investasi perlindungan aset akan lebih proaktif memahami
        polis mereka dan mendapat manfaat optimal saat diperlukan.
      </p>
      <p>
        Jika Anda ingin saya bantu menghitung estimasi premi yang lebih akurat
        untuk armada Anda, atau mendampingi proses negosiasi dengan underwriter,
        jangan ragu untuk menghubungi saya langsung.
      </p>

      {/* ── FAQ ── */}
      <h2 id="faq">
        <HelpCircle className="inline-block w-6 h-6 text-[#c9a84c] mr-2 -mt-1" />
        Pertanyaan yang Sering Diajukan tentang Premi Asuransi Kapal
      </h2>
      <div className="not-prose mt-6">
        <FAQAccordion faqs={faqData} />
      </div>

    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><a href="/asuransi-marine/marine-hull" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Hull Insurance Batam</a></li>
              <li><a href="/asuransi-marine/builders-risk" className="text-sm text-blue-700 hover:underline font-medium">→ Builders Risk Galangan Kapal Batam</a></li>
              <li><a href="/asuransi-marine" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Marine Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/jenis-jenis-asuransi-kapal-armada" className="text-sm text-blue-700 hover:underline font-medium">→ Jenis-Jenis Asuransi Kapal</a></li>
              <li><a href="/blog/berapa-premi-asuransi-builders-risk-kapal-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Premi Builders Risk Kapal</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}
