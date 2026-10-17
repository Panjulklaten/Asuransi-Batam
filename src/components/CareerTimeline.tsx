"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type Stop = {
  role: string;
  org: string;
  period: string;
  duration: string;
  location: string;
  desc: string;
  logo?: string;
  current?: boolean;
};

const stops: Stop[] = [
  {
    role: "Account Officer",
    org: "PT Asuransi Umum Bumida 1967",
    period: "Feb 2013 – Agu 2016",
    duration: "3 thn 7 bln",
    location: "Batam, Kepulauan Riau",
    desc: "Terjun langsung di lapangan Batam — dari galangan kapal hingga kawasan industri FTZ, belajar memahami risiko dari sisi nasabah, bukan dari balik meja.",
    logo: "/images/logos/bumida.png",
  },
  {
    role: "Sales & Marketing Specialist",
    org: "PT Asuransi Purna Artanugraha (ASPAN)",
    period: "Sep 2016 – Agu 2021",
    duration: "4 thn 11 bln",
    location: "Bengkulu",
    desc: "Menangani portofolio klien yang makin beragam — dari pemilik usaha kecil hingga korporat, mengasah kemampuan mencocokkan produk dengan kebutuhan riil, bukan sekadar menjual polis.",
    logo: "/images/logos/aspan.png",
  },
  {
    role: "Branch Manager",
    org: "PT Asuransi Purna Artanugraha (ASPAN)",
    period: "Sep 2021 – Agu 2022",
    duration: "11 bln",
    location: "Bengkulu",
    desc: "Memegang tanggung jawab penuh atas operasional cabang — mulai dari target tim hingga memastikan klaim nasabah benar-benar tuntas, bukan cuma diajukan.",
    logo: "/images/logos/aspan.png",
  },
  {
    role: "Praktisi Asuransi Digital",
    org: "Asuransi Batam",
    period: "Agu 2022 – Sekarang",
    duration: "4 thn",
    location: "Batam, Kepulauan Riau",
    desc: "Menggabungkan pengalaman lapangan dengan platform digital — melayani klien Batam dan Kepulauan Riau, dari asuransi kendaraan pribadi hingga liability industri dan proyek kawasan FTZ.",
    current: true,
  },
];

