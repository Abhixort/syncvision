import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

export function ApplicationCard() {
  return (
    <Reveal>
      <div className="bg-slate-900 p-10 rounded-3xl text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        
        <h3 className="text-2xl font-bold mb-4 italic">Ready to make an impact?</h3>
        <p className="text-slate-400 mb-8 text-sm md:text-base">
          Send your updated CV and a brief cover letter to our recruitment team. 
          We review applications on a rolling basis.
        </p>
        
        <a 
          href="mailto:official@syncvisionresearch.com" 
          className="flex items-center justify-center gap-3 w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02]"
        >
          <Mail className="w-5 h-5" />
          Email your CV
        </a>
        
        <p className="mt-6 text-center text-xs text-slate-500 uppercase tracking-widest">
          Official Email: official@syncvisionresearch.com
        </p>
      </div>
    </Reveal>
  );
}