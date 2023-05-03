const { body } = require("express-validator");

module.exports.registerValidations = [
  body("name").not().isEmpty().trim().withMessage("Name is required."),
  body("email").isEmail().normalizeEmail().withMessage("Email is required."),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password should be 6 characters long."),
];

module.exports.loginValidations = [
  body("email").isEmail().normalizeEmail().withMessage("Email is required."),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password required."),
];


