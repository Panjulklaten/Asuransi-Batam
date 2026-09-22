// app/blog/cara-klaim-asuransi-ffl-freight-forwarder-batam/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  ClipboardList,
  Camera,
  FileText,
  PhoneCall,
  Search,
  XCircle,
  Package,
  MessageCircleMore,
  AlertTriangle,
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

function StepList({ items }: { items: { icon: React.ElementType; title: string; desc: string }[] }) {
  return (
    <ol className="not-prose grid gap-3 my-5 list-none p-0">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <li key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-[#faf8f3] border border-[#eee3cc]">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0a1628] text-[#c9a84c] font-bold text-sm shrink-0">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-[#0a1628] m-0 text-[15px] flex items-center gap-2">
                <Icon className="w-[15px] h-[15px] text-[#1a4fa0]" strokeWidth={2} /> {item.title}
              </p>
              <p className="text-sm text-[#475569] mt-1 mb-0 leading-relaxed">{item.desc}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export const metadata: Metadata = generateSEO({
  title: "Cara Klaim Asuransi FFL (Freight Forwarders Liability) di Batam: Panduan Step-by-Step",
  description:
    "Panduan langkah demi langkah mengajukan klaim asuransi Freight Forwarders Liability (FFL) di Batam — dokumen yang dibutuhkan, timeline, penyebab klaim ditolak, dan tips mempercepat proses. Konsultasi Rio 0813-7333-6728.",
  canonical: "https://asuransibatam.com/blog/cara-klaim-asuransi-ffl-freight-forwarder-batam",
  languages: {
    id: "https://asuransibatam.com/blog/cara-klaim-asuransi-ffl-freight-forwarder-batam",
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa lama batas waktu melapor klaim FFL setelah insiden terjadi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Umumnya paling lambat 3×24 jam sejak insiden diketahui. Semakin cepat notifikasi dilakukan, semakin besar peluang bukti (CCTV, kondisi fisik barang, keterangan saksi) masih dapat diverifikasi secara utuh oleh adjuster.",
      },
    },
    {
      "@type": "Question",
      name: "Apa penyebab paling umum klaim FFL ditolak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Penyebab paling umum: keterlambatan notifikasi ke penanggung, dokumen serah terima (delivery order/berita acara) yang tidak lengkap, forwarder mengakui kesalahan atau menyepakati ganti rugi secara sepihak sebelum berkoordinasi dengan penanggung, serta klaim yang ternyata berada di luar cakupan wilayah (territorial scope) polis.",
      },
    },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Klaim Asuransi FFL (Freight Forwarders Liability) di Batam: Panduan Step-by-Step",
  description:
    "Panduan langkah demi langkah mengajukan klaim asuransi Freight Forwarders Liability (FFL) di Batam — dokumen yang dibutuhkan, timeline, penyebab klaim ditolak, dan tips mempercepat proses.",
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  author: { "@type": "Person", name: "Rio", jobTitle: "Praktisi Asuransi", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://asuransibatam.com/blog/cara-klaim-asuransi-ffl-freight-forwarder-batam",
  },
};

export default function CaraKlaimFFLPage() {
  return (
    <ArticleLayout
      title="Cara Klaim Asuransi FFL (Freight Forwarders Liability) di Batam: Panduan Step-by-Step"
      description="Kargo hilang saat konsolidasi, kesalahan dokumen kepabeanan, atau tuntutan dari klien — berikut langkah tepat mengajukan klaim FFL agar prosesnya cepat dan tidak berujung penolakan."
      date="22 September 2026"
      readTime="10 menit"
      category="Liability"
      breadcrumbs={[{ label: "Cara Klaim Asuransi FFL Batam", href: "/blog/cara-klaim-asuransi-ffl-freight-forwarder-batam" }]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <SectionHeading icon={AlertTriangle}>Kenapa Proses Klaim FFL Berbeda dari Klaim Cargo Biasa</SectionHeading>
      <p>
        Klaim FFL punya karakter yang berbeda dari klaim marine cargo pada umumnya. Karena forwarder
        adalah pihak yang dituntut (bukan pemilik barang), proses klaim sering kali melibatkan tiga
        pihak sekaligus: forwarder (tertanggung), klien/shipper yang menuntut ganti rugi, dan penanggung
        yang menilai apakah tuntutan tersebut memang timbul dari kelalaian forwarder yang tercakup polis.
        Ketepatan dokumentasi sejak menit pertama insiden diketahui sangat menentukan kelancaran klaim.
      </p>
      <p>
        Jika Anda belum familiar dengan cakupan polis FFL secara umum, baca dulu{" "}
        <Link href="/blog/asuransi-freight-forwarders-liability-batam-panduan-lengkap" className="text-[#1a4fa0] hover:text-[#c9a84c]">
          panduan lengkap Asuransi FFL Batam
        </Link>{" "}
        sebelum melanjutkan.
      </p>

      <SectionHeading icon={ClipboardList}>Langkah-Langkah Mengajukan Klaim FFL</SectionHeading>
      <StepList
        items={[
          {
            icon: Camera,
            title: "Amankan & Dokumentasikan Lokasi Kejadian",
            desc: "Foto dan video kondisi barang, area penyimpanan atau titik kejadian (gudang CFS, lapangan penumpukan, titik bongkar), serta kondisi kemasan sesegera mungkin — sebelum barang dipindahkan atau area dibersihkan.",
          },
          {
            icon: FileText,
            title: "Buat Berita Acara Internal",
            desc: "Catat kronologi kejadian secara rinci: waktu, lokasi, pihak yang terlibat, dan dugaan penyebab. Berita acara ini menjadi rujukan utama adjuster saat menilai klaim.",
          },
          {
            icon: PhoneCall,
            title: "Notifikasi ke Penanggung Maksimal 3×24 Jam",
            desc: "Laporkan insiden ke hotline klaim penanggung atau broker Anda secepat mungkin setelah insiden diketahui — keterlambatan notifikasi adalah salah satu penyebab utama klaim dipersulit atau ditolak.",
          },
          {
            icon: Package,
            title: "Kumpulkan Dokumen Pendukung",
            desc: "Invoice dan packing list barang, bill of lading/delivery order, korespondensi dengan shipper atau consignee, PIB/PEB terkait (jika klaim menyangkut kesalahan dokumen kepabeanan), serta surat tuntutan resmi dari pihak ketiga jika sudah diterima.",
          },
          {
            icon: XCircle,
            title: "Jangan Mengakui Kesalahan Secara Sepihak",
            desc: "Hindari menandatangani pernyataan pengakuan kesalahan atau menyepakati nilai ganti rugi kepada pihak penuntut sebelum berkoordinasi dengan penanggung — ini adalah syarat standar di hampir semua polis liability, termasuk FFL.",
          },
          {
            icon: Search,
            title: "Kerja Sama dengan Adjuster",
            desc: "Adjuster biasanya ditugaskan dalam 5–10 hari kerja tergantung kompleksitas kasus — lebih lama untuk klaim yang melibatkan sengketa dokumen kepabeanan atau nilai kerugian besar. Sediakan seluruh dokumen dan akses yang diminta agar proses berjalan efisien.",
          },
          {
            icon: ClipboardList,
            title: "Penyelesaian Klaim",
            desc: "Setelah investigasi selesai, penanggung akan menerbitkan keputusan klaim — disetujui penuh, disetujui sebagian sesuai limit dan deductible, atau memerlukan negosiasi lebih lanjut dengan pihak penuntut.",
          },
        ]}
      />

      <SectionHeading icon={XCircle}>Penyebab Umum Klaim FFL Ditolak atau Diperlambat</SectionHeading>
      <p>
        Dari pengalaman mendampingi klien forwarding di Batam, beberapa kesalahan berikut paling sering
        membuat proses klaim berlarut-larut atau bahkan ditolak:
      </p>
      <ul>
        <li><strong>Notifikasi terlambat</strong> — melapor lebih dari beberapa hari setelah insiden membuat bukti sulit diverifikasi.</li>
        <li><strong>Dokumen serah terima tidak lengkap</strong> — delivery order atau berita acara serah terima yang tidak ditandatangani kedua belah pihak melemahkan posisi klaim.</li>
        <li><strong>Pengakuan kesalahan sepihak</strong> — menyetujui ganti rugi ke klien sebelum penanggung menilai kasus bisa dianggap melanggar syarat polis.</li>
        <li><strong>Klaim di luar cakupan wilayah</strong> — misalnya insiden terjadi di Singapura atau Malaysia padahal polis hanya mencakup wilayah domestik. Ini sering luput diperhatikan pada forwarder dengan rute lintas negara dari Sekupang.</li>
        <li><strong>Insiden akibat kesengajaan atau pelanggaran hukum</strong> — klaim yang timbul dari pelanggaran kepabeanan yang disengaja umumnya dikecualikan dari polis.</li>
      </ul>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-lg text-[#c9a84c] mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Butuh Pendampingan Klaim FFL?
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Rio membantu perusahaan forwarding dan PPJK di Batam menyiapkan dokumen klaim FFL yang lengkap
          sejak insiden pertama kali dilaporkan, agar proses penyelesaian klaim berjalan lebih cepat.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20klaim%20asuransi%20FFL"
            target="_blank" rel="noopener noreferrer"
            className="px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-sm text-center hover:bg-[#f0d080] transition-colors">
            Konsultasi via WhatsApp
          </a>
          <Link href="/asuransi-liability/freight-forwarders-liability"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors">
            Lihat Produk FFL
          </Link>
        </div>
      </div>

      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><a href="/asuransi-liability/freight-forwarders-liability" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Freight Forwarders Liability Batam</a></li>
              <li><a href="/asuransi-marine/marine-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Cargo Insurance Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/asuransi-freight-forwarders-liability-batam-panduan-lengkap" className="text-sm text-blue-700 hover:underline font-medium">→ Panduan Lengkap Asuransi FFL Batam</a></li>
              <li><a href="/blog/kawasan-logistik-pergudangan-batam-batu-ampar-sekupang-tanjung-uncang" className="text-sm text-blue-700 hover:underline font-medium">→ Peta Risiko Logistik Batu Ampar, Sekupang & Tanjung Uncang</a></li>
              <li><a href="/blog/cara-klaim-asuransi-marine-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Klaim Asuransi Marine Cargo</a></li>
              <li><a href="/blog/cara-klaim-asuransi-public-liability-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Klaim Asuransi Public Liability</a></li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
