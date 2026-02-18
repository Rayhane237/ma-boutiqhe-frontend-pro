import { useState } from 'react';
import React from 'react';
import Nav from '../nav/Nav';
import Footer from '../FOOTER/footer';
import './contact.css';


const boutiques = [
  { id: 1, address: '15 rue du château', city: '75001 Paris, France', phone: '01 23 45 67 89' },
  { id: 2, address: '15 rue du château', city: '75001 Paris, France', phone: '01 23 45 67 89' },
  { id: 3, address: '15 rue du château', city: '75001 Paris, France', phone: '01 23 45 67 89' },
  { id: 4, address: '15 rue du château', city: '75001 Paris, France', phone: '01 23 45 67 89' },
  { id: 5, address: '15 rue du château', city: '75001 Paris, France', phone: '01 23 45 67 89' },
  { id: 6, address: '15 rue du château', city: '75001 Paris, France', phone: '01 23 45 67 89' },
];

const Contact = () => {
  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', objet: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.email) return;
    setSubmitted(true);
  };

  return (
    <div className="contact-wrapper">
    
        <Nav />
      {/* ── PAGE TITLE ── */}
      <h1 className="contact-title">CONTACT</h1>

      {/* ── SERVICE CLIENT ── */}
      <section className="contact-service">
        <p className="contact-section-heading">SERVICE CLIENT</p>
        <div className="contact-divider" />

        <div className="contact-info-grid">
          <div className="contact-info-col">
            <h3 className="contact-info-label">Magasin phare</h3>
            <p>15 rue du château</p>
            <p>75001 Paris, France</p>
          </div>
          <div className="contact-info-col">
            <h3 className="contact-info-label">Horaires d'ouverture</h3>
            <p>Lundi - Vendredi</p>
            <p>9h00 - 19h00</p>
          </div>
          <div className="contact-info-col">
            <h3 className="contact-info-label">Contactez-nous</h3>
            <p>01 23 45 67 89</p>
            <p>info@monsite.fr</p>
          </div>
        </div>
      </section>

      {/* ── REQUÊTES FORM ── */}
      <section className="contact-requetes">
        <h2 className="contact-requetes-title">Requêtes</h2>
        <p className="contact-requetes-sub">
          Pour des questions sur nos articles et services envoyez un message à<br />
          l'aide du formulaire de contact ci-dessous
        </p>

        <div className="contact-form">
          <div className="contact-form-row">
            <div className="contact-form-field">
              <label htmlFor="prenom">Prénom</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={form.prenom}
                onChange={handleChange}
              />
            </div>
            <div className="contact-form-field">
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={form.nom}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact-form-field">
            <label htmlFor="email">E-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="objet">Objet</label>
            <input
              type="text"
              id="objet"
              name="objet"
              value={form.objet}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button className="contact-btn" onClick={handleSubmit}>
            Envoyer
          </button>

          {submitted && (
            <p className="contact-success">
              Merci, votre message a bien été envoyé !
            </p>
          )}
        </div>
      </section>

      {/* ── NOS BOUTIQUES ── */}
      <section className="contact-boutiques">
        <p className="contact-section-heading">NOS BOUTIQUES</p>
        <div className="contact-divider" />

        <div className="contact-boutiques-grid">
          {boutiques.map((b) => (
            <div key={b.id} className="contact-boutique-item">
              <p>{b.address}</p>
              <p>{b.city}</p>
              <p className="contact-boutique-phone">{b.phone}</p>
            </div>
          ))}
        </div>
      </section>
        
        <Footer />
  
    </div>
  );
};

export default Contact;
