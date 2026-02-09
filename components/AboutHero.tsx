"use client";

import Reveal from "./Reveal";

export default function AboutHero() {
  return (
    // Updated background to SyncVision Green
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-[var(--syncvision-green)]">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/about-hero.jpg')",
        }}
      />

      {/* Overlays: Using Green and Teal for depth */}
      <div className="absolute inset-0 bg-[var(--syncvision-background-teal)]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--syncvision-background-teal)] via-[rgb(var(--syncvision-teal-rgb)_/_0.8)] to-transparent lg:via-[rgb(var(--syncvision-teal-rgb)_/_0.6)]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-12 lg:pt-0">
        <div className="max-w-3xl">
          <Reveal>
            {/* Title: SyncVision Gold for the brand highlight */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.2] text-white tracking-tight">
              About Sync<span className="">Vision</span>
            </h1>

            {/* Tagline: Signature left border using Gold for high visibility */}
            <h2 className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-medium text-[#F7F9FB] leading-snug border-l-4 border-[var(--syncvision-gold)] pl-4">
              Specialized Site Management <br className="hidden sm:block" />
              <span className="text-white italic">Operational Excellence</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base md:text-lg text-[#F7F9FB]/80 leading-relaxed max-w-2xl font-light">
              A specialized Site Management Organization dedicated to elevating 
              the standards of clinical research through transparency, 
              compliance, and reliability across India.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Standardized bottom decorative fade: Fading to SyncVision Green */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--syncvision-green)] to-transparent" />
    </section>
  );
}