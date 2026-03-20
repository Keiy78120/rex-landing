export default function Docs() {
  const docs = [
    { icon: "📖", title: "Getting Started", desc: "Install REX, configure your first agent, and see it in action.", link: "#" },
    { icon: "🏗️", title: "Architecture", desc: "How REX orchestrates agents, memory, and system integrations.", link: "#" },
    { icon: "🔌", title: "API Reference", desc: "Full API docs for extending REX with custom agents and tools.", link: "#" },
    { icon: "🧩", title: "Plugins & Skills", desc: "Build and share plugins that extend REX capabilities.", link: "#" },
  ];

  return (
    <section id="docs" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">Documentation</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Learn to <span className="gradient-text">build</span>
          </h2>
          <p className="text-neutral-400 text-lg">Comprehensive docs — launching with the public beta.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {docs.map((d, i) => (
            <a
              key={i}
              href={d.link}
              className="glass p-6 flex items-start gap-4 hover:bg-white/[0.07] transition-all duration-300 group"
            >
              <span className="text-2xl">{d.icon}</span>
              <div>
                <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors mb-1">
                  {d.title}
                </h3>
                <p className="text-neutral-500 text-sm">{d.desc}</p>
              </div>
              <span className="ml-auto text-neutral-700 group-hover:text-red-500 transition-colors">→</span>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <span className="glass px-4 py-2 text-xs text-neutral-500 inline-block">
            📝 Full documentation available at public beta launch
          </span>
        </div>
      </div>
    </section>
  );
}
