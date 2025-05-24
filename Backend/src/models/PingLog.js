import mongoose from "mongoose";

const pingLogSchema = new mongoose.Schema({
  monitor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Monitor",
  },
  responseTime: {
    type: Number,
  },
  statusCode: {
    type: Number,
  },
  success: {
    type: Boolean,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("PingLog", pingLogSchema);
