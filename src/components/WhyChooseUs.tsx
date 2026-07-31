import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data/companyData';
import { Workflow, Cpu, TrendingUp, ShieldCheck, Handshake, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenContact: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenContact }) => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-sky-500" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-500" />;
      case 'Handshake':
        return <Handshake className="w-6 h-6 text-purple-500" />;
      default:
        return <Workflow className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-slate-50/70 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Our Competitive Edge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Why Choose <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">Pearl Trinity</span>
          </h2>
          <p className="text-base sm:text-lg text-blue-600 font-bold">
            Enterprise Digital Architecture Designed Around Your Business Growth
          </p>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We bridge the gap between complex software engineering and tangible commercial outcomes. Partnering with Pearl Trinity guarantees enterprise reliability, transparency, and high velocity.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl cursor-pointer ${
                idx === 0
                  ? 'lg:col-span-2 bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/50 border-blue-200/90 hover:border-blue-500 shadow-blue-900/5 hover:shadow-blue-500/15'
                  : 'bg-gradient-to-br from-white via-slate-50/90 to-blue-50/30 border-slate-200/90 hover:border-blue-400 shadow-blue-900/5 hover:shadow-blue-500/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100/60 border border-blue-200/80 shadow-sm group-hover:scale-110 transition-transform">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-700/80 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    PILLAR 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-blue-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{pillar.highlight}</span>
              </div>
            </motion.div>
          ))}

          {/* Special CTA Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: WHY_CHOOSE_US.length * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-7 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white border border-blue-500 shadow-2xl shadow-blue-600/30 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-all" />
            <div>
              <span className="text-xs font-bold text-blue-100 uppercase tracking-widest block mb-2">
                Ready to Accelerate?
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                Transform Your Digital Vision Today
              </h3>
              <p className="text-xs text-blue-100 mt-2 leading-relaxed">
                Schedule a direct technical consultation with Pearl Trinity solutions architects in Kuala Lumpur.
              </p>
            </div>

            <button
              onClick={onOpenContact}
              className="mt-6 w-full py-3.5 px-5 bg-white hover:bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02]"
            >
              <span>Connect with Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

