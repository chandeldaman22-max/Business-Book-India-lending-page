import React from 'react';
import { AGENCY_DISPLAY_PHONE, AGENCY_WHATSAPP_RAW } from '../utils/whatsapp';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-500 text-xs py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm font-display">
            B
          </div>
          <div>
            <span className="font-display font-bold text-slate-900 text-sm">
              Business Boost India
            </span>
            <div className="text-[11px] text-slate-500">
              Advertising & Web/App Agency
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
          <a href="#services" className="hover:text-slate-900 transition-colors">
            Advertising Services
          </a>
          <a href="#web-app" className="hover:text-slate-900 transition-colors">
            Website & App Dev
          </a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">
            Contact
          </a>
          <a
            href={`https://wa.me/${AGENCY_WHATSAPP_RAW}?text=${encodeURIComponent(
              'Namaste Business India Team!'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1.5 font-mono-num"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-700" />
            <span>{AGENCY_DISPLAY_PHONE}</span>
          </a>
        </div>

        <div className="text-[11px] text-slate-400">
          © {new Date().getFullYear()} Business India. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
