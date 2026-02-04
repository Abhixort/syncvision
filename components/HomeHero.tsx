import Link from "next/link";


export default function HomeHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      
      {/* Background Image with slight scale effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-105"
        style={{
          backgroundImage: "url('assets/home-hero.png')",
        }}
      />

      {/* Advanced Multi-layer Overlay */}
      {/* 1. Base Darkening */}
      <div className="absolute inset-0 bg-slate-950/40" />
      {/* 2. Left-to-Right Gradient (Ensures text readability) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">

          {/* Badge / Small Title */}
          {/* <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20">
             <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Trusted SMO Partner</span>
          </div> */}

          {/* Company Name with Color Accent */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-white tracking-tight">
            Sync<span className="text-cyan-400">Vision</span> <br className="hidden md:block" />
            Research Solution LLP test
          </h1>

          {/* Tagline - Increased weight for better visibility */}
          <h2 className="mt-6 text-xl md:text-2xl font-medium text-slate-100 leading-snug border-l-4 border-cyan-500 pl-4">
            Reliable Site Management for <br className="hidden md:block" />
            <span className="text-white italic">High-Quality Clinical Trials</span>
          </h2>

          {/* Description - Added line-height and max-width */}
          <p className="mt-8 text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
            A professional Site Management Organization (SMO) delivering 
            efficient, compliant, and quality-driven site operations. We partner with 
            CROs and Sponsors to ensure <span className="text-white font-normal">smooth study execution</span> and robust data integrity.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/about">
            <button className="inline-flex cursor-pointer items-center rounded-full bg-cyan-500 px-8 py-4 text-sm font-bold text-slate-950 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 transform hover:-translate-y-0.5">
              Know More
            </button>
          </Link>

          <Link href="/services">
            <button className="inline-flex cursor-pointer items-center rounded-full bg-white/5 backdrop-blur-md border border-white/20 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all">
            Our Services
            </button>
          </Link>
            
        {/* <Link
          href="#services"
          className="inline-flex items-center rounded-full bg-white/5 backdrop-blur-md border border-white/20 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all"
        >
          Our Services
        </Link> */}
          </div>

        </div>
      </div>

      {/* Optional: Bottom Gradient Fade to Page Content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
