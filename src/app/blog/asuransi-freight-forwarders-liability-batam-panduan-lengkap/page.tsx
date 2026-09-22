// app/blog/asuransi-freight-forwarders-liability-batam-panduan-lengkap/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  Package,
  Ship,
  Anchor,
  FileText,
  ShieldAlert,
  Truck,
  Building2,
  Scale,
  CheckCircle2,
  Wallet,
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

function IconList({ items }: { items: { icon: React.ElementType; title: string; desc: string }[] }) {
  return (
    <ul className="not-prose grid gap-3 my-5 list-none p-0">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <li key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-[#faf8f3] border border-[#eee3cc]">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#e2e8f0] shrink-0">
              <Icon className="w-[16px] h-[16px] text-[#1a4fa0]" strokeWidth={2} />
            </span>
            <div>
              <p className="font-semibold text-[#0a1628] m-0 text-[15px]">{item.title}</p>
              <p className="text-sm text-[#475569] mt-1 mb-0 leading-relaxed">{item.desc}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export const metadata: Metadata = generateSEO({
  title: "Asuransi Freight Forwarders Liability (FFL) Batam: Panduan Lengkap untuk Forwarder & PPJK",
  description:
    "Panduan lengkap Asuransi Freight Forwarders Liability (FFL) di Batam: perbedaan dengan marine cargo, siapa yang wajib punya, risiko di Batu Ampar, Sekupang & Tanjung Uncang, dokumen, dan kisaran premi. Konsultasi Rio 0813-7333-6728.",
  canonical: "https://asuransibatam.com/blog/asuransi-freight-forwarders-liability-batam-panduan-lengkap",
  languages: {
    id: "https://asuransibatam.com/blog/asuransi-freight-forwarders-liability-batam-panduan-lengkap",
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu Freight Forwarders Liability (FFL)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FFL adalah asuransi yang melindungi perusahaan forwarding, PPJK, dan EMKL dari tanggung jawab hukum dan finansial atas kelalaian mereka sendiri dalam menjalankan jasa pengurusan transportasi — termasuk kehilangan kargo yang berada dalam penguasaannya, kesalahan pengiriman, dan kesalahan dokumen kepabeanan.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah FFL sama dengan asuransi marine cargo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Marine cargo melindungi nilai fisik barang milik pemilik kargo selama pengiriman apa pun penyebab kerusakannya. FFL melindungi bisnis forwarder itu sendiri dari tuntutan akibat kelalaian operasionalnya — dua polis dengan objek pertanggungan yang berbeda meski sering dibeli bersamaan.",
      },
    },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Freight Forwarders Liability (FFL) Batam: Panduan Lengkap untuk Forwarder & PPJK",
  description:
    "Panduan lengkap Asuransi Freight Forwarders Liability (FFL) di Batam: perbedaan dengan marine cargo, siapa yang wajib punya, risiko di Batu Ampar, Sekupang & Tanjung Uncang, dokumen, dan kisaran premi.",
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  author: { "@type": "Person", name: "Rio", jobTitle: "Praktisi Asuransi", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://asuransibatam.com/blog/asuransi-freight-forwarders-liability-batam-panduan-lengkap",
  },
};

export default function FFLPanduanLengkapPage() {
  return (
    <ArticleLayout
      title="Asuransi Freight Forwarders Liability (FFL) Batam: Panduan Lengkap untuk Forwarder & PPJK"
      description="Batam adalah simpul logistik dengan lalu lintas dokumen dan kargo terpadat di Kepulauan Riau. Berikut panduan lengkap memahami, memilih, dan mengklaim asuransi FFL untuk bisnis forwarding Anda."
      date="22 September 2026"
      readTime="13 menit"
      category="Liability"
      breadcrumbs={[{ label: "Panduan Freight Forwarders Liability Batam", href: "/blog/asuransi-freight-forwarders-liability-batam-panduan-lengkap" }]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <SectionHeading icon={Ship}>Batam: Simpul Logistik Tersibuk di Kepulauan Riau</SectionHeading>
      <p>
        Statusnya sebagai Kawasan Perdagangan Bebas dan Pelabuhan Bebas (KPBPB) membuat Batam menjadi
        titik transit dan konsolidasi barang yang sangat padat. Setiap hari, ratusan kontainer keluar-masuk
        melalui <strong>Pelabuhan Batu Ampar</strong>, kargo lintas negara mengalir lewat{" "}
        <strong>Pelabuhan Sekupang</strong> dan Telaga Punggur menuju Singapura dan Malaysia, sementara
        kawasan galangan kapal dan offshore di <strong>Tanjung Uncang</strong> membutuhkan rantai pasok
        suku cadang dan material yang tak pernah putus. Di balik kepadatan itu, ada ratusan perusahaan
        forwarding, PPJK (Pengusaha Pengurusan Jasa Kepabeanan), dan EMKL (Ekspedisi Muatan Kapal Laut)
        yang menjalankan roda logistik kota ini.
      </p>
      <p>
        Bisnis forwarding pada dasarnya adalah bisnis kepercayaan: klien menitipkan barang bernilai
        puluhan hingga miliaran rupiah, serta mempercayakan dokumen kepabeanan yang kompleks — termasuk
        fasilitas fiskal seperti{" "}
        <Link href="/blog/panduan-ob23-impor-sementara-batam" className="text-[#1a4fa0] hover:text-[#c9a84c]">OB23</Link>{" "}
        dan{" "}
        <Link href="/blog/ob23-vs-kite-batam" className="text-[#1a4fa0] hover:text-[#c9a84c]">KITE</Link>{" "}
        yang berlaku di Batam. Satu kesalahan administratif atau kelalaian operasional bisa membuat
        forwarder menanggung kerugian yang jauh melebihi nilai jasa yang mereka terima. Di sinilah peran
        <strong> Freight Forwarders Liability (FFL) Insurance</strong>.
      </p>

      <SectionHeading icon={Scale}>FFL vs Marine Cargo: Jangan Sampai Tertukar</SectionHeading>
      <p>
        Kesalahpahaman paling umum di kalangan pelaku forwarding adalah menganggap marine cargo insurance
        sudah cukup melindungi bisnis mereka. Padahal keduanya melindungi pihak dan risiko yang berbeda:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Aspek</th>
              <th className="text-left px-4 py-3">Marine Cargo Insurance</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Freight Forwarders Liability (FFL)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Pihak yang dilindungi", "Pemilik barang (shipper/consignee)", "Perusahaan forwarding/PPJK itu sendiri"],
              ["Objek pertanggungan", "Nilai fisik barang selama pengiriman", "Tanggung jawab hukum & finansial forwarder"],
              ["Pemicu klaim", "Kerusakan fisik apa pun penyebabnya (all risk)", "Kelalaian forwarder: salah kirim, salah dokumen, kargo hilang dalam CCC"],
              ["Siapa yang membeli", "Shipper, consignee, atau forwarder atas nama klien", "Forwarder untuk melindungi bisnisnya sendiri"],
              ["Contoh klaim", "Kontainer jatuh dari crane saat bongkar muat", "Kontainer tertahan karena kesalahan kode HS di PIB"],
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                {row.map((cell, j) => (
                  <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-[#0a1628]" : "text-[#475569]"}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Praktik terbaik yang kami rekomendasikan kepada klien forwarding di Batam: miliki FFL untuk
        melindungi bisnis Anda sendiri, dan bantu atau tawarkan{" "}
        <Link href="/asuransi-marine/marine-cargo" className="text-[#1a4fa0] hover:text-[#c9a84c]">marine cargo insurance</Link>{" "}
        kepada klien Anda untuk melindungi nilai barang mereka. Dua polis ini saling melengkapi, bukan saling menggantikan.
      </p>

      <SectionHeading icon={Building2}>Siapa yang Wajib Memiliki FFL di Batam</SectionHeading>
      <IconList
        items={[
          { icon: Ship, title: "Freight Forwarder & NVOCC", desc: "Perusahaan yang menerbitkan House Bill of Lading (HBL) dan mengonsolidasikan muatan dari berbagai shipper." },
          { icon: FileText, title: "PPJK (Pengusaha Pengurusan Jasa Kepabeanan)", desc: "Mengurus PIB, PEB, serta fasilitas fiskal KPBPB seperti OB23 dan KITE atas nama importir/eksportir." },
          { icon: Truck, title: "EMKL (Ekspedisi Muatan Kapal Laut)", desc: "Beroperasi di Batu Ampar dan Sekupang, menangani dokumen dan pergerakan muatan laut domestik maupun ekspor-impor." },
          { icon: Package, title: "Operator Gudang Konsolidasi (CFS)", desc: "Mengelola gudang tempat kargo LCL dari berbagai shipper dipisah dan digabung sebelum dikirim ke tujuan masing-masing." },
          { icon: Building2, title: "Penyedia Jasa 3PL Kawasan Industri", desc: "Mengelola pergudangan dan distribusi untuk klien manufaktur di kawasan industri seperti Batamindo, Panbil, dan Kabil." },
        ]}
      />

      <SectionHeading icon={AlertTriangle}>Titik Risiko Khas di Tiga Simpul Logistik Batam</SectionHeading>
      <p>
        Eksposur risiko forwarder di Batam tidak seragam — setiap simpul logistik punya karakter risikonya
        sendiri. Kami membahasnya lebih detail di{" "}
        <Link href="/blog/kawasan-logistik-pergudangan-batam-batu-ampar-sekupang-tanjung-uncang" className="text-[#1a4fa0] hover:text-[#c9a84c]">
          peta risiko logistik dan pergudangan Batam
        </Link>
        , tapi berikut ringkasannya:
      </p>
      <IconList
        items={[
          { icon: Anchor, title: "Batu Ampar", desc: "Volume kontainer tertinggi di Batam — risiko utama pada kesalahan dokumen kepabeanan, kesalahan penumpukan di lapangan CY, dan keterlambatan yang memicu klaim demurrage dari klien." },
          { icon: Ship, title: "Sekupang", desc: "Simpul kargo dan penumpang lintas negara ke Singapura — risiko pada konsolidasi kargo LCL bervolume tinggi, kesalahan sortir muatan, dan kompleksitas dokumen lintas batas." },
          { icon: Package, title: "Tanjung Uncang", desc: "Basis logistik galangan kapal dan offshore — risiko pada pengiriman suku cadang bernilai tinggi dan sensitif waktu, serta tanggung jawab atas subkontraktor trucking khusus alat berat." },
        ]}
      />

      <SectionHeading icon={FileText}>Cakupan Utama Polis FFL</SectionHeading>
      <p>
        Struktur polis FFL bervariasi antar penanggung, tetapi secara umum mencakup beberapa pilar
        perlindungan berikut — Anda bisa melihat rincian lengkapnya di halaman produk{" "}
        <Link href="/asuransi-liability/freight-forwarders-liability" className="text-[#1a4fa0] hover:text-[#c9a84c]">
          Asuransi Freight Forwarders Liability Batam
        </Link>
        :
      </p>
      <IconList
        items={[
          { icon: Package, title: "Cargo Loss & Damage dalam Care, Custody & Control (CCC)", desc: "Kargo yang hilang atau rusak selama berada dalam penguasaan forwarder — di gudang, saat transload, atau selama transportasi darat lokal." },
          { icon: FileText, title: "Kesalahan Dokumen & Deklarasi Kepabeanan", desc: "Kesalahan kode HS, nilai pabean, atau pengajuan fasilitas fiskal yang menyebabkan kerugian pada klien." },
          { icon: Scale, title: "Biaya Pembelaan Hukum", desc: "Termasuk biaya pengacara dan proses persidangan, bahkan jika forwarder akhirnya terbukti tidak bersalah." },
          { icon: Truck, title: "Tanggung Jawab Sub-kontraktor", desc: "Kelalaian trucking, PBM, atau EMKL mitra yang bekerja atas nama forwarder tetap menjadi tanggung jawab forwarder di mata klien." },
        ]}
      />

      <SectionHeading icon={CheckCircle2}>Dokumen yang Perlu Disiapkan</SectionHeading>
      <p>
        Proses pengajuan polis FFL umumnya membutuhkan: legalitas usaha (NIB dengan KBLI jasa pengurusan
        transportasi/PPJK, izin usaha forwarding dari Kementerian Perhubungan), profil operasional (jenis
        layanan, estimasi volume dan nilai kargo tahunan, daftar gudang yang dioperasikan), riwayat klaim
        tiga tahun terakhir, serta daftar sub-kontraktor tetap jika ingin dicakup dalam perluasan tanggung
        jawab. Dengan dokumen lengkap, penerbitan polis biasanya memakan waktu 1–3 hari kerja.
      </p>

      <SectionHeading icon={Wallet}>Kisaran Premi FFL di Batam</SectionHeading>
      <p>
        Premi FFL dihitung berdasarkan omzet tahunan, jenis layanan, dan limit tanggungan yang dipilih.
        Sebagai gambaran, forwarder skala kecil-menengah dengan limit Rp 1–2 miliar per kejadian berada
        di kisaran Rp 8–20 juta per tahun, sementara perusahaan forwarding besar dengan volume tinggi di
        Batu Ampar dan cakupan lintas negara bisa mencapai puluhan juta rupiah per tahun. Rincian lengkap
        perbandingan paket dan FAQ premi tersedia di halaman produk FFL kami.
      </p>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-lg text-[#c9a84c] mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Konsultasi FFL untuk Bisnis Forwarding Anda
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Rio membantu perusahaan forwarding, PPJK, dan EMKL di Batam menentukan limit dan cakupan FFL
          yang sesuai dengan profil operasional — termasuk penerbitan Certificate of Insurance (COI)
          untuk persyaratan prinsipal dan klien korporat.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi%20FFL%20untuk%20perusahaan%20forwarding%20saya"
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
              <li><a href="/asuransi-liability/public-liability" className="text-sm text-blue-700 hover:underline font-medium">→ Public Liability Insurance Batam</a></li>
              <li><a href="/asuransi-properti/asuransi-gudang-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Gudang Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/kawasan-logistik-pergudangan-batam-batu-ampar-sekupang-tanjung-uncang" className="text-sm text-blue-700 hover:underline font-medium">→ Peta Risiko Logistik Batu Ampar, Sekupang & Tanjung Uncang</a></li>
              <li><a href="/blog/cara-klaim-asuransi-ffl-freight-forwarder-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Klaim Asuransi FFL di Batam</a></li>
              <li><a href="/blog/panduan-ob23-impor-sementara-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Panduan OB23 Impor Sementara Batam</a></li>
              <li><a href="/blog/ob23-vs-kite-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Perbedaan OB23 vs KITE</a></li>
              <li><a href="/blog/asuransi-cargo-ekspor-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Cargo Ekspor dari Batam</a></li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
