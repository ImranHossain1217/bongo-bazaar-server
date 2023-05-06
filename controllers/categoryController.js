const { validationResult } = require("express-validator");
const CategoryModel = require("../models/Category");

module.exports.createCategory = async (req, res) => {
  const errors = validationResult(req);
  const { name } = req.body;
  if (errors.isEmpty()) {
    const categoryExist = await CategoryModel.findOne({ name });
    if (!categoryExist) {
      await CategoryModel.create({
        name,
      });
      return res.status(201).json({ msg: "Category Create Successfully." });
    } else {
      return res
        .status(401)
        .json({ errors: [{ msg: `${name} category is already taken.` }] });
    }
  } else {
    return res.status(401).json({ errors: errors.array() });
  }
};
