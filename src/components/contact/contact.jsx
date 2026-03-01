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
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    // remove error as user types
    if (value.trim() !== '') {
      setErrors(prev => {
        const updated = { ...prev }
        delete updated[name]
        return updated
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.prenom.trim())  newErrors.prenom  = 'Le prénom est requis'
    if (!form.nom.trim())     newErrors.nom     = 'Le nom est requis'
    if (!form.email.trim())   newErrors.email   = "L'email est requis"
    if (!form.objet.trim())   newErrors.objet   = "L'objet est requis"
    if (!form.message.trim()) newErrors.message = 'Le message est requis'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return  // stops here and shows errors

    try {
      const res = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.prenom,
          lastName:  form.nom,
          email:     form.email,
          subject:   form.objet,
          message:   form.message,
        })
      })

      const data = await res.json()

      if (res.ok) {
        setSubmitted(true)
        setForm({ prenom: '', nom: '', email: '', objet: '', message: '' })
        setErrors({})
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Erreur de connexion au serveur')
    }
  }

  return (
    <div className="contact-wrapper">
      <Nav />

      <h1 className="contact-title">CONTACT</h1>

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

      <section className="contact-requetes">
        <h2 className="contact-requetes-title">Requêtes</h2>
        <p className="contact-requetes-sub">
          Pour des questions sur nos articles et services envoyez un message à
          l'aide du formulaire de contact ci-dessous
        </p>

        {/* ← form tag with onSubmit */}
        <form className="contact-form" onSubmit={handleSubmit}>
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
              {errors.prenom && <p className="contact-error">{errors.prenom}</p>}
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
              {errors.nom && <p className="contact-error">{errors.nom}</p>}
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
            />
            {errors.email && <p className="contact-error">{errors.email}</p>}
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
            {errors.objet && <p className="contact-error">{errors.objet}</p>}
          </div>

          <div className="contact-form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <p className="contact-error">{errors.message}</p>}
          </div>

          {/* ← type="submit" instead of onClick */}
          <button type="submit" className="contact-btn">
            Envoyer
          </button>

          {submitted && (
            <p className="contact-success">
              Merci, votre message a bien été envoyé !
            </p>
          )}
        </form>
      </section>

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


