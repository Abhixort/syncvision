"use client";

import { Briefcase, GraduationCap, CheckCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

export function JobRoles() {
  const roles = ["Site Coordinators", "Clinical Research Coordinators", "Regulatory Support", "Quality Assurance"];

  return (
    <div className="space-y-8">
      <Reveal>
        <div className="border-l-4 border-[var(--syncvision-gold)] pl-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--syncvision-green)] tracking-tight">
            Current <span className="text-[var(--syncvision-teal)]">Opportunities</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {roles.map((role) => (
            <div 
              key={role} 
              className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 group hover:border-[var(--syncvision-gold)]/50 transition-all duration-300"
            >
              <div className="p-2 bg-[#F7F9FB] rounded-lg group-hover:bg-[var(--syncvision-green)] transition-colors">
                <Briefcase className="w-4 h-4 text-[var(--syncvision-teal)] group-hover:text-[var(--syncvision-gold)] transition-colors" />
              </div>
              <span className="font-bold text-[var(--syncvision-green)] text-sm">
                {role}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 space-y-6 p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-[#F7F9FB] rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-100">
              <GraduationCap className="w-5 h-5 text-[var(--syncvision-teal)]" />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Degrees in <span className="font-bold text-[var(--syncvision-green)]">Life Sciences, Pharmacy, or Nursing</span> required.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-[#F7F9FB] rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-100">
              <CheckCircle className="w-5 h-5 text-[var(--syncvision-teal)]" />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Foundational knowledge of <span className="font-bold text-[var(--syncvision-green)]">ICH-GCP guidelines</span> is essential.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}