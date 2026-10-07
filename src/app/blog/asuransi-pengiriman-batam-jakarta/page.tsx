// app/blog/asuransi-pengiriman-batam-jakarta/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaFAQ, schemaBreadcrumb } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Breadcrumb, CTASection, SectionHeader } from "@/components/ui/index";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Package, CheckCircle2, AlertTriangle, Truck } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Pengiriman Barang Batam ke Jakarta – Marine Cargo Domestik | Asuransi Batam",
  description:
    "Lindungi kiriman barang dari Batam ke Jakarta dengan Marine Cargo Insurance. Ekspedisi laut, Roro, dan kontainer. Premi terjangkau, klaim mudah. Hubungi Rio!",
  canonical: "https://asuransibatam.com/blog/asuransi-pengiriman-batam-jakarta",
  languages: {
    id: "https://asuransibatam.com/blog/asuransi-pengiriman-batam-jakarta",
    en: "https://asuransibatam.com/en/blog/batam-jakarta-cargo-insurance",
  },
});

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Pengiriman Barang dari Batam ke Jakarta",
  description:
    "Panduan lengkap asuransi pengiriman barang jalur laut dari Batam ke Jakarta, mencakup risiko, klausul ICC, dan cara memilih polis yang tepat.",
  url: "https://asuransibatam.com/blog/asuransi-pengiriman-batam-jakarta",
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
    q: "Apakah pengiriman barang dari Batam ke Jakarta wajib diasuransikan?",
    a: "Tidak wajib secara hukum, namun sangat disarankan. Rute Batam–Jakarta melewati perairan Selat Karimata yang memiliki risiko cuaca dan gelombang tinggi, terutama pada musim barat (November–Februari). Tanpa asuransi, kerusakan atau kehilangan ditanggung pengirim sepenuhnya.",
  },
  {
    q: "Berapa lama transit pengiriman laut Batam ke Jakarta?",
    a: "Rata-rata 3–5 hari untuk jalur kapal kargo reguler, tergantung jenis kapal dan kondisi cuaca. Selama periode transit inilah polis Marine Cargo aktif melindungi barang Anda.",
  },
  {
    q: "Apa perbedaan asuransi cargo laut vs darat untuk rute ini?",
    a: "Pengiriman Batam ke Jakarta tidak bisa melalui jalur darat karena Batam adalah pulau. Semua pengiriman melalui moda laut, sehingga Marine Cargo Insurance adalah satu-satunya pilihan yang relevan untuk melindungi muatan selama perjalanan.",
  },
  {
    q: "Barang apa saja yang bisa diasuransikan untuk rute Batam–Jakarta?",
    a: "Hampir semua jenis barang: produk elektronik dan komponen, furnitur, makanan dan minuman kemasan, bahan bangunan, mesin industri, tekstil, dan barang konsumsi lainnya. Barang bernilai tinggi seperti elektronik dan komponen pabrik sangat dianjurkan menggunakan klausul ICC (A).",
  },
  {
    q: "Bagaimana cara mengajukan klaim jika barang rusak saat tiba di Jakarta?",
    a: "Dokumentasikan kerusakan dengan foto sebelum membuka segel atau tanda tangan di surat jalan. Segera laporkan ke agen asuransi (kontak Rio) dan perusahaan pengiriman. Siapkan dokumen: Bill of Lading, invoice barang, packing list, dan foto kerusakan. Klaim akan diproses oleh surveyor independen.",
  },
];

const RISIKO = [
  "Kerusakan akibat air laut masuk palka kapal",
  "Guncangan ekstrem saat cuaca buruk di laut",
  "Kebakaran atau ledakan di kapal",
  "Kerusakan saat bongkar muat di pelabuhan",
  "Kehilangan atau pencurian di perjalanan",
  "Kapal kandas atau tabrakan",
  "Kerusakan akibat penumpukan muatan",
  "Kontaminasi dari muatan lain",
];

const DOKUMEN = [
  { label: "Bill of Lading (B/L)", desc: "Dokumen pengiriman resmi dari perusahaan pelayaran" },
  { label: "Commercial Invoice", desc: "Faktur nilai barang yang dikirim" },
  { label: "Packing List", desc: "Daftar rinci isi kiriman" },
  { label: "Certificate of Insurance", desc: "Sertifikat polis cargo Anda" },
  { label: "Shipping Manifest", desc: "Manifest kargo kapal dari pelabuhan asal" },
];

