"use client";
import { useState } from "react";
export default function CTA(){
 const [nom,setNom]=useState("");
 const [ville,setVille]=useState("");
 const [effectif,setEffectif]=useState("150 à 500 élèves");
 const [besoin,setBesoin]=useState("Gestion scolaire complète");
 const [telephone,setTelephone]=useState("");
 const email="contact@scolaris.sn";
 const message=`Bonjour, je souhaite une démonstration de Scolaris V12.5.\nÉtablissement : ${nom || "à préciser"}\nVille : ${ville || "à préciser"}\nEffectif : ${effectif}\nBesoin prioritaire : ${besoin}\nTéléphone : ${telephone || "à préciser"}`;
 const wa=`https://wa.me/221774090492?text=${encodeURIComponent(message)}`;
 const mail=`mailto:${email}?subject=${encodeURIComponent("Demande de démonstration Scolaris V12.5")}&body=${encodeURIComponent(message)}`;
 return <section id="contact" className="py-20 bg-bg-mid/40"><div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10">
  <div><p className="uppercase tracking-widest text-sm text-brand-light font-bold mb-4">Parlons de votre école</p><h2 className="text-3xl md:text-5xl font-bold leading-tight">Une démo concrète. Une offre adaptée.</h2>
   <p className="text-lg text-ink-mute mt-6">Décrivez votre établissement et nous pourrons orienter la démonstration vers vos enjeux : inscriptions, bulletins, encaissements ou pilotage.</p>
   <div className="mt-8 space-y-3 text-ink-mute text-sm"><p>✓ Échange sans engagement</p><p>✓ Présentation des écrans Scolaris V12.5</p><p>✓ Devis sur la base de vos besoins réels</p></div>
  </div>
  <div className="bg-bg-mid border border-white/15 rounded-2xl p-6 md:p-8">
   <h3 className="text-xl font-bold mb-2">Préparer ma demande</h3><p className="text-sm text-ink-mute mb-6">Ce formulaire ouvre WhatsApp ou votre messagerie : aucune donnée n'est enregistrée sur le site.</p>
   <div className="grid gap-4">
    <label className="text-sm">Nom de l'établissement<input value={nom} onChange={e=>setNom(e.target.value)} placeholder="Votre établissement" className="mt-2 block w-full rounded-lg bg-bg-deep border border-white/20 px-4 py-3 text-white"/></label>
    <label className="text-sm">Ville<input value={ville} onChange={e=>setVille(e.target.value)} placeholder="Ex. Dakar, Thiès, Rufisque…" className="mt-2 block w-full rounded-lg bg-bg-deep border border-white/20 px-4 py-3 text-white"/></label>
    <label className="text-sm">Nombre d'élèves<select value={effectif} onChange={e=>setEffectif(e.target.value)} className="mt-2 block w-full rounded-lg bg-bg-deep border border-white/20 px-4 py-3 text-white"><option>Moins de 150 élèves</option><option>150 à 500 élèves</option><option>501 à 1 000 élèves</option><option>Plus de 1 000 élèves</option></select></label>
    <label className="text-sm">Besoin prioritaire<select value={besoin} onChange={e=>setBesoin(e.target.value)} className="mt-2 block w-full rounded-lg bg-bg-deep border border-white/20 px-4 py-3 text-white"><option>Gestion scolaire complète</option><option>Notes et bulletins</option><option>Frais et encaissements</option><option>Inscriptions et dossiers élèves</option><option>Autre besoin</option></select></label>
    <label className="text-sm">Téléphone (facultatif)<input value={telephone} onChange={e=>setTelephone(e.target.value)} placeholder="+221…" className="mt-2 block w-full rounded-lg bg-bg-deep border border-white/20 px-4 py-3 text-white"/></label>
    <div className="grid sm:grid-cols-2 gap-3 mt-2"><a href={wa} target="_blank" rel="noopener noreferrer" className="bg-accent-green text-bg-deep text-center font-bold rounded-lg px-4 py-3">Envoyer via WhatsApp</a><a href={mail} className="border border-white/25 text-center font-bold rounded-lg px-4 py-3 hover:bg-white/5">Envoyer par e-mail</a></div>
   </div><p className="text-xs text-ink-dim mt-4">Vérifiez vos coordonnées avant d'envoyer votre demande. Réponse selon disponibilité.</p>
  </div>
 </div></section>;
}
