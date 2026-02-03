import Navbar from '@/components/Navbar';
import HomeHero from '@/components/HomeHero';
import Services from '@/components/Services';
import AboutSection from '@/components/AboutSection'
import OncologySection from '@/components/OncologySection';
import ServicesSection from '@/components/ServicesSection';
import ExperienceSection from '@/components/ExperienceSection';
import NetworkSection from '@/components/NetworkSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HomeHero />
      <AboutSection />
      <OncologySection />
      {/* <ServicesSection/> */}
      <ExperienceSection/>
      <NetworkSection/>
      <Footer/>
      
      
    </main>
  );
}