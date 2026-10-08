import type { Metadata } from "next";
import QuoteButton from "@/components/quote/QuoteButton";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  AlertTriangle,
  Beaker,
  Battery,
  Droplets,
  PaintBucket,
  FlaskConical,
  Factory,
  Gavel,
  ShieldCheck,
  Landmark,
  ScrollText,
  Megaphone,
  Waves,
  Fish,
  Anchor,
  Globe2,
  Wallet,
  Stethoscope,
  Scale,
  Siren,
  FileSearch,
  ClipboardList,
  FileSignature,
  CreditCard,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Pentingnya Asuransi Limbah B3 untuk Industri di Batam",
  description: "Mengapa asuransi limbah B3 wajib dimiliki industri di Batam. Regulasi PP 22/2021, sanksi, dan cara mendapatkan jaminan finansial limbah B3 yang tepat.",
  canonical: "https://asuransibatam.com/blog/pentingnya-asuransi-limbah-b3",
  languages: {
    id: "https://asuransibatam.com/blog/pentingnya-asuransi-limbah-b3",
    en: "https://asuransibatam.com/en/blog/hazardous-waste-insurance-batam",
  },
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pentingnya Asuransi Limbah B3 untuk Industri di Batam",
  datePublished: "2025-02-20",
  author: { "@type": "Person", name: "Rio" },
  publisher: { "@type": "Organization", name: "Asuransi Batam" },
};

// FAQPage JSON-LD — sumber tunggal untuk schema & visual FAQ di bawah,
// supaya keduanya tidak pernah tidak sinkron.
const faqItems = [
  {
    question: "Apakah semua perusahaan di Batam wajib memiliki asuransi limbah B3?",
    answer:
      "Wajib bagi pelaku usaha yang menghasilkan, menyimpan, mengangkut, atau mengelola limbah B3, sesuai PP No. 22 Tahun 2021. Jaminan finansial bisa berupa dana jaminan bank atau asuransi pencemaran lingkungan.",
  },
  {
    question: "Apa beda dana jaminan bank dengan asuransi limbah B3?",
    answer:
      "Dana jaminan bank mengharuskan perusahaan menyimpan dana tunai dalam jumlah besar yang tidak produktif. Asuransi hanya memerlukan pembayaran premi tahunan dengan nilai pertanggungan yang sama, sehingga jauh lebih hemat modal kerja.",
  },
  {
    question: "Berapa lama proses pengajuan asuransi limbah B3?",
    answer:
      "Setelah assessment risiko dan pengisian questionnaire, polis biasanya dapat diterbitkan dalam beberapa hari kerja, tergantung kompleksitas jenis dan volume limbah yang dikelola perusahaan.",
  },
  {
    question: "Apa yang terjadi jika perusahaan tidak punya jaminan finansial limbah B3?",
    answer:
      "Perusahaan berisiko terkena sanksi administratif seperti pembekuan izin, sanksi pidana hingga 10 tahun penjara dan denda Rp 10 miliar, serta tuntutan perdata dari pihak yang terdampak pencemaran.",
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

function IconList({ items }: { items: { icon: React.ElementType; text: React.ReactNode }[] }) {
  return (
    <ul className="not-prose grid sm:grid-cols-2 gap-3 my-5 list-none p-0">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf8f3] border border-[#eee3cc]">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white border border-[#e2e8f0] shrink-0 mt-0.5">
              <Icon className="w-[14px] h-[14px] text-[#1a4fa0]" strokeWidth={2} />
            </span>
            <span className="text-sm text-[#374151] leading-relaxed">{item.text}</span>
          </li>
        );
      })}
    </ul>
  );
}

