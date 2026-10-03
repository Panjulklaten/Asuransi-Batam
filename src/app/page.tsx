import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { Shield, Star, Clock, Users, ArrowRight, CheckCircle, Phone, Camera, MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Batam Terpercaya – Properti, Kendaraan, Alat Berat & Liability | Rio",
  description: "Rio, praktisi asuransi di Batam dengan pengalaman 8+ tahun. Melayani asuransi properti, kendaraan, alat berat, liability, engineering, marine, surety bond, dan personal accident. Konsultasi gratis, respons cepat via WhatsApp. Hubungi sekarang: 0813-7333-6728.",
  canonical: "https://asuransibatam.com",
  languages: {
      id: "https://asuransibatam.com",
      en: "https://asuransibatam.com/en",
    },
});

const products = [
  {
    icon: "🏠",
    title: "Asuransi Properti",
    desc: "Perlindungan hotel, rumah, gudang, pabrik, dan properti komersial dari risiko kebakaran, bencana, dan kerusakan.",
    href: "/asuransi-properti",
    tags: ["Hotel", "Gudang", "Pabrik", "Ruko"],
  },
  {
    icon: "🚗",
    title: "Asuransi Kendaraan",
    desc: "All Risk & TLO untuk mobil, dump truck, dan kendaraan niaga. Kalkulator premi online tersedia.",
    href: "/asuransi-kendaraan",
    tags: ["Mobil", "Dump Truck", "All Risk"],
  },
  {
    icon: "⚙️",
    title: "Asuransi Machinery",
    desc: "Perlindungan alat berat, crane, dan mesin industri dari kerusakan operasional dan kecelakaan.",
    href: "/asuransi-machinery",
    tags: ["Alat Berat", "Crane", "Mesin"],
  },
  {
    icon: "⚖️",
    title: "Asuransi Liability",
    desc: "Perlindungan tanggung gugat pihak ketiga, limbah B3, dan public liability untuk usaha Anda.",
    href: "/asuransi-liability",
    tags: ["Limbah B3", "Public Liability"],
  },
  {
    icon: "🔧",
    title: "Asuransi Engineering",
    desc: "Perlindungan proyek konstruksi (CAR), pemasangan mesin (EAR), dan infrastruktur dari risiko pembangunan.",
    href: "/asuransi-engineering",
    tags: ["CAR", "EAR", "Konstruksi"],
  },
  {
    icon: "⚓",
    title: "Asuransi Marine",
    desc: "Perlindungan pengiriman kargo, rangka kapal (hull), dan proyek bangunan kapal (builders risk) di jalur laut Batam.",
    href: "/asuransi-marine",
    tags: ["Cargo", "Hull", "Builders Risk"],
  },
  {
    icon: "📜",
    title: "Surety Bond",
    desc: "Jaminan proyek pemerintah & swasta: bid bond, performance bond, advance payment bond, dan maintenance bond.",
    href: "/asuransi-surety-bond",
    tags: ["Bid Bond", "Performance", "Advance"],
  },
  {
    icon: "🧑‍⚕️",
    title: "Asuransi Personal Accident",
    desc: "Perlindungan kecelakaan diri untuk karyawan (Group PA) maupun individu & keluarga dengan premi terjangkau.",
    href: "/asuransi-personal-accident",
    tags: ["Group PA", "Individu", "Keluarga"],
  },
];

