// app/blog/premi-asuransi-marine-cargo-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, SectionHeader } from "@/components/ui/index";
import QuoteCard from "@/components/quote/QuoteCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Package, CheckCircle2, Calculator } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Premi Asuransi Marine Cargo di Batam – Cara Hitung & Faktor yang Mempengaruhi",
  description:
    "Berapa premi asuransi marine cargo di Batam? Pelajari cara menghitung premi, faktor yang mempengaruhi biaya, dan tips mendapat premi terbaik. Konsultasi gratis!",
  canonical: "/blog/premi-asuransi-marine-cargo-batam",
  languages: {
    id: "https://asuransibatam.com/blog/premi-asuransi-marine-cargo-batam",
    en: "https://asuransibatam.com/en/blog/marine-cargo-insurance-premium-batam",
  },
});

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Berapa Premi Asuransi Marine Cargo di Batam?",
  description:
    "Panduan lengkap cara menghitung premi marine cargo insurance di Batam, faktor penentu biaya, dan tips mendapatkan coverage terbaik.",
  url: "https://asuransibatam.com/blog/premi-asuransi-marine-cargo-batam",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  author: {
    "@type": "Person",
    name: "Rio",
    url: "https://asuransibatam.com/tentang-kami",
  },
  publisher: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam",
    url: "https://asuransibatam.com",
  },
};

const FAQS = [
  {
    q: "Apakah premi marine cargo dihitung per pengiriman atau per tahun?",
    a: "Keduanya tersedia. Polis open cover (tahunan) cocok untuk eksportir atau distributor yang melakukan pengiriman rutin — premi dibayar di awal dan setiap pengiriman dilaporkan untuk sertifikat. Polis per-voyage cocok untuk pengiriman satu kali atau tidak rutin.",
  },
  {
    q: "Apakah ada minimum nilai barang untuk bisa diasuransikan?",
    a: "Tidak ada batasan minimum nilai barang secara umum. Namun secara praktis, barang dengan nilai di bawah Rp 5 juta jarang diasuransikan karena biaya premi relatif terhadap potensi klaim menjadi kurang efisien. Untuk kiriman bernilai besar di atas Rp 50 juta, asuransi cargo sangat dianjurkan.",
  },
  {
    q: "Bagaimana cara menentukan nilai pertanggungan yang tepat?",
    a: "Nilai pertanggungan umumnya dihitung dari nilai CIF (Cost + Insurance + Freight) ditambah 10% sebagai cadangan keuntungan yang terancam. Jangan under-insure karena klaim akan dibayar secara proporsional sesuai rasio nilai pertanggungan terhadap nilai aktual barang.",
  },
  {
    q: "Apa yang dimaksud dengan deductible dalam polis cargo?",
    a: "Deductible (risiko sendiri) adalah jumlah kerugian yang ditanggung oleh tertanggung sebelum asuransi membayar. Misalnya, jika deductible Rp 1 juta dan kerugian Rp 10 juta, maka asuransi membayar Rp 9 juta. Memilih deductible lebih tinggi akan menurunkan premi.",
  },
  {
    q: "Apakah premi bisa lebih murah jika saya punya rekam jejak klaim yang baik?",
    a: "Ya. Tertanggung dengan loss ratio yang baik (jarang klaim) biasanya mendapat diskon atau no-claim discount saat perpanjangan polis. Ini salah satu keuntungan polis open cover tahunan dibanding polis per-voyage.",
  },
];

const FAKTOR = [
  {
    title: "Nilai Barang (Sum Insured)",
    desc: "Semakin tinggi nilai barang yang diasuransikan, semakin besar premi absolut meskipun persentase rate bisa sama.",
  },
  {
    title: "Jenis & Kondisi Barang",
    desc: "Barang mudah pecah, cairan, atau bahan kimia dianggap lebih berisiko sehingga rate-nya lebih tinggi dibanding baja atau bahan bangunan.",
  },
  {
    title: "Rute & Jarak Pengiriman",
    desc: "Rute domestik seperti Batam–Jakarta berbeda rate-nya dengan rute internasional Batam–Singapura atau Batam–Port Klang.",
  },
  {
    title: "Klausul ICC yang Dipilih",
    desc: "ICC (A) memiliki premi tertinggi karena cakupannya paling luas. ICC (C) paling murah namun perlindungannya paling terbatas.",
  },
  {
    title: "Jenis Kemasan & Cara Muat",
    desc: "Barang dalam kontainer FCL lebih murah preminya dibanding LCL atau break bulk, karena risiko kerusakan lebih terkendali.",
  },
  {
    title: "Rekam Jejak Klaim",
    desc: "Tertanggung dengan riwayat klaim minimal akan mendapat rate lebih baik saat renewal polis open cover.",
  },
];

