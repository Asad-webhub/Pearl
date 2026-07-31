import React, { useState, useEffect } from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { Mail, MapPin, Building, ShieldCheck, CheckCircle2, Loader2, Send, Sparkles, Phone } from 'lucide-react';

interface ContactSectionProps {
  prefilledSolution?: string;
  prefilledDetails?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledSolution,
  prefilledDetails,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: prefilledSolution || 'Custom Software Development',
    message: prefilledDetails || '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    referenceId?: string;
    message?: string;
    error?: string;
  } | null>(null);

  useEffect(() => {
    if (prefilledSolution) {
      setFormData((prev) => ({ ...prev, serviceInterest: prefilledSolution }));
    }
  }, [prefilledSolution]);

  useEffect(() => {
    if (prefilledDetails) {
      setFormData((prev) => ({ ...prev, message: prefilledDetails }));
    }
  }, [prefilledDetails]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitResult(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitResult({
          success: true,
          referenceId: data.referenceId,
          message: data.message,
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          serviceInterest: 'Custom Software Development',
          message: '',
        });
      } else {
        setSubmitResult({
          success: false,
          error: data.error || 'Submission failed. Please try again.',
        });
      }
    } catch (err) {
      setSubmitResult({
        success: false,
        error: 'Network connection issue. Please email info@pearltrinity.com directly.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Direct Enterprise Inquiry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Contact <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">Pearl Trinity</span>
          </h2>
          <p className="text-base sm:text-lg text-blue-600 font-bold">
            Start Your Digital Transformation Journey Today
          </p>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our solutions architects to discuss your software development, AI automation, or cloud engineering requirements.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Official Company Info Card */}
          <div className="lg:col-span-5 space-y-6 p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                Official Registered Entity
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                {COMPANY_DETAILS.name}
              </h3>
              <p className="text-xs font-semibold text-slate-500">
                Technology Solutions & Software Engineering Company
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-2xl bg-white border border-slate-200 text-blue-600 shrink-0 shadow-sm">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Registration No.</div>
                  <div className="text-sm font-semibold text-slate-900 font-mono mt-0.5">
                    {COMPANY_DETAILS.registrationNo}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-2xl bg-white border border-slate-200 text-teal-600 shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Headquarters</div>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5">
                    Malaysia
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-2xl bg-white border border-slate-200 text-emerald-600 shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Email Contact</div>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="text-sm font-semibold text-blue-600 hover:underline mt-0.5 block"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <div className="text-xs font-bold text-slate-800 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Enterprise SLA Guarantee</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                All client project inquiries and NDAs are processed under strict intellectual property protection and enterprise data security protocols.
              </p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Send Us a Consultation Message
            </h3>

            {submitResult?.success ? (
              <div className="p-8 rounded-2xl bg-white border border-blue-300 text-center space-y-4 animate-in fade-in duration-300 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 border border-blue-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Inquiry Received Successfully!</h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                  {submitResult.message}
                </p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 font-mono text-xs text-blue-700 font-bold">
                  Ref ID: {submitResult.referenceId}
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitResult(null)}
                    className="text-xs font-bold text-slate-500 hover:text-blue-600 underline"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitResult?.error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-2xl font-medium">
                    {submitResult.error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Ahmad"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +60 12-345 6789"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Tech Solutions"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Primary Service Interest
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 shadow-sm"
                  >
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Web & Mobile Application Development">Web & Mobile Application Development</option>
                    <option value="AI & Intelligent Automation">AI & Intelligent Automation</option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="Blockchain & Emerging Technologies">Blockchain & Emerging Technologies</option>
                    <option value="UI/UX Design & Digital Experience">UI/UX Design & Digital Experience</option>
                    <option value="General Digital Transformation Inquiry">General Digital Transformation Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Project Message / Scope Description
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your objectives, technical requirements, or timeline..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 disabled:opacity-50 transition-all duration-200 hover:scale-[1.01]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Consultation Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Consultation Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

