import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Compass, HeartHandshake, Leaf, Shield, ArrowRight } from 'lucide-react';
import { STORY_CHAPTERS, CHEF_PROFILE } from '../data/restaurantData';

export default function StoryPage({ onOpenReservation, onExploreMenu }) {
  const teamMembers = [
    {
      name: "Laurent Vaneau",
      role: "Executive Chef & Co-Founder",
      origin: "Paris & Kyoto",
      accolades: "3 Michelin Stars &bull; Meilleur Ouvrier de France",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=85"
    },
    {
      name: "Éléonore Mercier",
      role: "Head Sommelier & Cellar Master",
      origin: "Bordeaux, France",
      accolades: "Master of Wine &bull; Best Sommelier Europe 2024",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85"
    },
    {
      name: "Kenji Sato",
      role: "Master Pastry & Sugar Sculptor",
      origin: "Tokyo & Lyon",
      accolades: "Coupe du Monde de la Pâtisserie Gold",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=85"
    }
  ];

  return (
    <div className="pt-32 pb-28 bg-[#070707] min-h-screen text-[#f4efe6]">
      {/* Background ambient lighting */}
      <div className="ambient-glow-gold top-20 left-1/3 opacity-15" />
      <div className="ambient-glow-dark top-1/2 right-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Story Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#d4af37]/40 text-[#d4af37] text-[10px] tracking-[0.3em] uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Heritage &bull; Philosophy &bull; Vision
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-tight">
            The Story of <span className="italic font-serif gold-gradient-text">AURA</span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base font-light font-sans max-w-xl mx-auto leading-relaxed">
            Founded on the conviction that dining at its highest level is not merely sustenance, but an emotional and architectural journey.
          </p>
        </div>

        {/* Narrative Chapters */}
        <div className="space-y-24 mb-28">
          {STORY_CHAPTERS.map((chapter, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={chapter.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Chapter Text Column */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#d4af37] font-semibold bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/30">
                      CHAPTER {chapter.number}
                    </span>
                    <span className="text-xs uppercase tracking-[0.25em] text-stone-400 font-mono">
                      {chapter.subtitle}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
                    {chapter.title}
                  </h2>

                  <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed font-light">
                    {chapter.content}
                  </p>

                  <div className="pt-2">
                    <div className="h-[1px] w-20 bg-gradient-to-r from-[#d4af37] to-transparent" />
                  </div>
                </div>

                {/* Chapter Photography Column */}
                <div className={`lg:col-span-6 relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.85)] aspect-[4/3] group">
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      className="w-full h-full object-cover zoom-img"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Chapter 05: Our Future & Sustainable Laboratory */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-28 glass-panel-gold p-8 sm:p-14 rounded-3xl border border-[#d4af37]/40 shadow-[0_30px_90px_rgba(0,0,0,0.9)] max-w-5xl mx-auto space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#d4af37] font-semibold bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/30">
              CHAPTER 05
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-stone-400 font-mono">
              The Horizon
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
            The Botanical Laboratory &amp; Zero-Waste Gastronomy
          </h2>

          <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed font-light">
            In our research kitchen, we compost 100% of organic remnants into bio-nutrients for our Kent farm greenhouse. Custom rotary evaporators extract pure botanical essences from citrus peels and wild pine needles, ensuring every ingredient lives in total regenerative harmony.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <Leaf className="w-5 h-5 text-[#d4af37] mb-2" />
              <span className="font-serif text-lg text-white block">100% Regenerative</span>
              <span className="text-xs text-stone-400">Zero landfill organic cycle</span>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <Compass className="w-5 h-5 text-[#d4af37] mb-2" />
              <span className="font-serif text-lg text-white block">Micro-Seasonality</span>
              <span className="text-xs text-stone-400">Menus updated bi-weekly</span>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <Shield className="w-5 h-5 text-[#d4af37] mb-2" />
              <span className="font-serif text-lg text-white block">Direct Sourcing</span>
              <span className="text-xs text-stone-400">24 multi-generation family farms</span>
            </div>
          </div>
        </motion.div>

        {/* Master Brigade / Team */}
        <div className="space-y-12 mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-mono">
              The Culinary Brigade
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
              The Artisans Behind <span className="italic font-serif gold-gradient-text">the Symphony</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-[#d4af37]/50 flex flex-col justify-between"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover zoom-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/20 to-transparent" />

                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-mono block">
                      {member.role}
                    </span>
                    <h3 className="font-serif text-2xl text-white font-light">
                      {member.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 border-t border-white/5 space-y-2">
                  <span className="text-xs text-stone-400 block font-mono">
                    Training: {member.origin}
                  </span>
                  <p className="text-xs text-[#f3e5ab] font-sans" dangerouslySetInnerHTML={{ __html: member.accolades }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="text-center pt-8">
          <button
            onClick={onOpenReservation}
            className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Experience Our Craft In Person</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
