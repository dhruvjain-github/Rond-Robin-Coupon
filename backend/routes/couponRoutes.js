const express = require("express");
const { claimCoupon, getCoupons } = require("../controllers/couponController");

const router = express.Router();

router.get("/", getCoupons);
router.post("/claim", claimCoupon);

module.exports = router;