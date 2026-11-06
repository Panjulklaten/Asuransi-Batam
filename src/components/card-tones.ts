/**
 * Palet kartu berwarna lembut untuk tampilan padat (mode `rich`).
 * Disimpan di src/components agar class Tailwind-nya ikut terbaca saat build.
 * `card` = latar + border kartu, `tile` = kotak ikon, `text` = warna aksen teks/link.
 */
export const TONES = [
  { card: "bg-sky-50 border-sky-200 hover:border-sky-400", tile: "bg-sky-500 text-white", text: "text-sky-700" },
  { card: "bg-amber-50 border-amber-200 hover:border-amber-400", tile: "bg-amber-500 text-white", text: "text-amber-700" },
  { card: "bg-emerald-50 border-emerald-200 hover:border-emerald-400", tile: "bg-emerald-600 text-white", text: "text-emerald-700" },
  { card: "bg-rose-50 border-rose-200 hover:border-rose-400", tile: "bg-rose-500 text-white", text: "text-rose-700" },
  { card: "bg-violet-50 border-violet-200 hover:border-violet-400", tile: "bg-violet-500 text-white", text: "text-violet-700" },
  { card: "bg-cyan-50 border-cyan-200 hover:border-cyan-400", tile: "bg-cyan-600 text-white", text: "text-cyan-700" },
] as const;

export const tone = (i: number) => TONES[i % TONES.length];
