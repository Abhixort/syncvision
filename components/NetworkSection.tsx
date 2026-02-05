import Image from "next/image";
import Reveal from "./Reveal";
import { MapPin, TrendingUp, DollarSign } from "lucide-react";

export default function NetworkSection() {
  return (
    // Updated to Brand Background: Off-white (#F7F9FB)
    <section className="bg-[#F7F9FB] py-12 text-[#0F1C2E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT: Map/Diagram Placeholder - Standardized Square Card */}
<Reveal className="relative mt-12 lg:mt-0">
  <div className="relative mx-auto w-full max-w-[500px]">
    {/* Decorative Aura - Consistent with your pulse style */}
    <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#2FB7DA]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
    
    {/* Container: Aspect-square and border matching the others */}
    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-square bg-white flex items-center justify-center p-6 sm:p-8">
      <div className="relative w-full h-full">
        <Image
          src="/assets/team-distribution.png"
          alt="Site Team Distribution India"
          fill
          /* object-contain is vital here so your diagram text remains readable */
          className="object-contain" 
          priority={false}
        />
      </div>
    </div>

    {/* Brand Accent - Bottom Right Blur */}
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2FB7DA]/10 rounded-full blur-3xl -z-10" />

    {/* Consistency Badge - Matches the 100% Compliance badge style */}
    <div className="absolute bottom-6 -right-6 bg-[#0F1C2E] px-5 py-3 rounded-xl shadow-xl hidden md:block border border-white/10 z-20">
      <p className="text-[#2FB7DA] font-black text-xl tracking-tighter">Pan-India</p>
      <p className="text-white text-[10px] uppercase font-bold tracking-widest">Site Presence</p>
    </div>
  </div>
</Reveal>

        {/* RIGHT: Text content */}
        <Reveal>
          {/* Heading using Navy (#0F1C2E) and Cyan Blue (#2FB7DA) */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-[#0F1C2E]">
            Strategic <span className="text-[#2FB7DA]">Network</span> & <br /> Geographic Reach
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Our CRC services are strategically distributed across major clinical research hubs in <span className="text-[#0F1C2E] font-semibold italic text-base">Maharashtra, Delhi, Bihar and across India</span>. We collaborate with qualified Principal Investigators and hospitals to ensure timely study start-up.
          </p>

          <div className="grid gap-6">
            {/* Cards using Navy/Cyan Palette */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#2FB7DA]/30 transition-all duration-300 group">
               <div className="flex items-center gap-4 mb-2">
                  <TrendingUp className="text-[#2FB7DA] w-5 h-5 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-[#0F1C2E]">Rapid Expansion</h4>
               </div>
               <p className="text-sm text-slate-500 leading-relaxed">As business needs evolve, our service distribution continues to expand rapidly across multiple regions.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#2FB7DA]/30 transition-all duration-300 group">
               <div className="flex items-center gap-4 mb-2">
                  <DollarSign className="text-[#2FB7DA] w-5 h-5 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-[#0F1C2E]">Cost & Time Efficiency</h4>
               </div>
               <p className="text-sm text-slate-500 leading-relaxed">Wide geographic allocation reduces travel logistics and operating costs, directly improving project timelines.</p>
            </div>
          </div>

          {/* Action Footer using Cyan Blue (#2FB7DA) */}
          <div className="mt-10 flex items-center gap-4 text-[#2FB7DA] font-bold tracking-tight">
            <div className="p-2 bg-[#2FB7DA]/10 rounded-full">
                <MapPin className="animate-pulse w-5 h-5" />
            </div>
            <span className="uppercase text-xs tracking-widest">Growing presence in Maharashtra, Delhi, Bihar & Pan-India</span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}