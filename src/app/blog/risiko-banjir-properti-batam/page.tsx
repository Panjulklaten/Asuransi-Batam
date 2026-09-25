// app/blog/risiko-banjir-properti-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  CloudRain,
  Droplets,
  MapPin,
  ShieldCheck,
  ShieldAlert,
  ClipboardList,
  Home,
  Warehouse,
  Building2,
  BadgeCheck,
  FileSearch,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Risiko Banjir Batam untuk Properti Anda: Apa yang Benar-Benar Ditanggung Asuransi?",
  description:
    "Hujan deras dua jam merendam Bengkong dan Batu Aji hingga 1 meter pada 22 September 2026. Pelajari kenapa Batam rawan banjir kilat, apa yang benar-benar ditanggung polis properti standar, dan langkah melindungi rumah, ruko, atau gudang Anda.",
  canonical: "https://asuransibatam.com/blog/risiko-banjir-properti-batam",
  languages: {
    id: "https://asuransibatam.com/blog/risiko-banjir-properti-batam",
  },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Risiko Banjir Batam untuk Properti Anda: Apa yang Benar-Benar Ditanggung Asuransi?",
  description:
    "Analisis kejadian banjir Bengkong dan Batu Aji 22 September 2026 serta panduan lengkap perlindungan asuransi properti terhadap risiko banjir di Batam.",
  datePublished: "2026-09-24",
  dateModified: "2026-09-24",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

