import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Sparkles, MapPin, CheckCircle2, ShieldCheck, HelpCircle, Phone, Info } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    time: '19:30',
    guests: 2,
    seatingArea: 'Main Dining Salon',
    occasion: 'Fine Dining / Date Night',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30',
    '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const atmospheres = [
    { id: 'Main Dining Salon', title: 'Main Dining Salon', desc: 'Smoked glass partitions with subtle warm amber accents' },
    { id: "Chef's Hearth Counter", title: "Chef's Hearth Counter", desc: 'Direct view of live cooking and plating brigade' },
    { id: 'Botanical Conservatory', title: 'Botanical Conservatory', desc: 'Intimate glass pavilion framed by lush courtyard flora' },
    { id: 'Private Wine Sanctum', title: 'Private Wine Sanctum', desc: 'Subterranean cellar alcove surrounded by vintage bottles' }
  ];

  const occasions = [
    'Fine Dining Experience',
    'Anniversary',
    'Romantic Proposal',
    'Birthday Degustation',
    'Executive Business Dinner',
    'Celebratory Gathering'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const code = 'AURA-' + Math.floor(100000 + Math.random() * 900000);
      setBookingCode(code);
      setIsConfirmed(true);

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#d4af37', '#f3e5ab', '#ffffff', '#e5c158']
        });
      } catch {
        // Fallback
      }
    }, 1200);
  };

  return (
    <div className="pt-32 pb-28 bg-[#070707] min-h-screen text-[#f4efe6]">
      {/* Ambient background glows */}
      <div className="ambient-glow-gold top-20 right-1/4 opacity-20" />
      <div className="ambient-glow-dark bottom-10 left-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#d4af37]/40 text-[#d4af37] text-[10px] tracking-[0.3em] uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Table Reservations
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-tight">
            Reserve Your <span className="italic font-serif gold-gradient-text">Sanctuary</span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base font-light font-sans max-w-xl mx-auto leading-relaxed">
            Tables are released 60 days in advance. For parties exceeding 8 guests or private salon buyouts, our concierge team is available directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Reservation Booking Form Column */}
          <div className="lg:col-span-8">
            <div className="glass-panel-gold p-8 sm:p-12 rounded-3xl border border-[#d4af37]/40 shadow-[0_30px_90px_rgba(0,0,0,0.9)]">
              {isConfirmed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="w-20 h-20 mx-auto rounded-full glass-panel-gold border border-[#d4af37] flex items-center justify-center text-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-mono block mb-2">
                      Booking Confirmed
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-white font-light">
                      We await your arrival.
                    </h3>
                    <p className="text-stone-300 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <span className="text-white font-medium">{formData.fullName}</span>. A comprehensive confirmation dossier with dietary confirmations and valet directions has been sent to <span className="text-[#f3e5ab]">{formData.email}</span>.
                    </p>
                  </div>

                  {/* Summary Ticket */}
                  <div className="max-w-md mx-auto p-6 rounded-2xl glass-panel border border-[#d4af37]/30 text-left space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-xs text-stone-400 uppercase tracking-widest font-mono">Reference</span>
                      <span className="font-mono text-sm text-[#f3e5ab] font-bold tracking-wider">{bookingCode}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-stone-400 block font-mono">Date</span>
                        <span className="text-white font-medium">{formData.date}</span>
                      </div>
                      <div>
                        <span className="text-stone-400 block font-mono">Time</span>
                        <span className="text-white font-medium">{formData.time}</span>
                      </div>
                      <div>
                        <span className="text-stone-400 block font-mono">Party Size</span>
                        <span className="text-white font-medium">{formData.guests} Guests</span>
                      </div>
                      <div>
                        <span className="text-stone-400 block font-mono">Seating Area</span>
                        <span className="text-white font-medium">{formData.seatingArea}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsConfirmed(false)}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-lg cursor-pointer"
                  >
                    Make Another Reservation
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Atmosphere & Table Type */}
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-stone-300 block mb-3 font-mono flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#d4af37]" />
                      1. Select Dining Atmosphere
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {atmospheres.map((atm) => {
                        const isSelected = formData.seatingArea === atm.id;
                        return (
                          <button
                            key={atm.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, seatingArea: atm.id })}
                            className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                              isSelected
                                ? 'glass-panel-gold border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                                : 'glass-panel border-white/5 hover:border-white/20'
                            }`}
                          >
                            <span className={`text-xs font-semibold block mb-1 ${isSelected ? 'text-[#f3e5ab]' : 'text-stone-200'}`}>
                              {atm.title}
                            </span>
                            <p className="text-[11px] text-stone-400 leading-relaxed">
                              {atm.desc}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Date, Time & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-[0.18em] text-stone-300 block mb-2 font-mono flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-[0.18em] text-stone-300 block mb-2 font-mono flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                        Time Slot
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm bg-neutral-900 cursor-pointer"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot} className="bg-neutral-900 text-white">
                            {slot} ({parseInt(slot) < 16 ? 'Lunch' : 'Dinner'})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-[0.18em] text-stone-300 block mb-2 font-mono flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                        Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                        className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm bg-neutral-900 cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                          <option key={num} value={num} className="bg-neutral-900 text-white">
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Step 3: Contact & Guest Details */}
                  <div className="space-y-4 pt-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-stone-300 block font-mono">
                      2. Guest Information
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name *"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="tel"
                          required
                          placeholder="Mobile / Phone *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm"
                        />
                      </div>

                      <div>
                        <select
                          value={formData.occasion}
                          onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                          className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm bg-neutral-900 cursor-pointer"
                        >
                          {occasions.map((occ) => (
                            <option key={occ} value={occ} className="bg-neutral-900 text-white">
                              {occ}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <textarea
                        rows="3"
                        placeholder="Dietary notes, severe allergies, preferred wine pairings, or special celebration arrangements..."
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-white/10">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(212,175,55,0.6)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          Submitting Reservation Request...
                        </span>
                      ) : (
                        <>
                          <ShieldCheck className="w-4 h-4" />
                          Request Table Reservation
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Sidebar: Policy, Valet & Direct Concierge */}
          <div className="lg:col-span-4 space-y-6">
            {/* Concierge Hotline Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-mono block">Direct Concierge</span>
                  <span className="font-serif text-lg text-white">{RESTAURANT_INFO.reservationsPhone}</span>
                </div>
              </div>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                Our reservations maître d' is available Tuesday through Saturday from 10:00 AM to 6:00 PM for private inquiries.
              </p>
            </div>

            {/* Dining Guidelines */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 text-xs text-stone-300">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-mono flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                Dining Guidelines
              </h4>

              <div className="space-y-3 pt-2">
                <div>
                  <strong className="text-white block mb-0.5">Dress Code:</strong>
                  <span>{RESTAURANT_INFO.dressCode}</span>
                </div>
                <div>
                  <strong className="text-white block mb-0.5">Cancellation Policy:</strong>
                  <span>We kindly request at least 48 hours notice for cancellations or modifications.</span>
                </div>
                <div>
                  <strong className="text-white block mb-0.5">Valet Service:</strong>
                  <span>{RESTAURANT_INFO.valetParking}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
