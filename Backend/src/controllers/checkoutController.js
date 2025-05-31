import stripe from "../libs/stripe.js";
import User from "../models/User.js";

export const createCheckoutSession = async (req, res) => {
  const { email, plan } = req.body;
  const priceMap = {
    pro: "price_1RULBuSENKykVPzB7PxGn7Nf",
    team: "price_1RULCJSENKykVPzBVpNci7il",
  };
  if (!priceMap[plan]) {
    return res.json({ success: false, error: "Invalid plan" });
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
        "http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:5173/cancel",
    });
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User not found" });
    }
    user.plan = plan;
    await user.save();
    res.json({ url: session.url });
  } catch (error) {
    console.error("❌ Stripe error:", error);
    res.status(500).json({ error: "Stripe checkout failed" });
  }
};
