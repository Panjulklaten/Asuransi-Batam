// app/asuransi-marine/protection-and-indemnity/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { Breadcrumb, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import QuoteButton from "@/components/quote/QuoteButton";
import QuoteCard from "@/components/quote/QuoteCard";
import { Anchor, CheckCircle2, Scale } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi P&I Kapal – Protection & Indemnity",
  description:
    "Asuransi P&I (Protection & Indemnity) di Batam untuk tanggung jawab hukum pemilik kapal: awak, penumpang, muatan, pencemaran, dan wreck removal. Konsultasi dengan Rio!",
  canonical: "/asuransi-marine/protection-and-indemnity",
  languages: {
    id: "https://asuransibatam.com/asuransi-marine/protection-and-indemnity",
    en: "https://asuransibatam.com/en/marine-insurance/protection-and-indemnity",
  },
});

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi P&I (Protection & Indemnity) Batam",
  description:
    "Asuransi tanggung jawab hukum pemilik dan operator kapal terhadap awak, penumpang, pemilik muatan, pihak ketiga, dan pencemaran lingkungan.",
  url: "https://asuransibatam.com/asuransi-marine/protection-and-indemnity",
  serviceType: "Asuransi Marine – Protection & Indemnity (P&I)",
  areaServed: { "@type": "City", name: "Batam", addressCountry: "ID" },
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
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Asuransi P&I (Protection & Indemnity)" } },
    ],
  },
};

const FAQS = [
  {
    q: "Apa itu asuransi P&I (Protection & Indemnity)?",
    a: "Asuransi P&I melindungi pemilik atau operator kapal dari tanggung jawab hukum kepada pihak lain, misalnya cedera atau kematian awak dan penumpang, kerusakan atau kehilangan muatan yang diangkut, kerusakan dermaga atau properti pihak ketiga, pencemaran, dan biaya penyingkiran kerangka kapal. Yang dilindungi adalah kewajiban membayar ganti rugi, bukan fisik kapalnya.",
  },
  {
    q: "Apakah Marine Hull sudah termasuk P&I?",
    a: "Tidak. Marine Hull melindungi kerusakan fisik kapal milik Anda. Polis hull umumnya memang memuat tanggung jawab tabrakan antarkapal (collision liability), tetapi biasanya hanya sebagian, sehingga tanggung jawab kepada awak, penumpang, muatan, dermaga, dan pencemaran tetap membutuhkan perlindungan P&I. Banyak pemilik kapal memasang keduanya agar tidak ada celah.",
  },
  {
    q: "Apakah asuransi P&I wajib untuk kapal di Indonesia?",
    a: "Regulasi pelayaran Indonesia, antara lain UU No. 17 Tahun 2008 tentang Pelayaran dan PM No. 71 Tahun 2013 tentang Salvage dan/atau Pekerjaan Bawah Air, memuat ketentuan terkait kewajiban pemilik kapal atas tanggung jawab pihak ketiga dan penyingkiran kerangka kapal. Penerapannya dapat berbeda menurut jenis dan ukuran kapal serta bisa berubah, jadi kami bantu memeriksa ketentuan terbaru untuk kapal Anda. Di luar itu, charterer, pelabuhan, atau terminal sering meminta bukti P&I sebagai syarat operasi.",
  },
  {
    q: "Kapal jenis apa saja yang bisa memasang P&I?",
    a: "Tugboat, tongkang (barge), kapal kargo, tanker, kapal penumpang dan feri, offshore support vessel (OSV), serta kapal komersial lainnya. Penilaian risiko berbeda untuk tiap jenis kapal, terutama bila membawa penumpang atau muatan minyak dan bahan berbahaya.",
  },
  {
    q: "Apa yang menentukan premi P&I?",
    a: "Ukuran kapal (GT), jenis dan usia kapal, daerah pelayaran, jenis muatan atau penumpang yang diangkut, jumlah awak, riwayat klaim, serta batas pertanggungan (limit) dan deductible yang dipilih. Kapal yang berlayar lintas negara atau membawa muatan berisiko tinggi umumnya dinilai lebih ketat.",
  },
  {
    q: "Apa yang perlu saya siapkan untuk meminta penawaran P&I?",
    a: "Dokumen kepemilikan dan registrasi kapal, spesifikasi kapal (jenis, GT, tahun bangun, bendera, kelas), daerah pelayaran, data awak, jenis muatan, polis Marine Hull yang berjalan, dan riwayat klaim. Daftar lengkapnya muncul di formulir Minta Penawaran saat Anda memilih jenis P&I.",
  },
];

