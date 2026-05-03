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
              <SocialLink href="#" label="LinkedIn" path="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              <SocialLink href="#" label="Facebook" path="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
