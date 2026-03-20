export default function Roadmap() {
  const levels = [
    {
      level: 1,
      title: "CLI Agent Framework",
      status: "done",
      desc: "Terminal-native agent with tool use, web access, and code execution.",
      tech: "Node.js · TypeScript · LLM Providers",
    },
    {
      level: 2,
      title: "Memory & Context",
      status: "active",
      desc: "Persistent memory, knowledge base ingestion, semantic search across all your data.",
      tech: "Vector DB · RAG · BM25 Hybrid",
    },
    {
      level: 3,
      title: "Multi-Agent Orchestration",
      status: "planned",
      desc: "Specialized sub-agents that collaborate — coding, research, ops, communication.",
      tech: "Agent Protocol · MCP · Task Delegation",
    },
    {
      level: 4,
      title: "Desktop Integration",
      status: "planned",
      desc: "Native desktop app with system-level access — files, apps, clipboard, notifications.",
      tech: "Flutter · Tauri · OS Bridges",
    },
    {
      level: 5,
      title: "First Agentic PC",
      status: "vision",
      desc: "Hardware + software fusion. A computer designed from the ground up for autonomous AI.",
      tech: "Custom Silicon · On-Device LLM · REX OS",
    },
  ];

  const statusStyles: Record<string, { dot: string; badge: string; label: string }> = {
    done: { dot: "bg-green-500", badge: "text-green-400 bg-green-500/10", label: "Complete" },
    active: { dot: "bg-red-500 animate-pulse", badge: "text-red-400 bg-red-500/10", label: "In Progress" },
    planned: { dot: "bg-neutral-600", badge: "text-neutral-400 bg-neutral-500/10", label: "Planned" },
    vision: { dot: "bg-amber-500/50", badge: "text-amber-400 bg-amber-500/10", label: "Vision" },
  };

  return (
    <section id="roadmap" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">Roadmap</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Five levels to the <span className="gradient-text">future</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-red-600 via-red-600/50 to-neutral-800" />

          <div className="space-y-8">
            {levels.map((l) => {
              const s = statusStyles[l.status];
              return (
                <div key={l.level} className="relative pl-16 md:pl-20">
                  {/* Dot */}
                  <div className={`absolute left-4 md:left-6 top-8 w-4 h-4 rounded-full ${s.dot} ring-4 ring-[#0A0A0A]`} />
                  
                  <div className="glass p-6 md:p-8 hover:bg-white/[0.07] transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-neutral-600 uppercase">Level {l.level}</span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${s.badge} w-fit`}>
                        {s.label}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{l.title}</h3>
                    <p className="text-neutral-400 mb-3">{l.desc}</p>
                    <p className="text-xs font-mono text-neutral-600">{l.tech}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
