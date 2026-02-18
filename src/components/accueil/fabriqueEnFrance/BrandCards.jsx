import React from 'react';
import { useNavigate } from 'react-router-dom';
import './brandCards.css';

const cards = [
  {
    id: 1,
    subtitle: 'Entreprise familiale',
    title: 'LA MARQUE',
    link: 'Lire notre histoire',
    path: '/notreHistoire',
    image: '/entreprise.jpg',
  },
  {
    id: 2,
    subtitle: 'Créations fait-main',
    title: 'LES PRODUITS',
    link: 'À propos du cuir',
    path: '/notreSavoirFaire',
    image: '/creation2.jpg',
  },
  {
    id: 3,
    subtitle: 'Fabriqué en',
    title: 'FRANCE',
    link: 'En savoir plus',
    path: '/apropos',
    image: '/favrique-en-france.jpg',
  },
];

const BrandCards = () => {
  const navigate = useNavigate();

  return (
    <section className="brand-cards">
      {cards.map((card) => (
        <div key={card.id} className="bc-card">
          <img src={card.image} alt={card.title} className="bc-img" />
          <div className="bc-overlay" />
          <div className="bc-content">
            <span className="bc-subtitle">{card.subtitle}</span>
            <h2 className="bc-title">{card.title}</h2>
            <div className="bc-divider" />
            <span
              className="bc-link"
              onClick={() => navigate(card.path)}
            >
              {card.link}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BrandCards;