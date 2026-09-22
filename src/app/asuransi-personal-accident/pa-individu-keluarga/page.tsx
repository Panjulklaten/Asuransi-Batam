import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO, schemaInsuranceProduct } from '@/lib/seo';
import { 
  HeartHandshake, Car, Ship, ShieldAlert, ChevronRight, 
  PhoneCall, MapPin, Clock, FileText, CheckCircle, AlertTriangle,
  UserCheck, Home, Wallet 
} from 'lucide-react';

// --- METADATA SEO (OPTIMIZED FOR LOCAL BATAM) ---
export const metadata: Metadata = generateSEO({
  title: 'Asuransi PA Individu & Keluarga Batam',
  description: 'Asuransi Kecelakaan Diri (PA) Individu untuk warga Batam. Proteksi komprehensif 24 jam untuk komuter Batam-Singapura, pengendara motor, dan kepala keluarga. Premi mulai Rp 50rb/bulan, klaim proses 1 hari.',
  canonical: 'https://asuransibatam.com/asuransi-personal-accident/pa-individu-keluarga',
  languages: {
    id: 'https://asuransibatam.com/asuransi-personal-accident/pa-individu-keluarga',
    en: 'https://asuransibatam.com/en/personal-accident-insurance/individual-family-pa',
  },
});

// --- JSON-LD SCHEMAS ---
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://asuransibatam.com" },
    { "@type": "ListItem", "position": 2, "name": "Asuransi Personal Accident", "item": "https://asuransibatam.com/asuransi-personal-accident" },
    { "@type": "ListItem", "position": 3, "name": "PA Individu & Keluarga", "item": "https://asuransibatam.com/asuransi-personal-accident/pa-individu-keluarga" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apakah Asuransi PA Individu cover kecelakaan saat bekerja?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, PA Individu bersifat 24 jam dimanapun Anda berada, termasuk saat bekerja. Ini menjadi keuntungan tambahan jika santunan dari perusahaan atau BPJS dirasa kurang. Namun untuk pekerjaan berisiko tinggi seperti shipyard, perlu deklarasi pekerjaan yang benar."
      }
    },
    {
      "@type": "Question",
      "name": "Saya Warga Negara Asing (WNA) tinggal di Batam, apakah bisa ikut PA Individu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bisa. Kami menyediakan polis PA untuk WNA (Expatriate) yang tinggal dan bekerja di wilayah Indonesia, khususnya Batam, dengan area pertanggungan bisa diperluas hingga regional Asia Tenggara."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara klaim Asuransi PA jika kecelakaan di Batam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Proses klaim sangat mudah. Lapor ke kami via WhatsApp dalam 2x24 jam. Siapkan foto kejadian, surat keterangan dari rumah sakit (jika dirawat), dan fotokopi KTP. Jika klaim disetujui, dana cair ke rekening Anda dalam 3 hari kerja."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa premi minimal untuk proteksi PA Individu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Premi PA Individu sangat terjangkau. Untuk Uang Pertanggungan Rp 100 Juta, premi tahunannya bisa mulai dari kisaran Rp 150.000 - Rp 300.000 per tahun tergantung usia dan pekerjaan. Lebih murah dari harga 1 kupon makan siam di Nagoya."
      }
    }
  ]
};

const serviceSchema = schemaInsuranceProduct({
  name: "Asuransi PA Individu & Keluarga Batam",
  description: "Asuransi Kecelakaan Diri Individu untuk warga Batam. Proteksi 24 jam untuk komuter, pengendara motor, dan kepala keluarga.",
  url: "/asuransi-personal-accident/pa-individu-keluarga",
  category: "Personal Accident",
});

