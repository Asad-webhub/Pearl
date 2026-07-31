import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SOLUTIONS_DATA } from '../data/companyData';
import { SolutionCategory } from '../types';
import { 
  Code2, 
  Smartphone, 
  Bot, 
  Cloud, 
  Layers, 
  Palette, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  Zap,
  Globe,
  Cpu,
  ShieldCheck
} from 'lucide-react';

interface SolutionsSectionProps {
  onSelectSolutionForContact: (solutionTitle: string) => void;
  onOpenEstimator: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolutionForContact,
  onOpenEstimator,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(SOLUTIONS_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDetailModal, setSelectedDetailModal] = useState<SolutionCategory | null>(null);

  const activeCategory = SOLUTIONS_DATA.find((s) => s.id === activeTabId) || SOLUTIONS_DATA[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-sky-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-indigo-400" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-purple-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-rose-400" />;
      default:
        return <Code2 className="w-6 h-6 text-sky-400" />;
    }
  };

  const filteredSolutions = searchQuery.trim()
    ? SOLUTIONS_DATA.filter(
        (cat) =>
          cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cat.items.some(
            (item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : SOLUTIONS_DATA;

  return (
    <section id="solutions" className="py-24 bg-slate-50/70 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] pointer-events-none rounded-full animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Our Capability Spectrum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Comprehensive <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">Digital Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From custom enterprise software to cutting-edge AI automation, cloud infrastructure, and Web3, Pearl Trinity delivers high-impact digital solutions designed for ASEAN & global scale.
          </p>
        </div>

        {/* Bento Grid Highlight Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Custom Enterprise Development */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.015 }}
            className="p-7 rounded-3xl bg-gradient-to-br from-white via-slate-50/80 to-blue-50/40 border border-slate-200/90 hover:border-blue-500 transition-all duration-300 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-500/15 group flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-all" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100/60 border border-blue-200 text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-blue-100/80 text-blue-800 border border-blue-200/80">
                  PILLAR 01
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Software & Web Development
              </h3>
              <p className="text-xs font-semibold text-blue-600 mt-1">Enterprise Web, SaaS Platforms & APIs</p>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Full-cycle web and enterprise software engineering built with modern frameworks, high security standards, and resilient microservices.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Web • APIs • Enterprise</span>
              <button
                onClick={() => onSelectSolutionForContact('Software & Web Development')}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-1 transition-all"
              >
                <span>Explore</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: AI & Intelligent Automation (Image Banner Card) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="p-7 rounded-3xl bg-gradient-to-br from-white via-emerald-50/20 to-teal-50/40 border border-slate-200/90 hover:border-emerald-500 transition-all duration-300 shadow-xl shadow-emerald-900/5 hover:shadow-2xl hover:shadow-emerald-500/15 group flex flex-col justify-between relative overflow-hidden md:col-span-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-7 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100/60 border border-emerald-200 text-emerald-600 shadow-sm group-hover:scale-110 transition-transform">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-100/80 text-emerald-800 border border-emerald-200/80">
                    PILLAR 02 • FEATURED
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  AI Solutions & Automation
                </h3>
                <p className="text-xs font-semibold text-emerald-600">LLM Integration, AI Agents & Predictive Analytics</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Supercharge business workflows with autonomous AI agents, smart document processing, AI chatbots, and custom Machine Learning models tailored to enterprise operational needs.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-white border border-emerald-200/80 text-[11px] font-mono font-semibold text-emerald-800 rounded-lg shadow-sm">Gemini AI</span>
                  <span className="px-2.5 py-1 bg-white border border-emerald-200/80 text-[11px] font-mono font-semibold text-emerald-800 rounded-lg shadow-sm">RAG Architecture</span>
                  <span className="px-2.5 py-1 bg-white border border-emerald-200/80 text-[11px] font-mono font-semibold text-emerald-800 rounded-lg shadow-sm">Process Agents</span>
                </div>
              </div>

              <div className="sm:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 h-48 sm:h-full min-h-[180px]">
                  <img
                    src="/src/assets/images/ai_cloud_network_1785500445471.jpg"
                    alt="AI Cloud Network Solutions"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-[10px] font-bold text-white bg-slate-900/80 p-2 rounded-xl border border-slate-700/80 backdrop-blur-sm shadow-md">
                    ✨ Automated Business Intelligence
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Enterprise AI • Multi-Modal • Agents</span>
              <button
                onClick={() => onSelectSolutionForContact('AI Solutions & Automation')}
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 group-hover:translate-x-1 transition-all"
              >
                <span>Request AI Demo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Search Bar */}
        <div className="mt-12 max-w-xl mx-auto relative">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search solutions (e.g. Mobile Apps, Cloud Migration, E-Commerce)..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-full text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 px-2.5 py-1 rounded-full"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Search Results Filter Display */}
        {searchQuery.trim() ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((sol) => (
              <div
                key={sol.id}
                className="p-6 bg-white border border-slate-200 rounded-3xl hover:border-blue-400 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 w-fit rounded-2xl bg-slate-50 border border-slate-200 mb-4">
                    {getIcon(sol.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{sol.title}</h3>
                  <p className="text-xs font-semibold text-blue-600 mt-1">{sol.tagline}</p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3">{sol.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-xs font-bold uppercase text-slate-500">Included Services:</span>
                    <ul className="space-y-1.5">
                      {sol.items.map((sub, idx) => (
                        <li key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{sub.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedDetailModal(sol)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>View Architecture</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onSelectSolutionForContact(sol.title)}
                    className="px-3.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-full border border-blue-200"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Interactive Tabbed Architecture Navigator */
          <div className="mt-12 space-y-8">
            
            {/* Category Selector Tabs */}
            <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
              {SOLUTIONS_DATA.map((category) => {
                const isActive = category.id === activeTabId;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTabId(category.id)}
                    className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                      isActive
                        ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-white border-slate-200/90 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 shadow-sm'
                    }`}
                  >
                    {getIcon(category.icon)}
                    <span>{category.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Bento Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-blue-900/5 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Description & Tech */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="p-3.5 w-fit rounded-2xl bg-blue-50 border border-blue-200 shadow-sm">
                    {getIcon(activeCategory.icon)}
                  </div>

                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                      Selected Solution Category
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                      {activeCategory.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-600 mt-1 italic">
                      "{activeCategory.tagline}"
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {activeCategory.description}
                  </p>

                  {/* Impact Highlight */}
                  <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs space-y-1">
                    <div className="font-bold text-blue-800 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span>Proven Enterprise Impact:</span>
                    </div>
                    <p className="text-slate-700 italic">{activeCategory.featuredUseCase}</p>
                  </div>

                  {/* Tech Badges */}
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Core Technology Stack:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeCategory.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={() => onSelectSolutionForContact(activeCategory.title)}
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-600/25 transition-all duration-200"
                    >
                      Inquire About {activeCategory.title}
                    </button>
                    <button
                      onClick={onOpenEstimator}
                      className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-full border border-slate-200 shadow-sm"
                    >
                      Calculate Cost Scope
                    </button>
                  </div>
                </div>

                {/* Right Items Grid */}
                <div className="lg:col-span-7">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                    Solutions & Services Included:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeCategory.items.map((subItem, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-300 hover:bg-white transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                            <h5 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {subItem.name}
                            </h5>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {subItem.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal for Deep Detail View */}
        {selectedDetailModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200">
            <div className="max-w-2xl w-full bg-white border border-slate-200 rounded-3xl p-6 space-y-6 relative max-h-[90vh] overflow-y-auto shadow-2xl">
              <button
                onClick={() => setSelectedDetailModal(null)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 text-xs bg-slate-100 px-3 py-1.5 rounded-full"
              >
                Close
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 rounded-2xl border border-blue-200">
                  {getIcon(selectedDetailModal.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{selectedDetailModal.title}</h3>
                  <p className="text-xs text-blue-600 font-semibold">{selectedDetailModal.tagline}</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedDetailModal.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Detailed Services Breakdown:
                </h4>
                <div className="space-y-2.5">
                  {selectedDetailModal.items.map((sub, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="text-xs font-bold text-blue-700">{sub.name}</div>
                      <div className="text-xs text-slate-600 mt-1">{sub.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Technologies Utilized:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDetailModal.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                <button
                  onClick={() => {
                    const title = selectedDetailModal.title;
                    setSelectedDetailModal(null);
                    onSelectSolutionForContact(title);
                  }}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-full shadow-lg shadow-blue-600/25"
                >
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

