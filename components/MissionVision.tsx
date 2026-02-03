import { Target, Eye } from "lucide-react";
import Reveal from "./Reveal";

export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <Reveal>
            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-slate-200 hover:border-cyan-400 transition-all duration-500 group">
              <div className="w-16 h-16 bg-slate-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To deliver consistent, compliant, and efficient site management services that enable successful clinical trials.
              </p>
            </div>
          </Reveal>

          {/* Vision Card */}
          <Reveal>
            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-slate-200 hover:border-cyan-400 transition-all duration-500 group">
              <div className="w-16 h-16 bg-slate-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To become a trusted SMO partner for CROs and Sponsors through quality, transparency, and operational excellence.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}