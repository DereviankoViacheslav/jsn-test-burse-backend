const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    air_date: {
      type: Date,
      required: true,
    },
    episode_code: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { versionKey: false }
);

module.exports = model("Episod", schema);
