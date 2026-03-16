"use client";
import { motion } from "framer-motion";

const objectives = [
  {
    num: "01", title: "Sponsor High-Achieving Students",
    desc: "Provide full scholarships for exceptional underserved students to attend Ivy League and top global universities.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  },
  {
    num: "02", title: "Mentorship & Career Development",
    desc: "Guide students through their academic journey, connecting them with mentors and industry leaders.",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
  },
  {
    num: "03", title: "Build a Community of Excellence",
    desc: "Establish a network of high-achieving individuals committed to giving back and driving change.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
  {
    num: "04", title: "Develop Leadership & Impact Programs",
    desc: "Equip students with skills to become future leaders in business, technology, governance, and social impact.",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  },
  {
    num: "05", title: "Expand Educational Opportunities",
    desc: "Partner with world-class institutions — Cambridge, Oxford, Ecole Des Roches — to increase access to elite education.",
    img: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80",
  },
  {
    num: "06", title: "Encourage Global Exposure",
    desc: "Facilitate internships, conferences, and international experiences to broaden students' perspectives.",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
  },
  {
    num: "07", title: "Create Sustainable Partnerships",
    desc: "Secure long-term sponsorships, grants, and corporate partnerships to scale our impact globally.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    num: "08", title: "Strengthen Community Engagement",
    desc: "Support local initiatives that foster education, innovation, and social responsibility.",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
  },
  {
    num: "09", title: "Track & Celebrate Success Stories",
    desc: "Follow students' journeys, document achievements, and share testimonials that inspire the next generation.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    num: "10", title: "Inspire a Culture of Giving Back",
    desc: "Encourage sponsored graduates to mentor and support the next generation — creating a cycle of excellence.",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
  },
  {
    num: "11", title: "World-Class Governance",
    desc: "Build a foundation with excellent structure, strong policies, clear SOPs, and operational best practices.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
];

export default function Objectives() {
  return (
    <section id="objectives" className="bg-[#F5F0E8] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              <span className="font-(family-name:--font-syne) text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">What We Stand For</span>
            </div>
            <h2 className="font-(family-name:--font-inter) font-bold text-navy text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
              Our Objectives
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-navy/45 max-w-xs text-sm leading-relaxed md:text-right font-light"
          >
            Eleven pillars that guide every decision we make and every student we support.
          </motion.p>
        </div>

        {/* Unique layout: alternating full-bleed rows */}
        <div className="space-y-3">
          {objectives.map((obj, i) => {
            const isEven = i % 2 === 0;
            const isFeatured = i === 0 || i === 5 || i === 9;

            if (isFeatured) {
              // Full-width cinematic card
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className="group relative w-full overflow-hidden"
                  style={{ height: "420px" }}
                >
                  <img
                    src={obj.img}
                    alt={obj.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    style={{ filter: "brightness(0.45) saturate(0.85)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/90 via-[#0B1F3A]/50 to-transparent" />

                  {/* Animated gold border top */}
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-700 ease-out" />

                  <div className="absolute inset-0 flex items-end p-10 md:p-16">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-(family-name:--font-syne) text-gold text-[9px] tracking-[0.4em] uppercase font-semibold">{obj.num}</span>
                        <div className="w-8 h-px bg-gold/40" />
                      </div>
                      <h3 className="font-(family-name:--font-inter) font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 tracking-tight">
                        {obj.title}
                      </h3>
                      <p className="text-white/55 text-base leading-relaxed font-light max-w-lg">
                        {obj.desc}
                      </p>
                    </div>
                    {/* Big number right side */}
                    <div
                      className="absolute right-10 md:right-16 bottom-8 font-(family-name:--font-playfair) text-white/5 select-none leading-none"
                      style={{ fontSize: "clamp(6rem, 15vw, 14rem)" }}
                    >
                      {obj.num}
                    </div>
                  </div>
                </motion.div>
              );
            }

            // Paired row: image left or right + text panel
            const isLastOdd = i === objectives.length - 1 && objectives.length % 2 !== 0;

            if (isLastOdd) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                  className="group relative overflow-hidden"
                  style={{ height: "260px" }}
                >
                  <img
                    src={obj.img}
                    alt={obj.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.4) saturate(0.8)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/85 to-[#0B1F3A]/40" />
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center px-10 md:px-16 gap-6">
                    <span className="font-(family-name:--font-syne) text-gold/40 font-semibold text-xs tracking-widest shrink-0">{obj.num}</span>
                    <div>
                      <h3 className="font-(family-name:--font-inter) font-bold text-white text-2xl md:text-3xl mb-2">{obj.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed font-light max-w-xl">{obj.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            }

            // Skip odd indices that were handled as pairs
            if (i % 2 === 0 && !isFeatured) {
              const next = objectives[i + 1];
              if (!next) return null;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  style={{ height: "auto" }}
                >
                  {[obj, next].map((item, j) => (
                    <div
                      key={item.num}
                      className="group relative overflow-hidden"
                      style={{ height: "280px" }}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ filter: "brightness(0.42) saturate(0.8)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/30 to-transparent" />

                      {/* Hover gold line */}
                      <div className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-500 ease-out" />

                      {/* Number watermark */}
                      <span
                        className="absolute top-4 right-5 font-(family-name:--font-playfair) text-white/6 select-none leading-none"
                        style={{ fontSize: "5rem" }}
                      >
                        {item.num}
                      </span>

                      <div className="absolute bottom-0 left-0 right-0 p-7">
                        <span className="font-(family-name:--font-syne) text-gold text-[9px] tracking-[0.35em] uppercase font-semibold block mb-2">
                          {item.num}
                        </span>
                        <h3 className="font-(family-name:--font-inter) font-bold text-white text-xl md:text-2xl leading-snug mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/0 text-sm leading-relaxed font-light group-hover:text-white/55 transition-all duration-400 max-h-0 group-hover:max-h-20 overflow-hidden">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}