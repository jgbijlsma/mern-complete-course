const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  try {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ errorMessage: "Unauthorized." });

    const validatedUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = validatedUser.id;

    next();
  } catch (err) {
    return res.status(401).json({ errorMessage: "Unauthorized." });
  }
}

module.exports = auth;
