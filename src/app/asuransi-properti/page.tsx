// app/asuransi-properti/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";
import Link from "next/link";
import {
  Flame, Waves, Hammer, Briefcase, Users, HardHat,
  Hotel, House, Store, Warehouse, Factory, Building2,
  ArrowRight, CloudLightning, Droplets, Landmark,
  MessageCircle, ClipboardList, FileCheck2,
} from "lucide-react";
import { tone } from "@/components/card-tones";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Properti Batam – Rumah, Hotel, Gedung Komersial",
  description: "Lindungi properti Anda di Batam dari risiko kebakaran, bencana, dan kerusakan. Konsultasi gratis dengan Rio, praktisi asuransi properti terpercaya.",
  canonical: "https://asuransibatam.com/asuransi-properti",
  languages: {
      id: "https://asuransibatam.com/asuransi-properti",
      en: "https://asuransibatam.com/en/property-insurance",
    },
});

const benefits = [
  { icon: "🔥", Icon: Flame, title: "Kebakaran & Petir", desc: "Perlindungan menyeluruh dari kebakaran, sambaran petir, ledakan, dan kerusakan akibat asap." },
  { icon: "🌊", Icon: Waves, title: "Banjir & Angin Topan", desc: "Kerugian akibat bencana alam, termasuk banjir, angin topan, badai, dan tsunami." },
  { icon: "🔨", Icon: Hammer, title: "Kerusakan Bangunan", desc: "Biaya perbaikan atau pembangunan ulang struktur bangunan yang rusak." },
  { icon: "💼", Icon: Briefcase, title: "Isi & Peralatan", desc: "Perlindungan untuk perabot, peralatan elektronik, dan aset di dalam properti." },
  { icon: "👥", Icon: Users, title: "Tanggung Jawab Pihak Ketiga", desc: "Perlindungan atas tuntutan hukum dari pihak ketiga yang mengalami kerugian di properti Anda." },
  { icon: "🏗️", Icon: HardHat, title: "Biaya Tambahan", desc: "Biaya sewa tempat tinggal sementara dan biaya pembersihan puing-puing." },
];

const faqs = [
  { q: "Apa saja properti yang bisa diasuransikan?", a: "Hotel, rumah tinggal, ruko, gedung perkantoran, gudang, pabrik, dan properti komersial lainnya di Batam dan sekitarnya." },
  { q: "Apakah kebakaran karena kelalaian ditanggung?", a: "Ya, kebakaran karena kelalaian umumnya masih ditanggung kecuali ada unsur kesengajaan yang terbukti." },
  { q: "Berapa premi asuransi properti di Batam?", a: "Premi bervariasi tergantung nilai properti, lokasi, dan jenis perlindungan. Hubungi kami untuk penawaran spesifik." },
  { q: "Apakah banjir dan gempa bumi bisa ikut ditanggung?", a: "Bisa. Perluasan jaminan seperti banjir, angin topan, dan gempa bumi umumnya dapat ditambahkan pada polis kebakaran dasar. Cakupan dan tarifnya mengikuti ketentuan penanggung, jadi sebaiknya dikonfirmasi sebelum polis diterbitkan." },
  { q: "Informasi apa yang perlu disiapkan untuk mengajukan penawaran?", a: "Umumnya cukup alamat dan jenis bangunan, jenis konstruksi, tahun pembangunan, estimasi nilai bangunan dan isinya, serta penggunaan properti (hunian atau usaha). Penanggung dapat meminta data tambahan sesuai kebutuhan." },
];

const policyComparison = [
  { feature: "Kebakaran & Petir", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Banjir & Angin Topan", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Gempa Bumi", basic: "❌", standard: "❌", comprehensive: "✅" },
  { feature: "Tanggung Jawab Pihak Ketiga", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Kerusuhan & Huru-hara", basic: "❌", standard: "Opsional", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Properti Batam",
  description: "Layanan asuransi properti untuk rumah, hotel, dan bangunan komersial di Batam",
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
  },
  areaServed: { "@type": "City", name: "Batam" },
};

