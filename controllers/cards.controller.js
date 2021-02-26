const { cardService } = require("../services");

const cardsController = {
  async createCard(req, res) {
    try {
      res.send(await cardService.createCard(req));
    } catch (error) {
      console.log(error);
    }
  },

  async getCards(req, res) {
    try {
      res.send(await cardService.getCards());
    } catch (error) {
      console.log(error);
    }
  },

  async getCard(req, res) {
    try {
      res.send(await cardService.getCard(req));
    } catch (error) {
      console.log(error);
    }
  },

  async updateCard(req, res) {
    try {
      res.send(await cardService.updateCard(req));
    } catch (error) {
      console.log(error);
    }
  },

  async deleteCard(req, res) {
    try {
      res.send(await cardService.deleteCard(req.params.cardId));
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = cardsController;
