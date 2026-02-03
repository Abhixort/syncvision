import Image from "next/image";

const hospitals = [
  {
    name: "Noble Hospital Pvt. Ltd.",
    location: "Pune, Maharashtra, India",
    logo: "/assets/hospitals/noble.png",
  },
  {
    name: "CIMET’s Inamdar Multispeciality Hospital",
    location: "Pune, Maharashtra, India",
    logo: "/assets/hospitals/inamdar.png",
  },
  {
    name: "Maccare Super Speciality Hospital",
    location: "Ahmednagar, Maharashtra, India",
    logo: "/assets/hospitals/maccare.png",
  },
  {
    name: "PDEA’s Ayurveda Rugnalaya & Sterling Multi Speciality Hospital",
    location: "PCMC, Pune, Maharashtra, India",
    logo: "/assets/hospitals/pdea.png",
  },
  {
    name: "Latur Super Speciality Hospital Pvt Ltd",
    location: "Latur, Maharashtra, India",
    logo: "/assets/hospitals/latur.png",
  },
  {
    name: "Welfare Medical Foundation's Villoo Poonawalla Memorial Hospital",
    location: "Pune, Maharashtra, India",
    logo: "/assets/hospitals/villoo.png",
  },
  {
    name: "Saideep Hospital & Research Centre",
    location: "Ahmednagar, Maharashtra, India",
    logo: "/assets/hospitals/saideep.png",
  },
  {
    name: "Prolife Cancer Centre and Research Institute",
    location: "Pune, Maharashtra, India",
    logo: "/assets/hospitals/prolife.png",
  },
];

export default function OncologyHospitals() {
  return (
    <section className="bg-sky-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-8">
          {hospitals.map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-4"
            >
              <Image
                src={h.logo}
                alt={h.name}
                width={48}
                height={48}
                className="object-contain"
              />

              <div>
                <h3 className="font-semibold text-gray-900">
                  {h.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {h.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
