import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Hotel Batam – Perlindungan Lengkap Aset Perhotelan",
  description: "Asuransi hotel dan penginapan di Batam. Lindungi bangunan, perabot, peralatan, dan tanggung jawab tamu dari kebakaran, banjir, dan kerusakan. Konsultasi gratis: 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-properti/asuransi-hotel-batam",
  languages: {
      id: "https://asuransibatam.com/asuransi-properti/asuransi-hotel-batam",
      en: "https://asuransibatam.com/en/property-insurance/hotel-insurance-batam",
    },
});

const benefits = [
  { icon: "🏨", title: "Bangunan & Struktur Hotel", desc: "Perlindungan struktur bangunan hotel dari kebakaran, sambaran petir, ledakan, bencana alam, dan kerusakan fisik lainnya yang merugikan." },
  { icon: "🛋️", title: "Perabot, Interior & Dekorasi", desc: "Furniture kamar, lobi, restoran, dekorasi, perlengkapan kamar mandi, dan seluruh isi hotel yang memiliki nilai inventaris tinggi." },
  { icon: "⚡", title: "Peralatan Operasional Hotel", desc: "AC, TV, lift, sistem CCTV, mesin laundry, peralatan dapur restoran, generator, dan sistem kelistrikan hotel." },
  { icon: "👤", title: "Tanggung Jawab kepada Tamu", desc: "Perlindungan atas klaim tamu yang mengalami kecelakaan di area hotel — terpeleset di kolam renang, lift bermasalah, atau kebakaran di kamar." },
  { icon: "💰", title: "Business Interruption (Kehilangan Pendapatan)", desc: "Kompensasi atas hilangnya pendapatan sewa kamar selama hotel ditutup sementara untuk proses perbaikan akibat klaim yang ditanggung." },
  { icon: "🔒", title: "Pencurian & Vandalism", desc: "Kerugian akibat pencurian dengan paksa, pembobolan, dan tindakan vandalism oleh pihak internal maupun eksternal." },
];

const faqs = [
  { q: "Mengapa hotel di Batam perlu asuransi properti khusus?", a: "Batam adalah destinasi wisata internasional dengan jutaan kunjungan per tahun — mayoritas dari Singapura dan Malaysia. Tamu internasional memiliki ekspektasi tinggi dan literasi hukum yang baik. Satu insiden kebakaran atau kecelakaan tamu tanpa asuransi bisa mengakibatkan kerugian puluhan miliar dari biaya perbaikan ditambah tuntutan hukum dari tamu asing." },
  { q: "Apakah kerusakan akibat tamu nakal atau vandalism ditanggung?", a: "Ya, asuransi hotel mencakup kerusakan yang disebabkan oleh tamu termasuk vandalism, pencurian oleh tamu, dan kerusakan sengaja lainnya. Namun ada sub-limit untuk klaim jenis ini — pastikan limit-nya memadai sesuai standar kamar hotel Anda." },
  { q: "Bagaimana cara menghitung nilai pertanggungan yang tepat untuk hotel?", a: "Nilai pertanggungan dihitung berdasarkan replacement cost (biaya membangun ulang di harga saat ini), bukan nilai buku atau harga beli. Untuk isi dan perabot, gunakan nilai inventaris terkini. Jangan underinsure — jika nilai pertanggungan kurang dari nilai sebenarnya, klaim bisa dikurangi proporsional." },
  { q: "Berapa estimasi premi asuransi hotel di Batam?", a: "Premi bangunan hotel berkisar 0,08%–0,15% dari nilai bangunan per tahun untuk risiko standar. Hotel dengan kolam renang, restoran, atau fasilitas kompleks bisa lebih tinggi. Contoh: hotel bintang 3 dengan nilai bangunan Rp 20 miliar, premi bangunan mulai sekitar Rp 16–30 juta per tahun. Hubungi kami untuk penawaran detail." },
  { q: "Apakah bisa klaim kehilangan pendapatan saat hotel ditutup?", a: "Ya, dengan ekstensi Business Interruption (BI), Anda mendapatkan kompensasi atas pendapatan yang hilang selama masa perbaikan. BI dihitung berdasarkan rata-rata pendapatan harian hotel dikali perkiraan lama perbaikan, dikurangi biaya variabel yang tidak keluar. Sangat penting untuk hotel dengan occupancy rate tinggi." },
  { q: "Apa yang harus dilakukan jika tamu mengajukan klaim karena kecelakaan di hotel?", a: "Segera dokumentasikan kejadian (foto, keterangan saksi, laporan internal). Jangan langsung mengakui kesalahan atau menawarkan kompensasi tanpa konsultasi dengan kami terlebih dahulu. Hubungi kami di 0813-7333-6728 — tim kami akan mendampingi proses penanganan klaim tamu agar tidak merugikan bisnis Anda." },
];

