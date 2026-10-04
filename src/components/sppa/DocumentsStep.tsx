"use client";

import { useRef } from "react";
import { evaluate } from "@/lib/sppa/conditions";
import type { ProductConfig } from "@/lib/sppa/types";
import type { UploadedDoc } from "./useUploads";
import { errCls, hintCls, labelCls } from "./ui";

interface Props {
  product: ProductConfig;
  values: Record<string, unknown>;
  docs: UploadedDoc[];
  busy: Record<string, boolean>;
  errors: Record<string, string>;
  stepError?: string;
  onUpload: (docKey: string, files: File[]) => void;
  onRemove: (doc: UploadedDoc) => void;
}

const kb = (n: number) => (n >= 1048576 ? `${(n / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(n / 1024))} KB`);

export function DocumentsStep({ product, values, docs, busy, errors, stepError, onUpload, onRemove }: Props) {
  const inputs = useRef<Record<string, HTMLInputElement | null>>({});
  const visible = product.documents.filter((d) => evaluate(d.showIf, values));

  return (
    <div className="grid gap-5">
      <p className="text-sm text-[#475569]">
        Format PDF, JPG, atau PNG, maksimal 8 MB per file. Dokumen bersifat rahasia dan hanya dipakai untuk proses pengajuan.
      </p>
      {stepError && <p role="alert" id="f-documents-err" className={errCls}>{stepError}</p>}
      {visible.map((d) => {
        const mine = docs.filter((x) => x.docKey === d.key);
        const id = `doc-${d.key}`;
        return (
          <div key={d.key} className="rounded-xl border-2 border-[#e2e8f0] p-4">
            <label htmlFor={id} className={labelCls}>
              {d.label}
              {d.required && <span className="text-red-600" aria-hidden="true"> *</span>}
              {!d.required && <span className="ml-2 text-xs font-normal text-[#64748b]">opsional</span>}
            </label>
            {d.hint && <span className={`${hintCls} mb-2`}>{d.hint}</span>}
            <input
              ref={(el) => { inputs.current[d.key] = el; }}
              id={id}
              type="file"
              className="sr-only"
              accept="application/pdf,image/jpeg,image/png"
              multiple={!!d.multiple}
              onChange={(e) => {
                const files = Array.from(e.target.files ?? []);
                e.target.value = "";
                if (files.length) onUpload(d.key, files);
              }}
            />
            <button type="button" disabled={busy[d.key] || (!d.multiple && mine.length > 0)} onClick={() => inputs.current[d.key]?.click()} className="w-full min-h-[48px] rounded-xl border-2 border-dashed border-[#c9a84c] font-display font-semibold text-[#0a1628] hover:bg-[#c9a84c]/10 transition disabled:opacity-50">
              {busy[d.key] ? "Mengunggah…" : d.multiple ? "Pilih file / ambil foto" : mine.length ? "Sudah diunggah" : "Pilih file / ambil foto"}
            </button>
            {errors[d.key] && <p role="alert" className={errCls}>{errors[d.key]}</p>}
            {mine.length > 0 && (
              <ul className="mt-3 grid gap-2">
                {mine.map((f) => (
                  <li key={f.path} className="flex items-center justify-between gap-3 rounded-lg bg-[#f8fafc] px-3 py-2">
                    <span className="min-w-0 text-sm text-[#0a1628]"><span className="block truncate font-medium">{f.name}</span><span className="text-xs text-[#64748b]">{kb(f.size)}</span></span>
                    <button type="button" onClick={() => onRemove(f)} className="min-h-[44px] shrink-0 px-3 text-sm font-semibold text-red-600 hover:underline" aria-label={`Hapus ${f.name}`}>Hapus</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
