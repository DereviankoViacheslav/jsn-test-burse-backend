const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    prev_owner_id: {
      ref: "users",
      type: Schema.Types.ObjectId,
      default: null,
    },
    new_owner_id: {
      ref: "users",
      type: Schema.Types.ObjectId,
      default: null,
    },
    card_id: {
      ref: "cards",
      type: Schema.Types.ObjectId,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
      immutable: true,
    },
    completed_at: {
      type: Date,
      immutable: true,
    },
    status: {
      type: String,
      default: "active",
      enum: ["active", "done", "canceled"],
    },
    initial_bet: {
      type: Number,
      required: true,
    },
    min_bet: {
      type: Number,
      required: true,
    },
    max_bet: {
      type: Number,
      required: true,
    },
    last_bet: {
      type: Number,
      default: null,
    },
    max_duration_auc: {
      type: Date,
      required: true,
    },
    min_extension_time: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = model("Lot", schema);