// --- KOMPONEN UTAMA ---
export default function IndividualFamilyPA_ID() {
  return (
    <>
      {/* Inject Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-cream text-navy font-sans">
        
        {/* HERO SECTION - Personal & Emotional Hook */}
        <section className="gradient-navy text-cream section-padding pt-32 md:pt-40 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/family-protection.svg')]"></div>
          <div className="container mx-auto px-6 relative z-10">
            
            {/* Breadcrumb */}
            <nav className="text-sm mb-6 opacity-80 flex items-center flex-wrap gap-2">
              <Link href="/" className="hover:text-gold">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/asuransi-personal-accident" className="hover:text-gold">Asuransi Personal Accident</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gold font-semibold">PA Individu & Keluarga</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="bg-gold/20 text-gold text-xs font-bold py-1 px-3 rounded-full uppercase tracking-wider">Proteksi Personal 24 Jam</span>
                <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mt-4 mb-6">
                  Jangan Biarkan Kecelakaan Menghancurkan <span className="text-gradient-gold">Masa Depan Keluarga</span> Anda
                </h1>
                <p className="text-lg text-cream/90 mb-8 leading-relaxed">
                  Tinggal di Batam dengan aktivitas tinggi? Mulai dari kecelakaan lalu lintas di Jalan Sudirman, risiko kerja di pabrik, hingga kecelakaan saat liburan ke Singapore. <strong>Asuransi PA Individu</strong> adalah tameng finansial terakhir yang Anda butuhkan. Premi murah, manfaat besar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#form-pendaftaran" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold py-4 px-8 rounded-full transition-all shadow-xl transform hover:-translate-y-1">
                    <ShieldAlert size={20} /> Cek Premi Sekarang
                  </Link>
                  <Link href="#contoh-kasus" className="inline-flex items-center justify-center gap-2 border-2 border-cream/50 hover:border-gold text-cream font-bold py-4 px-8 rounded-full transition-all">
                    Lihat Skenario Klaim
                  </Link>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="hidden lg:block">
                <div className="bg-navy-light/30 backdrop-blur-sm p-8 rounded-3xl border border-cream/10">
                  <h3 className="font-display text-2xl font-bold text-gold mb-6">Kenapa Warga Batam Perlu PA Individu?</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="bg-gold/20 p-3 rounded-full">
                        <Car className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-cream">Risiko Kecelakaan Lalu Lintas Tinggi</h4>
                        <p className="text-cream/60 text-sm">Volume kendaraan di Barelang & Tol Batam meningkat. Resiko motor/mobil tidak pandang bulu.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-gold/20 p-3 rounded-full">
                        <Ship className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-cream">Aktivitas Komuter & Maritim</h4>
                        <p className="text-cream/60 text-sm">Frekuensi penyeberangan Ship ke Singapore/Malaysia & aktivitas di pelabuhan butuh proteksi ekstra.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-gold/20 p-3 rounded-full">
                        <Wallet className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-cream">Income Replacement</h4>
                        <p className="text-cream/60 text-sm">Jika Anda sakit/cacat 3 bulan, siapa yang bayar tagihan listrik & cicilan rumah? PA Individu jawabnya.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: SIAPA YANG PERLU (TARGET MARKET DETAIL) */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Profil Risiko Warga Batam: Apakah Anda Termasuk?
              </h2>
              <p className="text-navy/70 max-w-2xl mx-auto">
                Batam punya karakteristik unik. Kami menganalisis profil demografis Batam untuk menentukan kebutuhan proteksi Anda.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: Pekerja Komuter */}
              <div className="bg-cream p-6 rounded-2xl border border-navy/10 card-hover group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <Ship className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display font-bold text-xl mb-2">Pekerja Komuter (Singapore/Bintan)</h3>
                <p className="text-navy/60 text-sm mb-4">
                  Setiap hari menyeberang via Batam Centre atau Harbour Bay? Risiko kapal, pelabuhan, dan transportasi darat negara tetangga memerlukan polis yang cover **Regional/Worldwide**.
                </p>
                <span className="text-xs font-bold text-navy bg-navy/5 py-1 px-3 rounded-full">Rekomendasi: PA 24 Jam Regional</span>
              </div>

              {/* Card 2: Pengendara Motor Harian */}
              <div className="bg-cream p-6 rounded-2xl border border-navy/10 card-hover group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <Car className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display font-bold text-xl mb-2">Pengendara Motor (Ojol/Karyawan)</h3>
                <p className="text-navy/60 text-sm mb-4">
                  Cuaca Batam tidak menentu dan kondisi jalan rawan kecelakaan. Asuransi motor hanya ganti motor, tidak ganti tulang patah atau operasi Anda. PA Individu solusinya.
                </p>
                <span className="text-xs font-bold text-navy bg-navy/5 py-1 px-3 rounded-full">Rekomendasi: Medical Expense + Cacat</span>
              </div>

              {/* Card 3: Kepala Keluarga */}
              <div className="bg-cream p-6 rounded-2xl border border-navy/10 card-hover group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <Home className="text-gold w-10 h-10 mb-4" />
                <h3 className="font-display font-bold text-xl mb-2">Kepala Keluarga (Tulang Punggung)</h3>
                <p className="text-navy/60 text-sm mb-4">
                  Istri dan anak bergantung pada penghasilan Anda. Jika terjadi risiko, PA Individu memberikan santunan tunai besar (misal 500 Juta - 1 Miliar) kepada keluarga sebagai pengganti income.
                </p>
                <span className="text-xs font-bold text-navy bg-navy/5 py-1 px-3 rounded-full">Rekomendasi: High UP Death Benefit</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: MANFAAT DETAIL & MEKANISME (EXPERTISE) */}
        <section className="section-padding bg-navy-light/5">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center text-navy mb-4">Rincian Manfaat Proteksi PA Individu</h2>
            <p className="text-navy/70 text-center mb-12 max-w-3xl mx-auto">
              Kami menjelaskan transparan apa yang Anda dapatkan. Bukan sekedar janji manis, tapi mekanisme klaim yang jelas.
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Benefit List */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-gold flex gap-4">
                  <ShieldAlert className="w-6 h-6 text-navy flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">1. Santunan Meninggal Dunia (Death Benefit)</h4>
                    <p className="text-sm text-navy/60 mt-1">
                      100% Uang Pertanggungan (UP) dibayarkan langsung ke ahli waris tanpa proses waris sertifikat yang ribet. Bisa untuk biaya pemakaman atau tabungan keluarga.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-gold flex gap-4">
                  <ShieldAlert className="w-6 h-6 text-navy flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">2. Santunan Cacat Tetap (Permanent Disability)</h4>
                    <p className="text-sm text-navy/60 mt-1">
                      Cacat total (mata buta, hilang tangan/kaki): 100% UP. Cacat sebagian: persentase sesuai tabel cacet. Dana ini penting untuk biaya rehabilitasi & alat bantu.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-gold flex gap-4">
                  <ShieldAlert className="w-6 h-6 text-navy flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">3. Penggantian Biaya Medis (Medical Expense)</h4>
                    <p className="text-sm text-navy/60 mt-1">
                      Cover rawat inap, rawat jalan, X-ray, dokter spesialis akibat kecelakaan. Limit biasanya 10%-20% dari UP. Bisa dikombinasikan dengan kartu BPJS Anda.
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Notice (Transparansi) */}
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col justify-center">
                <h3 className="font-display font-bold text-xl text-navy mb-4 flex items-center gap-2">
                  <AlertTriangle className="text-gold" /> Apa yang TIDAK Dicover (Exclusion)?
                </h3>
                <p className="text-navy/70 text-sm mb-4">
                  Sebagai ahli asuransi, kami wajib jujur mengenai pengecualian (exclusion) agar Anda tidak salah paham saat klaim:
                </p>
                <ul className="space-y-2 text-navy/80 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Kecelakaan akibat mabuk alkohol atau pengaruh obat terlarang (narkoba).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Bunuh diri atau sengaja melukai diri sendiri.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Tindak pidana atau kejahatan yang dilakukan oleh tertanggung.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Penyakit (sakit) bukan kecelakaan (misal: demam berdarah, diabetes, jantung). <em>*Gunakan Asuransi Kesehatan untuk ini.</em></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: STUDI KASUS (CRITICAL FOR EEAT/TRUST) */}
        <section id="contoh-kasus" className="section-padding bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Studi Kasus Nyata: Kecelakaan Motor di Batam
              </h2>
              <p className="text-navy/70">Simulasi perhitungan klaim untuk membuktikan nilai proteksi ini.</p>
            </div>

            {/* Case Study Card */}
            <div className="bg-gradient-to-br from-navy to-navy-mid p-8 md:p-12 rounded-3xl text-cream shadow-2xl max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-6 border-b border-cream/20 pb-4">
                <AlertTriangle className="w-8 h-8 text-gold" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-cream/60">Skenario Kejadian</span>
                  <h3 className="font-display text-xl font-bold">Kecelakaan Motor di Jalan Ahmad Yani</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gold mb-2">Kronologi:</h4>
                  <p className="text-cream/80 text-sm leading-relaxed mb-4">
                    Pak Andi (30 th), staf administrasi di Batam Center, mengalami kecelakaan motor saat pulang kantor. Akibatnya patah tulang kering (fraktur tibia) dan harus dioperasi pemasangan pen. Ia dirawat di RS Budi Kemuliaan selama 7 hari. Total biaya medis (yang tidak ditanggung BPJS karena penyakit penyerta/kamar standar) dan biaya operasional lainnya membebani kantongnya.
                  </p>
                  
                  <h4 className="font-bold text-gold mb-2">Parameter Polis PA Individu:</h4>
                  <ul className="text-sm text-cream/80 space-y-1">
                    <li><strong>Uang Pertanggungan (UP):</strong> Rp 200.000.000</li>
                    <li><strong>Premi dibayar:</strong> Rp 280.000 / Tahun</li>
                    <li><strong>Coverage:</strong> 24 Jam (Seluruh Indonesia)</li>
                  </ul>
                </div>

                <div className="bg-navy-light/30 p-6 rounded-xl border border-cream/10">
                  <h4 className="font-bold text-white mb-4 text-center">Perhitungan Klaim yang Diterima</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-cream/10 pb-2 text-sm">
                      <span className="text-cream/70">Biaya Medis (Reimburse):</span>
                      <span className="font-bold">Rp 10.000.000</span>
                    </div>
                    <p className="text-xs text-cream/50 -mt-2">(Limit medis biasanya 10% dari UP. Mengcover obat, sewa ketinggalan, dll)</p>
                    
                    <div className="flex justify-between border-b border-cream/10 pb-2 text-sm">
                      <span className="text-cream/70">Santunan Cacat Tetap (Fraktur):</span>
                      <span className="font-bold">Rp 5.000.000</span>
                    </div>
                    <p className="text-xs text-cream/50 -mt-2">(Berdasarkan tabel cacet, fraktur tulang kering biasanya 2.5%-5% UP)</p>

                    <div className="flex justify-between border-b border-cream/10 pb-2 text-sm">
                      <span className="text-cream/70">Uang Saku Harian Rawat Inap (7 Hari):</span>
                      <span className="font-bold">Rp 1.750.000</span>
                    </div>
                    <p className="text-xs text-cream/50 -mt-2">(Asumsi Rp 250rb/hari)</p>

                    <div className="flex justify-between bg-gold/20 p-3 rounded-lg mt-4">
                      <span className="font-bold text-gold">TOTAL DANA CAIR:</span>
                      <span className="font-bold text-gold text-lg">Rp 16.750.000</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center bg-white/10 p-2 rounded-lg">
                    <span className="text-sm font-bold text-cream">Modal Premi: Rp 280.000</span>
                    <br/>
                    <span className="text-xs text-gold">Return On Protection: 5.900%+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: PROSEDUR KLAIM & SYARAT (TRUST) */}
        <section className="section-padding bg-cream">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Proses Klaim */}
              <div>
                <h2 className="font-display text-3xl font-bold text-navy mb-8">
                  Prosedur Klaim Mudah di Batam
                </h2>
                <div className="relative pl-8 border-l-2 border-gold space-y-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-gold rounded-full -translate-x-1/2 mt-1.5"></div>
                  <div>
                    <h3 className="font-bold text-xl text-navy">1. Lapor Cepat (Saat Kejadian)</h3>
                    <p className="text-navy/70 text-sm mt-1">Hubungi hotline kami atau WhatsApp dalam 1x24 jam. Jika darurat, prioritaskan ke RS terdekat (RS Budi Kemuliaan / RS Eka Hospital). Jangan lupa minta surat keterangan.</p>
                  </div>
                  
                  <div className="absolute left-0 top-1/3 w-4 h-4 bg-gold rounded-full -translate-x-1/2 mt-1.5"></div>
                  <div>
                    <h3 className="font-bold text-xl text-navy">2. Verifikasi Dokumen</h3>
                    <p className="text-navy/70 text-sm mt-1">Tim kami akan memandu pengisian formulir. Foto KTP, foto kejadian, dan surat keterangan dokter adalah wajib.</p>
                  </div>

                  <div className="absolute left-0 top-2/3 w-4 h-4 bg-gold rounded-full -translate-x-1/2 mt-1.5"></div>
                  <div>
                    <h3 className="font-bold text-xl text-navy">3. Pencairan Dana</h3>
                    <p className="text-navy/70 text-sm mt-1">Klaim disetujui? Dana langsung transfer ke rekening Anda. Proses cepat, tidak perlu menunggu bulanan.</p>
                  </div>
                </div>
              </div>

              {/* Syarat Pembuatan Polis */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-gold">
                <h3 className="font-display text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                  <FileText className="text-gold" /> Syarat Pembuatan Polis
                </h3>
                <p className="text-navy/70 text-sm mb-6">
                  Proses pendaftaran PA Individu sangat simpel dan bisa dilakukan online dari rumah.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-navy/10 rounded-full flex items-center justify-center text-navy font-bold text-xs flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <strong className="text-navy">Data Diri:</strong>
                      <p className="text-sm text-navy/60">Nama lengkap sesuai KTP, Tanggal Lahir, Alamat domisili Batam, No HP aktif.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-navy/10 rounded-full flex items-center justify-center text-navy font-bold text-xs flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <strong className="text-navy">Informasi Pekerjaan:</strong>
                      <p className="text-sm text-navy/60">Jabatan dan deskripsi singkat pekerjaan (untuk penentuan rate risiko).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-navy/10 rounded-full flex items-center justify-center text-navy font-bold text-xs flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <strong className="text-navy">Ahli Waris (Opsional tapi Direkomendasikan):</strong>
                      <p className="text-sm text-navy/60">Nama dan hubungan dengan ahli waris untuk mempercepat proses klaim meninggal.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-gold/10 rounded-xl text-sm text-navy/80">
                  <strong>Catatan:</strong> Tidak diperlukan cek kesehatan (medical check up) untuk PA Individu dengan UP di bawah 1 Miliar, kecuali ada riwayat penyakit tertentu.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-center text-navy mb-8">Pertanyaan Seputar PA Individu Batam</h2>
            <div className="space-y-4">
              
              <details className="group bg-cream p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy">
                  Apakah Asuransi PA ini bisa untuk anak-anak?
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed text-sm">
                  Bisa. Untuk anak-anak (usia 6 bulan - 17 tahun), manfaat utama biasanya fokus pada Penggantian Biaya Medis akibat kecelakaan (misal kecelakaan di sekolah atau bermain). Santunan meninggal dinilai berbeda sesuai regulasi asuransi jiwa.
                </p>
              </details>

              <details className="group bg-cream p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy">
                  Saya sudah punya PA dari kantor, perlu lagi?
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed text-sm">
                  Perlu, jika PA kantor hanya cover saat jam kerja. PA Individu cover 24 jam (saat liburan, di rumah, di jalan). Selain itu, klaim bisa "ditumpuk". Jika kantor cover 100 Juta, dan Anda punya PA Pribadi 200 Juta, ahli waris bisa mendapatkan total 300 Juta.
                </p>
              </details>

              <details className="group bg-cream p-6 rounded-xl shadow-sm card-hover">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-navy">
                  Berapa lama proses polisnya?
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-navy/70 leading-relaxed text-sm">
                  Proses penerbitan polis softcopy hanya membutuhkan waktu 1x24 jam setelah pembayaran premi dan data lengkap diterima. Polis fisik akan dikirim ke alamat Anda di Batam dalam waktu 7-14 hari kerja.
                </p>
              </details>
              
            </div>
          </div>
        </section>

        {/* ARTIKEL & PRODUK TERKAIT */}
        <section className="section-padding bg-navy-light/10">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-8 text-center">
              Lengkapi Proteksi Anda
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/asuransi-personal-accident/pa-karyawan-grup" className="group bg-white p-6 rounded-2xl shadow-sm card-hover border border-navy/5">
                <UserCheck className="text-gold w-8 h-8 mb-3" />
                <h3 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors">PA Karyawan Grup</h3>
                <p className="text-sm text-navy/60">Jika perusahaan Anda juga butuh proteksi untuk karyawan, lihat skema Group PA.</p>
              </Link>
              <Link href="/asuransi-marine/marine-cargo" className="group bg-white p-6 rounded-2xl shadow-sm card-hover border border-navy/5">
                <Ship className="text-gold w-8 h-8 mb-3" />
                <h3 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors">Asuransi Marine Cargo</h3>
                <p className="text-sm text-navy/60">Sering menyeberang ke Singapura/Bintan untuk bisnis? Lindungi juga barang kiriman Anda.</p>
              </Link>
              <Link href="/asuransi-kendaraan/asuransi-mobil-batam" className="group bg-white p-6 rounded-2xl shadow-sm card-hover border border-navy/5">
                <Car className="text-gold w-8 h-8 mb-3" />
                <h3 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors">Asuransi Mobil Batam</h3>
                <p className="text-sm text-navy/60">PA melindungi diri Anda, sementara asuransi mobil melindungi kendaraan dari risiko kecelakaan.</p>
              </Link>
              <Link href="/blog/asuransi-pa-pekerja-asing-ke-singapura-dari-batam" className="group bg-white p-6 rounded-2xl shadow-sm card-hover border border-navy/5">
                <Ship className="text-gold w-8 h-8 mb-3" />
                <h3 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors">PA untuk Staf ke Singapura</h3>
                <p className="text-sm text-navy/60">Kirim teknisi atau staf asing ke Singapura? Baca aturan ICA & MOM yang berlaku.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="form-pendaftaran" className="section-padding gradient-gold">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Mulai Proteksi Diri Anda Hari Ini
            </h2>
            <p className="text-navy/80 mb-8 max-w-2xl mx-auto text-lg">
                Investasi kecil hari ini, ketenangan pikiran untuk masa depan. Konsultasikan kebutuhan Anda secara GRATIS dengan tim kami.
            </p>
            <Link href="https://wa.me/6281373336728?text=Halo,%20saya%20tertarik%20dengan%20PA%20Individu%20untuk%20diri%20sendiri/keluarga%20di%20Batam.%20Mohon%20infonya." 
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy-mid text-cream font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg">
                <PhoneCall size={22} /> Chat via WhatsApp
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
