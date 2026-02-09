"use client";

import Reveal from "@/components/Reveal";

export function CareersHero() {
  return (
    // Updated background to SyncVision Green (#0A4D44)
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-[var(--syncvision-green)]">
      
      {/* Background Decoration using Teal (#125E54) for a professional glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-syncvision-teal/20 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-12 lg:pt-0">
        <div className="max-w-3xl">
          <Reveal>
            {/* Standardized Brand Tag using Gold */}
            <span className=" font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              Careers
            </span>

            {/* Title: Gold highlight for the brand name */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.2] text-white tracking-tight mt-6">
              Join the <span className="">SyncVision</span> Team
            </h1>

            {/* Tagline: Signature left border pl-4 using Gold */}
            <h2 className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-medium text-[#F7F9FB] leading-snug border-l-4 border-[var(--syncvision-gold)] pl-4">
              Shape the Future of <br className="hidden sm:block" />
              <span className="text-white italic">Clinical Innovation</span>
            </h2>

            {/* Description: text-sm for mobile, font-light */}
            <p className="mt-6 text-sm sm:text-base md:text-lg text-[#F7F9FB]/80 leading-relaxed max-w-2xl font-light">
              We welcome motivated clinical research professionals to join our 
              newly established and rapidly growing SMO network. Build your career 
              where transparency and compliance meet excellence.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Standardized bottom decorative fade: Transitioning into SyncVision Green */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--syncvision-green)] to-transparent" />
    </section>
  );
}