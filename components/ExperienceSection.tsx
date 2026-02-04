import Image from "next/image";
import Reveal from "./Reveal";
import { GraduationCap, Briefcase, Workflow } from "lucide-react";

export default function ExperienceSection() {
  return (
    // Background updated to Off-white (#F7F9FB) for a clean, scientific look
    <section className="bg-[#F7F9FB] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Text Content */}
        <Reveal>
          {/* Badge using Lime (#A3D65C) to signal Innovation & Progress */}
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#A3D65C]/10 border border-[#A3D65C]/20">
            <span className="text-[#0F1C2E] text-xs font-bold uppercase tracking-[0.2em]">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F1C2E] leading-tight mb-10">
            Experienced Team, <br />
            <span className="text-[#2FB7DA]">Efficient Processes</span>
          </h2>

          <div className="space-y-10">
            {/* Feature 1: Proprietary SOPs */}
            <div className="flex gap-5 group">
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-[#0F1C2E]/5 shadow-sm group-hover:border-[#2FB7DA]/30 transition-colors">
                <Workflow className="text-[#2FB7DA] w-7 h-7" />
              </div>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                <span className="text-[#0F1C2E] font-bold">SyncVision Research Solution LLP</span> operates with its own proprietary SITE SOPs. Our leadership team brings years of global pharmaceutical experience in overseeing complex clinical operations and site management.
              </p>
            </div>

            {/* Feature 2: Qualified CRC Team */}
            <div className="flex gap-5 group">
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-[#0F1C2E]/5 shadow-sm group-hover:border-[#2FB7DA]/30 transition-colors">
                <GraduationCap className="text-[#2FB7DA] w-7 h-7" />
              </div>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Our CRC team consists of highly qualified professionals holding degrees in <span className="text-[#0F1C2E] font-semibold">Nursing, Medicine, and Life Sciences</span>. Most members bring direct hospital workflow experience, ensuring seamless integration with investigative sites.
              </p>
            </div>

            {/* Feature 3: Project Specific Plans */}
            <div className="flex gap-5 group">
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-[#0F1C2E]/5 shadow-sm group-hover:border-[#2FB7DA]/30 transition-colors">
                <Briefcase className="text-[#2FB7DA] w-7 h-7" />
              </div>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                We develop project-specific plans including <span className="text-[#0F1C2E] font-semibold">Risk Management and Quality Control</span>. This structured foundation allows us to deliver high-quality, inspection-ready services to our Sponsors and CROs.
              </p>
            </div>
          </div>
        </Reveal>

        {/* RIGHT: Image */}
        <Reveal className="relative">
           {/* Decorative aura using Cyan Blue (#2FB7DA) */}
           <div className="absolute -inset-10 bg-[#2FB7DA]/5 rounded-full blur-[100px] -z-10" />
           
           <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[10px] border-white">
              <Image
                src="/assets/experience.avif"
                alt="SyncVision Professional Team"
                width={550}
                height={650}
                className="object-cover transform hover:scale-105 transition-transform duration-700"
              />
           </div>

           {/* Innovation Tag floating on image */}
           <div className="absolute -bottom-6 -right-6 bg-[#0F1C2E] p-6 rounded-2xl shadow-xl border border-white/10 hidden md:block">
             <p className="text-[#A3D65C] font-bold text-sm tracking-widest uppercase mb-1">Methodology</p>
             <p className="text-white text-lg font-medium">Data-Driven Excellence</p>
           </div>
        </Reveal>

      </div>
    </section>
  );
}