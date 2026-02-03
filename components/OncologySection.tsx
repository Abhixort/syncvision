import Image from "next/image";
import Reveal from "./Reveal";
import { ShieldCheck, Activity, ClipboardCheck } from "lucide-react"; // Icons for added UX

export default function SiteManagementSection() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Subtle background decoration for a "clean room" feel */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 transform origin-top translate-x-20 -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Image Section with Frame */}
        <Reveal className="order-2 lg:order-1 relative">
          <div className="relative group">
            {/* The "Structured" Frame */}
            <div className="absolute -inset-4 border-2 border-cyan-100 rounded-2xl group-hover:border-cyan-200 transition-colors duration-500" />
            
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/assets/oncology.avif"
                alt="Clinical Site Management"
                width={550}
                height={550}
                className="object-cover transform group-hover:scale-105 transition duration-700"
              />
              
              {/* Floating Operational Tag */}
              <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-md text-white px-4 py-2 rounded-lg flex items-center gap-2 border border-white/20">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-wider">Site Operations</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT: Text Section */}
        <Reveal className="order-1 lg:order-2">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-cyan-600 font-bold text-sm uppercase tracking-widest">
              <ShieldCheck className="w-5 h-5" />
              Operational Excellence
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15]">
              Reliable & Compliant <br /> 
              <span className="text-cyan-600 underline decoration-cyan-200 decoration-4 underline-offset-8">Site Operations</span>
            </h2>

            <div className="space-y-6 mt-8">
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                SyncVision Research Solution LLP delivers <span className="text-slate-950 font-medium">structured, process-driven</span> site management services that support high-quality clinical trial execution. 
              </p>

              <div className="grid gap-6">
                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                        <ClipboardCheck className="text-cyan-600 w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                            Our experienced clinical research professionals ensure sites are fully prepared, 
                            compliant, and aligned with study protocols from initiation through close-out.
                        </p>
                    </div>
                </div>

                <p className="text-slate-700 leading-relaxed text-sm md:text-base pl-16 border-l-2 border-slate-100 italic">
                    By working closely with Sponsors and CROs, we enable smooth study execution, 
                    maintain strong oversight of site activities, and uphold strict regulatory and ethical standards.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-100">
                <div className="flex flex-col">
                    <span className="text-slate-900 font-bold">Data Integrity</span>
                    <span className="text-xs text-slate-400 uppercase">Guaranteed</span>
                </div>
                <div className="flex flex-col border-l border-slate-200 pl-6">
                    <span className="text-slate-900 font-bold">Patient Safety</span>
                    <span className="text-xs text-slate-400 uppercase">Primary Priority</span>
                </div>
                <div className="flex flex-col border-l border-slate-200 pl-6">
                    <span className="text-slate-900 font-bold">Timelines</span>
                    <span className="text-xs text-slate-400 uppercase">Strict Adherence</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}