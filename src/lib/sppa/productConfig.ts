// Registry produk SPPA. Menambah produk baru (Property, Liability, Motor, ...):
// 1) buat src/lib/sppa/products/<produk>.ts yang mengekspor ProductConfig
// 2) tambahkan ke PRODUCTS di bawah dan ke enum CHECK di supabase/migrations
import { engineeringConfig } from "./products/engineering";
import { marineCargoConfig } from "./products/marineCargo";
import { marineHullConfig } from "./products/marineHull";
import { personalAccidentConfig } from "./products/personalAccident";
import type { ProductConfig, ProductId } from "./types";

/** Naikkan setiap kali struktur field berubah; disimpan bersama tiap pengajuan. */
export const SPPA_SCHEMA_VERSION = "2026-10-04.1";

export const PRODUCTS: Record<ProductId, ProductConfig> = {
  engineering: engineeringConfig,
  marine_hull: marineHullConfig,
  marine_cargo: marineCargoConfig,
  personal_accident: personalAccidentConfig,
};

export const PRODUCT_LIST: ProductConfig[] = Object.values(PRODUCTS);

export function getProduct(id: unknown): ProductConfig | null {
  return typeof id === "string" && Object.prototype.hasOwnProperty.call(PRODUCTS, id)
    ? PRODUCTS[id as ProductId]
    : null;
}
