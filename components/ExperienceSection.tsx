import Image from "next/image";
import Reveal from "./Reveal";
import { GraduationCap, Briefcase, Workflow } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Text Content */}
        <Reveal>
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-100 border border-cyan-200">
            <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
            Experienced Team, <br />
            <span className="text-cyan-600">Efficient Processes</span>
          </h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                <Workflow className="text-cyan-600 w-6 h-6" />
              </div>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                <span className="text-slate-900 font-bold">SyncVision Research Solution LLP</span> operates with its own proprietary SITE SOPs. Our leadership team brings years of global pharmaceutical experience in overseeing complex clinical operations and site management.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                <GraduationCap className="text-cyan-600 w-6 h-6" />
              </div>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Our CRC team consists of highly qualified professionals holding degrees in <span className="text-slate-900 font-medium">Nursing, Medicine, and Life Sciences</span>. Most members bring direct hospital workflow experience, ensuring seamless integration with investigative sites.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                <Briefcase className="text-cyan-600 w-6 h-6" />
              </div>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                We develop project-specific plans including <span className="text-slate-900 font-medium">Risk Management and Quality Control</span>. This structured foundation allows us to deliver high-quality, inspection-ready services to our Sponsors and CROs.
              </p>
            </div>
          </div>
        </Reveal>

        {/* RIGHT: Image */}
        <Reveal className="relative">
           <div className="absolute -inset-4 bg-cyan-500/5 rounded-full blur-3xl" />
           <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/experience.avif"
                alt="SyncVision Professional Team"
                width={550}
                height={650}
                className="object-cover"
              />
           </div>
        </Reveal>

      </div>
    </section>
  );
}