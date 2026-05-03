export default function Solution() {
  return (
    <section id="solution" className="py-24 md:py-32 relative bg-gradient-to-b from-transparent via-brand/5 to-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texte */}
          <div>
            <div className="text-sm font-semibold text-brand uppercase tracking-widest mb-4">
              La solution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
                Scolaris
              </span> centralise toute votre école.
            </h2>
            <p className="mt-6 text-lg text-ink-mute leading-relaxed">
              Une plateforme numérique complète, accessible sur ordinateur et sur
              mobile, conçue pour le contexte sénégalais. Disponible en français et
              en arabe.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Dashboard temps réel pour la direction",
                "Reçus de paiement officiels imprimables",
                "Bulletins conformes aux standards officiels",
                "Notifications SMS automatiques aux parents",
                "Multi-établissements pour les groupes scolaires",
                "Données hébergées en sécurité",
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visuel */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand/20 via-transparent to-transparent blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-bg-mid to-bg-deep p-8">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "📊", label: "Pilotage" },
                  { icon: "👥", label: "Élèves" },
                  { icon: "💰", label: "Finances" },
                  { icon: "📅", label: "Présences" },
                  { icon: "📝", label: "Bulletins" },
                  { icon: "📈", label: "Rapports" },
                ].map((it, i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition"
                  >
                    <div className="text-2xl mb-2">{it.icon}</div>
                    <div className="text-sm text-white font-medium">{it.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-brand/10 border border-brand/30">
                <div className="text-xs text-ink-mute mb-1">Disponible en</div>
                <div className="flex gap-3 text-sm font-semibold text-white">
                  <span>🇫🇷 Français</span>
                  <span className="text-ink-dim">•</span>
                  <span>🇸🇦 العربية</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
