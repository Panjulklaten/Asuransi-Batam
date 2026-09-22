// app/blog/kawasan-logistik-pergudangan-batam-batu-ampar-sekupang-tanjung-uncang/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  Anchor,
  Ship,
  Package,
  Warehouse,
  ShieldAlert,
  MapPin,
  Container,
  Factory,
  MessageCircleMore,
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
  title: "Peta Risiko Logistik & Pergudangan Batam: Batu Ampar, Sekupang, dan Tanjung Uncang",
  description:
    "Karakteristik risiko logistik dan pergudangan di tiga simpul utama Batam — Pelabuhan Batu Ampar, Pelabuhan Sekupang, dan kawasan galangan Tanjung Uncang — serta proteksi asuransi yang relevan untuk forwarder dan operator gudang. Konsultasi Rio 0813-7333-6728.",
  canonical: "https://asuransibatam.com/blog/kawasan-logistik-pergudangan-batam-batu-ampar-sekupang-tanjung-uncang",
  languages: {
    id: "https://asuransibatam.com/blog/kawasan-logistik-pergudangan-batam-batu-ampar-sekupang-tanjung-uncang",
  },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Peta Risiko Logistik & Pergudangan Batam: Batu Ampar, Sekupang, dan Tanjung Uncang",
  description:
    "Karakteristik risiko logistik dan pergudangan di tiga simpul utama Batam — Pelabuhan Batu Ampar, Pelabuhan Sekupang, dan kawasan galangan Tanjung Uncang — serta proteksi asuransi yang relevan untuk forwarder dan operator gudang.",
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  author: { "@type": "Person", name: "Rio", jobTitle: "Praktisi Asuransi", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://asuransibatam.com/blog/kawasan-logistik-pergudangan-batam-batu-ampar-sekupang-tanjung-uncang",
  },
};

