export type ServiceCategory = 
  | 'meta_ads'
  | 'google_ads'
  | 'landing_pages'
  | 'whatsapp_automation'
  | 'local_seo'
  | 'creative_production'
  | 'full_stack_growth';

export interface ServiceRequest {
  id: string;
  businessName: string;
  contactName: string;
  phone: string;
  email?: string;
  city: string;
  industry: string;
  services: string[];
  currentMonthlyRevenue: string;
  monthlyAdBudget: string;
  primaryGoal: string;
  targetTimeline: string;
  notes?: string;
  createdAt: string;
  status: 'received' | 'audit_in_progress' | 'strategy_ready' | 'campaign_live' | 'completed';
  assignedManager: string;
}

export interface CampaignMetric {
  date: string;
  impressions: number;
  clicks: number;
  leads: number;
  spendInr: number;
  revenueInr: number;
  roas: number;
}

export interface CreativeItem {
  id: string;
  title: string;
  type: 'video_reel' | 'single_image' | 'carousel' | 'copy';
  status: 'pending_approval' | 'approved' | 'revision_requested';
  previewUrl?: string;
  headline: string;
  aspectRatio: string;
  feedbackNotes?: string;
  lastUpdated: string;
}

export interface InvoiceItem {
  id: string;
  invoiceNumber: string;
  description: string;
  amountInr: number;
  gstInr: number;
  totalInr: number;
  date: string;
  dueDate: string;
  status: 'paid' | 'pending';
}

export interface ClientLeadRecord {
  id: string;
  customerName: string;
  phone: string;
  city: string;
  inquirySource: 'Meta Ads' | 'Google Search' | 'WhatsApp Funnel';
  date: string;
  dealValueInr: number;
  status: 'New' | 'Contacted' | 'Demo Booked' | 'Converted' | 'Lost';
}

export interface ClientAccount {
  id: string;
  trackingCode: string;
  clientName: string;
  brandName: string;
  phone: string;
  activePlan: string;
  accountManager: {
    name: string;
    role: string;
    phone: string;
    whatsappNumber: string;
  };
  liveProjectStage: number; // 1 to 5
  metrics: {
    totalSpendInr: number;
    totalRevenueInr: number;
    totalLeads: number;
    avgCplInr: number;
    avgRoas: number;
    ctrPercent: number;
  };
  recentLeads: ClientLeadRecord[];
  creatives: CreativeItem[];
  invoices: InvoiceItem[];
  requests: ServiceRequest[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthlyInr: number;
  recommendedBudgetInr: string;
  popular?: boolean;
  features: string[];
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  location: string;
  industry: string;
  duration: string;
  metric1: { label: string; value: string };
  metric2: { label: string; value: string };
  metric3: { label: string; value: string };
  quote: string;
  clientPerson: string;
  clientRole: string;
  strategyHighlights: string[];
}
