import Monitor from "../models/Monitor.js";
import axios from "axios";
import PingLog from "../models/PingLog.js";
import User from "../models/User.js";
import { sendEmail } from "../libs/sendEmails.js";

// Pinging a URL
export const pingUrl = async (req, res) => {
  const { id } = req.params;
  const monitor = await Monitor.findById(id);
  if (!monitor) {
    return res.status(404).json({ error: "Monitor not found" });
  }
  try {
    const start = Date.now();
    const response = await axios.get(monitor.url, {
      headers: {
        "User-Agent": "UptimePulseBot/1.0",
        Accept: "application/json",
      },
      timeout: 5000,
    });
    const responseTime = Date.now() - start;
    let status = "up";
    if (responseTime > 2000) {
      status = "slow";
    }
    await PingLog.create({
      monitorId: monitor._id,
      responseTime,
      status,
      checkedAt: new Date(),
    });
    return res.status(200).json({ status, responseTime });
  } catch (error) {
    await PingLog.create({
      monitorId: monitor._id,
      responseTime: 0,
      status: "down",
      checkedAt: new Date(),
    });
    const user = await User.findById(monitor.user);
    if (user) {
      await sendEmail(
        user.email,
        `🚨 Your site is DOWN: ${monitor.url}`,
        `UptimePulse detected that your site ${
          monitor.url
        } is down as of ${new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}.`
      );
    }
    return res.status(405).json({ status: "down", error: error.message });
  }
};

// Getting all pinned logs of a URL
export const getPingLogs = async (req, res) => {
  const { monitorId } = req.params;
  try {
    const logs = await PingLog.find({ monitorId: monitorId })
      .sort({ checkedAt: -1 })
      .limit(20);
    return res.status(200).json({ logs });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch ping logs" });
  }
};
