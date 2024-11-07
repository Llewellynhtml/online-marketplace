import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./contexts/CartContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductForm from "./components/ProductForm";
import CartPage from "./components/CartPage";
import Checkout from "./components/Checkout";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add-product" element={<ProductForm />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
