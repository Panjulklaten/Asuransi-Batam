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
      <div className="space-y-20 md:space-y-24">
        {/* Produk */}
        <div>
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-2 text-center">Produk Properti Kami</h2>
          <div aria-hidden="true" className="mx-auto mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
          <p className="text-center text-[#475569] mb-12 max-w-2xl mx-auto">
            Pilih jenis properti Anda untuk melihat cakupan dan penawaran yang lebih rinci.
          </p>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((p) => (
              <StaggerItem key={p.href} className="h-full">
                <Link
                  href={p.href}
                  className="group flex h-full flex-col p-7 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/60 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c9a84c]/12 text-[#a07830] ring-1 ring-[#c9a84c]/30 transition-colors group-hover:bg-gradient-to-br group-hover:from-[#c9a84c] group-hover:to-[#f0d080] group-hover:text-[#0a1628]">
                    <p.Icon size={26} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2 transition-colors">{p.title}</h3>
                  <p className="text-[#475569] text-[15px] leading-relaxed mb-5">{p.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a4fa0]">
                    Lihat detail
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Risiko lokal */}
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1e3a6e] px-6 py-12 md:px-12 md:py-14">
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#c9a84c]/15 blur-3xl" />
            <div className="relative">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-3 text-center">Mengapa Properti di Batam Perlu Diproteksi?</h2>
              <p className="text-white/70 text-center max-w-2xl mx-auto mb-10">
                Kondisi pulau, cuaca, dan nilai aset di Batam membuat perlindungan properti lebih dari sekadar formalitas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {localRisks.map((r) => (
                  <div key={r.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#f0d080] text-[#0a1628]">
                      <r.Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="font-display font-bold text-lg text-white mb-2">{r.title}</h3>
                    <p className="text-white/70 text-[15px] leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Langkah */}
        <div>
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-2 text-center">Tiga Langkah Mendapat Perlindungan</h2>
          <div aria-hidden="true" className="mx-auto mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
          <p className="text-center text-[#475569] mb-12 max-w-2xl mx-auto">
            Prosesnya sederhana dan didampingi langsung oleh Rio.
          </p>
          <Stagger className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((st, i) => (
              <StaggerItem key={st.title} className="h-full">
                <div className="relative h-full rounded-2xl border border-[#e2e8f0] bg-white p-7 text-center shadow-sm">
                  <span className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#0a1628] text-sm font-bold text-[#f0d080] ring-4 ring-[#faf8f3]">
                    {i + 1}
                  </span>
                  <span className="mx-auto mb-4 mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#1a4fa0] text-[#f0d080]">
                    <st.Icon size={26} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">{st.title}</h3>
                  <p className="text-[#475569] text-[15px] leading-relaxed">{st.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </ProductPageLayout>
  );
}
