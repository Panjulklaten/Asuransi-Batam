import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import { Shield, Clock } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = generateSEO({
  title: "Panduan OB 23: Cara Mengurus Impor Sementara untuk Pameran & Proyek di Batam",
  description: "Panduan lengkap OB 23 (impor sementara) di Batam: kapan dipakai, dokumen yang dibutuhkan, proses pengajuan, kesalahan umum yang bikin denda, dan estimasi biaya custom bond.",
  keywords: [
    "ob 23 batam",
    "impor sementara batam",
    "cara mengurus ob 23",
    "custom bond ob 23",
    "jaminan impor sementara",
    "bea cukai impor sementara batam",
  ],
  canonical: "https://asuransibatam.com/blog/panduan-ob23-impor-sementara-batam",
  languages: {
      id: "https://asuransibatam.com/blog/panduan-ob23-impor-sementara-batam",
      en: "https://asuransibatam.com/en/blog/temporary-import-guarantee-ob23-batam",
    },
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Panduan OB 23: Cara Mengurus Impor Sementara untuk Pameran & Proyek di Batam",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  author: { "@type": "Organization", name: "Tim Asuransi Batam", url: "https://asuransibatam.com" },
  publisher: { "@type": "Organization", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
};

const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://asuransibatam.com/blog" },
    { "@type": "ListItem", position: 3, name: "Surety Bond", item: "https://asuransibatam.com/asuransi-surety-bond" },
    { "@type": "ListItem", position: 4, name: "Panduan OB 23 Batam", item: "https://asuransibatam.com/blog/panduan-ob23-impor-sementara-batam" },
  ],
};

const penggunaOB23 = [
  { icon: "🎪", title: "Peralatan Pameran & Booth", desc: "Display, mesin demo, dan perlengkapan booth yang didatangkan khusus untuk pameran dagang atau industri di Batam." },
  { icon: "🛢️", title: "Peralatan Proyek Migas & Galangan", desc: "Alat berat atau unit khusus milik kontraktor asing yang dibawa sementara untuk pengerjaan proyek lepas pantai atau di galangan kapal." },
  { icon: "🧰", title: "Peralatan Kerja Tenaga Ahli Asing", desc: "Peralatan teknis yang dibawa masuk oleh tenaga ahli/teknisi asing untuk instalasi, servis, atau pelatihan mesin di pabrik Batam." },
  { icon: "🧪", title: "Sampel Produk untuk Uji Coba", desc: "Sample barang atau bahan baku yang diimpor sementara untuk keperluan uji kualitas atau riset sebelum kontrak jual-beli disepakati." },
  { icon: "🎬", title: "Peralatan Event & Produksi", desc: "Peralatan syuting, sound system, atau perlengkapan event internasional yang digelar sementara di Batam." },
  { icon: "📦", title: "Kemasan & Kontainer Berulang", desc: "Kontainer, pallet, atau kemasan khusus yang dipakai berulang untuk pengiriman antar-negara dan harus dikembalikan." },
];

const kesalahanUmum = [
  { covered: false, label: "Telat mengajukan perpanjangan OB 23", desc: "Jika masa impor sementara akan habis tapi barang belum bisa diekspor, perpanjangan harus diajukan sebelum jatuh tempo — bukan sesudahnya." },
  { covered: false, label: "Barang tidak sesuai dengan SKEP", desc: "Jenis, jumlah, atau spesifikasi barang yang direalisasikan harus persis sama dengan yang tercantum di Surat Keputusan Bea Cukai." },
  { covered: false, label: "Nilai jaminan kurang dari yang disyaratkan", desc: "Custom bond yang diterbitkan harus mencakup penuh potensi Bea Masuk dan PPN yang dibebaskan, bukan estimasi kasar." },
  { covered: false, label: "SPGR tidak dilegalisir notaris", desc: "Surat Perjanjian Ganti Rugi yang tidak dinotariskan bisa membuat pengajuan ditolak atau proses klaim bermasalah di kemudian hari." },
  { covered: true, label: "Ajukan perpanjangan H-14 sebelum jatuh tempo", desc: "Beri buffer waktu untuk proses administrasi Bea Cukai yang bisa memakan beberapa hari kerja." },
  { covered: true, label: "Simpan bukti PEB re-ekspor dengan rapi", desc: "Dokumen Pemberitahuan Ekspor Barang adalah bukti utama bahwa kewajiban OB 23 telah selesai dan custom bond bisa ditutup." },
];

const biayaIlustrasi = [
  { kebutuhan: "Peralatan pameran Rp 300 juta (2 minggu)", biaya: "Rp 2,5 – 5 juta", tenor: "1 bulan (+buffer)" },
  { kebutuhan: "Alat proyek migas Rp 2 miliar (6 bulan)", biaya: "Rp 16 – 36 juta", tenor: "6–8 bulan" },
  { kebutuhan: "Peralatan tenaga ahli Rp 150 juta (1 bulan)", biaya: "Rp 1,2 – 2,7 juta", tenor: "2 bulan" },
  { kebutuhan: "Sample produk Rp 50 juta (3 bulan)", biaya: "Rp 400 rb – 900 rb", tenor: "4 bulan" },
];

