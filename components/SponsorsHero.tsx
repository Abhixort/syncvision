export default function SponsorsHero() {
    return (
      <section className="relative h-[40vh] flex items-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/sponsors-hero.jpg')",
          }}
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
  
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Sponsors/CRO's
          </h1>
        </div>
      </section>
    );
  }
  