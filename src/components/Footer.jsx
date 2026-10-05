import React, { useState } from 'react';
import { Calendar, Phone, Mail, MapPin, ArrowUpRight, Award, Sparkles, Check, Globe } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer({ setActivePage, onOpenReservation }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-[#f4efe6] pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="ambient-glow-gold -top-40 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Callout: Private Dining & Booking Banner */}
        <div className="mb-20 glass-panel-gold rounded-3xl p-8 sm:p-12 border border-[#d4af37]/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-mono flex items-center justify-center lg:justify-start gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              An Unforgettable Evening Awaits
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              Reserve Your Table at AURA
            </h3>
            <p className="text-stone-300 text-sm max-w-xl font-sans">
              Tables are released 60 days in advance. For private salons and bespoke banquets, our maître d' concierge is available directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenReservation}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Reservation
            </button>
            <button
              onClick={() => {
                setActivePage('contact');
                scrollToTop();
              }}
              className="px-7 py-4 rounded-xl glass-panel border border-white/10 text-stone-200 hover:text-white text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Concierge
            </button>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#d4af37] flex items-center justify-center bg-black/50">
                <span className="font-serif text-base text-[#d4af37]">A</span>
              </div>
              <span className="font-serif text-2xl tracking-[0.25em] font-light text-white">AURA</span>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed font-sans">
              Exceptional ingredients. Thoughtful cooking. An atmosphere designed to be remembered. Combining classical French foundations with avant-garde sensory alchemy.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[#d4af37] text-xs font-mono">
              <Award className="w-4 h-4" />
              <span>Michelin Guide &bull; Three Stars</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-mono">
              Explore AURA
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300 font-sans">
              {[
                { id: 'home', label: 'Home Sanctuary' },
                { id: 'menu', label: 'Degustation & A La Carte' },
                { id: 'story', label: 'Philosophy & Provenance' },
                { id: 'experiences', label: "Chef's Table & Experiences" },
                { id: 'gallery', label: 'Visual Archive' },
                { id: 'contact', label: 'Location & Concierge' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActivePage(item.id);
                      scrollToTop();
                    }}
                    className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span className="w-1 h-1 rounded-full bg-stone-600 group-hover:bg-[#d4af37] transition-colors" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Location */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-mono">
              Hours & Location
            </h4>
            <div className="space-y-3 text-xs text-stone-300 font-sans leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.phone}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.email}</span>
              </div>
              <div className="pt-2 border-t border-white/5 text-stone-400 text-[11px]">
                <p>Tue – Sat: 12:00–14:30 | 18:30–23:30</p>
                <p>Sunday: 12:30–15:30 (Lunch Degustation)</p>
              </div>
            </div>
          </div>

          {/* Column 4: Private Gazette / Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-mono">
              The AURA Gazette
            </h4>
            <p className="text-stone-400 text-xs leading-relaxed">
              Receive private invitations to seasonal tasting menu premieres, rare cellar releases, and guest chef residencies.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full glass-input px-3.5 py-2.5 rounded-xl text-xs"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#d4af37] text-black text-xs font-medium rounded-lg hover:bg-[#f3e5ab] transition-colors cursor-pointer"
                >
                  Join
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-[#f3e5ab] flex items-center gap-1.5 pt-1">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  Welcome to our private circle.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Accolades */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-sans">
          <div>
            &copy; {new Date().getFullYear()} AURA Haute Gastronomie Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => { setActivePage('contact'); scrollToTop(); }} className="hover:text-stone-300 transition-colors">
              Dress Code & Policy
            </button>
            <button onClick={() => { setActivePage('contact'); scrollToTop(); }} className="hover:text-stone-300 transition-colors">
              Private Events
            </button>
            <button onClick={scrollToTop} className="hover:text-[#d4af37] transition-colors">
              Back to Top &uarr;
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
