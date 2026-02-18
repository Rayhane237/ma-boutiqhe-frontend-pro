
import Nav from '../nav/Nav'
import React, { useState } from 'react';
import './laBoutique.css';
import Footer from '../FOOTER/footer';

const allProducts = [
  { id: 1,  name: 'Je suis un article', price: '400,00da', image: '/bag1.jpg',  badge: false,    category: 'Accessoires' },
  { id: 2,  name: 'Je suis un article', price: '400,00da', image: '/bag2.jpg',  badge: true,     category: 'Accessoires' },
  { id: 3,  name: 'Je suis un article', price: '400,00da', image: '/bag3.jpg',  badge: false,    category: 'Accessoires' },
  { id: 4,  name: 'Je suis un article', price: '400,00da', image: '/bag4.jpg',  badge: true,     category: 'Accessoires' },
  { id: 5,  name: 'Je suis un article', price: '150,00da', image: '/bag5.jpg',  badge: false,    category: 'Accessoires' },
  { id: 6,  name: 'Je suis un article', price: '150,00da', image: '/bag6.jpg',  badge: false,    category: 'Accessoires' },
  { id: 7,  name: 'Je suis un article', price: '150,00da', image: '/bag7.jpg',  badge: true,     category: 'Meilleures ventes' },
  { id: 8,  name: 'Je suis un article', price: '150,00da', image: '/bag8.jpg',  badge: false,    category: 'Accessoires' },
  { id: 9,  name: 'Je suis un article', price: '100,00da', image: '/bag9.jpg',  badge: false,    category: 'Portefeuilles en cuir' },
  { id: 10, name: 'Je suis un article', price: '100,00da', image: '/bag10.jpg', badge: false,    category: 'Portefeuilles en cuir' },
  { id: 11, name: 'Je suis un article', price: '100,00da', image: '/bag11.jpg', badge: false,    category: 'Portefeuilles en cuir' },
  { id: 12, name: 'Je suis un article', price: '100,00da', image: '/bag14.jpg', badge: false,    category: 'Portefeuilles en cuir' },
  { id: 13, name: 'Je suis un article', price: '500,00da',  image: '/bag13.jpg', badge: true,     category: 'Ceintures en cuir' },
  
];

const categories = ['Tout', 'Accessoires', 'Portefeuilles en cuir', 'Ceintures en cuir', 'Meilleures ventes'];
const INITIAL_COUNT = 8;
const LOAD_MORE = 8;

const LaBoutique = () => {
  const [activeCategory, setActiveCategory] = useState('Tout');
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [openFilters, setOpenFilters] = useState({ categorie: true, prix: false, modele: false, taille: false });

  const toggleFilter = (key) => {
    setOpenFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filtered = activeCategory === 'Tout'
    ? allProducts
    : activeCategory === 'Meilleures ventes'
    ? allProducts.filter((p) => p.badge)
    : allProducts.filter((p) => p.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_COUNT);
  };

  return (

    <div className="lb-wrapper">
      <Nav />
      {/* Page title */}
      <h1 className="lb-title">LA BOUTIQUE</h1>

      <div className="lb-layout">
        {/* ── Sidebar ── */}
        <aside className="lb-sidebar">

          {/* Catégorie */}
          <div className="lb-filter-group">
            <div className="lb-filter-header" onClick={() => toggleFilter('categorie')}>
              <span className="lb-filter-label">Catégorie</span>
              <span className="lb-filter-toggle">{openFilters.categorie ? '—' : '+'}</span>
            </div>
            <div className="lb-filter-divider" />
            {openFilters.categorie && (
              <ul className="lb-filter-list">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    className={`lb-filter-item ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Prix */}
          <div className="lb-filter-group">
            <div className="lb-filter-header" onClick={() => toggleFilter('prix')}>
              <span className="lb-filter-label">Prix</span>
              <span className="lb-filter-toggle">{openFilters.prix ? '—' : '+'}</span>
            </div>
            <div className="lb-filter-divider" />
          </div>

          {/* Modèle */}
          <div className="lb-filter-group">
            <div className="lb-filter-header" onClick={() => toggleFilter('modele')}>
              <span className="lb-filter-label">Modèle</span>
              <span className="lb-filter-toggle">{openFilters.modele ? '—' : '+'}</span>
            </div>
            <div className="lb-filter-divider" />
          </div>

          {/* Taille */}
          <div className="lb-filter-group">
            <div className="lb-filter-header" onClick={() => toggleFilter('taille')}>
              <span className="lb-filter-label">Taille</span>
              <span className="lb-filter-toggle">{openFilters.taille ? '—' : '+'}</span>
            </div>
            <div className="lb-filter-divider" />
          </div>

        </aside>

        {/* ── Product grid ── */}
        <div className="lb-content">
          <div className="lb-grid">
            {visible.map((product) => (
              <div key={product.id} className="lb-card">
                {product.badge && <div className="lb-badge">Meilleure vente</div>}
                <div className="lb-img-wrapper">
                  <img src={product.image} alt={product.name} className="lb-img" />
                  <div className="lb-hover-overlay">
                    <span className="lb-apercu">Aperçu rapide</span>
                  </div>
                </div>
                <div className="lb-info">
                  <span className="lb-name">{product.name}</span>
                  <span className="lb-price">{product.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Voir plus */}
          {hasMore && (
            <div className="lb-voir-plus-wrapper">
              <button
                className="lb-voir-plus"
                onClick={() => setVisibleCount((v) => v + LOAD_MORE)}
              >
                Voir plus
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LaBoutique;