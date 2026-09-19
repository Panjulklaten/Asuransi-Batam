import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import CareerTimeline from "@/components/CareerTimeline";
import LinkedInCard from "@/components/LinkedInCard";
import KonsultasiForm from "./KonsultasiForm";

export const metadata: Metadata = generateSEO({
  title: "Tentang Kami – Rio Mardiansyah, Praktisi Asuransi Batam",
  description: "Profil Rio Mardiansyah, praktisi asuransi di Batam dengan 8+ tahun pengalaman di industri asuransi. Spesialis properti, kendaraan, alat berat, dan liability.",
  canonical: "https://asuransibatam.com/tentang-kami",
  languages: {
      id: "https://asuransibatam.com/tentang-kami",
      en: "https://asuransibatam.com/en/about-us",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rio Mardiansyah",
  alternateName: "Rio",
  jobTitle: "Praktisi Asuransi",
  worksFor: { "@type": "InsuranceAgency", name: "Asuransi Batam" },
  telephone: "+6281373336728",
  email: "rio@asuransibatam.com",
  sameAs: ["https://www.linkedin.com/in/riomardiansyah"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Batam Center",
    addressRegion: "Kepulauan Riau",
    addressCountry: "ID",
  },
};

const fieldPhotos = [
  {
    src: "/images/potoartikel/Potobersamabuilderisk.webp",
    alt: "Rio bersama pemilik kapal saat survei builders risk di galangan Batam",
    caption: "Diskusi langsung dengan pemilik kapal",
    desc: "Setiap polis builders risk dimulai dari pemahaman kondisi proyek secara langsung — bukan hanya dari dokumen.",
  },
  {
    src: "/images/potoartikel/cek-mesin-kapal-batam.webp",
    alt: "Survei mesin kapal di galangan Batam sebelum penerbitan polis",
    caption: "Survei mesin kapal di lapangan",
    desc: "Pengecekan kondisi mesin kapal dilakukan sebelum polis diterbitkan, agar pertanggungan sesuai kondisi aktual.",
  },
  {
    src: "/images/potoartikel/klaimbuilderisk.webp",
    alt: "Proses klaim builders risk di galangan kapal Batam",
    caption: "Pendampingan klaim builders risk",
    desc: "Saat klaim terjadi, Rio hadir langsung di lokasi untuk memastikan proses berjalan lancar dan klien mendapat hak penuhnya.",
  },
  {
    src: "/images/potoartikel/surveicecr.webp",
    alt: "Survei asuransi infrastruktur CECR di Batam",
    caption: "Survei infrastruktur — proyek CECR",
    desc: "Survei lapangan untuk proyek infrastruktur besar seperti jembatan dan jalan adalah bagian rutin dari layanan kami.",
  },
  {
    src: "/images/potoartikel/tongkangnongsa.webp",
    alt: "Tongkang beroperasi di perairan Nongsa Batam",
    caption: "Perairan Nongsa — area kerja sehari-hari",
    desc: "Batam dan perairan sekitarnya adalah wilayah kerja utama kami — dari galangan Tanjung Uncang hingga dermaga Nongsa.",
  },
  {
    src: "/images/potoartikel/kapalsedangdibangun.webp",
    alt: "Kapal sedang dibangun di galangan kapal Batam",
    caption: "Kapal dalam proses pembangunan",
    desc: "Mendampingi klien galangan dari fase keel laying hingga sea trial — itulah yang dimaksud perlindungan menyeluruh.",
  },
];

const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
    { "@type": "ListItem", position: 2, name: "Tentang Kami", item: "https://asuransibatam.com/tentang-kami" },
  ],
};

