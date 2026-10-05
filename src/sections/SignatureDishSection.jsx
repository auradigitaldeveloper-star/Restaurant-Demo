import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Wine, Flame, Award } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';

export default function SignatureDishSection({ onSelectDish, onOpenReservation }) {
  // Select Miyazaki A5 Wagyu dish
  const signatureDish = MENU_ITEMS.find((d) => d.id === 'dish-6') || MENU_ITEMS[0];

  return (
    <section className="relative py-28 overflow-hidden bg-[#050505]">
      {/* Background cinematic photography container */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=2000&q=85"
          alt="Signature Miyazaki A5 Wagyu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Floating Glass Spotlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 glass-panel-gold p-8 sm:p-12 rounded-3xl border border-[#d4af37]/40 shadow-[0_30px_90px_rgba(0,0,0,0.9)] backdrop-blur-2xl space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[10px] font-bold uppercase tracking-[0.25em] text-[#f3e5ab] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                Signature Masterpiece
              </span>
              <span className="text-xs font-mono text-stone-400">BMS 11 Marble Score</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
              Miyazaki A5 Wagyu <br />
              <span className="italic font-serif gold-gradient-text">&amp; White Truffle Silk</span>
            </h2>

            <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed font-light">
              Certified Japanese A5 striploin seared over white binchotan coals to create a delicate caramelized crust, yielding to an ethereal melting interior. Finished with 25-year barrel-aged Modena balsamic and hand-shaved Alba truffles.
            </p>

            {/* Tasting Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 border-y border-white/10 text-xs">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <span className="text-stone-400 text-[10px] uppercase tracking-wider block font-mono">Provenance</span>
                <span className="text-white font-medium">Miyazaki, Japan</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <span className="text-stone-400 text-[10px] uppercase tracking-wider block font-mono">Cooking Method</span>
                <span className="text-white font-medium">Binchotan Coals</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 col-span-2 sm:col-span-1">
                <span className="text-stone-400 text-[10px] uppercase tracking-wider block font-mono">Sommelier Pairing</span>
                <span className="text-[#f3e5ab] font-medium truncate block">Château Margaux 2015</span>
              </div>
            </div>

            {/* Price and CTA Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-mono block">A La Carte / Tasting</span>
                <span className="font-serif text-3xl text-[#f3e5ab] font-normal">{signatureDish.price}</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => onSelectDish(signatureDish)}
                  className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Dish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenReservation}
                  className="flex-1 sm:flex-none px-5 py-3.5 rounded-xl glass-panel border border-white/15 text-stone-200 hover:text-white text-xs uppercase tracking-[0.18em] transition-colors"
                >
                  Reserve Table
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right: Plated Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-[0_30px_70px_rgba(0,0,0,0.9)] aspect-square group">
              <img
                src={signatureDish.image}
                alt={signatureDish.name}
                className="w-full h-full object-cover zoom-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-[#d4af37]">Course VII &bull; Degustation</span>
                <button
                  onClick={() => onSelectDish(signatureDish)}
                  className="px-3 py-1 rounded-full glass-panel border border-white/20 hover:border-[#d4af37] text-[11px] font-sans transition-colors cursor-pointer"
                >
                  View Details &rarr;
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
