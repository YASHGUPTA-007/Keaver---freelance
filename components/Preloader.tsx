"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { BookOpen } from "lucide-react";

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setComplete(true);
        },
      });

      // 1. Icon fades in and scales slightly
      tl.from(iconRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "power2.out",
      })
      // 2. Icon simulates a page turning/expansion effect
      .to(iconRef.current, {
        scale: 1.2,
        duration: 0.6,
        ease: "power2.inOut",
      })
      // 3. Glow expands to cover screen
      .to(glowRef.current, {
        opacity: 1,
        scale: 50,
        duration: 0.6,
        ease: "power4.in",
      }, "-=0.3")
      // 4. Fade container out
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (complete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary overflow-hidden"
    >
      <div
        ref={glowRef}
        className="absolute w-16 h-16 bg-accent rounded-full opacity-0 blur-3xl"
      ></div>
      <div ref={iconRef} className="relative z-10 text-accent">
        <BookOpen strokeWidth={1} className="w-24 h-24" />
      </div>
    </div>
  );
}