const BENEFITS = [
  "Cedera, sakit, atau kematian awak kapal",
  "Cedera atau kematian penumpang",
  "Tanggung jawab atas kerusakan atau kehilangan muatan",
  "Kerusakan dermaga, jetty, dan properti pihak ketiga",
  "Tanggung jawab pencemaran dan biaya pembersihan",
  "Penyingkiran kerangka kapal (wreck removal)",
  "Sisa tanggung jawab tabrakan di luar polis hull",
  "Denda dan biaya hukum yang terkait insiden",
  "Biaya medis dan pemulangan awak (repatriasi)",
  "Biaya pembelaan hukum atas tuntutan pihak ketiga",
];

const WHO = [
  { title: "Operator tugboat & tongkang", desc: "Risiko tabrakan dengan dermaga atau kapal lain dan cedera awak saat towing." },
  { title: "Pemilik kapal kargo & tanker", desc: "Tanggung jawab atas muatan yang diangkut dan risiko pencemaran." },
  { title: "Kapal penumpang & feri", desc: "Tuntutan cedera atau kematian penumpang, rute Batam–Singapura dan antarpulau." },
  { title: "Operator OSV & kapal penunjang", desc: "Operasi dekat anjungan dan fasilitas lepas pantai dengan persyaratan kontrak ketat." },
  { title: "Perusahaan pelayaran dengan kapal carter", desc: "Charterer dan terminal sering meminta bukti P&I sebelum kapal beroperasi." },
];

const COMPARE = [
  ["Yang dilindungi", "Fisik kapal, mesin, perlengkapan", "Tanggung jawab hukum kepada pihak lain"],
  ["Contoh kejadian", "Kapal kandas, lambung rusak, kebakaran", "Awak cedera, muatan rusak, dermaga tertabrak, tumpahan minyak"],
  ["Penerima ganti rugi", "Pemilik kapal", "Pihak ketiga yang dirugikan"],
  ["Dasar nilai", "Nilai kapal (agreed/market value)", "Batas tanggung jawab (limit) per kejadian"],
];

