
import React, { useState } from "react";
import ProductList from "./ProductList";


const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default Home;
