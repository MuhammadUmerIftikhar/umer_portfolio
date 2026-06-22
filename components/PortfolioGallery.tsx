"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SiApple, SiGoogleplay, SiSteam } from "react-icons/si";
import SectionHeader from "./SectionHeader";
import ProjectModal from "./ProjectModal";
import { projects as allProjects } from "@/lib/data";
import type { Project } from "@/lib/data";

const filters = ["All", "2D", "3D", "Mobile", "PC", "Multiplayer"];

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

function GameCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (p: Project) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.3 }}
      onClick={() => onSelect(project)}
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

      {/* Card info */}
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
  );
}

export default function PortfolioGallery() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    active === "All"
      ? allProjects
      : allProjects.filter((p) => p.tags.includes(active));

  return (
    <section id="gallery" className="relative py-24">
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] bg-purple-900/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Portfolio"
          title="Game"
          highlight="Gallery"
          description="A collection of games and prototypes spanning genres, platforms, and technologies."
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={[
                "px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer",
                "font-[family-name:var(--font-space-grotesk)]",
                active === filter
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-900/40 border border-purple-500/60"
                  : "glass border border-purple-500/15 text-slate-400 hover:text-white hover:border-purple-500/35 hover:bg-purple-500/10",
              ].join(" ")}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <GameCard
                key={project.id}
                project={project}
                onSelect={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No projects in this category yet.
          </div>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
