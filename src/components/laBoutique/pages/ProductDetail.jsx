import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../../nav/Nav'
import Footer from '../../FOOTER/Footer'
import './ProductDetail.css'

const accordionSections = [
  { key: 'details', title: "DÉTAILS DE L'ARTICLE" },
  { key: 'exchange', title: 'ÉCHANGE ET REMBOURSEMENT' },
  { key: 'delivery', title: 'POLITIQUE DE LIVRAISON' },
]

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedModel, setSelectedModel] = useState('')
  const [openSection, setOpenSection] = useState('details') // one open at a time

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  if (!product) return <p className="pd-loading">Chargement...</p>

  const decrement = () => setQuantity((q) => Math.max(1, q - 1))
  const increment = () => setQuantity((q) => q + 1)
  const toggleSection = (key) => setOpenSection((prev) => (prev === key ? null : key))

  const handleAddToCart = () => {
    if (product.models?.length && !selectedModel) return // guard: model required if variants exist
    // TODO: wire to your cart context/API
    console.log('Add to cart', { id: product._id, selectedModel, quantity })
  }

  return (
    <>
      <Nav />
      <div className="pd-wrapper">
        <div className="pd-container">

          {/* Left - Image */}
          <div className="pd-image-section">
            <img src={product.image} alt={product.name} className="pd-image" />
          </div>

          {/* Right - Info */}
          <div className="pd-info-section">
            <h1 className="pd-name">{product.name}</h1>
            <p className="pd-sku">SKU : {product.sku}</p>
            <p className="pd-price">{product.price} DA</p>

            {/* Model selector */}
            <div className="pd-field">
              <label className="pd-label" htmlFor="pd-model">Modèle *</label>
              <select
                id="pd-model"
                className="pd-select"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
              >
                <option value="">Sélectionner</option>
                {(product.models || []).map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Quantity */}
            <div className="pd-field">
              <label className="pd-label">Quantité *</label>
              <div className="pd-quantity">
                <button type="button" onClick={decrement} aria-label="Diminuer la quantité">−</button>
                <span>{quantity}</span>
                <button type="button" onClick={increment} aria-label="Augmenter la quantité">+</button>
              </div>
            </div>

            {/* Buttons */}
            <div className="pd-buttons">
              <button className="pd-add-cart" onClick={handleAddToCart}>Ajouter au panier</button>
              <button className="pd-buy" onClick={handleAddToCart}>Commander et payer</button>
            </div>

            {/* Accordion */}
            <div className="pd-accordion">
              {accordionSections.map(({ key, title }) => (
                <div key={key}>
                  <div
                    className="pd-accordion-item"
                    onClick={() => toggleSection(key)}
                  >
                    <span>{title}</span>
                    <span>{openSection === key ? '—' : '+'}</span>
                  </div>
                  {openSection === key && (
                    <p className="pd-description">
                      {key === 'details' && product.description}
                      {key === 'exchange' && "Échange possible sous 7 jours, article non porté et dans son emballage d'origine."}
                      {key === 'delivery' && 'Livraison sous 2 à 5 jours ouvrables selon la wilaya.'}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetail