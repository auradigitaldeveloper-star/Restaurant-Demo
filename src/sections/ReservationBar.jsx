import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReservationBar({ onOpenReservation }) {
  const [selectedDate, setSelectedDate] = useState(
    new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]
  );
  const [selectedTime, setSelectedTime] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [tableType, setTableType] = useState('Main Dining Salon');

  const handleQuickBook = (e) => {
    e.preventDefault();
    onOpenReservation({
      date: selectedDate,
      time: selectedTime,
      guests: guests,
      seatingArea: tableType
    });
  };

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-5 sm:px-8 -mt-10 sm:-mt-14 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel-gold p-5 sm:p-7 rounded-3xl border border-[#d4af37]/35 shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
      >
        <form
          onSubmit={handleQuickBook}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center"
        >
          {/* Date Picker */}
          <div className="flex flex-col space-y-1.5 p-2 rounded-xl bg-white/5 border border-white/5">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-mono flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Date
            </span>
            <input
              type="date"
              value={selectedDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-transparent text-white text-xs sm:text-sm font-medium focus:outline-none cursor-pointer"
            />
          </div>

          {/* Time Picker */}
          <div className="flex flex-col space-y-1.5 p-2 rounded-xl bg-white/5 border border-white/5">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-mono flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Time
            </span>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="bg-transparent text-white text-xs sm:text-sm font-medium focus:outline-none cursor-pointer"
            >
              <option value="12:30" className="bg-neutral-900 text-white">12:30 PM &bull; Lunch</option>
              <option value="13:30" className="bg-neutral-900 text-white">1:30 PM &bull; Lunch</option>
              <option value="18:30" className="bg-neutral-900 text-white">6:30 PM &bull; Dinner</option>
              <option value="19:00" className="bg-neutral-900 text-white">7:00 PM &bull; Dinner</option>
              <option value="19:30" className="bg-neutral-900 text-white">7:30 PM &bull; Dinner</option>
              <option value="20:00" className="bg-neutral-900 text-white">8:00 PM &bull; Dinner</option>
              <option value="20:30" className="bg-neutral-900 text-white">8:30 PM &bull; Dinner</option>
              <option value="21:00" className="bg-neutral-900 text-white">9:00 PM &bull; Dinner</option>
            </select>
          </div>

          {/* Guests Count */}
          <div className="flex flex-col space-y-1.5 p-2 rounded-xl bg-white/5 border border-white/5">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-mono flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              Guests
            </span>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="bg-transparent text-white text-xs sm:text-sm font-medium focus:outline-none cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                <option key={num} value={num} className="bg-neutral-900 text-white">
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>

          {/* Table Atmosphere */}
          <div className="flex flex-col space-y-1.5 p-2 rounded-xl bg-white/5 border border-white/5">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-mono flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Table Area
            </span>
            <select
              value={tableType}
              onChange={(e) => setTableType(e.target.value)}
              className="bg-transparent text-white text-xs sm:text-sm font-medium focus:outline-none cursor-pointer"
            >
              <option value="Main Dining Salon" className="bg-neutral-900 text-white">Main Dining Salon</option>
              <option value="Chef's Hearth Counter" className="bg-neutral-900 text-white">Chef's Hearth Counter</option>
              <option value="Botanical Conservatory" className="bg-neutral-900 text-white">Botanical Conservatory</option>
              <option value="Private Wine Sanctum" className="bg-neutral-900 text-white">Private Wine Sanctum</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Reserve Table
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
