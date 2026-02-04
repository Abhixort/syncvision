"use client";

import { Target, Eye } from "lucide-react";
import Reveal from "./Reveal";

export default function MissionVision() {
  return (
    // Updated to Brand Background: Off-white (#F7F9FB)
    <section className="bg-[#F7F9FB] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Added gap-6 for mobile and md:grid-cols-2 for tablet+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          
          {/* Mission Card */}
          <Reveal>
            <div className="h-full bg-white p-8 sm:p-10 lg:p-14 rounded-[2rem] sm:rounded-[3rem] shadow-sm border border-slate-100 hover:border-[#2FB7DA]/40 transition-all duration-500 group">
              {/* Icon Container - Using Navy and Cyan Blue transition */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#F7F9FB] text-[#2FB7DA] rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-[#0F1C2E] group-hover:text-white transition-all shadow-sm">
                <Target className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1C2E] mb-4 sm:mb-6 tracking-tight uppercase text-xs">
                Our Mission
              </h3>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                To deliver consistent, compliant, and efficient site management services that enable successful clinical trials.
              </p>
            </div>
          </Reveal>

          {/* Vision Card */}
          <Reveal>
            <div className="h-full bg-white p-8 sm:p-10 lg:p-14 rounded-[2rem] sm:rounded-[3rem] shadow-sm border border-slate-100 hover:border-[#A3D65C]/40 transition-all duration-500 group">
              {/* Icon Container - Using Navy and Lime transition */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#F7F9FB] text-[#2FB7DA] rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-[#A3D65C] group-hover:text-[#0F1C2E] transition-all shadow-sm">
                <Eye className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1C2E] mb-4 sm:mb-6 tracking-tight uppercase text-xs">
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