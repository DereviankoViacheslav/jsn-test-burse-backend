const jwt = require("jsonwebtoken");
const signature = "MySuP3R_z3kr3t";

const jwtService = {
  generateToken(user) {
    const data = {
      _id: user._id,
      login: user.login,
      email: user.email,
    };
    const expiration = "6h";
    return jwt.sign({ data }, signature, { expiresIn: expiration });
  },

  verifyToken(token) {
    return jwt.verify(token, signature);
  },
};

module.exports = jwtService;
