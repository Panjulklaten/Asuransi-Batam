// app/blog/cara-mendapatkan-asuransi-builders-risk-batam/page.tsx
import type { Metadata } from "next";
import QuoteButton from "@/components/quote/QuoteButton";
import { generateSEO } from "@/lib/seo";
import Image from "next/image";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import { AlertTriangle, FileSearch, ShieldCheck, ListChecks, HelpCircle } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Cara Mendapatkan Builders Risk Batam",
  description:
    "Panduan lengkap memilih asuransi builders risk untuk proyek konstruksi & galangan kapal di Batam: studi kasus klaim nyata, kesalahan umum, dan langkah memilih sum insured yang tepat. Konsultasi Rio 0813-7333-6728.",
  canonical:
    "https://asuransibatam.com/blog/cara-mendapatkan-asuransi-builders-risk-batam",
  languages: {
    id: "https://asuransibatam.com/blog/cara-mendapatkan-asuransi-builders-risk-batam",
    en: "https://asuransibatam.com/en/blog/how-to-get-builders-risk-insurance-batam",
  },
});

// Article schema (E-E-A-T: authorship & publisher signal)
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Mendapatkan Asuransi Builders Risk yang Tepat di Batam",
  description:
    "Panduan lengkap memilih asuransi builders risk untuk proyek konstruksi & galangan kapal di Batam, dilengkapi studi kasus klaim nyata.",
  datePublished: "2026-06-23",
  dateModified: "2026-06-23",
  author: {
    "@type": "Person",
    name: "Rio",
    jobTitle: "Praktisi Asuransi",
    telephone: "+6281373336728",
  },
  publisher: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    url: "https://asuransibatam.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://asuransibatam.com/blog/cara-mendapatkan-asuransi-builders-risk-batam",
  },
};

// FAQ schema (wajib sesuai requirement — terpisah dari Article schema)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu asuransi Builders Risk?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Asuransi Builders Risk (Contractors' All Risks / Erection All Risks) adalah polis yang menjamin kerugian fisik pada proyek yang sedang dibangun — termasuk bangunan, instalasi, atau kapal yang sedang dikonstruksi/direparasi di galangan — akibat risiko seperti kebakaran, kebocoran air, kecelakaan kerja, atau bencana alam selama periode konstruksi berlangsung.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah galangan kapal di Batam butuh asuransi Builders Risk?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ya. Selama proses pembangunan atau reparasi kapal di galangan, nilai aset yang sedang dikerjakan biasanya sangat tinggi namun belum bisa diasuransikan dengan polis marine hull standar karena kapal belum jadi atau belum berlayar. Builders Risk mengisi celah perlindungan ini dari awal proyek sampai serah terima.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses klaim Builders Risk biasanya selesai?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Tergantung kompleksitas kerugian dan kelengkapan dokumen, namun secara umum proses survei oleh loss adjuster hingga keputusan klaim memakan waktu beberapa minggu sampai 2-3 bulan untuk kasus dengan nilai kerugian besar yang memerlukan investigasi mendalam.",
      },
    },
    {
      "@type": "Question",
      name: "Apa kesalahan paling umum saat membeli polis Builders Risk?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Kesalahan paling umum adalah menetapkan sum insured terlalu rendah (under-insurance), tidak memasukkan klausul untuk pekerjaan subkontraktor, serta tidak memeriksa pengecualian terkait defect/desain yang sering jadi sumber sengketa klaim.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Builders Risk mencakup pekerjaan subkontraktor?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Tergantung wording polis. Banyak proyek melibatkan beberapa subkontraktor untuk pekerjaan berbeda, dan polis perlu secara eksplisit menyebutkan bahwa seluruh pihak yang bekerja di proyek tersebut tercakup sebagai joint insured atau additional insured, agar tidak ada celah tanggung jawab saat klaim terjadi.",
      },
    },
  ],
};

