const { verifyToken } = require("../utils/verifyToken");
const Admin = require("../model/Staff/Admin");
exports.isLoggedIn = async (req, res, next) => {
  const headerObj = req.headers;
  const token = headerObj?.authorization?.split(" ")[1];

  const verifiedToken = verifyToken(token);

  if (verifiedToken) {
    const user = await Admin.findById(verifiedToken.id).select(
      "name email role"
    );
    req.userAuth = user;
    next();
  } else {
    const err = new Error("Invalid token");
    next(err);
  }
};
