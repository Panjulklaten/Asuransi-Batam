// app/blog/asuransi-proyek-konstruksi-batam/page.tsx
import type { Metadata } from "next";
import QuoteButton from "@/components/quote/QuoteButton";
import { generateSEO } from "@/lib/seo";
import {
  AlertTriangle,
  Layers,
  ClipboardCheck,
  CloudRain,
  Mountain,
  Factory,
  Waves,
  Wrench,
  ListChecks,
  Wallet,
  CheckCircle2,
  MessageCircleMore,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Proyek Konstruksi Batam – Panduan Lengkap untuk Kontraktor",
  description: "Panduan lengkap asuransi proyek konstruksi di Batam: jenis polis yang dibutuhkan, persyaratan tender, risiko khas kawasan industri Batam, dan cara memilih perlindungan yang tepat.",
  canonical: "https://asuransibatam.com/blog/asuransi-proyek-konstruksi-batam",
  languages: {
      id: "https://asuransibatam.com/blog/asuransi-proyek-konstruksi-batam",
      en: "https://asuransibatam.com/en/blog/construction-project-insurance-batam",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Asuransi Proyek Konstruksi Batam – Panduan Lengkap untuk Kontraktor",
  description:
    "Panduan lengkap memilih dan menggunakan asuransi proyek konstruksi di Batam, termasuk jenis polis, persyaratan tender, dan risiko spesifik kawasan industri.",
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
    "@id": "https://asuransibatam.com/blog/asuransi-proyek-konstruksi-batam",
  },
  inLanguage: "id-ID",
  about: {
    "@type": "Place",
    name: "Batam",
    addressRegion: "Kepulauan Riau",
    addressCountry: "ID",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransibatam.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://asuransibatam.com/blog" },
      { "@type": "ListItem", position: 3, name: "Asuransi Proyek Konstruksi Batam", item: "https://asuransibatam.com/blog/asuransi-proyek-konstruksi-batam" },
    ],
  },
};

const risikoKhas = [
  {
    icon: CloudRain,
    judul: "Curah Hujan Tinggi & Banjir Lokal",
    isi: "Batam memiliki curah hujan rata-rata di atas 2.000 mm per tahun. Di kawasan yang belum sepenuhnya terdrainase dengan baik, proyek galian terbuka dan pondasi bangunan sangat rentan tergenang. Pastikan polis CAR Anda mencakup kerusakan akibat banjir dan air tanah berlebih.",
  },
  {
    icon: Mountain,
    judul: "Kondisi Tanah Berbukit & Tidak Stabil",
    isi: "Topografi Batam yang berbukit membuat banyak proyek harus melalui pekerjaan cut and fill yang ekstensif. Risiko longsoran tanah selama pengerjaan adalah nyata, terutama pada musim hujan. Ini perlu dinyatakan secara eksplisit dalam polis agar tidak masuk kategori pengecualian 'kerusakan akibat kondisi tanah yang sudah diketahui'.",
  },
  {
    icon: Factory,
    judul: "Kedekatan dengan Fasilitas Industri Aktif",
    isi: "Banyak proyek baru di Batam berada di dalam atau berdekatan dengan kawasan industri yang sedang beroperasi — Batamindo, Kabil, Muka Kuning. Risiko kerusakan pada fasilitas aktif di sekitar area proyek (pipa gas, kabel listrik tegangan tinggi) menjadikan cakupan tanggung jawab pihak ketiga (third-party liability) sangat krusial.",
  },
  {
    icon: Waves,
    judul: "Proyek Dekat Pesisir & Galangan",
    isi: "Banyak proyek di Batam berdiri di dekat pantai atau di kawasan galangan kapal. Korosi akibat udara laut mempercepat kerusakan material konstruksi. Beberapa penanggung mewajibkan deklarasi eksplisit untuk risiko ini agar klaim tidak tertolak dengan dalih non-disclosure.",
  },
  {
    icon: Wrench,
    judul: "Subkontraktor Asing & Multi-tier",
    isi: "Proyek berskala besar di Batam kerap melibatkan subkontraktor dari Singapura, Malaysia, atau negara lain. Struktur tanggung jawab yang berlapis-lapis ini rawan menimbulkan grey area dalam klaim. Pastikan polis Anda secara eksplisit mencakup seluruh subkontraktor, baik yang named maupun unnamed.",
  },
];

