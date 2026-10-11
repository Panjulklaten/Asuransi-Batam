// app/asuransi-kendaraan/asuransi-motor-batam/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Motor Batam – All Risk & TLO | Hitung Premi Motor Gratis",
  description:
    "Asuransi motor di Batam: pilih All Risk atau TLO, tambah perluasan banjir, tanggung gugat pihak ketiga, dan PA pengemudi. Hitung estimasi premi online dan konsultasi dengan Rio: 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-kendaraan/asuransi-motor-batam",
  languages: {
    id: "https://asuransibatam.com/asuransi-kendaraan/asuransi-motor-batam",
    en: "https://asuransibatam.com/en/vehicle-insurance/motorcycle-insurance-batam",
  },
});

const benefits = [
  { icon: "🛵", title: "All Risk / Comprehensive", desc: "Menjamin kerugian atau kerusakan sebagian maupun total akibat tabrakan, benturan, terbalik, tergelincir, perbuatan jahat, pencurian, dan kebakaran, sesuai polis standar kendaraan bermotor." },
  { icon: "🔒", title: "TLO (Total Loss Only)", desc: "Perlindungan dasar yang hemat: menjamin motor hilang karena pencurian atau rusak total (kerusakan di atas 75% nilai motor). Kerusakan ringan tidak ditanggung." },
  { icon: "🌧️", title: "Perluasan Banjir & Angin Topan", desc: "Banjir, genangan, dan angin topan umumnya dikecualikan dari polis dasar. Perluasan ini menutup risiko tersebut, relevan untuk wilayah Batam yang rawan genangan saat hujan deras." },
  { icon: "⚖️", title: "Tanggung Jawab Hukum Pihak Ketiga", desc: "Perluasan untuk ganti rugi bila motor Anda merusak properti atau mencederai orang lain, termasuk biaya perkara yang disetujui penanggung, sampai limit yang tercantum di polis." },
  { icon: "🧑‍⚕️", title: "PA Pengemudi & Penumpang", desc: "Santunan untuk pengendara dan boncenger yang mengalami kecelakaan, melengkapi perlindungan motornya. Cocok untuk komuter harian ke kawasan industri." },
  { icon: "📐", title: "Tarif Mengacu Ketentuan OJK", desc: "Premi dihitung dari harga motor dikalikan rate dalam batas bawah dan batas atas yang ditetapkan OJK, sehingga Anda bisa memperkirakan biayanya sebelum mengajukan." },
];

