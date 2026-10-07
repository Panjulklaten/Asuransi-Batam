// app/blog/asuransi-pengiriman-mesin-alat-berat/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, CTASection, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CheckCircle2, Wrench, AlertTriangle } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Pengiriman Mesin dan Alat Berat dari Batam – Marine Cargo Heavy Equipment",
  description:
    "Asuransi khusus pengiriman mesin industri dan alat berat dari Batam. Perlindungan untuk excavator, crane, generator, dan mesin pabrik saat pengiriman laut. Hubungi Rio!",
  canonical: "/blog/asuransi-pengiriman-mesin-alat-berat",
  languages: {
    id: "https://asuransibatam.com/blog/asuransi-pengiriman-mesin-alat-berat",
    en: "https://asuransibatam.com/en/blog/machinery-heavy-equipment-shipping-insurance-batam",
  },
});

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Pengiriman Mesin dan Alat Berat dari Batam",
  description:
    "Panduan asuransi cargo untuk pengiriman mesin industri dan alat berat dari Batam, mencakup jenis perlindungan, risiko khusus, dan cara klaim.",
  url: "https://asuransibatam.com/blog/asuransi-pengiriman-mesin-alat-berat",
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
    q: "Apakah asuransi marine cargo bisa menanggung mesin dan alat berat?",
    a: "Ya. Marine Cargo Insurance dapat menanggung pengiriman mesin industri dan alat berat selama proses transit — baik via laut, darat, maupun kombinasi keduanya. Ini berbeda dari Machinery Insurance (yang menanggung risiko operasional mesin saat digunakan di lokasi kerja).",
  },
  {
    q: "Apa risiko terbesar dalam pengiriman mesin dan alat berat via laut?",
    a: "Risiko utama meliputi: kerusakan fisik akibat guncangan atau gaya laut saat bongkar muat, karat atau korosi akibat paparan air laut, deformasi akibat beban tumpukan yang tidak tepat, dan kerusakan komponen elektronik/hidrolik akibat kelembaban. Mesin berukuran besar seringkali dimuat sebagai breakbulk cargo yang lebih rentan dibanding kontainer.",
  },
  {
    q: "Apakah ada perbedaan asuransi untuk mesin baru vs bekas?",
    a: "Ya. Mesin baru umumnya lebih mudah dan murah untuk diasuransikan karena kondisi dan nilainya jelas. Mesin bekas (second-hand) perlu survei kondisi terlebih dahulu, dan preminya bisa lebih tinggi. Beberapa insurer juga membatasi cakupan untuk mesin dengan usia tertentu.",
  },
  {
    q: "Apakah survei pre-shipment diperlukan untuk mesin bernilai tinggi?",
    a: "Untuk mesin dengan nilai di atas ambang tertentu (umumnya di atas Rp 500 juta atau sesuai ketentuan insurer), insurer biasanya mensyaratkan survei kondisi sebelum pengiriman. Survei ini memastikan mesin dalam kondisi layak dan membantu proses klaim jika terjadi kerusakan.",
  },
  {
    q: "Apakah bisa diasuransikan jika mesin dikirim dalam keadaan dibongkar (knocked-down)?",
    a: "Ya. Pengiriman mesin dalam kondisi knocked-down (KD) atau partial assembly dapat diasuransikan. Pastikan setiap komponen terdaftar dalam packing list dan polis mencakup risiko selama proses pemuatan dan pembongkaran di pelabuhan.",
  },
];

const JENIS_MESIN = [
  { nama: "Excavator & Bulldozer", catatan: "Dimuat flat rack atau deck terbuka" },
  { nama: "Tower Crane & Mobile Crane", catatan: "Perlu pembongkaran dan pengepakan khusus" },
  { nama: "Generator Set & Power Plant", catatan: "Sensitif terhadap kelembaban dan guncangan" },
  { nama: "Mesin Produksi Pabrik (CNC, Press)", catatan: "Komponen presisi, perlu crating kuat" },
  { nama: "Pompa & Kompresor Industri", catatan: "Sering dikirin knocked-down" },
  { nama: "Boiler & Heat Exchanger", catatan: "Ukuran besar, breakbulk atau heavy-lift" },
  { nama: "Trafo & Peralatan Listrik Industri", catatan: "Sensitif terhadap air dan getaran" },
  { nama: "Drilling Equipment & Rig Parts", catatan: "Rute offshore atau ke lokasi tambang" },
];

const RISIKO_KHUSUS = [
  {
    judul: "Breakbulk & Heavy-Lift",
    icon: "⚓",
    desc: "Mesin besar tidak muat dalam kontainer sehingga dimuat sebagai breakbulk di dek terbuka, lebih terekspos cuaca dan risiko jatuh.",
  },
  {
    judul: "Kerusakan Akibat Korosi",
    icon: "🌊",
    desc: "Paparan udara laut dan percikan air asin dapat menyebabkan korosi cepat pada komponen besi dan baja yang tidak dilindungi.",
  },
  {
    judul: "Guncangan & Vibrasi",
    icon: "📳",
    desc: "Gelombang laut menyebabkan getaran terus-menerus yang dapat merusak komponen presisi, bearing, atau struktur frame.",
  },
  {
    judul: "Kerusakan Saat Bongkar Muat",
    icon: "🏗️",
    desc: "Penggunaan sling dan crane pelabuhan yang tidak tepat dapat menyebabkan kerusakan struktur atau komponen mesin.",
  },
];

