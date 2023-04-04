const jwt = require("jsonwebtoken");
exports.verifyToken = (token) => {
  return jwt.verify(token, "anykey", (err, decoded) => {
    if (err) {
      return { msg: "Invalid token" };
    } else {
      return decoded;
    }
  });
};
