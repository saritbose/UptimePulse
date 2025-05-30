import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
      sparse: true,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    plan: {
      type: String,
      enum: ["free", "pro", "team"],
      default: "free",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
