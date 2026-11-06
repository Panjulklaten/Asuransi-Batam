import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ProductPageLayout from "@/components/ProductPageLayout";
import { ArrowRight, Biohazard, ClipboardList, Factory, Scale, ShieldCheck, Users, Wrench } from "lucide-react";
import Link from "next/link";
export const metadata: Metadata = generateSEO({
  title: "Asuransi Liability Batam – Tanggung Gugat Pihak Ketiga & Limbah B3",
  description: "Asuransi liability di Batam. Perlindungan public liability, produk liability, dan asuransi khusus limbah B3 untuk kawasan industri. Wajib untuk bisnis di Batam. Konsultasi gratis: 0813-7333-6728.",
  canonical: "https://asuransibatam.com/asuransi-liability",
  languages: {
      id: "https://asuransibatam.com/asuransi-liability",
      en: "https://asuransibatam.com/en/liability-insurance",
    },
});
const benefits = [
  { icon: "⚖️", Icon: Scale, title: "Tanggung Gugat Pihak Ketiga", desc: "Biaya ganti rugi, kompensasi, dan biaya hukum jika operasional bisnis Anda menyebabkan kerugian fisik atau kerusakan properti pihak ketiga." },
  { icon: "🏭", Icon: Factory, title: "Liability Operasional Industri", desc: "Perlindungan atas tanggung jawab hukum yang timbul dari kegiatan operasional pabrik, gudang, dan fasilitas industri di kawasan Batam." },
  { icon: "📋", Icon: ClipboardList, title: "Biaya Hukum & Persidangan", desc: "Biaya pengacara, biaya pengadilan, dan biaya penyelesaian klaim hukum — termasuk jika gugatan ternyata tidak terbukti di persidangan." },
  { icon: "☣️", Icon: Biohazard, title: "Pencemaran & Limbah Lingkungan", desc: "Khusus untuk industri penghasil limbah B3 di kawasan industri Batam yang wajib memiliki jaminan pencemaran lingkungan sesuai regulasi KLHK." },
  { icon: "🛡️", Icon: ShieldCheck, title: "Product Liability", desc: "Perlindungan atas klaim kerusakan atau cedera yang disebabkan oleh produk yang Anda produksi, jual, atau distribusikan ke pasar." },
  { icon: "👥", Icon: Users, title: "Employers Liability", desc: "Perlindungan atas tuntutan karyawan yang mengalami kecelakaan atau penyakit akibat kerja di luar cakupan BPJS Ketenagakerjaan." },
];
const faqs = [
  { q: "Siapa yang wajib punya asuransi liability di Batam?", a: "Setiap bisnis yang berinteraksi dengan publik atau menghasilkan risiko kepada pihak lain wajib mempertimbangkan liability insurance. Secara khusus, regulasi mewajibkan industri penghasil limbah B3 (PP No. 22 Tahun 2021), operator kapal di pelabuhan, dan kontraktor proyek pemerintah untuk memiliki jaminan tanggung gugat." },
  { q: "Apa itu Public Liability Insurance dan siapa yang butuh?", a: "Public Liability melindungi bisnis dari tuntutan hukum pihak ketiga — pelanggan, pengunjung, atau masyarakat umum — yang mengalami cedera atau kerugian properti akibat operasional bisnis Anda. Hotel di Nongsa, restoran di Nagoya, mal di Batam Center, hingga galangan kapal di Sekupang sangat membutuhkan perlindungan ini." },
  { q: "Berapa nilai pertanggungan liability yang disarankan?", a: "Untuk bisnis kecil-menengah di Batam, nilai TPL minimal Rp 500 juta per kejadian sudah cukup. Untuk industri berat, pabrik, atau operator kapal, disarankan minimal Rp 5–25 miliar mengingat potensi kerugian dan biaya litigasi yang jauh lebih besar." },
  { q: "Apakah asuransi liability bisa diklaim jika gugatan terbukti tidak benar?", a: "Ya. Salah satu manfaat utama liability insurance adalah ia menanggung biaya pembelaan hukum (legal defense cost) bahkan jika pada akhirnya Anda terbukti tidak bersalah. Biaya pengacara dan biaya pengadilan bisa sangat besar meskipun kasus tidak terbukti." },
  { q: "Apakah ada asuransi liability khusus untuk kawasan industri Batam?", a: "Ya, kami menyediakan asuransi Pollution Liability (Pencemaran Lingkungan) khusus untuk industri di Muka Kuning, Kabil, Tanjung Uncang, dan kawasan industri lain di Batam yang wajib memiliki dokumen asuransi lingkungan sebagai syarat izin operasional dari KLHK." },
  { q: "Bagaimana proses pengajuan klaim liability?", a: "Segera laporkan ke kami dalam 3×24 jam setelah menerima tuntutan atau mengetahui potensi klaim. Jangan memberikan pernyataan atau mengakui kesalahan kepada pihak ketiga sebelum berkoordinasi dengan tim kami. Kami akan mengirim adjuster untuk menilai situasi dan mendampingi proses hukum." },
];
const policyComparison = [
  { feature: "Third Party Liability (TPL)", basic: "✅", standard: "✅", comprehensive: "✅" },
  { feature: "Biaya Hukum & Pengacara", basic: "Terbatas", standard: "✅", comprehensive: "✅" },
  { feature: "Product Liability", basic: "❌", standard: "✅", comprehensive: "✅" },
  { feature: "Pollution / Limbah B3", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Employers Liability", basic: "❌", standard: "Opsional", comprehensive: "✅" },
  { feature: "Cross Liability", basic: "❌", standard: "❌", comprehensive: "✅" },
];
const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asuransi Liability Batam",
  description: "Layanan asuransi tanggung gugat untuk bisnis, industri, dan kawasan industri di Batam mencakup public liability, pollution liability, dan product liability.",
  provider: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", telephone: "+6281373336728" },
  areaServed: { "@type": "City", name: "Batam" },
};
export default function AsuransiLiabilityPage() {
  return (
    <ProductPageLayout cluster="liability" rich
      heroImage={{ src: "/images/produk/liability.webp", alt: "Jabat tangan kesepakatan polis dan ganti rugi, ilustrasi asuransi liability bisnis di Batam", badge: "Tanggung gugat bisnis dan industri di Batam", shape: "square" }} title="Asuransi Liability Batam" subtitle="Perlindungan Tanggung Gugat Bisnis & Industri"
      description="Satu kejadian tak terduga — tamu terpeleset di hotel Anda, produk menyebabkan cedera, atau limbah mencemari lingkungan — bisa mengancam bisnis dengan tuntutan hukum miliaran rupiah. Asuransi liability melindungi Anda dari risiko tanggung jawab hukum kepada pihak ketiga di Batam."
      benefits={benefits} faqs={faqs} policyComparison={policyComparison}
      breadcrumbs={[{ label: "Asuransi Liability", href: "/asuransi-liability" }]}
      schema={schema}
    >
      <div className="mb-12">
        <h2 className="font-display font-bold text-2xl text-[#0a1628] mb-2 text-center">Mengapa Bisnis di Batam Wajib Punya Liability Insurance</h2><div aria-hidden="true" className="mx-auto mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
        <p className="text-center text-[#475569] mb-8 max-w-2xl mx-auto">Batam adalah kota industri dengan risiko tanggung gugat yang lebih tinggi dari kota biasa — galangan kapal, pabrik elektronik, kawasan logistik, dan pariwisata internasional beroperasi berdampingan.</p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-gradient-to-b from-white to-[#faf8f3] hover:border-[#c9a84c]/40 hover:shadow-md transition-all">
            <p className="mb-1 bg-gradient-to-r from-[#1a4fa0] to-[#2c6fd8] bg-clip-text font-display text-3xl font-bold text-transparent">200+</p>
            <p className="text-[15px] leading-relaxed text-[#475569]">Perusahaan manufaktur aktif di kawasan industri Batam yang wajib memiliki jaminan pencemaran lingkungan</p>
          </div>
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-gradient-to-b from-white to-[#faf8f3] hover:border-[#c9a84c]/40 hover:shadow-md transition-all">
            <p className="mb-1 bg-gradient-to-r from-[#1a4fa0] to-[#2c6fd8] bg-clip-text font-display text-3xl font-bold text-transparent">Rp 5 M+</p>
            <p className="text-[15px] leading-relaxed text-[#475569]">Potensi kerugian tuntutan hukum tunggal di industri berat — tanpa asuransi bisa menguras modal kerja perusahaan</p>
          </div>
          <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-gradient-to-b from-white to-[#faf8f3] hover:border-[#c9a84c]/40 hover:shadow-md transition-all">
            <p className="mb-1 bg-gradient-to-r from-[#1a4fa0] to-[#2c6fd8] bg-clip-text font-display text-3xl font-bold text-transparent">PP 22/2021</p>
            <p className="text-[15px] leading-relaxed text-[#475569]">Regulasi KLHK yang mewajibkan industri penghasil limbah B3 di Batam memiliki asuransi pencemaran lingkungan</p>
          </div>
        </div>
      </div>
      <h2 className="font-display font-bold text-3xl text-[#0a1628] mb-2 text-center">Produk Liability Kami</h2><div aria-hidden="true" className="mx-auto mb-8 h-1 w-14 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { title: "Asuransi Limbah B3", desc: "Perlindungan khusus industri penghasil limbah Bahan Berbahaya & Beracun di kawasan industri Batam. Wajib untuk izin lingkungan.", href: "/asuransi-liability/asuransi-limbah-b3", Icon: Biohazard },
          { title: "Public Liability Insurance", desc: "Perlindungan tanggung gugat terhadap publik, tamu, pelanggan, dan pihak ketiga yang mengalami kerugian akibat operasional bisnis Anda.", href: "/asuransi-liability/public-liability", Icon: ShieldCheck },
          { title: "Freight Forwarders Liability (FFL)", desc: "Proteksi bagi perusahaan forwarding, PPJK & EMKL dari tuntutan kehilangan, kerusakan, dan kesalahan dokumen kargo di Batu Ampar, Sekupang & Tanjung Uncang.", href: "/asuransi-liability/freight-forwarders-liability" },
          { title: "Employers & Product Liability", desc: "Tanggung gugat atas tuntutan karyawan dan gugatan produk yang sudah beredar, melengkapi Public Liability dan BPJS Ketenagakerjaan.", href: "/asuransi-liability/employers-product-liability", Icon: Users },
          { title: "Ship Repairer's Liability", desc: "Tanggung gugat galangan dan kontraktor reparasi atas kapal pelanggan yang berada dalam penguasaan mereka.", href: "/asuransi-liability/ship-repairers-liability", Icon: Wrench },
        ].map((p) => (
          <Link key={p.href} href={p.href} className="group flex h-full flex-col p-7 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#c9a84c]/60 hover:shadow-xl hover:-translate-y-1 transition-all">
            {p.Icon && <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c9a84c]/12 text-[#a07830] ring-1 ring-[#c9a84c]/30 transition-colors group-hover:bg-gradient-to-br group-hover:from-[#c9a84c] group-hover:to-[#f0d080] group-hover:text-[#0a1628]"><p.Icon size={26} strokeWidth={1.75} aria-hidden="true" /></span>}
            <h3 className="font-display font-bold text-lg text-[#0a1628] group-hover:text-[#1a4fa0] mb-2 transition-colors">{p.title}</h3>
            <p className="text-[#475569] text-[15px] leading-relaxed">{p.desc}</p>
            <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a4fa0]">Lihat detail<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
          </Link>
        ))}
      </div>
    </ProductPageLayout>
  );
}
