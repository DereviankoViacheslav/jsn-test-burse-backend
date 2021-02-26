const { usersRepository } = require("../repositories");
const { verifyToken } = require("../services/jwt.service");

const isAuthorized = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send();
  }
  const tokenData = verifyToken(req.headers.authorization);
  if (!tokenData.data._id) {
    return res.status(401).send();
  }
  const user = await usersRepository.getUser({ _id: tokenData.data._id });
  if (!user) {
    return res.status(401).send();
  }
  req.user = user;
  next();
};

module.exports = isAuthorized;
