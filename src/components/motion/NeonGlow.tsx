"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Pendar hanya di sisi bawah kartu: offset ke bawah + spread negatif agar sisi kiri/kanan tetap bersih.
const NEON_ON =
  "0 12px 22px -10px rgba(45,123,255,0.60), 0 26px 46px -16px rgba(45,123,255,0.40)";
const NEON_OFF =
  "0 0px 0px 0px rgba(45,123,255,0), 0 0px 0px 0px rgba(45,123,255,0)";

/**
 * Bayangan biru neon di bawah kartu saat kartu berada di area tengah layar
 * (sekitar 30% tinggi layar di tengah), memudar lagi saat kartu menjauh.
 * Taruh sebagai anak pertama elemen kartu yang punya `relative`.
 */
export default function NeonGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { margin: "-35% 0px -35% 0px" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-2xl"
      initial={false}
      animate={{
        opacity: on ? 1 : 0,
        boxShadow: on ? NEON_ON : NEON_OFF,
      }}
      transition={{ duration: reduce ? 0 : 0.6, ease: "easeOut" }}
    />
  );
}
