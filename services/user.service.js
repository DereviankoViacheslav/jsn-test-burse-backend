const { usersRepository } = require("../repositories");

const userService = {
  async getUsers() {
    return await usersRepository.getUsers();
  },

  async getUser(req) {
    return await usersRepository.getUser({ _id: req.params.userId });
  },

  async updateUser(req) {
    const oldData = await usersRepository.getUser({ _id: req.params.userId });
    const newData = req.body;
    if (newData.role && newData.role !== oldData.role) {
      if (req.user.role !== "admin") {
        throw new Error("You don't have enough permission");
      }
    }
    return await usersRepository.updateUser(req.params.userId, newData);
  },

  async deleteUser(userId) {
    return await usersRepository.deleteUser(userId);
  },
};

module.exports = userService;
