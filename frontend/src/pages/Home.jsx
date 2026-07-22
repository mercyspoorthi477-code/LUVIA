import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HealthTip from "../components/HealthTip";

import {
  Sparkles,
  Calendar,
  Smile,
  Apple,
  BookOpen,
  Users,
  ShieldCheck,
  ArrowRight,
  Heart,
  Star,
  Activity,
  CheckCircle2
} from 'lucide-react';
import MoonAnimation from '../components/MoonAnimation';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import Footer from '../components/Footer';

const Home = () => {
  const [selectedPhaseDay, setSelectedPhaseDay] = useState(14);

  const phasesInfo = [
    { day: 3, name: 'Menstrual Phase', icon: '🩸', energy: 'Rest & Introspection', advice: 'Warm herbal teas, gentle stretching, iron-rich meals.' },
    { day: 9, name: 'Follicular Phase', icon: '🌱', energy: 'Rising Vitality', advice: 'New goals, fermented probiotic foods, light cardio.' },
    { day: 14, name: 'Ovulatory Phase', icon: '✨', energy: 'Peak Glow & Radiance', advice: 'Omega-3 fats, social activities, high energy workouts.' },
    { day: 22, name: 'Luteal Phase', icon: '🌙', energy: 'Reflective Calm', advice: 'Magnesium-rich foods, dark chocolate, soothing bedtime routine.' },
  ];

  const currentPhaseDetail = phasesInfo.find(p => p.day === selectedPhaseDay) || phasesInfo[2];

  const features = [
    {
      title: 'Period Tracking',
      description: 'Precision AI cycle predictions, ovulation alerts, and menstrual flow history.',
      icon: Calendar,
      accent: 'lunar',
      link: '/tracker',
      badge: 'Smart AI'
    },
    {
      title: 'Mood & Symptom Journal',
      description: 'Understand your emotional tide across 8 unique mood states and physical symptoms.',
      icon: Smile,
      accent: 'rose',
      link: '/mood',
      badge: 'Emotional Insights'
    },
    {
      title: 'Phase Diet Guidance',
      description: 'Nutritional recipes tailored to fuel your hormone shifts from Follicular to Luteal.',
      icon: Apple,
      accent: 'cyan',
      link: '/diet',
      badge: 'Hormone Fueled'
    },
    {
      title: 'Health Hub Articles',
      description: 'Magazine-style curated guides on PCOS, fertility, cramp relief, and mental wellness.',
      icon: BookOpen,
      accent: 'lunar',
      link: '/health',
      badge: 'Expert Backed'
    },
    {
      title: 'Caregiver Support',
      description: 'Share cycle updates securely with your partner, family, or personal health physician.',
      icon: Users,
      accent: 'rose',
      link: '/caregiver',
      badge: 'Shared Safety'
    },
  ];

  const testimonials = [
    {
      name: 'Ananya R.',
      role: 'Yoga Practitioner',
      text: 'LUVIA changed my perspective on my cycle. Seeing the moon phase sync with my energy made me embrace rest instead of feeling guilty.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Dr. Meera Patel',
      role: 'Gynecologist',
      text: 'The symptom tracking and caregiver sync feature allow my patients to share clear monthly data. It is thoughtful, elegant, and clinical.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Priya K.',
      role: 'Software Architect',
      text: 'Finally an application that doesn’t look like a childish pink toy! The Midnight Galaxy theme and glowing moon visualization are stunning.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <div className="relative min-h-screen text-white pt-24 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 text-center flex flex-col items-center">
        
        {/* Top Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#B794F4]/30 text-xs sm:text-sm font-medium text-[#B794F4] mb-8 shadow-lunar-glow"
        >
          <Sparkles className="w-4 h-4 text-[#F9A8D4] animate-pulse" />
          <span>Next-Generation AI Menstrual Wellness Companion</span>
        </motion.div>

        {/* Floating Glowing Animated Moon Visualizer */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="my-4"
        >
          <MoonAnimation
            cycleDay={14}
            phase="Ovulation Phase"
            healthScore={82}
            size="large"
          />
        </motion.div>

        {/* Main Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mt-8 space-y-4"
        >
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Your body has a rhythm.{' '}
            <span className="text-gradient-lunar">Understand it with LUVIA.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl mx-auto font-normal">
            Align your daily energy, nutrition, moods, and period predictions with the natural ebb and flow of your body’s monthly cycle.
          </p>
        </motion.div>

        {/* CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
        >
          <Link to="/register">
            <Button variant="primary" size="lg" icon={Sparkles} iconPosition="right">
              Start Your Journey
            </Button>
          </Link>
          <Link to="/health">
            <Button variant="glass" size="lg" icon={BookOpen}>
              Explore Health
            </Button>
          </Link>
        </motion.div>

        {/* Key Highlight Stats Pill Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl w-full"
        >
          <GlassCard hover={false} className="text-center p-4">
            <span className="text-2xl font-extrabold text-[#B794F4]">99.2%</span>
            <span className="text-xs text-[#CBD5E1] block mt-1">Prediction Accuracy</span>
          </GlassCard>
          <GlassCard hover={false} className="text-center p-4">
            <span className="text-2xl font-extrabold text-[#F9A8D4]">28 Days</span>
            <span className="text-xs text-[#CBD5E1] block mt-1">Full Cycle Visualizer</span>
          </GlassCard>
          <GlassCard hover={false} className="text-center p-4">
            <span className="text-2xl font-extrabold text-[#67E8F9]">100%</span>
            <span className="text-xs text-[#CBD5E1] block mt-1">Private & Encrypted</span>
          </GlassCard>
          <GlassCard hover={false} className="text-center p-4">
            <span className="text-2xl font-extrabold text-white">4.9 ★</span>
            <span className="text-xs text-[#CBD5E1] block mt-1">Women Choice Rating</span>
          </GlassCard>
        </motion.div>
        <HealthTip />
      </section>

      {/* How LUVIA Works Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#67E8F9] font-bold">Simple Harmony</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-2">
            How LUVIA Works
          </h2>
          <p className="text-sm text-[#CBD5E1] mt-3">
            Three simple steps to transform how you connect with your body.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard accent="lunar">
            <div className="w-12 h-12 rounded-2xl bg-[#B794F4]/20 border border-[#B794F4]/40 flex items-center justify-center text-[#B794F4] text-xl font-bold mb-4">
              1
            </div>
            <h3 className="font-display text-xl font-bold mb-2">Log Your Cycle</h3>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              Enter your period dates, physical symptoms, and mood states with quick tap interfaces.
            </p>
          </GlassCard>

          <GlassCard accent="rose">
            <div className="w-12 h-12 rounded-2xl bg-[#F9A8D4]/20 border border-[#F9A8D4]/40 flex items-center justify-center text-[#F9A8D4] text-xl font-bold mb-4">
              2
            </div>
            <h3 className="font-display text-xl font-bold mb-2">AI Rhythm Analysis</h3>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              LUVIA correlates your hormone shifts with moon phases, calculating health scores and ovulation windows.
            </p>
          </GlassCard>

          <GlassCard accent="cyan">
            <div className="w-12 h-12 rounded-2xl bg-[#67E8F9]/20 border border-[#67E8F9]/40 flex items-center justify-center text-[#67E8F9] text-xl font-bold mb-4">
              3
            </div>
            <h3 className="font-display text-xl font-bold mb-2">Personalized Guidance</h3>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              Receive daily phase-specific diet plans, self-care prompts, and optional caregiver alerts.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#F9A8D4] font-bold">Holistic Wellness</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-2">
            Features Tailored For You
          </h2>
          <p className="text-sm text-[#CBD5E1] mt-3">
            Designed to support every dimension of your monthly rhythm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <GlassCard key={idx} accent={feat.accent} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-[#B794F4]">
                      <Icon className="w-5 h-5 text-[#B794F4]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#67E8F9] bg-[#67E8F9]/10 px-2.5 py-1 rounded-full border border-[#67E8F9]/20">
                      {feat.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2 text-white">{feat.title}</h3>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>
                <Link to={feat.link} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B794F4] hover:text-white transition-colors">
                  <span>Explore Feature</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* Interactive Health Insights Moon Phase Preview */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#67E8F9] font-bold">Lunar Syncing</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight">
              Align Your Daily Routine With Your Phase
            </h2>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              Your energy naturally shifts through four distinct biological phases each month. Click any phase below to preview how LUVIA tailors your wellness recommendations:
            </p>

            <div className="grid grid-cols-2 gap-3">
              {phasesInfo.map((p) => (
                <button
                  key={p.day}
                  onClick={() => setSelectedPhaseDay(p.day)}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    selectedPhaseDay === p.day
                      ? 'bg-gradient-to-r from-[#B794F4]/20 to-[#F9A8D4]/20 border-[#B794F4] shadow-lunar-glow'
                      : 'bg-white/[0.04] border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{p.icon}</span>
                    <span className="text-xs font-bold text-white">{p.name}</span>
                  </div>
                  <span className="text-[10px] text-[#CBD5E1] block mt-1">Day {p.day} Cycle</span>
                </button>
              ))}
            </div>
          </div>

          <GlassCard accent="lunar" className="p-8 text-center space-y-6">
            <div className="inline-block p-4 rounded-full bg-[#B794F4]/10 border border-[#B794F4]/30">
              <span className="text-5xl">{currentPhaseDetail.icon}</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-[#67E8F9] uppercase tracking-wider block">Phase Highlight</span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">{currentPhaseDetail.name}</h3>
              <p className="text-xs text-[#F9A8D4] font-medium mt-1">Energy: {currentPhaseDetail.energy}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 text-xs text-[#CBD5E1] text-left">
              <strong className="text-white block mb-1">Recommended Alignment:</strong>
              {currentPhaseDetail.advice}
            </div>
            <Link to="/diet">
              <Button variant="primary" size="md" fullWidth icon={ArrowRight} iconPosition="right">
                View Phase Diet Plan
              </Button>
            </Link>
          </GlassCard>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B794F4] font-bold">Loved By Women</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-2">
            Real Stories, Real Harmony
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <GlassCard key={i} accent="rose" className="space-y-4">
              <div className="flex items-center gap-1 text-[#F9A8D4]">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#CBD5E1] italic leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover border border-[#B794F4]" />
                <div>
                  <h4 className="text-xs font-bold text-white">{t.name}</h4>
                  <span className="text-[10px] text-[#67E8F9]">{t.role}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16 text-center">
        <GlassCard accent="lunar" className="p-10 sm:p-14 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Embrace Your Body's Natural Rhythm Today
          </h2>
          <p className="text-sm text-[#CBD5E1] max-w-xl mx-auto">
            Join thousands of women who have found balance, clarity, and peace with LUVIA.
          </p>
          <div className="pt-2 flex justify-center">
            <Link to="/register">
              <Button variant="primary" size="lg" icon={Sparkles}>
                Create Your Free Account
              </Button>
            </Link>
          </div>
        </GlassCard>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
