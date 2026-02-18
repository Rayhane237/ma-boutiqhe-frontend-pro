import React from 'react';
import './category.css';

const sections = [
  {
    id: 1,
     category: 'CEINTURES EN CUIR',
    image: '/belts4.jpg',
    productImage: '/belt5.jpg',
    name: 'Je suis un article',
    price: '1200,00da',
    reverse: false,
  },
  {
    id: 2,
     category: 'PORTEFEUILLES EN CUIR',
    image: '/portfeuil.4.jpg',
    productImage: '/portfeuil.5.jpg',
    name: 'Je suis un article',
    price: '800,00da',
    reverse: true,
  },
];

const CategorySection = () => {
  return (
    <div className="category-sections">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`cs-row ${section.reverse ? 'cs-reverse' : ''}`}
        >
          {/* Left: lifestyle image with category title */}
          <div className="cs-hero">
            <img src={section.image} alt={section.category} className="cs-hero-img" />
            <div className="cs-hero-overlay" />
            <h2 className="cs-category-title">{section.category}</h2>
          </div>

          {/* Right: product card */}
          <div className="cs-product">
            <div className="cs-product-img-wrapper">
              <img src={section.productImage} alt={section.name} className="cs-product-img" />
            </div>
            <div className="cs-product-info">
              <span className="cs-product-name">{section.name}</span>
              <span className="cs-product-price">{section.price}</span>
            </div>
            <button className="cs-add-btn">Ajouter au panier</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;