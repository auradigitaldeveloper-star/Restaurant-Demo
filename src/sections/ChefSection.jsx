import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, ArrowRight, Star } from 'lucide-react';
import { CHEF_PROFILE } from '../data/restaurantData';

export default function ChefSection({ onDiscoverStory, onOpenReservation }) {
  return (
    <section className="relative py-28 bg-[#080808] overflow-hidden">
      {/* Ambient lighting */}
      <div className="ambient-glow-gold top-10 right-10 opacity-20" />
      <div className="ambient-glow-dark bottom-10 left-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Chef Portrait in Luxury Glass Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-[0_30px_80px_rgba(0,0,0,0.9)] aspect-[3/4] group">
              <img
                src={CHEF_PROFILE.image}
                alt={CHEF_PROFILE.name}
                className="w-full h-full object-cover zoom-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-black/30" />

              {/* Floating Badge */}
              <div className="absolute top-5 left-5 px-3 py-1 rounded-full glass-panel-gold border border-[#d4af37] text-[10px] uppercase font-bold tracking-widest text-[#f3e5ab] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#d4af37]" />
                {CHEF_PROFILE.accolades}
              </div>

              {/* Chef Name Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-mono block mb-1">
                  {CHEF_PROFILE.title}
                </span>
                <h3 className="font-serif text-3xl font-light text-white">
                  Chef {CHEF_PROFILE.name}
                </h3>
              </div>
            </div>

            {/* Micro floating accent card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl glass-panel-gold border border-[#d4af37]/40 shadow-2xl backdrop-blur-2xl max-w-xs"
            >
              <div className="w-9 h-9 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0">
                <Star className="w-4 h-4 fill-[#d4af37]" />
              </div>
              <p className="text-[11px] text-stone-200 font-sans italic leading-snug">
                "We do not simply cook; we sculpt fleeting moments of pure sensory resonance."
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-mono">
                Culinary Leadership
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
              Crafted with <br />
              <span className="italic font-serif gold-gradient-text">Radical Intention</span>
            </h2>

            <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed font-light">
              {CHEF_PROFILE.bio}
            </p>

            {/* Philosophy Glass Card */}
            <div className="p-6 rounded-2xl glass-panel border-l-2 border-l-[#d4af37] border-white/10 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-mono block">
                The Master's Creed
              </span>
              <p className="font-serif text-lg text-white italic leading-relaxed">
                "{CHEF_PROFILE.quote}"
              </p>
            </div>

            {/* Signature highlight */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono block">Signature Creation</span>
                <span className="text-xs sm:text-sm text-[#f3e5ab] font-medium">{CHEF_PROFILE.signatureDish}</span>
              </div>
              <span className="text-xs text-[#d4af37] font-mono">Course VII</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onDiscoverStory}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenReservation}
                className="px-6 py-3.5 rounded-xl glass-panel border border-white/10 text-stone-300 hover:text-white text-xs uppercase tracking-[0.18em] transition-colors cursor-pointer"
              >
                Book Chef's Table
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
