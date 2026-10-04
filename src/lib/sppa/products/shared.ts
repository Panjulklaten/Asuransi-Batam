import type { Condition, Field, Option } from "../types";

export const opts = (pairs: [string, string][]): Option[] => pairs.map(([value, label]) => ({ value, label }));

export const YESNO = opts([["ya", "Ya"], ["tidak", "Tidak"]]);
export const CURRENCIES = opts([
  ["IDR", "IDR – Rupiah"],
  ["USD", "USD – Dolar AS"],
  ["SGD", "SGD – Dolar Singapura"],
  ["EUR", "EUR – Euro"],
  ["other", "Lainnya"],
]);
export const GENDERS = opts([["L", "Laki-laki"], ["P", "Perempuan"]]);

export function and(...parts: (Condition | undefined)[]): Condition | undefined {
  const list = parts.filter(Boolean) as Condition[];
  if (list.length === 0) return undefined;
  return list.length === 1 ? list[0] : { all: list };
}

interface YesNoOpts {
  detailLabel?: string;
  /** false = hanya Ya/Tidak tanpa kolom penjelasan. */
  detail?: boolean;
  showIf?: Condition;
  section?: string;
  hint?: string;
}

/** Pertanyaan Ya/Tidak; jawaban "Ya" memunculkan kolom `${name}Detail` (wajib diisi). */
export function yesNo(name: string, label: string, o: YesNoOpts = {}): Field[] {
  const base: Field = { name, label, type: "yesno", required: true, options: YESNO, showIf: o.showIf, section: o.section, hint: o.hint };
  if (o.detail === false) return [base];
  return [
    base,
    {
      name: `${name}Detail`,
      label: o.detailLabel ?? "Jelaskan detail risiko tersebut.",
      type: "textarea",
      required: true,
      maxLength: 1000,
      showIf: and(o.showIf, { field: name, equals: "ya" }),
      section: o.section,
    },
  ];
}

export function money(name: string, label: string, o: Partial<Field> = {}): Field {
  return { name, label, type: "money", placeholder: "0", ...o };
}

export function currencyFields(section = "Mata Uang"): Field[] {
  return [
    { name: "currency", label: "Mata uang", type: "select", required: true, options: CURRENCIES, defaultValue: "IDR", section },
    { name: "currencyOther", label: "Sebutkan mata uang", type: "text", required: true, maxLength: 20, showIf: { field: "currency", equals: "other" }, section },
  ];
}

export function periodFields(section = "Periode Pertanggungan", showIf?: Condition): Field[] {
  return [
    { name: "policyStart", label: "Tanggal mulai pertanggungan", type: "date", required: true, section, showIf },
    { name: "policyEnd", label: "Tanggal berakhir pertanggungan", type: "date", required: true, notBefore: "policyStart", section, showIf },
  ];
}

interface ContactOpts {
  companyLabel?: string;
  businessType?: boolean;
  website?: boolean;
}

/** Data pemohon berbentuk perusahaan (Engineering, Marine Hull, Marine Cargo). */
export function companyApplicantFields(o: ContactOpts = {}): Field[] {
  return [
    { name: "companyName", label: o.companyLabel ?? "Nama perusahaan", type: "text", required: true, maxLength: 150, section: "Data Perusahaan" },
    ...(o.businessType ? [{ name: "businessType", label: "Jenis usaha", type: "text" as const, required: true, maxLength: 100, section: "Data Perusahaan" }] : []),
    { name: "npwp", label: "NPWP", type: "npwp", placeholder: "15 atau 16 digit", hint: "Boleh dikosongkan jika belum ada.", section: "Data Perusahaan" },
    { name: "address", label: "Alamat", type: "textarea", required: true, maxLength: 500, section: "Data Perusahaan" },
    ...(o.website ? [{ name: "website", label: "Website perusahaan (opsional)", type: "url" as const, placeholder: "https://", section: "Data Perusahaan" }] : []),
    { name: "picName", label: "Nama PIC", type: "text", required: true, maxLength: 100, section: "Kontak PIC" },
    { name: "picTitle", label: "Jabatan PIC", type: "text", required: true, maxLength: 100, section: "Kontak PIC" },
    { name: "phone", label: "Nomor HP/WhatsApp", type: "tel", required: true, placeholder: "081234567890", section: "Kontak PIC" },
    { name: "email", label: "Email", type: "email", required: true, placeholder: "nama@perusahaan.com", section: "Kontak PIC" },
  ];
}

interface ClaimsOpts {
  claimQuestion?: string;
  claimType?: boolean;
  frequency?: boolean;
  totalLabel?: string;
}

/** Riwayat asuransi & klaim. Detail klaim tampil jika menjawab "Ya". */
export function claimsFields(o: ClaimsOpts = {}): Field[] {
  const prior: Condition = { field: "insuredBefore", equals: "ya" };
  const claimed: Condition = { field: "hadClaim", equals: "ya" };
  return [
    { name: "insuredBefore", label: "Pernah diasuransikan sebelumnya?", type: "yesno", required: true, options: YESNO },
    { name: "previousInsurer", label: "Nama perusahaan asuransi sebelumnya", type: "text", required: true, maxLength: 150, showIf: prior },
    { name: "previousPeriod", label: "Tahun/periode pertanggungan sebelumnya", type: "text", required: true, maxLength: 60, placeholder: "mis. 2024–2025", showIf: prior },
    { name: "hadClaim", label: o.claimQuestion ?? "Pernah mengalami klaim?", type: "yesno", required: true, options: YESNO },
    { name: "claimCount", label: "Jumlah klaim", type: "number", required: true, min: 1, max: 999, showIf: claimed },
    ...(o.frequency ? [{ name: "claimFrequency", label: "Frekuensi klaim", type: "text" as const, maxLength: 100, placeholder: "mis. 1 kali per tahun", showIf: claimed }] : []),
    ...(o.claimType ? [{ name: "claimType", label: "Jenis klaim", type: "text" as const, required: true, maxLength: 150, showIf: claimed }] : []),
    money("claimTotal", o.totalLabel ?? "Nilai klaim", { required: true, showIf: claimed }),
    { name: "claimCause", label: "Penyebab klaim", type: "textarea", required: true, maxLength: 1000, showIf: claimed },
  ];
}
