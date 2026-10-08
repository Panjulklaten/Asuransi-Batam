import { Metadata } from 'next';
import Link from 'next/link';
import QuoteButton from '@/components/quote/QuoteButton';
import { generateSEO, schemaInsuranceProduct } from '@/lib/seo';
import { 
  ShieldCheck, 
  Users, 
  HardHat, 
  Anchor, 
  Clock, 
  HeartPulse, 
  ChevronRight 
} from 'lucide-react';

// --- METADATA SEO & HREFLANG ---
export const metadata: Metadata = generateSEO({
  title: 'Asuransi Kecelakaan Diri (PA) Batam',
  description: 'Layanan Asuransi Kecelakaan Diri (Personal Accident) di Batam. Proteksi komprehensif untuk pekerja industri, galangan kapal (shipyard), dan logistik. Solusi Group PA & Individu untuk melengkapi BPJS Ketenagakerjaan.',
  canonical: 'https://asuransibatam.com/asuransi-personal-accident',
  languages: {
    id: 'https://asuransibatam.com/asuransi-personal-accident',
    en: 'https://asuransibatam.com/en/personal-accident-insurance',
  },
});

// --- JSON-LD SCHEMA (GSC Safety) ---
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://asuransibatam.com" },
    { "@type": "ListItem", "position": 2, "name": "Asuransi Personal Accident", "item": "https://asuransibatam.com/asuransi-personal-accident" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apakah Asuransi Personal Accident cocok untuk pekerja galangan kapal di Batam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, sangat cocok. Asuransi PA kami dirancang khusus untuk risiko tinggi di sektor shipyard dan manufaktur Batam, memberikan proteksi tambahan di atas jaminan BPJS Ketenagakerjaan."
      }
    },
    {
      "@type": "Question",
      "name": "Apa perbedaan PA Group dan PA Individu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PA Group (Kumpulan) biasanya dibeli perusahaan untuk karyawan dengan premi lebih ekonomis. PA Individu bersifat personal dengan fleksibilitas nilai pertanggungan yang bisa disesuaikan kebutuhan keluarga."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana proses klaim Asuransi PA di Batam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Proses klaim dilakukan dengan melapor maksimal 2x24 jam ke tim kami. Dokumen yang diperlukan adalah surat keterangan kecelakaan dari pihak berwenang atau HRD, laporan medis, dan fotokopi KTP. Tim kami akan mendampingi proses administrasi."
      }
    }
  ]
};

const serviceSchema = schemaInsuranceProduct({
  name: "Asuransi Kecelakaan Diri (Personal Accident) Batam",
  description: "Proteksi Asuransi Kecelakaan Diri untuk pekerja industri, galangan kapal, dan logistik di Batam. Solusi Group PA & Individu.",
  url: "/asuransi-personal-accident",
  category: "Personal Accident",
});

