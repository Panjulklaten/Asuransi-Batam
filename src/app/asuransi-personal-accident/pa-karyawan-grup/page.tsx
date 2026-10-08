import { Metadata } from 'next';
import Link from 'next/link';
import QuoteButton from '@/components/quote/QuoteButton';
import { generateSEO } from '@/lib/seo';
import { 
  Building2, Users, ShieldCheck, FileText, Clock, ChevronRight, 
  MapPin, AlertTriangle, CheckCircle, ArrowRight, 
  Landmark, FileCheck, UserCheck, Car 
} from 'lucide-react';

// --- METADATA SEO SUPER OPTIMIZED ---
export const metadata: Metadata = generateSEO({
  title: 'Asuransi PA Karyawan Grup Batam',
  description: 'Program Asuransi Kecelakaan Diri Grup (Group PA) untuk perusahaan di Batam, Batamindo, Mukakuning, dan KIKN. Cover karyawan pabrik, shipyard & proyek. Proses klaim 1 hari kerja, melengkapi BPJS JKK.',
  canonical: 'https://asuransibatam.com/asuransi-personal-accident/pa-karyawan-grup',
  languages: {
    id: 'https://asuransibatam.com/asuransi-personal-accident/pa-karyawan-grup',
    en: 'https://asuransibatam.com/en/personal-accident-insurance/group-employee-pa',
  },
});

// --- JSON-LD SCHEMAS ---
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://asuransibatam.com" },
    { "@type": "ListItem", "position": 2, "name": "Asuransi Personal Accident", "item": "https://asuransibatam.com/asuransi-personal-accident" },
    { "@type": "ListItem", "position": 3, "name": "PA Karyawan Grup Batam", "item": "https://asuransibatam.com/asuransi-personal-accident/pa-karyawan-grup" }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Asuransi Kecelakaan Diri Grup - Asuransi Batam",
  "image": "https://asuransibatam.com/images/group-pa-batam.jpg",
  "url": "https://asuransibatam.com/asuransi-personal-accident/pa-karyawan-grup",
  "areaServed": {
    "@type": "City",
    "name": "Batam",
    "containsPlace": ["Batamindo Industrial Park", "Muka Kuning", "Tanjung Uncang", "Batu Ampar"]
  },
  "provider": {
    "@type": "InsuranceAgency",
    "name": "Asuransi Batam",
    "address": "Batam, Kepulauan Riau, Indonesia"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa perbedaan Asuransi PA Grup dengan JKK BPJS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKK BPJS fokus pada biaya medis pengobatan. Asuransi PA Grup memberikan santunan tunai (cash) langsung kepada karyawan atau ahli waris untuk penggantian income loss saat tidak bisa kerja, santunan cacat, atau meninggal. PA Grup juga cover kecelakaan di luar jam kerja jika polis di-set 24 jam."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa premi PA Grup untuk pekerja pabrik di Batam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Premi PA Grup sangat kompetitif, mulai dari kisaran 0.1% - 0.5% dari Uang Pertanggungan (UP) per tahun, tergantung klasifikasi risiko pekerjaan. Untuk pekerja pabrik elektronik (Low Risk), jauh lebih murah dibanding pekerja galangan kapal (High Risk). Hubungi kami untuk penawaran spesifik."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah bisa memasukkan pekerja asing (Expatriate) dalam polis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bisa. Polis PA Grup kami mendukung pencoveran pekerja WNA (Warga Negara Asing) yang bekerja di proyek Batam, dengan penyesuaian area pertanggungan (domestik atau regional)."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana proses klaim PA Grup di Batam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Proses klaim sangat simpel. Lapor ke tim kami maksimal 2x24 jam, isi formulir, lampirkan surat keterangan kecelakaan dan laporan medis. Dana santunan cair dalam waktu 3-5 hari kerja setelah dokumen lengkap."
      }
    }
  ]
};

