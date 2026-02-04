import Link from "next/link";
import Reveal from "./Reveal";

export default function HomeHero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-[#0F1C2E]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/home-hero-background.webp')" }}
      />

      <div className="absolute inset-0 bg-[#0F1C2E]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E] via-[#0F1C2E]/80 to-transparent lg:via-[#0F1C2E]/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 lg:pt-0">
        <div className="max-w-3xl">
          <Reveal>
            {/* Adjusted Title Size for Mobile */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.2] text-white tracking-tight">
              Sync<span className="text-[#2FB7DA]">Vision</span> <br className="hidden sm:block" />
              Research Solution LLP
            </h1>

            {/* Adjusted Tagline for Mobile */}
            <h2 className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-medium text-[#F7F9FB] leading-snug border-l-4 border-[#2FB7DA] pl-4">
              Reliable Site Management for <br className="hidden sm:block" />
              <span className="text-white italic">High-Quality Clinical Trials</span>
            </h2>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-[#F7F9FB]/80 leading-relaxed max-w-2xl font-light">
              A professional Site Management Organization (SMO) delivering 
              efficient, compliant, and quality-driven site operations. 
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-[#2FB7DA] px-8 py-3 md:py-4 text-sm font-bold text-[#0F1C2E] hover:brightness-110 transition-all shadow-lg shadow-[#2FB7DA]/20">
                  Know More
                </button>
              </Link>

              <Link href="/services" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-white/5 backdrop-blur-md border border-white/20 px-8 py-3 md:py-4 text-sm font-bold text-white hover:bg-white/10 transition-all">
                  Our Services
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F1C2E] to-transparent" />
    </section>
  );
}