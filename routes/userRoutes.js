const express = require("express");
const { registerValidations } = require("../validations/registerValidations");
const { register } = require("../controllers/usersControllers");
const router = express.Router();

router.post("/register", registerValidations, register);

module.exports = router;
