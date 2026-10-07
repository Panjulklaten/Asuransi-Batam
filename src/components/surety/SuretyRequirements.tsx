"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CheckCircle2, Circle, FileCheck2, Info } from "lucide-react";
import Reveal from "./Reveal";
import SuretyQuoteButton from "./SuretyQuoteButton";
import {
  GENERAL_REQUIREMENTS,
  REQUIREMENTS_DISCLAIMER,
  SPECIFIC_REQUIREMENTS,
  SURETY_TYPES,
  inferSuretyType,
  pick,
  typeLabel,
  type Lang,
  type Requirement,
  type SuretySpecificKey,
  type SuretyTypeKey,
} from "@/lib/surety";

const T = {
  id: {
    eyebrow: "Persyaratan Penerbitan",
    title: "Dokumen yang Disiapkan untuk Surety Bond",
    subtitle:
      "Pilih jenis bond untuk melihat dokumen khususnya. Dokumen perusahaan berlaku untuk semua jenis.",
    colNo: "No",
    colDoc: "Dokumen",
    colNote: "Keterangan",
    colStatus: "Status",
    must: "Wajib",
    ifAny: "Jika ada",
    specificTitle: "Dokumen khusus",
    generalTitle: "Dokumen perusahaan",
    generalSub: "Berlaku untuk semua jenis bond",
    cta: "Siap mengajukan? Isi data singkat, tim kami analisa awalnya.",
    ctaBtn: "Minta Penawaran",
    panelTitle: "Persyaratan Penerbitan",
    panelPick: "Pilih jenis bond untuk melihat dokumen khususnya.",
  },
  en: {
    eyebrow: "Issuance Requirements",
    title: "Documents to Prepare for a Surety Bond",
    subtitle:
      "Choose a bond type to see its specific documents. Company documents apply to every type.",
    colNo: "No",
    colDoc: "Document",
    colNote: "Notes",
    colStatus: "Status",
    must: "Required",
    ifAny: "If available",
    specificTitle: "Specific documents",
    generalTitle: "Company documents",
    generalSub: "Applies to every bond type",
    cta: "Ready to apply? Fill in a short form and we'll do the initial assessment.",
    ctaBtn: "Request a Quote",
    panelTitle: "Issuance Requirements",
    panelPick: "Choose a bond type to see its specific documents.",
  },
} as const;

