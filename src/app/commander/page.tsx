"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/products";
import { getProductSVG } from "@/components/svg/ProductSVGs";

export default function OrderPage() {
  const { items, getTotal, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({ nom: "", adresse: "", telephone: "" });
  const [sending, setSending] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom.trim() || !form.adresse.trim() || !form.telephone.trim()) return;

    setSending(true);

    const total = getTotal();
    const shipping = total >= 500 ? 0 : 49;
    const grandTotal = total + shipping;

    // Build WhatsApp message
    let message = `*Nouvelle commande - Qonixs*\n\n`;
    message += `*Client:* ${form.nom}\n`;
    message += `*Téléphone:* ${form.telephone}\n`;
    message += `*Adresse:* ${form.adresse}\n\n`;
    message += `*--- Articles ---*\n`;

    items.forEach((item) => {
      message += `• ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}\n`;
    });

    message += `\n*Sous-total:* ${formatPrice(total)}\n`;
    message += `*Livraison:* ${shipping === 0 ? "Gratuite" : formatPrice(shipping)}\n`;
    message += `*Total:* ${formatPrice(grandTotal)}\n`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/212660248290?text=${encoded}`;

    window.open(whatsappUrl, "_blank");

    // Clear cart after sending
    setTimeout(() => {
      clearCart();
      setSending(false);
    }, 1000);
  };

  if (!mounted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-gray-400 font-dm">Chargement...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <svg className="w-16 h-16 mx-auto text-gray-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
        </svg>
        <p className="text-gray-400 font-dm mb-4">Votre panier est vide</p>
        <Link href="/" className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-dm text-sm hover:bg-primary-dark transition-colors">
          Voir les produits
        </Link>
      </div>
    );
  }

  const total = getTotal();
  const shipping = total >= 500 ? 0 : 49;
  const grandTotal = total + shipping;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm font-dm text-gray-400 mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
        <span>/</span>
        <Link href="/panier" className="hover:text-primary transition-colors">Panier</Link>
        <span>/</span>
        <span className="text-dark font-medium">Commander</span>
      </nav>

      <h1 className="font-syne font-bold text-3xl text-dark mb-8">Finaliser la commande</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="nom" className="block text-sm font-dm font-medium text-dark mb-1.5">
                Nom complet *
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                required
                placeholder="Votre nom et prénom"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-dm text-sm"
              />
            </div>

            <div>
              <label htmlFor="telephone" className="block text-sm font-dm font-medium text-dark mb-1.5">
                Numéro de téléphone *
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={form.telephone}
                onChange={handleChange}
                required
                placeholder="06XXXXXXXX"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-dm text-sm"
              />
            </div>

            <div>
              <label htmlFor="adresse" className="block text-sm font-dm font-medium text-dark mb-1.5">
                Adresse de livraison *
              </label>
              <textarea
                id="adresse"
                name="adresse"
                value={form.adresse}
                onChange={(e) => setForm({ ...form, adresse: e.target.value })}
                required
                rows={3}
                placeholder="Adresse complète, ville, code postal..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-dm text-sm resize-none"
              />
            </div>

            {/* Order Summary inside form */}
            <div className="bg-gray-50 rounded-xl p-4 space-y-2">
              <h3 className="font-syne font-bold text-sm text-dark mb-3">Récapitulatif</h3>
              {items.map((item) => {
                const SVGComponent = getProductSVG(item.image);
                return (
                  <div key={item.id} className="flex items-center justify-between text-sm font-dm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white rounded flex items-center justify-center shrink-0">
                        <SVGComponent className="w-6 h-5" />
                      </div>
                      <span className="text-gray-600">{item.name} x{item.quantity}</span>
                    </div>
                    <span className="text-dark font-medium">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                );
              })}
              <div className="pt-2 mt-2 border-t border-gray-200 space-y-1">
                <div className="flex justify-between text-sm font-dm">
                  <span className="text-gray-500">Sous-total</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm font-dm">
                  <span className="text-gray-500">Livraison</span>
                  <span className={shipping === 0 ? "text-green-600" : ""}>{shipping === 0 ? "Gratuite" : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between font-syne font-bold text-dark pt-1">
                  <span>Total</span>
                  <span>{formatPrice(grandTotal)}</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={sending || !form.nom.trim() || !form.telephone.trim() || !form.adresse.trim()}
              className="w-full py-3.5 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl font-dm font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {sending ? "Envoi en cours..." : "Envoyer la commande via WhatsApp"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
