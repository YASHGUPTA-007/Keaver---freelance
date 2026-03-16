"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const tiers = [
  { title: "Become a Mentor",  desc: "Share your expertise and wisdom with a high-potential scholar. Help shape the next generation of global leaders.", cta: "Join as Mentor",    badge: "People Impact"      },
  { title: "Sponsor a Student", desc: "Provide the financial foundation for a deserving student to access a world-class education and realise their potential.", cta: "Fund Education",   badge: "Financial Impact"   },
  { title: "Partner With Us",  desc: "Collaborate with Keaver Foundation as an institution or corporation — together we can scale our global impact.", cta: "Start Partnership", badge: "Institutional Impact" },
  { title: "Volunteer",        desc: "Give your time and skills to our mission. From event support to community outreach — every contribution matters.", cta: "Get Involved",     badge: "Community Impact"   },
];

export default function GetInvolved() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="involved" className="bg-cream py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <span className="w-6 h-px bg-gold" />
            <span className="font-(family-name:--font-syne) text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">Join The Mission</span>
            <span className="w-6 h-px bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-(family-name:--font-playfair) font-normal text-navy text-3xl md:text-4xl lg:text-5xl mb-4"
          >
            Get Involved
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-navy/50 max-w-md mx-auto text-base font-light leading-relaxed"
          >
            There is a role for everyone in building a more equitable world.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative flex flex-col h-80 md:h-96 p-7 border transition-all duration-400 cursor-pointer overflow-hidden ${
                hovered === i
                  ? "bg-navy border-navy shadow-lg"
                  : "bg-white border-border hover:shadow-sm"
              }`}
            >
              <span className={`font-(family-name:--font-syne) text-[9px] tracking-[0.25em] uppercase font-semibold border px-2 py-0.5 w-fit transition-colors duration-300 ${
                hovered === i ? "text-gold/80 border-gold/30" : "text-gold/70 border-gold/20"
              }`}>
                {tier.badge}
              </span>

              <div className="mt-auto">
                <h3 className={`font-(family-name:--font-playfair) font-normal text-2xl mb-3 leading-snug transition-colors duration-300 ${
                  hovered === i ? "text-white" : "text-navy"
                }`}>
                  {tier.title}
                </h3>
                <p className={`text-sm leading-[1.8] mb-6 font-light transition-colors duration-300 ${
                  hovered === i ? "text-white/55" : "text-navy/50"
                }`}>
                  {tier.desc}
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 border flex items-center justify-center transition-all duration-300 ${
                    hovered === i ? "border-gold bg-gold" : "border-navy/20"
                  }`}>
                    <svg className={`w-3 h-3 transition-colors duration-300 ${hovered === i ? "text-navy" : "text-navy/40"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className={`font-(family-name:--font-syne) text-[10px] tracking-[0.2em] uppercase font-semibold transition-colors duration-300 ${
                    hovered === i ? "text-gold" : "text-navy/35"
                  }`}>
                    {tier.cta}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
