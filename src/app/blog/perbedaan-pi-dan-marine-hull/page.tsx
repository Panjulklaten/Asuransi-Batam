// app/blog/perbedaan-pi-dan-marine-hull/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import QuoteButton from "@/components/quote/QuoteButton";
import ArticleLayout from "@/components/ArticleLayout";
import { generateSEO } from "@/lib/seo";
import { Lightbulb, Ship, Anchor, Scale, Waves, ListChecks, MessageCircleMore } from "lucide-react";

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
  title: "Perbedaan P&I dan Marine Hull untuk Pemilik Kapal",
  description:
    "Marine Hull melindungi fisik kapal, P&I melindungi tanggung jawab hukum kepada pihak lain. Pahami perbedaannya lewat contoh kejadian nyata sebelum memilih polis.",
  canonical: "https://asuransibatam.com/blog/perbedaan-pi-dan-marine-hull",
  languages: {
    id: "https://asuransibatam.com/blog/perbedaan-pi-dan-marine-hull",
    en: "https://asuransibatam.com/en/blog/pi-vs-marine-hull-insurance",
  },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Perbedaan P&I dan Marine Hull – Mana yang Dibutuhkan Pemilik Kapal?",
  description:
    "Marine Hull melindungi fisik kapal, P&I melindungi tanggung jawab hukum kepada pihak lain. Contoh kejadian dan cara memilih.",
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  author: { "@type": "Person", name: "Rio", jobTitle: "Praktisi Asuransi", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/blog/perbedaan-pi-dan-marine-hull" },
};

const rows = [
  ["Awak kapal cedera saat towing", "Tidak ditanggung", "Ditanggung (tanggung jawab kepada awak)"],
  ["Lambung tongkang rusak karena kandas", "Ditanggung", "Tidak ditanggung"],
  ["Kapal menabrak kapal lain", "Kerusakan kapal sendiri, plus sebagian tanggung jawab tabrakan", "Sisa tanggung jawab tabrakan dan klaim lain yang timbul"],
  ["Dermaga atau jetty tertabrak", "Umumnya tidak, kecuali ada perluasan klausul", "Umumnya ditanggung"],
  ["Tumpahan minyak dari kapal", "Tidak ditanggung", "Ditanggung (tanggung jawab pencemaran)"],
  ["Muatan pelanggan rusak selama diangkut", "Tidak ditanggung", "Ditanggung (tanggung jawab pengangkut)"],
];

