import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";
export const metadata: Metadata = generateSEO({
  title: "Asuransi Crane Batam – Perlindungan Tower Crane & Mobile Crane",
  description: "Asuransi crane di Batam. Tower crane, mobile crane, dan lifting equipment dilindungi dari kerusakan dan tanggung jawab pihak ketiga. Konsultasi gratis dengan Rio: 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-machinery/asuransi-crane",
  languages: {
      id: "https://asuransibatam.com/asuransi-machinery/asuransi-crane",
      en: "https://asuransibatam.com/en/machinery-insurance/crane-insurance",
    },
});
const benefits = [
  { icon: "🏗️", title: "Kerusakan Fisik Crane", desc: "Perlindungan boom, cabin, sistem hidrolik, spreader, dan komponen utama crane dari kerusakan mendadak akibat kecelakaan atau kegagalan operasional." },
  { icon: "💥", title: "Kegagalan Struktural", desc: "Kerusakan akibat kegagalan struktur, overload melebihi kapasitas angkat, fatigue material, atau kesalahan rigging yang menyebabkan collapse." },
  { icon: "⚡", title: "Kerusakan Elektrikal", desc: "Sistem kontrol PLC, motor penggerak, panel listrik, dan komponen elektrikal crane yang rusak akibat lonjakan arus atau korsleting." },
  { icon: "👤", title: "Tanggung Jawab Pihak Ketiga (TPL)", desc: "Krusial untuk crane di area padat — menanggung biaya ganti rugi kerusakan properti, bangunan tetangga, dan kendaraan di sekitar area angkat." },
  { icon: "🚑", title: "Kecelakaan Operator", desc: "Santunan kecelakaan diri untuk operator crane bersertifikat yang mengalami cedera saat menjalankan tugas." },
  { icon: "🔧", title: "Biaya Pembongkaran & Pasang", desc: "Biaya menjangkau, membongkar, dan memasang kembali crane di ketinggian untuk proses perbaikan komponen yang rusak." },
];
const faqs = [
  { q: "Mengapa asuransi crane sangat penting di Batam?", a: "Proyek konstruksi gedung bertingkat di Nongsa, Batam Center, dan kawasan industri Muka Kuning terus berkembang. Crane beroperasi di ketinggian dengan beban puluhan ton — risiko kecelakaan dan kerusakan properti sekitar sangat tinggi, termasuk tanggung jawab hukum yang bisa mencapai miliaran rupiah." },
  { q: "Apa saja persyaratan untuk mengajukan asuransi crane?", a: "Umumnya diperlukan: sertifikat kelayakan crane (SIO/SIA) yang masih berlaku, buku log perawatan berkala, data operator bersertifikat K3, spesifikasi teknis crane (kapasitas, tahun produksi, merk), dan nilai penggantian (replacement cost) crane." },
  { q: "Berapa estimasi premi asuransi crane di Batam?", a: "Premi bergantung pada nilai crane, jenis (tower/mobile), kapasitas angkat, dan lokasi operasi. Secara umum, premi berkisar 0,4%–1,2% dari nilai pertanggungan per tahun. Mobile crane dengan kapasitas 50 ton seharga Rp 3 miliar misalnya, premi mulai sekitar Rp 12–36 juta per tahun. Hubungi Rio untuk penawaran spesifik." },
  { q: "Apakah crane sewaan bisa diasuransikan oleh penyewa?", a: "Bisa. Penyewa crane bisa mengambil polis atas nama sendiri sebagai 'lessee' dengan persetujuan pemilik crane. Hal ini penting karena tanggung jawab operasional ada di tangan penyewa selama masa sewa." },
  { q: "Apakah ada nilai pertanggungan yang disarankan untuk crane?", a: "Minimal sebesar nilai penggantian crane baru (replacement cost) agar tidak terjadi underinsurance. Untuk TPL (Third Party Liability), nilai harus memadai sesuai risiko lokasi proyek — minimal Rp 1–5 miliar untuk proyek di kawasan padat Batam." },
  { q: "Apa yang harus dilakukan jika crane mengalami kecelakaan?", a: "Langkah pertama: amankan lokasi dan dokumentasikan kerusakan dengan foto/video. Hubungi kami segera di 0813-7333-6728 untuk pelaporan klaim dalam 3×24 jam. Jangan pindahkan crane sebelum ada survei dari pihak asuransi kecuali ada risiko keselamatan." },
];
const policyComparison = [
  { feature: "Kerusakan Fisik Crane", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Kegagalan Mekanis/Elektrikal", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Third Party Liability (TPL)", basic: "Terbatas", standard: "✅", comprehensive: "✅" },
  { feature: "Bencana Alam", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Biaya Pembongkaran & Pasang", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Kecelakaan Operator", basic: "❌", standard: "Opsional", comprehensive: "✅" },
];
const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Crane Batam",
  description: "Asuransi perlindungan tower crane dan mobile crane di Batam untuk proyek konstruksi kawasan industri dan pembangunan gedung.",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};
