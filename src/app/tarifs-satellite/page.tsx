"use client";

/**
 * Page Tarifs Internet par Satellite
 * Présente les 3 forfaits (GO 50, GO 100, GO 200) avec bouton Commander
 * qui redirige vers WhatsApp via le flow /commander du site.
 */

import Link from "next/link";
import { motion } from "framer-motion";

// Forfaits Satellite
const plans = [
  {
    id: "go50",
    name: "GO 50",
    price: "299",
    priceLabel: "Dhs HT / mois",
    quota: "50 Go",
    speed: "20 Mb/s",
    badge: null,
    highlight: false,
    features: [
      "50 Go prioritaires",
      "Jusqu'à 20 Mb/s",
      "Support 24/7",
      "Équipement fourni",
    ],
  },
  {
    id: "go100",
    name: "GO 100",
    price: "Sur devis",
    priceLabel: "HT / mois",
    quota: "100 Go",
    speed: "30 Mb/s",
    badge: "Populaire",
    highlight: true,
    features: [
      "100 Go prioritaires",
      "Jusqu'à 30 Mb/s",
      "Support 24/7",
      "Équipement fourni",
      "Optimisation bande passante",
    ],
  },
  {
    id: "go200",
    name: "GO 200",
    price: "699",
    priceLabel: "Dhs HT / mois",
    quota: "200 Go",
    speed: "50 Mb/s",
    badge: "Premium",
    highlight: false,
    features: [
      "200 Go prioritaires",
      "Jusqu'à 50 Mb/s",
      "Support 24/7",
      "Équipement fourni",
      "Optimisation bande passante",
      "Maintenance préventive",
    ],
  },
];

// Génère l'URL WhatsApp pour la commande d'un forfait
function waOrder(planName: string, price: string) {
  const msg =
    `*Commande Internet Satellite - Qonixs*%0A%0A` +
    `Bonjour, je souhaite commander le forfait *${planName}*%0A` +
    `Tarif : ${price} ${price === "Sur devis" ? "" : "Dhs HT/mois"}%0A%0A` +
    `Merci de me confirmer les modalités et l'installation.`;
  return `https://wa.me/212660248290?text=${msg}`;
}

