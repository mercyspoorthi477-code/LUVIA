import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Moon,
  Calendar,
  Smile,
  BookOpen,
  Apple,
  ShoppingBag,
  Users,
  Bell,
  LogOut,
  Menu,
  X,
  User,
  Sparkles,
  LayoutDashboard
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from './Button';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: Moon },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, protected: true },
    { name: 'Period Tracker', path: '/tracker', icon: Calendar },
    { name: 'Mood Tracker', path: '/mood', icon: Smile },
    { name: 'Health Hub', path: '/health', icon: BookOpen },
    { name: 'Diet Guide', path: '/diet', icon: Apple },
    { name: 'Product Reviews', path: '/reviews', icon: ShoppingBag },
    { name: 'Caregiver', path: '/caregiver', icon: Users },
    { name: 'Notifications', path: '/notifications', icon: Bell },
  ];

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate('/login');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#090B1A]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#B794F4] via-[#F9A8D4] to-[#67E8F9] p-0.5 shadow-[0_0_20px_rgba(183,148,244,0.5)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#090B1A] rounded-[14px] flex items-center justify-center">
                <Moon className="w-5 h-5 text-[#B794F4] fill-[#B794F4]/20 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl tracking-wider text-gradient-lunar">
                LUVIA
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#67E8F9] font-semibold -mt-1">
                Lunar Wellness
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-white/[0.04] backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#CBD5E1] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#B794F4]/30 to-[#F9A8D4]/30 rounded-full border border-[#B794F4]/40"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#B794F4]' : 'text-slate-400'}`} />
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/[0.06] border border-white/15 hover:border-[#B794F4]/40 text-xs font-medium text-white transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#B794F4] to-[#F9A8D4] flex items-center justify-center text-[#090B1A] font-bold text-[10px]">
                    {user?.name ? user.name[0].toUpperCase() : 'L'}
                  </div>
                  <span className="max-w-[100px] truncate">{user?.name || 'Luna'}</span>
                </Link>
                <Button variant="glass" size="sm" onClick={handleLogout} icon={LogOut}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <Button variant="glass" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" size="sm" icon={Sparkles}>
                    Join LUVIA
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-2xl bg-white/[0.08] border border-white/15 text-white hover:bg-white/15 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#F9A8D4]" /> : <Menu className="w-6 h-6 text-[#B794F4]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#090B1A]/95 backdrop-blur-2xl border-b border-white/15 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#B794F4]/20 to-[#F9A8D4]/20 border border-[#B794F4]/40 text-white'
                        : 'text-[#CBD5E1] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#B794F4]' : 'text-slate-400'}`} />
                    <span>{link.name}</span>
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center gap-3 px-4 py-2 text-sm text-[#CBD5E1]">
                      <User className="w-4 h-4 text-[#67E8F9]" />
                      <span>Logged in as <strong className="text-white">{user?.name}</strong></span>
                    </div>
                    <Button variant="danger" size="md" onClick={handleLogout} icon={LogOut} fullWidth>
                      Log Out
                    </Button>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="glass" size="md" fullWidth>
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="primary" size="md" fullWidth icon={Sparkles}>
                        Join Now
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
