// app/blog/builders-risk-untuk-galangan-kapal/page.tsx
import type { Metadata } from "next";
import QuoteButton from "@/components/quote/QuoteButton";
import { generateSEO } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";
import {
  Anchor,
  ShieldCheck,
  Users,
  Flame,
  Waves,
  XCircle,
  Calculator,
  FileSignature,
  CalendarClock,
  MessageCircleMore,
  Wallet,
  CheckCircle2,
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

function CrossList({ items }: { items: string[] }) {
  return (
    <ul className="not-prose grid sm:grid-cols-2 gap-3 my-5 list-none p-0">
      {items.map((text, i) => (
        <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#fdf3f2] border border-[#f3d8d5]">
          <XCircle className="w-[18px] h-[18px] text-[#b3261e] shrink-0 mt-0.5" strokeWidth={2} />
          <span className="text-sm text-[#374151] leading-relaxed">{text}</span>
        </li>
      ))}
    </ul>
  );
}

export const metadata: Metadata = generateSEO({
  title: "Builders Risk untuk Galangan Kapal Batam",
  description:
    "Apa itu asuransi builders risk dan kenapa berbeda dari marine hull biasa? Panduan dasar untuk pemilik galangan kapal di Batam: apa yang dilindungi dan periode coverage. Konsultasi Rio 0813-7333-6728.",
  canonical: "https://asuransibatam.com/blog/builders-risk-untuk-galangan-kapal",
  languages: {
    id: "https://asuransibatam.com/blog/builders-risk-untuk-galangan-kapal",
    en: "https://asuransibatam.com/en/blog/builders-risk-shipyard-insurance-batam",
  },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Builders Risk untuk Galangan Kapal – Asuransi Pembangunan Kapal di Batam",
  description: "Panduan lengkap asuransi builders risk untuk galangan kapal di Batam: apa yang dilindungi, periode coverage, dan mengapa berbeda dari marine hull biasa.",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  author: { "@type": "Person", name: "Rio", jobTitle: "Praktisi Asuransi", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/blog/builders-risk-untuk-galangan-kapal" },
};

export default function BuildersRiskGalanganKapalPage() {
  return (
    <ArticleLayout
      cluster="marine"
      title="Builders Risk untuk Galangan Kapal – Asuransi Pembangunan Kapal di Batam"
      description="Kapal dalam proses pembangunan berada dalam kondisi paling rentan. Builders Risk adalah satu-satunya produk yang dirancang khusus untuk fase ini."
      date="7 Mei 2026"
      readTime="10 menit"
      category="Marine"
      breadcrumbs={[{ label: "Builders Risk Galangan Kapal", href: "/blog/builders-risk-untuk-galangan-kapal" }]}
      schema={schema}
    >
      <SectionHeading icon={Anchor}>Batam: Pusat Galangan Kapal Indonesia yang Terus Berkembang</SectionHeading>
      <p>
        Batam bukan hanya kota industri elektronik dan logistik — kota ini juga merupakan salah satu pusat galangan kapal terbesar di Indonesia. Dengan lokasi strategis di Selat Malaka dan Selat Singapura, puluhan galangan kapal beroperasi di Batam — dari galangan kecil yang memperbaiki kapal nelayan hingga galangan berskala internasional yang membangun kapal platform dan kapal angkat.
      </p>
      <p>
        Setiap kapal yang sedang dalam proses pembangunan, konversi, atau reparasi besar berada dalam kondisi yang <strong>paling rentan secara fisik</strong> — belum sepenuhnya berfungsi, banyak pekerjaan manusia di atas dan di dalam lambungnya, dan terparkir di fasilitas yang juga menyimpan bahan berbahaya seperti gas las, cat, dan bahan bakar. Di sinilah <strong>Builders Risk Insurance</strong> menjadi kebutuhan kritis.
      </p>

      <SectionHeading icon={ShieldCheck}>Apa Itu Builders Risk Insurance untuk Kapal?</SectionHeading>
      <p>
        Builders Risk Insurance melindungi <strong>kapal yang sedang dalam proses pembangunan atau reparasi besar</strong>, sejak peletakan lunas (keel laying) atau awal pekerjaan hingga kapal selesai dan diserahterimakan kepada pemilik.
      </p>
      <p>Ini bukan asuransi hull biasa. Kapal yang sudah beroperasi dilindungi oleh Marine Hull Insurance. Builders Risk khusus dirancang untuk fase pembangunan — periode di mana kapal belum memiliki sertifikat operasional dan belum bisa berlayar sendiri.</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Aspek</th>
              <th className="text-left px-4 py-3">Builders Risk</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Marine Hull</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Fase", "Pembangunan / reparasi", "Operasional"],
              ["Status kapal", "Belum selesai / tidak berlayar", "Beroperasi aktif"],
              ["Dasar nilai", "Nilai konstruksi bertahap", "Nilai pasar kapal"],
              ["Tertanggung utama", "Galangan dan/atau pemilik kapal", "Pemilik/operator kapal"],
              ["Uji coba laut", "Termasuk (sea trial coverage)", "Tidak relevan"],
            ].map(([aspek, br, hull], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-4 py-3 font-medium text-[#0a1628] border-b border-[#e2e8f0]">{aspek}</td>
                <td className="px-4 py-3 text-[#374151] border-b border-[#e2e8f0]">{br}</td>
                <td className="px-4 py-3 text-[#475569] border-b border-[#e2e8f0]">{hull}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionHeading icon={Users}>Siapa yang Butuh Builders Risk?</SectionHeading>
      <IconList
        items={[
          { icon: Anchor, title: "Galangan Kapal (Shipyard)", desc: "Galangan bertanggung jawab atas kapal selama proses pembangunan. Jika terjadi kebakaran, kapal tenggelam saat diluncurkan, atau kecelakaan kerja merusak struktur kapal, galangan menanggung kerugiannya — kecuali ada Builders Risk yang menutup ini." },
          { icon: Users, title: "Pemilik Kapal Baru", desc: "Pemilik yang memesan kapal baru memiliki kepentingan finansial sejak pembayaran DP dilakukan. Mereka perlu memastikan investasi terlindungi bahkan sebelum kapal jadi." },
          { icon: Wallet, title: "Pemilik Kapal yang Mereparasi Besar", desc: "Kapal yang masuk galangan untuk konversi besar atau drydock juga bisa ditutup dengan Builders Risk selama periode tersebut." },
        ]}
      />

      <SectionHeading icon={ShieldCheck}>Apa Saja yang Dilindungi Builders Risk?</SectionHeading>
      <IconList
        items={[
          { icon: ShieldCheck, title: "Kerusakan Fisik Material dan Komponen", desc: "Bahan bangunan, pelat baja, pipa, kabel, dan semua material yang sudah terpasang atau menunggu pemasangan di area galangan." },
          { icon: Flame, title: "Kerusakan Akibat Kesalahan Konstruksi", desc: "Cacat desain atau pemasangan yang menyebabkan kerusakan pada bagian lain kapal. Catatan: biaya perbaikan bagian yang cacat itu sendiri biasanya tidak ditanggung." },
          { icon: Flame, title: "Kebakaran dan Ledakan", desc: "Risiko tertinggi di galangan kapal, terutama saat pengelasan, sandblasting, dan pengecatan." },
          { icon: Waves, title: "Risiko Peluncuran (Launching Risk)", desc: "Momen kapal pertama kali masuk ke air — risiko miring, tenggelam, atau menabrak struktur saat diluncurkan." },
          { icon: CheckCircle2, title: "Sea Trial Coverage", desc: "Periode uji coba berlayar setelah kapal selesai, biasanya 30–90 hari sebelum polis berakhir dan Marine Hull mulai berlaku." },
          { icon: Users, title: "Tanggung Jawab Pihak Ketiga", desc: "Kerusakan pada kapal atau properti lain di galangan akibat kapal yang sedang dibangun." },
        ]}
      />

      <SectionHeading icon={XCircle}>Yang Tidak Ditutup (Pengecualian Umum)</SectionHeading>
      <CrossList
        items={[
          "Keausan normal (wear and tear)",
          "Biaya perbaikan bagian yang cacat itu sendiri — hanya kerusakan konsekuensial yang ditanggung",
          "Kerusakan akibat mogok kerja atau kerusuhan (kecuali ada klausul khusus)",
          "Kerugian finansial akibat keterlambatan proyek — ini produk terpisah bernama Delay in Start-Up",
          "Kerusakan yang sudah ada sebelum polis dimulai",
        ]}
      />

      <SectionHeading icon={Calculator}>Bagaimana Nilai Pertanggungan Dihitung?</SectionHeading>
      <p>
        Nilai kapal tidak tetap — ia bertumbuh seiring progress pembangunan. Ada dua metode umum:
      </p>
      <p><strong>Agreed Value / Contract Price:</strong> Nilai pertanggungan = nilai kontrak penuh dari hari pertama. Premi dihitung dari nilai kontrak total. Coverage penuh sejak polis dimulai.</p>
      <p><strong>Progressive Value:</strong> Nilai pertanggungan meningkat bertahap mengikuti persentase penyelesaian. Lebih akurat secara aktuarial tapi lebih kompleks dalam administrasi.</p>
      <p>Untuk galangan di Batam, metode Agreed Value lebih umum digunakan karena lebih mudah dikelola dan memberikan kepastian coverage sejak awal.</p>

      <SectionHeading icon={Wallet}>Berapa Premi Builders Risk?</SectionHeading>
      <p>
        Faktor yang mempengaruhi premi: jenis kapal, nilai kontrak, durasi pembangunan, reputasi galangan, dan klausa yang dipilih. Sebagai gambaran, tarif Builders Risk umumnya berkisar <strong>0,5% hingga 1,5% dari nilai kontrak</strong> per proyek — jauh lebih tinggi dari Marine Hull biasa karena risiko fase konstruksi memang lebih tinggi.
      </p>

      <SectionHeading icon={FileSignature}>Siapa yang Bertindak sebagai Tertanggung?</SectionHeading>
      <p><strong>Opsi 1 — Galangan sebagai tertanggung utama:</strong> Galangan memegang polis dan memasukkan kepentingan pemilik kapal sebagai additional insured. Umum untuk kontrak di mana galangan memegang kendali penuh.</p>
      <p><strong>Opsi 2 — Pemilik kapal sebagai tertanggung utama:</strong> Pemilik memegang polis sendiri, galangan sebagai additional insured. Memberi pemilik lebih banyak kontrol atas klaim.</p>
      <p><strong>Opsi 3 — Joint Policy:</strong> Keduanya sebagai co-insured. Paling umum untuk proyek besar dengan nilai tinggi.</p>
      <p>Pilihan ini bergantung pada isi kontrak pembangunan dan sebaiknya diputuskan sebelum proyek dimulai.</p>

      <SectionHeading icon={CalendarClock}>Kapan Polis Builders Risk Berakhir?</SectionHeading>
      <p>Polis berakhir pada yang lebih awal antara: tanggal serah terima kapal kepada pemilik, selesainya sea trial yang berhasil, atau tanggal berakhir polis. Segera setelah delivery, pemilik kapal harus mengaktifkan Marine Hull Insurance agar kapal terlindungi saat mulai beroperasi.</p>

      <div className="mt-10 p-6 bg-[#0a1628] rounded-2xl text-white not-prose">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-lg text-[#c9a84c] mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0">
            <MessageCircleMore className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Konsultasi Builders Risk untuk Proyek Galangan Anda
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          Saya membantu galangan kapal dan pemesan kapal baru di Batam merancang struktur asuransi yang tepat — dari Builders Risk selama konstruksi hingga Marine Hull saat kapal mulai beroperasi.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <QuoteButton cluster="marine" lang="id" variant="gold" className="!rounded-xl !px-6 !py-3 !text-sm" />
          <Link href="/asuransi-marine/builders-risk"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors">
            Lihat Produk Builders Risk
          </Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="text-sm font-display font-semibold text-[#0a1628] mb-3">Artikel Terkait</p>
        <div className="flex flex-col gap-2">
          <Link href="/blog/perbedaan-marine-hull-vs-cargo" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Perbedaan Marine Hull dan Marine Cargo</Link>
          <Link href="/asuransi-marine/marine-hull" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Asuransi Marine Hull Batam</Link>
          <Link href="/asuransi-marine" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">→ Semua Produk Asuransi Marine</Link>
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><a href="/asuransi-marine/builders-risk" className="text-sm text-blue-700 hover:underline font-medium">→ Builders Risk Galangan Kapal Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/berapa-premi-asuransi-builders-risk-kapal-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Premi Builders Risk Kapal Batam</a></li>
              <li><a href="/blog/cara-mendapatkan-asuransi-builders-risk-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Mendapatkan Builders Risk Batam</a></li>
              <li><a href="/blog/jenis-jenis-asuransi-kapal-armada" className="text-sm text-blue-700 hover:underline font-medium">→ Jenis-Jenis Asuransi Kapal Armada</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}
