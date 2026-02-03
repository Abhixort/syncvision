const col1 = [
    "Bladder Cancer Clinical Trials",
    "Bone Cancer Clinical Trials",
    "Brain & Nervous System Clinical Trials",
    "Breast Cancer Clinical Trials",
    "CAR T-Cell Therapy Clinical Trials",
    "Cervical Cancer Clinical Trials",
    "Colorectal Cancer Clinical Trials",
    "Esophageal Cancer Clinical Trials",
    "Gastrointestinal Stromal Tumor (GIST) Clinical Trials",
    "Head & Neck Cancer Clinical Trials",
    "Kidney Cancer Clinical Trials",
  ];
  
  const col2 = [
    "Leukemia Clinical Trials",
    "Liver Cancer Clinical Trials",
    "Lung & Chest Cancer Clinical Trials",
    "Lymphoma Clinical Trials",
    "Melanoma Clinical Trials",
    "Mesothelioma Clinical Trials",
    "Multiple Myeloma Clinical Trials",
    "Myelodysplastic Syndrome Clinical Trials",
    "Neuroblastoma Clinical Trials",
    "Non-Melanoma Skin Cancer Clinical Trials",
    "Ovary/Fallopian Tube/Primary Peritoneal Cancer Clinical Trials",
  ];
  
  const col3 = [
    "Pancreatic Cancer Clinical Trials",
    "Prostate Cancer Clinical Trials",
    "Soft Tissue Sarcoma Clinical Trials",
    "Stomach Cancer Clinical Trials",
    "Thyroid Cancer Clinical Trials",
    "Uterine and Endometrial Cancer Clinical Trials",
  ];
  
  export default function OncologyTrialExperience() {
    return (
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
  
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Oncology Trial Experience
          </h2>
  
          <div className="grid md:grid-cols-3 gap-12 text-gray-700">
            {[col1, col2, col3].map((list, i) => (
              <ul key={i} className="space-y-3">
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
  