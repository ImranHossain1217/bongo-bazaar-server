const express = require("express");
const { categoryValidation } = require("../validations/categoryValidation");
const { createCategory, categories } = require("../controllers/categoryController");
const { authorized } = require("../Auth/Authorization");
const router = express.Router();

router.post("/create-category", [categoryValidation,authorized], createCategory);
router.get("/categories/:page",categories);

module.exports = router;
