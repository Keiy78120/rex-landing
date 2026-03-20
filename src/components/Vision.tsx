export default function Vision() {
  const features = [
    {
      icon: "🧠",
      title: "Persistent Memory",
      desc: "Your PC remembers everything — context, preferences, workflows. Never repeat yourself.",
    },
    {
      icon: "🤖",
      title: "Multi-Agent OS",
      desc: "Specialized agents collaborate in real-time. Coding, research, communication — all orchestrated.",
    },
    {
      icon: "⚡",
      title: "Local-First AI",
      desc: "On-device inference with cloud fallback. Your data stays yours. Always.",
    },
    {
      icon: "🔗",
      title: "Universal Integration",
      desc: "Native bridges to every tool you use — email, code, files, APIs. One interface to rule them all.",
    },
  ];

  return (
    <section id="vision" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">Vision</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What if your PC could <span className="gradient-text">think</span>?
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            REX isn&apos;t another AI assistant. It&apos;s the operating system for the agentic era — 
            a computer that understands intent, executes autonomously, and evolves with you.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="glass p-8 hover:bg-white/[0.07] transition-all duration-300 group">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-red-400 transition-colors">
                {f.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Manifesto quote */}
        <div className="mt-16 glass p-10 text-center glow-red">
          <blockquote className="text-xl md:text-2xl font-light text-neutral-300 italic">
            &ldquo;The last computer you&apos;ll ever configure. The first one that configures itself.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
