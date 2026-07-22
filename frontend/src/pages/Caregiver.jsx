import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, UserPlus, ShieldCheck, Mail, Heart, Check, X, Share2, AlertCircle, Copy } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import InputField from '../components/InputField';

const Caregiver = () => {
  const [caregivers, setCaregivers] = useState([
    {
      id: 'cg-1',
      name: 'Julian Vance',
      email: 'julian@wellness.com',
      relationship: 'Partner',
      permissions: ['Period Reminders', 'Mood Alerts'],
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 'cg-2',
      name: 'Dr. Ananya Sharma',
      email: 'dr.ananya@healthclinic.org',
      relationship: 'Gynecologist',
      permissions: ['Cycle Logs', 'Emergency Alerts'],
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80'
    }
  ]);

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    relationship: 'Partner',
    permissions: ['Period Reminders']
  });

  const [copiedLink, setCopiedLink] = useState(false);

  const handleTogglePermission = (perm) => {
    if (formData.permissions.includes(perm)) {
      setFormData({
        ...formData,
        permissions: formData.permissions.filter(p => p !== perm)
      });
    } else {
      setFormData({
        ...formData,
        permissions: [...formData.permissions, perm]
      });
    }
  };

  const handleAddCaregiver = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const newCg = {
      id: 'cg-' + Date.now(),
      name: formData.name,
      email: formData.email,
      relationship: formData.relationship,
      permissions: formData.permissions,
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
    };

    setCaregivers([...caregivers, newCg]);
    setAddModalOpen(false);
    setFormData({ name: '', email: '', relationship: 'Partner', permissions: ['Period Reminders'] });
  };

  const handleRemoveCaregiver = (id) => {
    setCaregivers(caregivers.filter(c => c.id !== id));
  };

  const handleCopyShareLink = () => {
    navigator.clipboard?.writeText('https://luvia.wellness/share/cycle/luna-108');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div className="min-h-screen text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#67E8F9] uppercase tracking-widest">
            <Users className="w-3.5 h-3.5" />
            <span>Support Circle & Caregiver Network</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold mt-1">
            Caregiver Connections
          </h1>
          <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1">
            Keep your partner, doctor, or family informed with secure, consent-based cycle updates.
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          icon={UserPlus}
          onClick={() => setAddModalOpen(true)}
        >
          Add Caregiver
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Caregiver List */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {caregivers.map((cg) => (
              <GlassCard key={cg.id} accent="lunar" className="p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={cg.avatar}
                        alt={cg.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#B794F4]"
                      />
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">{cg.name}</h3>
                        <span className="text-xs text-[#67E8F9] font-medium">{cg.relationship}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                      {cg.status}
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#F9A8D4]" />
                    <span className="truncate">{cg.email}</span>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-white/10">
                    <span className="text-[11px] font-bold text-[#CBD5E1] block">Granted Permissions:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cg.permissions.map((p, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-[#B794F4]/20 text-[#B794F4] px-2.5 py-0.5 rounded-full border border-[#B794F4]/30"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => handleRemoveCaregiver(cg.id)}
                    className="text-xs text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Revoke Access</span>
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Right Sidebar: Shareable Link & Privacy Guarantee */}
        <div className="lg:col-span-4 space-y-6">
          
          <GlassCard accent="cyan" className="p-6 space-y-4">
            <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
              <Share2 className="w-4 h-4 text-[#67E8F9]" />
              <span>Shareable Cycle Summary Link</span>
            </h3>
            <p className="text-xs text-[#CBD5E1]">
              Generate a temporary, encrypted web link to share your cycle calendar directly with your gynecologist during consultation.
            </p>

            {copiedLink ? (
              <div className="p-3 rounded-xl bg-[#67E8F9]/20 border border-[#67E8F9]/40 text-xs text-[#67E8F9] font-bold text-center">
                ✓ Encrypted link copied to clipboard!
              </div>
            ) : (
              <Button
                variant="glass"
                size="md"
                fullWidth
                icon={Copy}
                onClick={handleCopyShareLink}
              >
                Copy Encrypted Link
              </Button>
            )}
          </GlassCard>

          <GlassCard accent="rose" className="p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#F9A8D4] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>End-to-End Privacy</span>
            </div>
            <p className="text-xs text-[#CBD5E1] leading-relaxed">
              Caregivers can only view information that you explicitly grant. You can pause or revoke access instantly at any time.
            </p>
          </GlassCard>

        </div>

      </div>

      {/* Add Caregiver Modal */}
      <AnimatePresence>
        {addModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090B1A]/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-md w-full"
            >
              <GlassCard accent="lunar" className="p-6 space-y-6 relative">
                <button
                  onClick={() => setAddModalOpen(false)}
                  className="absolute top-6 right-6 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  <X className="w-4 h-4" />
                </button>

                <h3 className="font-display text-2xl font-bold text-white">
                  Connect New Caregiver
                </h3>

                <form onSubmit={handleAddCaregiver} className="space-y-4">
                  <InputField
                    label="Caregiver Name"
                    name="name"
                    placeholder="e.g. Julian Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />

                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="caregiver@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#CBD5E1]">Relationship</label>
                    <select
                      value={formData.relationship}
                      onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                      className="w-full py-3 px-3.5 text-sm text-white bg-white/[0.05] border border-white/15 rounded-2xl focus:outline-none"
                    >
                      <option value="Partner" className="bg-[#090B1A]">Partner</option>
                      <option value="Gynecologist" className="bg-[#090B1A]">Gynecologist / Doctor</option>
                      <option value="Mother" className="bg-[#090B1A]">Mother</option>
                      <option value="Sister" className="bg-[#090B1A]">Sister</option>
                      <option value="Friend" className="bg-[#090B1A]">Trusted Friend</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#CBD5E1] block">Permissions Granted:</label>
                    <div className="space-y-2 text-xs">
                      {['Period Reminders', 'Mood Alerts', 'Cycle Logs', 'Emergency Alerts'].map((perm) => (
                        <label key={perm} className="flex items-center gap-2 text-white cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.permissions.includes(perm)}
                            onChange={() => handleTogglePermission(perm)}
                            className="rounded accent-[#B794F4]"
                          />
                          <span>{perm}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" variant="primary" size="md" fullWidth>
                    Send Caregiver Invitation
                  </Button>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Caregiver;
