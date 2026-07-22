const mongoose = require("mongoose");

const periodSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    mood: {
      type: String,
      enum: ["Happy", "Sad", "Angry", "Stressed", "Calm", "Emotional"],
    },

    symptoms: [
      {
        type: String,
      },
    ],

    flow: {
      type: String,
      enum: ["Light", "Medium", "Heavy"],
    },

    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Period", periodSchema);