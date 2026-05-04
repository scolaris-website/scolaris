export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-brand/10 via-bg-mid to-bg-deep p-10 md:p-16 overflow-hidden">
          {/* Halo */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent-orange/20 blur-3xl" />

          <div className="relative text-center">
            <div className="text-sm font-semibold text-accent-orange uppercase tracking-widest mb-4">
              Discutons de votre établissement
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Prêt à moderniser<br />
              votre école ?
            </h2>
            <p className="text-lg text-ink-mute max-w-2xl mx-auto mb-10">
              Demandez une démo gratuite. Nous installons Scolaris dans votre
              établissement en moins d'une semaine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@scolaris.sn?subject=Demande%20de%20d%C3%A9mo%20Scolaris"
                className="px-8 py-4 rounded-lg bg-brand hover:bg-brand-light text-white font-semibold transition shadow-xl shadow-brand/30"
              >
                contact@scolaris.sn
              </a>
              <a
                href="https://wa.me/221774090492"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg border border-white/15 hover:border-accent-green/50 hover:bg-accent-green/5 text-white font-semibold transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 text-accent-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <p className="mt-8 text-sm text-ink-dim">
              Réponse sous 24h • Démo en visio ou sur place à Dakar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
