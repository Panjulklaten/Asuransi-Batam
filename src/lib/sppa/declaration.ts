// Pernyataan & persetujuan. Wording sengaja tidak menyatakan formulir ini sebagai polis.
// Ubah teks → naikkan DECLARATION_VERSION agar tercatat teks versi mana yang disetujui.
export const DECLARATION_VERSION = "2026-10-04.1";

export const DECLARATION_ITEMS = [
  { id: "truthful", text: "Saya menyatakan bahwa seluruh informasi yang saya berikan adalah benar dan lengkap." },
  { id: "underwriting", text: "Saya memahami bahwa informasi ini digunakan untuk proses underwriting (penilaian risiko) oleh perusahaan asuransi." },
  { id: "privacy", text: "Saya menyetujui pemrosesan data pribadi saya sesuai Kebijakan Privasi website ini." },
  { id: "no_guarantee", text: "Saya memahami bahwa pengajuan ini belum berarti risiko otomatis diterima atau ditutup oleh perusahaan asuransi, dan formulir ini bukan polis." },
] as const;

export type DeclarationId = (typeof DECLARATION_ITEMS)[number]["id"];

export function validateDeclaration(accepted: unknown): string | null {
  const list = Array.isArray(accepted) ? accepted : [];
  const missing = DECLARATION_ITEMS.some((i) => !list.includes(i.id));
  return missing ? "Anda harus menyetujui seluruh pernyataan untuk mengirim SPPA." : null;
}
