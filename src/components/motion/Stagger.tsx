"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Variant = "up" | "left" | "pop";

const itemVariants: Record<Variant, Variants> = {
  up: {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 20,
        opacity: { duration: 0.5, ease: "easeOut" },
      },
    },
  },
  left: {
    hidden: { opacity: 0, x: -28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 20,
        opacity: { duration: 0.5, ease: "easeOut" },
      },
    },
  },
  pop: {
    hidden: { opacity: 0, scale: 0.8, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 14,
        opacity: { duration: 0.4, ease: "easeOut" },
      },
    },
  },
};

/** Container: anak-anaknya (StaggerItem) muncul berurutan saat masuk layar. */
export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.09,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
      initial={reduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}) {
  return (
    <motion.div className={className} variants={itemVariants[variant]}>
      {children}
    </motion.div>
  );
}
