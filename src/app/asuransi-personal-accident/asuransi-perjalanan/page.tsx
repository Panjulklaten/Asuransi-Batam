// app/asuransi-personal-accident/asuransi-perjalanan/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Perjalanan Batam – Travel Insurance ke Singapura, Malaysia & Luar Negeri",
  description:
    "Asuransi perjalanan di Batam untuk liburan, dinas, dan studi: biaya medis luar negeri, evakuasi, pembatalan perjalanan, bagasi, hingga syarat visa Schengen. Konsultasi gratis dengan Rio.",
  canonical: "https://asuransibatam.com/asuransi-personal-accident/asuransi-perjalanan",
  languages: {
    id: "https://asuransibatam.com/asuransi-personal-accident/asuransi-perjalanan",
    en: "https://asuransibatam.com/en/personal-accident-insurance/travel-insurance",
  },
});

const benefits = [
  { icon: "🏥", title: "Biaya Medis Darurat di Luar Negeri", desc: "Biaya rawat inap, rawat jalan darurat, dan obat akibat sakit atau kecelakaan mendadak selama perjalanan, sampai limit yang Anda pilih." },
  { icon: "🚁", title: "Evakuasi & Repatriasi Medis", desc: "Pemindahan ke rumah sakit yang lebih memadai atau pemulangan ke Indonesia bila diperlukan secara medis, termasuk pemulangan jenazah sesuai polis." },
  { icon: "✈️", title: "Pembatalan & Pemendekan Perjalanan", desc: "Penggantian biaya perjalanan yang sudah dibayar dan tidak bisa dikembalikan bila Anda harus membatalkan atau pulang lebih awal karena alasan yang dijamin polis." },
  { icon: "🧳", title: "Bagasi, Dokumen & Paspor", desc: "Kehilangan, kerusakan, atau keterlambatan bagasi, serta bantuan dan biaya terkait bila paspor atau dokumen perjalanan hilang." },
  { icon: "⏱️", title: "Keterlambatan Perjalanan", desc: "Santunan atau penggantian biaya tambahan saat penerbangan atau moda transportasi yang dijamin tertunda atau dibatalkan, sesuai ketentuan polis." },
  { icon: "🆘", title: "Kecelakaan Diri & Bantuan 24 Jam", desc: "Santunan kecelakaan, tanggung jawab pribadi pihak ketiga pada polis tertentu, dan akses ke pusat bantuan darurat 24 jam selama Anda di luar negeri." },
];

