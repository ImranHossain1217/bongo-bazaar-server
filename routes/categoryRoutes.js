const express = require("express");
const { categoryValidation } = require("../validations/categoryValidation");
const {
  createCategory,
  categories,
  fetchCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const { authorized } = require("../Auth/Authorization");
const router = express.Router();

router.post(
  "/create-category",
  [categoryValidation, authorized],
  createCategory
);
router.get("/categories/:page", authorized, categories);
router.get("/fetch-category/:id", authorized, fetchCategory);
router.put(
  "/update-category/:id",
  [categoryValidation, authorized],
  updateCategory
);
router.delete("/delete-category/:id", authorized, deleteCategory);

module.exports = router;
