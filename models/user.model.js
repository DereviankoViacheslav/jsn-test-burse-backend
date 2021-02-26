const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    password: {
      type: String,
      maxlength: 64,
      required: true,
      select: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    first_name: {
      type: String,
      maxlength: 32,
      default: "",
    },
    last_name: {
      type: String,
      maxlength: 32,
      default: "",
    },
    registration_at: {
      type: Date,
      default: Date.now,
      immutable: true,
    },
    last_login_at: {
      type: Date,
      default: Date.now,
    },
    rate: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      default: "basic",
      enum: ["basic", "supervisor", "admin"],
    },
  },
  { versionKey: false }
);

module.exports = model("User", schema);