const faqs = [
  {
    q: "Apakah semua penanggung menyediakan All Risk untuk motor?",
    a: "Tidak selalu. Untuk kendaraan roda dua, sebagian penanggung hanya menawarkan TLO, sebagian lain menyediakan TLO dan All Risk. Ketersediaannya juga dipengaruhi usia dan nilai motor. Karena itu kami mengecek dulu opsi yang tersedia untuk motor Anda sebelum menyampaikan penawaran.",
  },
  {
    q: "Mengapa premi dari penanggung bisa berbeda dengan hasil kalkulator?",
    a: "Kalkulator memberi estimasi dari batas bawah dan batas atas tarif OJK. Premi final ditentukan penanggung di dalam rentang itu, lalu dapat bertambah karena usia motor (untuk polis komprehensif, motor yang lebih tua dapat dikenai tambahan tarif), perluasan yang dipilih, serta biaya administrasi, polis, dan materai.",
  },
  {
    q: "Motor saya masih kredit atau leasing. Apakah perlu diasuransikan?",
    a: "Sebagian lembaga pembiayaan mensyaratkan motor yang dibiayai diasuransikan, dengan ketentuan jenis polis dan klausul tertentu. Tanyakan syarat dari lembaga pembiayaan Anda sebelum memilih polis, dan sampaikan statusnya saat mengajukan agar polis disusun sesuai.",
  },
  {
    q: "Motor saya dipakai untuk ojek online atau kurir. Apakah tetap bisa?",
    a: "Bisa diajukan, tetapi penggunaannya harus dideklarasikan apa adanya. Polis standar mengecualikan kerugian bila kendaraan digunakan selain dari yang tercantum dalam polis, sehingga motor operasional yang dilaporkan sebagai pemakaian pribadi berisiko ditolak saat klaim.",
  },
  {
    q: "Bagaimana dengan motor listrik?",
    a: "Motor listrik dapat ditanyakan, tetapi syarat dan ketersediaannya bervariasi antar penanggung. Tarif asuransi kendaraan listrik saat ini masih mengacu aturan OJK yang sama, sementara OJK sedang mengkaji penyesuaian karena risiko khusus seperti baterai. Konsultasikan dulu sebelum mengajukan.",
  },
  {
    q: "Aksesori dan modifikasi motor apakah ikut dijamin?",
    a: "Perlengkapan tambahan yang tidak disebutkan dalam polis umumnya tidak dijamin. Daftarkan aksesori dan modifikasi yang bernilai (knalpot, velg, box, dan sejenisnya) saat pengajuan agar nilainya masuk pertanggungan, dan sesuaikan nilai motor dengan modifikasinya.",
  },
  {
    q: "Dalam kondisi apa klaim bisa ditolak?",
    a: "Antara lain bila motor dikemudikan tanpa SIM yang sesuai, di bawah pengaruh alkohol atau obat terlarang, memasuki jalan yang dilarang, dipakai balapan atau uji kecepatan, atau bila ada penggelapan, penipuan, dan hipnotis. Perbuatan jahat oleh orang dekat atau karyawan Tertanggung juga dikecualikan. Rinciannya mengikuti wording polis.",
  },
  {
    q: "Berapa lama batas melapor setelah kejadian?",
    a: "Polis standar umumnya mensyaratkan pemberitahuan kepada penanggung paling lambat 5 hari kalender sejak kejadian, dan beberapa penanggung meminta lebih cepat. Untuk pencurian, buat laporan polisi sesegera mungkin lalu hubungi kami agar dokumen klaim disiapkan sejak awal.",
  },
  {
    q: "Apakah ada risiko sendiri (deductible) yang harus ditanggung?",
    a: "Ada. Setiap klaim yang disetujui umumnya dikenai risiko sendiri yang tercantum di polis dan dipotong dari ganti rugi. Besarnya mengikuti ketentuan OJK dan kebijakan penanggung, jadi minta nilainya ditunjukkan sebelum Anda membayar premi.",
  },
  {
    q: "Apakah perlu survei atau foto motor sebelum polis terbit?",
    a: "Untuk motor yang sudah lama dipakai atau bernilai tinggi, penanggung dapat meminta foto atau survei. Siapkan foto empat sisi, nomor rangka dan mesin, serta odometer, agar proses persetujuan tidak tertunda.",
  },
];

