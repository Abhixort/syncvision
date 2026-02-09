"use client";

import { ClipboardCheck, Users, Rocket, ShieldAlert, Database, Archive } from "lucide-react";
import Reveal from "./Reveal";

const coreServices = [
  { 
    title: "Site Management", 
    desc: "Ethics committee communications, regulatory document submission, and rigorous oversight.", 
    icon: <ClipboardCheck className="w-8 h-8 text-[var(--syncvision-teal)]" /> 
  },
  { 
    title: "CRC Out-sourcing", 
    desc: "Highly qualified team of Coordinators with medical, nursing, and life science backgrounds.", 
    icon: <Users className="w-8 h-8 text-[var(--syncvision-teal)]" /> 
  },
  { 
    title: "Study Start Up", 
    desc: "Schedule management, site feasibility assessments, and laboratory coordination.", 
    icon: <Rocket className="w-8 h-8 text-[var(--syncvision-teal)]" /> 
  },
  { 
    title: "Safety & PV Support", 
    desc: "AE/SAE reporting coordination and safety compliance tracking throughout the study.", 
    icon: <ShieldAlert className="w-8 h-8 text-[var(--syncvision-teal)]" /> 
  },
  { 
    title: "Data & Quality", 
    desc: "CRF/eCRF support, query resolution, and audit-readiness maintenance.", 
    icon: <Database className="w-8 h-8 text-[var(--syncvision-teal)]" /> 
  },
  { 
    title: "Study Close-Out", 
    desc: "Final reconciliation, document archival, and site close-out coordination.", 
    icon: <Archive className="w-8 h-8 text-[var(--syncvision-teal)]" /> 
  },
];

export function CoreServicesGrid() {
  return (
    // Background updated to Brand Off-white (#F7F9FB)
    <section className="py-12 md:py-12 bg-[#F7F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {coreServices.map((s, i) => (
            <Reveal key={i}>
              <div className="p-8 h-full bg-white border border-slate-100 rounded-[2rem] hover:border-[var(--syncvision-gold)]/30 hover:shadow-2xl hover:shadow-[0_4px_20px_rgb(var(--syncvision-green)_/_0.05)] transition-all duration-500 group">
                
                {/* Icon Container: Transitioning to SyncVision Green on hover */}
                <div className="mb-6 w-14 h-14 bg-[#F7F9FB] rounded-2xl flex items-center justify-center group-hover:bg-[var(--syncvision-green)] transition-colors duration-300">
                  <div className="group-hover:scale-110 group-hover:[&_svg]:text-[var(--syncvision-gold)] transition-all">
                    {s.icon}
                  </div>
                </div>
                
                {/* Title using SyncVision Green */}
                <h3 className="text-xl font-extrabold text-[var(--syncvision-green)] mb-3 tracking-tight">
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