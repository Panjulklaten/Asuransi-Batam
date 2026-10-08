// app/blog/berapa-premi-asuransi-builders-risk-kapal-batam/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generateSEO, schemaArticle, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Calculator,
  Ship,
  ShieldCheck,
  FileText,
  AlertTriangle,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

const PAGE_URL = "/blog/berapa-premi-asuransi-builders-risk-kapal-batam";
const PUBLISHED = "2026-06-26";
const MODIFIED = "2026-06-26";

const faqs = [
  {
    q: "Berapa kisaran premi Builder's Risk Insurance untuk proyek kapal di Batam?",
    a: "Secara umum, premi Builder's Risk Insurance di galangan kapal Batam berkisar antara 0,15% hingga 0,5% dari total nilai kontrak pembangunan (contract value), tergantung jenis kapal, durasi proyek, metode konstruksi, dan rekam jejak galangan. Untuk proyek bernilai tinggi atau berisiko khusus, rate bisa lebih tinggi dan perlu penilaian underwriter secara langsung.",
  },
  {
    q: "Apa saja faktor yang membuat premi Builder's Risk bisa lebih mahal?",
    a: "Faktor utama meliputi jenis dan kompleksitas kapal (misalnya kapal khusus vs kapal standar), durasi pembangunan yang panjang, riwayat klaim galangan sebelumnya, lokasi dan kondisi galangan, metode konstruksi yang digunakan, serta apakah proyek melibatkan sea trial atau pelayaran percobaan yang menambah eksposur risiko.",
  },
  {
    q: "Apakah Builder's Risk Insurance wajib untuk semua proyek pembangunan kapal di Batam?",
    a: "Tidak selalu diwajibkan oleh regulasi, namun pada praktiknya hampir semua kontrak pembangunan kapal modern—terutama yang melibatkan pembiayaan bank, investor, atau ekspor—mensyaratkan asuransi ini sebagai bagian dari klausul kontrak antara galangan dan pemilik kapal (owner).",
  },
  {
    q: "Kapan waktu yang tepat untuk mengajukan asuransi Builder's Risk?",
    a: "Idealnya pengajuan dilakukan sebelum keel laying atau sebelum tahap konstruksi utama dimulai, sehingga seluruh proses pembangunan—mulai dari fabrikasi, peluncuran, hingga sea trial—tercakup penuh tanpa ada gap perlindungan.",
  },
  {
    q: "Apakah saya bisa berkonsultasi langsung sebelum menentukan nilai pertanggungan?",
    a: "Bisa. Konsultasi awal sangat disarankan agar nilai pertanggungan (sum insured) ditentukan secara akurat berdasarkan total contract value, sehingga tidak terjadi underinsurance saat klaim maupun over-premi yang tidak perlu.",
  },
];

