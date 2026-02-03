export default function OncologyHero() {
    return (
      <section className="relative h-[60vh] flex items-center">
        
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/oncology-hero.avif')",
          }}
        />
  
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
  
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Oncology Site <br /> Network
          </h1>
        </div>
      </section>
    );
  }
  