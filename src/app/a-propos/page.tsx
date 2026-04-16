"use client";

/**
 * Page À propos — Qonixs by SettaTech
 * Présente SettaTech comme société mère, Qonixs comme service dédié réseau
 * Optimisée SEO : mots-clés Maroc, SettaTech, solutions connectivité
 */

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Installations au Maroc" },
  { value: "50+", label: "Hôtels & résidences connectés" },
  { value: "7j/7", label: "Support technique" },
  { value: "2019", label: "Année de création" },
];

const values = [
  {
    title: "Expertise locale",
    desc: "Connaissance approfondie du marché marocain, des contraintes terrain et des besoins spécifiques des entreprises et résidences au Maroc.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    title: "Solutions complètes",
    desc: "De la fourniture des équipements réseau à l'installation, la configuration et la maintenance — un seul interlocuteur pour tous vos besoins.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Matériel certifié",
    desc: "Distributeur officiel TP-Link, Tapo, Ruijie et Omada au Maroc. Garantie constructeur 2 ans sur tous les produits.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Support 7j/7",
    desc: "Équipe technique disponible tous les jours. Interventions rapides sur site à Settat, Casablanca, Rabat, Marrakech et ailleurs au Maroc.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
  },
];

const services = [
  { name: "Wi-Fi Hospitality", desc: "Hôtels, riads & résidences au Maroc", href: "/services" },
  { name: "Internet par Satellite", desc: "Couverture haut débit partout au Maroc", href: "/tarifs-satellite" },
  { name: "Vidéosurveillance IP", desc: "Sécurité 24h/24 pour entreprises", href: "/services" },
  { name: "Infrastructure Réseau", desc: "LAN, VLAN, fibre optique", href: "/services" },
  { name: "Wi-Fi Collectif", desc: "Résidences, cités & campus", href: "/services" },
  { name: "Installation & Maintenance", desc: "Service sur site partout au Maroc", href: "/services" },
];

export default function AProposPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-dark text-white py-20 relative overflow-hidden">
        {/* Motif décoratif */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-white" style={{ transform: "translate(200px, -200px)" }} />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full border border-white" style={{ transform: "translate(150px, -100px)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-sm font-dm text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">À propos</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {/* Badge SettaTech */}
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-dm mb-6">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                Un service de <strong className="ml-1">SettaTech</strong>
              </span>

              <h1 className="font-syne font-bold text-4xl sm:text-5xl mb-6 leading-tight">
                Qonixs,<br />
                <span className="text-primary">Solutions Réseau</span><br />
                au Maroc
              </h1>
              <p className="font-dm text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                Qonixs est la marque commerciale dédiée aux équipements et services réseau de <strong className="text-white">SettaTech</strong>, entreprise marocaine spécialisée en technologies de l'information basée à Settat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="px-6 py-3 bg-primary text-white rounded-xl font-dm font-medium hover:bg-sky-600 transition-colors text-sm">
                  Nos services
                </Link>
                <a href="https://wa.me/212660248290?text=Bonjour%20SettaTech%2C%20je%20souhaite%20des%20informations%20sur%20Qonixs." target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-dm font-medium hover:bg-white/20 transition-colors text-sm">
                  Nous contacter
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="font-syne font-bold text-3xl text-primary mb-1">{stat.value}</div>
                  <div className="font-dm text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SettaTech — présentation */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/services/service-network.jpg"
              alt="Infrastructure réseau SettaTech Maroc — câblage et déploiement réseau"
              className="w-full h-72 object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-sky-50 text-primary rounded-full text-xs font-dm font-medium mb-4">
              Société mère
            </span>
            <h2 className="font-syne font-bold text-3xl text-dark mb-4">
              SettaTech — L'IT au service du Maroc
            </h2>
            <p className="font-dm text-gray-600 leading-relaxed mb-4">
              <strong>SettaTech</strong> est une entreprise marocaine de technologies de l'information fondée à <strong>Settat</strong>. Nous accompagnons les entreprises, hôtels, résidences et institutions dans leur transformation numérique.
            </p>
            <p className="font-dm text-gray-600 leading-relaxed mb-6">
              <strong>Qonixs</strong> est notre service dédié aux solutions de connectivité : vente d'équipements réseau certifiés, déploiement Wi-Fi, internet par satellite et vidéosurveillance IP. Notre expertise couvre l'ensemble du territoire marocain, des grandes villes aux zones les plus reculées.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Basée à Settat, Maroc",
                "Interventions sur tout le territoire marocain",
                "Partenaire officiel TP-Link & Ruijie",
                "Équipe certifiée et expérimentée",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5 font-dm text-sm text-gray-700">
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qonixs — services */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-syne font-bold text-3xl text-dark mb-3">
              Les services <span className="text-primary">Qonixs</span> au Maroc
            </h2>
            <p className="font-dm text-gray-500 max-w-2xl mx-auto">
              De la connectivité résidentielle aux solutions d'entreprise, Qonixs by SettaTech couvre tous vos besoins en internet et réseau au Maroc.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.a
                key={service.name}
                href={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-primary hover:shadow-md transition-all"
              >
                <h3 className="font-syne font-bold text-dark mb-1 group-hover:text-primary transition-colors">{service.name}</h3>
                <p className="font-dm text-sm text-gray-500">{service.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-syne font-bold text-3xl text-dark mb-3">
            Pourquoi choisir <span className="text-primary">SettaTech / Qonixs</span> ?
          </h2>
          <p className="font-dm text-gray-500 max-w-xl mx-auto">
            Notre engagement envers la qualité, la fiabilité et le service client fait de nous votre partenaire technologique de référence au Maroc.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:border-primary hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-sky-50 text-primary flex items-center justify-center">
                <div className="w-6 h-6">{val.icon}</div>
              </div>
              <h3 className="font-syne font-bold text-dark mb-2">{val.title}</h3>
              <p className="font-dm text-sm text-gray-500 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Zone couverte */}
      <section className="bg-primary/5 border-y border-primary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-syne font-bold text-2xl text-dark mb-4">
            Nous intervenons partout au <span className="text-primary">Maroc</span>
          </h2>
          <p className="font-dm text-gray-500 mb-8 max-w-2xl mx-auto">
            Nos équipes se déplacent dans toutes les régions du Maroc pour les installations, la maintenance et le support technique.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Settat", "Casablanca", "Rabat", "Marrakech", "Agadir",
              "Fès", "Tanger", "Meknès", "Oujda", "Laâyoune",
              "Béni Mellal", "El Jadida", "Khouribga", "Zones rurales",
            ].map((city) => (
              <span
                key={city}
                className="px-4 py-2 bg-white border border-primary/20 rounded-full text-sm font-dm text-dark hover:border-primary hover:text-primary transition-colors"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="font-syne font-bold text-3xl sm:text-4xl text-dark mb-4">
          Prêt à connecter votre projet ?
        </h2>
        <p className="font-dm text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
          Contactez SettaTech / Qonixs pour un devis gratuit et personnalisé. Nous étudions votre besoin et proposons la solution la mieux adaptée à votre budget et votre contexte.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/212660248290?text=Bonjour%20SettaTech%20%2F%20Qonixs%2C%20je%20souhaite%20un%20devis%20pour%20mes%20besoins%20en%20r%C3%A9seau."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-dm font-medium hover:bg-sky-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
            </svg>
            Demander un devis
          </a>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 text-dark rounded-xl font-dm font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Voir nos services
          </Link>
        </div>
      </section>
    </div>
  );
}
