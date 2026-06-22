"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Briefcase, Star, Users } from "lucide-react";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  description: string;
  iconClass: string;
  glowClass: string;
}

const stats: Stat[] = [
  {
    icon: Star,
    value: 6,
    suffix: "+",
    label: "Years of Experience",
    description: "Professional Unity development",
    iconClass: "text-amber-400",
    glowClass: "shadow-[0_0_18px_rgba(251,191,36,0.25)]",
  },
  {
    icon: Trophy,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    description: "Across Mobile, PC & WebGL",
    iconClass: "text-purple-400",
    glowClass: "shadow-[0_0_18px_rgba(168,85,247,0.25)]",
  },
  {
    icon: Briefcase,
    value: 100,
    suffix: "%",
    label: "Job Success Rate",
    description: "Maintained on Upwork platform",
    iconClass: "text-blue-400",
    glowClass: "shadow-[0_0_18px_rgba(96,165,250,0.25)]",
  },
  {
    icon: Users,
    value: 30,
    suffix: "+",
    label: "Happy Clients",
    description: "Worldwide game developers & studios",
    iconClass: "text-green-400",
    glowClass: "shadow-[0_0_18px_rgba(74,222,128,0.25)]",
  },
];

/* ────────────────────────────────────────────────────────────
   Animated count-up hook
──────────────────────────────────────────────────────────── */
function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return count;
}

/* ────────────────────────────────────────────────────────────
   Single stat card
──────────────────────────────────────────────────────────── */
function StatCard({ stat, index, active }: { stat: Stat; index: number; active: boolean }) {
  const count = useCountUp(stat.value, 1800, active);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="relative group h-full"
    >
      <div
        className={`glass border border-purple-500/15 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-purple-500/35 hover:bg-white/5 h-full ${stat.glowClass}`}
      >
        {/* Icon ring */}
        <div
          className={`size-14 rounded-2xl bg-white/5 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200`}
        >
          <Icon className={`size-6 ${stat.iconClass}`} />
        </div>

        {/* Counter */}
        <div className="flex items-end gap-0.5 mb-1">
          <span className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-space-grotesk)] leading-none tabular-nums">
            {count}
          </span>
          <span className={`text-2xl sm:text-3xl font-bold ${stat.iconClass} leading-none mb-0.5`}>
            {stat.suffix}
          </span>
        </div>

        {/* Label */}
        <p className="text-white font-semibold text-sm sm:text-base font-[family-name:var(--font-space-grotesk)] mb-1">
          {stat.label}
        </p>

        {/* Sub-description */}
        <p className="text-slate-500 text-xs leading-snug max-w-[160px]">
          {stat.description}
        </p>

        {/* Bottom glow line */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.6), transparent)" }}
        />
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────
   StatsBar section
──────────────────────────────────────────────────────────── */
export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stats" className="relative py-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-purple-900/15 rounded-full blur-[100px]" />
      </div>

      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)" }}
      />
      {/* Bottom separator */}
      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.2), transparent)" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5">
            Proven Track Record
          </span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} active={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
