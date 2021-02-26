const { authService } = require("../services");

const authController = {
  async registrationUser(req, res, next) {
    try {
      await authService.registrationUser(req.body);
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      next(error);
    }
  },

  async loginUser(req, res, next) {
    try {
      const user = await authService.loginUser(req.body);
      res.status(200).json({ ...user });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authController;
