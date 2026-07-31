import React, { useState } from 'react';
import { INDUSTRIES } from '../data/companyData';
import { 
  Server, 
  Building2, 
  Activity, 
  ShoppingBag, 
  Briefcase, 
  Factory, 
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface IndustriesSectionProps {
  onSelectIndustryForContact: (industryName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onSelectIndustryForContact,
}) => {
  const [activeIndustryId, setActiveIndustryId] = useState<string>(INDUSTRIES[0].id);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-sky-400" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-teal-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-cyan-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-indigo-400" />;
      case 'Factory':
        return <Factory className="w-5 h-5 text-purple-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-amber-400" />;
      default:
        return <Server className="w-5 h-5 text-sky-400" />;
    }
  };

  const selectedIndustry = INDUSTRIES.find((i) => i.id === activeIndustryId) || INDUSTRIES[0];

  return (
    <section id="industries" className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Domain Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Industries We <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">Empower</span>
          </h2>
          <p className="text-base sm:text-lg text-blue-600 font-bold">
            Domain-Specific Technology Solutions Engineered for High-Growth Sectors
          </p>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We adapt our core engineering architecture to meet stringent regulatory, operational, and performance requirements across ASEAN and international enterprise markets.
          </p>
        </div>

        {/* Industry Selector Grid */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {INDUSTRIES.map((ind) => {
            const isActive = ind.id === activeIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-white shadow-sm'
                }`}
              >
                {getIndustryIcon(ind.icon)}
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Feature Showcase */}
        <div className="mt-8 p-7 sm:p-10 rounded-3xl bg-slate-50/90 border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="p-3.5 w-fit rounded-2xl bg-white border border-slate-200 shadow-sm">
                {getIndustryIcon(selectedIndustry.icon)}
              </div>

              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  Tailored Sector Solution
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  {selectedIndustry.name}
                </h3>
                <p className="text-sm text-blue-700 font-bold mt-1">
                  {selectedIndustry.tagline}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Pearl Trinity equips {selectedIndustry.name.toLowerCase()} organizations with custom software systems, automated compliance workflows, and scalable cloud platforms designed for regional leadership.
              </p>

              <button
                onClick={() => onSelectIndustryForContact(selectedIndustry.name)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-600/25 transition-all duration-200 hover:scale-105"
              >
                <span>Discuss {selectedIndustry.name} Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Key Systems & Solutions Provided:
              </h4>

              <div className="space-y-3">
                {selectedIndustry.keySolutions.map((sol, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-slate-900">{sol}</div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Enterprise architecture, secure data isolation & API integration.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

