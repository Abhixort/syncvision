import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SponsorsHero from "@/components/SponsorsHero";
import SiteCapabilities from "@/components/SiteCapabilities";
import OncologyTrialExperience from "@/components/OncologyTrialExperience";

export default function Page() {
  return (
    <>
      <Navbar />
      <SponsorsHero />
      <SiteCapabilities />
      <OncologyTrialExperience />
      <Footer />
    </>
  );
}
