import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";
import { tone } from "@/components/card-tones";
import { ArrowRight, Bike, Car, ClipboardList, CloudRain, Flag, HeartPulse, Mic, Scale, ShieldCheck } from "lucide-react";

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
  { icon: "🎤", Icon: Mic, title: "Liability Konser & Acara Publik", desc: "Tanggung gugat jika penonton atau pihak ketiga cedera akibat operasional acara, ditambah opsi non-appearance dan event cancellation.", href: "/asuransi-event/konser-musik" },
  { icon: "🏍️", Icon: Bike, title: "Personal Accident & Liability Balap", desc: "Santunan kecelakaan pembalap dan tanggung gugat penonton untuk event motor cross, grasstrack, dan balap otomotif lainnya.", href: "/asuransi-event/motor-cross" },
  { icon: "⛳", Icon: Flag, title: "Hole in One Golf", desc: "Pembayaran hadiah hole in one turnamen golf — mobil, uang tunai, atau perhiasan — tanpa panitia menanggung sendiri nilai penuh hadiah.", href: "/asuransi-event/hole-in-one" },
  { icon: "🛡️", Icon: ShieldCheck, title: "Public Liability Panitia", desc: "Melindungi event organizer dan klub penyelenggara dari tuntutan hukum akibat cedera atau kerusakan properti pihak ketiga di lokasi acara." },
  { icon: "🌧️", Icon: CloudRain, title: "Perluasan Cuaca & Pembatalan", desc: "Opsi tambahan untuk acara outdoor yang berisiko batal atau tertunda akibat cuaca ekstrem dan force majeure lainnya." },
  { icon: "📋", Icon: ClipboardList, title: "Sertifikat Asuransi (COI)", desc: "Penerbitan Certificate of Insurance untuk memenuhi syarat izin keramaian atau persyaratan sponsor/venue." },
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
    <ProductPageLayout cluster="event" rich
      title="Asuransi Event Batam"
      subtitle="Konser Musik, Motor Cross & Hole in One"
      description="Dari panggung konser hingga trek balap dan lapangan golf — setiap event punya risiko tersendiri yang bisa berujung kerugian besar jika tidak dilindungi. Kami membantu promotor, panitia, dan event organizer di Batam merancang perlindungan yang sesuai skala dan jenis acara."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[{ label: "Asuransi Event", href: "/asuransi-event" }]}
      schema={schema}
    >
      <div className="mb-6 md:mb-8">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Pilih Jenis Event Anda</h2><div aria-hidden="true" className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
        <p className="text-center text-[#475569] mb-4 text-sm md:text-base max-w-2xl mx-auto">
          Setiap jenis acara punya profil risiko berbeda — lihat cakupan spesifik dan cara pengajuan untuk masing-masing.
        </p>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/asuransi-event/konser-musik" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(0).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(0).tile}`}><Mic size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] group-hover:text-[#1a4fa0] mb-1 transition-colors">Asuransi Konser Musik</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Liability penonton, non-appearance artis, dan event cancellation untuk promotor dan venue.</p><span className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${tone(0).text}`}>Lihat detail<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></div></Link>
          <Link href="/asuransi-event/motor-cross" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(1).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(1).tile}`}><Bike size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] group-hover:text-[#1a4fa0] mb-1 transition-colors">Asuransi Motor Cross</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Personal accident pembalap dan public liability penonton untuk event grasstrack dan motocross.</p><span className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${tone(1).text}`}>Lihat detail<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></div></Link>
          <Link href="/asuransi-event/hole-in-one" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(2).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(2).tile}`}><Flag size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] group-hover:text-[#1a4fa0] mb-1 transition-colors">Asuransi Hole in One</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Jaminan hadiah hole in one untuk turnamen golf — syarat peserta, jarak hole, dan risiko sendiri.</p><span className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${tone(2).text}`}>Lihat detail<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></div></Link>
        </div>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Sering Dipadukan Dengan</h2><div aria-hidden="true" className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
        <div className="grid md:grid-cols-3 gap-3 mt-8">
          <Link href="/asuransi-liability" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(0).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(0).tile}`}><Scale size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] mb-1">Asuransi Liability</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Perluasan tanggung gugat untuk bisnis dan venue yang menyelenggarakan acara secara rutin.</p></div></Link>
          <Link href="/asuransi-personal-accident" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(1).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(1).tile}`}><HeartPulse size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] mb-1">Asuransi Personal Accident</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Lindungi kru, kru medis, dan panitia yang bertugas langsung di lokasi acara.</p></div></Link>
          <Link href="/asuransi-kendaraan" className={`group flex items-start gap-3 rounded-xl border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${tone(2).card}`}><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${tone(2).tile}`}><Car size={20} strokeWidth={2} aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-display font-bold text-[15px] leading-tight text-[#0a1628] mb-1">Asuransi Kendaraan</h3>
            <p className="text-[#475569] text-[13px] leading-snug">Lengkapi proteksi kendaraan operasional atau kendaraan pembalap di luar unit balap.</p></div></Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}
