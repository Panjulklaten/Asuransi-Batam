import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Gudang Batam – Proteksi Stok, Bangunan & Risiko Logistik",
  description: "Gudang di Batam menyimpan aset bernilai miliaran. Lindungi dari kebakaran, banjir, dan pencurian dengan asuransi gudang yang mencakup bangunan, isi, dan tanggung jawab pihak ketiga. Hubungi Rio sekarang.",
  canonical: "https://asuransibatam.com/asuransi-properti/asuransi-gudang-batam",
  languages: {
      id: "https://asuransibatam.com/asuransi-properti/asuransi-gudang-batam",
      en: "https://asuransibatam.com/en/property-insurance/warehouse-insurance-batam",
    },
});

const benefits = [
  {
    icon: "🏭",
    title: "Bangunan & Struktur Gudang",
    desc: "Dinding, atap, kolom, lantai beton, dan semua elemen struktural gudang dilindungi dari kebakaran, petir, ledakan, angin kencang, dan bencana alam. Termasuk instalasi tetap seperti sistem sprinkler, pintu otomatis, dan panel listrik.",
  },
  {
    icon: "📦",
    title: "Barang yang Disimpan (Stock in Trade)",
    desc: "Isi gudang — barang jadi, bahan baku, dan barang dalam proses — dapat dimasukkan dalam polis. Nilai pertanggungan bisa menggunakan metode Declaration Policy (laporan nilai stok bulanan) untuk efisiensi premi pada gudang dengan fluktuasi stok tinggi.",
  },
  {
    icon: "🚜",
    title: "Peralatan Gudang & Forklift",
    desc: "Forklift, hand pallet, conveyor, rak penyimpanan, timbangan industri, dan peralatan material handling lainnya dapat dimasukkan sebagai item terpisah dalam polis. Kerusakan akibat tabrakan internal di area gudang umumnya bisa diklaim.",
  },
  {
    icon: "🌊",
    title: "Banjir & Angin Topan",
    desc: "Kawasan industri Batam seperti Muka Kuning dan Kabil berada di dataran yang rentan terhadap genangan saat curah hujan ekstrem. Perluasan banjir memastikan kerugian stok akibat air yang masuk ke gudang ditanggung polis.",
  },
  {
    icon: "👥",
    title: "Tanggung Jawab Pihak Ketiga",
    desc: "Jika pekerja pihak ketiga, sopir ekspedisi, atau tamu bisnis mengalami kecelakaan di area gudang Anda, biaya tuntutan medis dan ganti rugi ditanggung. Penting untuk gudang dengan aktivitas bongkar muat tinggi dan lalu lintas kendaraan eksternal.",
  },
  {
    icon: "📉",
    title: "Business Interruption",
    desc: "Jika gudang terpaksa tidak beroperasi akibat kerusakan yang perlu perbaikan, perluasan ini memberikan kompensasi atas biaya tetap (sewa, gaji, listrik) dan kehilangan laba kotor selama periode pemulihan. Krusial untuk gudang yang menjadi simpul distribusi utama.",
  },
];

