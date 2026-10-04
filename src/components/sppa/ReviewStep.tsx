"use client";

import type { Field, FieldValue, ProductConfig, RepeatItem } from "@/lib/sppa/types";
import { evaluate } from "@/lib/sppa/conditions";
import { validateSubmission } from "@/lib/sppa/validation";
import type { UploadedDoc } from "./useUploads";
import { btnSecondary, cardCls } from "./ui";

interface Props {
  product: ProductConfig;
  values: Record<string, unknown>;
  docs: UploadedDoc[];
  onEdit: (stepKey: string) => void;
}

const mask = (n: string) => (n.length > 6 ? `${n.slice(0, 4)}${"•".repeat(n.length - 6)}${n.slice(-2)}` : n);

function fmt(f: Field, v: FieldValue, cur: string): string {
  if (Array.isArray(v)) {
    if (f.type === "checkboxes") return v.map((x) => f.options?.find((o) => o.value === x)?.label ?? String(x)).join(", ");
    return `${v.length} ${(f.itemLabel ?? "data").toLowerCase()}: ` + (v as RepeatItem[]).map((r) => r.name ?? "-").join(", ");
  }
  switch (f.type) {
    case "yesno":
    case "select":
    case "radio":
      return f.options?.find((o) => o.value === v)?.label ?? v;
    case "money":
      return `${cur} ${Number(v).toLocaleString("id-ID")}`;
    case "date":
      return new Intl.DateTimeFormat("id-ID", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${v}T00:00:00Z`));
    case "tel":
      return `+${v}`;
    case "nik":
    case "npwp":
      return mask(v);
    default:
      return v;
  }
}

export function ReviewStep({ product, values, docs, onEdit }: Props) {
  const res = validateSubmission(product, values);
  const clean = res.values;
  const cur = clean.currency === "other" ? String(clean.currencyOther ?? "") : String(clean.currency ?? "Rp");
  const issues = Object.keys(res.errors).length;

  const blocks: { key: string; title: string; fields: Field[] }[] = [
    ...(product.subTypeField ? [{ key: "product", title: "Produk", fields: [product.subTypeField] }] : []),
    ...product.steps.filter((s) => s.id !== "documents").map((s) => ({ key: s.id as string, title: s.title, fields: s.fields })),
  ];

  const visibleDocs = product.documents.filter((d) => evaluate(d.showIf, clean));

  return (
    <div className="grid gap-4">
      <p className="text-sm text-[#475569]">Periksa kembali data Anda. Tekan Edit pada bagian yang ingin diubah.</p>
      {issues > 0 && (
        <p role="alert" className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 font-medium">
          Masih ada {issues} isian yang belum lengkap atau tidak valid. Tekan Edit pada bagian terkait, atau tekan Lanjut untuk dibawa ke isian yang perlu diperbaiki.
        </p>
      )}

      <div className={`${cardCls} p-4`}>
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display font-bold text-[#0a1628]">Jenis Produk</h3>
          <button type="button" onClick={() => onEdit("product")} className={`${btnSecondary} !min-h-[44px] !py-2 !px-4 text-sm`}>Edit</button>
        </div>
        <p className="mt-2 font-semibold text-[#0a1628]">{product.label}</p>
      </div>

      {blocks.map((b) => {
        const rows = b.fields.filter((f) => clean[f.name] !== undefined && clean[f.name] !== "" && !(Array.isArray(clean[f.name]) && (clean[f.name] as unknown[]).length === 0));
        if (!rows.length) return null;
        let last: string | undefined;
        return (
          <div key={b.key} className={`${cardCls} p-4`}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display font-bold text-[#0a1628]">{b.title}</h3>
              <button type="button" onClick={() => onEdit(b.key)} className={`${btnSecondary} !min-h-[44px] !py-2 !px-4 text-sm`}>Edit</button>
            </div>
            <dl className="mt-3 grid gap-3">
              {rows.map((f) => {
                const heading = f.section && f.section !== last ? f.section : null;
                last = f.section ?? last;
                const hasErr = Object.keys(res.errors).some((k) => k === f.name || k.startsWith(`${f.name}.`));
                return (
                  <div key={f.name}>
                    {heading && <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#c9a84c]">{heading}</p>}
                    <dt className="text-xs text-[#64748b]">{f.label}</dt>
                    <dd className={`text-[15px] font-medium break-words whitespace-pre-line ${hasErr ? "text-red-600" : "text-[#0a1628]"}`}>{fmt(f, clean[f.name], cur)}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        );
      })}

      <div className={`${cardCls} p-4`}>
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display font-bold text-[#0a1628]">Dokumen</h3>
          <button type="button" onClick={() => onEdit("documents")} className={`${btnSecondary} !min-h-[44px] !py-2 !px-4 text-sm`}>Edit</button>
        </div>
        {docs.length === 0 ? (
          <p className="mt-2 text-sm text-[#64748b]">Belum ada dokumen diunggah. Anda dapat mengirimkannya kemudian melalui WhatsApp.</p>
        ) : (
          <ul className="mt-2 grid gap-1.5 text-sm text-[#0a1628]">
            {visibleDocs.map((d) => {
              const mine = docs.filter((x) => x.docKey === d.key);
              return mine.length ? <li key={d.key}><span className="font-semibold">{d.label}:</span> {mine.map((m) => m.name).join(", ")}</li> : null;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