const fieldProofs = [
  {
    src: "/images/potoartikel/surveicecr.webp",
    alt: "Rio melakukan survei lapangan asuransi CECR pada proyek revetment di Batu Ampar, Batam",
    caption: "Survei Lapangan CECR",
    location: "Batu Ampar, Batam",
    href: "/asuransi-engineering/cecr",
  },
  {
    src: "/images/potoartikel/tongkangnongsa.webp",
    alt: "Tongkang di perairan Nongsa, Batam yang dilindungi asuransi kapal dan armada",
    caption: "Survei Armada Tongkang",
    location: "Nongsa, Batam",
    href: "/blog/jenis-jenis-asuransi-kapal-armada",
  },
  {
    src: "/images/potoartikel/cek-mesin-kapal-batam.webp",
    alt: "Rio Mardiansyah memeriksa mesin kapal saat proses klaim asuransi di Batam",
    caption: "Cek Mesin Saat Klaim",
    location: "Galangan Kapal, Batam",
    href: "/blog/premi-asuransi-kapal-batam-2026",
  },
  {
    src: "/images/potoartikel/klaimbuilderisk.webp",
    alt: "Dokumentasi proses penanganan klaim asuransi Builders Risk di galangan kapal Batam",
    caption: "Penanganan Klaim Builder's Risk",
    location: "Tanjung Uncang, Batam",
    href: "/blog/cara-mendapatkan-asuransi-builders-risk-batam",
  },
  {
    src: "/images/potoartikel/Potobersamabuilderisk.webp",
    alt: "Rio bersama owner kapal dan pihak asuransi di depan kapal yang sedang dibangun di galangan Tanjung Uncang, Batam",
    caption: "Bersama Owner Kapal",
    location: "Tanjung Uncang, Batam",
    href: "/blog/berapa-premi-asuransi-builders-risk-kapal-batam",
  },
  {
    src: "/images/potoartikel/kapalsedangdibangun.webp",
    alt: "Kapal dalam proses pembangunan di galangan kapal Batam yang dilindungi Builder's Risk Insurance",
    caption: "Proyek Builder's Risk Berjalan",
    location: "Galangan Kapal, Batam",
    href: "/blog/berapa-premi-asuransi-builders-risk-kapal-batam",
  },
];

const testimonials = [
  {
    name: "Budi Santoso",
    company: "PT. Batam Properti Utama",
    text: "Rio sangat profesional dalam menjelaskan produk asuransi. Klaim hotel kami diproses cepat dan tanpa ribet.",
    rating: 5,
  },
  {
    name: "Hendra Wijaya",
    company: "CV. Trans Batam",
    text: "Asuransi dump truck kami ditangani dengan sangat baik. Premi kompetitif, proses mudah.",
    rating: 5,
  },
  {
    name: "Susanto",
    company: "PT. Konstruksi Riau",
    text: "Sudah 5 tahun percaya dengan Rio untuk asuransi alat berat kami. Responsif dan amanah.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Apa itu asuransi kerugian?",
    a: "Asuransi kerugian adalah jenis asuransi yang memberikan perlindungan terhadap kerugian finansial akibat kerusakan atau kehilangan harta benda, termasuk properti, kendaraan, alat berat, dan tanggung jawab hukum.",
  },
  {
    q: "Berapa lama proses penerbitan polis?",
    a: "Polis asuransi umumnya dapat diterbitkan dalam 1-3 hari kerja setelah dokumen lengkap diterima dan premi dibayarkan.",
  },
  {
    q: "Bagaimana cara mengajukan klaim?",
    a: "Hubungi kami segera setelah kejadian. Rio akan memandu Anda melalui proses klaim dari awal hingga selesai.",
  },
  {
    q: "Apakah bisa konsultasi dulu sebelum membeli polis?",
    a: "Tentu! Konsultasi gratis tersedia via WhatsApp, telepon, atau kunjungan langsung ke kantor kami di Batam Center.",
  },
];

