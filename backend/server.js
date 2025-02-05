const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",  // Change this if you have a different username
  password: "Pratik@310500",  // Your DB password
  database: "productsDB",
});

db.connect((err) => {
  if (err) {
    console.error("error connecting to database", err);
    return;
  }
  console.log("connected to database");
});

// Create product route
app.post("/api/products", (req, res) => {
  const { name, type, unit } = req.body;
  const query = "INSERT INTO products (name, type, unit) VALUES (?, ?, ?)";
  db.query(query, [name, type, unit], (err, result) => {
    if (err) {
      console.error("error inserting product", err);
      return res.status(500).json({ message: "Error adding product" });
    }
    res.status(200).json({ message: "Product added successfully", id: result.insertId });
  });
});

// Fetch products route
app.get("/api/products", (req, res) => {
  const query = "SELECT * FROM products";
  db.query(query, (err, results) => {
    if (err) {
      console.error("error fetching products", err);
      return res.status(500).json({ message: "Error fetching products" });
    }
    res.json(results);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