const faqs = [
  { q: "Apa itu OB 23 dan kenapa disebut demikian?", a: "OB 23 adalah singkatan dari Ordonansi Bea Pasal 23, dasar hukum lama yang mengatur fasilitas impor sementara di Indonesia. Istilah ini masih dipakai luas di lapangan meski payung hukumnya kini mengacu ke UU Kepabeanan dan PMK 259/PMK.04/2010. Intinya, OB 23 adalah izin memasukkan barang ke Indonesia untuk sementara waktu dengan pembebasan Bea Masuk, dengan syarat barang tersebut diekspor kembali dalam jangka waktu tertentu." },
  { q: "Berapa lama jangka waktu maksimal OB 23?", a: "Jangka waktu impor sementara umumnya mengikuti kebutuhan riil kegiatan (misalnya durasi pameran atau proyek), dan dapat diperpanjang sesuai persetujuan Bea Cukai. Praktiknya berkisar dari beberapa minggu hingga maksimal 3 tahun untuk kasus tertentu seperti alat berat proyek. Yang terpenting adalah selalu ajukan perpanjangan sebelum masa berlaku habis." },
  { q: "Apakah OB 23 sama dengan KITE?", a: "Tidak. OB 23 untuk barang yang tidak diolah dan wajib diekspor kembali dalam bentuk yang sama (misalnya alat pameran atau alat berat). KITE untuk bahan baku yang diimpor untuk diolah menjadi barang jadi, lalu hasil olahannya yang diekspor — bentuk barangnya berubah." },
  { q: "Kalau barang OB 23 rusak dan tidak bisa diekspor kembali, apa yang terjadi?", a: "Bea Cukai akan menagih Bea Masuk dan PPN yang sempat dibebaskan sesuai kondisi barang saat itu. Custom bond akan dicairkan sebesar kewajiban tersebut jika perusahaan tidak membayar langsung. Sebaiknya laporkan kondisi tersebut ke Bea Cukai secepatnya untuk mendapat arahan penyelesaian yang tepat." },
  { q: "Apakah perusahaan asing yang tidak punya badan hukum di Indonesia bisa mengajukan OB 23 sendiri?", a: "Umumnya perlu melalui pihak lokal — bisa berupa anak perusahaan, partner lokal, atau PPJK — yang bertindak sebagai Principal dan bertanggung jawab atas kewajiban kepabeanan di Indonesia, termasuk penerbitan custom bond." },
];

