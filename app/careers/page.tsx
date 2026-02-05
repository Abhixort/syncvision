import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CareersHero } from "@/components/CareersHero";
import { JobRoles } from "@/components/JobRoles";
import { ApplicationCard } from "@/components/ApplicationCard";

export default function CareersPage() {
  return (
    <main className="bg-white min-h-screen">
         <Navbar />
      <CareersHero />
      
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <JobRoles />
          <div className="lg:sticky lg:top-32">
            <ApplicationCard />
          </div>
        </div>
      </section>
      <Footer />

    </main>
  );
}