import Nav from '../nav/Nav'
import './LaBoutique.css'
import Footer from '../FOOTER/Footer'
import { useEffect, useState } from 'react'
import QuickViewModal from '../QuickViewModal/QuickViewModal' // ← ADD THIS

const categories = ['Tout', 'Accessoires', 'Portefeuilles en cuir', 'Ceintures en cuir', 'Meilleures ventes']
const INITIAL_COUNT = 8
const LOAD_MORE = 8

const LaBoutique = () => {
  const [allProducts, setAllProducts] = useState([])
  const [selectedProductId, setSelectedProductId] = useState(null) // ← ADD THIS

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setAllProducts(data))
  }, [])

  const [activeCategory, setActiveCategory] = useState('Tout')
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)
  const [openFilters, setOpenFilters] = useState({
    categorie: true, prix: false, modele: false, taille: false
  })

  const toggleFilter = (key) => {
    setOpenFilters((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const filtered = activeCategory === 'Tout'
    ? allProducts
    : activeCategory === 'Meilleures ventes'
    ? allProducts.filter((p) => p.badge)
    : allProducts.filter((p) => p.category === activeCategory)

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setVisibleCount(INITIAL_COUNT)
  }

  return (
    <div className="lb-wrapper">
      <Nav />
      <br />
      <h1 className="lb-title">LA BOUTIQUE</h1>

      <div className="lb-layout">
        {/* ── Sidebar ── */}
        <aside className="lb-sidebar">
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

          <div className="lb-filter-group">
            <div className="lb-filter-header" onClick={() => toggleFilter('prix')}>
              <span className="lb-filter-label">Prix</span>
              <span className="lb-filter-toggle">{openFilters.prix ? '—' : '+'}</span>
            </div>
            <div className="lb-filter-divider" />
          </div>

          <div className="lb-filter-group">
            <div className="lb-filter-header" onClick={() => toggleFilter('modele')}>
              <span className="lb-filter-label">Modèle</span>
              <span className="lb-filter-toggle">{openFilters.modele ? '—' : '+'}</span>
            </div>
            <div className="lb-filter-divider" />
          </div>

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
              // ← CHANGED: div instead of Link, click opens modal
              <div
                key={product._id}
                className="lb-card"
                onClick={() => setSelectedProductId(product._id)}
              >
                {product.badge && <div className="lb-badge">{product.badge}</div>}
                <div className="lb-img-wrapper">
                  <img src={product.image} alt={product.name} className="lb-img" />
                  <div className="lb-hover-overlay">
                    <span className="lb-apercu">Aperçu rapide</span>
                  </div>
                </div>
                <div className="lb-info">
                  <span className="lb-name">{product.name}</span>
                  <span className="lb-price">{product.price} DA</span>
                </div>
              </div>
            ))}
          </div>

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

      {/* ← ADD THIS: modal renders when a product is selected */}
      {selectedProductId && (
        <QuickViewModal
          productId={selectedProductId}
          onClose={() => setSelectedProductId(null)}
        />
      )}

      <Footer />
    </div>
  )
}

export default LaBoutique
