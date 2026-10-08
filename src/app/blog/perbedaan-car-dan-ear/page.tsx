// app/blog/perbedaan-car-dan-ear/page.tsx
import type { Metadata } from "next";
import QuoteButton from "@/components/quote/QuoteButton";
import { generateSEO } from "@/lib/seo";
import {
  Building2,
  Wrench,
  Scale,
  Layers,
  AlertTriangle,
  MapPin,
  CheckCircle2,
  MessageCircleMore,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Perbedaan CAR dan EAR dalam Asuransi Engineering – Panduan Lengkap",
  description: "Bingung memilih antara Contractor All Risk (CAR) dan Erection All Risk (EAR)? Pelajari perbedaan mendasar keduanya, cakupan risiko, dan mana yang tepat untuk proyek Anda di Batam.",
  canonical: "https://asuransibatam.com/blog/perbedaan-car-dan-ear",
  languages: {
      id: "https://asuransibatam.com/blog/perbedaan-car-dan-ear",
      en: "https://asuransibatam.com/en/blog/difference-between-car-and-ear-insurance",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Perbedaan CAR dan EAR dalam Asuransi Engineering",
  description:
    "Panduan lengkap memahami perbedaan Contractor All Risk (CAR) dan Erection All Risk (EAR) untuk proyek konstruksi dan instalasi industri di Batam.",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  author: {
    "@type": "Person",
    name: "Rio",
    telephone: "+6281373336728",
  },
  publisher: {
    "@type": "InsuranceAgency",
    name: "Asuransi Batam – Rio",
    url: "https://asuransibatam.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://asuransibatam.com/blog/perbedaan-car-dan-ear",
  },
  inLanguage: "id-ID",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://asuransibatam.com/blog" },
      { "@type": "ListItem", position: 3, name: "Perbedaan CAR dan EAR", item: "https://asuransibatam.com/blog/perbedaan-car-dan-ear" },
    ],
  },
};

