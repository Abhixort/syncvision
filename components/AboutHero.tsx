import Reveal from "./Reveal";

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] flex items-center overflow-hidden">
      
      {/* Background Image - Static and Sharp */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/about-hero.avif')",
        }}
      />

      {/* Clean Overlay - Solid left-to-right gradient for text legibility without overall blur */}
      <div className="absolute inset-0 bg-slate-950/40" /> 
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />

      {/* Content Container - Precisely aligned with your page grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 text-white">
        <Reveal>
          {/* Category Tag */}
          {/* <div className="flex items-center gap-2 mb-4">
            <span className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-xs">
              Company Overview
            </span>
            <div className="h-[2px] w-10 bg-cyan-500" />
          </div> */}

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            About Sync<span className="text-cyan-400">Vision</span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-white leading-relaxed font-medium">
            A specialized Site Management Organization dedicated to elevating 
            the standards of clinical research through transparency, 
            compliance, and operational excellence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}