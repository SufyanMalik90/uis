const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const authenticateToken = (req, res, next) => {
  const bearerToken = req.headers["authorization"];

  if (!bearerToken) {
    return res.status(401).json({ error: "Unauthorized - Missing token" });
  }
  const bearer = bearerToken.split(" ");
  const token = bearer[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden - Invalid token" });
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
