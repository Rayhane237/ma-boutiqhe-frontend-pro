import React from 'react';
import './notreHistoire.css';
import Nav from "../nav/Nav";
import Footer from '../FOOTER/footer';

const NotreHistoire = () => {
  return (
    <div className="nh-wrapper">
      <Nav />

      {/* Page title */}
      <h1 className="nh-title">NOTRE HISTOIRE</h1>
     <div>

   
      {/* Section 1 — La Marque (text left, image right) */}
      <div className="nh-section">
        <div className="nh-text-side">
          <h2 className="nh-section-title">LA MARQUE</h2>
          <div className="nh-divider" />
          <p className="nh-paragraph">
            Adeline est née d'une passion profonde pour le cuir artisanal et l'élégance
            intemporelle. Fondée en 2010 dans le cœur de Paris, notre maison a toujours
            placé la qualité et le savoir-faire au centre de chaque création.
          </p>
          <p className="nh-paragraph">
            Chaque pièce que nous concevons est le fruit d'un travail minutieux, alliant
            traditions ancestrales et design contemporain. Nous croyons que la beauté
            réside dans les détails, et c'est pourquoi chaque couture, chaque finition
            est pensée avec soin pour vous offrir une expérience unique.
          </p>
        </div>
        <div className="nh-image-side">
          <img src="/history3.jpg" alt="La Marque" className="nh-img" />
        </div>
      </div>

      {/* Section 2 — Les Créatrices (image left, text right) */}
      <div className="nh-section">
        <div className="nh-image-side">
          <img src="/creation2.jpg" alt="Les Créatrices" className="nh-img" />
        </div>
        <div className="nh-text-side nh-text-center">
          <h2 className="nh-section-title">LES CRÉATRICES</h2>
          <div className="nh-divider" />
          <p className="nh-paragraph">
            Derrière Adeline se trouvent deux sœurs passionnées, Marie et Léa, qui ont
            grandi entourées de cuir et d'artisanat dans l'atelier familial de leur père.
            Dès leur plus jeune âge, elles ont appris les gestes précis et la patience
            nécessaires pour transformer une simple peau en un objet d'exception.
          </p>
          <p className="nh-paragraph">
            Aujourd'hui, elles perpétuent cet héritage avec fierté, en insufflant à
            chaque collection leur vision moderne et leur amour du beau travail bien fait.
            Adeline, c'est leur histoire, leur passion, et leur promesse de vous offrir
            le meilleur de l'artisanat français.
          </p>
        </div>
      </div>
    </div>
      <Footer />

    </div>
  );
};

export default NotreHistoire;