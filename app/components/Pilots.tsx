export default function Pilots() {
  return (
    <section id="pilots" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-green/30 bg-accent-green/10 text-sm font-medium text-accent-green mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            Déjà en production
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Deux écoles pilotes utilisent<br />
            <span className="text-accent-green">déjà Scolaris avec succès.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PilotCard
            name="École El Hadji Ibrahima NIASS"
            location="Dakar, Sénégal"
            badge="Pilote N°1"
          />
          <PilotCard
            name="École Vision Bilingue"
            location="Dakar, Sénégal"
            badge="Pilote N°2"
          />
        </div>

        <div className="mt-10 text-center">
          <p className="text-ink-mute max-w-2xl mx-auto leading-relaxed">
            Notre ambition : <strong className="text-white">20 écoles en 2027</strong>,
            <strong className="text-white"> 40 en 2028</strong>, puis l'expansion
            vers l'Afrique de l'Ouest francophone.
          </p>
        </div>
      </div>
    </section>
  );
}

function PilotCard({ name, location, badge }: { name: string; location: string; badge: string }) {
  return (
    <div className="relative rounded-2xl border border-white/15 bg-bg-mid/90 p-8 hover:border-accent-green/40 transition group">
      <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-accent-green/15 border border-accent-green/30 text-xs font-semibold text-accent-green">
        {badge}
      </div>
      <div className="w-14 h-14 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
        🏫
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <div className="text-sm text-ink-mute">{location}</div>
      <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-2 text-xs text-ink-dim">
        <svg className="w-4 h-4 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Plateforme déployée et utilisée au quotidien
      </div>
    </div>
  );
}
