// app/blog/asuransi-properti-komersial-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  Building2,
  Users,
  Layers,
  Store,
  Warehouse,
  BedDouble,
  Building,
  ClipboardCheck,
  TrendingDown,
  RefreshCw,
  FileWarning,
  UserCheck,
  Scale,
  Headphones,
  FileSearch,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Properti Komersial Batam – Panduan untuk Pemilik Ruko, Gudang & Gedung",
  description: "Properti komersial di Batam memiliki profil risiko yang berbeda dari rumah tinggal. Pelajari jenis polis yang tepat, apa saja yang wajib dilindungi, dan cara memilih perlindungan yang sesuai untuk bisnis Anda.",
  canonical: "https://asuransibatam.com/blog/asuransi-properti-komersial-batam",
  languages: {
      id: "https://asuransibatam.com/blog/asuransi-properti-komersial-batam",
      en: "https://asuransibatam.com/en/blog/commercial-property-insurance-batam",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Properti Komersial Batam: Panduan untuk Pemilik Ruko, Gudang & Gedung",
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

// FAQPage JSON-LD — sumber tunggal untuk schema & accordion FAQ visual di bawah.
const faqItems = [
  {
    question: "Bisakah polis asuransi rumah dipakai untuk ruko atau properti komersial?",
    answer:
      "Tidak disarankan. Polis asuransi rumah standar umumnya mengandung pengecualian eksplisit untuk properti yang digunakan untuk keperluan komersial. Jika terjadi klaim dan diketahui properti digunakan secara komersial, klaim berisiko ditolak.",
  },
  {
    question: "Apakah stok barang dagangan otomatis ditanggung dalam polis properti komersial?",
    answer:
      "Tidak otomatis. Banyak polis hanya menanggung struktur bangunan kecuali pertanggungan stok ditambahkan secara terpisah. Pemilik ruko dan gudang perlu memastikan nilai stok dimasukkan dalam nilai pertanggungan agar tidak rugi total saat klaim.",
  },
  {
    question: "Apa yang harus dilakukan jika fungsi properti berubah, misalnya dari toko menjadi restoran?",
    answer:
      "Perubahan fungsi wajib dilaporkan ke penanggung karena profil risikonya berbeda — restoran misalnya memiliki risiko kebakaran lebih tinggi karena aktivitas memasak. Tidak melaporkan perubahan ini dapat membuat klaim ditolak dengan alasan salah saji material.",
  },
  {
    question: "Apa itu Business Interruption Insurance dan siapa yang membutuhkannya?",
    answer:
      "Business Interruption Insurance memberikan kompensasi atas hilangnya pendapatan selama periode pemulihan pasca insiden, misalnya pendapatan kamar hotel yang hilang saat bangunan diperbaiki. Cocok untuk hotel, gudang distribusi utama, dan ruko dengan omzet tinggi yang bergantung pada operasional harian.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

// --- Helper presentational components (lokal, konsisten dengan artikel sebelumnya) ---

function SectionHeading({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 not-prose font-display font-bold text-[#0a1628] text-2xl md:text-[1.65rem] mt-12 mb-4">
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
        <Icon className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
      </span>
      {children}
    </h2>
  );
}

function SubHeading({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-2.5 not-prose font-display font-bold text-[#0a1628] text-lg mt-8 mb-3">
      <Icon className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
      {children}
    </h3>
  );
}

function IconList({ items }: { items: { icon: React.ElementType; title?: string; text: React.ReactNode }[] }) {
  return (
    <ul className="not-prose grid sm:grid-cols-2 gap-3 my-5 list-none p-0">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf8f3] border border-[#eee3cc]">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white border border-[#e2e8f0] shrink-0 mt-0.5">
              <Icon className="w-[14px] h-[14px] text-[#1a4fa0]" strokeWidth={2} />
            </span>
            <span className="text-sm text-[#374151] leading-relaxed">
              {item.title && <span className="font-semibold text-[#0a1628] block">{item.title}</span>}
              {item.text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default function ArticleAsuransiPropertiKomersialBatamPage() {
  return (
    <ArticleLayout cluster="property"
      title="Asuransi Properti Komersial Batam: Panduan untuk Pemilik Ruko, Gudang & Gedung"
      description="Batam berkembang sebagai kota industri dan perdagangan. Properti komersial di sini bukan sekadar bangunan — melainkan aset yang menopang bisnis dan mata pencaharian. Melindunginya bukan pilihan; ini adalah keharusan."
      date="6 Mei 2026"
      category="Properti"
      readTime="11 menit baca"
      breadcrumbs={[{ label: "Asuransi Properti Komersial Batam", href: "/blog/asuransi-properti-komersial-batam" }]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Batam adalah kota yang dibangun di atas roda perdagangan dan industri. Dari deretan
        ruko di Nagoya dan Jodoh, gudang logistik di Muka Kuning dan Kabil, hingga gedung
        perkantoran, hotel di Batam Center, dan unit-unit{" "}
        <Link href="/asuransi-properti/asuransi-apartemen-batam" className="font-medium">
          apartemen
        </Link>{" "}
        yang terus bertambah — properti komersial di kota ini menyimpan nilai aset yang
        sangat besar. Namun tidak seperti rumah tinggal yang perlindungannya relatif
        sederhana,{" "}
        <Link href="/asuransi-properti" className="font-medium">
          asuransi properti
        </Link>{" "}
        komersial memiliki lapisan kompleksitas yang sering kali tidak disadari pemiliknya
        hingga mereka benar-benar mengajukan klaim.
      </p>
      <p>
        Artikel ini memberikan gambaran menyeluruh tentang bagaimana pemilik properti
        komersial di Batam dapat mengambil keputusan yang tepat dalam memilih dan menyusun
        polis asuransi properti mereka.
      </p>

      <SectionHeading icon={Building2}>
        Mengapa Properti Komersial Membutuhkan Polis yang Berbeda dari Rumah Tinggal?
      </SectionHeading>
      <p>
        Inilah kesalahpahaman yang paling umum terjadi. Banyak pemilik ruko dan gudang
        mengasuransikan properti komersial mereka menggunakan polis asuransi rumah standar
        karena lebih murah dan lebih mudah diurus. Ketika klaim terjadi, barulah mereka
        menyadari bahwa polis asuransi rumah mengandung pengecualian eksplisit untuk
        properti yang digunakan untuk keperluan komersial.
      </p>
      <p>Ada tiga perbedaan mendasar antara properti komersial dan residensial dari sudut pandang asuransi:</p>
      <IconList
        items={[
          {
            icon: TrendingDown,
            title: "Profil risiko yang berbeda",
            text: "Lalu lintas orang lebih tinggi, aktivitas lebih intensif, dan lebih banyak peralatan listrik yang beroperasi bersamaan — secara statistik meningkatkan probabilitas kerugian.",
          },
          {
            icon: Layers,
            title: "Nilai yang lebih kompleks",
            text: "Selain nilai bangunan, ada nilai isi (stok barang, peralatan bisnis) dan nilai ekonomi (potensi pendapatan) yang perlu diasuransikan secara terpisah.",
          },
          {
            icon: Users,
            title: "Tanggung jawab pihak ketiga yang lebih luas",
            text: "Pemilik bertanggung jawab atas keselamatan pengunjung, pelanggan, dan mitra bisnis — eksposur ini jauh lebih besar dibanding properti residensial.",
          },
        ]}
      />

      <SectionHeading icon={Building}>Jenis Properti Komersial di Batam dan Kebutuhan Perlindungannya</SectionHeading>

      <SubHeading icon={Store}>Ruko di Kawasan Perdagangan</SubHeading>
      <p>
        Ruko di Nagoya, Jodoh, Batam Center, dan Batu Aji menjadi tulang punggung
        perekonomian ritel Batam.{" "}
        <Link href="/asuransi-properti/asuransi-ruko-batam" className="font-medium">
          Asuransi ruko
        </Link>{" "}
        yang komprehensif perlu mencakup setidaknya: struktur bangunan (termasuk renovasi
        interior yang dilakukan oleh penyewa), stok barang dagangan, peralatan kasir dan
        elektronik, serta tanggung jawab kepada pelanggan yang beraktivitas di dalam toko.
      </p>
      <p>
        Satu hal yang sering terlewatkan dalam asuransi ruko adalah <em>pertanggungan stok</em>.
        Banyak polis yang diasuransikan hanya menanggung bangunannya saja, sementara stok
        senilai ratusan juta rupiah yang tersimpan di dalamnya tidak diasuransikan. Jika
        terjadi kebakaran, polis hanya membayar bangunannya — bukan stok yang ikut terbakar.
      </p>

      <SubHeading icon={Warehouse}>Gudang dan Fasilitas Logistik</SubHeading>
      <p>
        Kawasan industri Batam — Muka Kuning, Kabil, Tanjung Uncang, Batu Ampar — dipenuhi
        gudang penyimpanan dengan berbagai skala.{" "}
        <Link href="/asuransi-properti/asuransi-gudang-batam" className="font-medium">
          Asuransi gudang
        </Link>{" "}
        memiliki nuansanya tersendiri, karena perlu mempertimbangkan jenis barang yang
        disimpan (barang umum vs bahan kimia vs elektronik bernilai tinggi), volume dan
        perputaran stok, serta sistem proteksi kebakaran yang tersedia.
      </p>
      <p>
        Gudang yang menyimpan bahan kimia atau material mudah terbakar wajib melakukan
        pengungkapan penuh kepada underwriter. Menyembunyikan informasi ini demi
        mendapatkan premi yang lebih rendah adalah pendekatan yang berbahaya — jika
        terjadi kebakaran dan investigasi menemukan bahan berbahaya yang tidak diungkapkan,
        klaim dapat dibatalkan sepenuhnya.
      </p>

      <SubHeading icon={BedDouble}>Hotel dan Akomodasi</SubHeading>
      <p>
        Industri perhotelan Batam yang terus berkembang — didorong oleh wisatawan dari
        Singapura dan Malaysia — menjadikan{" "}
        <Link href="/asuransi-properti/asuransi-hotel-batam" className="font-medium">
          asuransi hotel
        </Link>{" "}
        sebagai kebutuhan yang semakin relevan. Selain bangunan dan furnitur, hotel
        sebaiknya mempertimbangkan Asuransi Gangguan Usaha (Business Interruption
        Insurance), yang memberikan kompensasi atas pendapatan kamar yang hilang selama
        periode pemulihan pasca insiden.
      </p>
      <p>
        Tanggung jawab kepada tamu (<em>public liability</em>) juga sangat penting — jika
        tamu mengalami kecelakaan di dalam hotel (terpeleset di kamar mandi, kerusakan
        lift, atau insiden di kolam renang), tuntutan kompensasi bisa sangat besar.
      </p>

      <SectionHeading icon={ClipboardCheck}>Komponen Polis Properti Komersial yang Wajib Ada</SectionHeading>

      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Komponen</th>
              <th className="p-4 text-left">Untuk Siapa</th>
              <th className="p-4 text-left">Prioritas</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["FLEXAS (Kebakaran & Risiko Sejenis)", "Semua properti komersial", "Wajib"],
              ["Perluasan Banjir & Badai", "Ruko dataran rendah, gudang tepi laut", "Sangat Direkomendasikan"],
              ["Stok & Isi Bangunan", "Ruko ritel, gudang distributor", "Wajib jika ada stok"],
              ["Gangguan Usaha (Business Interruption)", "Hotel, gudang distribusi utama, ruko omzet tinggi", "Direkomendasikan"],
              ["Tanggung Jawab Publik (Public Liability)", "Hotel, ruko dengan lalu lintas tinggi, gudang dengan akses pihak ketiga", "Direkomendasikan"],
              ["Pencurian & Perampokan", "Ruko ritel, gudang elektronik", "Opsional"],
              ["Kerusakan Mesin (Machinery Breakdown)", "Gudang dengan peralatan industri, hotel dengan AC sentral & lift", "Opsional"],
              ["Gempa Bumi & Tsunami", "Properti bernilai tinggi, gedung bertingkat", "Opsional"],
            ].map(([a, b, c], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="p-4 font-medium text-[#0a1628]">{a}</td>
                <td className="p-4 text-[#475569]">{b}</td>
                <td className={`p-4 font-semibold ${c === "Wajib" ? "text-red-600" : c === "Sangat Direkomendasikan" ? "text-orange-500" : "text-[#475569]"}`}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionHeading icon={FileWarning}>Tiga Kesalahan Paling Umum yang Dilakukan Pemilik Properti Komersial di Batam</SectionHeading>

      <SubHeading icon={TrendingDown}>1. Underinsurance — Uang Pertanggungan Terlalu Rendah</SubHeading>
      <p>
        Inilah masalah struktural yang paling meluas dan paling merugikan saat klaim
        terjadi. Pemilik properti sering menetapkan uang pertanggungan berdasarkan harga
        beli properti bertahun-tahun lalu, sementara biaya konstruksi dan material terus
        meningkat setiap tahunnya. Jika sebuah ruko yang dibeli seharga Rp 500 juta sepuluh
        tahun lalu kini membutuhkan biaya Rp 900 juta untuk dibangun kembali, namun
        polisnya masih di angka Rp 500 juta — maka jika terjadi kerugian total, Anda hanya
        menerima 55% dari kerugian sesungguhnya. Sisanya ditanggung sendiri.
      </p>
      <p>
        Solusinya sederhana: <strong>perbarui uang pertanggungan setiap kali memperpanjang
        polis</strong>. Minta agen Anda membantu menghitung biaya penggantian saat ini,
        bukan sekadar menyalin angka dari polis tahun lalu.
      </p>

      <SubHeading icon={RefreshCw}>2. Tidak Melaporkan Perubahan Fungsi Properti</SubHeading>
      <p>
        Jika ruko yang diasuransikan sebagai toko ritel kemudian dialihfungsikan menjadi
        restoran atau bengkel, perubahan ini wajib dilaporkan kepada penanggung. Restoran
        memiliki risiko kebakaran yang lebih tinggi dibanding toko ritel karena adanya
        kompor dan aktivitas memasak — profil risiko yang berbeda ini mempengaruhi tarif
        premi dan klausul polis. Jika tidak dilaporkan dan terjadi kebakaran akibat
        aktivitas restoran, klaim dapat ditolak dengan alasan salah saji material.
      </p>

      <SubHeading icon={FileWarning}>3. Tidak Membaca Klausul Pengecualian</SubHeading>
      <p>
        Setiap polis mengandung daftar pengecualian yang cukup panjang. Beberapa yang
        sering mengejutkan pemilik properti komersial: kerusakan akibat keausan bertahap
        tidak ditanggung, kerusakan struktural akibat cacat desain atau konstruksi tidak
        ditanggung, dan kerugian yang terjadi saat properti tidak dihuni lebih dari 30 hari
        berturut-turut sering dikecualikan atau memerlukan endorsemen khusus.
      </p>

      <SectionHeading icon={UserCheck}>Cara Memilih Agen Asuransi Properti Komersial yang Tepat</SectionHeading>
      <p>
        Tidak semua agen asuransi memahami seluk-beluk properti komersial. Hal-hal yang
        perlu diperhatikan saat memilih agen untuk asuransi properti bisnis Anda:
      </p>
      <IconList
        items={[
          {
            icon: UserCheck,
            title: "Tanyakan pengalaman spesifik di bidang properti komersial",
            text: "Agen yang selama ini hanya menangani asuransi rumah mungkin tidak memahami kebutuhan gudang dengan stok bernilai tinggi.",
          },
          {
            icon: FileWarning,
            title: "Minta penjelasan tentang klausul pengecualian",
            text: "Agen yang baik akan secara proaktif menjelaskan apa yang tidak ditanggung, bukan hanya menjual fitur-fitur yang ada.",
          },
          {
            icon: Scale,
            title: "Bandingkan minimal dua penawaran",
            text: "Premi properti komersial bervariasi cukup signifikan antar penanggung. Dua penawaran berbeda memberi perspektif lebih baik tentang apa yang wajar.",
          },
          {
            icon: Headphones,
            title: "Tanyakan tentang dukungan klaim",
            text: "Pastikan agen Anda akan aktif membantu proses klaim, bukan hanya saat penjualan polis berlangsung.",
          },
        ]}
      />

      <SectionHeading icon={FileSearch}>Pertanyaan yang Sering Diajukan</SectionHeading>
      <div className="space-y-3 not-prose">
        {faqItems.map((item) => (
          <details key={item.question} className="group p-5 rounded-xl border border-[#e2e8f0] bg-[#faf8f3]">
            <summary className="font-semibold text-[#0a1628] cursor-pointer list-none flex items-center justify-between gap-3">
              <span className="flex items-center gap-3">
                <BadgeCheck className="w-[16px] h-[16px] text-[#c9a84c] shrink-0" strokeWidth={2} />
                {item.question}
              </span>
              <span className="text-[#c9a84c] group-open:rotate-45 transition-transform text-xl leading-none shrink-0">+</span>
            </summary>
            <p className="text-[#374151] text-sm mt-3 mb-0 leading-relaxed pl-7">{item.answer}</p>
          </details>
        ))}
      </div>

      <div className="my-8 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0]">
        <div className="flex items-center gap-2.5 mb-3">
          <ShieldCheck className="w-5 h-5 text-[#c9a84c]" strokeWidth={2} />
          <h3 className="font-display font-bold text-[#0a1628] m-0">
            Konsultasi Asuransi Properti Komersial di Batam
          </h3>
        </div>
        <p className="text-[#475569] mb-4">
          Setiap properti komersial memiliki karakteristik dan risiko yang unik. Rio
          membantu Anda menganalisis kebutuhan perlindungan yang tepat, menghindari
          underinsurance, dan memastikan polis yang Anda miliki benar-benar melindungi
          aset bisnis Anda saat paling dibutuhkan.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/asuransi-properti"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            Lihat Semua Produk Properti
          </Link>
          <Link
            href="/asuransi-properti/asuransi-ruko-batam"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Asuransi Ruko Batam
          </Link>
          <Link
            href="/asuransi-properti/asuransi-gudang-batam"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Asuransi Gudang Batam
          </Link>
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><a href="/asuransi-properti/asuransi-hotel-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Hotel Batam</a></li>
              <li><a href="/asuransi-properti/asuransi-pabrik-kawasan-industri-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Pabrik & Kawasan Industri Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/cara-klaim-asuransi-kebakaran-rumah" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Klaim Asuransi Kebakaran</a></li>
              <li><a href="/blog/asuransi-gudang-kawasan-industri-muka-kuning-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Gudang Kawasan Industri Batam</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}
