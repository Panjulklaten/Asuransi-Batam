import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Hole in One Batam – Jaminan Hadiah Turnamen Golf",
  description:
    "Asuransi hole in one untuk turnamen golf di Batam. Jaminan hadiah mobil, uang tunai, atau perhiasan tanpa panitia menanggung nilai penuh. Konsultasi Rio 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-event/hole-in-one",
  languages: { id: "https://asuransibatam.com/asuransi-event/hole-in-one" },
});

const benefits = [
  { icon: "🚗", title: "Jaminan Hadiah Kendaraan", desc: "Pembayaran hadiah mobil atau motor sebagai hadiah utama hole in one, sesuai nilai pertanggungan (TSI) yang disepakati." },
  { icon: "💰", title: "Jaminan Hadiah Uang Tunai", desc: "Pembayaran hadiah tunai untuk hole in one di satu atau beberapa hole par 3 dalam satu turnamen." },
  { icon: "💎", title: "Jaminan Hadiah Perhiasan/Barang Mewah", desc: "Cocok untuk turnamen amal atau turnamen bersponsor merek premium yang menawarkan hadiah bernilai tinggi." },
  { icon: "👁️", title: "Petugas Pengawas Independen", desc: "Verifikasi keabsahan hole in one oleh petugas asuransi di hole yang diasuransikan, mengurangi risiko sengketa klaim." },
  { icon: "📏", title: "Konsultasi Syarat Jarak & Peserta", desc: "Pendampingan menentukan jarak hole dan batas peserta yang sesuai standar polis sebelum turnamen berlangsung." },
  { icon: "📋", title: "Proses Klaim Cepat", desc: "Pendampingan dokumentasi dan proses klaim segera setelah hole in one terverifikasi terjadi pada hari turnamen." },
];

const faqs = [
  {
    q: "Berapa premi asuransi hole in one untuk turnamen golf saya?",
    a: "Premi ditentukan oleh nilai hadiah (TSI), jarak hole, dan jumlah peserta turnamen. Karena setiap turnamen memiliki profil risiko berbeda, kami menghitung penawaran secara individual — hubungi kami dengan detail turnamen Anda untuk estimasi premi.",
  },
  {
    q: "Apa saja syarat standar yang perlu dipenuhi panitia?",
    a: "Secara umum: peserta maksimal 150 orang, berstatus amatir (bukan pemain profesional berlisensi), jarak hole minimal 120 meter, risiko sendiri 10% dari nilai hadiah (TSI), dan kehadiran petugas asuransi sebagai pengawas independen di hole yang diasuransikan.",
  },
  {
    q: "Berapa lama sebelum turnamen sebaiknya mengajukan asuransi hole in one?",
    a: "Sebaiknya diajukan minimal 1–2 minggu sebelum hari pelaksanaan, agar ada waktu untuk verifikasi jarak hole, konfirmasi jumlah peserta, dan penjadwalan petugas pengawas pada hari-H.",
  },
  {
    q: "Apakah hadiah bisa dibayarkan langsung ke pemenang di lokasi?",
    a: "Mekanisme pembayaran hadiah mengikuti kesepakatan dengan panitia — bisa melalui panitia terlebih dahulu atau skema lain yang disepakati di awal polis, tergantung jenis hadiah dan ketentuan turnamen.",
  },
  {
    q: "Apakah turnamen dengan peserta dari Singapura/Malaysia tetap bisa diasuransikan?",
    a: "Bisa, selama peserta tetap memenuhi syarat status amatir dan jumlah peserta sesuai batas polis. Banyak turnamen di Batam memang melibatkan peserta lintas negara mengingat lokasinya yang dekat dengan Singapura dan Malaysia.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Hole in One Batam",
  description:
    "Asuransi hole in one untuk turnamen golf di Batam — jaminan pembayaran hadiah mobil, uang tunai, atau perhiasan bagi peserta yang berhasil mencetak hole in one.",
  serviceType: "Hole in One Insurance / Event Prize Indemnity",
  areaServed: [
    { "@type": "City", name: "Batam" },
    { "@type": "AdministrativeArea", name: "Kepulauan Riau" },
  ],
  provider: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    telephone: "+6281373336728",
    url: "https://asuransibatam.com",
  },
};

export default function AsuransiHoleInOnePage() {
  return (
    <ProductPageLayout
      title="Asuransi Hole in One Batam"
      subtitle="Jaminan Hadiah Turnamen Golf"
      description="Batam punya tujuh lapangan golf berstandar internasional dengan turnamen yang digelar hampir setiap bulan. Alih-alih menanggung sendiri nilai penuh hadiah hole in one, panitia cukup membayar premi — kami membantu merancang polis sesuai jarak hole, jumlah peserta, dan nilai hadiah turnamen Anda."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Asuransi Event", href: "/asuransi-event" },
        { label: "Hole in One", href: "/asuransi-event/hole-in-one" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-3xl mx-auto text-center">
        <p className="text-[#475569]">
          Ingin memahami cara kerja hole in one insurance secara rinci — kenapa jarak hole minimal 120
          meter, kenapa harus amatir, dan kesalahan umum yang membuat klaim ditolak?{" "}
          <Link href="/blog/asuransi-hole-in-one-golf-batam" className="text-[#1a4fa0] font-semibold hover:underline">
            Baca panduan lengkapnya di blog →
          </Link>
        </p>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Jenis Event Lainnya</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/asuransi-event/konser-musik" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Konser Musik</h3>
            <p className="text-[#475569] text-sm">Liability penonton dan non-appearance artis untuk konser di Batam.</p>
          </Link>
          <Link href="/asuransi-event/motor-cross" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Motor Cross</h3>
            <p className="text-[#475569] text-sm">Personal accident pembalap dan liability penonton untuk event grasstrack.</p>
          </Link>
          <Link href="/asuransi-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Liability</h3>
            <p className="text-[#475569] text-sm">Perluasan tanggung gugat untuk klub golf yang rutin menyelenggarakan turnamen.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}
