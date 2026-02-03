"use client";

import dynamic from "next/dynamic";
import Reveal from "./Reveal";

const ContactForm = dynamic(() => import("./ContactForm"), {
  ssr: false,
  loading: () => (
    <div className="space-y-4 w-full animate-pulse">
      <div className="h-12 bg-white/10 rounded-xl"></div>
      <div className="h-12 bg-white/10 rounded-xl"></div>
      <div className="h-32 bg-white/10 rounded-xl"></div>
      <div className="h-12 bg-cyan-500/20 rounded-xl w-full"></div>
    </div>
  ),
});

export default function ContactHero() {
  return (
    <section className="bg-slate-950 text-white pt-40 pb-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <Reveal>
            <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Get In Touch</span>
            <h1 className="text-5xl md:text-6xl font-extrabold mt-4 mb-6 leading-tight">
              Let’s execute <br />
              <span className="text-cyan-400">Better Trials.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Partner with SyncVision for reliable, ICH-GCP compliant site management. We are ready to support your clinical study needs across India.
            </p>
            
            <div className="flex flex-col gap-4">
               <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Official Correspondence</p>
               <a href="mailto:official@syncvisionresearch.com" className="text-2xl font-light hover:text-cyan-400 transition-colors">
                  official@syncvisionresearch.com
               </a>
            </div>
          </Reveal>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}