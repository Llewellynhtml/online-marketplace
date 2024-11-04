const express = require("express");
const dotenv = require("dotenv");
const routesAuth = require("./routes/auth"); // Ensure this path is correct
const routesProduct = require("./routes/product");

dotenv.config();

const app = express();
app.use(express.json());

// Set up routes
app.use("/api/auth", routesAuth);
app.use("/api/products", routesProduct);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
