import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";
import { ArrowRight, Bike, Car, Flame, KeyRound, ShieldAlert, Siren, Truck, Users, Waves } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Kendaraan Batam – All Risk & TLO untuk Mobil, Dump Truck & Armada Niaga",
  description: "Asuransi kendaraan terpercaya di Batam. All Risk dan TLO untuk mobil pribadi, dump truck, hingga armada niaga. Premi bersaing, klaim cepat. Hubungi Rio: 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-kendaraan",
  languages: {
      id: "https://asuransibatam.com/asuransi-kendaraan",
      en: "https://asuransibatam.com/en/vehicle-insurance",
    },
});

const benefits = [
  { icon: "🚗", Icon: Car, title: "Kerusakan Total & Sebagian (All Risk)", desc: "All Risk mencakup semua kerusakan — dari lecet dan penyok ringan, kerusakan sedang akibat kecelakaan, hingga total loss — tanpa perlu hitung persentase kerusakan." },
  { icon: "💥", Icon: ShieldAlert, title: "Tabrakan, Benturan & Tergelincir", desc: "Kerusakan akibat tabrakan antar kendaraan, benturan dengan objek diam, tergelincir, atau terguling di jalan — termasuk di ruas tol Barelang dan jalan dalam kota Batam." },
  { icon: "🔥", Icon: Flame, title: "Kebakaran Kendaraan", desc: "Kerugian akibat kebakaran mesin, ledakan, korsleting listrik, dan sambaran petir langsung pada kendaraan yang diasuransikan." },
  { icon: "🚨", Icon: Siren, title: "Pencurian Kendaraan", desc: "Ganti rugi penuh (sesuai nilai pertanggungan) apabila kendaraan hilang dicuri — berlaku untuk polis TLO maupun All Risk." },
  { icon: "🌊", Icon: Waves, title: "Bencana Alam", desc: "Kerusakan akibat banjir, angin kencang, badai, dan bencana alam lainnya — dengan perluasan khusus yang sangat relevan untuk Batam yang rawan banjir musiman." },
  { icon: "👥", Icon: Users, title: "Tanggung Jawab Pihak Ketiga (TPL)", desc: "Biaya perbaikan kendaraan, properti, atau kompensasi cedera pihak ketiga yang mengalami kerugian akibat kendaraan Anda — perlindungan penting di jalan ramai Batam." },
];

const faqs = [
  { q: "Apa perbedaan All Risk dan TLO untuk kendaraan di Batam?", a: "All Risk (Comprehensive) menanggung semua kerusakan termasuk yang paling ringan sekalipun. TLO (Total Loss Only) hanya menanggung jika kendaraan rusak lebih dari 75% nilai atau hilang dicuri. Premi TLO lebih murah 50–70% dibanding All Risk. Untuk kendaraan baru atau bernilai tinggi di Batam, All Risk sangat disarankan. Untuk kendaraan lama di atas 5 tahun, TLO sudah cukup memadai." },
  { q: "Berapa estimasi premi asuransi mobil All Risk di Batam?", a: "Tarif OJK membagi kendaraan berdasarkan kategori harga. Untuk mobil kategori 2 (Rp 125–200 juta), premi All Risk wilayah 3 (Sumatera) berkisar 2,08%–3,10% per tahun. Contoh: Toyota Avanza seharga Rp 200 juta, premi All Risk sekitar Rp 4,2–6,2 juta per tahun. Hubungi kami atau gunakan kalkulator premi online kami untuk kalkulasi spesifik." },
  { q: "Kendaraan plat luar Batam (BM, BA, dll) bisa diasuransikan di sini?", a: "Ya, kami bisa mengurus asuransi untuk kendaraan berplat nomor wilayah Kepulauan Riau (BP) maupun plat luar seperti BM (Riau), BA (Sumatera Barat), dan lainnya yang beroperasi di Batam. Kendaraan tetap terlindungi selama berada di wilayah Indonesia." },
  { q: "Apakah kendaraan modifikasi bisa diasuransikan?", a: "Bisa, namun wajib dideklarasikan saat pengajuan polis. Modifikasi yang tidak dideklarasikan bisa menjadi alasan penolakan klaim. Nilai pertanggungan disesuaikan — untuk modifikasi yang meningkatkan nilai kendaraan, pertanggungan bisa dinaikkan dengan persetujuan surveyor." },
  { q: "Apakah ada asuransi untuk fleet kendaraan niaga atau armada perusahaan?", a: "Ya. Fleet insurance tersedia untuk 5 unit atau lebih dengan diskon premi signifikan. Sangat cocok untuk perusahaan logistik, kontraktor, atau bisnis yang memiliki armada kendaraan operasional di Batam dan sekitar Kepulauan Riau." },
  { q: "Bagaimana cara klaim asuransi kendaraan jika terjadi kecelakaan?", a: "Langkah: (1) Foto kerusakan dan posisi kendaraan. (2) Lapor polisi jika ada korban atau kerusakan signifikan — minta Surat Keterangan Kecelakaan. (3) Hubungi kami di 0813-7333-6728 dalam 3×24 jam. (4) Bawa kendaraan ke bengkel rekanan atau sesuai petunjuk kami. Jangan perbaiki kendaraan sendiri sebelum ada persetujuan dari pihak asuransi." },
];

