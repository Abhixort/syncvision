"use client";

import { Briefcase, GraduationCap, CheckCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

export function JobRoles() {
  const roles = ["Site Coordinators", "CRCs", "Regulatory Support", "Quality Assurance"];

  return (
    <div className="space-y-12">
      <Reveal>
        {/* Header using SyncVision Green */}
        <h2 className="text-3xl font-extrabold text-[var(--syncvision-green)] mb-8 tracking-tight">
          Current Opportunities
        </h2>
        
        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {roles.map((role) => (
            <div 
              key={role} 
              className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-slate-100 group hover:border-[var(--syncvision-gold)]/50 hover:shadow-lg hover:shadow-[0_4px_20px_rgb(var(--syncvision-green)_/_0.05)] transition-all duration-300"
            >
              {/* Icon Container: Flips to Green/Gold on hover */}
              <div className="p-2 bg-[#F7F9FB] rounded-lg group-hover:bg-[var(--syncvision-gold)] transition-colors">
                <Briefcase className="w-5 h-5 text-[var(--syncvision-teal)] group-hover:text-[var(--syncvision-green)] transition-colors" />
              </div>
              <span className="font-bold text-[var(--syncvision-green)]/80 group-hover:text-[var(--syncvision-green)] transition-colors">
                {role}
              </span>
            </div>
          ))}
        </div>
        
        {/* Requirements Section */}
        <div className="mt-12 space-y-8 p-6 md:p-8 bg-[#F7F9FB] rounded-[2rem] border border-slate-100">
          {/* Education Requirement */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border ABCDE">
              <GraduationCap className="w-6 h-6 text-[var(--syncvision-teal)]" />
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              We look for candidates with degrees in <span className="font-bold text-[var(--syncvision-green)]">Life Sciences, Pharmacy, or Nursing</span> who are passionate about data integrity and patient safety.
            </p>
          </div>

          {/* Guidelines Requirement - Swapped Lime for Gold */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border ABCDE">
              <CheckCircle className="w-6 h-6 text-[var(--syncvision-gren)]" />
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Experience with <span className="font-bold text-[var(--syncvision-green)]">ICH-GCP guidelines</span> and local regulatory requirements is highly preferred to maintain our standard of operational excellence.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}