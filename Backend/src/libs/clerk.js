import User from "../models/User.js";

export const getOrCreateUser = async (clerkUser) => {
  let user = await User.findOne({ clerkId: clerkUser.id });
  const email = clerkUser.emailAddresses[0]?.emailAddress;
  if (!user) {
    user = await User.create({
      clerkId: clerkUser.id,
      name: `${clerkUser.firstName} ${clerkUser.lastName}`,
      email,
    });
  }
  return user;
};
