import Image from "next/image";
import Reveal from "./Reveal";
import { 
  Search, 
  FileText, 
  Settings, 
  ShieldAlert, 
  Database, 
  Archive 
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Site Identification & Feasibility",
      icon: <Search className="w-6 h-6 text-cyan-600" />,
      image: "/assets/service-1.jpeg",
      list: [
        "Identification of investigators and sites",
        "Feasibility assessments and site evaluation",
        "Start-up planning support"
      ]
    },
    {
      title: "Site Start-Up & Regulatory Support",
      icon: <FileText className="w-6 h-6 text-cyan-600" />,
      image: "/assets/service-2.jpeg",
      list: [
        "EC/IRB submission coordination",
        "Regulatory document maintenance",
        "Support for contracts and budgeting"
      ]
    },
    {
      title: "Clinical Trial Site Operations",
      icon: <Settings className="w-6 h-6 text-cyan-600" />,
      image: "/assets/service-3.jpeg",
      list: [
        "Dedicated site coordination",
        "Subject screening and recruitment",
        "Source documentation assistance"
      ]
    },
    {
      title: "Safety & Pharmacovigilance Support",
      icon: <ShieldAlert className="w-6 h-6 text-cyan-600" />,
      image: "/assets/service-4.jpeg",
      list: [
        "AE and SAE reporting coordination",
        "ICSR documentation support",
        "Safety compliance and tracking"
      ]
    },
    {
      title: "Data & Quality Support",
      icon: <Database className="w-6 h-6 text-cyan-600" />,
      image: "/assets/service-5.avif",
      list: [
        "CRF / eCRF support and query resolution",
        "TMF and ISF maintenance",
        "Audit and inspection readiness"
      ]
    },
    {
      title: "Study Close-Out",
      icon: <Archive className="w-6 h-6 text-cyan-600" />,
      image: "/assets/service-6.avif",
      list: [
        "Site close-out coordination",
        "Essential document reconciliation",
        "Long-term archival support"
      ]
    }
  ];

  return (
    <section id="services" className="bg-slate-50 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <Reveal className="text-center mb-20">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-100 border border-cyan-200">
            <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest">End-to-End Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Our <span className="text-cyan-600">Services</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg font-light">
            Comprehensive site management services supporting clinical trials
            from initial feasibility through study close-out.
          </p>
        </Reveal>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={index}>
              <div className="group h-full bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2">
                
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Floating Icon */}
                  <div className="absolute -bottom-6 right-8 bg-white p-4 rounded-2xl shadow-lg border border-slate-50 transition-transform group-hover:rotate-12">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-10">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>

                  <ul className="mt-6 space-y-3">
                    {service.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Bar */}
                <div className="h-1.5 w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}