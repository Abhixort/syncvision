"use client";

import Reveal from "./Reveal";
import Image from "next/image";

export default function AboutSyncVision() {
  return (
    // Updated background to the brand's Off-white (#F7F9FB)
    <section className="bg-[#F7F9FB] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Text Content - Optimized for mobile readability */}
          <Reveal>
            <div className="space-y-6 text-center lg:text-left">
              {/* Badge using Cyan Blue (#2FB7DA) and Navy (#0F1C2E) */}
              <div className="inline-block px-4 py-1.5 bg-[#2FB7DA]/10 border border-[#2FB7DA]/20 rounded-full">
                <span className="text-[#0F1C2E] text-xs font-bold uppercase tracking-[0.2em]">Our Story</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1C2E] leading-tight">
                Foundations of <br />
                <span className="text-[#2FB7DA]">Expertise & Trust</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mx-auto lg:mx-0 max-w-2xl">
                SyncVision Research Solution LLP is a newly established Site Management Organization built on strong foundations of clinical research expertise and regulatory understanding.
              </p>

              <div className="text-slate-600 leading-relaxed space-y-4 text-sm sm:text-base">
                <p>
                  While we are a young organization, our operations are guided by experienced professionals with hands-on exposure to global clinical trials. 
                </p>
                <p>
                  We are committed to supporting Sponsors and CROs with dependable site management services that align with 
                  <span className="text-[#0F1C2E] font-bold italic"> ICH-GCP</span>, national regulations, and global quality expectations.
                </p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: Image - Balanced for mobile aspect ratios */}
          <Reveal className="relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-[500px] lg:max-w-none rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-[8px] sm:border-[12px] border-white shadow-2xl shadow-[#0F1C2E]/5">
              <Image 
                src="/assets/clinical-research-excellence.webp" 
                alt="Clinical Research Excellence" 
                width={600} 
                height={500}
                className="object-cover w-full h-auto"
                priority={false}
              />
            </div>
            
            {/* Brand Accent Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2FB7DA]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#A3D65C]/10 rounded-full blur-2xl -z-10" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}