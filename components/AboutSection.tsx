import Image from "next/image";
import Reveal from "./Reveal";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    // Updated to Off-white background (#F7F9FB)
    <section className="bg-[#F7F9FB] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Text Content */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F1C2E] leading-tight mb-6 uppercase tracking-tight">
              Sync<span className="text-[#2FB7DA]">Vision</span> Research <br /> Solution LLP
            </h2>

            <p className="text-xl font-semibold text-slate-700 mb-6">
              Empowering Clinical Excellence through Reliable Site Management.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm md:text-lg mb-10">
              SyncVision Research Solution LLP is a professional Site Management
              Organization (SMO) delivering efficient, compliant, and
              quality-driven site operations for clinical trials. We partner with
              CROs and Sponsors to ensure <span className="text-[#2FB7DA] font-semibold">smooth study execution</span>, robust data
              quality, and strict adherence to regulatory and ethical standards.
            </p>

            {/* List Container with Navy border and Cyan accents */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#0F1C2E]/5">
              <h3 className="text-2xl font-bold text-[#0F1C2E] mb-6 flex items-center gap-2">
                Why SyncVision?
              </h3>

              <ul className="grid sm:grid-cols-1 gap-4">
                {[
                  "Corporate, process-driven SMO model",
                  "Strong focus on compliance and quality",
                  "Experienced clinical research professionals",
                  "Sponsor and CRO-centric execution approach",
                  "Commitment to timelines, data integrity, and safety"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    {/* Cyan Blue (#2FB7DA) icons */}
                    <div className="mt-1 bg-[#2FB7DA]/10 rounded-full p-1 group-hover:bg-[#2FB7DA] transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#2FB7DA] group-hover:text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cyan Blue Left-Border Alert */}
            <div className="mt-10 p-4 border-l-4 border-[#2FB7DA] bg-[#2FB7DA]/5 rounded-r-lg">
               <p className="font-bold text-[#0F1C2E]">
                Ready to optimize your next trial? 
                <span className="block font-normal text-slate-600 text-sm">Partner with SyncVision Research Solution LLP today.</span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* RIGHT: Image with Brand Overlays */}
        <div className="order-1 lg:order-2 relative">
          <Reveal className="flex justify-center">
            <div className="relative">
              {/* Decorative shapes using Cyan Blue (#2FB7DA) */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#2FB7DA]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/assets/clinical-research-excellence.webp"
                  alt="Clinical Research Site Management"
                  width={550}
                  height={650}
                  className="object-cover"
                  priority={false}
                />
              </div>

              {/* Stats Badge using Navy (#0F1C2E) and Cyan Blue (#2FB7DA) */}
              <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl hidden md:block border border-[#F7F9FB]">
                <p className="text-[#2FB7DA] font-black text-3xl tracking-tighter">100%</p>
                <p className="text-[#0F1C2E] text-xs uppercase font-bold tracking-widest">Compliance Focus</p>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

// Content Sections updated for a clean white-to-navy-text look

export function ClinicalTrialsSection() {
    return (
      <section id="clinical-trials" className="py-28 bg-white scroll-mt-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0F1C2E] text-center mb-10 uppercase tracking-tight">
            Clinical Trials
          </h2>
          <p className="text-slate-600 leading-relaxed text-justify">
            In a clinical trial, participants receive specific interventions
            according to the research plan or protocol created by investigators...
          </p>
        </div>
      </section>
    );
}
  
export function ObservationalStudiesSection() {
    return (
      <section id="observational-studies" className="py-28 bg-white scroll-mt-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0F1C2E] text-center mb-10 uppercase tracking-tight">
            Observational Studies
          </h2>
          <p className="text-slate-600 leading-relaxed">
            In an observational study, investigators assess health outcomes in
            groups of participants...
          </p>
        </div>
      </section>
    );
}
  
export function WhoConductsSection() {
    return (
      <section id="who-conducts" className="py-28 bg-white scroll-mt-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0F1C2E] text-center mb-10 uppercase tracking-tight">
            Who Conducts Clinical Studies?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Every clinical study is led by a principal investigator, who is often
            a medical doctor...
          </p>
        </div>
      </section>
    );
}

export function ConsiderationsSection() {
    return (
      // Using Off-white (#F7F9FB) for contrast in the bottom section
      <section id="considerations" className="bg-[#F7F9FB] py-32 scroll-mt-28 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0F1C2E] mb-10 tracking-tight uppercase">
            Considerations for Participation
          </h2>
          <p className="text-slate-700 text-justify leading-relaxed text-base">
            Participating in a clinical study contributes to medical knowledge.
            The results of these studies can make a difference in the care of
            future patients...
          </p>
        </div>
      </section>
    );
}