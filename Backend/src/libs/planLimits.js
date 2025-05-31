export const PLAN_LIMITS = {
  free: {
    maxMonitors: 3,
    checkInterval: 5 * 60 * 1000,
  },
  pro: {
    maxMonitors: 25,
    checkInterval: 60 * 1000,
  },
  team: {
    maxMonitors: Infinity,
    checkInterval: 60 * 1000,
  },
};
