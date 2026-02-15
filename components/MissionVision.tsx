"use client";

import { Target, Eye, Shield } from "lucide-react";
import Reveal from "./Reveal";

export default function MissionVision() {
  return (
    // Standardized padding to align with zigzag flow and clear Navbars on Hubs
    <section className="bg-[#F7F9FB] py-16 md:py-24 relative overflow-hidden">
      
      {/* Decorative accent for the section background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-syncvision-teal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Three Pillars Header - Integrated from your "Our Approach" text */}
        <Reveal className="mb-12 lg:mb-16">
          <div className="border-l-4 border-[var(--syncvision-gold)] pl-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--syncvision-green)] tracking-tight uppercase">
              Our Strategic Foundation
            </h2>
            <p className="text-[var(--syncvision-teal)] font-bold mt-1 text-sm sm:text-base">
              Integrity. Precision. Partnership.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card: Integrated from "Our Mission" text */}
          <Reveal>
            <div className="h-full bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-syncvision-teal/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-syncvision-teal/5 rounded-bl-full -z-10" />
              
              <div className="w-14 h-14 bg-[#F7F9FB] text-[var(--syncvision-teal)] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--syncvision-green)] group-hover:text-white transition-all shadow-sm">
                <Target className="w-7 h-7" />
              </div>
              
              <h3 className="text-xs font-black text-[var(--syncvision-green)] mb-6 tracking-[0.2em] uppercase">
                Our Mission
              </h3>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light italic">
                “To enhance clinical trial execution at the site level by providing structured, compliant, and patient-focused management solutions that accelerate study timelines while safeguarding data integrity.”
              </p>
            </div>
          </Reveal>

          {/* Vision Card: Integrated from "Our Vision" text */}
          <Reveal>
            <div className="h-full bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-[var(--syncvision-gold)]/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--syncvision-gold)]/5 rounded-bl-full -z-10" />
              
              <div className="w-14 h-14 bg-[#F7F9FB] text-[var(--syncvision-teal)] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--syncvision-green)] group-hover:text-white transition-all shadow-sm">
                <Eye className="w-7 h-7" />
              </div>
              
              <h3 className="text-xs font-black text-[var(--syncvision-green)] mb-6 tracking-[0.2em] uppercase">
                Our Vision
              </h3>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light italic">
                “To be a trusted and growth-driven Site Management Organization in India, recognized for reliability, regulatory strength, and uncompromising ethical standards.”
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}