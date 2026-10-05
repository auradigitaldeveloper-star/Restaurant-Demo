import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow-gold -top-10 left-1/3 opacity-15" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#d4af37]/30 text-[#d4af37] text-[10px] tracking-[0.3em] uppercase font-mono">
            <Sparkles className="w-3 h-3" />
            Critical Acclaim
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Words from <span className="italic font-serif gold-gradient-text">Our Patrons</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-[#d4af37]/50 flex flex-col justify-between space-y-6 relative group"
            >
              <Quote className="w-8 h-8 text-[#d4af37]/30 group-hover:text-[#d4af37]/60 transition-colors" />

              {/* Stars */}
              <div className="flex items-center gap-1 text-[#d4af37]">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="font-serif text-lg sm:text-xl text-[#f4efe6] font-light leading-relaxed italic flex-1">
                "{t.quote}"
              </p>

              {/* Author & Role */}
              <div className="pt-4 border-t border-white/10">
                <span className="font-serif text-base text-white block">
                  {t.author}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-mono block mt-0.5">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
