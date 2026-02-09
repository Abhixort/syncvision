import React from 'react';
import Reveal from "./Reveal";

export default function PrivacyPage() {
  return (
    // Updated background to Off-white (#F7F9FB)
    <main className="relative min-h-[90vh] flex flex-col bg-[#F7F9FB]">
      
      {/* HEADER SECTION: Synchronized with SyncVision Green (#0A4D44) */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden bg-[var(--syncvision-green)]">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--syncvision-green)] via-syncvision-green/95 to-syncvision-teal/70" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Reveal>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.2] text-white tracking-tight">
              Privacy<span className="text-[var(--syncvision-gold)]">Policy</span>
            </h1>
            <div className="mt-4 h-1 w-20 bg-[var(--syncvision-gold)]" />
          </Reveal>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar - Legal Labeling */}
          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--syncvision-teal)]">
              Compliance & Legal
            </h2>
            <p className="mt-2 text-[var(--syncvision-gold)]/60 text-sm">
              Last updated: February 2026
            </p>
          </div>

          {/* Main Legal Content */}
          <div className="lg:col-span-8 space-y-10 text-[var(--syncvision-gold)]/80 leading-relaxed">
            <Reveal>
              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-bold text-[var(--syncvision-gold)] mb-3 uppercase tracking-tight">1. Data Collection</h3>
                  <p>
                    SyncVision Research Solution LLP collects information necessary to facilitate clinical 
                    trial site management. This includes professional contact details and regulatory 
                    documentation required for compliance.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-[var(--syncvision-gold)] mb-3 uppercase tracking-tight">2. Purpose of Processing</h3>
                  <p>
                    We process your data exclusively for operational efficiency in site management, 
                    ensuring that all clinical research activities meet global quality standards.
                  </p>
                </section>

                {/* Highlighted Section using Gold Accent */}
                <section className="p-6 bg-[var(--syncvision-green)]/5 border-l-4 border-[var(--syncvision-gold)] rounded-r-lg">
                  <h3 className="text-xl font-bold text-[var(--syncvision-gold)] mb-2 uppercase tracking-tight">3. Data Security</h3>
                  <p>
                    We implement strict technical and organizational measures to protect sensitive 
                    research data against unauthorized access or disclosure.
                  </p>
                </section>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer Transition */}
      <div className="mt-auto h-24 bg-gradient-to-t from-slate-200/50 to-transparent" />
    </main>
  );
}