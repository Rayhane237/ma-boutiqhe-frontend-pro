import React, { useState } from 'react';
import './boutiqueItems.css';

const products = [
  { id: 1,  name: 'Je suis un article', price: '400,00da', image: '/bag1.jpg' },
  { id: 2,  name: 'Je suis un article', price: '250,00da', image: '/bag2.jpg' },
  { id: 3,  name: 'Je suis un article', price: '300,00da', image: '/bag3.jpg' },
  { id: 4,  name: 'Je suis un article', price: '150,00da', image: '/bag4.jpg' },
  { id: 5,  name: 'Je suis un article', price: '350,00da', image: '/bag5.jpg' },
];

const VISIBLE = 4;

const BoutiqueItems = () => {
  const [start, setStart] = useState(0);

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(products.length - VISIBLE, s + 1));

  const visible = products.slice(start, start + VISIBLE);

  return (
    <section className="boutique-items">
      <h2 className="bi-title">MEILLEURES VENTES</h2>
      <div className="bi-divider" />

      <div className="bi-carousel">
        <button
          className="bi-arrow bi-arrow-left"
          onClick={prev}
          disabled={start === 0}
          aria-label="Précédent"
        >
          &#8249;
        </button>

        <div className="bi-grid">
          {visible.map((product) => (
            <div key={product.id} className="bi-card">
              <div className="bi-badge">Meilleure vente</div>
              <div className="bi-img-wrapper">
                <img src={product.image} alt={product.name} className="bi-img" />
                <div className="bi-hover-overlay">
                  <span className="bi-apercu">Aperçu rapide</span>
                </div>
              </div>
              <div className="bi-info">
                <span className="bi-name">{product.name}</span>
                <span className="bi-price">{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          className="bi-arrow bi-arrow-right"
          onClick={next}
          disabled={start >= products.length - VISIBLE}
          aria-label="Suivant"
        >
          &#8250;
        </button>
      </div>
      <button className="bi-view-all">Voir tous les articles</button>
    </section>
  );
};

export default BoutiqueItems;