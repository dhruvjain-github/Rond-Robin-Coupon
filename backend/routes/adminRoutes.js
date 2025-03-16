const express = require("express");
const {
  loginAdmin,
  addCoupon,
  deleteCoupon,
  getCoupons,
  protectAdmin,
} = require("../controllers/adminController");

const router = express.Router();

router.post("/login", loginAdmin);
router.get("/coupons", protectAdmin, getCoupons);
router.post("/coupon", protectAdmin, addCoupon);
router.delete("/coupon/:id", protectAdmin, deleteCoupon);

module.exports = router;