"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import Reveal from "@/components/Reveal";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { ReactNode } from "react";

interface ContactInfoCardProps {
  icon: ReactNode;
  title: string;
  detail: string;
  subDetail?: string;
  type:string;
}

export default function ContactPage() {
  return (
    <main className="bg-[#F7F9FB] min-h-screen">
      <Navbar />
      <ContactHero />

      {/* Info Cards Section: Standardized spacing to match Zigzag sections */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Reveal>
              <ContactInfoCard 
                icon={<MapPin size={24} />}
                title="Headquarters"
                detail="Pune, Maharashtra"
                subDetail="Operational Presence: Thane & Patna"
                type="address"
              />
            </Reveal>
            <Reveal>
              <ContactInfoCard 
                icon={<Phone size={24} />}
                title="Direct Call"
                detail="+91 9711416627"
                subDetail="Mon - Fri, 9am - 6pm"
                type="phone"
              />
            </Reveal>
            <Reveal>
              <ContactInfoCard 
                icon={<Mail size={24} />}
                title="Email Us"
                detail="info@syncvisionresearch.com"
                subDetail="Typical response: < 24 hrs"
                type="email"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map Section: Optimized for Hub/Tablet Height */}
      <section className="pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="w-full h-[350px] md:h-[450px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative group">
               {/* Brand Overlay */}
               <div className="absolute inset-0 bg-[var(--syncvision-green)]/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
               
               {/* Map Placeholder with Brand Colors */}
               <div className="w-full h-full flex items-center justify-center bg-slate-50">
                  <div className="text-center px-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <MapPin className="w-8 h-8 text-[var(--syncvision-gold)] animate-bounce" />
                    </div>
                    <h4 className="text-[var(--syncvision-green)] font-black uppercase tracking-tighter text-xl mb-2">SyncVision Pune</h4>
                    <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                      Interactive Map Integration Coming Soon
                    </p>
                  </div>
               </div>

               {/* Location Tag */}
               <div className="absolute bottom-6 left-6 z-20 bg-[var(--syncvision-green)] px-5 py-3 rounded-xl shadow-xl border border-white/10">
                  <p className="text-[var(--syncvision-gold)] font-black uppercase tracking-tighter text-xs">Maharashtra, India</p>
                  <p className="text-white text-[9px] uppercase font-bold tracking-widest opacity-70">Primary Service Hub</p>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactInfoCard({ icon, title, detail, subDetail, type }: ContactInfoCardProps) {
  return (
    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:border-[var(--syncvision-gold)]/30 hover:shadow-xl hover:shadow-[0_20px_40px_rgba(10,77,68,0.05)] transition-all duration-500 h-full">
      
      {/* Icon Container: Transitioning from Teal to Green */}
      <div className="w-14 h-14 bg-[#F7F9FB] text-[var(--syncvision-teal)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--syncvision-green)] group-hover:text-[var(--syncvision-gold)] transition-all duration-300 shadow-sm">
        {type === 'email' ? (
          <a href="mailto:info@syncvisionresearch.com">{icon}</a>
        ) : type === 'phone' ? (
          <a href="tel:+919711416627">{icon}</a>
        ) : (
          icon
        )}
      </div>
      
      <h3 className="font-black text-[var(--syncvision-green)] mb-3 tracking-[0.2em] uppercase text-[10px]">
        {title}
      </h3>
      
      <p className="text-[var(--syncvision-green)] text-base lg:text-lg leading-tight font-bold mb-2">
        {/* {detail} */}
        {/* {type == 'email'? (<a href="mailto:info@syncvisionresearch.com">{detail}</a>): (detail)} */}
        {type === 'email' ? (
          <a href="mailto:info@syncvisionresearch.com">{detail}</a>
        ) : type === 'phone' ? (
          <a href="tel:+919711416627">{detail}</a>
        ) : (
          detail
        )}
      </p>

      {subDetail && (
        <p className="text-slate-400 text-xs font-light">
          {subDetail}
        </p>
      )}
    </div>
  );
}