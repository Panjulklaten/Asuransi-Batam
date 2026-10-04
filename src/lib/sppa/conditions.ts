import type { Condition, Field, ProductConfig, StepConfig } from "./types";

type Values = Record<string, unknown>;

const asText = (v: unknown): string => (typeof v === "string" ? v : "");

export function evaluate(cond: Condition | undefined, values: Values): boolean {
  if (!cond) return true;
  if ("all" in cond) return cond.all.every((c) => evaluate(c, values));
  if ("any" in cond) return cond.any.some((c) => evaluate(c, values));
  const v = values[cond.field];
  if ("equals" in cond) return v === cond.equals;
  if ("in" in cond) return typeof v === "string" && cond.in.includes(v);
  if ("includes" in cond) return Array.isArray(v) && (v as unknown[]).includes(cond.includes);
  if ("notEmpty" in cond) return Array.isArray(v) ? v.length > 0 : asText(v).trim() !== "";
  return false;
}

/** Semua field produk dalam urutan wizard: subType dulu, lalu tiap langkah. */
export function flattenFields(product: ProductConfig): Field[] {
  return [
    ...(product.subTypeField ? [product.subTypeField] : []),
    ...product.steps.flatMap((s) => s.fields),
  ];
}

/**
 * Langkah yang ditampilkan untuk jawaban saat ini: langkah berisi field harus punya minimal satu
 * field tampil; langkah tanpa field (mis. "documents") selalu tampil.
 */
export function visibleSteps(product: ProductConfig, values: Values): StepConfig[] {
  return product.steps.filter((s) => s.fields.length === 0 || s.fields.some((f) => evaluate(f.showIf, values)));
}
