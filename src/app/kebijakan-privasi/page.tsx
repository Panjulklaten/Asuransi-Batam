import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { generateSEO } from "@/lib/seo";

// DRAFT — wajib ditinjau pemilik situs / penasihat hukum sebelum dianggap final.
// noIndex dipertahankan sampai teks ini disetujui; hapus `noIndex` setelah final.
export const metadata: Metadata = generateSEO({
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi Asuransi Batam: data yang dikumpulkan, tujuan penggunaan, dan hak Anda.",
  canonical: "https://asuransibatam.com/kebijakan-privasi",
  noIndex: true,
});

export default function KebijakanPrivasiPage() {
  return (
    <LegalPage title="Kebijakan Privasi" updated="4 Oktober 2026">
      <p>Halaman ini menjelaskan bagaimana asuransibatam.com mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat Anda menghubungi kami atau mengisi Form SPPA.</p>

      <h2>1. Data yang kami kumpulkan</h2>
      <ul>
        <li>Data identitas dan kontak: nama, NIK, tanggal lahir, alamat, nomor HP/WhatsApp, email, NPWP, dan data perusahaan.</li>
        <li>Data objek dan risiko yang Anda isi pada formulir (mis. data kapal, proyek, barang, atau pekerjaan), nilai pertanggungan, dan riwayat klaim.</li>
        <li>Dokumen pendukung (mis. kontrak, invoice, sertifikat) yang Anda kirimkan sendiri kepada kami melalui WhatsApp. Formulir ini tidak menerima unggahan dokumen.</li>
        <li>Data teknis terbatas untuk keamanan, seperti alamat IP yang di-hash untuk membatasi penyalahgunaan formulir.</li>
      </ul>

      <h2>2. Tujuan penggunaan</h2>
      <ul>
        <li>Memproses pengajuan asuransi dan proses underwriting (penilaian risiko) oleh perusahaan asuransi.</li>
        <li>Menghubungi Anda terkait pengajuan, penawaran, dan tindak lanjut.</li>
        <li>Memenuhi kewajiban hukum dan menjaga keamanan layanan.</li>
      </ul>

      <h2>3. Pembagian data</h2>
      <p>Data Anda dapat diteruskan kepada perusahaan asuransi atau pihak terkait yang diperlukan untuk memproses pengajuan Anda. Kami juga memakai penyedia layanan teknologi (layanan pengiriman email dan pesan WhatsApp) untuk meneruskan pengajuan kepada kami. Kami tidak menjual data pribadi Anda.</p>

      <h2>4. Keamanan</h2>
      <p>Formulir ini tidak menyimpan jawaban Anda di database situs; pengajuan dikirim ke email admin kami (data lengkap) dan notifikasi WhatsApp ringkas tanpa NIK, NPWP, atau nilai pertanggungan. Tidak ada sistem yang sepenuhnya bebas risiko, namun kami berupaya menerapkan langkah pengamanan yang wajar.</p>

      <h2>5. Penyimpanan</h2>
      <p>Data yang kami terima melalui email dan WhatsApp disimpan selama diperlukan untuk memproses pengajuan dan memenuhi kewajiban hukum yang berlaku.</p>

      <h2>6. Hak Anda</h2>
      <p>Anda dapat meminta akses, perbaikan, atau penghapusan data pribadi Anda, serta menarik persetujuan, sesuai ketentuan peraturan yang berlaku. Hubungi kami melalui <a href="mailto:rio@asuransibatam.com">rio@asuransibatam.com</a> atau WhatsApp yang tertera di halaman <a href="/kontak">Kontak</a>.</p>

      <h2>7. Perubahan kebijakan</h2>
      <p>Kebijakan ini dapat diperbarui sewaktu-waktu. Tanggal pembaruan terakhir tercantum di bagian atas halaman.</p>
    </LegalPage>
  );
}
