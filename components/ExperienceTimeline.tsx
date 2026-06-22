"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Tag } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { experience } from "@/lib/data";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-24">
      {/* Background */}
      <div className="absolute left-1/4 top-1/3 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Career Path"
          title="Work"
          highlight="Experience"
          description="A journey through game studios, indie teams, and freelance work that shaped my expertise."
        />

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-8">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative sm:pl-20 group"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-4 top-7 -translate-x-1/2 size-9 rounded-full bg-[#06060a] border-2 border-purple-500/50 items-center justify-center group-hover:border-purple-400 group-hover:neon-glow transition-all duration-300">
                  <Briefcase className="size-3.5 text-purple-400" />
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-6 sm:p-7 border border-purple-500/10 hover:border-purple-500/25 transition-all duration-300 group-hover:bg-white/[0.02]">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                        {job.role}
                      </h3>
                      <p className="text-purple-300 font-semibold text-sm mt-0.5">
                        {job.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Calendar className="size-3 text-purple-500" />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <MapPin className="size-3 text-purple-500" />
                        {job.location}
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 self-start sm:self-end">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {job.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="size-3.5 text-slate-600" />
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-lg border border-white/8 bg-white/4 text-slate-400 hover:text-slate-300 hover:border-purple-500/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