const policyComparison = [
  { feature: "Bangunan Hotel", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Perabot & Interior", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Peralatan Elektronik & Mesin", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Business Interruption", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Tanggung Jawab Tamu (TPL)", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Pencurian & Vandalism", basic: "❌", standard: "✅", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Hotel Batam",
  description: "Asuransi perlindungan hotel dan penginapan di Batam mencakup bangunan, perabot, peralatan, business interruption, dan tanggung jawab kepada tamu.",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

export default function AsuransiHotelBatamPage() {
  return (
    <ProductPageLayout cluster="property"
      title="Asuransi Hotel Batam"
      subtitle="Perlindungan Lengkap Industri Perhotelan"
      description="Hotel dan penginapan di Batam melayani tamu internasional dari Singapura dan Malaysia. Satu insiden — kebakaran dapur restoran, kecelakaan tamu di kolam renang, atau banjir yang merusak puluhan kamar — bisa mengancam kelangsungan bisnis tanpa perlindungan yang tepat."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Asuransi Properti", href: "/asuransi-properti" },
        { label: "Asuransi Hotel Batam", href: "/asuransi-properti/asuransi-hotel-batam" },
      ]}
      schema={schema}
      calculatorCard="hotel"
      rich
    >
      <div className="mb-6 md:mb-8 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Studi Kasus: Klaim Hotel di Batam</h2>
        <div aria-hidden="true" className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
        <p className="text-center text-[#475569] text-sm md:text-base mb-4 md:mb-6">Ilustrasi nyata pentingnya asuransi hotel di kota wisata internasional seperti Batam.</p>
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          <div className="p-3.5 md:p-5 rounded-xl border border-[#c7d9f5] bg-[#eef4ff]">
            <h3 className="font-display font-bold text-base md:text-lg leading-snug text-[#0a1628] mb-1.5">🔥 Kasus 1 — Kebakaran Dapur, Hotel di Nagoya</h3>
            <p className="text-[#475569] text-[13px] md:text-sm leading-snug md:leading-relaxed mb-2.5">Kebakaran di dapur restoran hotel bintang 3 kawasan Nagoya menghanguskan dapur, ruang makan, dan merusak 12 kamar di lantai atas. Hotel tutup selama 3 bulan untuk renovasi.</p>
            <div className="bg-white rounded-lg p-3 text-[13px] md:text-sm leading-snug">
              <p className="text-[#0a1628] font-semibold mb-0.5">Kerugian yang terjadi:</p>
              <p className="text-[#475569]">Renovasi bangunan & perabot: Rp 3,8 M | Kehilangan pendapatan 3 bulan (BI): Rp 1,2 M</p>
              <p className="text-green-700 font-semibold mt-1.5">✅ Seluruh klaim ditanggung. Hotel kembali beroperasi tanpa menguras modal sendiri.</p>
            </div>
          </div>
          <div className="p-3.5 md:p-5 rounded-xl border border-[#c7d9f5] bg-[#eef4ff]">
            <h3 className="font-display font-bold text-base md:text-lg leading-snug text-[#0a1628] mb-1.5">🏊 Kasus 2 — Tamu WNA Kecelakaan di Kolam Renang</h3>
            <p className="text-[#475569] text-[13px] md:text-sm leading-snug md:leading-relaxed mb-2.5">Tamu asal Singapura terpeleset di area kolam renang resort di Nongsa dan mengalami cedera tulang belakang. Keluarga mengajukan tuntutan kompensasi medis dan kerugian immateriil.</p>
            <div className="bg-white rounded-lg p-3 text-[13px] md:text-sm leading-snug">
              <p className="text-[#0a1628] font-semibold mb-0.5">Tuntutan yang diajukan:</p>
              <p className="text-[#475569]">Biaya medis di Singapura: SGD 45.000 | Kompensasi immateriil: Rp 800 jt | Biaya hukum: Rp 150 jt</p>
              <p className="text-green-700 font-semibold mt-1.5">✅ Liability insurance menanggung seluruh klaim dan biaya hukum. Resort terlindungi dari kebangkrutan.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Properti Komersial Lainnya di Batam</h2>
        <div aria-hidden="true" className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
        <div className="grid md:grid-cols-3 gap-3 md:gap-4 mt-4">
          <Link href="/asuransi-properti/asuransi-ruko-batam" className="block p-3.5 md:p-5 rounded-xl border border-[#ecdca0] bg-[#fbf6e6] hover:border-[#c9a84c] hover:shadow-md transition-all">
            <h3 className="font-display font-bold text-base md:text-lg leading-snug text-[#0a1628] mb-1">Asuransi Ruko Batam</h3>
            <p className="text-[#475569] text-[13px] md:text-sm leading-snug">Untuk pemilik usaha komersial di kawasan bisnis Batam Center, Nagoya, dan Batu Aji.</p>
          </Link>
          <Link href="/asuransi-properti/asuransi-apartemen-batam" className="block p-3.5 md:p-5 rounded-xl border border-[#ecdca0] bg-[#fbf6e6] hover:border-[#c9a84c] hover:shadow-md transition-all">
            <h3 className="font-display font-bold text-base md:text-lg leading-snug text-[#0a1628] mb-1">Asuransi Apartemen / Kondotel</h3>
            <p className="text-[#475569] text-[13px] md:text-sm leading-snug">Proteksi unit dan tanggung jawab pemilik kondotel yang disewakan kepada tamu.</p>
          </Link>
          <Link href="/blog/asuransi-properti-komersial-batam" className="block p-3.5 md:p-5 rounded-xl border border-[#ecdca0] bg-[#fbf6e6] hover:border-[#c9a84c] hover:shadow-md transition-all">
            <h3 className="font-display font-bold text-base md:text-lg leading-snug text-[#0a1628] mb-1">Panduan Asuransi Properti Komersial</h3>
            <p className="text-[#475569] text-[13px] md:text-sm leading-snug">Tips memilih perlindungan yang tepat untuk bisnis properti Anda di Batam.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}
