import React, { useState } from 'react';
import './instagramSection.css';

const photos = [
  { id: 1,  image: '/insta1.jpg' },
  { id: 2,  image: '/insta2.jpg' },
  { id: 3,  image: '/insta13.jpg' },
  { id: 4,  image: '/insta4.jpg' },
  { id: 5,  image: '/insta5.jpg' },
  { id: 6,  image: '/insta6.jpg' },
  { id: 7,  image: '/insta7.jpg' },
  { id: 8,  image: '/insta14.jpg' },
  { id: 9,  image: '/insta9.jpg' },
  { id: 10, image: '/portfeuil3.jpg' },
    { id: 11, image: '/insta11.jpg' },
    { id: 12, image: '/insta1.jpg' },

];

const VISIBLE = 5;

const InstagramSection = () => {
  const [start, setStart] = useState(0);

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(photos.length - VISIBLE, s + 1));

  const visible = photos.slice(start, start + VISIBLE);

  return (
    <section className="instagram-section">
      {/* Header */}
      <div className="ig-header">
        <h2 className="ig-title">
          SUIVEZ<br />ADELINE SUR INSTAGRAM
        </h2>
        
        <a>
          @boutiqueadeline
        </a>
      </div>

      {/* Carousel */}
      <div className="ig-carousel">
        <button
          className="ig-arrow ig-arrow-left"
          onClick={prev}
          disabled={start === 0}
          aria-label="Précédent"
        >
          &#8249;
        </button>

        <div className="ig-grid">
          {visible.map((photo) => (
            <div key={photo.id} className="ig-item">
              <img src={photo.image} alt={`Instagram ${photo.id}`} className="ig-img" />
              <div className="ig-overlay">
                <span className="ig-icon">♡</span>
              </div>
            </div>
          ))}
        </div>

        <button
          className="ig-arrow ig-arrow-right"
          onClick={next}
          disabled={start >= photos.length - VISIBLE}
          aria-label="Suivant"
        >
          &#8250;
        </button>

 
        </div>

               {/* Trust badges */}
<div className="ig-badges">
  <div className="ig-badge">
    <span className="ig-badge-divider">—</span>
    <span className="ig-badge-text">Livraison à l'étranger</span>
  </div>
  <div className="ig-badge">
    <span className="ig-badge-divider">—</span>
    <span className="ig-badge-text">Retour dans les 30 jours</span>
  </div>
  <div className="ig-badge">
    <span className="ig-badge-divider">—</span>
    <span className="ig-badge-text">Garantie 12 mois</span>
  </div>
</div>
    </section>

    )
};

export default InstagramSection;