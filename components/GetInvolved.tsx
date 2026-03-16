"use client";
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
              className={`group ${action.color} p-8 md:p-10 rounded-2xl flex flex-col justify-end h-[320px] hover:bg-[#030f26] transition-colors duration-500 cursor-pointer`}
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
}