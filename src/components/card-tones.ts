/**
 * Palet kartu mode `rich`, disesuaikan dengan tema situs: biru, keemasan, biru gelap.
 * Disimpan di src/components agar class Tailwind-nya ikut terbaca saat build.
 * `card` = latar + border kartu, `tile` = kotak ikon, `text` = warna aksen teks/link.
 */
export const TONES = [
  { card: "bg-[#eef4ff] border-[#c7d9f5] hover:border-[#1a4fa0]/50", tile: "bg-[#1a4fa0] text-white", text: "text-[#1a4fa0]" },
  { card: "bg-[#fbf6e6] border-[#ecdca0] hover:border-[#c9a84c]", tile: "bg-gradient-to-br from-[#c9a84c] to-[#f0d080] text-[#0a1628]", text: "text-[#8a6a1f]" },
  { card: "bg-[#eef1f6] border-[#cbd5e1] hover:border-[#0a1628]/40", tile: "bg-[#0a1628] text-[#f0d080]", text: "text-[#0a1628]" },
] as const;

export const tone = (i: number) => TONES[i % TONES.length];
