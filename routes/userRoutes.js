const express = require("express");
const {
  registerValidations,
  loginValidations,
} = require("../validations/registerValidations");
const { register, login } = require("../controllers/usersControllers");
const router = express.Router();

router.post("/register", registerValidations, register);
router.post("/login", loginValidations, login);

module.exports = router;
