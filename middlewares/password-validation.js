const createError = require("http-errors");

const passwordValidation = async (req, res, next) => {
  try {
    const password = req.body.password;
    if (password.includes(" ")) {
      throw createError(401, "Password must not contain spaces");
    }
    if (password.length < 5) {
      throw createError(401, "Minimum password length 5 symbols");
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = passwordValidation;
