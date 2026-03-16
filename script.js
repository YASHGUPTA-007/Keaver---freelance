const fs = require('fs');

const hero = `"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(videoRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 overflow-hidden bg-[#030f26]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030f26]/80 via-[#030f26]/60 to-[#030f26] z-10" />
        <img ref={videoRef} src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070" className="absolute top-0 left-0 w-full h-[130%] object-cover opacity-30" alt="Hero background" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto text-center space-y-8 pt-20">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-medium text-white tracking-tight leading-[1.1]"
        >
          Education Has the Power <br className="hidden md:block"/> to Transform Lives
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-slate-300 font-sans font-light max-w-2xl mx-auto"
        >
          Supporting exceptional students to access world-class opportunities and shape a better future.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <button className="bg-[#D4AF37] text-[#030f26] px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-[#ebd582] transition-colors">
            Apply Now <MoveRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 rounded-full font-medium text-white border border-white/20 hover:bg-white/10 transition-colors">
            Get Involved
          </button>
        </motion.div>
      </div>
    </section>
  );
}`;

const programs = `"use client";
import { motion } from "framer-motion";
import { GraduationCap, Users, Globe, BookOpen, Lightbulb, UserCheck, ArrowRight } from "lucide-react";

const programsData = [
  { title: "Global Scholarships", icon: GraduationCap, desc: "Access to top global universities with financial support." },
  { title: "Mentorship", icon: UserCheck, desc: "Guidance from industry leaders." },
  { title: "Leadership", icon: Users, desc: "Developing generation of changemakers." },
  { title: "Future Skills", icon: Lightbulb, desc: "Equipping students with modern edge capabilities." },
  { title: "Global Exposure", icon: Globe, desc: "International experience to broaden views." },
  { title: "University Partners", icon: BookOpen, desc: "Alliances with elite educational institutions." },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 md:py-32 bg-slate-50 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#030f26] mb-6"
          >
            From Potential to Leadership
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg max-w-2xl mx-auto font-light"
          >
            Comprehensive programs designed to nurture exceptional talent and create lasting global impact.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programsData.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#030f26] group-hover:text-[#D4AF37] group-hover:border-[#030f26] transition-colors text-[#030f26]">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-[#030f26] mb-3">{p.title}</h3>
              <p className="text-slate-500 font-light leading-relaxed mb-8 min-h-[48px]">{p.desc}</p>
              <div className="flex items-center text-sm font-medium text-[#030f26] group-hover:text-[#D4AF37] transition-colors">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

const journey = `"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Identify Talent", desc: "Finding exceptional underserved students globally." },
  { num: "02", title: "Holistic Support", desc: "Providing mentorship and academic frameworks." },
  { num: "03", title: "Global Partners", desc: "Connecting with world-class universities." },
  { num: "04", title: "Leadership Dev", desc: "Training for meaningful social impact." },
  { num: "05", title: "Alumni Network", desc: "Building a lifelong community of givers." },
];

