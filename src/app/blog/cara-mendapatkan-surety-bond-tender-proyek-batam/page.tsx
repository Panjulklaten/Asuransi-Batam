// app/blog/cara-mendapatkan-surety-bond-tender-proyek-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  FileText,
  ClipboardCheck,
  ShieldCheck,
  Building2,
  Layers,
  FileWarning,
  Scale,
  Headphones,
  FileSearch,
  BadgeCheck,
  Banknote,
  ListChecks,
  Clock,
  UserCheck,
  HardHat,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Cara Mendapatkan Surety Bond untuk Tender Proyek di Batam – Panduan Lengkap",
  description: "Panduan lengkap bagi kontraktor di Batam untuk mendapatkan Surety Bond — dokumen yang dibutuhkan, jenis-jenis bond (bid bond, performance bond, advance payment bond, maintenance bond), tahapan proses, dan tips agar pengajuan disetujui lebih cepat.",
  canonical: "https://asuransibatam.com/blog/cara-mendapatkan-surety-bond-tender-proyek-batam",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cara Mendapatkan Surety Bond untuk Tender Proyek di Batam: Panduan Lengkap",
  datePublished: "2026-07-02",
  dateModified: "2026-07-02",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

// FAQPage JSON-LD — sumber tunggal untuk schema & accordion FAQ visual di bawah.
const faqItems = [
  {
    question: "Apakah surety bond sama dengan bank garansi?",
    answer:
      "Keduanya sama-sama berfungsi sebagai jaminan, tetapi mekanismenya berbeda. Bank garansi mensyaratkan agunan atau dana yang diblokir di bank, sedangkan surety bond dari perusahaan asuransi umumnya berbasis penilaian kelayakan (underwriting) kontraktor tanpa memblokir modal kerja, sehingga arus kas kontraktor lebih longgar.",
  },
  {
    question: "Berapa lama proses penerbitan surety bond di Batam?",
    answer:
      "Untuk pengajuan dengan dokumen lengkap dan nilai jaminan standar, penerbitan umumnya dapat diselesaikan dalam 1–3 hari kerja setelah proses underwriting selesai. Nilai jaminan besar atau proyek dengan profil risiko khusus bisa membutuhkan waktu evaluasi tambahan.",
  },
  {
    question: "Dokumen apa saja yang wajib disiapkan kontraktor?",
    answer:
      "Secara umum dibutuhkan salinan akta perusahaan, NPWP, SIUP/NIB, pengalaman proyek sejenis, laporan keuangan, serta dokumen kontrak atau dokumen tender/lelang terkait. Persyaratan detail dapat bervariasi tergantung jenis bond dan nilai jaminan yang diajukan.",
  },
  {
    question: "Apa yang terjadi jika kontraktor gagal memenuhi kewajiban kontrak?",
    answer:
      "Obligee (pemilik proyek) dapat mengajukan klaim kepada penanggung. Setelah klaim diverifikasi, penanggung dapat membayar ganti rugi sesuai nilai jaminan atau membantu penyelesaian pekerjaan, tergantung jenis bond dan ketentuan polis. Penanggung kemudian berhak melakukan subrogasi terhadap kontraktor yang wanprestasi.",
  },
  {
    question: "Apakah kontraktor baru tanpa rekam jejak proyek besar bisa mengajukan surety bond?",
    answer:
      "Bisa, tetapi nilai jaminan yang disetujui biasanya lebih konservatif pada tahap awal. Membangun rekam jejak proyek kecil-menengah yang diselesaikan tepat waktu akan membantu meningkatkan kapasitas dan limit bond pada pengajuan berikutnya.",
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

function BondStagesTable() {
  const rows = [
    {
      tahap: "Tender / Lelang",
      bond: "Bid Bond",
      fungsi: "Menjamin keseriusan peserta tender agar tidak mundur setelah ditunjuk sebagai pemenang.",
    },
    {
      tahap: "Awal Pelaksanaan",
      bond: "Performance Bond",
      fungsi: "Menjamin kontraktor menyelesaikan pekerjaan sesuai spesifikasi dan jadwal kontrak.",
    },
    {
      tahap: "Setelah Menerima Uang Muka",
      bond: "Advance Payment Bond",
      fungsi: "Menjamin uang muka yang diterima kontraktor digunakan sesuai peruntukan proyek.",
    },
    {
      tahap: "Pasca Serah Terima",
      bond: "Maintenance Bond",
      fungsi: "Menjamin kontraktor memperbaiki cacat/kerusakan selama masa pemeliharaan.",
    },
  ];
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-[#e2e8f0]">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-[#0a1628] text-white">
            <th className="p-3 font-semibold">Tahap Proyek</th>
            <th className="p-3 font-semibold">Jenis Bond</th>
            <th className="p-3 font-semibold">Fungsi Utama</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
              <td className="p-3 text-[#0a1628] font-semibold border-t border-[#e2e8f0] whitespace-nowrap">
                {r.tahap}
              </td>
              <td className="p-3 text-[#1a4fa0] font-medium border-t border-[#e2e8f0] whitespace-nowrap">
                {r.bond}
              </td>
              <td className="p-3 text-[#374151] border-t border-[#e2e8f0]">{r.fungsi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ArticleCaraMendapatkanSuretyBondTenderProyekBatamPage() {
  return (
    <ArticleLayout
      cluster="surety"
      title="Cara Mendapatkan Surety Bond untuk Tender Proyek di Batam: Panduan Lengkap"
      description="Bagi kontraktor di Batam, surety bond bukan sekadar syarat administratif tender — ia adalah instrumen yang menjaga arus kas tetap sehat sekaligus membangun kepercayaan di mata pemilik proyek. Berikut panduan lengkap dari tahap tender hingga pasca serah terima."
      date="2 Juli 2026"
      category="Surety Bond"
      readTime="11 menit baca"
      breadcrumbs={[
        {
          label: "Cara Mendapatkan Surety Bond untuk Tender Proyek di Batam",
          href: "/blog/cara-mendapatkan-surety-bond-tender-proyek-batam",
        },
      ]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Batam adalah salah satu pusat konstruksi dan pengadaan terbesar di kawasan barat
        Indonesia, mulai dari proyek kawasan industri, infrastruktur BP Batam, hingga
        fasilitas galangan kapal. Hampir semua tender di sektor ini mensyaratkan jaminan
        dalam bentuk{" "}
        <Link href="/asuransi-surety-bond" className="font-medium">
          Surety Bond
        </Link>{" "}
        pada berbagai tahapnya. Sayangnya, banyak kontraktor — terutama yang baru mulai
        mengikuti tender skala menengah-besar — masih belum memahami jenis bond apa yang
        dibutuhkan di setiap tahap, dokumen apa yang harus disiapkan, dan bagaimana
        proses pengajuannya berjalan.
      </p>
      <p>
        Artikel ini membahas secara menyeluruh empat jenis surety bond yang paling umum
        dibutuhkan kontraktor di Batam, tahapan proses pengajuannya, serta hal-hal yang
        perlu diperhatikan agar pengajuan disetujui lebih cepat.
      </p>

      <SectionHeading icon={ShieldCheck}>Apa Itu Surety Bond?</SectionHeading>
      <p>
        Surety bond adalah perjanjian tiga pihak antara penanggung (perusahaan
        asuransi/penjamin), principal (kontraktor), dan obligee (pemilik proyek atau
        panitia lelang). Melalui bond ini, penanggung menjamin bahwa principal akan
        memenuhi kewajibannya sesuai kontrak. Apabila principal gagal memenuhi
        kewajibannya (wanprestasi), obligee berhak mengajukan klaim kepada penanggung.
      </p>
      <p>
        Produk surety bond hanya boleh diterbitkan oleh perusahaan asuransi umum yang
        berizin dan diawasi Otoritas Jasa Keuangan (OJK). Sebelum menerima penawaran,
        pastikan Anda memeriksa legalitas penanggung dan memahami syarat serta
        pengecualian yang tercantum dalam dokumen bond.
      </p>

      <SectionHeading icon={Layers}>Empat Jenis Bond Sesuai Tahapan Proyek</SectionHeading>
      <p>
        Kebutuhan surety bond berubah seiring berjalannya siklus proyek — dari saat
        mengikuti tender hingga masa pemeliharaan selesai. Berikut ringkasannya:
      </p>
      <BondStagesTable />

      <SubHeading icon={FileText}>
        <Link href="/asuransi-surety-bond/bid-bond" className="font-medium">
          Bid Bond (Jaminan Penawaran)
        </Link>
      </SubHeading>
      <p>
        Diperlukan saat mengikuti tender atau lelang, biasanya bernilai 1–3% dari total
        nilai penawaran. Bid bond menjamin bahwa peserta tender yang ditunjuk sebagai
        pemenang tidak akan mundur atau menolak menandatangani kontrak.
      </p>

      <SubHeading icon={HardHat}>
        <Link href="/asuransi-surety-bond/performance-bond" className="font-medium">
          Performance Bond (Jaminan Pelaksanaan)
        </Link>
      </SubHeading>
      <p>
        Diajukan setelah kontraktor ditetapkan sebagai pemenang, sebagai syarat
        penandatanganan kontrak pelaksanaan. Bond ini menjamin proyek diselesaikan sesuai
        spesifikasi, kualitas, dan jadwal yang disepakati.
      </p>

      <SubHeading icon={Banknote}>
        <Link href="/asuransi-surety-bond/advance-payment-bond" className="font-medium">
          Advance Payment Bond (Jaminan Uang Muka)
        </Link>
      </SubHeading>
      <p>
        Dibutuhkan apabila kontraktor menerima uang muka dari obligee di awal proyek.
        Bond ini menjamin uang muka tersebut benar-benar digunakan untuk keperluan
        proyek dan bukan disalahgunakan.
      </p>

      <SubHeading icon={ClipboardCheck}>
        <Link href="/asuransi-surety-bond/maintenance-bond" className="font-medium">
          Maintenance Bond (Jaminan Pemeliharaan)
        </Link>
      </SubHeading>
      <p>
        Berlaku setelah serah terima pekerjaan, menjamin kontraktor akan memperbaiki
        cacat atau kerusakan yang muncul selama masa pemeliharaan (defect liability
        period) sesuai ketentuan kontrak.
      </p>
      <p className="text-sm text-[#475569]">
        Ingin memahami perbedaan detail antara dua bond yang paling sering
        dipertukarkan?{" "}
        <Link
          href="/blog/perbedaan-bid-bond-performance-bond"
          className="font-medium text-[#1a4fa0]"
        >
          Baca perbandingan lengkap Bid Bond vs Performance Bond
        </Link>
        .
      </p>

      <SectionHeading icon={FileSearch}>Dokumen yang Perlu Disiapkan</SectionHeading>
      <p>
        Kelengkapan dokumen adalah faktor terbesar yang menentukan kecepatan proses
        underwriting. Secara umum, penanggung akan meminta:
      </p>
      <IconList
        items={[
          {
            icon: Building2,
            title: "Legalitas perusahaan",
            text: "Akta pendirian & perubahan, NPWP, SIUP/NIB, dan susunan pengurus terkini.",
          },
          {
            icon: Banknote,
            title: "Laporan keuangan",
            text: "Laporan keuangan 1–2 tahun terakhir untuk menilai kapasitas dan kesehatan finansial perusahaan.",
          },
          {
            icon: ListChecks,
            title: "Rekam jejak proyek",
            text: "Daftar pengalaman proyek sejenis, termasuk nilai kontrak dan status penyelesaiannya.",
          },
          {
            icon: FileText,
            title: "Dokumen kontrak/tender",
            text: "Surat penunjukan, dokumen lelang, atau draft kontrak yang menjadi dasar penerbitan bond.",
          },
        ]}
      />

      <SectionHeading icon={Clock}>Tahapan Proses Pengajuan</SectionHeading>
      <IconList
        items={[
          {
            icon: Headphones,
            title: "1. Konsultasi awal",
            text: "Diskusikan jenis bond, nilai jaminan, dan tenggat waktu tender/proyek Anda dengan konsultan.",
          },
          {
            icon: FileWarning,
            title: "2. Pengumpulan dokumen",
            text: "Lengkapi seluruh dokumen sesuai checklist agar tidak ada bolak-balik permintaan tambahan.",
          },
          {
            icon: Scale,
            title: "3. Proses underwriting",
            text: "Penanggung mengevaluasi kelayakan perusahaan dan proyek untuk menentukan limit serta premi bond.",
          },
          {
            icon: BadgeCheck,
            title: "4. Penerbitan bond",
            text: "Setelah disetujui, bond diterbitkan (fisik atau digital) dan siap diserahkan kepada obligee.",
          },
        ]}
      />

      <SectionHeading icon={Landmark}>
        Surety Bond vs Bank Garansi: Mana yang Lebih Menguntungkan Arus Kas?
      </SectionHeading>
      <p>
        Banyak kontraktor terbiasa menggunakan bank garansi sebagai instrumen jaminan.
        Perbedaan mendasar terletak pada agunan: bank garansi umumnya mensyaratkan dana
        tunai atau aset yang diblokir sebagai jaminan (collateral), sehingga mengunci
        modal kerja perusahaan. Surety bond dari perusahaan asuransi lebih berbasis
        penilaian kelayakan (character, capacity, capital) kontraktor, sehingga modal
        kerja tetap dapat digunakan untuk operasional proyek lain.
      </p>
      <p>
        Bagi kontraktor yang menjalankan beberapa proyek sekaligus, karakteristik ini
        membuat surety bond menjadi pilihan yang lebih efisien secara arus kas
        dibandingkan mengunci dana di bank untuk setiap jaminan yang dibutuhkan.
      </p>

      <SectionHeading icon={UserCheck}>Tips Agar Pengajuan Disetujui Lebih Cepat</SectionHeading>
      <IconList
        items={[
          {
            icon: ListChecks,
            title: "Siapkan dokumen sejak awal",
            text: "Jangan menunggu mendekati tenggat tender untuk mulai mengumpulkan dokumen legalitas dan keuangan.",
          },
          {
            icon: Scale,
            title: "Bangun rekam jejak bertahap",
            text: "Kontraktor baru sebaiknya memulai dari proyek bernilai wajar agar limit bond dapat meningkat secara konsisten.",
          },
          {
            icon: Headphones,
            title: "Konsultasikan nilai jaminan sejak dini",
            text: "Diskusi awal dengan konsultan membantu menghindari nilai jaminan yang keliru dan revisi dokumen berulang.",
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
            Konsultasi Surety Bond untuk Proyek Anda di Batam
          </h3>
        </div>
        <p className="text-[#475569] mb-4">
          Setiap tender dan kontrak punya karakteristik jaminan yang berbeda. Rio
          membantu kontraktor di Batam menentukan jenis bond yang tepat, menyiapkan
          dokumen agar proses underwriting berjalan lancar, dan mendapatkan limit bond
          yang realistis sesuai kapasitas perusahaan.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/asuransi-surety-bond"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            Lihat Semua Produk Surety Bond
          </Link>
          <Link
            href="/asuransi-surety-bond/bid-bond"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Bid Bond
          </Link>
          <Link
            href="/asuransi-surety-bond/performance-bond"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Performance Bond
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
                  href="/asuransi-surety-bond/advance-payment-bond"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Advance Payment Bond
                </a>
              </li>
              <li>
                <a
                  href="/asuransi-surety-bond/maintenance-bond"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Maintenance Bond
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
                  href="/blog/perbedaan-bid-bond-performance-bond"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Perbedaan Bid Bond dan Performance Bond
                </a>
              </li>
              <li>
                <a
                  href="/blog/asuransi-proyek-konstruksi-batam"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Asuransi Proyek Konstruksi Batam
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