export default function TentangKamiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-4 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-white/70">Tentang Kami</span>
          </nav>
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">Tentang Kami</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Rio Mardiansyah</h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Praktisi Asuransi dengan 8+ tahun pengalaman di industri asuransi kerugian,
            kini melayani klien individu dan korporat di Batam.
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Foto profil */}
            <div className="flex justify-center lg:justify-start">
              <div className="frame-glow relative w-full max-w-md aspect-square rounded-3xl">
                <div className="frame-shimmer relative w-full h-full rounded-3xl">
                  <div className="frame-shadow-theme relative w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      src="/images/rio-mardiansyah.jpg"
                      alt="Rio Mardiansyah – Praktisi Asuransi Batam"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3">
                        <p className="font-display font-bold text-white text-lg leading-tight">Rio Mardiansyah</p>
                        <p className="text-[#c9a84c] text-sm font-medium">Praktisi Asuransi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <style>{`
                .frame-glow {
                  position: relative;
                  isolation: isolate;
                }
                .frame-glow::after {
                  content: "";
                  position: absolute;
                  inset: -14px;
                  border-radius: inherit;
                  background: conic-gradient(
                    from 0deg,
                    #ff2d55, #ff9500, #ffdd00, #34ff6a, #00d1ff, #7c3aed, #ff2d55
                  );
                  filter: blur(22px);
                  opacity: 0.6;
                  animation: frame-rgb-spin 4s linear infinite;
                  z-index: -1;
                }
                .frame-shimmer {
                  position: relative;
                  isolation: isolate;
                }
                .frame-shimmer::before {
                  content: "";
                  position: absolute;
                  inset: -3px;
                  border-radius: inherit;
                  padding: 3px;
                  background: conic-gradient(
                    from 0deg,
                    #ff2d55, #ff9500, #ffdd00, #34ff6a, #00d1ff, #7c3aed, #ff2d55
                  );
                  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                  -webkit-mask-composite: xor;
                  mask-composite: exclude;
                  animation: frame-rgb-spin 4s linear infinite;
                  pointer-events: none;
                  z-index: 1;
                }
                @keyframes frame-rgb-spin {
                  to { transform: rotate(360deg); }
                }
                .frame-shadow-theme {
                  box-shadow:
                    0 45px 90px -12px rgba(10, 22, 40, 0.6),
                    0 20px 45px -8px rgba(10, 22, 40, 0.45),
                    0 0 0 1px rgba(201, 168, 76, 0.15);
                }
                @media (prefers-reduced-motion: reduce) {
                  .frame-glow::after,
                  .frame-shimmer::before { animation: none; }
                }
              `}</style>
            </div>

            {/* Bio */}
            <div>
              <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-4">
                Profil Rio
              </h2>
              <p className="text-[#475569] leading-relaxed mb-6">
                Rio Mardiansyah menekuni industri asuransi kerugian lebih dari delapan tahun,
                dibentuk oleh perjalanan karier yang dimulai sebagai Account Officer di
                PT Asuransi Umum Bumida 1967 (Batam), berlanjut sebagai Sales &amp; Marketing
                Specialist, hingga dipercaya menjabat Branch Manager di PT Asuransi Purna
                Artanugraha (ASPAN). Dari setiap jenjang itu, Rio membawa pemahaman yang utuh —
                bukan sekadar teori — tentang bagaimana nasabah diakuisisi, produk dipasarkan
                secara tepat, dan sebuah cabang dijalankan hingga ke penanganan klaim di lapangan.
              </p>
              <p className="text-[#475569] leading-relaxed mb-8">
                Sejak 2022, pengalaman itu dituangkan ke ranah digital. Kini Rio mendampingi
                klien individu maupun korporat di Batam dan Kepulauan Riau, dengan fokus pada
                asuransi properti komersial, kendaraan niaga dan armada, alat berat dan
                machinery, hingga liability industri termasuk pertanggungan limbah B3 — sebuah
                spesialisasi yang selaras dengan denyut industri Batam sebagai kawasan ekonomi
                khusus. Baginya, setiap polis bermula dari satu hal sederhana: memahami risiko
                klien seakurat mungkin, sebelum menawarkan solusi.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { val: "8+", label: "Tahun Pengalaman" },
                  { val: "200+", label: "Klien Aktif" },
                  { val: "98%", label: "Kepuasan Klien" },
                  { val: "20+", label: "Produk Asuransi" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] text-center"
                  >
                    <div className="font-display font-bold text-3xl text-[#c9a84c]">{s.val}</div>
                    <div className="text-[#475569] text-sm mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <LinkedInCard />
            </div>
          </div>
        </div>
      </section>

      {/* Perjalanan Karier */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#8a6d1f] font-semibold uppercase tracking-widest text-sm mb-2">Perjalanan Karier</p>
            <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-4">
              Dari Account Officer hingga Praktisi Digital
            </h2>
            <p className="text-[#475569] max-w-xl mx-auto">
              Setiap jenjang karier ini membentuk cara Rio memahami risiko dan mendampingi klien hari ini.
            </p>
          </div>
          <CareerTimeline />
        </div>
      </section>

      {/* Galeri Kerja Lapangan */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#8a6d1f] font-semibold uppercase tracking-widest text-sm mb-2">Kerja Lapangan</p>
            <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-4">
              Langsung di Lokasi, Bukan Hanya di Balik Meja
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              Sebagian besar pekerjaan kami terjadi di lapangan — di galangan, di geladak kapal,
              di area konstruksi. Karena memahami risiko yang sebenarnya dimulai dari melihat langsung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fieldPhotos.map((photo) => (
              <div
                key={photo.src}
                className="group bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <p className="font-display font-bold text-[#0a1628] mb-1">{photo.caption}</p>
                  <p className="text-[#475569] text-sm leading-relaxed">{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Kerja */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#8a6d1f] font-semibold uppercase tracking-widest text-sm mb-2">Cara Kerja Kami</p>
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-4">Sederhana, Transparan, Tepat Sasaran</h2>
          <p className="text-[#475569] mb-12 max-w-xl mx-auto">
            Tidak ada jargon berlebihan. Kami bantu Anda memahami apa yang benar-benar perlu dilindungi
            dan berapa biaya yang wajar untuk itu.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Konsultasi & Survei", desc: "Kami datang langsung ke lokasi aset Anda — kapal, alat berat, properti, atau proyek — untuk memahami risiko aktual." },
              { step: "02", title: "Rekomendasi Polis", desc: "Kami carikan produk dari perusahaan asuransi yang sesuai kebutuhan dan anggaran, bukan yang paling mahal preminya." },
              { step: "03", title: "Pendampingan Klaim", desc: "Jika terjadi klaim, kami hadir langsung. Tugas kami belum selesai sampai klaim klien diselesaikan dengan benar." },
            ].map((w) => (
              <div key={w.step} className="p-6 rounded-2xl border border-[#e2e8f0] text-left">
                <p className="font-display font-bold text-4xl text-[#c9a84c]/40 mb-3">{w.step}</p>
                <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">{w.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-6">Hubungi Kami</h2>
              <div className="space-y-5">
                {[
                  { icon: "📱", label: "WhatsApp / Telepon", value: "0813-7333-6728", href: "https://wa.me/6281373336728" },
                  { icon: "📧", label: "Email", value: "rio@asuransibatam.com", href: "mailto:rio@asuransibatam.com" },
                  { icon: "📍", label: "Alamat", value: "Batam Center, Kepulauan Riau", href: null },
                  { icon: "🕐", label: "Jam Operasional", value: "Senin–Jumat, 08:00–17:00", href: null },
                ].map((c) => (
                  <div key={c.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#0a1628] rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-[#475569] text-sm">{c.label}</div>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="font-semibold text-[#0a1628] hover:text-[#c9a84c] transition-colors"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <div className="font-semibold text-[#0a1628]">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <KonsultasiForm />
          </div>
        </div>
      </section>

            <CTASection />
    </>
  );
}
