"use client";

import { motion } from "framer-motion";
import {
  Cpu, Monitor, Cloud, Wifi, Gauge,
  DollarSign, Gamepad2, Layers,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/lib/data";

/* ── per-colour token set ── */
const colorTokens: Record<string, {
  card: string; header: string; iconWrap: string; icon: string; badge: string;
}> = {
  violet: {
    card:     "border-violet-500/15 hover:border-violet-500/35",
    header:   "text-violet-300",
    iconWrap: "bg-violet-500/15 border-violet-500/25",
    icon:     "text-violet-400",
    badge:    "bg-violet-500/10 border-violet-500/20 text-violet-300",
  },
  blue: {
    card:     "border-blue-500/15 hover:border-blue-500/35",
    header:   "text-blue-300",
    iconWrap: "bg-blue-500/15 border-blue-500/25",
    icon:     "text-blue-400",
    badge:    "bg-blue-500/10 border-blue-500/20 text-blue-300",
  },
  cyan: {
    card:     "border-cyan-500/15 hover:border-cyan-500/35",
    header:   "text-cyan-300",
    iconWrap: "bg-cyan-500/15 border-cyan-500/25",
    icon:     "text-cyan-400",
    badge:    "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
  },
  purple: {
    card:     "border-purple-500/15 hover:border-purple-500/35",
    header:   "text-purple-300",
    iconWrap: "bg-purple-500/15 border-purple-500/25",
    icon:     "text-purple-400",
    badge:    "bg-purple-500/10 border-purple-500/20 text-purple-300",
  },
  amber: {
    card:     "border-amber-500/15 hover:border-amber-500/35",
    header:   "text-amber-300",
    iconWrap: "bg-amber-500/15 border-amber-500/25",
    icon:     "text-amber-400",
    badge:    "bg-amber-500/10 border-amber-500/20 text-amber-300",
  },
  green: {
    card:     "border-green-500/15 hover:border-green-500/35",
    header:   "text-green-300",
    iconWrap: "bg-green-500/15 border-green-500/25",
    icon:     "text-green-400",
    badge:    "bg-green-500/10 border-green-500/20 text-green-300",
  },
  rose: {
    card:     "border-rose-500/15 hover:border-rose-500/35",
    header:   "text-rose-300",
    iconWrap: "bg-rose-500/15 border-rose-500/25",
    icon:     "text-rose-400",
    badge:    "bg-rose-500/10 border-rose-500/20 text-rose-300",
  },
  pink: {
    card:     "border-pink-500/15 hover:border-pink-500/35",
    header:   "text-pink-300",
    iconWrap: "bg-pink-500/15 border-pink-500/25",
    icon:     "text-pink-400",
    badge:    "bg-pink-500/10 border-pink-500/20 text-pink-300",
  },
};

const iconMap: Record<string, React.ElementType> = {
  Cpu, Monitor, Cloud, Wifi, Gauge, DollarSign, Gamepad2, Layers,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-violet-900/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Technical Expertise"
          title="My Technical"
          highlight="Stack"
          description="6+ years across the full Unity development spectrum, from low-level engine systems to market-ready multiplayer titles."
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          {skillCategories.map((cat, i) => {
            const tokens = colorTokens[cat.color] ?? colorTokens.purple;
            const Icon   = iconMap[cat.icon] ?? Cpu;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                viewport={{ once: true }}
                className={`group glass rounded-2xl p-5 border ${tokens.card} transition-all duration-300`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`size-9 rounded-xl border flex items-center justify-center shrink-0 ${tokens.iconWrap}`}>
                    <Icon className={`size-4 ${tokens.icon}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className={`text-sm font-bold font-[family-name:var(--font-space-grotesk)] leading-tight ${tokens.header}`}>
                      {cat.category}
                    </h3>
                    <p className="text-slate-600 text-[10px] mt-0.5">
                      {cat.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-lg border transition-colors duration-200 ${tokens.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-purple-500/10 pt-8"
        >
          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            {/* Education */}
            <div>
              <p className="text-purple-400 text-xs font-semibold uppercase tracking-[0.15em] mb-3">Education</p>
              <p className="text-slate-300 font-medium">BS in Computer Science</p>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                Federal Urdu University of Arts, Science and Technology, Islamabad Campus (2021-2025)
              </p>
              <p className="text-slate-300 font-medium mt-3">Unity Certified</p>
              <p className="text-slate-500 text-xs mt-1">NUML, Rawalpindi (Dec 2022)</p>
            </div>

            {/* Languages */}
            <div>
              <p className="text-purple-400 text-xs font-semibold uppercase tracking-[0.15em] mb-3">Languages</p>
              <ul className="space-y-1.5">
                <li className="text-slate-400">English <span className="text-slate-600 text-xs">(Fluent)</span></li>
                <li className="text-slate-400">Urdu <span className="text-slate-600 text-xs">(Native)</span></li>
                <li className="text-slate-400">Punjabi <span className="text-slate-600 text-xs">(Native)</span></li>
              </ul>
            </div>

            {/* Core Competencies */}
            <div>
              <p className="text-purple-400 text-xs font-semibold uppercase tracking-[0.15em] mb-3">Core Competencies</p>
              <ul className="space-y-1.5 text-slate-400 text-xs leading-relaxed">
                <li>Advanced Game Architecture</li>
                <li>LiveOps &amp; Economy Balancing</li>
                <li>Multiplayer Matchmaking (Photon/Fusion)</li>
                <li>Memory Profiling &amp; Optimization</li>
                <li>Rapid Prototyping</li>
                <li>Cross-Platform Deployment</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
