const { db } = require("../config/firebase");

const { collection, addDoc} =require('firebase/firestore')

// Add a product
const addProduct = async (req, res) => {
  const { name, description, price, category } = req.body;

  try {
    const docRef = await addDoc(collection(db, "products"), {
    name,
    description,
    price,
    category
    });

    res.status(202).json({
      message: "Addes successfully "
    })
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Get all products
const getProducts = async (req, res) => {
  try {
    const productSnapshot = await adminDb.collection("products").get();
    const products = productSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json({ data: products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category } = req.body;

  try {
    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const productDocRef = adminDb.collection("products").doc(id);
    await productDocRef.update({
      name,
      description,
      price,
      category,
    });

    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const productDocRef = adminDb.collection("products").doc(id);
    await productDocRef.delete();

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
};

module.exports = {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
