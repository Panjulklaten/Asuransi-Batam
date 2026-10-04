"use client";

import type { Field, ProductConfig } from "@/lib/sppa/types";
import { requestedDocuments, validateSubmission } from "@/lib/sppa/validation";
import { formatValue } from "@/lib/sppa/format";
import { btnSecondary, cardCls } from "./ui";

interface Props {
  product: ProductConfig;
  values: Record<string, unknown>;
  onEdit: (stepKey: string) => void;
}

export function ReviewStep({ product, values, onEdit }: Props) {
  const res = validateSubmission(product, values);
  const clean = res.values;
  const cur = clean.currency === "other" ? String(clean.currencyOther ?? "") : String(clean.currency ?? "Rp");
  const issues = Object.keys(res.errors).length;

  const blocks: { key: string; title: string; fields: Field[] }[] = [
    ...(product.subTypeField ? [{ key: "product", title: "Produk", fields: [product.subTypeField] }] : []),
    ...product.steps.filter((s) => s.id !== "documents").map((s) => ({ key: s.id as string, title: s.title, fields: s.fields })),
  ];

  const docs = requestedDocuments(product, clean);

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
                    <dd className={`text-[15px] font-medium break-words whitespace-pre-line ${hasErr ? "text-red-600" : "text-[#0a1628]"}`}>{formatValue(f, clean[f.name], cur, { maskIds: true })}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        );
      })}

      {docs.length > 0 && (
        <div className={`${cardCls} p-4`}>
          <h3 className="font-display font-bold text-[#0a1628]">Dokumen yang dikirim via WhatsApp</h3>
          <p className="mt-1 text-sm text-[#475569]">Setelah SPPA terkirim, kirimkan dokumen berikut ke WhatsApp kami.</p>
          <ul className="mt-2 grid gap-1.5 text-sm text-[#0a1628] list-disc pl-5">
            {docs.map((d) => <li key={d.key}>{d.label}{d.required && <span className="font-semibold"> (wajib)</span>}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
