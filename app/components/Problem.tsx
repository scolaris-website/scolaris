const issues=[
 ["Dossiers dispersés","Retrouver une fiche élève prend du temps lorsque les informations sont réparties entre cahiers et fichiers."],
 ["Bulletins fastidieux","Calculer les moyennes, préparer les classements et éditer les bulletins demande de la rigueur."],
 ["Suivi financier difficile","Relier frais, encaissements et reçus peut mobiliser plusieurs outils."],
 ["Visibilité limitée","La direction a besoin d'une lecture claire de l'activité scolaire et administrative."],
];
export default function Problem(){return <section id="enjeux" className="py-20"><div className="max-w-7xl mx-auto px-6 lg:px-10">
 <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-widest text-accent-orange mb-4">Vos enjeux</p><h2 className="text-3xl md:text-5xl font-bold">Une école ne devrait pas perdre du temps à chercher ses informations.</h2><p className="text-ink-mute text-lg mt-5">La gestion quotidienne exige des données fiables et accessibles, pas une multiplication des tableaux et des documents.</p></div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">{issues.map(([title,desc],i)=><article key={title} className="border border-white/10 rounded-xl p-6 bg-bg-mid"><span className="text-xs text-accent-orange font-bold">0{i+1}</span><h3 className="font-bold text-xl my-3">{title}</h3><p className="text-sm text-ink-mute leading-relaxed">{desc}</p></article>)}</div>
 </div></section>}
