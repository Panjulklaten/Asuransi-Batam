"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** Jeda sebelum mulai (detik). */
  delay?: number;
  x?: number;
  y?: number;
};

/** Muncul perlahan (fade + slide) satu kali saat masuk layar. */
export function Reveal({ children, className, delay = 0, x = 0, y = 28 }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 20,
        delay,
        opacity: { duration: 0.6, delay, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  );
}
