// app/asuransi-marine/marine-cargo/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, CTASection, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import QuoteButton from "@/components/quote/QuoteButton";
import QuoteRequirements from "@/components/quote/QuoteRequirements";
import { Package, CheckCircle2, AlertTriangle, FileText, Phone, Ship, Plane, Truck } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Marine Cargo Insurance Batam – Asuransi Pengiriman Barang Laut | Asuransi Batam",
  description:
    "Marine Cargo Insurance di Batam untuk perlindungan barang kiriman via laut, udara, dan darat. Ekspor, impor, dan pengiriman domestik. Konsultasi dengan Rio!",
  canonical: "/asuransi-marine/marine-cargo",
  languages: {
    id: "https://asuransibatam.com/asuransi-marine/marine-cargo",
    en: "https://asuransibatam.com/en/marine-insurance/marine-cargo",
  },
});

// ─── Schema: Service ───
const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marine Cargo Insurance Batam",
  description:
    "Asuransi pengiriman barang laut di Batam mencakup perlindungan muatan selama pengiriman ekspor, impor, dan domestik.",
  url: "https://asuransibatam.com/asuransi-marine/marine-cargo",
  serviceType: "Asuransi Marine – Marine Cargo",
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
          name: "Marine Cargo Insurance",
        },
      },
    ],
  },
};

const FAQS = [
  {
    q: "Apa itu Marine Cargo Insurance?",
    a: "Marine Cargo Insurance adalah asuransi yang melindungi barang atau muatan selama proses pengiriman dari satu tempat ke tempat lain — baik melalui jalur laut, udara, maupun darat. Perlindungan mencakup risiko kerusakan, kehilangan, maupun pencurian selama perjalanan.",
  },
  {
    q: "Siapa yang sebaiknya memiliki Marine Cargo Insurance?",
    a: "Semua pihak yang terlibat dalam pengiriman barang bernilai tinggi: eksportir, importir, perusahaan dagang (trader), distributor, perusahaan manufaktur, dan freight forwarder. Asuransi ini melindungi nilai barang yang sedang dalam perjalanan.",
  },
  {
    q: "Apa perbedaan klausul ICC A, B, dan C?",
    a: "ICC (A) memberikan perlindungan paling luas — all risks kecuali yang dikecualikan secara eksplisit. ICC (B) menanggung risiko tertentu seperti kebakaran, kandas, dan banjir. ICC (C) menanggung risiko paling terbatas, hanya risiko utama seperti kebakaran dan kapal kandas. Pemilihan klausul tergantung jenis barang dan kebutuhan.",
  },
  {
    q: "Apakah pengiriman antar pulau di Indonesia bisa diasuransikan?",
    a: "Ya. Marine Cargo Insurance juga menanggung pengiriman domestik antar pulau, termasuk rute Batam–Jakarta, Batam–Surabaya, dan rute-rute dalam negeri lainnya.",
  },
  {
    q: "Apakah klaim bisa diajukan jika barang rusak saat bongkar muat?",
    a: "Ya, selama barang masih dalam periode pertanggungan dan kerusakan terjadi akibat risiko yang dijamin polis, klaim bongkar muat dapat diajukan. Polis biasanya mencakup dari gudang pengirim hingga gudang penerima (warehouse-to-warehouse).",
  },
  {
    q: "Berapa premi Marine Cargo Insurance?",
    a: "Premi dihitung berdasarkan nilai barang (CIF + 10%), jenis barang, rute pengiriman, klausul yang dipilih (ICC A/B/C), dan rekam jejak klaim. Umumnya berkisar antara 0,1%–0,5% dari nilai barang. Hubungi kami untuk mendapatkan kalkulasi premi yang tepat sesuai kebutuhan pengiriman Anda.",
  },
  {
    q: "Dokumen apa yang dibutuhkan untuk mengurus Marine Cargo Insurance?",
    a: "Dokumen yang umumnya dibutuhkan: invoice atau packing list barang, bill of lading (BL) atau airway bill (AWB), packing list, dan keterangan rute pengiriman. Untuk barang tertentu, mungkin diperlukan dokumen tambahan seperti sertifikat asal barang.",
  },
  {
    q: "Bagaimana cara mengajukan klaim Marine Cargo?",
    a: "Segera hubungi agen/broker asuransi Anda begitu terjadi kerusakan atau kehilangan. Dokumentasikan kondisi barang dengan foto, simpan semua dokumen pengiriman, buat laporan kepada pengangkut (Letter of Protest), dan ajukan klaim dalam batas waktu yang ditentukan polis — biasanya 14 hari sejak barang tiba.",
  },
];

