import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function AmbientSoundPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const oscillatorsRef = useRef([]);

  const toggleSound = () => {
    if (!isPlaying) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;

        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 3);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Frequencies for a warm luxury harmonic drone (F# minor 9th chord: F#2, C#3, A3, E4)
        const freqs = [92.5, 138.59, 220.0, 329.63];
        const oscs = [];

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const filter = ctx.createBiquadFilter();
          const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
          const oscGain = ctx.createGain();

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(450 + idx * 80, ctx.currentTime);

          oscGain.gain.setValueAtTime(0.25 / freqs.length, ctx.currentTime);

          if (panner) {
            panner.pan.value = (idx - 1.5) * 0.4;
            osc.connect(filter);
            filter.connect(panner);
            panner.connect(oscGain);
          } else {
            osc.connect(filter);
            filter.connect(oscGain);
          }

          oscGain.connect(masterGain);
          osc.start();
          oscs.push(osc);
        });

        oscillatorsRef.current = oscs;
        setIsPlaying(true);
      } catch {
        // Audio API blocked or unavailable
      }
    } else {
      if (audioCtxRef.current && gainNodeRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1.2);
        setTimeout(() => {
          try {
            oscillatorsRef.current.forEach(osc => osc.stop());
            audioCtxRef.current.close();
          } catch {
            // Already closed
          }
          setIsPlaying(false);
        }, 1200);
      } else {
        setIsPlaying(false);
      }
    }
  };

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute Atmospheric Soundscape" : "Play Atmospheric Soundscape"}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-3.5 py-2.5 rounded-full glass-panel border border-[#d4af37]/30 hover:border-[#d4af37] text-xs font-sans tracking-wider uppercase text-[#f4efe6] transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)] group"
    >
      <span className="relative flex h-2 w-2">
        {isPlaying && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-[#d4af37]' : 'bg-stone-500'}`}></span>
      </span>

      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="hidden sm:inline text-[#d4af37] font-medium">Ambiance On</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-200" />
          <span className="hidden sm:inline text-stone-300 group-hover:text-white">Ambiance</span>
        </>
      )}
    </button>
  );
}
