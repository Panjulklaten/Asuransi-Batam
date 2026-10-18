"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const NEON_ON =
  "0 0 0 1.5px rgba(77,163,255,0.95), 0 0 16px 2px rgba(45,123,255,0.65), 0 0 44px 6px rgba(45,123,255,0.35)";
const NEON_OFF =
  "0 0 0 1.5px rgba(77,163,255,0), 0 0 0px 0px rgba(45,123,255,0), 0 0 0px 0px rgba(45,123,255,0)";

/**
 * Cahaya biru neon di sekeliling kartu saat kartu berada di area tengah layar
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
      className="pointer-events-none absolute -inset-0.5 rounded-2xl"
      initial={false}
      animate={{
        opacity: on ? 1 : 0,
        boxShadow: on ? NEON_ON : NEON_OFF,
      }}
      transition={{ duration: reduce ? 0 : 0.6, ease: "easeOut" }}
    />
  );
}
