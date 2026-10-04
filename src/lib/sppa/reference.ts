// Nomor referensi: SPPA-<tahun>-<6 karakter>. Tanpa karakter ambigu (0/O, 1/I).
// Keunikan DIJAMIN oleh constraint UNIQUE di database; pemanggil harus retry jika bentrok.
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // 32 karakter → tanpa modulo bias pada byte

export const REFERENCE_PATTERN = /^SPPA-\d{4}-[A-Z0-9]{6}$/;

export function generateReferenceNo(now: Date = new Date()): string {
  const bytes = new Uint8Array(6);
  globalThis.crypto.getRandomValues(bytes);
  let code = "";
  for (let i = 0; i < bytes.length; i++) code += ALPHABET[bytes[i] % ALPHABET.length];
  return `SPPA-${now.getUTCFullYear()}-${code}`;
}
