const { Router } = require("express");
const router = Router();
const { lotsController } = require("../controllers");
const { isAuthorized, grantAccess } = require("../middlewares");

router
  .route("/")
  .get(isAuthorized, lotsController.getLots)
  .post(
    isAuthorized,
    grantAccess("createOwn", "lot"),
    lotsController.createLot
  );

router
  .route("/:lotId")
  .get(isAuthorized, lotsController.getLot)
  .put(
    isAuthorized,
    grantAccess("updateAny", "lot"),
    lotsController.updateLot
  )
  .delete(
    isAuthorized,
    grantAccess("deleteAny", "lot"),
    lotsController.deleteLot
  );

module.exports = router;
