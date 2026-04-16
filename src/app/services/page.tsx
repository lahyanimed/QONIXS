"use client";

/**
 * Services page — présente les services IT Manager de Qonixs :
 * Wi-Fi Hospitality, Internet Collectif, Vidéosurveillance IP,
 * Internet Satellite, Infrastructure Réseau, Installation & Maintenance.
 */

import Link from "next/link";
import { motion } from "framer-motion";

// Liste des services avec icône SVG inline (palette bleu/gris/blanc)
const services = [
  {
    title: "Wi-Fi Hospitality",
    desc: "Solutions Wi-Fi rapides et fiables conçues pour les hôtels, riads et résidences. Portail captif, gestion des invités, couverture totale.",
    photo: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&fit=crop&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0114 0" /><path d="M1.42 9a16 16 0 0121.16 0" />
        <path d="M8.53 16.11a6 6 0 016.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
  },
  {
    title: "Internet Collectif",
    desc: "Connectivité partagée stable et performante pour résidences Deluxe, cités étudiantes et ensembles résidentiels.",
    photo: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&fit=crop&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Vidéosurveillance IP",
    desc: "Caméras haute définition, enregistreurs NVR, vision nocturne et accès à distance pour une sécurité avancée 24/7.",
    photo: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&fit=crop&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Internet par Satellite",
    desc: "Couverture haut débit partout au Maroc, y compris en zones isolées ou rurales. Installation clé en main et équipement fourni.",
    photo: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&fit=crop&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10c0-3.31 2.69-6 6-6" /><path d="M4 14a10 10 0 0010 10" />
        <circle cx="18" cy="18" r="3" /><path d="M12 2l3 3-3 3M2 12l3-3 3 3" />
      </svg>
    ),
  },
  {
    title: "Infrastructure Réseau",
    desc: "Conception, câblage et déploiement d'infrastructures robustes : LAN, VLAN, fibre, switches manageables, architecture d'entreprise.",
    photo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&fit=crop&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="7" rx="1" /><rect x="2" y="14" width="20" height="7" rx="1" />
        <line x1="6" y1="6.5" x2="6.01" y2="6.5" /><line x1="6" y1="17.5" x2="6.01" y2="17.5" />
      </svg>
    ),
  },
  {
    title: "Installation & Maintenance",
    desc: "Service professionnel sur site, diagnostics préventifs, interventions rapides et contrats de maintenance sur mesure.",
    photo: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&fit=crop&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm font-dm text-gray-400 mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-syne font-bold text-4xl sm:text-5xl mb-4"
          >
            Nos <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 font-dm text-lg max-w-2xl"
          >
            IT Manager spécialisé en solutions de connectivité et d'hospitalité.
            Qonixs conçoit, déploie et maintient votre infrastructure réseau de bout en bout.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Photo illustrative */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.photo}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark/30" />
                {/* Icône en overlay */}
                <div className="absolute bottom-3 left-4 w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6">{service.icon}</div>
                </div>
              </div>
              {/* Contenu */}
              <div className="p-5">
                <h3 className="font-syne font-bold text-lg text-dark mb-2">{service.title}</h3>
                <p className="font-dm text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Contact */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-syne font-bold text-3xl sm:text-4xl text-dark mb-4">
            Besoin d'un projet sur mesure ?
          </h2>
          <p className="font-dm text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour obtenir un devis gratuit et personnalisé adapté à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a
              href="https://wa.me/212660248290?text=Bonjour%20Qonixs%2C%20je%20souhaite%20un%20devis%20pour%20vos%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-dm font-medium hover:bg-primary-dark transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              Demander un devis
            </a>
            <a
              href="tel:0660248290"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-dark rounded-xl font-dm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              0660248290
            </a>
          </div>

          {/* Coordonnées */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm font-dm text-gray-500 pt-10 border-t border-gray-200">
            <div>
              <div className="font-syne font-bold text-dark mb-1">Adresse</div>
              BD QADI AYAD N° 52<br />SMALAA, Settat
            </div>
            <div>
              <div className="font-syne font-bold text-dark mb-1">Email</div>
              contact@qonixs.com
            </div>
            <div>
              <div className="font-syne font-bold text-dark mb-1">WhatsApp</div>
              0660248290
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
