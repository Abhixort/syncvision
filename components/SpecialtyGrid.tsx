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
    { title: "Observational", icon: <Eye className="w-8 h-8" />, desc: "Real-world evidence and specialty patient-tracking studies." },
  ];
  
  export function SpecialtyGrid() {
    return (
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, i) => (
              <Reveal key={i}>
                <div className="group p-10 bg-white border border-slate-100 rounded-[2rem] hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-slate-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500">
                    {area.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{area.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-light">
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