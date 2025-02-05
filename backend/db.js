const mysql = require("mysql2");
require("dotenv").config(); // Load environment variables

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Pratik@3105",
  database: process.env.DB_NAME || "productsDB",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL Connection Failed:", err);
  } else {
    console.log("MySQL Connected!");
  }
});

module.exports = db;
