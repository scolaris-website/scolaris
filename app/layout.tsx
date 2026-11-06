import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
 metadataBase:new URL("https://scolaris.sn"),
 title:"Scolaris V12.5 | Logiciel de gestion scolaire au Sénégal",
 description:"Gestion des élèves, inscriptions, évaluations, bulletins A4 et suivi des paiements : découvrez Scolaris V12.5 pour les établissements scolaires au Sénégal. Demandez une démonstration.",
 alternates:{canonical:"https://scolaris.sn"},
 robots:{index:true,follow:true},
 openGraph:{title:"Scolaris V12.5 — Gérez votre établissement avec clarté",description:"Inscriptions, notes, bulletins A4, frais et paiements dans une application de gestion scolaire.",url:"https://scolaris.sn",siteName:"Scolaris",locale:"fr_SN",type:"website",images:[{url:"/og-image.png",width:1281,height:723,alt:"Présentation Scolaris"}]},
 twitter:{card:"summary_large_image",title:"Scolaris V12.5",description:"La gestion scolaire, du dossier élève aux bulletins A4.",images:["/og-image.png"]},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>;}
