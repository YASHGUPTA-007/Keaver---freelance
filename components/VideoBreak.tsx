"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function VideoBreak() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      gsap.fromTo(
        ".vb-text",
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, stagger: 0.14, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 68%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[65vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
      <video
        ref={videoRef}
        autoPlay loop muted playsInline src="/bg2.mp4"
        className="absolute inset-0 w-full h-[115%] object-cover top-[-7.5%]"
      />
      <div className="absolute inset-0 bg-navy/75 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/50 z-10" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="vb-text flex items-center justify-center gap-4 mb-7">
          <div className="w-10 h-px bg-gold/60" />
          <span className="font-(family-name:--font-syne) text-[9px] tracking-[0.4em] uppercase text-gold/80 font-medium">
            Our Motto
          </span>
          <div className="w-10 h-px bg-gold/60" />
        </div>

        <h2 className="vb-text font-(family-name:--font-inter) font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-3 tracking-tight">
          Transforming
        </h2>
        <h2 className="vb-text font-(family-name:--font-inter) italic font-bold text-gold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 tracking-tight">
          Lives
        </h2>
        <p className="vb-text text-white/55 text-base md:text-lg font-light leading-relaxed max-w-md mx-auto font-(family-name:--font-inter)">
          One scholarship. One mentor. One opportunity.<br />A lifetime of impact.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent z-20" />
    </section>
  );
}
