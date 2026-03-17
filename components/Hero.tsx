"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const unlock = setTimeout(() => { document.body.style.overflow = ""; }, 2200);

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      gsap.to(".hero-content", {
        opacity: 0,
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "30% top",
          end: "75% top",
          scrub: true,
        },
      });
    });

    if (videoRef.current) videoRef.current.currentTime = 5;

    return () => {
      clearTimeout(unlock);
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, []);

  return (
    <section className="hero-section relative h-screen min-h-[600px] w-full flex items-end overflow-hidden bg-[#0B1F3A]">

      {/* Preloader */}
      <motion.div
        className="fixed inset-0 z-[100] bg-[#0B1F3A] flex items-center justify-center"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.9 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-(family-name:--font-playfair) text-white text-2xl font-normal tracking-widest">
            Keaver<span className="text-gold">.</span>
          </p>
          <p className="font-(family-name:--font-syne) text-white/40 text-[10px] tracking-[0.4em] uppercase mt-2">Foundation</p>
        </motion.div>
      </motion.div>
      <motion.div
        className="fixed inset-0 z-[99] bg-[#1E3A5F]"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 1.05 }}
      />

      {/* Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay loop muted playsInline src="/bg.mp4"
          className="absolute top-[-10%] left-0 w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/85 via-[#0B1F3A]/50 to-[#0B1F3A]/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent z-10" />
      </div>

      {/* Corner tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute top-24 right-6 md:right-12 z-20 hidden lg:flex flex-col items-end gap-1.5"
      >
        <span className="font-(family-name:--font-syne) text-[9px] tracking-[0.35em] text-white/35 uppercase">Est. 2024 · London</span>
        <div className="w-12 h-px bg-white/15" />
      </motion.div>

      {/* Content */}
      <div className="hero-content relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 pt-28">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-10 lg:gap-0 w-full">

          {/* Heading */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex items-center gap-4 mb-7"
            >
              <div className="w-10 h-px bg-gold" />
              <span className="font-(family-name:--font-syne) text-[10px] tracking-[0.3em] text-white/55 uppercase font-medium">
                Empowering The Future
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-(family-name:--font-playfair) font-normal text-white leading-[1.08] max-w-3xl"
            >
              <span className="block text-[11vw] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.2rem]">Education</span>
              <span className="block text-[11vw] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.2rem]">
                has the{" "}
                <em className="text-gold not-italic">power</em>
              </span>
              <span className="block text-[11vw] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.2rem]">to transform</span>
              <span className="block text-[11vw] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.2rem] text-gold/90">lives.</span>
            </motion.h1>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[280px] shrink-0 flex flex-col gap-7 lg:pb-2"
          >
            <p className="text-white/65 text-base leading-[1.85] font-light font-(family-name:--font-inter)">
              Discovering exceptional minds in underserved communities and guiding them to world-class opportunities — one life at a time.
            </p>
            <a href="#apply" className="group flex items-center gap-4 w-fit">
              <span className="relative w-11 h-11 border border-white/25 flex items-center justify-center overflow-hidden">
                <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out" />
                <svg className="relative z-10 w-4 h-4 text-white group-hover:text-navy transition-colors duration-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="font-(family-name:--font-syne) text-[10px] tracking-[0.28em] uppercase text-white/60 group-hover:text-white transition-colors font-medium">
                Apply Now
              </span>
            </a>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="font-(family-name:--font-syne) text-[9px] tracking-[0.35em] uppercase text-white/30">Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}