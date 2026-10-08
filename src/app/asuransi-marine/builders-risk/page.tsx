// app/asuransi-marine/builders-risk/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import QuoteButton from "@/components/quote/QuoteButton";
import QuoteCard from "@/components/quote/QuoteCard";
import {
  Wrench,
  CheckCircle2,
  ShieldCheck,
  FileSignature,
  HandCoins,
  ClipboardCheck,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Builder's Risk Insurance Batam – Asuransi Pembangunan Kapal | Asuransi Batam",
  description:
    "Builder's Risk Insurance di Batam untuk perlindungan selama proses pembangunan dan perbaikan kapal di galangan. Dari keel laying hingga sea trial. Konsultasi dengan Rio!",
  canonical: "/asuransi-marine/builders-risk",
  languages: {
    id: "https://asuransibatam.com/asuransi-marine/builders-risk",
    en: "https://asuransibatam.com/en/marine-insurance/builders-risk",
  },
});

// ─── Schema: Service (lebih tepat untuk asuransi, tidak mensyaratkan price/image) ───
const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Builder's Risk Insurance Batam",
  description:
    "Asuransi pembangunan kapal di Batam mencakup perlindungan selama proses konstruksi di galangan dari keel laying hingga sea trial.",
  url: "https://asuransibatam.com/asuransi-marine/builders-risk",
  serviceType: "Asuransi Marine – Builder's Risk",
  areaServed: {
    "@type": "City",
    name: "Batam",
    addressCountry: "ID",
  },
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam",
    telephone: "081373336728",
    url: "https://asuransibatam.com",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Produk Asuransi Marine",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Builder's Risk Insurance",
        },
      },
    ],
  },
};

const FAQS = [
  {
    q: "Apa itu Builder's Risk Insurance untuk kapal?",
    a: "Builder's Risk Insurance (atau dikenal juga sebagai Marine Builder's Risk atau DSU – Delay in Start-Up) adalah asuransi yang melindungi kapal selama proses pembangunan di galangan kapal. Perlindungan dimulai sejak peletakan lunas (keel laying) hingga selesainya uji coba laut (sea trial) dan penyerahan kapal.",
  },
  {
    q: "Siapa yang perlu memiliki Builder's Risk Insurance?",
    a: "Pihak yang perlu memiliki perlindungan ini adalah pemilik kapal yang memesan pembangunan kapal baru, dan galangan kapal (shipyard) yang menanggung risiko selama proses konstruksi. Keduanya memiliki kepentingan yang perlu dilindungi.",
  },
  {
    q: "Apakah Builder's Risk menanggung kerusakan saat sea trial?",
    a: "Ya. Sebagian besar polis Builder's Risk mencakup periode sea trial (uji coba laut) sebagai bagian dari periode pertanggungan, karena risiko kerusakan selama uji coba termasuk dalam proses pembangunan kapal.",
  },
  {
    q: "Apakah perbaikan kapal besar (drydocking) juga bisa diasuransikan?",
    a: "Ya. Selain kapal baru, polis Builder's Risk juga dapat digunakan untuk perlindungan selama proses renovasi besar, konversi kapal, atau perbaikan berat di galangan (major refit) yang membutuhkan periode drydocking yang lama.",
  },
  {
    q: "Apa yang dimaksud dengan Increased Value (IV) dalam Builder's Risk?",
    a: "Increased Value adalah tambahan pertanggungan yang memberikan kompensasi atas selisih antara nilai kapal setelah selesai dibangun dan nilai pertanggungan utama, terutama jika nilai kapal meningkat secara signifikan selama proses pembangunan.",
  },
  {
    q: "Apa hubungan Builder's Risk Insurance dengan Performance Bond pada kontrak galangan?",
    a: "Builder's Risk Insurance melindungi objek fisik kapal dari risiko kerusakan selama konstruksi, sedangkan Performance Bond menjamin bahwa galangan akan menyelesaikan pekerjaan sesuai kontrak. Keduanya sering disyaratkan bersamaan dalam kontrak pembangunan kapal karena melindungi risiko yang berbeda — satu pada aset, satu pada kepastian penyelesaian proyek.",
  },
  {
    q: "Apakah saya perlu Advance Payment Bond jika sudah memiliki Builder's Risk Insurance?",
    a: "Keduanya melindungi hal berbeda dan tidak saling menggantikan. Advance Payment Bond melindungi pemilik kapal apabila galangan gagal mengembalikan uang muka (down payment) yang sudah dibayarkan, sementara Builder's Risk Insurance melindungi nilai fisik kapal itu sendiri selama proses pembangunan. Banyak kontrak pembangunan kapal mensyaratkan kombinasi keduanya untuk perlindungan menyeluruh.",
  },
];

