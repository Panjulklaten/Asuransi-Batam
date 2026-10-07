// app/asuransi-marine/marine-hull/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, CTASection, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import QuoteButton from "@/components/quote/QuoteButton";
import QuoteRequirements from "@/components/quote/QuoteRequirements";
import { Ship, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Marine Hull Insurance Batam – Asuransi Lambung Kapal | Asuransi Batam",
  description:
    "Marine Hull Insurance di Batam untuk perlindungan lambung kapal, mesin, dan peralatan navigasi dari risiko tabrakan, kandas, kebakaran, dan tenggelam. Konsultasi dengan Rio!",
  canonical: "/asuransi-marine/marine-hull",
  languages: {
    id: "https://asuransibatam.com/asuransi-marine/marine-hull",
    en: "https://asuransibatam.com/en/marine-insurance/marine-hull",
  },
});

// ─── Schema: Service — tidak mensyaratkan image/price seperti Product ───
const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marine Hull Insurance Batam",
  description:
    "Asuransi lambung kapal di Batam mencakup perlindungan fisik kapal, mesin, dan peralatan navigasi dari semua risiko laut.",
  url: "https://asuransibatam.com/asuransi-marine/marine-hull",
  serviceType: "Asuransi Marine – Marine Hull",
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
          name: "Marine Hull Insurance",
        },
      },
    ],
  },
};

const FAQS = [
  {
    q: "Apa itu Marine Hull Insurance?",
    a: "Marine Hull Insurance adalah asuransi yang melindungi fisik kapal secara keseluruhan, termasuk lambung (hull), mesin utama dan bantu, sistem navigasi, dan perlengkapan kapal dari berbagai risiko seperti tabrakan, kandas, kebakaran, ledakan, hingga tenggelam.",
  },
  {
    q: "Jenis kapal apa saja yang bisa diasuransikan dengan Marine Hull?",
    a: "Hampir semua jenis kapal dapat diasuransikan: kapal kargo, tanker, kapal penumpang, kapal feri, kapal tunda (tugboat), tongkang (barge), kapal nelayan komersial, speedboat, dan kapal wisata.",
  },
  {
    q: "Apakah Marine Hull menanggung kerusakan mesin saja?",
    a: "Tidak. Marine Hull menanggung seluruh unit kapal secara terintegrasi — lambung, mesin, sistem elektrikal, peralatan navigasi, dan perlengkapan tetap di atas kapal. Jika ingin perlindungan tambahan untuk mesin saja, tersedia juga perluasan Machinery Breakdown.",
  },
  {
    q: "Bagaimana cara menentukan nilai pertanggungan kapal?",
    a: "Nilai pertanggungan biasanya ditentukan berdasarkan Agreed Value (nilai yang disepakati antara pemilik kapal dan penanggung) atau Market Value (nilai pasar kapal). Survei kapal oleh surveyor independen umumnya diperlukan untuk kapal berukuran besar.",
  },
  {
    q: "Apakah Marine Hull menanggung kecelakaan akibat kelalaian kru?",
    a: "Ya. Berdasarkan klausul Institute Time Clauses – Hull (ITC), kelalaian kru, nakhoda, atau pilot yang menyebabkan kerusakan fisik kapal umumnya ditanggung, selama tidak ada unsur kesengajaan dari pemilik kapal.",
  },
];

const BENEFITS = [
  "Kerusakan lambung akibat tabrakan & kandas",
  "Kebakaran dan ledakan di atas kapal",
  "Cuaca buruk dan badai laut",
  "Tenggelam dan karam",
  "Pencurian & perampokan laut",
  "Biaya penyelamatan & salvage",
  "Tanggung jawab tabrakan (Collision Liability)",
  "General Average (kerugian umum)",
  "Kerusakan mesin akibat kecelakaan",
  "Biaya pengangkatan bangkai kapal",
];

export default function MarineHullPage() {
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
              { name: "Marine Hull Insurance", url: "/asuransi-marine/marine-hull" },
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
              { label: "Marine Hull Insurance" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Ship size={24} style={{ color: "#0a1628" }} />
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
            Marine Hull Insurance
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Perlindungan menyeluruh untuk kapal Anda — lambung, mesin, dan sistem navigasi terlindungi dari segala risiko laut. Dari perairan Batam hingga pelayaran internasional.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL("Halo Rio, saya butuh Marine Hull Insurance untuk kapal di Batam")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl text-navy"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              Konsultasi Marine Hull
            </a>
            <QuoteButton cluster="marine" lang="id" variant="onDark" className="!py-3.5 !font-semibold" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Cakupan Marine Hull"
            title="Apa yang Dilindungi Marine Hull Insurance?"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BENEFITS.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50"
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

      {/* Klausul */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Klausul Standar" title="Basis Perlindungan Marine Hull" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Institute Time Clauses – Hull (ITC)",
                desc: "Klausul standar internasional London untuk kapal yang beroperasi secara komersial. Memberikan perlindungan terlengkap berdasarkan periode waktu tertentu.",
              },
              {
                title: "Institute Voyage Clauses – Hull (IVC)",
                desc: "Perlindungan berdasarkan rute perjalanan spesifik dari satu pelabuhan ke pelabuhan lain. Cocok untuk pengiriman kapal satu kali (delivery voyage).",
              },
              {
                title: "Institute Fishing Vessel Clauses",
                desc: "Dirancang khusus untuk kapal nelayan komersial yang menghadapi risiko unik di perairan fishing ground, termasuk risiko kehilangan jaring dan alat tangkap.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                <h3 className="font-bold text-navy mb-2" style={{ color: "#0a1628" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produk & Artikel Terkait */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Lengkapi Proteksi Maritim" title="Produk & Artikel Terkait" center />
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/asuransi-marine/marine-cargo" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">Marine Cargo Insurance</h3>
              <p className="text-sm text-gray-600">Lindungi muatan/barang yang diangkut, terpisah dari fisik kapal.</p>
            </Link>
            <Link href="/asuransi-marine/builders-risk" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">Builder&apos;s Risk (DSU)</h3>
              <p className="text-sm text-gray-600">Untuk kapal yang masih dalam proses pembangunan di galangan.</p>
            </Link>
            <Link href="/blog/perbedaan-marine-hull-vs-cargo" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">Perbedaan Marine Hull vs Cargo</h3>
              <p className="text-sm text-gray-600">Baca penjelasan lengkap agar memilih polis yang tepat.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Pertanyaan Seputar Marine Hull Insurance"
            center
          />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <QuoteRequirements cluster="marine" lang="id" />

      <CTASection
        cluster="marine"
        title="Lindungi Kapal Anda Sekarang"
        waMsg="Halo Rio, saya ingin Marine Hull Insurance untuk kapal saya di Batam"
      />
    </>
  );
}
