const col1 = [
    "GCP certified dedicated research staff",
    "Investigators onsite daily",
    "Drug and device trials",
    "Constantly monitored drug storage with mobile excursion alerts",
    "Specialty injections (injection patterns, depths, frequencies, etc.)",
  ];
  
  const col2 = [
    "Wearables/Insertables",
    "Radiological procedures",
    "Nerve Studies",
    "In house Lab processing and storage",
    "PK/PD sampling, processing & storage",
    "Infusions",
  ];
  
  const col3 = [
    "Surgical protocols: General, Orthopedic, and others",
    "In house C-Arm imaging",
    "In house physical therapy team",
  ];
  
  export default function SiteCapabilities() {
    return (
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
  
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Site Capabilities
          </h2>
  
          <div className="grid md:grid-cols-3 gap-10">
            {[col1, col2, col3].map((list, i) => (
              <ul key={i} className="space-y-3 text-gray-700">
                {list.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  