export default function BatamJakartaCargoPage() {
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
              { name: "Asuransi Pengiriman Batam ke Jakarta", url: "/blog/asuransi-pengiriman-batam-jakarta" },
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
              { label: "Pengiriman Batam–Jakarta" },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)" }}
            >
              <Truck size={24} style={{ color: "#0a1628" }} />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "#c9a84c20", color: "#f0d080" }}
            >
              Marine Cargo – Domestik
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Asuransi Pengiriman Barang<br />Batam ke Jakarta
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Rute Batam–Jakarta adalah salah satu jalur kargo domestik tersibuk di Indonesia. Lindungi
            nilai kiriman Anda dari risiko laut, cuaca ekstrem, dan kerusakan bongkar muat — sejak
            barang meninggalkan gudang hingga tiba di tujuan.
          </p>
          <a
            href={WHATSAPP_URL("Halo Rio, saya butuh asuransi pengiriman barang dari Batam ke Jakarta")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-xl text-navy"
            style={{ background: "linear-gradient(135deg, #c9a84c, #f0d080)", color: "#0a1628" }}
          >
            Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </section>

      {/* Mengapa Rute Ini Berisiko */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Kenali Risikonya"
            title="Mengapa Pengiriman Batam–Jakarta Perlu Dilindungi?"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Batam adalah pulau — tidak ada jalur darat ke Pulau Jawa. Setiap barang yang dikirim
                ke Jakarta harus melewati Selat Karimata dan Laut Jawa, dua perairan yang dikenal
                dengan kondisi gelombang tinggi terutama pada musim barat.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Industri manufaktur di Batam — elektronik, minyak & gas, galangan kapal, dan
                komponen otomotif — secara rutin mengirimkan barang senilai miliaran rupiah ke
                Jakarta setiap minggunya. Risiko kerugian tanpa asuransi cargo bisa sangat besar.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Marine Cargo Insurance memberikan perlindungan{" "}
                <strong>warehouse-to-warehouse</strong>: dari gudang di Batam, selama proses
                pengiriman laut, hingga barang diterima di gudang tujuan di Jakarta.
              </p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle size={20} style={{ color: "#b45309" }} />
                <span className="font-bold text-amber-800">Risiko Utama Rute Batam–Jakarta</span>
              </div>
              <ul className="space-y-3">
                {RISIKO.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
                    <span className="text-sm text-gray-700">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pilihan Klausul */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Pilihan Polis"
            title="Klausul ICC yang Tersedia untuk Rute Domestik"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                label: "ICC (C)",
                title: "Perlindungan Dasar",
                color: "#4a7fb5",
                desc: "Menanggung risiko utama: kebakaran, ledakan, kapal kandas, dan tabrakan. Cocok untuk barang umum dengan nilai relatif rendah.",
                rec: false,
              },
              {
                label: "ICC (B)",
                title: "Perlindungan Menengah",
                color: "#1a4fa0",
                desc: "Semua risiko ICC (C) ditambah gelombang besar, banjir air laut, gempa bumi, dan pencurian sebagian. Sesuai untuk barang konsumsi dan furnitur.",
                rec: true,
              },
              {
                label: "ICC (A)",
                title: "Perlindungan Terluas",
                color: "#0a1628",
                desc: "All risks — semua risiko kecuali yang dikecualikan. Direkomendasikan untuk elektronik, komponen industri, dan barang bernilai tinggi dari Batam.",
                rec: false,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 relative"
              >
                {item.rec && (
                  <div
                    className="absolute -top-3 right-4 text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ background: "#c9a84c" }}
                  >
                    Populer
                  </div>
                )}
                <div
                  className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-3"
                  style={{ background: item.color }}
                >
                  {item.label}
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#0a1628" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dokumen yang Diperlukan */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Persiapan Klaim"
            title="Dokumen Penting untuk Pengiriman Batam–Jakarta"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {DOKUMEN.map((d) => (
              <div
                key={d.label}
                className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50"
              >
                <Package size={20} className="flex-shrink-0 mt-0.5" style={{ color: "#1a4fa0" }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{d.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{d.desc}</p>
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
            title="Pertanyaan Seputar Pengiriman Barang Batam–Jakarta"
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
                <li><a href="/blog/asuransi-cargo-ekspor-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Cargo Ekspor dari Batam</a></li>
                <li><a href="/blog/cara-klaim-asuransi-marine-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Klaim Asuransi Marine Cargo</a></li>
                <li><a href="/blog/asuransi-pengiriman-batam-singapore" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Pengiriman Batam–Singapura</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CTASection
        cluster="marine"
        title="Siap Lindungi Kiriman Batam–Jakarta Anda?"
        waMsg="Halo Rio, saya ingin asuransi cargo untuk pengiriman barang dari Batam ke Jakarta"
      />
    </>
  );
            }
