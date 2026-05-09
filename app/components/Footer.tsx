export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-deep py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src="/logo.svg" alt="Scolaris" className="h-10 mb-4" />
            <p className="text-sm text-ink-mute leading-relaxed max-w-md">
              Scolaris est édité par <strong className="text-white">Groupe Senegalsoft</strong>.
              Plateforme de gestion scolaire conçue au Sénégal, pour le Sénégal.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink href="https://www.linkedin.com/company/scolaris-senegal/" label="LinkedIn" path="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              <SocialLink href="https://www.youtube.com/@scolaris_senegal" label="YouTube" path="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              <SocialLink href="https://wa.me/221774090492" label="WhatsApp" path="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white mb-4">Produit</div>
            <ul className="space-y-2 text-sm text-ink-mute">
              <li><a href="#solution" className="hover:text-white transition">Présentation</a></li>
              <li><a href="#modules" className="hover:text-white transition">Modules</a></li>
              <li><a href="#pilots" className="hover:text-white transition">Écoles pilotes</a></li>
              <li><a href="#contact" className="hover:text-white transition">Démo gratuite</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-ink-mute">
              <li>
                <a href="mailto:contact@scolaris.sn" className="hover:text-white transition">
                  contact@scolaris.sn
                </a>
              </li>
              <li>Rufisque, Sénégal</li>
              <li>Lun–Ven · 9h–18h</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-dim">
          <div>© {new Date().getFullYear()} Groupe Senegalsoft · Tous droits réservés</div>
          <div className="flex items-center gap-2">
            <span>Conçu et développé au</span>
            <span className="flex items-center gap-1 font-semibold text-white">
              <span className="w-4 h-3 flex flex-col">
                <span className="flex-1 bg-[#00853F]" />
                <span className="flex-1 bg-[#FDEF42]" />
                <span className="flex-1 bg-[#E31B23]" />
              </span>
              Sénégal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, path }: { href: string; label: string; path: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 rounded-full border border-white/10 hover:border-brand/50 hover:bg-brand/10 flex items-center justify-center transition group"
    >
      <svg className="w-4 h-4 text-ink-mute group-hover:text-brand-light transition" fill="currentColor" viewBox="0 0 24 24">
        <path d={path} />
      </svg>
    </a>
  );
}
