"use client";

import { ClipboardCheck, Users, Rocket, ShieldAlert, Database, Archive } from "lucide-react";
import Reveal from "./Reveal";

const coreServices = [
  { 
    title: "Site Management", 
    desc: "Ethics committee communications, regulatory document submission, and rigorous oversight.", 
    icon: <ClipboardCheck className="w-8 h-8 text-[#2FB7DA]" /> 
  },
  { 
    title: "CRC Out-sourcing", 
    desc: "Highly qualified team of Coordinators with medical, nursing, and life science backgrounds.", 
    icon: <Users className="w-8 h-8 text-[#2FB7DA]" /> 
  },
  { 
    title: "Study Start Up", 
    desc: "Schedule management, site feasibility assessments, and laboratory coordination.", 
    icon: <Rocket className="w-8 h-8 text-[#2FB7DA]" /> 
  },
  { 
    title: "Safety & PV Support", 
    desc: "AE/SAE reporting coordination and safety compliance tracking throughout the study.", 
    icon: <ShieldAlert className="w-8 h-8 text-[#2FB7DA]" /> 
  },
  { 
    title: "Data & Quality", 
    desc: "CRF/eCRF support, query resolution, and audit-readiness maintenance.", 
    icon: <Database className="w-8 h-8 text-[#2FB7DA]" /> 
  },
  { 
    title: "Study Close-Out", 
    desc: "Final reconciliation, document archival, and site close-out coordination.", 
    icon: <Archive className="w-8 h-8 text-[#2FB7DA]" /> 
  },
];

export function CoreServicesGrid() {
  return (
    // Background updated to Brand Off-white (#F7F9FB)
    <section className="py-12 md:py-12 bg-[#F7F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {coreServices.map((s, i) => (
            <Reveal key={i}>
              <div className="p-8 h-full bg-white border border-slate-100 rounded-[2rem] hover:border-[#2FB7DA]/30 hover:shadow-2xl hover:shadow-[#0F1C2E]/5 transition-all duration-500 group">
                {/* Icon with hover scale effect */}
                <div className="mb-6 w-14 h-14 bg-[#F7F9FB] rounded-2xl flex items-center justify-center group-hover:bg-[#0F1C2E] transition-colors duration-300">
                  <div className="group-hover:scale-110 group-hover:text-white transition-all">
                    {s.icon}
                  </div>
                </div>
                
                {/* Text alignment matches the 'Organized' brand personality */}
                <h3 className="text-xl font-extrabold text-[#0F1C2E] mb-3 tracking-tight">
                  {s.title}
                </h3>
                
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}