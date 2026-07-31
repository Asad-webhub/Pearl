import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../data/companyData';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Globe, Code, Cpu, CheckCircle, Activity, Bot, CpuIcon, Layers } from 'lucide-react';
import { TransparentRobotImage } from './TransparentRobotImage';

interface HeroProps {
  onOpenAiConsultant: () => void;
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

const ANIMATED_PHRASES = [
  'Drives Enterprise Scale',
  'Automates Workflows',
  'Accelerates Growth',
  'Powers AI Innovation',
];

export const Hero: React.FC<HeroProps> = ({
  onOpenAiConsultant,
  onOpenEstimator,
  onOpenContact,
}) => {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % ANIMATED_PHRASES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Malaysia HQ', sub: 'Kuala Lumpur Tech Hub', icon: Globe, highlight: 'ASEAN Region' },
    { label: '6 Core Pillars', sub: 'Software, AI, Cloud & Mobile', icon: Code, highlight: 'Full Stack' },
    { label: '100% Tailored', sub: 'Enterprise Architecture & Code', icon: Cpu, highlight: 'Custom Build' },
    { label: 'End-to-End SLA', sub: 'Strategy to Production SLA', icon: ShieldCheck, highlight: 'Enterprise SLA' },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-blue-50/40 text-slate-900">
      {/* Background Animated Gradient Ambient Lights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[130px] pointer-events-none rounded-full animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 my-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center md:text-left space-y-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Building Intelligent Software That{' '}
              <span className="inline-block relative overflow-hidden align-bottom min-h-[1.2em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIndex}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent pb-1"
                  >
                    {ANIMATED_PHRASES[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {COMPANY_DETAILS.about}
            </p>

            {/* Core Motto Pill Badges */}
            <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              {['Innovate', 'Develop', 'Transform'].map((word) => (
                <div
                  key={word}
                  className="flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-700 tracking-wider uppercase shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors"
                >
                  <Zap className="w-3.5 h-3.5 text-blue-600" />
                  <span>{word}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-semibold text-blue-700">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>Verified Reg: {COMPANY_DETAILS.registrationNo}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 justify-center md:justify-start">
              <button
                id="hero-explore-btn"
                onClick={() => {
                  const el = document.getElementById('solutions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-ai-btn"
                onClick={onOpenAiConsultant}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-full transition-all duration-300 shadow-sm hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
                <span>AI Strategy Advisor</span>
              </button>

              <button
                id="hero-estimator-btn"
                onClick={onOpenEstimator}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-full transition-all duration-300 shadow-sm"
              >
                <span>Scope Estimator</span>
              </button>
            </div>
          </div>

          {/* Right Hero Section: Robot Seamlessly Mixed with Webpage */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center py-4">
            
            {/* Ambient Multi-Layer Glowing Animation & Tech Orbit Rings behind Robot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-sky-400/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-300/20 rounded-full blur-2xl pointer-events-none animate-ping opacity-20" />
            
            {/* Rotating Ambient Tech Halo Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-blue-400/20 border-dashed pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-84 h-84 sm:w-96 sm:h-96 rounded-full border border-indigo-400/15 border-dotted pointer-events-none"
            />

            {/* Floating Robot Container with Dynamic Physics & Ground Shadow */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-md sm:max-w-lg flex flex-col items-center justify-center pointer-events-auto"
            >
              <div className="relative w-full flex items-center justify-center">
                <TransparentRobotImage
                  src="/src/assets/images/cute_robot_laptop_1785504498794.jpg"
                  alt="Pearl Trinity AI Cute Robot with Glowing Laptop"
                  className="w-full h-auto object-contain drop-shadow-2xl -scale-x-100 transition-transform duration-500 hover:-scale-x-105"
                />
              </div>

              {/* Realistic Soft Ambient Ground Shadow underneath */}
              <motion.div
                animate={{ scale: [0.85, 1, 0.85], opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-2/3 h-5 bg-gradient-to-r from-blue-600/30 via-slate-900/40 to-blue-600/30 rounded-full blur-md -mt-6 pointer-events-none"
              />
            </motion.div>

          </div>

        </div>

        {/* Bottom Bento Metric Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 rounded-2xl bg-gradient-to-br from-white via-slate-50/90 to-blue-50/40 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400 transition-all duration-300 flex items-center gap-4 cursor-pointer group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100/60 border border-blue-200 text-blue-600 shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900 tracking-wide group-hover:text-blue-600 transition-colors">{stat.label}</span>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100/80 text-blue-800 border border-blue-200">
                      {stat.highlight}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


