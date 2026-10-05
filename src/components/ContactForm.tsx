import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';
import {
  AGENCY_WHATSAPP_RAW,
  AGENCY_DISPLAY_PHONE,
  buildQuickContactMessage,
} from '../utils/whatsapp';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Website Development');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setError('Please provide a valid 10-digit WhatsApp number.');
      return;
    }

    const waText = buildQuickContactMessage({
      name: name.trim(),
      businessName: businessName.trim() || undefined,
      phone: phone.trim(),
      service,
      message: message.trim() || undefined,
    });

    const url = `https://wa.me/${AGENCY_WHATSAPP_RAW}?text=${encodeURIComponent(waText)}`;
    setIsSubmitted(true);
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Send a Direct WhatsApp Message to Business Boost India
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
            Fill in your project details below to initiate a direct conversation on WhatsApp with our team at{' '}
            <strong className="text-emerald-700 font-mono-num">{AGENCY_DISPLAY_PHONE}</strong>.
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Inquiry Form Prepared & Sent to WhatsApp!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                If WhatsApp didn't open automatically, tap the button below to message our strategist directly.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${AGENCY_WHATSAPP_RAW}?text=${encodeURIComponent(
                    buildQuickContactMessage({
                      name,
                      businessName,
                      phone,
                      service,
                      message,
                    })
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Open WhatsApp Chat ({AGENCY_DISPLAY_PHONE})</span>
                </a>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-slate-500 hover:text-slate-800 underline underline-offset-4 pt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 focus:outline-none text-slate-900 placeholder-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Business / Brand Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Kumar Traders"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 focus:outline-none text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    WhatsApp Number *
                  </label>
                  <div className="flex">
                    <span className="px-3.5 py-2.5 bg-slate-100 border border-r-0 border-slate-200 rounded-l-lg font-mono-num font-semibold text-slate-600">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="8602674640"
                      className="w-full px-3.5 py-2.5 rounded-r-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 focus:outline-none text-slate-900 font-mono-num placeholder-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Service You Are Looking For
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 focus:outline-none text-slate-900"
                  >
                    <option value="1 Free Trial Ad (Special Offer)">🔥 1 Free Trial Ad (Special Offer)</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Mobile App Development">Mobile App Development (Android/iOS)</option>
                    <option value="Meta & Instagram Ads">Meta & Instagram Performance Ads</option>
                    <option value="Google & Local Map Ads">Google & Local Map Ads</option>
                    <option value="High-Converting Landing Pages">High-Converting Landing Pages</option>
                    <option value="WhatsApp Business Automation">WhatsApp Business Automation & CRM</option>
                    <option value="Full-Stack Digital Package">Complete Web + App + Advertising Package</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Tell us about your project or goal (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Need an e-commerce website with payment gateway and Meta ads setup to get customer orders."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 focus:outline-none text-slate-900 placeholder-slate-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-98"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>Send Message to WhatsApp ({AGENCY_DISPLAY_PHONE})</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-1 text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Opens directly in WhatsApp chat with {AGENCY_DISPLAY_PHONE}</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
