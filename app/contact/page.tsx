"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Reveal from "@/components/Reveal";
import { MapPin, Phone, Clock } from "lucide-react";
import { ReactNode } from "react";

interface ContactInfoCardProps {
  icon: ReactNode;
  title: string;
  detail: string;
}

export default function ContactPage() {
  return (
    // Updated background to the brand's Off-white (#F7F9FB)
    <main className="bg-[#F7F9FB] min-h-screen">
      <Navbar />
      <ContactHero />

      {/* Info Cards Section - Standardized spacing and alignment */}
      <section className="py-12 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Reveal>
              <ContactInfoCard 
                icon={<MapPin size={24} />}
                title="Office Location"
                detail="[Office Address Here], Maharashtra, India"
              />
            </Reveal>
            <Reveal>
              <ContactInfoCard 
                icon={<Phone size={24} />}
                title="Direct Call"
                detail="[Contact Number]"
              />
            </Reveal>
            <Reveal>
              <ContactInfoCard 
                icon={<Clock size={24} />}
                title="Working Hours"
                detail="Mon - Fri: 9:00 AM - 6:00 PM"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map Section - Updated with brand styling */}
      <section className="py-12 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="w-full h-[300px] md:h-[500px] bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-[#0F1C2E]/5 border border-white relative group">
               {/* Decorative Overlay for Map */}
               <div className="absolute inset-0 bg-[#0F1C2E]/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
               
               <div className="w-full h-full flex items-center justify-center bg-slate-100">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-[#2FB7DA] mx-auto mb-4 opacity-50" />
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                      Google Maps Integration Placeholder
                    </p>
                  </div>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactInfoCard({ icon, title, detail }: ContactInfoCardProps) {
  return (
    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl shadow-[#0F1C2E]/5 border border-white flex flex-col items-center text-center group hover:border-[#2FB7DA]/40 transition-all duration-500 h-full">
      {/* Icon Container using Navy and Cyan Blue transition */}
      <div className="w-14 h-14 bg-[#F7F9FB] text-[#2FB7DA] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0F1C2E] group-hover:text-white transition-all shadow-sm">
        {icon}
      </div>
      
      <h3 className="font-extrabold text-[#0F1C2E] mb-2 tracking-tight uppercase text-xs">
        {title}
      </h3>
      
      <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
        {detail}
      </p>
    </div>
  );
}