const { Router } = require("express");
const router = Router();
const usersRoutes = require("./users.routes");
const authRoutes = require("./auth.routes");
const cardsRoutes = require("./cards.routes");
const lotsRoutes = require("./lots.routes");

router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/cards", cardsRoutes);
router.use("/lots", lotsRoutes);

module.exports = router;
