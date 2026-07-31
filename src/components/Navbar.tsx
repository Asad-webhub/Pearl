import React, { useState, useEffect } from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { Menu, X, Sparkles, Calculator, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenAiConsultant: () => void;
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAiConsultant,
  onOpenEstimator,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Process', href: '#approach' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Industries', href: '#industries' },
    { name: 'Vision', href: '#vision' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-3 pb-1 ${
        isScrolled
          ? 'translate-y-0'
          : 'translate-y-0'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-3xl sm:rounded-full px-4 sm:px-6 py-2.5 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-2xl border border-slate-200/90 shadow-xl shadow-blue-900/5 ring-1 ring-slate-900/5'
            : 'bg-white/75 backdrop-blur-xl border border-slate-200/60 shadow-lg shadow-slate-200/50'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Glowing Gradient Emblem */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition duration-300" />
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300">
                <div className="w-4 h-4 bg-white/90 rounded-sm rotate-45 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-ping" />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                PEARL TRINITY
              </span>
              <span className="text-[9px] font-mono tracking-widest text-slate-500 font-semibold uppercase">
                Software & AI Engineering
              </span>
            </div>
          </a>

          {/* Desktop Floating Pill Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 backdrop-blur-xl border border-slate-200/80 rounded-full px-4 py-1 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              id="nav-estimator-btn"
              onClick={onOpenEstimator}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-blue-300 rounded-full transition-all duration-200 shadow-sm"
              title="Interactive Project Estimator"
            >
              <Calculator className="w-3.5 h-3.5 text-blue-600" />
              <span>Scope Estimator</span>
            </button>

            <button
              id="nav-ai-advisor-btn"
              onClick={onOpenAiConsultant}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-blue-700 hover:text-blue-800 bg-blue-50/90 hover:bg-blue-100 border border-blue-200/90 rounded-full transition-all duration-200 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>AI Strategy</span>
            </button>

            <button
              id="nav-contact-btn"
              onClick={onOpenContact}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-blue-600/25 hover:scale-[1.03] active:scale-[0.98]"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAiConsultant}
              className="p-2 text-blue-600 bg-blue-50 border border-blue-200 rounded-xl"
              aria-label="AI Strategy"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 rounded-xl focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full"
            >
              <Calculator className="w-4 h-4 text-blue-600" />
              <span>Project Scope Estimator</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiConsultant();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Launch AI Tech Strategy</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg"
            >
              <span>Get in Touch with Pearl Trinity</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

