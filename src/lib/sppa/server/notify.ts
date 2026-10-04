// Notifikasi admin via WhatsApp (Fonnte). Token hanya dibaca di server dari env var.
// Isi pesan sengaja minimal: TIDAK memuat NIK, NPWP, atau nilai pertanggungan.

export interface AdminNotice {
  referenceNo: string;
  productLabel: string;
  applicantName: string | null;
  applicantPhone: string | null;
  submittedAt: Date;
}

const stripWaMarkup = (s: string) => s.replace(/[*_~`]/g, " ").replace(/\s+/g, " ").trim();

export function buildAdminMessage(n: AdminNotice): string {
  const when = new Intl.DateTimeFormat("id-ID", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Jakarta" }).format(n.submittedAt);
  return [
    "SPPA baru masuk",
    `No. Ref : ${n.referenceNo}`,
    `Produk  : ${n.productLabel}`,
    `Pemohon : ${stripWaMarkup(n.applicantName ?? "-")}`,
    n.applicantPhone ? `HP/WA   : ${n.applicantPhone}` : "",
    `Waktu   : ${when} WIB`,
    "Status  : Menunggu Review",
  ].filter(Boolean).join("\n");
}

/** Konfirmasi ke pemohon: hanya nomor referensi & produk, tanpa data sensitif. */
export function buildApplicantMessage(n: { applicantName: string; referenceNo: string; productLabel: string }): string {
  return [
    `Halo ${stripWaMarkup(n.applicantName)},`,
    `Terima kasih. Pengajuan SPPA ${n.productLabel} Anda dengan nomor referensi ${n.referenceNo} sudah kami terima.`,
    "Kami akan menghubungi Anda untuk kelengkapan data.",
    "",
    "Asuransi Batam",
  ].join("\n");
}

/** Kirim WA via Fonnte. Tanpa `target` → ke ADMIN_WA_NUMBER. */
export async function sendWhatsApp(message: string, to?: string): Promise<{ ok: boolean; error?: string }> {
  const token = process.env.FONNTE_TOKEN;
  const target = to ?? process.env.ADMIN_WA_NUMBER;
  if (!token || !target) return { ok: false, error: "not_configured" };
  try {
    const res = await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: { Authorization: token, "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ target, message }).toString(),
      signal: AbortSignal.timeout(8000),
    });
    const json = (await res.json().catch(() => null)) as { status?: boolean } | null;
    return res.ok && json?.status === true ? { ok: true } : { ok: false, error: `http_${res.status}` };
  } catch {
    return { ok: false, error: "network" };
  }
}
