import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";
import KalkulatorMobil from "@/components/KalkulatorMobil";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Mobil Batam Terpercaya – All Risk & TLO | Hitung Premi Gratis",
  description: "Cari asuransi mobil di Batam? Pilih All Risk atau TLO dengan premi terjangkau, klaim mudah, dan bengkel rekanan resmi. Hitung estimasi premi Anda secara online sekarang — gratis, cepat, tanpa ribet. Hubungi Rio: 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-kendaraan/asuransi-mobil-batam",
  languages: {
      id: "https://asuransibatam.com/asuransi-kendaraan/asuransi-mobil-batam",
      en: "https://asuransibatam.com/en/vehicle-insurance/car-insurance-batam",
    },
});

const benefits = [
  {
    icon: "🛡️",
    title: "All Risk / Comprehensive",
    desc: "Perlindungan paling menyeluruh untuk kendaraan Anda. Menanggung kerusakan fisik dalam kondisi apapun — dari goresan kecil di parkiran hingga kerusakan parah akibat tabrakan. Cocok untuk mobil baru atau kendaraan dengan nilai tinggi yang butuh proteksi maksimal.",
  },
  {
    icon: "🔑",
    title: "TLO (Total Loss Only)",
    desc: "Solusi hemat untuk perlindungan dasar kendaraan Anda. Menanggung kerugian akibat kehilangan (pencurian) dan kerusakan total yang melebihi 75% nilai kendaraan. Ideal untuk mobil dengan usia di atas 5 tahun atau anggaran premi yang lebih terbatas.",
  },
  {
    icon: "🌊",
    title: "Perluasan Banjir",
    desc: "Batam berada di wilayah kepulauan dengan curah hujan tinggi. Risiko banjir dan genangan air bisa datang kapan saja. Dengan perluasan ini, kerusakan mesin atau kelistrikan akibat terendam air ditanggung sepenuhnya — perlindungan ekstra yang sangat dianjurkan.",
  },
  {
    icon: "👤",
    title: "Tanggung Jawab Pihak Ketiga (TPL)",
    desc: "Jika kendaraan Anda menyebabkan kerusakan pada kendaraan lain, properti, atau cedera orang lain di jalan, biaya ganti rugi akan ditanggung oleh polis ini. Lindungi diri Anda dari tuntutan finansial yang tak terduga akibat insiden lalu lintas.",
  },
  {
    icon: "🚑",
    title: "Kecelakaan Diri Pengemudi & Penumpang",
    desc: "Perlindungan jiwa dan kesehatan bukan hanya untuk kendaraan. Dengan manfaat ini, pengemudi dan penumpang yang mengalami kecelakaan akan mendapatkan santunan biaya pengobatan maupun santunan kematian — karena keselamatan manusia adalah prioritas utama.",
  },
  {
    icon: "🔧",
    title: "Jaringan Bengkel Rekanan Resmi",
    desc: "Nikmati kemudahan klaim dengan akses ke ratusan bengkel rekanan resmi yang tersebar di seluruh Indonesia, termasuk di Batam. Proses perbaikan transparan, bergaransi, dan tanpa biaya tambahan dari kantong Anda — cukup tunjukkan kartu polis, semua diurus.",
  },
];

