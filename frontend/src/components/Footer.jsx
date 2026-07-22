import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Heart, Sparkles, Send, ShieldCheck, PhoneCall } from 'lucide-react';
import Button from './Button';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative z-10 bg-[#050713]/90 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Soft background radial ambient light */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#B794F4]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#B794F4] via-[#F9A8D4] to-[#67E8F9] p-0.5 shadow-[0_0_15px_rgba(183,148,244,0.5)]">
                <div className="w-full h-full bg-[#090B1A] rounded-[14px] flex items-center justify-center">
                  <Moon className="w-4 h-4 text-[#B794F4]" />
                </div>
              </div>
              <span className="font-display font-extrabold text-2xl tracking-wider text-gradient-lunar">
                LUVIA
              </span>
            </Link>
            <p className="text-sm text-[#CBD5E1] leading-relaxed max-w-sm">
              Your body has a natural lunar rhythm. LUVIA empowers women worldwide with AI-driven cycle tracking, hormone alignment guidance, emotional wellness monitoring, and caregiver connection.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#67E8F9] bg-[#67E8F9]/10 px-3 py-1.5 rounded-full border border-[#67E8F9]/20 w-fit">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>HIPAA Compliant & Encrypted Wellness Platform</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-base text-white tracking-wide">
              Explore LUVIA
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/tracker" className="text-[#CBD5E1] hover:text-[#B794F4] transition-colors">
                  Period Tracker
                </Link>
              </li>
              <li>
                <Link to="/mood" className="text-[#CBD5E1] hover:text-[#F9A8D4] transition-colors">
                  Mood & Symptom Journal
                </Link>
              </li>
              <li>
                <Link to="/diet" className="text-[#CBD5E1] hover:text-[#67E8F9] transition-colors">
                  Phase Diet Guide
                </Link>
              </li>
              <li>
                <Link to="/health" className="text-[#CBD5E1] hover:text-[#B794F4] transition-colors">
                  Health Hub Articles
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-[#CBD5E1] hover:text-[#F9A8D4] transition-colors">
                  Period Product Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Caregiver & Support */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-base text-white tracking-wide">
              Care & Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/caregiver" className="text-[#CBD5E1] hover:text-[#67E8F9] transition-colors">
                  Caregiver Portal
                </Link>
              </li>
              <li>
                <Link to="/notifications" className="text-[#CBD5E1] hover:text-[#B794F4] transition-colors">
                  Health Reminders
                </Link>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-2 text-xs text-[#F9A8D4] bg-[#F9A8D4]/10 p-2.5 rounded-xl border border-[#F9A8D4]/20">
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  <span>24/7 Women Health Helpline: 1800-LUVIA-CARE</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Lunar Wellness Newsletter */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-base text-white tracking-wide flex items-center gap-1.5">
              <span>Lunar Newsletter</span>
              <Sparkles className="w-3.5 h-3.5 text-[#B794F4]" />
            </h4>
            <p className="text-xs text-[#CBD5E1]">
              Receive monthly hormone alignment tips and moon phase wellness insights.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-2xl bg-[#67E8F9]/15 border border-[#67E8F9]/30 text-xs text-[#67E8F9] font-medium text-center">
                ✨ Welcome to the LUVIA Circle!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full py-2.5 px-3.5 text-xs text-white placeholder-white/30 bg-white/[0.05] border border-white/15 rounded-2xl focus:outline-none focus:border-[#B794F4] transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-xl bg-[#B794F4] text-[#090B1A] hover:scale-105 transition-transform"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Footer Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CBD5E1]/70">
          <p>© 2026 LUVIA Lunar Wellness Inc. Designed with <Heart className="w-3 h-3 inline text-[#F9A8D4] fill-[#F9A8D4]" /> for women's health.</p>
          <p className="text-center sm:text-right max-w-md">
            Disclaimer: LUVIA is an AI companion for menstrual tracking and wellness education. It does not replace professional medical diagnosis or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
