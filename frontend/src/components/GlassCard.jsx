import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  accent = 'none', // 'lunar', 'rose', 'cyan', 'none'
  hover = true,
  onClick = null,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  ...props
}) => {
  const accentBorders = {
    none: 'border-white/10 hover:border-white/20',
    lunar: 'border-[#B794F4]/30 hover:border-[#B794F4]/60 shadow-[0_0_20px_rgba(183,148,244,0.15)]',
    rose: 'border-[#F9A8D4]/30 hover:border-[#F9A8D4]/60 shadow-[0_0_20px_rgba(249,168,212,0.15)]',
    cyan: 'border-[#67E8F9]/30 hover:border-[#67E8F9]/60 shadow-[0_0_20px_rgba(103,232,249,0.15)]',
  };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      onClick={onClick}
      className={`relative bg-white/[0.08] backdrop-blur-xl border ${accentBorders[accent]} rounded-3xl p-6 transition-all duration-300 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      {...props}
    >
      {/* Soft inner shimmer gradient overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
