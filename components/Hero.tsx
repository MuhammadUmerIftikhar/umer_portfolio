"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck, Clock, Star, Trophy,
  Gamepad2, Code2,
} from "lucide-react";
import { SiUnity } from "react-icons/si";
import type { SanityProfile, SanityStat } from "@/lib/sanity/types";
import { heroStats as staticHeroStats, heroBio as staticBio } from "@/lib/data";

/* ── icon map for stat badges ── */
const iconMap: Record<string, React.ElementType> = {
  BadgeCheck, Clock, Star, Trophy, Gamepad2: Trophy,
};

interface HeroProps {
  profile?: SanityProfile | null;
}

/* ────────────────────────────────────────────────────────────
   Profile photo with orbital icons
──────────────────────────────────────────────────────────── */
function ProfilePhoto({ src }: { src?: string }) {
  const imageSrc = src ?? "/MuhammadUmerIftikharProfilePicture.png";

  return (
    <div className="relative flex items-center justify-center select-none">

      {/* ── spinning dashed rings ── */}
      <div
        className="absolute size-[320px] sm:size-[380px] lg:size-[430px] rounded-full border border-purple-500/20"
        style={{ borderStyle: "dashed", animation: "spin 28s linear infinite" }}
      />
      <div
        className="absolute size-[275px] sm:size-[330px] lg:size-[375px] rounded-full border border-purple-400/15"
        style={{ borderStyle: "dashed", animation: "spin 20s linear infinite reverse" }}
      />

      {/* ── ambient glow ── */}
      <div className="absolute size-[240px] sm:size-[280px] rounded-full bg-purple-600/20 blur-3xl" />

      {/* ── photo frame ── */}
      <div className="relative size-[220px] sm:size-[260px] lg:size-[295px] rounded-full overflow-hidden border-2 border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.35)]">
        <Image
          src={imageSrc}
          alt="Muhammad Umer Iftikhar"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* ── Orbital: TOP-LEFT — Unity cube ── */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 -left-2 sm:-left-5 size-12 rounded-2xl glass border border-purple-500/40 flex items-center justify-center shadow-[0_0_18px_rgba(168,85,247,0.35)]"
      >
        <SiUnity style={{ fontSize: 22, color: "#a855f7" }} />
      </motion.div>

      {/* ── Orbital: TOP-RIGHT — Gamepad2 ── */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute top-4 -right-2 sm:-right-5 size-12 rounded-2xl glass border border-purple-500/35 flex items-center justify-center shadow-[0_0_14px_rgba(168,85,247,0.25)]"
      >
        <Gamepad2 className="size-5 text-purple-400" />
      </motion.div>

      {/* ── Orbital: BOTTOM-LEFT — Code2 ── */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-8 -left-4 sm:-left-7 size-11 rounded-2xl glass border border-violet-500/30 flex items-center justify-center shadow-[0_0_12px_rgba(139,92,246,0.2)]"
      >
        <Code2 className="size-4.5 text-violet-400" />
      </motion.div>

    </div>
  );
}

/* ── animation variants ── */
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.11, delayChildren: 0.25 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

/* ── stat badge colour tokens ── */
const badgeColors: Record<number, { icon: string; border: string; bg: string }> = {
  0: { icon: "text-green-400",  border: "border-green-500/20",  bg: "bg-green-500/8"  },
  1: { icon: "text-blue-400",   border: "border-blue-500/20",   bg: "bg-blue-500/8"   },
  2: { icon: "text-amber-400",  border: "border-amber-500/20",  bg: "bg-amber-500/8"  },
  3: { icon: "text-purple-400", border: "border-purple-500/20", bg: "bg-purple-500/8" },
};

function StatBadge({
  stat,
  index,
}: {
  stat: SanityStat | { value: string; label: string; icon: string };
  index: number;
}) {
  const colors = badgeColors[index] ?? badgeColors[3];
  const Icon = iconMap[stat.icon] ?? Trophy;
  return (
    <div className={`glass ${colors.bg} ${colors.border} border rounded-xl px-3 py-2.5 flex items-center gap-2.5`}>
      <Icon className={`size-4 shrink-0 ${colors.icon}`} />
      <div className="min-w-0">
        <p className="text-white text-sm font-bold font-[family-name:var(--font-space-grotesk)] leading-tight">
          {stat.value}
        </p>
        <p className="text-slate-500 text-[11px] truncate">{stat.label}</p>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Hero section
──────────────────────────────────────────────────────────── */
export default function Hero({ profile }: HeroProps) {
  const name   = profile?.name  ?? "Muhammad Umer Iftikhar";
  const title  = profile?.title ?? "Unity Game Developer | Mobile, PC & WebGL";
  const bio    = profile?.bio   ?? staticBio;
  const stats  = profile?.stats ?? staticHeroStats;

  const nameParts = name.trim().split(" ");
  const lastWord  = nameParts.pop() ?? "";
  const firstName = nameParts.join(" ");

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#06060a]">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-purple-900/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-violet-900/10 rounded-full blur-[110px]" />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 90% 70% at 50% 50%, transparent 45%, #06060a 100%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 min-h-screen lg:py-24 pt-24 pb-16">

          {/* LEFT — photo */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="lg:w-[42%] flex items-center justify-center shrink-0"
          >
            <ProfilePhoto />
          </motion.div>

          {/* RIGHT — content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:w-[58%] flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-5"
            >
              <span className="size-2 rounded-full bg-green-400 animate-pulse" />
              Top-Rated Upwork Freelancer
            </motion.div>

            <motion.p variants={item} className="text-slate-400 text-lg sm:text-xl mb-2 font-[family-name:var(--font-space-grotesk)]">
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight tracking-tight text-white mb-2"
            >
              {firstName}{" "}
              <span className="gradient-text">{lastWord}</span>
            </motion.h1>

            <motion.p variants={item} className="text-slate-300 text-base sm:text-lg font-medium mb-5">
              {title}
            </motion.p>

            <motion.p variants={item} className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              {bio}
            </motion.p>

            <motion.div variants={item} className="mb-10">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-purple-600 text-white font-semibold text-sm hover:bg-purple-500 transition-all duration-200 neon-glow font-[family-name:var(--font-space-grotesk)] shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                View My Work
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl">
              {stats.map((stat, i) => (
                <StatBadge key={i} stat={stat} index={i} />
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-purple-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
