"use client";

import { motion } from "framer-motion";
import {
  Users, Cloud, Database, Gauge, Package, Layers, Map,
  Gamepad2, Monitor, DollarSign, Brain, Activity, Sparkles,
  Wrench, Music, Shuffle, Save, Globe, Film,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { expertise as staticExpertise } from "@/lib/data";
import type { SanityExpertise } from "@/lib/sanity/types";

const iconMap: Record<string, React.ElementType> = {
  Users, Cloud, Database, Gauge, Package, Layers, Map,
  Gamepad2, Monitor, DollarSign, Brain, Activity, Sparkles,
  Wrench, Music, Shuffle, Save, Globe, Film,
};

interface ExpertiseProps {
  expertise?: SanityExpertise[] | null;
}

export default function Expertise({ expertise }: ExpertiseProps) {
  const items = expertise ?? staticExpertise;

  return (
    <section id="expertise" className="relative py-24">
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-violet-900/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="What I Do"
          title="My"
          highlight="Expertise"
          description="Specializing across the full Unity game development stack, from real-time multiplayer to clean, scalable architecture."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Layers;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`group relative glass rounded-2xl p-6 border ${item.border} hover:border-opacity-50 transition-all duration-300 overflow-hidden cursor-default`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                <div className={`size-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-4`}>
                  <Icon className={`size-5 ${item.iconColor}`} />
                </div>

                <h3 className="text-white font-bold text-base mb-2.5 font-[family-name:var(--font-space-grotesk)]">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