const policyComparison = [
  { feature: "Kerusakan sebagian (lecet, patah, dll)", basic: "❌ TLO", standard: "✅ All Risk", comprehensive: "✅" },
  { feature: "Kerusakan total (>75%)", basic: "✅ TLO", standard: "✅", comprehensive: "✅" },
  { feature: "Kehilangan / pencurian", basic: "✅ TLO", standard: "✅", comprehensive: "✅" },
  { feature: "Perluasan banjir & angin topan", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Tanggung jawab hukum pihak ketiga", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "PA pengemudi & penumpang", basic: "❌", standard: "Opsional", comprehensive: "✅" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Motor Batam",
  description: "Asuransi sepeda motor All Risk dan TLO di Batam dengan estimasi premi berdasarkan tarif OJK.",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

const card = "block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover";

export default function AsuransiMotorBatamPage() {
  return (
    <ProductPageLayout
      cluster="vehicle"
      title="Asuransi Motor Batam"
      subtitle="Proteksi All Risk & TLO untuk Motor Harian, Sport, dan Operasional"
      description="Motor adalah kendaraan utama banyak warga Batam, dari komuter kawasan industri hingga pengantar barang. Satu kehilangan di parkiran atau satu kecelakaan bisa menghapus tabungan berbulan-bulan. Pilih All Risk atau TLO sesuai nilai dan pemakaian motor Anda, lalu hitung estimasi premi sebelum mengajukan."
      benefits={benefits}
      faqs={faqs}
      policyComparison={policyComparison}
      breadcrumbs={[
        { label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" },
        { label: "Asuransi Motor Batam", href: "/asuransi-kendaraan/asuransi-motor-batam" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Tarif Premi Motor Menurut OJK (Wilayah 1 – Batam)</h2>
        <p className="text-center text-[#475569] mb-6">Premi dasar dihitung dari harga motor dikalikan rate per tahun. Untuk sepeda motor, OJK menetapkan satu kategori untuk semua rentang harga.</p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead style={{ background: "#0a1628" }}>
              <tr>
                <th className="text-left text-white font-semibold px-5 py-3">Jenis perlindungan</th>
                <th className="text-left text-white font-semibold px-5 py-3">Rate per tahun</th>
                <th className="text-left text-white font-semibold px-5 py-3">Motor Rp 25 juta</th>
                <th className="text-left text-white font-semibold px-5 py-3">Motor Rp 45 juta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-5 py-3.5 font-semibold">All Risk (komprehensif)</td><td className="px-5 py-3.5">3,18% – 3,50%</td><td className="px-5 py-3.5">Rp 795.000 – 875.000</td><td className="px-5 py-3.5">Rp 1.431.000 – 1.575.000</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">TLO (kehilangan &amp; rusak total)</td><td className="px-5 py-3.5">1,76% – 2,11%</td><td className="px-5 py-3.5">Rp 440.000 – 527.500</td><td className="px-5 py-3.5">Rp 792.000 – 949.500</td></tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-sm text-[#475569] leading-relaxed mt-4">
          <li>Angka adalah batas bawah dan batas atas dalam SEOJK 6/SEOJK.05/2017. Penanggung menetapkan rate final di dalam rentang itu.</li>
          <li>Biaya administrasi, polis, dan materai ditambahkan di luar premi. Untuk polis komprehensif, motor yang lebih tua dapat dikenai tambahan tarif.</li>
          <li>OJK sedang mengkaji penyesuaian tarif kendaraan bermotor, jadi pastikan angka terbaru saat Anda mengajukan.</li>
        </ul>
        <p className="mt-4 text-[#475569] text-sm">
          Ingin menghitung motor Anda sendiri?{" "}
          <Link href="/kalkulator-premi-motor" className="font-semibold text-[#1a4fa0] hover:underline">Buka Kalkulator Premi Motor</Link>
          , atau lihat{" "}
          <Link href="/blog/asuransi-motor-batam" className="font-semibold text-[#1a4fa0] hover:underline">simulasi premi motor populer</Link>
          {" "}beserta tarif tiap wilayah.
        </p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Pilih Perlindungan Sesuai Jenis Motor</h2>
        <p className="text-center text-[#475569] mb-6">Tidak semua motor butuh perlindungan yang sama. Ini pertimbangan yang biasa kami sampaikan.</p>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">🛵 Matic harian &amp; komuter</h3>
            <p className="text-sm text-[#475569]">Untuk motor bernilai moderat yang dipakai ke kawasan industri, TLO sering sudah cukup untuk risiko terbesar, yaitu kehilangan. Pilih All Risk bila motor masih baru atau Anda ingin kerusakan ringan juga ditanggung.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">🏍️ Motor sport &amp; big bike</h3>
            <p className="text-sm text-[#475569]">Nilai tinggi dan risiko tergelincir atau pencurian lebih besar, sehingga All Risk lebih masuk akal. Ketersediaan All Risk untuk motor tertentu berbeda antar penanggung, jadi cek lebih awal.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">🔧 Motor modifikasi</h3>
            <p className="text-sm text-[#475569]">Aksesori yang tidak disebutkan di polis umumnya tidak dijamin. Daftarkan knalpot, velg, dan perlengkapan bernilai, dan sesuaikan nilai pertanggungan dengan kondisi motor setelah modifikasi.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">📦 Motor kerja &amp; operasional</h3>
            <p className="text-sm text-[#475569]">Motor untuk kurir atau ojek online perlu dideklarasikan sesuai pemakaian sebenarnya. Pemakaian yang berbeda dari polis dapat dikecualikan saat klaim.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">⚡ Motor listrik</h3>
            <p className="text-sm text-[#475569]">Bisa diajukan, tetapi syarat dan ketersediaannya bervariasi. Tarif masih mengacu aturan OJK yang berlaku sambil menunggu kajian tarif khusus kendaraan listrik.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">💳 Motor kredit / leasing</h3>
            <p className="text-sm text-[#475569]">Sebagian lembaga pembiayaan mensyaratkan asuransi dengan klausul tertentu. Sampaikan statusnya saat pengajuan agar polis disusun sesuai syarat mereka.</p>
          </div>
        </div>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Apa yang Dijamin dan Tidak Dijamin</h2>
        <p className="text-center text-[#475569] mb-6">Gambaran umum polis standar kendaraan bermotor. Rincian final mengikuti wording penanggung.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-[#e2e8f0]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-3">✅ Umumnya dijamin</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#475569]">
              <li>Tabrakan, benturan, terbalik, tergelincir, atau terperosok (All Risk).</li>
              <li>Perbuatan jahat dan pencurian, termasuk yang disertai kekerasan.</li>
              <li>Kebakaran, termasuk akibat petir dan kerusakan karena upaya pemadaman.</li>
              <li>Kejadian saat motor berada di atas kapal penyeberangan resmi di bawah pengawasan Ditjen Perhubungan Darat (periksa rute Anda).</li>
              <li>Perluasan opsional: banjir dan angin topan, huru-hara dan terorisme, gempa bumi dan tsunami, PA pengemudi dan penumpang, serta tanggung jawab hukum pihak ketiga.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-[#e2e8f0]">
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-3">⚠️ Umumnya tidak dijamin</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#475569]">
              <li>Dikemudikan tanpa SIM yang sesuai, atau di bawah pengaruh alkohol atau obat terlarang.</li>
              <li>Balapan, uji kecepatan, dan penggunaan di luar yang tercantum di polis.</li>
              <li>Penggelapan, penipuan, hipnotis, serta perbuatan jahat oleh orang dekat atau karyawan Tertanggung.</li>
              <li>Keausan, serta ban dan velg yang rusak tanpa kerusakan pada bagian lain, kecuali karena risiko tertentu.</li>
              <li>Kunci yang tidak melekat pada motor, dan perlengkapan tambahan yang tidak disebutkan di polis.</li>
              <li>Banjir, gempa, dan huru-hara bila perluasannya tidak diambil.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-3 text-center">Konteks Berkendara di Batam</h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          Banyak pengendara Batam menempuh jalur padat menuju Muka Kuning, Kabil, dan Batamindo, memarkir motor di area publik yang ramai, dan melewati ruas yang tergenang saat hujan deras. Tiga kondisi itu menjelaskan mengapa kehilangan, kecelakaan, dan banjir menjadi tiga risiko yang paling sering kami diskusikan dengan pemilik motor. Untuk risiko genangan, baca juga{" "}
          <Link href="/blog/risiko-banjir-kendaraan-batam" className="font-semibold text-[#1a4fa0] hover:underline">risiko banjir kendaraan di Batam</Link>.
        </p>
        <p className="text-[#475569] leading-relaxed">
          Bila Anda sering membawa motor antar pulau dengan kapal penyeberangan, tanyakan apakah rute dan jenis kapalnya masuk dalam jaminan polis sebelum berangkat.
        </p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-4 text-center">Langkah Pengajuan</h2>
        <ol className="space-y-3">
          {[
            ["Hitung estimasi", "Gunakan kalkulator untuk melihat kisaran premi All Risk dan TLO."],
            ["Kirim data motor", "Lewat tombol Minta Penawaran: merek dan tipe, tahun, harga, dan jenis pemakaian."],
            ["Siapkan dokumen", "KTP, STNK, serta foto empat sisi, nomor rangka dan mesin, dan odometer. Tambahkan daftar aksesori bila ada."],
            ["Analisa dan penawaran", "Penanggung menilai pengajuan Anda dan dapat meminta foto tambahan atau survei. Kami menyampaikan opsi dan angkanya."],
            ["Bayar dan polis terbit", "Setelah disetujui dan premi dibayar, polis diterbitkan dan perlindungan berjalan sesuai tanggal di polis."],
          ].map(([t, d], i) => (
            <li key={t} className="flex gap-4 p-4 rounded-xl border border-[#e2e8f0] bg-[#f8faff]">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0a1628] text-white font-bold flex items-center justify-center text-sm">{i + 1}</span>
              <div><div className="font-semibold text-[#0a1628]">{t}</div><div className="text-sm text-[#475569]">{d}</div></div>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Baca &amp; Lengkapi Juga</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/kalkulator-premi-motor" className={card}>
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Kalkulator Premi Motor</h3>
            <p className="text-[#475569] text-sm">Hitung estimasi premi All Risk dan TLO dari harga motor Anda.</p>
          </Link>
          <Link href="/blog/perbedaan-all-risk-dan-tlo" className={card}>
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Perbedaan All Risk dan TLO</h3>
            <p className="text-[#475569] text-sm">Pahami dulu sebelum memilih jenis perlindungan.</p>
          </Link>
          <Link href="/asuransi-personal-accident/pa-individu-keluarga" className={card}>
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">PA Individu &amp; Keluarga</h3>
            <p className="text-[#475569] text-sm">Lindungi pengendaranya, bukan hanya motornya.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}
