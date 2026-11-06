import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";
import { Anchor, ArrowRight, Briefcase, Cog, Construction, Factory, HardHat, Settings, ShieldAlert, Tractor, TrendingDown, Zap } from "lucide-react";
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
  { icon: "⚙️", Icon: Settings, title: "Kerusakan Mesin (Machinery Breakdown)", desc: "Perlindungan kerusakan tiba-tiba dan tidak terduga pada mesin produksi, generator, kompresor, dan peralatan industri akibat kegagalan mekanis internal." },
  { icon: "💥", Icon: ShieldAlert, title: "Kecelakaan Operasional", desc: "Kerusakan akibat benturan, terjatuh, kesalahan operator, atau kecelakaan fisik lain saat mesin sedang atau tidak beroperasi." },
  { icon: "⚡", Icon: Zap, title: "Kerusakan Listrik & Elektrikal", desc: "Lonjakan tegangan, korsleting, sambaran petir, dan kerusakan komponen elektrikal yang merusak sistem kontrol dan motor mesin." },
  { icon: "🏗️", Icon: HardHat, title: "Selama Pemasangan & Commissioning", desc: "Perlindungan saat mesin baru sedang dipasang, dikalibrasi, atau dalam proses uji coba pertama sebelum beroperasi penuh." },
  { icon: "💼", Icon: Briefcase, title: "Biaya Pengiriman Suku Cadang Darurat", desc: "Biaya pengiriman ekspres suku cadang dari luar negeri atau luar kota Batam untuk mempercepat perbaikan dan meminimalkan downtime." },
  { icon: "📉", Icon: TrendingDown, title: "Kehilangan Keuntungan (Loss of Profit)", desc: "Kompensasi atas hilangnya margin keuntungan selama mesin tidak dapat beroperasi akibat kerusakan yang ditanggung polis." },
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
    <ProductPageLayout cluster="machinery" rich
      heroImage={{ src: "/images/produk/machinery.webp", alt: "Crane dan alat berat proyek konstruksi saat senja, ilustrasi asuransi machinery di Batam", badge: "Mesin dan alat berat tetap aman beroperasi", shape: "landscape" }} title="Asuransi Machinery Batam" subtitle="Perlindungan Mesin, Alat Berat & Equipment Industri"
      description="Mesin adalah jantung operasional bisnis Anda. Di Batam — kota industri dengan ratusan pabrik, galangan kapal, dan fasilitas produksi — satu kerusakan mesin bisa menghentikan seluruh lini produksi dan mengakibatkan kerugian puluhan hingga ratusan juta rupiah per hari. Dengan asuransi machinery yang tepat, downtime tidak lagi mengancam keberlangsungan bisnis."
      benefits={benefits} faqs={faqs} policyComparison={policyComparison}
      breadcrumbs={[{ label: "Asuransi Machinery", href: "/asuransi-machinery" }]}
      schema={schema}
    >
      <div className="mb-12">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Industri di Batam yang Paling Membutuhkan Asuransi Mesin</h2><div aria-hidden="true" className="mx-auto mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
        <p className="text-center text-[#475569] mb-8 max-w-2xl mx-auto">Dari kawasan industri Muka Kuning hingga galangan kapal Tanjung Uncang, industri-industri ini sangat bergantung pada proteksi mesin.</p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-gradient-to-b from-white to-[#faf8f3] hover:border-[#c9a84c]/40 hover:shadow-md transition-all">
            <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1628] to-[#1a4fa0] text-[#f0d080] shadow-md shadow-[#0a1628]/15"><Factory size={24} strokeWidth={1.75} aria-hidden="true" /></span>
            <h3 className="font-display font-bold text-[#0a1628] mb-1.5">Manufaktur Elektronik & Batam</h3>
            <p className="text-[15px] leading-relaxed text-[#475569]">Pabrik PCB, komponen elektronik, dan peralatan presisi di Kabil dan Muka Kuning mengoperasikan mesin senilai puluhan miliar yang butuh perlindungan machinery breakdown 24/7.</p>
          </div>
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-gradient-to-b from-white to-[#faf8f3] hover:border-[#c9a84c]/40 hover:shadow-md transition-all">
            <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1628] to-[#1a4fa0] text-[#f0d080] shadow-md shadow-[#0a1628]/15"><Anchor size={24} strokeWidth={1.75} aria-hidden="true" /></span>
            <h3 className="font-display font-bold text-[#0a1628] mb-1.5">Galangan Kapal Tanjung Uncang</h3>
            <p className="text-[15px] leading-relaxed text-[#475569]">Crane, gantry, mesin las, dan peralatan shipyard senilai ratusan miliar perlu perlindungan equipment all risk selama proses pembangunan dan perbaikan kapal berlangsung.</p>
          </div>
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-gradient-to-b from-white to-[#faf8f3] hover:border-[#c9a84c]/40 hover:shadow-md transition-all">
            <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1628] to-[#1a4fa0] text-[#f0d080] shadow-md shadow-[#0a1628]/15"><HardHat size={24} strokeWidth={1.75} aria-hidden="true" /></span>
            <h3 className="font-display font-bold text-[#0a1628] mb-1.5">Proyek Konstruksi Aktif</h3>
            <p className="text-[15px] leading-relaxed text-[#475569]">Excavator, bulldozer, crane mobile, dan concrete pump yang beroperasi di proyek properti dan infrastruktur Batam membutuhkan perlindungan equipment all risk selama masa proyek.</p>
          </div>
        </div>
      </div>
      <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-2 text-center">Produk Machinery Kami</h2><div aria-hidden="true" className="mx-auto mb-8 h-1 w-14 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { title: "Asuransi Alat Berat", desc: "Perlindungan excavator, bulldozer, dan alat berat konstruksi dari kerusakan fisik, kecelakaan, dan bencana alam selama proyek.", href: "/asuransi-machinery/asuransi-alat-berat", Icon: Tractor },
          { title: "Asuransi Crane", desc: "Perlindungan menyeluruh untuk tower crane dan mobile crane termasuk tanggung jawab pihak ketiga (TPL) yang krusial di area padat.", href: "/asuransi-machinery/asuransi-crane", Icon: Construction },
          { title: "Machinery Breakdown", desc: "Perlindungan kerusakan mendadak pada mesin pabrik, mesin produksi, genset, dan kompresor yang sudah terpasang.", href: "/asuransi-machinery/machinery-breakdown", Icon: Cog },
        ].map((p) => (
          <Link key={p.href} href={p.href} className="group flex h-full flex-col p-7 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/60 hover:shadow-xl hover:-translate-y-1 transition-all">
            {p.Icon && <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c9a84c]/12 text-[#a07830] ring-1 ring-[#c9a84c]/30 transition-colors group-hover:bg-gradient-to-br group-hover:from-[#c9a84c] group-hover:to-[#f0d080] group-hover:text-[#0a1628]"><p.Icon size={26} strokeWidth={1.75} aria-hidden="true" /></span>}
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2 transition-colors">{p.title}</h3>
            <p className="text-[#475569] text-[15px] leading-relaxed">{p.desc}</p>
            <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a4fa0]">Lihat detail<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
          </Link>
        ))}
      </div>
    </ProductPageLayout>
  );
}