const products = [
  {
    Icon: Hotel,
    title: "Asuransi Hotel Batam",
    desc: "Perlindungan komprehensif untuk aset hotel Anda dari kebakaran, bencana, dan tanggung jawab pihak ketiga.",
    href: "/asuransi-properti/asuransi-hotel-batam",
  },
  {
    Icon: House,
    title: "Asuransi Rumah Batam",
    desc: "Lindungi rumah & isi rumah dari berbagai risiko termasuk kebakaran, banjir, dan pencurian.",
    href: "/asuransi-properti/asuransi-rumah-batam",
  },
  {
    Icon: Store,
    title: "Asuransi Ruko Batam",
    desc: "Perlindungan untuk ruko dan properti usaha Anda dari kerugian finansial akibat bencana atau kerusakan.",
    href: "/asuransi-properti/asuransi-ruko-batam",
  },
  {
    Icon: Warehouse,
    title: "Asuransi Gudang Batam",
    desc: "Amankan gudang dan isi stok Anda dari risiko kebakaran, banjir, dan kerusakan struktural.",
    href: "/asuransi-properti/asuransi-gudang-batam",
  },
  {
    Icon: Factory,
    title: "Asuransi Pabrik & Kawasan Industri Batam",
    desc: "Solusi asuransi properti industri untuk pabrik dan fasilitas produksi di kawasan industri Batam.",
    href: "/asuransi-properti/asuransi-pabrik-kawasan-industri-batam",
  },
  {
    Icon: Building2,
    title: "Asuransi Apartemen Batam",
    desc: "Lindungi unit apartemen dan isinya dari berbagai risiko yang dapat merugikan investasi properti Anda.",
    href: "/asuransi-properti/asuransi-apartemen-batam",
  },
];

const localRisks = [
  {
    Icon: CloudLightning,
    title: "Cuaca Ekstrem di Pulau",
    desc: "Batam punya curah hujan tinggi, petir, dan angin laut yang kencang. Atap, instalasi listrik, dan perangkat elektronik jadi bagian yang paling sering terdampak.",
  },
  {
    Icon: Droplets,
    title: "Banjir & Genangan",
    desc: "Kawasan perumahan di cekungan rendah dan dekat aliran air bisa tergenang saat hujan deras. Perluasan jaminan banjir membantu menutup biaya perbaikan dan penggantian isi.",
    href: "/blog/risiko-banjir-properti-batam",
    cta: "Baca panduan klaim banjir",
  },
  {
    Icon: Landmark,
    title: "Aset Bernilai Tinggi",
    desc: "Dari ruko di Batam Center dan Nagoya sampai pabrik di kawasan industri seperti Batamindo, Kabil, dan Batu Ampar, satu kejadian bisa menghentikan usaha berminggu-minggu.",
  },
];

const steps = [
  { Icon: MessageCircle, title: "Konsultasi Gratis", desc: "Ceritakan jenis properti, lokasi, dan kebutuhan Anda lewat WhatsApp. Tanpa biaya dan tanpa kewajiban." },
  { Icon: ClipboardList, title: "Penawaran Sesuai Kebutuhan", desc: "Anda menerima rekomendasi cakupan dan perbandingan penawaran, sehingga pilihannya jelas sebelum memutuskan." },
  { Icon: FileCheck2, title: "Polis Diterbitkan", desc: "Setelah disetujui, polis diterbitkan dan Anda tetap didampingi, termasuk saat perlu mengajukan klaim." },
];

