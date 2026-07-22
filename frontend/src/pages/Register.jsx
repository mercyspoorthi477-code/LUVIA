import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Calendar, Sparkles, Moon, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import InputField from '../components/InputField';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    lastPeriodDate: '2026-07-09',
    cycleLength: 28,
    periodLength: 5,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all mandatory account fields.');
      return;
    }

    setLoading(true);
    setError('');

    const res = await register(formData);
    setLoading(false);

    if (res.success) {
      navigate('/dashboard');
    } else {
      setError(res.error || 'Registration failed. Please check your information.');
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side: Animated Moon Artwork & Values */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:flex flex-col justify-center items-center text-center p-8 relative"
        >
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-[#F9A8D4]/20 via-[#67E8F9]/20 to-transparent blur-3xl rounded-full pointer-events-none" />

          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-44 h-44 rounded-full bg-gradient-to-br from-[#FFF5F8] via-[#E9D8FD] to-[#F9A8D4] shadow-[0_0_50px_rgba(249,168,212,0.6)] flex items-center justify-center relative mb-6"
          >
            <Moon className="w-20 h-20 text-[#090B1A] fill-[#090B1A]/10" />
            <div className="absolute -top-2 -left-2 text-[#F9A8D4]">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
          </motion.div>

          <h2 className="font-display text-2xl font-bold text-gradient-rose mb-2">
            Begin Your Lunar Journey
          </h2>
          <p className="text-xs text-[#CBD5E1] max-w-xs leading-relaxed">
            Join a sanctuary designed exclusively for women's physiological and emotional rhythm.
          </p>

          <div className="mt-6 space-y-2 text-left w-full max-w-xs text-xs text-[#CBD5E1]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#67E8F9]" />
              <span>AI Cycle & Ovulation Window Predictions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B794F4]" />
              <span>Tailored Nutrition & Hormone Guides</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F9A8D4]" />
              <span>Optional Caregiver Syncing</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Glass Register Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <GlassCard accent="rose" className="p-8 sm:p-10 space-y-6">
            <div className="text-center md:text-left space-y-1">
              <h2 className="font-display text-3xl font-extrabold text-white">
                Create Account
              </h2>
              <p className="text-xs text-[#CBD5E1]">
                Set up your personal wellness profile in under 1 minute.
              </p>
            </div>

            {error && (
              <div className="p-3.5 rounded-2xl bg-red-500/15 border border-red-500/30 text-xs text-red-300 font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField
                label="Full Name"
                name="name"
                type="text"
                icon={User}
                placeholder="Luna Vance"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <InputField
                label="Email Address"
                name="email"
                type="email"
                icon={Mail}
                placeholder="your.email@wellness.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <InputField
                label="Password"
                name="password"
                type="password"
                icon={Lock}
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <div className="grid grid-cols-2 gap-3 pt-1">
                <InputField
                  label="Last Period Date"
                  name="lastPeriodDate"
                  type="date"
                  icon={Calendar}
                  value={formData.lastPeriodDate}
                  onChange={handleChange}
                />

                <div className="flex flex-col gap-1.5 w-full text-left">
                  <label className="text-xs font-semibold text-[#CBD5E1]">
                    Cycle Length (Days)
                  </label>
                  <select
                    name="cycleLength"
                    value={formData.cycleLength}
                    onChange={handleChange}
                    className="w-full py-3 px-3.5 text-sm text-white bg-white/[0.05] backdrop-blur-md border border-white/15 rounded-2xl focus:border-[#B794F4] focus:outline-none"
                  >
                    {[...Array(15)].map((_, i) => {
                      const len = 21 + i;
                      return <option key={len} value={len} className="bg-[#090B1A] text-white">{len} Days</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  loading={loading}
                  fullWidth
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Create My Wellness Profile
                </Button>
              </div>
            </form>

            <div className="pt-4 border-t border-white/10 text-center text-xs text-[#CBD5E1]">
              <span>Already have a LUVIA profile? </span>
              <Link to="/login" className="text-[#B794F4] font-bold hover:underline">
                Sign In
              </Link>
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </div>
  );
};

export default Register;
