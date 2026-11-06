export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute top-16 inset-x-0 h-1 flex" aria-hidden="true">
        <div className="flex-1 bg-[#00853F]" /><div className="flex-1 bg-[#FDEF42]" /><div className="flex-1 bg-[#E31B23]" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,.16),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 text-accent-green px-4 py-2 text-sm font-medium mb-7">Scolaris V12.5 · Gestion scolaire pour le Sénégal</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Moins de paperasse.<br /><span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">Plus de maîtrise</span><br />sur votre école.
          </h1>
          <p className="mt-6 text-lg text-ink-mute leading-relaxed max-w-xl">
            Inscriptions, suivi des élèves, notes, bulletins A4 et encaissements : rassemblez vos opérations scolaires dans un outil pensé pour la direction et l'administration.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-7 py-4 rounded-lg bg-brand hover:bg-brand-light font-semibold transition shadow-xl shadow-brand/25">Demander une démonstration</a>
            <a href="#fonctionnalites" className="px-7 py-4 rounded-lg border border-white/20 hover:bg-white/5 font-semibold transition">Explorer la V12.5</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-ink-mute">
            <span>✓ Primaire, collège et lycée</span><span>✓ Démonstration personnalisée</span><span>✓ Devis adapté à votre établissement</span>
          </div>
          <p className="mt-6 text-xs text-ink-dim">Les captures présentées peuvent utiliser des données fictives de démonstration.</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-5 rounded-3xl bg-brand/15 blur-3xl" />
          <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-bg-mid">
            <img src="/captures/dir-pilotage.png" alt="Capture d'écran du tableau de bord de Scolaris" className="w-full h-auto" />
            <div className="px-5 py-4 border-t border-white/10 flex items-center justify-between gap-3">
              <div><p className="font-semibold">Le pilotage scolaire au quotidien</p><p className="text-xs text-ink-mute">Aperçu de l'application</p></div>
              <a href="/demo" target="_blank" rel="noopener noreferrer" className="text-brand-light text-sm font-semibold hover:text-white">Voir la vidéo ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
