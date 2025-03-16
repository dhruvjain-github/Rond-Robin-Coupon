const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const Coupon = require("../models/Coupon");

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Secure Admin Login
exports.loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("📥 Received Login Request:", { username, password });

    const admin = await Admin.findOne({ username });
    console.log("✅ Admin Found:", admin);

    if (!admin || password !== admin.password) {
      console.log("❌ Invalid Credentials!");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(admin._id);
    console.log("✅ Token Generated:", token);

    res.json({ token });
  } catch (error) {
    console.error("❌ Error in loginAdmin:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



// Middleware to Protect Admin Routes
exports.protectAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token", error: error.message });
  }
};

// Fetch All Coupons
exports.getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ message: "Error fetching coupons", error: error.message });
  }
};

// Add New Coupon
exports.addCoupon = async (req, res) => {
  try {
    const { code, isClaimed = false } = req.body;
    const newCoupon = new Coupon({ code, isClaimed });
    await newCoupon.save();
    res.status(201).json({ message: "Coupon added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding coupon", error: error.message });
  }
};

// Delete Coupon
exports.deleteCoupon = async (req, res) => {
  try {
    const { id } = req.params;
    await Coupon.findByIdAndDelete(id);
    res.json({ message: "Coupon deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting coupon", error: error.message });
  }
};
