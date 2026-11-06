"use client";

import { FormEvent, useState } from "react";

type LeadForm = {
  nom: string;
  ville: string;
  effectif: string;
  besoin: string;
  email: string;
  telephone: string;
  website: string;
};
const initial: LeadForm = {
  nom: "",
  ville: "",
  effectif: "150 à 500 élèves",
  besoin: "Gestion scolaire complète",
  email: "",
  telephone: "",
  website: "",
};

export default function CTA() {
  const [form, setForm] = useState<LeadForm>(initial);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; text: string } | null>(null);

  function change<K extends keyof LeadForm>(key: K, value: LeadForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const whatsappText = [
    "Bonjour, je souhaite une démonstration de Scolaris V12.5.",
    `Établissement : ${form.nom || "à préciser"}`,
    `Ville : ${form.ville || "à préciser"}`,
    `Effectif : ${form.effectif}`,
    `Besoin : ${form.besoin}`,
    `E-mail : ${form.email || "à préciser"}`,
    `Téléphone : ${form.telephone || "à préciser"}`,
  ].join("\n");
  const whatsappLink = `https://wa.me/221774090492?text=${encodeURIComponent(whatsappText)}`;
  const control = "mt-2 block w-full rounded-lg bg-bg-deep border border-white/20 px-4 py-3 text-white";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    setFeedback(null);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data: { message?: string } = await response.json();
      if (!response.ok) throw new Error(data.message || "Envoi impossible. Réessayez.");
      setFeedback({ ok: true, text: data.message || "Votre demande a été reçue." });
      setForm(initial);
    } catch (error) {
      setFeedback({
        ok: false,
        text: error instanceof Error ? error.message : "Une erreur est survenue.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-bg-mid/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10">
        <div>
          <p className="uppercase tracking-widest text-sm text-brand-light font-bold mb-4">Parlons de votre école</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">Une démo concrète. Une offre adaptée.</h2>
          <p className="text-lg text-ink-mute mt-6">Décrivez votre établissement pour préparer une démonstration centrée sur les inscriptions, les bulletins, les encaissements ou le pilotage.</p>
          <div className="mt-8 space-y-3 text-ink-mute text-sm">
            <p>✓ Échange sans engagement</p>
            <p>✓ Présentation de Scolaris V12.5</p>
            <p>✓ Devis selon les besoins de votre établissement</p>
          </div>
        </div>
        <div className="bg-bg-mid border border-white/15 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-bold mb-2">Demander une démonstration</h3>
          <p className="text-sm text-ink-mute mb-6">Votre demande est envoyée directement à notre équipe, sans ouvrir de logiciel de messagerie.</p>
          <form onSubmit={submit} className="grid gap-4">
            <label className="text-sm">Nom de l&apos;établissement *
              <input required maxLength={120} autoComplete="organization" value={form.nom} onChange={(e) => change("nom", e.target.value)} placeholder="Votre établissement" className={control} />
            </label>
            <label className="text-sm">Ville *
              <input required maxLength={100} autoComplete="address-level2" value={form.ville} onChange={(e) => change("ville", e.target.value)} placeholder="Ex. Dakar, Thiès, Rufisque…" className={control} />
            </label>
            <label className="text-sm">Nombre d&apos;élèves
              <select value={form.effectif} onChange={(e) => change("effectif", e.target.value)} className={control}>
                <option>Moins de 150 élèves</option><option>150 à 500 élèves</option><option>501 à 1 000 élèves</option><option>Plus de 1 000 élèves</option>
              </select>
            </label>
            <label className="text-sm">Besoin prioritaire
              <select value={form.besoin} onChange={(e) => change("besoin", e.target.value)} className={control}>
                <option>Gestion scolaire complète</option><option>Notes et bulletins</option><option>Frais et encaissements</option><option>Inscriptions et dossiers élèves</option><option>Autre besoin</option>
              </select>
            </label>
            <label className="text-sm">Adresse e-mail professionnelle *
              <input required type="email" maxLength={254} autoComplete="email" value={form.email} onChange={(e) => change("email", e.target.value)} placeholder="direction@ecole.sn" className={control} />
            </label>
            <label className="text-sm">Téléphone / WhatsApp *
              <input required type="tel" minLength={8} maxLength={25} autoComplete="tel" value={form.telephone} onChange={(e) => change("telephone", e.target.value)} placeholder="+221 77 000 00 00" className={control} />
            </label>
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label>Site internet (laisser vide)
                <input tabIndex={-1} autoComplete="off" name="website" value={form.website} onChange={(e) => change("website", e.target.value)} />
              </label>
            </div>
            <p className="text-xs text-ink-mute">
              Les informations transmises servent uniquement à traiter votre demande commerciale et à vous recontacter. Elles sont communiquées à l&apos;équipe Scolaris et au prestataire d&apos;envoi d&apos;e-mails. Ne renseignez aucune donnée personnelle d&apos;élève.
            </p>
            <button type="submit" disabled={loading} className="bg-accent-green text-bg-deep font-bold rounded-lg px-4 py-3 disabled:opacity-60">
              {loading ? "Envoi en cours…" : "Envoyer ma demande"}
            </button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="border border-white/25 text-center font-bold rounded-lg px-4 py-3 hover:bg-white/5">
              Contacter Scolaris par WhatsApp
            </a>
            {feedback && (
              <p role="status" aria-live="polite" className={`text-sm rounded-lg px-4 py-3 ${feedback.ok ? "bg-green-950 text-green-200" : "bg-red-950 text-red-200"}`}>
                {feedback.text}
              </p>
            )}
          </form>
          <p className="text-xs text-ink-dim mt-4">* Champs obligatoires. Un e-mail de confirmation est prévu après réception de votre demande.</p>
        </div>
      </div>
    </section>
  );
}
