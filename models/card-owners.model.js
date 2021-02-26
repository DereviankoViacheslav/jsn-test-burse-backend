const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    owner_id: {
      type: String,
      required: true,
    },
    card_id: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = model("Location", schema);
