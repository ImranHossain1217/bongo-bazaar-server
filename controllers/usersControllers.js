const { validationResult } = require("express-validator");
const UserModel = require("../models/User");
const { hashedPassword, createToken } = require("../Auth/auth");

module.exports.register = async (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { name, email, password } = req.body;
    try {
      const emailExist = await UserModel.findOne({ email });
      if (!emailExist) {
        const hashed = await hashedPassword(password);
        const user = await UserModel.create({
          name,
          email,
          password: hashed,
        });
        const token = createToken({ id: user._id, name: user.name });
        return res
          .status(201)
          .json({ msg: "User Created Successfully!", token });
      } else {
        return res
          .status(401)
          .json({ errors: [{ msg: `${email} has been already taken.` }] });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server Internal Error");
    }
  } else {
    return res.status(400).json(errors.array());
  }
};
