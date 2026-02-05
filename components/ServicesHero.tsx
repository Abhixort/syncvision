"use client";

import Reveal from "./Reveal";

export function ServicesHero() {
  return (
    // Standardized min-height (90vh mobile / 85vh desktop) to match HomeHero
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-[#0F1C2E]">
      
      {/* Synchronized Background Decoration (Consistent with Contact/Careers/Therapeutic) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2FB7DA]/10 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
      
      {/* Content Container: Left-aligned for mobile to match HomeHero signature */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-12 lg:pt-0">
        <div className="max-w-3xl">
          <Reveal>
            {/* Standardized Brand Tag using Lime (#A3D65C) for Innovation */}
            <span className="text-[#2FB7DA] font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              Our Capabilities
            </span>

            {/* Synchronized Title Size: text-3xl for mobile to match HomeHero */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.2] text-white tracking-tight mt-6">
              Comprehensive <br className="hidden sm:block" />
              <span className="text-[#2FB7DA]">SMO Solutions</span>
            </h1>

            {/* Synchronized Tagline with border-l-4 pl-4 accent */}
            <h2 className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-medium text-[#F7F9FB] leading-snug border-l-4 border-[#2FB7DA] pl-4">
              Accelerating Trial Timelines <br className="hidden sm:block" />
              <span className="text-white italic">100% Compliance Guaranteed</span>
            </h2>

            {/* Synchronized Description: text-sm for mobile, font-light */}
            <p className="mt-6 text-sm sm:text-base md:text-lg text-[#F7F9FB]/80 leading-relaxed max-w-2xl font-light">
              SyncVision Research Solution LLP provides end-to-end site management services 
              designed to streamline clinical operations and deliver high-quality 
              data through rigorous oversight.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Standardized bottom decorative fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F1C2E] to-transparent" />
    </section>
  );
}