import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Nav.css';
import { IoIosMenu } from 'react-icons/io';
import { RiCloseLargeFill } from 'react-icons/ri';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import CartDrawer from '../cart/CartDrawer'

const Nav = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
  const [abonnerOpen, setAbonnerOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { totalItems } = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < lastScrollY.current || currentY < 10) {
        setVisible(true)
      } else {
        setVisible(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'La boutique', path: '/laBoutique' },
    { label: 'Notre histoire', path: '/notreHistoire' },
    { label: 'Notre savoir-faire', path: '/notreSavoirFaire' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleAbonner = () => setAbonnerOpen(!abonnerOpen);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  const handleSubscribe = () => {
    if (!email) {
      showToast('Veuillez entrer un email valide !', 'error');
      return;
    }
    showToast(`Merci ! Nous avons reçu votre email: ${email}`, 'success');
    setEmail('');
  };

  return (
    <>
      <header className={`navbar-wrapper ${visible ? '' : 'navbar-hidden'}`}>

        <div className="navbar-top">
          <div className="navbar-socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
          </div>

          <div className="navbar-logo" onClick={() => navigate('/')}>adeline.</div>

          <div className="navbar-actions">
            
            <button className="btn-panier" onClick={() => setCartOpen(true)}>
               Panier ({totalItems})
            </button>
           
              {cartOpen && <CartDrawer onClose={() => setCartOpen(false)} />} 
          </div>

          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RiCloseLargeFill size={22} /> : <IoIosMenu size={26} />}
          </div>
        </div>

        <div className="navbar-divider" />

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <span
              key={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => { navigate(link.path); setMenuOpen(false); }}
            >
              {link.label}
            </span>
          ))}
          <button className="btn-abonner-mobile" onClick={handleAbonner}>
            S'abonner
          </button>
        </nav>

      </header>

      <div className={`ab-bottom ${abonnerOpen ? 'show' : ''}`}>
        <div className="ab-header">
          <h3>Abonnez-vous</h3>
          <RiCloseLargeFill className="close-icon" size={18} onClick={handleAbonner} />
        </div>
        <div className="ab-content">
          <h3>Abonnez-vous aux nouvelles d'adeline.</h3>
          <div className="input-subscribe">
            <label htmlFor="email">Email :</label>
            <input
              id="email"
              type="email"
              placeholder="Entrez votre email"
              className="ab-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="ab-btn" onClick={handleSubscribe}>S'abonner</button>
          </div>
        </div>
      </div>

      {toast.show && (
        <div className={`toast ${toast.type}`}>{toast.message}</div>
      )}
    </>
  );
};

export default Nav;