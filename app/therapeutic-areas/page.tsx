import { TherapeuticHero } from "@/components/TherapeuticHero";
import { SpecialtyGrid } from "@/components/SpecialtyGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function TherapeuticAreasPage() {
  // Shared button base styles matching Home Hero logic
  const btnBase = "cursor-pointer w-full sm:w-auto inline-flex justify-center items-center rounded-full px-10 py-4 text-sm font-bold transition-all duration-300 shadow-lg border-2";
  
  // Primary: Solid Gold -> Transparent on hover (matching Home Hero)
  // Updated hover for light background: text turns Green, border turns Green
  const btnPrimary = `${btnBase} bg-[var(--syncvision-gold)] border-[var(--syncvision-gold)] text-[var(--syncvision-green)] hover:bg-transparent hover:text-[var(--syncvision-green)] hover:border-[var(--syncvision-green)]`;

  // Secondary: Transparent/Glass -> Solid Gold on hover (matching Home Hero)
  // Updated for light background: starts with Green border/text
  const btnSecondary = `${btnBase} bg-transparent border-[var(--syncvision-green)] text-[var(--syncvision-green)] hover:bg-[var(--syncvision-gold)] hover:text-[var(--syncvision-green)] hover:border-[var(--syncvision-gold)]`;

  return (
    <main className="bg-[var(--syncvision-green)]">
      <Navbar />
      <TherapeuticHero />
      <SpecialtyGrid />
      
      {/* CTA Section - High Contrast Background */}
      <section className="py-24 bg-[#F7F9FB] relative overflow-hidden">
        
        {/* Subtle decorative element to keep it premium */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--syncvision-gold)]/20 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            {/* Text colors changed to Green/Dark for the light background */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--syncvision-green)] mb-6 tracking-tight">
              Need expertise in <span className="text-[var(--syncvision-gold)]">another area?</span>
            </h2>
            
            <p className="text-[var(--syncvision-green)]/70 mb-12 text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              While we specialize in the areas above, our investigator network is constantly expanding. 
              Contact us to discuss your specific protocol requirements and site feasibility.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a href="/contact" className={btnPrimary}>
                Inquire About Site Feasibility
              </a>
              
              <a href="/services" className={btnPrimary}>
                View SMO Services
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}