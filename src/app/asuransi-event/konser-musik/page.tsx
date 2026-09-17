import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Konser Musik Batam – Liability, Non-Appearance & Cancellation",
  description:
    "Asuransi konser musik untuk promotor dan event organizer di Batam. Liability penonton, non-appearance artis, event cancellation, kerusakan panggung. Konsultasi Rio 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-event/konser-musik",
  languages: { id: "https://asuransibatam.com/asuransi-event/konser-musik" },
});

const benefits = [
  { icon: "👥", title: "Public Liability Penonton", desc: "Menanggung tuntutan ganti rugi dan biaya pengobatan jika penonton atau pihak ketiga cedera akibat operasional acara — crowd, barikade, atau kecelakaan di area venue." },
  { icon: "🎤", title: "Non-Appearance Artis", desc: "Mengganti talent fee dan biaya produksi yang sudah dikeluarkan jika artis utama gagal tampil karena sakit, kecelakaan, atau keterlambatan perjalanan." },
  { icon: "🌧️", title: "Event Cancellation", desc: "Melindungi dari kerugian jika acara batal, ditunda, atau direlokasi akibat cuaca ekstrem, bencana, atau pencabutan izin mendadak." },
  { icon: "🔊", title: "Kerusakan Panggung & Peralatan", desc: "Menanggung kerusakan panggung, rigging, sound system, dan LED screen akibat kebakaran, angin kencang, atau kecelakaan operasional." },
  { icon: "⚖️", title: "Biaya Pembelaan Hukum", desc: "Menanggung biaya pengacara dan proses hukum jika promotor digugat oleh penonton atau pihak ketiga lainnya." },
  { icon: "📋", title: "Certificate of Insurance", desc: "Penerbitan COI untuk memenuhi syarat izin keramaian dari kepolisian/pemkot atau persyaratan sponsor dan venue." },
];

const faqs = [
  {
    q: "Berapa lama proses penerbitan polis asuransi konser?",
    a: "Untuk acara skala kecil-menengah, polis bisa terbit dalam 1–2 minggu setelah data acara lengkap. Untuk acara besar yang melibatkan artis mancanegara atau nilai pertanggungan besar, sebaiknya diajukan 30–60 hari sebelum hari-H karena perlu assessment risiko venue dan profil artis.",
  },
  {
    q: "Dokumen apa saja yang diperlukan untuk mengajukan asuransi konser?",
    a: "Umumnya diperlukan: rundown acara, denah venue dan estimasi kapasitas penonton, daftar artis dan susunan acara, estimasi total budget produksi, serta rencana pengamanan crowd dan keselamatan. Untuk artis mancanegara, tambahan informasi jadwal perjalanan juga membantu proses assessment.",
  },
  {
    q: "Apakah venue seperti Sport Hall Temenggung Abdul Jamal mensyaratkan bukti asuransi?",
    a: "Banyak pengelola venue besar mensyaratkan Certificate of Insurance (COI) public liability sebagai syarat izin peminjaman gedung. Kami membantu menyiapkan COI dalam format yang sesuai kebutuhan venue dan sponsor.",
  },
  {
    q: "Berapa kisaran premi asuransi konser di Batam?",
    a: "Premi ditentukan berdasarkan nilai pertanggungan liability, skala venue (indoor/outdoor), jumlah penonton, dan apakah acara melibatkan non-appearance untuk artis mancanegara. Setiap acara dinilai secara individual — hubungi kami untuk estimasi sesuai profil acara Anda.",
  },
  {
    q: "Apakah bisa mengasuransikan konser yang sudah dekat tanggal pelaksanaannya?",
    a: "Bisa, tergantung skala acara. Untuk acara kecil-menengah, kami dapat membantu percepatan proses dalam beberapa hari kerja. Namun untuk perlindungan optimal, sebaiknya pengajuan dilakukan sedini mungkin sejak tanggal dan venue acara terkonfirmasi.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Konser Musik Batam",
  description:
    "Asuransi konser musik dan acara publik di Batam untuk promotor dan event organizer — public liability, non-appearance artis, event cancellation, dan kerusakan peralatan.",
  serviceType: "Event Liability Insurance / Non-Appearance Insurance",
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

export default function AsuransiKonserMusikPage() {
  return (
    <ProductPageLayout
      title="Asuransi Konser Musik Batam"
      subtitle="Liability, Non-Appearance & Event Cancellation"
      description="Sport Hall Temenggung Abdul Jamal, hotel-hotel besar di Harbour Bay, dan venue MICE lainnya di Batam kian rutin menggelar konser — termasuk yang mendatangkan artis dari Malaysia dan Singapura. Kami membantu promotor dan event organizer merancang perlindungan yang sesuai skala acara, mulai dari liability penonton hingga risiko artis batal tampil."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Asuransi Event", href: "/asuransi-event" },
        { label: "Konser Musik", href: "/asuransi-event/konser-musik" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-3xl mx-auto text-center">
        <p className="text-[#475569]">
          Ingin memahami lebih dalam setiap jenis risiko konser — mulai dari studi kasus pembatalan acara
          hingga cara kerja non-appearance insurance?{" "}
          <Link href="/blog/asuransi-konser-musik-batam" className="text-[#1a4fa0] font-semibold hover:underline">
            Baca panduan lengkapnya di blog →
          </Link>
        </p>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Jenis Event Lainnya</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/asuransi-event/motor-cross" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Motor Cross</h3>
            <p className="text-[#475569] text-sm">Personal accident pembalap dan liability penonton untuk event grasstrack dan motocross.</p>
          </Link>
          <Link href="/asuransi-event/hole-in-one" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Hole in One</h3>
            <p className="text-[#475569] text-sm">Jaminan hadiah hole in one untuk turnamen golf.</p>
          </Link>
          <Link href="/asuransi-personal-accident" className="block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Asuransi Personal Accident</h3>
            <p className="text-[#475569] text-sm">Lindungi kru dan talent yang bertugas langsung di lokasi acara.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}
