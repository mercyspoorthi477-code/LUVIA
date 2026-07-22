import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Sparkles, Moon, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import InputField from '../components/InputField';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in both email and password.');
      return;
    }

    setLoading(true);
    setError('');

    const res = await login(formData.email, formData.password);
    setLoading(false);

    if (res.success) {
      navigate(from, { replace: true });
    } else {
      setError(res.error || 'Authentication failed. Please verify credentials.');
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side: Animated Moon Illustration & Quote */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:flex flex-col justify-center items-center text-center p-8 relative"
        >
          {/* Ambient Glow */}
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-[#B794F4]/20 via-[#F9A8D4]/20 to-transparent blur-3xl rounded-full pointer-events-none" />

          {/* Floating Glowing Moon Illustration */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-44 h-44 rounded-full bg-gradient-to-br from-[#FFF5F8] via-[#E9D8FD] to-[#B794F4] shadow-[0_0_50px_rgba(183,148,244,0.6)] flex items-center justify-center relative mb-6"
          >
            <Moon className="w-20 h-20 text-[#090B1A] fill-[#090B1A]/10" />
            <div className="absolute -top-2 -right-2 text-[#67E8F9]">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
          </motion.div>

          <h2 className="font-display text-2xl font-bold text-gradient-lunar mb-2">
            Welcome Back to LUVIA
          </h2>
          <p className="text-xs text-[#CBD5E1] max-w-xs leading-relaxed italic">
            "Like the moon, you don’t have to be whole to shine. Reconnect with your inner cycle."
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs text-[#67E8F9] bg-[#67E8F9]/10 px-3 py-1.5 rounded-full border border-[#67E8F9]/20">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Encrypted & Private Wellness Session</span>
          </div>
        </motion.div>

        {/* Right Side: Glass Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <GlassCard accent="lunar" className="p-8 sm:p-10 space-y-6">
            <div className="text-center md:text-left space-y-1">
              <h2 className="font-display text-3xl font-extrabold text-white">
                Sign In
              </h2>
              <p className="text-xs text-[#CBD5E1]">
                Access your personalized cycle dashboard & AI health insights.
              </p>
            </div>

            {error && (
              <div className="p-3.5 rounded-2xl bg-red-500/15 border border-red-500/30 text-xs text-red-300 font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="••••••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-[#CBD5E1] cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded accent-[#B794F4]" />
                  <span>Remember session</span>
                </label>
                <span className="text-[#B794F4] hover:underline cursor-pointer">
                  Forgot Password?
                </span>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={loading}
                  fullWidth
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Sign In to Dashboard
                </Button>
              </div>
            </form>

            <div className="pt-4 border-t border-white/10 text-center text-xs text-[#CBD5E1]">
              <span>Don’t have a LUVIA account yet? </span>
              <Link to="/register" className="text-[#F9A8D4] font-bold hover:underline">
                Create Account
              </Link>
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </div>
  );
};

export default Login;
