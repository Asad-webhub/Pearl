import React, { useState } from 'react';
import { Sparkles, X, Loader2, CheckCircle2, ArrowRight, Copy, Check } from 'lucide-react';

interface AiConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTransferToContact: (strategySummary: string) => void;
}

export const AiConsultantModal: React.FC<AiConsultantModalProps> = ({
  isOpen,
  onClose,
  onTransferToContact,
}) => {
  const [industry, setIndustry] = useState('Financial Services');
  const [companyType, setCompanyType] = useState('Growing Enterprise');
  const [goals, setGoals] = useState('Automate Operations & Integrate AI Chatbot');
  const [customPrompt, setCustomPrompt] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    setResult(null);

    try {
      const response = await fetch('/api/ai-consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          industry,
          companyType,
          goals,
          customPrompt,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setResult(data.recommendation);
      } else {
        setErrorMsg(data.error || 'Unable to generate recommendation');
      }
    } catch (err: any) {
      setErrorMsg('Failed to connect to Pearl Trinity AI Advisor server.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    const text = `Pearl Trinity Strategy Proposal: ${result.title}\nSummary: ${result.summary}\nTimeline: ${result.estimatedTimeline}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="max-w-3xl w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto text-slate-900 shadow-2xl">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 shadow-sm">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Pearl Trinity AI Strategy Advisor
              </h3>
              <p className="text-xs text-slate-500">
                Generate a custom digital transformation roadmap for your organization
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Select Industry
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-600"
            >
              <option value="Financial Services">Financial Services</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Retail & E-Commerce">Retail & E-Commerce</option>
              <option value="Technology & SaaS">Technology & SaaS</option>
              <option value="Professional Services">Professional Services</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Organization Type
            </label>
            <select
              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-600"
            >
              <option value="Growing Enterprise">Growing Enterprise</option>
              <option value="Established Corporate">Established Corporate</option>
              <option value="High-Growth Startup">High-Growth Startup</option>
              <option value="SME Organization">SME Organization</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Primary Objective
            </label>
            <select
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-600"
            >
              <option value="Automate Operations & Integrate AI Chatbot">AI & Process Automation</option>
              <option value="Build Custom SaaS / Web Application">Custom SaaS / Web Platform</option>
              <option value="Cloud Migration & DevOps Scalability">Cloud Migration & Scalability</option>
              <option value="Mobile App Development & Modern UX">Mobile App & Modern UX</option>
              <option value="Blockchain & Web3 Ecosystem">Blockchain & Smart Contracts</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
            Additional Business Context or Specific Requirements (Optional)
          </label>
          <textarea
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            rows={2}
            placeholder="e.g. We need a secure patient booking portal that syncs with our legacy database and automates SMS reminders."
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
          />
        </div>

        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 disabled:opacity-50 transition-all duration-200 hover:scale-[1.01]"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Analyzing Requirements & Generating AI Strategy...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Generate AI Solution Strategy</span>
            </>
          )}
        </button>

        {/* Output Strategy Display */}
        {errorMsg && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
            {errorMsg}
          </div>
        )}

        {result && (
          <div className="p-6 bg-slate-50 border border-blue-200 rounded-2xl space-y-4 animate-in fade-in duration-300 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest">
                  Custom Strategy Report
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">{result.title}</h4>
              </div>

              <button
                onClick={handleCopy}
                className="p-2 text-xs text-slate-600 hover:text-blue-600 bg-white rounded-lg border border-slate-200 flex items-center gap-1 shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Report'}</span>
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">{result.summary}</p>

            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Recommended Solution Stack:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {result.keySolutions?.map((sol: string, idx: number) => (
                  <div key={idx} className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center gap-2 text-xs text-slate-800 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <span className="font-semibold text-slate-800">Estimated Timeline:</span>
                <span className="text-blue-600 font-mono font-bold">{result.estimatedTimeline}</span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onTransferToContact(`AI Strategy Recommendation: ${result.title} - ${result.summary}`);
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-md transition-all duration-200"
              >
                <span>Discuss Proposal with Pearl Trinity</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
