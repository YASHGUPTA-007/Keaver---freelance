"use client";
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
}