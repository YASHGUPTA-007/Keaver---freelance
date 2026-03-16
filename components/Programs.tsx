"use client";
import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Globe, BookOpen, Lightbulb, UserCheck, Brain, Heart } from "lucide-react";

const programs = [
  { num: "01", title: "Global Scholarships",       icon: GraduationCap, desc: "Full financial support to attend Ivy League and top-tier global universities including Cambridge, Oxford, and Ecole Des Roches.", tag: "Education" },
  { num: "02", title: "Mentorship Network",         icon: UserCheck,     desc: "Personalised guidance from industry leaders, successful alumni, and academic experts — navigating every stage of the journey.", tag: "Growth" },
  { num: "03", title: "Leadership Programs",        icon: Users,         desc: "Developing future changemakers in business, technology, governance, and social impact, with AI training included.", tag: "Leadership" },
  { num: "04", title: "AI & Future Skills",         icon: Brain,         desc: "Equipping students with artificial intelligence training and modern capabilities to compete and thrive in tomorrow's world.", tag: "Technology" },
  { num: "05", title: "Global Exposure",            icon: Globe,         desc: "Internships, international conferences, and global experiences that broaden perspectives and build cross-cultural competencies.", tag: "International" },
  { num: "06", title: "University Partnerships",    icon: BookOpen,      desc: "Strategic alliances with elite educational institutions worldwide — opening doors that talent alone might not unlock.", tag: "Partnerships" },
  { num: "07", title: "Community of Keaveshians",   icon: Heart,         desc: "A lifelong network of Keaver graduates committed to excellence, giving back, and mentoring the next generation of scholars.", tag: "Community" },
  { num: "08", title: "Alumni Impact",              icon: Lightbulb,     desc: "Tracking and celebrating success stories — turning sponsored graduates into mentors who reinvest in future generations.", tag: "Legacy" },
];

type Program = typeof programs[0];

function Card({ program, i }: { program: Program; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState("perspective(900px) rotateX(0deg) rotateY(0deg)");

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    setTilt(`perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) scale3d(1.015,1.015,1.015)`);
  };
  const onLeave = () => setTilt("perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform: tilt, transition: "transform 0.12s ease-out" }}
      className="relative bg-white border border-border hover:border-gold/40 hover:shadow-md p-7 group cursor-default transition-shadow duration-300"
    >
      <span className="absolute top-5 right-5 font-(family-name:--font-syne) font-bold text-4xl leading-none select-none text-navy/4 group-hover:text-navy/8 transition-colors">
        {program.num}
      </span>

      <span className="inline-block font-(family-name:--font-syne) text-[9px] tracking-[0.25em] uppercase text-gold/80 font-semibold border border-gold/25 px-2 py-0.5 mb-6">
        {program.tag}
      </span>

      <div className="w-10 h-10 border border-border flex items-center justify-center mb-5 group-hover:border-gold/40 transition-colors duration-400">
        <program.icon className="w-4 h-4 text-navy/40 group-hover:text-gold transition-colors duration-400" strokeWidth={1.5} />
      </div>

      <h3 className="font-(family-name:--font-syne) text-navy font-semibold text-[17px] mb-2.5 group-hover:text-gold transition-colors duration-300 leading-snug">
        {program.title}
      </h3>
      <p className="text-navy/50 text-sm leading-[1.8] font-light">
        {program.desc}
      </p>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="bg-[#F2EDE4] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-6 h-px bg-gold" />
            <span className="font-(family-name:--font-syne) text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">What We Offer</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-(family-name:--font-inter) font-bold text-navy text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight"
          >
            From potential{" "}
            <em className="text-gold italic">to</em>{" "}
            leadership.
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((p, i) => <Card key={i} program={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
