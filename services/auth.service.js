const hashService = require("./hash.service");
const jwtService = require("./jwt.service");
const { usersRepository } = require("../repositories");

const authService = {
  async registrationUser(userData) {
    const { password } = userData;
    const passwordHash = hashService.getPasswordHash(password);
    const user = { ...userData, password: passwordHash };
    return await usersRepository.createUser(user);
  },

  async loginUser(userData) {
    const { password, email } = userData;
    const passwordHash = hashService.getPasswordHash(password);
    const user = await usersRepository.getUser({
      email,
      password: passwordHash,
    });
    if (!user) {
      throw new Error("Incorrect data");
    }
    const token = jwtService.generateToken(user);
    return { ...user._doc, token };
  },
};

module.exports = authService;
