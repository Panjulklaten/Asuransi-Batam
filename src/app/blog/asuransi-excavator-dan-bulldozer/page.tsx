import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import {
  TrendingDown,
  Flame,
  Waves,
  Truck,
  ShieldCheck,
  ShieldOff,
  Gauge,
  ClipboardCheck,
  PhoneCall,
  Wrench,
  Hourglass,
} from "lucide-react";

export const metadata: Metadata = generateSEO({
  title: "Asuransi Excavator dan Bulldozer Batam – Risiko Lapangan, Cakupan Polis & Proses Klaim",
  description: "Excavator dan bulldozer termasuk aset kontraktor paling mahal sekaligus paling rentan cedera di lapangan. Simak jenis risiko yang paling sering terjadi, apa saja yang ditanggung polis, dan cara mengasuransikan unit alat berat Anda di Batam.",
  canonical: "https://asuransibatam.com/blog/asuransi-excavator-dan-bulldozer",
  languages: {
      id: "https://asuransibatam.com/blog/asuransi-excavator-dan-bulldozer",
      en: "https://asuransibatam.com/en/blog/excavator-and-bulldozer-insurance-batam",
    },
});

// Article schema (E-E-A-T: authorship & publisher signal)
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Excavator dan Bulldozer Batam: Risiko Lapangan, Cakupan Polis & Proses Klaim",
  description: "Excavator dan bulldozer termasuk aset kontraktor paling mahal sekaligus paling rentan cedera di lapangan. Simak jenis risiko yang paling sering terjadi, apa saja yang ditanggung polis, dan cara mengasuransikan unit alat berat Anda di Batam.",
  datePublished: "2026-05-06",
  dateModified: "2026-08-04",
  author: { "@type": "Person", name: "Rio", jobTitle: "Praktisi Asuransi", telephone: "+6281373336728" },
  publisher: { "@type": "InsuranceAgency", name: "Asuransi Batam – Rio", url: "https://asuransibatam.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://asuransibatam.com/blog/asuransi-excavator-dan-bulldozer" },
};

// FAQ schema — dirender via prop resmi faqSchema di ArticleLayout
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Excavator yang statusnya sewa, bisakah diasuransikan oleh pihak penyewa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bisa, namun perlu koordinasi yang jelas. Penyewa boleh menerbitkan polis atas namanya sendiri untuk melindungi tanggung jawab selama masa sewa berlangsung. Yang perlu diwaspadai adalah risiko double insurance — apabila pemilik unit ternyata sudah memiliki polis aktif untuk periode yang sama, klaim bisa jadi rumit karena tumpang tindih pertanggungan.",
      },
    },
    {
      "@type": "Question",
      name: "Kalau excavator rusak akibat kesalahan operator, apakah tetap bisa diklaim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Umumnya bisa. Polis EAR biasanya menanggung kerusakan yang timbul dari kelalaian (negligence) operator selama itu tidak dikategorikan sebagai kesengajaan (willful misconduct). Namun kerusakan yang terjadi karena operator tidak kompeten atau tidak memegang sertifikasi resmi berpotensi dijadikan dasar penolakan oleh sebagian penanggung.",
      },
    },
    {
      "@type": "Question",
      name: "Saat unit sedang standby dan tidak beroperasi, apakah polisnya tetap berjalan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tetap berjalan, selama polis masih aktif dan preminya dibayar tepat waktu. Perlindungan tidak berhenti hanya karena unit sedang diparkir atau tidak dioperasikan — termasuk untuk risiko kebakaran, pencurian, atau bencana alam yang terjadi ketika unit dalam kondisi diam.",
      },
    },
  ],
};

