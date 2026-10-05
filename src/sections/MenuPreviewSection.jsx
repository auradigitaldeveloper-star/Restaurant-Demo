import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Wine, Clock, Plus } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';

export default function MenuPreviewSection({ onSelectDish, onExploreFullMenu }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredDishes = activeCategory === 'all'
    ? MENU_ITEMS.slice(0, 8)
    : MENU_ITEMS.filter(d => d.category === activeCategory);

  return (
    <section className="relative py-28 bg-[#070707] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow-gold top-1/4 right-0 opacity-15" />
      <div className="ambient-glow-dark bottom-10 left-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#d4af37]/30 text-[#d4af37] text-[10px] tracking-[0.3em] uppercase font-mono">
            <Sparkles className="w-3 h-3" />
            Seasonal Degustation &amp; A La Carte
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
            Culinary Artistry <br />
            <span className="italic font-serif gold-gradient-text">Crafted for the Senses</span>
          </h2>

          <p className="text-stone-300 text-sm sm:text-base font-light font-sans max-w-xl mx-auto leading-relaxed">
            Every dish represents an obsessive pursuit of purity, texture, and emotional depth. Explore our signature collection below.
          </p>
        </div>

        {/* Animated Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 custom-scrollbar">
          {MENU_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-sans whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'text-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                    : 'text-stone-400 hover:text-white glass-panel border border-white/5 hover:border-white/20'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa820a] rounded-full -z-10"
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  />
                )}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Editorial Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish, idx) => (
              <motion.div
                key={dish.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => onSelectDish(dish)}
                className="group relative rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-[#d4af37]/60 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative h-60 w-full overflow-hidden bg-black/40">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover zoom-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />

                  {dish.isSignature && (
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full glass-panel-gold border border-[#d4af37] text-[9px] uppercase font-bold tracking-widest text-[#f3e5ab] flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-[#d4af37]" />
                      Signature
                    </div>
                  )}

                  <div className="absolute top-4 right-4 font-serif text-lg font-normal text-[#f3e5ab] px-3 py-1 rounded-full glass-panel border border-white/10 shadow-lg">
                    {dish.price}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-mono">
                      {dish.subCategory}
                    </span>
                    <div className="flex gap-1">
                      {dish.dietary?.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded bg-black/60 text-stone-300 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-light group-hover:text-[#f3e5ab] transition-colors leading-snug">
                      {dish.name}
                    </h3>
                    <p className="text-stone-400 font-sans text-xs leading-relaxed mt-2 line-clamp-2">
                      {dish.description}
                    </p>
                  </div>

                  {/* Ingredients Preview */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <div className="flex flex-wrap gap-1">
                      {dish.ingredients?.slice(0, 3).map((ing) => (
                        <span key={ing} className="text-[10px] text-stone-400 bg-white/5 px-2 py-0.5 rounded">
                          {ing}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 text-[#d4af37] group-hover:translate-x-1 transition-transform font-medium text-xs shrink-0 ml-2">
                      <span>View</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Menu CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onExploreFullMenu}
            className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.25em] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Discover Full Digital Menu ({MENU_ITEMS.length} Dishes)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