export default function PanduanOB23BatamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0] overflow-hidden pt-24 pb-16">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#c9a84c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-[#1a4fa0]/40 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/80 transition-colors">Blog</Link>
            <span>/</span>
            <Link href="/asuransi-surety-bond" className="hover:text-[#c9a84c] transition-colors">Surety Bond</Link>
            <span>/</span>
            <span className="text-white/70">Panduan OB 23 Batam</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Surety Bond & Kepabeanan
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Panduan OB 23:<br />
            <span className="text-gradient-gold">Impor Sementara</span><br />
            untuk Pameran & Proyek di Batam
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl">
            Cara mengurus OB 23 dari awal sampai selesai — dokumen, proses, kesalahan yang paling
            sering bikin denda, dan estimasi biaya custom bond untuk berbagai kebutuhan di Batam.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 5 Juli 2026</span>
            <span>•</span>
            <span>Tim Asuransi Batam</span>
            <span>•</span>
            <span>±9 menit baca</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Intro / case */}
        <div className="bg-[#faf8f3] border-l-4 border-[#c9a84c] rounded-r-2xl p-6 mb-12">
          <p className="text-[#0a1628] leading-relaxed">
            Sebuah kontraktor migas asal Korea mendapat proyek perawatan platform lepas pantai di
            perairan Batam selama 8 bulan. Mereka perlu membawa masuk unit peralatan khusus senilai{" "}
            <strong>Rp 3,5 miliar</strong> yang setelah proyek selesai akan dibawa kembali ke Korea.
            Karena tidak akan dipakai permanen di Indonesia, tim legal mereka mengajukan fasilitas{" "}
            <strong>OB 23 (Impor Sementara)</strong> dan menerbitkan custom bond sebagai jaminan
            kepada Bea Cukai — alih-alih membayar Bea Masuk penuh yang nilainya bisa ratusan juta rupiah.
          </p>
          <p className="text-[#475569] mt-3 text-sm leading-relaxed">
            Proyek selesai tepat waktu, peralatan diekspor kembali dengan dokumen PEB lengkap, dan
            custom bond ditutup tanpa ada pencairan sama sekali.
          </p>
        </div>

        {/* Section 1: Siapa yang pakai */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Siapa yang Umumnya Membutuhkan OB 23 di Batam?
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            Sebagai kawasan FTZ dengan lalu lintas barang tinggi, ada beberapa jenis kebutuhan yang
            paling sering memakai fasilitas ini di Batam. Untuk gambaran lebih luas soal jenis
            jaminan kepabeanan lainnya, lihat juga halaman{" "}
            <Link href="/asuransi-surety-bond/custom-bond" className="text-[#1a4fa0] font-semibold hover:underline">
              Custom Bond Batam
            </Link>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {penggunaOB23.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl border-2 border-[#e2e8f0] p-5 hover:border-[#c9a84c]/50 hover:shadow-lg transition-all card-hover">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-display font-bold text-[#0a1628] mb-2 text-sm">{p.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Kesalahan umum */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-3">
            Kesalahan Umum yang Bikin OB 23 Bermasalah — dan Cara Menghindarinya
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            Sebagian besar denda atau penolakan OB 23 sebenarnya bisa dihindari dengan persiapan yang tepat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {kesalahanUmum.map((item) => (
              <div key={item.label} className={`rounded-2xl p-5 border ${item.covered ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${item.covered ? "bg-green-500" : "bg-red-500"}`}>
                    <span className="text-white text-xs font-bold">{item.covered ? "✓" : "✗"}</span>
                  </div>
                  <div>
                    <p className={`font-display font-bold text-sm mb-1 ${item.covered ? "text-green-900" : "text-red-900"}`}>{item.label}</p>
                    <p className={`text-xs leading-relaxed ${item.covered ? "text-green-800" : "text-red-800"}`}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Estimasi biaya */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-5">
            Estimasi Biaya Custom Bond untuk OB 23
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">
            Biaya dihitung dari nilai jaminan (potensi Bea Masuk + PPN yang dibebaskan), bukan dari
            nilai barang itu sendiri. Untuk penjelasan lengkap soal jenis fasilitas kepabeanan
            lainnya, kunjungi halaman{" "}
            <Link href="/asuransi-surety-bond/custom-bond" className="text-[#1a4fa0] font-semibold hover:underline">
              Custom Bond Batam
            </Link>.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="gradient-navy">
                  <th className="text-left px-5 py-4 text-white/70 font-semibold">Kebutuhan</th>
                  <th className="text-left px-5 py-4 text-[#c9a84c] font-display font-bold">Estimasi Biaya Custom Bond</th>
                  <th className="text-left px-5 py-4 text-blue-300 font-display font-bold">Tenor Jaminan</th>
                </tr>
              </thead>
              <tbody>
                {biayaIlustrasi.map((row, i) => (
                  <tr key={row.kebutuhan} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                    <td className="px-5 py-3 font-medium text-[#0a1628]">{row.kebutuhan}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.biaya}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.tenor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#94a3b8] text-xs">* Ilustrasi umum. Biaya aktual ditentukan setelah underwriting dan tergantung nilai jaminan riil yang disyaratkan Bea Cukai.</p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <p className="text-[#8a6d1f] font-semibold uppercase tracking-widest text-sm mb-2">FAQ</p>
            <h2 className="font-display font-bold text-3xl text-[#0a1628]">Pertanyaan yang Sering Diajukan</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-display font-semibold text-[#0a1628] hover:text-[#1a4fa0] transition-colors list-none">
                  {faq.q}
                  <span className="ml-4 text-[#c9a84c] text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-[#475569] text-sm leading-relaxed border-t border-[#e2e8f0] pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-xl text-[#0a1628] mb-5">Artikel & Halaman Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Custom Bond Batam", href: "/asuransi-surety-bond/custom-bond", desc: "Halaman produk lengkap: OB 23, KITE, Kawasan Berikat, dan PPJK" },
              { title: "OB 23 vs KITE", href: "/blog/ob23-vs-kite-batam", desc: "Cara menentukan fasilitas yang tepat untuk bisnis Anda" },
              { title: "Custom Bond untuk Galangan Kapal", href: "/blog/custom-bond-galangan-kapal-batam", desc: "Kombinasi Kawasan Berikat dan OB 23 di industri shipyard" },
              { title: "Checklist Dokumen yang Sering Ditolak", href: "/blog/checklist-dokumen-custom-bond-ditolak", desc: "5 dokumen yang paling sering bikin pengajuan tertunda" },
              { title: "Asuransi Freight Forwarders Liability (FFL) Batam", href: "/blog/asuransi-freight-forwarders-liability-batam-panduan-lengkap", desc: "Proteksi PPJK dari kesalahan dokumen OB23/KITE yang merugikan klien" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group flex items-start gap-3 p-4 bg-[#faf8f3] rounded-xl border border-[#e2e8f0] hover:border-[#c9a84c]/50 hover:shadow-md transition-all">
                <Shield className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#0a1628] group-hover:text-[#1a4fa0] transition-colors text-sm">{link.title}</div>
                  <div className="text-[#475569] text-xs mt-0.5">{link.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="border-t border-[#e2e8f0] pt-8">
          <p className="text-[#94a3b8] text-xs leading-relaxed italic">
            Artikel ini disusun berdasarkan praktik pasar penjaminan kepabeanan di Indonesia dan
            pengalaman mendampingi perusahaan di Batam. Ketentuan teknis dapat berubah mengikuti
            regulasi Bea Cukai terbaru. Untuk kebutuhan spesifik, konsultasikan langsung dengan tim kami.
          </p>
        </div>
      </article>
      <CTASection />
    </>
  );
}
