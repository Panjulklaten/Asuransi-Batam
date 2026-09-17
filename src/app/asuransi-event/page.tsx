import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Event Batam – Konser Musik, Motor Cross & Hole in One",
  description:
    "Asuransi event di Batam untuk promotor konser musik, panitia motor cross/grasstrack, dan turnamen golf hole in one. Liability, personal accident, dan cancellation. Konsultasi Rio 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-event",
  languages: {
    id: "https://asuransibatam.com/asuransi-event",
    en: "https://asuransibatam.com/en/event-insurance",
  },
});

const benefits = [
  { icon: "🎤", title: "Liability Konser & Acara Publik", desc: "Tanggung gugat jika penonton atau pihak ketiga cedera akibat operasional acara, ditambah opsi non-appearance dan event cancellation.", href: "/asuransi-event/konser-musik" },
  { icon: "🏍️", title: "Personal Accident & Liability Balap", desc: "Santunan kecelakaan pembalap dan tanggung gugat penonton untuk event motor cross, grasstrack, dan balap otomotif lainnya.", href: "/asuransi-event/motor-cross" },
  { icon: "⛳", title: "Hole in One Golf", desc: "Pembayaran hadiah hole in one turnamen golf — mobil, uang tunai, atau perhiasan — tanpa panitia menanggung sendiri nilai penuh hadiah.", href: "/asuransi-event/hole-in-one" },
  { icon: "🛡️", title: "Public Liability Panitia", desc: "Melindungi event organizer dan klub penyelenggara dari tuntutan hukum akibat cedera atau kerusakan properti pihak ketiga di lokasi acara." },
  { icon: "🌧️", title: "Perluasan Cuaca & Pembatalan", desc: "Opsi tambahan untuk acara outdoor yang berisiko batal atau tertunda akibat cuaca ekstrem dan force majeure lainnya." },
  { icon: "📋", title: "Sertifikat Asuransi (COI)", desc: "Penerbitan Certificate of Insurance untuk memenuhi syarat izin keramaian atau persyaratan sponsor/venue." },
];

const faqs = [
  {
    q: "Apa itu asuransi event dan siapa yang membutuhkannya?",
    a: "Asuransi event adalah gabungan perlindungan (liability, personal accident, cancellation, hingga hadiah khusus seperti hole in one) yang dirancang untuk kebutuhan acara tertentu — konser, event olahraga, turnamen, dan acara publik lainnya. Dibutuhkan oleh promotor, event organizer, panitia klub, dan pengelola venue di Batam.",
  },
  {
    q: "Apakah tiga jenis event ini (konser, motor cross, golf) menggunakan polis yang sama?",
    a: "Tidak. Meskipun sama-sama berada di bawah payung 'asuransi event', struktur risikonya berbeda jauh sehingga jenis jaminan dan cara penghitungan preminya juga berbeda — lihat halaman detail masing-masing untuk cakupan spesifik.",
  },
  {
    q: "Berapa lama sebelum acara sebaiknya mengajukan asuransi event?",
    a: "Idealnya 2–4 minggu sebelum hari-H untuk acara skala menengah-besar, atau minimal 1–2 minggu untuk event skala kecil seperti turnamen klub. Semakin kompleks acara (melibatkan artis mancanegara, hadiah bernilai besar, atau venue outdoor), semakin awal pengajuan sebaiknya dilakukan.",
  },
  {
    q: "Apakah bisa mengasuransikan acara di luar tiga kategori ini?",
    a: "Bisa. Konser musik, motor cross, dan hole in one adalah tiga kategori event yang paling sering kami tangani di Batam, namun kami juga melayani jenis acara publik dan turnamen olahraga lain. Hubungi kami untuk konsultasi sesuai jenis acara Anda.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Event Batam",
  description:
    "Asuransi event untuk konser musik, motor cross/grasstrack, dan turnamen golf hole in one di Batam — liability, personal accident, dan perluasan cancellation.",
  serviceType: "Event Insurance / Asuransi Acara",
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

export default function AsuransiEventPage() {
  return (
    <ProductPageLayout
      title="Asuransi Event Batam"
      subtitle="Konser Musik, Motor Cross & Hole in One"
      description="Dari panggung konser hingga trek balap dan lapangan golf — setiap event punya risiko tersendiri yang bisa berujung kerugian besar jika tidak dilindungi. Kami membantu promotor, panitia, dan event organizer di Batam merancang perlindungan yang sesuai skala dan jenis acara."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[{ label: "Asuransi Event", href: "/asuransi-event" }]}
      schema={schema}
    >
      <div className="mb-12">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Pilih Jenis Event Anda</h2>
        <p className="text-center text-[#475569] mb-8 max-w-2xl mx-auto">
          Setiap jenis acara punya profil risiko berbeda — lihat cakupan spesifik dan cara pengajuan untuk masing-masing.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/asuransi-event/konser-musik" className="group block p-6 rounded-2xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all">
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2">Asuransi Konser Musik</h3>
            <p className="text-[#475569] text-sm">Liability penonton, non-appearance artis, dan event cancellation untuk promotor dan venue.</p>
          </Link>
          <Link href="/asuransi-event/motor-cross" className="group block p-6 rounded-2xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all">
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2">Asuransi Motor Cross</h3>
            <p className="text-[#475569] text-sm">Personal accident pembalap dan public liability penonton untuk event grasstrack dan motocross.</p>
          </Link>
          <Link href="/asuransi-event/hole-in-one" className="group block p-6 rounded-2xl border-2 border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all">
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2">Asuransi Hole in One</h3>
            <p className="text-[#475569] text-sm">Jaminan hadiah hole in one untuk turnamen golf — syarat peserta, jarak hole, dan risiko sendiri.</p>
          </Link>
        </div>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Sering Dipadukan Dengan</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/asuransi-liability" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Liability</h3>
            <p className="text-[#475569] text-sm">Perluasan tanggung gugat untuk bisnis dan venue yang menyelenggarakan acara secara rutin.</p>
          </Link>
          <Link href="/asuransi-personal-accident" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Personal Accident</h3>
            <p className="text-[#475569] text-sm">Lindungi kru, kru medis, dan panitia yang bertugas langsung di lokasi acara.</p>
          </Link>
          <Link href="/asuransi-kendaraan" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Kendaraan</h3>
            <p className="text-[#475569] text-sm">Lengkapi proteksi kendaraan operasional atau kendaraan pembalap di luar unit balap.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}
