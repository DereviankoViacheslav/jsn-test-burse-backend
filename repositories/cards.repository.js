const { Card } = require("../models");

const cardsRepository = {
  async createCard(cardData) {
    return await Card.create(cardData);
  },

  async getCards() {
    return await Card.find();
  },

  async getCard(cardData) {
    return await Card.findOne(cardData);
  },

  async updateCard(cardId, data) {
    return await Card.findOneAndUpdate(
      { _id: cardId },
      { ...data },
      {
        returnOriginal: false,
      }
    );
  },

  async deleteCard(cardId) {
    return await Card.deleteOne({ _id: cardId });
  },
};

module.exports = cardsRepository;
