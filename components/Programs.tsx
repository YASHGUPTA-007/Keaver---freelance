"use client";
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
}