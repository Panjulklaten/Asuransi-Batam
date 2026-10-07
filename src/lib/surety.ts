// Data & logika bersama untuk fitur "Minta Penawaran Surety Bond"
// (popup form → pesan WhatsApp ke admin, dan tabel persyaratan penerbitan).
import { SITE } from "@/lib/constants";

export type Lang = "id" | "en";
export type SuretyTypeKey =
  | "bid"
  | "performance"
  | "advance"
  | "maintenance"
  | "custom"
  | "unsure";
export type SuretySpecificKey = Exclude<SuretyTypeKey, "unsure">;
export type ProjectScope = "gov" | "private";
export type PeriodUnit = "day" | "month";

type Bi = { id: string; en: string };

/** Nomor WhatsApp admin penerima permintaan penawaran. Ganti di sini bila memakai nomor khusus admin. */
export const SURETY_QUOTE_WA: string = SITE.phoneWA;

export const pick = (b: Bi, lang: Lang) => b[lang];

// ─── Jenis surety bond ───────────────────────────────────────
export const SURETY_TYPES: { key: SuretyTypeKey; label: Bi; hint: Bi }[] = [
  {
    key: "bid",
    label: { id: "Bid Bond", en: "Bid Bond" },
    hint: { id: "Jaminan penawaran tender", en: "Tender bid guarantee" },
  },
  {
    key: "performance",
    label: { id: "Performance Bond", en: "Performance Bond" },
    hint: { id: "Jaminan pelaksanaan kontrak", en: "Contract performance" },
  },
  {
    key: "advance",
    label: { id: "Advance Payment Bond", en: "Advance Payment Bond" },
    hint: { id: "Jaminan uang muka", en: "Down-payment guarantee" },
  },
  {
    key: "maintenance",
    label: { id: "Maintenance Bond", en: "Maintenance Bond" },
    hint: { id: "Jaminan masa pemeliharaan", en: "Defects liability period" },
  },
  {
    key: "custom",
    label: { id: "Custom Bond", en: "Custom Bond" },
    hint: { id: "Jaminan kepabeanan (OB 23, KITE, KB)", en: "Customs guarantee (OB 23, KITE, bonded zone)" },
  },
  {
    key: "unsure",
    label: { id: "Belum yakin", en: "Not sure yet" },
    hint: { id: "Bantu saya menentukan", en: "Help me decide" },
  },
];

export const typeLabel = (key: SuretyTypeKey, lang: Lang) =>
  pick(SURETY_TYPES.find((t) => t.key === key)!.label, lang);

/** Tebak jenis bond dari URL halaman yang sedang dibuka. */
export function inferSuretyType(pathname: string | null | undefined): SuretyTypeKey {
  const p = (pathname ?? "").toLowerCase();
  const rules: [RegExp, SuretyTypeKey][] = [
    [/advance-payment/, "advance"],
    [/maintenance-bond/, "maintenance"],
    [/perbedaan-bid-bond|difference-between-bid-bond|biaya-premi-surety/, "unsure"],
    [/bid-bond|cara-mendapatkan-surety-bond-tender/, "bid"],
    [/performance-bond/, "performance"],
    [/custom-bond|ob23|kite|galangan|temporary-import/, "custom"],
  ];
  for (const [re, key] of rules) if (re.test(p)) return key;
  return "unsure";
}

// ─── Persyaratan penerbitan ──────────────────────────────────
export type Requirement = { doc: Bi; note: Bi; must: boolean };

export const GENERAL_REQUIREMENTS: Requirement[] = [
  {
    doc: { id: "Akta pendirian & perubahan terakhir", en: "Deed of establishment & latest amendment" },
    note: { id: "Beserta SK pengesahan Kemenkumham", en: "With the Ministry of Law approval decree" },
    must: true,
  },
  {
    doc: { id: "NIB & izin usaha sesuai bidang", en: "NIB & business licence for the field" },
    note: { id: "Termasuk SBU/sertifikat yang relevan dengan pekerjaan", en: "Including any SBU/certificate relevant to the work" },
    must: true,
  },
  {
    doc: { id: "NPWP perusahaan", en: "Company tax ID (NPWP)" },
    note: { id: "SPT Tahunan terakhir bila diminta penanggung", en: "Latest annual tax return if the surety asks" },
    must: true,
  },
  {
    doc: { id: "KTP & NPWP direksi / pemilik", en: "ID & NPWP of directors / owners" },
    note: { id: "Pengurus dan pemegang saham utama", en: "Management and main shareholders" },
    must: true,
  },
  {
    doc: { id: "Laporan keuangan 2 tahun terakhir", en: "Financial statements, last 2 years" },
    note: { id: "Dasar penilaian kapasitas jaminan", en: "Basis for assessing guarantee capacity" },
    must: true,
  },
  {
    doc: { id: "Rekening koran 3–6 bulan terakhir", en: "Bank statements, last 3–6 months" },
    note: { id: "Menyesuaikan kebijakan penanggung & nilai jaminan", en: "Depends on the surety's policy and guarantee value" },
    must: false,
  },
  {
    doc: { id: "Daftar pengalaman proyek", en: "Project track record" },
    note: { id: "Memperkuat analisa, terutama untuk nilai besar", en: "Strengthens the assessment, esp. for larger values" },
    must: false,
  },
  {
    doc: { id: "Perjanjian ganti rugi (indemnity)", en: "Indemnity agreement" },
    note: { id: "Ditandatangani saat penerbitan oleh pihak berwenang", en: "Signed at issuance by authorised signatories" },
    must: true,
  },
];