// --- KOMPONEN UTAMA ---
export default function GroupEmployeePA_ID() {
  return (
    <>
      {/* Inject Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-cream text-navy font-sans">
        
        {/* HERO SECTION - Kuat & Langsung ke Sasaran */}
        <section className="gradient-navy text-cream section-padding pt-32 md:pt-40 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('/images/industrial-pattern.svg')]"></div>
          <div className="container mx-auto px-6 relative z-10">
            
            {/* Breadcrumb Visual */}
            <nav className="text-sm mb-6 opacity-80 flex items-center flex-wrap gap-2">
              <Link href="/" className="hover:text-gold">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/asuransi-personal-accident" className="hover:text-gold">Asuransi Personal Accident</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gold font-semibold">PA Karyawan Grup</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Asuransi PA Grup Batam: <span className="text-gradient-gold">Proteksi Aset Utama</span> Perusahaan Anda
                </h1>
                <p className="text-lg text-cream/90 mb-8 leading-relaxed">
                  Apakah perusahaan Anda beroperasi di kawasan Batamindo, Mukakuning, atau Tanjung Uncang? Lindungi karyawan Anda dari risiko kecelakaan kerja dengan solusi <strong>Group Personal Accident</strong> yang melengkapi BPJS Ketenagakerjaan. Fokus pada produktivitas, biarkan kami urus risikonya.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <QuoteButton cluster="pa" lang="id" variant="gold" className="!rounded-full !px-8 !py-3.5" />
                  <Link href="#studi-kasus" className="inline-flex items-center justify-center gap-2 border-2 border-cream/50 hover:border-gold text-cream font-bold py-4 px-8 rounded-full transition-all">
                    Lihat Contoh Klaim
                  </Link>
                </div>
              </div>

              <div className="bg-navy-light/20 p-8 rounded-3xl border border-cream/10 backdrop-blur-sm">
                <h3 className="font-display text-2xl font-bold text-gold mb-6">Keunggulan Skema Kami:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gold/20 rounded-lg">
                      <Landmark className="text-gold w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Top-Up BPJS JKK</h4>
                      <p className="text-sm text-cream/70">Santunan tunai langsung di atas plafon BPJS untuk biaya perawatan tambahan atau income replacement.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gold/20 rounded-lg">
                      <Users className="text-gold w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Minimum Peserta Fleksibel</h4>
                      <p className="text-sm text-cream/70">Mulai dari 5 peserta untuk UMKM Batam hingga ribuan karyawan untuk pabrik besar.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gold/20 rounded-lg">
                      <MapPin className="text-gold w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Coverage Lokal Spesifik</h4>
                      <p className="text-sm text-cream/70">Paham klasifikasi risiko galangan kapal, manufaktur elektronik, dan proyek konstruksi Batam.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: TARGET MARKET & KONTEKS LOKAL BATAM */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-gold font-bold uppercase tracking-widest text-sm">Sektor Industri Batam</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
                Siapa yang Membutuhkan Asuransi PA Grup?
              </h2>
              <p className="text-navy/70 max-w-3xl mx-auto">
                Batam sebagai pusat industri bebas memiliki profil risiko kerja yang unik. Berikut jenis perusahaan yang wajib memiliki proteksi ini:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card Industri */}
              <div className="bg-cream p-6 rounded-2xl border border-navy/10 card-hover group">
                <div className="h-16 w-16 bg-navy/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <MapPin className="text-navy group-hover:text-gold w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Galangan Kapal (Shipyard)</h3>
                <p className="text-navy/60 text-sm mb-3">
                  Lokasi: Tanjung Uncang, Sekupang. Risiko tinggi: Pengelasan, bekerja di ketinggian, pestisida kapal. Klasifikasi Risiko: Kelas 3 (High Risk).
                </p>
                <span className="text-xs font-semibold text-gold bg-gold/10 py-1 px-3 rounded-full">High Priority</span>
              </div>

              <div className="bg-cream p-6 rounded-2xl border border-navy/10 card-hover group">
                <div className="h-16 w-16 bg-navy/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <Building2 className="text-navy group-hover:text-gold w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Manufaktur Elektronik</h3>
                <p className="text-navy/60 text-sm mb-3">
                  Lokasi: Batamindo, Mukakuning. Risiko sedang: Mesin assembly, paparan bahan kimia. Klasifikasi Risiko: Kelas 2 (Medium Risk).
                </p>
                <span className="text-xs font-semibold text-navy bg-navy/5 py-1 px-3 rounded-full">Medium Priority</span>
              </div>

              <div className="bg-cream p-6 rounded-2xl border border-navy/10 card-hover group">
                <div className="h-16 w-16 bg-navy/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <Car className="text-navy group-hover:text-gold w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Logistik & Ekspedisi</h3>
                <p className="text-navy/60 text-sm mb-3">
                  Lokasi: Pelabuhan Sekupang, Batu Ampar. Risiko: Bongkar muat, kecelakaan lalu lintas, forklift. Klasifikasi Risiko: Kelas 2-3.
                </p>
                <span className="text-xs font-semibold text-navy bg-navy/5 py-1 px-3 rounded-full">High Priority</span>
              </div>

              <div className="bg-cream p-6 rounded-2xl border border-navy/10 card-hover group">
                <div className="h-16 w-16 bg-navy/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <Users className="text-navy group-hover:text-gold w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Kantor & Retail</h3>
                <p className="text-navy/60 text-sm mb-3">
                  Lokasi: Nagoya, Batam Center. Risiko rendah: Kecelakaan dalam perjalanan dinas atau di kantor. Klasifikasi Risiko: Kelas 1 (Low Risk).
                </p>
                <span className="text-xs font-semibold text-green-600 bg-green-100 py-1 px-3 rounded-full">Standard</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: MANFAAT DETAIL & SYARAT */}
        <section className="section-padding bg-navy-light/5">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Kolom Kiri: Manfaat */}
              <div>
                <h2 className="font-display text-3xl font-bold text-navy mb-8">
                  Rincian Manfaat Proteksi PA Grup
                </h2>
                <p className="text-navy/70 mb-6">
                  Polis kami dirancang untuk memberikan dampak finansial nyata, bukan sekadar formalitas.
                </p>

                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-gold flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy">Santunan Meninggal Dunia (Death Benefit)</h4>
                      <p className="text-sm text-navy/60">Diberikan 100% Uang Pertanggungan (UP) kepada ahli waris. Proses cair cepat tanpa likuidasi aset.</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-gold flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy">Santunan Cacat Tetap (Permanent Disability)</h4>
                      <p className="text-sm text-navy/60">Mulai dari 1% hingga 100% UP sesuai tabel cacet standar asuransi (misal: hilang jari, kebutaan, patah tulang permanen).</p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-gold flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy">Penggantian Biaya Medis (Medical Expense)</h4>
                      <p className="text-sm text-navy/60">Cover biaya rawat inap, rawat jalan, dan tindakan dokter akibat kecelakaan. Bisa cashless (kartu) atau reimbursement.</p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-gold flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy">Santunan Harian Rawat Inap</h4>
                      <p className="text-sm text-navy/60">Uang pengganti penghasilan harian selama karyawan tidak masuk kerja karena dirawat di rumah sakit (misal: Rp 100.000 - Rp 300.000/hari).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: Syarat & Ketentuan */}
              <div>
                <h2 className="font-display text-3xl font-bold text-navy mb-8">
                  Syarat Mendapatkan Polis PA
                </h2>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="font-bold text-xl mb-4 text-navy">A. Dokumen Pendaftaran (Underwriting)</h3>
                  <ul className="space-y-3 text-navy/80 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span><strong>Formulir Proposal:</strong> Data lengkap perusahaan (NPWP, SIUP, NIB).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span><strong>Daftar Karyawan:</strong> Nama lengkap, tanggal lahir, pekerjaan/jabatan spesifik.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span><strong>Klasifikasi Pekerjaan:</strong> Deskripsi tugas untuk penentuan rate premi (Pabrik vs Kantor).</span>
                    </li>
                  </ul>

                  <h3 className="font-bold text-xl mb-4 text-navy">B. Kriteria Kelayakan (Eligibility)</h3>
                  <ul className="space-y-3 text-navy/80">
                    <li className="flex items-start gap-2">
                      <UserCheck className="w-5 h-5 text-gold mt-0.5" />
                      <span>Usia karyawan antara 17 - 65 tahun.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <UserCheck className="w-5 h-5 text-gold mt-0.5" />
                      <span>Status karyawan tetap, kontrak, atau harian (wajib deklarasi).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <UserCheck className="w-5 h-5 text-gold mt-0.5" />
                      <span>Tidak sedang dalam kondisi cacat atau sakit parah sebelum polis dimulai (Pre-existing condition).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CONTOH KASUS & KLAIM (CRITICAL FOR EEAT) */}
        <section id="studi-kasus" className="section-padding bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Studi Kasus & Skenario Klaim
              </h2>
              <p className="text-navy/70">Transparansi perhitungan klaim agar Anda yakin dengan pilihan proteksi.</p>
            </div>

            {/* Case Study Card */}
            <div className="bg-gradient-to-br from-navy to-navy-mid p-8 md:p-12 rounded-3xl text-cream shadow-2xl max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-cream/60">Skenario Nyata</span>
                  <h3 className="font-display text-xl font-bold">Kecelakaan Kerja di Kawasan Industri Mukakuning</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gold mb-2">Kronologi Kejadian:</h4>
                  <p className="text-cream/80 text-sm leading-relaxed mb-4">
                    Pak Budi (35 tahun), operator mesin di pabrik elektronik, mengalami kecelakaan saat memperbaiki conveyor belt. Jari tangannya terluka parah dan memerlukan operasi. Ia dirawat di RS Budi Kemuliaan Batam selama 5 hari. Biaya medis ditanggung BPJS, namun ia tidak bisa bekerja selama 2 bulan.
                  </p>
                  
                  <h4 className="font-bold text-gold mb-2">Parameter Polis PA Grup:</h4>
                  <ul className="text-sm text-cream/80 space-y-1">
                    <li><strong>Uang Pertanggungan (UP):</strong> Rp 100.000.000</li>
                    <li><strong>Coverage:</strong> 24 Jam</li>
                    <li><strong>Premi/tahun:</strong> Estimasi Rp 250.000/karyawan</li>
                  </ul>
                </div>

                <div className="bg-navy-light/30 p-6 rounded-xl border border-cream/10">
                  <h4 className="font-bold text-white mb-4 text-center">Perhitungan Klaim yang Diterima</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-cream/10 pb-2">
                      <span className="text-cream/70">Biaya Medis (Reimburse):</span>
                      <span className="font-bold">Rp 15.000.000</span>
                    </div>
                    <div className="flex justify-between border-b border-cream/10 pb-2">
                      <span className="text-cream/70">Santunan Cacat (5% UP):</span>
                      <span className="font-bold">Rp 5.000.000</span>
                    </div>
                    <div className="flex justify-between border-b border-cream/10 pb-2">
                      <span className="text-cream/70">Harian Rawat Inap (5 hari x 200rb):</span>
                      <span className="font-bold">Rp 1.000.000</span>
                    </div>
                    <div className="flex justify-between bg-gold/20 p-3 rounded-lg mt-4">
                      <span className="font-bold text-gold">TOTAL KLAIM CAIR:</span>
                      <span className="font-bold text-gold text-lg">Rp 21.000.000</span>
                    </div>
                  </div>
                  <p className="text-xs text-cream/50 mt-4 text-center">*Dana cair ke rekening karyawan dalam 3 hari kerja</p>
                </div>
              </div>
            </div>

            {/* Process Timeline */}
            <div className="mt-16">
              <h3 className="font-display text-2xl font-bold text-navy text-center mb-8">Prosedur Klaim Cepat di Batam</h3>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold/20 hidden md:block"></div>
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-10 h-10 bg-gold text-navy rounded-full flex items-center justify-center font-bold z-10">1</div>
                    <div className="bg-cream p-4 rounded-xl shadow-sm flex-1 border border-navy/5">
                      <h4 className="font-bold text-navy">Lapor Kejadian (Reporting)</h4>
                      <p className="text-sm text-navy/60">Hubungi tim kami via WhatsApp maksimal 2x24 jam setelah kejadian. Jika darurat, fokus ke RS terlebih dahulu.</p>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-10 h-10 bg-gold text-navy rounded-full flex items-center justify-center font-bold z-10">2</div>
                    <div className="bg-cream p-4 rounded-xl shadow-sm flex-1 border border-navy/5">
                      <h4 className="font-bold text-navy">Pengumpulan Dokumen</h4>
                      <p className="text-sm text-navy/60">Isi formulir klaim, surat keterangan kecelakaan dari HRD/Polisi, laporan medis, dan fotokopi KTP.</p>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-10 h-10 bg-gold text-navy rounded-full flex items-center justify-center font-bold z-10">3</div>
                    <div className="bg-cream p-4 rounded-xl shadow-sm flex-1 border border-navy/5">
                      <h4 className="font-bold text-navy">Verifikasi & Pencairan</h4>
                      <p className="text-sm text-navy/60">Tim kami memproses validasi. Dana santunan ditransfer ke rekening karyawan atau perusahaan (sesuai kesepakatan).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUK TERKAIT UNTUK PERUSAHAAN */}
        <section className="section-padding bg-cream">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-3 text-center">
              Solusi Lengkap untuk Perusahaan & Kontraktor
            </h2>
            <p className="text-navy/60 text-center mb-8 max-w-2xl mx-auto">
              PA Karyawan biasanya dipadukan dengan proteksi aset dan proyek berikut ini.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/asuransi-engineering/contractor-all-risk" className="group bg-white p-6 rounded-2xl shadow-sm card-hover border border-navy/5">
                <Landmark className="text-gold w-8 h-8 mb-3" />
                <h3 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors">Contractor All Risk (CAR)</h3>
                <p className="text-sm text-navy/60">Perusahaan kontraktor proyek butuh proteksi aset proyek selain PA pekerja lapangan.</p>
              </Link>
              <Link href="/asuransi-properti/asuransi-pabrik-kawasan-industri-batam" className="group bg-white p-6 rounded-2xl shadow-sm card-hover border border-navy/5">
                <Building2 className="text-gold w-8 h-8 mb-3" />
                <h3 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors">Asuransi Pabrik Kawasan Industri</h3>
                <p className="text-sm text-navy/60">Lindungi gedung dan aset pabrik di Batamindo, Mukakuning, atau KIKN.</p>
              </Link>
              <Link href="/asuransi-surety-bond/performance-bond" className="group bg-white p-6 rounded-2xl shadow-sm card-hover border border-navy/5">
                <FileCheck className="text-gold w-8 h-8 mb-3" />
                <h3 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors">Surety Bond (Performance Bond)</h3>
                <p className="text-sm text-navy/60">Untuk kontraktor yang mengikuti tender proyek, lengkapi dengan performance bond.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION: FAQ EXPANDED */}
        <section className="section-padding bg-cream">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-center mb-8">Pertanyaan Umum (FAQ)</h2>
            <div className="space-y-4">
              
              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  Apakah premi untuk pekerja shipyard lebih mahal?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  Ya, secara umum pekerja galangan kapal (shipyard) masuk kelas risiko 3 (High Risk) karena paparan bahaya ketinggian dan pengelasan. Namun, kami memiliki akses ke beberapa asuransi jiwa utama yang kompetitif di Batam, sehingga kita bisa negosiasi premi terbaik tanpa mengurangi nilai pertanggungan.
                </p>
              </details>

              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  Apakah kecelakaan di jalan saat pulang kerja di-cover?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  Ya, selama polis di-set sebagai "24 Jam" (24 hours coverage). Jika polis hanya "Jam Kerja" (Business Hours), maka kecelakaan di jalan saat pulang mungkin tidak di-cover kecuali adalah perjalanan dinas. Kami merekomendasikan coverage 24 jam untuk perlindungan maksimal.
                </p>
              </details>

              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  Bagaimana jika karyawan sudah punya Asuransi Jiwa sendiri?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  Asuransi PA Grup dari perusahaan bersifat "Overriding" atau tambahan. Klaim bisa diajukan ke semua pihak (stacking). Misal karyawan punya Jiwa Swasta dan PA Grup kantor, ahli waris bisa mendapatkan santunan dari kedua-duanya jika kejadian adalah kecelakaan.
                </p>
              </details>

              <details className="group bg-white p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy text-lg">
                  Apakah ada diskon untuk jumlah karyawan banyak?
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  Ada. Sistem asuransi PA Grup mengenal "Tier Rating". Untuk karyawan di atas 100 orang, 500 orang, atau 1000 orang, ada potongan premi (discount) yang signifikan. Kami juga bisa membantu membuat skema "Employee Benefit Scheme" yang lebih komprehensif.
                </p>
              </details>

            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="konsultasi-gratis" className="section-padding gradient-gold">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Siap Melindungi Tim Anda?
            </h2>
            <p className="text-navy/80 mb-8 max-w-2xl mx-auto text-lg">
                Jangan biarkan risiko kecelakaan mengganggu stabilitas keuangan perusahaan dan keluarga karyawan Anda. Hubungi tim kami sekarang untuk penawaran premi PA Grup terbaik di Batam.
            </p>
            <QuoteButton cluster="pa" lang="id" variant="navy" className="!rounded-full !px-10 !py-4 !text-lg hover:-translate-y-1" />
          </div>
        </section>

      </main>
    </>
  );
}
