import Reveal from "./Reveal";
import Image from "next/image";

export default function AboutSyncVision() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <Reveal>
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-cyan-50 border border-cyan-100 rounded-full">
                <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest">Our Story</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Foundations of <br />
                <span className="text-cyan-600">Expertise & Trust</span>
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed">
                SyncVision Research Solution LLP is a newly established Site Management Organization built on strong foundations of clinical research expertise and regulatory understanding.
              </p>

              <p className="text-slate-600 leading-relaxed">
                While we are a young organization, our operations are guided by experienced professionals with hands-on exposure to global clinical trials. We are committed to supporting Sponsors and CROs with dependable site management services that align with <span className="text-slate-900 font-semibold">ICH-GCP</span>, national regulations, and global quality expectations.
              </p>
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden border-[12px] border-slate-50 shadow-xl">
              <Image 
                src="/assets/about-clinical.avif" 
                alt="Clinical Research Excellence" 
                width={600} 
                height={500}
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-100/50 rounded-full blur-3xl -z-10" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}