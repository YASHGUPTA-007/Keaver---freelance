"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Apply() {
  const [form, setForm] = useState({ name: "", email: "", country: "", school: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" className="bg-navy py-20 md:py-32 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden">
        <span className="font-(family-name:--font-playfair) text-[28vw] font-normal italic text-white/[0.03] leading-none">K</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="w-6 h-px bg-gold" />
              <span className="font-(family-name:--font-syne) text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">Application</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-(family-name:--font-inter) font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-7 tracking-tight"
            >
              Apply for <em className="text-gold italic">Sponsorship</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/50 text-base leading-[1.9] mb-8 max-w-md font-light"
            >
              Are you a high-achieving student from an underserved background? Do you dream of attending a world-class university but face financial barriers? Keaver Foundation wants to hear from you.
            </motion.p>

            <div className="space-y-3.5">
              {[
                "Full scholarship consideration",
                "Dedicated mentorship throughout your journey",
                "Access to global university partnerships",
                "Leadership and AI skills training",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 text-sm text-white/45 font-light"
                >
                  <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="border border-gold/25 p-12 text-center">
                <div className="w-14 h-14 border border-gold flex items-center justify-center mx-auto mb-6">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-(family-name:--font-inter) font-bold text-white text-2xl mb-3">Application Received</h3>
                <p className="text-white/45 text-sm leading-relaxed font-light">
                  Thank you for reaching out. Our team will review your application and contact you within 5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: "name",    label: "Full Name",                   type: "text",  placeholder: "Your full name" },
                  { id: "email",   label: "Email Address",               type: "email", placeholder: "your@email.com" },
                  { id: "country", label: "Country",                     type: "text",  placeholder: "Your country of origin" },
                  { id: "school",  label: "Current School / Institution", type: "text",  placeholder: "Where are you studying?" },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="block font-(family-name:--font-syne) text-[10px] tracking-[0.25em] uppercase text-white/35 font-semibold mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="w-full bg-transparent border border-white/10 focus:border-gold/50 text-white placeholder:text-white/20 px-4 py-3.5 text-sm outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                ))}
                <div>
                  <label className="block font-(family-name:--font-syne) text-[10px] tracking-[0.25em] uppercase text-white/35 font-semibold mb-2">
                    Tell Us About Yourself
                  </label>
                  <textarea
                    placeholder="Share your story, achievements, and why you deserve this opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full bg-transparent border border-white/10 focus:border-gold/50 text-white placeholder:text-white/20 px-4 py-3.5 text-sm outline-none transition-colors duration-300 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full py-4 bg-gold hover:bg-gold-light text-navy font-(family-name:--font-syne) font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Submit Application
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <p className="text-white/20 text-[10px] text-center leading-relaxed font-light">
                  All information is treated with strict confidentiality.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
