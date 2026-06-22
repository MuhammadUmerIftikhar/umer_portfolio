"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative py-24">
      {/* Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="5-Star Reviews"
          title="Client"
          highlight="Reviews"
          description="Don't take my word for it. Here's what the people I've worked with have to say."
        />

        <div className="relative">
          {/* Main card */}
          <div className="relative overflow-hidden min-h-[280px] sm:min-h-[260px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass rounded-3xl p-8 sm:p-10 border border-purple-500/15 relative overflow-hidden"
              >
                {/* Quote icon */}
                <Quote className="absolute top-6 right-8 size-16 text-purple-500/10" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
                  &ldquo;{t.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="size-12 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${t.gradientFrom}, ${t.gradientTo})`,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold font-[family-name:var(--font-space-grotesk)]">
                      {t.name}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {t.company ? `${t.company} · ${t.project}` : t.project}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`rounded-full transition-all duration-200 ${
                    i === current
                      ? "bg-purple-500 w-6 h-2"
                      : "bg-white/20 hover:bg-white/30 size-2"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="size-10 rounded-xl glass border border-purple-500/20 text-slate-400 hover:text-white hover:border-purple-500/40 flex items-center justify-center transition-all"
              >
                <ChevronLeft className="size-4.5" />
              </button>
              <button
                onClick={next}
                className="size-10 rounded-xl glass border border-purple-500/20 text-slate-400 hover:text-white hover:border-purple-500/40 flex items-center justify-center transition-all"
              >
                <ChevronRight className="size-4.5" />
              </button>
            </div>
          </div>
        </div>

        {/* All testimonials mini cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((item, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              viewport={{ once: true }}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`text-left glass rounded-xl p-4 border transition-all duration-200 ${
                i === current
                  ? "border-purple-500/40 bg-purple-500/10"
                  : "border-purple-500/10 hover:border-purple-500/25"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="size-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})`,
                  }}
                >
                  {item.initials}
                </div>
                <div>
                  <p className="text-white text-xs font-semibold leading-tight">
                    {item.name}
                  </p>
                  <p className="text-slate-500 text-[10px]">{item.project}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="size-3 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
