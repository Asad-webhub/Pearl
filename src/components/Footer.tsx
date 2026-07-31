import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 text-xs border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Registration Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-500 p-0.5 shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                  <span className="text-sky-400 font-black text-sm tracking-tighter">
                    PT
                  </span>
                </div>
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                {COMPANY_DETAILS.name}
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Malaysia-based technology solutions company helping businesses transform ideas into powerful digital experiences through custom software, AI innovation, and cloud transformation.
            </p>

            <div className="pt-2 space-y-1 font-mono text-[11px] text-slate-400">
              <div>Company Reg No: <span className="text-slate-200">{COMPANY_DETAILS.registrationNo}</span></div>
              <div>Country: <span className="text-slate-200">{COMPANY_DETAILS.country}</span></div>
              <div>Email: <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-blue-400 hover:underline">{COMPANY_DETAILS.email}</a></div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#solutions" className="hover:text-blue-400 transition-colors">
                  Our Solutions
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-blue-400 transition-colors">
                  Our Delivery Process
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-blue-400 transition-colors">
                  Why Choose Pearl Trinity
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-blue-400 transition-colors">
                  Industries We Support
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-blue-400 transition-colors">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Solution Pillars */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Key Solution Pillars
            </h4>
            <ul className="space-y-2">
              <li className="text-slate-300">Custom Software Development</li>
              <li className="text-slate-300">Web & Mobile Application Development</li>
              <li className="text-slate-300">AI & Intelligent Automation</li>
              <li className="text-slate-300">Cloud Solutions & Infrastructure</li>
              <li className="text-slate-300">Blockchain & Emerging Technologies</li>
              <li className="text-slate-300">UI/UX Design & Digital Experience</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-[11px]">
            © {new Date().getFullYear()} PEARL TRINITY SDN. BHD. ({COMPANY_DETAILS.registrationNo}). All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-[11px] font-mono">
              Innovate. Develop. Transform.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full border border-slate-700 transition-colors"
              title="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

