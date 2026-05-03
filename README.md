# Scolaris — Landing page

Site vitrine officiel de **Scolaris** (scolaris.sn).

Stack : **Next.js 14** + **TypeScript** + **Tailwind CSS**.

---

## Installation locale

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

---

## Déploiement sur Vercel (gratuit)

### Méthode 1 — via GitHub (recommandée)

1. Crée un dépôt GitHub `scolaris-website`
2. Push ce dossier dessus :

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TON_USER/scolaris-website.git
git push -u origin main
```

3. Va sur https://vercel.com → Sign in with GitHub
4. Clique **"Add New Project"** → choisis `scolaris-website`
5. Clique **Deploy** (Vercel détecte Next.js automatiquement)
6. En 60 secondes, le site est live à `scolaris.vercel.app`

### Méthode 2 — Vercel CLI

```bash
npm i -g vercel
vercel
```

Suis les instructions, le déploiement se fait en 1 minute.

---

## Connecter le domaine `scolaris.sn`

Une fois le domaine actif chez hosting.fr :

1. Sur Vercel → Project → Settings → **Domains** → ajoute `scolaris.sn` et `www.scolaris.sn`
2. Vercel te donne 2 enregistrements DNS à configurer
3. Sur hosting.fr → DNS → Entrées DNS, ajoute :
   ```
   Type    Nom     Valeur
   A       @       76.76.21.21
   CNAME   www     cname.vercel-dns.com.
   ```
4. Attends 5–30 min, le site est live sur `https://scolaris.sn` avec HTTPS auto.

---

## Structure

```
scolaris-website/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── Modules.tsx
│   │   ├── Pilots.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── logo.svg
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## À personnaliser avant publication

- [ ] Numéro WhatsApp dans `app/components/CTA.tsx` (actuellement `+221000000000`)
- [ ] Liens LinkedIn / Facebook dans `app/components/Footer.tsx`
- [ ] Vérifier l'email `contact@scolaris.sn` (à créer sur Zoho Mail Free)
- [ ] Optionnel : ajouter une vraie capture d'écran du dashboard à la place du mockup CSS du Hero

---

© 2026 Groupe Senegalsoft — Tous droits réservés
