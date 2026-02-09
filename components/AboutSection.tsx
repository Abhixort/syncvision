import Image from "next/image";
import Reveal from "./Reveal";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[#F7F9FB] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Text Content */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--syncvision-green)] leading-tight mb-6 uppercase tracking-tight">
              Sync<span className="text-[var(--syncvision-green)]">Vision</span> Research <br /> Solution LLP
            </h2>

            <p className="text-xl font-semibold text-[var(--syncvision-teal)] mb-6">
              Empowering Clinical Excellence through Reliable Site Management.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm md:text-lg mb-10">
              SyncVision Research Solution LLP is a professional Site Management
              Organization (SMO) delivering efficient, compliant, and
              quality-driven site operations for clinical trials. We partner with
              CROs and Sponsors to ensure <span className="text-[var(--syncvision-teal)] font-semibold border-b-2 border-[var(--syncvision-gold)]/30">smooth study execution</span>, robust data
              quality, and strict adherence to regulatory and ethical standards.
            </p>

            {/* List Container with Green border and Gold accents */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border ABCDE">
              <h3 className="text-2xl font-bold text-[var(--syncvision-green)] mb-6 flex items-center gap-2">
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
                    {/* Gold (#FFBF3F) icons */}
                    <div className="mt-1 bg-[var(--syncvision-gold)]/10 rounded-full p-1 group-hover:bg-[var(--syncvision-gold)] transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[var(--syncvision-green)] group-hover:text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gold Left-Border Alert */}
            <div className="mt-10 p-4 border-l-4 border-[var(--syncvision-gold)] bg-[var(--syncvision-gold)]/5 rounded-r-lg">
               <p className="font-bold text-[var(--syncvision-green)]">
                Ready to optimize your next trial? 
                <span className="block font-normal text-slate-600 text-sm">Partner with SyncVision Research Solution LLP today.</span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* RIGHT: Image Section - Standardized Square */}
        <div className="order-1 lg:order-2 relative">
          <Reveal className="flex justify-center">
            <div className="relative w-full max-w-[500px]">
              {/* Decorative shapes - Using Teal for the pulse effect */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-syncvision-teal/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-square bg-gray-100">
                <Image
                  src="/assets/clinical-research.png"
                  alt="Clinical Research Site Management"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>

              {/* Stats Badge - Gold focus */}
              <div className="absolute bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl hidden md:block border border-slate-50 z-10">
                <p className="text-[var(--syncvision-green)] font-black text-2xl tracking-tighter">100%</p>
                <p className="text-[var(--syncvision-green)] text-[10px] uppercase font-bold tracking-widest">Compliance Focus</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Sub-Sections refitted to SyncVision Palette
export function ClinicalTrialsSection() {
    return (
      <section id="clinical-trials" className="py-28 bg-white scroll-mt-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[var(--syncvision-gold)] text-center mb-10 uppercase tracking-tight">
            Clinical Trials
          </h2>
          <p className="text-slate-600 leading-relaxed text-justify">
            In a clinical trial, participants receive specific interventions...
          </p>
        </div>
      </section>
    );
}
  
export function ConsiderationsSection() {
    return (
      <section id="considerations" className="bg-[#F7F9FB] py-32 scroll-mt-28 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[var(--syncvision-gold)] mb-10 tracking-tight uppercase">
            Considerations for Participation
          </h2>
          <div className="w-20 h-1 bg-[var(--syncvision-gold)] mb-10" /> {/* Added brand accent line */}
          <p className="text-slate-700 text-justify leading-relaxed text-base">
            Participating in a clinical study contributes to medical knowledge...
          </p>
        </div>
      </section>
    );
}