import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutSyncVision from "@/components/AboutSyncVision";
import MissionVision from "@/components/MissionVision";

export default function Page() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <AboutSyncVision />
      <MissionVision />
      {/* Educational content can go below if needed, or stop here */}
      <Footer />
    </main>
  );
}