const jenisPolis = [
  {
    nama: "Contractor All Risk (CAR)",
    cocokUntuk: "Proyek sipil: gedung, jalan, jembatan, pelabuhan, pergudangan",
    catatan: "Polis utama yang paling umum diminta dalam dokumen tender di Batam.",
  },
  {
    nama: "Erection All Risk (EAR)",
    cocokUntuk: "Instalasi mesin, pabrik, pembangkit listrik, fasilitas pengolahan",
    catatan: "Wajib untuk proyek mekanikal-elektrikal. Sering dikombinasikan dengan CAR pada proyek mixed-use.",
  },
  {
    nama: "Contractor's Plant & Machinery (CPM)",
    cocokUntuk: "Alat berat: excavator, crane, bulldozer yang digunakan di proyek",
    catatan: "Terpisah dari CAR. Melindungi nilai peralatan kontraktor selama masa proyek.",
  },
  {
    nama: "Third-Party Liability (TPL)",
    cocokUntuk: "Tanggung jawab hukum terhadap kerusakan properti atau cedera orang di luar proyek",
    catatan: "Bisa menjadi Seksi II dalam CAR/EAR, atau berdiri sebagai polis terpisah.",
  },
  {
    nama: "Professional Indemnity (PI)",
    cocokUntuk: "Konsultan desain, arsitek, insinyur sipil",
    catatan: "Melindungi dari klaim akibat kesalahan desain atau kelalaian profesional. Semakin sering disyaratkan dalam tender pemerintah.",
  },
];

