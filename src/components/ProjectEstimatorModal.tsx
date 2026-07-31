import React, { useState } from 'react';
import { Calculator, X, Check, ArrowRight, Layers, Clock, Users, ShieldCheck } from 'lucide-react';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTransferToContact: (estimatorDetails: string) => void;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  onTransferToContact,
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Custom Software Development',
    'AI & Intelligent Automation',
  ]);
  const [scale, setScale] = useState<'startup' | 'sme' | 'enterprise'>('sme');
  const [includeAi, setIncludeAi] = useState(true);
  const [includeCloud, setIncludeCloud] = useState(true);
  const [urgency, setUrgency] = useState<'standard' | 'expedited'>('standard');

  if (!isOpen) return null;

  const serviceOptions = [
    'Custom Software Development',
    'Web & Mobile Application Development',
    'AI & Intelligent Automation',
    'Cloud Solutions',
    'Blockchain & Emerging Tech',
    'UI/UX Design & Digital Experience',
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  // Compute calculated estimations
  const calculateEstimate = () => {
    let baseWeeks = selectedServices.length * 2.5;
    if (scale === 'startup') baseWeeks *= 0.8;
    if (scale === 'enterprise') baseWeeks *= 1.6;
    if (includeAi) baseWeeks += 2;
    if (includeCloud) baseWeeks += 1.5;
    if (urgency === 'expedited') baseWeeks *= 0.75;

    const weeksMin = Math.max(4, Math.floor(baseWeeks));
    const weeksMax = weeksMin + 3;

    let team = ['Lead Tech Architect', 'Senior Full-Stack Engineers'];
    if (selectedServices.includes('UI/UX Design & Digital Experience')) team.push('UI/UX Designer');
    if (includeAi) team.push('AI & Data Specialist');
    if (includeCloud) team.push('DevOps & Cloud Engineer');
    if (scale === 'enterprise') team.push('Project Manager & QA Lead');

    return {
      timeline: `${weeksMin} - ${weeksMax} Weeks`,
      team,
      deliveryModel: scale === 'enterprise' ? 'Enterprise Agile Sprint SLA' : 'Agile Sprint Delivery',
      architecture: selectedServices.join(' + '),
    };
  };

  const est = calculateEstimate();

  const handleApplyEstimate = () => {
    const summary = `Project Scope Estimate:
- Services: ${selectedServices.join(', ')}
- Organization Scale: ${scale.toUpperCase()}
- AI Integration: ${includeAi ? 'Yes' : 'No'}
- Cloud Infrastructure: ${includeCloud ? 'Yes' : 'No'}
- Estimated Timeline: ${est.timeline}
- Recommended Team: ${est.team.join(', ')}`;

    onClose();
    onTransferToContact(summary);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="max-w-3xl w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto text-slate-900 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 shadow-sm">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Project Scope & Timeline Estimator
              </h3>
              <p className="text-xs text-slate-500">
                Configure your digital solution requirements for an instant architecture estimate
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

        {/* Step 1: Select Services */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
            1. Select Required Solution Pillars (Select at least one)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {serviceOptions.map((srv) => {
              const selected = selectedServices.includes(srv);
              return (
                <button
                  key={srv}
                  onClick={() => toggleService(srv)}
                  className={`p-3 rounded-xl text-left text-xs font-semibold flex items-center justify-between border transition-all duration-200 ${
                    selected
                      ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>{srv}</span>
                  <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${selected ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'}`}>
                    {selected && <Check className="w-3 h-3" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Scale */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              2. Solution Scale
            </label>
            <div className="space-y-2">
              {[
                { id: 'startup', label: 'Startup / MVP' },
                { id: 'sme', label: 'SME / Growth Platform' },
                { id: 'enterprise', label: 'Enterprise System' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setScale(opt.id as any)}
                  className={`w-full p-2.5 rounded-xl text-left text-xs font-semibold border transition-all ${
                    scale === opt.id
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              3. Advanced Modules
            </label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 cursor-pointer">
                <span>AI / Intelligent Automation</span>
                <input
                  type="checkbox"
                  checked={includeAi}
                  onChange={(e) => setIncludeAi(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-0"
                />
              </label>

              <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 cursor-pointer">
                <span>Cloud Infrastructure & CI/CD</span>
                <input
                  type="checkbox"
                  checked={includeCloud}
                  onChange={(e) => setIncludeCloud(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-0"
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              4. Delivery Urgency
            </label>
            <div className="space-y-2">
              <button
                onClick={() => setUrgency('standard')}
                className={`w-full p-2.5 rounded-xl text-left text-xs font-semibold border transition-all ${
                  urgency === 'standard'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}
              >
                Standard Development Sprint
              </button>
              <button
                onClick={() => setUrgency('expedited')}
                className={`w-full p-2.5 rounded-xl text-left text-xs font-semibold border transition-all ${
                  urgency === 'expedited'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}
              >
                Accelerated Delivery Phase
              </button>
            </div>
          </div>
        </div>

        {/* Result Output Card */}
        <div className="p-6 bg-slate-50 border border-blue-200 rounded-2xl space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Generated Architecture & Scope Blueprint
            </span>
            <span className="text-xs font-mono bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded border border-blue-200 font-bold">
              Pearl Trinity SLA
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm">
              <Clock className="w-5 h-5 text-blue-600 shrink-0" />
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Estimated Timeline</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">{est.timeline}</div>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm">
              <Users className="w-5 h-5 text-teal-600 shrink-0" />
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Allocated Engineers</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">{est.team.length} Specialists</div>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Delivery Framework</div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">{est.deliveryModel}</div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Assigned Team Roles:
            </span>
            <div className="flex flex-wrap gap-2">
              {est.team.map((member, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-white border border-slate-200 text-xs font-semibold text-blue-700 rounded-md shadow-sm">
                  {member}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={handleApplyEstimate}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 transition-all duration-200 hover:scale-105"
            >
              <span>Attach Estimate to Consultation Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
