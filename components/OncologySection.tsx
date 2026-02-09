"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { ShieldCheck, Activity, ClipboardCheck } from "lucide-react";

export default function SiteManagementSection() {
  return (
    // Updated background to the brand's Off-white (#F7F9FB)
    <section className="bg-[#F7F9FB] py-20 relative overflow-hidden">
      
      {/* Decorative Brand Shape using SyncVision Teal with low opacity */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-syncvision-teal/5 skew-x-12 transform origin-top translate-x-20 -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Image Section with Frame */}
        <Reveal className="order-2 lg:order-1 relative mt-12 lg:mt-0">
          <div className="relative mx-auto w-full max-w-[500px]">
            {/* Consistent Frame: Matched pulse style decorative shape in Teal */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-syncvision-teal/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
            
            {/* Main Container: Applied aspect-square and standardized border-4 */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-square bg-slate-50">
              <Image
                src="/assets/oncology.avif"
                alt="Clinical Site Management"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              
              {/* Brand Badge - SyncVision Green and Gold sync */}
              <div className="absolute top-6 left-6 z-20 bg-[var(--syncvision-green)]/90 backdrop-blur-md text-white px-4 py-2 rounded-lg flex items-center gap-2 border border-white/10 shadow-lg">
                <Activity className="w-4 h-4 text-[var(--syncvision-green)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.15em]">Site Operations</span>
              </div>
            </div>

            {/* Decorative Frame - Standardized Teal border */}
            <div className="absolute -inset-4 border-2 border-syncvision-teal/10 rounded-[2.5rem] -z-10 group-hover:border-syncvision-teal/30 transition-colors duration-500" />
            
            {/* Subtle bottom-left aura */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-syncvision-teal/5 rounded-full blur-3xl -z-20" />
          </div>
        </Reveal>

        {/* RIGHT: Text Section */}
        <Reveal className="order-1 lg:order-2">
          <div className="space-y-6">
            {/* Badge using SyncVision Teal */}
            <div className="flex items-center gap-2 text-[var(--syncvision-teal)] font-bold text-sm uppercase tracking-widest">
              <ShieldCheck className="w-5 h-5" />
              Operational Excellence
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--syncvision-green)] leading-[1.15]">
              Reliable & Compliant <br /> 
              {/* Underline using SyncVision Gold */}
              <span className="text-[var(--syncvision-green)] underline decoration-[var(--syncvision-gold)] decoration-4 underline-offset-8">Site Operations</span>
            </h2>

            <div className="space-y-6 mt-8">
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                SyncVision Research Solution LLP delivers <span className="text-[var(--syncvision-green)] font-medium italic">structured, process-driven</span> site management services that support high-quality clinical trial execution. 
              </p>

              <div className="grid gap-6">
                <div className="flex gap-4 p-4 rounded-xl hover:bg-white transition-all shadow-transparent hover:shadow-sm">
                    {/* Icon Container using SyncVision Teal palette */}
                    <div className="flex-shrink-0 w-12 h-12 bg-syncvision-teal/10 rounded-lg flex items-center justify-center">
                        <ClipboardCheck className="text-[var(--syncvision-teal)] w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                            Our experienced clinical research professionals ensure sites are fully prepared, 
                            compliant, and aligned with study protocols from initiation through close-out.
                        </p>
                    </div>
                </div>

                {/* Border using Gold for a progressive touch */}
                <p className="text-slate-700 leading-relaxed text-sm md:text-base pl-16 border-l-2 border-[var(--syncvision-gold)] italic">
                    By working closely with Sponsors and CROs, we enable smooth study execution, 
                    maintain strong oversight of site activities, and uphold strict regulatory and ethical standards.
                </p>
              </div>

              {/* Data Highlights using Green and Slate */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-slate-200">
                <div className="flex flex-col">
                    <span className="text-[var(--syncvision-green)] font-bold">Data Integrity</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Guaranteed</span>
                </div>
                <div className="flex flex-col border-l border-slate-200 pl-6">
                    <span className="text-[var(--syncvision-green)] font-bold">Patient Safety</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Primary Priority</span>
                </div>
                <div className="flex flex-col border-l border-slate-200 pl-6">
                    <span className="text-[var(--syncvision-green)] font-bold">Timelines</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Strict Adherence</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}