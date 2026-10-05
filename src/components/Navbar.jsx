import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Sparkles, Calendar, Phone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activePage, setActivePage, onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 40);

      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((offset / winHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'story', label: 'Our Story' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#997a15] via-[#d4af37] to-[#f3e5ab] transition-all duration-100 ease-out shadow-[0_0_8px_#d4af37]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 glass-nav shadow-[0_15px_35px_rgba(0,0,0,0.7)]'
            : 'py-6 bg-gradient-to-b from-[#070707]/90 via-[#070707]/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full border border-[#d4af37]/40 group-hover:border-[#d4af37] flex items-center justify-center bg-black/40 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <span className="font-serif text-lg font-light text-[#d4af37] tracking-wider">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-[0.3em] font-light text-white group-hover:text-[#f3e5ab] transition-colors">
                AURA
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#a8a29e] -mt-1 font-sans">
                Fine Dining
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 glass-panel px-7 py-2.5 rounded-full border border-white/10 shadow-lg">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative text-xs tracking-[0.18em] uppercase font-sans transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-[#d4af37] font-semibold'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#d4af37] shadow-[0_0_8px_#d4af37]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Table Reservation CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenReservation}
              className="relative overflow-hidden group px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/30 to-[#997a15]/20 border border-[#d4af37]/60 hover:border-[#d4af37] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] cursor-pointer flex items-center gap-2"
            >
              <div className="absolute inset-0 shimmer-gold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <Calendar className="w-3.5 h-3.5 text-[#f3e5ab]" />
              <span className="relative z-10 text-[#f3e5ab] group-hover:text-white font-semibold">
                Reserve Table
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onOpenReservation}
              className="px-3 py-1.5 rounded-full glass-panel-gold text-[#f3e5ab] text-[11px] font-medium tracking-wider uppercase"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-stone-200 hover:text-white border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Glass Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#070707]/95 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-8 lg:hidden"
          >
            {/* Ambient gold glow in mobile drawer */}
            <div className="ambient-glow-gold top-1/4 left-1/2 -translate-x-1/2 opacity-30" />

            <div className="flex flex-col gap-6 relative z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-mono">
                Menu &bull; Navigation
              </span>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, idx) => {
                  const isActive = activePage === link.id;
                  return (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      onClick={() => handleNavClick(link.id)}
                      className={`text-left text-2xl font-serif tracking-widest flex items-center justify-between py-2 border-b border-white/5 ${
                        isActive ? 'text-[#d4af37]' : 'text-stone-300'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#d4af37]' : 'text-stone-600'}`} />
                    </motion.button>
                  );
                })}
              </nav>
            </div>

            <div className="flex flex-col gap-4 relative z-10 mt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.25em] shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Your Table
              </button>

              <div className="flex items-center justify-between text-xs text-stone-400 pt-2 font-mono">
                <span>14 Albemarle St, Mayfair</span>
                <span>+44 20 7946 0912</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
