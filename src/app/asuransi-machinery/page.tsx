import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";
import Link from "next/link";
export const metadata: Metadata = generateSEO({
  title: "Asuransi Machinery Batam – Lindungi Mesin & Alat Berat dari Breakdown",
  description: "Asuransi mesin dan alat berat di Batam untuk pabrik, galangan kapal, dan proyek konstruksi. Machinery breakdown, equipment all risk, dan loss of profit. Konsultasi gratis: 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-machinery",
  languages: {
      id: "https://asuransibatam.com/asuransi-machinery",
      en: "https://asuransibatam.com/en/machinery-insurance",
    },
});
const benefits = [
  { icon: "⚙️", title: "Kerusakan Mesin (Machinery Breakdown)", desc: "Perlindungan kerusakan tiba-tiba dan tidak terduga pada mesin produksi, generator, kompresor, dan peralatan industri akibat kegagalan mekanis internal." },
  { icon: "💥", title: "Kecelakaan Operasional", desc: "Kerusakan akibat benturan, terjatuh, kesalahan operator, atau kecelakaan fisik lain saat mesin sedang atau tidak beroperasi." },
  { icon: "⚡", title: "Kerusakan Listrik & Elektrikal", desc: "Lonjakan tegangan, korsleting, sambaran petir, dan kerusakan komponen elektrikal yang merusak sistem kontrol dan motor mesin." },
  { icon: "🏗️", title: "Selama Pemasangan & Commissioning", desc: "Perlindungan saat mesin baru sedang dipasang, dikalibrasi, atau dalam proses uji coba pertama sebelum beroperasi penuh." },
  { icon: "💼", title: "Biaya Pengiriman Suku Cadang Darurat", desc: "Biaya pengiriman ekspres suku cadang dari luar negeri atau luar kota Batam untuk mempercepat perbaikan dan meminimalkan downtime." },
  { icon: "📉", title: "Kehilangan Keuntungan (Loss of Profit)", desc: "Kompensasi atas hilangnya margin keuntungan selama mesin tidak dapat beroperasi akibat kerusakan yang ditanggung polis." },
];
const faqs = [
  { q: "Apa itu Machinery Breakdown Insurance dan siapa yang butuh?", a: "Machinery Breakdown Insurance menanggung kerusakan tiba-tiba dan tidak terduga pada mesin dan peralatan industri, termasuk kerusakan mekanis dan elektrikal. Produk ini sangat dibutuhkan oleh pabrik manufaktur di Muka Kuning dan Kabil, galangan kapal di Tanjung Uncang, fasilitas pengolahan di Batam, dan bisnis apa pun yang bergantung pada mesin untuk operasional harian." },
  { q: "Apakah keausan normal dan perawatan rutin ditanggung?", a: "Tidak. Asuransi machinery menanggung kerusakan tiba-tiba dan tidak terduga, bukan keausan normal (wear & tear), korosi bertahap, atau kerusakan yang bisa diprediksi dari kurangnya perawatan. Justru mesin yang terawat baik lebih mudah mendapatkan polis dengan premi kompetitif." },
  { q: "Apa perbedaan Equipment All Risk (EAR) dan Machinery Breakdown (MB)?", a: "Equipment All Risk (EAR) menanggung semua risiko kerusakan fisik alat berat selama proyek, termasuk kecelakaan eksternal dan bencana alam. Machinery Breakdown (MB) fokus pada kegagalan internal mesin yang sudah terpasang dan beroperasi di pabrik atau fasilitas permanen. Keduanya bisa dikombinasikan." },
  { q: "Berapa estimasi premi asuransi mesin di Batam?", a: "Premi mesin terpasang (stasioner) di pabrik umumnya berkisar 0,25%–0,75% dari nilai mesin per tahun. Contoh: mesin CNC seharga Rp 2 miliar, premi MB sekitar Rp 5–15 juta per tahun. Untuk alat berat yang bergerak, premi lebih tinggi karena risiko lebih besar. Hubungi kami untuk kalkulasi spesifik." },
  { q: "Apakah Loss of Profit (LoP) wajib diambil bersamaan?", a: "Tidak wajib, tapi sangat disarankan untuk industri yang bergantung pada satu atau sedikit mesin kritis. Jika satu mesin rusak selama 3 bulan dan bisnis Anda kehilangan Rp 500 juta pendapatan, tanpa LoP seluruh kerugian tersebut ditanggung sendiri. Dengan LoP, asuransi mengkompensasi hilangnya keuntungan selama periode perbaikan." },
  { q: "Mesin lama (usia 10+ tahun) apakah masih bisa diasuransikan?", a: "Bisa, namun biasanya perlu survei kondisi mesin terlebih dahulu. Mesin dengan usia lebih tua umumnya mendapatkan premi lebih tinggi atau ada pengecualian tertentu. Kami akan membantu proses survei dan negosiasi dengan penanggung untuk mendapatkan terms terbaik." },
];
const policyComparison = [
  { feature: "Kerusakan Mesin (Breakdown)", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Kerusakan Elektrikal", basic: "Terbatas", standard: "✅", comprehensive: "✅" },
  { feature: "Bencana Alam (Banjir, Petir)", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Biaya Suku Cadang Darurat", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Loss of Profit (LoP)", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Kesalahan Operator", basic: "❌", standard: "✅", comprehensive: "✅" },
];
const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Machinery Batam",
  description: "Layanan asuransi mesin dan alat berat di Batam untuk pabrik, galangan kapal, dan proyek konstruksi mencakup machinery breakdown, equipment all risk, dan loss of profit.",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};
export default function AsuransiMachineryPage() {
  return (
    <ProductPageLayout cluster="machinery" title="Asuransi Machinery Batam" subtitle="Perlindungan Mesin, Alat Berat & Equipment Industri"
      description="Mesin adalah jantung operasional bisnis Anda. Di Batam — kota industri dengan ratusan pabrik, galangan kapal, dan fasilitas produksi — satu kerusakan mesin bisa menghentikan seluruh lini produksi dan mengakibatkan kerugian puluhan hingga ratusan juta rupiah per hari. Dengan asuransi machinery yang tepat, downtime tidak lagi mengancam keberlangsungan bisnis."
      benefits={benefits} faqs={faqs} policyComparison={policyComparison}
      breadcrumbs={[{ label: "Asuransi Machinery", href: "/asuransi-machinery" }]}
      schema={schema}
    >
      <div className="mb-12">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Industri di Batam yang Paling Membutuhkan Asuransi Mesin</h2>
        <p className="text-center text-[#475569] mb-8 max-w-2xl mx-auto">Dari kawasan industri Muka Kuning hingga galangan kapal Tanjung Uncang, industri-industri ini sangat bergantung pada proteksi mesin.</p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <p className="text-2xl mb-2">🏭</p>
            <h3 className="font-bold text-[#0a1628] mb-1">Manufaktur Elektronik & Batam</h3>
            <p className="text-sm text-[#475569]">Pabrik PCB, komponen elektronik, dan peralatan presisi di Kabil dan Muka Kuning mengoperasikan mesin senilai puluhan miliar yang butuh perlindungan machinery breakdown 24/7.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <p className="text-2xl mb-2">⚓</p>
            <h3 className="font-bold text-[#0a1628] mb-1">Galangan Kapal Tanjung Uncang</h3>
            <p className="text-sm text-[#475569]">Crane, gantry, mesin las, dan peralatan shipyard senilai ratusan miliar perlu perlindungan equipment all risk selama proses pembangunan dan perbaikan kapal berlangsung.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <p className="text-2xl mb-2">🏗️</p>
            <h3 className="font-bold text-[#0a1628] mb-1">Proyek Konstruksi Aktif</h3>
            <p className="text-sm text-[#475569]">Excavator, bulldozer, crane mobile, dan concrete pump yang beroperasi di proyek properti dan infrastruktur Batam membutuhkan perlindungan equipment all risk selama masa proyek.</p>
          </div>
        </div>
      </div>
      <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6 text-center">Produk Machinery Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { title: "Asuransi Alat Berat", desc: "Perlindungan excavator, bulldozer, dan alat berat konstruksi dari kerusakan fisik, kecelakaan, dan bencana alam selama proyek.", href: "/asuransi-machinery/asuransi-alat-berat" },
          { title: "Asuransi Crane", desc: "Perlindungan menyeluruh untuk tower crane dan mobile crane termasuk tanggung jawab pihak ketiga (TPL) yang krusial di area padat.", href: "/asuransi-machinery/asuransi-crane" },
          { title: "Machinery Breakdown", desc: "Perlindungan kerusakan mendadak pada mesin pabrik, mesin produksi, genset, dan kompresor yang sudah terpasang.", href: "/asuransi-machinery/machinery-breakdown" },
        ].map((p) => (
          <Link key={p.href} href={p.href} className="group p-6 bg-white rounded-2xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all">
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2">{p.title}</h3>
            <p className="text-[#475569] text-sm">{p.desc}</p>
          </Link>
        ))}
      </div>
    </ProductPageLayout>
  );
}
