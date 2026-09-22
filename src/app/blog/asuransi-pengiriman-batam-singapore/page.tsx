// app/blog/asuransi-pengiriman-batam-singapore/page.tsx
import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  Ship,
  Anchor,
  Waves,
  Zap,
  Package,
  ShieldAlert,
  Droplets,
  FileText,
  CheckCircle2,
  Wallet,
  MessageCircleMore,
} from "lucide-react";

// --- Helper presentational components (lokal, tanpa dependensi baru) ---

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
  title: "Asuransi Pengiriman Barang Rute Batam–Singapura",
  description:
    "Panduan memilih asuransi marine cargo untuk rute Batam–Singapura: pembagian risiko lewat Incoterms, klausul ICC yang sesuai, kisaran premi, dan titik rawan di Selat Singapura. Konsultasi Rio 0813-7333-6728.",
  canonical: "https://asuransibatam.com/blog/asuransi-pengiriman-batam-singapore",
  languages: {
    id: "https://asuransibatam.com/blog/asuransi-pengiriman-batam-singapore",
    en: "https://asuransibatam.com/en/blog/batam-singapore-shipping-insurance",
  },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Pengiriman Barang Rute Batam–Singapura: Panduan untuk Eksportir dan Importir",
  description: "Panduan memilih asuransi marine cargo untuk rute Batam–Singapura: pembagian risiko lewat Incoterms, klausul ICC yang sesuai, kisaran premi, dan titik rawan di Selat Singapura.",
  datePublished: "2026-05-07",
  dateModified: "2026-08-04",
  author: { "@type": "Person", name: "Rio", jobTitle: "Praktisi Asuransi", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/blog/asuransi-pengiriman-batam-singapore" },
};

