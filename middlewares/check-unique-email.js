const { usersRepository } = require("../repositories");
const createError = require("http-errors");

const checkUniqueEmail = async (req, res, next) => {
  try {
    let user = await usersRepository.getUser({ email: req.body.email });
    if (user) {
      throw createError(400, "User with this email already exists");
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkUniqueEmail;
