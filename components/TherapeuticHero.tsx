import Reveal from "./Reveal";

export function TherapeuticHero() {
  return (
    <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
      {/* Abstract medical grid background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Clinical Reach</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 mb-6">
            Therapeutic <span className="text-cyan-400">Expertise</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            SyncVision collaborates with seasoned Principal Investigators across a diverse range of 
            medical specialties, ensuring deep protocol understanding and high-quality patient recruitment.
          </p>
        </Reveal>
      </div>
    </section>
  );
}