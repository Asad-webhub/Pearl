import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { Sparkles, Compass, ShieldCheck, ArrowRight } from 'lucide-react';

interface VisionSectionProps {
  onOpenContact: () => void;
  onOpenAiConsultant: () => void;
}

export const VisionSection: React.FC<VisionSectionProps> = ({
  onOpenContact,
  onOpenAiConsultant,
}) => {
  return (
    <section id="vision" className="py-24 bg-slate-50/70 text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-blue-50/60 border border-slate-200 shadow-xl relative overflow-hidden group hover:border-blue-300 transition-all duration-500">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden lg:block">
            <Sparkles className="w-64 h-64 text-blue-600 animate-float" />
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest shadow-sm">
              <Compass className="w-3.5 h-3.5 text-blue-600" />
              <span>Our Vision</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {COMPANY_DETAILS.visionTitle}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              {COMPANY_DETAILS.visionText}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-blue-600/25 flex items-center gap-2 transition-all duration-200 hover:scale-105"
              >
                <span>Partner With Pearl Trinity</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAiConsultant}
                className="px-6 py-3.5 bg-white hover:bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-200 shadow-sm flex items-center gap-2 transition-all duration-200 hover:scale-105"
              >
                <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
                <span>Explore AI Strategy</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

