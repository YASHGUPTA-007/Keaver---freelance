"use client";
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
}