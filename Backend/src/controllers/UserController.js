import { clerkClient } from "@clerk/clerk-sdk-node";
import { getOrCreateUser } from "../libs/clerk.js";

export const authUser = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const clerkUser = await clerkClient.users.getUser(userId);
    console.log(userId, clerkUser);

    const user = await getOrCreateUser(clerkUser);
    console.log("Backend user data:", user);

    res.status(200).json({ user });
  } catch (error) {
    console.error("Error syncing user:", error);
    res.status(500).json({ error: "Failed to sync user" });
  }
};