const faqItems = [
  {
    question: "Apakah polis kebakaran rumah biasa otomatis melindungi dari banjir?",
    answer:
      "Tidak. Polis properti standar di Indonesia (PSAKI, sering disebut FLEXAS — Fire, Lightning, Explosion, aircraft impact, Smoke) hanya menjamin risiko kebakaran dan sejenisnya sebagai risiko dasar. Banjir, angin topan, dan kerusakan akibat air termasuk kategori perluasan jaminan (extended coverage) yang harus diambil terpisah dengan tambahan premi.",
  },
  {
    question: "Rumah saya di Bengkong pernah kena banjir sebelumnya, apakah masih bisa diasuransikan?",
    answer:
      "Umumnya masih bisa. Riwayat banjir di suatu kawasan biasanya memengaruhi besaran premi perluasan atau syarat khusus dari penanggung, bukan otomatis membuat properti ditolak. Setiap penanggung punya kebijakan underwriting berbeda, jadi sebaiknya disampaikan secara terbuka sejak awal pengajuan agar polis yang terbit sudah sesuai kondisi riil rumah Anda.",
  },
  {
    question: "Kalau air hanya masuk sedikit ke teras, apakah tetap bisa diklaim?",
    answer:
      "Bisa, selama polis Anda mencakup perluasan banjir dan kerugian tercatat sesuai definisi polis. Namun nilai kerugian kecil perlu dipertimbangkan terhadap risiko sendiri (own risk) yang berlaku — untuk kerugian di bawah nilai own risk, klaim biasanya tidak menghasilkan pembayaran bersih setelah dipotong biaya tersebut.",
  },
  {
    question: "Apakah barang elektronik dan perabot ikut ditanggung, atau hanya bangunan?",
    answer:
      "Tergantung struktur polis. Perluasan banjir standar umumnya menjamin kerusakan bangunan. Isi rumah atau toko — elektronik, furnitur, stok barang dagangan — baru ikut tercakup jika Anda mengambil perluasan household contents atau business interruption secara terpisah. Ini poin yang paling sering terlewat pemilik properti saat membeli polis.",
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

function Steps({ items }: { items: { title: string; desc?: React.ReactNode }[] }) {
  return (
    <ol className="not-prose relative my-6 list-none p-0 space-y-5 ml-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0a1628] text-[#c9a84c] font-display font-bold text-sm shrink-0">
            {i + 1}
          </span>
          <div className="pt-0.5">
            <p className="font-semibold text-[#0a1628] m-0 text-[15px]">{item.title}</p>
            {item.desc && <p className="text-sm text-[#475569] mt-1 mb-0">{item.desc}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function ArticleBanjirBatam2026AsuransiPropertiPage() {
  return (
    <ArticleLayout
      title="Risiko Banjir Batam untuk Properti Anda: Apa yang Benar-Benar Ditanggung Asuransi?"
      description="Hujan deras selama satu setengah sampai dua jam saja sudah cukup merendam sejumlah kawasan Batam hingga setinggi 1 meter. Ini yang perlu diketahui pemilik rumah, ruko, dan gudang sebelum hujan berikutnya turun."
      date="24 September 2026"
      category="Properti"
      readTime="11 menit baca"
      breadcrumbs={[{ label: "Banjir Batam & Asuransi Properti", href: "/blog/risiko-banjir-properti-batam" }]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Selasa siang, 22 September 2026, hujan berintensitas sedang hingga lebat mengguyur Kota
        Batam selama sekitar satu setengah sampai dua jam. Waktu yang relatif singkat itu ternyata
        cukup untuk melumpuhkan sejumlah ruas jalan utama dan merendam permukiman warga di kawasan
        Bengkong — meliputi Bengkong Aljabar, Bengkong Harapan, dan Bengkong Swadebi — serta Batu
        Aji, dengan ketinggian air dilaporkan mencapai 70 hingga 100 sentimeter di beberapa titik.
        Di kawasan Bengkong Indah Bawah, arus banjir bahkan sempat menyeret satu unit mobil ke
        dalam parit di depan permukiman warga. Tidak ada korban jiwa dalam kejadian ini, namun
        insiden tersebut kembali mengingatkan bahwa banjir kilat di Batam bukan lagi kejadian
        langka — dan pertanyaan paling praktis bagi pemilik{" "}
        <Link href="/asuransi-properti" className="font-medium">
          properti di Batam
        </Link>{" "}
        adalah: seberapa siap polis asuransi Anda menghadapi risiko ini?
      </p>

      <SectionHeading icon={CloudRain}>
        Kenapa Batam Bisa Banjir Parah Hanya dari Hujan Dua Jam?
      </SectionHeading>
      <p>
        Batam punya karakteristik cuaca yang oleh sejumlah pemerhati lingkungan disebut sebagai
        paradoks air. Saat kemarau berlangsung dua bulan, sejumlah wilayah justru mengalami
        kekeringan. Namun begitu hujan deras turun meski hanya dua jam, genangan dan banjir bisa
        langsung muncul di banyak titik. Pola ini menunjukkan bahwa penyebab utamanya bukan semata
        volume curah hujan, melainkan berkurangnya kemampuan tanah menyerap air.
      </p>
      <p>
        Data yang dihimpun lembaga pemantau lingkungan setempat mencatat sekitar 70 persen
        aktivitas <em>cut and fill</em> (pengerukan dan penimbunan lahan) di Batam berlangsung
        tanpa izin resmi. Perubahan bentang alam secara masif akibat aktivitas ini menghilangkan
        kawasan resapan air alami yang seharusnya menahan limpasan hujan sebelum masuk ke saluran
        kota. Ditambah kapasitas drainase di kawasan padat penduduk yang tidak lagi memadai,
        penumpukan sampah di saluran, serta saluran air yang terputus di sejumlah ruas, kombinasi
        faktor ini membuat air hujan yang seharusnya terserap justru langsung melimpas ke jalan dan
        permukiman.
      </p>

      <SectionHeading icon={MapPin}>Titik-Titik yang Terdampak pada Kejadian 22 September 2026</SectionHeading>
      <p>
        Kawasan Bengkong — khususnya Bengkong Indah dan Bengkong Swadebi — sebenarnya sudah lama
        tercatat sebagai salah satu titik banjir yang membutuhkan penanganan serius. Dinas terkait
        di Kota Batam maupun BP Batam pernah beberapa kali meninjau kawasan ini karena kombinasi
        kepadatan penduduk, keterbatasan kapasitas drainase, dan minimnya daerah tangkapan air.
        Pemerintah kota bahkan sempat menyatakan puluhan titik banjir di Batam telah ditangani
        melalui perbaikan infrastruktur. Namun kejadian pada 22 September 2026 menunjukkan bahwa
        penanganan parsial belum cukup meredam risiko saat hujan datang dengan intensitas tinggi
        dalam waktu singkat — dan Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) sendiri
        memperkirakan potensi hujan di Batam masih akan berlangsung selama tiga hingga lima hari ke
        depan.
      </p>
      <p>
        Pemerintah Kota Batam pada bulan yang sama juga memprioritaskan penanganan banjir dalam
        Perubahan APBD 2026, dengan menaikkan belanja modal untuk jalan, jaringan, dan irigasi guna
        mendukung penanganan banjir dari hulu hingga hilir. Ini sinyal positif jangka panjang, tapi
        bagi pemilik properti di kawasan rawan, langkah mitigasi infrastruktur pemerintah tidak bisa
        menggantikan perlindungan finansial pribadi terhadap kerugian yang mungkin sudah terjadi
        lebih dulu.
      </p>

      <SectionHeading icon={ShieldAlert}>
        Fakta Penting: Polis Properti Standar Tidak Otomatis Menanggung Banjir
      </SectionHeading>
      <p>
        Ini adalah kesalahpahaman paling umum yang ditemui pemilik rumah dan usaha di Batam. Polis
        Standar Asuransi Kebakaran Indonesia (PSAKI) — format dasar yang dipakai hampir semua
        produk asuransi properti, sering disingkat FLEXAS (<em>Fire, Lightning, Explosion, aircraft
        impact, Smoke</em>) — hanya menjamin risiko kebakaran, sambaran petir, ledakan, kejatuhan
        pesawat, dan asap sebagai risiko dasar. Banjir, kerusakan akibat air, angin topan, dan badai
        termasuk kategori risiko tambahan yang harus diambil secara terpisah melalui perluasan
        jaminan (<em>extended coverage</em>), dengan tambahan premi di luar premi dasar.
      </p>
      <p>
        Artinya, pemilik rumah, ruko, atau gudang di Bengkong maupun kawasan rawan genangan lain di
        Batam yang hanya memegang polis dasar tanpa perluasan banjir, secara teknis tidak akan
        mendapat ganti rugi apa pun jika propertinya terendam seperti yang terjadi pada 22 September
        2026 — meski polisnya aktif dan premi sudah dibayar penuh. Langkah paling penting yang bisa
        dilakukan sekarang adalah memeriksa lembar ringkasan polis (<em>policy schedule</em>) Anda
        dan memastikan baris "Banjir" atau "Flood, Typhoon, Windstorm and Water Damage" benar-benar
        tercantum sebagai perluasan yang diambil.
      </p>

      <SubHeading icon={Home}>Apa Saja yang Biasanya Tercakup dalam Perluasan Banjir Properti?</SubHeading>
      <IconList
        items={[
          {
            icon: Building2,
            title: "Kerusakan struktur bangunan",
            text: "Dinding, lantai, pintu, dan komponen bangunan permanen yang rusak akibat rendaman air atau arus banjir.",
          },
          {
            icon: Home,
            title: "Isi rumah (household contents)",
            text: "Perabot, elektronik, dan barang pribadi — hanya tercakup jika perluasan ini diambil terpisah dari perluasan banjir untuk bangunan.",
          },
          {
            icon: Warehouse,
            title: "Stok barang dan aset usaha",
            text: "Untuk ruko dan gudang, kerugian stok dagangan atau inventaris akibat banjir umumnya butuh perluasan tersendiri sesuai jenis usaha.",
          },
          {
            icon: ShieldCheck,
            title: "Biaya pembersihan pasca-banjir",
            text: "Sebagian polis mencakup biaya pembersihan lumpur dan sampah sisa banjir sebagai bagian dari klaim, tergantung ketentuan penanggung.",
          },
        ]}
      />
      <p>
        Kerusakan akibat rembesan air tanah yang berlangsung bertahap dalam jangka panjang —
        misalnya kebocoran kronis, bukan kejadian banjir mendadak — umumnya berada di luar cakupan
        perluasan banjir standar, karena polis dirancang untuk kejadian tiba-tiba dan tidak
        terduga (<em>sudden and accidental</em>), bukan proses kerusakan bertahap. Detail
        pengecualian selalu berbeda antar penanggung, sehingga membaca ringkasan polis secara
        langsung tetap jadi langkah paling aman.
      </p>

      <SectionHeading icon={ClipboardList}>Jika Properti Anda Terlanjur Terendam, Lakukan Ini</SectionHeading>
      <Steps
        items={[
          {
            title: "Utamakan keselamatan diri dan keluarga terlebih dahulu",
            desc: "Jangan memasuki area yang masih tergenang arus deras, terutama di dekat parit atau saluran yang meluap seperti kejadian di Bengkong Indah.",
          },
          {
            title: "Dokumentasikan kondisi sebelum apa pun dipindahkan atau dibersihkan",
            desc: "Foto dan video ketinggian air, kondisi bangunan, serta barang yang rusak menjadi bukti utama saat proses klaim dan penilaian oleh Loss Adjuster.",
          },
          {
            title: "Hubungi penanggung atau agen asuransi secepatnya",
            desc: "Sebagian besar polis mewajibkan pelaporan dalam beberapa hari kerja sejak kejadian — semakin cepat dilaporkan, semakin lancar proses selanjutnya.",
          },
          {
            title: "Tahan dulu proses pembersihan besar-besaran",
            desc: "Membersihkan lokasi sebelum ada persetujuan tertulis dari penanggung berisiko dianggap mengubah kondisi bukti kerugian.",
          },
          {
            title: "Catat estimasi kerugian barang yang rusak",
            desc: "Simpan nota pembelian atau perkiraan nilai barang elektronik dan perabot yang terdampak untuk mempercepat proses verifikasi klaim.",
          },
        ]}
      />

      <SectionHeading icon={AlertTriangle}>Siapa yang Paling Perlu Mempertimbangkan Perluasan Ini?</SectionHeading>
      <p>
        Bukan hanya warga di sekitar Bengkong Aljabar, Bengkong Harapan, Bengkong Swadebi, dan Batu
        Aji yang perlu waspada. Setiap properti di kawasan dataran rendah, dekat parit atau saluran
        air kota, maupun di area yang belum pernah dipetakan sebagai titik rawan tapi berada di
        sekitar lahan yang mengalami alih fungsi lahan besar-besaran, berpotensi menghadapi risiko
        serupa — terutama mengingat sebagian besar aktivitas <em>cut and fill</em> di Batam
        berlangsung tanpa pengawasan ketat. Pemilik ruko dan gudang di kawasan padat industri juga
        perlu memperhitungkan potensi gangguan operasional selain kerusakan fisik, mengingat
        genangan setinggi 70–100 cm cukup untuk merendam inventaris yang disimpan di lantai dasar.
      </p>

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
          <Droplets className="w-5 h-5 text-[#c9a84c]" strokeWidth={2} />
          <h3 className="font-display font-bold text-[#0a1628] m-0">
            Periksa Perlindungan Banjir Rumah, Ruko, atau Gudang Anda Sekarang
          </h3>
        </div>
        <p className="text-[#475569] mb-4">
          Rio siap membantu Anda memeriksa apakah polis properti yang berjalan sudah mencakup
          perluasan banjir, atau menyusun perlindungan baru yang sesuai dengan lokasi dan risiko
          properti Anda di Batam — tanpa biaya konsultasi tambahan di luar premi polis.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/asuransi-properti/asuransi-rumah-batam"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            Lihat Produk Asuransi Rumah
          </Link>
          <Link
            href="/kontak"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Konsultasi Gratis
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
              <li><a href="/asuransi-properti/asuransi-rumah-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Rumah Batam</a></li>
              <li><a href="/asuransi-properti/asuransi-ruko-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Ruko Batam</a></li>
              <li><a href="/asuransi-properti/asuransi-gudang-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Gudang Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/risiko-banjir-kendaraan-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Banjir Batam & Asuransi Kendaraan</a></li>
              <li><a href="/blog/cara-klaim-asuransi-kebakaran-rumah" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Klaim Asuransi Kebakaran Rumah</a></li>
              <li><a href="/blog/asuransi-properti-komersial-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Properti Komersial Batam</a></li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