const faqs = [
  {
    q: "Apakah asuransi perjalanan wajib?",
    a: "Tergantung negara tujuan. Untuk visa Schengen, asuransi kesehatan perjalanan dengan syarat tertentu wajib. Untuk sebagian besar tujuan Asia, asuransi bukan syarat masuk, tetapi ketentuan imigrasi dapat berubah, jadi periksa aturan terbaru negara tujuan. Terlepas dari kewajiban, biaya berobat di luar negeri sering jauh lebih besar dari perkiraan.",
  },
  {
    q: "Apa syarat asuransi perjalanan untuk visa Schengen?",
    a: "Secara umum: jaminan medis minimal EUR 30.000, mencakup perawatan medis darurat serta pemulangan medis dan jenazah, berlaku di seluruh negara Schengen selama seluruh masa perjalanan. Manfaat non-medis seperti pembatalan dan bagasi tidak dihitung untuk memenuhi angka minimum itu. Detail dapat berbeda antar konsulat, jadi cek persyaratan terbaru kedutaan yang Anda tuju.",
  },
  {
    q: "BPJS Kesehatan atau asuransi kantor sudah cukup?",
    a: "BPJS Kesehatan umumnya hanya menjamin layanan di Indonesia, sehingga biaya berobat di luar negeri tidak tercakup. Asuransi kesehatan kantor perlu dicek apakah berlaku di luar negeri dan berapa limitnya. Asuransi bawaan kartu kredit juga punya limit dan syarat sendiri, misalnya tiket harus dibeli dengan kartu tersebut.",
  },
  {
    q: "Untuk ke Singapura atau Malaysia, zona mana yang dipilih?",
    a: "Biasanya zona Asia. Perhatikan limit biaya medis, karena biaya perawatan di Singapura umumnya jauh lebih tinggi daripada di Indonesia. Tanyakan juga apakah masa perjalanan sejak Anda berangkat dari Batam, termasuk penyeberangan feri, sudah masuk periode pertanggungan.",
  },
  {
    q: "Apakah kondisi medis yang sudah ada sebelumnya dijamin?",
    a: "Umumnya tidak. Kondisi yang sudah ada sebelum polis dibeli lazim dikecualikan, kecuali ada ketentuan atau perluasan khusus dari penanggung. Karena menyangkut data kesehatan, sampaikan kondisinya secara jujur saat pengajuan agar tidak menjadi masalah saat klaim.",
  },
  {
    q: "Saya sering bolak-balik Singapura atau Malaysia. Adakah polis tahunan?",
    a: "Sebagian penanggung menyediakan polis tahunan (multi-trip) dengan batas lama untuk tiap perjalanan. Untuk perjalanan yang sering dan singkat, polis ini bisa lebih praktis daripada membeli polis per perjalanan. Ketersediaan dan batas durasinya berbeda antar produk.",
  },
  {
    q: "Bagaimana dengan anak-anak dan lansia?",
    a: "Anak biasanya bisa dimasukkan dalam satu polis dengan orang tua pada produk tertentu. Untuk lansia, banyak produk menerapkan batas usia, syarat tambahan, atau premi berbeda. Sampaikan usia seluruh peserta saat mengajukan.",
  },
  {
    q: "Kapan sebaiknya asuransi perjalanan dibeli?",
    a: "Sebelum berangkat, idealnya segera setelah tiket dan akomodasi dibayar. Jaminan pembatalan umumnya hanya berlaku untuk kejadian yang timbul setelah polis dibeli, dan polis tidak menjamin kejadian yang sudah terjadi sebelum pembelian.",
  },
  {
    q: "Apa yang perlu disiapkan bila bagasi hilang atau penerbangan tertunda?",
    a: "Untuk bagasi, minta laporan ketidakberesan bagasi (Property Irregularity Report) dari maskapai sebelum meninggalkan bandara, serta simpan bukti kepemilikan dan nilai barang. Untuk keterlambatan, minta surat keterangan dari maskapai yang memuat penyebab dan lamanya keterlambatan, dan simpan semua struk pengeluaran tambahan.",
  },
  {
    q: "Bagaimana premi dihitung?",
    a: "Dipengaruhi tujuan atau zona, lama perjalanan, usia peserta, limit manfaat yang dipilih, serta aktivitas yang direncanakan. Karena itu angka pasti baru bisa disampaikan setelah rencana perjalanan Anda jelas.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Perjalanan Batam",
  description: "Asuransi perjalanan untuk warga Batam: biaya medis luar negeri, evakuasi, pembatalan perjalanan, bagasi, dan syarat visa Schengen.",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};

const card = "block p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/40 hover:shadow-lg transition-all card-hover";

export default function AsuransiPerjalananPage() {
  return (
    <ProductPageLayout
      cluster="pa"
      title="Asuransi Perjalanan Batam"
      subtitle="Travel Insurance untuk Liburan, Dinas, dan Studi ke Luar Negeri"
      description="Dari Batam, Singapura dan Malaysia hanya sepelemparan batu lewat feri, tetapi sakit mendadak, bagasi hilang, atau penerbangan batal di sana tetap bisa menguras biaya. Asuransi perjalanan menutup biaya medis, pembatalan, dan kehilangan selama Anda di luar negeri, dan menjadi syarat pada pengajuan visa tertentu."
      benefits={benefits}
      faqs={faqs}
      breadcrumbs={[
        { label: "Asuransi Personal Accident", href: "/asuransi-personal-accident" },
        { label: "Asuransi Perjalanan", href: "/asuransi-personal-accident/asuransi-perjalanan" },
      ]}
      schema={schema}
    >
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Dari Batam, ke Mana Anda Bepergian?</h2>
        <p className="text-center text-[#475569] mb-6">Kebutuhan perlindungan berbeda tergantung tujuan dan jenis perjalanan.</p>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">⛴️ Singapura &amp; Malaysia</h3>
            <p className="text-sm text-[#475569]">Perjalanan singkat dan sering. Perhatikan limit biaya medis dan pertimbangkan polis tahunan bila Anda rutin bolak-balik. Tanyakan apakah masa penyeberangan feri sudah masuk periode pertanggungan.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">💼 Perjalanan dinas</h3>
            <p className="text-sm text-[#475569]">Cek dulu apakah kantor sudah punya polis perjalanan korporat agar tidak dobel. Untuk pekerja asing yang bepergian dari Batam, lihat panduan khususnya di bawah.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">🌴 Liburan keluarga</h3>
            <p className="text-sm text-[#475569]">Daftarkan semua peserta dengan usia yang benar. Anak dan lansia punya ketentuan berbeda, dan jaminan pembatalan penting bila tiket dan hotel sudah dibayar di muka.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">🇪🇺 Eropa (Schengen)</h3>
            <p className="text-sm text-[#475569]">Asuransi dengan syarat minimum tertentu diwajibkan untuk visa. Pilih polis yang sertifikatnya memuat jaminan medis, pemulangan, dan wilayah berlaku secara eksplisit.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">🎓 Studi &amp; tinggal lama</h3>
            <p className="text-sm text-[#475569]">Perjalanan berbulan-bulan punya ketentuan durasi dan produk khusus. Sampaikan lama tinggal sejak awal supaya polis yang dipilih memang sesuai.</p>
          </div>
          <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-[#f8faff]">
            <h3 className="font-display font-bold text-[#0a1628] mb-2">🏔️ Aktivitas petualangan</h3>
            <p className="text-sm text-[#475569]">Menyelam, trekking tinggi, atau ski umumnya termasuk olahraga berisiko yang dikecualikan kecuali diperluas. Sebutkan rencana aktivitas Anda saat mengajukan.</p>
          </div>
        </div>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Pilih Zona Perjalanan</h2>
        <p className="text-center text-[#475569] mb-6">Penanggung membagi wilayah perjalanan ke dalam zona. Nama dan pembagiannya bisa berbeda antar produk.</p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead style={{ background: "#0a1628" }}>
              <tr>
                <th className="text-left text-white font-semibold px-5 py-3">Zona (umumnya)</th>
                <th className="text-left text-white font-semibold px-5 py-3">Contoh tujuan</th>
                <th className="text-left text-white font-semibold px-5 py-3">Yang perlu diperhatikan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-5 py-3.5 font-semibold">Asia</td><td className="px-5 py-3.5">Singapura, Malaysia, Thailand, Jepang, Korea</td><td className="px-5 py-3.5">Paling relevan bagi warga Batam. Biaya medis di Singapura umumnya tinggi, jadi periksa limit.</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Dunia tanpa AS dan Kanada</td><td className="px-5 py-3.5">Eropa, Australia, Selandia Baru</td><td className="px-5 py-3.5">Untuk Schengen, pastikan memenuhi syarat visa.</td></tr>
              <tr><td className="px-5 py-3.5 font-semibold">Dunia termasuk AS dan Kanada</td><td className="px-5 py-3.5">Amerika Serikat, Kanada</td><td className="px-5 py-3.5">Biaya medis sangat tinggi. Banyak produk memisahkan atau membatasi zona ini, jadi pilih limit yang tinggi.</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">Tabel ini bersifat umum. Zona, limit, dan pengecualian final mengikuti wording polis masing-masing penanggung.</p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto p-6 rounded-2xl border" style={{ background: "#f0d08015", borderColor: "#c9a84c40" }}>
        <h2 className="font-display font-bold text-xl text-[#0a1628] mb-3">Syarat Asuransi untuk Visa Schengen</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-[#475569] leading-relaxed">
          <li>Jaminan medis minimal <strong>EUR 30.000</strong>.</li>
          <li>Mencakup perawatan medis darurat, pemulangan medis, dan pemulangan jenazah.</li>
          <li>Berlaku di seluruh negara Schengen dan selama seluruh masa perjalanan.</li>
          <li>Manfaat non-medis seperti pembatalan dan bagasi tidak dihitung untuk memenuhi angka minimum.</li>
          <li>Minta sertifikat yang secara eksplisit mencantumkan wilayah Schengen, jumlah jaminan, dan pemulangan, lalu cocokkan dengan persyaratan terbaru kedutaan tujuan, karena detail bisa berbeda antar konsulat.</li>
        </ul>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-3 text-center">Yang Umumnya Tidak Dijamin</h2>
        <ul className="list-disc pl-6 space-y-2 text-[#475569] leading-relaxed">
          <li>Kondisi medis yang sudah ada sebelum polis dibeli, kecuali ada ketentuan khusus.</li>
          <li>Kehamilan dan persalinan, kecuali komplikasi tertentu yang dijamin polis.</li>
          <li>Olahraga atau aktivitas berisiko tinggi yang tidak diperluas.</li>
          <li>Perjalanan ke wilayah yang sedang dalam peringatan perjalanan atau konflik bersenjata.</li>
          <li>Kejadian akibat pengaruh alkohol atau obat terlarang.</li>
          <li>Pembatalan karena alasan yang tidak termasuk daftar yang dijamin. Pembatalan karena alasan bebas umumnya tidak ditanggung.</li>
          <li>Penyakit menular atau pandemi, yang bergantung pada wording masing-masing produk.</li>
        </ul>
        <p className="text-xs text-gray-500 mt-3">Daftar ini gambaran umum. Selalu minta bagian pengecualian polis dibacakan sebelum Anda membeli.</p>
      </div>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-4 text-center">Jika Terjadi Sesuatu di Luar Negeri</h2>
        <ol className="space-y-3">
          {[
            ["Hubungi pusat bantuan darurat", "Nomor 24 jam tercantum di kartu atau sertifikat polis. Hubungi sebelum menjalani perawatan non-darurat agar biaya dapat diatur langsung bila memungkinkan."],
            ["Kumpulkan bukti", "Simpan kuitansi, laporan dokter, hasil pemeriksaan, laporan polisi untuk kehilangan, dan laporan maskapai untuk bagasi atau keterlambatan."],
            ["Laporkan ke kami", "Sampaikan kejadian secepatnya dan dalam batas waktu yang tertera di polis, lalu kirim dokumen yang sudah dikumpulkan."],
            ["Kami dampingi proses klaim", "Kami membantu melengkapi dokumen dan menindaklanjuti ke penanggung hingga ada keputusan."],
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
          <Link href="/asuransi-personal-accident/pa-individu-keluarga" className={card}>
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">PA Individu &amp; Keluarga</h3>
            <p className="text-[#475569] text-sm">Perlindungan kecelakaan sehari-hari, bukan hanya saat bepergian.</p>
          </Link>
          <Link href="/blog/asuransi-pa-pekerja-asing-ke-singapura-dari-batam" className={card}>
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">Pekerja Asing ke Singapura</h3>
            <p className="text-[#475569] text-sm">Panduan PA dan asuransi untuk pekerja asing yang bepergian dari Batam.</p>
          </Link>
          <Link href="/asuransi-personal-accident/pa-karyawan-grup" className={card}>
            <h3 className="font-display font-bold text-lg text-[#0a1628] mb-2">PA Karyawan Grup</h3>
            <p className="text-[#475569] text-sm">Perlindungan kecelakaan untuk tim, termasuk perjalanan dinas sesuai polis.</p>
          </Link>
        </div>
      </div>
    </ProductPageLayout>
  );
}
