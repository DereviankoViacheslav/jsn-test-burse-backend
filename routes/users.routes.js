const { Router } = require("express");
const router = Router();
const { usersController } = require("../controllers");
const { isAuthorized, grantAccess } = require("../middlewares");

router
  .route("/")
  .get(
    isAuthorized,
    grantAccess("readAny", "profile"),
    usersController.getUsers
  );

router
  .route("/:userId")
  .get(isAuthorized, grantAccess("readOwn", "profile"), usersController.getUser)
  .put(
    isAuthorized,
    grantAccess("updateOwn", "profile"),
    usersController.updateUser
  )
  .delete(
    isAuthorized,
    grantAccess("deleteOwn", "profile"),
    usersController.deleteUser
  );

module.exports = router;
