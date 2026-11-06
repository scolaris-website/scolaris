const modules = [
 {icon:"👥",title:"Élèves et inscriptions",desc:"Dossiers, matricules, responsables, inscriptions et suivi du parcours scolaire."},
 {icon:"📝",title:"Notes et évaluations",desc:"Saisie des résultats, périodes d'évaluation, moyennes et classements par classe."},
 {icon:"📄",title:"Bulletins A4",desc:"Bulletins imprimables pour le primaire, le collège et le lycée, avec moyennes et rangs."},
 {icon:"💰",title:"Frais et paiements",desc:"Échéances, encaissements, affectation des paiements et reçus imprimables."},
 {icon:"📅",title:"Vie scolaire",desc:"Enregistrement des présences, absences et retards pour mieux suivre les élèves."},
 {icon:"📊",title:"Pilotage",desc:"Indicateurs d'activité, consultation des données et suivi administratif de l'établissement."},
];
export default function Modules(){
 return <section id="fonctionnalites" className="py-20 bg-bg-mid/40"><div className="max-w-7xl mx-auto px-6 lg:px-10">
  <div className="max-w-3xl mb-10"><div className="text-sm font-bold text-brand-light uppercase tracking-widest mb-4">Fonctionnalités V12.5</div>
  <h2 className="text-3xl md:text-5xl font-bold">Les tâches essentielles de votre école, réunies.</h2>
  <p className="mt-5 text-ink-mute text-lg">Une présentation centrée sur les fonctionnalités vérifiées dans l'application, sans promesse technique non confirmée.</p></div>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{modules.map(m=><article key={m.title} className="rounded-2xl border border-white/10 bg-bg-mid p-7 hover:border-brand/40 transition"><span className="text-3xl" aria-hidden="true">{m.icon}</span><h3 className="text-xl font-bold mt-5 mb-3">{m.title}</h3><p className="text-sm leading-relaxed text-ink-mute">{m.desc}</p></article>)}</div>
  <a href="#contact" className="inline-block mt-9 text-brand-light font-semibold hover:text-white">Voir ces fonctions lors d’une démonstration →</a>
 </div></section>;
}
