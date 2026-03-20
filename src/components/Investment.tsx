export default function Investment() {
  const tiers = [
    {
      name: "Backer",
      amount: "€100+",
      perks: ["Early beta access", "Discord role", "Name on wall"],
    },
    {
      name: "Builder",
      amount: "€1,000+",
      perks: ["All Backer perks", "Priority feature requests", "Monthly founder calls"],
      featured: true,
    },
    {
      name: "Architect",
      amount: "€10,000+",
      perks: ["All Builder perks", "Advisory board seat", "Equity consideration", "Hardware prototype access"],
    },
  ];

  const funded = 12; // percent

  return (
    <section id="invest" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">Investment</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Fund the <span className="gradient-text">revolution</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            We&apos;re raising pre-seed to accelerate development. Early believers get first access — and the largest investors get equity.
          </p>
        </div>

        {/* Progress bar */}
        <div className="glass p-8 mb-12 glow-red">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-neutral-300">Pre-Seed Round</span>
            <span className="text-sm font-mono text-red-400">{funded}% funded</span>
          </div>
          <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all duration-1000"
              style={{ width: `${funded}%` }}
            />
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-xs text-neutral-600">€0</span>
            <span className="text-xs text-neutral-600">Goal: €500K</span>
          </div>
        </div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`glass p-8 flex flex-col ${
                t.featured ? "ring-1 ring-red-500/30 glow-red" : ""
              } hover:bg-white/[0.07] transition-all duration-300`}
            >
              {t.featured && (
                <span className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mb-1">{t.name}</h3>
              <p className="text-3xl font-extrabold gradient-text mb-6">{t.amount}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {t.perks.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-neutral-400 text-sm">
                    <span className="text-red-500 mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:kevin@dstudio.company?subject=REX Investment — {t.name}"
                className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                  t.featured
                    ? "bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-500 hover:to-red-400 shadow-lg shadow-red-600/25"
                    : "glass text-white hover:bg-white/10"
                }`}
              >
                Get in Touch
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
