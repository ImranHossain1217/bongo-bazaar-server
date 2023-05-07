const jwt = require("jsonwebtoken");

module.exports.authorized = (req, res, next) => {
  const headerToken = req.headers.authorization;
  if (headerToken) {
    const token = headerToken.split("Bearer ")[1];
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (verified) {
      next();
    } else {
      return res
        .status(401)
        .json({ errors: [{ msg: "Please add a valid token." }] });
    }
  } else {
    return res
      .status(401)
      .json({ errors: [{ msg: "Unauthorized Access." }] });
  }
};