export default function AsuransiCranePage() {
  return (
    <ProductPageLayout cluster="machinery" title="Asuransi Crane Batam" subtitle="Perlindungan Tower Crane & Mobile Crane"
      description="Tower crane dan mobile crane adalah peralatan berisiko tinggi di proyek konstruksi Batam. Satu kejadian — boom jatuh, kabel putus, atau tabrakan struktur — bisa mengakibatkan kerugian miliaran dan tuntutan hukum besar. Pastikan aset dan tanggung jawab pihak ketiga Anda terlindungi."
      benefits={benefits} faqs={faqs} policyComparison={policyComparison}
      breadcrumbs={[{ label: "Asuransi Machinery", href: "/asuransi-machinery" }, { label: "Asuransi Crane", href: "/asuransi-machinery/asuransi-crane" }]}
      schema={schema}>
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Studi Kasus: Klaim Crane di Batam</h2>
        <p className="text-center text-[#475569] mb-8">Ilustrasi nyata mengapa asuransi crane tidak bisa diabaikan di kawasan konstruksi aktif Batam.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">🏗️ Kasus 1 — Tower Crane Ambruk, Batam Center</h3>
            <p className="text-[#475569] text-sm mb-3">Sebuah tower crane setinggi 45 meter di proyek apartemen kawasan Batam Center mengalami kegagalan sambungan mast akibat angin kencang. Boom jatuh mengenai bangunan ruko di sebelah area proyek.</p>
            <div className="bg-white rounded-xl p-4 text-sm">
              <p className="text-[#0a1628] font-semibold mb-1">Kerugian yang terjadi:</p>
              <p className="text-[#475569]">Kerusakan fisik crane: Rp 1,8 M | Kerusakan ruko pihak ketiga: Rp 650 jt | Biaya hukum & mediasi: Rp 120 jt</p>
              <p className="text-green-700 font-semibold mt-2">✅ Seluruh klaim tertanggung karena pemilik memiliki polis Comprehensive + TPL Rp 5 M.</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">🚛 Kasus 2 — Mobile Crane Terbalik, Kawasan Industri Muka Kuning</h3>
            <p className="text-[#475569] text-sm mb-3">Mobile crane 80 ton mengalami terbalik saat mengangkat komponen mesin pabrik di Muka Kuning akibat kondisi tanah yang tidak stabil setelah hujan deras. Crane rusak total dan mesin yang diangkat juga rusak parah.</p>
            <div className="bg-white rounded-xl p-4 text-sm">
              <p className="text-[#0a1628] font-semibold mb-1">Kerugian yang terjadi:</p>
              <p className="text-[#475569]">Kerusakan mobile crane: Rp 4,2 M | Biaya pengangkatan dan salvage: Rp 280 jt</p>
              <p className="text-green-700 font-semibold mt-2">✅ Klaim diproses dalam 14 hari kerja karena dokumentasi awal lengkap.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Pelengkap untuk Proyek Pengangkatan</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/asuransi-machinery/asuransi-alat-berat" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Alat Berat</h3>
            <p className="text-[#475569] text-sm">Lindungi excavator, bulldozer, dan alat berat lain di proyek Anda.</p>
          </Link>
          <Link href="/asuransi-engineering/erection-all-risk" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Erection All Risk (EAR)</h3>
            <p className="text-[#475569] text-sm">Untuk proyek pemasangan mesin yang sering menggunakan crane.</p>
          </Link>
          <Link href="/asuransi-liability/public-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Public Liability</h3>
            <p className="text-[#475569] text-sm">Perluas tanggung jawab hukum atas kerusakan properti di sekitar area kerja crane.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}
