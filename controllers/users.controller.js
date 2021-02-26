const { userService } = require("../services");

const usersController = {
  async getUsers(req, res) {
    try {
      res.send(await userService.getUsers());
    } catch (error) {
      console.log(error);
    }
  },

  async getUser(req, res) {
    try {
      res.send(await userService.getUser(req));
    } catch (error) {
      console.log(error);
    }
  },

  async updateUser(req, res) {
    try {
      res.send(await userService.updateUser(req));
    } catch (error) {
      console.log(error);
    }
  },

  async deleteUser(req, res) {
    try {
      res.send(await userService.deleteUser(req.params.userId));
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = usersController;
