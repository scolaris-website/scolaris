/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // ─────────────────────────────────────────────────────────
      // Vidéo démo Scolaris (3 min) — pointe vers la version courante
      // Pour mettre à jour la vidéo : changer uniquement l'ID YouTube
      // ci-dessous et redéployer (push git → Vercel auto-deploy).
      // ─────────────────────────────────────────────────────────
      {
        source: "/demo",
        destination: "https://youtu.be/ZdHgSiq4kqc",
        permanent: false, // 307 — important pour pouvoir changer plus tard
      },
      {
        source: "/video",
        destination: "https://youtu.be/ZdHgSiq4kqc",
        permanent: false,
      },

      // ─────────────────────────────────────────────────────────
      // Raccourcis pratiques pour la com / signatures email
      // ─────────────────────────────────────────────────────────
      {
        source: "/contact",
        destination: "mailto:contact@scolaris.sn",
        permanent: false,
      },
      {
        source: "/whatsapp",
        destination: "https://wa.me/221774090492",
        permanent: false,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/company/scolaris-senegal",
        permanent: false,
      },
      {
        source: "/facebook",
        destination: "https://web.facebook.com/ScolarisSenegal",
        permanent: false,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/@scolaris_senegal",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
