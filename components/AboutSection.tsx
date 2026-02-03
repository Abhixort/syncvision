import Image from "next/image";
import Reveal from "./Reveal";
import { CheckCircle2 } from "lucide-react"; // Or use a custom SVG if not using Lucide

export default function AboutSection() {
  return (
    <section className="bg-slate-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Text Content */}
        <div className="order-2 lg:order-1">
          <Reveal>
            {/* <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-100 border border-cyan-200">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest">About the SMO</span>
            </div> */}
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Sync<span className="text-cyan-600">Vision</span> Research <br /> Solution LLP
            </h2>

            <p className="text-xl font-semibold text-slate-700 mb-6">
              Empowering Clinical Excellence through Reliable Site Management.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm md:text-lg mb-10">
              SyncVision Research Solution LLP is a professional Site Management
              Organization (SMO) delivering efficient, compliant, and
              quality-driven site operations for clinical trials. We partner with
              CROs and Sponsors to ensure <span className="text-cyan-700 font-medium">smooth study execution</span>, robust data
              quality, and strict adherence to regulatory and ethical standards.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
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
                    <div className="mt-1 bg-cyan-100 rounded-full p-1 group-hover:bg-cyan-500 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 group-hover:text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 p-4 border-l-4 border-cyan-500 bg-cyan-50/50 rounded-r-lg">
               <p className="font-bold text-slate-900">
                Ready to optimize your next trial? 
                <span className="block font-normal text-slate-600 text-sm">Partner with SyncVision Research Solution LLP today.</span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* RIGHT: Image with Decorative Elements */}
        <div className="order-1 lg:order-2 relative">
          <Reveal className="flex justify-center">
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/assets/about-hand.avif"
                  alt="Clinical Research Site Management"
                  width={550}
                  height={650}
                  className="object-cover transform hover:scale-105 transition duration-700"
                  priority={false}
                />
              </div>

              {/* Stats Badge */}
              <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl hidden md:block border border-slate-50">
                <p className="text-cyan-600 font-black text-3xl">100%</p>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-tighter">Compliance Focus</p>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}


export function ClinicalTrialsSection() {
    return (
      <section
        id="clinical-trials"
        className="py-28 bg-white scroll-mt-28"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Clinical Trials
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            In a clinical trial, participants receive specific interventions
            according to the research plan or protocol created by investigators...
          </p>
        </div>
      </section>
    );
  }
  
  export function ObservationalStudiesSection() {
    return (
      <section
        id="observational-studies"
        className="py-28 bg-white scroll-mt-28"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Observational Studies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In an observational study, investigators assess health outcomes in
            groups of participants...
          </p>
        </div>
      </section>
    );
  }
  
  export function WhoConductsSection() {
    return (
      <section
        id="who-conducts"
        className="py-28 bg-white scroll-mt-28"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Who Conducts Clinical Studies?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Every clinical study is led by a principal investigator, who is often
            a medical doctor...
          </p>
        </div>
      </section>
    );
  }

  export function ConsiderationsSection() {
    return (
      <section
        id="considerations"
        className="bg-gray-100 py-32 scroll-mt-28"
      >
        <div className="max-w-5xl mx-auto px-6">
  
          <h2 className="text-4xl font-bold text-gray-900 mb-10">
            Considerations for Participation
          </h2>
  
          <p className="text-gray-700 text-justify leading-relaxed text-base">
            Participating in a clinical study contributes to medical knowledge.
            The results of these studies can make a difference in the care of
            future patients by providing information about the benefits and
            risks of therapeutic, preventative, or diagnostic products or
            interventions. Clinical trials provide the basis for the development
            and marketing of new drugs, biological products, and medical devices.
            <br /><br />
            Sometimes, the safety and the effectiveness of the experimental
            approach or use may not be fully known at the time of the trial.
            Some trials may provide participants with the prospect of receiving
            direct medical benefits, while others do not.
            <br /><br />
            Most trials involve some risk of harm or injury to the participant,
            although it may not be greater than the risks related to routine
            medical care or disease progression. (For trials approved by IRBs,
            the IRB has decided that the risks of participation have been
            minimized and are reasonable in relation to anticipated benefits.)
            <br /><br />
            Many trials require participants to undergo additional procedures,
            tests, and assessments based on the study protocol. These requirements
            will be described in the informed consent document. A potential
            participant should also discuss these issues with members of the
            research team and with his or her usual health care provider.
          </p>
  
        </div>
      </section>
    );
  }
  
  