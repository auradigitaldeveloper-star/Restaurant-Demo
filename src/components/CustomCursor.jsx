import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ cursorText, isHovering }) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer subtle follower / glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: cursorText ? 1.5 : isHovering ? 1.3 : 1,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.4
        }}
      >
        <div
          className={`rounded-full flex items-center justify-center transition-all duration-300 ${
            cursorText
              ? 'w-20 h-20 bg-[#d4af37]/90 text-[#0a0a0a] text-[10px] font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(212,175,55,0.6)] backdrop-blur-md'
              : isHovering
              ? 'w-12 h-12 border border-[#d4af37]/70 bg-[#d4af37]/15 backdrop-blur-[2px]'
              : 'w-8 h-8 border border-white/25 bg-white/5'
          }`}
        >
          {cursorText && (
            <span className="font-sans font-semibold tracking-widest px-1 text-center select-none">
              {cursorText}
            </span>
          )}
        </div>
      </motion.div>

      {/* Tiny sharp center dot */}
      {!cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{
            type: "spring",
            damping: 40,
            stiffness: 800,
            mass: 0.1
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
        </motion.div>
      )}
    </>
  );
}
