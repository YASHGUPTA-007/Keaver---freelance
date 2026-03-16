"use client";
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
}