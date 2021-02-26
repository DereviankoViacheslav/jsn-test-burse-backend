const { cardsRepository } = require("../repositories");

const cardService = {
  async createCard(req) {
    const card = { ...req.body, creator_id: req.user._id };
    return await cardsRepository.createCard(card);
  },

  async getCards() {
    return await cardsRepository.getCards();
  },

  async getCard(req) {
    return await cardsRepository.getCard({ _id: req.params.cardId });
  },

  async updateCard(req) {
    const card = {
      ...req.body,
      creator_id: req.user._id,
    };
    return await cardsRepository.updateCard(req.params.cardId, card);
  },

  async deleteCard(cardId) {
    return await cardsRepository.deleteCard(cardId);
  },
};

module.exports = cardService;
