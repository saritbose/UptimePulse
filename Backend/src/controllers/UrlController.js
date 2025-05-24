import Monitor from "../models/Monitor.js";
import User from "../models/User.js";

export const getUrl = async (req, res) => {};

export const getUrls = async (req, res) => {};

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

export const editUrl = async (req, res) => {};

export const deleteUrl = async (req, res) => {};
