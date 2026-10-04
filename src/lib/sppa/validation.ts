import { evaluate, flattenFields } from "./conditions";
import { sanitizeMultiline, sanitizeText } from "./sanitize";
import type {
  DocumentSpec,
  Field,
  FieldValue,
  ProductConfig,
  RepeatItem,
  StepId,
  ValidationResult,
} from "./types";

type Raw = Record<string, unknown>;
type Cleaned = { value?: FieldValue; error?: string };

const EMAIL_RE = /^[^\s@<>()[\],;:"\\]+@[^\s@<>()[\],;:"\\]+\.[A-Za-z]{2,}$/;
const MONEY_RE = /^(\d{1,3}([.,]\d{3})+|\d+)$/;
const NUMBER_RE = /^\d+([.,]\d+)?$/;
const MAX_MONEY = 1e15;

const REQUIRED = "Wajib diisi.";

function isoDateValid(s: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const [y, m, d] = s.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d;
}

/** Nomor HP Indonesia → format 62xxxxxxxxxx. Mengembalikan null jika tidak valid. */
export function normalizePhone(input: string): string | null {
  const compact = input.replace(/[\s().-]/g, "");
  const m = /^(?:\+62|62|0)(8\d{8,11})$/.exec(compact);
  return m ? `62${m[1]}` : null;
}

function cleanField(f: Field, v: unknown, labelOf: (name: string) => string, done: Record<string, FieldValue>): Cleaned {
  const empty = (): Cleaned => (f.required ? { error: REQUIRED } : {});

  switch (f.type) {
    case "checkboxes": {
      const arr = Array.isArray(v) ? v : [];
      const allowed = new Set((f.options ?? []).map((o) => o.value));
      if (arr.some((x) => typeof x !== "string" || !allowed.has(x))) return { error: "Pilihan tidak valid." };
      const uniq = (arr as string[]).filter((x, i, a) => a.indexOf(x) === i);
      if (f.required && uniq.length === 0) return { error: "Pilih minimal satu." };
      return { value: uniq };
    }

    case "repeatable": {
      const rows = Array.isArray(v) ? v : [];
      const min = f.minItems ?? (f.required ? 1 : 0);
      const max = f.maxItems ?? 200;
      if (rows.length < min) return { error: min === 1 ? "Tambahkan minimal satu data." : `Tambahkan minimal ${min} data.` };
      if (rows.length > max) return { error: `Maksimal ${max} data.` };
      return { value: rows as RepeatItem[] }; // diisi ulang oleh validateFields (butuh error per-baris)
    }
  }

  const rawText = typeof v === "string" ? v : typeof v === "number" ? String(v) : "";
  const text = f.type === "textarea" ? sanitizeMultiline(rawText) : sanitizeText(rawText);
  if (text === "") return empty();

  switch (f.type) {
    case "text":
    case "textarea": {
      const max = f.maxLength ?? (f.type === "textarea" ? 2000 : 200);
      if (text.length > max) return { error: `Maksimal ${max} karakter.` };
      return { value: text };
    }

    case "email": {
      const e = text.toLowerCase();
      if (e.length > 254 || !EMAIL_RE.test(e)) return { error: "Format email tidak valid, contoh: nama@perusahaan.com." };
      return { value: e };
    }

    case "tel": {
      const p = normalizePhone(text);
      if (!p) return { error: "Nomor HP/WhatsApp tidak valid, contoh: 081234567890." };
      return { value: p };
    }

    case "url": {
      const withScheme = /^https?:\/\//i.test(text) ? text : `https://${text}`;
      try {
        const u = new URL(withScheme);
        if (!/^https?:$/.test(u.protocol) || !u.hostname.includes(".") || withScheme.length > 200) throw new Error();
        return { value: u.toString() };
      } catch {
        return { error: "Alamat website tidak valid, contoh: https://www.perusahaan.com." };
      }
    }

    case "nik": {
      const d = text.replace(/[\s.-]/g, "");
      if (!/^\d{16}$/.test(d)) return { error: "NIK harus 16 digit angka." };
      return { value: d };
    }

    case "npwp": {
      const d = text.replace(/[\s.-]/g, "");
      if (!/^\d{15,16}$/.test(d)) return { error: "NPWP harus 15 atau 16 digit angka." };
      return { value: d };
    }

    case "money": {
      const t = text.replace(/^rp\.?\s*/i, "");
      if (!MONEY_RE.test(t)) return { error: "Isi dengan angka saja, contoh: 100000000." };
      const n = Number(t.replace(/[.,]/g, ""));
      if (!Number.isSafeInteger(n) || n > MAX_MONEY) return { error: "Nilai terlalu besar." };
      if (f.required && n <= 0) return { error: "Nilai harus lebih dari 0." };
      return { value: String(n) };
    }

    case "number": {
      if (!NUMBER_RE.test(text)) return { error: "Isi dengan angka." };
      const n = Number(text.replace(",", "."));
      if (!Number.isFinite(n)) return { error: "Isi dengan angka." };
      if (f.min !== undefined && n < f.min) return { error: `Nilai minimal ${f.min}.` };
      if (f.max !== undefined && n > f.max) return { error: `Nilai maksimal ${f.max}.` };
      return { value: String(n) };
    }

    case "year": {
      const maxYear = new Date().getUTCFullYear() + 1;
      if (!/^\d{4}$/.test(text) || Number(text) < 1900 || Number(text) > maxYear) {
        return { error: `Tahun tidak valid (1900–${maxYear}).` };
      }
      return { value: text };
    }

    case "date": {
      if (!isoDateValid(text)) return { error: "Tanggal tidak valid." };
      if (f.notFuture && text > new Date().toISOString().slice(0, 10)) return { error: "Tanggal tidak boleh di masa depan." };
      if (f.notBefore) {
        const other = done[f.notBefore];
        if (typeof other === "string" && other && text < other) {
          return { error: `Tanggal tidak boleh sebelum "${labelOf(f.notBefore)}".` };
        }
      }
      return { value: text };
    }

    case "select":
    case "radio":
    case "yesno": {
      const allowed = (f.options ?? []).map((o) => o.value);
      if (!allowed.includes(text)) return { error: "Pilihan tidak valid." };
      return { value: text };
    }
  }
  return { error: "Tipe field tidak dikenal." };
}