const faqs = [
  {
    q: "Apa perbedaan asuransi gudang dengan asuransi marine cargo?",
    a: "Keduanya sering dianggap sama tapi berbeda secara fundamental. Asuransi gudang (Fire & Allied Perils atau Industrial All Risk) melindungi barang selama disimpan di gudang — statis di satu lokasi. Asuransi marine cargo melindungi barang selama dalam proses pengiriman — baik lewat laut, udara, maupun darat. Untuk bisnis yang menyimpan sekaligus mengirimkan barang, idealnya memiliki keduanya agar tidak ada celah perlindungan antara titik penyimpanan dan titik pengiriman.",
  },
  {
    q: "Bagaimana cara menentukan nilai pertanggungan gudang yang tepat?",
    a: "Ada dua komponen yang perlu dinilai secara terpisah. Pertama, nilai bangunan — dihitung berdasarkan biaya membangun ulang gudang dengan spesifikasi setara (replacement cost), bukan nilai pasar atau nilai buku. Kedua, nilai isi gudang — bisa menggunakan nilai faktur (untuk stok konsisten) atau Declaration Policy (untuk stok fluktuatif). Underasuransi pada gudang berbahaya karena dapat mengakibatkan klaim parsial dibayar proporsional, jauh di bawah kerugian aktual.",
  },
  {
    q: "Apakah gudang di kawasan industri Batam seperti Muka Kuning perlu perluasan khusus?",
    a: "Untuk kawasan industri, beberapa perluasan yang perlu dipertimbangkan: perluasan banjir (beberapa titik di Muka Kuning dan Kabil pernah mengalami genangan saat hujan ekstrem), perluasan kerusuhan dan huru-hara (standard untuk properti komersial), dan perluasan earthquake jika bangunan memiliki nilai tinggi. Jika gudang menyimpan bahan kimia atau bahan berbahaya, disclosure wajib dilakukan kepada underwriter karena ini memengaruhi rate dan klausul polis.",
  },
  {
    q: "Apakah barang milik pihak ketiga yang dititipkan di gudang saya bisa diasuransikan?",
    a: "Ya, ini disebut barang dalam pengawasan (goods in custody). Anda bisa mengambil polis atas nama sendiri sebagai baillee (pihak yang menitipkan) untuk melindungi tanggung jawab Anda terhadap pemilik barang. Namun idealnya pemilik barang juga memiliki polis sendiri atas nama mereka. Koordinasi antara kedua polis perlu dilakukan untuk menghindari dispute saat klaim.",
  },
  {
    q: "Berapa kisaran premi asuransi gudang di Batam?",
    a: "Premi gudang tidak memiliki tarif baku seperti asuransi kendaraan. Rate ditentukan oleh underwriter berdasarkan nilai pertanggungan, jenis bangunan (beton, baja, semi permanen), jenis barang yang disimpan, sistem proteksi kebakaran yang ada, dan histori klaim. Sebagai gambaran umum, rate Fire & Allied Perils untuk gudang bangunan permanen di Batam biasanya berkisar 0,05%–0,20% per tahun dari nilai pertanggungan. Gudang yang menyimpan bahan mudah terbakar atau kimia bisa dikenai rate lebih tinggi.",
  },
];

const policyComparison = [
  { feature: "Bangunan & struktur gudang", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Isi gudang / stok barang", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Banjir & angin topan", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Peralatan gudang & forklift", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Pencurian dengan paksaan", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Tanggung jawab pihak ketiga", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Business Interruption", basic: "❌", standard: "❌", comprehensive: "✅" },
  { feature: "Gempa bumi & tsunami", basic: "❌", standard: "❌", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Gudang Batam",
  description: "Asuransi perlindungan gudang dan fasilitas logistik di Batam dari kebakaran, banjir, pencurian, dan risiko operasional lainnya",
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
  },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function AsuransiGudangBatamPage() {
  return (
    <ProductPageLayout
      title="Asuransi Gudang Batam"
      subtitle="Proteksi Bangunan, Stok & Operasional Logistik Anda"
      description="Gudang adalah titik paling kritis dalam rantai distribusi bisnis Anda. Satu insiden kebakaran atau banjir yang tidak terlindungi bisa menghancurkan stok senilai miliaran dan menghentikan operasional selama berbulan-bulan. Asuransi gudang yang tepat bukan sekadar formalitas — ini adalah jaring pengaman yang menentukan apakah bisnis Anda bisa bangkit atau tidak setelah musibah."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Asuransi Properti", href: "/asuransi-properti" },
        { label: "Asuransi Gudang Batam", href: "/asuransi-properti/asuransi-gudang-batam" },
      ]}
      schema={schema}
      calculatorCard="gudang"
    >
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Baca & Lengkapi Juga</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/asuransi-properti/asuransi-pabrik-kawasan-industri-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Pabrik & Kawasan Industri</h3>
            <p className="text-[#475569] text-sm">Lindungi fasilitas produksi yang terhubung dengan gudang Anda.</p>
          </Link>
          <Link href="/blog/asuransi-gudang-kawasan-industri-muka-kuning-batam" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Gudang Muka Kuning</h3>
            <p className="text-[#475569] text-sm">Studi kasus dan tips khusus gudang di kawasan industri Muka Kuning.</p>
          </Link>
          <Link href="/asuransi-marine/marine-cargo" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Marine Cargo Insurance</h3>
            <p className="text-[#475569] text-sm">Lindungi barang Anda juga saat dalam proses pengiriman, bukan hanya saat di gudang.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}
