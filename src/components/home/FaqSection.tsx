"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Quelle est la différence entre WiFi 5 et WiFi 6 ?",
    a: "Le WiFi 6 (802.11ax) offre une vitesse jusqu'à 3× plus rapide que le WiFi 5, avec une meilleure gestion des appareils multiples et une latence réduite. Idéal pour les hôtels, résidences et bureaux avec beaucoup d'utilisateurs connectés.",
  },
  {
    q: "Livrez-vous à Casablanca, Rabat et Marrakech ?",
    a: "Oui ! Qonixs by SettaTech livre partout au Maroc en 24-48h : Casablanca, Rabat, Marrakech, Agadir, Fès, Settat et toutes les autres villes. Contactez-nous par WhatsApp pour un suivi personnalisé.",
  },
  {
    q: "Quel routeur WiFi choisir pour un hôtel au Maroc ?",
    a: "Pour les hôtels, nous recommandons nos points d'accès Ruijie Reyee (RAP2266) avec portail captif, ou les systèmes Mesh TP-Link Deco X60 pour une couverture maximale. Nous proposons des devis gratuits adaptés à votre établissement.",
  },
  {
    q: "Proposez-vous l'internet par satellite pour les zones rurales ?",
    a: "Oui, SettaTech distribue et installe des solutions d'internet par satellite pour les zones sans couverture ADSL ou fibre. Consultez notre page Tarifs Satellite ou contactez-nous pour un devis.",
  },
  {
    q: "Quelle garantie sur vos produits TP-Link et Ruijie ?",
    a: "Tous nos produits sont 100% authentiques avec garantie officielle constructeur de 2 ans. Retour ou échange possible sous 14 jours. Support technique gratuit inclus 7j/7.",
  },
  {
    q: "Comment obtenir un devis pour une installation réseau ?",
    a: "Contactez-nous par WhatsApp au +212 660 248 290 ou par email à contact@qonixs.com. Notre équipe vous répondra rapidement et préparera un devis gratuit et personnalisé pour votre projet.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="font-syne font-bold text-3xl text-dark mb-3">Questions fréquentes</h2>
        <p className="font-dm text-gray-400 text-sm max-w-xl mx-auto">
          Tout ce que vous devez savoir sur nos produits, services et livraisons au Maroc.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-100 overflow-hidden hover:border-primary/30 transition-colors"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span className="font-syne font-bold text-dark text-sm pr-4">{faq.q}</span>
              <span
                className={`shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-transform duration-200 ${
                  open === i ? "rotate-180 border-primary text-primary" : ""
                }`}
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            {open === i && (
              <div className="px-5 pb-4">
                <p className="font-dm text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="font-dm text-sm text-gray-400 mb-3">Vous n'avez pas trouvé votre réponse ?</p>
        <a
          href="https://wa.me/212660248290?text=Bonjour%2C%20j%27ai%20une%20question%20sur%20vos%20produits%20Qonixs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-xl font-dm font-medium text-sm hover:bg-green-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Poser votre question sur WhatsApp
        </a>
      </div>
    </section>
  );
}
