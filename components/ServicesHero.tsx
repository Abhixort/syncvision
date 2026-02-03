import Reveal from "./Reveal";


export function ServicesHero() {
    return (
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <Reveal>
            <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Our Capabilities</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 mb-6">
              Comprehensive <span className="text-cyan-400">SMO Solutions</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              SyncVision Research Solution LLP provides end-to-end site management services 
              designed to accelerate clinical trial timelines while maintaining 100% compliance.
            </p>
          </Reveal>
        </div>
      </section>
    );
  }