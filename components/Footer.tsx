"use client";
import Link from "next/link";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const navGroups = [
  {
    title: "Organisation",
    links: [
      { label: "About Us",     href: "#about" },
      { label: "Our Mission",  href: "#mission" },
      { label: "Our Vision",   href: "#mission" },
      { label: "Core Values",  href: "#values" },
      { label: "Objectives",   href: "#objectives" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Scholarships",    href: "#programs" },
      { label: "Mentorship",      href: "#programs" },
      { label: "Leadership",      href: "#programs" },
      { label: "AI Training",     href: "#programs" },
      { label: "Global Exposure", href: "#programs" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Apply Now",         href: "#apply" },
      { label: "Become a Mentor",   href: "#involved" },
      { label: "Sponsor a Student", href: "#involved" },
      { label: "Partner With Us",   href: "#involved" },
      { label: "Volunteer",         href: "#involved" },
    ],
  },
];

const socials = [
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Twitter,   label: "Twitter",   href: "#" },
  { Icon: Linkedin,  label: "LinkedIn",  href: "#" },
  { Icon: Facebook,  label: "Facebook",  href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#070F1C] overflow-hidden">

      {/* Background texture lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(90deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 80px)",
          }}
        />
      </div>

      {/* Giant background wordmark */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none whitespace-nowrap"
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "clamp(80px, 18vw, 260px)",
          fontWeight: 700,
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,168,76,0.06)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          bottom: "-0.15em",
        }}
      >
        KEAVER
      </div>

      {/* CTA band */}
      <div className="relative z-10 border-b border-white/5 px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <p className="font-(family-name:--font-syne) text-[10px] tracking-[0.4em] uppercase text-gold/60 mb-5">
              Ready to transform a life?
            </p>
            <h2
              className="font-(family-name:--font-playfair) font-normal text-white leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Every exceptional mind<br />
              deserves a <em className="text-gold not-italic">world-class</em> stage.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            
              <a href="#apply"
              className="group relative px-8 py-4 bg-gold text-[#070F1C] font-(family-name:--font-syne) text-[10px] tracking-[0.3em] uppercase font-semibold overflow-hidden transition-all duration-300 hover:bg-white"
            >
              Apply Now
            </a>
            
            <a  href="#involved"
              className="px-8 py-4 border border-white/15 text-white/50 hover:text-white hover:border-white/40 font-(family-name:--font-syne) text-[10px] tracking-[0.3em] uppercase font-semibold transition-all duration-300"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-10">
        <div className="grid grid-cols-12 gap-8 mb-14 pb-14 border-b border-white/5">

          {/* Brand col */}
          <div className="col-span-12 lg:col-span-4">
            <div className="mb-6">
              <p className="font-(family-name:--font-playfair) text-white text-3xl font-semibold tracking-tight">
                Keaver<span className="text-gold">.</span>
              </p>
              <div className="flex items-center gap-3 mt-1.5">
                <div className="w-4 h-px bg-gold/40" />
                <p className="font-(family-name:--font-syne) text-[9px] tracking-[0.4em] uppercase text-gold/40">
                  Foundation · Est. 2024
                </p>
              </div>
            </div>

            <p className="text-white/30 text-sm leading-[2] font-light mb-8 max-w-xs">
              Transforming lives through education, empowerment, and excellence — building the next generation of global leaders.
            </p>

            {/* Location pill */}
            <div className="inline-flex items-center gap-2.5 border border-white/8 px-4 py-2.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="font-(family-name:--font-syne) text-[9px] tracking-[0.3em] uppercase text-white/30">
                London, United Kingdom
              </span>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ Icon, label, href }) => (
                
               <a   key={label}
                  href={href}
                  aria-label={label}
                  className="group w-9 h-9 border border-white/8 flex items-center justify-center text-white/20 hover:border-gold/50 hover:text-gold hover:bg-gold/5 transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Nav groups */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {navGroups.map((group) => (
              <div key={group.title}>
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-3 h-px bg-gold/50" />
                  <h4 className="font-(family-name:--font-syne) text-[9px] tracking-[0.35em] uppercase text-gold/60 font-semibold">
                    {group.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-sm text-white/25 hover:text-white/70 transition-colors duration-300 font-light"
                      >
                        <span className="w-0 h-px bg-gold/60 group-hover:w-3 transition-all duration-300" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-(family-name:--font-syne) text-[10px] tracking-[0.2em] text-white/15 uppercase">
            © {new Date().getFullYear()} Keaver Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-white/10">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-1">
                <a href="#" className="font-(family-name:--font-syne) text-[10px] tracking-[0.15em] uppercase hover:text-white/35 transition-colors duration-300">
                  {item}
                </a>
                {i < arr.length - 1 && <span className="text-white/10 mx-1">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}