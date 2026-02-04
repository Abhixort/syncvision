"use client";

import { Briefcase, GraduationCap, CheckCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

export function JobRoles() {
  const roles = ["Site Coordinators", "CRCs", "Regulatory Support", "Quality Assurance"];

  return (
    <div className="space-y-12">
      <Reveal>
        {/* Header using Navy (#0F1C2E) */}
        <h2 className="text-3xl font-extrabold text-[#0F1C2E] mb-8 tracking-tight">
          Current Opportunities
        </h2>
        
        {/* Responsive Grid: Stacks on mobile, 2 columns on small screens and up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {roles.map((role) => (
            <div 
              key={role} 
              className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-slate-100 group hover:border-[#2FB7DA]/50 hover:shadow-lg hover:shadow-[#0F1C2E]/5 transition-all duration-300"
            >
              {/* Icon using Cyan Blue (#2FB7DA) */}
              <div className="p-2 bg-[#F7F9FB] rounded-lg group-hover:bg-[#0F1C2E] transition-colors">
                <Briefcase className="w-5 h-5 text-[#2FB7DA] group-hover:text-white transition-colors" />
              </div>
              <span className="font-bold text-[#0F1C2E]/80 group-hover:text-[#0F1C2E] transition-colors">
                {role}
              </span>
            </div>
          ))}
        </div>
        
        {/* Requirements Section */}
        <div className="mt-12 space-y-8 p-6 md:p-8 bg-[#F7F9FB] rounded-[2rem] border border-slate-100">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <GraduationCap className="w-6 h-6 text-[#2FB7DA]" />
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              We look for candidates with degrees in <span className="font-bold text-[#0F1C2E]">Life Sciences, Pharmacy, or Nursing</span> who are passionate about data integrity and patient safety.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <CheckCircle className="w-6 h-6 text-[#A3D65C]" />
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Experience with <span className="font-bold text-[#0F1C2E]">ICH-GCP guidelines</span> and local regulatory requirements is highly preferred to maintain our standard of operational excellence.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}