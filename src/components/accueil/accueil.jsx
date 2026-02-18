
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './accueil.css';

const Accueil = () => {
  const navigate = useNavigate();

  return (
    <div className="accueil-wrapper">
      <div className="hero">
        <img src="/boutique2.jpg" alt="Hero" className="hero-img" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">DONNER LE TON</h1>
          <button className="hero-btn" onClick={() => navigate('/laBoutique')}>
            Acheter
          </button>
        </div>
    
     
      </div>

  </div>
 
  );
};

export default Accueil;