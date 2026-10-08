// app/asuransi-surety-bond/bid-bond/page.tsx
import type { Metadata } from "next";
import { generateSEO, schemaInsuranceProduct } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  FileText,
  Users,
  Wallet,
  CalendarClock,
  ClipboardList,
  Scale,
  ListChecks,
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

export const metadata: Metadata = generateSEO({
  title: "Bid Bond Batam – Jaminan Penawaran Tender & Lelang",
  description: "Bid bond atau jaminan penawaran di Batam untuk keperluan tender pemerintah, BUMN, dan swasta. Proses cepat, tanpa agunan, diakui resmi. Hubungi Rio untuk konsultasi gratis.",
  keywords: [
    "bid bond batam",
    "jaminan penawaran batam",
    "jaminan tender batam",
    "bid bond konstruksi batam",
    "surety bond bid bond batam",
  ],
  canonical: "https://asuransibatam.com/asuransi-surety-bond/bid-bond",
  languages: {
      id: "https://asuransibatam.com/asuransi-surety-bond/bid-bond",
      en: "https://asuransibatam.com/en/surety-bond-insurance/bid-bond",
    },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bid Bond Batam – Jaminan Penawaran Tender & Lelang",
  description:
    "Panduan lengkap bid bond di Batam: pengertian, fungsi, syarat, dan cara mengajukan jaminan penawaran untuk tender pemerintah dan swasta.",
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
  mainEntityOfPage: "https://asuransibatam.com/asuransi-surety-bond/bid-bond",
};

const serviceSchema = schemaInsuranceProduct({
  name: "Bid Bond (Jaminan Penawaran Tender) Batam",
  description: "Jasa penerbitan bid bond / jaminan penawaran untuk tender pemerintah, BUMN, dan swasta di Batam. Proses cepat, tanpa agunan.",
  url: "/asuransi-surety-bond/bid-bond",
  category: "Surety Bond",
});

export default function BidBondPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ArticleLayout
        cluster="surety"
      title="Bid Bond Batam: Jaminan Penawaran untuk Tender & Lelang"
      description="Panduan lengkap bid bond di Batam — pengertian, fungsi, besaran nilai, syarat dokumen, dan cara cepat mendapatkan jaminan penawaran untuk tender pemerintah maupun swasta."
      date="2025"
      category="Surety Bond"
      readTime="6 menit"
      breadcrumbs={[
        { label: "Surety Bond", href: "/asuransi-surety-bond" },
        { label: "Bid Bond", href: "/asuransi-surety-bond/bid-bond" },
      ]}
      schema={schema}
    >
      {/* ── Intro ── */}
      <p>
        Setiap perusahaan yang mengikuti proses tender di Batam — baik proyek pemerintah,
        BUMN, maupun swasta — umumnya diwajibkan menyertakan <strong>Bid Bond</strong> atau
        <strong> Jaminan Penawaran</strong>. Dokumen ini bukan sekadar formalitas administrasi;
        ia adalah bukti keseriusan dan kemampuan perusahaan Anda untuk memenuhi kewajiban
        kontrak jika terpilih sebagai pemenang tender.
      </p>
      <p>
        Halaman ini menjelaskan secara lengkap apa itu bid bond, siapa yang membutuhkannya,
        berapa nilainya, dan bagaimana cara mendapatkannya dengan cepat di Batam.
      </p>

      {/* ── H2: Apa itu Bid Bond ── */}
      <SectionHeading icon={FileText}>Apa Itu Bid Bond (Jaminan Penawaran)?</SectionHeading>
      <p>
        Bid bond adalah salah satu jenis <Link href="/asuransi-surety-bond">surety bond</Link>{" "}
        yang diterbitkan oleh perusahaan asuransi berlisensi OJK. Fungsinya adalah memberikan
        jaminan kepada pemilik proyek (<em>obligee</em>) bahwa peserta tender (<em>principal</em>)
        yang dinyatakan menang akan:
      </p>
      <ul>
        <li>Menandatangani kontrak pekerjaan sesuai penawaran yang diajukan</li>
        <li>
          Menyerahkan{" "}
          <Link href="/asuransi-surety-bond/performance-bond">Performance Bond</Link> dan{" "}
          <Link href="/asuransi-surety-bond/advance-payment-bond">Advance Payment Bond</Link>{" "}
          dalam batas waktu yang ditentukan
        </li>
        <li>Tidak menarik diri secara sepihak setelah pengumuman pemenang</li>
      </ul>
      <p>
        Apabila pemenang tender ingkar janji, pemilik proyek dapat mencairkan bid bond untuk
        menutup biaya tender ulang atau kerugian yang timbul.
      </p>

      {/* ── H2: Siapa yang Butuh Bid Bond ── */}
      <SectionHeading icon={Users}>Siapa yang Membutuhkan Bid Bond di Batam?</SectionHeading>
      <p>
        Bid bond dibutuhkan oleh berbagai jenis perusahaan yang aktif dalam pengadaan barang dan
        jasa di Batam, antara lain:
      </p>
      <IconList
        items={[
          <><strong>Kontraktor konstruksi</strong> yang mengikuti tender proyek gedung, jalan, dan infrastruktur</>,
          <><strong>Perusahaan manufaktur dan industri</strong> di kawasan industri Batam yang mengikuti pengadaan mesin dan peralatan</>,
          <><strong>Perusahaan pengadaan (procurement)</strong> yang menjadi vendor BUMN, BP Batam, atau perusahaan asing</>,
          <><strong>Perusahaan jasa</strong> seperti IT, cleaning service, dan security yang mengikuti tender layanan</>,
          <><strong>Subkontraktor</strong> yang mengerjakan bagian proyek dari kontraktor utama</>,
        ]}
      />

      {/* ── H2: Besaran Nilai ── */}
      <SectionHeading icon={Wallet}>Berapa Nilai Bid Bond yang Dibutuhkan?</SectionHeading>
      <p>
        Berdasarkan regulasi pengadaan pemerintah (Perpres 16/2018 jo. Perpres 12/2021), nilai
        bid bond umumnya berkisar antara <strong>1% hingga 3%</strong> dari total nilai penawaran
        (Harga Perkiraan Sendiri / HPS). Untuk proyek swasta, besarannya disepakati dalam dokumen
        tender masing-masing.
      </p>
      <p>
        Contoh: jika nilai HPS proyek adalah Rp 10 miliar, maka bid bond yang dibutuhkan
        berkisar Rp 100 juta – Rp 300 juta.
      </p>

      {/* ── H2: Masa Berlaku ── */}
      <SectionHeading icon={CalendarClock}>Masa Berlaku Bid Bond</SectionHeading>
      <p>
        Bid bond berlaku selama periode tender berlangsung, ditambah buffer waktu untuk proses
        penetapan pemenang dan penandatanganan kontrak. Umumnya masa berlaku bid bond adalah
        <strong> 30 hingga 90 hari</strong> sejak tanggal penerbitan, sesuai ketentuan dokumen
        tender. Jika proses tender memanjang, bid bond dapat diperpanjang.
      </p>

      {/* ── H2: Dokumen yang Dibutuhkan ── */}
      <SectionHeading icon={ClipboardList}>Dokumen yang Dibutuhkan untuk Pengajuan Bid Bond</SectionHeading>
      <p>
        Berikut dokumen standar yang perlu disiapkan untuk mengajukan bid bond di Batam:
      </p>
      <ul>
        <li>Akta pendirian perusahaan dan perubahannya (jika ada)</li>
        <li>SIUP / NIB (Nomor Induk Berusaha)</li>
        <li>NPWP perusahaan</li>
        <li>Laporan keuangan 2 tahun terakhir (atau laporan pajak SPT Tahunan)</li>
        <li>Dokumen tender / Undangan Lelang dari pemilik proyek</li>
        <li>Kartu identitas direktur/komisaris</li>
        <li>Pengalaman pekerjaan sejenis (jika tersedia)</li>
      </ul>
      <p>
        Untuk kontraktor baru atau perusahaan yang belum memiliki laporan keuangan audit,
        tetap ada alternatif proses yang dapat didiskusikan bersama praktisi kami.
      </p>

      {/* ── H2: Keunggulan Surety Bond vs Bank Garansi ── */}
      <SectionHeading icon={Scale}>Bid Bond Asuransi vs Bank Garansi: Mana yang Lebih Menguntungkan?</SectionHeading>
      <p>
        Banyak perusahaan di Batam masih menggunakan bank garansi untuk keperluan tender.
        Padahal, bid bond dari perusahaan asuransi menawarkan sejumlah keunggulan signifikan:
      </p>
      <IconList
        items={[
          <><strong>Tanpa blokir dana:</strong> Bank garansi mengharuskan Anda menaruh deposit atau agunan di bank. Bid bond asuransi tidak — likuiditas perusahaan tetap terjaga.</>,
          <><strong>Premi lebih ringan:</strong> Biaya bid bond asuransi umumnya lebih rendah dibandingkan biaya provisi bank garansi.</>,
          <><strong>Proses lebih cepat:</strong> Penerbitan bid bond asuransi dapat selesai dalam 1–3 hari kerja, jauh lebih cepat dari proses bank garansi.</>,
          <><strong>Diakui secara resmi:</strong> Bid bond dari asuransi berlisensi OJK diterima untuk pengadaan pemerintah dan swasta di seluruh Indonesia, termasuk di Batam.</>,
        ]}
      />

      {/* ── H2: Cara Mengajukan ── */}
      <SectionHeading icon={ListChecks}>Cara Mengajukan Bid Bond di Batam</SectionHeading>
      <Steps
        items={[
          { title: "Hubungi kami", desc: "Via WhatsApp atau telepon untuk konsultasi awal dan pengecekan kelayakan." },
          { title: "Siapkan dokumen", desc: "Sesuai checklist di atas dan kirimkan ke tim kami." },
          { title: "Proses underwriting", desc: "Tim kami mengevaluasi kelayakan dan menyiapkan draft bid bond untuk disetujui penanggung." },
          { title: "Penerbitan", desc: "Bid bond dicetak dan diserahkan (fisik atau digital sesuai kebutuhan) dalam 1–3 hari kerja." },
        ]}
      />

      {/* ── H2: Internal Links ── */}
      <SectionHeading icon={Network}>Jenis Surety Bond Lainnya yang Mungkin Anda Butuhkan</SectionHeading>
      <p>
        Selain bid bond, dalam siklus proyek Anda mungkin memerlukan jenis surety bond lain.
        Pelajari lebih lanjut:
      </p>
      <ul>
        <li>
          <Link href="/asuransi-surety-bond/performance-bond">
            Performance Bond – Jaminan Pelaksanaan Proyek
          </Link>
        </li>
        <li>
          <Link href="/asuransi-surety-bond/advance-payment-bond">
            Advance Payment Bond – Jaminan Uang Muka
          </Link>
        </li>
        <li>
          <Link href="/asuransi-surety-bond/maintenance-bond">
            Maintenance Bond – Jaminan Pemeliharaan
          </Link>
        </li>
        <li>
          <Link href="/asuransi-engineering/contractor-all-risk">
            Contractor All Risk (CAR) – Asuransi Proyek Konstruksi
          </Link>
        </li>
      </ul>
      <p>
        Atau kembali ke halaman utama{" "}
        <Link href="/asuransi-surety-bond">Surety Bond Batam</Link> untuk gambaran lengkap.
      </p>

      {/* ── CTA ── */}
      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-lg text-[#c9a84c] mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Konsultasi Bid Bond Gratis dengan Rio
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Anda memiliki dokumen tender di tangan dan membutuhkan bid bond secepatnya? Hubungi
          Rio — praktisi asuransi kerugian dengan pengalaman 8+ tahun di Batam — untuk
          mendapatkan penawaran premi terbaik dan proses penerbitan yang cepat.
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
