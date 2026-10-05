import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Wine, Flame, Clock, Award, CheckCircle2, Calendar } from 'lucide-react';

export default function DishModal({ dish, onClose, onReserveForDish }) {
  if (!dish) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Dark blurred backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel-gold rounded-3xl border border-[#d4af37]/30 shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-stone-300 hover:text-white border border-white/20 hover:border-[#d4af37] transition-colors"
            aria-label="Close dish modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column: Dish Photography & Signature Badges */}
            <div className="relative h-72 md:h-full min-h-[340px] overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-black/40" />

              {dish.isSignature && (
                <div className="absolute top-6 left-6 flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel-gold border border-[#d4af37] text-[10px] uppercase font-bold tracking-widest text-[#f3e5ab]">
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                  Chef's Signature
                </div>
              )}

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-mono block mb-1">
                  {dish.subCategory}
                </span>
                <span className="font-serif text-3xl font-light text-white leading-tight">
                  {dish.name}
                </span>
                <div className="flex items-center gap-4 mt-2">
                  <span className="font-serif text-2xl text-[#f3e5ab] font-normal">
                    {dish.price}
                  </span>
                  {dish.prepTime && (
                    <span className="flex items-center gap-1 text-xs text-stone-300">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      {dish.prepTime}
                    </span>
                  )}
                  {dish.calories && (
                    <span className="text-xs text-stone-400">
                      {dish.calories}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Culinary Profile */}
            <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div>
                {/* Dietary Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {dish.dietary?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[10px] tracking-wider uppercase bg-white/5 border border-white/10 text-stone-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-stone-300 font-sans text-sm leading-relaxed mb-4">
                  {dish.description}
                </p>

                {dish.fullStory && (
                  <div className="p-4 rounded-xl glass-panel border-l-2 border-l-[#d4af37] border-white/5 mb-5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-mono block mb-1">
                      Culinary Heritage
                    </span>
                    <p className="text-xs text-stone-300 leading-relaxed italic">
                      "{dish.fullStory}"
                    </p>
                  </div>
                )}

                {/* Key Ingredients */}
                <div className="mb-4">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-stone-400 block mb-2 font-mono">
                    Artisanal Ingredients
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {dish.ingredients?.map((ing) => (
                      <span
                        key={ing}
                        className="text-xs px-2.5 py-1 rounded-lg bg-stone-900/80 border border-white/5 text-stone-200"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sommelier Wine Pairing */}
                {dish.winePairing && (
                  <div className="p-3.5 rounded-xl bg-[#14120e] border border-[#d4af37]/20 flex items-start gap-3 mb-4">
                    <Wine className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block">
                        Head Sommelier Pairing
                      </span>
                      <p className="text-xs text-[#f4efe6] font-medium mt-0.5">
                        {dish.winePairing}
                      </p>
                    </div>
                  </div>
                )}

                {/* Allergens warning */}
                {dish.allergens && dish.allergens.length > 0 && (
                  <div className="text-[11px] text-stone-400">
                    <span className="text-stone-300 font-medium">Allergen Notice: </span>
                    {dish.allergens.join(', ')}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onClose();
                    if (onReserveForDish) onReserveForDish(dish);
                  }}
                  className="flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.2em] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  Reserve Table For This Dish
                </button>
                <button
                  onClick={onClose}
                  className="py-3.5 px-5 rounded-xl glass-panel border border-white/10 text-stone-300 hover:text-white text-xs uppercase tracking-[0.18em] transition-colors"
                >
                  Back to Menu
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
