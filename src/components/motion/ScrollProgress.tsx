"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Garis emas tipis di paling atas layar yang terisi sesuai progres scroll halaman. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[#c9a84c] to-[#f0d080]"
      style={{ scaleX }}
    />
  );
}
