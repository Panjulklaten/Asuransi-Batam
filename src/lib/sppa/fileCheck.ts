// Validasi file upload. Jangan percaya ekstensi atau Content-Type dari klien: isi file
// (magic bytes) harus cocok. Pemeriksaan ini WAJIB dijalankan ulang di server.

export const MAX_FILE_BYTES = 8 * 1024 * 1024; // 8 MB per file
export const MAX_FILES_PER_DOCUMENT = 5;

export const ALLOWED_MIME = ["application/pdf", "image/jpeg", "image/png"] as const;
export type AllowedMime = (typeof ALLOWED_MIME)[number];

const EXTENSIONS: Record<AllowedMime, string[]> = {
  "application/pdf": ["pdf"],
  "image/jpeg": ["jpg", "jpeg"],
  "image/png": ["png"],
};

/** Deteksi tipe dari isi file (minimal 8 byte pertama). */
export function sniffMime(head: Uint8Array): AllowedMime | null {
  const at = (i: number) => head[i];
  if (head.length >= 5 && at(0) === 0x25 && at(1) === 0x50 && at(2) === 0x44 && at(3) === 0x46 && at(4) === 0x2d) {
    return "application/pdf"; // %PDF-
  }
  if (head.length >= 3 && at(0) === 0xff && at(1) === 0xd8 && at(2) === 0xff) return "image/jpeg";
  if (
    head.length >= 8 &&
    [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a].every((b, i) => at(i) === b)
  ) {
    return "image/png";
  }
  return null;
}

export function sanitizeFileName(name: string): string {
  const base = name.split(/[\\/]/).pop() ?? "file";
  const dot = base.lastIndexOf(".");
  const stem = (dot > 0 ? base.slice(0, dot) : base).replace(/[^A-Za-z0-9_-]+/g, "_").replace(/^_+|_+$/g, "");
  const ext = dot > 0 ? base.slice(dot + 1).toLowerCase().replace(/[^a-z0-9]/g, "") : "";
  return `${(stem || "file").slice(0, 60)}${ext ? "." + ext : ""}`;
}

/** Pemeriksaan metadata (sebelum upload). Mengembalikan pesan error atau null. */
export function checkFileMeta(file: { name: string; size: number; type: string }): string | null {
  if (!file.size) return "File kosong.";
  if (file.size > MAX_FILE_BYTES) return "Ukuran file maksimal 8 MB.";
  const ext = sanitizeFileName(file.name).split(".").pop() ?? "";
  const allowedExt = Object.values(EXTENSIONS).flat();
  if (!allowedExt.includes(ext)) return "Format file harus PDF, JPG, atau PNG.";
  if (!(ALLOWED_MIME as readonly string[]).includes(file.type)) return "Format file harus PDF, JPG, atau PNG.";
  if (!EXTENSIONS[file.type as AllowedMime].includes(ext)) return "Ekstensi file tidak sesuai dengan jenis file.";
  return null;
}

/** Pemeriksaan isi file (setelah upload, di server). */
export function checkFileContent(head: Uint8Array, declaredMime: string, fileName: string): string | null {
  const real = sniffMime(head);
  if (!real) return "Isi file tidak dikenali. Gunakan PDF, JPG, atau PNG yang asli.";
  if (real !== declaredMime) return "Isi file tidak sesuai dengan jenis file yang dipilih.";
  const ext = sanitizeFileName(fileName).split(".").pop() ?? "";
  if (!EXTENSIONS[real].includes(ext)) return "Ekstensi file tidak sesuai dengan isi file.";
  return null;
}
