const jwt = require("jsonwebtoken");

const signAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
  });
};

const signRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
  });
};

const verifyRefreshToken = (refreshToken, user) => {
  return jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err || user.email !== decoded.email) {
        return { error: { status: 403, message: "Token not found." } };
      }
      return signAccessToken({ email: decoded.email });
    }
  );
};

module.exports = { signAccessToken, signRefreshToken, verifyRefreshToken };
