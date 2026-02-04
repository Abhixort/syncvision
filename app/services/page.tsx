import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ServicesHero } from "@/components/ServicesHero";
import { CoreServicesGrid } from "@/components/CoreServicesGrid";

export default function ServicesPage() {
  return (
    <main>
        <Navbar/>
      <ServicesHero />
      <CoreServicesGrid />
      <Footer/>
    </main>
  );
}