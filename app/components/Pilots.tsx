export default function Pilots() {
 return <section id="pour-qui" className="py-20"><div className="max-w-7xl mx-auto px-6 lg:px-10">
 <div className="max-w-3xl"><p className="text-sm text-brand-light font-bold uppercase tracking-widest mb-4">À qui s'adresse Scolaris ?</p><h2 className="text-3xl md:text-5xl font-bold">Une solution pensée pour les décisions du terrain.</h2><p className="text-ink-mute text-lg mt-5">Nous privilégions les établissements qui veulent fiabiliser leurs données, leurs bulletins et leur gestion des frais scolaires.</p></div>
 <div className="grid md:grid-cols-3 gap-5 mt-10">
  {[["🏫","Directions d'écoles privées","Suivre les inscriptions, les résultats scolaires et les encaissements avec une vision d'ensemble."],["📚","Écoles et groupes scolaires","Organiser les classes et les évaluations du primaire au lycée, selon votre structure."],["🧾","Équipes administratives","Retrouver rapidement une fiche élève, un solde, un paiement ou un reçu."]].map(([icon,title,text])=><article key={title} className="p-7 rounded-2xl border border-white/10 bg-bg-mid"><div className="text-3xl mb-5">{icon}</div><h3 className="text-xl font-bold mb-3">{title}</h3><p className="text-sm text-ink-mute leading-relaxed">{text}</p></article>)}
 </div>
 <div className="mt-10 rounded-xl border border-accent-green/20 bg-accent-green/5 p-5 text-sm text-ink-mute">Une école fictive de démonstration permet d'illustrer le fonctionnement de Scolaris, sans exposer de données réelles d'élèves ou de familles.</div>
 </div></section>;
}
