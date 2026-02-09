"use client";

import { Target, Eye } from "lucide-react";
import Reveal from "./Reveal";

export default function MissionVision() {
  return (
    // Updated to Brand Background: Off-white (#F7F9FB)
    <section className="bg-[#F7F9FB] py-12 md:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          
          {/* Mission Card: Focused on Green/Teal */}
          <Reveal>
            <div className="h-full bg-white p-8 sm:p-10 lg:p-14 rounded-[2rem] sm:rounded-[3rem] shadow-sm border border-slate-100 hover:border-syncvision-teal/40 transition-all duration-500 group">
              {/* Icon Container: Transitioning to SyncVision Green */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#F7F9FB] text-[var(--syncvision-teal)] rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-[var(--syncvision-green)] group-hover:text-white transition-all shadow-sm">
                <Target className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              
              <h3 className="text-xs font-extrabold text-[var(--syncvision-green)] mb-4 sm:mb-6 tracking-[0.2em] uppercase">
                Our Mission
              </h3>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                To deliver consistent, compliant, and efficient site management services that enable successful clinical trials.
              </p>
            </div>
          </Reveal>

          {/* Vision Card: Focused on Gold */}
          <Reveal>
            <div className="h-full bg-white p-8 sm:p-10 lg:p-14 rounded-[2rem] sm:rounded-[3rem] shadow-sm border border-slate-100 hover:border-[var(--syncvision-gold)]/40 transition-all duration-500 group">
              {/* Icon Container: Transitioning to SyncVision Gold */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#F7F9FB] text-[var(--syncvision-teal)] rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-[var(--syncvision-green)] group-hover:text-white transition-all shadow-sm">
                <Eye className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              
              <h3 className="text-xs font-extrabold text-[var(--syncvision-green)] mb-4 sm:mb-6 tracking-[0.2em] uppercase">
                Our Vision
              </h3>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                To become a trusted SMO partner for CROs and Sponsors through quality, transparency, and operational excellence.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}