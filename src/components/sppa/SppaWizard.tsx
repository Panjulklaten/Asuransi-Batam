"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { flattenFields, visibleFieldNames, visibleSteps } from "@/lib/sppa/conditions";
import { validateDeclaration } from "@/lib/sppa/declaration";
import { getProduct, PRODUCT_LIST } from "@/lib/sppa/productConfig";
import type { ProductConfig, ProductId, StepId } from "@/lib/sppa/types";
import { requestedDocuments, validateStep, validateSubmission } from "@/lib/sppa/validation";
import { DeclarationStep } from "./DeclarationStep";
import { DocumentsInfoStep } from "./DocumentsInfoStep";
import { StepFields } from "./FieldRenderer";
import { ReviewStep } from "./ReviewStep";
import { StepProgress } from "./StepProgress";
import { SuccessView, type SubmitResult } from "./SuccessView";
import { btnPrimary, btnSecondary, cardCls, errCls } from "./ui";

type StepKey = "product" | StepId | "review" | "declaration";
type Values = Record<string, unknown>;

const DRAFT_KEY = "sppa-draft-v1";
const DRAFT_TTL = 7 * 24 * 3600 * 1000;

interface Draft { v: 1; productId: ProductId; values: Values; stepKey: StepKey; startedAt: number; savedAt: number }

const defaultsFor = (p: ProductConfig): Values => {
  const out: Values = {};
  for (const f of flattenFields(p)) if (f.defaultValue !== undefined) out[f.name] = f.defaultValue;
  return out;
};

/** NIK & NPWP tidak ikut disimpan di draft browser. */
function stripSensitive(p: ProductConfig, values: Values): Values {
  const out: Values = { ...values };
  for (const f of flattenFields(p)) {
    if (f.type === "nik" || f.type === "npwp") delete out[f.name];
    if (f.type === "repeatable" && Array.isArray(out[f.name])) {
      const sens = (f.items ?? []).filter((i) => i.type === "nik" || i.type === "npwp").map((i) => i.name);
      out[f.name] = (out[f.name] as Record<string, string>[]).map((r) => Object.fromEntries(Object.entries(r).filter(([k]) => !sens.includes(k))));
    }
  }
  return out;
}

