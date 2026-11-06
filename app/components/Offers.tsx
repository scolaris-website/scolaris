const offres=[
 {name:"Essentiel",forWhom:"Établissement qui structure ses opérations",features:["Gestion des élèves et inscriptions","Notes et bulletins A4","Suivi de base des frais scolaires"]},
 {name:"Gestion complète",forWhom:"Établissement qui veut mieux piloter",features:["Fonctionnalités Essentiel","Suivi des paiements et reçus","Accompagnement à la mise en route"],featured:true},
 {name:"Réseau / sur mesure",forWhom:"Groupe scolaire ou besoin spécifique",features:["Analyse de vos établissements","Périmètre et besoins à définir","Proposition de déploiement adaptée"]},
];
export default function Offers(){return <section id="offres" className="py-20 bg-bg-mid/40"><div className="max-w-7xl mx-auto px-6 lg:px-10">
 <div className="max-w-3xl"><p className="text-brand-light text-sm uppercase font-bold tracking-widest mb-4">Offres commerciales proposées</p><h2 className="text-3xl md:text-5xl font-bold">Une proposition adaptée à la taille de votre école.</h2><p className="text-ink-mute mt-5">Les formules ci-dessous sont des pistes commerciales, à confirmer lors du devis. Aucun tarif ni délai de déploiement n'est annoncé sans étude de votre besoin.</p></div>
 <div className="grid md:grid-cols-3 gap-5 mt-10">{offres.map(o=><article key={o.name} className={`rounded-2xl border p-7 flex flex-col ${o.featured?"bg-brand/10 border-brand/60":"bg-bg-mid border-white/10"}`}>
 <div className="text-sm text-brand-light font-semibold mb-3">{o.featured?"Recommandée pour le pilotage":"Accompagnement selon vos besoins"}</div><h3 className="text-2xl font-bold">{o.name}</h3><p className="text-sm text-ink-mute mt-2 mb-6">{o.forWhom}</p>
 <ul className="space-y-3 text-sm flex-1">{o.features.map(f=><li key={f} className="flex gap-2"><span className="text-accent-green">✓</span><span>{f}</span></li>)}</ul>
 <a href="#contact" className={`mt-8 block text-center px-5 py-3 rounded-lg font-semibold transition ${o.featured?"bg-brand hover:bg-brand-light":"border border-white/20 hover:bg-white/5"}`}>Demander un devis</a>
 </article>)}</div>
 <p className="text-xs text-ink-dim mt-5">Le périmètre final, l'assistance, les frais de mise en service et les conditions contractuelles sont définis par écrit avant signature.</p>
 </div></section>}
