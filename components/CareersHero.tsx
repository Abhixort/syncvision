import Reveal from "@/components/Reveal";

export function CareersHero() {
  return (
    <section className="pt-32 pb-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Join the <span className="text-cyan-400">SyncVision</span> Team
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We welcome motivated clinical research professionals to join our 
            newly established and rapidly growing SMO network.
          </p>
        </Reveal>
      </div>
    </section>
  );
}