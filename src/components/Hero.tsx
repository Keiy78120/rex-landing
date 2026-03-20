export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-500/8 rounded-full blur-[96px] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="glass glow-red px-8 py-4 inline-flex items-center gap-3">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="8" fill="url(#rex-grad)" />
              <path d="M14 14h8v4h-4v4h4v4h-4v8h-4V14zm12 0h8v4h-8v4h6v4h-6v4h8v4h-12V14z" fill="#0A0A0A" />
              <defs>
                <linearGradient id="rex-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#DC2626" />
                  <stop offset="1" stopColor="#EF4444" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-2xl font-bold tracking-wider gradient-text">REX</span>
          </div>
        </div>

        {/* Tagline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          The First{" "}
          <span className="gradient-text">Agentic PC</span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          AI-native from silicon to soul. A personal computer that thinks, learns, and acts — autonomously.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#vision"
            className="px-8 py-3.5 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-600/25"
          >
            Discover REX
          </a>
          <a
            href="#invest"
            className="px-8 py-3.5 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
          >
            Invest Early →
          </a>
        </div>

        {/* Status badge */}
        <div className="mt-12 flex justify-center">
          <div className="glass px-4 py-2 text-sm text-neutral-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse-slow" />
            Building in public — Pre-seed phase
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-600">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
