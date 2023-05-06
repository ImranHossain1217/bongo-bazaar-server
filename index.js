const express = require("express");
const connect = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require('./routes/categoryRoutes');
const port = process.env.PORT || 5000;

// Databse Connection
connect();

// add middleware
app.use(express.json());
app.use(cors());

// routes
app.use(userRoutes);
app.use(categoryRoutes);

app.get("/", (req, res) => {
  res.json({ msg: "wellcome to bongobazaar!!." });
});

app.listen(port, () => {
  console.log(`BongoBazaar Server running on ${port}`);
});
