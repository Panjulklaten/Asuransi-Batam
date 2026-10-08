import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { XCircle, ListChecks, Lightbulb, HelpCircle, Scale } from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Cara Klaim Asuransi Mobil di Batam – Panduan Lengkap Agar Tidak Ditolak",
  description: "Proses klaim asuransi mobil di Batam sering gagal karena dokumen kurang atau prosedur salah. Pelajari langkah klaim yang benar, dokumen wajib, dan tips agar klaim Anda disetujui cepat.",
  canonical: "https://asuransibatam.com/blog/cara-klaim-asuransi-mobil-batam",
  languages: {
      id: "https://asuransibatam.com/blog/cara-klaim-asuransi-mobil-batam",
      en: "https://asuransibatam.com/en/blog/how-to-claim-car-insurance-batam",
    },
});

// Article schema (E-E-A-T: authorship & publisher signal)
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Klaim Asuransi Mobil di Batam Agar Tidak Ditolak",
  description: "Proses klaim asuransi mobil di Batam sering gagal karena dokumen kurang atau prosedur salah. Panduan lengkap langkah klaim yang benar dan dokumen wajib.",
  datePublished: "2026-04-30",
  dateModified: "2026-04-30",
  author: { "@type": "Person", name: "Rio", jobTitle: "Praktisi Asuransi", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/blog/cara-klaim-asuransi-mobil-batam" },
};

// FAQ schema (wajib — disuntikkan terpisah dari Article schema)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa lama batas waktu melaporkan klaim asuransi mobil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hampir semua polis mewajibkan laporan klaim dalam 3–5 hari kerja setelah kejadian. Melewati batas waktu ini bisa menjadi alasan penolakan klaim oleh perusahaan asuransi.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah laporan polisi selalu wajib untuk klaim asuransi mobil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak selalu. Untuk kerusakan ringan seperti baret atau penyok kecil, laporan polisi umumnya tidak wajib. Namun untuk tabrakan yang melibatkan pihak lain, kerusakan berat, kehilangan kendaraan, atau kejadian dengan korban, laporan polisi wajib dilampirkan.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses survei dan persetujuan klaim asuransi mobil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Survei oleh pihak asuransi biasanya dilakukan dalam 1–2 hari kerja setelah dokumen diterima. Jika dokumen lengkap dan survei lancar, persetujuan klaim umumnya keluar dalam 3–7 hari kerja.",
      },
    },
    {
      "@type": "Question",
      name: "Apa yang harus dilakukan jika klaim asuransi mobil ditolak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anda berhak menerima surat penolakan tertulis beserta alasannya, dan bisa mengajukan keberatan (banding internal) dengan bukti tambahan. Jika tidak menemukan titik temu, sengketa bisa diselesaikan melalui LAPS SJK yang diawasi OJK tanpa biaya untuk nasabah.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa biaya own risk pada klaim asuransi mobil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Biaya own risk (risiko sendiri) yang harus dibayar nasabah saat klaim disetujui umumnya berkisar Rp 300.000 hingga Rp 500.000 per kejadian, sesuai yang tercantum dalam polis.",
      },
    },
  ],
};

