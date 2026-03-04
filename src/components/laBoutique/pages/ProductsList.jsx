import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../../nav/Nav'
import Footer from '../../FOOTER/Footer'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  if (!product) return <p>Loading...</p>

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
            <p className="pd-price">{product.price} دج</p>

            {/* Model selector */}
            <div className="pd-field">
              <label className="pd-label">Modèle *</label>
              <select className="pd-select">
                <option>Sélectionner</option>
              </select>
            </div>

            {/* Quantity */}
            <div className="pd-field">
              <label className="pd-label">Quantité *</label>
              <div className="pd-quantity">
                <button>−</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>

            {/* Buttons */}
            <div className="pd-buttons">
              <button className="pd-add-cart">Ajouter au panier</button>
              <button className="pd-buy">Commander et payer</button>
            </div>

            {/* Accordion */}
            <div className="pd-accordion">
              <div className="pd-accordion-item">
                <span>DÉTAILS DE L'ARTICLE</span>
                <span>—</span>
              </div>
              <p className="pd-description">{product.description}</p>

              <div className="pd-accordion-item">
                <span>ÉCHANGE ET REMBOURSEMENT</span>
                <span>+</span>
              </div>

              <div className="pd-accordion-item">
                <span>POLITIQUE DE LIVRAISON</span>
                <span>+</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetail