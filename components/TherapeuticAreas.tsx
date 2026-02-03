import Reveal from "./Reveal";


export function TherapeuticAreas() {
    const areas = ["Neurology", "Dermatology", "Gastroenterology", "Endocrinology", "Oncology", "Cardiology"];
    
    return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Therapeutic Expertise</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-4">
            {areas.map((area) => (
              <span key={area} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-medium shadow-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }