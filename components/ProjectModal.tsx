"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SiApple, SiGoogleplay, SiSteam } from "react-icons/si";
import type { Project } from "@/lib/data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  /* Close on Escape */
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  const hasLinks =
    project && (project.links.appStore || project.links.playStore || project.links.steam);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* ── Modal panel ── */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ duration: 0.28, ease: "easeOut" as const }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-purple-500/20 bg-[#0e0e18] shadow-2xl shadow-black/60"
              style={{ scrollbarWidth: "none" }}
            >
              {/* ── Media area ── */}
              <div className="relative aspect-video rounded-t-3xl overflow-hidden bg-black">
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 672px"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 size-9 rounded-xl bg-black/60 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/80 flex items-center justify-center transition-all border border-white/10"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* ── Content ── */}
              <div className="p-6 sm:p-8">
                {/* Title + tags */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <h2 className="text-white text-xl sm:text-2xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-1.5 shrink-0">
                    {project.tags.map((tag, j) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full text-white uppercase tracking-wide ${
                          j === 0
                            ? "bg-purple-600/80 border border-purple-500/40"
                            : "bg-white/10 border border-white/15"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mb-6">
                  <p className="text-slate-500 text-[11px] font-semibold uppercase tracking-widest mb-2.5">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Store links */}
                {hasLinks && (
                  <div>
                    <p className="text-slate-500 text-[11px] font-semibold uppercase tracking-widest mb-2.5">
                      Available On
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {project.links.appStore && (
                        <a
                          href={project.links.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/6 border border-white/12 text-white text-sm font-medium hover:bg-white/12 hover:border-white/20 transition-all"
                        >
                          <SiApple style={{ fontSize: 16 }} />
                          App Store
                        </a>
                      )}
                      {project.links.playStore && (
                        <a
                          href={project.links.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/6 border border-white/12 text-white text-sm font-medium hover:bg-white/12 hover:border-white/20 transition-all"
                        >
                          <SiGoogleplay style={{ fontSize: 14 }} />
                          Google Play
                        </a>
                      )}
                      {project.links.steam && (
                        <a
                          href={project.links.steam}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/6 border border-white/12 text-white text-sm font-medium hover:bg-white/12 hover:border-white/20 transition-all"
                        >
                          <SiSteam style={{ fontSize: 14 }} />
                          Steam
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
