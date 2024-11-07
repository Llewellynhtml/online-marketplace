import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useCart } from "../contexts/CartContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>
        Marketplace
      </Link>
      <Link to="/category/laptops" style={styles.link}>
        Laptops
      </Link>
      <Link to="/category/desktops" style={styles.link}>
        Desktops & All-in-Ones
      </Link>
      <Link to="/category/monitors" style={styles.link}>
        Monitors
      </Link>
      <Link to="/category/workstations" style={styles.link}>
        Workstations
      </Link>
      <Link to="/category/accessories" style={styles.link}>
        Accessories
      </Link>

      {user ? (
        <>
          <Link to="/add-product" style={styles.link}>
            Add Product
          </Link>
          <Link to="/cart" style={styles.link}>
            Cart ({cart.length})
          </Link>
          <button onClick={logout} style={styles.button}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" style={styles.link}>
            Login
          </Link>
          <Link to="/register" style={styles.link}>
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    gap: "15px",
    padding: "10px 20px",
    background: "#f0f0f0",
    boxShadow: "0px 4px 6px lightblue",
    alignItems: "center",
    flexWrap: "wrap",
  },
  link: {
    textDecoration: "none",
    color: "black",
    padding: "5px 10px",
  },
  button: {
    background: "transparent",
    border: "none",
    color: "blue",
    cursor: "pointer",
  },
};

export default Navbar;