function requiredMessage(f: Field): string {
  if (f.type === "yesno") return "Silakan pilih Ya atau Tidak.";
  if (f.type === "select" || f.type === "radio") return "Silakan pilih salah satu.";
  return REQUIRED;
}

/**
 * Validasi sekumpulan field terhadap input mentah.
 * - Kondisi showIf dievaluasi terhadap nilai BERSIH field sebelumnya, sehingga jawaban basi dari
 *   field yang sudah tersembunyi tidak bisa membuka field turunannya.
 * - Field tersembunyi dibuang dari hasil.
 * - Field `sumOf` dihitung ulang di server; nilai kiriman klien diabaikan.
 */
export function validateFields(fields: Field[], raw: Raw): ValidationResult {
  const errors: Record<string, string> = {};
  const values: Record<string, FieldValue> = {};
  const effective: Raw = { ...raw };
  for (const f of fields) delete effective[f.name];

  const labelOf = (name: string) => fields.find((x) => x.name === name)?.label ?? name;
  const sums: Field[] = [];

  for (const f of fields) {
    if (!evaluate(f.showIf, effective)) continue;
    if (f.sumOf) {
      sums.push(f);
      continue;
    }

    const r = cleanField(f, raw[f.name], labelOf, values);
    if (r.error) {
      errors[f.name] = r.error === REQUIRED ? requiredMessage(f) : r.error;
      effective[f.name] = raw[f.name];
      continue;
    }

    if (f.type === "repeatable") {
      const rows: RepeatItem[] = [];
      (r.value as unknown as Raw[]).forEach((row, i) => {
        const sub = validateFields(f.items ?? [], row && typeof row === "object" ? (row as Raw) : {});
        for (const [k, msg] of Object.entries(sub.errors)) errors[`${f.name}.${i}.${k}`] = msg;
        rows.push(sub.values as RepeatItem);
      });
      values[f.name] = rows;
      effective[f.name] = rows;
      continue;
    }

    if (r.value !== undefined) {
      values[f.name] = r.value;
      effective[f.name] = r.value;
    }
  }

  for (const f of sums) {
    const total = (f.sumOf ?? []).reduce((acc, n) => {
      const v = values[n];
      return acc + (typeof v === "string" ? Number(v) || 0 : 0);
    }, 0);
    if (f.required && total <= 0) errors[f.name] = "Total harus lebih dari 0. Isi minimal satu nilai pertanggungan.";
    else if (total > MAX_MONEY) errors[f.name] = "Nilai terlalu besar.";
    else values[f.name] = String(total);
  }

  return { ok: Object.keys(errors).length === 0, errors, values };
}

/** Validasi satu langkah (untuk tombol "Lanjut" di wizard). `raw` = seluruh jawaban saat ini. */
export function validateStep(product: ProductConfig, stepId: StepId | "product", raw: Raw): ValidationResult {
  if (stepId === "product") {
    return validateFields(product.subTypeField ? [product.subTypeField] : [], raw);
  }
  const step = product.steps.find((s) => s.id === stepId);
  return validateFields(step?.fields ?? [], raw);
}

/** Validasi seluruh pengajuan (wajib dijalankan di server sebelum menyimpan). */
export function validateSubmission(product: ProductConfig, raw: Raw): ValidationResult {
  return validateFields(flattenFields(product), raw);
}

/** Dokumen yang perlu dikirim pemohon lewat WhatsApp (hanya yang relevan dengan jawaban). */
export function requestedDocuments(product: ProductConfig, cleanValues: Raw): DocumentSpec[] {
  return product.documents.filter((d) => evaluate(d.showIf, cleanValues));
}

/** Ringkasan untuk kolom database / notifikasi. */
export function extractSummary(product: ProductConfig, values: Record<string, FieldValue>) {
  const str = (k: string) => (typeof values[k] === "string" ? (values[k] as string) : null);
  const sumKey = product.summary.sumFields.find((k) => str(k));
  const currency = str("currency") === "other" ? str("currencyOther") : str("currency");
  return {
    applicantName: str(product.summary.nameField),
    applicantEmail: str("email"),
    applicantPhone: str("phone"),
    subType: str("subType"),
    currency: sumKey ? currency ?? "IDR" : null,
    sumInsured: sumKey ? Number(str(sumKey)) : null,
    policyStart: str("policyStart"),
    policyEnd: str("policyEnd"),
  };
}
