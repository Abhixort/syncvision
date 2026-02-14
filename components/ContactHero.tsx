"use client";

import dynamic from "next/dynamic";
import Reveal from "./Reveal";

const ContactForm = dynamic(() => import("./ContactForm"), {
  ssr: false,
  loading: () => (
    <div className="space-y-4 w-full animate-pulse">
      <div className="h-12 bg-white/10 rounded-xl"></div>
      <div className="h-12 bg-white/10 rounded-xl"></div>
      <div className="h-32 bg-white/10 rounded-xl"></div>
      <div className="h-12 bg-[var(--syncvision-gold)]/20 rounded-xl w-full"></div>
    </div>
  ),
});

export default function ContactHero() {
  return (
    <section className="relative min-h-screen lg:min-h-[85vh] flex items-center bg-[var(--syncvision-green)] text-white pt-32 pb-16 md:pt-36 lg:pt-0 lg:pb-0 overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#125E54]/20 rounded-full blur-[80px] md:blur-[120px] -z-0 translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Column: order-1 ensures text stays on TOP for mobile */}
        <div className="text-left max-w-3xl order-1 lg:order-1">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-white tracking-tight">
              Let's execute <br className="hidden sm:block" />
              <span className="">Better Trials.</span>
            </h1>

            <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-medium text-[#F7F9FB] leading-snug border-l-4 border-[var(--syncvision-gold)] pl-4">
                Partner with SyncVision 
            </h2>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-[#F7F9FB]/80 leading-relaxed max-w-2xl font-light">
              We provide reliable, ICH-GCP compliant site management services 
              tailored to support your clinical study needs across India.
            </p>
            
            <div className="mt-10 flex flex-col gap-4">
               <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold">
                 Official Correspondence
               </p>
               <a 
                 href="mailto:aishwarya.singh@syncvisionresearch.com" 
                 className="text-base sm:text-lg md:text-2xl font-light hover:text-[var(--syncvision-gold)] transition-colors break-all lg:break-normal"
               >
                  aishwarya.singh@syncvisionresearch.com
               </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column: order-2 ensures form stays BELOW text on mobile */}
        <div className="order-2 lg:order-2 w-full max-w-xl lg:max-w-none">
          <Reveal>
            <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl shadow-black/20">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--syncvision-green)] to-transparent" />
    </section>
  );
}