export default function HowWeWork() {
  return (
    <section className="py-24 md:py-32 bg-[#030f26] text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-24">The Journey</h2>
        
        <div className="space-y-16 md:space-y-24 relative">
          <div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-px bg-white/10 hidden md:block" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={\`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 \${i % 2 === 0 ? 'md:flex-row-reverse' : ''}\`}
            >
              <div className="hidden md:block md:w-1/2" />
              
              <div className="w-14 h-14 md:absolute md:left-1/2 md:-translate-x-1/2 rounded-full bg-[#030f26] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-serif text-lg z-10 shrink-0">
                {step.num}
              </div>
              
              <div className="md:w-1/2 md:px-16">
                <h3 className="text-2xl md:text-3xl font-serif mb-3">{step.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed text-lg">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

const layout = `import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Keaver Foundation | Transforming Lives",
  description: "Supporting exceptional underserved students.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={\`\${inter.variable} \${playfair.variable} antialiased bg-[#F8FAFC] text-slate-900\`}>
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}`;

const page = `import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Programs from "@/components/Programs";
import HowWeWork from "@/components/HowWeWork";
import Values from "@/components/Values";
import Impact from "@/components/Impact";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Programs />
      <HowWeWork />
      <Impact />
      <Values />
      <GetInvolved />
      <Footer />
    </>
  );
}`;

const navbar = `"use client";
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
      className={\`fixed top-0 inset-x-0 z-50 transition-colors duration-500 \${scrolled ? 'bg-[#030f26]/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}\`}
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
}`;

const getInvolved = `"use client";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const actions = [
  { title: "Become a Mentor", desc: "Guide and inspire the next generation.", color: "bg-slate-50" },
  { title: "Sponsor a Student", desc: "Fund a world-class education.", color: "bg-slate-100" },
  { title: "Partner With Us", desc: "Collaborate for greater impact.", color: "bg-slate-200" },
  { title: "Volunteer", desc: "Give your time to our mission.", color: "bg-slate-300" },
];

export default function GetInvolved() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#030f26] mb-6"
          >
            Get Involved
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-500 font-light max-w-2xl mx-auto"
          >
            Join us in shaping the leaders of tomorrow and building a brighter future.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={\`group \${action.color} p-8 md:p-10 rounded-2xl flex flex-col justify-end h-[320px] hover:bg-[#030f26] transition-colors duration-500 cursor-pointer\`}
            >
              <h3 className="text-2xl font-serif text-[#030f26] group-hover:text-white mb-2 transition-colors duration-500">{action.title}</h3>
              <p className="text-slate-600 group-hover:text-slate-300 font-light mb-6 transition-colors duration-500">{action.desc}</p>
              
              <div className="w-12 h-12 rounded-full border border-[#030f26]/20 group-hover:border-[#D4AF37]/50 flex items-center justify-center text-[#030f26] group-hover:text-[#D4AF37] transition-all duration-500 mt-auto">
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

const footer = `export default function Footer() {
  return (
    <footer className="bg-[#030f26] pt-24 pb-12 px-6 md:px-12 text-slate-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-white mb-2"><span className="text-[#D4AF37]">K</span>eaver</h2>
          <p className="text-sm font-light uppercase tracking-widest text-[#D4AF37]">Foundation</p>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-light hover:text-slate-300 transition-colors">
           <p>© {new Date().getFullYear()} Keaver Foundation. All rights reserved.</p>
           <div className="flex gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
}`;

const impact = `"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "500", suffix: "+", label: "Students Supported" },
  { value: "20", suffix: "+", label: "Partner Institutions" },
  { value: "10", suffix: "+", label: "Countries Reached" },
];

export default function Impact() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-center text-[#030f26] mb-20"
        >
          Our Global Impact
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
             >
                <div className="text-6xl md:text-8xl font-serif text-[#030f26] mb-4 flex items-baseline justify-center">
                  {stat.value}<span className="text-5xl text-[#D4AF37]">{stat.suffix}</span>
                </div>
                <div className="text-slate-500 font-medium tracking-wide uppercase text-sm">
                  {stat.label}
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

const values = `"use client";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Scale, Star, Activity } from "lucide-react";

const valuesData = [
  { name: "Faith in God", icon: Activity },
  { name: "Empowerment", icon: ShieldCheck },
  { name: "Fairness", icon: Scale },
  { name: "Compassion", icon: Heart },
  { name: "Excellence", icon: Star },
];

export default function Values() {
  return (
    <section className="py-24 md:py-32 bg-[#030f26]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-center text-white mb-20"
        >
          Our Core Values
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {valuesData.map((v, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="w-40 h-48 md:w-48 md:h-56 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col items-center justify-center gap-6 text-white p-4"
             >
                <v.icon className="w-10 h-10 text-[#D4AF37]" strokeWidth={1.5} />
                <span className="font-light tracking-wide text-center">{v.name}</span>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

const whoWeAre = `"use client";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#030f26] leading-tight">
              Learning has the power <br/>to transform everything.
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              At Keaver Foundation, we believe education can transform lives and communities. We identify talented underserved students and provide mentorship, scholarships, and leadership opportunities that enable them to thrive.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full rounded-2xl overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover" alt="Collaboration" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}`;

fs.writeFileSync('app/layout.tsx', layout);
fs.writeFileSync('app/page.tsx', page);
fs.writeFileSync('components/Hero.tsx', hero);
fs.writeFileSync('components/Programs.tsx', programs);
fs.writeFileSync('components/HowWeWork.tsx', journey);
fs.writeFileSync('components/Navbar.tsx', navbar);
fs.writeFileSync('components/GetInvolved.tsx', getInvolved);
fs.writeFileSync('components/Footer.tsx', footer);
fs.writeFileSync('components/Impact.tsx', impact);
fs.writeFileSync('components/Values.tsx', values);
fs.writeFileSync('components/WhoWeAre.tsx', whoWeAre);

console.log('Complete!');