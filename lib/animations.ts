import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useFadeInFromBottom = (ref: React.RefObject<HTMLElement | null>, delay = 0) => {
  useLayoutEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      });
    }, ref);
    return () => ctx.revert();
  }, [ref, delay]);
};

export const useStaggerReveal = (
  containerRef: React.RefObject<HTMLElement | null>,
  selector: string
) => {
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(selector, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, [containerRef, selector]);
};
