import { TherapeuticHero } from "@/components/TherapeuticHero";
import { SpecialtyGrid } from "@/components/SpecialtyGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TherapeuticAreasPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <TherapeuticHero />
      <SpecialtyGrid />
      
      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need expertise in another area?</h2>
          <p className="text-slate-600 mb-8">
            While we specialize in the areas above, our investigator network is constantly expanding. 
            Contact us to discuss your specific protocol requirements.
          </p>
          <a href="/contact" className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-full font-bold hover:bg-cyan-700 transition-all">
            Inquire About Site Feasibility
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}