// --- KOMPONEN UTAMA ---
export default function PersonalAccidentPageID() {
  return (
    <>
      {/* Inject Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-cream text-navy font-sans">
        
        {/* HERO SECTION */}
        <section className="gradient-navy text-cream section-padding min-h-[60vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-batik.png')]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              {/* Breadcrumb Visual */}
              <nav className="text-sm mb-4 opacity-80">
                <Link href="/" className="hover:text-gold">Home</Link> 
                <ChevronRight className="inline w-4 h-4 mx-1" /> 
                <span className="text-gold">Asuransi Personal Accident</span>
              </nav>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Proteksi Tepat untuk Pekerja <span className="text-gradient-gold">Industri Batam</span>
              </h1>
              <p className="text-lg md:text-xl text-cream/90 mb-8 leading-relaxed">
                Solusi Asuransi Kecelakaan Diri (PA) yang dirancang khusus untuk pekerja galangan kapal, manufaktur, dan sektor maritim. Jaminan keamanan finansial melengkapi BPJS Ketenagakerjaan Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <QuoteButton cluster="pa" lang="id" variant="gold" className="!rounded-full !px-8 !py-3.5" />
                <Link href="#produk" className="inline-flex items-center justify-center gap-2 border-2 border-cream hover:border-gold hover:text-gold font-bold py-3 px-8 rounded-full transition-all duration-300">
                  Lihat Skema Proteksi
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MENGAPA PERLU PA (CONTEXT BATAM) */}
        <section className="section-padding bg-cream">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Risiko Tinggi, Perlindungan Maksimal
              </h2>
              <p className="text-navy/70 max-w-2xl mx-auto">
                Di kawasan industri Batam, risiko kecelakaan kerja adalah kenyataan sehari-hari. Asuransi PA kami hadir sebagai lapisan proteksi finansial tambahan.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-6 text-navy">
                  <HardHat size={28} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Suplemen BPJS TK</h3>
                <p className="text-navy/70 leading-relaxed">
                  Mengisi celah jaminan BPJS. Mendapatkan santunan tunai (cashless compensation) yang bisa digunakan untuk biaya perawatan, pemulihan, atau penggantian penghasilan saat cuti sakit.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-6 text-navy">
                  <Anchor size={28} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Fokus Shipyard & Logistik</h3>
                <p className="text-navy/70 leading-relaxed">
                  Polis kami memahami klasifikasi risiko pekerja galangan kapal dan pelabuhan di Batam. Proses underwriting transparan tanpa penolakan klaim sepihak akibat salah klasifikasi.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover border border-navy/5">
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-6 text-navy">
                  <Clock size={28} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Klaim Cepat & Terpercaya</h3>
                <p className="text-navy/70 leading-relaxed">
                  Tim klaim lokal Batam yang responsif. Pendampingan administrasi hingga dana cair. Kepatuhan penuh terhadap prinsip Good Corporate Governance (GCG).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUK CLUSTER */}
        <section id="produk" className="section-padding bg-navy-light/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Pilihan Produk PA
              </h2>
              <p className="text-navy/70">
                Fleksibel untuk kebutuhan perusahaan maupun individu.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Group PA */}
              <div className="group relative bg-white p-8 rounded-3xl shadow-lg card-hover overflow-hidden border-b-4 border-gold">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full transition-transform group-hover:scale-150"></div>
                <Users className="text-gold w-12 h-12 mb-6" />
                <h3 className="font-display text-2xl font-bold text-navy mb-4">Group PA (Karyawan)</h3>
                <ul className="space-y-3 text-navy/80 mb-6">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <span>Cocok untuk perusahaan manufaktur & galangan kapal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <span>Premi ekonomis (bulk discount).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <span>Coverage 24 jam atau saat jam kerja.</span>
                  </li>
                </ul>
                <Link href="/asuransi-personal-accident/pa-karyawan-grup" className="font-bold text-navy group-hover:text-gold transition-colors flex items-center gap-2">
                  Pelajari Selengkapnya <ChevronRight size={18} />
                </Link>
              </div>

              {/* Individu PA */}
              <div className="group relative bg-white p-8 rounded-3xl shadow-lg card-hover overflow-hidden border-b-4 border-navy">
                <div className="absolute top-0 right-0 w-32 h-32 bg-navy/10 rounded-bl-full transition-transform group-hover:scale-150"></div>
                <HeartPulse className="text-navy w-12 h-12 mb-6" />
                <h3 className="font-display text-2xl font-bold text-navy mb-4">PA Individu / Keluarga</h3>
                <ul className="space-y-3 text-navy/80 mb-6">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <span>Proteksi pribadi untuk komuter Batam-Singapura/Malaysia.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <span>Manfaat rawat inap & cacat tetap.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <span>Bisa diperluas ke tanggungan keluarga.</span>
                  </li>
                </ul>
                <Link href="/asuransi-personal-accident/pa-individu-keluarga" className="font-bold text-navy group-hover:text-gold transition-colors flex items-center gap-2">
                  Pelajari Selengkapnya <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUSI PELENGKAP */}
        <section className="section-padding bg-cream">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-8 text-center">
              Sering Dipadukan Dengan
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <Link href="/asuransi-engineering" className="group bg-white p-6 rounded-2xl shadow-sm card-hover border border-navy/5">
                <h3 className="font-bold text-navy group-hover:text-gold transition-colors">Asuransi Engineering (CAR/EAR)</h3>
                <p className="text-sm text-navy/60 mt-2">Proteksi proyek konstruksi & instalasi pabrik.</p>
              </Link>
              <Link href="/asuransi-marine" className="group bg-white p-6 rounded-2xl shadow-sm card-hover border border-navy/5">
                <h3 className="font-bold text-navy group-hover:text-gold transition-colors">Asuransi Marine</h3>
                <p className="text-sm text-navy/60 mt-2">Untuk pekerja & aset di sektor maritim dan galangan kapal.</p>
              </Link>
              <Link href="/asuransi-surety-bond" className="group bg-white p-6 rounded-2xl shadow-sm card-hover border border-navy/5">
                <h3 className="font-bold text-navy group-hover:text-gold transition-colors">Surety Bond</h3>
                <p className="text-sm text-navy/60 mt-2">Bid bond & performance bond untuk kontraktor proyek.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ SECTION (EEAT) */}
        <section className="section-padding bg-cream">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
              Tanya Jawab (FAQ)
            </h2>
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  Apakah Asuransi PA menggantikan fungsi JKK BPJS?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  Tidak menggantikan, melainkan melengkapi. JKK BPJS fokus pada biaya pengobatan. Asuransi PA memberikan uang tunai langsung (cash) kepada korban atau ahli waris untuk mengganti penghasilan yang hilang saat tidak bisa bekerja, atau santunan meninggal dunia yang lebih besar.
                </p>
              </details>

              {/* FAQ Item 2 */}
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  Apakah pekerja asing (WNA) di Batam bisa diasuransikan?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  Bisa. Kami menyediakan skema PA untuk WNA (Expatriate) yang bekerja di proyek-proyek Batam dengan coverage risiko yang sesuai standar internasional dan regulasi OJK.
                </p>
              </details>

              {/* FAQ Item 3 */}
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  Risiko apa saja yang tidak dicover (Exclusion)?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  Secara umum, exclude kecelakaan akibat perbuatan melawan hukum, mabuk, atau penyakit akibat pekerjaan (Occupational Disease) yang seharusnya ditanggung JKK BPJS. Namun, polis bisa dirancang khusus sesuai kebutuhan perusahaan.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="konsultasi" className="gradient-gold section-padding">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Butuh Konsultasi Manajemen Risiko?
            </h2>
            <p className="text-navy/80 mb-8 max-w-2xl mx-auto">
                Tim ahli kami siap membantu perusahaan Anda di Batam merancang skema proteksi karyawan yang efektif dan efisien biaya.
            </p>
                        <QuoteButton cluster="pa" lang="id" variant="navy" className="!rounded-full !px-10 !py-4 !text-lg hover:-translate-y-1" />
          </div>
        </section>

      </main>
    </>
  );
}
