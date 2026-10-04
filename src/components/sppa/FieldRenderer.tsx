"use client";

import { evaluate, visibleFieldNames } from "@/lib/sppa/conditions";
import type { Field, RepeatItem } from "@/lib/sppa/types";
import { errCls, fieldBase, fieldErr, fieldOk, hintCls, labelCls } from "./ui";

type Values = Record<string, unknown>;
type OnChange = (name: string, value: unknown) => void;

export const formatMoney = (digits: unknown) =>
  typeof digits === "string" && /^\d+$/.test(digits) ? Number(digits).toLocaleString("id-ID") : "";

interface FieldProps {
  field: Field;
  value: unknown;
  error?: string;
  errors?: Record<string, string>;
  onChange: OnChange;
  idPrefix?: string;
  currencyLabel?: string;
  computedSum?: number;
  allValues?: Values;
}

function Label({ field, id }: { field: Field; id: string }) {
  return (
    <label htmlFor={id} className={labelCls}>
      {field.label}
      {field.required && <span className="text-red-600" aria-hidden="true"> *</span>}
    </label>
  );
}

export function FieldRenderer(props: FieldProps) {
  const { field, value, error, onChange, idPrefix = "", currencyLabel = "Rp", computedSum, allValues } = props;
  const id = `f-${idPrefix}${field.name}`;
  const describedBy = [error ? `${id}-err` : "", field.hint ? `${id}-hint` : ""].filter(Boolean).join(" ") || undefined;
  const text = typeof value === "string" ? value : "";
  const cls = `${fieldBase} ${error ? fieldErr : fieldOk}`;
  const common = { id, "aria-invalid": error ? true : undefined, "aria-describedby": describedBy } as const;
  const set = (v: unknown) => onChange(field.name, v);

  let control: React.ReactNode = null;

  switch (field.type) {
    case "repeatable":
      return <RepeatableField {...props} id={id} />;

    case "textarea":
      control = <textarea {...common} rows={3} className={cls} value={text} maxLength={field.maxLength ?? 2000} onChange={(e) => set(e.target.value)} />;
      break;

    case "select":
      control = (
        <select {...common} className={`${cls} appearance-auto`} value={text} onChange={(e) => set(e.target.value)}>
          <option value="">Pilih…</option>
          {field.options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      );
      break;

    case "radio":
    case "yesno": {
      const two = field.type === "yesno";
      return (
        <fieldset aria-describedby={describedBy} id={id}>
          <legend className={labelCls}>
            {field.label}
            {field.required && <span className="text-red-600" aria-hidden="true"> *</span>}
          </legend>
          <div className={two ? "grid grid-cols-2 gap-3" : "grid gap-2.5"} role="radiogroup">
            {field.options?.map((o) => {
              const on = text === o.value;
              return (
                <label key={o.value} className={`flex items-center gap-3 min-h-[48px] px-4 py-2.5 rounded-xl border-2 cursor-pointer transition-colors ${on ? "border-[#c9a84c] bg-[#c9a84c]/10" : error ? "border-red-300 bg-white" : "border-[#e2e8f0] bg-white hover:border-[#c9a84c]/60"}`}>
                  <input type="radio" name={id} value={o.value} checked={on} onChange={() => set(o.value)} className="w-5 h-5 accent-[#c9a84c] shrink-0" />
                  <span className="text-[15px] font-medium text-[#0a1628]">{o.label}</span>
                </label>
              );
            })}
          </div>
          <Foot id={id} hint={field.hint} error={error} />
        </fieldset>
      );
    }

    case "checkboxes": {
      const selected = Array.isArray(value) ? (value as string[]) : [];
      return (
        <fieldset aria-describedby={describedBy} id={id}>
          <legend className={labelCls}>
            {field.label}
            {field.required && <span className="text-red-600" aria-hidden="true"> *</span>}
          </legend>
          <div className="grid gap-2.5">
            {field.options?.map((o) => {
              const on = selected.includes(o.value);
              return (
                <label key={o.value} className={`flex items-center gap-3 min-h-[48px] px-4 py-2.5 rounded-xl border-2 cursor-pointer transition-colors ${on ? "border-[#c9a84c] bg-[#c9a84c]/10" : error ? "border-red-300 bg-white" : "border-[#e2e8f0] bg-white hover:border-[#c9a84c]/60"}`}>
                  <input type="checkbox" checked={on} onChange={() => set(on ? selected.filter((x) => x !== o.value) : [...selected, o.value])} className="w-5 h-5 accent-[#c9a84c] shrink-0" />
                  <span className="text-[15px] font-medium text-[#0a1628]">{o.label}</span>
                </label>
              );
            })}
          </div>
          <Foot id={id} hint={field.hint} error={error} />
        </fieldset>
      );
    }

    case "money": {
      const readOnly = !!field.sumOf;
      const shown = readOnly ? (computedSum ? computedSum.toLocaleString("id-ID") : "0") : formatMoney(text);
      control = (
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#475569] pointer-events-none">{currencyLabel}</span>
          <input
            {...common}
            type="text"
            inputMode="numeric"
            autoComplete="off"
            className={`${cls} ${readOnly ? "bg-[#f8fafc] font-bold" : ""}`}
            style={{ paddingLeft: `${16 + currencyLabel.length * 9 + 10}px` }}
            value={shown}
            placeholder={field.placeholder}
            readOnly={readOnly}
            onChange={(e) => set(e.target.value.replace(/\D/g, "").slice(0, 16))}
          />
        </div>
      );
      break;
    }

    case "number":
      control = <input {...common} type="text" inputMode="decimal" autoComplete="off" className={cls} value={text} placeholder={field.placeholder} onChange={(e) => set(e.target.value.replace(/[^\d.,]/g, "").slice(0, 20))} />;
      break;

    case "year":
      control = <input {...common} type="text" inputMode="numeric" autoComplete="off" maxLength={4} placeholder="mis. 2015" className={cls} value={text} onChange={(e) => set(e.target.value.replace(/\D/g, ""))} />;
      break;

    case "nik":
      control = <input {...common} type="text" inputMode="numeric" autoComplete="off" maxLength={16} placeholder="16 digit" className={cls} value={text} onChange={(e) => set(e.target.value.replace(/\D/g, ""))} />;
      break;

    case "npwp":
      control = <input {...common} type="text" inputMode="numeric" autoComplete="off" maxLength={24} placeholder={field.placeholder} className={cls} value={text} onChange={(e) => set(e.target.value.replace(/[^\d.\- ]/g, ""))} />;
      break;

    case "date": {
      const min = field.notBefore && typeof allValues?.[field.notBefore] === "string" ? (allValues[field.notBefore] as string) : undefined;
      const max = field.notFuture ? new Date().toISOString().slice(0, 10) : undefined;
      control = <input {...common} type="date" min={min || undefined} max={max} className={cls} value={text} onChange={(e) => set(e.target.value)} />;
      break;
    }

    case "email":
      control = <input {...common} type="email" inputMode="email" autoComplete="email" autoCapitalize="none" className={cls} value={text} placeholder={field.placeholder} onChange={(e) => set(e.target.value)} />;
      break;

    case "tel":
      control = <input {...common} type="tel" inputMode="tel" autoComplete="tel" className={cls} value={text} placeholder={field.placeholder} onChange={(e) => set(e.target.value.replace(/[^\d+\-\s()]/g, "").slice(0, 20))} />;
      break;

    case "url":
      control = <input {...common} type="text" inputMode="url" autoCapitalize="none" autoComplete="url" className={cls} value={text} placeholder={field.placeholder} onChange={(e) => set(e.target.value)} />;
      break;

    default:
      control = <input {...common} type="text" className={cls} value={text} placeholder={field.placeholder} maxLength={field.maxLength ?? 200} onChange={(e) => set(e.target.value)} />;
  }

  return (
    <div>
      <Label field={field} id={id} />
      {control}
      <Foot id={id} hint={field.hint} error={error} />
    </div>
  );
}

function Foot({ id, hint, error }: { id: string; hint?: string; error?: string }) {
  return (
    <>
      {hint && <span id={`${id}-hint`} className={hintCls}>{hint}</span>}
      {error && <p id={`${id}-err`} role="alert" className={errCls}>{error}</p>}
    </>
  );
}

function RepeatableField({ field, value, error, errors, onChange, idPrefix = "", id }: FieldProps & { id: string }) {
  const rows = Array.isArray(value) ? (value as RepeatItem[]) : [];
  const max = field.maxItems ?? 200;
  const setRow = (i: number, name: string, v: unknown) =>
    onChange(field.name, rows.map((r, j) => (j === i ? { ...r, [name]: String(v ?? "") } : r)));

  return (
    <fieldset id={id}>
      <legend className={labelCls}>
        {field.label}
        {field.required && <span className="text-red-600" aria-hidden="true"> *</span>}
      </legend>
      <div className="grid gap-4">
        {rows.map((row, i) => (
          <div key={i} className="rounded-xl border-2 border-[#e2e8f0] bg-[#faf8f3] p-4 grid gap-4">
            <div className="flex items-center justify-between">
              <p className="font-display font-bold text-[#0a1628]">{field.itemLabel ?? "Data"} {i + 1}</p>
              <button type="button" onClick={() => onChange(field.name, rows.filter((_, j) => j !== i))} className="min-h-[44px] px-3 text-sm font-semibold text-red-600 hover:underline">
                Hapus
              </button>
            </div>
            {field.items?.filter((it) => evaluate(it.showIf, row)).map((it) => (
              <FieldRenderer
                key={it.name}
                field={it}
                value={row[it.name]}
                error={errors?.[`${field.name}.${i}.${it.name}`]}
                onChange={(n, v) => setRow(i, n, v)}
                idPrefix={`${idPrefix}${field.name}-${i}-`}
                allValues={row}
              />
            ))}
          </div>
        ))}
      </div>
      {rows.length < max && (
        <button type="button" onClick={() => onChange(field.name, [...rows, {}])} className="mt-3 w-full min-h-[48px] rounded-xl border-2 border-dashed border-[#c9a84c] text-[#0a1628] font-display font-semibold hover:bg-[#c9a84c]/10 transition">
          + Tambah {(field.itemLabel ?? "data").toLowerCase()}
        </button>
      )}
      <Foot id={id} hint={field.hint} error={error} />
    </fieldset>
  );
}

interface StepFieldsProps {
  fields: Field[];
  visible: Set<string>;
  values: Values;
  errors: Record<string, string>;
  onChange: OnChange;
  currencyLabel: string;
}

/** Render field-field satu langkah, dikelompokkan per `section`. */
export function StepFields({ fields, visible, values, errors, onChange, currencyLabel }: StepFieldsProps) {
  const shown = fields.filter((f) => visible.has(f.name));
  const sumOf = (f: Field) =>
    (f.sumOf ?? []).reduce((acc, n) => acc + (visible.has(n) && typeof values[n] === "string" ? Number(values[n]) || 0 : 0), 0);

  let lastSection: string | undefined;
  return (
    <div className="grid gap-5">
      {shown.map((f) => {
        const heading = f.section && f.section !== lastSection ? f.section : null;
        lastSection = f.section ?? lastSection;
        return (
          <div key={f.name} className="grid gap-5">
            {heading && <h3 className="font-display font-bold text-[#0a1628] text-lg pt-2 border-t border-[#e2e8f0] first:border-0 first:pt-0">{heading}</h3>}
            <FieldRenderer
              field={f}
              value={values[f.name]}
              error={errors[f.name]}
              errors={errors}
              onChange={onChange}
              currencyLabel={currencyLabel}
              computedSum={f.sumOf ? sumOf(f) : undefined}
              allValues={values}
            />
          </div>
        );
      })}
    </div>
  );
}

export { visibleFieldNames };
