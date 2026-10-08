"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Landmark,
  Lock,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { RequirementsPanel } from "./QuoteRequirements";
import {
  QUOTE_CLUSTERS,
  buildQuoteMessage,
  compactRupiah,
  formatDigits,
  initialValues,
  isVisible,
  missingFields,
  pick,
  quoteWaUrl,
  type FieldDef,
  type Lang,
  type QuoteClusterKey,
  type QuoteState,
} from "@/lib/quote";

const T = {
  id: {
    selectPh: "Pilih",
    step1: "Kebutuhan",
    step2: "Data & Analisa",
    month: "Bulan",
    day: "Hari",
    name: "Nama lengkap",
    company: "Nama perusahaan",
    phone: "No. WhatsApp",
    phonePh: "08xxxxxxxxxx",
    optional: "opsional",
    analysis: "Bahan analisa awal",
    analysisHint: "Semakin lengkap informasinya, semakin cepat kami bisa memberi gambaran awal.",
    note: "Catatan tambahan",
    next: "Lanjut",
    back: "Kembali",
    cancel: "Batal",
    send: "Kirim via WhatsApp",
    privacy: "Data dikirim langsung lewat WhatsApp ke admin dan tidak disimpan di server website.",
    close: "Tutup",
    doneTitle: "WhatsApp sudah dibuka",
    doneBody:
      "Pesan permintaan penawaran Anda sudah terisi otomatis. Tinggal tekan kirim di WhatsApp, lalu admin akan membalas untuk analisa awal.",
    doneRetry: "Buka WhatsApp lagi",
    errRequired: "Wajib diisi.",
    errName: "Isi nama Anda.",
    errCompany: "Isi nama perusahaan.",
    errPhone: "Nomor WhatsApp belum valid.",
  },
  en: {
    step1: "Requirement",
    step2: "Details & Notes",
    month: "Months",
    day: "Days",
    name: "Full name",
    company: "Company name",
    phone: "WhatsApp number",
    phonePh: "08xxxxxxxxxx",
    optional: "optional",
    analysis: "Initial assessment notes",
    analysisHint: "The more complete the information, the faster we can give you an initial view.",
    note: "Additional notes",
    next: "Next",
    back: "Back",
    cancel: "Cancel",
    send: "Send via WhatsApp",
    privacy: "Details go straight to our admin via WhatsApp and are not stored on the website's server.",
    close: "Close",
    doneTitle: "WhatsApp is open",
    doneBody:
      "Your quote request message is pre-filled. Just press send in WhatsApp and our admin will reply with an initial assessment.",
    doneRetry: "Open WhatsApp again",
    errRequired: "Required.",
    errName: "Enter your name.",
    errCompany: "Enter your company name.",
    errPhone: "WhatsApp number looks invalid.",
  },
} as const;

const inputCls =
  "w-full rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-sm text-[#0a1628] placeholder:text-[#94a3b8] outline-none transition focus:border-[#c9a84c] focus:ring-4 focus:ring-[#c9a84c]/15";

const goldBtn =
  "btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c9a84c] to-[#f0d080] px-6 py-3 text-sm font-bold text-[#0a1628] shadow-lg shadow-[#c9a84c]/20 transition hover:shadow-xl hover:shadow-[#c9a84c]/30 active:scale-[0.98]";

function Field({
  label,
  error,
  optional,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  optional?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#475569]">
        {label}
        {optional && <span className="font-medium normal-case tracking-normal text-[#94a3b8]">({optional})</span>}
      </span>
      {children}
      {error && (
        <span role="alert" className="mt-1.5 block text-xs font-medium text-red-600">
          {error}
        </span>
      )}
    </label>
  );
}