export const SPECIFIC_REQUIREMENTS: Record<SuretySpecificKey, Requirement[]> = {
  bid: [
    {
      doc: { id: "Undangan tender / dokumen pemilihan", en: "Tender invitation / bidding documents" },
      note: { id: "Memuat nilai & masa berlaku jaminan yang diminta", en: "States the required guarantee value and validity" },
      must: true,
    },
    {
      doc: { id: "Format jaminan dari panitia / pemberi kerja", en: "Guarantee format from the committee / employer" },
      note: { id: "Agar redaksi bond sesuai ketentuan tender", en: "So the wording matches the tender rules" },
      must: true,
    },
    {
      doc: { id: "Nilai penawaran / HPS", en: "Bid value / owner's estimate" },
      note: { id: "Acuan menentukan nilai jaminan penawaran", en: "Reference for the bid guarantee value" },
      must: false,
    },
  ],
  performance: [
    {
      doc: { id: "Kontrak / SPK / SPPBJ", en: "Contract / work order / award letter" },
      note: { id: "Nilai kontrak, lingkup, dan masa pekerjaan", en: "Contract value, scope, and duration" },
      must: true,
    },
    {
      doc: { id: "Format jaminan pelaksanaan dari pemberi kerja", en: "Performance guarantee format from the employer" },
      note: { id: "Menyesuaikan redaksi dan masa berlaku", en: "Aligns wording and validity period" },
      must: true,
    },
    {
      doc: { id: "Jadwal pelaksanaan (time schedule)", en: "Work schedule" },
      note: { id: "Dasar menentukan masa berlaku bond", en: "Basis for the bond's validity period" },
      must: false,
    },
  ],
  advance: [
    {
      doc: { id: "Kontrak / SPK beserta ketentuan uang muka", en: "Contract with down-payment clause" },
      note: { id: "Persentase dan skema pengembalian uang muka", en: "Percentage and repayment scheme" },
      must: true,
    },
    {
      doc: { id: "Surat permohonan uang muka", en: "Down-payment request letter" },
      note: { id: "Diajukan ke pemberi kerja", en: "Addressed to the employer" },
      must: true,
    },
    {
      doc: { id: "Rencana penggunaan uang muka", en: "Down-payment usage plan" },
      note: { id: "Bila diminta penanggung / pemberi kerja", en: "If requested by the surety / employer" },
      must: false,
    },
  ],
  maintenance: [
    {
      doc: { id: "Berita acara serah terima pertama (PHO)", en: "Provisional hand-over certificate (PHO)" },
      note: { id: "Penanda dimulainya masa pemeliharaan", en: "Marks the start of the maintenance period" },
      must: true,
    },
    {
      doc: { id: "Kontrak & ketentuan masa pemeliharaan", en: "Contract & maintenance period clause" },
      note: { id: "Lama masa pemeliharaan dan nilai jaminan", en: "Length of the period and guarantee value" },
      must: true,
    },
    {
      doc: { id: "Format jaminan pemeliharaan", en: "Maintenance guarantee format" },
      note: { id: "Dari pemberi kerja bila ada", en: "From the employer, if provided" },
      must: false,
    },
  ],
  custom: [
    {
      doc: { id: "Dasar fasilitas kepabeanan", en: "Customs facility basis" },
      note: { id: "OB 23 / impor sementara, KITE, atau Kawasan Berikat", en: "OB 23 / temporary import, KITE, or bonded zone" },
      must: true,
    },
    {
      doc: { id: "Daftar barang, invoice & packing list", en: "Goods list, invoice & packing list" },
      note: { id: "Dasar menghitung estimasi bea masuk dan PPN", en: "Basis for estimating import duty and VAT" },
      must: true,
    },
    {
      doc: { id: "Estimasi nilai jaminan & jangka waktu fasilitas", en: "Guarantee value estimate & facility period" },
      note: { id: "Termasuk rencana re-ekspor", en: "Including the re-export plan" },
      must: true,
    },
    {
      doc: { id: "Format jaminan dari kantor Bea Cukai", en: "Guarantee format from the Customs office" },
      note: { id: "Bila sudah ada arahan dari kantor setempat", en: "If the local office has already given guidance" },
      must: false,
    },
  ],
};

export const REQUIREMENTS_DISCLAIMER: Bi = {
  id: "Daftar bersifat umum. Kebutuhan akhir menyesuaikan kebijakan penanggung, nilai jaminan, dan profil perusahaan. Proses penerbitan umumnya 1–3 hari kerja setelah dokumen lengkap.",
  en: "This list is a general guide. Final requirements depend on the surety's policy, guarantee value, and company profile. Issuance usually takes 1–3 working days once documents are complete.",
};