export default function ArticleAsuransiExcavatorBulldozerPage() {
  return (
    <ArticleLayout
      title="Asuransi Excavator dan Bulldozer Batam: Risiko Lapangan, Cakupan Polis & Proses Klaim"
      description="Nilai satu unit excavator bisa menembus miliaran rupiah. Tanpa proteksi yang tepat, satu insiden di lapangan saja bisa menghentikan seluruh jalannya proyek."
      date="6 Mei 2026"
      category="Machinery"
      readTime="9 menit"
      breadcrumbs={[
        { label: "Asuransi Machinery", href: "/asuransi-machinery" },
        { label: "Asuransi Excavator dan Bulldozer", href: "/blog/asuransi-excavator-dan-bulldozer" },
      ]}
      schema={articleSchema}
      faqSchema={faqSchema}
    >
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">
        Pendahuluan
      </p>
      <p>
        Di berbagai lokasi proyek Batam — mulai dari pembangunan kawasan industri sampai
        reklamasi area pelabuhan — excavator dan bulldozer dituntut bekerja pada kondisi lapangan
        yang jauh dari kata ideal. Permukaan tanah yang keras, area berair, kemiringan curam, dan
        beban kerja harian yang tinggi menempatkan dua alat ini pada daftar aset dengan risiko
        kerusakan paling besar. Satu unit excavator kelas menengah saja bisa bernilai Rp 800 juta
        hingga Rp 2 miliar. Bila mengalami kerusakan berat tanpa perlindungan asuransi yang
        memadai, kontraktor berisiko menanggung kerugian yang setara dengan margin keuntungan
        dari beberapa proyek sekaligus.
      </p>
      <p>
        Artikel ini mengupas secara spesifik bagaimana skema perlindungan asuransi bekerja untuk
        excavator dan bulldozer, cakupan apa saja yang termasuk di dalamnya, serta bagaimana
        alur proses klaimnya bila terjadi kerusakan di Batam.
      </p>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Kenapa Perlu Polis Tersendiri
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">Kenapa Excavator dan Bulldozer Perlu Polis Terpisah dari Proyek?</h2>
      <p>
        Sebagian kontraktor masih menganggap asuransi proyek (CAR/EAR) sudah cukup untuk
        melindungi seluruh aset yang ada di lapangan. Kenyataannya tidak sesederhana itu. Polis
        Contractor's All Risk (CAR) memang bisa mencakup alat berat, tapi cakupannya terbatas
        pada risiko yang muncul <em>di dalam lingkup proyek tertentu</em> dan selama kontrak
        proyek tersebut masih berjalan. Begitu unit berpindah ke proyek lain atau kontraknya
        berakhir, perlindungan otomatis hilang.
      </p>
      <p>
        Di sisi lain, polis <strong>Equipment All Risk (EAR)</strong> dirancang secara khusus
        untuk melindungi unit alat beratnya sendiri — bukan proyek tempatnya bekerja. Polis ini
        mengikuti unit tersebut ke mana pun ia dioperasikan, selama masa berlaku polis masih
        aktif. Karakteristik inilah yang membuat EAR lebih relevan untuk pemilik alat berat yang
        unitnya kerap berpindah lokasi proyek sepanjang tahun. Lini{" "}
        <Link href="/asuransi-machinery" className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors">
          asuransi machinery
        </Link>{" "}
        kami mencakup beragam jenis alat berat dengan karakteristik risiko yang berbeda satu sama lain.
      </p>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Ragam Risiko Lapangan
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">Risiko yang Paling Sering Dihadapi Excavator dan Bulldozer</h2>
      <p>
        Sebelum menentukan jenis polis, ada baiknya memahami dulu ragam risiko yang paling kerap
        muncul pada kedua alat ini berdasarkan kondisi lapangan yang sesungguhnya:
      </p>

      <div className="not-prose mt-8 mb-10 grid gap-4 sm:grid-cols-2">
        {[
          {
            icon: TrendingDown,
            title: "Kehilangan Keseimbangan di Medan Miring",
            body: "Excavator yang bekerja di tepi lereng atau tanggul rawan kehilangan kestabilan, apalagi ketika tanah dalam kondisi basah atau mudah longsor. Ongkos perbaikan unit yang terguling bisa mencapai ratusan juta rupiah, belum termasuk biaya evakuasi dari medan yang sulit dijangkau.",
          },
          {
            icon: Wrench,
            title: "Kerusakan Boom dan Arm karena Benturan Keras",
            body: "Komponen hydraulic arm dan boom pada excavator paling rentan cedera saat menggali material padat seperti cadas atau sisa beton lama. Mengganti boom membutuhkan komponen impor yang waktu pengadaannya bisa cukup lama.",
          },
          {
            icon: Gauge,
            title: "Ausnya Undercarriage pada Bulldozer",
            body: "Rangkaian track (rantai roda) bulldozer cepat aus bila terus dipakai di medan berbatu. Mengganti satu set undercarriage saja bisa memakan biaya di atas Rp 100 juta, tergantung ukuran unitnya.",
          },
          {
            icon: Flame,
            title: "Titik Api dari Kebocoran Sistem Hidraulik",
            body: "Oli hidraulik bertekanan tinggi yang bocor lalu mengenai bagian mesin yang panas menjadi salah satu pemicu kebakaran yang paling jarang diantisipasi oleh operator di lapangan.",
          },
          {
            icon: Truck,
            title: "Kerusakan saat Proses Pemindahan dengan Flatbed",
            body: "Memindahkan unit antarlokasi proyek menggunakan trailer bukan tanpa risiko — mulai dari unit yang terjatuh saat dimuat hingga kerusakan akibat kondisi jalan yang buruk sepanjang perjalanan.",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a1628] mb-4">
                <Icon size={18} className="text-[#c9a84c]" />
              </span>
              <p className="font-display font-bold text-[#0a1628] mb-2">{item.title}</p>
              <p className="text-sm text-[#475569] leading-relaxed">{item.body}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Apa Saja yang Dijamin
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">Cakupan Polis EAR untuk Excavator dan Bulldozer</h2>

      <div className="not-prose my-7 overflow-hidden rounded-2xl border border-[#e2e8f0] shadow-[0_8px_24px_-8px_rgba(10,22,40,0.12)]">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0a1628] text-white">
              <th className="text-left px-5 py-4 font-display tracking-wide">Jenis Risiko</th>
              <th className="text-left px-5 py-4 font-display tracking-wide">Ditanggung EAR?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Insiden operasional (terguling, benturan, terperosok)", "✅ Ditanggung"],
              ["Kebakaran maupun ledakan", "✅ Ditanggung"],
              ["Dampak bencana alam (banjir, angin kencang, gempa)", "✅ Ditanggung"],
              ["Kerusakan selama proses transit antarlokasi", "✅ Ditanggung"],
              ["Tanggung jawab hukum ke pihak ketiga (orang/properti)", "✅ Opsional (perluasan)"],
              ["Kegagalan mekanis mesin secara mendadak", "✅ Opsional (perluasan MB)"],
              ["Keausan wajar akibat pemakaian normal", "❌ Tidak ditanggung"],
              ["Kerusakan akibat kelebihan beban yang disengaja", "❌ Tidak ditanggung"],
              ["Biaya perawatan berkala / servis rutin", "❌ Tidak ditanggung"],
            ].map(([a, b], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf8f3]"}>
                <td className="px-5 py-4 font-semibold text-[#0a1628] border-b border-[#e2e8f0]">{a}</td>
                <td className="px-5 py-4 text-[#475569] leading-relaxed border-b border-[#e2e8f0]">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Cakupan di atas berlaku spesifik untuk excavator dan bulldozer. Unit machinery lainnya
        seperti{" "}
        <Link href="/asuransi-machinery/asuransi-crane" className="text-[#1a4fa0] hover:text-[#c9a84c] underline transition-colors">
          crane
        </Link>{" "}
        membawa karakteristik risiko tambahan — terutama berkaitan dengan beban angkat dan
        kestabilan alat — sehingga wording polisnya pun sedikit berbeda dari kedua alat ini.
      </p>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Menghitung Nilai Pertanggungan
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">Cara Menentukan Nilai Pertanggungan yang Sesuai</h2>
      <p>
        Ini termasuk pertanyaan yang paling sering diajukan pemilik alat berat saat pertama kali
        mengurus polisnya. Ada dua pendekatan umum yang biasa dipakai:
      </p>

      <div className="not-prose mt-8 mb-6 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a1628] mb-4">
            <Hourglass size={18} className="text-[#c9a84c]" />
          </span>
          <p className="font-display font-bold text-[#0a1628] mb-2">Nilai Pasar Wajar (Market Value)</p>
          <p className="text-sm text-[#475569] leading-relaxed">
            Merujuk pada harga jual unit di pasaran pada kondisi saat ini, dengan memperhitungkan
            usia dan jam pakai mesin. Pendekatan ini lazim dipakai untuk unit berusia lebih dari 3
            tahun. Jika terjadi klaim total loss, nilai ganti rugi mengikuti harga pasar pada saat
            kejadian berlangsung.
          </p>
        </div>

        <div className="rounded-2xl border border-[#e2e8f0] bg-[#faf8f3] p-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a1628] mb-4">
            <ShieldCheck size={18} className="text-[#c9a84c]" />
          </span>
          <p className="font-display font-bold text-[#0a1628] mb-2">Nilai Penggantian Baru (Replacement Value)</p>
          <p className="text-sm text-[#475569] leading-relaxed">
            Mengacu pada harga unit baru dengan spesifikasi setara di pasaran saat ini. Preminya
            memang lebih tinggi, tapi nilai ganti ruginya lebih menguntungkan karena tidak
            dipotong penyusutan. Pilihan ini cocok untuk unit baru atau unit yang masih dalam
            masa cicilan pembiayaan.
          </p>
        </div>
      </div>

      <p>
        Sebelum polis diterbitkan, perusahaan asuransi biasanya mensyaratkan survei fisik
        terlebih dahulu terhadap unit yang akan diasuransikan. Surveyor akan memeriksa kondisi
        fisik, jam operasi (dari hour meter), dan kelengkapan dokumen unit tersebut. Pastikan
        unit dalam kondisi terawat saat jadwal survei berlangsung.
      </p>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Alur Pengajuan
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">Langkah-Langkah Mengajukan Klaim Saat Unit Mengalami Kerusakan</h2>

      <div className="not-prose mt-10 mb-4">
        {[
          {
            n: "01",
            title: "Hentikan Pengoperasian dan Amankan Lokasi",
            body: "Begitu kerusakan terjadi, segera hentikan penggunaan unit. Jangan mencoba memperbaikinya sendiri sebelum surveyor tiba — tindakan ini berisiko membatalkan klaim karena dianggap mengubah kondisi bukti di lapangan.",
          },
          {
            n: "02",
            title: "Rekam Kerusakan Secara Menyeluruh",
            body: "Ambil foto dan video dari berbagai sudut — kondisi fisik luar yang rusak, situasi di sekitar lokasi kejadian, dan panel instrumen bila masih memungkinkan diakses. Catat waktu dan titik lokasi kejadian secara rinci.",
          },
          {
            n: "03",
            title: "Laporkan ke Agen Asuransi dalam 3 x 24 Jam",
            body: "Hampir seluruh polis EAR mewajibkan pelaporan dalam rentang waktu ini. Melampaui tenggat tersebut adalah penyebab penolakan yang paling sering terjadi, padahal sebetulnya paling mudah dihindari.",
          },
          {
            n: "04",
            title: "Tunggu Jadwal Kunjungan Surveyor",
            body: "Petugas survei dari pihak asuransi akan datang langsung ke lokasi untuk menilai kerusakan. Jangan memindahkan unit ke bengkel sebelum proses survei selesai, kecuali sudah ada izin tertulis dari penanggung.",
          },
          {
            n: "05",
            title: "Ikuti Arahan Bengkel Rekanan",
            body: "Setelah klaim disetujui, proses perbaikan biasanya diarahkan ke bengkel atau dealer rekanan. Perbaikan yang dilakukan di luar rekanan tanpa persetujuan tertulis umumnya tidak dapat diklaim.",
          },
        ].map((step, i, arr) => (
          <div key={step.n} className="flex gap-5">
            <div className="flex flex-col items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-display text-base font-bold text-[#c9a84c]">
                {step.n}
              </span>
              {i < arr.length - 1 && (
                <span className="mt-1 w-px flex-1 bg-[#e2e8f0]" style={{ minHeight: "2.5rem" }} />
              )}
            </div>
            <div className={i < arr.length - 1 ? "pb-9" : ""}>
              <h3 className="mt-1.5 mb-2">{step.title}</h3>
              <p className="text-[#475569] leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 mb-3 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#e2e8f0]" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] whitespace-nowrap">
          Tanya Jawab
        </p>
        <span className="h-px flex-1 bg-[#e2e8f0]" />
      </div>
      <h2 className="text-center">Pertanyaan Seputar Asuransi Excavator dan Bulldozer</h2>

      <div className="not-prose mt-8 mb-10 space-y-3">
        {[
          {
            q: "Excavator yang statusnya sewa, bisakah diasuransikan oleh pihak penyewa?",
            a: "Bisa, namun perlu koordinasi yang jelas. Penyewa boleh menerbitkan polis atas namanya sendiri untuk melindungi tanggung jawab selama masa sewa berlangsung. Yang perlu diwaspadai adalah risiko double insurance — apabila pemilik unit ternyata sudah memiliki polis aktif untuk periode yang sama, sebaiknya koordinasikan dulu sebelum menerbitkan polis tambahan.",
          },
          {
            q: "Kalau excavator rusak akibat kesalahan operator, apakah tetap bisa diklaim?",
            a: "Umumnya bisa. Polis EAR biasanya menanggung kerusakan yang timbul dari kelalaian (negligence) operator selama itu tidak dikategorikan sebagai kesengajaan (willful misconduct). Namun kerusakan akibat operator yang tidak kompeten atau tidak memegang sertifikasi bisa dijadikan dasar penolakan — pastikan operator Anda memegang SIO (Surat Izin Operator) yang masih berlaku.",
          },
          {
            q: "Saat unit sedang standby dan tidak beroperasi, apakah polisnya tetap berjalan?",
            a: "Tetap berjalan, selama polis masih aktif dan preminya dibayar tepat waktu. Perlindungan tidak berhenti hanya karena unit sedang diparkir atau tidak dioperasikan — termasuk untuk risiko kebakaran, pencurian, atau bencana alam yang terjadi ketika unit dalam kondisi diam.",
          },
        ].map((item) => (
          <div key={item.q} className="rounded-xl border border-[#e2e8f0] bg-white px-5 py-4">
            <p className="font-display font-semibold text-[#0a1628] mb-1.5">{item.q}</p>
            <p className="text-sm text-[#475569] leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-7 sm:p-8 bg-[#0a1628] rounded-2xl text-white not-prose relative overflow-hidden">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#c9a84c]/10" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">
          Konsultasi Gratis
        </p>
        <h3 className="font-display font-bold text-xl text-white mb-3">
          Konsultasi Asuransi Alat Berat di Batam — Gratis
        </h3>
        <p className="text-white/70 text-sm mb-6 leading-relaxed max-w-2xl">
          Tiap unit alat berat punya profil risiko yang berbeda-beda tergantung jenis pekerjaan,
          medan operasi, dan usia mesin. Rio siap membantu menghitung kebutuhan proteksi yang
          tepat dan membandingkan pilihan polis yang sesuai dengan anggaran proyek Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/6281373336728?text=Halo%20Rio%2C%20saya%20ingin%20konsultasi%20asuransi%20alat%20berat"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-sm text-center hover:bg-[#f0d080] transition-colors"
          >
            Konsultasi via WhatsApp
          </a>
          <Link
            href="/asuransi-machinery/asuransi-alat-berat"
            className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl text-sm text-center hover:bg-white/10 transition-colors"
          >
            Lihat Produk Asuransi Alat Berat
          </Link>
        </div>
      </div>

      <div className="mt-6 p-6 bg-[#faf8f3] rounded-2xl border border-[#e2e8f0] not-prose">
        <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#0a1628] mb-4">
          Artikel & Halaman Terkait
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/asuransi-machinery" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">
            → Asuransi Machinery Batam
          </Link>
          <Link href="/asuransi-machinery/asuransi-alat-berat" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">
            → Produk Asuransi Alat Berat
          </Link>
          <Link href="/asuransi-machinery/asuransi-crane" className="text-sm text-[#1a4fa0] hover:text-[#c9a84c] transition-colors">
            → Produk Asuransi Crane
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
