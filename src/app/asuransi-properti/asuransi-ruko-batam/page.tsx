import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Ruko Batam – Lindungi Bangunan & Stok Dagangan Anda",
  description: "Pemilik ruko di Batam wajib punya proteksi dari kebakaran, banjir, dan pencurian. Asuransi ruko all risk mencakup bangunan, isi toko, dan tanggung jawab pihak ketiga. Konsultasi gratis dengan Rio.",
  canonical: "https://asuransibatam.com/asuransi-properti/asuransi-ruko-batam",
  languages: {
      id: "https://asuransibatam.com/asuransi-properti/asuransi-ruko-batam",
      en: "https://asuransibatam.com/en/property-insurance/shophouse-insurance-batam",
    },
});

const benefits = [
  {
    icon: "🏪",
    title: "Bangunan Ruko",
    desc: "Struktur bangunan ruko — dinding, lantai, atap, partisi, dan instalasi tetap — dilindungi dari kebakaran, petir, ledakan, dan bencana alam. Biaya pembangunan ulang ditanggung sesuai nilai pertanggungan yang disepakati.",
  },
  {
    icon: "📦",
    title: "Stok Barang Dagangan",
    desc: "Inventaris dan stok dagangan yang tersimpan di dalam ruko dapat dimasukkan dalam polis dengan nilai yang dideklarasikan. Cocok untuk toko retail, distributor, dan usaha perdagangan yang menyimpan barang bernilai tinggi.",
  },
  {
    icon: "🖥️",
    title: "Peralatan Usaha & Elektronik",
    desc: "Mesin kasir, komputer, peralatan display, AC, dan semua peralatan operasional bisnis dilindungi dari kerusakan akibat kebakaran, lonjakan listrik, dan bencana. Penting untuk ruko yang mengandalkan peralatan elektronik dalam operasional harian.",
  },
  {
    icon: "🔐",
    title: "Pencurian dengan Paksaan",
    desc: "Kehilangan barang dagangan dan peralatan akibat pencurian yang disertai pembobolan atau kekerasan. Berbeda dengan kehilangan biasa, coverage ini memerlukan bukti adanya tanda-tanda pembobolan paksa.",
  },
  {
    icon: "👥",
    title: "Tanggung Jawab Pihak Ketiga",
    desc: "Jika pelanggan atau pengunjung mengalami kecelakaan di dalam atau di depan ruko Anda — terpeleset, tertimpa barang, atau kejadian lain — biaya tuntutan ganti rugi ditanggung oleh polis ini hingga batas yang ditetapkan.",
  },
  {
    icon: "📉",
    title: "Kehilangan Pendapatan Usaha",
    desc: "Jika ruko terpaksa tutup sementara akibat kebakaran atau kerusakan berat yang perlu perbaikan, perluasan Business Interruption memberikan kompensasi atas pendapatan yang hilang selama periode penutupan berlangsung.",
  },
];

const faqs = [
  {
    q: "Apakah ruko yang disewa (bukan milik sendiri) bisa diasuransikan?",
    a: "Bisa, dengan dua pendekatan berbeda. Jika Anda penyewa, Anda bisa mengasuransikan isi ruko dan peralatan usaha yang menjadi milik Anda — bukan bangunannya. Jika Anda pemilik ruko yang menyewakan, Anda bisa mengasuransikan struktur bangunan dan kehilangan pendapatan sewa jika ruko rusak dan tidak bisa dihuni penyewa.",
  },
  {
    q: "Apakah stok barang dagangan yang berubah-ubah nilainya bisa diasuransikan?",
    a: "Ya, ada dua metode. Pertama, Declaration Policy — nilai stok dilaporkan setiap bulan dan premi dihitung berdasarkan rata-rata laporan tersebut. Kedua, Floating Sum Insured — nilai pertanggungan ditetapkan di angka maksimum dan premi dihitung dari nilai tersebut. Untuk usaha dengan stok fluktuatif tinggi seperti distributor atau toko musiman, Declaration Policy biasanya lebih efisien.",
  },
  {
    q: "Kawasan Nagoya dan Jodoh termasuk area risiko tinggi — apakah premi lebih mahal?",
    a: "Lokasi memang menjadi salah satu faktor penilaian underwriter. Kawasan perdagangan padat seperti Nagoya dan Jodoh memiliki eksposur kebakaran yang lebih tinggi karena kepadatan bangunan dan aktivitas bisnis. Namun ini tidak selalu berarti premi jauh lebih mahal — rekam jejak klaim yang bersih dan sistem proteksi kebakaran yang baik (APAR, instalasi hidran) bisa menurunkan rate yang ditawarkan.",
  },
  {
    q: "Apakah asuransi ruko mencakup kerusakan akibat banjir rob di Batam?",
    a: "Banjir termasuk perluasan yang perlu ditambahkan secara eksplisit dalam polis — tidak otomatis masuk dalam polis standar FLEXAS (Fire, Lightning, Explosion, Aircraft impact, Smoke). Untuk ruko di kawasan yang historisnya sering terdampak genangan seperti area Jodoh atau Tanjung Uma, perluasan banjir sangat direkomendasikan meski menambah premi sekitar 10–20%.",
  },
];

const policyComparison = [
  { feature: "Bangunan ruko", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Isi & peralatan usaha", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Stok barang dagangan", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Banjir & angin topan", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Pencurian dengan paksaan", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Tanggung jawab pihak ketiga", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Business Interruption", basic: "❌", standard: "❌", comprehensive: "✅" },
  { feature: "Gempa bumi & tsunami", basic: "❌", standard: "❌", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Ruko Batam",
  description: "Asuransi perlindungan ruko dan usaha perdagangan di Batam dari kebakaran, banjir, pencurian, dan risiko bisnis lainnya",
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
  },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function AsuransiRukoBatamPage() {
  return (
    <ProductPageLayout
      title="Asuransi Ruko Batam"
      subtitle="Proteksi Bangunan, Stok & Kelangsungan Usaha Anda"
      description="Ruko adalah aset sekaligus sumber pendapatan. Satu kebakaran, satu banjir, atau satu kejadian pencurian bisa menghentikan roda usaha yang sudah dibangun bertahun-tahun. Dengan asuransi ruko yang tepat, Anda tidak perlu memulai dari nol ketika musibah datang — bangunan, stok, dan kelangsungan bisnis Anda tetap terlindungi."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Asuransi Properti", href: "/asuransi-properti" },
        { label: "Asuransi Ruko Batam", href: "/asuransi-properti/asuransi-ruko-batam" },
      ]}
      schema={schema}
      calculatorCard="ruko"
    >
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Properti Komersial Lainnya</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/asuransi-properti/asuransi-hotel-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Hotel</h3>
            <p className="text-[#475569] text-sm">Untuk pelaku usaha perhotelan dan penginapan di Batam.</p>
          </Link>
          <Link href="/asuransi-properti/asuransi-gudang-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Gudang</h3>
            <p className="text-[#475569] text-sm">Untuk pemilik ruko yang juga punya stok besar di gudang terpisah.</p>
          </Link>
          <Link href="/blog/asuransi-properti-komersial-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Panduan Asuransi Properti Komersial</h3>
            <p className="text-[#475569] text-sm">Tips memilih perlindungan yang tepat untuk bisnis properti Anda.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}
