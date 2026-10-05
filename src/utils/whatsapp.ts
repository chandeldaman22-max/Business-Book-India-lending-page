export const AGENCY_WHATSAPP_NUMBER = '8602674640';
export const AGENCY_WHATSAPP_RAW = '918602674640';
export const AGENCY_DISPLAY_PHONE = '+91 86026 74640';
export const AGENCY_NAME = 'Business Boost India';

/**
 * Creates a direct WhatsApp link
 */
export function createWhatsAppUrl(message: string): string {
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${AGENCY_WHATSAPP_RAW}?text=${encodedText}`;
}

/**
 * Generates WhatsApp message for service inquiry
 */
export function buildServiceInquiryMessage(serviceName: string): string {
  return `*Namaste Business India Team,*

I am interested in your *${serviceName}* services.
Please share details and how we can discuss my project requirements.`;
}

/**
 * Generates WhatsApp message for clean contact form submission
 */
export function buildQuickContactMessage(data: {
  name: string;
  businessName?: string;
  phone: string;
  service: string;
  message?: string;
}): string {
  return `*🚀 NEW INQUIRY - ${AGENCY_NAME}*
━━━━━━━━━━━━━━━━━━━━━
*Name:* ${data.name}
${data.businessName ? `*Business / Brand:* ${data.businessName}\n` : ''}*Phone:* ${data.phone}
*Interested In:* ${data.service}
${data.message ? `*Project Details:* ${data.message}\n` : ''}━━━━━━━━━━━━━━━━━━━━━
_Sent via Business India Advertising & Development Agency._
Please connect with me on WhatsApp.`;
}
