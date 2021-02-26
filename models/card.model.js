const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    creator_id: {
      ref: "users",
      type: Schema.Types.ObjectId,
      default: null,
    },
    is_active: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    image: String,
    gender: {
      type: String,
      enum: ["Female", "Male", "Genderless", "unknown"],
    },
    character_status: {
      type: String,
      enum: ["Alive", "Dead", "unknown"],
    },
    species: {
      type: String,
    },
    location: {
      type: String,
    },
    episodes: [
      {
        name: String,
        air_date: Date,
        episode_code: String,
        _id: {
          ref: "specieses",
          type: Schema.Types.ObjectId,
        },
      },
    ],
  },
  { versionKey: false }
);

module.exports = model("Card", schema);
