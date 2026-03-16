"use client";
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
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
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
}