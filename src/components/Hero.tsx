import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2, Globe, Smartphone, TrendingUp, Sparkles } from 'lucide-react';
import { AGENCY_DISPLAY_PHONE, AGENCY_WHATSAPP_RAW } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden border-b border-slate-200/80 bg-white">
      {/* Subtle gentle background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-emerald-50/70 via-slate-50/40 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-7">
        {/* Trust Tag */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3.5 py-1.5 rounded-full border border-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>Business Boost India · Special Free Trial Offer</span>
        </div>

        {/* User Requested Main Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.18] [text-wrap:balance]">
            Business Boost India Advertising Agency आपके बिज़नेस के लिए{' '}
            <span className="text-emerald-700 underline decoration-emerald-400 decoration-wavy underline-offset-8">
              1 Ad FREE
            </span>{' '}
            में लगा कर देगी.
          </h1>
          <p className="text-lg sm:text-2xl font-bold text-slate-700 [text-wrap:balance]">
            अगर हमारा काम पसंद आता है, तो आगे बात करेंगे!
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Zero Risk · No Advance Fees · Pehle result dekhein, phir faisla karein. We create custom Meta & Google ads, fast websites, and mobile apps to scale your business.
        </p>

        {/* WhatsApp Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={`https://wa.me/${AGENCY_WHATSAPP_RAW}?text=${encodeURIComponent(
              'Namaste Business Boost India! Mujhe apne business ke liye 1 Free Trial Ad lagwani hai. Kripya details batayein.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/25 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Claim 1 Free Ad on WhatsApp ({AGENCY_DISPLAY_PHONE})</span>
          </a>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-5 py-4 rounded-xl font-semibold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200/80 transition-colors"
          >
            <span>View Services</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </a>
        </div>

        {/* 4 Clean Pillars */}
        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span>Websites</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-tight">
              Fast, responsive business & e-commerce sites
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Mobile Apps</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-tight">
              Android & iOS apps built for scale
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>Performance Ads</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-tight">
              Meta, Instagram & Google Ads lead gen
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Bots</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-tight">
              Instant auto-reply & lead qualification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
