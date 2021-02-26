const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    bonus_points: {
      type: Number,
      required: true,
    },
    cards: [
      {
        ref: "cards",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  { versionKey: false }
);

module.exports = model("Set", schema);
