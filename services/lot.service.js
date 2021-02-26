const { create } = require("../models/lot.model");
const { lotsRepository, usersRepository } = require("../repositories");

const lotService = {
  async createLot(req) {
    const user = await usersRepository.getUser({ _id: req.user._id });
    const prev_owner_id = user.role === "basic" ? req.user._id : null;
    const lot = { ...req.body, prev_owner_id };
    return await lotsRepository.createLot(lot);
  },

  async getLots() {
    return await lotsRepository.getLots();
  },

  async getLot(req) {
    return await lotsRepository.getLot({ _id: req.params.lotId });
  },

  async updateLot(req) {
    return await lotsRepository.updateLot(req.params.lotId, req.body);
  },

  async deleteLot(lotId) {
    return await lotsRepository.deleteLot(lotId);
  },
};

module.exports = lotService;
