"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiApple, SiGoogleplay, SiSteam } from "react-icons/si";
import SectionHeader from "./SectionHeader";
import ProjectModal from "./ProjectModal";
import { projects as allProjects } from "@/lib/data";
import type { Project } from "@/lib/data";

const featured = allProjects.filter((p) => p.isFeatured);

function StoreLinks({ links }: { links: Project["links"] }) {
  if (!links.appStore && !links.playStore && !links.steam) return null;
  return (
    <div className="flex flex-wrap gap-1.5 mt-3">
      {links.appStore && (
        <a
          href={links.appStore}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/8 border border-white/10 text-white/80 text-[11px] font-medium hover:bg-white/15 hover:text-white transition-all"
        >
          <SiApple style={{ fontSize: 12 }} />
          App Store
        </a>
      )}
      {links.playStore && (
        <a
          href={links.playStore}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/8 border border-white/10 text-white/80 text-[11px] font-medium hover:bg-white/15 hover:text-white transition-all"
        >
          <SiGoogleplay style={{ fontSize: 11 }} />
          Play Store
        </a>
      )}
      {links.steam && (
        <a
          href={links.steam}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/8 border border-white/10 text-white/80 text-[11px] font-medium hover:bg-white/15 hover:text-white transition-all"
        >
          <SiSteam style={{ fontSize: 11 }} />
          Steam
        </a>
      )}
    </div>
  );
}

export default function FeaturedProjects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader
            badge="My Work"
            title="Featured"
            highlight="Projects"
            description="Handpicked games showcasing multiplayer systems, backend integration, and polished game-feel."
            align="left"
            className="mb-0"
          />
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            className="hidden sm:flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium shrink-0 mb-1"
          >
            View All Projects <ArrowRight className="size-4" />
          </motion.button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelected(project)}
              className="group flex flex-col rounded-2xl overflow-hidden border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 bg-[#0d0d17] hover:shadow-xl hover:shadow-purple-950/30 cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full h-48 rounded-t-2xl overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover scale-[1.03] transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Tags overlay */}
                <div className="absolute top-3 left-3 flex gap-1.5 z-10">
                  {project.tags.map((tag, j) => (
                    <span
                      key={tag}
                      className={`text-[10px] font-bold px-2 py-0.5 rounded text-white uppercase tracking-wide ${
                        j === 0 ? "bg-purple-600/90" : "bg-black/60"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-white font-bold text-sm sm:text-base mb-1.5 font-[family-name:var(--font-space-grotesk)] leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-3 flex-1 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <StoreLinks links={project.links} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <button
            onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
          >
            View All Projects <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
