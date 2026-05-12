import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://scolaris.sn"),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
  title: "Scolaris — Plateforme de gestion scolaire du Sénégal",
  description:
    "Scolaris centralise la gestion des élèves, des notes, des paiements et des bulletins pour les écoles privées du Sénégal. Une plateforme numérique complète, en français et en arabe.",
  keywords: [
    "gestion scolaire", "Sénégal", "école privée", "bulletin",
    "logiciel école", "SaaS éducation", "Scolaris", "Senegalsoft",
  ],
  authors: [{ name: "Groupe Senegalsoft" }],
  openGraph: {
    title: "Scolaris — Plateforme de gestion scolaire du Sénégal",
    description:
      "Piloter, structurer et moderniser l'école. La plateforme tout-en-un pour les établissements privés sénégalais.",
    url: "https://scolaris.sn",
    siteName: "Scolaris",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scolaris — Gestion scolaire du Sénégal",
    description: "Piloter, structurer et moderniser l'école.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