export default function AsuransiPengirimanBatamSingapurePage() {
  return (
    <ArticleLayout
      title="Asuransi Pengiriman Barang Rute Batam–Singapura: Panduan untuk Eksportir dan Importir"
      description="Jaraknya cuma sekitar 20 km, tapi jangan tertipu — jalur Batam–Singapura punya profil risikonya sendiri. Berikut cara memilih polis yang pas untuk rute ini."
      date="7 Mei 2026"
      readTime="9 menit"
      category="Marine"
      breadcrumbs={[{ label: "Asuransi Pengiriman Batam–Singapura", href: "/blog/asuransi-pengiriman-batam-singapore" }]}
      schema={schema}
    >
      <SectionHeading icon={Anchor}>Dua Ekonomi yang Terhubung Lewat Selat Singapura</SectionHeading>
      <p>
        Batam dan Singapura hanya dipisahkan kurang dari 20 kilometer laut, namun keterkaitan
        ekonominya jauh lebih erat dibanding jarak antarkota di daratan yang sama. Setiap harinya
        ada ratusan pengiriman yang melintasi selat ini — mulai dari komponen elektronik keluaran
        kawasan industri Batamindo menuju pabrik-pabrik di Singapura, produk olahan makanan,
        suku cadang industri, sampai berbagai komoditas ekspor lain.
      </p>
      <p>
        Karena jarak tempuhnya singkat, tidak sedikit pelaku usaha yang menganggap risikonya
        rendah dan memilih melewatkan asuransi kargo. Anggapan ini keliru.{" "}
        <strong>Jarak yang pendek tidak serta-merta menurunkan risiko kerusakan saat proses
        bongkar-muat, kehilangan barang di dermaga, atau kerusakan akibat rembesan air laut.</strong>{" "}
        Selat Singapura justru termasuk salah satu perairan tersibuk di dunia — kepadatan lalu
        lintas kapal yang tinggi membuat potensi insiden ikut meningkat.
      </p>

      <SectionHeading icon={Ship}>Moda Pengiriman yang Umum Dipakai di Rute Ini</SectionHeading>
      <IconList
        items={[
          { icon: Ship, title: "Feri Kargo RoRo", desc: "Truk atau kontainer naik langsung ke badan kapal tanpa bongkar muatan. Waktu tempuh berkisar 45–60 menit." },
          { icon: Package, title: "Ferry Konvensional dengan Barge", desc: "Barang dipisahkan dari kendaraan pengangkutnya, biasa dipakai untuk kargo bervolume besar atau berukuran tidak standar." },
          { icon: Waves, title: "Speedboat atau Pompong Kargo", desc: "Cocok untuk pengiriman kecil yang butuh kecepatan. Karena ukuran kapalnya kecil, risiko air masuk (water ingress) relatif lebih tinggi." },
          { icon: Zap, title: "Kargo Udara via Bandara Hang Nadim", desc: "Dipilih untuk barang bernilai tinggi atau berkejaran waktu. Polis marine cargo standar umumnya sudah mencakup moda udara ini juga." },
        ]}
      />

      <SectionHeading icon={ShieldAlert}>Titik Rawan yang Khas di Jalur Batam–Singapura</SectionHeading>
      <IconList
        items={[
          { icon: Ship, title: "Kepadatan Lalu Lintas di Selat Singapura", desc: "Ribuan kapal melintasi selat ini setiap harinya — dari tanker besar, bulk carrier, hingga kapal feri kecil berbagi alur pelayaran yang sama. Potensi tubrukan lebih besar dibanding perairan yang lebih lengang." },
          { icon: Zap, title: "Cuaca yang Berubah Cepat di Musim Peralihan", desc: "Pada periode Maret–Mei dan Oktober–Desember, gelombang tinggi dan angin kencang bisa datang tanpa banyak peringatan. Kapal berukuran kecil paling terdampak." },
          { icon: Package, title: "Kerusakan di Area Dermaga dan Terminal", desc: "Penanganan yang kurang hati-hati saat bongkar-muat di Pelabuhan Batam Center, Sekupang, atau Tanah Merah Ferry Terminal menjadi titik risiko tertinggi bagi barang mudah pecah dan perangkat elektronik." },
          { icon: ShieldAlert, title: "Kehilangan atau Penggelapan Barang", desc: "Kargo break-bulk yang sempat menunggu di kawasan dermaga lebih rawan hilang, terutama pada jam-jam sepi atau saat area sedang padat." },
          { icon: Droplets, title: "Kelembaban dan Rembesan Air", desc: "Untuk speedboat kargo atau barge tanpa penutup, paparan air hujan maupun percikan air laut adalah risiko nyata — khususnya bagi barang yang kemasannya tidak kedap air." },
        ]}
      />

      <SectionHeading icon={FileText}>Incoterms: Siapa yang Sebaiknya Membeli Polis</SectionHeading>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Incoterms</th>
              <th className="text-left px-4 py-3">Titik Perpindahan Risiko</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Pihak yang Membeli Asuransi</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["EXW (Ex Works)", "Sejak barang di gudang penjual", "Pembeli (importir di Singapura)"],
              ["FOB (Free on Board)", "Ketika barang dimuat ke kapal di Batam", "Pembeli"],
              ["CFR (Cost & Freight)", "Ketika barang dimuat ke kapal di Batam", "Pembeli (penjual hanya menanggung ongkos kirim, bukan risiko)"],
              ["CIF (Cost, Insurance & Freight)", "Ketika barang dimuat ke kapal", "Penjual, untuk kepentingan pembeli"],
              ["DAP (Delivered at Place)", "Setelah tiba di lokasi tujuan di Singapura", "Penjual"],
            ].map(([inc, risiko, siapa], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-bold text-[#1a4fa0] border-b border-[#e2e8f0]">{inc}</td>
                <td className="px-4 py-3 text-[#374151] border-b border-[#e2e8f0]">{risiko}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{siapa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p><strong>Catatan untuk transaksi CIF:</strong> sejumlah eksportir asal Batam yang berjualan dengan skema CIF membeli polis hanya sebatas nilai dan klausul minimum demi memenuhi syarat kontrak, bukan untuk perlindungan yang optimal. Pada akhirnya, pihak yang dirugikan adalah importir Singapura yang sesungguhnya menanggung risiko barang tersebut.</p>

      <SectionHeading icon={CheckCircle2}>Menentukan Klausul yang Sesuai untuk Rute Ini</SectionHeading>
      <p><strong>ICC (A) cocok dipilih untuk:</strong> komponen elektronik, suku cadang mesin, alat kesehatan, barang dengan nilai di atas Rp 100 juta per pengiriman, serta produk yang peka terhadap kelembaban.</p>
      <p><strong>ICC (B) atau ICC (C) dapat dipertimbangkan untuk:</strong> bahan baku industri seperti besi, plastik, atau kimia dalam bentuk curah, komoditas hasil pertanian maupun perikanan, dan barang bernilai rendah dengan kemasan yang kokoh.</p>
      <p><strong>Klausul tambahan yang kerap relevan:</strong> War &amp; Strikes Clause (umumnya sudah otomatis untuk rute lintas negara), TPND Clause (perlindungan ekstra terhadap pencurian), serta Refrigeration Clause (khusus pengiriman produk beku).</p>

      <SectionHeading icon={Wallet}>Kisaran Premi Kargo untuk Rute Batam–Singapura</SectionHeading>
      <p>Karena tergolong rute pendek dan berjalan rutin, premi di jalur ini umumnya lebih bersaing dibandingkan rute internasional jarak jauh:</p>
      <ul>
        <li>ICC (A) untuk barang elektronik: sekitar 0,2% – 0,4% dari nilai kargo</li>
        <li>ICC (A) untuk kargo umum: sekitar 0,1% – 0,25%</li>
        <li>ICC (C) untuk kargo curah (bulk): mulai dari 0,05%</li>
      </ul>
      <p>
        Bagi pengiriman yang berlangsung rutin, ada baiknya mempertimbangkan{" "}
        <strong>Open Cover Policy</strong> — polis terbuka yang secara otomatis melindungi setiap
        pengiriman dalam periode tertentu tanpa perlu menerbitkan polis baru setiap kali kirim.
        Lebih praktis, dan biasanya lebih hemat jika dihitung per pengiriman.
      </p>

      <SectionHeading icon={Package}>Contoh Kasus: Kerusakan Barang Elektronik saat Bongkar di Terminal</SectionHeading>
      <p>
        Sebuah eksportir komponen elektronik di kawasan Batamindo mengirim 35 karton modul
        rangkaian ke pembelinya di Singapura lewat feri kargo. Saat proses bongkar di Tanah Merah
        Ferry Terminal, 6 karton terjatuh akibat kesalahan pengoperasian forklift dan mengalami
        kerusakan. Nilai kerugian ditaksir sekitar SGD 9.500.
      </p>
      <p>
        Berkat polis berklausul ICC (A) dengan tambahan TPND, serta petugas penerima yang segera
        mencatat kerusakan pada delivery order, klaim tersebut selesai diproses dalam waktu
        sekitar tiga minggu. Tanpa polis, perusahaan itu terpaksa menanggung sendiri kerugiannya
        atau menempuh proses klaim ke operator feri yang biasanya lebih panjang dan hasilnya
        tidak menentu.
      </p>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-lg text-[#c9a84c] mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Konsultasi Polis Kargo Batam–Singapura
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Rio membantu eksportir maupun importir di Batam menentukan polis yang sesuai dengan
          Incoterms, jenis barang, dan frekuensi pengiriman yang dijalankan — termasuk menyusun
          skema Open Cover untuk pengiriman reguler.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi%20kargo%20Batam%20Singapura"
            target="_blank" rel="noopener noreferrer"
            className="px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-sm text-center hover:bg-[#f0d080] transition-colors">
            Konsultasi via WhatsApp
          </a>
          <Link href="/asuransi-marine/marine-cargo"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors">
            Lihat Produk Marine Cargo
          </Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="text-sm font-display font-semibold text-[#0a1628] mb-3">Artikel Terkait</p>
        <div className="flex flex-col gap-2">
          <Link href="/blog/cara-klaim-asuransi-marine-cargo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Cara Klaim Asuransi Marine Cargo</Link>
          <Link href="/blog/perbedaan-marine-hull-vs-cargo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Perbedaan Marine Hull dan Marine Cargo</Link>
          <Link href="/asuransi-marine/marine-cargo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Produk Asuransi Marine Cargo Batam</Link>
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><a href="/asuransi-marine/marine-cargo" className="text-sm text-blue-700 hover:underline font-medium">→ Marine Cargo Insurance Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/asuransi-cargo-ekspor-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Cargo Ekspor dari Batam</a></li>
              <li><a href="/blog/premi-asuransi-marine-cargo-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Premi Marine Cargo Batam</a></li>
              <li><a href="/blog/asuransi-pengiriman-batam-jakarta" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Pengiriman Batam–Jakarta</a></li>
              <li><a href="/blog/asuransi-freight-forwarders-liability-batam-panduan-lengkap" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Freight Forwarders Liability (FFL) Batam</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}