export const metadata: Metadata = generateSEO({
  title: "Berapa Premi Asuransi Builder's Risk untuk Proyek Kapal di Batam?",
  description:
    "Simulasi dan studi kasus perhitungan premi Builder's Risk Insurance kapal di Batam. Faktor penentu rate, contoh klaim nyata di galangan, dan cara mendapatkan polis yang tepat bersama Rio.",
  canonical: PAGE_URL,
});

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      schemaArticle({
        title: "Berapa Premi Asuransi Builder's Risk untuk Proyek Kapal di Batam?",
        description:
          "Simulasi dan studi kasus perhitungan premi Builder's Risk Insurance kapal di Batam beserta faktor penentu rate dan cara mendapatkan polis yang tepat.",
        url: PAGE_URL,
        datePublished: PUBLISHED,
        dateModified: MODIFIED,
        authorName: "Rio Mardiansyah",
      }),
      schemaFAQ(faqs),
      schemaBreadcrumb([
        { name: "Beranda", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Berapa Premi Asuransi Builder's Risk untuk Proyek Kapal di Batam?", url: PAGE_URL },
      ]),
    ],
  };

  return (
    <ArticleLayout
      cluster="marine"
      title="Berapa Premi Asuransi Builder's Risk untuk Proyek Kapal di Batam?"
      description="Simulasi perhitungan premi, faktor penentu rate, studi kasus klaim nyata, dan langkah tepat mendapatkan polis Builder's Risk untuk proyek pembangunan kapal di galangan Batam."
      date="26 Juni 2026"
      category="Marine Insurance"
      readTime="11 menit"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "Berapa Premi Asuransi Builder's Risk untuk Proyek Kapal di Batam?",
          href: PAGE_URL,
        },
      ]}
      schema={schema}
    >
      {/* Intro */}
      <p>
        Pertanyaan ini hampir selalu menjadi yang pertama ditanyakan oleh pemilik kapal (owner)
        maupun pihak galangan ketika mereka mulai merencanakan proyek pembangunan kapal baru di
        Batam: <strong>berapa sebenarnya premi asuransi Builder&apos;s Risk yang harus
        disiapkan?</strong> Jawabannya tidak sesederhana satu angka tunggal, karena premi ini
        dihitung berdasarkan beberapa variabel teknis yang saling berkaitan.
      </p>
      <p>
        Sebagai praktisi asuransi kerugian yang telah menangani berbagai proyek di galangan kapal
        Batam—termasuk Tanjung Uncang—saya akan membahas secara mendalam bagaimana premi Builder&apos;s
        Risk dihitung, faktor-faktor yang mempengaruhinya, simulasi perhitungan nyata, hingga studi
        kasus klaim yang pernah saya tangani langsung.
      </p>

      {/* Eyebrow + H2 */}
      <div className="flex items-center justify-center gap-3 my-10 not-prose">
        <span className="h-px w-10 bg-[#c9a84c]/40" />
        <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">
          Dasar Perhitungan Premi
        </span>
        <span className="h-px w-10 bg-[#c9a84c]/40" />
      </div>
      <h2 className="text-center">Bagaimana Premi Builder&apos;s Risk Dihitung?</h2>

      <p>
        Premi Builder&apos;s Risk Insurance dihitung berdasarkan <strong>persentase rate</strong> dari
        total nilai kontrak pembangunan kapal (contract value), bukan dari nilai kapal setelah jadi.
        Secara umum, kisaran rate yang berlaku di pasar Batam berada di antara <strong>0,15% hingga
        0,5%</strong> dari total contract value, dengan rumus dasar:
      </p>

      <div className="border-l-4 border-[#c9a84c] bg-[#faf8f3] px-6 py-5 my-8 not-prose rounded-r-lg">
        <div className="flex items-start gap-3">
          <Calculator className="w-6 h-6 text-[#c9a84c] shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-[#0a1628] mb-1">Rumus Dasar Estimasi Premi</p>
            <p className="text-[#374151] text-sm leading-relaxed">
              Premi = Total Contract Value × Rate (%) × Faktor Penyesuaian Risiko
            </p>
          </div>
        </div>
      </div>

      <p>
        Sebagai ilustrasi, untuk proyek pembangunan tug boat dengan total contract value sekitar
        Rp 25 miliar dan rate dasar 0,3%, maka estimasi premi tahunan berada di kisaran
        Rp 75 juta sebelum penyesuaian faktor risiko. Namun angka ini akan naik atau turun
        tergantung beberapa variabel di bawah ini.
      </p>

      {/* Coverage/exclusion style grid - faktor penentu */}
      <div className="grid md:grid-cols-2 gap-5 my-10 not-prose">
        <div className="border border-gray-200 rounded-2xl p-6 shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)]">
          <div className="flex items-center gap-2 mb-3">
            <Ship className="w-5 h-5 text-[#1a4fa0]" />
            <h3 className="font-display font-semibold text-[#0a1628] m-0">Jenis & Kompleksitas Kapal</h3>
          </div>
          <p className="text-sm text-[#374151] m-0">
            Kapal standar seperti tug boat atau barge umumnya memiliki rate lebih rendah dibanding
            kapal khusus (offshore support vessel, tanker kimia) yang memerlukan material dan
            metode konstruksi lebih kompleks.
          </p>
        </div>
        <div className="border border-gray-200 rounded-2xl p-6 shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)]">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-[#1a4fa0]" />
            <h3 className="font-display font-semibold text-[#0a1628] m-0">Durasi Proyek</h3>
          </div>
          <p className="text-sm text-[#374151] m-0">
            Periode konstruksi yang lebih panjang berarti eksposur risiko lebih lama—mulai dari
            keel laying, fabrikasi, peluncuran, hingga sea trial—sehingga rate cenderung
            disesuaikan naik.
          </p>
        </div>
        <div className="border border-gray-200 rounded-2xl p-6 shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)]">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 text-[#1a4fa0]" />
            <h3 className="font-display font-semibold text-[#0a1628] m-0">Rekam Jejak Galangan</h3>
          </div>
          <p className="text-sm text-[#374151] m-0">
            Galangan dengan riwayat klaim minim dan sistem manajemen risiko yang baik (quality
            control, sertifikasi kelas) biasanya mendapat penawaran rate lebih kompetitif dari
            underwriter.
          </p>
        </div>
        <div className="border border-gray-200 rounded-2xl p-6 shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)]">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-[#1a4fa0]" />
            <h3 className="font-display font-semibold text-[#0a1628] m-0">Cakupan Sea Trial</h3>
          </div>
          <p className="text-sm text-[#374151] m-0">
            Jika polis turut mencakup uji coba pelayaran (sea trial) di luar area galangan, rate
            biasanya sedikit lebih tinggi karena eksposur risiko bertambah ke perairan terbuka.
          </p>
        </div>
      </div>

      {/* Simulasi tabel */}
      <div className="flex items-center justify-center gap-3 my-10 not-prose">
        <span className="h-px w-10 bg-[#c9a84c]/40" />
        <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">
          Simulasi Perhitungan
        </span>
        <span className="h-px w-10 bg-[#c9a84c]/40" />
      </div>
      <h2 className="text-center">Contoh Simulasi Premi untuk 3 Skenario Proyek</h2>

      <p>
        Berikut simulasi sederhana untuk memberi gambaran kasar—bukan penawaran resmi—karena rate
        final selalu ditentukan melalui survey dan penilaian underwriter terhadap risiko spesifik
        proyek.
      </p>

      <div className="overflow-x-auto my-8 not-prose">
        <table className="w-full text-sm shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)] rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-5 py-3 font-display">Skenario Proyek</th>
              <th className="text-left px-5 py-3 font-display">Contract Value</th>
              <th className="text-left px-5 py-3 font-display">Rate Indikatif</th>
              <th className="text-left px-5 py-3 font-display">Estimasi Premi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="px-5 py-3">Tug Boat 1 unit</td>
              <td className="px-5 py-3">Rp 25 miliar</td>
              <td className="px-5 py-3">0,3%</td>
              <td className="px-5 py-3 font-semibold text-[#0a1628]">± Rp 75 juta</td>
            </tr>
            <tr className="border-b border-gray-100 bg-[#faf8f3]">
              <td className="px-5 py-3">Barge / Tongkang</td>
              <td className="px-5 py-3">Rp 12 miliar</td>
              <td className="px-5 py-3">0,2%</td>
              <td className="px-5 py-3 font-semibold text-[#0a1628]">± Rp 24 juta</td>
            </tr>
            <tr>
              <td className="px-5 py-3">Offshore Support Vessel</td>
              <td className="px-5 py-3">Rp 90 miliar</td>
              <td className="px-5 py-3">0,45%</td>
              <td className="px-5 py-3 font-semibold text-[#0a1628]">± Rp 405 juta</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="border-l-4 border-[#c9a84c] bg-[#faf8f3] px-6 py-5 my-8 not-prose rounded-r-lg">
        <p className="font-semibold text-[#0a1628] mb-1">Catatan Penting</p>
        <p className="text-[#374151] text-sm leading-relaxed m-0">
          Angka di atas adalah estimasi indikatif berdasarkan pola rate yang umum berlaku, bukan
          quotation resmi dari perusahaan asuransi. Rate aktual ditentukan setelah underwriter
          melakukan survey teknis terhadap galangan dan spesifikasi proyek.
        </p>
      </div>

      {/* Studi Kasus */}
      <div className="flex items-center justify-center gap-3 my-10 not-prose">
        <span className="h-px w-10 bg-[#c9a84c]/40" />
        <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">
          Studi Kasus Nyata
        </span>
        <span className="h-px w-10 bg-[#c9a84c]/40" />
      </div>
      <h2 className="text-center">Penanganan Klaim Builder&apos;s Risk di Galangan Tanjung Uncang</h2>

      <p>
        Salah satu pengalaman yang paling relevan untuk dibagikan adalah saat saya menangani
        langsung proses klaim Builder&apos;s Risk di salah satu galangan kapal Batam. Proyek ini
        melibatkan pembangunan kapal yang mengalami insiden teknis pada tahap konstruksi, yang
        menyebabkan kerusakan pada sebagian struktur dan memerlukan proses klaim dengan pihak
        asuransi.
      </p>

      <div className="my-8 not-prose">
        <Image
          src="/images/potoartikel/klaimbuilderisk.webp"
          alt="Rio menangani proses klaim Builder's Risk Insurance di galangan kapal Batam"
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, 896px"
          className="rounded-2xl shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)] w-full object-cover"
        />
        <p className="text-center text-sm text-gray-500 mt-3">
          Proses penanganan klaim Builder&apos;s Risk Insurance langsung di lokasi galangan, Batam.
        </p>
      </div>

      <p>
        Dalam kasus ini, langkah pertama yang dilakukan adalah memastikan dokumentasi kerusakan
        dilakukan secepat mungkin—termasuk foto, video, dan laporan kronologi kejadian—sebelum
        proses perbaikan dimulai. Hal ini krusial karena surveyor asuransi memerlukan bukti kondisi
        riil di lapangan untuk menilai cakupan klaim sesuai polis.
      </p>
      <p>
        Setelah dokumentasi awal selesai, saya berkoordinasi dengan pihak galangan, owner kapal,
        dan tim asuransi untuk menyamakan kronologi serta estimasi nilai kerugian. Proses ini
        melibatkan diskusi teknis langsung di lokasi proyek bersama owner dan pihak asuransi.
      </p>

      <div className="my-8 not-prose">
        <Image
          src="/images/potoartikel/Potobersamabuilderisk.webp"
          alt="Rio bersama owner kapal dan pihak asuransi di depan kapal yang sedang dibangun di galangan Tanjung Uncang, Batam"
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, 896px"
          className="rounded-2xl shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)] w-full object-cover"
        />
        <p className="text-center text-sm text-gray-500 mt-3">
          Koordinasi langsung bersama owner kapal dan pihak asuransi di galangan Tanjung Uncang, Batam.
        </p>
      </div>

      <p>
        Hasil akhirnya, klaim dapat diproses dan disetujui karena polis Builder&apos;s Risk yang
        digunakan mencakup risiko konstruksi sejak tahap awal pembangunan, sehingga kerugian akibat
        insiden teknis tersebut tertanggung sesuai ketentuan polis. Kasus ini menjadi bukti nyata
        betapa pentingnya menentukan cakupan polis (scope of cover) secara tepat sejak awal proyek—
        bukan sekadar memenuhi syarat administratif kontrak.
      </p>

      <div className="my-8 not-prose">
        <Image
          src="/images/potoartikel/kapalsedangdibangun.webp"
          alt="Kapal dalam proses pembangunan di galangan kapal Batam, ilustrasi proyek yang membutuhkan Builder's Risk Insurance"
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, 896px"
          className="rounded-2xl shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)] w-full object-cover"
        />
        <p className="text-center text-sm text-gray-500 mt-3">
          Tahap konstruksi kapal yang menjadi periode paling kritis untuk perlindungan Builder&apos;s Risk.
        </p>
      </div>

      {/* Cara mendapatkan asuransi - timeline */}
      <div className="flex items-center justify-center gap-3 my-10 not-prose">
        <span className="h-px w-10 bg-[#c9a84c]/40" />
        <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">
          Langkah Praktis
        </span>
        <span className="h-px w-10 bg-[#c9a84c]/40" />
      </div>
      <h2 className="text-center">Cara Mendapatkan Asuransi Builder&apos;s Risk dengan Tepat</h2>

      <p>
        Agar nilai premi yang dibayarkan sesuai dengan risiko yang ditanggung—tidak kemahalan dan
        tidak meninggalkan gap perlindungan—berikut langkah-langkah yang saya rekomendasikan
        berdasarkan pengalaman menangani berbagai proyek di galangan Batam:
      </p>

      <div className="relative pl-10 my-10 not-prose space-y-8">
        <div className="absolute left-[18px] top-2 bottom-2 w-px bg-[#1a4fa0]/20" />
        {[
          {
            n: "01",
            title: "Konsultasi & Penilaian Awal Risiko",
            desc: "Diskusikan spesifikasi proyek—jenis kapal, total contract value, durasi konstruksi, dan metode kerja—dengan konsultan asuransi untuk menentukan kebutuhan cakupan secara akurat.",
          },
          {
            n: "02",
            title: "Penentuan Sum Insured",
            desc: "Tetapkan nilai pertanggungan berdasarkan total contract value, bukan estimasi kasar, agar tidak terjadi underinsurance saat klaim terjadi.",
          },
          {
            n: "03",
            title: "Survey Teknis oleh Underwriter",
            desc: "Pihak asuransi atau surveyor independen akan menilai kondisi galangan, metode konstruksi, dan riwayat keselamatan kerja sebagai dasar penentuan rate final.",
          },
          {
            n: "04",
            title: "Penerbitan Polis Sebelum Keel Laying",
            desc: "Pastikan polis diterbitkan sebelum tahap konstruksi utama dimulai, sehingga seluruh proses pembangunan tercakup tanpa ada jeda waktu tanpa perlindungan.",
          },
          {
            n: "05",
            title: "Monitoring & Pelaporan Selama Proyek",
            desc: "Lakukan pelaporan progres secara berkala kepada pihak asuransi, terutama jika ada perubahan scope, perpanjangan durasi, atau penambahan sea trial.",
          },
        ].map((step) => (
          <div key={step.n} className="relative">
            <div className="absolute left-[-40px] top-0 w-9 h-9 rounded-full bg-[#0a1628] text-[#c9a84c] flex items-center justify-center text-xs font-bold font-display">
              {step.n}
            </div>
            <h3 className="font-display font-semibold text-[#0a1628] m-0 mb-1">{step.title}</h3>
            <p className="text-sm text-[#374151] m-0">{step.desc}</p>
          </div>
        ))}
      </div>

      <p>
        Untuk pembahasan lebih lengkap mengenai cakupan, pengecualian, dan dokumen yang diperlukan,
        Anda dapat membaca panduan lengkap kami di{" "}
        <Link
          href="/asuransi-marine/builders-risk"
          className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors"
        >
          halaman utama Builder&apos;s Risk Insurance
        </Link>
        , atau pelajari konteks penggunaannya secara khusus untuk industri galangan kapal di artikel{" "}
        <Link
          href="/blog/builders-risk-untuk-galangan-kapal"
          className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors"
        >
          Builder&apos;s Risk untuk Galangan Kapal
        </Link>
        . Jika Anda ingin memahami proses pengajuan secara lebih teknis, simak juga{" "}
        <Link
          href="/blog/cara-mendapatkan-asuransi-builders-risk-batam"
          className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors"
        >
          Cara Mendapatkan Asuransi Builder&apos;s Risk di Batam
        </Link>
        .
      </p>

      {/* Key insight box */}
      <div className="border-l-4 border-[#c9a84c] bg-[#faf8f3] px-6 py-5 my-10 not-prose rounded-r-lg">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-[#c9a84c] shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-[#0a1628] mb-1">Insight Praktisi</p>
            <p className="text-[#374151] text-sm leading-relaxed m-0">
              Premi murah bukan selalu pilihan terbaik. Dari pengalaman menangani klaim langsung di
              galangan, gap cakupan (coverage gap) yang tidak terdeteksi sejak awal sering menjadi
              penyebab klaim ditolak sebagian atau seluruhnya. Pastikan polis direview oleh
              konsultan yang memahami proses konstruksi kapal, bukan hanya membandingkan angka
              premi semata.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="flex items-center justify-center gap-3 my-10 not-prose">
        <span className="h-px w-10 bg-[#c9a84c]/40" />
        <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">
          FAQ
        </span>
        <span className="h-px w-10 bg-[#c9a84c]/40" />
      </div>
      <h2 className="text-center">Pertanyaan yang Sering Diajukan</h2>

      <div className="space-y-4 my-8 not-prose">
        {faqs.map((faq) => (
          <div
            key={faq.q}
            className="border border-gray-200 rounded-2xl p-6 shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)]"
          >
            <h3 className="font-display font-semibold text-[#0a1628] m-0 mb-2">{faq.q}</h3>
            <p className="text-sm text-[#374151] m-0">{faq.a}</p>
          </div>
        ))}
      </div>

      {/* CTA tambahan inline (selain CTASection global di ArticleLayout) */}
      <div className="rounded-2xl bg-[#0a1628] px-8 py-10 my-10 not-prose relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#c9a84c]/10" />
        <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">
          Konsultasi Gratis
        </span>
        <h3 className="font-display font-bold text-white text-2xl mt-2 mb-3 relative z-10">
          Ingin Tahu Estimasi Premi Proyek Kapal Anda?
        </h3>
        <p className="text-white/70 text-sm mb-6 relative z-10 max-w-lg">
          Setiap proyek pembangunan kapal punya karakteristik risiko berbeda. Diskusikan
          spesifikasi proyek Anda untuk mendapatkan gambaran cakupan dan estimasi premi yang
          akurat.
        </p>
        <a
          href={WHATSAPP_URL(
            "Halo Rio, saya ingin konsultasi estimasi premi Builder's Risk Insurance untuk proyek kapal saya di Batam."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#f0d080] text-[#0a1628] font-semibold px-6 py-3 rounded-xl transition-colors relative z-10"
        >
          <PhoneCall className="w-4 h-4" />
          Konsultasi via WhatsApp
        </a>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><a href="/asuransi-marine/builders-risk" className="text-sm text-blue-700 hover:underline font-medium">→ Builders Risk Galangan Kapal Batam</a></li>
              <li><a href="/asuransi-marine" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Marine Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/builders-risk-untuk-galangan-kapal" className="text-sm text-blue-700 hover:underline font-medium">→ Builders Risk untuk Galangan Kapal</a></li>
              <li><a href="/blog/cara-mendapatkan-asuransi-builders-risk-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Mendapatkan Builders Risk Batam</a></li>
              <li><a href="/blog/premi-asuransi-kapal-batam-2026" className="text-sm text-blue-700 hover:underline font-medium">→ Premi Asuransi Kapal Batam 2026</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}
