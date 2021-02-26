const { Router } = require("express");
const router = Router();
const { authController } = require("../controllers");
const {
  checkUniqueEmail,
  checkEmail,
  passwordValidation,
} = require("../middlewares");

router
  .route("/signup")
  .post(checkUniqueEmail, passwordValidation, authController.registrationUser);
router
  .route("/signin")
  .post(checkEmail, passwordValidation, authController.loginUser);

module.exports = router;
