import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Reveal from "@/components/Reveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { ReactNode } from "react";

interface ContactInfoCardProps {
  icon: ReactNode; // ReactNode allows icons, components, or text
  title: string;
  detail: string;
}

export default function ContactPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      <ContactHero />

      {/* Info Cards Section */}
      <section className="py-16 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal>
              <ContactInfoCard 
                icon={<MapPin className="text-cyan-500" />}
                title="Office Location"
                detail="[Office Address Here], Maharashtra, India"
              />
            </Reveal>
            <Reveal>
              <ContactInfoCard 
                icon={<Phone className="text-cyan-500" />}
                title="Direct Call"
                detail="[Contact Number]"
              />
            </Reveal>
            <Reveal>
              <ContactInfoCard 
                icon={<Clock className="text-cyan-500" />}
                title="Working Hours"
                detail="Mon - Sat: 9:00 AM - 6:00 PM"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full h-[450px] bg-slate-200 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-inner flex items-center justify-center border border-slate-200">
             <p className="text-slate-500 font-medium">Google Maps Integration Placeholder</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactInfoCard({ icon, title, detail }: ContactInfoCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:border-cyan-500 transition-colors">
      <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{detail}</p>
    </div>
  );
}