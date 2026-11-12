// Aturan lampiran. Keluar: allowlist ekstensi + cek magic bytes + batas ukuran. Masuk: apa pun boleh diterima,
// tapi selalu disajikan sebagai unduhan (tidak pernah dirender) dan tipe berisiko dipaksa octet-stream.
import { MAIL_LIMITS } from "./config";

// Ekstensi yang boleh DIKIRIM admin. Semuanya juga diizinkan Resend (daftar terlarang Resend: exe, js, bat, dsb.).
export const ALLOWED_EXT: Record<string, string> = {
  pdf: "application/pdf", png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", gif: "image/gif", webp: "image/webp",
  txt: "text/plain", csv: "text/csv", rtf: "application/rtf",
  doc: "application/msword", docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel", xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ppt: "application/vnd.ms-powerpoint", pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  odt: "application/vnd.oasis.opendocument.text", ods: "application/vnd.oasis.opendocument.spreadsheet",
  zip: "application/zip",
};

const OLE = [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]; // doc/xls/ppt lama
const starts = (b: Buffer, sig: number[], off = 0) => sig.every((v, i) => b[off + i] === v);

/** Cek isi file sesuai ekstensinya (mencegah file berbahaya yang diberi nama .pdf dsb). */
export function magicMatches(ext: string, b: Buffer): boolean {
  switch (ext) {
    case "pdf": return starts(b, [0x25, 0x50, 0x44, 0x46]);
    case "png": return starts(b, [0x89, 0x50, 0x4e, 0x47]);
    case "jpg": case "jpeg": return starts(b, [0xff, 0xd8, 0xff]);
    case "gif": return starts(b, [0x47, 0x49, 0x46, 0x38]);
    case "webp": return starts(b, [0x52, 0x49, 0x46, 0x46]) && starts(b, [0x57, 0x45, 0x42, 0x50], 8);
    case "zip": case "docx": case "xlsx": case "pptx": case "odt": case "ods": return starts(b, [0x50, 0x4b, 0x03, 0x04]) || starts(b, [0x50, 0x4b, 0x05, 0x06]);
    case "doc": case "xls": case "ppt": return starts(b, OLE);
    case "txt": case "csv": case "rtf": return !b.subarray(0, 4096).includes(0) && (ext !== "rtf" || starts(b, [0x7b, 0x5c, 0x72, 0x74, 0x66]));
    default: return false;
  }
}

export interface OutFile { filename: string; contentType: string; data: Buffer }

export function extOf(name: string): string {
  const i = name.lastIndexOf(".");
  return i < 0 ? "" : name.slice(i + 1).toLowerCase();
}

export function validateOutgoingFiles(files: { name: string; size: number }[]): string | null {
  if (files.length > MAIL_LIMITS.maxFiles) return `Maksimal ${MAIL_LIMITS.maxFiles} lampiran.`;
  let total = 0;
  for (const f of files) {
    const ext = extOf(f.name);
    if (!ALLOWED_EXT[ext]) return `Tipe file ".${ext || "?"}" tidak diizinkan (${f.name}).`;
    if (f.size <= 0) return `File kosong: ${f.name}.`;
    if (f.size > MAIL_LIMITS.maxFileBytes) return `${f.name} melebihi ${MAIL_LIMITS.maxFileBytes / 1048576}MB.`;
    total += f.size;
  }
  if (total > MAIL_LIMITS.maxTotalBytes) return `Total lampiran melebihi ${MAIL_LIMITS.maxTotalBytes / 1048576}MB.`;
  return null;
}

export function validateOutgoingContent(name: string, data: Buffer): string | null {
  const ext = extOf(name);
  if (!ALLOWED_EXT[ext]) return `Tipe file ".${ext}" tidak diizinkan.`;
  if (!magicMatches(ext, data)) return `Isi file ${name} tidak sesuai ekstensinya.`;
  return null;
}

/** Content-Type aman untuk unduhan lampiran masuk; tipe aktif (html/svg/js/xml) dipaksa octet-stream. */
export function safeDownloadType(ct: string | null | undefined): string {
  const t = (ct ?? "").toLowerCase().split(";")[0].trim();
  if (!t || /html|svg|javascript|ecmascript|xml|xhtml|x-sh|x-msdownload/.test(t)) return "application/octet-stream";
  return t;
}