const GOLD = "#c9a84c";
const GOLD_LIGHT = "#f0d080";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function CareerTimeline() {
  const reduce = !!useReducedMotion();

  const listRef = useRef<HTMLOListElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [geo, setGeo] = useState<{ top: number; height: number; stops: number[] }>({
    top: 0,
    height: 0,
    stops: [],
  });
  const [active, setActive] = useState(-1);

  // Ukur posisi tiap node: garis berjalan dari pusat node pertama ke pusat node
  // terakhir, dan tiap node tahu di progres berapa garis "menyentuhnya".
  const measure = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const base = list.getBoundingClientRect().top;
    const centers = nodeRefs.current.slice(0, stops.length).map((n) => {
      if (!n) return 0;
      const r = n.getBoundingClientRect();
      return r.top - base + r.height / 2;
    });
    const first = centers[0] ?? 0;
    const height = (centers[centers.length - 1] ?? 0) - first;
    setGeo({
      top: first,
      height,
      stops: centers.map((c) => (height > 0 ? (c - first) / height : 0)),
    });
  }, []);

  useIsoLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (listRef.current) ro.observe(listRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  // Ujung garis selalu berada di 60% tinggi layar.
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 0.6", "end 0.6"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
    restDelta: 0.0005,
  });
  const progress = reduce ? scrollYProgress : smooth;

  const fill = useTransform(progress, [0, 1], [0, 1]);
  const tipTop = useTransform(
    progress,
    (v) => `${Math.min(Math.max(v, 0), 1) * 100}%`
  );
  const tipOpacity = useTransform(progress, [0, 0.01, 0.99, 1], [0, 1, 1, 0]);

  const evaluate = useCallback(
    (v: number) => {
      if (!geo.height) return;
      let n = -1;
      geo.stops.forEach((s, i) => {
        if (v > 0.0005 && v >= s - 0.002) n = i;
      });
      setActive(n);
    },
    [geo]
  );
  useMotionValueEvent(progress, "change", evaluate);
  useEffect(() => {
    evaluate(progress.get());
  }, [evaluate, progress]);

  const cardTransition = reduce
    ? { duration: 0 }
    : {
        type: "spring" as const,
        stiffness: 110,
        damping: 20,
        mass: 0.8,
        opacity: { duration: 0.55, ease: "easeOut" as const },
      };

  return (
    <div className="relative">
      <ol ref={listRef} className="relative space-y-10">
        {/* garis vertikal: dasar + bagian aktif */}
        <div
          ref={lineRef}
          aria-hidden="true"
          className="absolute left-8 w-[3px] -translate-x-1/2 rounded-full bg-[#c9a84c]/20"
          style={{ top: geo.top, height: geo.height }}
        >
          <motion.div
            className="absolute inset-0 origin-top rounded-full"
            style={{
              scaleY: fill,
              background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_LIGHT})`,
              boxShadow: `0 0 10px ${GOLD}99`,
            }}
          />
          {/* titik cahaya di ujung garis */}
          <motion.div
            className="absolute left-1/2 h-3 w-3 rounded-full"
            style={{
              top: tipTop,
              x: "-50%",
              y: "-50%",
              opacity: tipOpacity,
              background: GOLD_LIGHT,
              boxShadow: `0 0 14px 3px ${GOLD}`,
            }}
          />
        </div>

        {stops.map((s, i) => {
          const isActive = i <= active;
          return (
            <li key={s.role + s.period} className="relative pl-20">
              {/* node */}
              <div
                ref={(el) => {
                  nodeRefs.current[i] = el;
                }}
                className="absolute left-0 top-0 h-16 w-16"
              >
                {/* cincin denyut singkat */}
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full"
                  style={{ background: GOLD }}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={
                    isActive && !reduce
                      ? { opacity: [0.5, 0], scale: [1, 1.9] }
                      : { opacity: 0, scale: 1 }
                  }
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
                <motion.div
                  className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-4 ${
                    s.current ? "bg-[#0a1628]" : "bg-white"
                  }`}
                  initial={false}
                  animate={{
                    scale: isActive && !reduce ? [1, 1.18, 1] : 1,
                    borderColor: isActive ? GOLD : "#e2d3a3",
                    boxShadow: isActive
                      ? "0 0 0 5px rgba(201,168,76,0.18), 0 0 24px rgba(201,168,76,0.55)"
                      : "0 1px 3px rgba(0,0,0,0.12), 0 0 0 0 rgba(201,168,76,0)",
                  }}
                  transition={{
                    scale: { duration: 0.6, ease: "easeOut" },
                    default: { duration: 0.4, ease: "easeOut" },
                  }}
                >
                  {s.logo ? (
                    <Image
                      src={s.logo}
                      alt={`Logo ${s.org}`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  ) : (
                    <span className="font-display text-lg font-bold text-[#c9a84c]">
                      R
                    </span>
                  )}
                </motion.div>
              </div>

              {/* kartu: muncul dari node ke kanan (tanpa overflow horizontal di mobile) */}
              <motion.div
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, scale: 0.95, x: -28 },
                  visible: { opacity: 1, scale: 1, x: 0 },
                }}
                transition={cardTransition}
                style={{ transformOrigin: "left center" }}
                className={`rounded-2xl border p-5 ${
                  s.current
                    ? "border-[#c9a84c]/40 bg-[#0a1628]"
                    : "border-[#e2e8f0] bg-[#faf8f3]"
                }`}
              >
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3
                    className={`font-display text-lg font-bold ${
                      s.current ? "text-white" : "text-[#0a1628]"
                    }`}
                  >
                    {s.role}
                  </h3>
                  <span className="rounded-full bg-[#c9a84c] px-2.5 py-0.5 text-xs font-semibold text-[#0a1628]">
                    {s.duration}
                  </span>
                </div>
                <p
                  className={`mb-1 text-sm font-medium ${
                    s.current ? "text-[#f0d080]" : "text-[#1a4fa0]"
                  }`}
                >
                  {s.org}
                </p>
                <p
                  className={`mb-2 text-xs ${
                    s.current ? "text-white/50" : "text-[#94a3b8]"
                  }`}
                >
                  {s.period} · {s.location}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    s.current ? "text-white/80" : "text-[#475569]"
                  }`}
                >
                  {s.desc}
                </p>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
