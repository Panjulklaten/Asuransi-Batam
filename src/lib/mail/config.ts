// Konfigurasi Mini Webmail. Semua nilai dibaca dari environment SERVER — tidak pernah dikirim ke browser.
// Tidak ada nilai default untuk kredensial: jika belum diisi, fitur menjawab "belum dikonfigurasi".

export const mailEnv = {
  resendApiKey: () => process.env.RESEND_API_KEY ?? "",
  webhookSecret: () => process.env.RESEND_WEBHOOK_SECRET ?? "",
  supabaseUrl: () => process.env.SUPABASE_URL ?? "",
  supabaseServiceKey: () => process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  fromAddress: () => (process.env.MAIL_FROM_ADDRESS ?? "").trim().toLowerCase(),
  fromName: () => (process.env.MAIL_FROM_NAME ?? "Asuransi Batam").trim(),
  adminEmail: () => (process.env.MAIL_ADMIN_EMAIL ?? "").trim().toLowerCase(),
  adminPasswordHash: () => (process.env.MAIL_ADMIN_PASSWORD_HASH ?? "").trim(),
  sessionSecret: () => process.env.MAIL_SESSION_SECRET ?? "",
};

/** Daftar variabel yang masih kosong untuk fungsi tertentu (untuk pesan error yang jelas di log server). */
export function missingEnv(scope: "auth" | "db" | "send" | "inbound"): string[] {
  const e = mailEnv;
  const need: Record<string, string> = {};
  if (scope === "auth") {
    need.MAIL_ADMIN_EMAIL = e.adminEmail();
    need.MAIL_ADMIN_PASSWORD_HASH = e.adminPasswordHash();
    need.MAIL_SESSION_SECRET = e.sessionSecret().length >= 32 ? "ok" : "";
  }
  if (scope === "db" || scope === "send" || scope === "inbound") {
    need.SUPABASE_URL = e.supabaseUrl();
    need.SUPABASE_SERVICE_ROLE_KEY = e.supabaseServiceKey();
    need.MAIL_FROM_ADDRESS = e.fromAddress();
  }
  if (scope === "send" || scope === "inbound") need.RESEND_API_KEY = e.resendApiKey();
  if (scope === "inbound") need.RESEND_WEBHOOK_SECRET = e.webhookSecret();
  return Object.entries(need).filter(([, v]) => !v).map(([k]) => k);
}

export const MAIL_LIMITS = {
  maxRecipients: 20,
  maxSubject: 300,
  maxBodyChars: 200_000,
  maxFiles: 5,
  // Lampiran keluar lewat satu request multipart. Vercel membatasi body request fungsi serverless ±4,5MB,
  // jadi total dibatasi 4MB. (Batas Resend sendiri: 40MB setelah Base64.)
  maxFileBytes: 4 * 1024 * 1024,
  maxTotalBytes: 4 * 1024 * 1024,
  maxRequestBytes: 4_400_000,
  maxInboundFileBytes: 20 * 1024 * 1024, // lampiran masuk lebih besar dari ini hanya dicatat metadatanya
  maxInboundTotalBytes: 40 * 1024 * 1024,
  maxHtmlOutBytes: 1_200_000, // batas HTML per respons agar tidak melewati batas respons serverless (4,5MB)
} as const;

export const FOLDERS = ["inbox", "sent", "archive", "trash"] as const;
export type Folder = (typeof FOLDERS)[number];
export const MAIL_BUCKET = "mail-attachments";
