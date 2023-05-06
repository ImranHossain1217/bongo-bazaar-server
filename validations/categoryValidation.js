const { body } = require("express-validator");

module.exports.categoryValidation = [
  body("name").not().isEmpty().withMessage("category is required."),
];