export default function BlogCARvsEARPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex gap-2">
            <li><a href="/" className="hover:underline">Beranda</a></li>
            <li>/</li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Perbedaan CAR dan EAR</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <p className="text-sm font-semibold text-[#c9a84c] uppercase tracking-widest mb-3">
            Asuransi Engineering
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Perbedaan CAR dan EAR dalam Asuransi Engineering: Mana yang Tepat untuk Proyek Anda?
          </h1>
          <p className="text-gray-500 text-sm">
            Ditulis oleh <span className="font-medium text-gray-700">Rio</span> &middot; 7 Mei 2026 &middot; 8 menit baca
          </p>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Di dunia proyek konstruksi dan instalasi industri, dua produk asuransi engineering paling sering muncul dalam dokumen tender: <strong>CAR (Contractor All Risk)</strong> dan <strong>EAR (Erection All Risk)</strong>. Keduanya terdengar mirip, bahkan sering tertukar. Padahal, salah memilih bisa berarti klaim Anda tidak tertanggung saat musibah datang.
          </p>
        </header>

        {/* Konten Utama */}
        <section className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-8">

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <Building2 className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Apa Itu CAR (Contractor All Risk)?
          </h2>
          <p>
            CAR adalah produk asuransi yang dirancang khusus untuk melindungi <strong>proyek konstruksi sipil</strong> — segala sesuatu yang dibangun dari tanah ke atas menggunakan material beton, baja struktural, kayu, atau bata. Yang termasuk cakupan CAR bukan hanya gedung dan rumah, tetapi juga jembatan, jalan, terowongan, pelabuhan, bendungan, dan fasilitas publik lainnya.
          </p>
          <p>
            Intinya: jika proyek Anda melibatkan <em>pekerjaan sipil</em> — memasang pondasi, membangun struktur, atau mengerjakan infrastruktur — maka CAR adalah pilihan yang tepat.
          </p>
          <p>
            Polis CAR umumnya mencakup dua seksi utama. Seksi pertama menanggung <strong>kerusakan fisik</strong> pada pekerjaan konstruksi itu sendiri, termasuk material, alat, dan peralatan di lokasi proyek. Seksi kedua menanggung <strong>tanggung jawab hukum pihak ketiga</strong> — misalnya, jika material bangunan jatuh dan merusak kendaraan warga sekitar, atau pekerja proyek tidak sengaja merusak pipa air milik tetangga.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <Wrench className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Apa Itu EAR (Erection All Risk)?
          </h2>
          <p>
            EAR hadir untuk kebutuhan yang berbeda. Produk ini dirancang melindungi proyek yang bersifat <strong>mekanikal dan elektrikal</strong> — seperti pemasangan mesin pabrik, instalasi turbin, perakitan peralatan industri berat, pembangunan pembangkit listrik, hingga pemasangan sistem pipa (piping) dalam fasilitas industri.
          </p>
          <p>
            Jika CAR berbicara tentang "membangun", maka EAR berbicara tentang "memasang dan merakit". Proyek yang tepat menggunakan EAR adalah pabrik pengolahan, pembangkit listrik tenaga gas atau uap, kilang minyak, fasilitas water treatment, dan proyek offshore tertentu.
          </p>
          <p>
            EAR juga mencakup dua seksi serupa dengan CAR — kerusakan fisik pada mesin/peralatan yang sedang dipasang, dan tanggung jawab terhadap pihak ketiga. Yang membedakan adalah adanya opsi tambahan untuk menanggung <strong>Delay in Start-Up (DSU)</strong> — kerugian finansial akibat keterlambatan operasional pabrik karena kerusakan yang tertanggung.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <Scale className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Perbandingan Langsung: CAR vs EAR
          </h2>

          {/* Tabel Perbandingan */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#0a1628] text-white font-semibold">
                <tr>
                  <th className="px-5 py-4">Aspek</th>
                  <th className="px-5 py-4">CAR</th>
                  <th className="px-5 py-4">EAR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Jenis Pekerjaan", "Konstruksi sipil & bangunan", "Instalasi mesin & peralatan industri"],
                  ["Contoh Proyek", "Gedung, jembatan, jalan, pelabuhan", "Pabrik, pembangkit listrik, kilang, water treatment"],
                  ["Material Utama", "Beton, baja struktural, bata", "Mesin, turbin, pipa, panel listrik"],
                  ["Pihak yang Butuh", "Kontraktor sipil, developer", "Kontraktor M&E, vendor mesin, operator pabrik"],
                  ["Opsi DSU (Delay in Start-Up)", "Tidak tersedia", "Tersedia sebagai rider tambahan"],
                  ["Periode Pemeliharaan", "Tersedia (biasanya 12–24 bulan)", "Tersedia (biasanya 12–24 bulan)"],
                  ["Tanggung Jawab Pihak Ketiga", "Tersedia (Seksi II)", "Tersedia (Seksi II)"],
                ].map(([aspek, car, ear]) => (
                  <tr key={aspek} className="bg-white hover:bg-[#faf8f3] transition">
                    <td className="px-5 py-3 font-medium text-gray-800">{aspek}</td>
                    <td className="px-5 py-3 text-gray-600">{car}</td>
                    <td className="px-5 py-3 text-gray-600">{ear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <Layers className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Bagaimana Jika Proyek Saya Mengandung Keduanya?
          </h2>
          <p>
            Ini adalah pertanyaan yang sangat umum, terutama untuk proyek skala besar di Batam — misalnya pembangunan fasilitas industri yang melibatkan konstruksi gedung pabrik <em>sekaligus</em> instalasi mesin di dalamnya.
          </p>
          <p>
            Dalam kasus seperti ini, ada dua pendekatan yang umum digunakan:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Polis terpisah</strong> — satu polis CAR untuk pekerjaan sipilnya, satu polis EAR untuk pekerjaan instalasinya. Batas tanggung jawab antara kontraktor sipil dan kontraktor M&E juga lebih jelas.
            </li>
            <li>
              <strong>Combined Engineering Policy</strong> — beberapa penanggung menawarkan satu polis gabungan yang mencakup kedua jenis pekerjaan. Ini lebih praktis secara administrasi, namun perlu kehati-hatian dalam mendefinisikan cakupan agar tidak ada celah (gap) di antara keduanya.
            </li>
          </ol>
          <p>
            Pilihan terbaik bergantung pada struktur kontrak, siapa yang memegang polis (owner atau kontraktor), dan kompleksitas proyek. Konsultasikan dengan broker atau agen Anda sebelum memutuskan.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <AlertTriangle className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Kesalahan Umum yang Sering Terjadi di Lapangan
          </h2>
          <p>
            Berdasarkan pengalaman menangani klaim proyek di Batam, ada beberapa kesalahan yang berulang terjadi:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Menggunakan CAR untuk proyek instalasi mesin.</strong> Akibatnya, saat terjadi kerusakan pada mesin yang sedang dipasang, klaim ditolak karena mesin bukan objek yang dicakup polis CAR standar.
            </li>
            <li>
              <strong>Nilai pertanggungan tidak mencerminkan nilai kontrak sesungguhnya.</strong> Banyak yang mengasuransikan hanya sebagian nilai proyek untuk menekan premi. Ini berbahaya karena prinsip <em>average</em> akan berlaku saat klaim, sehingga ganti rugi yang diterima ikut terpotong secara proporsional.
            </li>
            <li>
              <strong>Lupa memperpanjang polis saat proyek mundur jadwal.</strong> Polis CAR/EAR memiliki tanggal berakhir. Jika proyek molor dan polis tidak diperpanjang, periode tanpa perlindungan menjadi risiko tersembunyi yang mahal.
            </li>
            <li>
              <strong>Tidak memasukkan periode pemeliharaan (maintenance period).</strong> Setelah konstruksi selesai, tanggung jawab kontraktor terhadap pekerjaan yang baru diserahterimakan masih berlanjut. Periode pemeliharaan dalam polis menjamin bahwa kerusakan yang muncul setelah serah terima tetap tertanggung.
            </li>
          </ul>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <MapPin className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Relevansi untuk Proyek di Batam
          </h2>
          <p>
            Batam memiliki karakteristik unik sebagai kota industri sekaligus kawasan perdagangan bebas. Proyek-proyek yang berjalan di sini sangat bervariasi — dari pembangunan ruko dan pergudangan, hingga fasilitas galangan kapal, pabrik elektronik, dan kawasan industri terpadu.
          </p>
          <p>
            Beberapa konteks penting yang perlu dipertimbangkan saat membeli CAR atau EAR di Batam:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Kondisi tanah di beberapa wilayah Batam bervariasi — ada yang berbukit dan ada yang rawa. Risiko subsiden dan banjir perlu dipertimbangkan dalam pengaturan polis.</li>
            <li>Proyek di kawasan industri seperti Batamindo, Kabil, atau Tanjung Uncang sering melibatkan subkontraktor asing. Pastikan polis mencakup seluruh pihak yang terlibat (named insured atau unnamed subcontractors).</li>
            <li>Kedekatan dengan laut meningkatkan risiko korosi dan dampak cuaca ekstrem. Ini perlu dideklarasikan dengan jelas agar tidak menjadi alasan penolakan klaim.</li>
          </ul>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <CheckCircle2 className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Kesimpulan
          </h2>
          <p>
            CAR dan EAR bukan produk yang bisa saling menggantikan begitu saja. Keduanya dirancang untuk jenis pekerjaan yang berbeda, dan memilih yang salah berarti Anda menanggung risiko tanpa perlindungan yang sesungguhnya.
          </p>
          <p>
            Aturan sederhananya: jika proyek Anda membangun struktur fisik dari nol, pilih <strong>CAR</strong>. Jika proyek Anda memasang, merakit, atau mengintegrasikan mesin dan peralatan industri, pilih <strong>EAR</strong>. Jika keduanya ada dalam satu proyek, diskusikan dengan ahlinya untuk menentukan pendekatan terbaik.
          </p>

        </section>

        {/* CTA */}
        <div className="mt-12 bg-[#0a1628] rounded-2xl p-8 text-center not-prose">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 mb-3">
            <MessageCircleMore className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          <h3 className="text-xl font-bold text-white mb-2">Konsultasikan Proyek Anda</h3>
          <p className="text-white/70 mb-5">
            Tidak yakin CAR atau EAR yang tepat untuk proyek Anda? Hubungi Rio sekarang untuk konsultasi gratis.
          </p>
          <QuoteButton cluster="engineering" lang="id" variant="gold" className="!rounded-xl !px-8 !py-3" />
          <p className="text-sm text-white/40 mt-3">0813-7333-6728 &middot; Rio, Agen Asuransi Batam</p>
        </div>

        {/* Internal Links */}
        <div className="mt-10 border-t pt-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Artikel Terkait</p>
          <ul className="space-y-2">
            <li>
              <a href="/asuransi-engineering/contractor-all-risk" className="text-[#1a4fa0] hover:text-[#c9a84c] transition-colors font-medium">
                → Contractor All Risk (CAR) – Cakupan & Manfaat Lengkap
              </a>
            </li>
            <li>
              <a href="/asuransi-engineering/erection-all-risk" className="text-[#1a4fa0] hover:text-[#c9a84c] transition-colors font-medium">
                → Erection All Risk (EAR) – Proteksi Instalasi Industri
              </a>
            </li>
            <li>
              <a href="/blog/cara-klaim-asuransi-car" className="text-[#1a4fa0] hover:text-[#c9a84c] transition-colors font-medium">
                → Cara Klaim Asuransi CAR saat Proyek Mengalami Kerusakan
              </a>
            </li>
          </ul>
        </div>

      </article>
    
      {/* Related Links */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
              <ul className="space-y-2">
                <li><a href="/asuransi-engineering/contractor-all-risk" className="text-sm text-blue-700 hover:underline font-medium">→ Contractor All Risk Batam</a></li>
                <li><a href="/asuransi-engineering/erection-all-risk" className="text-sm text-blue-700 hover:underline font-medium">→ Erection All Risk Batam</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
              <ul className="space-y-2">
                <li><a href="/blog/cara-klaim-asuransi-car" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Klaim Asuransi CAR</a></li>
                <li><a href="/blog/asuransi-proyek-konstruksi-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Proyek Konstruksi Batam</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  );
          }
