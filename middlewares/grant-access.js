const roles = require("../helpers/roles");

const grantAccess = (action, resource) => (req, res, next) => {
  const permission = roles.can(req.user.role)[action](resource);
  if (!permission.granted) {
    return res.status(403).json({ message: "Access not allowed" });
  }
  next();
};

module.exports = grantAccess;