export default function MesinAlatBeratPage() {
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
              { name: "Asuransi Pengiriman Mesin & Alat Berat", url: "/blog/asuransi-pengiriman-mesin-alat-berat" },
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
              { label: "Pengiriman Mesin & Alat Berat" },
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
              Cargo – Mesin & Alat Berat
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Asuransi Pengiriman<br />Mesin dan Alat Berat
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Mesin industri dan alat berat adalah aset bernilai tinggi yang menghadapi risiko unik
            selama pengiriman laut — mulai dari korosi air laut, guncangan gelombang, hingga
            kerusakan saat bongkar muat. Pastikan investasi Anda terlindungi sejak perjalanan pertama.
          </p>
          <a
            href={WHATSAPP_URL("Halo Rio, saya butuh asuransi cargo untuk pengiriman mesin/alat berat dari Batam")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl"
            style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)", color: "#0a1628" }}
          >
            Konsultasi Asuransi Mesin
          </a>
        </div>
      </section>

      {/* Kenapa Berbeda */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Cargo Khusus"
            title="Mengapa Pengiriman Mesin Membutuhkan Perhatian Khusus?"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Berbeda dari barang konsumsi biasa, mesin industri dan alat berat memiliki
                karakteristik yang membuatnya lebih rentan dan lebih kompleks dalam penanganan
                pengiriman:
              </p>
              <ul className="space-y-3">
                {[
                  "Dimensi dan bobot besar — seringkali tidak muat dalam kontainer standar",
                  "Nilai per unit sangat tinggi — kerugian tunggal bisa mencapai miliaran rupiah",
                  "Komponen sensitif (elektronik, hidrolik, pneumatik) rentan terhadap kelembaban",
                  "Perlu pengepakan (crating) dan metode muat khusus",
                  "Rute pengiriman seringkali ke lokasi terpencil atau offshore",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
                    <span className="text-sm text-gray-700">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle size={20} style={{ color: "#b45309" }} />
                <span className="font-bold text-amber-800">Risiko Khusus Pengiriman Mesin</span>
              </div>
              <div className="space-y-4">
                {RISIKO_KHUSUS.map((r) => (
                  <div key={r.judul} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{r.icon}</span>
                    <div>
                      <p className="font-semibold text-sm text-amber-900">{r.judul}</p>
                      <p className="text-xs text-amber-700 mt-0.5 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jenis Mesin yang Bisa Diasuransikan */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Cakupan Komoditas"
            title="Jenis Mesin dan Alat Berat yang Dapat Diasuransikan"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {JENIS_MESIN.map((m) => (
              <div
                key={m.nama}
                className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm border border-blue-100"
              >
                <Wrench size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{m.nama}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{m.catatan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perbedaan Cargo vs Machinery Insurance */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Penting Dipahami"
            title="Cargo Insurance vs Machinery Insurance — Apa Bedanya?"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {[
              {
                title: "Marine Cargo Insurance",
                color: "#1a4fa0",
                poin: [
                  "Melindungi mesin SELAMA proses pengiriman/transit",
                  "Aktif dari gudang asal hingga gudang tujuan",
                  "Menanggung kerusakan fisik akibat risiko perjalanan",
                  "Berhenti saat mesin tiba dan diterima di tujuan",
                  "Yang Anda butuhkan: saat mesin dikirim dari Batam",
                ],
              },
              {
                title: "Machinery Insurance (MB/EAR)",
                color: "#4a7fb5",
                poin: [
                  "Melindungi mesin SAAT DIOPERASIKAN di lokasi kerja",
                  "Aktif selama masa operasional mesin",
                  "Menanggung kerusakan mekanis, breakdown, dan sabotase",
                  "Untuk proyek konstruksi atau pabrik yang sedang beroperasi",
                  "Produk terpisah: Asuransi Machinery Breakdown / EAR",
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
                  {item.poin.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 rounded-2xl bg-blue-50 border border-blue-200 text-sm text-blue-800">
            💡 <strong>Tips:</strong> Untuk perlindungan menyeluruh, banyak perusahaan mengkombinasikan
            keduanya — Marine Cargo untuk saat pengiriman, dan Machinery Insurance setelah mesin
            tiba dan mulai beroperasi di site.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "#faf8f3" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Pertanyaan Seputar Pengiriman Mesin & Alat Berat"
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
                <li><a href="/asuransi-machinery/asuransi-alat-berat" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Alat Berat Batam</a></li>
                <li><a href="/asuransi-machinery" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Machinery Batam</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
              <ul className="space-y-2">
                <li><a href="/blog/asuransi-alat-berat-proyek-konstruksi" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Alat Berat Proyek Konstruksi</a></li>
                <li><a href="/blog/asuransi-excavator-dan-bulldozer" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Excavator dan Bulldozer</a></li>
                <li><a href="/blog/cara-klaim-asuransi-marine-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Klaim Asuransi Marine Cargo</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CTASection
        cluster="marine"
        title="Lindungi Mesin Anda Sejak Perjalanan Pertama"
        waMsg="Halo Rio, saya butuh asuransi cargo untuk pengiriman mesin/alat berat dari Batam"
      />
    </>
  );
      }

