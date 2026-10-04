// Sanitasi input. Data disimpan sebagai teks mentah yang sudah dibersihkan; escaping untuk
// HTML dilakukan React saat render (jangan pernah memakai dangerouslySetInnerHTML untuk data SPPA).

// Karakter kontrol + zero-width + bidi override (dipakai untuk spoofing).
const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u200B-\u200F\u202A-\u202E\u2066-\u2069\uFEFF]/g;
// Hanya membuang yang berbentuk tag HTML, agar teks seperti "tinggi < 5 m" tidak rusak.
const HTML_TAG = /<\/?[a-zA-Z][^>]*>/g;

export function sanitizeText(input: string): string {
  return input
    .normalize("NFC")
    .replace(CONTROL, "")
    .replace(HTML_TAG, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function sanitizeMultiline(input: string): string {
  return input
    .normalize("NFC")
    .replace(/\r\n?/g, "\n")
    .replace(CONTROL, "")
    .replace(HTML_TAG, "")
    .replace(/[ \t]+/g, " ")
    .replace(/ ?\n ?/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
