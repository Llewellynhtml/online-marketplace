import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const { cart, total } = location.state || {};

  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [notification, setNotification] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (
      !paymentDetails.name ||
      !paymentDetails.cardNumber ||
      !paymentDetails.expiryDate ||
      !paymentDetails.cvv
    ) {
      setNotification("Please fill in all payment details.");
      return;
    }

    setNotification(`Payment successful! Thank you, ${paymentDetails.name}`);
    console.log("Payment Details:", paymentDetails);
  };

  if (!cart || !total || cart.length === 0) {
    return (
      <div className="error-container">
        <h1>Error: No cart data available. Please add items to your cart.</h1>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="cart-summary">
        <h2>Cart Summary</h2>
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
                <td>R {Number(item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Total: R {total.toFixed(2)}</h3>
      </div>

      <div className="payment-form-container">
        <h3>Enter Payment Details</h3>
        <form onSubmit={handlePaymentSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name on Card:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={paymentDetails.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              required
              maxLength="16"
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handleInputChange}
              required
              placeholder="MM/YY"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handleInputChange}
              required
              maxLength="3"
            />
          </div>

          <button type="submit" className="btn-submit">
            Submit Payment
          </button>
        </form>
      </div>

      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};

export default Checkout;
