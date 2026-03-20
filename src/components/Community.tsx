export default function Community() {
  return (
    <section id="community" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">Community</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Built by <span className="gradient-text">builders</span>
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-12">
          REX is an open movement. Join developers, researchers, and visionaries shaping the agentic future.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="glass p-6 text-center">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-semibold text-white mb-2">Discord</h3>
            <p className="text-neutral-500 text-sm">Real-time discussions, feedback, and alpha testing.</p>
          </div>
          <div className="glass p-6 text-center">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-semibold text-white mb-2">Forum</h3>
            <p className="text-neutral-500 text-sm">Deep dives, RFCs, and technical proposals.</p>
          </div>
          <div className="glass p-6 text-center">
            <div className="text-3xl mb-3">🛠️</div>
            <h3 className="font-semibold text-white mb-2">Contribute</h3>
            <p className="text-neutral-500 text-sm">Open-source core. Build the future with us.</p>
          </div>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-3.5 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
        >
          <span>Join the Community</span>
          <span className="text-red-500">→</span>
        </a>
        <p className="text-neutral-600 text-xs mt-4">Coming soon — Discord &amp; Forum launching Q2 2026</p>
      </div>
    </section>
  );
}
