// app/blog/asuransi-kecelakaan-diri-pekerja-industri-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  HardHat,
  ShieldCheck,
  HeartPulse,
  Users,
  Layers,
  ClipboardCheck,
  FileWarning,
  Scale,
  Headphones,
  FileSearch,
  BadgeCheck,
  Banknote,
  ListChecks,
  Stethoscope,
  Anchor,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Kecelakaan Diri (PA) untuk Pekerja Industri Batam – Panduan Lengkap",
  description: "Panduan lengkap Asuransi Kecelakaan Diri (Personal Accident) untuk pekerja galangan kapal, manufaktur, dan sektor maritim di Batam. Pelajari perbedaannya dengan BPJS Ketenagakerjaan, skema PA Individu vs Grup, dan cara klaim yang benar.",
  canonical: "https://asuransibatam.com/blog/asuransi-kecelakaan-diri-pekerja-industri-batam",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Asuransi Kecelakaan Diri (PA) untuk Pekerja Industri Batam: Panduan Lengkap",
  datePublished: "2026-07-02",
  dateModified: "2026-07-02",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

// FAQPage JSON-LD — sumber tunggal untuk schema & accordion FAQ visual di bawah.
const faqItems = [
  {
    question:
      "Apakah pekerja yang sudah punya BPJS Ketenagakerjaan masih perlu Asuransi PA?",
    answer:
      "Sangat disarankan. BPJS Ketenagakerjaan menanggung risiko kerja sesuai skema pemerintah dengan nilai santunan yang terstandarisasi, sementara Asuransi PA swasta memberikan nilai pertanggungan yang bisa disesuaikan dan proses pencairan yang umumnya lebih cepat. Kombinasi keduanya memberi lapisan proteksi finansial yang lebih menyeluruh, terutama untuk pekerja di area berisiko tinggi seperti galangan kapal.",
  },
  {
    question: "Apa bedanya PA Individu/Keluarga dan PA Grup Karyawan?",
    answer:
      "PA Individu & Keluarga dibeli secara personal dengan nilai pertanggungan yang bisa disesuaikan kebutuhan masing-masing anggota keluarga. PA Grup Karyawan dibeli oleh perusahaan untuk seluruh atau sebagian karyawan sekaligus, biasanya dengan tarif premi lebih ekonomis karena skala kepesertaannya.",
  },
  {
    question: "Apakah kelas okupasi pekerjaan memengaruhi premi PA?",
    answer:
      "Ya. Pekerjaan lapangan seperti welder, rigger, atau pekerja ketinggian di galangan kapal masuk kelas okupasi risiko lebih tinggi dibanding pekerjaan administratif, sehingga tarif preminya berbeda. Menyampaikan jenis pekerjaan secara akurat saat pengajuan penting agar klaim tidak bermasalah di kemudian hari.",
  },
  {
    question: "Berapa lama batas waktu pelaporan kecelakaan untuk klaim PA?",
    answer:
      "Sebagai praktik umum, kecelakaan sebaiknya dilaporkan ke penanggung maksimal 2x24 jam sejak kejadian, disertai kronologi awal. Dokumen pendukung seperti laporan medis dan surat keterangan dari pihak berwenang atau HRD dapat menyusul, tetapi laporan awal yang cepat membantu mempercepat proses verifikasi klaim.",
  },
  {
    question: "Apakah santunan cacat tetap dihitung penuh untuk semua jenis cedera?",
    answer:
      "Tidak. Santunan cacat tetap dihitung berdasarkan persentase dari nilai pertanggungan sesuai tabel cacat yang tercantum dalam polis, tergantung jenis dan tingkat keparahan cedera. Semakin berat dampak cedera terhadap fungsi tubuh, semakin besar persentase santunan yang dibayarkan.",
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

function SectionHeading({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-3 not-prose font-display font-bold text-[#0a1628] text-2xl md:text-[1.65rem] mt-12 mb-4">
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0a1628] shrink-0">
        <Icon className="w-[18px] h-[18px] text-[#c9a84c]" strokeWidth={2} />
      </span>
      {children}
    </h2>
  );
}

function SubHeading({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <h3 className="flex items-center gap-2.5 not-prose font-display font-bold text-[#0a1628] text-lg mt-8 mb-3">
      <Icon className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
      {children}
    </h3>
  );
}

function IconList({
  items,
}: {
  items: { icon: React.ElementType; title?: string; text: React.ReactNode }[];
}) {
  return (
    <ul className="not-prose grid sm:grid-cols-2 gap-3 my-5 list-none p-0">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <li
            key={i}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf8f3] border border-[#eee3cc]"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white border border-[#e2e8f0] shrink-0 mt-0.5">
              <Icon className="w-[14px] h-[14px] text-[#1a4fa0]" strokeWidth={2} />
            </span>
            <span className="text-sm text-[#374151] leading-relaxed">
              {item.title && (
                <span className="font-semibold text-[#0a1628] block">{item.title}</span>
              )}
              {item.text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function DisabilityTable() {
  const rows = [
    { cedera: "Kehilangan penglihatan kedua mata", persen: "100%" },
    { cedera: "Kehilangan satu lengan di atas siku", persen: "60%" },
    { cedera: "Kehilangan satu tangan (pergelangan ke bawah)", persen: "50%" },
    { cedera: "Kehilangan satu kaki di atas lutut", persen: "60%" },
    { cedera: "Kehilangan pendengaran pada kedua telinga", persen: "75%" },
    { cedera: "Kehilangan satu ibu jari", persen: "15%" },
  ];
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-[#e2e8f0]">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-[#0a1628] text-white">
            <th className="p-3 font-semibold">Jenis Cedera / Cacat Tetap</th>
            <th className="p-3 font-semibold w-32">% dari Nilai Pertanggungan</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
              <td className="p-3 text-[#374151] border-t border-[#e2e8f0]">{r.cedera}</td>
              <td className="p-3 text-[#0a1628] font-semibold border-t border-[#e2e8f0]">
                {r.persen}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-[#475569] p-3 bg-[#faf8f3] border-t border-[#e2e8f0] m-0">
        Ilustrasi umum tabel cacat tetap. Persentase aktual mengikuti tabel yang tercantum
        dalam polis masing-masing penanggung dan dapat berbeda antar perusahaan asuransi.
      </p>
    </div>
  );
}

export default function ArticleAsuransiKecelakaanDiriPekerjaIndustriBatamPage() {
  return (
    <ArticleLayout
      title="Asuransi Kecelakaan Diri (PA) untuk Pekerja Industri Batam: Panduan Lengkap"
      description="Batam adalah salah satu pusat galangan kapal dan manufaktur terbesar di Indonesia. Bagi pekerja di sektor ini, risiko kecelakaan kerja bukan kemungkinan jauh — melainkan bagian dari realitas harian yang perlu dimitigasi secara finansial."
      date="2 Juli 2026"
      category="Personal Accident"
      readTime="10 menit baca"
      breadcrumbs={[
        {
          label: "Asuransi Kecelakaan Diri Pekerja Industri Batam",
          href: "/blog/asuransi-kecelakaan-diri-pekerja-industri-batam",
        },
      ]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Di sepanjang kawasan Batu Ampar, Sekupang, hingga Tanjung Uncang, ribuan pekerja
        beraktivitas setiap hari di galangan kapal, pabrik manufaktur, dan fasilitas
        logistik. Pekerjaan seperti pengelasan di ketinggian, penanganan alat berat, dan
        aktivitas di area maritim membawa profil risiko yang jauh lebih tinggi
        dibandingkan pekerjaan kantoran biasa. Di sinilah{" "}
        <Link href="/asuransi-personal-accident" className="font-medium">
          Asuransi Kecelakaan Diri (Personal Accident/PA)
        </Link>{" "}
        berperan sebagai lapisan proteksi finansial tambahan, baik untuk pekerja individu
        maupun untuk perusahaan yang ingin melindungi seluruh karyawannya.
      </p>
      <p>
        Banyak pekerja dan bahkan pemberi kerja masih menganggap BPJS Ketenagakerjaan
        sudah cukup untuk menutup seluruh risiko kecelakaan kerja. Artikel ini membahas
        secara rinci apa itu Asuransi PA, di mana letak celah yang tidak dijangkau BPJS
        TK, bagaimana skema PA Individu dan PA Grup bekerja, serta langkah konkret dalam
        memilih perlindungan dan mengajukan klaim.

      </p>

      <SectionHeading icon={HeartPulse}>Apa Itu Asuransi Kecelakaan Diri (PA)?</SectionHeading>
      <p>
        Asuransi Kecelakaan Diri adalah produk asuransi umum yang memberikan santunan
        tunai apabila tertanggung mengalami kecelakaan yang mengakibatkan kematian, cacat
        tetap (total maupun sebagian), cacat sementara, atau membutuhkan biaya
        pengobatan. Berbeda dengan asuransi jiwa yang mencakup risiko meninggal karena
        sebab apa pun, Asuransi PA secara spesifik hanya aktif ketika penyebabnya adalah
        kecelakaan sesuai definisi dalam polis.
      </p>
      <p>
        Produk ini hanya boleh diterbitkan oleh perusahaan asuransi umum yang berizin dan
        diawasi Otoritas Jasa Keuangan (OJK). Sebelum menandatangani polis, pastikan Anda
        memeriksa legalitas perusahaan penanggung melalui laman resmi OJK, dan pahami
        dengan jelas definisi kecelakaan, pengecualian (exclusion), serta tabel santunan
        cacat tetap yang berlaku.
      </p>

      <SectionHeading icon={ShieldCheck}>
        Kenapa BPJS Ketenagakerjaan Saja Sering Tidak Cukup
      </SectionHeading>
      <p>
        BPJS Ketenagakerjaan melalui Jaminan Kecelakaan Kerja (JKK) memang wajib dan
        menjadi fondasi perlindungan pekerja di Indonesia. Namun ada beberapa celah yang
        umum ditemui di lapangan, terutama di sektor padat risiko seperti galangan kapal
        dan manufaktur di Batam:
      </p>
      <IconList
        items={[
          {
            icon: Banknote,
            title: "Nilai santunan mengikuti formula pemerintah",
            text: "Skema BPJS TK dihitung berdasarkan upah yang dilaporkan dan formula baku, yang bagi sebagian pekerja mungkin tidak mencerminkan kebutuhan finansial keluarga secara utuh.",
          },
          {
            icon: ListChecks,
            title: "Cakupan waktu dan tempat kejadian terbatas",
            text: "BPJS TK berfokus pada kecelakaan kerja dan perjalanan dari/ke tempat kerja dengan kriteria tertentu, sehingga kejadian di luar konteks tersebut mungkin tidak tercakup.",
          },
          {
            icon: Stethoscope,
            title: "Proses administrasi bisa memakan waktu",
            text: "Sebagai skema jaminan sosial nasional dengan volume peserta sangat besar, proses verifikasi dan pencairan santunan BPJS TK kadang membutuhkan waktu lebih lama dibanding polis PA swasta.",
          },
          {
            icon: Users,
            title: "Tidak fleksibel untuk kebutuhan keluarga",
            text: "BPJS TK melekat pada status kepesertaan tenaga kerja, sedangkan kebutuhan proteksi keluarga (pasangan, anak) memerlukan skema tersendiri seperti PA Individu & Keluarga.",
          },
        ]}
      />
      <p>
        Asuransi PA swasta hadir bukan untuk menggantikan BPJS TK, melainkan melengkapi
        celah-celah di atas dengan nilai pertanggungan yang dapat disesuaikan dan proses
        klaim yang lebih personal.
      </p>

      <SectionHeading icon={Layers}>Dua Skema Utama: PA Individu vs PA Grup</SectionHeading>
      <p>
        Di Batam, kebutuhan proteksi kecelakaan diri umumnya terbagi menjadi dua skema
        besar, tergantung siapa yang menjadi pemegang polis dan siapa yang dilindungi.
      </p>

      <SubHeading icon={UserCheck}>
        <Link href="/asuransi-personal-accident/pa-individu-keluarga" className="font-medium">
          PA Individu &amp; Keluarga
        </Link>
      </SubHeading>
      <p>
        Cocok untuk pekerja lepas, pemilik usaha, atau kepala keluarga yang ingin
        melindungi diri sendiri maupun anggota keluarga dari risiko kecelakaan di luar
        konteks pekerjaan formal. Nilai pertanggungan dapat disesuaikan sesuai kebutuhan
        dan kemampuan finansial masing-masing keluarga, termasuk perlindungan 24 jam yang
        tidak dibatasi hanya pada jam kerja.
      </p>

      <SubHeading icon={HardHat}>
        <Link href="/asuransi-personal-accident/pa-karyawan-grup" className="font-medium">
          PA Karyawan Grup
        </Link>
      </SubHeading>
      <p>
        Dibeli oleh perusahaan untuk melindungi sebagian atau seluruh karyawannya
        sekaligus dalam satu polis. Skema ini populer di kalangan perusahaan galangan
        kapal, kontraktor, dan manufaktur di kawasan industri Batam karena tarif premi
        per kepala relatif lebih ekonomis dibanding polis individu, sekaligus menjadi
        nilai tambah kesejahteraan karyawan (employee benefit).
      </p>

      <SectionHeading icon={ClipboardCheck}>Apa Saja yang Ditanggung?</SectionHeading>
      <p>
        Secara umum, polis Asuransi PA memberikan empat jenis santunan utama. Besaran
        pastinya mengikuti nilai pertanggungan (Sum Insured) yang disepakati saat
        penutupan polis:
      </p>
      <IconList
        items={[
          {
            icon: Banknote,
            title: "Santunan Meninggal Dunia",
            text: "Dibayarkan 100% dari nilai pertanggungan kepada ahli waris apabila tertanggung meninggal dunia akibat kecelakaan yang dijamin polis.",
          },
          {
            icon: ShieldCheck,
            title: "Santunan Cacat Tetap",
            text: "Dibayarkan sesuai persentase dari nilai pertanggungan berdasarkan tabel cacat tetap, tergantung jenis dan tingkat keparahan cedera.",
          },
          {
            icon: Stethoscope,
            title: "Santunan Cacat Sementara",
            text: "Kompensasi mingguan selama masa pemulihan apabila tertanggung untuk sementara tidak dapat bekerja akibat kecelakaan.",
          },
          {
            icon: HeartPulse,
            title: "Penggantian Biaya Pengobatan",
            text: "Reimbursement biaya perawatan medis akibat kecelakaan hingga batas maksimum yang tercantum dalam polis.",
          },
        ]}
      />

      <SubHeading icon={FileSearch}>Contoh Tabel Santunan Cacat Tetap</SubHeading>
      <p>
        Untuk memberi gambaran bagaimana persentase santunan cacat tetap biasanya
        dihitung, berikut contoh ilustrasinya:
      </p>
      <DisabilityTable />

      <SectionHeading icon={Scale}>Faktor yang Menentukan Besaran Premi</SectionHeading>
      <p>
        Premi Asuransi PA sangat dipengaruhi oleh kelas okupasi (occupation class)
        pekerjaan tertanggung. Semakin tinggi risiko fisik pekerjaan, semakin tinggi pula
        kelas okupasi dan tarif preminya. Sebagai gambaran umum di sektor industri Batam:
      </p>
      <IconList
        items={[
          {
            icon: Users,
            title: "Kelas okupasi rendah",
            text: "Pekerjaan administratif, staf kantor, dan aktivitas tanpa risiko fisik signifikan.",
          },
          {
            icon: HardHat,
            title: "Kelas okupasi menengah",
            text: "Pekerja operasional pabrik dengan paparan mesin ringan hingga sedang.",
          },
          {
            icon: Anchor,
            title: "Kelas okupasi tinggi",
            text: "Welder, rigger, pekerja ketinggian, dan aktivitas di area galangan kapal atau lepas pantai.",
          },
        ]}
      />
      <p>
        Menyampaikan jenis pekerjaan secara akurat dan jujur saat pengajuan polis sangat
        penting. Kesalahan atau ketidaksesuaian data okupasi berisiko membuat klaim
        ditolak di kemudian hari karena dianggap sebagai salah saji material (material
        misrepresentation).
      </p>

      <SectionHeading icon={FileWarning}>Cara Menentukan Nilai Pertanggungan yang Tepat</SectionHeading>
      <p>
        Nilai pertanggungan yang terlalu rendah membuat santunan tidak memadai saat
        dibutuhkan, sementara nilai yang terlalu tinggi membuat premi tidak efisien.
        Beberapa pertimbangan praktis yang bisa digunakan:
      </p>
      <IconList
        items={[
          {
            icon: Banknote,
            title: "Hitung berdasarkan tanggungan finansial",
            text: "Pertimbangkan jumlah tanggungan keluarga, cicilan, dan kebutuhan hidup jangka menengah sebagai dasar nilai pertanggungan minimum.",
          },
          {
            icon: ListChecks,
            title: "Sesuaikan dengan tingkat risiko pekerjaan",
            text: "Pekerja di kelas okupasi tinggi sebaiknya mempertimbangkan nilai pertanggungan yang lebih besar mengingat eksposur risikonya.",
          },
          {
            icon: Layers,
            title: "Pertimbangkan kombinasi dengan BPJS TK",
            text: "Nilai pertanggungan PA idealnya dilihat sebagai pelengkap, bukan pengganti, jaminan yang sudah didapat dari BPJS Ketenagakerjaan.",
          },
        ]}
      />

      <SectionHeading icon={Headphones}>Langkah-Langkah Mengajukan Klaim</SectionHeading>
      <p>
        Proses klaim yang tertata rapi akan sangat membantu mempercepat pencairan
        santunan. Berikut alur umum yang perlu diikuti:
      </p>
      <IconList
        items={[
          {
            icon: FileWarning,
            title: "1. Laporkan kejadian secepatnya",
            text: "Sampaikan kronologi awal kepada penanggung atau konsultan Anda, idealnya dalam 2x24 jam sejak kecelakaan terjadi.",
          },
          {
            icon: Stethoscope,
            title: "2. Kumpulkan dokumen medis",
            text: "Minta surat keterangan dokter, hasil diagnosis, dan kuitansi pengobatan asli dari fasilitas kesehatan yang menangani.",
          },
          {
            icon: ClipboardCheck,
            title: "3. Lengkapi dokumen pendukung",
            text: "Siapkan salinan KTP, kronologi tertulis, dan surat keterangan kejadian dari pihak berwenang atau HRD perusahaan.",
          },
          {
            icon: BadgeCheck,
            title: "4. Ajukan dan pantau proses verifikasi",
            text: "Serahkan berkas lengkap ke penanggung melalui agen atau konsultan Anda, lalu pantau status hingga santunan cair.",
          },
        ]}
      />

      <SectionHeading icon={FileSearch}>Pertanyaan yang Sering Diajukan</SectionHeading>
      <div className="space-y-3 not-prose">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group p-5 rounded-xl border border-[#e2e8f0] bg-[#faf8f3]"
          >
            <summary className="font-semibold text-[#0a1628] cursor-pointer list-none flex items-center justify-between gap-3">
              <span className="flex items-center gap-3">
                <BadgeCheck className="w-[16px] h-[16px] text-[#c9a84c] shrink-0" strokeWidth={2} />
                {item.question}
              </span>
              <span className="text-[#c9a84c] group-open:rotate-45 transition-transform text-xl leading-none shrink-0">
                +
              </span>
            </summary>
            <p className="text-[#374151] text-sm mt-3 mb-0 leading-relaxed pl-7">
              {item.answer}
            </p>
          </details>
        ))}
      </div>

      <div className="my-8 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0]">
        <div className="flex items-center gap-2.5 mb-3">
          <ShieldCheck className="w-5 h-5 text-[#c9a84c]" strokeWidth={2} />
          <h3 className="font-display font-bold text-[#0a1628] m-0">
            Konsultasi Asuransi Kecelakaan Diri (PA) di Batam
          </h3>
        </div>
        <p className="text-[#475569] mb-4">
          Setiap sektor pekerjaan punya profil risiko yang berbeda. Rio membantu Anda —
          baik sebagai individu, kepala keluarga, maupun HRD perusahaan — menentukan
          skema dan nilai pertanggungan PA yang realistis sesuai kebutuhan, tanpa
          underinsurance maupun premi yang terbuang percuma.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/asuransi-personal-accident"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            Lihat Semua Produk PA
          </Link>
          <Link
            href="/asuransi-personal-accident/pa-individu-keluarga"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            PA Individu &amp; Keluarga
          </Link>
          <Link
            href="/asuransi-personal-accident/pa-karyawan-grup"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            PA Karyawan Grup
          </Link>
        </div>
      </div>

      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2
          className="text-lg font-bold mb-6"
          style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}
        >
          Halaman Terkait
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#c9a84c" }}
            >
              Produk &amp; Layanan
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/asuransi-personal-accident/pa-individu-keluarga"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Asuransi PA Individu &amp; Keluarga
                </a>
              </li>
              <li>
                <a
                  href="/asuransi-personal-accident/pa-karyawan-grup"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Asuransi PA Karyawan Grup
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#c9a84c" }}
            >
              Artikel Terkait
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/blog/asuransi-proyek-konstruksi-batam"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Asuransi Proyek Konstruksi Batam
                </a>
              </li>
              <li>
                <a
                  href="/blog/asuransi-gudang-kawasan-industri-muka-kuning-batam"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Asuransi Gudang Kawasan Industri Batam
                </a>
              </li>
              <li>
                <a
                  href="/blog/asuransi-pa-pekerja-asing-ke-singapura-dari-batam"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Asuransi PA untuk Pekerja Asing ke Singapura
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