export default function PremiMarineCargoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
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
              { name: "Blog", url: "/blog" },
              { name: "Premi Marine Cargo Batam", url: "/blog/premi-asuransi-marine-cargo-batam" },
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
              { label: "Blog", href: "/blog" },
              { label: "Premi Marine Cargo" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Calculator size={24} style={{ color: "#0a1628" }} />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "#c9a84c20", color: "#f0d080" }}
            >
              Panduan Premi
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Berapa Premi Asuransi<br />Marine Cargo di Batam?
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Premi Marine Cargo tidak punya tarif tunggal — biayanya dipengaruhi banyak faktor.
            Pelajari cara perhitungannya, apa yang mempengaruhi angkanya, dan bagaimana mendapatkan
            coverage terbaik dengan harga yang efisien.
          </p>
          <a
            href={WHATSAPP_URL("Halo Rio, saya ingin tahu estimasi premi asuransi marine cargo untuk pengiriman dari Batam")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl"
            style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)", color: "#0a1628" }}
          >
            Minta Estimasi Premi Gratis
          </a>
        </div>
      </section>

      {/* Cara Hitung Premi */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Formula Premi"
            title="Cara Menghitung Premi Marine Cargo"
          />
          <div className="mt-10 space-y-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <p className="text-sm font-bold text-blue-800 mb-2 uppercase tracking-wide">Formula Dasar</p>
              <p className="text-2xl font-bold text-blue-900 font-mono">
                Premi = Nilai Pertanggungan × Rate (%)
              </p>
              <p className="text-sm text-blue-700 mt-3">
                Nilai Pertanggungan = Nilai CIF barang + 10% (allowance keuntungan)
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <p className="text-sm font-bold text-gray-700 mb-4">Contoh Perhitungan:</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Nilai barang (CIF)</span>
                  <span className="font-semibold">Rp 500.000.000</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Nilai Pertanggungan (CIF + 10%)</span>
                  <span className="font-semibold">Rp 550.000.000</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Rate ICC (B) – rute domestik</span>
                  <span className="font-semibold">~0,15% – 0,25%</span>
                </div>
                <div className="flex justify-between pt-2 text-blue-800 font-bold">
                  <span>Estimasi Premi</span>
                  <span>Rp 825.000 – Rp 1.375.000</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                *Rate bersifat ilustrasi. Rate aktual ditentukan oleh underwriter berdasarkan jenis barang, rute, dan klausul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faktor Penentu */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Penentu Biaya"
            title="Faktor yang Mempengaruhi Besar Premi"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {FAKTOR.map((f, i) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold mb-3"
                  style={{ background: "#1a4fa0" }}
                >
                  {i + 1}
                </div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: "#0a1628" }}>
                  {f.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perbandingan Polis */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Open Cover vs Per-Voyage"
            title="Pilih Jenis Polis yang Tepat untuk Bisnis Anda"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {[
              {
                title: "Polis Per-Voyage",
                color: "#4a7fb5",
                points: [
                  "Untuk pengiriman satu kali atau tidak rutin",
                  "Premi dibayar per pengiriman",
                  "Tidak perlu laporan berkala",
                  "Cocok untuk UMKM atau shipper baru",
                  "Fleksibel, tidak terikat komitmen tahunan",
                ],
              },
              {
                title: "Polis Open Cover (Tahunan)",
                color: "#0a1628",
                points: [
                  "Untuk pengiriman rutin setiap bulan",
                  "Satu polis menanggung semua pengiriman dalam setahun",
                  "Setiap pengiriman dilaporkan, sertifikat diterbitkan",
                  "Rate lebih efisien untuk volume besar",
                  "Potensi no-claim discount saat renewal",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 border"
                style={{ borderColor: item.color + "40", background: item.color + "08" }}
              >
                <div
                  className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-4"
                  style={{ background: item.color }}
                >
                  {item.title}
                </div>
                <ul className="space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Pertanyaan Seputar Premi Marine Cargo"
            center
          />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      
      {/* Related Links */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
              <ul className="space-y-2">
                <li><a href="/asuransi-marine/marine-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Cargo Insurance Batam</a></li>
                <li><a href="/asuransi-marine" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Marine Batam</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
              <ul className="space-y-2">
                <li><a href="/blog/asuransi-cargo-ekspor-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Cargo Ekspor dari Batam</a></li>
                <li><a href="/blog/asuransi-pengiriman-batam-jakarta" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Pengiriman Batam–Jakarta</a></li>
                <li><a href="/blog/asuransi-pengiriman-batam-singapore" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Pengiriman Batam–Singapura</a></li>
                <li><a href="/blog/cara-klaim-asuransi-marine-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Klaim Asuransi Marine Cargo</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <QuoteCard cluster="marine" />
    </>
  );
                }
