import React from 'react';
import './notreSavoirFaire.css';
import Footer from '../FOOTER/footer';
import Nav from '../nav/Nav';

const sections = [
  {
    id: 1,
    subtitle: 'SÉLECTION',
    text: `Nous travaillons exclusivement avec des tanneries françaises et italiennes reconnues pour la qualité exceptionnelle de leurs cuirs. Chaque peau est sélectionnée à la main, inspectée pour sa texture, sa souplesse et sa durabilité. Seuls les matériaux répondant à nos exigences les plus strictes entrent dans nos ateliers.`,
    image: '/savoir1.jpg',
    reverse: false,
  },
  {
    id: 2,
    subtitle: 'CRÉATION',
    text: `Tout commence par une idée, un croquis tracé à la main. Nos créatrices imaginent chaque pièce avec soin, en tenant compte des tendances actuelles tout en restant fidèles à l'élégance intemporelle qui caractérise la maison Adeline. Chaque ligne, chaque courbe est pensée pour sublimer le cuir.`,
    image: '/savoir4.jpg',
    reverse: true,
  },
  {
    id: 3,
    subtitle: 'ARTISANAT',
    text: `Dans notre atelier parisien, des artisans passionnés donnent vie à chaque création. Chaque pièce est découpée, assemblée et cousue à la main avec une précision absolue. Nous refusons la production en série — chaque sac, chaque portefeuille, chaque ceinture est unique et porte en lui l'âme de celui qui l'a fabriqué.`,
    image: '/savoir3.jpg',
    reverse: false,
  },
];

const NotreSavoirFaire = () => {
  return (
    <div className="nsf-wrapper">
       
       <Nav />
      {/* Page title */}
      <h1 className="nsf-title">LE PROCESSUS</h1>

      {/* Sections */}
      <div className="nsf-sections">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`nsf-section ${section.reverse ? 'nsf-reverse' : ''}`}
          >
            {/* Image side */}
            <div className="nsf-image">
              <img src={section.image} alt={section.subtitle} className="nsf-img" />
            </div>

            {/* Text side */}
            <div className="nsf-text">
              <h2 className="nsf-subtitle">{section.subtitle}</h2>
              <div className="nsf-divider" />
              <p className="nsf-paragraph">{section.text}</p>
            </div>
          </div>
        ))}
      </div>
       
       <Footer />
    </div>
  );
};

export default NotreSavoirFaire;