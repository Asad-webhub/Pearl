import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { APPROACH_STEPS } from '../data/companyData';
import { Compass, Layout, Code, CheckCircle2, ArrowRight, FileText, Cpu, Sparkles } from 'lucide-react';

export const ApproachSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-sky-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-indigo-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-emerald-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-cyan-400" />;
      default:
        return <Compass className="w-6 h-6 text-sky-400" />;
    }
  };

  const currentStep = APPROACH_STEPS[activeStepIndex];

  return (
    <section id="approach" className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Engineering Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">Delivery Process</span>
          </h2>
          <p className="text-base sm:text-lg text-blue-600 font-bold">
            From Blueprint To Digital Scalability
          </p>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We combine strategic architecture, agile development sprints, and enterprise SLA quality assurance to ensure your custom software is delivered on schedule, within scope, and ready to scale.
          </p>
        </div>

        {/* Interactive Steps Bento Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {APPROACH_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-6 rounded-3xl text-left transition-all duration-300 border flex flex-col justify-between relative overflow-hidden group ${
                  isActive
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/25 -translate-y-1'
                    : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-blue-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-black font-mono ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                    {step.number}
                  </span>
                  <div className={`p-2.5 rounded-2xl ${isActive ? 'bg-white/20 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}>
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <div>
                  <h3 className={`text-lg font-bold ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-xs mt-1 line-clamp-1 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                    {step.subtitle}
                  </p>
                </div>

                {/* Progress highlight line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 ${
                    isActive ? 'bg-white' : 'bg-transparent'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Detailed Step Content Box */}
        <div className="mt-8 p-7 sm:p-10 rounded-3xl bg-slate-50/90 border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Left Summary */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 font-mono text-xs font-bold">
                  PHASE {currentStep.number} OF 04
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                  {currentStep.subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {currentStep.title}: {currentStep.subtitle}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentStep.description}
              </p>

              {/* Deliverable Pill */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-sm">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Key Phase Deliverable:
                  </div>
                  <div className="text-sm font-semibold text-emerald-700 mt-0.5">
                    {currentStep.deliverable}
                  </div>
                </div>
              </div>
            </div>

            {/* Step Right Activities */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>Phase Execution Checklist & Activities</span>
              </h4>

              <div className="space-y-2.5">
                {currentStep.activities.map((activity, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 border border-blue-200 flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {activity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-between items-center text-xs text-slate-500">
                <span>Next Process Phase</span>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % APPROACH_STEPS.length)}
                  className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1 transition-colors"
                >
                  <span>Advance to {APPROACH_STEPS[(activeStepIndex + 1) % APPROACH_STEPS.length].title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