const BENEFITS = [
  "Kerusakan fisik selama konstruksi",
  "Kebakaran dan ledakan di galangan",
  "Banjir dan cuaca ekstrem",
  "Kesalahan desain & konstruksi",
  "Kerusakan saat sea trial",
  "Third Party Liability (TPL) galangan",
  "Kerusakan akibat kelalaian pekerja",
  "Biaya pembongkaran & perbaikan",
  "Increased Value coverage",
  "Risiko selama peluncuran (launching)",
];

const STAGES = [
  {
    no: "01",
    title: "Keel Laying",
    desc: "Perlindungan dimulai sejak peletakan lunas sebagai fondasi utama konstruksi kapal.",
  },
  {
    no: "02",
    title: "Proses Konstruksi",
    desc: "Seluruh tahap pembangunan rangka, lambung, dek, dan instalasi sistem kapal terlindungi.",
  },
  {
    no: "03",
    title: "Peluncuran (Launching)",
    desc: "Risiko saat kapal pertama kali diturunkan ke air, termasuk risiko capsize dan kerusakan lambung.",
  },
  {
    no: "04",
    title: "Sea Trial & Penyerahan",
    desc: "Perlindungan extended hingga uji coba laut selesai dan kapal diserahkan kepada pemilik.",
  },
];

const HOW_TO_GET = [
  {
    no: "01",
    icon: ClipboardCheck,
    title: "Konsultasi & Penilaian Risiko Awal",
    desc: "Sampaikan spesifikasi proyek — jenis kapal, total contract value, durasi konstruksi, dan metode kerja galangan — agar kebutuhan cakupan bisa dipetakan secara akurat sejak awal.",
  },
  {
    no: "02",
    icon: ShieldCheck,
    title: "Penentuan Sum Insured & Scope of Cover",
    desc: "Nilai pertanggungan ditentukan berdasarkan total contract value, bukan estimasi kasar. Scope of cover juga disesuaikan apakah mencakup sea trial dan Increased Value atau tidak.",
  },
  {
    no: "03",
    icon: FileSignature,
    title: "Survey Teknis & Penerbitan Polis",
    desc: "Underwriter atau surveyor menilai kondisi galangan dan metode konstruksi sebelum menerbitkan polis — idealnya selesai sebelum tahap keel laying dimulai agar tidak ada gap perlindungan.",
  },
  {
    no: "04",
    icon: HandCoins,
    title: "Monitoring Selama Proyek Berjalan",
    desc: "Laporkan perubahan scope, perpanjangan durasi, atau penambahan sea trial kepada pihak asuransi agar cakupan polis tetap relevan hingga kapal diserahkan.",
  },
];

