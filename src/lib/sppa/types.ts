// Tipe inti sistem Form SPPA. Semua produk didefinisikan sebagai konfigurasi (schema)
// sehingga menambah produk baru cukup menambah satu file di ./products.

export type ProductId =
  | "engineering"
  | "marine_hull"
  | "marine_cargo"
  | "personal_accident";

// Urutan langkah wizard mengikuti urutan di config produk. Langkah "Pilih Produk",
// "Review", dan "Pernyataan" bersifat generik (bukan bagian config produk).
export type StepId = "applicant" | "risk" | "object" | "coverage" | "claims" | "documents";

export type FieldType =
  | "text"
  | "textarea"
  | "email"
  | "tel"
  | "url"
  | "number"
  | "money"
  | "date"
  | "year"
  | "select"
  | "radio"
  | "yesno" // nilai tersimpan: "ya" | "tidak"
  | "checkboxes"
  | "nik"
  | "npwp"
  | "repeatable";

export interface Option {
  value: string;
  label: string;
}

export type Condition =
  | { field: string; equals: string }
  | { field: string; in: string[] }
  | { field: string; includes: string } // untuk checkboxes
  | { field: string; notEmpty: true }
  | { all: Condition[] }
  | { any: Condition[] };

export type RepeatItem = Record<string, string>;
export type FieldValue = string | string[] | RepeatItem[];

export interface Field {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  hint?: string;
  defaultValue?: string;
  options?: Option[];
  maxLength?: number;
  min?: number;
  max?: number;
  /** Subjudul pengelompokan di dalam satu langkah. */
  section?: string;
  /** Field tampil hanya jika kondisi terpenuhi. Nilai field tersembunyi dibuang saat validasi. */
  showIf?: Condition;
  /** date: tanggal tidak boleh lebih awal dari field tanggal lain. */
  notBefore?: string;
  /** date: tidak boleh di masa depan (mis. tanggal lahir). */
  notFuture?: boolean;
  /** money: field read-only, nilainya dihitung server dari jumlah field-field ini. */
  sumOf?: string[];
  /** repeatable: definisi kolom per baris (hanya tipe string). */
  items?: Field[];
  minItems?: number;
  maxItems?: number;
  itemLabel?: string;
}

export interface StepConfig {
  id: StepId;
  title: string;
  description?: string;
  fields: Field[];
}

export interface DocumentSpec {
  key: string;
  label: string;
  hint?: string;
  /** Wajib hanya jika dokumen ini tampil (showIf terpenuhi). Default: opsional. */
  required?: boolean;
  multiple?: boolean;
  showIf?: Condition;
}

export interface ProductConfig {
  id: ProductId;
  label: string;
  description: string;
  /** Pilihan jenis pertanggungan/peserta. Nilainya disimpan di values.subType. */
  subTypeField?: Field;
  steps: StepConfig[];
  documents: DocumentSpec[];
  /** Pemetaan ke kolom ringkasan di database / notifikasi. */
  summary: {
    nameField: string;
    /** Field pertama yang terisi dipakai sebagai nilai pertanggungan. */
    sumFields: string[];
  };
}

export interface ValidationResult {
  ok: boolean;
  /** key = nama field, atau `${field}.${index}.${itemField}` untuk repeatable */
  errors: Record<string, string>;
  /** Nilai bersih: sudah disanitasi, field tersembunyi dibuang. */
  values: Record<string, FieldValue>;
}
