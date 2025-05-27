import mongoose from "mongoose";

const pingLogSchema = new mongoose.Schema({
  monitorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Monitor",
    required: true,
  },
  responseTime: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["up", "slow", "down"],
  },
  checkedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("PingLog", pingLogSchema);
