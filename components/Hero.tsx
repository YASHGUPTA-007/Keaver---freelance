"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden";
    
    // Unlock scroll right as the preloader finishes
    const unlockScroll = setTimeout(() => {
      document.body.style.overflow = "";
    }, 2400);

    // Register Parallax after mount
    gsap.registerPlugin(ScrollTrigger);
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }

    return () => {
      clearTimeout(unlockScroll);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <section className="hero-section relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#030f26]">
      
      {/* 1. Base Dark Panel Preloader */}
      <motion.div 
        className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 1 }}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white/90 text-2xl md:text-3xl font-sans font-bold tracking-[0.4em] uppercase"
        >
          Keaver<span className="text-[#cda44b]">.</span>
        </motion.div>
      </motion.div>

      {/* 2. Secondary Luxury Accent Drawer */}
      <motion.div 
        className="fixed inset-0 z-[99] bg-[#0d162a]"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 1.15 }}
      />

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef} 
          autoPlay 
          loop 
          muted 
          playsInline 
          src="/bg.mp4" 
          className="absolute top-[-10%] left-0 w-full h-[120%] object-cover opacity-80" 
        />
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-80" />
      </div>

      <div className="relative z-20 w-full max-w-[100rem] mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-10 md:pb-16 pt-24">
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute top-28 right-6 md:right-12 hidden lg:flex gap-10 text-[10px] tracking-[0.25em] text-white/50 uppercase font-sans"
        >
          <span>Impact &bull; Action &bull; Change</span>
          <span>Founded in 2024</span>
        </motion.div>

        {/* Unified Content Flex Row anchored strictly to bottom to eliminate extra scroll space */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end w-full">
          
          {/* Left Side: Massive High-End Custom Typography */}
          <div className="flex flex-col mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="flex items-center gap-6 mb-6 md:mb-8"
            >
              <div className="w-16 h-[1px] bg-[#cda44b]"></div>
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white/80 uppercase font-sans">Empowering The Future</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col font-sans font-bold text-white uppercase text-[15vw] sm:text-[5.5rem] lg:text-[7rem] xl:text-[8.5rem] leading-[0.88] tracking-[-0.03em]"
            >
              <span className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">Education</span>
              <span className="flex items-baseline gap-3 md:gap-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                Has The <span className="font-serif italic text-white/80 tracking-tight lowercase text-[17vw] sm:text-[7rem] lg:text-[9rem] xl:text-[10rem] font-medium -ml-1 md:-ml-3 select-none">power</span>
              </span>
              <span className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] mt-2 lg:mt-0">To</span>
              <span className="text-[#cda44b] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] mt-2 lg:mt-0">Transform.</span>
            </motion.h1>
          </div>

          {/* Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[320px] flex flex-col gap-6 md:gap-8 shrink-0 relative z-30 lg:pb-3"
          >
            <p className="text-white text-base md:text-lg font-sans font-light leading-[1.7] drop-shadow-md">
              Discovering exceptional minds in underserved communities and guiding them to world-class opportunities.
            </p>
            
            <button className="group flex items-center gap-5 w-fit bg-transparent">
              <span className="relative flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full border border-white/30 overflow-hidden transition-all duration-500 group-hover:border-[#cda44b]">
                <span className="absolute inset-0 bg-[#cda44b] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
                <svg className="w-4 h-4 md:w-5 md:h-5 relative z-10 text-white group-hover:text-black transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.25em] font-sans font-semibold text-white/80 uppercase group-hover:text-white transition-colors duration-500">
                Apply Now
              </span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