export default function ArticleAsuransiMobilBatamPage() {
  return (
    <ArticleLayout cluster="vehicle"
      title="Cara Klaim Asuransi Mobil di Batam: Langkah Demi Langkah Agar Tidak Ditolak"
      description="Klaim ditolak bukan berarti asuransi Anda buruk — tapi bisa jadi karena prosedur yang terlewat. Ini panduan lengkapnya."
      date="30 April 2026"
      category="Kendaraan"
      readTime="8 menit"
      breadcrumbs={[
        { label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" },
        { label: "Cara Klaim Asuransi Mobil Batam", href: "/blog/cara-klaim-asuransi-mobil-batam" },
      ]}
      schema={articleSchema}
    >
      {/* ArticleLayout hanya menerima satu object schema (Article).
          FAQ schema disuntikkan langsung di sini agar Rich Result FAQ tetap tampil. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">
        Pendahuluan
      </p>
      <p>
        Banyak pemilik kendaraan di Batam yang baru menyadari pentingnya memahami prosedur klaim justru
        setelah mengalami kejadian — kecelakaan, banjir, atau kendaraan hilang. Padahal, kesalahan kecil
        dalam proses klaim bisa berujung pada penolakan, meski polis Anda aktif dan premi sudah dibayar lunas.
        Hal ini juga erat kaitannya dengan jenis cakupan yang Anda pilih — apakah{" "}
        <Link href="/blog/perbedaan-all-risk-dan-tlo" className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors">
          All Risk atau TLO
        </Link>
        , karena keduanya menentukan jenis kejadian apa saja yang bisa diklaim. Artikel ini membahas secara tuntas cara klaim asuransi mobil yang benar agar prosesnya lancar
        dan disetujui tanpa hambatan.
      </p>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Penyebab Penolakan
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="flex items-center justify-center gap-3 text-center">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
          <XCircle className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
        </span>
        Mengapa Klaim Asuransi Mobil Bisa Ditolak?
      </h2>
      <p>
        Sebelum masuk ke prosedur, penting untuk memahami penyebab umum klaim ditolak oleh perusahaan asuransi:
      </p>
      <ul>
        <li><strong>Laporan terlambat:</strong> Hampir semua polis mewajibkan laporan klaim dalam 3–5 hari kerja setelah kejadian. Melewati batas ini bisa menjadi alasan penolakan.</li>
        <li><strong>Dokumen tidak lengkap:</strong> SIM tidak berlaku saat kejadian, STNK mati, atau tidak ada laporan polisi untuk kerusakan berat adalah hal yang sering terlewat.</li>
        <li><strong>Kejadian tidak tercakup polis:</strong> Misalnya klaim banjir padahal tidak ada perluasan banjir dalam polis, atau kerusakan akibat kelalaian yang dikecualikan. Detail cakupan setiap jenis polis bisa dicek di halaman{" "}
          <Link href="/asuransi-kendaraan" className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors">
            produk asuransi kendaraan
          </Link>{" "}
          kami.
        </li>
        <li><strong>Informasi tidak akurat saat mendaftar:</strong> Jika data kendaraan atau penggunaan yang didaftarkan berbeda dengan kenyataan, klaim bisa dibatalkan.</li>
      </ul>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Langkah Demi Langkah
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="flex items-center justify-center gap-3 text-center">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
          <ListChecks className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
        </span>
        Langkah-Langkah Klaim Asuransi Mobil yang Benar
      </h2>
      <p className="text-center">
        Ikuti urutan ini dengan cermat agar proses klaim berjalan mulus dari awal hingga kendaraan Anda selesai diperbaiki.
      </p>

      <div className="not-prose mt-10 mb-4">
        {/* Langkah 1 */}
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-display text-base font-bold text-[#c9a84c]">
              01
            </span>
            <span className="mt-1 w-px flex-1 bg-[#e2e8f0]" style={{ minHeight: "2.5rem" }} />
          </div>
          <div className="pb-9 prose-p:my-3">
            <h3 className="mt-1.5 mb-3">Dokumentasikan Kejadian Segera di Lokasi</h3>
            <p>
              Segera setelah terjadi kecelakaan atau kerusakan, jangan panik dan langsung pindahkan kendaraan.
              Ambil foto atau video dari berbagai sudut — tampak depan, belakang, samping, dan bagian yang rusak.
              Dokumentasi visual ini adalah bukti pertama yang akan diminta surveyor asuransi. Jika ada
              kendaraan lain yang terlibat, catat nomor polisinya dan minta keterangan saksi jika memungkinkan.
            </p>
          </div>
        </div>

        {/* Langkah 2 */}
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-display text-base font-bold text-[#c9a84c]">
              02
            </span>
            <span className="mt-1 w-px flex-1 bg-[#e2e8f0]" style={{ minHeight: "2.5rem" }} />
          </div>
          <div className="pb-9 prose-p:my-3">
            <h3 className="mt-1.5 mb-3">Laporkan ke Polisi (Jika Diperlukan)</h3>
            <p>
              Untuk kerusakan ringan seperti baret atau penyok kecil di area parkir, surat polisi umumnya
              tidak wajib. Namun untuk kasus-kasus berikut, laporan polisi <strong>wajib dilampirkan:</strong>
            </p>
            <ul>
              <li>Tabrakan yang melibatkan kendaraan atau properti pihak lain</li>
              <li>Kerusakan berat akibat kecelakaan lalu lintas</li>
              <li>Kehilangan kendaraan (pencurian) — harus ada laporan ke Polres setempat</li>
              <li>Kejadian yang menimbulkan korban jiwa atau luka</li>
            </ul>
            <p>
              Di Batam, Anda bisa melapor ke Polres Barelang atau Polsek terdekat dari lokasi kejadian.
              Minta salinan Surat Tanda Penerimaan Laporan (STPL) sebagai bukti resmi.
            </p>
          </div>
        </div>

        {/* Langkah 3 */}
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-display text-base font-bold text-[#c9a84c]">
              03
            </span>
            <span className="mt-1 w-px flex-1 bg-[#e2e8f0]" style={{ minHeight: "2.5rem" }} />
          </div>
          <div className="pb-9 prose-p:my-3">
            <h3 className="mt-1.5 mb-3">Hubungi Agen atau Perusahaan Asuransi Anda</h3>
            <p>
              Setelah dokumentasi dan laporan polisi (jika perlu) selesai, segera hubungi agen asuransi
              atau call center perusahaan asuransi Anda. Sampaikan kronologi kejadian secara jelas dan
              jujur. Jangan menambah atau mengurangi detail — ketidaksesuaian informasi bisa menjadi
              alasan penolakan di tahap verifikasi.
            </p>
          </div>
        </div>

        {/* Langkah 4 */}
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-display text-base font-bold text-[#c9a84c]">
              04
            </span>
            <span className="mt-1 w-px flex-1 bg-[#e2e8f0]" style={{ minHeight: "2.5rem" }} />
          </div>
          <div className="pb-9 prose-p:my-3 min-w-0">
            <h3 className="mt-1.5 mb-3">Siapkan Dokumen Klaim yang Lengkap</h3>
            <p>Berikut dokumen standar yang umumnya diminta saat pengajuan klaim:</p>
            <div className="not-prose my-5 overflow-hidden rounded-2xl border border-[#e2e8f0] shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)]">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0a1628] text-white">
                    <th className="text-left px-5 py-4 font-display tracking-wide">Jenis Klaim</th>
                    <th className="text-left px-5 py-4 font-display tracking-wide">Dokumen yang Diperlukan</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Kerusakan ringan (baret, penyok)", "Formulir klaim, foto kerusakan, SIM, STNK, polis asuransi"],
                    ["Kerusakan berat / tabrakan", "Semua di atas + surat laporan polisi (STPL)"],
                    ["Klaim pihak ketiga (TPL)", "Semua di atas + identitas & data kendaraan pihak ketiga"],
                    ["Kehilangan kendaraan", "Laporan polisi, STNK asli, kunci kendaraan, polis asuransi, KTP"],
                    ["Klaim banjir / bencana alam", "Formulir klaim, foto kondisi kendaraan, bukti lokasi banjir"],
                  ].map(([a, b], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                      <td className="px-5 py-4 font-semibold text-[#0a1628] border-b border-[#e2e8f0]">{a}</td>
                      <td className="px-5 py-4 text-[#475569] leading-relaxed border-b border-[#e2e8f0]">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Langkah 5 */}
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-display text-base font-bold text-[#c9a84c]">
              05
            </span>
            <span className="mt-1 w-px flex-1 bg-[#e2e8f0]" style={{ minHeight: "2.5rem" }} />
          </div>
          <div className="pb-9 prose-p:my-3">
            <h3 className="mt-1.5 mb-3">Proses Survei oleh Pihak Asuransi</h3>
            <p>
              Setelah dokumen diterima, perusahaan asuransi akan mengirimkan surveyor untuk menilai
              kondisi dan kerusakan kendaraan secara langsung. Survei biasanya dilakukan dalam
              <strong> 1–2 hari kerja</strong>. Pastikan kendaraan tidak diperbaiki atau dipindahkan
              ke bengkel sebelum proses survei selesai — ini sering menjadi jebakan yang membuat klaim ditolak.
            </p>
          </div>
        </div>

        {/* Langkah 6 */}
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-display text-base font-bold text-[#c9a84c]">
              06
            </span>
          </div>
          <div className="prose-p:my-3">
            <h3 className="mt-1.5 mb-3">Persetujuan Klaim dan Perbaikan di Bengkel</h3>
            <p>
              Jika survei berjalan lancar dan dokumen lengkap, persetujuan klaim biasanya keluar dalam
              <strong> 3–7 hari kerja</strong>. Setelah disetujui, kendaraan Anda akan diarahkan ke
              bengkel rekanan resmi. Biaya perbaikan langsung ditanggung pihak asuransi — Anda hanya
              perlu membayar <em>own risk</em> (biaya tanggung sendiri) sesuai yang tercantum dalam polis,
              umumnya berkisar Rp 300.000 – Rp 500.000 per kejadian.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Tips Tambahan
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="flex items-center justify-center gap-3 text-center">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
          <Lightbulb className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
        </span>
        Tips Agar Proses Klaim Lebih Cepat dan Lancar
      </h2>
      <ol>
        <li>
          <strong>Simpan nomor darurat asuransi di ponsel Anda</strong> — jangan tunggu mencari
          saat keadaan panik. Simpan sejak hari pertama polis aktif.
        </li>
        <li>
          <strong>Pastikan SIM dan STNK selalu aktif</strong> — klaim bisa ditolak jika SIM atau
          STNK Anda mati pada saat kejadian, meski itu bukan penyebab kecelakaan.
        </li>
        <li>
          <strong>Pilih bengkel rekanan, bukan bengkel umum sembarangan</strong> — perbaikan di
          bengkel yang bukan rekanan asuransi biasanya tidak bisa diklaim kecuali ada persetujuan
          tertulis terlebih dahulu.
        </li>
        <li>
          <strong>Jangan menunda laporan</strong> — segera lapor meski Anda masih shock atau
          situasi belum kondusif. Tenggat waktu laporan klaim sangat ketat.
        </li>
        <li>
          <strong>Gunakan jasa agen asuransi saat klaim</strong> — agen yang berpengalaman bisa
          membantu koordinasi dokumen dan komunikasi dengan pihak asuransi agar prosesnya lebih cepat.
        </li>
      </ol>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Pertanyaan Umum
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="flex items-center justify-center gap-3 text-center">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
          <HelpCircle className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
        </span>
        FAQ Seputar Klaim Asuransi Mobil
      </h2>

      <div className="not-prose mt-8 mb-10 space-y-3">
        {[
          {
            q: "Berapa lama batas waktu melaporkan klaim asuransi mobil?",
            a: "Hampir semua polis mewajibkan laporan klaim dalam 3–5 hari kerja setelah kejadian. Melewati batas waktu ini bisa menjadi alasan penolakan klaim oleh perusahaan asuransi.",
          },
          {
            q: "Apakah laporan polisi selalu wajib untuk klaim asuransi mobil?",
            a: "Tidak selalu. Untuk kerusakan ringan seperti baret atau penyok kecil, laporan polisi umumnya tidak wajib. Namun untuk tabrakan yang melibatkan pihak lain, kerusakan berat, kehilangan kendaraan, atau kejadian dengan korban, laporan polisi wajib dilampirkan.",
          },
          {
            q: "Berapa lama proses survei dan persetujuan klaim asuransi mobil?",
            a: "Survei oleh pihak asuransi biasanya dilakukan dalam 1–2 hari kerja setelah dokumen diterima. Jika dokumen lengkap dan survei lancar, persetujuan klaim umumnya keluar dalam 3–7 hari kerja.",
          },
          {
            q: "Apa yang harus dilakukan jika klaim asuransi mobil ditolak?",
            a: "Anda berhak menerima surat penolakan tertulis beserta alasannya, dan bisa mengajukan keberatan (banding internal) dengan bukti tambahan. Jika tidak menemukan titik temu, sengketa bisa diselesaikan melalui LAPS SJK yang diawasi OJK tanpa biaya untuk nasabah.",
          },
          {
            q: "Berapa biaya own risk pada klaim asuransi mobil?",
            a: "Biaya own risk (risiko sendiri) yang harus dibayar nasabah saat klaim disetujui umumnya berkisar Rp 300.000 hingga Rp 500.000 per kejadian, sesuai yang tercantum dalam polis.",
          },
        ].map((item) => (
          <div key={item.q} className="rounded-xl border border-[#e2e8f0] bg-white px-5 py-4">
            <p className="font-display font-semibold text-[#0a1628] mb-1.5">{item.q}</p>
            <p className="text-sm text-[#475569] leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Jika Terjadi Sengketa
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="flex items-center justify-center gap-3 text-center">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
          <Scale className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
        </span>
        Bagaimana Jika Klaim Ditolak?
      </h2>

      <div className="not-prose my-6 rounded-2xl border-l-4 border-[#c9a84c] bg-[#faf8f3] px-6 py-5">
        <p className="text-[#0a1628] leading-relaxed">
          Jika klaim Anda ditolak, Anda berhak menerima surat penolakan tertulis beserta alasannya.
          Dari situ, Anda bisa mengajukan keberatan (banding internal) dengan menyertakan bukti
          tambahan. Jika masih tidak menemukan titik temu, sengketa asuransi di Indonesia bisa
          diselesaikan melalui <strong>LAPS SJK</strong> (Lembaga Alternatif Penyelesaian Sengketa
          Sektor Jasa Keuangan) yang diawasi OJK — tanpa biaya untuk nasabah.
        </p>
      </div>

      <div className="mt-4 p-7 sm:p-8 bg-[#0a1628] rounded-2xl text-white not-prose relative overflow-hidden">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#c9a84c]/10" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">
          Konsultasi Gratis
        </p>
        <h3 className="font-display font-bold text-xl text-white mb-3">
          Butuh Bantuan Klaim atau Konsultasi Asuransi Mobil di Batam?
        </h3>
        <p className="text-white/70 text-sm mb-6 leading-relaxed max-w-2xl">
          Rio siap membantu proses klaim Anda dari awal hingga selesai — mulai dari kelengkapan
          dokumen, koordinasi survei, hingga komunikasi dengan pihak asuransi. Konsultasi gratis,
          tanpa biaya tambahan.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/asuransi-kendaraan/asuransi-mobil-batam"
            className="px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-sm text-center hover:bg-[#f0d080] transition-colors"
          >
            Lihat Produk Asuransi Mobil
          </Link>
          <Link
            href="/kalkulator-premi-mobil"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors"
          >
            Hitung Estimasi Premi
          </Link>
        </div>
      </div>

      <div className="mt-6 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#0a1628] mb-4">
          Artikel & Halaman Terkait
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/asuransi-kendaraan" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">
            → Asuransi Kendaraan Batam
          </Link>
          <Link href="/blog/perbedaan-all-risk-dan-tlo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">
            → Perbedaan All Risk dan TLO
          </Link>
          <Link href="/kalkulator-premi-mobil" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">
            → Kalkulator Estimasi Premi Mobil
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
