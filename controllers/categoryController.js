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
      return res
        .status(201)
        .json({ msg: "Your category has created successfully!" });
    } else {
      return res
        .status(401)
        .json({ errors: [{ msg: `${name} category is already taken.` }] });
    }
  } else {
    return res.status(400).json({ errors: errors.array() });
  }
};

// get categories

module.exports.categories = async (req, res) => {
  const page = req.params.page;
  const perPage = 3;
  const skip = (page - 1) * perPage;
  try {
    const count = await CategoryModel.find({}).countDocuments();
    const response = await CategoryModel.find({})
      .skip(skip)
      .limit(perPage)
      .sort({
        updatedAt: -1,
      });
    return res.status(200).json({ categories: response, perPage, count });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Internal Server Error.");
  }
};
