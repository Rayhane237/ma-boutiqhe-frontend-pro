import { useCart } from '../../context/CartContext'
import './CartDrawer.css'

const CartDrawer = ({ onClose }) => {
  const { cartItems, totalItems, removeFromCart, updateQuantity } = useCart()

  return (
    <>
      {/* Dark overlay behind drawer */}
      <div className="cart-overlay" onClick={onClose} />

      {/* Drawer */}
      <div className="cart-drawer">
        <div className="cart-header">
          <h2 className="cart-title">PANIER ({totalItems})</h2>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>

        <div className="cart-divider" />

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Votre panier est vide.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item._id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">{item.price} DA</p>
                    <div className="cart-item-qty">
                      <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button className="cart-item-remove" onClick={() => removeFromCart(item._id)}>✕</button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span>
                  {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)} DA
                </span>
              </div>
              <button className="cart-checkout">Commander et payer</button>
              <button className="cart-continue" onClick={onClose}>Continuer mes achats</button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CartDrawer