// ─── Bahan analisa awal (chip pilihan) ───────────────────────
export const ANALYSIS_FLAGS: { key: string; label: Bi }[] = [
  { key: "history", label: { id: "Pernah menerbitkan surety bond sebelumnya", en: "Has issued a surety bond before" } },
  { key: "fin2y", label: { id: "Laporan keuangan 2 tahun terakhir tersedia", en: "2 years of financial statements available" } },
  { key: "license", label: { id: "Izin usaha / SBU sesuai bidang tersedia", en: "Relevant licence / SBU available" } },
  { key: "noCollateral", label: { id: "Ingin tanpa agunan tunai", en: "Prefer no cash collateral" } },
  { key: "urgent", label: { id: "Dibutuhkan mendesak (≤ 3 hari kerja)", en: "Urgent (≤ 3 working days)" } },
  { key: "multi", label: { id: "Perlu lebih dari satu jenis bond", en: "Need more than one bond type" } },
];

// ─── Format angka ────────────────────────────────────────────
export function formatDigits(digits: string, lang: Lang): string {
  if (!digits) return "";
  return Number(digits).toLocaleString(lang === "id" ? "id-ID" : "en-US");
}

export function compactRupiah(digits: string, lang: Lang): string {
  const n = Number(digits);
  if (!n) return "";
  const loc = lang === "id" ? "id-ID" : "en-US";
  const f = (v: number) => v.toLocaleString(loc, { maximumFractionDigits: 2 });
  if (n >= 1e12) return `≈ Rp ${f(n / 1e12)} ${lang === "id" ? "triliun" : "trillion"}`;
  if (n >= 1e9) return `≈ Rp ${f(n / 1e9)} ${lang === "id" ? "miliar" : "billion"}`;
  if (n >= 1e6) return `≈ Rp ${f(n / 1e6)} ${lang === "id" ? "juta" : "million"}`;
  return "";
}

// ─── Pesan WhatsApp ──────────────────────────────────────────
export interface QuoteForm {
  type: SuretyTypeKey;
  scope: ProjectScope;
  amount: string; // digit saja
  period: string;
  unit: PeriodUnit;
  name: string;
  company: string;
  phone: string;
  targetDate: string; // yyyy-mm-dd
  client: string;
  flags: string[];
  note: string;
}

export function buildQuoteMessage(f: QuoteForm, lang: Lang): string {
  const id = lang === "id";
  const scopeLabel =
    f.scope === "gov"
      ? id ? "Proyek pemerintah / BUMN" : "Government / SOE project"
      : id ? "Proyek swasta" : "Private project";
  const unitLabel = f.unit === "month" ? (id ? "bulan" : "months") : id ? "hari" : "days";
  const date = f.targetDate
    ? new Date(f.targetDate + "T00:00:00").toLocaleDateString(id ? "id-ID" : "en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";
  const flags = ANALYSIS_FLAGS.filter((x) => f.flags.includes(x.key)).map((x) => `- ${pick(x.label, lang)}`);

  const lines: string[] = [
    id
      ? "Halo Rio, saya ingin *meminta penawaran Surety Bond*."
      : "Hello Rio, I would like to *request a Surety Bond quotation*.",
    "",
    id ? "*Kebutuhan*" : "*Requirement*",
    `${id ? "Jenis bond" : "Bond type"}: ${typeLabel(f.type, lang)}`,
    `${id ? "Jenis proyek" : "Project type"}: ${scopeLabel}`,
    `${id ? "Jumlah jaminan" : "Guarantee amount"}: Rp ${formatDigits(f.amount, lang)}`,
    `${id ? "Lama periode" : "Period"}: ${f.period} ${unitLabel}`,
  ];
  if (date) lines.push(`${id ? "Target terbit" : "Target issuance"}: ${date}`);
  if (f.client.trim()) lines.push(`${id ? "Pemberi kerja / proyek" : "Employer / project"}: ${f.client.trim()}`);

  lines.push(
    "",
    id ? "*Pemohon*" : "*Applicant*",
    `${id ? "Nama" : "Name"}: ${f.name.trim()}`,
    `${id ? "Perusahaan" : "Company"}: ${f.company.trim()}`,
    `WhatsApp: ${f.phone.trim()}`,
  );

  if (flags.length || f.note.trim()) {
    lines.push("", id ? "*Bahan analisa awal*" : "*Initial assessment notes*", ...flags);
    if (f.note.trim()) lines.push(`${id ? "Catatan" : "Notes"}: ${f.note.trim()}`);
  }

  lines.push(
    "",
    id
      ? "Mohon dibantu analisa awal, estimasi premi, dan daftar dokumen yang dibutuhkan. Terima kasih."
      : "Please help with an initial assessment, premium estimate, and the list of required documents. Thank you.",
  );
  return lines.join("\n");
}

export const quoteWaUrl = (message: string) =>
  `https://wa.me/${SURETY_QUOTE_WA}?text=${encodeURIComponent(message)}`;
