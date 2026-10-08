// Tipe bersama untuk mesin "Minta Penawaran" (popup form → WhatsApp + tabel persyaratan).
// Setiap cluster produk (surety bond, marine/kapal, ...) cukup menyediakan satu objek QuoteCluster.

export type Lang = "id" | "en";
export type Bi = { id: string; en: string };
export type QuoteClusterKey = "surety" | "marine" | "event" | "liability" | "pa";

export type Option = { value: string; label: Bi };
export type Requirement = { doc: Bi; note: Bi; must: boolean };

type FieldBase = {
  key: string;
  label: Bi;
  /** Hanya tampil untuk jenis produk ini. Kosong = selalu tampil. */
  showFor?: string[];
  optional?: boolean;
  /** Tampil setengah lebar (berpasangan dengan bidang lain). Bawaan: hanya tipe number. */
  half?: boolean;
};

export type FieldDef = FieldBase &
  (
    | { kind: "segmented"; options: (Option & { icon?: "gov" | "private" })[]; default: string }
    | { kind: "money"; placeholder: Bi }
    | { kind: "period"; placeholder: Bi; defaultUnit?: "month" | "day" }
    | { kind: "select"; options: Option[]; placeholder: Bi }
    | { kind: "text"; placeholder: Bi }
    | { kind: "number"; placeholder: Bi; suffix?: Bi }
  );

export interface QuoteCluster {
  key: QuoteClusterKey;
  /** Judul grup pilihan jenis produk di form, mis. "Jenis surety bond". */
  typeLegend: Bi;
  /** Label baris di pesan WhatsApp, mis. "Jenis bond". */
  typeLine: Bi;
  /** Termasuk entri "unsure" (belum yakin). */
  types: { key: string; label: Bi; hint: Bi }[];
  inferType: (pathname: string) => string;
  /** Jenis produk yang nama perusahaannya tidak wajib diisi (mis. PA perorangan). */
  companyOptionalFor?: string[];
  fields: FieldDef[];
  flags: { key: string; label: Bi; showFor?: string[] }[];
  general: Requirement[];
  specific: Record<string, Requirement[]>;
  disclaimer: Bi;
  copy: {
    modalTitle: Bi;
    modalSubtitle: Bi;
    reqEyebrow: Bi;
    reqTitle: Bi;
    reqSubtitle: Bi;
    dateLabel: Bi;
    clientLabel: Bi;
    clientPh: Bi;
    notePh: Bi;
    msgIntro: Bi;
    msgOutro: Bi;
    unsureNote: Bi;
    /** Label kolom nama perusahaan di langkah 2 (bawaan: "Nama perusahaan"). */
    companyLabel?: Bi;
  };
}

export interface QuoteState {
  type: string;
  values: Record<string, string>;
  name: string;
  company: string;
  phone: string;
  targetDate: string;
  client: string;
  flags: string[];
  note: string;
}
