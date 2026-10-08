// app/blog/cara-klaim-asuransi-public-liability-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  FileWarning,
  ShieldCheck,
  Clock,
  ListChecks,
  Scale,
  Headphones,
  FileSearch,
  BadgeCheck,
  Stethoscope,
  Camera,
  Users,
  XCircle,
  Anchor,
  Hotel,
  Store,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Cara Klaim Asuransi Public Liability di Batam – Prosedur & Simulasi Kasus",
  description: "Panduan lengkap prosedur klaim Asuransi Public Liability di Batam — dokumen yang dibutuhkan, tahapan proses, simulasi kasus subkontraktor galangan kapal, hotel, dan mall, serta kesalahan umum yang membuat klaim tertunda.",
  canonical: "https://asuransibatam.com/blog/cara-klaim-asuransi-public-liability-batam",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cara Klaim Asuransi Public Liability di Batam: Prosedur & Simulasi Kasus",
  datePublished: "2026-07-02",
  dateModified: "2026-07-02",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

const faqItems = [
  {
    question: "Berapa lama batas waktu melaporkan insiden untuk klaim Public Liability?",
    answer:
      "Sebagai praktik umum, insiden sebaiknya dilaporkan ke penanggung maksimal 2x24 jam sejak kejadian, meskipun detail kerugian belum sepenuhnya jelas. Laporan awal yang cepat membantu penanggung memulai investigasi lebih dini dan mempercepat proses verifikasi.",
  },
  {
    question: "Apakah klaim tetap bisa diproses jika pihak ketiga belum resmi menuntut?",
    answer:
      "Bisa. Banyak kasus dimulai dari laporan insiden terlebih dahulu sebelum somasi atau gugatan resmi diterima. Melaporkan sejak insiden terjadi — bukan menunggu somasi — memberi waktu lebih banyak bagi penanggung untuk membantu proses negosiasi dengan pihak ketiga.",
  },
  {
    question: "Apa yang terjadi jika Additional Insured turut digugat?",
    answer:
      "Apabila principal yang berstatus Additional Insured turut digugat akibat pekerjaan subkontraktor, polis dapat menanggung biaya pembelaan hukum dan ganti rugi untuk keduanya sesuai cakupan dan limit yang berlaku, selama status Additional Insured telah tercantum dalam polis sebelum insiden terjadi.",
  },
  {
    question: "Kenapa proses klaim bisa tertunda?",
    answer:
      "Penyebab paling umum adalah dokumen pendukung tidak lengkap, kronologi kejadian tidak konsisten dengan bukti di lapangan, atau pelaporan yang terlambat sehingga bukti awal sulit diverifikasi. Menyiapkan dokumentasi sejak insiden terjadi sangat membantu mempercepat proses.",
  },
  {
    question: "Apakah deductible (risiko sendiri) berlaku di setiap klaim?",
    answer:
      "Ya, umumnya setiap klaim yang disetujui tetap dikenakan deductible sesuai yang disepakati dalam polis, dan sisanya ditanggung oleh penanggung. Besaran deductible biasanya sudah ditentukan sejak awal penerbitan polis.",
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

function CaseCard({
  icon: Icon,
  sector,
  scenario,
  outcome,
}: {
  icon: React.ElementType;
  sector: string;
  scenario: string;
  outcome: string;
}) {
  return (
    <div className="not-prose p-5 rounded-xl border border-[#e2e8f0] bg-white">
      <div className="flex items-center gap-2.5 mb-2.5">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0a1628]">
          <Icon className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
        </span>
        <span className="font-semibold text-[#0a1628] text-sm">{sector}</span>
      </div>
      <p className="text-sm text-[#374151] leading-relaxed mb-2">{scenario}</p>
      <p className="text-sm text-[#1a4fa0] font-medium leading-relaxed m-0">{outcome}</p>
    </div>
  );
}

export default function ArticleCaraKlaimAsuransiPublicLiabilityBatamPage() {
  return (
    <ArticleLayout cluster="liability"
      title="Cara Klaim Asuransi Public Liability di Batam: Prosedur & Simulasi Kasus"
      description="Punya polis Public Liability saja tidak cukup — memahami cara mengajukan klaim dengan benar sama pentingnya. Berikut prosedur lengkap, dokumen yang dibutuhkan, dan simulasi kasus nyata dari berbagai sektor di Batam."
      date="2 Juli 2026"
      category="Liability"
      readTime="9 menit baca"
      breadcrumbs={[
        {
          label: "Cara Klaim Asuransi Public Liability di Batam",
          href: "/blog/cara-klaim-asuransi-public-liability-batam",
        },
      ]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Memiliki polis{" "}
        <Link href="/asuransi-liability/public-liability" className="font-medium">
          Public Liability Insurance
        </Link>{" "}
        adalah langkah pertama, tapi banyak pemegang polis baru benar-benar memahami
        mekanismenya saat insiden sudah terjadi — sering kali dalam kondisi terburu-buru
        dan tertekan. Memahami prosedur klaim sebelum insiden terjadi akan sangat
        membantu proses berjalan lebih cepat dan lebih lancar.
      </p>
      <p>
        Artikel ini membahas kapan klaim bisa diajukan, dokumen apa saja yang
        dibutuhkan, tahapan proses secara rinci, beberapa simulasi kasus dari sektor
        berbeda, hingga kesalahan umum yang sering membuat klaim tertunda atau ditolak.
      </p>

      <SectionHeading icon={ShieldCheck}>Kapan Klaim Public Liability Bisa Diajukan?</SectionHeading>
      <p>
        Klaim dapat diajukan ketika aktivitas operasional bisnis Anda menyebabkan
        cedera fisik atau kerusakan properti pihak ketiga, dan pihak tersebut menuntut
        atau berpotensi menuntut ganti rugi. Beberapa contoh pemicu klaim yang umum
        terjadi di Batam:
      </p>
      <IconList
        items={[
          {
            icon: Users,
            title: "Cedera pengunjung atau tamu",
            text: "Pengunjung terpeleset, tersandung, atau mengalami kecelakaan di area operasional bisnis Anda.",
          },
          {
            icon: FileWarning,
            title: "Kerusakan properti pihak ketiga",
            text: "Aset milik klien, principal, atau pihak lain rusak akibat kelalaian dalam operasional atau pekerjaan Anda.",
          },
          {
            icon: Stethoscope,
            title: "Cedera pekerja pihak ketiga",
            text: "Personel dari perusahaan lain (misalnya pengawas principal) mengalami cedera di area kerja Anda.",
          },
          {
            icon: Scale,
            title: "Tuntutan pasca pekerjaan selesai",
            text: "Klaim yang muncul setelah pekerjaan diserahterimakan, seperti kerusakan akibat hasil pekerjaan yang bermasalah.",
          },
        ]}
      />

      <SectionHeading icon={ListChecks}>Dokumen yang Dibutuhkan untuk Klaim</SectionHeading>
      <IconList
        items={[
          {
            icon: Camera,
            title: "Dokumentasi lokasi kejadian",
            text: "Foto atau video kondisi lokasi segera setelah insiden, sebelum ada perubahan kondisi fisik.",
          },
          {
            icon: FileWarning,
            title: "Kronologi tertulis",
            text: "Catatan kejadian secara rinci: waktu, lokasi, pihak yang terlibat, dan urutan peristiwa.",
          },
          {
            icon: Users,
            title: "Keterangan saksi",
            text: "Nama dan kontak saksi yang melihat langsung kejadian, jika ada.",
          },
          {
            icon: Stethoscope,
            title: "Bukti medis atau kerugian",
            text: "Surat keterangan dokter dan kuitansi pengobatan, atau estimasi biaya perbaikan untuk kerusakan properti.",
          },
        ]}
      />

      <SectionHeading icon={Clock}>Tahapan Proses Klaim</SectionHeading>
      <IconList
        items={[
          {
            icon: FileWarning,
            title: "1. Laporkan insiden secepatnya",
            text: "Hubungi penanggung atau konsultan Anda dalam 2x24 jam sejak kejadian, sertakan kronologi awal.",
          },
          {
            icon: Camera,
            title: "2. Amankan bukti awal",
            text: "Dokumentasikan lokasi, kondisi kerusakan, dan kumpulkan data saksi sebelum kondisi berubah.",
          },
          {
            icon: Scale,
            title: "3. Investigasi & verifikasi",
            text: "Penanggung menilai keabsahan klaim, memverifikasi bukti, dan menghitung estimasi kerugian.",
          },
          {
            icon: BadgeCheck,
            title: "4. Negosiasi & penyelesaian",
            text: "Penanggung dapat membantu proses negosiasi dengan pihak ketiga dan menyelesaikan pembayaran sesuai cakupan polis.",
          },
        ]}
      />

      <SectionHeading icon={FileSearch}>Simulasi Kasus dari Berbagai Sektor</SectionHeading>
      <p>
        Berikut beberapa gambaran skenario umum untuk membantu memahami bagaimana
        klaim Public Liability bekerja dalam praktik:
      </p>
      <div className="not-prose grid gap-3 my-5">
        <CaseCard
          icon={Anchor}
          sector="Subkontraktor Galangan Kapal"
          scenario="Pekerja pihak ketiga (personel principal) mengalami cedera akibat serpihan material saat proses blasting di area kerja subkon."
          outcome="→ Biaya pengobatan, biaya pembelaan hukum, dan ganti rugi ditanggung sesuai limit polis; subkon membayar deductible yang disepakati."
        />
        <CaseCard
          icon={Hotel}
          sector="Hotel & Resort"
          scenario="Tamu terpeleset di area kolam renang akibat lantai basah tanpa rambu peringatan, mengalami cedera dan dirawat inap."
          outcome="→ Biaya rumah sakit dan potensi tuntutan lanjutan menjadi tanggungan polis, sepanjang insiden sesuai cakupan yang berlaku."
        />
        <CaseCard
          icon={Store}
          sector="Mall & Tenant Ritel"
          scenario="Pengunjung mengalami kecelakaan di area eskalator yang sedang dalam perbaikan tanpa penutupan akses yang memadai."
          outcome="→ Klaim diproses berdasarkan investigasi kelalaian operasional, dengan biaya pembelaan hukum turut ditanggung."
        />
      </div>
      <p className="text-xs text-[#475569]">
        Skenario di atas adalah ilustrasi umum untuk tujuan edukasi, bukan representasi
        kasus klaim aktual dari klien tertentu.
      </p>

      <SectionHeading icon={XCircle}>Kesalahan Umum yang Membuat Klaim Tertunda</SectionHeading>
      <IconList
        items={[
          {
            icon: Clock,
            title: "Pelaporan terlambat",
            text: "Menunda pelaporan hingga situasi memburuk membuat bukti awal sulit diverifikasi.",
          },
          {
            icon: FileWarning,
            title: "Kronologi tidak konsisten",
            text: "Perbedaan antara laporan awal dan keterangan lanjutan dapat memperlambat proses verifikasi.",
          },
          {
            icon: ListChecks,
            title: "Dokumen tidak lengkap",
            text: "Kurangnya bukti pendukung membuat penanggung perlu meminta tambahan dokumen berulang kali.",
          },
          {
            icon: Users,
            title: "Komunikasi langsung dengan penggugat tanpa koordinasi",
            text: "Sebaiknya koordinasikan setiap komunikasi dengan pihak ketiga bersama penanggung agar tidak memengaruhi proses klaim.",
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
          <Headphones className="w-5 h-5 text-[#c9a84c]" strokeWidth={2} />
          <h3 className="font-display font-bold text-[#0a1628] m-0">
            Butuh Pendampingan Klaim Public Liability?
          </h3>
        </div>
        <p className="text-[#475569] mb-4">
          Rio membantu pemegang polis di Batam menyiapkan dokumen klaim yang lengkap
          sejak insiden pertama kali dilaporkan, agar proses verifikasi berjalan cepat
          tanpa bolak-balik permintaan dokumen tambahan.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/asuransi-liability/public-liability"
            className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm"
          >
            Lihat Produk Public Liability
          </Link>
          <Link
            href="/blog/asuransi-public-liability-batam-panduan-lengkap"
            className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm"
          >
            Panduan Lengkap Public Liability
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
                  href="/asuransi-liability/public-liability"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Asuransi Public Liability
                </a>
              </li>
              <li>
                <a
                  href="/asuransi-liability"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Semua Produk Liability
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
                  href="/blog/asuransi-public-liability-batam-panduan-lengkap"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Asuransi Public Liability di Batam: Panduan Lengkap
                </a>
              </li>
              <li>
                <a
                  href="/blog/klaim-asuransi-limbah-b3-kawasan-industri-batam"
                  className="text-sm text-blue-700 hover:underline font-medium"
                >
                  → Cara Klaim Asuransi Limbah B3 Kawasan Industri Batam
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
