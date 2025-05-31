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
      default: 5 * 60 * 1000,
    },
    status: {
      type: String,
      enum: ["up", "down"],
      default: "up",
    },
    lastChecked: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Monitor", monitorSchema);
