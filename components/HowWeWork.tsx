"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    num: "01", title: "Identify Talent",
    desc: "We proactively seek out exceptional students in underserved communities globally — focusing purely on skill, drive, and potential regardless of background.",
    detail: "Partnering with schools, community organisations, and local leaders to discover hidden gems who would otherwise be overlooked.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
  },
  {
    num: "02", title: "Holistic Assessment",
    desc: "Each candidate undergoes a comprehensive evaluation — academic ability, character, values, leadership potential, and desire to give back.",
    detail: "We look beyond grades to understand the full person: their story, their resilience, and their vision for making an impact.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    num: "03", title: "Full Sponsorship",
    desc: "Selected students receive full financial support — school fees, living expenses, and access to resources needed to thrive at world-class institutions.",
    detail: "From Cambridge to Oxford, Ecole Des Roches to Ivy League — we open the right doors and ensure nothing financial stands in the way.",
    img: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80",
  },
  {
    num: "04", title: "Mentorship & Growth",
    desc: "Every scholar is paired with dedicated mentors from industry, academia, and our alumni community — guiding them throughout their academic journey.",
    detail: "Regular check-ins, career development sessions, AI & leadership training, and international experience opportunities.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
  },
  {
    num: "05", title: "Global Network",
    desc: "Graduates join a lifelong community of Keaveshians — high-achieving individuals committed to excellence, innovation, and giving back.",
    detail: "Alumni are encouraged to mentor future scholars, creating a perpetual cycle of impact and excellence across generations.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  },
];

const CARD_WIDTH = 440;
const GAP = 16;
const BG = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1800&q=80";

export default function HowWeWork() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeout = setTimeout(() => {
      const wrapper = wrapperRef.current;
      const container = containerRef.current;
      if (!wrapper || !container) return;

      const totalWidth = container.scrollWidth - window.innerWidth;
      if (totalWidth <= 0) return;

      gsap.to(container, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const totalW = steps.length * (CARD_WIDTH + GAP) + window.innerWidth;

  return (
    <div
      ref={wrapperRef}
      style={{ height: "100vh", overflow: "hidden", position: "relative" }}
    >
      {/* Section BG */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0B1F3A]/88" />
      </div>

      {/* Pinned header */}
      <div className="absolute top-0 left-0 z-10 px-6 md:px-12 pt-16 md:pt-20 pointer-events-none">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-gold" />
          <span className="font-(family-name:--font-syne) text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">How It Works</span>
        </div>
        <h2 className="font-(family-name:--font-playfair) font-normal text-white text-3xl md:text-4xl lg:text-5xl">
          The Journey
        </h2>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={containerRef}
        className="flex h-screen items-center relative z-10"
        style={{ width: `${totalW}px` }}
      >
        {/* Left spacer */}
        <div style={{ width: "calc(100vw / 2 - 120px)", flexShrink: 0 }} />

        {steps.map((step, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex flex-col border border-white/8 hover:border-gold/25 transition-colors duration-500 overflow-hidden"
            style={{
              width: `${CARD_WIDTH}px`,
              height: "480px",
              marginRight: `${GAP}px`,
              background: "#0d1e35",
            }}
          >
            {/* Image */}
            <div className="relative w-full flex-shrink-0" style={{ height: "180px" }}>
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.7) saturate(0.8)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1e35]" />
              <span className="absolute bottom-2 right-4 font-(family-name:--font-playfair) text-white/10 text-6xl leading-none select-none">
                {step.num}
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 justify-between p-8">
              <div>
                <span className="font-(family-name:--font-syne) text-gold font-semibold text-xs tracking-widest block mb-4">
                  {step.num}
                </span>
                <h3 className="font-(family-name:--font-playfair) font-normal text-white text-2xl md:text-3xl mb-4 leading-snug">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-[1.85] font-light">
                  {step.desc}
                </p>
              </div>
              <div className="border-t border-white/8 pt-5">
                <p className="text-white/30 text-xs leading-relaxed font-light italic font-(family-name:--font-playfair)">
                  {step.detail}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Right spacer */}
        <div style={{ width: "calc(100vw / 2 - 120px)", flexShrink: 0 }} />
      </div>
    </div>
  );
}