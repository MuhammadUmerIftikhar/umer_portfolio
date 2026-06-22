"use client";

import { motion } from "framer-motion";
import {
  SiUnity, SiDotnet, SiFirebase, SiNodedotjs, SiGit, SiWebgl,
} from "react-icons/si";
import { Zap, Database, Package, Cloud } from "lucide-react";
import { technologies as staticTech } from "@/lib/data";
import type { SanityTechStack } from "@/lib/sanity/types";

/* ── Map each tech name to its brand icon ── */
function TechIcon({ name, color }: { name: string; color: string }) {
  const si  = { fontSize: 26, color };
  const lc  = { size: 24, color } as const;

  switch (name) {
    case "Unity":        return <SiUnity style={si} />;
    case "C#":           return <SiDotnet style={si} />;
    case "Photon":       return <Zap {...lc} />;
    case "PlayFab":      return <Database {...lc} />;
    case "Firebase":     return <SiFirebase style={si} />;
    case "WebGL":        return <SiWebgl style={si} />;
    case "Addressables": return <Package {...lc} />;
    case "AWS":          return <Cloud {...lc} />;
    case "Node.js":      return <SiNodedotjs style={si} />;
    case "Git":          return <SiGit style={si} />;
    default:             return <span style={{ color, fontWeight: 700, fontSize: 13 }}>{name.slice(0, 2)}</span>;
  }
}

interface TechnologiesProps {
  techStack?: SanityTechStack[] | null;
}

export default function Technologies({ techStack }: TechnologiesProps) {
  const items = techStack ?? staticTech;

  return (
    <section className="relative py-14 border-y border-purple-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 text-base font-medium mb-8"
        >
          Technologies &amp; Tools I Work With
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {items.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="flex flex-col items-center gap-2.5 group cursor-default"
            >
              <div
                className="size-14 rounded-2xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                style={{
                  backgroundColor: tech.bg,
                  border: `1.5px solid ${tech.border}`,
                  boxShadow: `0 0 12px ${tech.border}40`,
                }}
              >
                <TechIcon name={tech.name} color={tech.text} />
              </div>
              <span className="text-slate-500 text-xs group-hover:text-slate-300 transition-colors text-center leading-tight max-w-[64px]">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
