"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

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

      {/* ── HERO STATEMENT (from v2) ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-16 md:pb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="font-(family-name:--font-playfair) font-normal text-navy text-4xl md:text-6xl lg:text-[72px] leading-[1.1] mb-10 max-w-5xl mx-auto"
        >
          Our vision is a world where{" "}
          <em className="text-gold font-normal italic">talented, underserved youth</em>{" "}
          can access the world's best education — and become the{" "}
          <em className="text-gold font-normal italic">difference.</em>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            href="#mission"
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-navy/20 text-navy hover:bg-navy hover:text-white transition-colors duration-500 font-medium text-sm tracking-wide font-(family-name:--font-syne)"
          >
            Learn more about our mission
          </Link>
        </motion.div>
      </div>

      {/* ── MISSION (from v1) ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
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

          {/* Image with stat */}
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
              <p className="font-(family-name:--font-inter) text-3xl font-semibold text-navy">500+</p>
              <p className="font-(family-name:--font-syne) text-[10px] tracking-widest uppercase text-navy/50 mt-0.5">Lives Transformed</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── OUR WORK & STORY (from v2) ── */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {[
              {
                tag: "Our Work",
                title: "Our",
                em: "work",
                desc: "We work with global partners and leading institutions to sponsor and mentor students from underserved backgrounds.",
                link: "#what-we-do",
                linkLabel: "Learn more about our work",
                img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
              },
              {
                tag: "Our Story",
                title: "Our",
                em: "story",
                desc: "At Keaver Foundation, our journey began with a simple belief: talent is everywhere, but opportunity is not.",
                link: "#history",
                linkLabel: "Explore our story",
                img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
                className="flex flex-col sm:flex-row gap-6 lg:gap-8 group"
              >
                <div className="w-full sm:w-2/5 shrink-0 overflow-hidden relative aspect-[4/3] sm:aspect-auto">
                  <img
                    src={card.img}
                    alt={card.tag}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center py-2">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-4 h-px bg-gold" />
                    <span className="font-(family-name:--font-syne) text-[9px] tracking-[0.3em] uppercase text-gold/70 font-semibold">{card.tag}</span>
                  </div>
                  <h3 className="font-(family-name:--font-playfair) font-normal text-navy text-2xl lg:text-3xl mb-3">
                    {card.title}{" "}
                    <em className="italic font-normal text-gold">{card.em}</em>
                  </h3>
                  <p className="text-navy/55 font-light leading-relaxed text-sm lg:text-base mb-5">
                    {card.desc}
                  </p>
                  <Link
                    href={card.link}
                    className="font-(family-name:--font-syne) text-navy font-semibold text-[10px] tracking-[0.25em] uppercase hover:text-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    {card.linkLabel}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── VISION (from v1) ── */}
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