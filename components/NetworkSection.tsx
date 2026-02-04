import Image from "next/image";
import Reveal from "./Reveal";
import { MapPin, TrendingUp, DollarSign } from "lucide-react";

export default function NetworkSection() {
  return (
    // Updated to Brand Background: Off-white (#F7F9FB)
    <section className="bg-[#F7F9FB] py-24 text-[#0F1C2E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT: Map/Diagram Placeholder */}
        <Reveal className="relative">
          {/* Container using White and Navy-tinted shadow */}
          <div className="relative z-10 bg-white p-4 rounded-[2rem] shadow-2xl shadow-[#0F1C2E]/5 border border-[#0F1C2E]/5">
            <Image
              src="/assets/team-distribution.avif"
              alt="Site Team Distribution India"
              width={520}
              height={420}
              className="object-contain rounded-[1.5rem]"
            />
          </div>
          {/* Brand Aura using Cyan Blue (#2FB7DA) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#2FB7DA]/10 blur-[120px] -z-10" />
        </Reveal>

        {/* RIGHT: Text content */}
        <Reveal>
          {/* Heading using Navy (#0F1C2E) and Cyan Blue (#2FB7DA) */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-[#0F1C2E]">
            Strategic <span className="text-[#2FB7DA]">Network</span> & <br /> Geographic Reach
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Our CRC services are strategically distributed across major clinical research hubs in <span className="text-[#0F1C2E] font-semibold italic text-base">Maharashtra and across India</span>. We collaborate with qualified Principal Investigators and hospitals to ensure timely study start-up.
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
            <span className="uppercase text-xs tracking-widest">Growing presence in Maharashtra & Pan-India</span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}