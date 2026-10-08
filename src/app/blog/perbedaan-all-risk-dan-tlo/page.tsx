import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  ShieldCheck,
  ShieldAlert,
  Scale,
  Car,
  Wallet,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
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

function CheckList({ items, variant = "check" }: { items: React.ReactNode[]; variant?: "check" | "cross" }) {
  const Icon = variant === "check" ? CheckCircle2 : XCircle;
  const color = variant === "check" ? "text-[#1a7a4c]" : "text-[#b3261e]";
  return (
    <ul className="not-prose grid sm:grid-cols-2 gap-3 my-5 list-none p-0">
      {items.map((text, i) => (
        <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf8f3] border border-[#eee3cc]">
          <Icon className={`w-[18px] h-[18px] shrink-0 mt-0.5 ${color}`} strokeWidth={2} />
          <span className="text-sm text-[#374151] leading-relaxed">{text}</span>
        </li>
      ))}
    </ul>
  );
}

function ProfileCard({ icon: Icon, title, items }: { icon: React.ElementType; title: string; items: React.ReactNode[] }) {
  return (
    <div className="not-prose p-5 rounded-2xl border border-[#e2e8f0] bg-white">
      <div className="flex items-center gap-3 mb-3">
        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0a1628]">
          <Icon className="w-[16px] h-[16px] text-[#c9a84c]" strokeWidth={2} />
        </span>
        <h3 className="font-display font-bold text-[#0a1628] text-base m-0">{title}</h3>
      </div>
      <ul className="space-y-2 list-none p-0 m-0">
        {items.map((text, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-[#374151]">
            <ArrowRight className="w-[14px] h-[14px] text-[#c9a84c] shrink-0 mt-1" strokeWidth={2.5} />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const metadata: Metadata = generateSEO({
  title: "Perbedaan Asuransi All Risk dan TLO – Mana yang Lebih Baik?",
  description: "Penjelasan lengkap perbedaan All Risk dan TLO, kelebihan kekurangan masing-masing, dan panduan memilih yang sesuai untuk kendaraan Anda di Batam.",
  canonical: "https://asuransibatam.com/blog/perbedaan-all-risk-dan-tlo",
  languages: {
    id: "https://asuransibatam.com/blog/perbedaan-all-risk-dan-tlo",
    en: "https://asuransibatam.com/en/blog/all-risk-vs-tlo-car-insurance",
  },
}); 
const schema = { "@context": "https://schema.org", "@type": "Article", headline: "Perbedaan Asuransi All Risk dan TLO", datePublished: "2025-03-05", author: { "@type": "Person", name: "Rio" }, publisher: { "@type": "Organization", name: "Asuransi Batam" } };
export default function ArticleAllRiskTLOPage() {
  return (
    <ArticleLayout cluster="vehicle"
      title="Perbedaan Asuransi All Risk dan TLO: Mana yang Lebih Baik untuk Mobil Anda?"
      description="Panduan memilih antara All Risk dan TLO berdasarkan nilai kendaraan, usia, dan kebutuhan Anda."
      date="5 Maret 2025" category="Kendaraan" readTime="6 menit"
      breadcrumbs={[{ label: "Perbedaan All Risk dan TLO", href: "/blog/perbedaan-all-risk-dan-tlo" }]}
      schema={schema}
    >
      <p>Saat membeli asuransi kendaraan, pertanyaan yang paling sering ditanyakan adalah: <em>"Pilih All Risk atau TLO?"</em> Keduanya punya kelebihan dan kekurangan masing-masing. Artikel ini akan membantu Anda membuat keputusan yang tepat.</p>

      <SectionHeading icon={ShieldCheck}>Apa itu Asuransi All Risk (Comprehensive)?</SectionHeading>
      <p>All Risk atau Comprehensive adalah jenis asuransi kendaraan yang menanggung <strong>semua kerusakan fisik</strong>, baik ringan, sedang, maupun berat. Sesuai namanya, hampir semua risiko ditanggung, kecuali yang secara eksplisit dikecualikan dalam polis.</p>
      <p><strong>Yang ditanggung All Risk:</strong></p>
      <CheckList
        variant="check"
        items={[
          "Kerusakan ringan (lecet, penyok, kaca retak)",
          "Kerusakan sedang akibat tabrakan",
          "Kerusakan total akibat kecelakaan berat",
          "Kehilangan kendaraan (pencurian)",
          "Kebakaran kendaraan",
        ]}
      />

      <SectionHeading icon={ShieldAlert}>Apa itu Asuransi TLO (Total Loss Only)?</SectionHeading>
      <p>TLO atau Total Loss Only hanya menanggung kerugian jika kendaraan <strong>rusak total (lebih dari 75% nilai kendaraan) atau hilang dicuri</strong>. Kerusakan ringan dan sedang tidak ditanggung.</p>
      <p><strong>Yang ditanggung TLO:</strong></p>
      <CheckList
        variant="check"
        items={[
          "Kehilangan kendaraan karena pencurian",
          "Kerusakan yang nilainya melebihi 75% harga kendaraan",
        ]}
      />
      <p><strong>Yang TIDAK ditanggung TLO:</strong></p>
      <CheckList
        variant="cross"
        items={[
          "Lecet, penyok ringan",
          "Kerusakan kaca",
          "Kerusakan akibat kecelakaan yang nilai perbaikannya di bawah 75%",
        ]}
      />

      <SectionHeading icon={Scale}>Perbandingan Langsung: All Risk vs TLO</SectionHeading>
      <div className="overflow-x-auto my-6 rounded-2xl border border-[#e2e8f0]">
        <table className="w-full text-sm">
          <thead className="bg-[#0a1628] text-white">
            <tr>
              <th className="text-left p-4">Aspek</th>
              <th className="p-4 text-center">All Risk</th>
              <th className="p-4 text-center">TLO</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Kerusakan ringan", "✅ Ditanggung", "❌ Tidak"],
              ["Kerusakan total", "✅ Ditanggung", "✅ Ditanggung"],
              ["Pencurian", "✅ Ditanggung", "✅ Ditanggung"],
              ["Besaran premi", "Lebih mahal (1.5-3.5%)", "Lebih murah (0.2-0.7%)"],
              ["Cocok untuk", "Mobil baru/mahal", "Mobil tua/murah"],
            ].map(([a, b, c], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="p-4 font-medium text-[#0a1628]">{a}</td>
                <td className="p-4 text-center text-[#475569]">{b}</td>
                <td className="p-4 text-center text-[#475569]">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionHeading icon={Car}>Kapan Pilih yang Tepat untuk Anda?</SectionHeading>
      <div className="not-prose grid sm:grid-cols-2 gap-4 my-5">
        <ProfileCard
          icon={ShieldCheck}
          title="Kapan Pilih All Risk?"
          items={[
            "Kendaraan baru atau harga di atas Rp 200 juta",
            "Kendaraan masih dalam cicilan/KKB (biasanya bank mewajibkan All Risk)",
            "Sering digunakan di kota besar dengan risiko kecelakaan ringan tinggi",
            "Anda menginginkan ketenangan pikiran penuh",
          ]}
        />
        <ProfileCard
          icon={ShieldAlert}
          title="Kapan Pilih TLO?"
          items={[
            "Kendaraan tua berusia di atas 7-10 tahun",
            "Nilai kendaraan relatif rendah (di bawah Rp 150 juta)",
            "Anggaran premi terbatas",
            "Kendaraan hanya untuk keperluan tertentu atau jarang digunakan",
          ]}
        />
      </div>

      <SectionHeading icon={Wallet}>Rekomendasi Berdasarkan Harga Kendaraan</SectionHeading>
      <div className="p-5 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] my-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><span className="text-[#c9a84c] font-bold mt-0.5">→</span><div><strong>Di atas Rp 300 juta:</strong> Sangat disarankan All Risk</div></li>
          <li className="flex items-start gap-3"><span className="text-[#c9a84c] font-bold mt-0.5">→</span><div><strong>Rp 150-300 juta:</strong> All Risk direkomendasikan, TLO jika budget terbatas</div></li>
          <li className="flex items-start gap-3"><span className="text-[#c9a84c] font-bold mt-0.5">→</span><div><strong>Di bawah Rp 150 juta:</strong> TLO sudah memadai</div></li>
          <li className="flex items-start gap-3"><span className="text-[#c9a84c] font-bold mt-0.5">→</span><div><strong>KKB/Kredit:</strong> All Risk wajib selama cicilan berlangsung</div></li>
        </ul>
      </div>

      <div className="my-8 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0]">
        <h3 className="flex items-center gap-2.5 font-display font-bold text-[#0a1628] mb-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0a1628] shrink-0">
            <Sparkles className="w-[15px] h-[15px] text-[#c9a84c]" strokeWidth={2} />
          </span>
          Hitung Premi Mobil Anda Sekarang
        </h3>
        <p className="text-[#475569] mb-4">Gunakan kalkulator premi kami untuk estimasi biaya All Risk dan TLO berdasarkan tarif OJK terbaru.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/kalkulator-premi-mobil" className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm hover:bg-[#132040] transition-colors">Kalkulator Premi Mobil</Link>
          <Link href="/asuransi-kendaraan/asuransi-mobil-batam" className="px-6 py-2.5 border border-[#0a1628] text-[#0a1628] font-semibold rounded-xl text-sm hover:bg-[#0a1628]/5 transition-colors">Info Lengkap Asuransi Mobil</Link>
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><a href="/asuransi-kendaraan/asuransi-mobil-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Mobil Batam</a></li>
              <li><a href="/kalkulator-premi-mobil" className="text-sm text-blue-700 hover:underline font-medium">→ Kalkulator Premi Asuransi Mobil</a></li>
              <li><a href="/asuransi-kendaraan" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Kendaraan Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/cara-klaim-asuransi-mobil-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Klaim Asuransi Mobil Batam</a></li>
              <li><a href="/blog/asuransi-dump-truck-batam-proyek-konstruksi" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Dump Truck Batam</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}
