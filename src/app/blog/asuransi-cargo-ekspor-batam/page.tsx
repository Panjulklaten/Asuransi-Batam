// app/blog/asuransi-cargo-ekspor-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, SectionHeader } from "@/components/ui/index";
import QuoteCard from "@/components/quote/QuoteCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Package, CheckCircle2, Globe } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Pengiriman Barang Ekspor dari Batam – Cargo Insurance Internasional",
  description:
    "Lindungi ekspor Anda dari Batam ke Singapura, Malaysia, dan mancanegara. Marine Cargo Insurance untuk eksportir Batam. Proses mudah, klaim cepat. Hubungi Rio!",
  canonical: "/blog/asuransi-cargo-ekspor-batam",
  languages: {
    id: "https://asuransibatam.com/blog/asuransi-cargo-ekspor-batam",
    en: "https://asuransibatam.com/en/blog/batam-export-cargo-insurance",
  },
});

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Pengiriman Barang Ekspor dari Batam",
  description:
    "Panduan asuransi cargo untuk eksportir di Batam, termasuk rute ke Singapura, Malaysia, dan negara lainnya, serta pemilihan klausul ICC yang tepat.",
  url: "https://asuransibatam.com/blog/asuransi-cargo-ekspor-batam",
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
    q: "Apakah eksportir di Batam wajib memiliki asuransi cargo?",
    a: "Bergantung pada syarat kontrak ekspor. Jika kontrak menggunakan Incoterms CIF atau CIP, pengirim (eksportir) wajib menyediakan asuransi cargo. Jika menggunakan FOB atau EXW, tanggung jawab asuransi beralih ke pembeli. Namun disarankan selalu diasuransikan untuk melindungi kepentingan bisnis Anda.",
  },
  {
    q: "Apa perbedaan polis cargo ekspor vs impor?",
    a: "Secara teknis klausul dan produknya sama. Perbedaannya pada siapa yang mengambil polis: eksportir untuk kiriman keluar, importir untuk kiriman masuk. Dari Batam, eksportir biasanya melindungi rute dari gudang Batam hingga pelabuhan tujuan di negara penerima.",
  },
  {
    q: "Apakah asuransi cargo ekspor dari Batam bisa menanggung rute ke mana saja?",
    a: "Ya. Marine Cargo Insurance bersifat internasional — bisa menanggung rute ke negara mana pun yang telah disetujui dalam polis. Rute populer dari Batam antara lain ke Singapura, Malaysia (Port Klang), China, Jepang, dan negara-negara Eropa.",
  },
  {
    q: "Bagaimana jika pembeli di luar negeri menolak barang karena rusak?",
    a: "Jika kerusakan terjadi selama pengiriman dan termasuk dalam risiko yang dijamin polis, eksportir dapat mengajukan klaim kepada asuransi. Surveyor independen akan dikirim ke lokasi untuk menilai kerusakan, dan klaim dibayarkan sesuai nilai yang tertera dalam polis.",
  },
  {
    q: "Apakah ada asuransi yang bisa menanggung barang selama pameran dagang di luar negeri?",
    a: "Ya, ada endorsement atau polis khusus untuk exhibition/fair coverage. Barang yang dipamerkan di luar negeri bisa dilindungi sejak berangkat dari Batam, selama pameran berlangsung, hingga kembali ke Indonesia. Konsultasikan kebutuhan ini kepada agen Anda.",
  },
];

const INCOTERMS = [
  {
    term: "CIF",
    kepanjangan: "Cost, Insurance & Freight",
    kewajiban: "Eksportir wajib sediakan asuransi cargo",
    pihak: "Eksportir",
    warna: "#0a1628",
  },
  {
    term: "CIP",
    kepanjangan: "Carriage & Insurance Paid To",
    kewajiban: "Eksportir wajib sediakan asuransi cargo",
    pihak: "Eksportir",
    warna: "#0a1628",
  },
  {
    term: "FOB",
    kepanjangan: "Free On Board",
    kewajiban: "Asuransi menjadi tanggung jawab importir",
    pihak: "Importir",
    warna: "#4a7fb5",
  },
  {
    term: "EXW",
    kepanjangan: "Ex Works",
    kewajiban: "Seluruh risiko ditanggung pembeli sejak pabrik",
    pihak: "Importir",
    warna: "#4a7fb5",
  },
];

const KOMODITAS = [
  { nama: "Komponen Elektronik & PCB", level: "ICC (A)" },
  { nama: "Produk Industri Minyak & Gas", level: "ICC (A)" },
  { nama: "Suku Cadang Kapal", level: "ICC (A)" },
  { nama: "Furnitur & Kerajinan", level: "ICC (B)" },
  { nama: "Tekstil & Garmen", level: "ICC (B)" },
  { nama: "Bahan Bangunan & Baja", level: "ICC (C)" },
];

