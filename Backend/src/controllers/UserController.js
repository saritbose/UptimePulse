import { clerkClient } from "@clerk/clerk-sdk-node";
import { getOrCreateUser } from "../libs/clerk.js";

export const authUser = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const clerkUser = await clerkClient.users.getUser(userId);
    const user = await getOrCreateUser(clerkUser); // Using Clerk to add user to DataBase
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: "Failed to sync user" });
  }
};
