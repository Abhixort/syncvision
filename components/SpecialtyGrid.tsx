"use client";

import { 
  Brain, 
  Stethoscope, 
  Microscope, 
  Activity, 
  Thermometer, 
  Droplets, 
  Eye 
} from "lucide-react";
import Reveal from "./Reveal";

const areas = [
  { title: "Neurology", icon: <Brain className="w-8 h-8" />, desc: "Focusing on CNS disorders and neurodegenerative research." },
  { title: "Oncology", icon: <Microscope className="w-8 h-8" />, desc: "Early to late-phase solid tumor and hematology trials." },
  { title: "Cardiology", icon: <Activity className="w-8 h-8" />, desc: "Interventional and observational cardiovascular studies." },
  { title: "Dermatology", icon: <Thermometer className="w-8 h-8" />, desc: "Clinical excellence in skin-related indications and therapies." },
  { title: "Gastroenterology", icon: <Droplets className="w-8 h-8" />, desc: "Studies covering IBD, liver diseases, and digestive health." },
  { title: "Endocrinology", icon: <Stethoscope className="w-8 h-8" />, desc: "Expertise in metabolic disorders, diabetes, and thyroid research." },
  // { title: "Observational", icon: <Eye className="w-8 h-8" />, desc: "Real-world evidence and specialty patient-tracking studies." },
];

export function SpecialtyGrid() {
  return (
    // Background updated to Brand Off-white (#F7F9FB)
    <section className="py-12 md:py-12 bg-[#F7F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {areas.map((area, i) => (
            <Reveal key={i}>
              <div className="group p-8 md:p-10 bg-white border border-slate-100 rounded-[2rem] hover:border-[#2FB7DA]/40 hover:shadow-2xl hover:shadow-[#0F1C2E]/5 transition-all duration-500 h-full flex flex-col">
                
                {/* Icon Container using Navy (#0F1C2E) and Cyan Blue (#2FB7DA) */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F7F9FB] text-[#2FB7DA] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0F1C2E] group-hover:text-white transition-all duration-500 shadow-sm">
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {area.icon}
                  </div>
                </div>

                {/* Text alignment fixed to left to match Hero components */}
                <h3 className="text-xl md:text-2xl font-extrabold text-[#0F1C2E] mb-3 tracking-tight">
                  {area.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed font-light text-sm md:text-base">
                  {area.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}