export default function KawasanLogistikBatamPage() {
  return (
    <ArticleLayout
      title="Peta Risiko Logistik & Pergudangan Batam: Batu Ampar, Sekupang, dan Tanjung Uncang"
      description="Tiga simpul logistik utama Batam punya karakter operasional dan risiko yang berbeda-beda. Berikut gambaran mendalam yang perlu diketahui forwarder, PPJK, dan operator gudang sebelum menentukan proteksi asuransi yang tepat."
      date="22 September 2026"
      readTime="12 menit"
      category="Liability"
      breadcrumbs={[{ label: "Kawasan Logistik & Pergudangan Batam", href: "/blog/kawasan-logistik-pergudangan-batam-batu-ampar-sekupang-tanjung-uncang" }]}
      schema={schema}
    >
      <SectionHeading icon={MapPin}>Tiga Wajah Logistik Batam</SectionHeading>
      <p>
        Batam bukan kota dengan satu titik distribusi tunggal. Sebagai Kawasan Perdagangan Bebas dan
        Pelabuhan Bebas (KPBPB), arus barang di kota ini tersebar di beberapa simpul dengan fungsi dan
        karakter risiko yang sangat berbeda. Memahami perbedaan ini penting bagi forwarder, PPJK, dan
        operator gudang dalam menentukan jenis dan besaran proteksi asuransi yang relevan — baik{" "}
        <Link href="/asuransi-liability/freight-forwarders-liability" className="text-[#1a4fa0] hover:text-[#c9a84c]">
          Freight Forwarders Liability (FFL)
        </Link>{" "}
        untuk tanggung jawab operasional, maupun{" "}
        <Link href="/asuransi-properti/asuransi-gudang-batam" className="text-[#1a4fa0] hover:text-[#c9a84c]">
          asuransi properti gudang
        </Link>{" "}
        untuk aset fisik fasilitas.
      </p>

      <SectionHeading icon={Anchor}>Batu Ampar: Gerbang Kontainer Utama Batam</SectionHeading>
      <p>
        Pelabuhan Batu Ampar adalah pelabuhan kontainer dan kargo umum terbesar di Batam, menjadi titik
        keluar-masuk utama untuk perdagangan domestik maupun ekspor-impor kota ini. Kepadatan aktivitas
        bongkar muat, lapangan penumpukan (container yard), dan gudang Container Freight Station (CFS) di
        sekitar pelabuhan membuat kawasan ini menjadi jantung operasional bagi mayoritas perusahaan
        forwarding dan PPJK yang beroperasi di Batam.
      </p>
      <IconList
        items={[
          { icon: Container, title: "Kepadatan Lapangan Penumpukan", desc: "Volume kontainer yang tinggi meningkatkan risiko kesalahan penumpukan, kerusakan akibat tabrakan alat berat (reach stacker, forklift), dan keterlambatan pencarian kontainer saat proses keluar pelabuhan." },
          { icon: Package, title: "Kompleksitas Dokumen Kepabeanan", desc: "Sebagai gerbang ekspor-impor utama sekaligus titik pengurusan fasilitas fiskal KPBPB, volume dan kompleksitas dokumen (PIB, PEB, OB23, KITE) di Batu Ampar jauh lebih tinggi dibanding pelabuhan lain di Batam — memperbesar ruang kesalahan administratif yang berujung klaim FFL." },
          { icon: ShieldAlert, title: "Risiko Demurrage & Detention", desc: "Keterlambatan proses dokumen atau pemeriksaan lanjutan oleh bea cukai bisa membuat kontainer tertahan berhari-hari, memicu klaim kerugian konsekuensial dari klien atas biaya demurrage dan kerugian produksi." },
          { icon: Warehouse, title: "Gudang CFS & Konsolidasi LCL", desc: "Gudang konsolidasi di sekitar Batu Ampar menangani pemisahan dan penggabungan muatan dari berbagai shipper — titik rawan kesalahan sortir, tertukarnya barang antar-consignee, dan kehilangan barang bervolume kecil." },
        ]}
      />

      <SectionHeading icon={Ship}>Sekupang: Simpul Kargo dan Penumpang Lintas Negara</SectionHeading>
      <p>
        Berbeda dengan Batu Ampar yang berfokus pada kontainer besar, Pelabuhan Sekupang (bersama Telaga
        Punggur) berperan sebagai simpul kargo dan penumpang feri lintas negara menuju Singapura dan
        Malaysia. Karakter muatannya cenderung lebih beragam — mulai dari kargo LCL bervolume kecil-menengah,
        barang konsumsi, hingga suku cadang industri yang butuh pengiriman cepat lintas selat.
      </p>
      <IconList
        items={[
          { icon: Ship, title: "Frekuensi Pengiriman Tinggi, Volume per Kirim Lebih Kecil", desc: "Forwarder di Sekupang umumnya menangani lebih banyak pengiriman dengan volume lebih kecil dibanding Batu Ampar — meningkatkan frekuensi titik serah terima dan, secara statistik, frekuensi potensi kesalahan pengiriman (mis-delivery)." },
          { icon: Package, title: "Konsolidasi LCL Multi-Consignee", desc: "Satu pengiriman feri kargo sering membawa muatan untuk banyak consignee sekaligus. Kesalahan pemisahan saat sortir ulang — seperti dibahas dalam simulasi klaim FFL kami — adalah risiko yang paling sering terjadi di titik ini." },
          { icon: ShieldAlert, title: "Kompleksitas Dokumen Lintas Batas", desc: "Pengiriman ke Singapura dan Malaysia memerlukan dokumen kepabeanan di dua yurisdiksi sekaligus. Kesalahan pada salah satu sisi dokumen bisa menyebabkan penahanan barang di pelabuhan tujuan, menimbulkan tuntutan dari consignee di luar negeri." },
          { icon: Container, title: "Paparan Cuaca pada Moda Kecil", desc: "Sebagian pengiriman dari Sekupang menggunakan speedboat atau feri kargo berukuran lebih kecil dibanding kapal kontainer besar — meningkatkan risiko kelembaban dan kerusakan barang akibat cuaca pada kemasan yang tidak kedap air." },
        ]}
      />

      <SectionHeading icon={Factory}>Tanjung Uncang: Basis Logistik Galangan Kapal & Offshore</SectionHeading>
      <p>
        Tanjung Uncang dikenal sebagai kawasan konsentrasi galangan kapal dan industri offshore terbesar
        di Batam. Rantai pasok di kawasan ini sangat berbeda dari dua simpul sebelumnya — bukan barang
        konsumsi atau kargo umum, melainkan suku cadang kapal, mesin, material fabrikasi, dan peralatan
        berat yang sering kali bernilai tinggi dan sangat sensitif terhadap waktu pengiriman.
      </p>
      <IconList
        items={[
          { icon: Package, title: "Barang Bernilai Tinggi & Sensitif Waktu", desc: "Keterlambatan pengiriman satu komponen kritikal bisa menghentikan seluruh jadwal produksi atau perbaikan kapal di galangan, membuat eksposur kerugian konsekuensial per pengiriman jauh lebih besar dibanding kargo umum." },
          { icon: Warehouse, title: "Pergudangan Material Fabrikasi", desc: "Gudang di sekitar Tanjung Uncang menyimpan material logam, komponen mesin, dan consumables proyek yang rentan terhadap kerusakan akibat penanganan yang tidak tepat maupun paparan lingkungan pesisir (korosi, kelembaban tinggi)." },
          { icon: ShieldAlert, title: "Tanggung Jawab Subkontraktor Trucking Alat Berat", desc: "Pengangkutan material dan alat berat dari pelabuhan menuju galangan umumnya melibatkan trucking khusus yang disubkontrakkan — kelalaian mereka tetap menjadi tanggung jawab forwarder di mata klien galangan, sehingga perluasan tanggung jawab sub-kontraktor pada polis FFL menjadi krusial." },
          { icon: Anchor, title: "Ketergantungan pada Jadwal Kapal & Mobilisasi Proyek", desc: "Forwarder yang melayani kawasan ini harus terbiasa dengan tenggat mobilisasi proyek galangan yang ketat — keterlambatan dokumen atau kesalahan pengiriman berdampak langsung pada jadwal kerja principal seperti yang dibahas dalam konteks Public Liability galangan kapal." },
        ]}
      />

      <SectionHeading icon={Warehouse}>Implikasi bagi Proteksi Asuransi Forwarder & Operator Gudang</SectionHeading>
      <p>
        Ketiga karakter kawasan di atas menunjukkan bahwa satu paket asuransi generik jarang cukup untuk
        menutup seluruh eksposur forwarder yang beroperasi lintas simpul di Batam. Berikut kombinasi
        proteksi yang umumnya relevan:
      </p>
      <ul>
        <li>
          <Link href="/asuransi-liability/freight-forwarders-liability" className="text-[#1a4fa0] hover:text-[#c9a84c]">Freight Forwarders Liability (FFL)</Link>{" "}
          — untuk tanggung jawab atas kargo dalam penguasaan forwarder, kesalahan dokumen, dan mis-delivery di ketiga simpul.
        </li>
        <li>
          <Link href="/asuransi-properti/asuransi-gudang-batam" className="text-[#1a4fa0] hover:text-[#c9a84c]">Asuransi Gudang Batam</Link>{" "}
          — untuk kerusakan fisik bangunan dan isi gudang akibat kebakaran, banjir rob, atau bencana lain, terutama bagi operator gudang CFS di Batu Ampar dan gudang material di Tanjung Uncang.
        </li>
        <li>
          <Link href="/asuransi-marine/marine-cargo" className="text-[#1a4fa0] hover:text-[#c9a84c]">Marine Cargo Insurance</Link>{" "}
          — untuk melindungi nilai fisik barang klien selama pengiriman, terutama pada rute lintas negara dari Sekupang.
        </li>
        <li>
          <Link href="/asuransi-liability/public-liability" className="text-[#1a4fa0] hover:text-[#c9a84c]">Public Liability Insurance</Link>{" "}
          — relevan bagi operator gudang dan forwarder yang menerima kunjungan pihak ketiga (klien, auditor, mitra) di fasilitas operasional mereka.
        </li>
      </ul>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-lg text-[#c9a84c] mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Konsultasi Proteksi Sesuai Lokasi Operasional Anda
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Rio membantu forwarder, PPJK, dan operator gudang di Batu Ampar, Sekupang, dan Tanjung Uncang
          menyusun kombinasi proteksi yang sesuai dengan karakter risiko masing-masing kawasan.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20proteksi%20asuransi%20untuk%20operasional%20logistik%20di%20Batam"
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
              <li><a href="/asuransi-properti/asuransi-gudang-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Gudang Batam</a></li>
              <li><a href="/asuransi-marine/marine-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Cargo Insurance Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/asuransi-freight-forwarders-liability-batam-panduan-lengkap" className="text-sm text-blue-700 hover:underline font-medium">→ Panduan Lengkap Asuransi FFL Batam</a></li>
              <li><a href="/blog/cara-klaim-asuransi-ffl-freight-forwarder-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Klaim Asuransi FFL di Batam</a></li>
              <li><a href="/blog/asuransi-gudang-kawasan-industri-muka-kuning-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Gudang Kawasan Industri Muka Kuning</a></li>
              <li><a href="/blog/asuransi-pengiriman-batam-singapore" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Pengiriman Batam–Singapura</a></li>
            </ul>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
