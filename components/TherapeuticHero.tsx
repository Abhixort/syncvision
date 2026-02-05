"use client";

import Reveal from "./Reveal";

export function TherapeuticHero() {
  return (
    // Standardized min-height to match HomeHero (90vh mobile / 85vh desktop)
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-[#0F1C2E]">
      
      {/* Synchronized Background Decoration (ContactHero Reference) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2FB7DA]/10 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
      
      {/* Content Container: Left-aligned for mobile to match Home/About consistency */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-12 lg:pt-0">
        <div className="max-w-3xl">
          <Reveal>
            {/* Standardized Brand Tag */}
            <span className="text-[#2FB7DA] font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              Clinical Reach
            </span>

            {/* Synchronized Title Size: text-3xl for mobile to match HomeHero */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.2] text-white tracking-tight mt-6">
              Therapeutic <span className="text-[#2FB7DA]">Expertise</span>
            </h1>

            {/* Synchronized Tagline with border-l-4 pl-4 accent */}
            <h2 className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-medium text-[#F7F9FB] leading-snug border-l-4 border-[#2FB7DA] pl-4">
              Deep Protocol Understanding <br className="hidden sm:block" />
              <span className="text-white italic">Diverse Medical Specialties</span>
            </h2>

            {/* Synchronized Description: text-sm for mobile, font-light */}
            <p className="mt-6 text-sm sm:text-base md:text-lg text-[#F7F9FB]/80 leading-relaxed max-w-2xl font-light">
              SyncVision collaborates with seasoned Principal Investigators across India, 
              ensuring reliable patient recruitment and high-quality data through 
              focused operational excellence.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Standardized bottom decorative fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F1C2E] to-transparent" />
    </section>
  );
}