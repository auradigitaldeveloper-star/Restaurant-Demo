import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, Filter } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import LightboxModal from '../components/LightboxModal';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Food', 'Ambiance', 'Cellar', 'Culinary'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="pt-32 pb-28 bg-[#070707] min-h-screen text-[#f4efe6]">
      {/* Background ambient lighting */}
      <div className="ambient-glow-gold top-20 left-1/4 opacity-15" />
      <div className="ambient-glow-dark bottom-10 right-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#d4af37]/40 text-[#d4af37] text-[10px] tracking-[0.3em] uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Visual Archive &bull; Photography
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-tight">
            The Visual <span className="italic font-serif gold-gradient-text">Sanctuary</span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base font-light font-sans max-w-xl mx-auto leading-relaxed">
            A window into the stillness, culinary craftsmanship, and architectural atmosphere of AURA.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-6 flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-sans transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#d4af37] text-black font-semibold shadow-lg'
                    : 'glass-panel text-stone-300 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                onClick={() => setSelectedImage(item)}
                className={`group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-[#d4af37]/60 cursor-pointer shadow-xl ${
                  item.aspect === 'tall' ? 'row-span-2 h-[480px]' : item.aspect === 'wide' ? 'h-[280px]' : 'h-[340px]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover zoom-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full glass-panel text-[9px] uppercase font-mono text-[#d4af37] border border-white/10">
                  {item.category}
                </div>

                {/* Bottom Overlay with Title and "View Image" */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-white font-light group-hover:text-[#f3e5ab] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    {item.caption && (
                      <p className="text-[11px] text-stone-400 font-sans mt-1 line-clamp-1">
                        {item.caption}
                      </p>
                    )}
                  </div>

                  <div className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-white border border-white/20 group-hover:border-[#d4af37] group-hover:scale-110 transition-all shrink-0 ml-2">
                    <Maximize2 className="w-4 h-4 text-[#d4af37]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedImage}
        items={filteredItems}
        onClose={() => setSelectedImage(null)}
        onSelect={(img) => setSelectedImage(img)}
      />
    </div>
  );
}
