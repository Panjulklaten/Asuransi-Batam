import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { generateSEO } from "@/lib/seo";

// DRAFT — wajib ditinjau pemilik situs / penasihat hukum sebelum dianggap final.
// noIndex dipertahankan sampai teks ini disetujui; hapus `noIndex` setelah final.
export const metadata: Metadata = generateSEO({
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan penggunaan website dan Form SPPA Asuransi Batam.",
  canonical: "https://asuransibatam.com/syarat-ketentuan",
  noIndex: true,
});

export default function SyaratKetentuanPage() {
  return (
    <LegalPage title="Syarat & Ketentuan" updated="4 Oktober 2026">
      <p>Dengan menggunakan website asuransibatam.com dan mengisi Form SPPA, Anda menyetujui ketentuan berikut.</p>

      <h2>1. Sifat layanan</h2>
      <p>Form SPPA adalah sarana untuk menyampaikan permohonan penutupan asuransi. Mengirim formulir tidak berarti risiko otomatis diterima atau ditutup, dan bukan merupakan polis atau jaminan pertanggungan. Penerimaan risiko, premi, dan syarat pertanggungan ditentukan oleh perusahaan asuransi setelah proses underwriting.</p>

      <h2>2. Kebenaran informasi</h2>
      <p>Anda bertanggung jawab atas kebenaran dan kelengkapan informasi yang diberikan. Informasi yang tidak benar atau tidak lengkap dapat memengaruhi penerimaan risiko maupun penyelesaian klaim di kemudian hari.</p>

      <h2>3. Peran kami</h2>
      <p>Kami membantu menyampaikan dan menindaklanjuti pengajuan Anda kepada perusahaan asuransi. Ketentuan polis yang berlaku adalah yang tercantum dalam dokumen polis resmi dari perusahaan asuransi.</p>

      <h2>4. Dokumen yang Anda unggah</h2>
      <p>Unggah hanya dokumen yang sah dan milik Anda atau yang Anda berwenang menggunakannya. Format yang diterima adalah PDF, JPG, dan PNG dengan ukuran terbatas.</p>

      <h2>5. Penggunaan yang wajar</h2>
      <p>Dilarang menyalahgunakan formulir, termasuk mengirim data palsu, otomatisasi berlebihan, atau upaya mengganggu keamanan layanan.</p>

      <h2>6. Data pribadi</h2>
      <p>Pemrosesan data pribadi diatur dalam <a href="/kebijakan-privasi">Kebijakan Privasi</a>.</p>

      <h2>7. Perubahan</h2>
      <p>Ketentuan ini dapat diperbarui sewaktu-waktu. Versi terbaru berlaku sejak dipublikasikan di halaman ini.</p>
    </LegalPage>
  );
}
