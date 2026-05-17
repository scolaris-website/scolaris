export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden"
    >
      {/* Halo lumineux */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_60%)]" />
      </div>

      {/* Drapeau du Sénégal — barre fine en haut */}
      <div className="absolute top-16 inset-x-0 h-1 flex">
        <div className="flex-1 bg-[#00853F]" />
        <div className="flex-1 bg-[#FDEF42]" />
        <div className="flex-1 bg-[#E31B23]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Colonne gauche — texte */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-ink-mute mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            Déjà en pilote dans 2 écoles privées sénégalaises
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            La plateforme de
            <br />
            <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
              gestion scolaire
            </span>
            <br />
            du Sénégal
          </h1>

          <p className="mt-6 text-lg md:text-xl text-ink-mute leading-relaxed max-w-xl">
            Centralisez les élèves, les notes, les paiements et les bulletins
            dans <strong className="text-white">une seule plateforme</strong> moderne,
            accessible sur mobile, en français et en arabe.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="#contact"
              className="px-7 py-4 rounded-lg bg-brand hover:bg-brand-light text-white font-semibold text-center transition shadow-xl shadow-brand/30"
            >
              Demander une démo gratuite
            </a>
            <a
              href="/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-lg border border-white/15 hover:border-accent-red/50 hover:bg-accent-red/5 text-white font-semibold text-center transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 text-accent-red" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Voir la démo (3 min)
            </a>
            <a
              href="#solution"
              className="px-7 py-4 rounded-lg border border-white/15 hover:border-white/30 hover:bg-white/5 text-white font-semibold text-center transition"
            >
              Découvrir
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-ink-dim">
            <div>
              <div className="text-2xl font-bold text-white">3 000+</div>
              <div>écoles privées au Sénégal</div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">2</div>
              <div>écoles déjà en production</div>
            </div>
          </div>
        </div>

        {/* Colonne droite — visuel produit (miniature avec captures réelles) */}
        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <a
            href="/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand/20 group cursor-pointer"
            aria-label="Regarder la démo Scolaris (3 min 27 s)"
          >
            {/* Image miniature — captures réelles de l'app */}
            <img
              src="/og-image.png"
              alt="Aperçu Scolaris — Pilotage, Élèves, Bulletins"
              className="w-full h-auto block"
              loading="eager"
            />

            {/* Overlay vidéo — assombrissement + play */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div className="relative">
                {/* Halo pulsant */}
                <div className="absolute inset-0 rounded-full bg-accent-red/30 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Bouton Play */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent-red/95 flex items-center justify-center shadow-2xl shadow-accent-red/50 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

