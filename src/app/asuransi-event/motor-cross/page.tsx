import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Motor Cross Batam – Personal Accident Pembalap & Liability",
  description:
    "Asuransi event motor cross dan grasstrack di Batam & Kepri. Personal accident pembalap, public liability penonton, kerusakan properti venue. Konsultasi Rio 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-event/motor-cross",
  languages: {
    id: "https://asuransibatam.com/asuransi-event/motor-cross",
    en: "https://asuransibatam.com/en/event-insurance/motocross-insurance",
  },
});

const benefits = [
  { icon: "🏍️", title: "Personal Accident Pembalap", desc: "Santunan tunai untuk pembalap terdaftar jika mengalami cedera, cacat tetap, atau meninggal dunia akibat kecelakaan selama latihan maupun balapan." },
  { icon: "👥", title: "Public Liability Penonton", desc: "Menanggung tuntutan ganti rugi jika penonton atau pihak ketiga cedera akibat motor yang keluar lintasan atau insiden operasional lainnya." },
  { icon: "🚧", title: "Kerusakan Properti Venue", desc: "Melindungi panitia dari klaim kerusakan pagar pembatas, tribun sementara, atau lahan pihak ketiga yang disewa sebagai lokasi sirkuit." },
  { icon: "⚖️", title: "Liability Pihak Ketiga", desc: "Mencakup tanggung gugat jika motor peserta menabrak kendaraan lain atau merusak fasilitas umum di sekitar venue." },
  { icon: "🚑", title: "Perluasan Tim Medis & Panitia", desc: "Opsi personal accident kolektif untuk kru medis dan panitia lintasan yang bertugas di area berisiko tinggi sepanjang hari lomba." },
  { icon: "📋", title: "Certificate of Insurance", desc: "Penerbitan COI untuk memenuhi syarat izin keramaian, persyaratan IMI, atau sponsor kejuaraan." },
];

const faqs = [
  {
    q: "Apakah asuransi motor cross menanggung kerusakan motor pembalap?",
    a: "Fokus utama polis ini adalah personal accident pembalap dan public liability terhadap pihak ketiga. Kerusakan unit motor pembalap sendiri umumnya bukan tanggungan otomatis, kecuali disepakati sebagai perluasan khusus di awal.",
  },
  {
    q: "Berapa biaya asuransi untuk event motor cross skala klub?",
    a: "Premi ditentukan oleh jumlah pembalap terdaftar, estimasi jumlah penonton, nilai santunan personal accident yang diinginkan, dan limit liability. Event skala klub atau Kejurda umumnya lebih terjangkau dibanding kejuaraan nasional — hubungi kami untuk estimasi sesuai skala event Anda.",
  },
  {
    q: "Data apa saja yang perlu disiapkan panitia untuk mengajukan polis?",
    a: "Tanggal dan lokasi sirkuit, estimasi jumlah pembalap dan penonton, susunan kelas yang dipertandingkan, serta gambaran kesiapan keselamatan (barrier, akses ambulans, zona aman penonton).",
  },
  {
    q: "Apakah pembalap wajib terdaftar secara resmi agar dijamin?",
    a: "Ya. Personal accident hanya berlaku untuk pembalap yang terdaftar resmi di panitia sesuai daftar peserta yang dilaporkan ke asuransi. Pembalap tamu dadakan yang tidak terdaftar berisiko tidak memenuhi syarat klaim.",
  },
  {
    q: "Berapa lama proses penerbitan polis sebelum hari lomba?",
    a: "Idealnya diajukan 1–2 minggu sebelum pelaksanaan untuk event Kejurda atau kejuaraan resmi, agar ada waktu assessment lokasi dan penyusunan skema santunan yang sesuai.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Event Motor Cross Batam",
  description:
    "Asuransi event motor cross dan grasstrack di Batam dan Kepulauan Riau — personal accident pembalap, public liability penonton, dan kerusakan properti venue.",
  serviceType: "Personal Accident Insurance / Public Liability Insurance",
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

export default function AsuransiMotorCrossPage() {
  return (
    <ProductPageLayout
      title="Asuransi Event Motor Cross Batam"
      subtitle="Personal Accident Pembalap & Liability Penonton"
      description="Dari Sirkuit Golden Prawn Bengkong hingga kompleks Temenggung Abdul Jamal, ajang grasstrack dan motocross di Kepri terus bertambah ramai. Kami membantu panitia klub, IMI Kepri, dan event organizer merancang perlindungan bagi pembalap dan penonton sesuai skala event."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Asuransi Event", href: "/asuransi-event" },
        { label: "Motor Cross", href: "/asuransi-event/motor-cross" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-3xl mx-auto text-center">
        <p className="text-[#475569]">
          Ingin memahami risiko lengkap event motor cross — standar keselamatan, lokasi balap di Kepri,
          dan kesalahan umum yang sering diabaikan panitia?{" "}
          <Link href="/blog/asuransi-motorcross-batam" className="text-[#1a4fa0] font-semibold hover:underline">
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
          <Link href="/asuransi-event/hole-in-one" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Hole in One</h3>
            <p className="text-[#475569] text-sm">Jaminan hadiah hole in one untuk turnamen golf.</p>
          </Link>
          <Link href="/asuransi-personal-accident" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Personal Accident</h3>
            <p className="text-[#475569] text-sm">Lindungi kru medis dan panitia lintasan secara kolektif.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}
