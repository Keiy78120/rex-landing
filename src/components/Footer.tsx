export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="8" fill="url(#fg)" />
                <path d="M14 14h8v4h-4v4h4v4h-4v8h-4V14zm12 0h8v4h-8v4h6v4h-6v4h8v4h-12V14z" fill="#0A0A0A" />
                <defs><linearGradient id="fg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#DC2626"/><stop offset="1" stopColor="#EF4444"/></linearGradient></defs>
              </svg>
              <span className="font-bold gradient-text">REX</span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Building the first agentic PC.<br />
              AI-native from silicon to soul.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 mb-4">Project</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><a href="#vision" className="hover:text-red-400 transition-colors">Vision</a></li>
              <li><a href="#roadmap" className="hover:text-red-400 transition-colors">Roadmap</a></li>
              <li><a href="#invest" className="hover:text-red-400 transition-colors">Invest</a></li>
              <li><a href="#docs" className="hover:text-red-400 transition-colors">Docs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><a href="mailto:kevin@dstudio.company" className="hover:text-red-400 transition-colors">kevin@dstudio.company</a></li>
              <li><a href="https://github.com/Keiy78120/rex-landing" className="hover:text-red-400 transition-colors">GitHub</a></li>
              <li><a href="#community" className="hover:text-red-400 transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-600">© 2026 REX Project. All rights reserved.</p>
          <p className="text-xs text-neutral-700">A D-Studio initiative</p>
        </div>
      </div>
    </footer>
  );
}
