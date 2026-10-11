"use client";
import { useState } from "react";
import Link from "next/link";

function formatRupiah(val: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(val);
}

const TEXT = {
  id: {
    breadcrumbHome: "Beranda",
    breadcrumbCurrent: "Kalkulator Premi Motor",
    eyebrow: "Kalkulator Online",
    title: "Kalkulator Premi Asuransi Motor",
    subtitle: "Estimasi premi asuransi sepeda motor berdasarkan tarif OJK.",
    typeLabel: "Jenis Asuransi",
    allRisk: "All Risk",
    allRiskSub: "Semua kerusakan",
    tlo: "TLO",
    tloSub: "Total loss & hilang",
    priceLabel: "Harga Motor (Rp)",
    pricePlaceholder: "Contoh: 25000000",
    button: "Hitung Estimasi Premi",
    resultTitle: "Estimasi Premi Tahunan",
    min: "Minimum",
    max: "Maksimum",
    disclaimer: "* Estimasi berdasarkan tarif acuan OJK. Tarif final ditentukan perusahaan asuransi.",
    cta: "Minta Penawaran via WhatsApp",
    otherCalc: "→ Coba Kalkulator Premi Mobil",
    otherCalcHref: "/kalkulator-premi-mobil",
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Motorcycle Premium Calculator",
    eyebrow: "Online Calculator",
    title: "Motorcycle Insurance Premium Calculator",
    subtitle: "Estimate your motorcycle insurance premium based on official OJK rates.",
    typeLabel: "Insurance Type",
    allRisk: "All Risk",
    allRiskSub: "All damage covered",
    tlo: "TLO",
    tloSub: "Total loss & theft only",
    priceLabel: "Motorcycle Price (Rp)",
    pricePlaceholder: "e.g. 25000000",
    button: "Calculate Estimated Premium",
    resultTitle: "Estimated Annual Premium",
    min: "Minimum",
    max: "Maximum",
    disclaimer: "* Estimate based on OJK reference rates. Final rate is determined by the insurance company.",
    cta: "Request a Quote via WhatsApp",
    otherCalc: "→ Try the Car Premium Calculator",
    otherCalcHref: "/en/car-premium-calculator",
  },
};

interface KalkulatorMotorProps {
  lang?: "id" | "en";
}

export default function KalkulatorMotor({ lang = "id" }: KalkulatorMotorProps) {
  const t = TEXT[lang];
  const [type, setType] = useState<"allrisk" | "tlo">("allrisk");
  const [motorValue, setMotorValue] = useState("");
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);

  function calculate() {
    const val = parseFloat(motorValue.replace(/[^0-9]/g, ""));
    if (!val) return;
    const rate = type === "allrisk" ? { min: 3.18, max: 3.50 } : { min: 1.76, max: 2.11 };
    setResult({ min: (val * rate.min) / 100, max: (val * rate.max) / 100 });
  }

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/50 mb-4 flex-wrap" aria-label="Breadcrumb">
            <Link href={lang === "en" ? "/en" : "/"} className="hover:text-white/80 transition-colors">{t.breadcrumbHome}</Link>
            <span>/</span>
            <span className="text-white/70">{t.breadcrumbCurrent}</span>
          </nav>
          <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-2">{t.eyebrow}</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">{t.title}</h1>
          <p className="text-white/70 text-xl">{t.subtitle}</p>
        </div>
      </section>
      <section className="section-padding bg-[#faf8f3]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <label className="block font-display font-semibold text-[#0a1628] mb-3">{t.typeLabel}</label>
                <div className="grid grid-cols-2 gap-3">
                  {[{ val: "allrisk", label: t.allRisk, sub: t.allRiskSub }, { val: "tlo", label: t.tlo, sub: t.tloSub }].map((opt) => (
                    <button key={opt.val} onClick={() => setType(opt.val as "allrisk" | "tlo")} className={`p-4 rounded-xl border-2 text-left transition-all ${type === opt.val ? "border-[#c9a84c] bg-[#c9a84c]/5" : "border-[#e2e8f0] hover:border-[#c9a84c]/40"}`}>
                      <div className="font-semibold text-sm text-[#0a1628]">{opt.label}</div>
                      <div className="text-xs text-[#475569]">{opt.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-display font-semibold text-[#0a1628] mb-2">{t.priceLabel}</label>
                <input type="text" placeholder={t.pricePlaceholder} value={motorValue} onChange={(e) => setMotorValue(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#e2e8f0] focus:border-[#1a4fa0] outline-none text-[#0a1628] font-medium" />
              </div>
              <button onClick={calculate} className="w-full py-4 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] text-white font-bold rounded-xl hover:shadow-lg transition-all text-lg">
                {t.button}
              </button>
            </div>
            {result && (
              <div className="mt-6 p-6 bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] rounded-2xl text-white">
                <h3 className="font-display font-bold text-lg mb-4 text-[#c9a84c]">{t.resultTitle}</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center"><div className="text-white/60 text-xs mb-1">{t.min}</div><div className="font-bold text-xl">{formatRupiah(result.min)}</div></div>
                  <div className="bg-[#c9a84c]/20 rounded-xl p-4 text-center border border-[#c9a84c]/40"><div className="text-[#c9a84c] text-xs mb-1">{t.max}</div><div className="font-bold text-xl text-[#f0d080]">{formatRupiah(result.max)}</div></div>
                </div>
                <p className="text-white/60 text-xs mb-4">{t.disclaimer}</p>
                <a href="https://wa.me/6281373336728" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-[#c9a84c] text-[#0a1628] font-bold rounded-xl text-center hover:bg-[#f0d080] transition-colors">
                  {t.cta}
                </a>
              </div>
            )}
          </div>
          <div className="mt-8 text-center">
            <Link href={t.otherCalcHref} className="text-[#1a4fa0] font-semibold hover:text-[#c9a84c] transition-colors">
              {t.otherCalc}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
