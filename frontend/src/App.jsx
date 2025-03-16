import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";

const API_BASE = "https://rond-robin-coupon.onrender.com";

function ClaimCoupon() {
  const [coupon, setCoupon] = useState("");
  const navigate = useNavigate(); // For navigation

  const claimCoupon = async () => {
    try {
      const res = await axios.post(`${API_BASE}/coupons/claim`);
      setCoupon(res.data.message);
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Error claiming coupon");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Claim Your Coupon</h1>
      
      <button onClick={claimCoupon} className="bg-blue-500 text-white px-4 py-2 mt-4">
        Claim Coupon
      </button>
      
      {coupon && <p className="mt-4">{coupon}</p>}

      {/* Admin Panel Button */}
      <button onClick={() => navigate("/admin")} className="bg-gray-700 text-white px-4 py-2 mt-4">
        Admin Panel
      </button>

      {/* Admin Credentials Note */}
      <div className="mt-4 text-center text-gray-600">
        <p><strong>Admin Credentials:</strong></p>
        <p><strong>Username:</strong> admin</p>
        <p><strong>Password:</strong> admin123</p>
      </div>

      <ToastContainer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClaimCoupon />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
