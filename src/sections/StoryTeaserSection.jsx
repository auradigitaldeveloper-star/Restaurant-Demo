import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Award, UtensilsCrossed } from 'lucide-react';

export default function StoryTeaserSection({ onLearnStory, onExploreMenu }) {
  return (
    <section className="relative py-28 overflow-hidden bg-[#080808]">
      {/* Background ambient lighting */}
      <div className="ambient-glow-gold -top-20 -left-20 opacity-20" />
      <div className="ambient-glow-dark bottom-0 right-0 opacity-40" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Storytelling */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-mono">
                The AURA Philosophy
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1]">
              Food is only <br />
              <span className="italic gold-gradient-text">the beginning.</span>
            </h2>

            <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed font-light">
              We believe a dining experience should reverberate far beyond flavor. At AURA, every element—from the temperature of the hand-cast bronze cutlery to the acoustic stillness of our smoked-glass sanctums—is orchestrated to transport you into a higher sensory realm.
            </p>

            <p className="text-stone-400 font-sans text-xs sm:text-sm leading-relaxed">
              Under the visionary direction of Executive Chef Laurent Vaneau, our kitchen pairs centuries-old classical French precision with the seasonal reverence of Kyoto kaiseki, using ingredients sourced directly from ethical heritage purveyors.
            </p>

            {/* Micro Accolades Row */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl text-[#f3e5ab] block">
                  3 Michelin Stars
                </span>
                <span className="text-[11px] text-stone-400 uppercase tracking-wider font-mono">
                  Guide Michelin 2025
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl text-[#f3e5ab] block">
                  24 Regenerative
                </span>
                <span className="text-[11px] text-stone-400 uppercase tracking-wider font-mono">
                  Direct Farm Partners
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onLearnStory}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onExploreMenu}
                className="px-6 py-3.5 rounded-xl glass-panel text-stone-300 hover:text-white text-xs uppercase tracking-[0.2em] border border-white/10 hover:border-[#d4af37] transition-all cursor-pointer"
              >
                View Tasting Menus
              </button>
            </div>
          </motion.div>

          {/* Right Column: Large Image with Floating Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Main Photography Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.9)] aspect-[4/5] group">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85"
                alt="AURA Culinary Mastery"
                className="w-full h-full object-cover zoom-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Floating Glass Quote Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-panel-gold border border-[#d4af37]/40 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-2 text-[#d4af37] text-xs font-mono mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Chef Laurent Vaneau</span>
                </div>
                <p className="font-serif text-base sm:text-lg italic text-[#f4efe6] leading-snug">
                  "We do not merely assemble ingredients; we sculpt fleeting moments of pure sensory resonance."
                </p>
              </motion.div>
            </div>

            {/* Smaller floating accent card in top right */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl glass-panel border border-white/15 shadow-xl backdrop-blur-2xl"
            >
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-mono block">Atmospheric</span>
                <span className="text-xs text-white font-medium">Bespoke 12 Courses</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
