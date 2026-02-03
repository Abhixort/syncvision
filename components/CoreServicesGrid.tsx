import { ClipboardCheck, Users, Rocket, ShieldAlert, Database, Archive } from "lucide-react";
import Reveal from "./Reveal";

const coreServices = [
  { 
    title: "Site Management", 
    desc: "Ethics committee communications, regulatory document submission, and rigorous oversight.", 
    icon: <ClipboardCheck className="w-8 h-8 text-cyan-500" /> 
  },
  { 
    title: "CRC Out-sourcing", 
    desc: "Highly qualified team of Coordinators with medical, nursing, and life science backgrounds.", 
    icon: <Users className="w-8 h-8 text-cyan-500" /> 
  },
  { 
    title: "Study Start Up", 
    desc: "Schedule management, site feasibility assessments, and laboratory coordination.", 
    icon: <Rocket className="w-8 h-8 text-cyan-500" /> 
  },
  { 
    title: "Safety & PV Support", 
    desc: "AE/SAE reporting coordination and safety compliance tracking throughout the study.", 
    icon: <ShieldAlert className="w-8 h-8 text-cyan-500" /> 
  },
  { 
    title: "Data & Quality", 
    desc: "CRF/eCRF support, query resolution, and audit-readiness maintenance.", 
    icon: <Database className="w-8 h-8 text-cyan-500" /> 
  },
  { 
    title: "Study Close-Out", 
    desc: "Final reconciliation, document archival, and site close-out coordination.", 
    icon: <Archive className="w-8 h-8 text-cyan-500" /> 
  },
];

export function CoreServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreServices.map((s, i) => (
          <Reveal key={i}>
            <div className="p-8 h-full bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}