export default function BuildersRiskPage() {
  return (
    <>
      {/* Schema: Service — tidak mensyaratkan image/price seperti Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            schemaBreadcrumb([
              { name: "Beranda", url: "/" },
              { name: "Asuransi Marine", url: "/asuransi-marine" },
              { name: "Builder's Risk Insurance", url: "/asuransi-marine/builders-risk" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-16 px-4"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d2241 60%, #0e3460 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Asuransi Marine", href: "/asuransi-marine" },
              { label: "Builder's Risk Insurance" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Wrench size={24} style={{ color: "#0a1628" }} />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "#c9a84c20", color: "#f0d080" }}
            >
              Asuransi Marine
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Builder&apos;s Risk Insurance
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Pembangunan kapal adalah investasi besar yang penuh risiko. Dari keel laying hingga sea
            trial, setiap tahap konstruksi kapal Anda di Batam terlindungi dengan Builder&apos;s
            Risk Insurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL(
                "Halo Rio, saya butuh Builder's Risk Insurance untuk pembangunan kapal di Batam"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl text-navy"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              Konsultasi Builder&apos;s Risk
            </a>
            <QuoteButton cluster="marine" lang="id" variant="onDark" className="!py-3.5 !font-semibold" />
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Periode Pertanggungan"
            title="Perlindungan di Setiap Tahap Pembangunan Kapal"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
            {STAGES.map((s) => (
              <div
                key={s.no}
                className="relative p-6 rounded-2xl border border-gray-100 bg-gray-50"
              >
                <div className="text-3xl font-black mb-3 opacity-20" style={{ color: "#1a4fa0" }}>
                  {s.no}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Cakupan Builder's Risk"
            title="Risiko yang Ditanggung Selama Pembangunan Kapal"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {BENEFITS.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 p-4 rounded-xl border border-blue-100 bg-white"
              >
                <CheckCircle2
                  size={16}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "#1a4fa0" }}
                />
                <span className="text-sm text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Studi Kasus Nyata (E-E-A-T: Experience) ─── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Studi Kasus Nyata"
            title="Pengalaman Langsung Menangani Klaim Builder's Risk di Batam"
            subtitle="Bukan teori semata — berikut proses nyata penanganan klaim Builder's Risk Insurance yang pernah saya tangani langsung di salah satu galangan kapal Tanjung Uncang, Batam."
          />

          <div className="space-y-10">
            <div>
              <Image
                src="/images/potoartikel/klaimbuilderisk.webp"
                alt="Rio menangani proses klaim Builder's Risk Insurance di galangan kapal Batam"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 896px"
                className="rounded-2xl shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)] w-full object-cover"
              />
              <p className="text-center text-sm text-gray-500 mt-3">
                Proses dokumentasi dan penanganan klaim Builder&apos;s Risk langsung di lokasi
                galangan, Batam.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Pada proyek pembangunan kapal yang sedang berjalan di salah satu galangan Tanjung
              Uncang, terjadi insiden teknis pada tahap konstruksi yang menyebabkan kerusakan pada
              sebagian struktur kapal. Sebagai praktisi yang mendampingi proses asuransinya,
              langkah pertama yang dilakukan adalah memastikan dokumentasi kerusakan — foto, video,
              dan kronologi kejadian — dilakukan secepat mungkin sebelum proses perbaikan dimulai.
              Dokumentasi awal ini krusial karena surveyor asuransi memerlukan bukti kondisi riil di
              lapangan untuk menilai cakupan klaim sesuai polis yang berlaku.
            </p>

            <div>
              <Image
                src="/images/potoartikel/Potobersamabuilderisk.webp"
                alt="Rio bersama owner kapal dan pihak asuransi di depan kapal yang sedang dibangun di galangan Tanjung Uncang, Batam"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 896px"
                className="rounded-2xl shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)] w-full object-cover"
              />
              <p className="text-center text-sm text-gray-500 mt-3">
                Koordinasi langsung bersama owner kapal dan pihak asuransi di galangan Tanjung
                Uncang, Batam.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Setelah dokumentasi awal selesai, koordinasi dilakukan bersama pihak galangan, owner
              kapal, dan tim asuransi untuk menyamakan kronologi kejadian serta estimasi nilai
              kerugian. Diskusi teknis ini dilakukan langsung di lokasi proyek agar seluruh pihak
              memiliki pemahaman yang sama terhadap kondisi kapal dan cakupan polis yang berlaku.
              Hasil akhirnya, klaim dapat diproses dan disetujui karena polis Builder&apos;s Risk
              yang digunakan mencakup risiko konstruksi sejak tahap awal pembangunan — sehingga
              kerugian akibat insiden teknis tersebut tertanggung sesuai ketentuan polis.
            </p>

            <div>
              <Image
                src="/images/potoartikel/kapalsedangdibangun.webp"
                alt="Kapal dalam proses pembangunan di galangan kapal Batam, ilustrasi proyek yang membutuhkan Builder's Risk Insurance"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 896px"
                className="rounded-2xl shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)] w-full object-cover"
              />
              <p className="text-center text-sm text-gray-500 mt-3">
                Tahap konstruksi kapal — periode paling kritis yang membutuhkan perlindungan
                Builder&apos;s Risk sejak hari pertama.
              </p>
            </div>

            <div className="border-l-4 border-[#c9a84c] bg-[#faf8f3] px-6 py-5 rounded-r-lg">
              <p className="font-semibold text-[#0a1628] mb-1">Insight Praktisi</p>
              <p className="text-gray-700 text-sm leading-relaxed m-0">
                Kasus ini menjadi bukti nyata betapa pentingnya menentukan cakupan polis (scope of
                cover) secara tepat sejak awal proyek — bukan sekadar memenuhi syarat administratif
                kontrak. Premi murah bukan selalu pilihan terbaik; gap cakupan yang tidak terdeteksi
                sejak awal sering menjadi penyebab klaim ditolak sebagian atau seluruhnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cara Mendapatkan Builder's Risk (timeline langkah) ─── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Langkah Praktis"
            title="Cara Mendapatkan Builder's Risk Insurance dengan Tepat"
            subtitle="Empat langkah yang saya rekomendasikan berdasarkan pengalaman mendampingi berbagai proyek pembangunan kapal di galangan Batam."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {HOW_TO_GET.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.no}
                  className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_24px_-8px_rgba(10,22,40,0.08)]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: "#0a1628", color: "#c9a84c" }}
                    >
                      {step.no}
                    </div>
                    <Icon size={20} style={{ color: "#1a4fa0" }} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Produk Terkait: Surety Bond ─── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Lindungi Proyek Secara Menyeluruh"
            title="Jaminan Pelaksanaan & Uang Muka untuk Proyek Galangan"
            subtitle="Builder's Risk Insurance melindungi fisik kapal, namun kontrak pembangunan kapal modern umumnya juga mensyaratkan jaminan kepastian proyek berikut ini."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Link
              href="/asuransi-surety-bond/performance-bond"
              className="group p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#c9a84c] hover:shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "#1a4fa015" }}
                >
                  <ShieldCheck size={20} style={{ color: "#1a4fa0" }} />
                </div>
                <h3 className="font-bold text-gray-900 m-0">Performance Bond</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Jaminan pelaksanaan yang melindungi pemilik kapal apabila galangan gagal
                menyelesaikan pembangunan sesuai kontrak — pelengkap penting di samping Builder&apos;s
                Risk Insurance.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold mt-4 text-[#1a4fa0] group-hover:text-[#c9a84c]">
                Pelajari Performance Bond →
              </span>
            </Link>

            <Link
              href="/asuransi-surety-bond/advance-payment-bond"
              className="group p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#c9a84c] hover:shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "#1a4fa015" }}
                >
                  <HandCoins size={20} style={{ color: "#1a4fa0" }} />
                </div>
                <h3 className="font-bold text-gray-900 m-0">Advance Payment Bond</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Jaminan uang muka yang melindungi pengembalian down payment apabila galangan tidak
                dapat melanjutkan proyek pembangunan kapal sesuai kesepakatan.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold mt-4 text-[#1a4fa0] group-hover:text-[#c9a84c]">
                Pelajari Advance Payment Bond →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Bacaan Terkait (internal link artikel blog) ─── */}
      <section className="py-16 px-4 bg-[#faf8f3]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#a07830]">
            Bacaan Terkait
          </span>
          <h2
            className="text-2xl md:text-3xl font-bold mt-2 mb-6"
            style={{ fontFamily: "Syne, sans-serif", color: "#0a1628" }}
          >
            Pelajari Lebih Lanjut Tentang Builder&apos;s Risk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link
              href="/blog/berapa-premi-asuransi-builders-risk-kapal-batam"
              className="block p-5 rounded-xl bg-white border border-gray-100 hover:border-[#c9a84c] transition-all"
            >
              <p className="text-sm font-semibold text-[#0a1628]">
                Berapa Premi Asuransi Builder&apos;s Risk untuk Proyek Kapal di Batam?
              </p>
              <span className="text-xs text-[#1a4fa0] mt-2 inline-block">Baca artikel →</span>
            </Link>
            <Link
              href="/blog/builders-risk-untuk-galangan-kapal"
              className="block p-5 rounded-xl bg-white border border-gray-100 hover:border-[#c9a84c] transition-all"
            >
              <p className="text-sm font-semibold text-[#0a1628]">
                Builder&apos;s Risk untuk Galangan Kapal
              </p>
              <span className="text-xs text-[#1a4fa0] mt-2 inline-block">Baca artikel →</span>
            </Link>
            <Link
              href="/blog/cara-mendapatkan-asuransi-builders-risk-batam"
              className="block p-5 rounded-xl bg-white border border-gray-100 hover:border-[#c9a84c] transition-all"
            >
              <p className="text-sm font-semibold text-[#0a1628]">
                Cara Mendapatkan Asuransi Builder&apos;s Risk di Batam
              </p>
              <span className="text-xs text-[#1a4fa0] mt-2 inline-block">Baca artikel →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Produk & Artikel Terkait */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Lengkapi Proteksi Galangan" title="Produk & Artikel Terkait" center />
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/asuransi-surety-bond/performance-bond" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">Performance Bond</h3>
              <p className="text-sm text-gray-600">Jaminan pelaksanaan kontrak pembangunan kapal di galangan.</p>
            </Link>
            <Link href="/asuransi-personal-accident/pa-karyawan-grup" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">PA Karyawan Grup</h3>
              <p className="text-sm text-gray-600">Lindungi pekerja galangan kapal dari risiko kecelakaan kerja.</p>
            </Link>
            <Link href="/blog/builders-risk-untuk-galangan-kapal" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">Builder&apos;s Risk untuk Galangan Kapal</h3>
              <p className="text-sm text-gray-600">Pelajari lebih dalam soal cakupan dan praktik klaimnya.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Pertanyaan Seputar Builder's Risk Insurance"
            center
          />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <QuoteCard cluster="marine" />
    </>
  );
}
