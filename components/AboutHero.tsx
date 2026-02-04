"use client";

import Reveal from "./Reveal";

export default function AboutHero() {
  return (
    // Standardized min-height to match HomeHero
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-[#0F1C2E]">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/about-hero.jpg')",
        }}
      />

      {/* Synchronized Overlays with HomeHero */}
      <div className="absolute inset-0 bg-[#0F1C2E]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E] via-[#0F1C2E]/80 to-transparent lg:via-[#0F1C2E]/60" />

      {/* Content Container: Left-aligned for mobile to match HomeHero */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-20 lg:pt-0">
        <div className="max-w-3xl"> {/* Matches HomeHero container width */}
          <Reveal>
            {/* Synchronized Title Size: text-3xl for mobile */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.2] text-white tracking-tight">
              About Sync<span className="text-[#2FB7DA]">Vision</span>
            </h1>

            {/* Synchronized Tagline style with left border pl-4 */}
            <h2 className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-medium text-[#F7F9FB] leading-snug border-l-4 border-[#2FB7DA] pl-4">
              Specialized Site Management <br className="hidden sm:block" />
              <span className="text-white italic">Operational Excellence</span>
            </h2>

            {/* Synchronized Description: text-sm for mobile, font-light */}
            <p className="mt-6 text-sm sm:text-base md:text-lg text-[#F7F9FB]/80 leading-relaxed max-w-2xl font-light">
              A specialized Site Management Organization dedicated to elevating 
              the standards of clinical research through transparency, 
              compliance, and reliability across India.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Standardized bottom decorative fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F1C2E] to-transparent" />
    </section>
  );
}