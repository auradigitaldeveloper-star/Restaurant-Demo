import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Filter, Wine, Clock, Utensils, Award, ArrowRight, Check } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';

export default function MenuPage({ onSelectDish, onOpenReservation }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState('ALL');
  const [menuMode, setMenuMode] = useState('alacarte'); // 'alacarte' or 'degustation'

  const dietaryOptions = ['ALL', 'GF', 'DF', 'VG', 'NF'];

  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((dish) => {
      const matchCategory = activeCategory === 'all' || dish.category === activeCategory;
      const matchSearch =
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchDietary =
        selectedDietary === 'ALL' ||
        (dish.dietary && dish.dietary.includes(selectedDietary));

      return matchCategory && matchSearch && matchDietary;
    });
  }, [activeCategory, searchQuery, selectedDietary]);

  return (
    <div className="pt-32 pb-28 bg-[#070707] min-h-screen text-[#f4efe6]">
      {/* Background ambient lighting */}
      <div className="ambient-glow-gold top-20 right-1/4 opacity-15" />
      <div className="ambient-glow-dark top-1/2 left-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#d4af37]/40 text-[#d4af37] text-[10px] tracking-[0.3em] uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Haute Cuisine &bull; Season 2026
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-tight">
            The Digital <span className="italic font-serif gold-gradient-text">Menu Collection</span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base font-light font-sans max-w-xl mx-auto leading-relaxed">
            Every dish is an exploration of micro-seasonality, rare provenance, and precise culinary alchemy.
          </p>

          {/* Mode Switcher: A La Carte vs 12-Course Tasting Menu */}
          <div className="pt-4 flex items-center justify-center">
            <div className="glass-panel p-1.5 rounded-full border border-white/10 flex items-center gap-2">
              <button
                onClick={() => setMenuMode('alacarte')}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-sans transition-all cursor-pointer ${
                  menuMode === 'alacarte'
                    ? 'bg-[#d4af37] text-black font-semibold shadow-lg'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                A La Carte Selection
              </button>
              <button
                onClick={() => setMenuMode('degustation')}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-sans transition-all cursor-pointer ${
                  menuMode === 'degustation'
                    ? 'bg-[#d4af37] text-black font-semibold shadow-lg'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                12-Course Degustation
              </button>
            </div>
          </div>
        </div>

        {/* Degustation Showcase Mode */}
        {menuMode === 'degustation' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-20 glass-panel-gold rounded-3xl p-8 sm:p-12 border border-[#d4af37]/40 shadow-[0_20px_70px_rgba(0,0,0,0.85)] max-w-4xl mx-auto"
          >
            <div className="text-center space-y-3 pb-8 border-b border-white/10">
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-mono">
                Executive Chef's Grand Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
                The 12-Course Sensory Tasting Menu
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm font-sans max-w-md mx-auto">
                £245 per guest &bull; Sommelier Grand Cru Pairing £165 &bull; Estimated Duration 3.5 Hours
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
              {[
                { act: "Act I", name: "Hokkaido Scallop Crudo", desc: "Imperial yuzu emulsion & finger lime caviar" },
                { act: "Act II", name: "Smoked Duck & Morel Consommé", desc: "Infused table-side with 24k gold veil" },
                { act: "Act III", name: "Charred King Oyster Carpaccio", desc: "Périgord winter truffle & black garlic" },
                { act: "Act IV", name: "Oscietra Caviar & Brioche Cloud", desc: "Caramelized bone marrow brioche & Normandy cream" },
                { act: "Act V", name: "Wild Brittany Turbot Velouté", desc: "Avruga caviar emulsion & saffron fondants" },
                { act: "Act VI", name: "Hand-Cut Tagliolini & Alba Truffle", desc: "40-yolk pasta & 36-month Parmigiano-Reggiano" },
                { act: "Act VII", name: "Miyazaki A5 Wagyu Striploin", desc: "Binchotan coals, 25-yr balsamic & truffle silk" },
                { act: "Act VIII", name: "Dry-Aged Challandais Duck", desc: "Black cherry reduction & wild lavender honey" },
                { act: "Act IX", name: "Artisanal French & British Cheeses", desc: "Truffle honeycomb & warm walnut bread" },
                { act: "Act X", name: "Botanical Yuzu & Shiso Granita", desc: "Palate cleanser with Japanese mint" },
                { act: "Act XI", name: "Valrhona Guanaja Chocolate Eclipse", desc: "Molten caramel sphere & tonka bean gelato" },
                { act: "Act XII", name: "Mignardises & Rare Tea Infusion", desc: "Hand-crafted petit fours & Kyoto Gyokuro" }
              ].map((course, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[10px] font-mono text-[#d4af37] bg-[#d4af37]/10 px-2 py-1 rounded border border-[#d4af37]/20 shrink-0 mt-0.5">
                    {course.act}
                  </span>
                  <div>
                    <h4 className="font-serif text-lg text-white font-medium">{course.name}</h4>
                    <p className="text-xs text-stone-400 font-sans">{course.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-stone-400 font-sans">
                * Vegetarian and Pescatarian variations seamlessly prepared with 24hr advance notice.
              </span>
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                Reserve Tasting Menu Table
              </button>
            </div>
          </motion.div>
        )}

        {/* Filter and Search Bar */}
        <div className="glass-panel p-5 sm:p-6 rounded-3xl border border-white/10 mb-12 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes, truffle, wagyu, caviar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glass-input pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none"
              />
            </div>

            {/* Dietary Badges Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 sm:pb-0">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-mono flex items-center gap-1 shrink-0">
                <Filter className="w-3 h-3 text-[#d4af37]" />
                Dietary:
              </span>
              {dietaryOptions.map((diet) => (
                <button
                  key={diet}
                  onClick={() => setSelectedDietary(diet)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer shrink-0 ${
                    selectedDietary === diet
                      ? 'bg-[#d4af37] text-black font-semibold'
                      : 'bg-white/5 text-stone-300 hover:text-white border border-white/5'
                  }`}
                >
                  {diet}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-white/5 custom-scrollbar">
            {MENU_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-sans whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-semibold shadow-md'
                      : 'text-stone-400 hover:text-white bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-20 glass-panel rounded-3xl p-10 border border-white/10">
            <Utensils className="w-10 h-10 text-stone-500 mx-auto mb-3" />
            <h3 className="font-serif text-2xl text-white">No dishes matched your criteria</h3>
            <p className="text-stone-400 text-xs mt-1">Try resetting your search query or dietary filters.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setSelectedDietary('ALL');
              }}
              className="mt-4 px-6 py-2 rounded-xl bg-[#d4af37] text-black text-xs uppercase tracking-widest font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish, idx) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                onClick={() => onSelectDish(dish)}
                className="group relative rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-[#d4af37]/60 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden bg-black/40">
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

                  <div className="absolute top-4 right-4 font-serif text-lg text-[#f3e5ab] px-3.5 py-1 rounded-full glass-panel border border-white/10 shadow-lg font-normal">
                    {dish.price}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-mono">
                      {dish.subCategory}
                    </span>
                    <div className="flex gap-1">
                      {dish.dietary?.map((tag) => (
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
                    <h3 className="font-serif text-2xl text-white font-light group-hover:text-[#f3e5ab] transition-colors leading-snug">
                      {dish.name}
                    </h3>
                    <p className="text-stone-400 font-sans text-xs leading-relaxed mt-2 line-clamp-2">
                      {dish.description}
                    </p>
                  </div>

                  {/* Sommelier Note & Ingredients */}
                  <div className="space-y-3 pt-3 border-t border-white/5">
                    {dish.winePairing && (
                      <div className="flex items-center gap-2 text-[11px] text-[#f4efe6]">
                        <Wine className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                        <span className="truncate text-stone-300">
                          {dish.winePairing}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex flex-wrap gap-1">
                        {dish.ingredients?.slice(0, 3).map((ing) => (
                          <span key={ing} className="text-[10px] text-stone-400 bg-white/5 px-2 py-0.5 rounded">
                            {ing}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1 text-[#d4af37] group-hover:translate-x-1 transition-transform font-medium text-xs shrink-0 ml-2">
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
