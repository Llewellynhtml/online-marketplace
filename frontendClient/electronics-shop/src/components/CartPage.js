import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cart, total } = useCart();
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="empty-cart-container">
        <h1>Your cart is empty!</h1>
        <p>Please add items to your cart before proceeding to checkout.</p>
        <button onClick={() => navigate("/")} className="btn-continue">
          Continue Shopping
        </button>
      </div>
    );
  }

  const handleCheckoutClick = () => {
    if (cart.length === 0) {
      setNotification("You cannot checkout with an empty cart.");
    } else {
      navigate("/checkout", { state: { cart, total } });
    }
  };

  return (
    <div className="cart-page-container">
      <h1>Your Shopping Cart</h1>

      <div className="cart-summary">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>R {item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="cart-total">
        <h3>Total: R {total.toFixed(2)}</h3>
        <button onClick={handleCheckoutClick} className="btn-checkout">
          Proceed to Checkout
        </button>
      </div>

      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};

export default CartPage;