export default function QuoteModal({
  cluster: clusterKey,
  lang,
  defaultType,
  onClose,
}: {
  cluster: QuoteClusterKey;
  lang: Lang;
  defaultType: string;
  onClose: () => void;
}) {
  const t = T[lang];
  const cluster = QUOTE_CLUSTERS[clusterKey];
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  const [step, setStep] = useState<1 | 2>(1);
  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<QuoteState>({
    type: cluster.types.some((x) => x.key === defaultType) ? defaultType : "unsure",
    values: initialValues(cluster),
    name: "",
    company: "",
    phone: "",
    targetDate: "",
    client: "",
    flags: [],
    note: "",
  });

  const setTop = <K extends keyof QuoteState>(k: K, v: QuoteState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k as string]) setErrors((e) => ({ ...e, [k as string]: "" }));
  };
  const setVal = (k: string, v: string) => {
    setForm((f) => ({ ...f, values: { ...f.values, [k]: v } }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  // Esc, fokus terkunci di dalam dialog, dan kunci scroll halaman
  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeRef.current();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === panelRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus();
    };
  }, []);

  const companyOptional = !!cluster.companyOptionalFor?.includes(form.type);

  const validateStep1 = () => {
    const e: Record<string, string> = {};
    for (const k of missingFields(cluster, form.type, form.values)) e[k] = t.errRequired;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t.errName;
    if (!companyOptional && !form.company.trim()) e.company = t.errCompany;
    if (form.phone.replace(/\D/g, "").length < 9) e.phone = t.errPhone;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validateStep2()) return;
    const url = quoteWaUrl(buildQuoteMessage(cluster, form, lang));
    setWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const toggleFlag = (k: string) =>
    setTop("flags", form.flags.includes(k) ? form.flags.filter((x) => x !== k) : [...form.flags, k]);

  const visibleFields = cluster.fields.filter((f) => isVisible(f, form.type));
  const visibleFlags = cluster.flags.filter((f) => isVisible(f, form.type));

  const stepper = (
    <ol className="mt-5 flex items-center gap-3" aria-label="Progress">
      {[t.step1, t.step2].map((label, i) => {
        const n = (i + 1) as 1 | 2;
        const done = sent || step > n;
        const active = !sent && step === n;
        return (
          <li key={label} className="flex flex-1 items-center gap-3 last:flex-none">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                done
                  ? "bg-[#c9a84c] text-[#0a1628]"
                  : active
                    ? "bg-white text-[#0a1628] ring-4 ring-[#c9a84c]/40"
                    : "bg-white/10 text-white/50"
              }`}
              aria-current={active ? "step" : undefined}
            >
              {done ? <Check size={15} /> : n}
            </span>
            <span className={`text-xs font-semibold ${active || done ? "text-white" : "text-white/50"}`}>{label}</span>
            {i === 0 && (
              <span className="relative hidden h-px flex-1 overflow-hidden bg-white/15 sm:block">
                <span
                  className="absolute inset-y-0 left-0 bg-[#c9a84c] transition-all duration-500"
                  style={{ width: step > 1 || sent ? "100%" : "0%" }}
                />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );

  const renderField = (f: FieldDef) => {
    const label = pick(f.label, lang);
    const opt = f.optional ? t.optional : undefined;
    const half = f.half ?? f.kind === "number";
    const span = half ? "" : "sm:col-span-2";
    const val = form.values[f.key] ?? "";

    switch (f.kind) {
      case "segmented": {
        const idx = Math.max(0, f.options.findIndex((o) => o.value === val));
        return (
          <fieldset key={f.key} className={span}>
            <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-[#475569]">{label}</legend>
            <div role="radiogroup" className="relative flex rounded-xl border border-[#e2e8f0] bg-white p-1">
              <span
                aria-hidden
                className="absolute inset-y-1 left-1 rounded-lg bg-[#0a1628] shadow transition-transform duration-300 ease-out"
                style={{
                  width: `calc((100% - 8px) / ${f.options.length})`,
                  transform: `translateX(${idx * 100}%)`,
                }}
              />
              {f.options.map((o) => {
                const Icon = o.icon === "gov" ? Landmark : o.icon === "private" ? Building2 : null;
                return (
                  <button
                    key={o.value}
                    type="button"
                    role="radio"
                    aria-checked={val === o.value}
                    onClick={() => setVal(f.key, o.value)}
                    className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                      val === o.value ? "text-[#f0d080]" : "text-[#475569] hover:text-[#0a1628]"
                    }`}
                  >
                    {Icon && <Icon size={16} />}
                    {pick(o.label, lang)}
                  </button>
                );
              })}
            </div>
          </fieldset>
        );
      }
      case "money":
        return (
          <Field key={f.key} label={label} error={errors[f.key]} optional={opt} className={span}>
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-[#a07830]">
                Rp
              </span>
              <input
                inputMode="numeric"
                autoComplete="off"
                className={`${inputCls} pl-11`}
                placeholder={pick(f.placeholder, lang)}
                value={formatDigits(val, lang)}
                onChange={(e) => setVal(f.key, e.target.value.replace(/\D/g, "").slice(0, 15))}
              />
            </div>
            {compactRupiah(val, lang) && (
              <span className="mt-1.5 block text-xs font-semibold text-[#a07830]">{compactRupiah(val, lang)}</span>
            )}
          </Field>
        );
      case "period": {
        const unitKey = `${f.key}_unit`;
        const unit = form.values[unitKey] ?? "month";
        return (
          <Field key={f.key} label={label} error={errors[f.key]} optional={opt} className={span}>
            <div className="flex gap-2">
              <input
                inputMode="numeric"
                autoComplete="off"
                className={inputCls}
                placeholder={pick(f.placeholder, lang)}
                value={val}
                onChange={(e) => setVal(f.key, e.target.value.replace(/\D/g, "").slice(0, 4))}
              />
              <div className="flex shrink-0 items-center rounded-xl border border-[#e2e8f0] bg-white p-1">
                {(["month", "day"] as const).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setVal(unitKey, u)}
                    aria-pressed={unit === u}
                    className={`rounded-lg px-3.5 py-2 text-xs font-bold transition-all ${
                      unit === u ? "bg-[#0a1628] text-[#f0d080] shadow" : "text-[#475569] hover:text-[#0a1628]"
                    }`}
                  >
                    {u === "month" ? t.month : t.day}
                  </button>
                ))}
              </div>
            </div>
          </Field>
        );
      }
      case "select":
        return (
          <Field key={f.key} label={label} error={errors[f.key]} optional={opt} className={span}>
            <div className="relative">
              <select
                className={`${inputCls} appearance-none pr-10 ${val ? "" : "text-[#94a3b8]"}`}
                value={val}
                onChange={(e) => setVal(f.key, e.target.value)}
              >
                <option value="">{pick(f.placeholder, lang)}</option>
                {f.options.map((o) => (
                  <option key={o.value} value={o.value} className="text-[#0a1628]">
                    {pick(o.label, lang)}
                  </option>
                ))}
              </select>
              <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b]" />
            </div>
          </Field>
        );
      case "number":
        return (
          <Field key={f.key} label={label} error={errors[f.key]} optional={opt} className={span}>
            <div className="relative">
              <input
                inputMode="numeric"
                autoComplete="off"
                className={`${inputCls} ${f.suffix ? "pr-16" : ""}`}
                placeholder={pick(f.placeholder, lang)}
                value={val}
                onChange={(e) => setVal(f.key, e.target.value.replace(/\D/g, "").slice(0, 6))}
              />
              {f.suffix && (
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#a07830]">
                  {pick(f.suffix, lang)}
                </span>
              )}
            </div>
          </Field>
        );
      default:
        return (
          <Field key={f.key} label={label} error={errors[f.key]} optional={opt} className={span}>
            <input
              className={inputCls}
              placeholder={pick(f.placeholder, lang)}
              value={val}
              onChange={(e) => setVal(f.key, e.target.value.slice(0, 120))}
            />
          </Field>
        );
    }
  };

  const modal = (
    <div
      className="sb-fade fixed inset-0 z-[100] flex items-end justify-center bg-[#0a1628]/70 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sq-title"
        className="sb-pop flex max-h-[100dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-[#faf8f3] shadow-2xl outline-none sm:max-h-[92vh] sm:rounded-3xl"
      >
        {/* Header */}
        <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#1a4fa0] px-5 pb-5 pt-6 sm:px-8">
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-[#c9a84c]/15 blur-2xl" />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:rotate-90 hover:bg-white/20"
          >
            <X size={18} />
          </button>
          <div className="flex items-start gap-3.5 pr-10">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#f0d080] text-[#0a1628] shadow-lg">
              <ShieldCheck size={22} />
            </span>
            <div>
              <h2 id="sq-title" className="font-display text-xl font-bold leading-tight text-white sm:text-2xl">
                {pick(cluster.copy.modalTitle, lang)}
              </h2>
              <p className="mt-1 text-sm text-white/70">{pick(cluster.copy.modalSubtitle, lang)}</p>
            </div>
          </div>
          {stepper}
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {sent ? (
            <div className="sb-rise mx-auto flex max-w-md flex-col items-center px-6 py-14 text-center">
              <span className="sb-pop mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#c9a84c] to-[#f0d080] text-[#0a1628] shadow-xl shadow-[#c9a84c]/30">
                <CheckCircle2 size={40} />
              </span>
              <h3 className="font-display text-2xl font-bold text-[#0a1628]">{t.doneTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">{t.doneBody}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className={goldBtn}>
                  <Send size={16} />
                  {t.doneRetry}
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl border border-[#cbd5e1] px-6 py-3 text-sm font-semibold text-[#475569] transition hover:border-[#0a1628] hover:text-[#0a1628]"
                >
                  {t.close}
                </button>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              {/* Form */}
              <div key={step} className="sb-rise space-y-5">
                {step === 1 ? (
                  <>
                    <fieldset>
                      <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-[#475569]">
                        {pick(cluster.typeLegend, lang)}
                      </legend>
                      <div role="radiogroup" className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {cluster.types.map((x) => {
                          const on = form.type === x.key;
                          return (
                            <button
                              key={x.key}
                              type="button"
                              role="radio"
                              aria-checked={on}
                              onClick={() => {
                                setTop("type", x.key);
                                setErrors({});
                              }}
                              className={`relative rounded-xl border-2 p-3 text-left transition-all ${
                                on
                                  ? "border-[#c9a84c] bg-[#c9a84c]/10 shadow-sm"
                                  : "border-[#e2e8f0] bg-white hover:border-[#c9a84c]/50"
                              }`}
                            >
                              {on && (
                                <span className="sb-pop absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#c9a84c] text-[#0a1628]">
                                  <Check size={12} />
                                </span>
                              )}
                              <span className="block pr-5 text-[13px] font-bold leading-tight text-[#0a1628]">
                                {pick(x.label, lang)}
                              </span>
                              <span className="mt-1 block text-[11px] leading-snug text-[#64748b]">
                                {pick(x.hint, lang)}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>

                    {/* Bidang menyesuaikan jenis produk yang dipilih */}
                    <div key={form.type} className="sb-rise grid gap-5 sm:grid-cols-2">
                      {visibleFields.map(renderField)}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label={t.name} error={errors.name}>
                        <input
                          className={inputCls}
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => setTop("name", e.target.value)}
                        />
                      </Field>
                      <Field
                        label={cluster.copy.companyLabel ? pick(cluster.copy.companyLabel, lang) : t.company}
                        optional={companyOptional ? t.optional : undefined}
                        error={errors.company}
                      >
                        <input
                          className={inputCls}
                          autoComplete="organization"
                          value={form.company}
                          onChange={(e) => setTop("company", e.target.value)}
                        />
                      </Field>
                      <Field label={t.phone} error={errors.phone}>
                        <input
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          className={inputCls}
                          placeholder={t.phonePh}
                          value={form.phone}
                          onChange={(e) => setTop("phone", e.target.value.replace(/[^\d+\s-]/g, ""))}
                        />
                      </Field>
                      <Field label={pick(cluster.copy.dateLabel, lang)} optional={t.optional}>
                        <input
                          type="date"
                          className={inputCls}
                          value={form.targetDate}
                          onChange={(e) => setTop("targetDate", e.target.value)}
                        />
                      </Field>
                    </div>

                    <Field label={pick(cluster.copy.clientLabel, lang)} optional={t.optional}>
                      <input
                        className={inputCls}
                        placeholder={pick(cluster.copy.clientPh, lang)}
                        value={form.client}
                        onChange={(e) => setTop("client", e.target.value)}
                      />
                    </Field>

                    <div>
                      <p className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#475569]">
                        <Sparkles size={13} className="text-[#c9a84c]" />
                        {t.analysis}
                      </p>
                      <p className="mb-3 text-xs text-[#64748b]">{t.analysisHint}</p>
                      <div className="flex flex-wrap gap-2">
                        {visibleFlags.map((f) => {
                          const on = form.flags.includes(f.key);
                          return (
                            <button
                              key={f.key}
                              type="button"
                              aria-pressed={on}
                              onClick={() => toggleFlag(f.key)}
                              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                                on
                                  ? "border-[#c9a84c] bg-[#c9a84c]/15 text-[#7a5c14]"
                                  : "border-[#e2e8f0] bg-white text-[#475569] hover:border-[#c9a84c]/60"
                              }`}
                            >
                              {on && <Check size={12} />}
                              {pick(f.label, lang)}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <Field label={t.note} optional={t.optional}>
                      <textarea
                        rows={4}
                        className={`${inputCls} resize-y`}
                        placeholder={pick(cluster.copy.notePh, lang)}
                        value={form.note}
                        onChange={(e) => setTop("note", e.target.value.slice(0, 600))}
                      />
                    </Field>
                  </>
                )}
                {step === 1 && form.type === "unsure" && (
                  <p className="rounded-xl border border-dashed border-[#c9a84c]/50 bg-[#c9a84c]/5 p-3 text-xs leading-relaxed text-[#7a5c14]">
                    {pick(cluster.copy.unsureNote, lang)}
                  </p>
                )}
              </div>

              {/* Persyaratan mengikuti jenis produk terpilih */}
              <aside className="lg:sticky lg:top-0 lg:self-start">
                <RequirementsPanel cluster={cluster} lang={lang} type={form.type} />
              </aside>
            </div>
          )}
        </div>

        {/* Footer */}
        {!sent && (
          <div className="shrink-0 border-t border-[#e2e8f0] bg-white px-5 py-4 sm:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-start gap-1.5 text-[11px] leading-snug text-[#64748b] sm:max-w-xs">
                <Lock size={12} className="mt-0.5 shrink-0" />
                {t.privacy}
              </p>
              <div className="flex gap-3 sm:justify-end">
                {step === 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-xl border border-[#cbd5e1] px-5 py-3 text-sm font-semibold text-[#475569] transition hover:border-[#0a1628] hover:text-[#0a1628]"
                    >
                      {t.cancel}
                    </button>
                    <button
                      type="button"
                      onClick={() => validateStep1() && setStep(2)}
                      className={`${goldBtn} flex-1 sm:flex-none`}
                    >
                      {t.next}
                      <ChevronRight size={16} />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-1 rounded-xl border border-[#cbd5e1] px-5 py-3 text-sm font-semibold text-[#475569] transition hover:border-[#0a1628] hover:text-[#0a1628]"
                    >
                      <ChevronLeft size={16} />
                      {t.back}
                    </button>
                    <button type="button" onClick={submit} className={`${goldBtn} flex-1 sm:flex-none`}>
                      <Send size={16} />
                      {t.send}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
