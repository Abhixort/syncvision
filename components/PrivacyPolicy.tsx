import React from 'react';
import Reveal from "./Reveal";

export default function PrivacyPage() {
  return (
    // Consistently use min-h-[90vh] and the same background base as the Hero
    <main className="relative min-h-[90vh] flex flex-col bg-[#F7F9FB]">
      
      {/* HEADER SECTION: Consistent with Hero Height/Padding Logic */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden bg-[#0F1C2E]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E] via-[#0F1C2E]/90 to-[#0F1C2E]/70" />
        
        {/* Alignment: max-w-7xl and px-6 to match Hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Reveal>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.2] text-white tracking-tight">
              Privacy<span className="text-[#2FB7DA]">Policy</span>
            </h1>
            <div className="mt-4 h-1 w-20 bg-[#2FB7DA]" />
          </Reveal>
        </div>
      </section>

      {/* CONTENT SECTION: Aligned with the same max-w-7xl grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar - Optional Label */}
          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#2FB7DA]">
              Compliance & Legal
            </h2>
            <p className="mt-2 text-[#0F1C2E]/60 text-sm">
              Last updated: February 2026
            </p>
          </div>

          {/* Main Legal Content */}
          <div className="lg:col-span-8 space-y-10 text-[#0F1C2E]/80 leading-relaxed">
            <Reveal>
              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-bold text-[#0F1C2E] mb-3">1. Data Collection</h3>
                  <p>
                    SyncVision Research Solution LLP collects information necessary to facilitate clinical 
                    trial site management. This includes professional contact details and regulatory 
                    documentation required for compliance.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-[#0F1C2E] mb-3">2. Purpose of Processing</h3>
                  <p>
                    We process your data exclusively for operational efficiency in site management, 
                    ensuring that all clinical research activities meet global quality standards.
                  </p>
                </section>

                <section className="p-6 bg-[#0F1C2E]/5 border-l-4 border-[#2FB7DA] rounded-r-lg">
                  <h3 className="text-xl font-bold text-[#0F1C2E] mb-2">3. Data Security</h3>
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

      {/* Consistent Bottom Fade to match Hero */}
      <div className="mt-auto h-24 bg-gradient-to-t from-gray-200/50 to-transparent" />
    </main>
  );
}