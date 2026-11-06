import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const EFFECTIFS = ["Moins de 150 élèves", "150 à 500 élèves", "501 à 1 000 élèves", "Plus de 1 000 élèves"];
const BESOINS = ["Gestion scolaire complète", "Notes et bulletins", "Frais et encaissements", "Inscriptions et dossiers élèves", "Autre besoin"];
const DESTINATAIRE = "contact@scolaris.sn";

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max + 1) : "";
}
function html(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c] || c));
}
function emailValid(value: string): boolean {
  return /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value) && value.length <= 254;
}
function phoneValid(value: string): boolean {
  return /^\+?[0-9\s().-]{8,25}$/.test(value) && value.replace(/\D/g, "").length >= 8;
}
async function sendMail(apiKey: string, from: string, to: string, subject: string, content: string, htmlContent: string, replyTo?: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text: content,
      html: htmlContent,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
    signal: AbortSignal.timeout(15000),
    cache: "no-store",
  });
  if (!response.ok) {
    // Never return provider details or credentials to the browser.
    throw new Error(`E-mail provider HTTP ${response.status}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    if (!apiKey || !from) {
      return NextResponse.json(
        { message: "Le formulaire est temporairement indisponible. Contactez-nous par WhatsApp." },
        { status: 503 }
      );
    }
    if (!request.headers.get("content-type")?.includes("application/json")) {
      return NextResponse.json({ message: "Format de demande invalide." }, { status: 415 });
    }
    const raw = await request.text();
    if (raw.length > 5000) {
      return NextResponse.json({ message: "Demande trop longue." }, { status: 413 });
    }
    let data: Record<string, unknown>;
    try {
      data = JSON.parse(raw);
      if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("invalid");
    } catch {
      return NextResponse.json({ message: "Données invalides." }, { status: 400 });
    }
    // Invisible honeypot: do not send messages from obvious bots.
    if (text(data.website, 200)) {
      return NextResponse.json({ message: "Votre demande a été prise en compte." });
    }
    const nom = text(data.nom, 120);
    const ville = text(data.ville, 100);
    const effectif = text(data.effectif, 60);
    const besoin = text(data.besoin, 100);
    const email = text(data.email, 254).toLowerCase();
    const telephone = text(data.telephone, 25);

    if (!nom || nom.length > 120 || !ville || ville.length > 100 ||
        !EFFECTIFS.includes(effectif) || !BESOINS.includes(besoin) ||
        !emailValid(email) || !phoneValid(telephone)) {
      return NextResponse.json(
        { message: "Veuillez renseigner un établissement, une ville, un e-mail et un téléphone valides." },
        { status: 400 }
      );
    }

    const lines = [
      "Nouvelle demande de démonstration Scolaris V12.5",
      `Établissement : ${nom}`,
      `Ville : ${ville}`,
      `Effectif : ${effectif}`,
      `Besoin : ${besoin}`,
      `E-mail : ${email}`,
      `Téléphone : ${telephone}`,
    ];
    const details = lines.join("\n");
    await sendMail(
      apiKey, from, DESTINATAIRE,
      "Nouvelle demande de démonstration Scolaris V12.5",
      details,
      `<h2>Nouvelle demande de démonstration</h2><pre style="white-space:pre-wrap;font-family:Arial,sans-serif">${html(details)}</pre>`,
      email
    );

    // Sending acknowledgement is best-effort: an accepted lead must not appear failed.
    try {
      const acknowledgement = [
        "Bonjour,",
        "",
        `Nous avons bien reçu votre demande de démonstration Scolaris V12.5 pour ${nom}.`,
        "Notre équipe vous recontactera selon ses disponibilités.",
        "",
        "L'équipe Scolaris",
        "contact@scolaris.sn",
      ].join("\n");
      await sendMail(
        apiKey, from, email,
        "Scolaris — confirmation de votre demande",
        acknowledgement,
        `<p>Bonjour,</p><p>Nous avons bien reçu votre demande de démonstration Scolaris V12.5 pour <strong>${html(nom)}</strong>.</p><p>Notre équipe vous recontactera selon ses disponibilités.</p><p>L’équipe Scolaris<br>contact@scolaris.sn</p>`
      );
    } catch {
      // Do not log prospect details or pretend the acknowledgement was delivered.
      return NextResponse.json({ message: "Votre demande a bien été transmise à Scolaris. Le message de confirmation n'a pas pu être envoyé." });
    }
    return NextResponse.json({
      message: "Votre demande a bien été transmise à Scolaris. Un e-mail de confirmation a été envoyé à l'adresse indiquée.",
    });
  } catch {
    return NextResponse.json(
      { message: "L'envoi a échoué. Veuillez réessayer ou utiliser WhatsApp." },
      { status: 502 }
    );
  }
}
