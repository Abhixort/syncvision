import Link from "next/link";
import Reveal from "./Reveal";

export default function HomeHero() {
  // Shared classes for consistent button styling
  const btnBase = "cursor-pointer w-full sm:w-auto inline-flex justify-center items-center rounded-full px-8 py-3 md:py-4 text-sm font-bold transition-all duration-300 shadow-lg border-1 border-[var(--syncvision-gold)]";
  const btnPrimary = `${btnBase} bg-[var(--syncvision-gold)] text-[var(--syncvision-green)] hover:bg-white/10 hover:backdrop-blur-md hover:text-white`;

  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-[var(--syncvision-green)]">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/home-hero-background.webp')" }}
      />

      {/* Synchronized Overlays using Green and Teal */}
      <div className="absolute inset-0 bg-[var(--syncvision-background-teal)]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--syncvision-background-teal)] via-[rgb(var(--syncvision-teal-rgb)_/_0.8)] to-transparent lg:via-[rgb(var(--syncvision-teal-rgb)_/_0.6)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12 lg:pt-0">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.2] text-white tracking-tight">
              Sync<span className="">Vision</span> <br className="hidden sm:block" />
              Research Solution LLP
            </h1>

            <h2 className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-medium text-[#F7F9FB] leading-snug border-l-4 border-[var(--syncvision-gold)] pl-4">
                Where Vision meets integrity 
            </h2>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-[#F7F9FB]/80 leading-relaxed max-w-2xl font-light">
              A professional Site Management Organization (SMO) delivering 
              efficient, compliant, and quality-driven site operations. 
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="w-full sm:w-auto">
                <button className={btnPrimary}>
                  Know More
                </button>
              </Link>

              <Link href="/services" className="w-full sm:w-auto">
                <button className={btnPrimary}>
                  Our Services
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom decorative fade to Green */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--syncvision-green)] to-transparent" />
    </section>
  );
}