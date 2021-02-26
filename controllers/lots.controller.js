const { lotService } = require("../services");

const lotsController = {
  async createLot(req, res) {
    try {
      res.send(await lotService.createLot(req));
    } catch (error) {
      console.log(error);
    }
  },

  async getLots(req, res) {
    try {
      res.send(await lotService.getLots());
    } catch (error) {
      console.log(error);
    }
  },

  async getLot(req, res) {
    try {
      res.send(await lotService.getLot(req));
    } catch (error) {
      console.log(error);
    }
  },

  async updateLot(req, res) {
    try {
      res.send(await lotService.updateLot(req));
    } catch (error) {
      console.log(error);
    }
  },

  async deleteLot(req, res) {
    try {
      res.send(await lotService.deleteLot(req.params.lotId));
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = lotsController;
