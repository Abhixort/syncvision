import Reveal from "./Reveal";
import { Target, Eye, Award } from "lucide-react";

export default function SyncVisionBrandSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <Reveal>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
              Foundations of <span className="text-cyan-600">Clinical Expertise</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              SyncVision Research Solution LLP is a newly established Site Management Organization built on strong foundations of clinical research expertise and regulatory understanding.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 text-justify">
              While we are a young organization, our operations are guided by experienced professionals with hands-on exposure to global clinical trials. We are committed to supporting Sponsors and CROs with dependable site management services that align with <span className="font-bold text-slate-900">ICH-GCP</span>, national regulations, and global quality expectations.
            </p>
          </Reveal>
          
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/clinical-team.avif" 
                  alt="SyncVision Professionals" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
          </Reveal>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="h-full p-10 bg-slate-50 border border-slate-100 rounded-3xl hover:border-cyan-500 transition-colors group">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                <Target />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To deliver consistent, compliant, and efficient site management services that enable successful clinical trials.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="h-full p-10 bg-slate-50 border border-slate-100 rounded-3xl hover:border-cyan-500 transition-colors group">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                <Eye />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become a trusted SMO partner for CROs and Sponsors through quality, transparency, and operational excellence.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}