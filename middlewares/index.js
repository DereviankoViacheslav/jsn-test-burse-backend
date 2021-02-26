const isAuthorized = require("./is-authorized");
const grantAccess = require("./grant-access");
const errorHandler = require("./error-handler");
const checkUniqueEmail = require("./check-unique-email");
const checkEmail = require("./check-exist-email");
const passwordValidation = require("./password-validation");

module.exports = {
  isAuthorized,
  grantAccess,
  errorHandler,
  checkUniqueEmail,
  checkEmail,
  passwordValidation,
};
