"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export type FieldPhoto = {
  src: string;
  alt: string;
  caption: string;
  desc: string;
};

function PhotoCard({ photo, index }: { photo: FieldPhoto; index: number }) {
  const reduce = !!useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);

  // Saat kartu melintasi layar, foto bergeser ke samping dan zoom perlahan.
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1.1]);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 36, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8,
        delay: (index % 3) * 0.1,
        opacity: { duration: 0.6, ease: "easeOut" },
      }}
      className="group overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white transition-shadow duration-300 hover:shadow-xl"
    >
      <div ref={frameRef} className="relative aspect-[4/3] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={reduce ? undefined : { x, scale }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="p-5">
        <p className="mb-1 font-display font-bold text-[#0a1628]">{photo.caption}</p>
        <p className="text-sm leading-relaxed text-[#475569]">{photo.desc}</p>
      </div>
    </motion.div>
  );
}

export default function FieldGallery({ photos }: { photos: FieldPhoto[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo, i) => (
        <PhotoCard key={photo.src} photo={photo} index={i} />
      ))}
    </div>
  );
}
