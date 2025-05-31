import User from "../models/User.js";

// Clerk user sync to DataBase
export const getOrCreateUser = async (clerkUser) => {
  const clerkId = clerkUser.id;
  const email = clerkUser.emailAddresses?.[0]?.emailAddress || null;
  if (!email) {
    console.error("❌ Missing email from Clerk user:", clerkUser);
    return null;
  }
  let user = await User.findOne({
    $or: [{ clerkId }, { email }],
  });
  if (!user) {
    user = await User.create({
      clerkId,
      name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
      email,
    });
  } else if (!user.clerkId) {
    user.clerkId = clerkId;
  }
  await user.save();
  return user;
};
