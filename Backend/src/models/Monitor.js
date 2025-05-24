import mongoose from "mongoose";

const monitorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    url: {
      type: String,
      required: true,
    },
    interval: {
      type: Number,
      default: 300,
    },
    status: {
      type: String,
      enum: ["up", "down"],
      default: "up",
    },
    lastChecked: {
      type: Date,
    },
    isPaused: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Monitor", monitorSchema);
