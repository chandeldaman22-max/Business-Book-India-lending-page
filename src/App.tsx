/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { ContactForm } from './components/ContactForm';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Light Clean Navbar */}
      <Navbar />

      {/* Main Agency Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Advertising & Web/App Dev Services (No Prices Shown) */}
        <Services />

        {/* Why Choose Business India */}
        <WhyUs />

        {/* Direct WhatsApp Message Form */}
        <ContactForm />
      </main>

      {/* Floating Direct WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Minimal Clean Footer */}
      <Footer />
    </div>
  );
}
