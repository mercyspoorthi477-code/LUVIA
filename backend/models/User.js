const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
    },

    lastPeriodDate: {
      type: Date,
    },

    cycleLength: {
      type: Number,
      default: 28,
    },

    periodLength: {
      type: Number,
      default: 5,
    },

    profileImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);