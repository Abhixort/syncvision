"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { MapPin, TrendingUp, DollarSign } from "lucide-react";

export default function NetworkSection() {
  return (
    // Updated to Brand Background: Off-white (#F7F9FB)
    <section className="bg-[#F7F9FB] py-12 text-[var(--syncvision-green)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT: Map/Diagram Placeholder */}
        <Reveal className="relative mt-12 lg:mt-0">
          <div className="relative mx-auto w-full max-w-[500px]">
            {/* Decorative Aura using Teal (#125E54) */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-syncvision-teal/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
            
            {/* Container: Aspect-square White Card */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-square bg-white flex items-center justify-center p-6 sm:p-8">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/team-distribution.png"
                  alt="Site Team Distribution India"
                  fill
                  className="object-contain" 
                  priority={false}
                />
              </div>
            </div>

            {/* Brand Accent - Teal Blur */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-syncvision-teal/10 rounded-full blur-3xl -z-10" />

            {/* Consistency Badge - Updated to SyncVision Green and Gold */}
            <div className="absolute bottom-6 -right-6 bg-[var(--syncvision-green)] px-5 py-3 rounded-xl shadow-xl hidden md:block border border-white/10 z-20">
              <p className="text-[var(--syncvision-gold)] font-black uppercase tracking-tighter">Pan-India</p>
              <p className="text-white text-[10px] uppercase font-bold tracking-widest">Site Presence</p>
            </div>
          </div>
        </Reveal>

        {/* RIGHT: Text content */}
        <Reveal>
          {/* Heading using Green and Gold */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-[var(--syncvision-green)]">
            Strategic <span className="text-[var(--syncvision-green)]">Network</span> & <br /> Geographic Reach
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Our CRC services are strategically distributed across major clinical research hubs in <span className="text-[var(--syncvision-green)] font-semibold italic text-base">Maharashtra, Delhi, Bihar and across India</span>. We collaborate with qualified Principal Investigators and hospitals to ensure timely study start-up.
          </p>

          <div className="grid gap-6">
            {/* Cards using Green/Teal Accents */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-syncvision-teal/30 transition-all duration-300 group">
               <div className="flex items-center gap-4 mb-2">
                  <TrendingUp className="text-[var(--syncvision-teal)] w-5 h-5 group-hover:scale-110 group-hover:text-[var(--syncvision-gold)] transition-all" />
                  <h4 className="font-bold text-[var(--syncvision-green)]">Rapid Expansion</h4>
               </div>
               <p className="text-sm text-slate-500 leading-relaxed">As business needs evolve, our service distribution continues to expand rapidly across multiple regions.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-syncvision-teal/30 transition-all duration-300 group">
               <div className="flex items-center gap-4 mb-2">
                  <DollarSign className="text-[var(--syncvision-teal)] w-5 h-5 group-hover:scale-110 group-hover:text-[var(--syncvision-gold)] transition-all" />
                  <h4 className="font-bold text-[var(--syncvision-green)]">Cost & Time Efficiency</h4>
               </div>
               <p className="text-sm text-slate-500 leading-relaxed">Wide geographic allocation reduces travel logistics and operating costs, directly improving project timelines.</p>
            </div>
          </div>

          {/* Action Footer using Teal and Gold Pulse */}
          <div className="mt-10 flex items-center gap-4 text-[var(--syncvision-teal)] font-bold tracking-tight">
            <div className="p-2 bg-syncvision-teal/10 rounded-full">
                <MapPin className="animate-pulse w-5 h-5 text-[var(--syncvision-gold)]" />
            </div>
            <span className="uppercase text-xs tracking-widest text-[var(--syncvision-green)]/80">Growing presence in Maharashtra, Delhi, Bihar & Pan-India</span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}