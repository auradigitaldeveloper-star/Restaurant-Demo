import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Users, Clock, Wine, Utensils, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { EXPERIENCES } from '../data/restaurantData';

export default function ExperiencesPage({ onSelectExperience, onOpenReservation }) {
  return (
    <div className="pt-32 pb-28 bg-[#070707] min-h-screen text-[#f4efe6]">
      {/* Background ambient lighting */}
      <div className="ambient-glow-gold top-20 right-1/3 opacity-15" />
      <div className="ambient-glow-dark bottom-20 left-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#d4af37]/40 text-[#d4af37] text-[10px] tracking-[0.3em] uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Bespoke Gastronomic Immersions
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-tight">
            Curated <span className="italic font-serif gold-gradient-text">Experiences</span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base font-light font-sans max-w-xl mx-auto leading-relaxed">
            From intimate table-side interaction with Executive Chef Laurent Vaneau to subterranean wine cellar degustations and private salon banquets.
          </p>
        </div>

        {/* Detailed Experience Modules */}
        <div className="space-y-20 mb-28">
          {EXPERIENCES.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel-gold rounded-3xl overflow-hidden border border-[#d4af37]/35 shadow-[0_25px_80px_rgba(0,0,0,0.85)] p-6 sm:p-10 lg:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left or Right Image */}
                  <div className={`lg:col-span-6 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover zoom-img"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-panel-gold border border-[#d4af37] text-[10px] uppercase font-bold tracking-widest text-[#f3e5ab]">
                        {exp.tag}
                      </div>

                      <div className="absolute bottom-4 left-5 right-5 flex justify-between items-center text-xs">
                        <span className="font-mono text-[#d4af37]">{exp.courses}</span>
                        <span className="text-white font-medium">{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Breakdown */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-mono block mb-1">
                        {exp.subtitle}
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                        {exp.title}
                      </h2>
                    </div>

                    <p className="text-stone-300 font-sans text-xs sm:text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2.5 py-4 border-y border-white/10">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-stone-200">
                          <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing & CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-mono block">
                          Capacity &bull; {exp.capacity}
                        </span>
                        <span className="font-serif text-2xl text-[#f3e5ab] font-normal">
                          {exp.price}
                        </span>
                      </div>

                      <button
                        onClick={() => onSelectExperience(exp)}
                        className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        Book Experience
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Private Dining & Executive Event Inquiry Banner */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl text-center max-w-4xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-full glass-panel-gold mx-auto flex items-center justify-center text-[#d4af37] border border-[#d4af37]">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl text-white font-light">
            Bespoke Banquets &amp; Sovereign Events
          </h3>

          <p className="text-stone-300 text-xs sm:text-sm font-sans max-w-xl mx-auto leading-relaxed">
            Planning a confidential executive buyout, milestone celebration, or international state dinner? Our Private Dining Concierge will curate custom printed menus, sommelier flights, and bespoke floral architecture.
          </p>

          <button
            onClick={() => onOpenReservation({ seatingArea: 'Private Wine Sanctum' })}
            className="px-8 py-3.5 rounded-xl bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-lg hover:scale-105 transition-all cursor-pointer"
          >
            Inquire With Private Events Concierge
          </button>
        </div>
      </div>
    </div>
  );
}
