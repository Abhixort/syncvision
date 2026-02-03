import { Briefcase, GraduationCap, CheckCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

export function JobRoles() {
  const roles = ["Site Coordinators", "CRCs", "Regulatory Support", "Quality Assurance"];

  return (
    <div className="space-y-12">
      <Reveal>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Current Opportunities</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {roles.map((role) => (
            <div key={role} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-cyan-500 transition-colors">
              <Briefcase className="w-5 h-5 text-cyan-600" />
              <span className="font-semibold text-slate-700">{role}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-12 space-y-6">
          <div className="flex gap-4">
            <GraduationCap className="w-6 h-6 text-cyan-600 flex-shrink-0" />
            <p className="text-slate-600">
              We look for candidates with degrees in <span className="font-medium text-slate-900">Life Sciences, Pharmacy, or Nursing</span> who are passionate about data integrity and patient safety.
            </p>
          </div>
          <div className="flex gap-4">
            <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0" />
            <p className="text-slate-600">
              Experience with ICH-GCP guidelines and local regulatory requirements is highly preferred.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}