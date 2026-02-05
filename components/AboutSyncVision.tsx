"use client";

import Reveal from "./Reveal";
import Image from "next/image";

export default function AboutSyncVision() {
  return (
    // Updated background to the brand's Off-white (#F7F9FB)
    <section className="bg-[#F7F9FB] py-12 md:py-12 overflow-hidden">
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

          {/* RIGHT: Image - Refitted to Perfect Square Aspect */}
<Reveal className="relative mt-12 lg:mt-0">
  <div className="relative mx-auto w-full max-w-[500px]">
    {/* Decorative Aura - matched to your pulse style */}
    <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#2FB7DA]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
    
    {/* Container: Applied aspect-square and standardized border-4 */}
    <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-square bg-gray-100">
      <Image 
        src="/assets/clinical-research.png" 
        alt="Clinical Research Excellence" 
        fill
        className="object-cover"
        priority={false}
      />
    </div>
    
    {/* Brand Accent Decorative Elements - preserved but aligned to standard */}
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2FB7DA]/10 rounded-full blur-3xl -z-10" />
    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#2FB7DA]/5 rounded-full blur-3xl -z-10" />
    
    {/* Optional: Innovation Badge to match the other square component */}
    <div className="absolute -bottom-6 -right-6 bg-[#0F1C2E] px-5 py-3 rounded-xl shadow-xl hidden md:flex flex-col border border-white/10">
      <p className="text-[#2FB7DA] font-black text-xl tracking-tighter">SyncVision</p>
      <p className="text-white text-[10px] uppercase font-bold tracking-widest">Site Management</p>
    </div>
  </div>
</Reveal>
        </div>
      </div>
    </section>
  );
}