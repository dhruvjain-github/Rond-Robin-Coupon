const Coupon = require("../models/Coupon");

exports.claimCoupon = async (req, res) => {
  const ip = req.ip;
  const existingClaim = await Coupon.findOne({ claimedBy: ip });

  if (existingClaim) {
    return res.status(400).json({ message: `You’ve already claimed a coupon. Try again later.` });
  }

  const coupon = await Coupon.findOne({ isClaimed: false });
  if (!coupon) return res.status(400).json({ message: "No coupons available." });

  coupon.isClaimed = true;
  coupon.claimedBy = ip;
  coupon.claimDate = new Date();
  await coupon.save();

  res.json({ message: `Coupon ${coupon.code} claimed!` });
};

exports.getCoupons = async (req, res) => {
  const coupons = await Coupon.find();
  res.json(coupons);
};
