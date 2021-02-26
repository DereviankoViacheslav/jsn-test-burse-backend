const { Lot } = require("../models");

const lotsRepository = {
  async createLot(lotData) {
    return await Lot.create(lotData);
  },

  async getLots() {
    return await Lot.find();
  },

  async getLot(lotData) {
    return await Lot.findOne(lotData);
  },

  async updateLot(lotId, data) {
    return await Lot.findOneAndUpdate(
      { _id: lotId },
      { ...data },
      {
        returnOriginal: false,
      }
    );
  },

  async deleteLot(lotId) {
    return await Lot.deleteOne({ _id: lotId });
  },
};

module.exports = lotsRepository;
