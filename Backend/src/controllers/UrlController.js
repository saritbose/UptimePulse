import Monitor from "../models/Monitor.js";
import User from "../models/User.js";

export const getUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const selectedMonitor = await Monitor.findById(id);
    return res.json({ selectedMonitor });
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
    const urls = await Monitor.find({ user: userId._id });
    return res.json({ urls });
  } catch (error) {
    console.log("No available urls");
  }
};

export const addUrl = async (req, res) => {
  const { userId, url } = req.body;
  const user = await User.findOne({ clerkId: userId });
  const isUrlPresent = await Monitor.findOne({ url: url });
  if (!isUrlPresent) {
    await Monitor.create({
      user: user,
      url: url,
    });
    return res.json({ success: true, message: "Url Added" });
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
