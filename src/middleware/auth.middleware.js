const whitelist = require("../config/whitelist");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.email = decoded.email;
    next();
  });
};

const corsEnableMiddleware = (req, res, next) => {
  const origin = req.headers.origin;
  if (whitelist.includes(origin))
    res.header("Access-Control-Allow-Credentials", true);
  next();
};
module.exports = { authMiddleware, corsEnableMiddleware };