export default function BlogKonstruksiBatamPage() {
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
            <li className="text-gray-800 font-medium">Asuransi Proyek Konstruksi Batam</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <p className="text-sm font-semibold text-[#c9a84c] uppercase tracking-widest mb-3">
            Asuransi Engineering · Lokal Batam
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Asuransi Proyek Konstruksi di Batam: Panduan Lengkap untuk Kontraktor dan Developer
          </h1>
          <p className="text-gray-500 text-sm">
            Ditulis oleh <span className="font-medium text-gray-700">Rio</span> &middot; 7 Mei 2026 &middot; 10 menit baca
          </p>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Batam bukan kota konstruksi biasa. Statusnya sebagai kawasan perdagangan bebas, kedekatannya dengan Singapura, dan pertumbuhan kawasan industrinya yang terus berlanjut menciptakan lanskap proyek yang unik — dengan risiko yang juga unik. Asuransi proyek konstruksi yang bekerja di Jakarta belum tentu dikonfigurasi dengan benar untuk Batam.
          </p>
        </header>

        <section className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-10">

          {/* Mengapa Penting */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <AlertTriangle className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Mengapa Asuransi Konstruksi Bukan Sekadar Formalitas Tender
          </h2>
          <p>
            Satu kesalahpahaman yang masih sering ditemui di lapangan: kontraktor membeli polis CAR semata-mata untuk memenuhi persyaratan dokumen tender, lalu menyimpannya di laci dan melupakan isinya. Padahal, polis yang dibeli terburu-buru dan tanpa pemahaman mendalam sering kali mengandung celah pertanggungan yang baru terlihat saat klaim sudah di tangan.
          </p>
          <p>
            Nilai proyek konstruksi di Batam bervariasi dari ratusan juta hingga triliunan rupiah. Satu insiden kebakaran di gudang material, satu crane ambruk, atau satu kali banjir besar yang menenggelamkan galian pondasi bisa melenyapkan margin keuntungan proyek seumur hidup — bahkan memaksa kontraktor menanggung kerugian pribadi jika asuransinya tidak benar-benar bekerja.
          </p>

          {/* Jenis Polis */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <Layers className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Jenis Asuransi yang Dibutuhkan dalam Proyek Konstruksi
          </h2>
          <p>
            Tidak ada satu polis tunggal yang cukup untuk semua kebutuhan proyek. Berikut peta produk asuransi yang relevan dan kapan masing-masing dibutuhkan:
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#0a1628] text-white font-semibold">
                <tr>
                  <th className="px-5 py-4">Jenis Polis</th>
                  <th className="px-5 py-4">Cocok Untuk</th>
                  <th className="px-5 py-4">Catatan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {jenisPolis.map((p) => (
                  <tr key={p.nama} className="bg-white hover:bg-[#faf8f3] transition">
                    <td className="px-5 py-3 font-semibold text-gray-800">{p.nama}</td>
                    <td className="px-5 py-3 text-gray-600">{p.cocokUntuk}</td>
                    <td className="px-5 py-3 text-gray-500 text-xs">{p.catatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Persyaratan Tender */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <ClipboardCheck className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Asuransi dalam Persyaratan Tender Proyek di Batam
          </h2>
          <p>
            Dalam praktiknya, persyaratan asuransi dalam dokumen tender di Batam — baik tender pemerintah maupun swasta — semakin detail dan spesifik. Beberapa hal yang kerap disyaratkan:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>CAR dengan nilai pertanggungan minimum</strong> yang setara dengan nilai kontrak. Beberapa owner mensyaratkan nilai pertanggungan lebih tinggi untuk mencakup biaya pembersihan puing (debris removal).
            </li>
            <li>
              <strong>Third-party liability minimum</strong> — angka yang umum untuk proyek menengah di Batam adalah Rp 1–5 miliar per kejadian. Proyek di kawasan industri atau dekat fasilitas publik bisa mensyaratkan lebih tinggi.
            </li>
            <li>
              <strong>Penanggung yang disetujui (approved insurers)</strong> — beberapa BUMN dan developer besar hanya menerima polis dari penanggung yang ada dalam daftar approved mereka. Pastikan Anda mengecek ini sebelum membeli.
            </li>
            <li>
              <strong>Polis atas nama pemilik proyek (owner) sebagai additional insured</strong> — artinya pemilik proyek juga tercantum dalam polis, bukan hanya kontraktor. Ini adalah standar di banyak proyek komersial skala menengah ke atas.
            </li>
            <li>
              <strong>Bukti pembayaran premi sebelum penandatanganan kontrak</strong> — bukan hanya salinan polis, beberapa owner mensyaratkan bukti bahwa premi sudah benar-benar dibayar, bukan sekadar polis yang diterbitkan.
            </li>
          </ul>

          {/* Risiko Khas Batam */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <AlertTriangle className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Risiko Spesifik Proyek Konstruksi di Batam
          </h2>
          <p>
            Ini adalah bagian yang paling sering diabaikan saat membeli asuransi konstruksi di Batam. Risiko-risiko berikut adalah nyata dan spesifik pada konteks lokal — dan semuanya memerlukan deklarasi atau konfigurasi polis yang tepat agar tidak menjadi bumerang saat klaim.
          </p>

          <div className="grid gap-5">
            {risikoKhas.map((r) => (
              <div key={r.judul} className="flex gap-4 p-5 rounded-2xl bg-[#faf8f3] border border-[#eee3cc]">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#0a1628] flex-shrink-0">
                  <r.icon className="w-[20px] h-[20px] text-[#c9a84c]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{r.judul}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.isi}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cara Memilih */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <ListChecks className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Cara Memilih Asuransi Konstruksi yang Tepat di Batam
          </h2>
          <p>
            Membeli polis CAR atau EAR bukan sekadar membandingkan harga premi. Berikut kriteria yang perlu Anda evaluasi:
          </p>

          <div className="space-y-4">
            {[
              {
                no: "1",
                judul: "Pastikan nilai pertanggungan mencerminkan nilai kontrak penuh",
                isi: "Termasuk biaya material, upah tenaga kerja, peralatan, dan idealnya biaya pembersihan puing. Underinsurance adalah jebakan paling mahal dalam asuransi konstruksi.",
              },
              {
                no: "2",
                judul: "Baca klausula pengecualian dengan cermat",
                isi: "Tanyakan secara spesifik: apakah banjir ditanggung? Apakah longsor ditanggung? Apakah kerusakan akibat getaran (vibration) dari pekerjaan konstruksi di dekatnya ditanggung? Jangan berasumsi bahwa 'all risk' berarti benar-benar semua risiko.",
              },
              {
                no: "3",
                judul: "Sesuaikan masa berlaku polis dengan jadwal proyek plus buffer",
                isi: "Proyek konstruksi hampir selalu molor dari jadwal semula. Beli polis dengan masa berlaku yang sedikit lebih panjang dari target penyelesaian, atau pastikan mudah diperpanjang jika proyek terlambat.",
              },
              {
                no: "4",
                judul: "Sertakan periode pemeliharaan",
                isi: "Jangan lewatkan periode pemeliharaan (defects liability period) dalam polis. Setelah serah terima, kontraktor masih bertanggung jawab atas kerusakan yang muncul — periode pemeliharaan dalam polis memastikan perlindungan ini.",
              },
              {
                no: "5",
                judul: "Gunakan agen atau broker yang paham konteks Batam",
                isi: "Agen yang berbasis di Batam dan sudah menangani proyek lokal memahami karakteristik risiko setempat — termasuk kawasan mana yang rawan banjir, rekanan loss adjuster mana yang responsif, dan penanggung mana yang terkenal lancar saat klaim.",
              },
            ].map((item) => (
              <div key={item.no} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0a1628] text-[#c9a84c] font-display font-bold text-sm flex items-center justify-center">
                  {item.no}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.judul}</p>
                  <p className="text-gray-600 mt-1 text-sm">{item.isi}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Berapa Biaya Premi */}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <Wallet className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Berapa Kisaran Premi CAR di Batam?
          </h2>
          <p>
            Premi CAR dihitung berdasarkan persentase dari nilai kontrak proyek. Tidak ada angka baku karena setiap proyek memiliki profil risiko yang berbeda, tetapi sebagai referensi umum:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Proyek bangunan komersial standar: <strong>0,15% – 0,35%</strong> dari nilai kontrak per tahun</li>
            <li>Proyek infrastruktur (jalan, jembatan): <strong>0,20% – 0,45%</strong> dari nilai kontrak</li>
            <li>Proyek di kawasan berisiko tinggi (dekat pantai, tanah tidak stabil): bisa lebih tinggi dari range di atas</li>
          </ul>
          <p>
            Untuk proyek senilai Rp 5 miliar, premi CAR bisa berkisar antara Rp 7,5 juta hingga Rp 22,5 juta per tahun — angka yang sangat kecil dibanding potensi kerugian yang bisa ditanggung. Yang lebih penting dari angka premi adalah memastikan polis benar-benar mencakup risiko yang relevan dengan proyek Anda.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
              <CheckCircle2 className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
            </span>
            Kesimpulan
          </h2>
          <p>
            Asuransi proyek konstruksi di Batam bukan produk yang bisa dibeli asal-asalan hanya demi memenuhi syarat tender. Karakteristik kota ini — topografi berbukit, curah hujan tinggi, kawasan industri padat, dan keterlibatan subkontraktor asing — menciptakan profil risiko yang spesifik dan perlu dikonfigurasi dengan cermat dalam polis.
          </p>
          <p>
            Sebelum proyek Anda dimulai, pastikan Anda duduk bersama agen atau broker yang benar-benar memahami konteks Batam, mendiskusikan cakupan yang dibutuhkan, dan membeli polis yang memang dirancang untuk melindungi — bukan sekadar memenuhi persyaratan dokumen.
          </p>

        </section>

        {/* CTA */}
        <div className="mt-12 bg-[#0a1628] rounded-2xl p-8 text-center not-prose">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 mb-3">
            <MessageCircleMore className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          <h3 className="text-xl font-bold text-white mb-2">Konsultasi Asuransi Proyek di Batam</h3>
          <p className="text-white/70 mb-5">
            Sedang merencanakan atau menjalankan proyek konstruksi di Batam? Hubungi Rio untuk konsultasi gratis dan penawaran polis yang sesuai dengan kebutuhan proyek Anda.
          </p>
          <QuoteButton cluster="engineering" lang="id" variant="gold" className="!rounded-xl !px-8 !py-3" />
          <p className="text-sm text-white/40 mt-3">0813-7333-6728 &middot; Rio, Agen Asuransi Batam</p>
        </div>

        {/* Internal Links */}
        <div className="mt-10 border-t pt-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Artikel & Halaman Terkait</p>
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
              <a href="/blog/perbedaan-car-dan-ear" className="text-[#1a4fa0] hover:text-[#c9a84c] transition-colors font-medium">
                → Perbedaan CAR dan EAR: Panduan Memilih
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
    </>
  );
          }

