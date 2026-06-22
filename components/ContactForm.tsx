"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, User, MessageSquare, FileText, Send,
  CheckCircle, Loader2, MapPin, Phone,
} from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import SectionHeader from "./SectionHeader";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_EMAIL = "sardar.umer6789@gmail.com";

const contactInfo = [
  { Icon: Mail,  label: "Email",     value: CONTACT_EMAIL,    href: `mailto:${CONTACT_EMAIL}` },
  { Icon: Phone, label: "WhatsApp",  value: "+92 309 5250595", href: "https://wa.me/923095250595" },
  { Icon: MapPin,label: "Location",  value: "Rawalpindi, Pakistan", href: "#" },
];

const socialLinks = [
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/muhammadumeriftikhar/" },
  { Icon: SiUpwork,     label: "Upwork",   href: "https://www.upwork.com/freelancers/muhammadumeriftikhar" },
  { Icon: FaWhatsapp,   label: "WhatsApp", href: "https://wa.me/923095250595" },
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = "Valid email required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (form.message.trim().length < 20) e.message = "Message must be at least 20 characters";
    return e;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Hi Muhammad,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  const update = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
    };

  const inputCls = (field: keyof FormState) =>
    `w-full bg-white/4 border rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 outline-none transition-all duration-200 focus:ring-2 focus:ring-purple-500/30 ${
      errors[field]
        ? "border-red-500/50 focus:border-red-500/60"
        : "border-purple-500/15 focus:border-purple-500/40"
    }`;

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Build"
          highlight="Together"
          description="Have a game idea or a project in mind? I'd love to hear about it. Let's create something amazing."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="glass rounded-2xl p-7 border border-purple-500/10">
              <h3 className="text-white font-bold text-lg mb-5 font-[family-name:var(--font-space-grotesk)]">
                Contact Info
              </h3>
              <div className="flex flex-col gap-5">
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <a key={label} href={href} className="flex items-center gap-4 group">
                    <div className="size-10 rounded-xl bg-purple-600/15 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:bg-purple-600/25 transition-all">
                      <Icon className="size-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider">{label}</p>
                      <p className="text-white text-sm mt-0.5 group-hover:text-purple-300 transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-7 border border-purple-500/10">
              <h3 className="text-white font-bold text-base mb-4 font-[family-name:var(--font-space-grotesk)]">
                Follow My Work
              </h3>
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    title={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-11 rounded-xl glass border border-purple-500/15 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/35 hover:bg-purple-500/10 transition-all"
                  >
                    <Icon style={{ fontSize: 18 }} />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-slate-500 text-xs leading-relaxed">
                Available for freelance projects, full-time opportunities, and open-source collaborations.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-10 border border-green-500/20 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                >
                  <div className="size-16 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center mb-5">
                    <CheckCircle className="size-8 text-green-400" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3 font-[family-name:var(--font-space-grotesk)]">
                    Email Client Opened!
                  </h3>
                  <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
                    Your message has been pre-filled in your email client. Hit send and I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-xl border border-purple-500/30 bg-purple-500/10 text-white text-sm font-medium hover:bg-purple-500/20 transition-all"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass rounded-2xl p-7 sm:p-8 border border-purple-500/10"
                >
                  <h3 className="text-white font-bold text-lg mb-6 font-[family-name:var(--font-space-grotesk)]">
                    Send a Message
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-3.5 text-slate-600" />
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={update("name")}
                          className={`${inputCls("name")} pl-10`}
                        />
                      </div>
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-3.5 text-slate-600" />
                        <input
                          type="email"
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={update("email")}
                          className={`${inputCls("email")} pl-10`}
                        />
                      </div>
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 size-3.5 text-slate-600" />
                      <input
                        type="text"
                        placeholder="Let's build a game together"
                        value={form.subject}
                        onChange={update("subject")}
                        className={`${inputCls("subject")} pl-10`}
                      />
                    </div>
                    {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                  </div>

                  <div className="mb-6">
                    <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3.5 size-3.5 text-slate-600" />
                      <textarea
                        rows={5}
                        placeholder="Tell me about your project, timeline, and goals..."
                        value={form.message}
                        onChange={update("message")}
                        className={`${inputCls("message")} pl-10 resize-none`}
                      />
                    </div>
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                    <p className="text-slate-600 text-xs mt-1.5 text-right">
                      {form.message.length} / 1000
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-purple-600 text-white font-semibold text-sm hover:bg-purple-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all neon-glow font-[family-name:var(--font-space-grotesk)]"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="size-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
