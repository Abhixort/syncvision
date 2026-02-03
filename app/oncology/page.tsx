import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OncologyHero from "@/components/OncologyHero";
import OncologyHospitals from "@/components/OncologyHospitals";

export default function Page() {
  return (
    <>
      <Navbar />
      <OncologyHero />
      <OncologyHospitals />
      <Footer />
    </>
  );
}