const BENEFITS = [
  "Kerusakan akibat kebakaran & ledakan",
  "Kandas, tabrakan, dan karam kapal pengangkut",
  "Banjir air laut masuk ke kapal",
  "Pencurian dan perompakan",
  "Kerusakan akibat cuaca ekstrem",
  "Kontaminasi dan kerusakan basah",
  "Kerusakan saat bongkar muat",
  "General Average contribution",
  "Biaya survei dan salvage",
  "Perlindungan warehouse-to-warehouse",
];

const CLAIM_STEPS = [
  {
    step: "01",
    title: "Dokumentasi Kerusakan",
    desc: "Foto kondisi barang segera setelah ditemukan kerusakan atau kehilangan. Jangan pindahkan barang sebelum didokumentasikan.",
  },
  {
    step: "02",
    title: "Letter of Protest",
    desc: "Buat surat keberatan (Letter of Protest) kepada pihak pengangkut sebagai bukti formal kejadian di atas kapal atau saat pengiriman.",
  },
  {
    step: "03",
    title: "Hubungi Agen Asuransi",
    desc: "Segera hubungi Rio di Asuransi Batam. Kami akan memandu proses klaim dari awal hingga pembayaran ganti rugi.",
  },
  {
    step: "04",
    title: "Survei & Verifikasi",
    desc: "Perusahaan asuransi akan menunjuk surveyor untuk memverifikasi kerugian. Siapkan semua dokumen: invoice, BL/AWB, packing list.",
  },
  {
    step: "05",
    title: "Pembayaran Klaim",
    desc: "Setelah verifikasi selesai, ganti rugi akan dibayarkan sesuai nilai kerugian yang disetujui dan ketentuan polis.",
  },
];

const CARGO_TYPES = [
  {
    icon: Ship,
    title: "Pengiriman Laut",
    desc: "Ekspor–impor via pelabuhan Batu Ampar, Sekupang, dan Nongsa. Termasuk pengiriman ke Singapura, Malaysia, dan seluruh dunia.",
  },
  {
    icon: Plane,
    title: "Pengiriman Udara",
    desc: "Kargo via Bandara Internasional Hang Nadim Batam. Cocok untuk barang bernilai tinggi, mudah rusak, atau membutuhkan pengiriman cepat.",
  },
  {
    icon: Truck,
    title: "Pengiriman Darat & Domestik",
    desc: "Pengiriman antar pulau dalam negeri, termasuk rute Batam–Jakarta, Batam–Surabaya, dan wilayah lainnya di Indonesia.",
  },
];