function Badge({ must, lang }: { must: boolean; lang: Lang }) {
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ${
        must
          ? "bg-[#c9a84c]/15 text-[#8a6a1c] ring-1 ring-[#c9a84c]/30"
          : "bg-[#e2e8f0]/70 text-[#475569] ring-1 ring-[#cbd5e1]"
      }`}
    >
      {must ? <CheckCircle2 size={12} /> : <Circle size={12} />}
      {must ? T[lang].must : T[lang].ifAny}
    </span>
  );
}

/** Tabel gaya "ledger": header navy, baris bergaris emas, muncul bertahap. */
function ReqTable({ items, lang, startAt = 1 }: { items: Requirement[]; lang: Lang; startAt?: number }) {
  const t = T[lang];
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm">
      <div className="hidden grid-cols-[3rem_1.2fr_1.6fr_6.5rem] gap-x-3 bg-gradient-to-r from-[#0a1628] to-[#132040] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white/70 md:grid">
        <span>{t.colNo}</span>
        <span>{t.colDoc}</span>
        <span>{t.colNote}</span>
        <span>{t.colStatus}</span>
      </div>
      <ul>
        {items.map((r, i) => (
          <li
            key={r.doc.id}
            className="sb-rise group grid grid-cols-[2.25rem_1fr_auto] items-start gap-x-3 gap-y-1 border-t border-[#eef0f4] px-4 py-3.5 transition-colors first:border-t-0 hover:bg-[#faf8f3] md:grid-cols-[3rem_1.2fr_1.6fr_6.5rem]"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="col-start-1 row-start-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#0a1628] text-xs font-bold text-[#f0d080] transition-transform group-hover:scale-110">
              {startAt + i}
            </span>
            <span className="col-start-2 row-start-1 text-sm font-semibold leading-snug text-[#0a1628]">
              {pick(r.doc, lang)}
            </span>
            <span className="col-start-3 row-start-1 md:col-start-4">
              <Badge must={r.must} lang={lang} />
            </span>
            <p className="col-span-2 col-start-2 row-start-2 text-sm leading-relaxed text-[#475569] md:col-span-1 md:col-start-3 md:row-start-1">
              {pick(r.note, lang)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Kartu ringkas di sisi popup: persyaratan mengikuti jenis bond yang dipilih. */
export function RequirementsPanel({ lang, type }: { lang: Lang; type: SuretyTypeKey }) {
  const t = T[lang];
  const specific = type === "unsure" ? [] : SPECIFIC_REQUIREMENTS[type as SuretySpecificKey];
  const Row = ({ r, i }: { r: Requirement; i: number }) => (
    <li className="sb-rise flex gap-2.5" style={{ animationDelay: `${i * 45}ms` }}>
      {r.must ? (
        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#c9a84c]" />
      ) : (
        <Circle size={16} className="mt-0.5 shrink-0 text-[#94a3b8]" />
      )}
      <span className="text-[13px] leading-snug text-[#0a1628]">
        {pick(r.doc, lang)}
        {!r.must && <em className="ml-1 not-italic text-[#64748b]">({t.ifAny.toLowerCase()})</em>}
      </span>
    </li>
  );

  return (
    <div className="rounded-2xl border border-[#c9a84c]/30 bg-gradient-to-b from-white to-[#faf8f3] p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0a1628] text-[#f0d080]">
          <FileCheck2 size={18} />
        </span>
        <div>
          <h3 className="font-display text-sm font-bold text-[#0a1628]">{t.panelTitle}</h3>
          <p className="text-xs text-[#64748b]">{type === "unsure" ? t.panelPick : typeLabel(type, lang)}</p>
        </div>
      </div>

      {specific.length > 0 && (
        <div key={type} className="mb-4">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-[#a07830]">{t.specificTitle}</p>
          <ul className="space-y-2">
            {specific.map((r, i) => (
              <Row key={r.doc.id} r={r} i={i} />
            ))}
          </ul>
        </div>
      )}

      <div>
        <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-[#a07830]">{t.generalTitle}</p>
        <ul className="space-y-2">
          {GENERAL_REQUIREMENTS.map((r, i) => (
            <Row key={r.doc.id} r={r} i={i} />
          ))}
        </ul>
      </div>

      <p className="mt-4 flex gap-2 border-t border-[#e2e8f0] pt-3 text-[11px] leading-relaxed text-[#64748b]">
        <Info size={13} className="mt-0.5 shrink-0" />
        {pick(REQUIREMENTS_DISCLAIMER, lang)}
      </p>
    </div>
  );
}

/** Bagian halaman penuh: tab jenis bond + tabel persyaratan. */
export default function SuretyRequirements({
  lang: langProp,
  defaultType,
  className = "",
}: {
  lang?: Lang;
  defaultType?: SuretyTypeKey;
  className?: string;
}) {
  const pathname = usePathname();
  const lang: Lang = langProp ?? (pathname?.startsWith("/en") ? "en" : "id");
  const t = T[lang];
  const inferred = defaultType ?? inferSuretyType(pathname);
  const tabs = SURETY_TYPES.filter((x) => x.key !== "unsure") as { key: SuretySpecificKey; label: { id: string; en: string }; hint: { id: string; en: string } }[];
  const [tab, setTab] = useState<SuretySpecificKey>(inferred === "unsure" ? "bid" : (inferred as SuretySpecificKey));

  return (
    <section className={`section-padding bg-[#faf8f3] ${className}`} aria-labelledby="surety-req-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block rounded-full bg-[#f0d080]/25 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#a07830]">
              {t.eyebrow}
            </span>
            <h2 id="surety-req-title" className="font-display text-3xl font-bold text-[#0a1628] md:text-4xl">
              {t.title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[#475569]">{t.subtitle}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          {/* Tabs */}
          <div role="tablist" aria-label={t.eyebrow} className="mb-6 flex gap-2 overflow-x-auto pb-1 md:justify-center">
            {tabs.map((x) => {
              const active = tab === x.key;
              return (
                <button
                  key={x.key}
                  role="tab"
                  id={`sreq-tab-${x.key}`}
                  aria-selected={active}
                  aria-controls={`sreq-panel-${x.key}`}
                  onClick={() => setTab(x.key)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                    active
                      ? "border-[#0a1628] bg-[#0a1628] text-[#f0d080] shadow-md"
                      : "border-[#e2e8f0] bg-white text-[#475569] hover:border-[#c9a84c]/60 hover:text-[#0a1628]"
                  }`}
                >
                  {pick(x.label, lang)}
                </button>
              );
            })}
          </div>

          {/* Semua panel tetap ada di DOM (hidden) agar isinya tetap terbaca mesin pencari */}
          {tabs.map((x) => (
            <div
              key={x.key}
              role="tabpanel"
              id={`sreq-panel-${x.key}`}
              aria-labelledby={`sreq-tab-${x.key}`}
              hidden={tab !== x.key}
              className="grid gap-6 lg:grid-cols-5"
            >
              <div className="lg:col-span-3">
                <p className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-[#0a1628]">
                  <span className="h-5 w-1 rounded-full bg-gradient-to-b from-[#c9a84c] to-[#f0d080]" />
                  {t.specificTitle} · {pick(x.label, lang)}
                </p>
                <ReqTable items={SPECIFIC_REQUIREMENTS[x.key]} lang={lang} />
              </div>
              <div className="lg:col-span-2">
                <p className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-[#0a1628]">
                  <span className="h-5 w-1 rounded-full bg-gradient-to-b from-[#c9a84c] to-[#f0d080]" />
                  {t.generalTitle}
                </p>
                <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#64748b]">{t.generalSub}</p>
                  <ul className="space-y-3">
                    {GENERAL_REQUIREMENTS.map((r, i) => (
                      <li key={r.doc.id} className="sb-rise flex gap-2.5" style={{ animationDelay: `${i * 50}ms` }}>
                        {r.must ? (
                          <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#c9a84c]" />
                        ) : (
                          <Circle size={17} className="mt-0.5 shrink-0 text-[#94a3b8]" />
                        )}
                        <span className="text-sm leading-snug text-[#0a1628]">
                          <span className="font-semibold">{pick(r.doc, lang)}</span>
                          {!r.must && <span className="ml-1 text-[#64748b]">({t.ifAny.toLowerCase()})</span>}
                          <span className="mt-0.5 block text-xs text-[#64748b]">{pick(r.note, lang)}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#0a1628] to-[#1a4fa0] p-6 sm:flex-row">
            <p className="max-w-xl text-center text-sm text-white/80 sm:text-left">{t.cta}</p>
            <SuretyQuoteButton lang={lang} defaultType={tab} variant="gold" label={t.ctaBtn} />
          </div>
          <p className="mt-4 flex items-start justify-center gap-2 text-center text-xs text-[#64748b]">
            <Info size={13} className="mt-0.5 shrink-0" />
            {pick(REQUIREMENTS_DISCLAIMER, lang)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
