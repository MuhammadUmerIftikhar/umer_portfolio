"use client";

import { motion } from "framer-motion";
import { ArrowRight, Gamepad2 } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative glass rounded-3xl border border-purple-500/20 overflow-hidden px-8 sm:px-12 py-10 sm:py-12"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-violet-900/20 pointer-events-none" />
          <div className="absolute -right-20 -top-20 size-60 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute -left-10 -bottom-10 size-40 bg-violet-600/10 rounded-full blur-2xl" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left content */}
            <div className="flex items-center gap-5">
              <div className="size-14 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center neon-glow shrink-0">
                <Gamepad2 className="size-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl sm:text-2xl font-[family-name:var(--font-space-grotesk)] mb-1">
                  Let&apos;s build something amazing together!
                </h3>
                <p className="text-slate-400 text-sm">
                  I&apos;m available for new projects and exciting opportunities.
                </p>
              </div>
            </div>

            {/* CTA button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-purple-600 text-white font-semibold text-sm hover:bg-purple-500 transition-all neon-glow font-[family-name:var(--font-space-grotesk)] shrink-0 whitespace-nowrap"
            >
              Let&apos;s Connect
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