const policyComparison = [
  { feature: "Kerusakan Sebagian (Ringan-Sedang)", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Kerusakan Total (>75%)", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Pencurian", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Kebakaran", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Bencana Alam (Banjir)", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Third Party Liability (TPL)", basic: "❌", standard: "Opsional", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Kendaraan Batam",
  description: "Layanan asuransi kendaraan All Risk dan TLO di Batam untuk mobil pribadi, dump truck, dan armada niaga dengan premi kompetitif dan proses klaim cepat.",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function AsuransiKendaraanPage() {
  return (
    <ProductPageLayout cluster="vehicle" rich
      heroImage={{ src: "/images/produk/kendaraan.webp", alt: "Mobil biru dan kalkulator premi, ilustrasi asuransi kendaraan di Batam", badge: "All Risk & TLO untuk mobil, motor, hingga dump truck", shape: "landscape" }}
      title="Asuransi Kendaraan Batam"
      subtitle="All Risk & TLO untuk Semua Jenis Kendaraan"
      description="Dari mobil pribadi keluarga hingga armada dump truck operasional — kami menyediakan perlindungan kendaraan komprehensif di Batam. Dengan lalu lintas yang padat di Batam Center, Nagoya, dan jalan-jalan menuju kawasan industri, risiko kecelakaan adalah nyata setiap harinya. Lindungi aset kendaraan Anda mulai hari ini."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[{ label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" }]}
      schema={schema}
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Mengapa Pemilik Kendaraan di Batam Perlu Asuransi?</h2><div aria-hidden="true" className="mx-auto mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
        <p className="text-center text-[#475569] mb-8 max-w-2xl mx-auto">Batam memiliki keunikan risiko yang berbeda dari kota lain di Indonesia.</p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-gradient-to-b from-white to-[#faf8f3] hover:border-[#c9a84c]/40 hover:shadow-md transition-all">
            <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1628] to-[#1a4fa0] text-[#f0d080] shadow-md shadow-[#0a1628]/15"><Waves size={24} strokeWidth={1.75} aria-hidden="true" /></span>
            <h3 className="font-display font-bold text-[#0a1628] mb-1.5">Risiko Banjir Musiman</h3>
            <p className="text-[15px] leading-relaxed text-[#475569]">Kawasan Sekupang, Batu Aji, dan beberapa titik di Batam Center rutin terdampak banjir saat musim hujan. Mesin mobil yang terendam bisa mengakibatkan kerusakan total yang tidak murah diperbaiki.</p>
          </div>
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-gradient-to-b from-white to-[#faf8f3] hover:border-[#c9a84c]/40 hover:shadow-md transition-all">
            <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1628] to-[#1a4fa0] text-[#f0d080] shadow-md shadow-[#0a1628]/15"><Truck size={24} strokeWidth={1.75} aria-hidden="true" /></span>
            <h3 className="font-display font-bold text-[#0a1628] mb-1.5">Lalu Lintas Kendaraan Berat</h3>
            <p className="text-[15px] leading-relaxed text-[#475569]">Kendaraan berat dari kawasan industri Muka Kuning, Kabil, dan Tanjung Uncang berbagi jalan dengan kendaraan pribadi — meningkatkan risiko kecelakaan, terutama di jam sibuk pagi dan sore.</p>
          </div>
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-gradient-to-b from-white to-[#faf8f3] hover:border-[#c9a84c]/40 hover:shadow-md transition-all">
            <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1628] to-[#1a4fa0] text-[#f0d080] shadow-md shadow-[#0a1628]/15"><KeyRound size={24} strokeWidth={1.75} aria-hidden="true" /></span>
            <h3 className="font-display font-bold text-[#0a1628] mb-1.5">Angka Pencurian Kendaraan</h3>
            <p className="text-[15px] leading-relaxed text-[#475569]">Sebagai kota perbatasan dengan mobilitas tinggi, risiko pencurian kendaraan di Batam lebih tinggi dibanding rata-rata kota di Indonesia — terutama untuk kendaraan niaga yang diparkir di lokasi terpencil.</p>
          </div>
        </div>
      </div>
      <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-2 text-center">Produk Kendaraan Kami</h2><div aria-hidden="true" className="mx-auto mb-8 h-1 w-14 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { title: "Asuransi Mobil Batam", desc: "All Risk & TLO untuk mobil pribadi dan keluarga. Dilengkapi kalkulator premi online dan pilihan bengkel rekanan terpercaya di Batam.", href: "/asuransi-kendaraan/asuransi-mobil-batam", Icon: Car },
          { title: "Asuransi Motor Batam", desc: "All Risk dan TLO untuk motor harian, sport, dan operasional, dengan estimasi premi berdasarkan tarif OJK.", href: "/asuransi-kendaraan/asuransi-motor-batam", Icon: Bike },
          { title: "Asuransi Dump Truck", desc: "Perlindungan All Risk, TLO, dan fleet insurance untuk dump truck serta kendaraan berat komersial operasional di Batam.", href: "/asuransi-kendaraan/asuransi-dumptruck", Icon: Truck },
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
