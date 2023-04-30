const express = require("express");
const connect = require("./config/db");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// Databse Connection
connect();

app.get("/", (req, res) => {
  res.json({ msg: "wellcome to bongobazaar!!." });
});

app.listen(port, () => {
  console.log(`BongoBazaar Server running on ${port}`);
});
