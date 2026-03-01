import { useState, useEffect } from 'react'
import './quick.css'

export default function QuickViewModal({ productId, onClose }) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedColor, setSelectedColor] = useState(null)
  const [quantity, setQty] = useState(1)
  const [wishlisted, setWishlisted] = useState(false)
  const [added, setAdded] = useState(false)
  const [openSection, setOpenSection] = useState('details')

  // Fetch product by ID (dynamic param)
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/api/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setSelectedColor(data.colors?.[0] || null)
        setLoading(false)
      })
  }, [productId])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  function handleAddToCart() {
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  function toggleSection(key) {
    setOpenSection(prev => prev === key ? null : key)
  }

  const accordions = [
    { key: 'details',  label: "Details de l'article",     content: product?.details },
    { key: 'exchange', label: 'Echange et remboursement',  content: product?.returnPolicy },
    { key: 'shipping', label: 'Politique de livraison',    content: product?.shippingPolicy },
  ]

  return (
    <div
      className="qv-overlay"
      onClick={(e) => e.target.classList.contains('qv-overlay') && onClose()}
    >
      <div className="qv-modal">

        {/* Close button */}
        <button className="qv-close" onClick={onClose}>x</button>

        {/* Loading state */}
        {loading && (
          <div className="qv-loading">
            <span>Chargement...</span>
          </div>
        )}

        {/* Content */}
        {!loading && product && (
          <>
            {/* Left: Image */}
            <div className="qv-images">
              {product.badge && (
                <span className="qv-badge">{product.badge}</span>
              )}
              <div className="qv-img-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="qv-main-img"
                />
              </div>

              {/* Color dots under image */}
              {product.colors?.length > 0 && (
                <div className="qv-thumbs">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      className={`qv-thumb-dot ${selectedColor?.name === c.name ? 'active' : ''}`}
                      style={{ background: c.hex }}
                      onClick={() => setSelectedColor(c)}
                      title={c.name}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right: Info */}
            <div className="qv-info">
              <p className="qv-brand">adeline.</p>
              <h2 className="qv-name">{product.name}</h2>
              <p className="qv-sku">SKU : {product.sku}</p>

              <div className="qv-price-row">
                <span className="qv-price">{product.price} DA</span>
              
              </div>

              <div className="qv-divider" />

              {/* Color selector */}
              {product.colors?.length > 0 && (
                <div className="qv-option">
                  
                  <div className="qv-swatches">
                   
                  </div>
                </div>
              )}

              {/* Quantity + Add to cart + Wishlist */}
              <div className="qv-actions">
                <div className="qv-qty">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQty(q => q + 1)}>+</button>
                </div>

                <button
                  className={`qv-btn-cart ${added ? 'added' : ''}`}
                  onClick={handleAddToCart}
                >
                  {added ? 'Ajoute !' : 'Ajouter au panier'}
                </button>

                <button
                  className={`qv-btn-wish ${wishlisted ? 'active' : ''}`}
                  onClick={() => setWishlisted(w => !w)}
                >
                  {wishlisted ? '♥' : '♡'}
                </button>
              </div>

              <button className="qv-btn-checkout">
                Commander et payer
              </button>

              {/* Accordion */}
              <div className="qv-accordion">
                {accordions.map(({ key, label, content }) => (
                  <div
                    key={key}
                    className={`qv-acc-item ${openSection === key ? 'open' : ''}`}
                  >
                    <button
                      className="qv-acc-header"
                      onClick={() => toggleSection(key)}
                    >
                      {label}
                      <span className="qv-acc-icon">+</span>
                    </button>
                    <div className="qv-acc-body">
                      <p>{content || '-'}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`/products/${product._id}`}
                className="qv-full-link"
              >
                Voir la fiche complete
              </a>

            </div>
          </>
        )}
      </div>
    </div>
  )
}