const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("authentication-token");
  if (!token) {
    return res.status(400).send("Access denied!");
  }

  try {
    const verifiedUser = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verifiedUser;
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};