export default function PerbedaanPiMarineHullPage() {
  return (
    <ArticleLayout
      cluster="marine"
      title="Perbedaan P&I dan Marine Hull – Mana yang Dibutuhkan Pemilik Kapal?"
      description="Kapal sudah punya polis hull belum berarti tuntutan pihak ketiga ikut terlindungi. Ini perbedaannya."
      date="16 Oktober 2026"
      readTime="6 menit"
      category="Marine"
      breadcrumbs={[{ label: "Perbedaan P&I dan Marine Hull", href: "/blog/perbedaan-pi-dan-marine-hull" }]}
      schema={schema}
    >
      <SectionHeading icon={Lightbulb}>Salah Kaprah: &quot;Polis Hull Sudah Mencakup Semuanya&quot;</SectionHeading>
      <p>
        Banyak pemilik kapal mengira satu polis kapal cukup untuk semua kejadian. Padahal ada dua pertanyaan berbeda setelah insiden: <strong>siapa yang menanggung kerusakan kapal saya?</strong> dan <strong>siapa yang menanggung tuntutan pihak lain kepada saya?</strong> Pertanyaan pertama dijawab Marine Hull, yang kedua dijawab P&amp;I.
      </p>

      <SectionHeading icon={Ship}>Marine Hull: Melindungi Kapal Anda</SectionHeading>
      <p>
        <Link href="/asuransi-marine/marine-hull">Marine Hull</Link> mengganti kerusakan atau kehilangan fisik kapal: lambung, mesin, dan perlengkapan, misalnya karena kandas, kebakaran, atau tenggelam. Uangnya masuk ke pemilik kapal. Polis hull umumnya juga memuat tanggung jawab tabrakan antarkapal, tetapi biasanya hanya sebagian (pada klausul standar sering tiga perempat), dan hanya untuk tabrakan dengan kapal lain.
      </p>

      <SectionHeading icon={Anchor}>P&amp;I: Melindungi dari Tuntutan Pihak Lain</SectionHeading>
      <p>
        <Link href="/asuransi-marine/protection-and-indemnity">Asuransi P&amp;I</Link> menanggung kewajiban hukum pemilik atau operator kapal kepada pihak lain: awak, penumpang, pemilik muatan, pemilik dermaga, dan pihak yang terdampak pencemaran. Uangnya mengalir ke pihak yang dirugikan, bukan ke pemilik kapal.
      </p>

      <SectionHeading icon={Scale}>Perbandingan Berdasarkan Kejadian</SectionHeading>
      <div className="overflow-x-auto my-6 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Kejadian</th>
              <th className="text-left px-4 py-3">Marine Hull</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">P&amp;I</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([k, h, p], i) => (
              <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-medium text-[#0a1628] border-b border-[#e2e8f0]">{k}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{h}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Tabel ini gambaran umum. Hasil akhir tetap mengikuti wording polis, batas pertanggungan, dan pengecualian.</p>

      <SectionHeading icon={Waves}>Satu Insiden, Dua Polis Bekerja</SectionHeading>
      <p>
        Bayangkan sebuah tongkang ditarik tugboat menabrak jetty saat berlabuh. Lambung tongkang penyok dan satu awak cedera. Biaya memperbaiki tongkang masuk klaim hull. Ganti rugi untuk pemilik jetty dan biaya pengobatan awak masuk klaim P&amp;I. Tanpa P&amp;I, pemilik kapal menanggung dua tagihan terakhir itu dari kas perusahaan.
      </p>

      <SectionHeading icon={ListChecks}>Siapa yang Perlu Apa?</SectionHeading>
      <p><strong>Hull saja</strong> bisa cukup bila kapal tidak membawa awak atau muatan pihak lain dan tidak ada syarat dari charterer, tetapi kasus seperti ini jarang.</p>
      <p><strong>Hull dan P&amp;I</strong> adalah susunan umum untuk kapal komersial: tugboat, tongkang, kapal kargo, feri, dan OSV.</p>
      <p><strong>P&amp;I saja</strong> relevan bila kapal sewaan atau nilai kapal sudah ditanggung pihak lain, tetapi tanggung jawab operasionalnya tetap ada pada Anda.</p>
      <p>
        Peta lengkap semua jenis polis kapal ada di <Link href="/blog/jenis-jenis-asuransi-kapal-armada">panduan jenis asuransi kapal untuk armada</Link>. Jika sudah terjadi insiden, baca <Link href="/blog/cara-klaim-asuransi-pi-kapal">cara klaim asuransi P&amp;I</Link>.
      </p>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-lg text-[#c9a84c] mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Cek Susunan Polis Kapal Anda
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Kirim jenis kapal, GT, dan daerah pelayaran. Kami bantu menilai apakah hull saja cukup atau perlu P&amp;I.
        </p>
        <QuoteButton cluster="marine" lang="id" variant="gold" className="!rounded-xl !px-6 !py-3 !text-sm" />
      </div>

      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><Link href="/asuransi-marine/protection-and-indemnity" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi P&amp;I Batam</Link></li>
              <li><Link href="/asuransi-marine/marine-hull" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Hull Insurance Batam</Link></li>
              <li><Link href="/asuransi-marine" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Marine Batam</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><Link href="/blog/cara-klaim-asuransi-pi-kapal" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Klaim Asuransi P&amp;I Kapal</Link></li>
              <li><Link href="/blog/perbedaan-marine-hull-vs-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Perbedaan Marine Hull vs Cargo</Link></li>
              <li><Link href="/blog/premi-asuransi-kapal-batam-2026" className="text-sm text-blue-700 hover:underline font-medium">→ Premi Asuransi Kapal Batam 2026</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
