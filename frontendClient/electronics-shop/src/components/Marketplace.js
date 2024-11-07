import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './Marketplace.css';

const Marketplace = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <h1>Marketplace</h1>
      <div className="marketplace-container">
        <ProductList addToCart={addToCart}/>
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default Marketplace;