export default function MarineCargoPage() {
  return (
    <>
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
              { name: "Marine Cargo Insurance", url: "/asuransi-marine/marine-cargo" },
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
              { label: "Marine Cargo Insurance" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Package size={24} style={{ color: "#0a1628" }} />
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
            Marine Cargo Insurance
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Barang kiriman Anda terlindungi dari gudang pengirim hingga tangan penerima. Ekspor, impor, maupun pengiriman domestik — semua risiko selama perjalanan laut tertanggung.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL("Halo Rio, saya butuh Marine Cargo Insurance untuk pengiriman barang dari Batam")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl text-navy"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              Konsultasi Marine Cargo
            </a>
            <QuoteButton cluster="marine" lang="id" variant="onDark" className="!py-3.5 !font-semibold" />
          </div>
        </div>
      </section>

      {/* Apa itu Marine Cargo — EEAT: Expertise & Experience */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Tentang Marine Cargo"
            title="Mengapa Marine Cargo Insurance Penting bagi Bisnis di Batam?"
          />
          <div className="prose prose-gray max-w-none mt-8 space-y-5 text-gray-700 leading-relaxed">
            <p>
              Batam adalah salah satu kota dengan aktivitas ekspor–impor tertinggi di Indonesia. Sebagai Kawasan Perdagangan Bebas (Free Trade Zone), Batam menjadi pintu gerbang perdagangan internasional — terutama dengan Singapura, Malaysia, dan negara-negara Asia lainnya. Pelabuhan Batu Ampar dan Bandara Hang Nadim setiap harinya menangani ribuan ton muatan dari berbagai jenis industri: elektronik, manufaktur, bahan kimia, hingga mesin industri.
            </p>
            <p>
              Namun, perjalanan barang dari titik asal ke tujuan menyimpan berbagai risiko yang tidak selalu bisa diprediksi — cuaca buruk di laut, kerusakan saat bongkar muat, atau bahkan kasus pencurian di perjalanan. Di sinilah <strong>Marine Cargo Insurance</strong> berperan sebagai jaring pengaman finansial yang wajib dimiliki oleh setiap pelaku bisnis yang mengirimkan barang bernilai tinggi.
            </p>
            <p>
              Marine Cargo Insurance bukan hanya untuk perusahaan besar. Eksportir skala menengah, importir bahan baku, hingga freight forwarder lokal di Batam semuanya berpotensi mengalami kerugian besar jika satu kontainer saja mengalami kerusakan atau kehilangan tanpa perlindungan asuransi. Dengan premi yang relatif kecil dibandingkan nilai barang, Marine Cargo Insurance adalah investasi perlindungan yang sangat efisien.
            </p>
          </div>
        </div>
      </section>

      {/* Jenis Pengiriman */}
      <section className="py-16 px-4" style={{ background: "#f0f4fa" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Cakupan Moda Transportasi"
            title="Marine Cargo untuk Semua Jalur Pengiriman"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {CARGO_TYPES.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg, #1a4fa0, #0e3460)" }}
                >
                  <item.icon size={22} color="#fff" />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#0a1628" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Cakupan Marine Cargo"
            title="Risiko yang Ditanggung Marine Cargo Insurance"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
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

          {/* Pengecualian umum */}
          <div className="mt-10 p-5 rounded-2xl border border-amber-200 bg-amber-50 flex gap-4">
            <AlertTriangle size={20} className="flex-shrink-0 mt-0.5 text-amber-600" />
            <div>
              <p className="font-semibold text-amber-800 mb-1">Pengecualian Umum</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                Risiko yang umumnya <strong>tidak ditanggung</strong>: kerusakan akibat pengemasan yang tidak memadai, sifat alami barang (susut, penguapan), keterlambatan pengiriman, dan risiko perang atau pemogokan (kecuali dengan klausul tambahan). Konsultasikan kebutuhan spesifik barang Anda kepada kami sebelum memilih polis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Klausul ICC */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Klausul Cargo" title="Pilihan Tingkat Perlindungan (ICC Clauses)" center />
          <p className="text-center text-gray-600 text-sm mt-2 mb-10 max-w-2xl mx-auto">
            Institute Cargo Clauses (ICC) adalah standar internasional yang menentukan luas cakupan perlindungan Marine Cargo Insurance. Pilih sesuai nilai dan jenis barang Anda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "ICC (C)",
                title: "Perlindungan Dasar",
                color: "#4a7fb5",
                desc: "Menanggung risiko utama: kebakaran, ledakan, kapal kandas/karam, dan tabrakan. Cocok untuk barang dengan nilai lebih rendah atau risiko terbatas.",
                cocok: "Barang curah, komoditas umum, material konstruksi",
              },
              {
                label: "ICC (B)",
                title: "Perlindungan Menengah",
                color: "#1a4fa0",
                desc: "Mencakup semua risiko ICC (C) ditambah gempa bumi, gunung meletus, petir, banjir air laut, kerusakan akibat cuaca, dan pencurian sebagian.",
                cocok: "Barang manufaktur, mesin industri, produk olahan",
              },
              {
                label: "ICC (A)",
                title: "Perlindungan Terluas",
                color: "#0a1628",
                desc: "All risks — menanggung semua risiko kehilangan atau kerusakan yang tidak secara spesifik dikecualikan. Direkomendasikan untuk barang bernilai tinggi.",
                cocok: "Elektronik, alat medis, barang mewah, mesin presisi",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100"
              >
                <div
                  className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-3"
                  style={{ background: item.color }}
                >
                  {item.label}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#0a1628" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-1">Cocok untuk</p>
                  <p className="text-sm text-gray-700">{item.cocok}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Kerja Klaim — EEAT: Authoritativeness & Trustworthiness */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Proses Klaim"
            title="Cara Mengajukan Klaim Marine Cargo"
            center
          />
          <p className="text-center text-gray-600 text-sm mt-2 mb-10 max-w-xl mx-auto">
            Klaim yang cepat dan tepat dimulai dari langkah yang benar. Berikut alur klaim Marine Cargo Insurance bersama Asuransi Batam.
          </p>
          <div className="space-y-4">
            {CLAIM_STEPS.map((s) => (
              <div
                key={s.step}
                className="flex gap-5 p-5 rounded-2xl border border-gray-100 bg-gray-50"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: "linear-gradient(135deg, #1a4fa0, #0e3460)" }}
                >
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{s.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dokumen klaim */}
          <div className="mt-8 p-5 rounded-2xl border border-blue-100 bg-blue-50 flex gap-4">
            <FileText size={20} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
            <div>
              <p className="font-semibold mb-1" style={{ color: "#0a1628" }}>Dokumen Klaim yang Perlu Disiapkan</p>
              <ul className="text-sm text-gray-700 space-y-1 mt-2">
                <li>• Polis asuransi Marine Cargo</li>
                <li>• Invoice & packing list barang</li>
                <li>• Bill of Lading (BL) atau Airway Bill (AWB)</li>
                <li>• Foto kerusakan / berita acara kehilangan</li>
                <li>• Letter of Protest kepada pengangkut</li>
                <li>• Laporan surveyor (jika ada)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mengapa Asuransi Batam — EEAT: Experience */}
      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Mengapa Kami"
            title="Konsultasi Marine Cargo Insurance di Batam Bersama Rio"
          />
          <div className="mt-8 space-y-5 text-gray-700 leading-relaxed">
            <p>
              Sebagai praktisi asuransi yang berbasis di Batam, saya — Rio — memahami langsung dinamika bisnis ekspor–impor di kota ini. Setiap hari saya membantu pelaku usaha dari berbagai sektor: manufaktur di Kawasan Industri Muka Kuning, distributor di Nagoya, hingga freight forwarder di sekitar Pelabuhan Batu Ampar — memilih polis Marine Cargo yang sesuai dengan jenis barang dan rute pengirimannya.
            </p>
            <p>
              Saya bekerja sama dengan perusahaan asuransi terpercaya yang terdaftar dan diawasi OJK, sehingga Anda mendapatkan perlindungan yang sah secara hukum dengan proses klaim yang transparan. Tidak perlu repot datang ke kantor — konsultasi bisa dilakukan via WhatsApp, dan dokumen polis dikirim langsung ke email Anda.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Berbasis di Batam", sub: "Paham rute & pelabuhan lokal" },
              { label: "Mitra OJK", sub: "Perusahaan asuransi resmi" },
              { label: "Konsultasi Gratis", sub: "Via WhatsApp, cepat & mudah" },
              { label: "Klaim Terdampingi", sub: "Kami bantu dari awal hingga selesai" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>{item.label}</p>
                <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produk & Artikel Terkait */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Lengkapi Pengiriman Anda" title="Produk & Artikel Terkait" center />
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/asuransi-marine/marine-hull" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">Marine Hull Insurance</h3>
              <p className="text-sm text-gray-600">Untuk pemilik kapal yang juga ingin melindungi fisik kapalnya sendiri.</p>
            </Link>
            <Link href="/blog/asuransi-pengiriman-batam-singapore" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">Asuransi Pengiriman Batam–Singapura</h3>
              <p className="text-sm text-gray-600">Panduan asuransi cargo untuk rute pengiriman lintas negara.</p>
            </Link>
            <Link href="/blog/asuransi-cargo-ekspor-batam" className="block p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] transition-all bg-gray-50">
              <h3 className="font-bold text-[#0a1628] mb-2">Asuransi Cargo Ekspor Batam</h3>
              <p className="text-sm text-gray-600">Tips memilih perlindungan untuk barang ekspor dari Batam.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "#f0f4fa" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Pertanyaan Seputar Marine Cargo Insurance"
            center
          />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <QuoteRequirements cluster="marine" lang="id" />

      <CTASection
        cluster="marine"
        title="Lindungi Barang Kiriman Anda"
        waMsg="Halo Rio, saya ingin Marine Cargo Insurance untuk pengiriman dari Batam"
      />
    </>
  );
}
