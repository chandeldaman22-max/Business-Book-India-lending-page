import React from 'react';
import { Layers, MessageSquare, Zap, ShieldCheck } from 'lucide-react';
import { AGENCY_DISPLAY_PHONE, AGENCY_WHATSAPP_RAW } from '../utils/whatsapp';

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Why Business India
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Both Digital Technology & Advertising Under One Roof
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Most agencies only run ads or only build websites. We integrate both so your advertising traffic converts into actual paying clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-700 shadow-2xs">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              End-to-End Tech + Marketing
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No need to manage separate developers and ad agencies. From custom website/app coding to Meta & Google ads, we handle the entire pipeline seamlessly.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-700 shadow-2xs">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              WhatsApp-First Conversions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In India, deals close on WhatsApp. We engineer instant WhatsApp triggers, auto-replies, and lead qualification directly into your website and ad campaigns.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-700 shadow-2xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              Direct Strategist Access
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Talk directly with your project manager on WhatsApp ({AGENCY_DISPLAY_PHONE}). No ticketing queues, no endless email threads. Fast, transparent communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
