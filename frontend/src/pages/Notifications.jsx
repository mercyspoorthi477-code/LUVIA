import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, CheckCheck, Trash2, Calendar, Sparkles, Heart, ShieldCheck, ToggleLeft, ToggleRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 'notif-1',
      title: 'Ovulation Peak Today',
      message: 'Your body is in peak fertile window today (Day 14). High energy and radiance expected.',
      category: 'Period Reminders',
      time: '10 mins ago',
      read: false,
      icon: Sparkles,
      color: 'text-[#B794F4]',
    },
    {
      id: 'notif-[#67E8F9]',
      title: 'Hydration & Magnesium Goal',
      message: 'Remember to drink at least 2.5L water and enjoy dark chocolate or seeds today.',
      category: 'Health Reminders',
      time: '2 hours ago',
      read: false,
      icon: Heart,
      color: 'text-[#67E8F9]',
    },
    {
      id: 'notif-3',
      title: 'Caregiver Sync Confirmed',
      message: 'Julian Vance viewed your shared Ovulation status update at 8:45 AM.',
      category: 'Caregiver Sync',
      time: 'Yesterday',
      read: true,
      icon: ShieldCheck,
      color: 'text-[#F9A8D4]',
    },
    {
      id: 'notif-4',
      title: 'Upcoming Period Forecast',
      message: 'Your next period is predicted in 14 days (August 6, 2026). Stock up on organic pads.',
      category: 'Period Reminders',
      time: '2 days ago',
      read: true,
      icon: Calendar,
      color: 'text-[#B794F4]',
    },
  ]);

  const [preferences, setPreferences] = useState({
    periodAlerts: true,
    ovulationAlerts: true,
    pillReminders: true,
    caregiverAlerts: true,
  });

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const handleClearNotif = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const togglePref = (key) => {
    setPreferences({ ...preferences, [key]: !preferences[key] });
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#B794F4] uppercase tracking-widest">
            <Bell className="w-3.5 h-3.5" />
            <span>Lunar Notification Center</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold mt-1 flex items-center gap-3">
            <span>Reminders & Alerts</span>
            {unreadCount > 0 && (
              <span className="text-xs bg-[#B794F4] text-[#090B1A] font-extrabold px-3 py-1 rounded-full">
                {unreadCount} New
              </span>
            )}
          </h1>
          <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1">
            Stay aligned with timely cycle notifications, health nudges, and caregiver activity.
          </p>
        </div>

        {unreadCount > 0 && (
          <Button
            variant="glass"
            size="sm"
            icon={CheckCheck}
            onClick={handleMarkAllRead}
          >
            Mark All As Read
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Notification Feed */}
        <div className="lg:col-span-8 space-y-4">
          {notifications.length === 0 ? (
            <GlassCard accent="lunar" className="p-12 text-center space-y-3">
              <span className="text-4xl block">🌙</span>
              <h3 className="font-display text-xl font-bold text-white">All Clear!</h3>
              <p className="text-xs text-[#CBD5E1]">You have no active notifications right now.</p>
            </GlassCard>
          ) : (
            notifications.map((notif) => {
              const Icon = notif.icon;
              return (
                <GlassCard
                  key={notif.id}
                  accent={notif.read ? 'none' : 'lunar'}
                  className={`p-5 flex items-start justify-between gap-4 transition-all ${
                    !notif.read ? 'bg-white/[0.12] border-[#B794F4]/40' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-2xl bg-white/10 ${notif.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-display text-base font-bold text-white">
                          {notif.title}
                        </h4>
                        {!notif.read && (
                          <span className="w-2 h-2 rounded-full bg-[#67E8F9] animate-pulse" />
                        )}
                      </div>

                      <p className="text-xs text-[#CBD5E1] leading-relaxed">
                        {notif.message}
                      </p>

                      <div className="flex items-center gap-3 text-[10px] text-slate-400 pt-1">
                        <span>{notif.category}</span>
                        <span>•</span>
                        <span>{notif.time}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleClearNotif(notif.id)}
                    className="p-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-rose-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </GlassCard>
              );
            })
          )}
        </div>

        {/* Right Sidebar: Notification Preferences */}
        <div className="lg:col-span-4 space-y-6">
          <GlassCard accent="rose" className="p-6 space-y-4">
            <h3 className="font-display text-base font-bold text-white">
              Notification Preferences
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">Period Start Alerts</span>
                  <span className="text-[10px] text-[#CBD5E1]">Remind 3 days before expected date</span>
                </div>
                <button onClick={() => togglePref('periodAlerts')} className="text-[#B794F4]">
                  {preferences.periodAlerts ? <ToggleRight className="w-7 h-7" /> : <ToggleLeft className="w-7 h-7 text-slate-500" />}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">Ovulation Peak Alert</span>
                  <span className="text-[10px] text-[#CBD5E1]">Alert on peak fertile days</span>
                </div>
                <button onClick={() => togglePref('ovulationAlerts')} className="text-[#67E8F9]">
                  {preferences.ovulationAlerts ? <ToggleRight className="w-7 h-7" /> : <ToggleLeft className="w-7 h-7 text-slate-500" />}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">Wellness & Hydration Nudges</span>
                  <span className="text-[10px] text-[#CBD5E1]">Daily phase diet & fluid prompts</span>
                </div>
                <button onClick={() => togglePref('pillReminders')} className="text-[#F9A8D4]">
                  {preferences.pillReminders ? <ToggleRight className="w-7 h-7" /> : <ToggleLeft className="w-7 h-7 text-slate-500" />}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">Caregiver Activity Alerts</span>
                  <span className="text-[10px] text-[#CBD5E1]">Notify when partner/doctor views summary</span>
                </div>
                <button onClick={() => togglePref('caregiverAlerts')} className="text-[#B794F4]">
                  {preferences.caregiverAlerts ? <ToggleRight className="w-7 h-7" /> : <ToggleLeft className="w-7 h-7 text-slate-500" />}
                </button>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>

    </div>
  );
};

export default Notifications;
