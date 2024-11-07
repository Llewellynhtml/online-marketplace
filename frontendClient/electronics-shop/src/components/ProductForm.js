import React, { useState } from 'react';
import './Form.css';

const ProductForm = () => {
  const [product, setProduct] = useState({ name: '', description: '', price: '', category: '' });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="description" placeholder="Description" onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} required />
      <select name="category" onChange={handleChange} required>
        <option value="">Select Category</option>
        <option value="Laptops">Laptops</option>
        <option value="Desktops & All-in-Ones">Desktops & All-in-Ones</option>
        <option value="Monitors">Monitors</option>
        <option value="Workstations">Workstations</option>
        <option value="Accessories">Accessories</option>
      </select>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
