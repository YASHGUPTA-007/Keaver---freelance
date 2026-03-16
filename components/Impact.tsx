"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: 500, suffix: "+", label: "Students Supported",   sub: "Across 10+ countries" },
  { value: 20,  suffix: "+", label: "Partner Institutions", sub: "Including top global unis" },
  { value: 10,  suffix: "+", label: "Countries Reached",    sub: "And growing" },
  { value: 100, suffix: "%", label: "Scholarship Coverage", sub: "Full financial support" },
];

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = document.querySelector(`.counter-val-${i}`);
        if (!el) return;
        gsap.from(el, {
          textContent: 0,
          duration: 2.2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate() {
            (el as HTMLElement).textContent = Math.ceil(
              parseFloat((el as HTMLElement).textContent || "0")
            ).toString();
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="bg-cream py-20 md:py-32 relative overflow-hidden">
      {/* Decorative watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-(family-name:--font-playfair) text-[22vw] font-normal text-navy/[0.03] leading-none whitespace-nowrap italic">
          Impact
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-14 md:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <span className="w-6 h-px bg-gold" />
            <span className="font-(family-name:--font-syne) text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">Our Global Impact</span>
            <span className="w-6 h-px bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-(family-name:--font-playfair) font-normal text-navy text-3xl md:text-4xl lg:text-5xl"
          >
            Numbers that <em className="text-gold italic">matter</em>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="text-center group"
            >
              <div className="flex items-baseline justify-center gap-0.5 mb-2">
                <span className={`counter-val-${i} font-(family-name:--font-playfair) font-semibold text-5xl md:text-6xl lg:text-7xl text-navy tabular-nums`}>
                  {stat.value}
                </span>
                <span className="font-(family-name:--font-playfair) font-normal text-3xl md:text-4xl text-gold">
                  {stat.suffix}
                </span>
              </div>
              <p className="font-(family-name:--font-syne) text-navy font-semibold text-xs uppercase tracking-widest mb-1">
                {stat.label}
              </p>
              <p className="text-navy/40 text-xs font-light">{stat.sub}</p>
              <div className="mt-4 w-6 h-px bg-gold/50 mx-auto group-hover:w-12 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
