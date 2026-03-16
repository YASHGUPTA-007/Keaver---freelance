"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${scrolled ? 'bg-[#030f26]/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-medium text-white tracking-wide">
          <span className="text-[#D4AF37]">K</span>eaver.
        </Link>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-200">
          <Link href="#about" className="hover:text-[#D4AF37] transition-colors">About</Link>
          <Link href="#programs" className="hover:text-[#D4AF37] transition-colors">Programs</Link>
          <Link href="#impact" className="hover:text-[#D4AF37] transition-colors">Impact</Link>
          <Link href="#apply" className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}