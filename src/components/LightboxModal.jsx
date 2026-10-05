import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function LightboxModal({ item, items, onClose, onSelect }) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    onSelect(items[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIdx]);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/92 backdrop-blur-2xl"
        />

        {/* Top Controls */}
        <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
          <div className="glass-panel px-4 py-2 rounded-full border border-white/10 pointer-events-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-mono">
              {currentIndex + 1} / {items.length} &bull; {item.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-white border border-white/20 hover:border-[#d4af37] pointer-events-auto transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-panel hidden md:flex items-center justify-center text-white border border-white/20 hover:border-[#d4af37] transition-all hover:scale-105"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-panel hidden md:flex items-center justify-center text-white border border-white/20 hover:border-[#d4af37] transition-all hover:scale-105"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Content */}
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl max-h-[85vh] z-10 flex flex-col items-center"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[72vh] w-auto max-w-full object-contain rounded-2xl"
            />
          </div>

          <div className="mt-4 text-center max-w-xl glass-panel px-6 py-3 rounded-2xl border border-white/10">
            <h4 className="font-serif text-xl text-white font-light tracking-wide">
              {item.title}
            </h4>
            {item.caption && (
              <p className="text-xs text-stone-300 mt-1 font-sans">
                {item.caption}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
