import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email) return;
    alert(`Email envoyé : ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer">

      {/* Logo */}
      <div className="footer-logo" onClick={() => navigate('/')}>
        adeline.
      </div>

      {/* Nav links */}
      <div className="footer-col">
        <span className="footer-link" onClick={() => navigate('/')}>Accueil</span>
        <span className="footer-link" onClick={() => navigate('/laBoutique')}>La boutique</span>
        <span className="footer-link" onClick={() => navigate('/notreHistoire')}>Notre histoire</span>
        <span className="footer-link" onClick={() => navigate('/notreSavoirFaire')}>Notre savoir-faire</span>
        <span className="footer-link" onClick={() => navigate('/contact')}>Contact</span>
      </div>

      {/* Info links */}
      <div className="footer-col">
        <span className="footer-link">FAQ</span>
        <span className="footer-link">Livraison et retours</span>
        <span className="footer-link">Politique de la boutique</span>
        <span className="footer-link">Modes de paiement</span>
        <span className="footer-link">Nos boutiques</span>
      </div>

      {/* Social links */}
      <div className="footer-col">
        <a href="#" className="footer-link">Facebook</a>
        <a href="#" className="footer-link">Instagram</a>
        <a href="#" className="footer-link">Twitter</a>
        <a href="#" className="footer-link">Pinterest</a>
      </div>

      {/* Contact form */}
      <div className="footer-contact">
        <h3 className="footer-contact-title">CONTACT</h3>
        <div className="footer-input-wrapper">
          <label className="footer-label">E-mail *</label>
          <input
            type="email"
            className="footer-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
          />
        </div>
        <button className="footer-btn" onClick={handleSubmit}>
          Envoyer
        </button>
      </div>

    </footer>
  );
};

export default Footer;