export default function CaraMendapatkanBuildersRiskPage() {
  return (
    <ArticleLayout
      cluster="marine"
      title="Cara Mendapatkan Asuransi Builders Risk yang Tepat di Batam"
      description="Studi kasus klaim nyata di galangan kapal Batam dan langkah-langkah memilih polis Builders Risk yang benar-benar melindungi proyek Anda."
      date="23 Juni 2026"
      readTime="10 menit"
      category="Marine"
      breadcrumbs={[
        { label: "Asuransi Marine", href: "/asuransi-marine" },
        { label: "Builders Risk", href: "/asuransi-marine/builders-risk" },
        {
          label: "Cara Mendapatkan Asuransi Builders Risk",
          href: "/blog/cara-mendapatkan-asuransi-builders-risk-batam",
        },
      ]}
      schema={articleSchema}
    >
      {/* ArticleLayout hanya menerima satu object schema (Article).
          FAQ schema disuntikkan langsung di sini agar Rich Result FAQ tetap tampil. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">
        Mengenal Risiko Proyek
      </p>
      <h2 className="flex items-center gap-3">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
          <AlertTriangle className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
        </span>
        Mengapa Builders Risk Sering Diabaikan, Padahal Risikonya Besar
      </h2>
      <p>
        Saat sebuah proyek konstruksi atau pekerjaan reparasi kapal dimulai, perhatian biasanya tersedot habis ke jadwal, anggaran, dan teknis pengerjaan. Asuransi sering dianggap urusan administratif yang bisa diurus &quot;belakangan&quot; — sampai sebuah insiden terjadi di tengah proyek dan baru disadari bahwa aset senilai miliaran rupiah belum punya perlindungan yang memadai.
      </p>
      <p>
        <Link href="/asuransi-marine/builders-risk" className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors">Builders Risk Insurance</Link> (di beberapa wording juga disebut Contractors&apos; All Risks atau Erection All Risks) dirancang khusus untuk mengisi celah ini: melindungi proyek yang sedang dibangun, bukan aset yang sudah jadi. Untuk proyek seperti pembangunan gedung, instalasi pabrik, hingga konstruksi dan reparasi kapal di galangan, periode pengerjaan inilah yang justru paling rentan terhadap kerugian besar.
      </p>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Pengalaman Lapangan
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="flex items-center justify-center gap-3 text-center">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
          <FileSearch className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
        </span>
        Studi Kasus: Klaim Builders Risk di Galangan Kapal Batam
      </h2>
      <p>
        Salah satu kasus yang pernah saya tangani langsung melibatkan sebuah galangan kapal di Batam yang sedang mengerjakan proyek reparasi dan modifikasi struktur kapal niaga. Pekerjaan melibatkan proses pengelasan, penggantian pelat lambung, serta instalasi ulang sebagian sistem mekanikal di area dok.
      </p>
      <p>
        Di tengah proses pengerjaan, terjadi insiden kebakaran kecil yang berasal dari aktivitas pengelasan di area yang berdekatan dengan material mudah terbakar. Api berhasil dipadamkan dengan cepat oleh tim galangan, namun kerusakan tetap terjadi pada sebagian struktur yang sedang dikerjakan serta beberapa peralatan kerja yang berada di lokasi.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-[#e2e8f0] bg-white p-3 shadow-[0_20px_48px_-12px_rgba(10,22,40,0.15)]">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/images/potoartikel/klaimbuilderisk.webp"
            alt="Dokumentasi proses penanganan klaim asuransi Builders Risk di galangan kapal, Batam"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="flex items-center gap-2 px-2 pt-4 pb-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c9a84c]" />
          <span className="font-display text-xs font-semibold uppercase tracking-wider text-[#0a1628]">
            Dokumentasi Lapangan
          </span>
          <span className="text-xs text-[#475569]">
            — Penanganan klaim Builders Risk di salah satu galangan kapal, Batam
          </span>
        </figcaption>
      </figure>

      <p>Berikut alur penanganan klaim yang berjalan pada kasus tersebut:</p>
      <div className="not-prose my-7 overflow-hidden rounded-2xl border border-[#e2e8f0] shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)]">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-5 py-4 font-display tracking-wide">Tahap</th>
              <th className="text-left px-5 py-4 font-display tracking-wide">Yang Dilakukan</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Notifikasi awal",
                "Galangan melaporkan insiden ke perusahaan asuransi dalam 24 jam, sebelum lokasi dibersihkan",
              ],
              [
                "Pengamanan lokasi",
                "Area yang terdampak diisolasi, tidak dilakukan perbaikan apa pun sebelum survei",
              ],
              [
                "Survei loss adjuster",
                "Surveyor independen menilai tingkat kerusakan struktur, peralatan, dan estimasi biaya perbaikan",
              ],
              [
                "Verifikasi sum insured & wording",
                "Dicek apakah nilai pertanggungan proyek sesuai progress pekerjaan dan apakah penyebab kebakaran termasuk dalam coverage",
              ],
              [
                "Negosiasi & perhitungan ganti rugi",
                "Penyesuaian nilai klaim berdasarkan hasil survei, dikurangi deductible sesuai polis",
              ],
              [
                "Pencairan klaim",
                "Dana ganti rugi dicairkan untuk menutup biaya perbaikan struktur dan penggantian peralatan kerja",
              ],
            ].map(([tahap, ket], i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}
              >
                <td className="px-5 py-4 font-semibold text-[#0a1628] border-b border-[#e2e8f0]">
                  {tahap}
                </td>
                <td className="px-5 py-4 text-[#475569] leading-relaxed border-b border-[#e2e8f0]">
                  {ket}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="not-prose my-8 rounded-2xl border-l-4 border-[#c9a84c] bg-[#faf8f3] px-6 py-5">
        <p className="text-[#0a1628] leading-relaxed">
          <span className="font-display font-bold">Insight dari lapangan:</span> Faktor yang membuat klaim ini dapat diproses relatif lancar bukan kebetulan. Galangan tersebut, atas saran konsultan asuransi, sudah menetapkan sum insured yang disesuaikan secara berkala dengan progress proyek (bukan nilai tetap di awal kontrak), dan polis mereka secara eksplisit mencantumkan seluruh subkontraktor yang bekerja di area dok sebagai pihak yang dijamin. Dua hal inilah yang paling sering menjadi sumber sengketa pada klaim Builders Risk lain yang tidak dipersiapkan dengan baik.
        </p>
      </div>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Cakupan Polis
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="flex items-center justify-center gap-3 text-center">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
          <ShieldCheck className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
        </span>
        Apa yang Dijamin dan Tidak Dijamin dalam Polis Builders Risk
      </h2>
      <p>
        Builders Risk merupakan salah satu produk dalam lini <Link href="/asuransi-marine" className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors">asuransi marine</Link> yang kami tangani di Batam, dengan karakteristik cakupan yang spesifik untuk periode konstruksi. Secara umum, berikut pembagian antara risiko yang dijamin dan yang dikecualikan:
      </p>

      <div className="not-prose mt-8 mb-10 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
          <p className="font-display font-bold text-[#0a1628] mb-4 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0a1628] text-[#c9a84c] text-xs">
              ✓
            </span>
            Dijamin Polis
          </p>
          <ul className="space-y-3 text-sm text-[#475569] leading-relaxed">
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Kebakaran, ledakan, dan sambaran petir di lokasi proyek</li>
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Kerusakan akibat kecelakaan kerja atau kesalahan operasional alat berat</li>
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Bencana alam: banjir, angin kencang, gempa (umumnya sebagai extended cover)</li>
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Pencurian material atau peralatan yang sedang terpasang di lokasi proyek</li>
            <li className="flex gap-2"><span className="text-[#c9a84c]">—</span>Kerusakan selama proses testing & commissioning, sesuai wording yang disepakati</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[#e2e8f0] bg-[#faf8f3] p-6">
          <p className="font-display font-bold text-[#0a1628] mb-4 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0a1628]/10 text-[#0a1628] text-xs">
              ✕
            </span>
            Dikecualikan
          </p>
          <ul className="space-y-3 text-sm text-[#475569] leading-relaxed">
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Kerugian akibat cacat desain (design defect) yang sudah ada sejak awal</li>
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Keausan wajar (wear and tear) dan kerusakan bertahap akibat korosi normal</li>
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Denda keterlambatan proyek atau kerugian konsekuensial (kecuali ada extension khusus)</li>
            <li className="flex gap-2"><span className="text-[#94a3b8]">—</span>Kerugian setelah masa pemeliharaan (maintenance period) berakhir tanpa perpanjangan cover</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Langkah Praktis
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="flex items-center justify-center gap-3 text-center">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
          <ListChecks className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
        </span>
        Langkah Memilih Asuransi Builders Risk yang Tepat
      </h2>

      <div className="not-prose mt-10 mb-12">
        {[
          {
            n: "01",
            title: "Petakan Risiko Spesifik Proyek Anda",
            body: "Proyek konstruksi gedung, instalasi pabrik, dan reparasi kapal di galangan memiliki profil risiko yang berbeda. Sebelum membeli polis, identifikasi titik-titik rawan: apakah ada pekerjaan hot work (pengelasan, pemotongan), area dengan material mudah terbakar, atau pekerjaan di ketinggian yang berisiko tinggi.",
          },
          {
            n: "02",
            title: "Tentukan Sum Insured Berdasarkan Nilai Kontrak Penuh, Bukan Progress Saat Ini",
            body: "Kesalahan paling sering terjadi: menetapkan sum insured berdasarkan nilai pekerjaan yang sudah selesai, padahal seharusnya berdasarkan nilai kontrak total proyek ditambah biaya material dan peralatan yang akan terpasang. Sum insured yang terlalu rendah membuat ganti rugi dipotong proporsional (average clause) saat klaim terjadi.",
          },
          {
            n: "03",
            title: "Pastikan Seluruh Pihak yang Bekerja Tercakup sebagai Insured",
            body: "Jika proyek melibatkan subkontraktor, pastikan polis secara eksplisit mencantumkan mereka sebagai joint insured atau additional insured. Tanpa klausul ini, perusahaan asuransi berpotensi menolak klaim atau melakukan recovery (subrogasi) terhadap subkontraktor yang justru merupakan mitra kerja Anda sendiri.",
          },
          {
            n: "04",
            title: "Periksa Periode Pertanggungan dan Maintenance Period",
            body: "Polis Builders Risk umumnya berlaku sejak mobilisasi material ke lokasi sampai serah terima proyek, ditambah periode pemeliharaan (biasanya 12 bulan). Pastikan periode ini sesuai dengan jadwal proyek riil, termasuk jika ada potensi keterlambatan.",
          },
          {
            n: "05",
            title: "Baca Wording dan Pengecualian dengan Teliti, atau Libatkan Konsultan",
            body: (
              <>
                Perbedaan satu klausul pengecualian bisa menentukan apakah klaim senilai ratusan juta rupiah dibayar penuh atau ditolak. Melibatkan konsultan asuransi yang memahami karakteristik proyek konstruksi dan industri galangan kapal — bukan sekadar membandingkan premi termurah — adalah langkah yang paling sering menyelamatkan proyek saat insiden benar-benar terjadi. Anda bisa melihat detail{" "}
                <Link href="/asuransi-marine/builders-risk" className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors">
                  cakupan polis Builders Risk kami di sini
                </Link>
                .
              </>
            ),
          },
        ].map((step, i, arr) => (
          <div key={step.n} className="flex gap-5">
            <div className="flex flex-col items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-display text-base font-bold text-[#c9a84c]">
                {step.n}
              </span>
              {i < arr.length - 1 && (
                <span className="mt-1 w-px flex-1 bg-[#e2e8f0]" style={{ minHeight: "2.5rem" }} />
              )}
            </div>
            <div className={i < arr.length - 1 ? "pb-9" : ""}>
              <h3 className="mt-1.5 mb-2">{step.title}</h3>
              <p className="text-[#475569] leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Pertanyaan Umum
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="flex items-center justify-center gap-3 text-center">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
          <HelpCircle className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
        </span>
        FAQ Seputar Asuransi Builders Risk
      </h2>

      <div className="not-prose mt-8 mb-10 space-y-3">
        {[
          {
            q: "Apa itu asuransi Builders Risk?",
            a: "Builders Risk (Contractors' All Risks / Erection All Risks) adalah polis yang menjamin kerugian fisik pada proyek yang sedang dibangun — termasuk kapal yang sedang dikonstruksi atau direparasi di galangan — akibat risiko seperti kebakaran, kecelakaan kerja, atau bencana alam selama periode konstruksi.",
          },
          {
            q: "Apakah galangan kapal di Batam butuh asuransi Builders Risk?",
            a: "Ya. Selama proses pembangunan atau reparasi, kapal belum bisa diasuransikan dengan polis marine hull standar karena belum jadi atau belum berlayar. Builders Risk mengisi celah perlindungan ini dari awal proyek sampai serah terima.",
          },
          {
            q: "Berapa lama proses klaim Builders Risk biasanya selesai?",
            a: "Bergantung pada kompleksitas kerugian dan kelengkapan dokumen — umumnya beberapa minggu hingga 2-3 bulan untuk kasus dengan nilai kerugian besar yang memerlukan investigasi mendalam dari loss adjuster.",
          },
          {
            q: "Apa kesalahan paling umum saat membeli polis Builders Risk?",
            a: "Menetapkan sum insured terlalu rendah (under-insurance), tidak memasukkan subkontraktor sebagai pihak yang dijamin, dan tidak memeriksa pengecualian terkait cacat desain yang sering menjadi sumber sengketa klaim.",
          },
          {
            q: "Apakah Builders Risk mencakup pekerjaan subkontraktor?",
            a: "Tergantung wording polis. Polis perlu secara eksplisit mencantumkan seluruh pihak yang bekerja di proyek sebagai joint insured atau additional insured, agar tidak ada celah tanggung jawab saat klaim terjadi.",
          },
        ].map((item) => (
          <div
            key={item.q}
            className="rounded-xl border border-[#e2e8f0] bg-white px-5 py-4"
          >
            <p className="font-display font-semibold text-[#0a1628] mb-1.5">
              {item.q}
            </p>
            <p className="text-sm text-[#475569] leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-7 sm:p-8 bg-[#0a1628] rounded-2xl text-white not-prose relative overflow-hidden">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#c9a84c]/10" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">
          Konsultasi Gratis
        </p>
        <h3 className="font-display font-bold text-xl text-white mb-3">
          Sedang Memulai Proyek Konstruksi atau Pekerjaan di Galangan Kapal?
        </h3>
        <p className="text-white/70 text-sm mb-6 leading-relaxed max-w-2xl">
          Saya membantu menyusun sum insured yang tepat, memastikan seluruh pihak terkait tercakup dalam polis, dan mendampingi Anda jika suatu saat klaim benar-benar terjadi — berdasarkan pengalaman langsung menangani klaim di lapangan, bukan sekadar membandingkan premi.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <QuoteButton cluster="marine" lang="id" variant="gold" className="!rounded-xl !px-6 !py-3 !text-sm" />
          <Link
            href="/asuransi-marine/builders-risk"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors"
          >
            Lihat Produk Builders Risk
          </Link>
        </div>
      </div>

      <div className="mt-6 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#0a1628] mb-4">
          Artikel & Halaman Terkait
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/asuransi-marine"
            className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors"
          >
            → Asuransi Marine Batam
          </Link>
          <Link
            href="/asuransi-marine/builders-risk"
            className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors"
          >
            → Produk Asuransi Builders Risk Batam
          </Link>
          <Link
            href="/blog/cara-klaim-asuransi-marine-cargo"
            className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors"
          >
            → Cara Klaim Asuransi Marine Cargo
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
