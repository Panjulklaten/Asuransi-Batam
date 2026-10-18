"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  type AnimationPlaybackControls,
} from "framer-motion";
import { Star } from "lucide-react";

export type Testimonial = {
  name: string;
  company: string;
  text: string;
  rating: number;
};

type Props = {
  items: Testimonial[];
  /** Kecepatan dalam piksel per detik. Makin kecil makin pelan. */
  speed?: number;
};

const MIN_CARDS_PER_SET = 8;
const SET_CLASS = "flex shrink-0 gap-4 pr-4 md:gap-6 md:pr-6";

// Ulangi item sampai satu set cukup lebar untuk menutupi layar ultra-wide,
// supaya tidak ada celah kosong saat loop.
function fillTo(items: Testimonial[], min: number) {
  if (items.length === 0) return [];
  const out: Testimonial[] = [];
  while (out.length < min) out.push(...items);
  return out;
}

function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex w-[280px] shrink-0 flex-col justify-between rounded-2xl border border-[#e2e8f0] bg-[#faf8f3] p-5 sm:w-[320px] sm:p-6 lg:w-[360px] lg:p-7">
      <div>
        <div className="mb-3 flex text-[#c9a84c] sm:mb-4">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mb-5 text-sm italic leading-relaxed text-[#475569]">
          &ldquo;{t.text}&rdquo;
        </p>
      </div>
      <div>
        <div className="font-display font-bold text-[#0a1628]">{t.name}</div>
        <div className="text-sm text-[#8a6d1f]">{t.company}</div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  speed,
  inView,
  reduce,
}: {
  items: Testimonial[];
  direction: "left" | "right";
  speed: number;
  inView: boolean;
  reduce: boolean;
}) {
  const setRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);
  const [duration, setDuration] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Track berisi dua set identik, jadi -50% = tepat satu set: loop tanpa lompatan.
  const x = useMotionValue(direction === "right" ? "-50%" : "0%");
  const cards = useMemo(() => fillTo(items, MIN_CARDS_PER_SET), [items]);

  // Durasi dihitung dari lebar satu set agar kecepatan (px/detik) konstan.
  useEffect(() => {
    const el = setRef.current;
    if (!el) return;
    const measure = () => setDuration(Math.round(el.offsetWidth / speed));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [speed, cards]);

  useEffect(() => {
    if (reduce || !duration) return;
    const from = direction === "right" ? "-50%" : "0%";
    const to = direction === "right" ? "0%" : "-50%";
    x.set(from);
    const controls = animate(x, [from, to], {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
    controls.pause();
    controlsRef.current = controls;
    return () => {
      controls.stop();
      controlsRef.current = null;
    };
  }, [duration, direction, reduce, x]);

  // Jalan hanya saat bagian terlihat; pause saat kursor di atas baris (desktop).
  const running = inView && !hovered && !reduce;
  useEffect(() => {
    const c = controlsRef.current;
    if (!c) return;
    if (running) c.play();
    else c.pause();
  }, [running, duration]);

  if (reduce) {
    return (
      <div className="overflow-x-auto px-4 pb-2">
        <div className="flex w-max gap-4 md:gap-6">
          {items.map((t) => (
            <ReviewCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
    >
      <motion.div className="flex w-max will-change-transform" style={{ x }}>
        <div ref={setRef} className={SET_CLASS}>
          {cards.map((t, i) => (
            <div key={`a-${i}`} className="flex" aria-hidden={i >= items.length}>
              <ReviewCard t={t} />
            </div>
          ))}
        </div>
        <div className={SET_CLASS} aria-hidden="true">
          {cards.map((t, i) => (
            <div key={`b-${i}`} className="flex">
              <ReviewCard t={t} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function TestimonialMarquee({ items, speed = 40 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: "some" });
  const reduce = !!useReducedMotion();

  const rows = useMemo(() => {
    if (items.length >= 6) {
      const mid = Math.ceil(items.length / 2);
      return [items.slice(0, mid), items.slice(mid)];
    }
    // Baris bawah memakai urutan yang digeser agar tidak identik dengan baris atas.
    return [items, [...items.slice(1), ...items.slice(0, 1)]];
  }, [items]);

  return (
    <div ref={ref} className="space-y-4 md:space-y-6">
      <MarqueeRow items={rows[0]} direction="right" speed={speed} inView={inView} reduce={reduce} />
      <MarqueeRow items={rows[1]} direction="left" speed={speed} inView={inView} reduce={reduce} />
    </div>
  );
}
