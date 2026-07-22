import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const InputField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  icon: Icon = null,
  error = '',
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`flex flex-col gap-1.5 w-full text-left ${className}`}>
      {label && (
        <label htmlFor={name} className="text-xs font-semibold text-[#CBD5E1] tracking-wide flex items-center justify-between">
          <span>
            {label} {required && <span className="text-[#F9A8D4]">*</span>}
          </span>
        </label>
      )}

      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3.5 text-[#B794F4] pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}

        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`w-full py-3 text-sm text-white placeholder-white/30 bg-white/[0.05] backdrop-blur-md border ${
            error ? 'border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400' : 'border-white/15 focus:border-[#B794F4] focus:ring-1 focus:ring-[#B794F4]'
          } rounded-2xl transition-all duration-300 ${Icon ? 'pl-10' : 'pl-4'} ${
            isPassword ? 'pr-10' : 'pr-4'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 text-white/50 hover:text-white transition-colors"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
      </div>

      {error && (
        <span className="text-xs text-red-400 font-medium pl-1 animate-pulse">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;