const faqs = [
  {
    q: "Berapa kisaran premi asuransi mobil All Risk di Batam?",
    a: "Berdasarkan regulasi OJK, premi All Risk untuk Batam (Wilayah 1) berkisar antara 1,05% hingga 3,46% dari harga pertanggungan per tahun, tergantung harga dan jenis kendaraan. Sebagai contoh, mobil seharga Rp 200 juta bisa dikenai premi sekitar Rp 2,1 juta – Rp 5 juta per tahun. Gunakan kalkulator premi di halaman ini untuk mendapatkan estimasi lebih akurat sesuai kendaraan Anda.",
  },
  {
    q: "Apa itu wilayah rating OJK dan Batam masuk wilayah mana?",
    a: "OJK membagi Indonesia menjadi 3 wilayah rating berdasarkan tingkat risiko lalu lintas dan kepadatan kendaraan. Batam masuk dalam Wilayah 1 bersama wilayah Sumatera dan sekitarnya. Setiap wilayah memiliki tarif dasar berbeda — Wilayah 1 umumnya memiliki tarif lebih rendah dibanding Wilayah 2 (Jawa, Madura, Bali) sehingga premi di Batam relatif kompetitif.",
  },
  {
    q: "Apakah perlu surat polisi untuk mengajukan klaim asuransi mobil?",
    a: "Tidak selalu. Untuk kerusakan ringan seperti lecet, penyok kecil, atau kerusakan akibat parkir, kebanyakan perusahaan asuransi tidak mewajibkan surat polisi. Namun untuk kerusakan berat, tabrakan yang melibatkan pihak ketiga, atau kasus kehilangan kendaraan, laporan polisi wajib dilampirkan sebagai dokumen klaim. Kami akan memandu Anda langkah demi langkah saat klaim.",
  },
  {
    q: "Berapa lama proses klaim asuransi mobil diselesaikan?",
    a: "Secara umum, proses klaim berjalan cukup cepat: survei kendaraan dilakukan dalam 1–2 hari kerja setelah laporan masuk, persetujuan klaim membutuhkan 3–7 hari kerja tergantung kompleksitas kerusakan, dan perbaikan di bengkel rekanan dilakukan sesuai estimasi waktu yang disepakati. Kami membantu koordinasi proses klaim Anda agar berjalan lancar dari awal hingga selesai.",
  },
];

const policyComparison = [
  { feature: "Kerusakan sebagian (lecet, dll)", basic: "❌ TLO", standard: "✅ All Risk", comprehensive: "✅ All Risk" },
  { feature: "Kerusakan total (>75%)", basic: "✅ TLO", standard: "✅", comprehensive: "✅" },
  { feature: "Kehilangan/Pencurian", basic: "✅ TLO", standard: "✅", comprehensive: "✅" },
  { feature: "Perluasan Banjir", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Tanggung Jawab Pihak Ketiga", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Kecelakaan Diri Pengemudi", basic: "❌", standard: "Opsional", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Mobil Batam",
  description: "Asuransi mobil All Risk dan TLO di Batam dengan kalkulator premi online",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function AsuransiMobilBatamPage() {
  return (
    <ProductPageLayout cluster="vehicle"
      title="Asuransi Mobil Batam"
      subtitle="Proteksi All Risk & TLO – Tenang Berkendara, Klaim Tanpa Ribet"
      description="Mobil adalah aset berharga yang menemani aktivitas harian Anda di Batam. Satu kecelakaan, satu kejadian tak terduga, bisa menguras biaya jutaan rupiah. Dengan asuransi mobil yang tepat — All Risk untuk perlindungan menyeluruh atau TLO untuk proteksi hemat — Anda tidak perlu khawatir lagi. Hitung estimasi premi kendaraan Anda sekarang menggunakan kalkulator online kami, gratis dan hasilnya langsung tampil tanpa perlu daftar."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" },
        { label: "Asuransi Mobil Batam", href: "/asuransi-kendaraan/asuransi-mobil-batam" },
      ]}
      schema={schema}
    >
      <KalkulatorMobil />
      <div className="mt-16">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Baca & Lengkapi Juga</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/blog/perbedaan-all-risk-dan-tlo" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Perbedaan All Risk dan TLO</h3>
            <p className="text-[#475569] text-sm">Pahami dulu sebelum memilih jenis perlindungan mobil Anda.</p>
          </Link>
          <Link href="/blog/cara-klaim-asuransi-mobil-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Cara Klaim Asuransi Mobil</h3>
            <p className="text-[#475569] text-sm">Panduan langkah-langkah klaim agar prosesnya cepat dan tidak ribet.</p>
          </Link>
          <Link href="/asuransi-personal-accident/pa-individu-keluarga" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">PA Individu & Keluarga</h3>
            <p className="text-[#475569] text-sm">Lindungi diri Anda sendiri, bukan hanya kendaraannya.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}
