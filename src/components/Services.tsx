import React from 'react';
import {
  Globe,
  Smartphone,
  TrendingUp,
  Search,
  Zap,
  MessageCircle,
  CheckCircle2,
  Layers,
  ShoppingBag,
  ArrowRight,
} from 'lucide-react';
import { AGENCY_WHATSAPP_RAW, buildServiceInquiryMessage } from '../utils/whatsapp';

interface ServiceItem {
  id: string;
  category: 'dev' | 'ad';
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  // 1. Website Development
  {
    id: 'web-dev',
    category: 'dev',
    icon: Globe,
    title: 'Website Development',
    tagline: 'Custom, High-Speed & SEO-Optimized Websites',
    description:
      'We build modern, lightning-fast business websites and e-commerce stores tailored to Indian businesses. Fully responsive on mobile with integrated WhatsApp lead capture.',
    deliverables: [
      'Custom Corporate & Business Websites',
      'E-commerce Stores (Shopify, WooCommerce, Custom)',
      'Sub-second 4G/5G mobile load speeds',
      'Integrated WhatsApp contact triggers & analytics',
    ],
  },
  // 2. Mobile App Development
  {
    id: 'app-dev',
    category: 'dev',
    icon: Smartphone,
    title: 'Mobile App Development',
    tagline: 'Native & Cross-Platform Android & iOS Apps',
    description:
      'From customer-facing ordering apps to internal team management portals. Clean, smooth user experience designed to work reliably across all Android & iOS devices.',
    deliverables: [
      'Android & iOS Mobile Applications',
      'Intuitive UI/UX and smooth performance',
      'Cloud backend, authentication & database setup',
      'Play Store & App Store deployment guidance',
    ],
  },
  // 3. Meta & Instagram Performance Ads
  {
    id: 'meta-ads',
    category: 'ad',
    icon: TrendingUp,
    title: 'Meta & Instagram Ads',
    tagline: 'Targeted Lead Generation & D2C Sales Scaling',
    description:
      'Laser-targeted audience campaigns on Facebook and Instagram. We create scroll-stopping video hooks and ad copies in Hindi and English that bring genuine buyers.',
    deliverables: [
      'High-Intent Lead Generation Campaigns',
      'UGC Video Ad Scripting & Creative Direction',
      'Audience research & Tier 2/3 city demographic targeting',
      'Weekly performance monitoring & ROAS optimization',
    ],
  },
  // 4. Google Search & Local Maps Ads
  {
    id: 'google-ads',
    category: 'ad',
    icon: Search,
    title: 'Google & Local Map Ads',
    tagline: 'Capture Customers at Peak Purchase Intent',
    description:
      'Dominate high-commercial intent Google searches and local Google Maps 3-Pack. Ensure your business is the #1 choice when nearby customers search for your services.',
    deliverables: [
      'Google Search High-Intent Keywords Ads',
      'Google My Business & Map Local Ranking',
      'Negative keyword filtering to eliminate junk clicks',
      'Click-to-Call & Local Directions extensions',
    ],
  },
  // 5. High-Converting Landing Pages
  {
    id: 'landing-pages',
    category: 'ad',
    icon: Layers,
    title: 'High-Converting Landing Pages',
    tagline: 'Engineered For Indian Buyer Psychology',
    description:
      'Single-page conversion funnels built to transform casual ad traffic into hot phone calls, WhatsApp messages, and booked orders.',
    deliverables: [
      'Conversion-Rate Optimized (CRO) Page Layouts',
      'Direct 1-tap WhatsApp chat & call integration',
      'Mobile-first responsive architecture',
      'Trust markers, video showcases & clear call-to-actions',
    ],
  },
  // 6. WhatsApp Business Automation
  {
    id: 'whatsapp-automation',
    category: 'ad',
    icon: MessageCircle,
    title: 'WhatsApp Automation & Chatbots',
    tagline: 'Instant 15-Second Lead Engagement & CRM',
    description:
      'Never miss an inbound lead again. Instant automated greetings on WhatsApp, qualification chatbots, abandoned cart reminders, and seamless sales routing.',
    deliverables: [
      'WhatsApp Business API integration',
      'Instant automated greeting within 15 seconds',
      'Smart customer query qualification',
      'Automatic lead notification to your sales team',
    ],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            What We Do
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Advertising & Technology Services For Growing Businesses
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We handle everything from your digital infrastructure to your customer acquisition pipeline. Discuss your project directly with our team.
          </p>
        </div>

        {/* Services Grid (No Prices Shown) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((srv) => {
            const Icon = srv.icon;
            const waUrl = `https://wa.me/${AGENCY_WHATSAPP_RAW}?text=${encodeURIComponent(
              buildServiceInquiryMessage(srv.title)
            )}`;

            return (
              <div
                key={srv.id}
                id={srv.category === 'dev' ? 'web-app' : undefined}
                className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-emerald-700" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                      {srv.category === 'dev' ? 'Tech & Development' : 'Performance Marketing'}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-display">
                      {srv.title}
                    </h3>
                    <div className="text-xs text-emerald-700 font-medium mt-0.5">
                      {srv.tagline}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                      Includes:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {srv.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct WhatsApp Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
