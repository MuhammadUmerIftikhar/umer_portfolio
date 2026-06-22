"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-5",
            "border border-purple-500/30 bg-purple-500/10 text-purple-300"
          )}
        >
          <span className="size-1.5 rounded-full bg-purple-400 animate-pulse" />
          {badge}
        </motion.div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight",
          align === "center" ? "mx-auto" : ""
        )}
      >
        <span className="text-white">{title} </span>
        <span className="gradient-text">{highlight}</span>
      </h2>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={cn(
            "mt-4 text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
