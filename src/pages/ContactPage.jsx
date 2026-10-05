import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Sparkles, Check, Car, Compass, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiries',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiries', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="pt-32 pb-28 bg-[#070707] min-h-screen text-[#f4efe6]">
      {/* Background ambient lighting */}
      <div className="ambient-glow-gold top-20 right-1/4 opacity-15" />
      <div className="ambient-glow-dark bottom-10 left-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#d4af37]/40 text-[#d4af37] text-[10px] tracking-[0.3em] uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Concierge &bull; Mayfair London
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-tight">
            Connect with <span className="italic font-serif gold-gradient-text">AURA</span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base font-light font-sans max-w-xl mx-auto leading-relaxed">
            Our concierge team is at your disposal for bespoke dining inquiries, private salon banquets, cellar tastings, and press relations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass-panel-gold p-8 sm:p-12 rounded-3xl border border-[#d4af37]/35 shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
          >
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light mb-2">
              Send a Private Inquiry
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm font-sans mb-8">
              Fill out the form below and our Maître d' Concierge will respond within four business hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl glass-panel border border-[#d4af37]/40 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 border border-[#d4af37] mx-auto flex items-center justify-center text-[#d4af37]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl text-white">Message Transmitted</h4>
                <p className="text-xs text-stone-300">
                  Thank you. Your message has been routed to our Executive Maître d'. We will connect with you promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-stone-300 block mb-1.5 font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lady Catherine"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-stone-300 block mb-1.5 font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="catherine@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-stone-300 block mb-1.5 font-mono">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 7911 123456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-stone-300 block mb-1.5 font-mono">
                      Nature of Inquiry
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm bg-neutral-900 cursor-pointer"
                    >
                      <option value="General Inquiries" className="bg-neutral-900 text-white">General Dining Inquiries</option>
                      <option value="Private Dining Salon" className="bg-neutral-900 text-white">Private Salon / Buyout</option>
                      <option value="Sommelier Cellar" className="bg-neutral-900 text-white">Cellar Tasting Inquiries</option>
                      <option value="Press & Media" className="bg-neutral-900 text-white">Press &amp; Media Relations</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-stone-300 block mb-1.5 font-mono">
                    Message *
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="How may we assist in crafting your experience?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.25em] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Transmitting Inquiry...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Transmit Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Location & Arrival Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Address & Hours */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5">
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-mono">
                Sanctuary Address
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-serif text-base">AURA Restaurant</strong>
                    <span>{RESTAURANT_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block">Reservations &amp; Concierge</strong>
                    <span>{RESTAURANT_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block">Email Dossier</strong>
                    <span>{RESTAURANT_INFO.email}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-mono block">
                  Operating Hours
                </span>
                {RESTAURANT_INFO.hours.map((h, i) => (
                  <div key={i} className="text-xs flex justify-between text-stone-300">
                    <span className="text-stone-400">{h.days}:</span>
                    <span>{h.dinner}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Dark Luxury Interactive Map Card */}
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-[#d4af37]/30 h-64 shadow-xl flex items-center justify-center p-6 text-center group">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
                alt="AURA Courtyard Location"
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/60 to-[#070707]/90" />

              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 border border-[#d4af37] mx-auto flex items-center justify-center text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.4)] animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-serif text-xl text-white">Mayfair Historic Quarter</h5>
                  <p className="text-[11px] text-stone-300 max-w-xs mx-auto mt-1 font-sans">
                    Located two minutes from Berkeley Square. Private gated cobblestone entry with valet attendants.
                  </p>
                </div>
              </div>
            </div>

            {/* Valet Parking Note */}
            <div className="p-4 rounded-2xl glass-panel border border-white/5 flex items-start gap-3">
              <Car className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
              <p className="text-xs text-stone-300 leading-relaxed font-sans">
                {RESTAURANT_INFO.valetParking}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
