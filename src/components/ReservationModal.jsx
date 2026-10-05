import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, Sparkles, Check, CheckCircle2, Award, Heart, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ReservationModal({ isOpen, onClose, preselectedDish, preselectedExperience }) {
  const [step, setStep] = useState(1); // 1: Details, 2: Guest Info, 3: Confirmed
  const [formData, setFormData] = useState({
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    time: '19:30',
    guests: 2,
    seatingArea: 'Main Dining Salon',
    experience: preselectedExperience?.title || 'Standard Degustation',
    fullName: '',
    email: '',
    phone: '',
    occasion: 'Fine Dining / Date Night',
    dietaryNotes: preselectedDish ? `Specifically looking forward to: ${preselectedDish.name}` : ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  useEffect(() => {
    if (preselectedDish) {
      setFormData(prev => ({
        ...prev,
        dietaryNotes: `Specifically looking forward to: ${preselectedDish.name}`
      }));
    }
    if (preselectedExperience) {
      setFormData(prev => ({
        ...prev,
        experience: preselectedExperience.title
      }));
    }
  }, [preselectedDish, preselectedExperience]);

  if (!isOpen) return null;

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30',
    '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const seatingAreas = [
    { id: 'Main Dining Salon', label: 'Main Dining Salon', desc: 'Smoked glass partitions with ambient hearth lighting' },
    { id: "Chef's Hearth Counter", label: "Chef's Hearth Counter", desc: 'Front-row view of the live culinary brigade' },
    { id: 'Botanical Conservatory', label: 'Botanical Conservatory', desc: 'Starlit glass pavilion surrounded by courtyard flora' },
    { id: 'Private Wine Sanctum', label: 'Private Wine Sanctum', desc: 'Subterranean intimate alcove within the cellar' }
  ];

  const occasions = [
    'Fine Dining & Gastronomy',
    'Anniversary Celebration',
    'Romantic Proposal',
    'Birthday Degustation',
    'Executive Business Dinner',
    'Special Occasion'
  ];

  const handleGuestsChange = (delta) => {
    setFormData(prev => ({
      ...prev,
      guests: Math.max(1, Math.min(12, prev.guests + delta))
    }));
  };

  const handleSubmitReservation = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const code = 'AURA-' + Math.floor(100000 + Math.random() * 900000);
      setReservationCode(code);
      setStep(3);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#d4af37', '#f3e5ab', '#ffffff', '#e5c158']
        });
      } catch {
        // Confetti fallback
      }
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel-gold rounded-3xl border border-[#d4af37]/40 shadow-[0_30px_90px_rgba(0,0,0,0.95)] z-10 p-6 sm:p-8 md:p-10 custom-scrollbar"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-6 border-b border-white/10 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-mono">
                  Concierge Table Booking
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
                Reserve Your AURA Table
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-stone-300 hover:text-white border border-white/10 hover:border-[#d4af37] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Step 1: Table & Timing Selection */}
          {step === 1 && (
            <div className="space-y-6">
              {/* Guests Selector */}
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-stone-300 block mb-3 font-mono flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#d4af37]" />
                  Number of Guests
                </label>
                <div className="flex items-center gap-4 glass-panel p-2 rounded-2xl border border-white/10 max-w-xs">
                  <button
                    type="button"
                    onClick={() => handleGuestsChange(-1)}
                    className="w-10 h-10 rounded-xl glass-panel border border-white/10 text-lg text-white hover:border-[#d4af37] flex items-center justify-center font-serif cursor-pointer"
                  >
                    -
                  </button>
                  <div className="flex-1 text-center font-serif text-xl text-[#f3e5ab]">
                    {formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleGuestsChange(1)}
                    className="w-10 h-10 rounded-xl glass-panel border border-white/10 text-lg text-white hover:border-[#d4af37] flex items-center justify-center font-serif cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-stone-300 block mb-2 font-mono flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#d4af37]" />
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full glass-input px-4 py-3 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-stone-300 block mb-2 font-mono flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#d4af37]" />
                    Preferred Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full glass-input px-4 py-3 rounded-xl text-sm bg-neutral-900 cursor-pointer"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-neutral-900 text-white">
                        {slot} ({parseInt(slot) < 16 ? 'Lunch' : 'Dinner'})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-stone-300 block mb-3 font-mono flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  Atmosphere / Seating Choice
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {seatingAreas.map((area) => {
                    const isSelected = formData.seatingArea === area.id;
                    return (
                      <button
                        key={area.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, seatingArea: area.id })}
                        className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'glass-panel-gold border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                            : 'glass-panel border-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-xs font-semibold ${isSelected ? 'text-[#f3e5ab]' : 'text-stone-200'}`}>
                            {area.label}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#d4af37]" />}
                        </div>
                        <p className="text-[11px] text-stone-400 leading-snug">
                          {area.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.2em] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
                >
                  Continue to Guest Details &rarr;
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Guest Details & Special Requests */}
          {step === 2 && (
            <form onSubmit={handleSubmitReservation} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-stone-300 block mb-1.5 font-mono">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Alistair Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full glass-input px-4 py-3 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-stone-300 block mb-1.5 font-mono">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alistair.vance@london.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full glass-input px-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-stone-300 block mb-1.5 font-mono">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 7911 123456"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full glass-input px-4 py-3 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-stone-300 block mb-1.5 font-mono">
                    Occasion
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full glass-input px-4 py-3 rounded-xl text-sm bg-neutral-900 cursor-pointer"
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
                <label className="text-xs uppercase tracking-[0.18em] text-stone-300 block mb-1.5 font-mono">
                  Dietary Requirements & Notes
                </label>
                <textarea
                  rows="3"
                  placeholder="Please specify allergies, dietary restrictions, wine preferences, or anniversary notes..."
                  value={formData.dietaryNotes}
                  onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
                  className="w-full glass-input px-4 py-3 rounded-xl text-sm resize-none"
                />
              </div>

              {/* Summary recap chip */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-300 flex flex-wrap items-center justify-between gap-2">
                <span>
                  Booking for <strong className="text-[#f3e5ab]">{formData.guests} guests</strong> on{' '}
                  <strong className="text-[#f3e5ab]">{formData.date}</strong> at{' '}
                  <strong className="text-[#f3e5ab]">{formData.time}</strong>
                </span>
                <span className="text-stone-400 font-mono text-[11px]">
                  ({formData.seatingArea})
                </span>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl glass-panel text-xs uppercase tracking-widest text-stone-300 hover:text-white"
                >
                  &larr; Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.2em] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Confirming Booking...
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

          {/* Step 3: Confirmation Screen */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 space-y-6"
            >
              <div className="w-20 h-20 mx-auto rounded-full glass-panel-gold border border-[#d4af37] flex items-center justify-center text-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-mono block mb-2">
                  Reservation Confirmed
                </span>
                <h4 className="font-serif text-3xl sm:text-4xl text-white font-light">
                  We look forward to hosting you.
                </h4>
                <p className="text-stone-300 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span>. A confirmation dossier with arrival itinerary has been sent to <span className="text-[#f3e5ab]">{formData.email}</span>.
                </p>
              </div>

              {/* Reservation Code Ticket */}
              <div className="max-w-md mx-auto p-5 rounded-2xl glass-panel border border-[#d4af37]/30 text-left space-y-3">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-xs text-stone-400 uppercase tracking-widest font-mono">Reference Code</span>
                  <span className="font-mono text-sm text-[#f3e5ab] font-bold tracking-wider">{reservationCode}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-stone-400 block">Date & Time</span>
                    <span className="text-white font-medium">{formData.date} &bull; {formData.time}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Guests</span>
                    <span className="text-white font-medium">{formData.guests} Persons</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-stone-400 block">Atmosphere</span>
                    <span className="text-white font-medium">{formData.seatingArea}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-lg cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