export default function HomePage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["InsuranceAgency", "LocalBusiness"],
        "@id": "https://asuransibatam.com/#organization",
        name: "Asuransi Batam – Rio",
        url: "https://asuransibatam.com",
        telephone: "+6281373336728",
        email: "rio@asuransibatam.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Batam Center",
          addressLocality: "Batam",
          addressRegion: "Kepulauan Riau",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 1.1277,
          longitude: 104.0196,
        },
        openingHours: "Mo-Fr 08:00-17:00",
        employee: {
          "@type": "Person",
          name: "Rio",
          jobTitle: "Praktisi Asuransi",
          sameAs: ["https://www.linkedin.com/in/riomardiansyah"],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0] overflow-hidden pt-16">
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#1a4fa0]/40 rounded-full blur-3xl" />
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#c9a84c] rounded-full opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#c9a84c]/40 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" />
                Praktisi Asuransi Batam
              </div>
              <h1 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
                Lindungi Aset &<br />
                <span className="text-gradient-gold">Bisnis Anda</span><br />
                di Batam
              </h1>
              <p className="text-white/70 text-xl leading-relaxed mb-10">
                Rio, praktisi asuransi berpengalaman 8+ tahun di Batam.
                Solusi lengkap untuk properti, kendaraan, alat berat, liability, engineering,
                marine, surety bond, dan personal accident.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <a
                  href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a1628] font-bold rounded-xl hover:shadow-xl hover:shadow-[#c9a84c]/30 transition-all text-lg"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Konsultasi Gratis
                </a>
                <Link
                  href="/kalkulator-premi-mobil"
                  className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-lg"
                >
                  Hitung Premi Mobil
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="mb-10">
                <Link
                  href="/kalkulator-premi-properti"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-lg"
                >
                  Hitung Premi Properti
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {["B", "S", "H", "R"].map((l) => (
                    <div
                      key={l}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1a4fa0] to-[#0a1628] border-2 border-[#c9a84c]/40 flex items-center justify-center text-white text-xs font-bold"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-[#c9a84c] mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/60 text-sm">200+ klien puas di Batam</p>
                </div>
              </div>
            </div>

            {/* Stats card */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
                <h2 className="font-display font-bold text-white text-xl mb-6">
                  Mengapa Pilih Kami?
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Tahun Pengalaman", value: "8+" },
                    { label: "Klien Aktif", value: "200+" },
                    { label: "Klaim Berhasil", value: "98%" },
                    { label: "Produk Tersedia", value: "20+" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-2xl p-4 text-center">
                      <div className="font-display font-bold text-2xl text-[#c9a84c]">
                        {stat.value}
                      </div>
                      <div className="text-white/60 text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    "Konsultasi gratis tanpa syarat",
                    "Proses klaim didampingi penuh",
                    "Polis dikirim dalam 1-3 hari kerja",
                    "Partner asuransi terdaftar OJK",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-[#c9a84c]/20 rounded-2xl flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#c9a84c]" />
                  <div>
                    <div className="text-[#c9a84c] font-bold text-sm">WhatsApp Rio Langsung</div>
                    <a
                      href="https://wa.me/6281373336728"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-display font-bold text-lg hover:text-[#f0d080] transition-colors"
                    >
                      0813-7333-6728
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#8a6d1f] font-semibold uppercase tracking-widest text-sm mb-2">
              Produk Unggulan
            </p>
            <h2 className="font-display font-bold text-4xl text-[#0a1628] mb-4">
              Semua Kebutuhan Asuransi Anda
            </h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto">
              Dari properti hingga surety bond – kami menyediakan solusi asuransi kerugian
              lengkap untuk individu dan bisnis di Batam.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link key={p.href} href={p.href} className="group">
                <div className="h-full p-7 rounded-2xl border-2 border-[#e2e8f0] group-hover:border-[#c9a84c]/60 group-hover:shadow-xl transition-all card-hover bg-white">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="font-display font-bold text-xl text-[#0a1628] mb-3 group-hover:text-[#1a4fa0] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#faf8f3] text-[#1a4fa0] text-xs font-semibold rounded-full border border-[#e2e8f0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
            {/* Kalkulator card */}
            <Link href="/kalkulator-premi-mobil" className="group">
              <div className="h-full p-7 rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#1a4fa0] group-hover:shadow-xl transition-all card-hover">
                <div className="text-4xl mb-4">🧮</div>
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  Kalkulator Premi
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Hitung estimasi premi mobil dan motor Anda secara online, cepat dan akurat.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 text-[#c9a84c] text-xs font-semibold rounded-full border border-[#c9a84c]/30">
                    Premi Mobil
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-[#c9a84c] text-xs font-semibold rounded-full border border-[#c9a84c]/30">
                    Premi Motor
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BUKTI KERJA LAPANGAN ── */}
      <section className="section-padding bg-[#0a1628] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#c9a84c]/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">
              Bukan Sekadar Polis di Atas Kertas
            </p>
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Dokumentasi Survei & Klaim Langsung di Lapangan
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Rio turun langsung ke lokasi — dari galangan kapal hingga proyek konstruksi —
              memastikan setiap risiko dinilai dan setiap klaim ditangani dengan benar.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {fieldProofs.map((p) => (
              <Link
                key={p.src}
                href={p.href}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-1.5 text-[#c9a84c] text-xs mb-1">
                    <MapPin className="w-3 h-3" />
                    {p.location}
                  </div>
                  <h3 className="font-display font-bold text-white text-sm leading-snug">
                    {p.caption}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/0 group-hover:text-white/80 text-xs font-semibold mt-2 transition-colors">
                    Baca Kisahnya
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  <Camera className="w-4 h-4 text-white/90" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEUNGGULAN ── */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#8a6d1f] font-semibold uppercase tracking-widest text-sm mb-2">
                Keunggulan Kami
              </p>
              <h2 className="font-display font-bold text-4xl text-[#0a1628] mb-6">
                Mengapa Percayakan Asuransi ke Kami?
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed mb-8">
                Dengan pengalaman 8+ tahun di industri asuransi Batam,
                Rio hadir sebagai mitra terpercaya yang memahami kebutuhan lokal.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Pendampingan Personal",
                    desc: "Anda mendapat praktisi dedicated yang memandu dari pemilihan polis hingga klaim selesai.",
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    title: "Respons Cepat",
                    desc: "Pertanyaan dijawab dalam 1 jam kerja. Klaim diproses dengan timeline yang jelas.",
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "Partner OJK-Terdaftar",
                    desc: "Bekerja sama dengan perusahaan asuransi resmi yang diawasi OJK untuk keamanan Anda.",
                  },
                  {
                    icon: <Star className="w-5 h-5" />,
                    title: "Premi Kompetitif",
                    desc: "Kami membandingkan beberapa perusahaan asuransi untuk mendapatkan premi terbaik bagi Anda.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#0a1628] text-[#c9a84c] rounded-xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-[#0a1628] mb-1">{item.title}</h3>
                      <p className="text-[#475569] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "8+", label: "Tahun Pengalaman", bg: "bg-[#0a1628]", color: "text-[#c9a84c]", labelColor: "text-white/70" },
                { val: "200+", label: "Klien Aktif", bg: "bg-[#c9a84c]", color: "text-[#0a1628]", labelColor: "text-[#0a1628]/80" },
                { val: "98%", label: "Tingkat Klaim Sukses", bg: "bg-[#1a4fa0]", color: "text-white", labelColor: "text-white/85" },
                { val: "24/7", label: "Layanan Darurat", bg: "bg-[#132040]", color: "text-[#f0d080]", labelColor: "text-white/70" },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`${s.bg} rounded-2xl p-4 sm:p-6 lg:p-8 text-center overflow-hidden`}
                >
                  <div
                    className={`font-display font-black text-3xl sm:text-4xl lg:text-5xl ${s.color} mb-2 leading-none`}
                  >
                    {s.val}
                  </div>
                  <div className={`${s.labelColor} text-xs sm:text-sm mt-1`}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONI ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#8a6d1f] font-semibold uppercase tracking-widest text-sm mb-2">
              Testimoni
            </p>
            <h2 className="font-display font-bold text-4xl text-[#0a1628] mb-4">
              Kata Klien Kami
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-7 rounded-2xl bg-[#faf8f3] border border-[#e2e8f0] hover:shadow-lg transition-all"
              >
                <div className="flex text-[#c9a84c] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-[#475569] text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div>
                  <div className="font-display font-bold text-[#0a1628]">{t.name}</div>
                  <div className="text-[#8a6d1f] text-sm">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#8a6d1f] font-semibold uppercase tracking-widest text-sm mb-2">
              FAQ
            </p>
            <h2 className="font-display font-bold text-4xl text-[#0a1628] mb-4">
              Pertanyaan Umum
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-display font-semibold text-[#0a1628] hover:text-[#1a4fa0] transition-colors list-none">
                  {faq.q}
                  <span className="ml-4 text-[#c9a84c] text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-[#475569] text-sm leading-relaxed border-t border-[#e2e8f0] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        tertiaryLabel="Hitung Premi Properti"
        tertiaryHref="/kalkulator-premi-properti"
      />
    </>
  );
}
