import Monitor from "../models/Monitor.js";
import User from "../models/User.js";
import { PLAN_LIMITS } from "../libs/planLimits.js";

export const getUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const selectedMonitor = await Monitor.findById(id);
    res.json({ selectedMonitor });
  } catch (error) {
    res.json({ success: false, message: "Url not selected" });
  }
};

export const getUrls = async (req, res) => {
  try {
    const clerkId = req.auth.userId;
    const userId = await User.findOne({ clerkId: clerkId });
    if (!userId) {
      return res.json({ success: false, message: "User not found" });
    }
    const monitor = await Monitor.find({ user: userId._id });
    return res.json({ monitor, success: true });
  } catch (error) {
    console.log("No available urls");
  }
};

export const addUrl = async (req, res) => {
  const { userId, url } = req.body;
  try {
    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return res.json({ error: "User not found" });
    }
    const currentCount = await Monitor.countDocuments({ user: user._id });
    const limit = PLAN_LIMITS[user.plan]?.maxMonitors || 3;
    if (currentCount >= limit) {
      return res.status(403).json({
        error: `❌ Monitor limit reached for ${user.plan} plan. Upgrade to add more.`,
      });
    }
    const isUrlPresent = await Monitor.findOne({ url: url, user: user._id });
    if (isUrlPresent) {
      return res.json({ success: false, message: "URL already added" });
    }
    await Monitor.create({
      user: user._id,
      url: url,
      interval: PLAN_LIMITS[user.plan]?.checkInterval || 5 * 60 * 1000,
      lastChecked: new Date(0),
    });
    return res.json({ success: true, message: "Url Added" });
  } catch (error) {
    console.error("Error adding URL:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const editUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const { url } = req.body;
    await Monitor.findByIdAndUpdate(id, { url });
    res.json({ success: true, message: "Successfully updated" });
  } catch (error) {
    res.json({ success: true, message: "Not updated" });
  }
};

export const deleteUrl = async (req, res) => {
  try {
    const { id } = req.params;
    await Monitor.findByIdAndDelete(id);
    res.json({ success: true, message: "Url deleted" });
  } catch (error) {
    res.json({ success: false, message: "Url not deleted" });
  }
};

export const getMonitorUsage = async (req, res) => {
  try {
    const clerkId = req.auth.userId;
    const user = await User.findOne({ clerkId: clerkId });
    const monitorCount = await Monitor.countDocuments({ user: user._id });
    const totalAllowed = PLAN_LIMITS[user.plan]?.maxMonitors;
    console.log(totalAllowed);

    res.json({
      used: monitorCount,
      total: totalAllowed,
    });
  } catch (error) {
    console.error("Error getting monitor usage:", error);
    res.status(500).json({ error: "Failed to fetch usage" });
  }
};
