const qas=[
 ["Scolaris convient-il au primaire, collège et lycée ?","Oui, la V12.5 prend en charge des classes et évaluations sur ces cycles. Une démonstration permet de vérifier vos règles de bulletins."],
 ["Peut-on imprimer les bulletins ?","Oui. Des modèles A4 sont disponibles pour le primaire, le collège et le lycée."],
 ["Comment se passe la mise en route ?","Nous commençons par un échange sur vos effectifs, vos procédures et vos besoins. Le calendrier et les modalités d'accompagnement sont ensuite précisés dans la proposition."],
 ["Quel est le prix de Scolaris ?","Le tarif dépend du périmètre retenu et de la taille de votre établissement. Demandez une démonstration et un devis adapté."],
 ["Les données d'élèves de la démonstration sont-elles réelles ?","Non. La démonstration commerciale peut utiliser des données fictives pour illustrer les écrans et les bulletins."],
];
export default function FAQ(){return <section id="questions" className="py-20"><div className="max-w-4xl mx-auto px-6">
 <p className="text-sm font-bold tracking-widest text-brand-light uppercase mb-4">Questions fréquentes</p><h2 className="text-3xl md:text-5xl font-bold mb-10">Les réponses avant de vous lancer.</h2>
 <div className="space-y-3">{qas.map(([q,a])=><details key={q} className="group rounded-xl border border-white/10 bg-bg-mid p-5"><summary className="cursor-pointer font-semibold list-none flex justify-between gap-4">{q}<span className="text-brand-light group-open:rotate-45 transition">+</span></summary><p className="text-ink-mute text-sm leading-relaxed mt-4">{a}</p></details>)}</div>
 </div></section>}
