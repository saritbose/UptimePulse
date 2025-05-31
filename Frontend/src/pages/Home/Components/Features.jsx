import { Activity, Globe, LineChart, Mail, Timer, Users } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <>
      <div className="text-4xl font-semibold text-center">
        Features That Scale
      </div>
      <div className="flex flex-col items-center gap-10 my-15 py-10 overflow-hidden">
        <div className="flex gap-10">
          <div className=" border-l border-t border-neutral-400 shadow-lg shadow-neutral-300 p-5 w-1/2 md:w-70 h-45 transform transition-transform duration-300 hover:scale-95">
            <Activity className=" mb-3" />
            <div className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
              Real-Time Status
            </div>
            <p className="text-neutral-400 text-xs ">
              Live “Up/Down” badges with last-checked timestamp.
            </p>
          </div>
          <div className=" border-l border-t border-neutral-400 shadow-lg shadow-neutral-300 p-5 w-1/2 md:w-70 h-45 transform transition-transform duration-300 hover:scale-95">
            <Timer className=" mb-3" />
            <div className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
              Custom Intervals
            </div>
            <p className="text-neutral-400 text-xs ">
              Choose checks from 1 to 60 minutes to fit your needs.
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          <div className=" border-l border-t border-neutral-400 shadow-lg shadow-neutral-300 p-5 w-1/2 md:w-70 h-45 transform transition-transform duration-300 hover:scale-95">
            <Globe className=" mb-3" />
            <div className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
              Public Status Pages
            </div>
            <p className="text-neutral-400 text-xs ">
              Branded status page (e.g., /status/yoursite) you can share.
            </p>
          </div>

          <div className=" border-l border-t border-neutral-400 shadow-lg shadow-neutral-300 p-5 w-1/2 md:w-70 h-45 transform transition-transform duration-300 hover:scale-95">
            <Mail className=" mb-3" />
            <div className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
              Email & Webhook Alerts
            </div>
            <p className="text-neutral-400 text-xs ">
              Instant notifications via email, Slack, or custom webhooks.
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          <div className=" border-l border-t border-neutral-400 shadow-lg shadow-neutral-300 p-5 w-1/2 md:w-70 h-45 transform transition-transform duration-300 hover:scale-95">
            <LineChart className=" mb-3" />
            <div className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
              Uptime History Charts
            </div>
            <p className="text-neutral-400 text-xs ">
              Visualize uptime % and response times over any date range.
            </p>
          </div>
          <div className=" border-l border-t border-neutral-400 shadow-lg shadow-neutral-300 p-5 w-1/2 md:w-70 h-45 transform transition-transform duration-300 hover:scale-95">
            <Users className=" mb-3" />
            <div className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
              Team Collaboration
            </div>
            <p className="text-neutral-400 text-xs ">
              Invite teammates, assign roles, and manage shared monitors.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
