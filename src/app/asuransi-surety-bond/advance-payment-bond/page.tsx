// app/asuransi-surety-bond/advance-payment-bond/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaInsuranceProduct } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  Banknote,
  TrendingDown,
  Wallet,
  Users,
  ClipboardList,
  Network,
  MessageCircleMore,
  CheckCircle2,
} from "lucide-react";

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

function IconList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="not-prose grid gap-3 my-5 list-none p-0">
      {items.map((text, i) => (
        <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf8f3] border border-[#eee3cc]">
          <CheckCircle2 className="w-[18px] h-[18px] text-[#1a7a4c] shrink-0 mt-0.5" strokeWidth={2} />
          <span className="text-sm text-[#374151] leading-relaxed">{text}</span>
        </li>
      ))}
    </ul>
  );
}

export const metadata: Metadata = generateSEO({
  title: "Advance Payment Bond Batam – Jaminan Uang Muka Proyek",
  description: "Advance payment bond atau jaminan uang muka di Batam. Lindungi pemberi kerja dari risiko kontraktor gagal setelah menerima uang muka proyek. Proses cepat, premi kompetitif. Hubungi Rio.",
  keywords: [
    "advance payment bond batam",
    "jaminan uang muka batam",
    "jaminan uang muka proyek batam",
    "surety bond uang muka batam",
    "jaminan down payment konstruksi batam",
  ],
  canonical: "https://asuransibatam.com/asuransi-surety-bond/advance-payment-bond",
  languages: {
      id: "https://asuransibatam.com/asuransi-surety-bond/advance-payment-bond",
      en: "https://asuransibatam.com/en/surety-bond-insurance/advance-payment-bond",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Advance Payment Bond Batam – Jaminan Uang Muka Proyek",
  description:
    "Panduan advance payment bond di Batam: fungsi, besaran nilai, dokumen, dan cara pengajuan jaminan uang muka untuk proyek konstruksi dan pengadaan.",
  author: {
    "@type": "Person",
    name: "Rio Mardiansyah",
    jobTitle: "Praktisi Asuransi",
  },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Batam",
    url: "https://asuransibatam.com",
  },
  mainEntityOfPage:
    "https://asuransibatam.com/asuransi-surety-bond/advance-payment-bond",
};

const serviceSchema = schemaInsuranceProduct({
  name: "Advance Payment Bond (Jaminan Uang Muka) Batam",
  description: "Advance payment bond atau jaminan uang muka proyek di Batam. Melindungi pemberi kerja dari risiko kontraktor gagal setelah menerima uang muka.",
  url: "/asuransi-surety-bond/advance-payment-bond",
  category: "Surety Bond",
});

export default function AdvancePaymentBondPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ArticleLayout
        cluster="surety"
        showRequirements
      title="Advance Payment Bond Batam: Jaminan Keamanan Uang Muka Proyek"
      description="Panduan lengkap advance payment bond di Batam — pengertian, fungsi, besaran nilai, mekanisme pengurangan, dan cara mendapatkan jaminan uang muka untuk proyek konstruksi dan pengadaan."
      date="2025"
      category="Surety Bond"
      readTime="6 menit"
      breadcrumbs={[
        { label: "Surety Bond", href: "/asuransi-surety-bond" },
        {
          label: "Advance Payment Bond",
          href: "/asuransi-surety-bond/advance-payment-bond",
        },
      ]}
      schema={schema}
    >
      {/* ── Intro ── */}
      <p>
        Dalam banyak kontrak proyek di Batam, pemilik proyek memberikan uang muka kepada
        kontraktor untuk membiayai mobilisasi, pembelian material awal, atau pengadaan
        peralatan. Namun pembayaran uang muka ini membawa risiko: bagaimana jika kontraktor
        menghilang atau gagal memulai pekerjaan setelah menerima dana tersebut?
      </p>
      <p>
        Jawabannya adalah <strong>Advance Payment Bond</strong> (APB) atau{" "}
        <strong>Jaminan Uang Muka</strong>. Dokumen ini melindungi pemilik proyek dari risiko
        kerugian finansial akibat kegagalan kontraktor setelah menerima pembayaran awal.
      </p>

      {/* ── H2: Definisi ── */}
      <SectionHeading icon={Banknote}>Apa Itu Advance Payment Bond?</SectionHeading>
      <p>
        Advance payment bond adalah jenis <Link href="/asuransi-surety-bond">surety bond</Link>{" "}
        yang memberikan jaminan kepada pemilik proyek (<em>obligee</em>) bahwa apabila kontraktor
        (<em>principal</em>) gagal menjalankan kewajibannya setelah menerima uang muka, maka
        perusahaan asuransi (<em>surety</em>) akan mengganti kerugian senilai uang muka yang
        belum dikembalikan.
      </p>
      <p>
        Nilai advance payment bond mengikuti besaran uang muka yang diberikan dan secara
        otomatis berkurang seiring dengan penyerapan uang muka dalam tagihan progress
        pembayaran kontraktor.
      </p>

      {/* ── H2: Mekanisme Pengurangan ── */}
      <SectionHeading icon={TrendingDown}>Bagaimana Mekanisme Pengurangan Nilai Advance Payment Bond?</SectionHeading>
      <p>
        Salah satu keunikan advance payment bond dibanding jenis surety bond lainnya adalah
        nilai jaminannya berkurang secara proporsional. Berikut ilustrasinya:
      </p>
      <IconList
        items={[
          <>Nilai kontrak: <strong>Rp 20 miliar</strong>, uang muka 20% = <strong>Rp 4 miliar</strong></>,
          <>Advance payment bond diterbitkan senilai <strong>Rp 4 miliar</strong> (setara uang muka)</>,
          <>Setiap kali kontraktor mengajukan tagihan progress dan di dalamnya terdapat potongan uang muka, nilai bond otomatis berkurang secara proporsional</>,
          <>Ketika uang muka telah dipotong penuh dari tagihan, advance payment bond dinyatakan lunas dan tidak berlaku lagi</>,
        ]}
      />
      <p>
        Mekanisme ini memastikan bahwa nilai jaminan selalu mencerminkan sisa uang muka yang
        belum diserap, sehingga pemilik proyek mendapatkan perlindungan yang akurat sepanjang
        proyek berjalan.
      </p>

      {/* ── H2: Besaran Nilai ── */}
      <SectionHeading icon={Wallet}>Berapa Besaran Uang Muka dan Nilai Advance Payment Bond?</SectionHeading>
      <p>
        Untuk pengadaan pemerintah, ketentuan uang muka diatur dalam peraturan pengadaan yang
        berlaku:
      </p>
      <IconList
        items={[
          <><strong>Usaha Kecil:</strong> uang muka maksimal 30% dari nilai kontrak</>,
          <><strong>Usaha Non-Kecil / Badan Usaha:</strong> uang muka maksimal 20% dari nilai kontrak</>,
        ]}
      />
      <p>
        Untuk kontrak swasta di Batam, besaran uang muka disepakati dalam kontrak — umumnya
        berkisar 10%–30% dari nilai kontrak. Advance payment bond harus senilai penuh dengan
        uang muka yang diterima.
      </p>

      {/* ── H2: Kapan APB Dibutuhkan ── */}
      <SectionHeading icon={Users}>Kapan Advance Payment Bond Dibutuhkan?</SectionHeading>
      <p>
        Advance payment bond diperlukan saat kontraktor menerima uang muka dari:
      </p>
      <IconList
        items={[
          <>Proyek konstruksi pemerintah di Batam (wajib sesuai regulasi pengadaan)</>,
          <>Proyek BUMN dan badan usaha yang mempersyaratkan uang muka dalam kontrak</>,
          <>Proyek EPC di kawasan industri Batam (Batamindo, Kabil, Tanjung Uncang, dll.)</>,
          <>Kontrak pengadaan mesin, peralatan, atau material dengan pembayaran awal yang signifikan</>,
          <>Proyek swasta yang melibatkan investor asing (<em>foreign direct investment</em>) di Batam dengan persyaratan jaminan ketat</>,
        ]}
      />

      {/* ── H2: Dokumen ── */}
      <SectionHeading icon={ClipboardList}>Dokumen yang Dibutuhkan untuk Advance Payment Bond</SectionHeading>
      <ul>
        <li>Salinan kontrak / SPK yang memuat klausul uang muka</li>
        <li>
          Salinan <Link href="/asuransi-surety-bond/performance-bond">Performance Bond</Link>{" "}
          yang telah diterbitkan (biasanya APB menyusul setelah PB)
        </li>
        <li>Akta pendirian perusahaan dan NIB/SIUP</li>
        <li>NPWP perusahaan</li>
        <li>Laporan keuangan 2 tahun terakhir</li>
        <li>Rekening koran 3 bulan terakhir</li>
        <li>Surat permohonan uang muka dari kontraktor kepada pemilik proyek</li>
      </ul>

      {/* ── H2: Internal Links ── */}
      <SectionHeading icon={Network}>Surety Bond Lain yang Relevan untuk Proyek Anda</SectionHeading>
      <ul>
        <li>
          <Link href="/asuransi-surety-bond/bid-bond">
            Bid Bond – Jaminan Penawaran sebelum Tender
          </Link>
        </li>
        <li>
          <Link href="/asuransi-surety-bond/performance-bond">
            Performance Bond – Jaminan Pelaksanaan Kontrak
          </Link>
        </li>
        <li>
          <Link href="/asuransi-surety-bond/maintenance-bond">
            Maintenance Bond – Jaminan Pemeliharaan setelah Proyek Selesai
          </Link>
        </li>
        <li>
          <Link href="/asuransi-engineering/contractor-all-risk">
            Contractor All Risk – Asuransi Fisik Proyek Konstruksi di Batam
          </Link>
        </li>
      </ul>

      {/* ── CTA ── */}
      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-lg text-[#c9a84c] mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Ajukan Advance Payment Bond di Batam Sekarang
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Jangan biarkan pencairan uang muka tertunda hanya karena penerbitan advance payment bond
          yang lambat. Tim kami membantu proses dari dokumen hingga penerbitan dalam 1–3 hari
          kerja. Hubungi Rio untuk konsultasi gratis.
        </p>
        <p className="text-sm text-white/80">
          <strong className="text-[#c9a84c]">WhatsApp:</strong> 0813-7333-6728 &nbsp;|&nbsp;
          <strong className="text-[#c9a84c]">Layanan:</strong> Senin–Sabtu, 08.00–17.00 WIB
        </p>
      </div>
    </ArticleLayout>
    </>
  );
}
