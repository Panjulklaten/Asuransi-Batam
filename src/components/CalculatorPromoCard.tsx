// components/CalculatorPromoCard.tsx
// Kartu ajakan menuju kalkulator premi properti, dipakai di setiap sub-halaman properti
// (ID + EN). Server component — tanpa state. Animasi shimmer ada di globals.css (.btn-shimmer).
import Link from "next/link";
import { Calculator, ArrowRight, ShieldCheck, Zap, Gift } from "lucide-react";

export type CalculatorCardVariant = "rumah" | "ruko" | "gudang" | "pabrik" | "apartemen" | "hotel";

// Kunci okupasi di KalkulatorProperti.tsx yang dipilih otomatis lewat ?okupasi=
// (pabrik tidak punya okupasi di kalkulator, jadi dibuka tanpa pilihan awal).
const PRESELECT: Record<CalculatorCardVariant, string | null> = {
  rumah: "rumah",
  ruko: "ruko",
  gudang: "gudang_sendiri",
  pabrik: null,
  apartemen: "apartemen",
  hotel: "hotel_bawah",
};

const TEXT = {
  id: {
    href: "/kalkulator-premi-properti",
    eyebrow: "Kalkulator Premi Properti",
    desc: "Masukkan nilai bangunan Anda dan dapatkan estimasi premi kebakaran, huru-hara, dan gempa bumi berdasarkan tarif OJK. Hasil instan, tanpa perlu daftar.",
    chips: ["Tarif OJK", "Hasil Instan", "Gratis"],
    button: "Hitung Premi Sekarang",
    caption: "Estimasi awal · premi final ditentukan setelah survei",
    titles: {
      rumah: "Berapa Premi Asuransi Rumah Anda?",
      ruko: "Berapa Premi Asuransi Ruko Anda?",
      gudang: "Berapa Premi Asuransi Gudang Anda?",
      pabrik: "Hitung Estimasi Premi Properti Anda",
      apartemen: "Berapa Premi Asuransi Apartemen Anda?",
      hotel: "Berapa Premi Asuransi Hotel atau Vila Anda?",
    } as Record<CalculatorCardVariant, string>,
    notes: {
      pabrik:
        "Tarif pabrik bergantung pada jenis produksi. Kalkulator ini cocok untuk bangunan penunjang seperti kantor dan gudang; untuk pabrik, hubungi kami untuk penawaran.",
    } as Partial<Record<CalculatorCardVariant, string>>,
  },
  en: {
    href: "/en/property-premium-calculator",
    eyebrow: "Property Premium Calculator",
    desc: "Enter your building value and get an estimated fire, riot, and earthquake premium based on official OJK rates. Instant results, no sign-up needed.",
    chips: ["OJK Rates", "Instant Results", "Free"],
    button: "Calculate Premium Now",
    caption: "Initial estimate · final premium set after survey",
    titles: {
      rumah: "What Is Your Home Insurance Premium?",
      ruko: "What Is Your Shophouse Insurance Premium?",
      gudang: "What Is Your Warehouse Insurance Premium?",
      pabrik: "Estimate Your Property Premium",
      apartemen: "What Is Your Apartment Insurance Premium?",
      hotel: "What Is Your Hotel or Villa Insurance Premium?",
    } as Record<CalculatorCardVariant, string>,
    notes: {
      pabrik:
        "Factory rates depend on the type of production. This calculator suits supporting buildings such as offices and warehouses; for the factory itself, contact us for a quotation.",
    } as Partial<Record<CalculatorCardVariant, string>>,
  },
};

const CHIP_ICONS = [ShieldCheck, Zap, Gift];

export default function CalculatorPromoCard({
  lang = "id",
  variant,
}: {
  lang?: "id" | "en";
  variant: CalculatorCardVariant;
}) {
  const t = TEXT[lang];
  const preselect = PRESELECT[variant];
  const href = preselect ? `${t.href}?okupasi=${preselect}` : t.href;
  const note = t.notes[variant];

  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-[#faf8f3] to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0] p-7 sm:p-10 ring-1 ring-[#c9a84c]/30 shadow-[0_24px_60px_-15px_rgba(10,22,40,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_72px_-15px_rgba(10,22,40,0.65)]"
        >
          {/* Dekorasi cahaya */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[#c9a84c]/15 blur-2xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-[#1a4fa0]/40 blur-2xl" aria-hidden="true" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c9a84c] to-[#f0d080] text-[#0a1628] shadow-lg shadow-[#c9a84c]/30">
                  <Calculator className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-[#c9a84c] font-semibold uppercase tracking-widest text-xs">{t.eyebrow}</span>
              </div>

              <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-3 leading-tight">
                {t.titles[variant]}
              </h2>
              <p className="text-white/70 leading-relaxed mb-5 max-w-xl">{t.desc}</p>

              <ul className="flex flex-wrap gap-2">
                {t.chips.map((chip, i) => {
                  const Icon = CHIP_ICONS[i];
                  return (
                    <li
                      key={chip}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#c9a84c]/30 bg-white/10 px-3 py-1 text-xs font-semibold text-[#f0d080]"
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {chip}
                    </li>
                  );
                })}
              </ul>

              {note && <p className="mt-4 max-w-xl text-xs leading-relaxed text-white/55">{note}</p>}
            </div>

            <div className="md:w-64 flex flex-col items-stretch gap-3">
              <Link
                href={href}
                className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c9a84c] via-[#f0d080] to-[#c9a84c] px-6 py-4 text-center font-bold text-[#0a1628] shadow-lg shadow-[#c9a84c]/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#c9a84c]/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f0d080]/60"
              >
                <span>{t.button}</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <p className="text-center text-xs text-white/50">{t.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
