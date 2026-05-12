const modules = [
  {
    n: "01",
    title: "Tableau de bord",
    desc: "Synthèse temps réel de l'activité de l'établissement. Indicateurs clés, alertes, accès rapides.",
    color: "brand",
    icon: "📊",
  },
  {
    n: "02",
    title: "Gestion des élèves",
    desc: "Inscriptions, fiches individuelles, suivi de scolarité, recherche instantanée par matricule ou nom.",
    color: "cyan",
    icon: "👥",
  },
  {
    n: "03",
    title: "Gestion financière",
    desc: "Frais, paiements, reçus officiels, affectations automatiques, surplus, annulations sécurisées.",
    color: "green",
    icon: "💰",
  },
  {
    n: "04",
    title: "Vie scolaire",
    desc: "Présences, absences, retards, statistiques par classe, notifications SMS automatiques aux parents.",
    color: "amber",
    icon: "📅",
  },
  {
    n: "05",
    title: "Bulletins & notes",
    desc: "Saisie des évaluations, génération de bulletins par cycle (primaire, collège), version imprimable officielle.",
    color: "violet",
    icon: "📝",
  },
  {
    n: "06",
    title: "Pilotage direction",
    desc: "Vue consolidée multi-établissements, exports Excel, alertes prioritaires, journal d'audit.",
    color: "orange",
    icon: "📈",
  },
];

const colorClasses: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  brand:  { border: "border-brand/50",          bg: "bg-bg-mid/80",        text: "text-brand-light",     glow: "from-brand/25" },
  cyan:   { border: "border-accent-cyan/50",    bg: "bg-bg-mid/80",        text: "text-accent-cyan",     glow: "from-accent-cyan/25" },
  green:  { border: "border-accent-green/50",   bg: "bg-bg-mid/80",        text: "text-accent-green",    glow: "from-accent-green/25" },
  amber:  { border: "border-accent-amber/50",   bg: "bg-bg-mid/80",        text: "text-accent-amber",    glow: "from-accent-amber/25" },
  violet: { border: "border-accent-violet/50",  bg: "bg-bg-mid/80",        text: "text-accent-violet",   glow: "from-accent-violet/25" },
  orange: { border: "border-accent-orange/50",  bg: "bg-bg-mid/80",        text: "text-accent-orange",   glow: "from-accent-orange/25" },
};

export default function Modules() {
  return (
    <section id="modules" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-10">
          <div className="text-sm font-semibold text-brand uppercase tracking-widest mb-4">
            6 modules métier
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Tout ce dont une école a besoin,<br />
            <span className="text-ink-mute">en un seul outil.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => {
            const c = colorClasses[m.color];
            return (
              <div
                key={m.n}
                className={`relative rounded-xl border ${c.border} ${c.bg} p-6 hover:scale-[1.02] transition-transform duration-300 overflow-hidden group`}
              >
                <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-radial ${c.glow} to-transparent blur-2xl opacity-50 group-hover:opacity-80 transition-opacity`} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{m.icon}</div>
                    <div className={`text-sm font-bold ${c.text} tracking-widest`}>
                      MODULE {m.n}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{m.title}</h3>
                  <p className="text-sm text-ink-mute leading-relaxed">{m.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
