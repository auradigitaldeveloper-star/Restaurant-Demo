import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Users, Clock, Utensils, Check, ArrowRight } from 'lucide-react';
import { EXPERIENCES } from '../data/restaurantData';

export default function ExperiencesSection({ onSelectExperience, onExploreExperiences }) {
  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow-gold top-1/2 left-0 -translate-y-1/2 opacity-15" />
      <div className="ambient-glow-dark bottom-10 right-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#d4af37]/40 text-[#d4af37] text-[10px] tracking-[0.3em] uppercase font-mono">
            <Sparkles className="w-3 h-3" />
            Curated Immersions
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
            Extraordinary <br />
            <span className="italic font-serif gold-gradient-text">Dining Experiences</span>
          </h2>

          <p className="text-stone-300 text-sm sm:text-base font-light font-sans max-w-xl mx-auto leading-relaxed">
            Beyond our main dining salon, we invite you to immerse yourself in our signature gastronomic journeys crafted for connoisseurs, celebrations, and intimate moments.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-[#d4af37]/50 shadow-[0_20px_60px_rgba(0,0,0,0.7)] flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover zoom-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/40 to-black/30" />

                <div className="absolute top-5 left-5 px-3 py-1 rounded-full glass-panel-gold border border-[#d4af37] text-[10px] uppercase font-bold tracking-widest text-[#f3e5ab]">
                  {exp.tag}
                </div>

                <div className="absolute bottom-5 left-6 right-6">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-mono block mb-1">
                    {exp.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
                    {exp.title}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-stone-300 font-sans text-xs sm:text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 py-3 border-y border-white/5">
                  {exp.highlights.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-stone-300">
                      <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Metadata & CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-mono block">
                      {exp.courses} &bull; {exp.duration}
                    </span>
                    <span className="font-serif text-xl text-[#f3e5ab] font-medium">
                      {exp.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectExperience(exp)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book Experience
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
