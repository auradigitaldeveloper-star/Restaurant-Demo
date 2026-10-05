import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Sparkles, ChevronDown, Award } from 'lucide-react';

export default function HeroSection({ onExploreMenu, onOpenReservation }) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-24">
      {/* Background Image with slow zoom out animation */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=90"
          alt="AURA Culinary Atmosphere"
          className="w-full h-full object-cover object-center"
        />
        {/* Cinematic Multi-layered Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/60 to-black/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#070707]/40 to-[#070707]/90" />
      </motion.div>

      {/* Ambient Gold Particle / Glow */}
      <div className="ambient-glow-gold top-1/3 left-1/2 -translate-x-1/2 opacity-30" />

      {/* Floating Glass Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        {/* Top Michelin / Accolade Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#d4af37]/40 text-[#f3e5ab] text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
        >
          <Award className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Three Michelin Stars &bull; Mayfair London</span>
        </motion.div>

        {/* Floating Glass Panel with Editorial Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-8 sm:p-12 md:p-16 rounded-3xl border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.8)] backdrop-blur-2xl max-w-4xl w-full"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xs sm:text-sm uppercase tracking-[0.4em] text-[#d4af37] font-mono mb-4 font-semibold"
          >
            An Experience Beyond the Plate
          </motion.p>

          {/* Main Editorial Heading with Line Reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.05] mb-6"
          >
            Where Culinary Art <br className="hidden sm:inline" />
            <span className="italic font-serif gold-gradient-text">Meets Atmospheric</span> Wonder
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-stone-300 font-sans text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-light"
          >
            Exceptional ingredients. Thoughtful cooking. An atmosphere designed to be remembered.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(212,175,55,0.7)] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Reserve a Table
            </button>

            <button
              onClick={onExploreMenu}
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel border border-white/20 text-stone-200 hover:text-white text-xs uppercase tracking-[0.2em] hover:border-[#d4af37] transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#d4af37]" />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-col items-center gap-2 text-stone-400 cursor-pointer"
          onClick={onExploreMenu}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-stone-500">
            Scroll to Discover
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-[#d4af37]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
