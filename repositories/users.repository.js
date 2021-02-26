const { User } = require("../models");

const usersRepository = {
  async createUser(userData) {
    const user = await User.create(userData);
    return user;
  },

  async getUsers() {
    return await User.find();
  },

  async getUser(userData) {
    return await User.findOne(userData);
  },

  async updateUser(userId, data) {
    return await User.findOneAndUpdate(
      { _id: userId },
      { ...data },
      { returnOriginal: false }
    );
  },

  async deleteUser(userId) {
    return await User.deleteOne({ _id: userId });
  },
};

module.exports = usersRepository;
