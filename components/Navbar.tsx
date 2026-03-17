"use client";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Get Involved", href: "#involved" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  return (
    <>
      <motion.nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E4DDD2] py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <span className={`font-[family-name:var(--font-playfair)] font-semibold text-xl md:text-2xl tracking-wide transition-colors duration-500 ${scrolled ? "text-[#0B1F3A]" : "text-white"}`}>
              Keaver<span className="text-[#C9A84C]">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-[0.12em] uppercase font-[family-name:var(--font-syne)] font-medium relative group transition-colors duration-300 ${
                  scrolled ? "text-[#0B1F3A]/60 hover:text-[#0B1F3A]" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="#apply"
              className="ml-2 px-5 py-2 text-xs tracking-[0.15em] uppercase font-[family-name:var(--font-syne)] font-semibold bg-[#0B1F3A] text-white hover:bg-[#C9A84C] hover:text-[#0B1F3A] transition-all duration-300"
            >
              Apply for Sponsorship
            </Link>

          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className={`block w-6 h-px origin-center transition-colors ${menuOpen ? "bg-white" : scrolled ? "bg-[#0B1F3A]" : "bg-white"}`}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`block w-6 h-px ${menuOpen ? "bg-white" : scrolled ? "bg-[#0B1F3A]" : "bg-white"}`}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className={`block w-6 h-px origin-center transition-colors ${menuOpen ? "bg-white" : scrolled ? "bg-[#0B1F3A]" : "bg-white"}`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#0B1F3A] flex flex-col items-start justify-center px-10"
          >
            <div className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 + i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-4xl font-[family-name:var(--font-playfair)] font-normal text-white hover:text-[#C9A84C] transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-12"
            >
              <Link
                href="#apply"
                onClick={() => setMenuOpen(false)}
                className="inline-block px-8 py-3.5 bg-[#C9A84C] text-[#0B1F3A] text-sm font-semibold tracking-[0.15em] uppercase font-[family-name:var(--font-syne)]"
              >
                Apply for Sponsorship
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
