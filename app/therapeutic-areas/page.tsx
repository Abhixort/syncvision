import { TherapeuticHero } from "@/components/TherapeuticHero";
import { SpecialtyGrid } from "@/components/SpecialtyGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function TherapeuticAreasPage() {
  return (
    <main className="bg-[#F7F9FB]">
      <Navbar />
      <TherapeuticHero />
      <SpecialtyGrid />
      
      {/* CTA Section - Standardized for Brand Option 2 */}
      <section className="py-20 bg-[#0F1C2E] relative overflow-hidden">
        {/* Subtle Brand Accent Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2FB7DA]/10 blur-[120px] rounded-full -z-0" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
              Need expertise in <span className="text-[#2FB7DA]">another area?</span>
            </h2>
            
            <p className="text-[#F7F9FB]/70 mb-10 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              While we specialize in the areas above, our investigator network is constantly expanding. 
              Contact us to discuss your specific protocol requirements and site feasibility.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/contact" 
                className="w-full sm:w-auto inline-block bg-[#2FB7DA] text-[#0F1C2E] px-10 py-4 rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-[#2FB7DA]/20 transform hover:-translate-y-1"
              >
                Inquire About Site Feasibility
              </a>
              
              <a 
                href="/services" 
                className="w-full sm:w-auto inline-block bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
              >
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