import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[99999] bg-[#070707] flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Subtle background ambient pulse */}
          <div className="absolute w-96 h-96 rounded-full bg-[#d4af37]/10 blur-[100px] animate-pulse" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center relative z-10"
          >
            {/* Monogram emblem */}
            <div className="w-20 h-20 relative flex items-center justify-center mb-6">
              <motion.div
                className="absolute inset-0 rounded-full border border-[#d4af37]/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-1.5 rounded-full border-t border-b border-[#d4af37]/80"
                animate={{ rotate: -360 }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              />
              <span className="font-serif text-3xl font-light tracking-[0.25em] text-[#d4af37] ml-1">
                A
              </span>
            </div>

            {/* Restaurant title */}
            <motion.h1
              initial={{ letterSpacing: "0.2em", opacity: 0 }}
              animate={{ letterSpacing: "0.45em", opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.2 }}
              className="font-serif text-2xl md:text-3xl uppercase tracking-[0.45em] text-[#f4efe6] font-light"
            >
              A U R A
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mt-2 font-sans"
            >
              Sensory Gastronomy &bull; Mayfair
            </motion.p>

            {/* Progress line */}
            <div className="w-32 h-[1.5px] bg-white/10 mt-8 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
