import stripe from "../libs/stripe.js";
import User from "../models/User.js";

// Stripe Backend Logic
export const createCheckoutSession = async (req, res) => {
  const { email, plan } = req.body;
  const priceMap = {
    pro: "price_1RULBuSENKykVPzB7PxGn7Nf",
    team: "price_1RULCJSENKykVPzBVpNci7il",
  };
  if (!priceMap[plan]) {
    return res.status(404).json({ success: false, error: "Invalid plan" });
  }
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price: priceMap[plan],
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url:
        "https://uptimepulse.vercel.app/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://uptimepulse.vercel.app/cancel",
    });
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.plan = plan;
    await user.save();
    return res.status(200).json({ url: session.url });
  } catch (error) {
    return res
      .status(502)
      .status(500)
      .json({ error: "Stripe checkout failed" });
  }
};
