const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    // Receiver can be user or caregiver
    receiverType: {
      type: String,
      enum: ["user", "caregiver"],
      default: "user",
    },

    // User notification
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // Caregiver notification
    caregiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Caregiver",
    },

    title: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: [
        "period",
        "mood",
        "health",
        "emergency",
        "general",
      ],
      default: "general",
    },

    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model(
  "Notification",
  notificationSchema
);