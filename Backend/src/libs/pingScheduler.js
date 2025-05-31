import Monitor from "../models/Monitor.js";
import axios from "axios";

// Scheduling a Ping based on Plans
export const startPingScheduler = () => {
  setInterval(async () => {
    const now = new Date();
    const monitors = await Monitor.find({});
    for (const monitor of monitors) {
      const lastPing = monitor.lastChecked || new Date(0);
      const elapsed = now - new Date(lastPing);
      if (elapsed >= monitor.interval) {
        try {
          await axios.get(`http://localhost:3000/api/ping/${monitor._id}`);
          monitor.lastChecked = now;
          await monitor.save();
        } catch (err) {
          console.error(`❌ Ping failed for ${monitor.url}:`, err.message);
        }
      }
    }
  }, 60 * 1000);
};
