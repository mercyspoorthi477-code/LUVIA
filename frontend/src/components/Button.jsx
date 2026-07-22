import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Button = ({
  children,
  variant = 'primary', // 'primary', 'secondary', 'accent', 'glass', 'danger'
  size = 'md', // 'sm', 'md', 'lg'
  icon: Icon = null,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 select-none shadow-lg focus:outline-none';

  const variants = {
    primary: 'bg-gradient-to-r from-[#B794F4] to-[#9F7AEA] text-[#090B1A] hover:shadow-[0_0_25px_rgba(183,148,244,0.6)] hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] text-[#090B1A] hover:shadow-[0_0_25px_rgba(249,168,212,0.6)] hover:scale-[1.02] active:scale-[0.98]',
    accent: 'bg-gradient-to-r from-[#67E8F9] to-[#38BDF8] text-[#090B1A] hover:shadow-[0_0_25px_rgba(103,232,249,0.6)] hover:scale-[1.02] active:scale-[0.98]',
    glass: 'bg-white/[0.08] backdrop-blur-md border border-white/20 text-white hover:bg-white/[0.15] hover:border-[#B794F4]/50 hover:shadow-[0_0_20px_rgba(183,148,244,0.3)] hover:scale-[1.02]',
    danger: 'bg-gradient-to-r from-red-500 to-rose-600 text-white hover:shadow-red-500/40 hover:scale-[1.02]',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5 font-bold',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileTap={{ scale: disabled || loading ? 1 : 0.96 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        fullWidth ? 'w-full' : ''
      } ${disabled || loading ? 'opacity-50 cursor-not-allowed transform-none shadow-none' : ''} ${className}`}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
      {!loading && Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </motion.button>
  );
};

export default Button;