export default function SppaWizard() {
  const [productId, setProductId] = useState<ProductId | null>(null);
  const [values, setValues] = useState<Values>({});
  const [stepKey, setStepKey] = useState<StepKey>("product");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [accepted, setAccepted] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [draft, setDraft] = useState<Draft | null>(null);
  const startedAt = useRef<number>(0);
  const honeypot = useRef<HTMLInputElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const product = getProduct(productId);

  useEffect(() => {
    startedAt.current = Date.now();
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      const d = JSON.parse(raw) as Draft;
      if (d?.v === 1 && getProduct(d.productId) && Date.now() - d.savedAt < DRAFT_TTL) setDraft(d);
      else localStorage.removeItem(DRAFT_KEY);
    } catch { /* localStorage tidak tersedia */ }
  }, []);

  // Simpan draft otomatis (tanpa NIK/NPWP).
  useEffect(() => {
    if (!product || result) return;
    const t = setTimeout(() => {
      try {
        const d: Draft = { v: 1, productId: product.id, values: stripSensitive(product, values), stepKey, startedAt: startedAt.current, savedAt: Date.now() };
        localStorage.setItem(DRAFT_KEY, JSON.stringify(d));
      } catch { /* abaikan */ }
    }, 600);
    return () => clearTimeout(t);
  }, [product, values, stepKey, result]);

  const steps = useMemo(() => {
    if (!product) return [{ key: "product" as StepKey, title: "Pilih Produk" }];
    return [
      { key: "product" as StepKey, title: "Pilih Produk" },
      ...visibleSteps(product, values).map((s) => ({ key: s.id as StepKey, title: s.title })),
      { key: "review" as StepKey, title: "Review Data" },
      { key: "declaration" as StepKey, title: "Pernyataan & Persetujuan" },
    ];
  }, [product, values]);

  const index = Math.max(0, steps.findIndex((s) => s.key === stepKey));
  const visible = useMemo(() => (product ? visibleFieldNames(flattenFields(product), values) : new Set<string>()), [product, values]);
  const currencyLabel = values.currency === "other" ? String(values.currencyOther || "…") : String(values.currency ?? "Rp");

  const scrollTop = () => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const go = (key: StepKey) => { setErrors({}); setSubmitError(""); setStepKey(key); setTimeout(scrollTop, 0); };

  const focusFirstError = (errs: Record<string, string>) => {
    const first = Object.keys(errs)[0];
    if (!first) return;
    const [name, i, item] = first.split(".");
    const id = item ? `f-${name}-${i}-${item}` : `f-${first}`;
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      (el as HTMLElement | null)?.focus?.({ preventScroll: true });
    }, 60);
  };

  const setField = useCallback((name: string, v: unknown) => {
    setValues((prev) => ({ ...prev, [name]: v }));
    setErrors((prev) => {
      if (!Object.keys(prev).some((k) => k === name || k.startsWith(`${name}.`))) return prev;
      return Object.fromEntries(Object.entries(prev).filter(([k]) => k !== name && !k.startsWith(`${name}.`)));
    });
  }, []);

  const chooseProduct = (p: ProductConfig) => {
    if (productId === p.id) return;
    if (productId && Object.keys(values).length > 0 && !window.confirm("Mengganti produk akan mengosongkan isian yang sudah diisi. Lanjutkan?")) return;
    setProductId(p.id);
    setValues(defaultsFor(p));
    setAccepted([]);
    setErrors({});
  };

  const restoreDraft = () => {
    if (!draft) return;
    const p = getProduct(draft.productId);
    if (!p) return;
    setProductId(p.id);
    setValues(draft.values);
    startedAt.current = draft.startedAt;
    setStepKey(draft.stepKey);
    setDraft(null);
    setTimeout(scrollTop, 0);
  };
  const discardDraft = () => { try { localStorage.removeItem(DRAFT_KEY); } catch { /* */ } setDraft(null); };

  const stepOfField = (name: string): StepKey => {
    if (!product) return "product";
    if (product.subTypeField?.name === name) return "product";
    return (product.steps.find((s) => s.fields.some((f) => f.name === name))?.id ?? "review") as StepKey;
  };

  const next = () => {
    if (!product) { setErrors({ product: "Pilih produk terlebih dahulu." }); return; }
    const nextKey = steps[index + 1]?.key;
    if (!nextKey) return;

    if (stepKey === "product") {
      const r = validateStep(product, "product", values);
      if (!r.ok) { setErrors(r.errors); focusFirstError(r.errors); return; }
    } else if (stepKey === "review") {
      const r = validateSubmission(product, values);
      if (!r.ok) {
        const firstKey = Object.keys(r.errors)[0];
        const target = stepOfField(firstKey.split(".")[0]);
        setStepKey(target);
        setErrors(r.errors);
        focusFirstError(r.errors);
        return;
      }
    } else if (stepKey !== "declaration") {
      const r = validateStep(product, stepKey, values);
      if (!r.ok) { setErrors(r.errors); focusFirstError(r.errors); return; }
    }
    go(nextKey);
  };

  const back = () => { const prev = steps[index - 1]?.key; if (prev) go(prev); };

  const submit = async () => {
    if (!product || submitting) return;
    const decErr = validateDeclaration(accepted);
    if (decErr) { setErrors({ declaration: decErr }); focusFirstError({ declaration: decErr }); return; }
    const full = validateSubmission(product, values);
    if (!full.ok) { go("review"); return; }

    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/sppa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product: product.id,
          values,
          declaration: { accepted },
          website: honeypot.current?.value ?? "",
          startedAt: startedAt.current,
        }),
      });
      const json = (await res.json().catch(() => null)) as (SubmitResult & { ok: boolean; message?: string; errors?: Record<string, string> }) | null;
      if (res.ok && json?.ok) {
        try { localStorage.removeItem(DRAFT_KEY); } catch { /* */ }
        setResult(json);
        setTimeout(scrollTop, 0);
        return;
      }
      if (json?.errors && Object.keys(json.errors).length) {
        const first = Object.keys(json.errors)[0].split(".")[0];
        if (first === "declaration") setErrors(json.errors);
        else { setStepKey(stepOfField(first)); setErrors(json.errors); focusFirstError(json.errors); }
      }
      setSubmitError(json?.message ?? "Pengajuan belum berhasil dikirim. Silakan coba lagi.");
    } catch {
      setSubmitError("Koneksi bermasalah. Periksa internet Anda lalu coba lagi. Data Anda masih tersimpan di halaman ini.");
    } finally {
      setSubmitting(false);
    }
  };

  if (result) return <div ref={topRef} className="scroll-mt-24"><SuccessView result={result} /></div>;

  const currentStep = product?.steps.find((s) => s.id === stepKey);
  const isLast = stepKey === "declaration";

  return (
    <div ref={topRef} className="scroll-mt-24 pb-24">
      {draft && stepKey === "product" && !product && (
        <div className="mb-5 rounded-xl border border-[#c9a84c] bg-[#c9a84c]/10 p-4" role="region" aria-label="Draft tersimpan">
          <p className="font-display font-bold text-[#0a1628]">Ada draft yang belum selesai</p>
          <p className="mt-1 text-sm text-[#475569]">
            {getProduct(draft.productId)?.label}, disimpan {new Intl.DateTimeFormat("id-ID", { dateStyle: "medium", timeStyle: "short" }).format(new Date(draft.savedAt))}. Untuk keamanan, NIK dan NPWP tidak ikut tersimpan dan perlu diisi ulang.
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <button type="button" onClick={restoreDraft} className={btnPrimary}>Lanjutkan draft</button>
            <button type="button" onClick={discardDraft} className={btnSecondary}>Hapus &amp; mulai baru</button>
          </div>
        </div>
      )}

      <StepProgress titles={steps.map((s) => s.title)} index={index} />

      <div className={`${cardCls} p-4 sm:p-6`}>
        {/* Honeypot anti-bot: tersembunyi dari pengguna & pembaca layar */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
          <label>Website<input ref={honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
        </div>

        {stepKey === "product" && (
          <div className="grid gap-4">
            <p className="text-sm text-[#475569]">Pilih jenis asuransi yang ingin Anda ajukan. Pertanyaan berikutnya akan menyesuaikan pilihan Anda. Tanda <span className="text-red-600">*</span> berarti wajib diisi.</p>
            <div className="grid gap-3" role="radiogroup" aria-label="Produk">
              {PRODUCT_LIST.map((p) => {
                const on = productId === p.id;
                return (
                  <label key={p.id} className={`flex items-start gap-3 rounded-xl border-2 p-4 cursor-pointer transition-colors ${on ? "border-[#c9a84c] bg-[#c9a84c]/10" : "border-[#e2e8f0] hover:border-[#c9a84c]/60"}`}>
                    <input type="radio" name="product" checked={on} onChange={() => chooseProduct(p)} className="mt-1 w-5 h-5 accent-[#c9a84c] shrink-0" />
                    <span><span className="block font-display font-bold text-[#0a1628]">{p.label}</span><span className="block text-sm text-[#475569]">{p.description}</span></span>
                  </label>
                );
              })}
            </div>
            {errors.product && <p role="alert" className={errCls}>{errors.product}</p>}
            {product?.subTypeField && (
              <StepFields fields={[product.subTypeField]} visible={visible} values={values} errors={errors} onChange={setField} currencyLabel={currencyLabel} />
            )}
          </div>
        )}

        {product && currentStep && stepKey !== "documents" && (
          <>
            {currentStep.description && <p className="mb-5 text-sm text-[#475569]">{currentStep.description}</p>}
            <StepFields fields={currentStep.fields} visible={visible} values={values} errors={errors} onChange={setField} currencyLabel={currencyLabel} />
          </>
        )}

        {product && stepKey === "documents" && (
          <DocumentsInfoStep docs={requestedDocuments(product, validateSubmission(product, values).values)} />
        )}

        {product && stepKey === "review" && <ReviewStep product={product} values={values} onEdit={(k) => go(k as StepKey)} />}

        {stepKey === "declaration" && <DeclarationStep accepted={accepted} onToggle={(id) => { setErrors({}); setAccepted((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id])); }} error={errors.declaration} />}
      </div>

      {submitError && (
        <div role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <p className="font-semibold">{submitError}</p>
          <a className="mt-1 inline-block underline" href={WHATSAPP_URL("Halo, saya kesulitan mengirim formulir SPPA di website.")} target="_blank" rel="noopener noreferrer">Hubungi kami via WhatsApp</a>
        </div>
      )}

      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_2fr] sm:grid-flow-dense">
        <button type="button" onClick={isLast ? submit : next} disabled={submitting || (stepKey === "product" && !productId)} className={`${btnPrimary} sm:col-start-2`}>
          {submitting ? "Mengirim…" : isLast ? "Submit SPPA" : "Lanjut"}
        </button>
        {index > 0 && <button type="button" onClick={back} disabled={submitting} className={`${btnSecondary} sm:col-start-1`}>Kembali</button>}
      </div>
      {index > 0 && <p className="mt-3 text-center text-xs text-[#64748b]">Isian Anda tersimpan otomatis di perangkat ini (kecuali NIK dan NPWP).</p>}
    </div>
  );
}