export default function CargoEksporBatamPage() {
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
              { name: "Asuransi Cargo Ekspor Batam", url: "/blog/asuransi-cargo-ekspor-batam" },
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
              { label: "Cargo Ekspor Batam" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Globe size={24} style={{ color: "#0a1628" }} />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "#c9a84c20", color: "#f0d080" }}
            >
              Cargo Ekspor – Internasional
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Asuransi Pengiriman<br />Barang Ekspor dari Batam
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Batam adalah salah satu kota ekspor terbesar di Indonesia — elektronik, komponen industri,
            dan produk manufaktur lainnya dikirim ke Singapura, Malaysia, dan puluhan negara setiap
            harinya. Lindungi nilai ekspor Anda dengan cargo insurance yang tepat.
          </p>
          <a
            href={WHATSAPP_URL("Halo Rio, saya eksportir di Batam dan butuh asuransi cargo untuk pengiriman ke luar negeri")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl"
            style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)", color: "#0a1628" }}
          >
            Konsultasi untuk Eksportir
          </a>
        </div>
      </section>

      {/* Incoterms */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Kontrak Ekspor"
            title="Incoterms dan Kewajiban Asuransi Cargo"
          />
          <p className="text-gray-600 mt-4 max-w-2xl">
            Kewajiban menyediakan asuransi cargo ditentukan oleh Incoterms yang disepakati dalam
            kontrak jual beli internasional. Pastikan Anda memahami posisi tanggung jawab Anda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {INCOTERMS.map((item) => (
              <div
                key={item.term}
                className="rounded-2xl p-6 border"
                style={{ borderColor: item.warna + "30", background: item.warna + "06" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span
                      className="text-white text-sm font-bold px-3 py-1 rounded-full"
                      style={{ background: item.warna }}
                    >
                      {item.term}
                    </span>
                    <p className="text-xs text-gray-500 mt-2">{item.kepanjangan}</p>
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full border"
                    style={{ color: item.warna, borderColor: item.warna + "40" }}
                  >
                    {item.pihak}
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{item.kewajiban}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            *Meski menggunakan FOB atau EXW, eksportir tetap dapat mengambil asuransi cargo secara
            sukarela untuk melindungi kepentingan reputasi bisnisnya.
          </p>
        </div>
      </section>

      {/* Komoditas Ekspor Batam */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Rekomendasi Klausul"
            title="Komoditas Ekspor Batam dan Klausul yang Direkomendasikan"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {KOMODITAS.map((k) => (
              <div
                key={k.nama}
                className="bg-white rounded-xl p-5 flex items-center justify-between shadow-sm border border-blue-100"
              >
                <div className="flex items-start gap-3">
                  <Package size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
                  <span className="text-sm text-gray-700 font-medium">{k.nama}</span>
                </div>
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full text-white flex-shrink-0 ml-3"
                  style={{
                    background: k.level === "ICC (A)" ? "#0a1628" : k.level === "ICC (B)" ? "#1a4fa0" : "#4a7fb5",
                  }}
                >
                  {k.level}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6 text-center">
            *Rekomendasi klausul bersifat umum. Pemilihan akhir bergantung pada kondisi barang, rute, dan kesepakatan underwriter.
          </p>
        </div>
      </section>

      {/* Prosedur */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Langkah-Langkah"
            title="Cara Mendapatkan Polis Cargo Ekspor dari Batam"
          />
          <div className="mt-10 space-y-5">
            {[
              {
                step: "01",
                title: "Konsultasi & Informasi Pengiriman",
                desc: "Hubungi Rio via WhatsApp. Siapkan: jenis barang, nilai, rute tujuan, dan Incoterms kontrak Anda.",
              },
              {
                step: "02",
                title: "Penawaran & Pemilihan Klausul",
                desc: "Anda akan menerima penawaran premi berdasarkan data pengiriman. Pilih klausul ICC yang sesuai kebutuhan.",
              },
              {
                step: "03",
                title: "Pembayaran & Penerbitan Polis",
                desc: "Setelah pembayaran premi, polis atau certificate of insurance diterbitkan sebelum barang dikirim.",
              },
              {
                step: "04",
                title: "Pengiriman dengan Perlindungan Aktif",
                desc: "Polis aktif sejak barang meninggalkan gudang hingga tiba di tujuan akhir di negara penerima.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-5 p-5 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: "#1a4fa0" }}
                >
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
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
            title="Pertanyaan Seputar Cargo Ekspor dari Batam"
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
                <li><a href="/blog/premi-asuransi-marine-cargo-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Hitung Premi Marine Cargo di Batam</a></li>
                <li><a href="/blog/asuransi-pengiriman-batam-singapore" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Pengiriman Batam–Singapura</a></li>
                <li><a href="/blog/cara-klaim-asuransi-marine-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Klaim Asuransi Marine Cargo</a></li>
                <li><a href="/blog/perbedaan-marine-hull-vs-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Perbedaan Marine Hull vs Cargo</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <QuoteCard cluster="marine" />
    </>
  );
          }
