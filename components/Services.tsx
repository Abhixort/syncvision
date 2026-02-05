const services = [
    { title: "Site Management", description: "Ethics committee communications and document submission.", icon: "📋" },
    { title: "CRC Out-sourcing", description: "Experienced team with efficient management processes.", icon: "👥" },
    { title: "Study Start Up", description: "Project schedule management and laboratory coordination.", icon: "🚀" },
  ];
  
  export default function Services() {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-xl hover:shadow-2xl transition duration-300 bg-white group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }