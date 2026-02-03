import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ServicesHero } from "@/components/ServicesHero";
import { CoreServicesGrid } from "@/components/CoreServicesGrid";
import { TherapeuticAreas } from "@/components/TherapeuticAreas";

export default function ServicesPage() {
  return (
    <main>
        <Navbar/>
      <ServicesHero />
      <CoreServicesGrid />
      <TherapeuticAreas />
      
      {/* Optional: Add a CTA Section */}
      <section className="py-20 bg-cyan-600 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Collaborate?</h2>
        <button className="bg-white text-cyan-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
          Contact Our Team
        </button>
      </section>
      <Footer/>
    </main>
  );
}