"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(".who-img", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: { trigger: ".who-section", start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.fromTo(".mission-line", { scaleX: 0 }, {
        scaleX: 1,
        duration: 1.2,
        ease: "power3.out",
        transformOrigin: "left",
        scrollTrigger: { trigger: ".mission-line", start: "top 88%", once: true },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="who-section bg-cream">

      {/* ── MISSION ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Text */}
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="w-6 h-px bg-gold" />
              <span className="font-(family-name:--font-syne) text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">Our Mission</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-(family-name:--font-playfair) font-normal text-navy text-3xl md:text-4xl lg:text-5xl leading-[1.2]"
            >
              Learning has the{" "}
              <em className="text-gold not-italic italic">power</em>{" "}
              to transform everything.
            </motion.h2>

            <div className="mission-line w-full h-px bg-navy/8 origin-left" />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-navy/60 text-base md:text-[17px] leading-[1.9] font-light max-w-lg"
            >
              At Keaver Foundation, we are committed to transforming lives through education, empowerment, and excellence. Our mission is to identify and support high-potential, underserved students — providing them with world-class opportunities to study at top institutions, develop leadership skills, and drive meaningful change.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-navy/60 text-base md:text-[17px] leading-[1.9] font-light max-w-lg"
            >
              Through strategic partnerships, mentorship, and a strong culture of integrity and innovation, we aim to build a global community of compassionate, high-achieving individuals who not only make a difference but{" "}
              <span className="text-navy font-medium italic">become the difference.</span>
            </motion.p>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[460px] lg:h-[540px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200"
              className="who-img absolute inset-0 w-full h-[110%] object-cover object-top"
              alt="Students learning"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm border border-border p-5 shadow-lg"
            >
              <p className="font-(family-name:--font-playfair) text-3xl font-semibold text-navy">500+</p>
              <p className="font-(family-name:--font-syne) text-[10px] tracking-widest uppercase text-navy/50 mt-0.5">Lives Transformed</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── VISION ── */}
      <div id="mission" className="bg-[#F2EDE4] border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-px bg-gold" />
                <span className="font-(family-name:--font-syne) text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">Our Vision</span>
              </div>
              <h3 className="font-(family-name:--font-playfair) font-normal text-navy text-3xl md:text-4xl leading-[1.25]">
                A world where talent knows no barriers.
              </h3>
              <p className="text-navy/60 text-base leading-[1.9] font-light max-w-lg">
                Our vision is to create a world where talented, underserved youth have the opportunity to access the world&apos;s best education — regardless of race, age, or background. We are committed to empowering exceptional individuals to maximise their potential and drive global impact.
              </p>
              <p className="text-navy/60 text-base leading-[1.9] font-light max-w-lg">
                Through education, mentorship, and opportunity, we aim to develop the next generation of leaders who will shape a brighter, more inclusive future for all.
              </p>
            </motion.div>

            {/* Aims */}
            <div className="space-y-3 lg:pt-16">
              {[
                { label: "Provide Access", desc: "Breaking down barriers to world-class education for every deserving student." },
                { label: "Equal Opportunity", desc: "Ensuring talent — not circumstance — determines a student's future." },
                { label: "Maximise Potential", desc: "Helping every student actualise their dreams through holistic support." },
              ].map((aim, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-white border border-border p-6 group hover:border-gold/40 hover:shadow-sm transition-all duration-400"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-(family-name:--font-syne) text-gold font-semibold text-xs mt-0.5">0{i + 1}</span>
                    <div>
                      <h4 className="font-(family-name:--font-syne) text-navy font-semibold text-sm mb-1.5 group-hover:text-gold transition-colors duration-300">{aim.label}</h4>
                      <p className="text-navy/55 text-sm leading-relaxed font-light">{aim.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
