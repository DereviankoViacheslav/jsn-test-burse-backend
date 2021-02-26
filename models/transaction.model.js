const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    user_id: {
      ref: "users",
      type: Schema.Types.ObjectId,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
      immutable: true,
    },
    payment_system: {
      type: String,
      enum: ["Stripe", "PayPal"],
    },
  },
  { versionKey: false }
);

module.exports = model("Transaction", schema);
