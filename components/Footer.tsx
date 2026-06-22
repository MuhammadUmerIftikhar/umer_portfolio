"use client";

import { motion } from "framer-motion";
import { Gamepad2, Mail, MapPin, ArrowUp } from "lucide-react";
import type { SanityProfile } from "@/lib/sanity/types";

/* ── inline SVG brand icons ── */
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}


function UpworkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

/* ── fallback contact values ── */
const FALLBACK_EMAIL = "sardar.umer6789@gmail.com";
const FALLBACK_WHATSAPP = "+923095250595";
const FALLBACK_LOCATION = "Rawalpindi, Pakistan";

const navLinks = [
  { label: "Home",          id: "hero"        },
  { label: "Skills",        id: "skills"      },
  { label: "Projects",      id: "projects"    },
  { label: "Experience",    id: "experience"  },
  { label: "Client Reviews",id: "testimonials"},
  { label: "Contact",       id: "contact"     },
];

interface FooterProps {
  profile?: SanityProfile | null;
}

export default function Footer({ profile }: FooterProps) {
  const contact  = profile?.contact;
  const socials  = profile?.socials;
  const name     = profile?.name    ?? "Muhammad Umer Iftikhar";
  const title    = profile?.title   ?? "Unity Game Developer";
  const email    = contact?.email    ?? FALLBACK_EMAIL;
  const whatsapp = contact?.whatsapp ?? FALLBACK_WHATSAPP;
  const location = contact?.location ?? FALLBACK_LOCATION;

  /* Build whatsapp href (strip non-digits then prefix) */
  const waHref = `https://wa.me/${whatsapp.replace(/\D/g, "")}`;

  const socialLinks = [
    { Icon: LinkedinIcon, label: "LinkedIn", href: socials?.linkedin ?? "https://www.linkedin.com/in/muhammadumeriftikhar/" },
    { Icon: UpworkIcon,   label: "Upwork",   href: socials?.upwork   ?? "https://www.upwork.com/freelancers/muhammadumeriftikhar" },
    { Icon: WhatsAppIcon, label: "WhatsApp", href: waHref },
  ];

  return (
    <footer className="relative border-t border-purple-500/10 bg-[#08080f]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <div className="size-9 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                <Gamepad2 className="size-4.5 text-purple-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm font-[family-name:var(--font-space-grotesk)]">
                  {name}
                </p>
                <p className="text-slate-500 text-xs">{title}</p>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                className="text-slate-500 text-sm hover:text-purple-300 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Contact + Socials */}
          <div className="flex flex-col items-center sm:items-end gap-3">
            <a href={`mailto:${email}`}
              className="flex items-center gap-2 text-slate-400 hover:text-purple-300 text-sm transition-colors">
              <Mail className="size-3.5 text-purple-500" />
              {email}
            </a>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <MapPin className="size-3.5 text-purple-500" />
              {location}
            </div>
            <div className="flex items-center gap-2 mt-1">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-8 rounded-lg glass border border-purple-500/15 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/35 transition-all"
                >
                  <Icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-purple-500/8 flex items-center justify-between">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -2 }}
            className="size-8 rounded-lg glass border border-purple-500/20 flex items-center justify-center text-slate-500 hover:text-white hover:border-purple-500/40 transition-all"
          >
            <ArrowUp className="size-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
