import React, { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";
import image1 from "../attachments/Dell S3221QSA 31.5-inch 4K UHD 4ms LED Curved Monitor.jpg";
import image2 from "../attachments/Dell Optiplex 7420 23.8-inch Core i7 All-in-One PC.jpg";
import image3 from "../attachments/Dell S2725H 27-inch Full HD IPS LED Monitor.jpg";
import image4 from "../attachments/Dell Precision 3561 Mobile Workstation.jpg";
import image5 from "../attachments/Dell Latitude 7420 Business Laptop.jpg";
import image6 from "../attachments/Dell USB-C Mobile Adapter.jpg";
import image7 from "../attachments/Dell Premier Wireless Mouse.jpg";
import image8 from "../attachments/Dell UltraSharp 38 Curved Monitor.jpg";
import image9 from "../attachments/Dell DisplayPort to VGA Adapter for OptiPlex 3040 470-ABEL.jpg";
import image10 from "../attachments/Dell P2425H 23.8-inch Full HD 5ms IPS Monitor 210-BMFF.jpg";
import image11 from "../attachments/Dell Inspiron 15 3000 Laptop.jpg";
import image12 from "../attachments/Dell Latitude 5520 15.6-inch Laptop.jpg";
import image13 from "../attachments/Dell MH3021P Mobile Adapter Speakerphone 470-AELP.jpg";
import image14 from "../attachments/Dell 784-BBBI Optical Disc Drive Black DVD±RW.jpg";

const ProductList = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "Dell S3221QSA 31.5-inch 4K UHD 4ms LED Curved Monitor",
        description: "4K UHD monitor with 1800R curvature and AMD FreeSync.",
        price: 8999,
        category: "Monitors",
        imageUrl: image1,
      },
      {
        id: 2,
        name: "Dell Optiplex 7420 23.8-inch Core i7 All-in-One PC",
        description: "Powerful All-in-One with Core i7 and space-saving design.",
        price: 31999,
        category: "Desktops & All-in-Ones",
        imageUrl: image2,
      },
      {
        id: 3,
        name: "Dell S2725H 27-inch Full HD IPS LED Monitor",
        description: "Full HD IPS monitor with 99% sRGB and ComfortView Plus.",
        price: 3299,
        category: "Monitors",
        imageUrl: image3,
      },
      {
        id: 4,
        name: "Dell Precision 3561 Mobile Workstation",
        description:
 "15.6-inch workstation with Intel Core i7, NVIDIA graphics, and 512GB SSD.",
        price: 42999,
        category: "Laptops",
        imageUrl: image4,
      },
      {
        id: 5,
        name: "Dell Latitude 7420 Business Laptop",
        description:
          "14-inch business laptop with Intel Core i5 and 256GB SSD.",
        price: 27999,
        category: "Laptops",
        imageUrl: image5,
      },
      {
        id: 6,
        name: "Dell USB-C Mobile Adapter",
        description:
          "Compact USB-C adapter with HDMI, Ethernet, and USB-A ports.",
        price: 1599,
        category: "Accessories",
        imageUrl: image6,
      },
      {
        id: 7,
        name: "Dell Premier Wireless Mouse",
        description: "Ergonomic wireless mouse with customizable buttons.",
        price: 899,
        category: "Accessories",
        imageUrl: image7,
      },
      {
        id: 8,
        name: "Dell UltraSharp 38 Curved Monitor",
        description: "38-inch WQHD+ curved monitor with 21:9 aspect ratio.",
        price: 21999,
        category: "Monitors",
        imageUrl: image8,
      },
      {
        id: 9,
        name: "Dell DisplayPort to VGA Adapter for OptiPlex 3040 470-ABEL",
        description: "Tower workstation with Intel Xeon and 32GB RAM for demanding tasks.",
        price: 38999,
        category: "Workstations",
        imageUrl: image9,
      },
      {
        id: 10,
        name: "Dell P2422H 23.8-inch Monitor",
        description: "Full HD monitor with IPS technology and thin bezels.",
        price: 2999,
        category: "Monitors",
        imageUrl: image10,
      },
      {
        id: 11,
        name: "Dell Inspiron 15 3000 Laptop",
        description: "15.6-inch laptop with Intel Core i3 and 256GB SSD.",
        price: 9999,
        category: "Laptops",
        imageUrl: image11,
      },
      {
        id: 12,
        name: "Dell Latitude 5520 15.6-inch Laptop",
        description: "Business laptop with Core i7, 16GB RAM, and 512GB SSD.",
        price: 29999,
        category: "Laptops",
        imageUrl: image12,
      },
      {
        id: 13,
        name: "Dell MH3021P Mobile Adapter Speakerphone 470-AELP",
        description:
          "Clip-on soundbar with rich stereo sound for Dell monitors.",
        price: 499,
        category: "Accessories",
        imageUrl: image13,
      },
      {
        id: 14,
        name: "Dell 784-BBBI Optical Disc Drive Black DVD±RW",
        description: "Compact desktop tower with Core i5 and 8GB RAM.",
        price: 10499,
        category: "Desktops & All-in-Ones",
        imageUrl: image14,
      },
    ]);
  }, []);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="product-layout">
      <div className="product-gallery">
        <h1>Product List</h1>
        <div className="product-items">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
              <h2 className="product-title">{product.name}</h2>
              <p className="product-category">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="product-description">
                <strong>Description:</strong> {product.description}
              </p>
              <p className="product-price">
                <strong>Price:</strong> R {Number(product.price).toFixed(2)}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="product-button"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
