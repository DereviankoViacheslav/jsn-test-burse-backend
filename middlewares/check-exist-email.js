const { usersRepository } = require("../repositories");
const createError = require("http-errors");

const checkEmail = async (req, res, next) => {
  try {
    let user = await usersRepository.getUser({ email: req.body.email });
    if (!user) {
      throw createError(401, "Incorrect data");
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkEmail;
