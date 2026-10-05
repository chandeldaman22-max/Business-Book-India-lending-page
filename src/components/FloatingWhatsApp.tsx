import React from 'react';
import { MessageCircle } from 'lucide-react';
import { AGENCY_WHATSAPP_RAW, AGENCY_DISPLAY_PHONE } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://wa.me/${AGENCY_WHATSAPP_RAW}?text=${encodeURIComponent(
          'Namaste Business India! I would like to consult on advertising & website/app development.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Message"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-700/25 transition-all hover:scale-105 active:scale-95 group"
      >
        <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">WhatsApp Message</span>
      </a>
    </div>
  );
};
