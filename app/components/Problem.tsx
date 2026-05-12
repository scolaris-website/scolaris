const issues = [
  {
    title: "Erreurs quotidiennes",
    body: "Doubles saisies, oublis, confusions ralentissent le travail de l'école.",
    color: "from-accent-red/30 to-transparent",
    border: "border-accent-red/30",
  },
  {
    title: "Pertes d'informations",
    body: "Dossiers élèves, notes ou archives deviennent incomplets ou introuvables.",
    color: "from-accent-red/30 to-transparent",
    border: "border-accent-red/30",
  },
  {
    title: "Retards d'encaissement",
    body: "Paiements suivis tardivement, relances qui prennent plus de temps.",
    color: "from-accent-amber/30 to-transparent",
    border: "border-accent-amber/30",
  },
  {
    title: "Peu de visibilité",
    body: "Les directeurs n'ont pas toujours une vision claire des soldes et priorités.",
    color: "from-brand/30 to-transparent",
    border: "border-brand/30",
  },
  {
    title: "Parents mal informés",
    body: "Les familles ne savent pas toujours où en sont leurs enfants.",
    color: "from-accent-cyan/30 to-transparent",
    border: "border-accent-cyan/30",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold text-accent-red uppercase tracking-widest mb-4">
            Constat
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Plus de <span className="text-accent-red">3 000 écoles privées</span> sénégalaises
            gèrent encore leurs élèves sur papier.
          </h2>
          <p className="mt-6 text-lg text-ink-mute leading-relaxed">
            Cette situation provoque des erreurs, des pertes, des retards et une
            opacité totale pour les directeurs comme pour les familles.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {issues.map((it, i) => (
            <div
              key={i}
              className={`relative rounded-xl border ${it.border} bg-bg-mid/80 p-6 hover:bg-bg-mid transition group overflow-hidden`}
            >
              <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-radial ${it.color} blur-2xl opacity-60`} />
              <div className="relative">
                <div className="text-xs font-semibold text-ink-dim uppercase tracking-wider mb-3">
                  Situation {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{it.title}</h3>
                <p className="text-sm text-ink-mute leading-relaxed">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
