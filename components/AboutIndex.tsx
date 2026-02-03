export default function AboutIndex() {
  return (
    <section className="bg-slate-50 py-24 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Clinical Trial Resources</h2>
          <p className="text-slate-500">Learn more about the fundamentals of clinical research.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {[
            { label: "Clinical Trials Overview", id: "clinical-trials" },
            { label: "Observational Studies", id: "observational-studies" },
            { label: "Who Conducts Clinical Studies?", id: "who-conducts" },
            { label: "Considerations for Participation", id: "considerations" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 transition-all font-medium text-slate-700"
            >
              <span className="mr-3 text-cyan-500 text-xl">+</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}