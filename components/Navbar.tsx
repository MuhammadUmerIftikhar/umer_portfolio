"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { SiUnity } from "react-icons/si";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home",           href: "hero"        },
  { label: "Skills",         href: "skills"      },
  { label: "Projects",       href: "projects"    },
  { label: "Experience",     href: "experience"  },
  { label: "Client Reviews", href: "testimonials"},
  { label: "Contact",        href: "contact"     },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeSection, setActive]    = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      let current = "hero";
      for (const { href } of navLinks) {
        const el = document.getElementById(href);
        if (el && el.getBoundingClientRect().top <= 130) current = href;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Main bar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "glass-strong border-b border-purple-500/10 shadow-lg shadow-black/30"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <button
              onClick={() => scrollTo("hero")}
              className="flex items-center gap-2.5 group"
            >
              <div className="size-9 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-600/30 transition-all neon-glow">
                <SiUnity style={{ fontSize: 18, color: "#a855f7" }} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[14px] font-bold text-white font-[family-name:var(--font-space-grotesk)] tracking-tight">
                  Muhammad Umer <span className="gradient-text">Iftikhar</span>
                </span>
                <span className="text-[10px] text-slate-500 tracking-widest uppercase">
                  Unity Game Developer
                </span>
              </div>
            </button>

            {/* ── Desktop links ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map(({ label, href }) => {
                const isActive = activeSection === href;
                return (
                  <button
                    key={href}
                    onClick={() => scrollTo(href)}
                    className={cn(
                      "relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                      isActive ? "text-white" : "text-slate-400 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavMAQ"
                        className="absolute inset-0 rounded-lg bg-purple-500/10 border border-purple-500/20"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative">{label}</span>
                  </button>
                );
              })}
            </div>

            {/* ── Hire Me + hamburger ── */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.upwork.com/freelancers/muhammadumeriftikhar"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white bg-purple-600 border border-purple-500/50 hover:bg-purple-500 transition-all duration-200 neon-glow font-[family-name:var(--font-space-grotesk)]"
              >
                Hire Me
                <ExternalLink className="size-3.5" />
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden size-9 flex items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-slate-300 hover:text-white transition-all"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 glass-strong border-b border-purple-500/10 lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => { setMobileOpen(false); scrollTo(href); }}
                  className={cn(
                    "text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                    activeSection === href
                      ? "bg-purple-500/15 text-white border border-purple-500/20"
                      : "text-slate-400 hover:text-white hover:bg-purple-500/8"
                  )}
                >
                  {label}
                </motion.button>
              ))}
              <div className="pt-1 pb-2">
                <a
                  href="https://www.upwork.com/freelancers/muhammadumeriftikhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-all neon-glow text-center"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
