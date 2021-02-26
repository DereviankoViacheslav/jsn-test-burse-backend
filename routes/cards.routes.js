const { Router } = require("express");
const router = Router();
const { cardsController } = require("../controllers");
const { isAuthorized, grantAccess } = require("../middlewares");

router
  .route("/")
  .get(isAuthorized, cardsController.getCards)
  .post(
    isAuthorized,
    grantAccess("createAny", "card"),
    cardsController.createCard
  );

router
  .route("/:cardId")
  .get(isAuthorized, cardsController.getCard)
  .put(
    isAuthorized,
    grantAccess("updateAny", "card"),
    cardsController.updateCard
  )
  .delete(
    isAuthorized,
    grantAccess("deleteAny", "card"),
    cardsController.deleteCard
  );

module.exports = router;