function Steps({ items }: { items: { title: string; desc?: string }[] }) {
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

export default function ArticleLimbahB3Page() {
  return (
    <ArticleLayout cluster="liability"
      title="Pentingnya Asuransi Limbah B3 untuk Industri di Batam"
      description="Kewajiban hukum dan perlindungan bisnis dari risiko pencemaran limbah berbahaya."
      date="20 Februari 2025"
      category="Liability"
      readTime="8 menit"
      breadcrumbs={[{ label: "Pentingnya Asuransi Limbah B3", href: "/blog/pentingnya-asuransi-limbah-b3" }]}
      schema={schema}
      faqSchema={faqSchema}
    >
      <p>
        Batam sebagai kawasan industri bebas (FTZ) adalah rumah bagi ribuan perusahaan industri –
        mulai dari galangan kapal, manufaktur elektronik, hingga industri kimia. Hampir semua
        industri ini menghasilkan limbah yang dikategorikan sebagai Limbah Bahan Berbahaya dan
        Beracun (B3), dan risiko pencemarannya termasuk dalam lingkup{" "}
        <Link href="/asuransi-liability" className="font-medium">
          asuransi liability
        </Link>{" "}
        yang wajib dipertimbangkan setiap pelaku usaha.
      </p>

      <SectionHeading icon={Beaker}>Apa itu Limbah B3?</SectionHeading>
      <p>
        Limbah B3 adalah sisa usaha atau kegiatan yang mengandung bahan berbahaya dan/atau beracun
        yang karena sifat, konsentrasi, dan/atau jumlahnya dapat mencemarkan lingkungan hidup dan
        membahayakan kesehatan manusia.
      </p>
      <p>Contoh limbah B3 yang umum ditemukan di industri Batam:</p>
      <IconList
        items={[
          { icon: Droplets, text: "Oli bekas dan cairan hidrolik" },
          { icon: FlaskConical, text: "Bahan kimia proses industri" },
          { icon: Battery, text: "Baterai dan aki bekas" },
          { icon: PaintBucket, text: "Limbah cat dan solven" },
          { icon: Factory, text: "Limbah dari proses galvanis" },
          { icon: Beaker, text: "Sludge IPAL (instalasi pengolahan air limbah)" },
        ]}
      />

      <SectionHeading icon={ScrollText}>Regulasi Wajib: PP No. 22 Tahun 2021</SectionHeading>
      <p>
        Berdasarkan Peraturan Pemerintah No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan
        Pengelolaan Lingkungan Hidup, setiap pelaku usaha yang menghasilkan atau mengelola limbah B3{" "}
        <strong>wajib memiliki jaminan finansial</strong>.
      </p>
      <p>Jaminan finansial ini dapat berupa salah satu dari tiga bentuk berikut:</p>
      <IconList
        items={[
          { icon: Landmark, text: "Dana jaminan (rekening bank khusus)" },
          {
            icon: ShieldCheck,
            text: (
              <Link href="/asuransi-liability/asuransi-limbah-b3" className="font-medium">
                Asuransi pencemaran lingkungan
              </Link>
            ),
          },
          { icon: Wallet, text: "Jaminan dari lembaga keuangan lain" },
        ]}
      />
      <p>
        Dari ketiga opsi tersebut, asuransi adalah pilihan paling praktis dan{" "}
        <em>cost-effective</em> dibandingkan harus menyisihkan dana tunai dalam jumlah besar yang
        seharusnya bisa digunakan sebagai modal kerja.
      </p>

      <SectionHeading icon={AlertTriangle}>Risiko Jika Tidak Memiliki Asuransi Limbah B3</SectionHeading>
      <p>Sanksi bagi industri yang tidak memenuhi kewajiban jaminan finansial cukup berat:</p>

      <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 mb-2">
            <Gavel className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
            <p className="text-sm font-semibold text-[#0a1628] m-0">Sanksi Administratif</p>
          </div>
          <p className="text-sm text-[#475569] m-0">Teguran, paksaan pemerintah, hingga pembekuan izin usaha.</p>
        </div>
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 mb-2">
            <Scale className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
            <p className="text-sm font-semibold text-[#0a1628] m-0">Sanksi Pidana</p>
          </div>
          <p className="text-sm text-[#475569] m-0">Penjara 1–10 tahun dan denda hingga Rp 10 miliar.</p>
        </div>
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 mb-2">
            <FileSignature className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
            <p className="text-sm font-semibold text-[#0a1628] m-0">Tuntutan Perdata</p>
          </div>
          <p className="text-sm text-[#475569] m-0">Klaim ganti rugi dari masyarakat yang terdampak pencemaran.</p>
        </div>
        <div className="p-5 rounded-xl border border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-2.5 mb-2">
            <Megaphone className="w-[18px] h-[18px] text-[#a07830]" strokeWidth={2} />
            <p className="text-sm font-semibold text-[#0a1628] m-0">Reputasi Bisnis</p>
          </div>
          <p className="text-sm text-[#475569] m-0">Pemberitaan negatif yang merusak citra perusahaan di mata mitra dan investor.</p>
        </div>
      </div>

      <SectionHeading icon={Waves}>Kenapa Batam Punya Risiko Lebih Tinggi?</SectionHeading>
      <p>Batam sebagai pulau yang dikelilingi laut memiliki sensitivitas ekosistem yang tinggi:</p>
      <IconList
        items={[
          { icon: Waves, text: "Pencemaran yang mencapai laut bisa merusak ekosistem mangrove dan terumbu karang" },
          { icon: Anchor, text: "Berdampak pada industri pariwisata dan perikanan lokal" },
          { icon: Fish, text: "Potensi tuntutan dari nelayan dan komunitas pesisir" },
          { icon: Globe2, text: "Kedekatan dengan Singapura dan Malaysia membuat regulasi lingkungan lebih diperhatikan" },
        ]}
      />

      <SectionHeading icon={ShieldCheck}>Apa yang Ditanggung Asuransi Limbah B3?</SectionHeading>
      <IconList
        items={[
          { icon: Droplets, text: "Biaya pembersihan dan pemulihan lahan yang tercemar" },
          { icon: Waves, text: "Biaya pemulihan ekosistem perairan" },
          { icon: Stethoscope, text: "Kompensasi kesehatan masyarakat terdampak" },
          { icon: Scale, text: "Biaya hukum dan pembelaan" },
          { icon: Siren, text: "Biaya respons darurat saat terjadi kebocoran" },
          { icon: Gavel, text: "Tuntutan hukum dari pemerintah dan masyarakat" },
        ]}
      />

      <SectionHeading icon={ClipboardList}>Bagaimana Cara Mendapatkan Asuransi Limbah B3?</SectionHeading>
      <p>Proses mendapatkan asuransi limbah B3 umumnya melalui lima langkah berikut:</p>
      <Steps
        items={[
          { title: "Assessment risiko", desc: "Dilakukan oleh konsultan asuransi terhadap operasional perusahaan." },
          { title: "Pengisian questionnaire", desc: "Mencakup jenis dan volume limbah yang dihasilkan." },
          { title: "Penentuan nilai pertanggungan", desc: "Disesuaikan dengan skala risiko dan operasional." },
          { title: "Penerbitan polis & pembayaran premi", desc: "Setelah nilai pertanggungan disepakati." },
          { title: "Polis diterima", desc: "Menjadi bukti sah pemenuhan jaminan finansial sesuai PP 22/2021." },
        ]}
      />
      <p>
        Jika perusahaan Anda belum yakin jenis perlindungan liability apa yang paling sesuai,
        Anda bisa mempelajari lebih lanjut ragam{" "}
        <Link href="/asuransi-liability" className="font-medium">
          produk asuransi liability
        </Link>{" "}
        yang tersedia sebelum menentukan nilai pertanggungan.
      </p>

      <SectionHeading icon={FileSearch}>Pertanyaan yang Sering Diajukan</SectionHeading>
      <div className="space-y-3 not-prose">
        {faqItems.map((item) => (
          <details key={item.question} className="group p-5 rounded-xl border border-[#e2e8f0] bg-[#faf8f3]">
            <summary className="font-semibold text-[#0a1628] cursor-pointer list-none flex items-center justify-between gap-3">
              <span className="flex items-center gap-3">
                <BadgeCheck className="w-[16px] h-[16px] text-[#c9a84c] shrink-0" strokeWidth={2} />
                {item.question}
              </span>
              <span className="text-[#c9a84c] group-open:rotate-45 transition-transform text-xl leading-none shrink-0">+</span>
            </summary>
            <p className="text-[#374151] text-sm mt-3 mb-0 leading-relaxed pl-7">{item.answer}</p>
          </details>
        ))}
      </div>

      <div className="my-8 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0]">
        <div className="flex items-center gap-2.5 mb-3">
          <CreditCard className="w-5 h-5 text-[#c9a84c]" strokeWidth={2} />
          <h3 className="font-display font-bold text-[#0a1628] m-0">Pastikan Bisnis Anda Patuh Regulasi</h3>
        </div>
        <p className="text-[#475569] mb-4">
          Konsultasikan kebutuhan asuransi limbah B3 Anda dengan Rio. Kami membantu industri di
          Batam memenuhi kewajiban hukum lingkungan.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/asuransi-liability/asuransi-limbah-b3" className="px-6 py-2.5 bg-[#0a1628] text-white font-semibold rounded-xl text-sm">
            Info Asuransi Limbah B3
          </Link>
          <QuoteButton cluster="liability" lang="id" variant="gold" className="!rounded-xl !px-6 !py-3 !text-sm" />
        </div>
      </div>
    
      {/* Related Links */}
      <div className="not-prose mt-10 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold mb-6" style={{ color: "#0a1628", fontFamily: "Syne, sans-serif" }}>Halaman Terkait</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Produk &amp; Layanan</p>
            <ul className="space-y-2">
              <li><a href="/asuransi-liability/asuransi-limbah-b3" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Limbah B3 Batam</a></li>
              <li><a href="/asuransi-liability" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Liability Batam</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Artikel Terkait</p>
            <ul className="space-y-2">
              <li><a href="/blog/klaim-asuransi-limbah-b3-kawasan-industri-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Cara Klaim Asuransi Limbah B3</a></li>
              <li><a href="/blog/asuransi-gudang-kawasan-industri-muka-kuning-batam" className="text-sm text-blue-700 hover:underline font-medium">→ Asuransi Gudang Kawasan Industri Batam</a></li>
            </ul>
          </div>
        </div>
      </div>

    </ArticleLayout>
  );
}
