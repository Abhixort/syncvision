"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { MapPin, TrendingUp, DollarSign } from "lucide-react";

export default function NetworkSection() {
  return (
    // Fixed Padding: pt-32/md:pt-40 to ensure headers clear the fixed Navbar on Nest Hub/Tablets
    <section className="bg-[#F7F9FB] pt-32 pb-20 md:pt-40 lg:py-24 relative overflow-hidden">
      
      {/* Decorative Brand Shape - Aligned to Left */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-syncvision-teal/5 -skew-x-12 transform origin-top -translate-x-20 -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT: Map/Diagram - Image on LEFT to maintain Zigzag flow */}
        <Reveal className="order-1 relative w-full">
          <div className="relative mx-auto w-full max-w-[500px]">
            {/* Standardized Teal Aura */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-syncvision-teal/10 rounded-full blur-2xl animate-pulse" />
            
            {/* Main Container: Standardized border and shadow */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-square bg-white flex items-center justify-center p-6 sm:p-10 group">
              <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                <Image
                  src="/assets/team-distribution.png"
                  alt="SyncVision Regional Presence"
                  fill
                  className="object-contain" 
                />
              </div>
              
              {/* Presence Badge */}
              <div className="absolute top-6 left-6 z-20 bg-[var(--syncvision-green)]/90 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20 shadow-lg">
                <p className="text-[var(--syncvision-gold)] font-black text-[10px] uppercase tracking-widest">Pan-India</p>
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="absolute -bottom-6 -right-4 lg:-right-6 bg-white px-6 py-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block z-20">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--syncvision-gold)] animate-ping" />
                <p className="text-[var(--syncvision-green)] font-bold text-sm tracking-tight">Active Site Operations</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT: Text Content */}
        <Reveal className="order-2 max-w-3xl">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-[var(--syncvision-teal)] font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em]">
              <MapPin className="w-4 h-4 text-[var(--syncvision-gold)]" />
              Geographic Reach
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--syncvision-green)] leading-[1.15] tracking-tight">
              Strategic <span className="text-[var(--syncvision-green)]">Network</span> & <br /> 
              <span className="text-[var(--syncvision-green)] underline decoration-[var(--syncvision-gold)] decoration-4 underline-offset-8">Multi-City Presence</span>
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base md:text-lg font-light pt-4">
              Headquartered in <span className="text-[var(--syncvision-green)] font-semibold">Pune</span>, with operational strength in <span className="text-[var(--syncvision-green)] font-semibold">Thane (MMR) and Patna</span>. Our reach allows for faster site activation and better patient access across diverse therapeutic areas.
            </p>

            <div className="grid gap-4 mt-8">
              {/* Feature Card 1 */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                 <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-syncvision-teal/10 rounded-lg">
                        <TrendingUp className="text-[var(--syncvision-teal)] w-5 h-5 group-hover:text-[var(--syncvision-gold)] transition-colors" />
                    </div>
                    <h4 className="font-bold text-[var(--syncvision-green)] text-sm uppercase tracking-wide">Rapid Site Activation</h4>
                 </div>
                 <p className="text-xs md:text-sm text-slate-500 leading-relaxed pl-11">
                    Our strategic distribution across clinical hubs ensures timely study start-up and efficient regulatory coordination.
                 </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                 <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-syncvision-teal/10 rounded-lg">
                        <DollarSign className="text-[var(--syncvision-teal)] w-5 h-5 group-hover:text-[var(--syncvision-gold)] transition-colors" />
                    </div>
                    <h4 className="font-bold text-[var(--syncvision-green)] text-sm uppercase tracking-wide">Operational Efficiency</h4>
                 </div>
                 <p className="text-xs md:text-sm text-slate-500 leading-relaxed pl-11">
                    Geographic allocation reduces travel logistics and operating costs, directly improving overall project timelines.
                 </p>
              </div>
            </div>

            {/* Signature Border Note matching HomeHero */}
            <div className="mt-8 border-l-4 border-[var(--syncvision-gold)] pl-6 py-1">
               <p className="text-slate-500 text-xs md:text-sm italic">
                “Strategically positioned to support Sponsors, CROs, and Investigators across India.”
               </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}