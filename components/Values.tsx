"use client";
import { motion } from "framer-motion";

const values = [
  { name: "Faith in God",  sub: "our foundation",   accent: false },
  { name: "Empowerment",   sub: "of every student",  accent: true  },
  { name: "Fairness",      sub: "for all",           accent: false },
  { name: "Compassion",    sub: "in everything we do", accent: false },
  { name: "Excellence",    sub: "always",            accent: true  },
];

export default function Values() {
  return (
    <section id="values" className="bg-[#F2EDE4] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              <span className="font-(family-name:--font-syne) text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">What We Believe</span>
            </div>
            <h2 className="font-(family-name:--font-playfair) font-normal text-navy text-3xl md:text-4xl lg:text-5xl">
              Core Values
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-navy/45 text-sm font-light max-w-xs md:text-right leading-relaxed"
          >
            The principles that shape every decision, every relationship, and every life we touch.
          </motion.p>
        </div>

        <div className="divide-y divide-border">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center justify-between py-6 md:py-7 hover:bg-navy/[0.02] px-1 transition-colors duration-300 cursor-default"
            >
              <div className="flex items-baseline gap-4 md:gap-7">
                <span className="font-(family-name:--font-syne) text-navy/20 text-xs w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`font-(family-name:--font-playfair) font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight transition-colors duration-300 ${
                  v.accent ? "text-gold group-hover:text-gold" : "text-navy group-hover:text-navy/80"
                }`}>
                  {v.name}
                </span>
              </div>
              <div className="flex items-center gap-4 md:gap-5 shrink-0">
                <span className="font-(family-name:--font-playfair) italic text-navy/30 text-sm md:text-base group-hover:text-navy/50 transition-colors duration-300 hidden sm:block">
                  {v.sub}
                </span>
                <div className="w-9 h-9 border border-border flex items-center justify-center group-hover:border-gold/40 transition-all duration-300">
                  <svg className="w-3 h-3 text-navy/20 group-hover:text-gold transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
