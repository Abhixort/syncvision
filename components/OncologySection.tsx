import Image from "next/image";
import Reveal from "./Reveal";
import { ShieldCheck, Activity, ClipboardCheck } from "lucide-react";

export default function SiteManagementSection() {
  return (
    // Updated background to the brand's Off-white (#F7F9FB)
    <section className="bg-[#F7F9FB] py-24 relative overflow-hidden">
      
      {/* Decorative Brand Shape using Cyan Blue with low opacity */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2FB7DA]/5 skew-x-12 transform origin-top translate-x-20 -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Image Section with Frame */}
        <Reveal className="order-2 lg:order-1 relative">
          <div className="relative group">
            {/* Frame using Cyan Blue (#2FB7DA) */}
            <div className="absolute -inset-4 border-2 border-[#2FB7DA]/20 rounded-2xl group-hover:border-[#2FB7DA]/40 transition-colors duration-500" />
            
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/assets/oncology.avif"
                alt="Clinical Site Management"
                width={550}
                height={550}
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              
              {/* Floating Tag using Navy (#0F1C2E) background and Cyan Blue icon */}
              <div className="absolute top-6 left-6 bg-[#0F1C2E]/90 backdrop-blur-md text-white px-4 py-2 rounded-lg flex items-center gap-2 border border-white/10">
                <Activity className="w-4 h-4 text-[#2FB7DA]" />
                <span className="text-xs font-bold uppercase tracking-wider">Site Operations</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT: Text Section */}
        <Reveal className="order-1 lg:order-2">
          <div className="space-y-6">
            {/* Badge using Cyan Blue (#2FB7DA) */}
            <div className="flex items-center gap-2 text-[#2FB7DA] font-bold text-sm uppercase tracking-widest">
              <ShieldCheck className="w-5 h-5" />
              Operational Excellence
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F1C2E] leading-[1.15]">
              Reliable & Compliant <br /> 
              {/* Underline using Cyan Blue (#2FB7DA) */}
              <span className="text-[#2FB7DA] underline decoration-[#2FB7DA]/30 decoration-4 underline-offset-8">Site Operations</span>
            </h2>

            <div className="space-y-6 mt-8">
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                SyncVision Research Solution LLP delivers <span className="text-[#0F1C2E] font-medium italic">structured, process-driven</span> site management services that support high-quality clinical trial execution. 
              </p>

              <div className="grid gap-6">
                <div className="flex gap-4 p-4 rounded-xl hover:bg-white transition-all shadow-transparent hover:shadow-sm">
                    {/* Icon Container using Cyan Blue palette */}
                    <div className="flex-shrink-0 w-12 h-12 bg-[#2FB7DA]/10 rounded-lg flex items-center justify-center">
                        <ClipboardCheck className="text-[#2FB7DA] w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                            Our experienced clinical research professionals ensure sites are fully prepared, 
                            compliant, and aligned with study protocols from initiation through close-out.
                        </p>
                    </div>
                </div>

                {/* Border using Lime (#A3D65C) for a progressive touch */}
                <p className="text-slate-700 leading-relaxed text-sm md:text-base pl-16 border-l-2 border-[#A3D65C] italic">
                    By working closely with Sponsors and CROs, we enable smooth study execution, 
                    maintain strong oversight of site activities, and uphold strict regulatory and ethical standards.
                </p>
              </div>

              {/* Data Highlights using Navy and Slate */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-slate-200">
                <div className="flex flex-col">
                    <span className="text-[#0F1C2E] font-bold">Data Integrity</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Guaranteed</span>
                </div>
                <div className="flex flex-col border-l border-slate-200 pl-6">
                    <span className="text-[#0F1C2E] font-bold">Patient Safety</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Primary Priority</span>
                </div>
                <div className="flex flex-col border-l border-slate-200 pl-6">
                    <span className="text-[#0F1C2E] font-bold">Timelines</span>
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