export default function AsuransiPropertiPage() {
  return (
    <ProductPageLayout cluster="property"
      title="Asuransi Properti Batam"
      subtitle="Perlindungan Properti Terpercaya"
      description="Lindungi investasi properti Anda di Batam dari risiko kebakaran, bencana alam, dan kerusakan struktural. Kami menyediakan polis yang disesuaikan untuk rumah tinggal, hotel, dan gedung komersial."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[{ label: "Asuransi Properti", href: "/asuransi-properti" }]}
      schema={schema}
      calculatorCta={{ label: "Hitung Premi Properti", href: "/kalkulator-premi-properti" }}
      rich
      heroImage={{
        src: "/images/produk/properti.webp",
        alt: "Rumah tinggal modern di Batam yang dilindungi asuransi properti dari kebakaran dan bencana",
        badge: "Polis disesuaikan untuk rumah, ruko, hotel, hingga pabrik",
      }}
    >
      <div className="space-y-6 md:space-y-8">
        {/* Produk */}
        <div>
          <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Produk Properti Kami</h2>
          <div aria-hidden="true" className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
          <p className="text-center text-[#475569] mb-4 text-sm md:text-base max-w-2xl mx-auto">
            Pilih jenis properti Anda untuk melihat cakupan dan penawaran yang lebih rinci.
          </p>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
            {products.map((p, i) => (
              <StaggerItem key={p.href} className="h-full">
                <Link
                  href={p.href}
                  className={`group flex h-full items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(i).card}`}
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(i).tile}`}>
                    <p.Icon size={20} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] group-hover:text-[#1a4fa0] mb-1 transition-colors">{p.title}</h3>
                    <p className="text-[13px] leading-snug text-[#475569]">{p.desc}</p>
                    <span className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${tone(i).text}`}>
                      Lihat detail
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Risiko lokal */}
        <Reveal>
          <div className="mx-auto max-w-6xl rounded-2xl border border-[#c7d9f5] bg-gradient-to-br from-[#eef4ff] via-white to-[#fbf6e6] p-4 md:p-5">
            <span className="inline-flex items-center rounded-full bg-[#0a1628] px-3 py-1 text-xs font-semibold text-[#f0d080]">Risiko di Batam</span>
            <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a1628] mt-2 mb-1">Mengapa Properti di Batam Perlu Diproteksi?</h2>
            <p className="text-sm text-[#475569] mb-3">
              Kondisi pulau, cuaca, dan nilai aset di Batam membuat perlindungan properti lebih dari sekadar formalitas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {localRisks.map((r, i) => (
                <div key={r.title} className={`rounded-xl border p-3.5 ${tone(i + 3).card}`}>
                  <div className="mb-1.5 flex items-center gap-2.5">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg shadow-sm ${tone(i + 3).tile}`}>
                      <r.Icon size={18} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628]">{r.title}</h3>
                  </div>
                  <p className="text-[13px] leading-snug text-[#475569]">{r.desc}</p>
                  {r.href && (
                    <Link href={r.href} className={`group mt-2 inline-flex items-center gap-1 text-xs font-semibold ${tone(i + 3).text}`}>
                      {r.cta}
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Langkah */}
        <div className="mx-auto max-w-6xl rounded-2xl border border-[#ecdca0] bg-[#fbf6e6]/70 p-4 md:p-5">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080] px-3 py-1 text-xs font-bold text-[#0a1628]">Cara Mudah</span>
          <h2 className="font-display font-bold text-xl md:text-2xl text-[#0a1628] mt-2 mb-3">Tiga Langkah Mendapat Perlindungan</h2>
          <ol className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {steps.map((st, i) => (
              <li key={st.title} className="flex gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#c9a84c] to-[#f0d080] text-sm font-bold text-[#0a1628] shadow-sm">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] mb-0.5">{st.title}</h3>
                  <p className="text-[13px] leading-snug text-[#475569]">{st.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-3 rounded-lg bg-white px-3 py-2 text-[13px] leading-snug text-[#475569]">
            <span aria-hidden="true">💡 </span>
            Siapkan alamat, jenis bangunan, dan estimasi nilai properti agar penawaran bisa disusun lebih cepat.
          </div>
        </div>
      </div>
    </ProductPageLayout>
  );
}