export default function TarifsSatellitePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-dark text-white py-16 relative overflow-hidden">
        {/* Antenne satellite décorative */}
        <div className="absolute right-0 top-0 w-96 h-96 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="1.5">
            <circle cx="100" cy="100" r="80" />
            <circle cx="100" cy="100" r="60" />
            <circle cx="100" cy="100" r="40" />
            <circle cx="100" cy="100" r="6" fill="white" />
            <line x1="100" y1="20" x2="100" y2="180" />
            <line x1="20" y1="100" x2="180" y2="100" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-sm font-dm text-gray-400 mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">Tarifs Satellite</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-syne font-bold text-4xl sm:text-5xl mb-4"
          >
            Internet par <span className="text-primary">Satellite</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 font-dm text-lg max-w-2xl"
          >
            Haut débit partout au Maroc, même dans les zones non couvertes par la fibre.
            Installation clé en main et support technique 24/7.
          </motion.p>
        </div>
      </section>

      {/* Bandeau photos satellite */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-0">
        <div className="grid grid-cols-3 gap-3 h-48 rounded-2xl overflow-hidden">
          <div className="relative col-span-1 overflow-hidden rounded-xl">
            <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&fit=crop&q=80" alt="Antenne satellite" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-dark/20"/>
          </div>
          <div className="relative col-span-1 overflow-hidden rounded-xl">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&fit=crop&q=80" alt="Infrastructure réseau" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-dark/20"/>
          </div>
          <div className="relative col-span-1 overflow-hidden rounded-xl">
            <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&fit=crop&q=80" alt="Support technique" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-dark/20"/>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-dark text-white border-2 border-primary shadow-xl md:-translate-y-4"
                  : "bg-white text-dark border border-gray-200"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-dm font-bold uppercase tracking-wider ${
                  plan.highlight ? "bg-primary text-white" : "bg-sky-50 text-primary"
                }`}>
                  {plan.badge}
                </span>
              )}

              {/* Header */}
              <div className="text-center mb-6 pb-6 border-b border-gray-200/20">
                <h3 className="font-syne font-bold text-2xl mb-2">{plan.name}</h3>
                <div className="mt-4">
                  <span className={`font-syne font-bold ${plan.price === "Sur devis" ? "text-3xl" : "text-5xl"}`}>
                    {plan.price}
                  </span>
                  {plan.price !== "Sur devis" && (
                    <span className={`font-dm text-sm ml-1 ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                      Dhs
                    </span>
                  )}
                </div>
                <p className={`text-sm font-dm mt-1 ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.price === "Sur devis" ? plan.priceLabel : "HT / mois"}
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className={`text-center rounded-lg py-3 ${plan.highlight ? "bg-white/10" : "bg-gray-50"}`}>
                  <div className="font-syne font-bold text-lg">{plan.quota}</div>
                  <div className={`text-xs font-dm ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>Quota</div>
                </div>
                <div className={`text-center rounded-lg py-3 ${plan.highlight ? "bg-white/10" : "bg-gray-50"}`}>
                  <div className="font-syne font-bold text-lg">{plan.speed}</div>
                  <div className={`text-xs font-dm ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>Débit max</div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm font-dm">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className={plan.highlight ? "text-gray-200" : "text-gray-600"}>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Commander button */}
              <a
                href={waOrder(plan.name, plan.price)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-xl font-dm font-medium text-sm transition-colors ${
                  plan.highlight
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-dark text-white hover:bg-primary"
                }`}
              >
                Commander
              </a>
            </motion.div>
          ))}
        </div>

        {/* Équipement + Installation — notes tarifaires */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Équipement */}
          <div className="bg-sky-50 border border-sky-100 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10c0-3.31 2.69-6 6-6" />
                <path d="M4 14a10 10 0 0010 10" />
                <circle cx="18" cy="18" r="3" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-syne font-bold text-dark text-lg mb-1">Équipement satellite</div>
              <p className="font-dm text-sm text-gray-600">
                Antenne + modem satellite :{" "}
                <span className="font-bold text-primary">3 780 DH TTC</span> — achat unique.
              </p>
            </div>
          </div>

          {/* Installation */}
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-syne font-bold text-dark text-lg mb-1">Frais d'installation</div>
              <p className="font-dm text-sm text-gray-600">
                <span className="font-bold text-amber-700">Non inclus</span> dans l'équipement.
                Les frais sont calculés selon la distance du site et les services additionnels.
                Contactez-nous pour un devis personnalisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Qonixs Satellite */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-syne font-bold text-3xl text-dark text-center mb-10">
            Pourquoi choisir notre solution satellite ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Installation clé en main",
                desc: "Nos techniciens installent l'antenne et configurent le système partout au Maroc.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
              },
              {
                title: "Support technique 24/7",
                desc: "Une équipe disponible en permanence pour assurer la continuité de votre connexion.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 01-3.46 0" />
                  </svg>
                ),
              },
              {
                title: "Couverture totale",
                desc: "Accès internet haut débit même dans les zones rurales, montagneuses ou isolées.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-sky-50 text-primary flex items-center justify-center mb-4">
                  <div className="w-7 h-7">{item.icon}</div>
                </div>
                <h3 className="font-syne font-bold text-lg text-dark mb-2">{item.title}</h3>
                <p className="font-dm text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="font-syne font-bold text-3xl sm:text-4xl text-dark mb-4">
          Prêt à vous connecter ?
        </h2>
        <p className="font-dm text-gray-500 text-lg mb-8">
          Contactez-nous pour étudier votre besoin et planifier votre installation.
        </p>
        <a
          href="https://wa.me/212660248290?text=Bonjour%20Qonixs%2C%20je%20souhaite%20des%20informations%20sur%20l%27Internet%20Satellite."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-dm font-medium hover:bg-primary-dark transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
          </svg>
          Nous contacter
        </a>
      </section>
    </div>
  );
}
