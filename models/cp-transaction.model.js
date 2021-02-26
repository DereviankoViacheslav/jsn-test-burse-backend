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
    transaction_type: {
      transaction_name: {
        type: String,
        enum: ["Lot", "Payment system", "User"],
      },
      source_id: {
        type: Schema.Types.ObjectId,
      },
    },
  },
  { versionKey: false }
);

module.exports = model("CPTransaction", schema);
