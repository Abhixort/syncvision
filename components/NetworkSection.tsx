import Image from "next/image";
import Reveal from "./Reveal";
import { MapPin, TrendingUp, DollarSign } from "lucide-react";

export default function NetworkSection() {
  return (
    // Changed to a very light slate background and dark text
    <section className="bg-slate-50 py-24 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT: Map/Diagram Placeholder */}
        <Reveal className="relative">
          {/* Changed container to white with a soft shadow */}
          <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100">
            <Image
              src="/assets/team-distribution.avif"
              alt="Site Team Distribution India"
              width={520}
              height={420}
              className="object-contain rounded-2xl"
            />
          </div>
          {/* Softened the glow for a light background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-200/40 blur-[100px] -z-10" />
        </Reveal>

        {/* RIGHT: Text content */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-slate-900">
            Strategic <span className="text-cyan-600">Network</span> & <br /> Geographic Reach
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Our CRC services are strategically distributed across major clinical research hubs in <span className="text-slate-900 font-semibold">Maharashtra and across India</span>. We collaborate with qualified Principal Investigators and hospitals to ensure timely study start-up.
          </p>

          <div className="grid gap-6">
            {/* Cards updated with light background and subtle borders */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all duration-300">
               <div className="flex items-center gap-4 mb-2">
                  <TrendingUp className="text-cyan-600 w-5 h-5" />
                  <h4 className="font-bold text-slate-900">Rapid Expansion</h4>
               </div>
               <p className="text-sm text-slate-500">As business needs evolve, our service distribution continues to expand rapidly across multiple regions.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all duration-300">
               <div className="flex items-center gap-4 mb-2">
                  <DollarSign className="text-cyan-600 w-5 h-5" />
                  <h4 className="font-bold text-slate-900">Cost & Time Efficiency</h4>
               </div>
               <p className="text-sm text-slate-500">Wide geographic allocation reduces travel logistics and operating costs, directly improving project timelines.</p>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4 text-cyan-600 font-bold">
            <MapPin className="animate-bounce" />
            <span>Growing presence in Maharashtra & Pan-India</span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}