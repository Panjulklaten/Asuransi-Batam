// app/blog/perbedaan-marine-hull-vs-cargo/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  Lightbulb,
  Ship,
  Package,
  Scale,
  Users,
  Wallet,
  MessageCircleMore,
  Gavel,
} from "lucide-react";

function SectionHeading({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 not-prose font-display font-bold text-[#0a1628] text-2xl md:text-[1.65rem] mt-12 mb-4">
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
        <Icon className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
      </span>
      {children}
    </h2>
  );
}

export const metadata: Metadata = generateSEO({
  title: "Perbedaan Marine Hull dan Marine Cargo",
  description:
    "Penjelasan lengkap perbedaan asuransi marine hull (kapal) dan marine cargo (muatan). Siapa yang wajib beli, berapa preminya, dan bagaimana keduanya bekerja bersama. Konsultasi Rio 0813-7333-6728.",
  canonical: "https://asuransibatam.com/blog/perbedaan-marine-hull-vs-cargo",
  languages: {
    id: "https://asuransibatam.com/blog/perbedaan-marine-hull-vs-cargo",
    en: "https://asuransibatam.com/en/blog/marine-hull-vs-cargo-insurance",
  },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Perbedaan Marine Hull dan Marine Cargo – Mana yang Anda Butuhkan?",
  description: "Penjelasan lengkap perbedaan asuransi marine hull (kapal) dan marine cargo (muatan). Siapa yang wajib beli, berapa preminya, dan bagaimana keduanya bekerja bersama.",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  author: { "@type": "Person", name: "Rio", jobTitle: "Praktisi Asuransi", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/blog/perbedaan-marine-hull-vs-cargo" },
};

export default function PerbedaanMarineHullVsCargoPage() {
  return (
    <ArticleLayout
      cluster="marine"
      title="Perbedaan Marine Hull dan Marine Cargo – Mana yang Anda Butuhkan?"
      description="Kapal sudah diasuransikan belum tentu muatannya aman. Pahami perbedaan mendasar dua produk ini sebelum memilih."
      date="7 Mei 2026"
      readTime="7 menit"
      category="Marine"
      breadcrumbs={[{ label: "Perbedaan Marine Hull vs Cargo", href: "/blog/perbedaan-marine-hull-vs-cargo" }]}
      schema={schema}
    >
      <SectionHeading icon={Lightbulb}>Salah Kaprah yang Mahal: &quot;Kapal Sudah Diasuransikan, Muatan Pasti Aman&quot;</SectionHeading>
      <p>
        Ini salah satu kesalahpahaman paling umum yang saya temui saat konsultasi dengan pengusaha di Batam. Pemilik kargo sering berasumsi bahwa karena kapal yang mengangkut barang mereka punya asuransi, otomatis muatan mereka terlindungi juga.
      </p>
      <p>
        Kenyataannya: <strong>asuransi kapal (marine hull) dan asuransi muatan (marine cargo) adalah dua produk yang sepenuhnya terpisah</strong> — melindungi objek berbeda, untuk pihak yang berbeda, dengan mekanisme klaim yang berbeda pula.
      </p>

      <SectionHeading icon={Ship}>Apa Itu Marine Hull Insurance?</SectionHeading>
      <p>
        Marine hull insurance adalah asuransi yang melindungi <strong>fisik kapal beserta perlengkapannya</strong> — lambung, mesin, peralatan navigasi, dan segala yang menjadi bagian permanen dari kapal.
      </p>
      <p><strong>Siapa yang membeli:</strong> Pemilik kapal (ship owner) atau operator armada. Di Batam, ini mencakup perusahaan pelayaran, pemilik kapal feri, operator tug boat, dan pemilik kapal patroli.</p>
      <p><strong>Yang dilindungi:</strong> kerusakan lambung akibat tabrakan, kandas, atau cuaca ekstrem; kerusakan mesin tak terduga (opsional); tanggung jawab kepada kapal lain dalam insiden tabrakan; dan kerugian total kapal.</p>
      <p><strong>Yang tidak dilindungi:</strong> isi muatan atau kargo di atas kapal.</p>

      <SectionHeading icon={Package}>Apa Itu Marine Cargo Insurance?</SectionHeading>
      <p>
        Marine cargo insurance melindungi <strong>barang atau muatan</strong> yang diangkut, bukan kendaraan pengangkutnya. Polis ini mengikuti barang dari gudang pengirim hingga gudang penerima — termasuk saat di dermaga, dalam kontainer, atau berpindah moda transportasi.
      </p>
      <p><strong>Siapa yang membeli:</strong> Pemilik barang — shipper, importir, eksportir, atau trading company. Dalam kontrak perdagangan internasional, siapa yang menanggung risiko bergantung pada Incoterms yang disepakati.</p>

      <p><strong>Tiga tingkat coverage berdasarkan ICC (Institute Cargo Clauses):</strong></p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Klausa</th>
              <th className="text-left px-4 py-3">Cakupan</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Cocok untuk</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["ICC (A)", "All risks – semua risiko kecuali yang dikecualikan", "Barang bernilai tinggi, elektronik, mesin"],
              ["ICC (B)", "Named perils – kebakaran, tabrakan, tenggelam, dll.", "Barang bulk, komoditas"],
              ["ICC (C)", "Risiko terbatas – hanya kerugian besar dan total loss", "Kargo berisiko rendah, harga murah"],
            ].map(([klausa, cakupan, cocok], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-bold text-[#1a4fa0] border-b border-[#e2e8f0]">{klausa}</td>
                <td className="px-4 py-3 text-[#374151] border-b border-[#e2e8f0]">{cakupan}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{cocok}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionHeading icon={Scale}>Perbandingan Langsung: Hull vs Cargo</SectionHeading>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Aspek</th>
              <th className="text-left px-4 py-3">Marine Hull</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Marine Cargo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Objek pertanggungan", "Fisik kapal", "Barang/muatan"],
              ["Tertanggung", "Pemilik kapal", "Pemilik barang"],
              ["Mengikuti", "Kapal", "Perjalanan barang"],
              ["Berlaku saat", "Kapal beroperasi", "Barang dalam transit"],
              ["Dasar nilai", "Nilai pasar kapal", "Nilai invoice + %"],
              ["Klaim diajukan oleh", "Pemilik/operator kapal", "Shipper/consignee"],
            ].map(([aspek, hull, cargo], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-medium text-[#0a1628] border-b border-[#e2e8f0]">{aspek}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{hull}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{cargo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionHeading icon={Ship}>Bagaimana Keduanya Bekerja Bersama dalam Satu Insiden?</SectionHeading>
      <p>
        Bayangkan kapal kargo kecil rute Batam–Jakarta mengalami kebakaran di dek dan sebagian muatan hangus. Pemilik kapal mengklaim kerusakan dek ke asuransi hull-nya. Pemilik muatan masing-masing mengklaim kerusakan barang mereka ke asuransi cargo masing-masing. Kedua klaim berjalan <strong>paralel dan independen</strong> — satu tidak mempengaruhi yang lain.
      </p>
      <p>Inilah mengapa dalam satu insiden yang sama, bisa ada puluhan klaim cargo terpisah dari berbagai pemilik barang, sementara hanya ada satu klaim hull dari pemilik kapal.</p>

      <SectionHeading icon={Gavel}>Apakah Carrier Bertanggung Jawab atas Kerusakan Muatan?</SectionHeading>
      <p>
        Secara hukum, carrier memang punya tanggung jawab terbatas berdasarkan Konvensi Hague-Visby. Namun ada tiga masalah praktis: liability carrier sangat terbatas (dihitung per package atau per kilogram), proses tuntutan ke carrier panjang dan tidak pasti, serta carrier punya banyak pengecualian seperti <em>act of God</em> dan force majeure.
      </p>
      <p>Itulah mengapa pemilik barang dianjurkan memiliki asuransi cargo sendiri daripada hanya mengandalkan tanggung jawab carrier.</p>

      <SectionHeading icon={Users}>Siapa yang Perlu Beli Apa?</SectionHeading>
      <p><strong>Beli Marine Hull jika Anda</strong> memiliki atau mengoperasikan kapal komersial, armada tug boat, feri, atau kapal patroli di perairan Batam.</p>
      <p><strong>Beli Marine Cargo jika Anda</strong> adalah importir atau eksportir yang rutin mengirim barang lewat laut atau udara, trading company, atau distributor yang menerima pengiriman dalam jumlah besar.</p>
      <p><strong>Beli keduanya</strong> jika Anda pemilik kapal sekaligus mengangkut muatan milik sendiri.</p>

      <SectionHeading icon={Wallet}>Berapa Premi yang Wajar?</SectionHeading>
      <p>
        Premi marine cargo umumnya berkisar antara <strong>0,1% hingga 0,5% dari nilai kargo</strong> tergantung jenis barang, rute, dan klausa yang dipilih. Untuk rute pendek seperti Batam–Singapura atau Batam–Jakarta, tarif cenderung lebih rendah dibanding rute internasional jarak jauh.
      </p>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-lg text-[#c9a84c] mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Konsultasi Gratis – Pilih Polis yang Tepat
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Tidak yakin harus membeli hull, cargo, atau keduanya? Tergantung model bisnis dan posisi Anda dalam rantai pengiriman. Saya bantu analisis dari awal.
        </p>
        <a href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi%20marine"
          target="_blank" rel="noopener noreferrer"
          className="inline-block px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-sm text-center hover:bg-[#f0d080] transition-colors">
          Konsultasi via WhatsApp
        </a>
      </div>

      <div className="mt-6 p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="text-sm font-display font-semibold text-[#0a1628] mb-3">Artikel Terkait</p>
        <div className="flex flex-col gap-2">
          <Link href="/blog/cara-klaim-asuransi-marine-cargo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Cara Klaim Asuransi Marine Cargo</Link>
          <Link href="/blog/asuransi-pengiriman-batam-singapore" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Asuransi Pengiriman Batam–Singapura</Link>
          <Link href="/asuransi-marine" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Semua Produk Asuransi Marine</Link>
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><a href="/asuransi-marine/marine-hull" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Hull Insurance Batam</a></li>
              <li><a href="/asuransi-marine/marine-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Cargo Insurance Batam</a></li>
              <li><a href="/asuransi-marine" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Marine Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/jenis-jenis-asuransi-kapal-armada" className="text-sm text-blue-700 hover:underline font-medium">→ Jenis-Jenis Asuransi Kapal Armada</a></li>
              <li><a href="/blog/premi-asuransi-kapal-batam-2026" className="text-sm text-blue-700 hover:underline font-medium">→ Premi Asuransi Kapal Batam 2026</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}
