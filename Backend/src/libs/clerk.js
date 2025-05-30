import User from "../models/User.js";

export const getOrCreateUser = async (clerkUser) => {
  const clerkId = clerkUser.id;
  const email = clerkUser.emailAddresses?.[0]?.emailAddress || null;

  console.log(clerkId, email);

  if (!email) {
    console.error("❌ Missing email from Clerk user:", clerkUser);
    return null;
  }

  let user = await User.findOne({
    $or: [{ clerkId }, { email }],
  });
  console.log("Clerk used data: ", user);

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
