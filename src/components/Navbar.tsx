import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { AGENCY_DISPLAY_PHONE, AGENCY_WHATSAPP_RAW } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-base font-display shadow-xs">
            B
          </div>
          <div>
            <span className="font-display text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
              Business Boost India
            </span>
            <div className="text-[11px] text-slate-500 font-medium">
              Advertising & Web/App Agency
            </div>
          </div>
        </a>

        {/* Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-slate-900 transition-colors">
            Advertising Services
          </a>
          <a href="#web-app" className="hover:text-slate-900 transition-colors">
            Website & App Dev
          </a>
          <a href="#why-us" className="hover:text-slate-900 transition-colors">
            Why Us
          </a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">
            Contact
          </a>
        </nav>

        {/* WhatsApp Action Button */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${AGENCY_WHATSAPP_RAW}?text=${encodeURIComponent(
              'Namaste Business India Team! I want to discuss advertising & development for my business.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-sm active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Message</span>
          </a>
        </div>
      </div>
    </header>
  );
};