export default function ProtectionIndemnityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQS)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            schemaBreadcrumb([
              { name: "Beranda", url: "/" },
              { name: "Asuransi Marine", url: "/asuransi-marine" },
              { name: "Asuransi P&I", url: "/asuransi-marine/protection-and-indemnity" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-16 px-4"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2241 60%, #0e3460 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Asuransi Marine", href: "/asuransi-marine" },
              { label: "Asuransi P&I" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Anchor size={24} style={{ color: "#0a1628" }} />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "#c9a84c20", color: "#f0d080" }}
            >
              Asuransi Marine
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Syne, sans-serif" }}>
            Asuransi P&amp;I (Protection &amp; Indemnity)
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Lindungi pemilik dan operator kapal dari tuntutan ganti rugi pihak lain: awak, penumpang, pemilik muatan, dermaga, hingga pencemaran. Melengkapi Marine Hull yang melindungi fisik kapal.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <QuoteButton cluster="marine" lang="id" variant="gold" className="!py-3.5 !font-semibold" />
          </div>
        </div>
      </section>

      {/* Definisi singkat */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed text-lg">
            <strong>P&amp;I (Protection &amp; Indemnity)</strong> adalah asuransi tanggung jawab hukum pemilik atau operator kapal kepada pihak ketiga. Jika kapal Anda menyebabkan awak cedera, muatan rusak, dermaga tertabrak, atau minyak tumpah, P&amp;I membantu menanggung ganti rugi dan biaya hukumnya. Fisik kapal sendiri dilindungi polis{" "}
            <Link href="/asuransi-marine/marine-hull" className="text-[#1a4fa0] font-semibold hover:underline">
              Marine Hull
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Cakupan */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Cakupan P&I" title="Tanggung Jawab Apa Saja yang Dilindungi?" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BENEFITS.map((b) => (
              <div key={b} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-white">
                <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
                <span className="text-sm text-gray-700">{b}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6">
            Cakupan final mengikuti wording polis, batas pertanggungan, dan pengecualian dari penanggung. Sebagian item, seperti penyingkiran kerangka kapal, dapat berada di P&I atau sebagai perluasan polis hull; kami selaraskan keduanya agar tidak ada celah maupun tumpang tindih.
          </p>
        </div>
      </section>

      {/* P&I vs Marine Hull */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Jangan Tertukar" title="P&amp;I dan Marine Hull: Melindungi Hal yang Berbeda" center />
          <div className="overflow-x-auto mt-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-white" style={{ background: "#0a1628" }}>
                  <th className="text-left px-4 py-3 rounded-tl-lg">Aspek</th>
                  <th className="text-left px-4 py-3">Marine Hull</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg">P&amp;I</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([aspek, hull, pi], i) => (
                  <tr key={aspek} style={{ background: i % 2 === 0 ? "#fff" : "#faf8f3" }}>
                    <td className="px-4 py-3 font-medium border-b border-gray-200" style={{ color: "#0a1628" }}>{aspek}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-200">{hull}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-200">{pi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-5">
            Ingin contoh kasus dan cara keduanya bekerja dalam satu insiden? Baca{" "}
            <Link href="/blog/perbedaan-pi-dan-marine-hull" className="text-[#1a4fa0] font-semibold hover:underline">
              perbedaan P&amp;I dan Marine Hull
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Siapa yang membutuhkan */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Siapa yang Membutuhkan" title="P&amp;I untuk Pemilik dan Operator Kapal" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {WHO.map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                <h3 className="font-bold mb-2" style={{ color: "#0a1628" }}>{w.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulasi & batas dengan produk liability lain */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Scale size={18} style={{ color: "#c9a84c" }} />
              <h3 className="font-bold" style={{ color: "#0a1628" }}>Aspek Regulasi</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Aturan pelayaran Indonesia (antara lain UU 17/2008 dan PM 71/2013) memuat ketentuan tentang tanggung jawab pemilik kapal dan penyingkiran kerangka kapal. Penerapan per jenis dan ukuran kapal dapat berbeda dan berubah, sehingga kami cek ketentuan terbaru untuk kapal Anda sebelum menyusun penawaran.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <h3 className="font-bold mb-3" style={{ color: "#0a1628" }}>Bukan Pengganti Liability Lain</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              P&amp;I untuk risiko dari pengoperasian kapal. Galangan yang memperbaiki kapal milik orang lain memerlukan{" "}
              <Link href="/asuransi-liability/ship-repairers-liability" className="text-[#1a4fa0] font-semibold hover:underline">
                Ship Repairer&apos;s Liability
              </Link>
              , sedangkan aktivitas usaha di darat atau area proyek ditangani{" "}
              <Link href="/asuransi-liability/public-liability" className="text-[#1a4fa0] font-semibold hover:underline">
                Public Liability
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Produk & Artikel Terkait */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Lengkapi Proteksi Maritim" title="Produk & Artikel Terkait" center />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/asuransi-marine/marine-hull" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-white">
              <h3 className="font-bold text-[#0a1628] mb-2">Marine Hull Insurance</h3>
              <p className="text-sm text-gray-600">Lindungi fisik kapal, pasangan utama P&amp;I.</p>
            </Link>
            <Link href="/asuransi-marine/marine-cargo" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-white">
              <h3 className="font-bold text-[#0a1628] mb-2">Marine Cargo Insurance</h3>
              <p className="text-sm text-gray-600">Untuk pemilik barang yang kirimannya diangkut kapal.</p>
            </Link>
            <Link href="/blog/cara-klaim-asuransi-pi-kapal" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-white">
              <h3 className="font-bold text-[#0a1628] mb-2">Cara Klaim Asuransi P&amp;I</h3>
              <p className="text-sm text-gray-600">Langkah, dokumen, dan hal yang perlu dihindari saat insiden.</p>
            </Link>
            <Link href="/blog/jenis-jenis-asuransi-kapal-armada" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-white">
              <h3 className="font-bold text-[#0a1628] mb-2">Jenis-Jenis Asuransi Kapal</h3>
              <p className="text-sm text-gray-600">Peta lengkap polis untuk pemilik armada.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title="Pertanyaan Seputar Asuransi P&amp;I" center />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <QuoteCard cluster="marine" />
    </>
  );
}
