// Format nilai jawaban menjadi teks yang mudah dibaca (dipakai review di UI dan email admin).
import type { Field, FieldValue, RepeatItem } from "./types";

export const maskId = (n: string) => (n.length > 6 ? `${n.slice(0, 4)}${"•".repeat(n.length - 6)}${n.slice(-2)}` : n);

export function formatValue(f: Field, v: FieldValue, currency: string, opts: { maskIds?: boolean } = {}): string {
  if (Array.isArray(v)) {
    if (f.type === "checkboxes") return v.map((x) => f.options?.find((o) => o.value === x)?.label ?? String(x)).join(", ");
    return (v as RepeatItem[])
      .map((r, i) => `${f.itemLabel ?? "Data"} ${i + 1}: ` + (f.items ?? [])
        .filter((it) => r[it.name])
        .map((it) => `${it.label} ${formatValue(it, r[it.name], currency, opts)}`)
        .join("; "))
      .join("\n");
  }
  switch (f.type) {
    case "yesno":
    case "select":
    case "radio":
      return f.options?.find((o) => o.value === v)?.label ?? v;
    case "money":
      return `${currency} ${Number(v).toLocaleString("id-ID")}`;
    case "date":
      return new Intl.DateTimeFormat("id-ID", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${v}T00:00:00Z`));
    case "tel":
      return `+${v}`;
    case "nik":
    case "npwp":
      return opts.maskIds ? maskId(v) : v;
    default:
      return v;
  }
}
