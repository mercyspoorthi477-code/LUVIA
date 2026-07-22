import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Calendar } from 'lucide-react';

const MoonAnimation = ({
  cycleDay = 14,
  phase = "Ovulation Phase",
  healthScore = 82,
  nextPeriodDays = 14,
  size = "large",
  interactive = true,
  onPhaseClick = null
}) => {
  // Determine moon shadow/phase clip path based on cycleDay (1-28)
  // Day 1: New Moon -> Day 14: Full Moon -> Day 28: Waning Crescent
  const getPhaseIllumination = (day) => {
    const progress = (day / 28);
    return Math.sin(progress * Math.PI);
  };

  const illumination = getPhaseIllumination(cycleDay);

  const containerSizes = {
    small: "w-48 h-48",
    medium: "w-64 h-64",
    large: "w-80 h-80 sm:w-96 sm:h-96",
  };

  const moonSizes = {
    small: "w-28 h-28",
    medium: "w-36 h-36",
    large: "w-48 h-48 sm:w-56 sm:h-56",
  };

  return (
    <div className={`relative flex items-center justify-center ${containerSizes[size]} mx-auto select-none`}>
      {/* Outer Glowing Pulsing Aura */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#B794F4]/30 via-[#F9A8D4]/20 to-[#67E8F9]/30 blur-3xl pointer-events-none"
      />

      {/* Orbit Rings with Glowing Indicators */}
      <div className="absolute inset-2 sm:inset-0 rounded-full border border-[#B794F4]/20 animate-glow-spin pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#67E8F9] shadow-[0_0_12px_#67E8F9]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#F9A8D4] shadow-[0_0_12px_#F9A8D4]" />
      </div>

      <div className="absolute inset-8 sm:inset-6 rounded-full border border-dashed border-[#F9A8D4]/20 pointer-events-none" />

      {/* Floating Glowing Moon Container */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`relative ${moonSizes[size]} rounded-full flex items-center justify-center cursor-pointer group`}
        onClick={() => onPhaseClick && onPhaseClick(cycleDay)}
      >
        {/* Core Moon Sphere */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFF5F8] via-[#E9D8FD] to-[#B794F4] shadow-[0_0_50px_rgba(183,148,244,0.7)] overflow-hidden">
          {/* Moon Surface Craters */}
          <div className="absolute top-4 left-6 w-8 h-8 rounded-full bg-[#B794F4]/20 blur-[1px]" />
          <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-[#B794F4]/25 blur-[1px]" />
          <div className="absolute top-1/2 right-4 w-6 h-6 rounded-full bg-[#B794F4]/15 blur-[1px]" />
          
          {/* Phase Shadow Overlay */}
          <div
            className="absolute inset-0 bg-[#090B1A]/85 transition-all duration-700 ease-out"
            style={{
              clipPath: `inset(0 ${100 - illumination * 100}% 0 0)`,
            }}
          />

          {/* Inner Moon Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/60 pointer-events-none" />
        </div>

        {/* Floating Sparkle accent */}
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-2 -right-2 text-[#67E8F9]"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>

        {/* Center Cycle Day badge over moon */}
        <div className="relative z-10 text-center drop-shadow-md">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#090B1A] tracking-tight block">
            🌙
          </span>
        </div>
      </motion.div>

      {/* Orbit Floating Information Badges (Center around Moon) */}
      {/* Top Left Badge: Cycle Day */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute -top-3 left-0 sm:-left-6 glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 border border-[#B794F4]/30 shadow-lg text-xs font-semibold text-white"
      >
        <Calendar className="w-3.5 h-3.5 text-[#B794F4]" />
        <span>Cycle Day {cycleDay}</span>
      </motion.div>

      {/* Top Right Badge: Ovulation Phase */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute -top-3 right-0 sm:-right-6 glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 border border-[#F9A8D4]/30 shadow-lg text-xs font-semibold text-[#F9A8D4]"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#F9A8D4]" />
        <span>{phase}</span>
      </motion.div>

      {/* Bottom Center Badge: Health Score */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-panel px-4 py-2 rounded-full flex items-center gap-2 border border-[#67E8F9]/40 shadow-xl text-xs font-bold text-white"
      >
        <Heart className="w-4 h-4 text-[#67E8F9] fill-[#67E8F9]/30 animate-pulse" />
        <span>Health Score <span className="text-[#67E8F9]">{healthScore}%</span></span>
      </motion.div>
    </div>
  );
};

export default MoonAnimation;
